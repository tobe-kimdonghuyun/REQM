(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("글자화면 표시설정");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,495);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Utildropbg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","56","363","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_H4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","116",null,"271","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","40","395",null,"92","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_spacing("16px 0px 48px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnReset\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSetUp\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset","514","16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetUp","600","16","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설정");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"28","40","40","28",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","44","0","230","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("글자·화면 표시 설정");
            obj.set_cssclass("sta_WF_Subtit15B");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","47","20","250","210",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "작게"},{"codecolumn" : "1","datacolumn" : "보통"},{"codecolumn" : "2","datacolumn" : "조금 크게"},{"codecolumn" : "3","datacolumn" : "크게"},{"codecolumn" : "4","datacolumn" : "가장 크게"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","240","249",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_enableevent("false");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","10","230","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("화면 표시 모드");
            obj.set_cssclass("sta_WF_Subtit15B");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","306","159","120","64",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenLight.png\')");
            obj.set_text("");
            obj.set_accessibilitylabel("기본(밝은배경)");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","308","156","199","64",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "기본 (밝은 배경)"}]});
            obj.set_innerdataset(Radio00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","335","64",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","20","51","120","64",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenDark.png\')");
            obj.set_accessibilitylabel("선명하게(어두운 배경)");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","146","10","199","64",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_innerdataset", obj);
            Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "선명하게 (어두운 배경)"}]});
            obj.set_innerdataset(Radio00_00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","58","335","64",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","10","41","120","64",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("img_POP_Radius8");
            obj.set_image("url(\'theme::NexaKRDS/images/img_POP_ScreenSystem.png\')");
            obj.set_accessibilitylabel("시스템 설정");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","130","10","199","64",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_00_innerdataset", obj);
            Radio00_00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "시스템 설정"}]});
            obj.set_innerdataset(Radio00_00_00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","116","335","64",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ImageViewer00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","25","360","232",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_horizontalgap("16");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","360","271",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("cmmUtilView2_bak.xfdl", function() {
        /**
        *  KRDS
        *  @FileName 	cmmUtilView2.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/03/24
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/03/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvZoom = "";
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.Radio00.value = this.objApp.gvZoom;
        };

        this.form_onclose = function(obj,e)
        {

        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	switch(e.postvalue) {
        		case "0":
        			document.body.style.zoom = 0.9;
        			this.fvZoom = 0.9;
        			break;
        		case "1":
        			document.body.style.zoom = 1;
        			this.fvZoom = 1;
        			break;
        		case "2":
        		    document.body.style.zoom = 1.1;
        			this.fvZoom = 1.1;
        			break;
        		case "3":
        		    document.body.style.zoom = 1.2;
        			this.fvZoom = 1.2;
        			break;
        		case "4":
        		    document.body.style.zoom = 1.3;
        			this.fvZoom = 1.3;
        			break;
        		default:
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.objApp.gvZoom = this.Radio00.value;
        	this.close();
        };

        this.btnReset_onclick = function(obj,e)
        {
        	this.Radio00.value = "1";
        	document.body.style.zoom = 1;
        	this.objApp.gvZoom = 1;
        };

        this.btnSetUp_onclick = function(obj,e)
        {
        	this.objApp.gvZoom = this.Radio00.value;
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.btnReset.addEventHandler("onclick",this.btnReset_onclick,this);
            this.btnSetUp.addEventHandler("onclick",this.btnSetUp_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("cmmUtilView2_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
