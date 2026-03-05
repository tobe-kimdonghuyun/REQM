(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sel01");
            this.set_titletext("선택_라디오버튼");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Radio button");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("라디오 버튼은 사용자가 여러 개의 옵션 중 한 개의 값을 선택할 수 있도록 하는 경우에 사용한다. 사용자가 옵션 목록에서 새로운 옵션을 선택했을 때, 기존에 선택되었던 옵션은 자동으로 선택이 해제되어야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","0","Static00_01_00:80","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오버튼"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","Radio00:3","260","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","0","Static00:40","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오버튼"}]});
            obj.set_innerdataset(Radio00_00_innerdataset);
            obj.set_text("라디오버튼");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Radio00_00:3","260","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","0","Static00_00:40","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_enable("false");
            var Radio00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_innerdataset", obj);
            Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오버튼"}]});
            obj.set_innerdataset(Radio00_00_00_innerdataset);
            obj.set_text("라디오버튼");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","Radio00_00_00:3","260","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","0","Static00_00_00:40","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_enable("false");
            var Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_00_innerdataset", obj);
            Radio00_00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "라디오버튼"}]});
            obj.set_innerdataset(Radio00_00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","Radio00_00_00_00:3","260","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부가적인 설명이 들어갑니다.");
            obj.set_cssclass("sta_WF_Infor15");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","701","364","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("라디오 버튼 sorting(구조화 목록)");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","0","Static02:24","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("레이블");
            obj.set_cssclass("btn_WF_TxtLineS");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_02","Button06:8","Static02:25","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("레이블");
            obj.set_cssclass("btn_WF_TxtLine");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_02_00","Button06_02:8","Static02:25","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("레이블");
            obj.set_cssclass("btn_WF_TxtLine");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Button06:80",null,"208","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_verticalgap("20");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","246","493","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","246","94.08","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("평소, 숨이 많이 차게 만드는 고강도 신체활동을 얼마나 하십니까?");
            obj.set_cssclass("sta_WF_Para19B");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","246","140.09","800","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_flexgrow("1");
            var Radio00_01_innerdataset = new nexacro.NormalDataset("Radio00_01_innerdataset", obj);
            Radio00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "매일"},{"codecolumn" : "1","datacolumn" : "월 10~29일"},{"codecolumn" : "2","datacolumn" : "월 3~9일"},{"codecolumn" : "3","datacolumn" : "월 1~2일"},{"codecolumn" : "4","datacolumn" : "하지 않음"}]});
            obj.set_innerdataset(Radio00_01_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1240,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("선택_라디오버튼");

                p.staH2.set_taborder("0");
                p.staH2.set_text("라디오버튼");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","180","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Radio button");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","220","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("라디오 버튼은 사용자가 여러 개의 옵션 중 한 개의 값을 선택할 수 있도록 하는 경우에 사용한다. 사용자가 옵션 목록에서 새로운 옵션을 선택했을 때, 기존에 선택되었던 옵션은 자동으로 선택이 해제되어야 한다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"100","0",null);

                p.Radio00.set_taborder("4");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("horizontal");
                p.Radio00.set_columncount("-1");
                p.Radio00.set_rowcount("-1");
                p.Radio00.move("0","Static00_01_00:80","260","30",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("부가적인 설명이 들어갑니다.");
                p.Static00.set_cssclass("sta_WF_Infor15");
                p.Static00.set_visible("true");
                p.Static00.move("0","Radio00:3","260","26",null,null);

                p.Radio00_00.set_taborder("6");
                p.Radio00_00.set_innerdataset(Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_direction("horizontal");
                p.Radio00_00.set_value("0");
                p.Radio00_00.set_index("0");
                p.Radio00_00.move("0","Static00:40","260","30",null,null);

                p.Static00_00.set_taborder("7");
                p.Static00_00.set_text("부가적인 설명이 들어갑니다.");
                p.Static00_00.set_cssclass("sta_WF_Infor15");
                p.Static00_00.set_visible("true");
                p.Static00_00.move("0","Radio00_00:3","260","26",null,null);

                p.Radio00_00_00.set_taborder("8");
                p.Radio00_00_00.set_innerdataset(Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_direction("horizontal");
                p.Radio00_00_00.set_enable("false");
                p.Radio00_00_00.set_value("0");
                p.Radio00_00_00.set_index("0");
                p.Radio00_00_00.move("0","Static00_00:40","260","30",null,null);

                p.Static00_00_00.set_taborder("9");
                p.Static00_00_00.set_text("부가적인 설명이 들어갑니다.");
                p.Static00_00_00.set_cssclass("sta_WF_Infor15");
                p.Static00_00_00.set_visible("true");
                p.Static00_00_00.move("0","Radio00_00_00:3","260","26",null,null);

                p.Radio00_00_00_00.set_taborder("10");
                p.Radio00_00_00_00.set_innerdataset(Radio00_00_00_00_innerdataset);
                p.Radio00_00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00_00.set_direction("horizontal");
                p.Radio00_00_00_00.set_enable("false");
                p.Radio00_00_00_00.set_value("");
                p.Radio00_00_00_00.set_index("-1");
                p.Radio00_00_00_00.move("0","Static00_00_00:40","260","30",null,null);

                p.Static00_00_00_00.set_taborder("11");
                p.Static00_00_00_00.set_text("부가적인 설명이 들어갑니다.");
                p.Static00_00_00_00.set_cssclass("sta_WF_Infor15");
                p.Static00_00_00_00.set_visible("true");
                p.Static00_00_00_00.move("0","Radio00_00_00_00:3","260","26",null,null);

                p.Static02.set_taborder("12");
                p.Static02.set_text("라디오 버튼 sorting(구조화 목록)");
                p.Static02.set_cssclass("sta_WF_H4_pc");
                p.Static02.set_accessibilityrole("heading3");
                p.Static02.move("0","701","364","32",null,null);

                p.Button06.set_taborder("13");
                p.Button06.set_text("레이블");
                p.Button06.set_cssclass("btn_WF_TxtLineS");
                p.Button06.move("0","Static02:24","55","26",null,null);

                p.Button06_02.set_taborder("14");
                p.Button06_02.set_text("레이블");
                p.Button06_02.set_cssclass("btn_WF_TxtLine");
                p.Button06_02.move("Button06:8","Static02:25","55","26",null,null);

                p.Button06_02_00.set_taborder("15");
                p.Button06_02_00.set_text("레이블");
                p.Button06_02_00.set_cssclass("btn_WF_TxtLine");
                p.Button06_02_00.move("Button06_02:8","Static02:25","55","26",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_type("vertical");
                p.Panel00.set_spacing("40px 40px 40px 40px");
                p.Panel00.set_verticalgap("20");
                p.Panel00.set_cssclass("pnl_WF_Detailbox");
                p.Panel00.move("0","Button06:80",null,"208","0",null);

                p.Static01.set_taborder("17");
                p.Static01.set_text("타이틀");
                p.Static01.set_cssclass("sta_WF_H4_pc");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("246","493","100%","38",null,null);

                p.Static01_00.set_taborder("18");
                p.Static01_00.set_text("평소, 숨이 많이 차게 만드는 고강도 신체활동을 얼마나 하십니까?");
                p.Static01_00.set_cssclass("sta_WF_Para19B");
                p.Static01_00.move("246","94.08","100%","29",null,null);

                p.Radio00_01.set_taborder("19");
                p.Radio00_01.set_innerdataset(Radio00_01_innerdataset);
                p.Radio00_01.set_codecolumn("codecolumn");
                p.Radio00_01.set_datacolumn("datacolumn");
                p.Radio00_01.set_direction("vertical");
                p.Radio00_01.set_columncount("-1");
                p.Radio00_01.set_rowcount("-1");
                p.Radio00_01.set_flexgrow("1");
                p.Radio00_01.move("246","140.09","800","38",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1330,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_00.set_fittocontents("height");
                p.Static01_00.move("246","94.08","100%","64",null,null);

                p.Panel00.move("0","857",null,"392.98","0",null);

                p.Radio00_01.set_direction("horizontal");
                p.Radio00_01.set_cssclass("rdo_WF_Padding");
                p.Radio00_01.set_columncount("0");
                p.Radio00_01.set_rowcount("0");
                p.Radio00_01.move("41","1040","100%","180",null,null);

                p.Static00_01_00.move("0","85",null,"152","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp05_sel01.xfdl", function() {

        this.sel01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sel01_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp05_sel01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
