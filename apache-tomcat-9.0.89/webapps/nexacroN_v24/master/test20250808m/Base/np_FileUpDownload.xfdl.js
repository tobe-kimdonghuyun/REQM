(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FileUpDownload");
            this.set_titletext("FileUpDownload");
            this.getSetter("classname").set("Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_File", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILE_PATH","type" : "STRING","size" : "256"},{"id" : "FILE_NAME","type" : "STRING","size" : "256"},{"id" : "FILE_SIZE","type" : "STRING","size" : "256"},{"id" : "FILE_SAVENM","type" : "STRING","size" : "256"},{"id" : "FILE_TYPE","type" : "STRING","size" : "256"},{"id" : "NUM","type" : "STRING","size" : "256"},{"id" : "CHK","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadresult", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileUpload("FileUpload00","30","73","700","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.getSetter("innerdataset").set("@ds_File");
            obj.set_scrolltype("vertical");
            obj.set_buttonsize("70");
            obj.set_itemheight("40");
            obj.set_background("#f8f9fa");
            obj.set_buttontext("Find");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","370","20","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("File Upload");
            obj.set_font("");
            obj.set_boxShadow("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_FileList","30","383","700","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_File");
            obj.getSetter("scrollbars").set("autovert");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cursor("crosshair");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"46\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"122\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"background2: ;\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\"/><Cell col=\"1\" color=\"#000000\" text=\"Seq\" font=\"14px/normal &quot;맑은고딕&quot;\"/><Cell col=\"2\" color=\"#000000\" text=\"File name\" font=\"14px/normal &quot;맑은고딕&quot;\"/><Cell col=\"3\" color=\"#000000\" text=\"File size\" font=\"14px/normal &quot;맑은고딕&quot;\"/><Cell col=\"4\" color=\"#000000\" text=\"File path\" font=\"14px/normal &quot;맑은고딕&quot;\"/><Cell col=\"5\" color=\"#000000\" text=\"File type\" font=\"14px/normal &quot;맑은고딕&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:CHK\"/><Cell col=\"1\" testAlign=\"left\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:NUM\"/><Cell col=\"2\" testAlign=\"left\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:FILE_NAME\"/><Cell col=\"3\" testAlign=\"right\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:FILE_SIZE\"/><Cell col=\"4\" testAlign=\"right\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:FILE_PATH\"/><Cell col=\"5\" testAlign=\"right\" font=\"14px/normal &quot;맑은고딕&quot;\" color=\"#000000\" background=\"#ffffff\" text=\"bind:FILE_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","620","23","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("File Add");
            obj.set_font("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","490","18","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File Download");
            obj.set_font("");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","920","10","149","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("retry").set("0");
            obj.getSetter("onload").set("FileDownload00_onload");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","30","18","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("File Upload/Download");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","240","20","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("File Delete");
            obj.set_font("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",760,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_FileUpDownload.xfdl", function() {
        /*
        	Functionality : File add
        */
        this.btn_add = function(obj,  e)
        {
        	this.FileUpload00.appendItem();
        };

        /*
        	Functionality : File download
        */
        this.btn_download = function(obj,  e)
        {
        	for(var i = 0; i<this.ds_File.getRowCount(); i++){
        		if(this.ds_File.getColumn(i,"CHK")==1){
        			var strFileName = this.ds_File.getColumn(i, "FILE_SAVENM");
        			var strOriFileName = this.ds_File.getColumn(i, "FILE_NAME");
        			this.FileDownload00.downloadurl = "Svc::fileDownload.jsp?file="+strOriFileName;
        			//this.FileDownload00.downloadurl = "Svc_org::fileDownload.jsp?file="+strOriFileName;
        			this.FileDownload00.show();
        			var bSucc = this.FileDownload00.download();
        		}
        	}
        };

        /*
        	Functionality : File upload
        */
        this.btn_upload = function(obj,  e)
        {
        	var strUrl = "http://172.10.12.45:9090/service_jsp/RP_103273_fileupload.jsp?PATH=file";
        	//var strUrl = "http://172.10.12.49:8080/jsp/RP_103273_fileupload.jsp?PATH=file";
        	//var strUrl = "http://support.tobesoft.co.kr/Next_JSP/V17/Showcase/Service/fileUpload.jsp?PATH=file";
        	//var strUrl = "Svc_org::fileUpload.jsp?PATH=file";
        	var bSucc = this.FileUpload00.upload(strUrl);
        };



        /*
        	Functionality : Adding file for uploading(Maximum 1)
        */
        this.FileUpload00_onitemchanged = function(obj,  e)
        {

        	//var vFile_up;
        	var sFilePath;
        	var sFileName;
        	//var nFileSize;
        	var row_idx;

        	sFilePath = obj.value;


        	if(sFilePath == null || sFilePath == "" ){

        		var idx = this.FileUpload00.index;
        		this.ds_File.deleteRow(idx);
        		if(idx !=0){
        			this.FileUpload00.deleteItem(idx);
        		}
        		this.ds_File.setColumn(idx, "NUM", nexacro.toNumber(idx)+1);
        		return;
        	}
        	var dirExpt = sFilePath.lastIndexOf("\\")+1;

        	sFileName = sFilePath.substr(dirExpt);

        	if(this.ds_File.getRowCount() == this.FileUpload00.index){
        		this.ds_File.addRow();
        	}
        	var idx = this.FileUpload00.index;


        	this.ds_File.setColumn(idx, "FILE_PATH", sFilePath);
        	this.ds_File.setColumn(idx, "FILE_NAME", sFileName);
        	this.ds_File.setColumn(idx, "NUM", nexacro.toNumber(idx)+1);
        	this.ds_File.setColumn(idx, "CHK",1);

        };

        /*
        	Functionality : File deletion
        */
        this.btn_delete = function(obj,  e)
        {

        	for(var i = this.ds_File.getRowCount(); i>=0; i--)
        	{
        		if(this.ds_File.getColumn(i,"CHK") == 1){
        			this.ds_File.deleteRow(i);
        			this.FileUpload00.deleteItem(i);

        		}
        	}
        	//var idx = this.FileUpload00.index;
        	for(var i =0;i<this.ds_File.getRowCount(); i++){
        		this.ds_File.setColumn(i, "NUM", i+1);
        	}


        };

        this.grd_FileList_onheadclick = function(obj, e)
        {
        	if(e.cell == 0){
        		if(obj.getCellProperty("head",0,'text') ==1){
        			obj.setCellProperty("head",0,'text',0)
        			for(var i=0;i<this.ds_File.getRowCount();i++){
        				this.ds_File.setColumn(i,"CHK",0)
        			}
        		}else{
        			obj.setCellProperty("head",0,'text',1)
        			for(var i=0;i<this.ds_File.getRowCount();i++){
        				this.ds_File.setColumn(i,"CHK",1)
        			}
        		}
        	}
        };

        this.FileDownload00_onload = function(obj,  e)
        {
        	this.alert("Download success");
        };

        /*
        	Functionality : File upload success
        */
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	alert("FileUpload00_onsuccess");
        	if( e.datasets == null ){
        		this.alert("Upload error");
        	}else{
        		this.alert("Upload success");

        		// After file uploading sucess , saving file name into DataSet after receiving from output Dataset

        		this.ds_uploadresult.copyData(e.datasets[0]);
        trace(this.ds_uploadresult.saveXML()		);
        		for(var i=0; i<this.ds_uploadresult.rowcount; i++){
        			this.ds_File.setColumn(i,"FILE_PATH",this.ds_uploadresult.getColumn(i,"filePath"));
        			this.ds_File.setColumn(i,"FILE_SAVENM",this.ds_uploadresult.getColumn(i,"fileReName"));
        			this.ds_File.setColumn(i,"FILE_SIZE",this.ds_uploadresult.getColumn(i,"fileSize"));
        			this.ds_File.setColumn(i,"FILE_TYPE",this.ds_uploadresult.getColumn(i,"fileType"));
        		}
        	}
        };

        this.FileUpload00_onerror = function(obj,e)
        {
        	alert("FileUpload00_onerror");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.FileUpload00.addEventHandler("onsuccess",this.FileUpload00_onsuccess,this);
            this.FileUpload00.addEventHandler("onerror",this.FileUpload00_onerror,this);
            this.Button01.addEventHandler("onclick",this.btn_upload,this);
            this.grd_FileList.addEventHandler("onheadclick",this.grd_FileList_onheadclick,this);
            this.Button02.addEventHandler("onclick",this.btn_add,this);
            this.Button00.addEventHandler("onclick",this.btn_download,this);
            this.Button03.addEventHandler("onclick",this.btn_delete,this);
        };
        this.loadIncludeScript("np_FileUpDownload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
