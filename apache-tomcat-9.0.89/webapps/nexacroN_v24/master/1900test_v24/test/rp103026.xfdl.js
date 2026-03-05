(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Base");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비입니다.</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\">1</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">07</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">08</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","22","37","574","97",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("radio, accessibilitydesclevel 속성에 따른 음성출력(방향키 이동)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","71","177","210","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1. accessibilitydesclevel = all");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","69","252","351","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("첫번째 라디오");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">파란색</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">빨간색</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","72","329","210","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2. accessibilitydesclevel = child");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","70","404","351","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("두번째 라디오");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_accessibilitydesclevel("child");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">파란색</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">빨간색</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1280,1040,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("radio, accessibilitydesclevel 속성에 따른 음성출력(방향키 이동)");
                p.Button00.move("22","37","574","97",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("1. accessibilitydesclevel = all");
                p.Static00.move("71","177","210","40",null,null);

                p.Radio00.set_taborder("2");
                p.Radio00.set_accessibilitylabel("첫번째 라디오");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_rowcount("1");
                p.Radio00.move("69","252","351","53",null,null);

                p.Static00_00.set_taborder("3");
                p.Static00_00.set_text("2. accessibilitydesclevel = child");
                p.Static00_00.move("72","329","210","40",null,null);

                p.Radio00_00.set_taborder("4");
                p.Radio00_00.set_accessibilitylabel("두번째 라디오");
                p.Radio00_00.set_innerdataset(Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_rowcount("1");
                p.Radio00_00.set_accessibilitydesclevel("child");
                p.Radio00_00.move("70","404","351","53",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr",480,678,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.move("22","37","428","97",null,null);
            	}
            );
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
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.addEventHandler("onclick",this.Base_onclick,this);
        };
        this.loadIncludeScript("rp103026.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
