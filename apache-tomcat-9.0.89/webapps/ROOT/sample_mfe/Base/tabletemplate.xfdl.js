(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tabletemplate");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(700,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","55","41","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("0/0");
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","373","135","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("0/1");
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","695","97","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("0/2");
            obj.set_taborder("2");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","862","141","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("1/0");
            obj.set_taborder("3");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn04","554","470","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("2/2");
            obj.set_taborder("4");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn05","529","603","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("2/1");
            obj.set_taborder("5");
            obj.set_text("btn05");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn06","69","768","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("1/1");
            obj.set_taborder("6");
            obj.set_text("btn06");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn07","80","565","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("2/0");
            obj.set_taborder("7");
            obj.set_text("btn07");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn08","594","406","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("1/2");
            obj.set_taborder("8");
            obj.set_text("btn08");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn09","139","743","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("3/0");
            obj.set_taborder("9");
            obj.set_text("btn09");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn10","963","179","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("3/1");
            obj.set_taborder("10");
            obj.set_text("btn10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn12","78","777","100%","100%",null,null,null,null,null,null,this);
            obj.set_tablecellarea("4/2");
            obj.set_taborder("11");
            obj.set_text("btn12");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn13","766","642","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("111111111111");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn11","824","571","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("2222222222222");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",700,680,this,function(p){});
            obj.set_tabletemplate("1* 1* 1* 1* / 1* 1* 1*");
            obj.set_type("table");
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

        this.loadIncludeScript("tabletemplate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
