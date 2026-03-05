(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFile");
            this.set_titletext("첨부파일");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,116);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILE_ID","type" : "STRING","size" : "256"},{"id" : "FILE_SEQ","type" : "STRING","size" : "256"},{"id" : "SAVE_FILE_NM","type" : "STRING","size" : "256"},{"id" : "OTXT_FILE_NM","type" : "STRING","size" : "256"},{"id" : "FILE_SIZE","type" : "STRING","size" : "256"},{"id" : "FILE_TYPE","type" : "STRING","size" : "256"},{"id" : "FILE_PATH_NM","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDownload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "INPT_EMP_NO","type" : "STRING","size" : "32"},{"id" : "OTXT_FILE_NM","type" : "STRING","size" : "32"},{"id" : "FILE_SIZE","type" : "INT","size" : "4"},{"id" : "INPT_IP","type" : "STRING","size" : "32"},{"id" : "FILE_ID","type" : "STRING","size" : "32"},{"id" : "FILE_TYPE","type" : "STRING","size" : "32"},{"id" : "INPT_DTTM","type" : "DATETIME","size" : "17"},{"id" : "SAVE_FILE_NM","type" : "STRING","size" : "32"},{"id" : "FILE_SEQ","type" : "INT","size" : "4"},{"id" : "FILE_PATH_NM","type" : "STRING","size" : "32"},{"id" : "INPT_ID","type" : "STRING","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            obj.getSetter("onclose").set("fdgFile_onclose");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::downloadFile.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFileDel",null,"5","100","48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile",null,"5","100","48","108",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","0","btnFile:10",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_Attatch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"545\"/><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,116,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFile.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmFile.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/02/13
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/02/13			TOBESOFT					최초생성
        *******************************************************************************
        */

        /********************************************************************************
         * Form 변수선언 영역
         ********************************************************************************/
        this.fvOpenType = ""; //read, add, update, searchUpdate(일정검색)
        this.fvCallback = "fnFileCallBack"; //파일 처리 후 부모화면에서 콜백 받을 함수 명
        this.fvSvcType = ""; //업무 구분


        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //파일조회
        this.fnTranSearchFile = function()
        {
        	var strSvcId    = "searchCommonFileList";
        	var strSvcUrl   = "searchCommonFileList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsFileUpload=dsFile dsFileDownload=dsFile";
        	var strArg      = "svcType="+this.fvSvcType;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        //파일업로드
        this.fnTranFileUpload = function()
        {
        	if (this.fvOpenType == "add") {
        		this.futFile.setPostData("FILE_ID", "");
        		if(!this.gfnIsNull(this.parent.fileIdGubunCol))
        		{
        			this.futFile.setPostData(this.parent.fileIdGubunCol, this.parent.fileIdGubunVal);
        		}
        		this.futFile.setPostData("SVC_TYPE", this.fvSvcType);
        	} else {
        		var fileId = this.dsCond.getColumn(0, "FILE_ID");
        		if (this.gfnIsNull(fileId)) fileId = "";
        		this.futFile.setPostData("FILE_ID", fileId);
        		this.futFile.setPostData("SVC_TYPE", this.fvSvcType);
        	}

        	//DB에 파일정보 저장.(sample_file)
        	this.futFile.upload("svcUrl::uploadCommonFile.do");
        };

        //파일 삭제
        this.fnTranDeleteFile = function()
        {
        	var strSvcId    = "deleteCommonFile";
        	var strSvcUrl   = "deleteCommonFile.do";
        	var inData      = "dsUpload=dsFileUpload:U";
        	var outData     = "";
        	var strArg      = "svcType="+this.fvSvcType;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //트랜잭션 콜백
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "searchCommonFileList":
        			this.fnSetFileCnt();
        			break;
        		case "deleteCommonFile":
        			//파일삭제 후 추가될 파일이 있다면 파일 업로드 해야함.
        			if (this.futFile.filelist.length > 0) {
        				this.fnTranFileUpload();
        			} else {
        				//callback함수 호출
        				var sCnt = this.dsFileUpload.rowcount;
        				this.fnCallFileCallback("deleteFile", "", "", sCnt);
        				return;
        			}
        			break;
        		default:
        			break;
        	}
        };

        //메시지 콜백
        this.fnMsgCallback = function(sMsgId, sRtn)
        {
        	if (this.gfnIsNull(sRtn) || sRtn == "false" || sRtn == false){
        		return;
        	}

        	switch(sMsgId) {
        		case "deleteFileAll":
        			this.futFile.clearFileList();
        			this.dsFileUpload.deleteAll();
        			break;
        		case "deleteFile" :
        			var nRow = this.dsFileUpload.rowposition;
        			var sFileNm = this.dsFileUpload.getColumn(nRow, "OTXT_FILE_NM");
        			this.futFile.removeFile(sFileNm);
        			this.dsFileUpload.deleteRow(nRow);
        			break;
        		default:
        			break;
        	}
        }


        //파일 콜백
        this.fnCallFileCallback = function(svcId, nErrCode, sErrMsg, sRtn)
        {
        	if (this.gfnIsNotNull(this.fvCallback))	{
        		this.parent.parent.lookupFunc(this.fvCallback).call(svcId, nErrCode, sErrMsg, this.parent.name, sRtn);
        	}
        }

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/
        //파일정보 설정
        this.fnSetFileConfig = function(objConfig)
        {
        	if(this.gfnIsNull(objConfig))  return;

        	if(this.gfnIsNotNull(objConfig["openType"])) 		this.fvOpenType = objConfig["openType"];
        	if(this.gfnIsNotNull(objConfig["callbackfunc"])) 	this.fvCallback = objConfig["callbackfunc"];
        	if(this.gfnIsNotNull(objConfig["svcType"])) 		this.fvSvcType 	= objConfig["svcType"];

        	// read = 파일 다운로드만 가능 / add,update = 파일 추가,삭제 가능 / updown = 파일 추가,삭제,다운로드 가능
        	if (this.fvOpenType == "read") {
        		this.btnFile.set_visible(false);
        		this.btnFileDel.set_visible(false);
        		this.grdFile.set_top(0);
        		this.grdFile.set_binddataset("dsFileDownload");
        		this.grdFile.setCellProperty("body", 1, "text", "다운로드");
        	} else {
        		this.btnFile.set_visible(true);
        		this.btnFileDel.set_visible(true);
        		this.grdFile.set_top("btnFile:5px");
        		this.grdFile.set_binddataset("dsFileUpload");
        		this.grdFile.setCellProperty("body", 1, "text", "삭제");
        	}
        };


        //파일 사용에 필요한 정보 셋팅
        this.fnSetFileInfo = function(objDs)
        {
        	if(this.gfnIsNull(objDs)) return;
        	this.dsCond.copyData(objDs);
        }



        //파일 업데이트 여부 체크
        this.fnCheckIsUpdated = function()
        {
        	if (this.gfnDsIsUpdated(this.dsFileUpload)) {
        		return true;
        	}
        	return false;
        }

        //파일건수 셋팅(부모 함수 호출)
        this.fnSetFileCnt = function()
        {
        	var nCnt = this.fnGetFileCnt();
        	// 부모 화면에 fnSetFileCnt 함수가 있을 경우에 호출
        	if ( !this.gfnIsNull(this.parent.parent.lookupFunc("fnSetFileCnt")) )
        	{
        		this.parent.parent.lookupFunc("fnSetFileCnt").call(this.parent.name, nCnt);
        	}

        	this.fnSetParentResize();
        }


        //파일 건수 return
        this.fnGetFileCnt = function()
        {
        	var objDs = this.fvOpenType == "read" ? this.dsFileDownload : this.dsFileUpload;
        	return objDs.getRowCount();
        }


        //파일세팅
        this.fnSetFile = function (aVFiles)
        {
        	var nLen = aVFiles.length;

        	var sFileId = "";
        	var oFile = null;

        	for (var i = 0; i < nLen; i++) {
        		sFileId = aVFiles[i].filename;
        		oFile   = aVFiles[i];

        		//중복확인
        		if (this.futFile.existFile(oFile)) {
        			sFileId += "_" + this.dsFileUpload.getRowCount();
        		}
        		this.futFile.addFile(sFileId, oFile);
        		var nRow = this.dsFileUpload.addRow();
        		this.dsFileUpload.setColumn(nRow, "OTXT_FILE_NM", sFileId);
        	}

        	// 부모 화면에 fnFileInit 함수가 있을 경우에 호출
        	if ( !this.gfnIsNull(this.parent.parent.lookupFunc("fnFileInit")) )
        	{
        		this.parent.parent.lookupFunc("fnFileInit").call(this.dsFileUpload.rowcount);
        	}
        };


        //첨부파일 1건 삭제
        this.fnFileDelete = function(nRow)
        {
        	if (this.dsFileUpload.getRowCount() > 0) {
        		this.gfnAlert("confirm.before.filedelete", [], "deleteFile", "fnMsgCallback");
        	}
        };

        //첨부파일 전체 삭제
        this.fnFileDeleteAll = function()
        {
        	if (this.dsFileUpload.getRowCount() > 0) {
        		this.gfnAlert("confirm.before.filedeleteall", [], "deleteFileAll", "fnMsgCallback");
        	}
        };


        //첨부파일 다운로드
        this.fnFileDownload = function(nRow)
        {
        	var sFileId 	= this.dsFileDownload.getColumn(nRow, "FILE_ID");
        	var sFileNm 	= this.dsFileDownload.getColumn(nRow, "OTXT_FILE_NM");
        	var sSaveFileNm = this.dsFileDownload.getColumn(nRow, "SAVE_FILE_NM");

        	if (!this.gfnIsNull(sFileId)) {
        		this.fdtFile.setPostData("saveFileName"	, sSaveFileNm);
        		this.fdtFile.setPostData("orgFileName"	, sFileNm);

        		this.fdtFile.set_downloadfilename(sFileNm)
        		this.fdtFile.download("svcUrl::downloadCommonFile.do");
        	} else {
        		this.gfnAlert("msg.err.nofile");
        		return;
        	}
        };


        //파일 저장
        this.fnFileUpload = function()
        {
        	//파일항목이 수정되지 않은 경우 return
        	if (!this.gfnDsIsUpdated(this.dsFileUpload)) {
        		//callback함수 호출
        		this.fnCallFileCallback("saveFile", 1, "No Change Data");
        		return;
        	}

        	//파일 add,update 구분
        	if (this.fvOpenType == "add") {
        		//파일 저장 트랜잭션 호출
         		this.fnTranFileUpload();
        	} else if (this.fvOpenType == "update") {
        		var nCnt = this.dsFileUpload.getDeletedRowCount();
        		if (nCnt > 0) {
        			//삭제된 항목이 있을 경우 삭제 트랜잭션 호출
        			this.fnTranDeleteFile();
        		} else if (this.futFile.filelist.length > 0) {
        			//파일 오브젝트에 파일이 있는 경우 파일저장 트랜잭션 호출
        			this.fnTranFileUpload();
        		}
        	}
        };

        //파일 업로드 후 데이터셋 처리
        this.fnSetUploadDataset = function(nErrorCode, sErrorMsg, arrDataset)
        {
        	//파일 업로드 실패
        	if (nErrorCode < 0) {
        		this.gfnAlert("msg.server.error.msg" ,sErrorMsg);
        		return;
        	}

        	//FileId 부모 화면에 전달
        	var sFileId = arrDataset[0].getColumn(0,"FILE_ID");
        	this.fnCallFileCallback("saveFile", nErrorCode, sErrorMsg, sFileId);
        };

        // 파일 추가, 삭제 후 parent file div 사이즈 조절
        this.fnSetParentResize = function()
        {
        	// 부모 화면에 fnFileInit 함수가 있을 경우에 호출
        	if ( !this.gfnIsNull(this.parent.parent.lookupFunc("fnFileInit")) )
        	{
        		this.parent.parent.lookupFunc("fnFileInit").call(this.dsFileUpload.rowcount);
        	}
        };

        /********************************************************************************
         * Component Event 영역
         ********************************************************************************/

        //첨부파일 선택
        this.btnFile_onclick = function(obj,e)
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        //filedialog 닫기
        this.fdgFile_onclose = function(obj,e)
        {
        	if (e.reason == 3) {
        		//멀티업로드일경우
        		this.fnSetFile(e.virtualfiles);
        	}
        };


        //첨부파일 다운로드, 삭제
        this.grdFile_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	if (e.cell == 1) {
        		//다운로드, 삭제
        		if (this.fvOpenType == "read") {
        			this.fnFileDownload(nRow);
        		} else {
        			this.fnFileDelete(nRow);
        		}
        	} else if (e.cell == 0) {
        		//updown일 경우 첫번째 셀 클릭 시 파일 다운로드.
        		if (this.fvOpenType == "updown") {
        			this.fnFileDownload(nRow);
        		}
        	}
        };


        //파일 전체 삭제
        this.btnFileDel_onclick = function(obj,e)
        {
        	this.fnFileDeleteAll();
        };


        //파일 업로드 에러
        this.futFile_onerror = function(obj,e)
        {
        	this.fnSetUploadDataset(e.errorcode, e.errormsg, e.datasets);
        };

        //파일 업로드 성공
        this.futFile_onsuccess = function(obj,e)
        {
        	this.futFile.clearFileList();
        	this.dsFileUpload.clearData();

        	this.fnSetUploadDataset(e.errorcode, e.errormsg, e.datasets);
        };


        //데이터 추가, 삭제될 때 건수 체크
        this.dsFileUpload_onrowsetchanged = function(obj,e)
        {
        	//파일 데이터셋이 변경될 때 건수 return
        	this.fnSetFileCnt();
        };


        this.grdFile_ondrop = function(obj,e)
        {
        	this.fnSetFile(e.filelist);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFileDel.addEventHandler("onclick",this.btnFileDel_onclick,this);
            this.btnFile.addEventHandler("onclick",this.btnFile_onclick,this);
            this.grdFile.addEventHandler("oncellclick",this.grdFile_oncellclick,this);
            this.grdFile.addEventHandler("ondrop",this.grdFile_ondrop,this);
            this.dsFileUpload.addEventHandler("onrowsetchanged",this.dsFileUpload_onrowsetchanged,this);
            this.dsFileDownload.addEventHandler("oncolumnchanged",this.dsFile_oncolumnchanged,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
        };
        this.loadIncludeScript("cmmFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
