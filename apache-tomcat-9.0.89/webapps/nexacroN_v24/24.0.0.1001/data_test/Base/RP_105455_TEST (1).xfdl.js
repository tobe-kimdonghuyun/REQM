(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_dataobject_01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.data[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","datapath" : "@.id","type" : "STRING","size" : "256"},{"id" : "employee_name","datapath" : "@.employee_name","type" : "STRING","size" : "256"},{"id" : "employee_salary","datapath" : "@.employee_salary","type" : "STRING","size" : "256"},{"id" : "employee_age","datapath" : "@.employee_age","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","71","33","839","637",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"employee_name\"/><Cell col=\"2\" text=\"employee_salary\"/><Cell col=\"3\" text=\"employee_age\"/></Band><Band id=\"body\"><Cell text=\"bind:id\"/><Cell col=\"1\" text=\"bind:employee_name\"/><Cell col=\"2\" text=\"bind:employee_salary\"/><Cell col=\"3\" text=\"bind:employee_age\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1070","40","100","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_105455_TEST (1).xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	//this.DataObject00.load();
        	//this.DataObject00.request("TEST", "POST", "http://172.10.10.71/Next_JSP/test/data_sample_dataobject_01.json");
        	this.DataObject00.request("TEST", "POST", "https://support.tobesoft.co.kr/Next_JSP/Test/data_sample_dataobject_01.json");
        };

        this.DataObject00_onsuccess = function(obj,e)
        {
        	//alert("onsuccess");
        	var objResponseData = obj.getResponse();
        	trace(objResponseData);
        	if (objResponseData) {
        		try {
        			objResponseData = JSON.parse(objResponseData);
        		} catch (e) {
        			//alert(e);
        		}
        	}
        	//trace(JSON.stringify(objResponseData, null, 2));
        };

        this.DataObject00_onerror = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.DataObject00.addEventHandler("onsuccess",this.DataObject00_onsuccess,this);
            this.DataObject00.addEventHandler("onerror",this.DataObject00_onerror,this);
        };
        this.loadIncludeScript("RP_105455_TEST (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
