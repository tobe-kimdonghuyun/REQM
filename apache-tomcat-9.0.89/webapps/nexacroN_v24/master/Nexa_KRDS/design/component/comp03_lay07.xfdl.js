(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay07");
            this.set_titletext("레이아웃 및 표현_아코디언");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1010);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accodian", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BODY_TITLE","type" : "STRING","size" : "256"},{"id" : "DETAIL_CON","type" : "STRING","size" : "256"}]},"Rows" : [{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("아코디언");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","119","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Accordion");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아코디언은 한 페이지에서 관련 있는 여러 콘텐츠 섹션을 확인할 수 있도록 하는 컴포넌트로 콘텐츠 섹션의 헤더 목록이 수직으로 쌓여 있는 형태로 표현된다. 일반적으로 헤더 목록은 컨트롤 요소로 활용되며 사용자는 필요에 따라 헤더를 선택하여 하위 콘텐츠 섹션을 표시하거나 숨길 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00_00","0","Static00_01_00:80","309","314",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_accodian");
            obj.set_cssclass("lstv_WF_Line");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("expand");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"58\" expandbarsize=\"24 24\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"0\" top=\"4\" text=\"bind:BODY_TITLE\" right=\"0\" bottom=\"4\"/></Band><Band id=\"detail\" width=\"100%\" height=\"140\"><Cell id=\"Cell03\" left=\"0\" top=\"0\" text=\"bind:DETAIL_CON\" right=\"0\" bottom=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","0","ListView00_00:50","315","294",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_accodian");
            obj.set_bandexpandtype("accordion");
            obj.set_bandinitstatus("expand");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"77\" expandbarsize=\"48 48\" expandbartype=\"true\"><Cell id=\"Cell01\" left=\"24\" top=\"24\" width=\"180\" height=\"29\" text=\"bind:BODY_TITLE\"/></Band><Band id=\"detail\" width=\"100%\" height=\"140\"><Cell id=\"Cell03\" left=\"16\" top=\"0\" text=\"bind:DETAIL_CON\" right=\"16\" bottom=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1010,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay07.xfdl", function() {

        this.lay07_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay07_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
