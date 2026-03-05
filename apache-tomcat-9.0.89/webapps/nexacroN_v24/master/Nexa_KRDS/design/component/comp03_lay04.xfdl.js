(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay04");
            this.set_titletext("레이아웃 및 표현_디스클로저");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","176","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("디스클로저");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","145","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Disclosure");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("디스클로저는 특정한 정보/컨트롤/섹션에 관련된 부가적인 정보를 표시하거나 숨기는 데 사용되는 요소이다. 디스클로저 하위 콘텐츠 섹션은 기본으로 축소된 상태로 제공되며 사용자가 요청하는 경우에 확장되어 자세한 정보가 표시된다. 이는 사용자의 인지적 부담을 감소시키고 정보를 빠르게 훑어보는 데 도움이 된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","Static00_01_00:80","200","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Disclosure 닫힘");
            obj.set_cssclass("btn_WF_DiscExpand");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button02:8",null,"0","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("단계1 : 주소조회");
            obj.set_cssclass("sta_WF_DiscList");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","31","200","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("단계2 : 조회 결과 확인");
            obj.set_cssclass("sta_WF_DiscList");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02_00","0","Div00:8","230","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체 2단계(Disclosure 펼침)");
            obj.set_cssclass("btn_WF_DiscCollapse");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Button02_00:8",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","1","200","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("단계1 : 주소조회");
            obj.set_cssclass("sta_WF_DiscList");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","31","200","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("단계2 : 조회 결과 확인");
            obj.set_cssclass("sta_WF_DiscList");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("단계1 : 주소조회");
                p.Static02.set_cssclass("sta_WF_DiscList");
                p.Static02.move("0","1","200","26",null,null);

                p.Static02_00.set_taborder("1");
                p.Static02_00.set_text("단계2 : 조회 결과 확인");
                p.Static02_00.set_cssclass("sta_WF_DiscList");
                p.Static02_00.move("0","31","200","26",null,null);
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
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_text("단계1 : 주소조회");
                p.Static02.set_cssclass("sta_WF_DiscList");
                p.Static02.move("0","1","200","26",null,null);

                p.Static02_00.set_taborder("1");
                p.Static02_00.set_text("단계2 : 조회 결과 확인");
                p.Static02_00.set_cssclass("sta_WF_DiscList");
                p.Static02_00.move("0","31","200","26",null,null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,740,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_디스클로저");
                p.set_cssclass("btn_WF_Txt");

                p.staH2.set_taborder("0");
                p.staH2.set_text("디스클로저");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","176","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Disclosure");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.set_fittocontents("width");
                p.staEtit.move("staDivider:15","0","145","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("디스클로저는 특정한 정보/컨트롤/섹션에 관련된 부가적인 정보를 표시하거나 숨기는 데 사용되는 요소이다. 디스클로저 하위 콘텐츠 섹션은 기본으로 축소된 상태로 제공되며 사용자가 요청하는 경우에 확장되어 자세한 정보가 표시된다. 이는 사용자의 인지적 부담을 감소시키고 정보를 빠르게 훑어보는 데 도움이 된다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"126","0",null);

                p.Button02.set_taborder("4");
                p.Button02.set_text("Disclosure 닫힘");
                p.Button02.set_cssclass("btn_WF_DiscExpand");
                p.Button02.move("0","Static00_01_00:80","200","28",null,null);

                p.Div00.set_taborder("6");
                p.Div00.set_text("Div00");
                p.Div00.set_visible("false");
                p.Div00.move("0","Button02:8",null,"0","0",null);

                p.Button02_00.set_taborder("5");
                p.Button02_00.set_text("전체 2단계(Disclosure 펼침)");
                p.Button02_00.set_cssclass("btn_WF_DiscCollapse");
                p.Button02_00.move("0","Div00:8","230","28",null,null);

                p.Div00_00.set_taborder("7");
                p.Div00_00.set_text("Div00");
                p.Div00_00.move("0","Button02_00:8",null,"60","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01_00.move("0","85",null,"204","0",null);
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
        this.registerScript("comp03_lay04.xfdl", function() {

        this.lay04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fvHeight = 60;
        };


        this.Button02_onclick = function(obj,e)
        {
        	var objTarget = this.Div00;
        	objTarget.visible = !objTarget.visible;
        	if(objTarget.visible) {
        	    obj.cssclass = "btn_WF_DiscCollapse";
        		obj.text = "Disclosure 펼침";
        		objTarget.setOffsetHeight(this.fvHeight);
        	}else{
        	    obj.cssclass = "btn_WF_DiscExpand";
        		obj.text = "Disclosure 닫힘";
        		objTarget.setOffsetHeight(0);
        	}
        	this.resetScroll();
        	this.parent.parent.resetScroll();
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	var objTarget = this.Div00_00;
        	objTarget.visible = !objTarget.visible;
        	if(objTarget.visible) {
        	    obj.cssclass = "btn_WF_DiscCollapse";
        		obj.text = "전체 2단계(Disclosure 펼침)";
        		objTarget.setOffsetHeight(this.fvHeight);
        	}else{
        	    obj.cssclass = "btn_WF_DiscExpand";
        		obj.text = "전체 2단계(Disclosure 닫힘)";
        		objTarget.setOffsetHeight(0);
        	}
        	this.resetScroll();
        	this.parent.parent.resetScroll();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay04_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
        };
        this.loadIncludeScript("comp03_lay04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
