(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("invisibleComponent");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"},{"Column0" : "1","Column1" : "2","Column2" : "3"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","56","30","188","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("dataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","56","130","188","291",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","257","29","205","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("load");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","479","27","196","74",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
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
        this.registerScript("dataset.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	var ds = new nexacro.Dataset();

        	this.addChild("DatasetID", ds);
        	ds.addColumn("col1", "string", 120 );
        	ds.addColumn("col2", "string", 120 );
        	ds.addColumn("col3", "string", 120 );

        	for(var i =0; i < 100 ; i++)
        	{
        		var rtn = ds.addRow();
        		ds.setColumn(i,"col1","col1_"+i);
        		ds.setColumn(i,"col2","col2_"+i);
        		ds.setColumn(i,"col3","col3_"+i);
        	}
        	trace(ds.saveXML());
        	this.Grid00.binddataset = ds;
        	this.Grid00.createFormat();

        };

        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.set_url("http://172.10.12.45:9090/REQM/RP_78368_eng.xml");
        	this.Dataset00.set_serverdatasetid("datasetXML");
        	this.Dataset00.load();


        };

        this.Button02_onclick = function(obj,e)
        {
        	trace(this.Dataset00.saveXML());
        	this.Grid00.binddataset = "Dataset00";
        	this.Grid00.createFormat();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=dataset.xfdl.js.map
