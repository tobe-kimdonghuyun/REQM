(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","25","9","318","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("테스트 standard");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","23","140",null,"129","39",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("combotitle").set("유저콤보 테스트");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">123</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">abc</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">456</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","29","309",null,"109","61",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","29","448","235","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1. 스테틱 컴포넌트 테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","27","506","324","47",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Mobile_screen",480,600,this,function(p){});
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
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
