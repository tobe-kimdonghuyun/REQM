(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay05");
            this.set_titletext("레이아웃 및 표현_모달");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            obj.getSetter("tabstop").set("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","90","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Modal");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모달은 대화창의 한 종류로 기본 창에 종속된 요소이다. 기본 창과 겹쳐져 가장 상단에 표시되며, 이때 기본 창은 비활성 상태로 전환되어 상호작용이 불가능하므로 사용자는 모달에서의 단일한 과업 또는 메시지에 집중할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static00_01_00:100","760","340",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","56",null,"36","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_H4");
            obj.set_accessibilityrole("heading2");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","40","108",null,"142","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("output");
            obj.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. ");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00",null,"252","90","48","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_01",null,"252","90","48","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"24","40","40","24",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cancel");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:60","760","648",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","0",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_02","40","56",null,"36","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_H4");
            obj.set_accessibilityrole("heading2");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00_01","40","108",null,"436","24",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrolltype("vertical");
            obj.set_formscrollbartype("none auto");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0",null,"160","32",null,null,null,null,null,this.Div01.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_image("url(\'theme::NexaKRDS/images/img_dummyimg.png\')");
            this.Div01.form.Div00_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","ImageViewer00:16",null,"356","32",null,null,null,null,null,this.Div01.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("output");
            obj.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.");
            this.Div01.form.Div00_01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","40","568","190","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("오늘 하루 보지 않기");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01_02",null,"560","90","48","40",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"24","40","40","24",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_01.set_taborder("0");
                p.Static01_01.set_cssclass("sta_POP_Bg");
                p.Static01_01.set_text("");
                p.Static01_01.move("0","0",null,null,"0","0");

                p.Static00_00.set_taborder("1");
                p.Static00_00.set_text("타이틀");
                p.Static00_00.set_cssclass("sta_WF_H4");
                p.Static00_00.set_accessibilityrole("heading2");
                p.Static00_00.move("40","56",null,"36","40",null);

                p.TextArea00.set_taborder("2");
                p.TextArea00.set_cssclass("output");
                p.TextArea00.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. ");
                p.TextArea00.move("40","108",null,"142","40",null);

                p.Button01_00_00.set_taborder("3");
                p.Button01_00_00.set_text("확인");
                p.Button01_00_00.set_cssclass("btn_WF_Crud01");
                p.Button01_00_00.move(null,"252","90","48","142",null);

                p.Button01_01.set_taborder("4");
                p.Button01_01.set_text("취소");
                p.Button01_01.move(null,"252","90","48","40",null);

                p.Button00_01.set_taborder("5");
                p.Button00_01.set_cssclass("btn_POP_Cancel");
                p.Button00_01.move(null,"24","40","40","24",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01_01.move("0","0",null,null,"0","0");

                p.Static00_00.set_cssclass("sta_WF_H4");
                p.Static00_00.move("40","56",null,"36","40",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div01.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00.set_taborder("0");
                p.ImageViewer00.set_image("url(\'theme::NexaKRDS/images/img_dummyimg.png\')");
                p.ImageViewer00.move("0","0",null,"160","32",null);

                p.TextArea00.set_taborder("1");
                p.TextArea00.set_cssclass("output");
                p.TextArea00.set_value("대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다. 에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.");
                p.TextArea00.move("0","ImageViewer00:16",null,"356","32",null);
            	}
            );
            this.Div01.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form.Div00_01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form.Div00_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_scrollbartype("none none");
            	}
            );
            this.Div01.form.Div00_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01.set_taborder("0");
                p.Static00_01.set_cssclass("sta_POP_Bg");
                p.Static00_01.set_text("");
                p.Static00_01.move("0","0",null,null,"0","0");

                p.Static01_02.set_taborder("1");
                p.Static01_02.set_text("타이틀");
                p.Static01_02.set_cssclass("sta_WF_H4");
                p.Static01_02.set_accessibilityrole("heading2");
                p.Static01_02.move("40","56",null,"36","40",null);

                p.Div00_01.set_taborder("2");
                p.Div00_01.set_text("Div00");
                p.Div00_01.set_formscrolltype("vertical");
                p.Div00_01.set_formscrollbartype("none auto");
                p.Div00_01.move("40","108",null,"436","24",null);

                p.CheckBox00_00.set_taborder("3");
                p.CheckBox00_00.set_text("오늘 하루 보지 않기");
                p.CheckBox00_00.move("40","568","190","40",null,null);

                p.Button01_02.set_taborder("4");
                p.Button01_02.set_text("확인");
                p.Button01_02.move(null,"560","90","48","40",null);

                p.Button00_02.set_taborder("5");
                p.Button00_02.set_cssclass("btn_POP_Cancel");
                p.Button00_02.set_enable("true");
                p.Button00_02.move(null,"24","40","40","24",null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01.set_text("");
                p.Static00_01.move("0","0",null,null,"0","0");

                p.Div00_01.move("40","108",null,"436","24",null);

                p.Static01_02.set_cssclass("sta_WF_H4");

                p.CheckBox00_00.move("40","568","180","40",null,null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_모달");
                p.set_cssclass("btn_WF_Txt");

                p.staH2.set_taborder("0");
                p.staH2.set_text("모달");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.getSetter("tabstop").set("false");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Modal");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.set_fittocontents("width");
                p.staEtit.move("staDivider:15","0","90","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("모달은 대화창의 한 종류로 기본 창에 종속된 요소이다. 기본 창과 겹쳐져 가장 상단에 표시되며, 이때 기본 창은 비활성 상태로 전환되어 상호작용이 불가능하므로 사용자는 모달에서의 단일한 과업 또는 메시지에 집중할 수 있다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"126","0",null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.move("0","Static00_01_00:100","760","340",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.move("0","Div00:60","760","648",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00_01_00.move("0","85",null,"126","0",null);

                p.Div00.move("0","311",null,"340","0",null);

                p.Div01.move("0","Div00:60",null,"648","0",null);
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
        this.registerScript("comp03_lay05.xfdl", function() {

        this.lay05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay05_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
