(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("allcomponent");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Div("div00","16","157","161","131",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("pdiv00","194","160","177","133",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.View("View00","101","620","200","150",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","82","48","120","50",null,null,null,null,null,null,this.View00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.View00.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","402","155","228","144",null,null,null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","10","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","10","75","150","47",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","180","75","131","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.MaskEdit("msk00","328","77","110","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","453","77","113","52",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","140","10","120","44",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("sta00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdo00","33","315","117","70",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk00","176","312","105","84",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("chk00");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","304","308","125","103",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Spin("spn00","579","79","141","52",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new nexacro.Menu("mnu00","532","306","95","49",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new nexacro.Calendar("cal00","483","389","182","57",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","64","425","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateField("DateField00","670","222","250","60",null,null,null,null,null,null,this);
            obj.set_labeltext("DateField00");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","457","462","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00
            obj = new nexacro.Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.View00.form
            obj = new nexacro.Layout("default","",0,0,this.View00.form,function(p){});
            this.View00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("allcomponent.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	this.fetchStateData(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
        };

        this.loadIncludeScript("allcomponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
