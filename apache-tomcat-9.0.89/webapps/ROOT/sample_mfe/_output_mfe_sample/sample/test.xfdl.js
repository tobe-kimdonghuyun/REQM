(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_scrollpropagation("vertical");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","63","65","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.MultiCombo("MultiCombo00","294","68","247","60",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_edittype("singletag");
            obj.set_showselectallcheckbox("true");
            obj.set_taborder("1");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"},{"codecolumn" : "5","datacolumn" : "5"}]});
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateRangePicker("DateRangePicker00","84","215","441","224",null,null,null,null,null,null,this);
            obj.set_displaytype("time");
            obj.set_headlinetimeformat("SHORTTIME");
            obj.set_taborder("2");
            obj.set_type("range");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateField("DateField00","581","230","250","60",null,null,null,null,null,null,this);
            obj.set_displayformat("SHORTDATE, SHORTTIME");
            obj.set_format("HH:mm");
            obj.set_inputtype("time");
            obj.set_labeltext("DateField00");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.DateRangePicker("DateRangePicker00_00","84","448","441","224",null,null,null,null,null,null,this);
            obj.set_displaytype("date");
            obj.set_headlinetimeformat("SHORTTIME");
            obj.set_taborder("4");
            obj.set_type("range");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","73","143","127","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd00","609","49","212","139",null,null,null,null,null,null,this);
            obj.set_binddataset("ds00");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn00_onclick = function(obj,e)
        {
        	this.edt00.visible = !this.edt00.visible;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
