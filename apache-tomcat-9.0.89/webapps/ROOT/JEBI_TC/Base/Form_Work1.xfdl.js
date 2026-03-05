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
            obj = new Dataset("dsTC", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"check\" type=\"INT\" size=\"256\"/><Column id=\"testscript_no\" type=\"STRING\" size=\"256\"/><Column id=\"testscript_id\" type=\"STRING\" size=\"256\"/><Column id=\"description\" type=\"STRING\" size=\"256\"/><Column id=\"browser\" type=\"STRING\" size=\"256\"/><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"action\" type=\"STRING\" size=\"256\"/><Column id=\"element\" type=\"STRING\" size=\"256\"/><Column id=\"dictionaryKey\" type=\"STRING\" size=\"256\"/><Column id=\"count\" type=\"STRING\" size=\"256\"/><Column id=\"time\" type=\"STRING\" size=\"256\"/><Column id=\"input\" type=\"STRING\" size=\"256\"/><Column id=\"zoom\" type=\"STRING\" size=\"256\"/><Column id=\"ime\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"compareType\" type=\"STRING\" size=\"256\"/><Column id=\"resultValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectValue\" type=\"STRING\" size=\"256\"/><Column id=\"expectUI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">1</Col><Col id=\"browser\">1</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"browser\">1</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"browser\">2</Col></Row><Row><Col id=\"level\">4</Col><Col id=\"browser\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","33","49","160","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
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
        this.registerScript("Form_Work1.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.dsTC.filter("browser == '2'");
        	trace(this.dsTC.saveXML());
        	var objDs = new Dataset("output");
        	objDs.copyData(this.dsTC, true);
        	trace(objDs.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
