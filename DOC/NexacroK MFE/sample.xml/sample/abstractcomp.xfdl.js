(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("abstractcomp");
            this.set_scrolltype("horizontal");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.AbstractSelectOne("AbstractSelectOne00","118","88","150","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("0");
            var AbstractSelectOne00_innerdataset = new nexacro.NormalDataset("AbstractSelectOne00_innerdataset", obj);
            AbstractSelectOne00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"},{"codecolumn" : "6","datacolumn" : "6"}]});
            obj.set_innerdataset(AbstractSelectOne00_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.AbstractSelectOne("AbstractSelectOne00_00","1015","700","150","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("1");
            var AbstractSelectOne00_00_innerdataset = new nexacro.NormalDataset("AbstractSelectOne00_00_innerdataset", obj);
            AbstractSelectOne00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"},{"codecolumn" : "6","datacolumn" : "6"}]});
            obj.set_innerdataset(AbstractSelectOne00_00_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","119","155","163","130",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrolltype("both");
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00","292","155","163","130",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrolltype("none");
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","407","170","163","130",null,null,null,null,null,null,this.div00_00.form);
            obj.set_border("1px solid blue");
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00.form.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00_00","465","155","163","130",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrolltype("vertical");
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","407","170","163","130",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_border("1px solid blue");
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00_00.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00_00.form.div00.addChild(obj.name, obj);

            obj = new nexacro.Div("div00_00_01","637","155","163","130",null,null,null,null,null,null,this);
            obj.set_border("1px solid blue");
            obj.set_formscrolltype("horizontal");
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00_01.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","407","170","163","130",null,null,null,null,null,null,this.div00_00_01.form);
            obj.set_border("1px solid blue");
            obj.set_taborder("1");
            obj.set_text("div00");
            this.div00_00_01.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","73","100","120","50",null,null,null,null,null,null,this.div00_00_01.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00_00_01.form.div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form.div00.form,function(p){});
            this.div00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00_00.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00_00.form.div00.form,function(p){});
            this.div00_00_00.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00_00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00_00.form,function(p){});
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00_01.form.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00_01.form.div00.form,function(p){});
            this.div00_00_01.form.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00_01.form
            obj = new nexacro.Layout("default","",0,0,this.div00_00_01.form,function(p){});
            this.div00_00_01.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("abstractcomp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
