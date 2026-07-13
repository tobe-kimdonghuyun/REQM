(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplecomponent");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.DataObject("DataObject00", this);
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Priority","size" : "256","type" : "STRING"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.VirtualFile("VirtualFile00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("sta00","81","75","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("priority");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cbo00","160","79","141","31",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_taborder("1");
            var cbo00_innerdataset = new nexacro.NormalDataset("cbo00_innerdataset", obj);
            cbo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "1:Critical","codecolumn" : "1"},{"datacolumn" : "2:Important","codecolumn" : "2"},{"datacolumn" : "3:Optional","codecolumn" : "3"}]});
            obj.set_innerdataset(cbo00_innerdataset);
            obj.set_text("3");
            obj.set_value("3:Optional");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("userid","140","18","161","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("label_name","30","23","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이름");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk00","45","201","192","42",null,null,null,null,null,null,this);
            obj.set_cssclass("chk_LOGIN_SaveId");
            obj.set_taborder("4");
            obj.set_text("chk00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","47","282","120","50",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Spinup");
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","190","280","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk01","400","157","116","63",null,null,null,null,null,null,this);
            obj.set_falsevalue("TEST");
            obj.set_taborder("7");
            obj.set_text("High");
            obj.set_truevalue("high");
            obj.set_value("high");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk01_00","544","157","116","63",null,null,null,null,null,null,this);
            obj.set_falsevalue("TEST");
            obj.set_taborder("8");
            obj.set_text("Medium");
            obj.set_truevalue("medium");
            obj.set_value("TEST");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("chk01_01","540","219","116","63",null,null,null,null,null,null,this);
            obj.set_falsevalue("TEST");
            obj.set_taborder("9");
            obj.set_text("Low");
            obj.set_truevalue("low");
            obj.set_value("TEST");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","415","332","375","270",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Priority\"/></Band><Band id=\"body\"><Cell text=\"bind:Priority\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","155","418","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","chk01","value","ds00","Priority");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","chk01_00","value","ds00","Priority");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","chk01_01","value","ds00","Priority");
            this.addChild(obj.name, obj);
            obj.bind();
            
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

        this.loadIncludeScript("samplecomponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
