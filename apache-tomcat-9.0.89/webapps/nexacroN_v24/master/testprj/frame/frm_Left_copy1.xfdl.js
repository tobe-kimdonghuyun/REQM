(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_border("5px solid green");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","120","88","215","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","160","245","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_Left_copy1.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.gfnOpenMenu("MNG_0000000140", "", false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_Left_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
