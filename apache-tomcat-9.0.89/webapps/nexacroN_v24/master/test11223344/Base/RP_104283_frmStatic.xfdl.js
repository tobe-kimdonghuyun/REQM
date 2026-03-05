(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmStatic00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_01","40","40","740","82",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\r\n12345678901");
            obj.set_fittocontents("height");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","40","309","740","82",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\r\n123456789012");
            obj.set_fittocontents("height");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","825","40","197","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("①공백 포함 글자수 : 112자\r\nwidth : 740px\r\n오류 발생(1행만 표시)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","825","170","197","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("②공백 포함 글자수 : 112자\r\nwidth : 739px\r\n오류 미발생");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","825","309","197","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("③공백 포함 글자수 : 113자\r\nwidth : 740px\r\n오류 미발생");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","40","170","739","82",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\r\n12345678901");
            obj.set_fittocontents("height");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","268","456","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj._setContents("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,1210,this,function(p){});
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

        };
        this.loadIncludeScript("RP_104283_frmStatic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
