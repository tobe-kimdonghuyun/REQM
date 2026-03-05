(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("StEventLog","8","310","996","188",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_readonly("false");
            obj.set_wordWrap("english");
            obj.set_background("azure");
            obj.set_color("black");
            obj.set_font("12pt \"MS Gothic\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("StLog","8","506","1000","173",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_wordWrap("english");
            obj.set_color("black");
            obj.set_font("12pt \"MS Gothic\"");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","26","10","308","290",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaytype("datetime");
            obj.set_enddate("20240420235120");
            obj.set_rtl("");
            obj.set_startdate("20220222113012");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","355","10","335","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("set startdate = 20230420092815(2023.04.20 / 9:28:15)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","355","67","335","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("set enddate = 20240420092815(2024.04.20 / 9:28:15)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","355","130","70","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("값 확인");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","355","170","338","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","355","230","338","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",0,0,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.StEventLog.set_taborder("0");
                p.StEventLog.set_tabstop("false");
                p.StEventLog.set_readonly("false");
                p.StEventLog.set_wordWrap("english");
                p.StEventLog.set_background("azure");
                p.StEventLog.set_color("black");
                p.StEventLog.set_font("12pt \"MS Gothic\"");
                p.StEventLog.move("8","310","996","188",null,null);

                p.StLog.set_taborder("1");
                p.StLog.set_tabstop("false");
                p.StLog.set_readonly("true");
                p.StLog.set_wordWrap("english");
                p.StLog.set_color("black");
                p.StLog.set_font("12pt \"MS Gothic\"");
                p.StLog.move("8","506","1000","173",null,null);

                p.DateRangePicker00.set_taborder("2");
                p.DateRangePicker00.set_displaytype("datetime");
                p.DateRangePicker00.set_enddate("20240420235120");
                p.DateRangePicker00.set_startdate("20220222113012");
                p.DateRangePicker00.move("26","10","308","290",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("set startdate = 20230420092815(2023.04.20 / 9:28:15)");
                p.Button00.move("355","10","335","38",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_text("set enddate = 20240420092815(2024.04.20 / 9:28:15)");
                p.Button01.move("355","67","335","38",null,null);

                p.Button02.set_taborder("5");
                p.Button02.set_text("값 확인");
                p.Button02.move("355","130","70","33",null,null);

                p.Edit00.set_taborder("6");
                p.Edit00.move("355","170","338","50",null,null);

                p.Edit00_00.set_taborder("7");
                p.Edit00_00.move("355","230","338","50",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","tab",800,1280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.StEventLog.move("8","290","772","188",null,null);

                p.StLog.move("8","486","772","173",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104524_01.xfdl", function() {
        this.tracePrint = function (str) {
        	this.StEventLog.insertText(str);
        }
        this.getValueData = function (obj)
        {
        	return obj.value + '|' + obj.startdate + '|' + obj.enddate;
        };

        this.DateRangePicker_onchanged = function (obj, e)
        {
        	this.tracePrint('@' + obj.id + '_' + e.eventid + '(' + e.prestartdate + '|' + e.poststartdate + '|' + e.preenddate + '|' + e.postenddate + ') ');
        	this.tracePrint('@' + obj.id + '_value_' + e.eventid + '(' + this.getValueData(obj) + ') ');
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.DateRangePicker00.startdate = '20230420092815'
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.DateRangePicker00.enddate = '20240420092815'
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Edit00.value = this.DateRangePicker00.startdate
        	this.Edit00_00.value = this.DateRangePicker00.enddate
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.FormEdit_onload,this);
            this.addEventHandler("ontimer",this.FormEdit_ontimer,this);
            this.DateRangePicker00.addEventHandler("onchanged",this.DateRangePicker_onchanged,this);
            this.DateRangePicker00.addEventHandler("onkeydown",this.DateRangePicker_onkeydown,this);
            this.DateRangePicker00.addEventHandler("onkeyup",this.DateRangePicker_onkeyup,this);
            this.DateRangePicker00.addEventHandler("onkillfocus",this.DateRangePicker_onkillfocus,this);
            this.DateRangePicker00.addEventHandler("onsetfocus",this.DateRangePicker_onsetfocus,this);
            this.DateRangePicker00.addEventHandler("ondayclick",this.DateRangePicker_ondayclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("RP_104524_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
