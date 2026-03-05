(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","30","35","170","55",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","700","20","470","230",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","30","110","405","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","34","206","402","128",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103256_Form_Work.xfdl", function() {


        this.Edit00_onlbuttondown = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.Edit00_ontouchstart = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.TextArea01_ontouchstart = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.TextArea01_onrbuttondown = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.Button00_onlbuttondown = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.Button00_ontouchstart = function(obj,e)
        {
        	this.TextArea00.insertText("□ "+obj.name + " / " + e.eventid + "\n");
        };

        this.Button00_onclick = function(obj,e)
        {
        	alert("nexacro.getEnvironment().enabletouchevent = "+nexacro.getEnvironment().enabletouchevent);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("ontouchstart",this.Button00_ontouchstart,this);
            this.Button00.addEventHandler("onlbuttondown",this.Button00_onlbuttondown,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00.addEventHandler("onlbuttondown",this.Edit00_onlbuttondown,this);
            this.Edit00.addEventHandler("ontouchstart",this.Edit00_ontouchstart,this);
            this.TextArea01.addEventHandler("ontouchstart",this.TextArea01_ontouchstart,this);
            this.TextArea01.addEventHandler("onrbuttondown",this.TextArea01_onrbuttondown,this);
        };
        this.loadIncludeScript("RP_103256_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
