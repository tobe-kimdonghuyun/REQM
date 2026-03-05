(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0024");
            this.set_titletext("공지사항 게시판 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1126,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"본부\" type=\"STRING\" size=\"256\"/><Column id=\"사업소\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">공지</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/><Col id=\"lev\">0</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"상태\"/><Col id=\"본부\"/><Col id=\"사업소\"/></Row><Row><Col id=\"NO\">2</Col></Row><Row><Col id=\"NO\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("Radio00","20","53","223","154",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitydesclevel("child");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3번</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","20","263","340","154",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3번</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","20","410","340","154",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_innerdataset = new nexacro.NormalDataset("Radio01_00_innerdataset", obj);
            Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3번</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_00_innerdataset);
            obj.set_text("1번");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00_00","30","620","340","154",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_00_00_innerdataset = new nexacro.NormalDataset("Radio01_00_00_innerdataset", obj);
            Radio01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3번</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_00_00_innerdataset);
            obj.set_text("3번");
            obj.set_value("3");
            obj.set_index("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1126,900,this,function(p){});
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
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_01_onitemchanged,this);
            this.Radio01.addEventHandler("onitemchanged",this.Radio00_00_onitemchanged,this);
            this.Radio01_00.addEventHandler("onitemchanged",this.Radio00_00_onitemchanged,this);
            this.Radio01_00_00.addEventHandler("onitemchanged",this.Radio00_00_onitemchanged,this);
        };
        this.loadIncludeScript("RP_101569_RP_101569_PS_UI_0024_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
