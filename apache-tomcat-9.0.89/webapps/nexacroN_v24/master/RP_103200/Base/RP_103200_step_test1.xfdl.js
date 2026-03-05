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
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","131","127","290","84",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_background("blue");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","93","130","293","322",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","81","28","321","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","26","149","366","284",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","480","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_positionstep("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","96","270","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,768,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontouchstart",this.Form_Work_ontouchstart,this);
            this.addEventHandler("ontouchend",this.Form_Work_ontouchend,this);
            this.addEventHandler("ontimer",this.Form_Work_ontimer,this);
        };
        this.loadIncludeScript("RP_103200_step_test1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
