(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay03");
            this.set_titletext("레이아웃 및 표현_달력");
            this.set_cssclass("btn_WF_Txt");
            this.set_accessibilityenable("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("달력");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","129","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_text("Calendar");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("달력은 날짜와 관련된 정보와 기능을 제공하는 데 사용한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_01","0","Static00_01_00:80","384","437",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_datepickerchangetype("button");
            obj.set_showmonthspin("true");
            obj.set_showyearspin("true");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            obj.set_popupsize("384 524");
            obj.set_headheight("56");
            this.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00_00","0","Calendar00_01:50","750","528",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_useheadline("true");
            obj.set_type("range");
            obj.set_headlineposition("top");
            obj.set_displaytype("datetime");
            obj.set_direction("horizontal");
            obj.set_rangeposition("start");
            obj.set_tabbuttonheight("32");
            obj.set_defaultrangeposition("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1610,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_달력");
                p.set_cssclass("btn_WF_Txt");
                p.set_accessibilityenable("false");

                p.staH2.set_taborder("0");
                p.staH2.set_text("달력");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.set_text("Calendar");
                p.staEtit.move("staDivider:15","0","129","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("달력은 날짜와 관련된 정보와 기능을 제공하는 데 사용한다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"74","0",null);

                p.Calendar00_01.set_taborder("4");
                p.Calendar00_01.set_datepickerchangetype("button");
                p.Calendar00_01.set_showmonthspin("true");
                p.Calendar00_01.set_showyearspin("true");
                p.Calendar00_01.set_type("monthonly");
                p.Calendar00_01.set_usetrailingday("true");
                p.Calendar00_01.set_popupsize("384 524");
                p.Calendar00_01.set_headheight("56");
                p.Calendar00_01.move("0","Static00_01_00:80","384","437",null,null);

                p.DateRangePicker00_00.set_taborder("5");
                p.DateRangePicker00_00.set_useheadline("true");
                p.DateRangePicker00_00.set_type("range");
                p.DateRangePicker00_00.set_headlineposition("top");
                p.DateRangePicker00_00.set_displaytype("datetime");
                p.DateRangePicker00_00.set_direction("horizontal");
                p.DateRangePicker00_00.set_rangeposition("start");
                p.DateRangePicker00_00.set_tabbuttonheight("32");
                p.DateRangePicker00_00.set_defaultrangeposition("1");
                p.DateRangePicker00_00.move("0","Calendar00_01:50","750","528",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1910,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.DateRangePicker00_00.set_direction("vertical");
                p.DateRangePicker00_00.move("0","Calendar00_01:50","384","1048",null,null);

                p.Calendar00_01.move("0","239","384","437",null,null);
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
        this.registerScript("comp03_lay03.xfdl", function() {

        this.lay03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay03_onload,this);
        };
        this.loadIncludeScript("comp03_lay03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
