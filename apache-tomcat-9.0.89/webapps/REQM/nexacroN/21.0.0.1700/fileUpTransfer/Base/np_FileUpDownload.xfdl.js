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
                this._setFormPosition(480,630);
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
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileUpload("FileUpload00","16","41","350","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.getSetter("innerdataset").set("@ds_File");
            obj.set_border("1px solid darkgray , 1px solid darkgray , 1px solid darkgray , 1px solid darkgray");
            obj.set_scrolltype("horizontal");
            obj.set_buttonsize("70");
            obj.set_itemheight("23");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","116","156","109","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("File upload");
            obj.set_border("1 solid #0a6fba");
            obj.set_color("#f24a00");
            obj.set_font("");
            obj.set_boxShadow("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_FileList","19","236","363","168",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_File");
            obj.getSetter("scrollbars").set("autovert");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_border("1 solid #c1dbe8");
            obj.set_cursor("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"24\"/><Column size=\"46\"/><Column size=\"132\"/><Column size=\"69\"/><Column size=\"177\"/><Column size=\"122\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"background2: ;\" font=\"9pt &quot;돋움&quot;\"/><Cell col=\"1\" color=\"#315271\" text=\"Seq\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"2\" color=\"#315271\" text=\"File name\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"3\" color=\"#315271\" text=\"File size\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"4\" color=\"#315271\" text=\"File path\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"5\" color=\"#315271\" text=\"File type\" font=\"8pt &quot;돋움&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:CHK\"/><Cell col=\"1\" testAlign=\"left\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:NUM\"/><Cell col=\"2\" testAlign=\"left\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:FILE_NAME\"/><Cell col=\"3\" testAlign=\"right\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:FILE_SIZE\"/><Cell col=\"4\" testAlign=\"right\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:FILE_PATH\"/><Cell col=\"5\" testAlign=\"right\" font=\"돋움,8\" color=\"#315271\" background=\"#ffffff\" text=\"bind:FILE_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","374","41","71","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("File add");
            obj.set_border("1 solid #0a6fba");
            obj.set_color("#f24a00");
            obj.set_font("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","13","283","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("File Upload/Download");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","273","160","109","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("File delete");
            obj.set_border("1 solid #0a6fba");
            obj.set_color("#f24a00");
            obj.set_font("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
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
        this.btn_add_onclick = function(obj,e)
        {
        	this.FileUpload00.appendItem();
        };

        /*
        	Functionality : File upload
        */
        this.btn_upload_onclick = function(obj,e)
        {
        	trace("upload call");
        	var strUrl = "http://tech.tobesoft.com:8080/nexaN//fileUpload.jsp?PATH=file";
        	var bSucc = this.FileUpload00.upload(strUrl);
        };

        /*
        	Functionality : Adding file for uploading(Maximum 1)
        */
        this.FileUpload00_onitemchanged = function(obj,  e)
        {

        	var sFilePath;
        	var sFileName;
        	var row_idx;

        	sFilePath = obj.value;

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
        this.btn_delete_onclick = function(obj,e)
        {
        	for(var i = this.ds_File.getRowCount(); i>=0; i--)
        	{
        		if(this.ds_File.getColumn(i,"CHK") == 1){
        			this.ds_File.deleteRow(i);
        			this.FileUpload00.deleteItem(i);
        		}
        	}
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

        /*
        	Functionality : File upload success
        */
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){
        		trace("Upload error");
        	}else{
        		trace("Upload success");

        		// After file uploading sucess , saving file name into DataSet after receiving from output Dataset

        		this.ds_uploadresult.copyData(e.datasets[0]);

        		for(var i=0; i<this.ds_uploadresult.rowcount; i++){
        			this.ds_File.setColumn(i,"FILE_PATH",this.ds_uploadresult.getColumn(i,"filePath"));
        			this.ds_File.setColumn(i,"FILE_SAVENM",this.ds_uploadresult.getColumn(i,"fileReName"));
        			this.ds_File.setColumn(i,"FILE_SIZE",this.ds_uploadresult.getColumn(i,"fileSize"));
        			this.ds_File.setColumn(i,"FILE_TYPE",this.ds_uploadresult.getColumn(i,"fileType"));
        		}
        		trace(this.ds_uploadresult.saveXML());
        	}

        };

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace(e.errormsg + " ::: " + e.statuscode);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.FileUpload00.addEventHandler("onsuccess",this.FileUpload00_onsuccess,this);
            this.FileUpload00.addEventHandler("onerror",this.FileUpload00_onerror,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.grd_FileList.addEventHandler("onheadclick",this.grd_FileList_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("np_FileUpDownload.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
