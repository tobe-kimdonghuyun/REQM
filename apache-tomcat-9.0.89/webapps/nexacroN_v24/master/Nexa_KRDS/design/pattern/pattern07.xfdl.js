(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern07");
            this.set_titletext("오류");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("오류");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("User Feedback");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"178","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("오류는 사용자가 요청한 작업을 시스템이 완료하지 못하는 문제가 발생했을 때 제공된다. 발생 가능한 문제를 사전에 안내하는 경고와는 달리, 오류는 이미 발생한 문제에 관한 정보를 사용자에게 알려준다. 오류 정보는 단순히 사용자에게 문제가 발생했음을 알려주는 데 그치지 않고 본래 수행하고자 했던 행동을 완수할 수 있게 유도해야 한다. 오류 정보를 제공하기 위해 별도의 모달을 사용하거나 오류가 발생한 지점에 직접 메시지를 전달할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:80",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Static00_00:24",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("인라인 메시지");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_00_00:24",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","84","47","280","109",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_01_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"TextField00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_02_01","84","47","280","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Lable15R");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField00_00","84","29.14","280","78",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_labelposition("outside");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_cssclass("error");
            obj.set_usehelpertext("true");
            obj.set_invalidtext("입력시 필요한 정보를 입력해 주세요");
            obj.set_footerheight("30");
            obj.set_contentheight("48");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","Div00:40",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("모달");
            obj.set_cssclass("sta_WF_H5");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00_00_00_00:24",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_cssclass("pnl_POP_Modaldim");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","110","810","560","340",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_cssclass("div_POP_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"340","9",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","40","56",null,"36","49",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("모달 제목");
            obj.set_cssclass("sta_POP_Title");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","108",null,"142","49",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("output");
            obj.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,"252","95","48","152",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("아니요");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_00",null,"252","95","48","49",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","40","40","33",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_accessibilitylabel("닫기");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("16");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern07.xfdl", function() {

        this.pattern07_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern07_onload,this);
        };
        this.loadIncludeScript("pattern07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
