(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDown");
            this.set_border("");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CHK","type" : "STRING","size" : "256"},{"id" : "FILE_NAME","type" : "STRING","size" : "256"},{"id" : "FILE_URL","type" : "STRING","size" : "256"},{"id" : "DEPTH","type" : "STRING","size" : "256"},{"id" : "STATUS","type" : "STRING","size" : "256"},{"id" : "FiLE_SIZE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CHK","type" : "STRING","size" : "256"},{"id" : "FILE_NAME","type" : "STRING","size" : "256"},{"id" : "FILE_URL","type" : "STRING","size" : "256"},{"id" : "DEPTH","type" : "STRING","size" : "256"},{"id" : "STATUS","type" : "STRING","size" : "256"},{"id" : "FiLE_SIZE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownFileList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "realFileName","type" : "STRING","size" : "256"},{"id" : "displayFileName","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteFile", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","20","470","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","20","89","310","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_compTitle02");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"91","69","30","92",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("comp.filetransfer.delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileUpload","20","127",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_nodatatext("Drag & Drop files Here");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"258\"/><Column size=\"100\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"91","69","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("전송");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("comp.filetransfer.transfer");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileDownload","20","510",null,"320","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDownload");
            obj.set_autofittype("col");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"265\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"SIZE\"/><Cell col=\"3\" text=\"DEL\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"normal\" edittype=\"none\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" treelevel=\"bind:DEPTH\" text=\"bind:FiLE_SIZE\"/><Cell col=\"3\" displaytype=\"imagecontrol\" text=\"URL(&apos;imagerc::img_grd_reject.png&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDonwload",null,"474","100","30","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("comp.filetransfer.downloadBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"474","100","30","123",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_positionstep("0");
            obj.set_cssclass("btn_WF_basic02");
            obj.getSetter("messageid").set("grid.function.staSearch");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"91","69","30","164",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("messageid").set("sample.personalization.add");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","14","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("File Transfer");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.getSetter("messageid").set("comp.filetransfer");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",440,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_border("");
                p.set_background("");

                p.Static02.set_taborder("0");
                p.Static02.set_text("FileDownload");
                p.Static02.set_cssclass("sta_WF_compTitle02");
                p.Static02.set_positionstep("0");
                p.Static02.move("20","470","350","30",null,null);

                p.Static56.set_taborder("1");
                p.Static56.set_text("FileUpload");
                p.Static56.set_cssclass("sta_WF_compTitle02");
                p.Static56.set_positionstep("0");
                p.Static56.move("20","89","310","30",null,null);

                p.btnDel.set_taborder("2");
                p.btnDel.set_text("삭제");
                p.btnDel.set_positionstep("0");
                p.btnDel.set_cssclass("btn_WF_basic01");
                p.btnDel.getSetter("messageid").set("comp.filetransfer.delete");
                p.btnDel.move(null,"91","69","30","92",null);

                p.grdFileUpload.set_taborder("3");
                p.grdFileUpload.set_binddataset("dsUpload");
                p.grdFileUpload.set_autofittype("col");
                p.grdFileUpload.set_nodatatext("Drag & Drop files Here");
                p.grdFileUpload.set_positionstep("0");
                p.grdFileUpload.move("20","127",null,"320","20",null);

                p.btnSave.set_taborder("4");
                p.btnSave.set_text("전송");
                p.btnSave.set_positionstep("0");
                p.btnSave.set_cssclass("btn_WF_basic02");
                p.btnSave.getSetter("messageid").set("comp.filetransfer.transfer");
                p.btnSave.move(null,"91","69","30","20",null);

                p.grdFileDownload.set_taborder("5");
                p.grdFileDownload.set_binddataset("dsDownload");
                p.grdFileDownload.set_autofittype("col");
                p.grdFileDownload.set_positionstep("0");
                p.grdFileDownload.move("20","510",null,"320","20",null);

                p.btnDonwload.set_taborder("6");
                p.btnDonwload.set_text("다운로드");
                p.btnDonwload.set_positionstep("0");
                p.btnDonwload.set_cssclass("btn_WF_basic01");
                p.btnDonwload.getSetter("messageid").set("comp.filetransfer.downloadBtn");
                p.btnDonwload.move(null,"474","100","30","20",null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_positionstep("0");
                p.btnSearch.set_cssclass("btn_WF_basic02");
                p.btnSearch.getSetter("messageid").set("grid.function.staSearch");
                p.btnSearch.move(null,"474","100","30","123",null);

                p.btnAdd.set_taborder("8");
                p.btnAdd.set_text("추가");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.getSetter("messageid").set("sample.personalization.add");
                p.btnAdd.move(null,"91","69","30","164",null);

                p.Static00_00.set_taborder("9");
                p.Static00_00.set_text("File Transfer");
                p.Static00_00.set_cssclass("sta_WF_pageTitle");
                p.Static00_00.getSetter("messageid").set("comp.filetransfer");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("20","14","260","40",null,null);
            	}
            );
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen",920,850,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdFileUpload.move("20","117",null,"320","20",null);

                p.Static00_00.move("20","20","260","40",null,null);

                p.Static56.move("20","81","310","30",null,null);

                p.Static02.move("20","464","350","30",null,null);

                p.grdFileDownload.move("20","500",null,"320","20",null);

                p.btnDel.move(null,"81","69","30","93",null);

                p.btnSave.set_cssclass("btn_WF_basic02");
                p.btnSave.move(null,"81","69","30","20",null);

                p.btnAdd.move(null,"81","69","30","167",null);

                p.btnDonwload.move(null,"464","106","30","20",null);

                p.btnSearch.move(null,"464","106","30","132",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("filetransfer.xfdl", function() {

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        /* service url : 사용경로 지정 */
        this.saveUrl = nexacro.getEnvironment().services["svc"].url;
        this.nMaxFileSize = 2000000;	//각 파일 최대사이즈 (2 Mbyte)

        /*
        gfn_dsFetch Arguments
        	url   	 - [필수] method::그룹::uri
        	inDs  	 - [옵션] dataset  입력 ([key=]inDS:{sType||rownum}) (GET 메소드 사용시 queryString으로 변환)
        	outDs 	 - [옵션] dataset  출력 (outDS=key)
        	args  	 - [옵션] argument 입력 (key=val)
        */
        this.SVC_SEARCH = {
        	url   : "GET::app01::getFileList?filepath=sample"
        	, inDs  : "ds_param"
        	, outDs : "dsDownload"
        }
        this.SVC_DELETE = {
        	url   : "DELETE::app01::deleteFile/sample"
        	, inDs  : "dsDeleteFile"
        }

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * fnAddFileList : fileUpTrans객체에 파일을 추가한다.
        * @param {Array}  filelists	- 파일 리스트
        * @return : N/A
        * @example :
        */
        this.fnAddFileList = function(filelists)
        {
        	var len = filelists.length;
        	for (var i = 0; i < len; i++) {
        		var vFile = filelists[i];
        		var isExist = this.fileUpTrans.existFile(vFile);

        		//파일중복체크
        		if(isExist){
        			alert("이미추가된 파일이 있습니다.");
        			return;
        		}

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        	}
        }

        /**
        * fnUploadFile : 파일 업로드
        * @return : N/A
        * @example :
        */
        this.fnUploadFile = function()
        {
        	//파일업로드시 파일저장 폴더경로 PostData 셋팅
        	this.fileUpTrans.setPostData("filepath","sample");

        	//file upload
        	var uploadUrl = this.saveUrl +"uploadFiles";
        	this.fileUpTrans.upload(uploadUrl);
        }

        /**
        * fn_FileDelete : 파일 삭제
        * @return : N/A
        * @example :
        */
        this.fn_FileDelete = async function(rowIdx, sFileName)
        {
        	this.dsDownload.deleteRow(rowIdx);

        	this.dsDeleteFile.clearData();

        	var idx = this.dsDeleteFile.addRow();
        	this.dsDeleteFile.setColumn(idx,"FILE_NAME", sFileName);

        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_DELETE);
        		//trace(JSON.stringify(objResolveData, null, 4));
        	} catch (err) {
        		console.error(err);
        		alert(err);
        	}
        };

        /**
        * fnGetFileSize : 파일 크기에 맞는 파일 사이즈를 표시한다.
        * @param {String}  filesize	- 파일사이즈
        * @return : N/A
        * @example :
        * https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_file(s)_size
        */
        this.fnGetFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };

        /**
         * @class  유일한 ID 를 반환
         * @param {String} prefix id 앞에 붙일 문자열
         * @param {String} separator id 생성시 구분용 문자(default: '-' ).
         * @return {String} id
         * @example
         * trace(this.gfnGetUniqueI());
         * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
         *
         * trace(this.gfnGetUniqueI("Button_"));
         * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
         *
         * trace(this.gfnGetUniqueI("", "_"));
         * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
         *
         * trace(this.fnGetUniqueId("Button_", "_"));
         * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
        */

        /**
         * @class  alphabet character code.
         * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
        */
        this._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]
        this.fnGetUniqueId = function(prefix, separator)
        {
        	if ( nexacro.isEmpty(prefix) ) prefix = "";
        	if ( nexacro.isEmpty(separator) ) {
        		separator = 45;
        	} else {
        		separator = separator.charCodeAt(0);
        	}
        	var pThis = this,
        		charcode = this._ALPHA_CHAR_CODES,
        		math = Math;
        	var seq = 0;
        	var seq0;
        	var tmpArray = new Array(36);
        	var idx = -1;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	seq = 0;
        	while (seq < 3)
        	{
        		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
        		seq0 = 0;
        		while (seq0 < 4)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16  | 0];
        			seq0++;
        		}
        		seq++;
        	}
        	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

        	var tmpStr = (new Date()).getTime();
        	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
        	seq = 0;
        	while (seq < 8)
        	{
        		tmpArray[++idx] = tmpStr.charCodeAt(seq);
        		seq++;
        	}
        	seq = 0;
        	while (seq < 4)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	return prefix + String.fromCharCode.apply(null, tmpArray);
        };

        nexacro.isEmpty = function(value)
        {
        	// null, undefined ==> true
        	if ( value == null ) return true;

        	// String, Array ==> length == 0
        	if ( this.gfn_isString(value) )
        	{
        		return value.trim().length == 0 ? true : false;
        	}
        	else if ( this.gfn_isArray(value) )
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if ( this.gfn_isObject(value) )
        	{
        		for (var p in value)
        		{
        			if ( value.hasOwnProperty(p) )
        			{
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * @description 파일 추가
        */
        this.btnAdd_onclick = function(obj,e)
        {
        	//file dialog open
        	this.fileDialog.open("Choose files", FileDialog.MULTILOAD);
        };


        /**
         * @description 파일 삭제
        */
        this.btnDel_onclick = function(obj,e)
        {
        	//selected file delete
        	var chk = this.grdFileUpload.getCellPropertyValue(0, 0, "text");
        	var length = this.dsUpload.rowcount;

        	if(chk == 1)
        	{
        		//전체삭제
        		for(var i=0; i<length; i++)
        		{
        			var nRow = this.dsUpload.rowcount-1;

        			this.dsUpload.deleteRow(nRow);
        			this.fileUpTrans.removeFileByIndex(nRow);			//filelist remove
        		}
        	}
        	else
        	{
        		//단건삭제
        		var nRow = this.dsUpload.rowposition;

        		this.dsUpload.deleteRow(nRow);
        		this.fileUpTrans.removeFileByIndex(nRow);
        	}
        };


        /**
         * @description 파일 전송
        */
        this.btnSave_onclick = function(obj,e)
        {
        	//file upload 실행
        	this.setWaitCursor(true);
        	this.fnUploadFile();
        };

        /**
         * @description 리스트 불러오기
        */
        this.btnSearch_onclick = async function(obj,e)
        {
        	// 프로미스 RestAPI 통신
        	try {
        		let {strSvcId, nErrorCode, objResolveData, elapsedTime} = await this.gfn_dsFetch(this.SVC_SEARCH);
        		//this.transaction("list", this.saveUrl + "getFileList?filepath=sample", "", "dsDownload=dsList", "", "fnCallbackTransaction", false, 0);
        		//trace(JSON.stringify(objResolveData, null, 4));
        		this.dsDownload.set_enableevent(false);

        		this.dsDownload.addColumn("CHK", "STRING", 255);

        		for(var i=0; i<this.dsDownload.getRowCount(); i++)
        		{
        			this.dsDownload.setColumn(i, "CHK", 0);
        			this.dsDownload.setColumn(i,"FiLE_SIZE",this.fnGetFileSize(this.dsDownload.getColumn(i,"FiLE_SIZE")));
        		}

        		this.dsDownload.set_enableevent(true);
        	} catch (err) {
        		console.error(err);
        	}
        };


        /**
         * @description 전체 다운로드
        */
        this.btnDonwload_onclick = function(obj,e)
        {
        	//파일다운로드시 파일다운 폴더경로 PostData 셋팅
        	this.fileDownTrans.setPostData("filepath","sample");

        	var objDs = this.dsDownload;
        	var nCnt = objDs.getRowCount();

        	this.dsDownFileList.clearData();

        	for(var i=0;i<nCnt;i++){
        		var nChk = objDs.getColumn(i,"CHK");

        		if(nChk==1) {
        			var nRow = this.dsDownFileList.addRow();

        			this.dsDownFileList.setColumn(nRow, "realFileName", objDs.getColumn(i,"FILE_NAME"));
        			this.dsDownFileList.setColumn(nRow, "displayFileName", objDs.getColumn(i,"FILE_NAME"));
        		}
        	}

        	if(this.dsDownFileList.getRowCount() == 0) {
        		alert("다운로드 할 파일을 선택하세요.");
        		return;
        	}

        	//this.fileDownTrans.setPostData("fileInfo",this.dsDownFileList.saveXML());
        	trace(JSON.stringify(this.gfn_dataset2ObjectList(this.dsDownFileList), null, 4));
        	this.fileDownTrans.setPostData("fileInfo", JSON.stringify(this.gfn_dataset2ObjectList(this.dsDownFileList)));
        trace(this.dsDownFileList.getRowCount())
        	//NRE 를 위한 다운로드 Default 파일명
        	if(this.dsDownFileList.getRowCount() > 1) {
        		//파일여러개 선택시 zip 파일로 압축하여 다운로드
        		this.fileDownTrans.set_downloadfilename("첨부파일.zip");
        	}else{
        		//파일이 1개일 경우 해당 파일명으로 다운로드
        		this.fileDownTrans.set_downloadfilename(this.dsDownFileList.getColumn(0, "displayFileName"));
        	}

        	//파일다운로드 실행
        	var downloadUrl = this.saveUrl +"downloadFile";
        	this.fileDownTrans.download(downloadUrl);
        };

        /**
         * @description 파일업로드 그리드 마우스 드랍 이벤트
        */
        this.grdFileUpload_ondrop = function(obj,e)
        {
        	if(e.datatype == "file")
        	{
        		this.fnAddFileList(e.filelist);
        	}
        };


        /**
         * @description 파일업로드 전체선택 이벤트
        */
        this.grdFileUpload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsUpload.rowcount; i++)
        			{
        				this.dsUpload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };


        /**
         * @description 파일다운로드 닫았을 때 이벤트
        */
        this.fileDialog_onclose = function(obj,e)
        {
        	this.fnAddFileList(e.virtualfiles);
        	//this.grdFileUpload.setFocus();
        };

        /**
         * @description 파일추가 성공
        */
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1) {	//open() callback
        		obj.getFileSize();
        	} else if (e.reason == 9) {	//getFileSize() callback
        		obj.close();

        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if (nFileSize > this.nMaxFileSize){
        			alert("첨부파일 최대용량은 2 MByte 입니다.");
        			return;
        		}

        		var strId = this.fnGetUniqueId();

        		this.fileUpTrans.addFile(strId, obj);

        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", sFileName);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.fnGetFileSize(nFileSize));
        	}
        }

        /**
         * @description 파일추가 실패
        */
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;

        	alert(msg);
        }

        /**
         * @description 업로드 성공
        */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	this.setWaitCursor(false);

        	//console.log(e);

        	var responseDataset = e.datasets[0];
        	//console.log(responseDataset.saveXML());
        	alert("전송완료");
        };


        /**
         * @description 업로드 실패
        */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	this.setWaitCursor(false);
        	alert(e.errortype + ">>" + e.errormsg);
        };


        /**
         * @description 다운로드 그리드 전체체크
        */
        this.grdFileDownload_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		var chk = obj.getCellPropertyValue(e.row, e.cell, "text");

        		if(chk == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 1);
        			}
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);

        			for(var i=0; i<this.dsDownload.rowcount; i++)
        			{
        				this.dsDownload.setColumn(i, "CHK", 0);
        			}
        		}
        	}
        };

        /**
         * @description 다운로드 그리드 파일 다운로드
        */
        this.grdFileDownload_oncelldblclick = function(obj,e)
        {
        	//파일다운로드시 파일다운 폴더경로 PostData 셋팅
        	this.fileDownTrans.setPostData("filepath","sample");

        	var objDs = this.dsDownload;

        	this.dsDownFileList.clearData();

        	var nRow = this.dsDownFileList.addRow();

        	this.dsDownFileList.setColumn(nRow, "realFileName", objDs.getColumn(e.row,"FILE_NAME"));
        	this.dsDownFileList.setColumn(nRow, "displayFileName", objDs.getColumn(e.row,"FILE_NAME"));

        	//this.fileDownTrans.setPostData("fileInfo",this.dsDownFileList.saveXML());
        	trace(JSON.stringify(this.gfn_dataset2ObjectList(this.dsDownFileList), null, 4))
        	this.fileDownTrans.setPostData("fileInfo", JSON.stringify(this.gfn_dataset2ObjectList(this.dsDownFileList)));

        	//파일이 1개일 경우 해당 파일명으로 다운로드
        	this.fileDownTrans.set_downloadfilename(this.dsDownFileList.getColumn(0, "displayFileName"));

        	//파일다운로드 실행
        	var downloadUrl = this.saveUrl +"downloadFile";
        	this.fileDownTrans.download(downloadUrl);
        };

        /**
         * @description 다운로드 성공
        */
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace(e.targetfullpath);
        };

        /**
         * @description 다운로드 실패
        */
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("error : " + e.errormsg);
        };

        this.grdFileDownload_oncellclick = function(obj,e)
        {
        	//삭제버튼 클릭시 바로 삭제
        	if(e.cell==3){
        		var sFileName = obj.getBindDataset().getColumn(e.row,"FILE_NAME");
        		this.fn_FileDelete(e.row, sFileName);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdFileUpload.addEventHandler("ondrop",this.grdFileUpload_ondrop,this);
            this.grdFileUpload.addEventHandler("onheadclick",this.grdFileUpload_onheadclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdFileDownload.addEventHandler("oncelldblclick",this.grdFileDownload_oncelldblclick,this);
            this.grdFileDownload.addEventHandler("onheadclick",this.grdFileDownload_onheadclick,this);
            this.grdFileDownload.addEventHandler("oncellclick",this.grdFileDownload_oncellclick,this);
            this.btnDonwload.addEventHandler("onclick",this.btnDonwload_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };
        this.loadIncludeScript("filetransfer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
