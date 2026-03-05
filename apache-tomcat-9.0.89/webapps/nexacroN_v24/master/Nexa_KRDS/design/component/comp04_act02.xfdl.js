(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("act02");
            this.set_titletext("액션_버튼");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","72","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","91","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("버튼은 어떤 기능이나 동작을 실행하거나 기능을 사용하기 위한 상태로 변경하는 요소이다. 사용자가 서비스를 이용하는 과정에서 어떤 행동이 중요한지에 따라 관련된 버튼이 다양한 스타일로 표현된다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staTit01","0","staDescript:80","270","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Primary <fs v=\"12\">(btn_WF_Crud01)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnCrud01","0","staTit01:16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Static("staTit02","0","btnCrud01:60","270","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Secondary <fs v=\"12\">(btn_WF_Custom)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnCus00","0","staTit02:16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Static("staTit03","0","btnCus00:60","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Tertiary <fs v=\"12\">(Default)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","staTit03:16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Static("staTit04","0","btn00:60","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Text");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnTxt00","0","staTit04:16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Txt");
            this.addChild(obj.name, obj);

            obj = new Static("staTit05","0","btnTxt00:60","260","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("CRUD_point <fs v=\"12\">btn_WF_Crud</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnCrud","0","staTit05:16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staTit06","0","btnCrud:60","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Text+Icon<fs v=\"12\">(left icon)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnIconL","0","staTit06:16","62","32",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_IconL");
            this.addChild(obj.name, obj);

            obj = new Static("staTit07","0","btnIconL:60","260","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Text+Icon<fs v=\"12\">(left icon-s)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnIconSR","-1","staTit07:16","62","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_More");
            this.addChild(obj.name, obj);

            obj = new Static("staTit08","0","btnIconSR:60","240","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Text+Icon<fs v=\"12\">(Right icon)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("btnIconR","0","staTit08:16","62","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_IconR");
            this.addChild(obj.name, obj);

            obj = new Static("staTit09","0","btnIconR:60","240","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Text+Icon<fs v=\"12\">(Both icon)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Button("btnBoth","0","staTit09:16","86","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_IconBoth");
            this.addChild(obj.name, obj);

            obj = new Static("staTit09_00","0","btnBoth:60","240","32",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("IconTop<fs v=\"12\"></fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","staTit09_00:16","56","56",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Top");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Button00_00:40","staTit09_00:16","64","64",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("위로");
            obj.set_cssclass("btn_WF_Top");
            this.addChild(obj.name, obj);

            obj = new Button("btnIconR00","80","1373","64","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_SeletTxt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1730,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp04_act02.xfdl", function() {

        this.act02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.act02_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.staTit04.addEventHandler("onclick",this.Static00_00_01_00_onclick,this);
        };
        this.loadIncludeScript("comp04_act02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
