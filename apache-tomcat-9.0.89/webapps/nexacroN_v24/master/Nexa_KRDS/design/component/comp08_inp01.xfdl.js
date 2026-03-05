(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("inp01");
            this.set_titletext("입력_날짜 입력 필드");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2030);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","236","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("날짜 입력 필드");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","133","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Date input");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("날짜 입력 필드는 사용자가 특정 날짜 또는 기간을 입력하거나 선택하는 데 사용되는 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","0","Static01_03:80","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Expression : Datefield");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new DateField("DateField00","0","Static01_04:24","300","108",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_labeltext("레이블");
            obj.set_helpertext("hepltext");
            obj.set_invalidtext("invalidtext");
            obj.set_usehelpertext("true");
            obj.set_popupsize("384 437");
            obj.set_labelposition("outside");
            obj.set_inputtype("date");
            obj.set_labelfloatingfixed("true");
            obj.set_headerheight("30");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","DateField00:80","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static + Calendar");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt00","0","Static02:30","300","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","StaDt00:8","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","0","Static02_01:8","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("normal");
            obj.set_editformat("dd");
            obj.set_dateformat("dd");
            obj.set_popupsize("384 437");
            obj.set_accessibilitylabel("레이블");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","0","Calendar01:0","300","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt01","0","Static02_02:50","300","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_04","0","StaDt01:8","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_02","0","Static02_04:8","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("normal");
            obj.set_editformat("dd");
            obj.set_dateformat("dd");
            obj.set_popupsize("384 437");
            obj.set_accessibilitylabel("레이블");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_05","0","Calendar00_02:0","300","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_helpvaild");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt02","0","Static02_05:50","300","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_07","0","StaDt02:8","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_03","0","Static02_07:8","300","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_type("normal");
            obj.set_editformat("dd");
            obj.set_dateformat("dd");
            obj.set_popupsize("384 437");
            obj.set_accessibilitylabel("레이블");
            obj.set_cssclass("error");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_08","0","Calendar00_03:0","300","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_helpinvaild");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_09","0","Static02_08:100","460","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Expression : Static + Calendar");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static02_09:16","445","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_horizontalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel00:60","392","48",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","1452","249","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Static + MaskEdit");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","Static06_01:24","137","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","0","Static01_00:21","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_format("0,0");
            obj.set_displaynulltext("MM");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","MaskEdit00:8","Static01_00:21","7","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("/");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","Static00_00:10","Static01_00:21","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_displaynulltext("YY");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","MaskEdit00:40","137","15",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","128","Static01:11","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_displaynulltext("YY");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","0","Static01:11","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_format("0,0");
            obj.set_displaynulltext("MM");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","600","1190","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_url("common::cmmCalY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","9","15","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("년");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","23","0","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_url("common::cmmCalM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","151","9","15","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("월");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","10","10","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_url("common::cmmCalY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","161","10","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_url("common::cmmCalM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_01","10","10","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_type("normal");
            obj.set_editformat("dd");
            obj.set_dateformat("dd");
            obj.set_popupsize("384 480");
            obj.set_daysize("44 44");
            obj.set_popuptype("system");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_01
            obj = new Layout("default","",0,0,this.Div00_01.form,function(p){});
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,2030,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmCalY.xfdl");
            this._addPreloadList("fdl","common::cmmCalM.xfdl");
        };
        
        // User Script
        this.registerScript("comp08_inp01.xfdl", function() {

        this.inp01_onload = function(obj,e)
        {
        		this.gfnFormOnload(obj,e); //필수함수
        };

        this.Calendar00_00_00_01_ondropdown = function(obj,e)
        {
        	var sYear = this.Div00_00_00.form.calY.text;
        	if( sMonth == ""){
        		sYear = this.gfnGetDate().substr(0,4);
        	}
        	var sMonth = this.Div00_01.form.calM.text;
        	if( sMonth == ""){
        		sMonth = this.gfnGetDate().substr(4,2);
        	}
        	obj.value = sYear+""+sMonth+"01";
        };

        this.Calendar00_00_00_01_oncloseup = function(obj,e)
        {
        	this.Div00_00_00.form.calY.value = obj.value;
        	this.Div00_01.form.calM.value = obj.value;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.inp01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Calendar00_00_00_01.addEventHandler("ondropdown",this.Calendar00_00_00_01_ondropdown,this);
            this.Calendar00_00_00_01.addEventHandler("oncloseup",this.Calendar00_00_00_01_oncloseup,this);
        };
        this.loadIncludeScript("comp08_inp01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
