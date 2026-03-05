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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","58","162","232","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("라디오 테스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","60","270","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","70","370","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">테스트1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">테스트2</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,desktopScr",1280,720,this,function(p){});
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
        this.loadIncludeScript("RP_102750_acc_radio_test1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
