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
            obj = new nexacro.Grid("Grid00","10","71","820","201",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsDownload");
            obj.set_nodatatext("파일을 드래그하여 첨부 할 수 있습니다.");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"25\"/><Column size=\"152\"/><Column size=\"320\"/><Column size=\"58\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"FILE_NAME\"/><Cell col=\"2\" text=\"FILE_URL\"/><Cell col=\"3\" text=\"SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:FILE_NAME\" treelevel=\"bind:DEPTH\"/><Cell col=\"2\" text=\"bind:FILE_URL\"/><Cell col=\"3\" text=\"bind:FiLE_SIZE\" treelevel=\"bind:DEPTH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.ProgressBar("ProgressBar00","610","32","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","12","289","818","151",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearch","12","34","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리스트 불러오기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearch00","125","34","150","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("download");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","287","35","162","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("없는 파일 download");
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
        this.registerScript("FileUpTransfer_FileDownTransfer_Sample09.xfdl", function(nexacro, system, trace) {
        this.saveUrl = "http://172.10.12.45:9090/updown/";
        this.folderName = "fileSample";	//file directory

        this.btnSave_onclick = function(obj,e)
        {
        	nexacro.setHTTPHeaderVariable("dynamicHTTP", "new value");
        	this.uploadfile();
        };
        this.downloadfileAll = function()
        {
        	this.fileDownTrans.clearPostDataList();

        	var arrNameList = new Array();
        	for(var i=0; i<this.dsDownload.getRowCount(); i++)
        	{

        		arrNameList[i] = this.dsDownload.getColumn(i, "FILE_NAME");
        	}

        	this.fileDownTrans.set_downloadfilename("fileSample.zip");	//runtime 전용 프로퍼티

        	this.fileDownTrans.setPostData(
        		"filefolder",
        		this.folderName
        	);
        	this.fileDownTrans.setPostData(
        		"filenamelist",
        		arrNameList
        	);

        	let encVar = "?filefolder="+escape(encodeURIComponent(this.folderName))+"&filename=";
        	this.TextArea00.insertText("then download-success=" + ret+"\n");
        	const req = this.fileDownTrans.download(this.saveUrl+"dummyXML2.jsp","","promise");
        	if (req)
        	{
        		req.then(ret => {
        			this.TextArea00.insertText("then download-success=" + ret+"\n");
        		}).catch(err => {
        			this.TextArea00.insertText("catch download-error=" + err+"\n");
        		}).finally(() => {
        			this.TextArea00.insertText("finally download-promise end\n");
        		});
        	}
        	else
        		this.TextArea00.insertText("return download-promise error\n");
        }
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fileDialog.open('nexacro', FileDialog.MULTILOAD);
        };

        this.Button01_onclick = function(obj,e)
        {
        	trace(this.dsDownload.getColumn(0,"FILE_URL"));
        	this.TextArea00.insertText("download promise start\n");
        	this.fileDownTrans.downloadfilename = "test.zip";
        	//this.fileDownTrans.download("http://172.10.12.45:9090/fileSample/"+this.dsUpload.getColumn(0,"FILE_NAME"),"","promoise");
        	const req = this.fileDownTrans.download(this.dsDownload.getColumn(0,"FILE_URL"),"","promise");
        	if (req)
        	{
        		req.then(ret => {
        			this.TextArea00.insertText("then download-success=" + ret+"\n");
        		}).catch(err => {
        			this.TextArea00.insertText("catch download-error=" + err+"\n");
        		}).finally(() => {
        			this.TextArea00.insertText("finally download-promise end\n");
        		});
        	}
        	else
        		this.TextArea00.insertText("\return download-promise error\n");
        };
        this.btnSearch00_onclick = function(obj,e)
        {
        	//this.downloadfileAll();
        	trace(this.dsDownload.getColumn(0,"FILE_URL"));
        	this.TextArea00.insertText("download promise start\n");
        	this.fileDownTrans.downloadfilename = this.dsDownload.getColumn(0,"FILE_NAME");
        	//this.fileDownTrans.download("http://172.10.12.45:9090/fileSample/"+this.dsUpload.getColumn(0,"FILE_NAME"),"","promoise");
        	const req = this.fileDownTrans.download(this.dsDownload.getColumn(this.dsDownload.rowposition,"FILE_URL"),"","promise");
        	if (req)
        	{
        		req.then(ret => {
        			this.TextArea00.insertText("then download-success=" + ret+"\n");
        		}).catch(err => {
        			this.TextArea00.insertText("catch download-error=" + err+"\n");
        		}).finally(() => {
        			this.TextArea00.insertText("finally download-promise end\n");
        		});
        	}
        	else
        		this.TextArea00.insertText("return download-promise error\n");
        };
        this.fileDownTrans_onerror = function(obj,e)
        {
        	trace("fileDownTrans_onerror : e.errortype=" + e.errortype + ",e.errormsg=" + e.errormsg);
        	this.TextArea00.insertText("fileDownTrans_onerror : e.errortype=" + e.errortype + ",e.errormsg=" + e.errormsg+"\n");
        }
        this.fileDownTrans_onprogress = function(obj,e)
        {
        	trace("fileDownTrans_onprogress : e.lengthComputable=" + e.lengthComputable + ",e.loaded=" + e.loaded + ",e.total=" + e.total);
        	this.TextArea00.insertText("fileDownTrans_onprogress : e.lengthComputable=" + e.lengthComputable + ",e.loaded=" + e.loaded + ",e.total=" + e.total+"\n");
        	if (e.lengthComputable != true)
        	{
        		return;
        	}
        	var rtnPercent = this.fnGetPercent(e.loaded,e.total);

        	this.ProgressBar00.set_pos(rtnPercent);
        };

        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	trace("fileDownTrans_onsuccess : e.url=" + e.url + ",e.targetfullpath=" + e.targetfullpath);
        	this.TextArea00.insertText("fileDownTrans_onsuccess : e.url=" + e.url + ",e.targetfullpath=" + e.targetfullpath+"\n");
        };

        this.callbackFunction = function(errorcode, errormessage)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	this.TextArea00.insertText("Promise Form callbackFunction ");
        };

        this.callbackFunction1 = function(errorcode, errormessage)
        {
        	//trace("Promise Form callbackFunction : ", "serviceId-"+svcId, "errorCode-"+err, "errorMsg-"+msg);
        	trace("Promise Form callbackFunction : ", "errorcode-",errorcode, "errormessage-",errormessage);
        };
        this.gfnIsNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined") return true;
        	if (Val == null) return true;
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined")) return true;
        	if (Val.length == 0) return true;

        	return false;
        }
        this.btnSearch_onclick = function(obj,e)
        {
        	this.transaction("list", this.saveUrl + "fileDownload_servlet_list_XML.jsp", "", "dsDownload=dsList", "filefolder="+this.folderName, "fn_callback", "false", "0");
        }


        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };


        this.Button00_onclick = function(obj,e)
        {
        	const req = this.fileDownTrans.download("http://172.10.12.45:9090/김동현.zip","","promise");
        	if (req)
        	{
        		req.then(ret => {
        			this.TextArea00.insertText("then download-success=" + ret+"\n");
        		}).catch(err => {
        			this.TextArea00.insertText("catch download-error=" + err+"\n");
        		}).finally(() => {
        			this.TextArea00.insertText("finally download-promise end\n");
        		});
        	}
        	else
        		this.TextArea00.insertText("\return download-promise error\n");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid00.addEventHandler("ondrop",this.Grid00_ondrop,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSearch00.addEventHandler("onclick",this.btnSearch00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
            this.fileDownTrans.addEventHandler("onprogress",this.fileDownTrans_onprogress,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
        };

        this.loadIncludeScript("FileUpTransfer_FileDownTransfer_Sample09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
