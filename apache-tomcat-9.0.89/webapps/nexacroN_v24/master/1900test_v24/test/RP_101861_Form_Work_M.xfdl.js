(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PS_UI_0028");
            this.set_titletext("사업안내 주거급여소개");
            this.set_accessibilityenable("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">중위소득 48%</Col><Col id=\"Column1\">1,069,654</Col><Col id=\"Column2\">1,767,652</Col><Col id=\"Column3\">2,263,035</Col><Col id=\"Column4\">2,750,358</Col><Col id=\"Column5\">3,213,953</Col><Col id=\"Column6\">3,656,817</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"TITLE\">공지사항첫번째</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"TITLE\">공지사항두번째</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"alert\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/><Column id=\"birth\" type=\"STRING\" size=\"256\"/><Column id=\"tel\" type=\"STRING\" size=\"256\"/><Column id=\"addr\" type=\"STRING\" size=\"256\"/><Column id=\"money\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/><Column id=\"yn2\" type=\"STRING\" size=\"256\"/><Column id=\"yn1\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"status\">진행</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">A</Col><Col id=\"birth\">19990417</Col><Col id=\"tel\">01012345678</Col><Col id=\"addr\">봉은사로 617</Col><Col id=\"money\">1000000</Col><Col id=\"desc\">공사</Col><Col id=\"yn2\">Y</Col><Col id=\"yn1\">Y</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"status\">접수</Col><Col id=\"alert\">발송</Col><Col id=\"nm\">B</Col><Col id=\"birth\">19000101</Col><Col id=\"tel\">01012345678</Col><Col id=\"addr\">삼성동 108-7</Col><Col id=\"money\">1000</Col><Col id=\"desc\">내용</Col><Col id=\"yn2\">N</Col><Col id=\"yn1\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("cal", this);
            obj._setContents("<ColumnInfo><Column id=\"start\" type=\"STRING\" size=\"256\"/><Column id=\"ed\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"start\">20250207</Col><Col id=\"ed\">20250210</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","26","15","165","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","238","17","39","54",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","29","124","228","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">111</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">222</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">333</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">444</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">555</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("111");
            obj.set_value("01");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,desktopScr,mobileScr,tableScr",380,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101861_Form_Work_M.xfdl", function() {

        this.Combo00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("RP_101861_Form_Work_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
