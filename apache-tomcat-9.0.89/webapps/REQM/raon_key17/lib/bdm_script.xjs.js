//XJS=bdm_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         * @fileoverview bdm_script (비영리법인민원)
         * @author 서광명
         */

        /**
         * @description 시도코드전역선언
         */
        this.bdmv_cddcCd = this.smfGetCddcCode();

        /**
         * @description 법인코드전역선언
         */
        this.bdmv_corpCd = this.smfGetCorpCd();
        //this.bdmv_corpCd = "BIGI000001";

        /**
         * @description 세션 userinfo
         * @param : key  - key
         */
        this.bdmGetUserInfo = function (key)
        {
        	// this.smfSetSessionValue("cddcCd","K100000001");
        	// this.smfSetSessionValue("corpCd","BIGI000001");

        	return this.smfNvl(this.smfGetSessionValue(key), "");
        }

        /**
         * @description 로그인확인
         */
        this.bdmfChkLogin = function() {
        	if(this.bdmGetUserInfo("corpCd").length==0) {
        		this.bdmAlert("PA049", [], function() { // 사용자 로그인이 필요합니다.
        			var sMainUrl =  this.getOwnerFrame().form.fv_mainformUrl;
        			var sUrl = "pa_bdm_cmm_ua::bdm_cmmua00_m00.xfdl";

        			var params = {resendUrl: sMainUrl};
        			this.smfSetWorkPage(sUrl, params);
        		});
        	}
        }

        /**
         * @description readOnly 세팅
         * @param : objComp  - 컴포넌트
         * @param : nLvl 	 - component depth
         * @param : oOwner   - Composite 컴포넌트(form, div, tab, tabpage)
         */
        this.bdmOnReadOnly = function(objComp, nLvl, oOwner){
        	if((objComp instanceof nexacro.Edit)
        	|| (objComp instanceof nexacro.MaskEdit)
        	|| (objComp instanceof nexacro.Combo)
        	|| (objComp instanceof nexacro.TextArea)
        	|| (objComp instanceof nexacro.Spin)
        	|| (objComp instanceof nexacro.Calendar)
        	|| (objComp instanceof nexacro.Radio)
        	|| (objComp instanceof nexacro.CheckBox))
        	{
        		if(objComp.id.indexOf("Addr") !== -1 || objComp.id.indexOf("File") !== -1  || objComp.id.indexOf("NoRd") !== -1 ) return false;

        		objComp.set_readonly(true);
        	}
        	else if((objComp instanceof nexacro.Button))
        	{
        		if(objComp.id.indexOf("Down") !== -1) return false;
        		objComp.set_enable(false)
        	}
        }

        /**
         * @description readOnly 세팅 해제
         * @param : objComp  - 컴포넌트
         * @param : nLvl 	 - component depth
         * @param : oOwner   - Composite 컴포넌트(form, div, tab, tabpage)
         */
        this.bdmOffReadOnly = function(objComp, nLvl, oOwner){
        	if((objComp instanceof nexacro.Edit)
        	|| (objComp instanceof nexacro.MaskEdit)
        	|| (objComp instanceof nexacro.Combo)
        	|| (objComp instanceof nexacro.TextArea)
        	|| (objComp instanceof nexacro.Spin)
        	|| (objComp instanceof nexacro.Calendar)
        	|| (objComp instanceof nexacro.Radio)
        	|| (objComp instanceof nexacro.CheckBox))
        	{
        		if(objComp.id.indexOf("Addr") !== -1 || objComp.id.indexOf("File") !== -1 || objComp.id.indexOf("NoRd") !== -1 ) return false;

        		objComp.set_readonly(false);
        	}
        	else if((objComp instanceof nexacro.Button))
        	{
        		if(objComp.id.indexOf("Down") !== -1) return false;
        		objComp.set_enable(true)
        	}
        }

        /**
         * @description 버튼 컨트롤
         * @param : thisComp  - 컴포넌트
         * @param : state  	  - 진행단계(1 :신규 또는 임시저장, 2: 제출, 3:보완)
         */
        this.bdmBtnVisible = function (thisComp, state){

        	if(state == "1"){
        		thisComp.btnTmprSave.set_visible(true);
        		thisComp.btnApply.set_visible(true);
        		thisComp.btnWithdrawal.set_visible(false);
        		thisComp.btnSpmSbmsn.set_visible(false);
        	}else if(state == "2"){
        		thisComp.btnTmprSave.set_visible(false);
        		thisComp.btnApply.set_visible(false);
        		thisComp.btnWithdrawal.set_visible(true);
        		thisComp.btnSpmSbmsn.set_visible(false);
        	}else if(state == "3"){
        		thisComp.btnTmprSave.set_visible(false);
        		thisComp.btnApply.set_visible(false);
        		thisComp.btnWithdrawal.set_visible(true);
        		thisComp.btnWithdrawal.set_right(130)
        		thisComp.btnSpmSbmsn.set_visible(true);
        	}else if(state == "4"){
        		thisComp.btnTmprSave.set_visible(false);
        		thisComp.btnApply.set_visible(false);
        		thisComp.btnWithdrawal.set_visible(false);
        		thisComp.btnSpmSbmsn.set_visible(false);
        	}
        };

        /**
         * @description alert법인공통
         * @param  messageId : 메시지아이디
         * @param  messageArguments : 메시지 arguments
         * @param  callback : 확인버튼 클릭후 콜백함수
         */
        this.bdmAlert = function (msgId, msgArr, callback){

        	this.smfAlert(msgId, msgArr, callback, null, {left:null,top:null,width:400,height:200});
        };


        /**
         * @description 단일첨부파일 초기세팅
         * @param : _this  	      - form
         * @param : uploaderComp  - 업로더 컴포넌트
         * @param : divFileComp   - 파일컴포넌트의 직속div
         * @param : cnt  	      - 단일첨부파일 갯수
         * @param : isSingle  	  - 단일여부
         */
        this.bdmFileLoad = function (_this, uploaderComp, divFileComp, cnt, isSingle)
        {

        	uploaderComp.UPLOAD_CreateComplete = this.bdmFnEventUploadCreateComplete;  // 필요한 경우만 세팅
        	// uploaderComp.UPLOAD_UploadComplete = this.bdmFnEventUploadComplete;        // 필요한 경우만 세팅(세팅권장)
        	uploaderComp.UPLOAD_OnError        = this.bdmFnEventUploadError;           // 필요한 경우만 세팅(세팅권장)
        	if (isSingle) uploaderComp.UPLOAD_AfterAddFile   = this.bdmFnEventAfterAddFile;           // 필요한 경우만 세팅(세팅권장)
        	uploaderComp.UPLOAD_Form           = _this;                              // 위의 함수가 존재하는 Form (보통은 this)

        	if (isSingle) {
        		// 삭제버튼 클릭시 처리를 할 div를 세팅(샘플을 진행하기 위해)
        		for(var i=0;i<cnt;i++){
        			var eachFileComp = divFileComp.form["divUpload0"+i];
        			divFileComp.form["btnDelete0"+i]._divUploadObj = eachFileComp; // 삭제버튼 클릭시 처리를 할 div를 세팅
        			divFileComp.form["btnDown0"+i]._divUploadObj   = eachFileComp; // 다운로드버튼 클릭시 처리를 할 div를 세팅
        		}
        	}
        };

        this.bdmFnEventUploadCreateComplete = function(obj,paramObj)
        {
        	// 멀티 첨부파일 다운로드 버튼 추가
        	obj.parent.parent.form.fnAddDownloadButton();
        }

        /**
         * @description 단일멀티첨부파일 초기화
         * @param : uploaderComp  - 업로더 컴포넌트
         * @param : divFileComp   - 파일컴포넌트의 직속div
         * @param : cnt  	      - 단일첨부파일 갯수
         * @param : isSingle  	  - 단일여부
         */
        this.bdmFileReLoad = function (uploaderComp, divFileComp, cnt, isSingle)
        {
        	uploaderComp.form.fnResetUpload();

        	if (isSingle) {
        		// 각 컴포넌트 초기화
        		for(var i=0;i<cnt;i++){
        			divFileComp.form["divUpload0"+i].form.edtFile.set_value("");
        			divFileComp.form["divUpload0"+i].form._FileGbnValue = "";
        		}
        	}
        };

        /**
         * @description 단일찾기버튼 클릭
         * @param : obj  - 찾기버튼
         * @param : uploaderComp  - 업로더 컴포넌트
         */
        this.bdmFileOpenBtn = function (obj, uploaderComp)
        {
        	uploaderComp._divFormObj   = obj.parent;
        	uploaderComp._FileGbnValue = obj.parent._FileGbnValue;
        	uploaderComp.form.fnAddFile();
        };

        /**
         * @description 단일삭제버튼 클릭
         * @param : obj  - 삭제버튼
         * @param : divFileComp   - 파일컴포넌트의 직속div
         */
        this.bdmFileDeleteBtn = function (obj, uploaderComp)
        {
        	var objDiv = obj._divUploadObj;
        	var sFileGbnValueOrg = objDiv._FileGbnValue;

        	if(!this.smfIsNull(sFileGbnValueOrg))
        	{
        		// 2022-12-23 삭제처리가 실패시(유저의 취소 포함) 삭제를 피하기 위해 내부에서 작세하도록 변경
        		uploaderComp.form.fnDeleteFileFromFileGbnValue(sFileGbnValueOrg,objDiv);
        	}
        };

        /**
         * @description 단일다운로드버튼 클릭
         * @param : obj  - 다운로드버튼
         * @param : uploaderComp  - 업로더 컴포넌트
         */
        this.bdmFileDownloadBtn = function (obj, uploaderComp)
        {
        	var objDiv = obj._divUploadObj;
        	var sFileGbnValueOrg = objDiv._FileGbnValue;
        	var sFileRefrnId     = objDiv._FileRefrnId;
        	if((!this.smfIsNull(sFileGbnValueOrg))&&(!this.smfIsNull(sFileRefrnId)))
        	{
        		var nIndex = uploaderComp.form.fnGetMatchFileIndex(sFileGbnValueOrg);
        		uploaderComp.form.fnDownloadByIndex(nIndex);
        	}
        };

        /**
         * @description 첨부파일 select
         * @param : _this  	       - form
         * @param : fileRefrnId    - fileRefrnId
         * @param : uploaderComp   - 업로더 컴포넌트
         * @param : dsOutFileinfo  - 파일 데이터셋
         * @param : dsCorpFileRefrnList  - 법인파일 데이터셋
         * @param : divFileComp    - 파일컴포넌트의 직속div
         * @param : cnt  	       - 단일첨부파일 갯수
         * @param : isSingle  	   - 단일여부
         */
        this.bdmFileSelect = function (_this, fileRefrnId, uploaderComp, dsOutFileinfo, dsCorpFileRefrnList, divFileComp, fileCount, isSingle)
        {
        	// fileRefrnId 빈값이면 return false;
        	if(fileRefrnId == undefined || fileRefrnId == '') return false;

        	// 업로드 초기화
        	uploaderComp.form.fnResetUpload();

        	_this.transaction("fn_filesearch" // serviceId
        				,"baseUrl::/cm_cmc_file_upload_001.do" // url
        				,"" // inDataset
        				,dsOutFileinfo.id + "=atchFileinfo" // outDataset
        				//,"fileRefrnId='wERMhEHwrN7re8VIlylqrb8SJIU2nkZFMOu9EAa3Q3s='"
        				,"fileRefrnId='"+fileRefrnId+"'"
        				,_this.btnUpload_FileSearch_callback // callbackFunction
        				,false // true: 비동기, false:동기
           );

           for (var i = 0; i < dsOutFileinfo.rowcount; i++) {
        		var responseCustomValue = "";
        		var sDownloadUrl       = "";   //
        		var sPrivInfoFiltYn    = "";   // 항목 관리안함
        		var sFileInfSaveYn     = "Y";  // 업무에 맞게 개발자가 세팅(Y/N)
        		var sHandlerCode       = "PA.SAM.PLE";  //this.smfUploadInfoFileSn(jsonWebFile.customValue[i],0);
        		//var fileSn           = "476";  //this.smfUploadInfoFileSn(jsonWebFile.customValue[i],1);
        		var sFileSn            = dsOutFileinfo.getColumn(i,"fileRefrnId"   );
        		var sFileSeq           = dsOutFileinfo.getColumn(i,"fileId"        );
        		var sFileSize          = dsOutFileinfo.getColumn(i,"atchFileMg"    );
        		var sBackendFilename   = dsOutFileinfo.getColumn(i,"atchFileGuid"  );
        		var sForntendFilename  = dsOutFileinfo.getColumn(i,"atchFileNm"    );
        		var sFileEncryptYn     = dsOutFileinfo.getColumn(i,"fileEncryptYn" );
        		var sFileSaveStg       = dsOutFileinfo.getColumn(i,"fileSaveStg"   );

        		uploaderComp.form.fnAddUploadedFile(sHandlerCode, sFileSn, sFileSize, sBackendFilename, sForntendFilename, sFileSeq, sDownloadUrl
        												  ,sFileEncryptYn,sPrivInfoFiltYn,sFileSaveStg,sFileInfSaveYn );

        		if (isSingle) {
        			var suc;
        			for (var k=0;k<dsCorpFileRefrnList.rowcount;k++) {
        				if (sFileSn == dsCorpFileRefrnList.getColumn(k,"fileRefrnId") &&
        					sFileSeq == dsCorpFileRefrnList.getColumn(k,"fileId")) {
        					suc = dsCorpFileRefrnList.getColumn(k,"fileScNm");
        					break;
        				}
        			}

        			// 이 부분에서 해당하는 원래 DB값에 있는 값과 비교하여 해당 div에 넣는다.
        			for(var j=0;j<fileCount;j++){

        				var objDiv = divFileComp.form["divUpload0"+j];
        				objDiv._fileGubunCd = objDiv.fileGubunCd;
        				if(suc == objDiv.fileGubunCd){
        					objDiv._FileRefrnId = sFileSn;
        					objDiv._FileGbnValue = sForntendFilename; // fileSn+"_"+fileSeq;
        					objDiv.form.edtFile.set_value(sForntendFilename);
        					break;
        				}
        			}
        		}
        	}
        };

        this.bdmFnEventAfterAddFile = function(obj,paramObj,sCustomValue,sFileName,nFileSize)
        {
        	var sFileGbnValue    = sFileName; // sCustomValue.split(",")[7];
        	var objdivFormObj    = obj.parent.parent._divFormObj;
        	var sFileGbnValueOrg = objdivFormObj.parent._FileGbnValue;

        	if(!this.smfIsNull(sFileGbnValueOrg))
        	{
        		//obj.parent.fnGetMatchFileIndex(sFileGbnValueOrg);
        		obj.parent.fnDeleteFileFromFileGbnValue(sFileGbnValueOrg);
        	}

        	objdivFormObj.parent._FileGbnValue = sFileGbnValue;
        	objdivFormObj.edtFile.set_value(sFileName);

        };

        this.bdmFnEventUploadError = function(obj,paramObj)
        {
        	trace("=== Sample : bdmFnEventUploadError");
        };

        this.bdmFnEventUploadComplete = function(obj, paramObj, objResultDataset, divFileUpload, dsCorpFileRefrnList, divFileComp, atchFileCount, isSingle)
        {
        	// 신규서비스
        	var listInfo = obj.GetListInfo("json");

        	var jsonNew     = listInfo.newFile;			// 새로 업로드된 파일 정보
            var jsonDel     = listInfo.deleteFile;		// 삭제된 파일 정보
        	var jsonMerge   = listInfo.mergeFile;
        	var jsonWeb     = listInfo.webFile;

        	var nTotalCount = divFileUpload.form.fnGetTotalFileCount(); // 현재 파일 갯수
        	var bExistUploadFile = divFileUpload.form.fnIsExistUploadFile(); // 업로드할 파일 존재 여부

        	// 업로드 성공 후, newfile에 있는 파일들을 webfile로 옮긴다.
        	divFileUpload.form.fnSetUploadCompleteState(obj,paramObj);

        	// 업로드한 file을 가져오는 법(샘플 가이드)
        	if(objResultDataset)
        	{
        		if (jsonNew) {

        			var sFileRefrnId = objResultDataset.getColumn(0,"fileRefrnId");
        			// divFileComp.setColumn(0, "fileRefrnId", sFileRefrnId);

        			if (isSingle) {
        				// 나중에 다운로드하기 위해 관련 정보 세팅
        				for(var i=0;i<atchFileCount;i++){
        					var objDiv = divFileComp.form["divUpload0"+i];
        					objDiv._FileRefrnId = sFileRefrnId;
        				}

        				// 법인파일참조setting
        				this.dsCorpFileRefrnList.deleteAll();
        				var mergeFileLength = jsonMerge.customValue.length;

        				for (var i=0;i<mergeFileLength;i++) {
        					var eachCustomValue = jsonMerge.customValue[i];
        					var arrCustomValue = eachCustomValue.split(",");
        					dsCorpFileRefrnList.addRow();
        					dsCorpFileRefrnList.setColumn(i, "corpFileRefrnNo", "0");
        					dsCorpFileRefrnList.setColumn(i, "fileRefrnId", arrCustomValue[1]);
        					dsCorpFileRefrnList.setColumn(i, "fileId", arrCustomValue[2]);
        					//this.dsCorpFileRefrnList.setColumn(i, "fileScNm", this.dsOutFileinfo.getColumn(i, "fileRefrnId"));

        					//fileGubunCd 넣기
        					for(var j=0;j<atchFileCount;j++){
        						var eachOriginalName = jsonMerge.originalName[i];
        						var objDiv = divFileComp.form["divUpload0"+j];
        						if (eachOriginalName == objDiv.form.edtFile.text) {
        							dsCorpFileRefrnList.setColumn(i, "fileScNm", objDiv.fileGubunCd);
        							break;
        						}
        					}
        				}
        			}
        			return sFileRefrnId;
        		} else if (jsonDel && nTotalCount == 0){
        			// 다 지운상태
        			if (isSingle) dsCorpFileRefrnList.deleteAll(); // 법인파일참조도 지우기
        			return "";
        		} else {
        			return jsonMerge.customValue[0].split(",")[1];
        		}
        	}else{
        		// 화면들어와서 첨부파일 컴포넌트 조작을 1도 안한 상태
        		if (jsonMerge && jsonMerge.customValue.length > 0) {
        			return jsonMerge.customValue[0].split(",")[1];
        		}
        	}
        };

        // KUpload를 생성시 지정할 property값을 지정
        this.bdmSetRaonProp = function()
        {
        	//  Property의 자세한 설명은
        	//  \12 나이스개발센터\17. 도입SW\01. 나이스클라우드\분리-06.파일 업로드 관리(RAON K Upload 2018)\raonkupload\sdk\index.html 참조

        	// 설정할 property
        	var objAddRaonProps = {
        							// 	   ExtensionAllowOrLimit : "0"        // 업로드 할 파일 확장자를 허용 또는 제한 설정("0":지정된 확장자를 제한(선택 금지) , "1":지정된 확장자만 허용(선택가능))
        							// ,   ExtensionArr          : "txt,gif"  // 제한 및 허용할 확장자명을 ",(콤마)"로 구분하여 설정
        							// ,   AllowedZeroFileSize   : "1"        // 0byte 파일의 업로드를 허용 할지 설정합니다.(기본값은 "0" 허용안함이고, "1"로 설정시 허용입니다.)
        							       MultiFileSelect       : "0"
        	                      };

        	return objAddRaonProps;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
