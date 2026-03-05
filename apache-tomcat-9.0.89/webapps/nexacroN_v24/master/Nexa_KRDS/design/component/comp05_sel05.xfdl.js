(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sel05");
            this.set_titletext("선택_토글스위치");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","185","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("토글 스위치");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","184","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Toggle switch");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("토글은 상호 배타적인 두 가지 상태를 전환하는 데 사용되는 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","0","Static00_01_00_02:80","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","0","CheckBox01:24","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_readonly("true");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00_00","0","387","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_enable("false");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","CheckBox01_00_00:80","113","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("checked");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_01","0","Static06:24","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_accessibilityrole("none");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00_01","0","CheckBox01_01:24","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_readonly("true");
            obj.set_accessibilityrole("none");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00_00_00","0","CheckBox01_00_01:24","168","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("스위치");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_enable("false");
            obj.set_accessibilityrole("none");
            obj.set_value("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp05_sel05.xfdl", function() {

        this.sel05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sel05_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp05_sel05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
