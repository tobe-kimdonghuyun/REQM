(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("asdf1");
            this.set_titletext("New Form");
            this.getSetter("classname").set("asdf1");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(545,412);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{},{},{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","0.85%","25",null,"46","69.98%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","4.95%","96",null,"294","8.07%",null,null,null,null,null,this);
            obj.set_binddataset("Dataset00");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"Column3\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:Column2\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","35.96%","30",null,"28","45.87%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","59.82%","15",null,"29","11.19%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("FileUpload00","56.7%","47",null,"28","3.12%",null,null,null,null,null,this);
            obj.getSetter("retry").set("0");
            obj.set_taborder("4");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileDownload("FileDownload00","78.9%","75",null,"33","1.83%",null,null,null,null,null,this);
            obj.getSetter("retry").set("0");
            obj.set_taborder("5");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",545,412,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_68887_asdf1.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,  e)
        {
        	//var exUrl = "http://says.iptime.org/XExportImport";
        	//application.setVariable("SECURITY", "TEST", "header");
        	nexacro.setHTTPHeaderVariable("SECURITY", "TEST");
        	var exUrl = "http://localhost.:9090/Say_main/XExportImport";
        	this.exportObj = new ExcelExportObject();
        	this.addChild(this.exportObj , "exportObj");



        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exporturl(exUrl);
        	this.exportObj.set_exportfilename("aaaa");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1","","","","","","","","cellline");
        	this.exportObj.set_exportfilename("아아아아");

        	trace("exporturl== "+this.exportObj.exporturl);



        	var result = this.exportObj.exportData();
        }

        this.Button01_onclick = function(obj,  e)
        {
        	//application.setVariable("SECURITY", "TEST", "header");
        	nexacro.setHTTPHeaderVariable("SECURITY", "TEST");
        	this.transaction("test","http://172.10.13.75:9090/Say_main/projects/say_test.jsp","","Dataset00=Dataset00","","fn_search_after");
        }



        this.Button02_onclick = function(obj,  e)
        {
        	//application.setVariable("SECURITY", "TEST", "header");
        	nexacro.setHTTPHeaderVariable("SECURITY", "TEST");
        	this.FileUpload00.upload("http://localhost.:9090/Say_main/projects/fileUpload.jsp");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };

        this.loadIncludeScript("RP_68887_asdf1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
