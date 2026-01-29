(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testTextarea");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "테스트1\n\t테스트2\n\t테스트3\n\t테스트4\n\t테스트5\n\t테스트6\n\t테스트7\n\t테스트8\n\t테스트9\n\t테스트10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button02","86","58","143","82",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","83","166","260","157",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","39","20","70","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","37","94","70","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","37","174","70","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","37","264","70","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","27","364","70","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","79","361","108","85",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","61","477","325","194",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","37","35","136","93",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","27","345","136","93",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","27","625","136","93",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Static00");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","89","722","138","61",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","69","1728","143","82",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RP_104378_testScrollDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
