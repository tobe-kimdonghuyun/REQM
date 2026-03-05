(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("edit_touch");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","37","22","209","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("Edit00");
            obj.set_text("Edit00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","37","90","209","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","280","26","284","112",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","37","158","212","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_type("search");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">aaa</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">aaaaa</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">bbbb</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","281","158","279","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","588","25","192","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("@@@@-@@-@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","35","226","368","166",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"textareacontrol\" edittype=\"textarea\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","597","114","166","59",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103267_edit_touch (2).xfdl", function() {

        this.edit_touch_onload = function(obj,e)
        {
        	this.Static00.set_text("enabletouchevent ::" + nexacro.getEnvironment().enabletouchevent);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.edit_touch_onload,this);
        };
        this.loadIncludeScript("RP_103267_edit_touch (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
