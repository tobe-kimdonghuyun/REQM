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
            obj.set_text("Tab컴포넌트 접근 시 화면 스크롤 아래로 내려감");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","130",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GBar");
            obj.set_text("<fc v=\'#3683e2\'><fs v=\'13\'>TOBESOFT</fs></fc>\r\nComponent KIT\r\n<fc v=\'#acafbb\'><fs v=\'11\'>btn, chk, rdo, tab, img, grd, tree</fs></fc>");
            obj.set_usedecorate("true");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"194","61","50","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("02");
            obj.set_cssclass("sta_WF_GNum");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00_00","50","290",null,"198","50",null,"1050",null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","98","339","84","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Button");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","317","339","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","317","373","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","392","365","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("투비");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","317","421","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","392","413","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("투비");
            obj.set_fittocontents("none");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_01","50","469",null,"346","50",null,"1050",null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","97","519","47","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Tab");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static120","317","584","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","314","617","370","150",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("13");
            obj.set_tabindex("0");
            obj.set_focusacceptable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("텝페이지01");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("첫번째 탭 페이지입니다.");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","59","72","179","40",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("텝페이지02");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("두번째 탭 페이지입니다.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("텝페이지03");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("세번째 탭 페이지입니다.");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("텝페이지04");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"30","10",null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("네번째 탭 페이지입니다.");
            this.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta109_00_00_00_00_00_00_00_00_00","50","836",null,"266","50",null,"1050",null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","97","886","163","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("ImageViewer");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","317","883","35","13",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Static("sta106_00","317","906","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("stretch : fixaspectratio");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","317","941","170","112",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_image("url(\'theme://images/sta_WF_Logo.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_accessibilitylabel("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Static("sta106_00_00","758","906","190","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("stretch : fit");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","758","941","285","112",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_image("url(\'theme://images/sta_WF_Logo.png\')");
            obj.set_stretch("fit");
            obj.set_accessibilitylabel("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Static("sta109","50","1120",null,"500","50",null,"1050",null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_background("skyblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","97","1170","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Grid");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","130","1240","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Div("div00","911","1249","239","32",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","0","0",null,"28","153",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("커스텀버튼");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button35","89","0",null,"28","74",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button36",null,"0","71","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div00","130","1286","1020","290",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","0","1000","350",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dc_grd");
            obj.set_accessibilitylabel("체크박스 에디트 마스크에디트 콤보 텍스트 넘버 버튼 그리드표");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_autoenter("select");
            obj.set_createrowstype("all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"50\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Text\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"ds00\" combodatacol=\"text\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\" accessibilitydescription=\"팝업\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"총계\" displaytype=\"text\"/><Cell col=\"6\" colspan=\"2\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format><Format id=\"default_00\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/><Row size=\"50\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Text\"/><Cell col=\"6\" text=\"Number\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"ds00\" combodatacol=\"text\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"6\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"총계\" displaytype=\"text\"/><Cell col=\"6\" colspan=\"2\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("zStaLastComponent","0","3240","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","314","513","466","41",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_accessibilityenable("false");
            obj.set_text("탭페이지 접근 시 화면 스크롤 내려감.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("첫번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("Button00");
                p.Button00.move("59","72","179","40",null,null);
            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage1.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage1.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("두번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage2.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage2.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("세번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage3.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage3.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("네번째 탭 페이지입니다.");
                p.Static00.move("10","10",null,"30","10",null);
            	}
            );
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Tab00.Tabpage4.form
            obj = new Layout("mobile","",0,0,this.Tab00.Tabpage4.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button48.set_taborder("0");
                p.Button48.set_text("커스텀버튼");
                p.Button48.set_fittocontents("width");
                p.Button48.move("0","0",null,"28","153",null);

                p.Button35.set_taborder("1");
                p.Button35.set_text("행추가");
                p.Button35.set_cssclass("btn_WF_Add");
                p.Button35.move("89","0",null,"28","74",null);

                p.Button36.set_taborder("2");
                p.Button36.set_text("행삭제");
                p.Button36.set_cssclass("btn_WF_Delete");
                p.Button36.move(null,"0","71","28","0",null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("mobile","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button48.set_text("커스텀버튼");
                p.Button48.move(null,"0","119","50","220",null);

                p.Button36.move(null,"0","100","50","0",null);

                p.Button35.move(null,"0","100","50","110",null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid01.set_taborder("0");
                p.Grid01.set_binddataset("dc_grd");
                p.Grid01.set_accessibilitylabel("체크박스 에디트 마스크에디트 콤보 텍스트 넘버 버튼 그리드표");
                p.Grid01.set_autofittype("col");
                p.Grid01.set_selecttype("cell");
                p.Grid01.set_autoenter("select");
                p.Grid01.set_createrowstype("all");
                p.Grid01.move("0","0","1000","350",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("mobile","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid01.set_formatid("default_00");
                p.Grid01.move("0","0","1020","327",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
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
        this.registerScript("RP_102421_Form_Work.xfdl", function() {

        this.staLabel16_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("RP_102421_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
