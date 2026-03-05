(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay08");
            this.set_titletext("레이아웃 및 표현_이미지");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","89","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Image");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이미지는 콘텐츠 양식 중 하나로 단일 이미지 또는 이미지 시퀀스로 표현될 수 있다. 이미지를 적절하게 사용하게 되면 사용자는 텍스트보다 효과적으로 정보를 인지할 수 있으며, 텍스트로 표현하기 어려운 정보를 전달할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","0","Static00_01_00:100",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용하기 적합한 경우");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","Static00_02:20",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("⦁   사용자에게 정보를 전달하는 데 텍스트보다 이미지가 적합한 경우");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","Static06:0",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("-   의료 정보(피부 질환 등)\r\n-   서비스 이용 방법\r\n-   시설 위치");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","Static06_00:0",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("⦁   사용자에게 정보를 전달하는 데 이미지가 도움 되는 경우");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","Static06_01:4",null,"68","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("-   의미가 명확하고 사용자에게 친숙한 아이콘, 이미지, 상징을 활용하게 되면 특히 텍스트를 잘 읽을 수 없거나 난독증이 있는 사용자가 정보를 파악하는 데 도움이 된다.");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","0","Static06_00_00:4",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("◦   텍스트 목록 계층 오류");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","0","Static06_00_02:4",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("⦁   이미지를 통해 사용자에게 브랜드에 대한 총체적인 인상이나 재미, 즐거움을 전달하고자 하는 경우");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","Static06_01_00:4",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("-   이 경우 이미지는 순수하게 장식 용도로 사용된다.");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay08.xfdl", function() {

        this.lay08_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay08_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
