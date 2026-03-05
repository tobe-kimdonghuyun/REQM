(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("multicombo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MultiCombo("MultiCombo00","29","229","271","41",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_type("search");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_innerdataset);
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","29","100","271","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_type("dropdown");
            var MultiCombo00_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_00_innerdataset", obj);
            MultiCombo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_00_innerdataset);
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_01","29","359","271","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_type("filter");
            var MultiCombo00_01_innerdataset = new nexacro.NormalDataset("MultiCombo00_01_innerdataset", obj);
            MultiCombo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/><Column id=\"readonlycolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_01_innerdataset);
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-56","-56","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","25","52","272","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("type : dropdown");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","25","176","272","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("type : search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","25","306","272","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("type : filter");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
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
        this.loadIncludeScript("RP_103934_multicombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
