(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("con01");
            this.set_titletext("콘텐츠_접근 가능한 미디어");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,880);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접근 가능한 미디어");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","279","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Accessible Multimedia");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("미디어 콘텐츠에 설명이 필요한 경우에 사용하는 컴포넌트이다. 정지된 이미지에 설명을 제공할 때에는 숨김 콘텐츠를, 오디오/비디오/멀티미디어 콘텐츠에 설명을 제공할 때는 접근 가능한 미디어 컴포넌트를 사용한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","Static00_01_00_02:100",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_02_00:24",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("콘텐츠");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","Static00_02:16",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("오디오 콘텐츠");
            obj.set_cssclass("sta_WF_ParaH5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Static00_02_01:11",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("청각적 정보만으로 구성된 미디어 콘텐츠이다. 만약 비디오가 포함되었다고 하더라도 해당 비디오가 단순 커버 이미지인 경우, 오디오 콘텐츠로 간주한다. 캡션 또는 단순 원고(Simple transcripts)를 대체 정보로 제공해야 한다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","Static00:24","233","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("비디오 콘텐츠");
            obj.set_cssclass("sta_WF_ParaH5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00_02_01_00:16",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("소리 없이 화면만으로 구성된 미디어 콘텐츠이다. 만약 오디오가 포함되었다고 하더라도 단순 배경음인 경우, 비디오 콘텐츠로 간주한다. 화면 해설 또는 설명적 원고를 대체 정보로 제공해야 한다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00","0","Static00_00:24","233","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("멀티미디어 콘텐츠");
            obj.set_cssclass("sta_WF_ParaH5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00_02_01_00_00:16",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("오디오, 비디오를 모두 포함한 미디어 콘텐츠이다. 콘텐츠의 복잡성, 중요도에 따라 여러 가지 대체 정보를 복합적으로 제공해야 한다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,880,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("콘텐츠_접근 가능한 미디어");

                p.staH2.set_taborder("0");
                p.staH2.set_text("접근 가능한 미디어");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","300","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.set_visible("true");
                p.staDivider.move("staH2:15","19","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Accessible Multimedia");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","279","60",null,null);

                p.Static00_01_00_02.set_taborder("3");
                p.Static00_01_00_02.set_text("미디어 콘텐츠에 설명이 필요한 경우에 사용하는 컴포넌트이다. 정지된 이미지에 설명을 제공할 때에는 숨김 콘텐츠를, 오디오/비디오/멀티미디어 콘텐츠에 설명을 제공할 때는 접근 가능한 미디어 컴포넌트를 사용한다.");
                p.Static00_01_00_02.set_cssclass("sta_WF_Descript");
                p.Static00_01_00_02.set_fittocontents("height");
                p.Static00_01_00_02.move("0","85",null,"100","0",null);

                p.Static00_02_00.set_taborder("4");
                p.Static00_02_00.set_text("유형");
                p.Static00_02_00.set_cssclass("sta_WF_ParaH2_pc");
                p.Static00_02_00.set_accessibilityrole("heading3");
                p.Static00_02_00.move("0","Static00_01_00_02:100",null,"60","0",null);

                p.Static00_02.set_taborder("5");
                p.Static00_02.set_text("콘텐츠");
                p.Static00_02.set_cssclass("sta_WF_ParaH3_pc");
                p.Static00_02.set_accessibilityrole("heading4");
                p.Static00_02.move("0","Static00_02_00:24",null,"48","0",null);

                p.Static00_02_01.set_taborder("6");
                p.Static00_02_01.set_text("오디오 콘텐츠");
                p.Static00_02_01.set_cssclass("sta_WF_ParaH5");
                p.Static00_02_01.set_accessibilityrole("heading5");
                p.Static00_02_01.move("0","Static00_02:16",null,"36","0",null);

                p.Static00.set_taborder("7");
                p.Static00.set_text("청각적 정보만으로 구성된 미디어 콘텐츠이다. 만약 비디오가 포함되었다고 하더라도 해당 비디오가 단순 커버 이미지인 경우, 오디오 콘텐츠로 간주한다. 캡션 또는 단순 원고(Simple transcripts)를 대체 정보로 제공해야 한다.");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","Static00_02_01:11",null,"50","0",null);

                p.Static00_02_01_00.set_taborder("8");
                p.Static00_02_01_00.set_text("비디오 콘텐츠");
                p.Static00_02_01_00.set_cssclass("sta_WF_ParaH5");
                p.Static00_02_01_00.set_accessibilityrole("heading5");
                p.Static00_02_01_00.move("0","Static00:24","233","36",null,null);

                p.Static00_00.set_taborder("9");
                p.Static00_00.set_text("소리 없이 화면만으로 구성된 미디어 콘텐츠이다. 만약 오디오가 포함되었다고 하더라도 단순 배경음인 경우, 비디오 콘텐츠로 간주한다. 화면 해설 또는 설명적 원고를 대체 정보로 제공해야 한다.");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("0","Static00_02_01_00:16",null,"50","0",null);

                p.Static00_02_01_00_00.set_taborder("10");
                p.Static00_02_01_00_00.set_text("멀티미디어 콘텐츠");
                p.Static00_02_01_00_00.set_cssclass("sta_WF_ParaH5");
                p.Static00_02_01_00_00.set_accessibilityrole("heading5");
                p.Static00_02_01_00_00.move("0","Static00_00:24","233","36",null,null);

                p.Static00_00_00.set_taborder("11");
                p.Static00_00_00.set_text("오디오, 비디오를 모두 포함한 미디어 콘텐츠이다. 콘텐츠의 복잡성, 중요도에 따라 여러 가지 대체 정보를 복합적으로 제공해야 한다.");
                p.Static00_00_00.set_fittocontents("height");
                p.Static00_00_00.move("0","Static00_02_01_00_00:16",null,"24","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,990,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01_00_02.move("0","staEtit:25",null,"152","0",null);

                p.staEtit.set_text("Accessible Multimedia");
                p.staEtit.move("1","staH2:0","279","60",null,null);

                p.staDivider.set_visible("false");

                p.Static00_00_00.move("0","Static00_02_01_00_00:16",null,"78","10",null);

                p.Static00_00.move("0","Static00_02_01_00:16",null,"104","0",null);
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
        this.registerScript("comp10_con01.xfdl", function() {

        this.con01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.con01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02_01.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02_01_00.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02_01_00_00.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp10_con01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
