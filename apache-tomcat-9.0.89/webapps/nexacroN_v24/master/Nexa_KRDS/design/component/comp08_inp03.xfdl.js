(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("inp03");
            this.set_titletext("입력_텍스트 입력 필드");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","269","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("텍스트 입력 필드");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Text input");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("텍스트 입력 필드는 사용자가 키보드로 글자, 숫자, 기호 등이 조합된 한 줄의 짧은 텍스트를 입력하는 경우에 사용하는 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00","0","239","280","107",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_labeltext("레이블");
            obj.set_labelposition("outside");
            obj.set_usetrailingbutton("true");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usehelpertext("true");
            obj.set_labelfloatingfixed("true");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01","0","TextField00:50","280","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_02_01","0","Static01_01_02_01:8","280","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_00","0","Static01_01_00_02_01:8","280","78",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_labelposition("outside");
            obj.set_usetrailingbutton("true");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usehelpertext("true");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_01","0","TextField00_00:80","280","107",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_labeltext("레이블");
            obj.set_labelposition("outside");
            obj.set_usetrailingbutton("true");
            obj.set_cssclass("txtf_WF_Visible");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usehelpertext("true");
            obj.set_labelfloatingfixed("true");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","200","TextField00_00:123",null,"24","TextField00_01:-236",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_TxtfCancel");
            obj.set_accessibilitylabel("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp08_inp03.xfdl", function() {

        this.inp03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.TextField00_ontrailingbuttonclick = function(obj,e)
        {
        	obj.value = "";
        };

        this.TextField00_00_ontrailingbuttonclick = function(obj,e)
        {
        	obj.value = "";
        };

        this.Button00_01_onclick = function(obj,e)
        {
        	TextField00_01.value = "";
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.inp03_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.TextField00.addEventHandler("ontrailingbuttonclick",this.TextField00_ontrailingbuttonclick,this);
            this.TextField00_00.addEventHandler("ontrailingbuttonclick",this.TextField00_00_ontrailingbuttonclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
        };
        this.loadIncludeScript("comp08_inp03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
