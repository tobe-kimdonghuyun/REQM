(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UI_Transfer_Transfer_All");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileinfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILENAME","type" : "STRING","size" : "256"},{"id" : "FILESIZE","type" : "STRING","size" : "256"},{"id" : "FILEPATH","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputparam", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "key","type" : "STRING","size" : "256"},{"id" : "value","type" : "STRING","size" : "256"}]},"Rows" : [{"key" : "key01","value" : "aaa"},{"key" : "key02","value" : "bbb"},{"key" : "key03","value" : "ccc"},{"key" : "key04","value" : "ddd"},{"key" : "key05","value" : "eee"}]});
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","220","79","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("+ Add Files");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","Button00:5","79","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("▲ Upload");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","10","Button00:10","460","265",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_fileinfo");
            obj.set_useselcolor("false");
            obj.set_selectscrollmode("default");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"95\"><Cell id=\"Cell00\" left=\"5\" top=\"5\" bottom=\"5\" width=\"50\" background=\"azure\" text=\"icon\"/><Cell id=\"Cell01\" left=\"60\" top=\"5\" width=\"390\" height=\"25\" text=\"bind:FILENAME\"/><Cell id=\"Cell03\" left=\"60\" top=\"Cell01:5\" width=\"390\" text=\"bind:FILESIZE\" height=\"25\"/><Cell id=\"Cell02\" left=\"60\" top=\"Cell03:5\" width=\"390\" text=\"bind:FILEPATH\" height=\"25\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","10","394","460","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5","439","285","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_inputparam");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"key\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:key\"/><Cell col=\"1\" text=\"bind:value\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","301","443","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("postdatalist 포함여부");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","30","18","300","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("FileUpTransfer");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","251","19","171","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_Upload_Transfer_All.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("FileUPload Dialog", 3);
        };

        this.FileDialog00_onclose = function(obj,e)
        {
        	trace( obj.name+"_"+e.eventid );

        	for (var i = 0, len = e.virtualfiles.length, vFile; i < len; i++)
        	{
        		vFile = e.virtualfiles[i];

        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileDialog_VirtualFile_onerror, this);
        		vFile.open(null, 1);
        	}
        };

        this.FileDialog_VirtualFile_onerror = function(obj, e)
        {
        	trace( obj.name+"_"+e.eventid );
        	trace( "e.statuscode:"+e.statuscode );
        }
        this.FileDialog_VirtualFile_onsuccess = function(obj, e)
        {
        	trace( obj.name+"_"+e.eventid );

        	if (e.reason == 1)
        	{
                trace(obj);
        		var size = obj.getFileSize();
        		this.FileUpTransfer00.addFile(obj.filename,obj);
        	}
        	else if (e.reason == 9)
        	{
        		var idx = this.ds_fileinfo.addRow();

        		this.ds_fileinfo.setColumn(idx, "FILENAME", obj.filename);
        		this.ds_fileinfo.setColumn(idx, "FILESIZE", cutFileSize(e.filesize, Math.pow(2, 10), 0));
        		this.ds_fileinfo.setColumn(idx, "FILEPATH", obj.fullpath);

        	}
        };



        function cutFileSize(filesize, rate, count)
        	{
        		var size_table = ["KB", "MB", "GB", "TB", "PB"];

        		var ret = (filesize / (Math.pow(rate, count + 1))).toFixed(2);
        		if (ret < rate)
        		{
        			if (size_table[count])
        			{
        				return ret + " " + size_table[count];
        			}
        			else
        			{
        				return filesize + " Byte";
        			}
        		}
        		else
        		{
        			return cutFileSize(filesize, rate, ++count);
        		}
        	};

        this.ListView00_ondrop = function(obj,e)
        {
        	trace( obj.name+"_"+e.eventid );

        	if (e.datatype != "file")
        		return;

        	for (var i = 0, len = e.filelist.length, vFile; i < len; i++)
        	{
        		vFile = e.filelist[i];

        		this.FileUpTransfer00.addFile(vFile);

        		vFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileDialog_VirtualFile_onerror, this);
        		vFile.open(null, 1);
        	}
        };


        this.btn_upload_onclick = function(obj,e)
        {
        	this.FileUpTransfer00.clearPostDataList();
        	if ( true == this.CheckBox00.value )
        	{
        		for (var i = 0; i < this.ds_inputparam.rowcount; i++)
        		{
        			this.FileUpTransfer00.setPostData(
        				this.ds_inputparam.getColumn(i,"key"),
        				this.ds_inputparam.getColumn(i,"value")
        			);
        			trace(
        				this.ds_inputparam.getColumn(i,"key") + " : " + this.FileUpTransfer00.getPostData(this.ds_inputparam.getColumn(i,"key"))
        			);
        		}
        		for (var i = 0; i < this.ds_fileinfo.rowcount; i++)
        		{
        			this.FileUpTransfer00.setPostData(
        				"filename",
        				this.ds_fileinfo.getColumn(i, "FILENAME")
        			);
        			this.FileUpTransfer00.setPostData(
        				"filepath",
        				this.ds_fileinfo.getColumn(i, "FILEPATH")
        			);
        		}
        		trace("this.FileUpTransfer00.postdatalist:"+this.FileUpTransfer00.postdatalist.length);
        		this.FileUpTransfer00.upload("http://172.10.13.54:8090/nex/fileUpload_postdatatest.jsp");
        	}
        	else
        	{
        		alert(this.FileUpTransfer00.filelist.length);
        		this.FileUpTransfer00.upload("http://172.10.13.54:8090/nex/fileUpload_postdatatest.jsp");
        	}

        };

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	if (this.ProgressBar00.max != e.total)
        	{
        		this.ProgressBar00.set_max(e.total);
        	}
        	this.ProgressBar00.set_pos(e.loaded);
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	trace("11 " +obj.name+"_"+e.eventid );
        };
        var ErrorMsg;
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {

            trace("2 " + obj.name+"_"+e.eventid );
            trace(e.datasets[0].saveXML());
            alert(e.message);
        };

        this.Button01_onclick = function(obj,e)
        {
        	 alert("1==>" + nexacro.getProjectPath());
        	 alert("2==>" + nexacro.getApplication().xadl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.ListView00.addEventHandler("oncellclick",this.ListView00_oncellclick,this);
            this.ListView00.addEventHandler("ondrop",this.ListView00_ondrop,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("np_Upload_Transfer_All.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
