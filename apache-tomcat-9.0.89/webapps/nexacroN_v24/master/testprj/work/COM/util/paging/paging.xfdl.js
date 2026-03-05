(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pagging");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("3");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnFirst\"/><PanelItem id=\"PanelItem02\" componentid=\"btnPrev\"/><PanelItem id=\"PanelItem03\" componentid=\"PanelNum\"/><PanelItem id=\"PanelItem04\" componentid=\"btnNext\"/><PanelItem id=\"PanelItem05\" componentid=\"btnLast\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFirst","0","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageLL");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","45","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageL");
            this.addChild(obj.name, obj);

            obj = new Button("btn0","80","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum_S");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","120","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","160","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","200","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","240","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","280","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","320","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","360","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","400","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","440","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageNum");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","480","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageR");
            this.addChild(obj.name, obj);

            obj = new Button("btnLast","520","0","45","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_PageRR");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelNum","234","1","478","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_spacing("0px 14px");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn0\"/><PanelItem id=\"PanelItem02\" componentid=\"btn1\"/><PanelItem id=\"PanelItem03\" componentid=\"btn2\"/><PanelItem id=\"PanelItem04\" componentid=\"btn3\"/><PanelItem id=\"PanelItem05\" componentid=\"btn4\"/><PanelItem id=\"PanelItem06\" componentid=\"btn5\"/><PanelItem id=\"PanelItem07\" componentid=\"btn6\"/><PanelItem id=\"PanelItem08\" componentid=\"btn7\"/><PanelItem id=\"PanelItem09\" componentid=\"btn8\"/><PanelItem id=\"PanelItem10\" componentid=\"btn9\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen,Desktop_screen",860,36,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexcrossaxiswrapalign("center");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_horizontalgap("3");
                p.Panel00.move("0","0","100%","36",null,null);

                p.btnFirst.set_taborder("0");
                p.btnFirst.set_visible("true");
                p.btnFirst.set_cssclass("btn_WF_PageLL");
                p.btnFirst.move("0","0","45","36",null,null);

                p.btnPrev.set_taborder("1");
                p.btnPrev.set_visible("true");
                p.btnPrev.set_cssclass("btn_WF_PageL");
                p.btnPrev.move("45","0","45","36",null,null);

                p.btn0.set_taborder("2");
                p.btn0.set_text("1");
                p.btn0.set_visible("true");
                p.btn0.set_cssclass("btn_WF_PageNum_S");
                p.btn0.move("80","0","45","36",null,null);

                p.btn1.set_taborder("3");
                p.btn1.set_text("2");
                p.btn1.set_visible("true");
                p.btn1.set_cssclass("btn_WF_PageNum");
                p.btn1.move("120","0","45","36",null,null);

                p.btn2.set_taborder("4");
                p.btn2.set_text("3");
                p.btn2.set_visible("true");
                p.btn2.set_cssclass("btn_WF_PageNum");
                p.btn2.move("160","0","45","36",null,null);

                p.btn3.set_taborder("5");
                p.btn3.set_text("4");
                p.btn3.set_visible("true");
                p.btn3.set_cssclass("btn_WF_PageNum");
                p.btn3.move("200","0","45","36",null,null);

                p.btn4.set_taborder("6");
                p.btn4.set_text("5");
                p.btn4.set_visible("true");
                p.btn4.set_cssclass("btn_WF_PageNum");
                p.btn4.move("240","0","45","36",null,null);

                p.btn5.set_taborder("7");
                p.btn5.set_text("6");
                p.btn5.set_visible("true");
                p.btn5.set_cssclass("btn_WF_PageNum");
                p.btn5.move("280","0","45","36",null,null);

                p.btn6.set_taborder("8");
                p.btn6.set_text("7");
                p.btn6.set_visible("true");
                p.btn6.set_cssclass("btn_WF_PageNum");
                p.btn6.move("320","0","45","36",null,null);

                p.btn7.set_taborder("9");
                p.btn7.set_text("8");
                p.btn7.set_visible("true");
                p.btn7.set_cssclass("btn_WF_PageNum");
                p.btn7.move("360","0","45","36",null,null);

                p.btn8.set_taborder("10");
                p.btn8.set_text("9");
                p.btn8.set_visible("true");
                p.btn8.set_cssclass("btn_WF_PageNum");
                p.btn8.move("400","0","45","36",null,null);

                p.btn9.set_taborder("11");
                p.btn9.set_text("10");
                p.btn9.set_visible("true");
                p.btn9.set_cssclass("btn_WF_PageNum");
                p.btn9.move("440","0","45","36",null,null);

                p.btnNext.set_taborder("12");
                p.btnNext.set_visible("true");
                p.btnNext.set_cssclass("btn_WF_PageR");
                p.btnNext.move("480","0","45","36",null,null);

                p.btnLast.set_taborder("13");
                p.btnLast.set_visible("true");
                p.btnLast.set_cssclass("btn_WF_PageRR");
                p.btnLast.move("520","0","45","36",null,null);

                p.PanelNum.set_taborder("15");
                p.PanelNum.set_spacing("0px 14px");
                p.PanelNum.set_fittocontents("width");
                p.PanelNum.move("234","1","478","36",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",390,36,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn0.set_visible("false");

                p.btn1.set_visible("false");

                p.btn2.set_visible("false");

                p.btn3.set_visible("false");

                p.btn4.set_visible("false");

                p.btn5.set_visible("false");

                p.btn6.set_visible("false");

                p.btn7.set_visible("false");

                p.btn8.set_visible("false");

                p.btn9.set_visible("false");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("paging.xfdl","xjs::lib_pagenavigationdesign.xjs");
        this.registerScript("paging.xfdl", function() {
        this.executeIncludeScript("xjs::lib_pagenavigationdesign.xjs"); /*include "xjs::lib_pagenavigationdesign.xjs"*/;

        this.Button_onclick = function(obj,e)
        {
        	//클릭된 버튼의 구분 값 가져오기(First, Prev, Next, Last)
        	var sPage = obj.name.replace("btn", "");

        	//페이지 이동 함수 호출
        	this.setPage(sPage);
        };

        this.BtnNum_onclick = function(obj,e)
        {
        	//클릭된 버튼의 페이지 번호 가져오기
        	var sPage = obj.text;
        	//페이지 이동 함수 호출
        	this.setPage(sPage);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFirst.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrev.addEventHandler("onclick",this.Button_onclick,this);
            this.btn0.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn1.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn2.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn3.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn4.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn5.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn6.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn7.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn8.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn9.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btnNext.addEventHandler("onclick",this.Button_onclick,this);
            this.btnLast.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("paging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
