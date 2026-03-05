(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_btbnt00_m01");
            this.set_titletext("공지사항목록조회_시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","23","43","260","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("combo");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","44","200","549","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">111111</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">222222</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">333333</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("111111");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","72","390","301","117",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr,mobieScr",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("combo");
                p.Button00.move("23","43","260","66",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_innerdataset(Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_text("111111");
                p.Combo00.set_value("0");
                p.Combo00.set_index("0");
                p.Combo00.move("44","200","549","100",null,null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("Button01");
                p.Button01.move("72","390","301","117",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",780,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("그리드 tree");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
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
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("rp103188.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
