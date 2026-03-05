(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sel04");
            this.set_titletext("선택_태크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","74","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("태그");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","65","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tag");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("태그는 키워드 또는 레이블을 사용하여 콘텐츠를 분류하는 수단이다. 콘텐츠 항목에 직접 관련 분류 체계, 데이터 속성을 표시하거나, 목록에서 특정 분류 체계, 데이터 속성을 가진 항목이 선택되었음을 보여주기 위한 태그 그룹으로 사용된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","Static00_01_00_02:80","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("tag");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","Static05:24","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","Button00:40","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("tag-#underline");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","Static05_00:24","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("#태그");
            obj.set_cssclass("btn_WF_Tagline");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","0","Button00_00:40","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("tag-list");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static05_00_00:24","288","112",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_01_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_01_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_01_04\"/><PanelItem id=\"PanelItem07\" componentid=\"Button00_01_06\"/><PanelItem id=\"PanelItem08\" componentid=\"Button00_01_07\"/><PanelItem id=\"PanelItem09\" componentid=\"Button00_01_08\"/><PanelItem id=\"PanelItem06\" componentid=\"Button00_01_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","530","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","604","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","678","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_02","752","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_03","826","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_04","900","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_06","1048","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_07","1122","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_08","1196","2580","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_05","10","10","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("태그");
            obj.set_cssclass("btn_WF_Tag");
            obj.set_accessibilityrole("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,890,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp05_sel04.xfdl", function() {

        this.sel04_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sel04_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("comp05_sel04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
