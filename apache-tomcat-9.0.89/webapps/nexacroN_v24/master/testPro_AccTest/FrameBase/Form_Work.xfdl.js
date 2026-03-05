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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "\n a1","Column1" : "\n a2","Column2" : "\n a3","Column3" : "a4"},{"Column0" : "b1","Column1" : "b2","Column2" : "b3","Column3" : "b4"},{"Column0" : "c1","Column1" : "c2","Column2" : "c3","Column3" : "c4"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","30","137","54",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_accessibilitylabel("라벨");
            obj.set_accessibilitydescription("디스크립션");
            obj.set_accessibilityaction("액선");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","76","113","744","327",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"92\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"textareacontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","50","460","744","327",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00_00");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이터 없음");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","333","896","221","92",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","346","1620","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","307","2278","178","98",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
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
        this.registerScript("Form_Work.xfdl", function() {

        this.Button04_onclick = function(obj,e)
        {

        };

        this.Button00_onclick = function(obj,e)
        {
        	var objEnv = nexacro.getEnvironment();
        	objEnv.playAccessibility( this.Grid00 );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
