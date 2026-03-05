(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TopFrame");
            this.set_titletext("Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fav", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">마이메뉴001</Col></Row><Row><Col id=\"Column0\">마이메뉴002</Col></Row><Row><Col id=\"Column0\">마이메뉴003</Col></Row><Row><Col id=\"Column0\">마이메뉴004</Col></Row><Row><Col id=\"Column0\">마이메뉴005</Col></Row><Row><Col id=\"Column0\">마이메뉴006</Col></Row><Row><Col id=\"Column0\">마이메뉴007</Col></Row><Row><Col id=\"Column0\">마이메뉴008</Col></Row><Row><Col id=\"Column0\">마이메뉴009</Col></Row><Row><Col id=\"Column0\">마이메뉴010</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","39","50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"0","39","50","49",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_User");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","210","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("투비소프트");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","259","0","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("첫번쨰메뉴");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","btn00:0","0","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("두번쨰메뉴");
            obj.set_cssclass("btn_TF_Menu");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","btn00_00:0","0","106","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택메뉴");
            obj.set_cssclass("btn_TF_MenuS");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","234","10","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_Prev");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","1162","10","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_TF_Next");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Top");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_TF_Bg");
                p.Static00.move("0","0",null,null,"0","0");

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_TF_Logout");
                p.Button00.move(null,"0","39","50","10",null);

                p.Button00_00.set_taborder("2");
                p.Button00_00.set_cssclass("btn_TF_User");
                p.Button00_00.move(null,"0","39","50","49",null);

                p.Static00_00.set_taborder("3");
                p.Static00_00.set_text("투비소프트");
                p.Static00_00.set_cssclass("sta_TF_Logo");
                p.Static00_00.move("0","0","210","50",null,null);

                p.btn00.set_taborder("4");
                p.btn00.set_text("첫번쨰메뉴");
                p.btn00.set_cssclass("btn_TF_Menu");
                p.btn00.set_fittocontents("width");
                p.btn00.move("259","0","120","50",null,null);

                p.btn00_00.set_taborder("5");
                p.btn00_00.set_text("두번쨰메뉴");
                p.btn00_00.set_cssclass("btn_TF_Menu");
                p.btn00_00.set_fittocontents("width");
                p.btn00_00.move("btn00:0","0","120","50",null,null);

                p.btn00_00_00.set_taborder("6");
                p.btn00_00_00.set_text("선택메뉴");
                p.btn00_00_00.set_cssclass("btn_TF_MenuS");
                p.btn00_00_00.set_fittocontents("width");
                p.btn00_00_00.move("btn00_00:0","0","106","50",null,null);

                p.btn01.set_taborder("7");
                p.btn01.set_cssclass("btn_TF_Prev");
                p.btn01.set_text("");
                p.btn01.move("234","10","20","30",null,null);

                p.btn01_00.set_taborder("8");
                p.btn01_00.set_cssclass("btn_TF_Next");
                p.btn01_00.set_text("");
                p.btn01_00.move("1162","10","20","30",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",500,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.move("457","0","39","50",null,null);

                p.Button00_00.set_visible("false");
                p.Button00_00.move(null,"127","39","50","43",null);

                p.btn00.move("35","0","120","50",null,null);

                p.btn00_00.move("btn00:0","0","120","50",null,null);

                p.btn00_00_00.move("btn00_00:0","0","106","50",null,null);

                p.btn01.move("10","10","20","30",null,null);

                p.Static00_00.set_visible("false");
                p.Static00_00.move("0","80","210","50",null,null);

                p.btn01_00.move("418","10","20","30",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TopFrame.xfdl", function() {
        /** Favorites popupdiv **/
        this.Button00_onclick = function(obj,e)
        {
        		this.PopupDiv00.trackPopupByComponent(obj, 0, 50)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("TopFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
