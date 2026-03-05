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
            this.set_titletext("Search+Detail");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,872);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "01","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "02","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "03","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "04","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "05","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "06","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "07","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "08","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "09","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "10","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "11"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "12"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "13"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "14"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "15"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00_01","30","30","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00_00","30","70",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09_00_00","30","130",null,"50","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","30","200",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Full");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","332","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelE");
            obj.set_text("필수에디트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","30","372",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","30","432","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("에디트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00_00","30","472",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","30","532","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","30","572","170","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "A"},{"datacolumn" : "B"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta03","30","632","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("캘린더");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","30","672",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","30","732","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("콤보");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","30","772",null,"50","34",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("유형선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","290",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Boundary");
            obj.set_accessibilityenable("false");
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
        this.loadIncludeScript("Temp07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
