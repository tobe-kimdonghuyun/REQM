(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp21");
            this.set_titletext("New component");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "01","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "02","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "03","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "04","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "05","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "06","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "07","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "08","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "09","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "10","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "11"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "12"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "13"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "14"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "15"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new CheckBoxSet("CheckBoxSet00","30","75","416","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "01","datacolumn" : "엑스플랫폼"},{"codecolumn" : "02","datacolumn" : "넥사플랫폼"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","30","35","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("CheckBoxSet");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","30","145","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("DateField");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","30","185","416","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_labeltext("DateField");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","10","315","460","365",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","30","275","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("DateRangePicker");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00_00","30","716","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("MultiCombo");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_01_00","30","756","416","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_edittype("singletag");
            obj.set_type("search");
            obj.set_showselectallcheckbox("true");
            obj.set_buttonsize("24 24");
            var MultiCombo00_01_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_01_00_innerdataset", obj);
            MultiCombo00_01_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "투비소프트"},{"datacolumn" : "투비소프트"},{"datacolumn" : "투비소프트"},{"datacolumn" : "투비소프트"},{"datacolumn" : "투비소프트"},{"datacolumn" : "투비소프트"}]});
            obj.set_innerdataset(MultiCombo00_01_00_innerdataset);
            obj.set_text("투비소프트");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,872,this,function(p){});
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
        this.loadIncludeScript("Temp09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
