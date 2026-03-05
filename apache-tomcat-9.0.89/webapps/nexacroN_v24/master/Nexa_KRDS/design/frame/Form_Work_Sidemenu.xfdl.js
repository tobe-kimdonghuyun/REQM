(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work_Sidemenu");
            this.set_titletext("사이드바");
            if (Form == this.constructor)
            {
                this._setFormPosition(248,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sidemnu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Lev","type" : "STRING","size" : "256"},{"id" : "MENU_1depth","type" : "STRING","size" : "256"},{"id" : "MENU_2depth","type" : "STRING","size" : "256"},{"id" : "MENU_3depth","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_1depth" : "1Depth-title","Lev" : "0","MENU_3depth" : "3Depth","MENU_2depth" : "2Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "1","MENU_3depth" : "3Depth","MENU_2depth" : "2Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "2","MENU_3depth" : "3Depth"},{"MENU_1depth" : "1Depth-title","Lev" : "2","MENU_3depth" : "3Depth"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","248","76",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트");
            obj.set_cssclass("sta_WF_Side1dpe");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static00:0","248","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2dep");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:0","248","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depColl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button00_00:0","248","143",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","8",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Button00:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Button00_00:0",null,"42","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Last depth");
            obj.set_cssclass("btn_WF_SideLastdep");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","0","Div00:0",null,"58","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depExp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","0","Button00_01:0",null,"58","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2Depth");
            obj.set_cssclass("btn_WF_Side2depExp");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",248,1200,this,function(p){});
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
        this.loadIncludeScript("Form_Work_Sidemenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
