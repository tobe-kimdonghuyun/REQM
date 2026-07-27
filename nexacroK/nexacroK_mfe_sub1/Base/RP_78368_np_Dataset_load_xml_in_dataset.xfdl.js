(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("New Form");
            this.getSetter("classname").set("main");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_form", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","1.97%","82",null,"46","80.66%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("load XML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","22.89%","82",null,"46","59.74%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Show saveXML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","15","13","598","22",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_taborder("2");
            obj.set_text("Load XML file in Dataset using Dataset\'s url, serverdatasetid property");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","1.97%","144",null,"274","1.97%",null,null,null,null,null,this);
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",760,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_78368_np_Dataset_load_xml_in_dataset.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,  e)
        {
            this.ds_form.set_url("xml::eng.xml");
        	this.ds_form.set_serverdatasetid("datasetXML");
        	this.ds_form.load();
        };

        // Dataset's SaveXML data will be displayed on the TextArea
        this.Button01_onclick = function(obj,  e)
        {
        	this.TextArea00.set_value(this.ds_form.saveXML());
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_78368_np_Dataset_load_xml_in_dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=RP_78368_np_Dataset_load_xml_in_dataset.xfdl.js.map
