(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template01");
            this.set_titletext("Tabpage01");
            this.set_cssclass("pnl_WF_Detailbox");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "1","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "2","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "3","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "4","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "5","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "6","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "7","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "8","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "9","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바사","Essential" : "투비","Num" : "1000000","Expand" : "가나다라마바사","Cal" : "20251230","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00_00","36","1033","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01_00","746","10","117","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","44","120","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00","1085","114","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Minus");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03_00_00","34","110","145","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04_00_00","54","130","162","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00_00","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button00_01_01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_01_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_03_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_04_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","39","275","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_PaddingB16");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","40","196","100%","254",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_grid");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"103\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"checkBox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" displaytype=\"normal\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"number\" edittype=\"none\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:Num\"/><Cell col=\"5\" text=\"bind:CenterAlign\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"버튼\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","102","99.50617283950618%","358",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static10_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Static09_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Tabpage01");
                p.set_cssclass("pnl_WF_Detailbox");

                p.Static09_00_00.set_taborder("0");
                p.Static09_00_00.set_text("서브타이틀");
                p.Static09_00_00.set_cssclass("sta_WF_H4_pc");
                p.Static09_00_00.set_accessibilityrole("heading4");
                p.Static09_00_00.move("36","1033","100%","38",null,null);

                p.Button00_01_01_00.set_taborder("1");
                p.Button00_01_01_00.set_text("커스텀버튼");
                p.Button00_01_01_00.set_cssclass("btn_WF_Custom");
                p.Button00_01_01_00.move("746","10","117","48",null,null);

                p.Button00_01_00_00_00_00.set_taborder("2");
                p.Button00_01_00_00_00_00.set_cssclass("btn_WF_Add");
                p.Button00_01_00_00_00_00.move("44","120","48","48",null,null);

                p.Button00_02_00_00.set_taborder("3");
                p.Button00_02_00_00.set_cssclass("btn_WF_Minus");
                p.Button00_02_00_00.move("1085","114","48","48",null,null);

                p.Button00_03_00_00.set_taborder("4");
                p.Button00_03_00_00.set_text("엑셀업로드");
                p.Button00_03_00_00.set_cssclass("btn_WF_ExcelUp");
                p.Button00_03_00_00.move("34","110","145","48",null,null);

                p.Button00_04_00_00.set_taborder("5");
                p.Button00_04_00_00.set_text("엑셀다운로드");
                p.Button00_04_00_00.set_cssclass("btn_WF_ExcelDown");
                p.Button00_04_00_00.move("54","130","162","48",null,null);

                p.Panel01_00_00_00.set_taborder("6");
                p.Panel01_00_00_00.set_flexmainaxisalign("end");
                p.Panel01_00_00_00.set_horizontalgap("8");
                p.Panel01_00_00_00.set_verticalgap("8");
                p.Panel01_00_00_00.set_flexwrap("wrap");
                p.Panel01_00_00_00.set_flexgrow("1");
                p.Panel01_00_00_00.set_fittocontents("height");
                p.Panel01_00_00_00.move("0","0","100%","48",null,null);

                p.Static10_00_00.set_taborder("7");
                p.Static10_00_00.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.Static10_00_00.set_usedecorate("true");
                p.Static10_00_00.set_cssclass("sta_WF_PaddingB16");
                p.Static10_00_00.set_flexgrow("1");
                p.Static10_00_00.move("39","275","100%","38",null,null);

                p.Grid00_00.set_taborder("8");
                p.Grid00_00.set_binddataset("ds_grid");
                p.Grid00_00.set_showcellselection("true");
                p.Grid00_00.move("40","196","100%","254",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("4");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("40","102","99.50617283950618%","358",null,null);

                p.Panel00.set_taborder("10");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_spacing("39px");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_cssclass("pnl_WF_Detailbox");
                p.Panel00.move("0","0",null,"500","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,702,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("23px 15px");
                p.Panel00.move("0","0",null,"634","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template09.xfdl", function() {
        this.Template13_1_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template13_1_onload,this);
        };
        this.loadIncludeScript("Template09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
