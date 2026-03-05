(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sel02");
            this.set_titletext("선택_체크박스");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","139","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Checkbox");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용한다. 즉, 체크박스 옵션의 선택은 상호배타적이므로 한 개의 옵션을 선택하는 것은 다른 옵션의 선택에 영향을 미치지 않는다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","0","staDescript:80","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","CheckBox00:4","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","0","Static00_01:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","CheckBox00_00:4","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","0","Static00_01_00:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("체크박스");
            obj.set_readonly("true");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","0","CheckBox00_00_01:4","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","0","Static00_01_00_01:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("체크박스");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","CheckBox00_00_00:4","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","0","Static00_01_00_00:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("체크박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","CheckBox00_00_00_00:4","200","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_01_00_00_00:80","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Indeterminate");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","0","Static00_02:24","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("체크박스");
            obj.set_cssclass("chk_WF_Boxind");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01","0","CheckBox00_01:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("체크박스");
            obj.set_cssclass("chk_WF_Boxind");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_00","0","CheckBox00_01_01:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("체크박스");
            obj.set_cssclass("chk_WF_Boxind");
            obj.set_readonly("true");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","0","CheckBox00_01_00_00:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("체크박스");
            obj.set_cssclass("chk_WF_Boxind");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_01","0","CheckBox00_01_00:40","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("체크박스");
            obj.set_cssclass("chk_WF_Boxind");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1190,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp05_sel02.xfdl", function() {

        this.sel02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sel02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp05_sel02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
