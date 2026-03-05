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
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"nm\">AAA</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"nm\">BBB</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"nm\">CCC</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"nm\">DDD</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"nm\">EEE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","150","34","402","106",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인용");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","107","212","462","378",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"276\"/></Columns><Rows><Row size=\"43\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"no\"/><Cell col=\"1\" text=\"nm\"/></Band><Band id=\"body\"><Cell text=\"bind:no\"/><Cell col=\"1\" text=\"bind:nm\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("RP_102431_Form_Work (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
