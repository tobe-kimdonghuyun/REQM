(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comboTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">라면</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">구두</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">짜장</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">짬뽕</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">라면</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">구두</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">짜장</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">짬뽕</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01","4","9","27","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","36","16","279","55",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("데스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","411","20","183","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","32","90","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">라면</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">김치</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">구두</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">신발</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","525","90","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">라면</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">김치</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">구두</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">신발</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("선택01");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","36","175","279","55",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("데스트2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","415","171","183","55",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","35","240","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","528","240","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("Dataset00_00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_text("선택01");
            obj.set_value("02");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","35","327","279","55",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("데스트2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","34","392","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","540","390","183","55",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","35","477","279","55",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("데스트2");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","34","542","470","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","552","540","423","67",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","39","620","183","55",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","44","712","232","76",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_accessibilitylabel("테스트중");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">aa</Col><Col id=\"datacolumn\">aa</Col></Row><Row><Col id=\"codecolumn\">bb</Col><Col id=\"datacolumn\">bb</Col></Row><Row><Col id=\"codecolumn\">cc</Col><Col id=\"datacolumn\">cc</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button02","343","697","318","97",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,990,this,function(p){});
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
        this.loadIncludeScript("RP_101797_RP_101793_comboTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
