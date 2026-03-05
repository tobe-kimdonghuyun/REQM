(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MF_Process");
            this.set_titletext("메인처리절차");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MF_Process.xfdl", function() {

        this.MF_Process_onload = function(obj,e)
        {
        		this.fn_create();
        };


        this.fn_create = function()
        {
        	var obj;

        	// UI Components Initialize
        	obj = new Panel("Panel00","0","30",null,null,"0","10",null,null,null,null,this);
        	obj.set_taborder("0");
        	obj.set_fittocontents("height");
        	obj.set_flexwrap("wrap");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panProcess00\"/><PanelItem id=\"PanelItem02\" componentid=\"panProcess01\"/><PanelItem id=\"PanelItem03\" componentid=\"panProcess02\"/><PanelItem id=\"PanelItem04\" componentid=\"panProcess03\"/><PanelItem id=\"PanelItem05\" componentid=\"panProcess04\"/><PanelItem id=\"PanelItem06\" componentid=\"panProcess05\"/><PanelItem id=\"PanelItem07\" componentid=\"panProcess06\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess00","110","285","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("1");
        	obj.set_cssclass("pan_MF_Process");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01","10","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("2");
        	obj.set_icon("url(\'theme://icon30/d_1_2.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00","37","120","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("3");
        	obj.set_text("공실정보 사전확인");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("4");
        	obj.set_icon("url(\'theme://icon30/a_1_2.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("5");
        	obj.set_text("계약완료");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess01","10","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("6");
        	obj.set_cssclass("pan_MF_ProcessS");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00_00","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("7");
        	obj.set_icon("url(\'theme://icon30/a_2_4.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00_00","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("8");
        	obj.set_text("입주신청");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess02","130","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("9");
        	obj.set_cssclass("pan_MF_ProcessN");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00_00_00","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("10");
        	obj.set_icon("url(\'theme://icon30/a_1_4.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00_00_00","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("11");
        	obj.set_text("안내전화");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess03","250","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("12");
        	obj.set_cssclass("pan_MF_ProcessN");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00_00\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00_00_00_00","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("13");
        	obj.set_icon("url(\'theme://icon30/a_2_2.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00_00_00_00","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("14");
        	obj.set_text("일정협의");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess04","370","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("15");
        	obj.set_cssclass("pan_MF_ProcessN");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00_00_00\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00_00_00_01","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("16");
        	obj.set_icon("url(\'theme://icon30/a_2_3.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00_00_00_01","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("17");
        	obj.set_text("시설물인계인수서확인");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess05","370","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("18");
        	obj.set_cssclass("pan_MF_ProcessN");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00_00_01\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Button("btn01_00_00_00_02","35","10","70","65",null,null,null,null,null,null,this);
        	obj.set_taborder("19");
        	obj.set_icon("url(\'theme://icon30/a_clean.png\')");
        	obj.set_cssclass("btn_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Static("Static00_00_00_00_02","35","75","70","80",null,null,null,null,null,null,this);
        	obj.set_taborder("20");
        	obj.set_text("공실정보 사전확인");
        	obj.set_cssclass("sta_MF_Pro");
        	this.addChild(obj.name, obj);
        	obj.show();

        	obj = new Panel("panProcess06","370","10","120","150",null,null,null,null,null,null,this);
        	obj.set_taborder("21");
        	obj.set_cssclass("pan_MF_ProcessEnd");
        	obj.set_type("vertical");
        	obj.set_flexcrossaxisalign("center");
        	obj.set_verticalgap("10");
        	obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00_00_02\"/></Contents>");
        	this.addChild(obj.name, obj);
        	obj.show();
        	// Layout Functions
        	//-- Default Layout : this
        	obj = new Layout("default","",1280,200,this,function(p){});
        	this.addLayout(obj.name, obj);

        	// BindItem Information


        	// TriggerItem Information

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MF_Process_onload,this);
        };
        this.loadIncludeScript("MF_Process.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
