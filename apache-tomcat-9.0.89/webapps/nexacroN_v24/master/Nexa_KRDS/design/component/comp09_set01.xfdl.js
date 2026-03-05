(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("set01");
            this.set_titletext("설정_언어 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1106);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "LANGUAGE","type" : "STRING","size" : "256"}]},"Rows" : [{"LANGUAGE" : "한국어"},{"LANGUAGE" : "English(영어)"},{"LANGUAGE" : "中文(중국어)"},{"LANGUAGE" : "日本(일본어)"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","155","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("언어 변경");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Language switcher");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_02","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("언어 변경은 서비스의 콘텐츠를 표시할 언어를 변경하거나 별도의 외국어 서비스로 이동하는 데 사용되는 요소이다. 한국어가 익숙하지 않은 사용자가 콘텐츠 표시 언어를 변경할 수 있는 수단을 발견하지 못한다면 서비스를 이용할 수 없게 되므로, 디지털 정부서비스로 직관적이고 일관된 방식으로 언어 변경을 제공하는 것이 매우 중요하다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","37","Static00_01_00_02:80","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Language");
            obj.set_cssclass("btn_TF_UtilLang");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","Button01_00:20","182","230",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","4","11","176","208",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","57","0","70","12",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Utildrop");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","11","21","160","192",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_lang");
            obj.set_cssclass("grd_POP_Utility");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"186\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:LANGUAGE\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","39","Div02:60","115","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Language");
            obj.set_cssclass("btn_TF_UtilLang");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","-1","Button01_00_00:20","195","312",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div03");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","4","11","187","292",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03_00","62","0","70","12",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Utildrop");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","20","28","142","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("현재 언어");
            obj.set_cssclass("sta_POP_Txt15R");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","20","Static05:1","128","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("한국어");
            obj.set_cssclass("sta_POP_LangS");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","12","Static04:0","171","8",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_divider");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","12","Static07:8","171","200",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_lang");
            obj.set_cssclass("grd_POP_Utility");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"179\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:LANGUAGE\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo00","11","1116","183","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_lang");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("LANGUAGE");
            obj.set_cssclass("cbo_TF_UtilLang");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1106,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp09_set01.xfdl", function() {

        this.set01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.set01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp09_set01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
