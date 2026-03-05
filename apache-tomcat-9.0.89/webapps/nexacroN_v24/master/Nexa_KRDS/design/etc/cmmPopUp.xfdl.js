(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPopUp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,495);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_POP_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","56","363","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_H4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","44","0","230","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_Subtit15B");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","47","20","250","210",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "작게"},{"codecolumn" : "1","datacolumn" : "보통"},{"codecolumn" : "2","datacolumn" : "조금 크게"},{"codecolumn" : "3","datacolumn" : "크게"},{"codecolumn" : "4","datacolumn" : "가장 크게"}]});
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","44","120","240","249",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_enableevent("false");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","10","230","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("화면 표시 모드");
            obj.set_cssclass("sta_WF_Subtit15B");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","306","159","120","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenLight.png\')");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","308","156","199","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_00_innerdataset", obj);
            Div00_form_Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "기본 (밝은 배경)"}]});
            obj.set_innerdataset(Div00_form_Radio00_00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","335","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","20","51","120","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenDark.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","146","10","199","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_00_00_innerdataset", obj);
            Div00_form_Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "기본 (밝은 배경)"}]});
            obj.set_innerdataset(Div00_form_Radio00_00_00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","58","335","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","10","41","120","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenSystem.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","130","10","199","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_00_00_00_innerdataset", obj);
            Div00_form_Radio00_00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "기본 (밝은 배경)"}]});
            obj.set_innerdataset(Div00_form_Radio00_00_00_00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","116","335","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","25","360","232",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("16");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","346","106","360","271",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","116",null,"271","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","514","16","78","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("초기화");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","600","16","78","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("설정");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","40","Panel02:8","678","82",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_spacing("16px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","692","28",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",760,495,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("cmmPopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
