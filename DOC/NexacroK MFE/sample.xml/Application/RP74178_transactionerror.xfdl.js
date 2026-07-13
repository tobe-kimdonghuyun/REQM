(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FrameForm_Work");
            this.set_titletext("FrameForm_Work");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","43","64","146","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","195","64","146","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","347","64","146","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","45","166","454","292",null,null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk_sync","45","28","107","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Async");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP74178_transactionerror.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.clearData();
        	//tranasction
        	var tid  = "tranTest"
            var url = "http://172.10.12.23:8080/nexacro/jsp/RP_73077_test.jsp";
            var reqDs = "";
            var repDs = "Dataset00=Dataset00";
            var callback = "callBack";
            var bAsync  =  this.chk_sync.value;;	// sync/async
        	var	args = "" ;

        //  	for(i = 0 ; i < 3 ; i++){
        //  		this.transaction(tid, url, reqDs, repDs, args, callback, bAsync);
        //  	}
        	nexacro.Application.transaction(tid, url, reqDs, repDs, args, callback, bAsync);

        };

        nexacro.Application.callBack = function(id, code, message) {
        	trace("id:"+id+",code:"+code+",mes:"+message);

        	this.getActiveForm().Grid00.createFormat();
        	//this.Grid00.createFormat();
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("RP74178_transactionerror.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
