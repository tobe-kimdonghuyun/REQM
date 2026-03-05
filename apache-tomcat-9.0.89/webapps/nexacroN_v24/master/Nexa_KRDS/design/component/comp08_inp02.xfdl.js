(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("inp02");
            this.set_titletext("입력_텍스트 영역");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("텍스트 영역");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","109","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_text("Textarea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("텍스트 영역은 사용자가 키보드로 글자, 숫자, 기호 등이 조합된 여러 줄의 텍스트를 입력하는 경우에 사용하는 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField01","0","Static02:80","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_labeltext("레이블");
            obj.set_labelposition("outside");
            obj.set_labelfloatingfixed("true");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usecharcount("true");
            obj.set_usehelpertext("true");
            obj.set_maxlength("300");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","0","MultiLineTextField01:80","300","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02","0","Static01_03:8","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField02","0","Static01_01_00_02:8","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_labelposition("overlap");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usecharcount("true");
            obj.set_usehelpertext("true");
            obj.set_maxlength("300");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","0","MultiLineTextField02:80","300","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","0","Static01_04:8","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField03","0","Static01_05:8","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_labelposition("overlap");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_usecharcount("true");
            obj.set_maxlength("300");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp08_inp02.xfdl", function() {

        this.inp02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.inp02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp08_inp02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
