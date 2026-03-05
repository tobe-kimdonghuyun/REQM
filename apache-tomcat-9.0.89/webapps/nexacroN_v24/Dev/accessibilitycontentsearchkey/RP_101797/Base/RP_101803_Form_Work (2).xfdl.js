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
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">패밀리사이트</Col></Row><Row><Col id=\"data\">1파일명.zip</Col><Col id=\"cd\">0</Col></Row><Row><Col id=\"data\">2파일명.zip</Col><Col id=\"cd\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">03</Col><Col id=\"data\">전체</Col></Row><Row><Col id=\"data\">제목</Col><Col id=\"cd\">01</Col></Row><Row><Col id=\"data\">내용</Col><Col id=\"cd\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","47","30","252","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("콤보 테스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","38","117","217","61",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보처리방침");
            obj.set_accessibilitylabel("개인정보처리방침");
            obj.set_accessibilitydescription("링크");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","303","117","255","55",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("홈페이지 이용약관");
            obj.set_accessibilitylabel("홈페이지 이용약관");
            obj.set_accessibilitydescription("링크");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","611","117","246","54",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("패밀리사이트");
            obj.set_usesoftkeyboard("false");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("data");
            obj.set_text("패밀리사이트");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","875","117","97","55",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이동");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","47","239","393","113",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("Dataset01");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("data");
            obj.set_text("전체");
            obj.set_value("03");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","467","239","640","113",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("검색어를 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1149","239","121","113",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","47","399","398","68",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","47","503","391","55",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static02");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1012","41","242","164",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101803_Form_Work (2).xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	alert("이용약관 버튼 클릭됨");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_101803_Form_Work (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
