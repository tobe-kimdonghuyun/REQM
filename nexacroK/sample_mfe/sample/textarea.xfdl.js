(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("textarea");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.TextArea("txa00","47","67","162","115",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_00","47","195","162","115",null,null,null,null,null,null,this);
            obj.set_scrollbartype("auto auto");
            obj.set_taborder("1");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_00_00","220","195","162","115",null,null,null,null,null,null,this);
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_taborder("2");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_01","219","65","162","115",null,null,null,null,null,null,this);
            obj.set_scrolltype("none");
            obj.set_taborder("3");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","640","857","0","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_02","409","65","162","115",null,null,null,null,null,null,this);
            obj.set_scrolltype("both");
            obj.set_taborder("5");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_01_00","581","63","162","115",null,null,null,null,null,null,this);
            obj.set_scrollpropagation("false");
            obj.set_scrolltype("both");
            obj.set_taborder("6");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_00_01","409","193","162","115",null,null,null,null,null,null,this);
            obj.set_scrollbartype("auto auto");
            obj.set_scrollpropagation("true false");
            obj.set_scrolltype("both");
            obj.set_taborder("7");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00_00_00_01","582","193","162","115",null,null,null,null,null,null,this);
            obj.set_scrollbartype("autoindicator autoindicator");
            obj.set_scrollpropagation("false true");
            obj.set_scrolltype("both");
            obj.set_taborder("8");
            obj.set_value("A\nB\nC\nD\nE\nF\nGA\nB\nC\nD\nE\nF\nG");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta00","410","29","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("scrollpropagation");
            this.addChild(obj.name, obj);

            obj = new nexacro.ListBox("lsb00","52","336","159","167",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("10");
            var lsb00_innerdataset = new nexacro.NormalDataset("lsb00_innerdataset", obj);
            lsb00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{}]});
            obj.set_innerdataset(lsb00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","235","335","228","162",null,null,null,null,null,null,this);
            obj.set_formscrollpropagation("none");
            obj.set_taborder("11");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","115","131","124","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","556","360","144","110",null,null,null,null,null,null,this);
            obj.set_formscrollpropagation("none");
            obj.set_taborder("12");
            obj.set_text("div00");
            obj.set_url("sample::test.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tab("tab00","152","547","150","100",null,null,null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("pdiv00","438","564","220","100",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage1
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2
            obj = new nexacro.Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00
            obj = new nexacro.Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::test.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("textarea.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
