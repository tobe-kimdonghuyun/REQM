(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("con02");
            this.set_titletext("콘텐츠_숨긴 콘텐츠");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("숨긴 콘텐츠");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","199","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_ParaH4_pc,readonly");
            obj.set_text("Visually hidden");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("숨긴 콘텐츠는 화면에는 보이지 않지만, 스크린 리더 사용자는 읽을 수 있도록 설계된 컴포넌트이다. 정안 사용자에게는 불필요한 설명을 제공하지 않으면서 스크린 리더 사용자에게는 시각적 콘텐츠, 상호작용 상태 등에 대한 추가적인 정보를 전달할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","407",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용하기 적합한 경우");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","Static00_02:16",null,"114","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("⦁   텍스트가 아닌 콘텐츠에 대한 복잡한 설명을 제공하는 경우\r\n⦁   지시 사항을 전달하거나 조작 방식을 설명하는 경우\r\n⦁   요소나 화면의 상태 변화에 대한 정보를 전달하는 경우");
            obj.set_cssclass("sta_WF_TxtlstULv01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","0","Static00_01_00_02:100",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("용례");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp10_con02.xfdl", function() {

        this.con02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.con02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02_00.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp10_con02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
