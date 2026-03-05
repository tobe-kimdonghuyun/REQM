(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay02");
            this.set_titletext("레이아웃 및 표현_긴급 공지");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("긴급 공지");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_text("Critical alerts");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("긴급 공지는 본문 상단에 강조되어 표시되는 배너로 사용자에게 긴급하거나 중요한 정보를 전달하는 데 사용된다. 모든 공공 디지털 서비스에서 동일한 긴급 공지 컴포넌트를 사용함으로써 사용자는 긴급한 정보를 일관되고 예측 가능한 방식으로 찾고 이해할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00_01_00:80","105","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PC");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("true");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","Static01:24",null,"80","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_POP_Bg");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","16","77.02078521939954%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("긴급 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriEmergency");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","97","32","16",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","Div00:30",null,"80","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_POP_Bg");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","16","77.02078521939954%","48",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("안전 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriSafity");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","97","32","16",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","Div01:30",null,"80","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_POP_Bg");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","16","77.02078521939954%","48",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("안내 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriInfor");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","97","32","16",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("자세히보기");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilityrole("link");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","787","105","46",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Mobile");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("false");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","10","Static01_00:24","280","63",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_POP_Bg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","12","232","37",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("긴급 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriEmergencySm");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"15","22","31","12",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilitylabel("자세히보기");
            obj.set_accessibilityrole("link");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","10","Div03:30","280","63",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_POP_Bg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","12","232","37",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("안전 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriSafitySm");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00",null,"15","22","31","12",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilitylabel("자세히보기");
            obj.set_accessibilityrole("link");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","10","Div04:30","280","63",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_POP_Bg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","12","232","37",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("안내 공지 내용 표시");
            obj.set_cssclass("sta_POP_CriInforSm");
            this.Div05.addChild(obj.name, obj);

            obj = new Button("Button00",null,"15","22","31","12",null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_More");
            obj.set_accessibilitylabel("자세히보기");
            obj.set_accessibilityrole("link");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00","0","Div02:0","115","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("긴급 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriEmergency");
                p.Static00.move("16","16","77.02078521939954%","48",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("자세히보기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"24","97","32","16",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("안전 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriSafity");
                p.Static00.move("16","16","77.02078521939954%","48",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("자세히보기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"24","97","32","16",null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("안내 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriInfor");
                p.Static00.move("16","16","77.02078521939954%","48",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_text("자세히보기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"24","97","32","16",null);
            	}
            );
            this.Div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div02.form
            obj = new Layout("Layout0","",0,0,this.Div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("긴급 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriEmergencySm");
                p.Static00.move("12","12","232","37",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilitylabel("자세히보기");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"15","22","31","12",null);
            	}
            );
            this.Div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03.form
            obj = new Layout("Layout0","",0,0,this.Div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("안전 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriSafitySm");
                p.Static00.move("12","12","232","37",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilitylabel("자세히보기");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"15","22","31","12",null);
            	}
            );
            this.Div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div04.form
            obj = new Layout("Layout0","",0,0,this.Div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("안내 공지 내용 표시");
                p.Static00.set_cssclass("sta_POP_CriInforSm");
                p.Static00.move("12","12","232","37",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.set_accessibilitylabel("자세히보기");
                p.Button00.set_accessibilityrole("link");
                p.Button00.move(null,"15","22","31","12",null);
            	}
            );
            this.Div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div05.form
            obj = new Layout("Layout0","",0,0,this.Div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_긴급 공지");
                p.set_cssclass("btn_WF_Txt");

                p.staH2.set_taborder("0");
                p.staH2.set_text("긴급 공지");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.set_fittocontents("width");
                p.staH2.move("0","0","160","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.set_text("Critical alerts");
                p.staEtit.move("staDivider:15","0","160","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("긴급 공지는 본문 상단에 강조되어 표시되는 배너로 사용자에게 긴급하거나 중요한 정보를 전달하는 데 사용된다. 모든 공공 디지털 서비스에서 동일한 긴급 공지 컴포넌트를 사용함으로써 사용자는 긴급한 정보를 일관되고 예측 가능한 방식으로 찾고 이해할 수 있다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"126","0",null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("PC");
                p.Static01.set_cssclass("sta_WF_H4_pc");
                p.Static01.set_visible("true");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","Static00_01_00:80","105","46",null,null);

                p.Div00.set_taborder("5");
                p.Div00.set_cssclass("div_POP_Bg");
                p.Div00.set_visible("true");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("10","Static01:24",null,"80","10",null);

                p.Div01.set_taborder("6");
                p.Div01.set_cssclass("div_POP_Bg");
                p.Div01.set_visible("true");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("10","Div00:30",null,"80","10",null);

                p.Div02.set_taborder("7");
                p.Div02.set_cssclass("div_POP_Bg");
                p.Div02.set_text("");
                p.Div02.set_visible("true");
                p.Div02.set_accessibilityenable("false");
                p.Div02.move("10","Div01:30",null,"80","10",null);

                p.Static01_00.set_taborder("8");
                p.Static01_00.set_text("Mobile");
                p.Static01_00.set_cssclass("sta_WF_H4_pc");
                p.Static01_00.set_visible("false");
                p.Static01_00.set_accessibilityrole("heading3");
                p.Static01_00.move("0","787","105","46",null,null);

                p.Div03.set_taborder("9");
                p.Div03.set_cssclass("div_POP_Bg");
                p.Div03.set_text("");
                p.Div03.set_visible("false");
                p.Div03.move("10","Static01_00:24","280","63",null,null);

                p.Div04.set_taborder("10");
                p.Div04.set_cssclass("div_POP_Bg");
                p.Div04.set_text("");
                p.Div04.set_visible("false");
                p.Div04.move("10","Div03:30","280","63",null,null);

                p.Div05.set_taborder("11");
                p.Div05.set_cssclass("div_POP_Bg");
                p.Div05.set_text("");
                p.Div05.set_visible("false");
                p.Div05.move("10","Div04:30","280","63",null,null);

                p.Static00.set_taborder("12");
                p.Static00.move("0","Div02:0","115","30",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1240,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01_00.move("0","85",null,"178","0",null);

                p.Static01.set_visible("false");
                p.Static01.move("0","763","105","46",null,null);

                p.Static01_00.set_visible("true");
                p.Static01_00.move("0","Static00_01_00:80","105","46",null,null);

                p.Div02.set_visible("false");

                p.Div01.set_visible("false");

                p.Div00.set_visible("false");

                p.Div03.set_visible("true");

                p.Div04.set_visible("true");

                p.Div05.set_visible("true");

                p.Static00.move("0","Div05:0","115","30",null,null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay02.xfdl", function() {

        this.lay02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay02_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("comp03_lay02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
