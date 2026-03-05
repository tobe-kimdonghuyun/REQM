(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileupdown");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(840,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsUpload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "CHK","size" : "256","type" : "STRING"},{"id" : "FILE_NAME","size" : "256","type" : "STRING"},{"id" : "FILE_URL","size" : "256","type" : "STRING"},{"id" : "FILE_ID","size" : "256","type" : "STRING"},{"id" : "DEPTH","size" : "256","type" : "STRING"},{"id" : "STATUS","size" : "256","type" : "STRING"},{"id" : "FiLE_SIZE","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsDownload", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "CHK","size" : "256","type" : "STRING"},{"id" : "FILE_NAME","size" : "256","type" : "STRING"},{"id" : "FILE_URL","size" : "256","type" : "STRING"},{"id" : "DEPTH","size" : "256","type" : "STRING"},{"id" : "STATUS","size" : "256","type" : "STRING"},{"id" : "FiLE_SIZE","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsUpResult", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "IDX","size" : "5","type" : "string"},{"id" : "ObjectName","size" : "100","type" : "string"},{"id" : "ObjectID","size" : "200","type" : "string"},{"id" : "TestType","size" : "8","type" : "string"},{"id" : "TestObject","size" : "10","type" : "string"},{"id" : "TestValue","size" : "100","type" : "string"},{"id" : "ResultValue","size" : "10","type" : "string"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);


            obj = new nexacro.FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new nexacro.FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btnAdd","12","32","47","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","10","71","820","201",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsUpload");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"25\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_NAME\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" text=\"bind:FiLE_SIZE\" treelevel=\"bind:DEPTH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSave","61","32","47","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전송");
            this.addChild(obj.name, obj);

            obj = new nexacro.ProgressBar("ProgressBar00","630","31","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","110","32","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("fileDownTrans.downloadfilename");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","320","32","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("download");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",840,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("FileUpTransfer_FileDownTransfer_Sample05.xfdl", function(nexacro, system, trace) {
        this.saveUrl = "http://172.10.12.45:9090/updown/";
        this.folderName = "fileSample";	//file directory

        this.btnSave_onclick = function(obj,e)
        {
        	this.uploadfile();
        };
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fileDialog.open('nexacro', FileDialog.MULTILOAD);
        };
        this.Button00_onclick = function(obj,e)
        {
        	//nexacro.setHTTPHeaderVariable("header0", "modify value");
        	this.fileDownTrans.downloadfilename = "Test.txt";
        };
        this.callbackFunction1 = function(errorcode, errormessage)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	trace("Promise Form callbackFunction : ", "errorcode-",errorcode, "errormessage-",errormessage);
        };
        this.Button00_00_onclick = function(obj,e)
        {
        	trace(this.dsUpload.getColumn(0,"FILE_NAME"));
        	this.fileDownTrans.download("http://172.10.12.45:9090/fileSample/"+this.dsUpload.getColumn(0,"FILE_NAME"));
        };
        this.Button00_00_00_onclick = function(obj,e)
        {
        	trace(this.dsUpload.getColumn(0,"FILE_NAME"));
        	this.fileDownTrans.download("http://172.10.12.45:9090/fileSample/"+this.dsUpload.getColumn(0,"FILE_NAME"), "C:\\Users\\nexacro\\"+this.dsUpload.getColumn(0,"FILE_NAME"));
        };
        this.uploadfile = function(returntype)
        {
        	this.fileUpTrans.clearPostDataList();

        	var arrNameList = new Array();
        	for(var i=0; i<this.dsDownload.getRowCount(); i++)
        	{
        		//fileDownload_postdatatestAll.jsp -> request.getParameter("filenamelist");
        		arrNameList[i] = this.dsDownload.getColumn(i, "FILE_NAME");
        	}

        	this.fileUpTrans.setPostData(
        		"filefolder",
        		"fileSample"
        	);
        	//var arrNameList = this.fileDownTrans.getPostData("filenamelist");
        	this.fileUpTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	//file upload
        	return this.fileUpTrans.upload(this.saveUrl +"fileUpload_postdatatest1.jsp?filefolder="+this.folderName, returntype);
        }
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfnIsNull(e.virtualfiles))
        	{
        		return;
        	}

        	this.addFileList(e.virtualfiles);
        };

        this.fileList_onsuccess = function(obj, e)
        {
        	//getFileSize() call --> reason : 9
        	if (e.reason == 9)
        	{
        		var nRowIdx = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRowIdx, "FILE_NAME", obj.filename);
        		this.dsUpload.setColumn(nRowIdx, "FiLE_SIZE", this.cutFileSize(e.filesize));
        		this.dsUpload.setColumn(nRowIdx, "FILE_URL",  obj.fullpath);
        		this.dsUpload.setColumn(nRowIdx, "FILE_ID",	  obj.name);

        		//this.fullFilesize += e.filesize;

        		if(this.ProgressBar00.pos > 0)
        		{
        			this.ProgressBar00.set_pos(0);
        		}
        	}
        }
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }
        this.addFileList = function(filelists)
        {
        	//array type virtualfile List
        	var vFile;
        	var len = filelists.length;
        	for (var i = 0; i < len; i++)
        	{
        		vFile = filelists[i];
        		this.fileUpTrans.addFile(vFile.name,vFile);

        		vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.fileList_onerror, this);

        		vFile.open(null, VirtualFile.openRead);
        		vFile.getFileSize();	//return file size
        		//vFile.close();
        	}
        }
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++)
        	{
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        	}
        	return sOutput;
        };
        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        this.fileUpTrans_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded,e.total);

        	this.ProgressBar00.set_pos(rtnPercent);
        };

        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	var sFileid = "";
        	for(var i=0; i<objCallDs.getRowCount(); i++)
        	{
        		sFileid = this.dsUpload.getColumn(i,"FILE_ID");
        		this.fileUpTrans.removeFile(sFileid);			//filelist remove

        		this.dsUpload.setColumn(i,"FILE_URL",objCallDs.getColumn(i,"savePath"));
        		this.dsUpload.setColumn(i,"FILE_ID", "");
        	}

        	//alert("전송완료"+objCallDs.getColumn(0,"httpheadervalue"));
        	trace("전송완료 ");
        };

        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };
        this.Button05_onclick = function(obj,e)
        {
        	/*
        	trace("start upload-promise");
        	const req = this.uploadfile("promise");
        	trace("run upload-promise");
        	if (req)
        	{
        		req.then(([errorcode,errormessage]) => {
        			trace("✅ 사용자 조회 완료: req.then 이후 확인 errorcode= [",errorcode,"], errormessage = [",errormessage ,"]");
        			this.callbackFunction1(errorcode, errormessage);

        		}).catch(err => trace(sID,"  upload-promise error:", err.errorMsg));

        	}
        	else
        		trace("return upload-promise error");
        	*/
        	this.TextArea00.deleteText();
        	this.TextArea00.insertText("start upload-promise");
        	const retP = this.uploadfile("promise");
        	this.TextArea00("\nrun upload-promise");
        	if (retP)
        	{
        		retP.then(ret => {
        			this.TextArea00.insertText("\nthen upload-success=" + ret);
        		}).catch(err => {
        			this.TextArea00.insertText("\natch upload-error=" + err);
        		}).finally(() => {
        			this.TextArea00.insertText("\nfinally upload-promise end");
        		});
        	}
        	else
        		this.TextArea00.insertText("\nreturn upload-promise error");
        };

        this.callbackFunction1 = function(errorcode, errormessage)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	trace("Promise Form callbackFunction : ", "errorcode-",errorcode, "errormessage-",errormessage);
        };
        this.Button01_onclick = function(obj,e)
        {
        	nexacro.setHTTPHeaderVariable("header0", "modify value") ;
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDownTrans.addEventHandler("onprogress",this.fileDownTrans_onprogress,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };

        this.loadIncludeScript("FileUpTransfer_FileDownTransfer_Sample05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
