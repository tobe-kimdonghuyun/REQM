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
                this._setFormPosition(1280,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01","10","18","579","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Combo enable = false 인데 값이 바뀌는 현상");
            this.addChild(obj.name, obj);

            obj = new Static("sta38","53","200","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel15","133","200","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_JoinLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo02","228","180","222","59",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Combo0");
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("구분");
            var cbo02_innerdataset = new nexacro.NormalDataset("cbo02_innerdataset", obj);
            cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비3</Col></Row></Rows>");
            obj.set_innerdataset(cbo02_innerdataset);
            obj.set_text("투비1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta43","53","291","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel16","133","291","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_JoinLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo01","228","281","222","59",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Combo0");
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_accessibilitylabel("구분");
            var cbo01_innerdataset = new nexacro.NormalDataset("cbo01_innerdataset", obj);
            cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">투비1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">투비2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">투비3</Col></Row></Rows>");
            obj.set_innerdataset(cbo01_innerdataset);
            obj.set_text("투비1");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","56","400","232","61",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,970,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102418_Form_Work (1).xfdl", function() {

        this.staLabel16_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.staLabel16.addEventHandler("onclick",this.staLabel16_onclick,this);
        };
        this.loadIncludeScript("RP_102418_Form_Work (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
