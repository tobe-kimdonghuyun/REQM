(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Base");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNewsAll", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "cell_Noti","Column2" : "2022-12-01","Column1" : "인사발령(입사)","Column3" : "공지사항","Column4" : "공지"},{"Column0" : "cell_Noti","Column2" : "2022-12-01","Column1" : "퇴직연금 신규가입 및 이전 관련 안내","Column3" : "공지사항","Column4" : "공지"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNews", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "cell_Noti","Column2" : "2022-12-01","Column1" : "인사발령(입사)","Column3" : "공지사항","Column4" : "공지"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","36","457","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모바일 calendar 에디트창 클릭 시 화면 어두워짐");
            this.addChild(obj.name, obj);

            obj = new Static("sta79","50","220","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Static("sta70","50","244","80","13",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("normal");
            obj.set_cssclass("sta_WF_GTxt03");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","50","267","390","50",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("3");
            obj.set_value("20221205");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","50","360","390","50",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("4");
            obj.set_value("20221205");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            obj.set_type("normal");
            obj.set_popuptype("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00_01","50","440","390","50",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("5");
            obj.set_value("20221205");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_usetrailingday("true");
            obj.set_popuptype("system");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","569","52","291","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","55","508","390","62",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","60","588","390","62",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_popuptype("center");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"codecolumn" : "4","datacolumn" : "4"}]});
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,1040,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("모바일 calendar 에디트창 클릭 시 화면 어두워짐");
                p.Button00.move("50","36","457","113",null,null);

                p.sta79.set_taborder("1");
                p.sta79.set_text("기본");
                p.sta79.set_cssclass("sta_WF_GTxt02");
                p.sta79.move("50","220","26","14",null,null);

                p.sta70.set_taborder("2");
                p.sta70.set_text("normal");
                p.sta70.set_cssclass("sta_WF_GTxt03");
                p.sta70.move("50","244","80","13",null,null);

                p.cal00.set_taborder("3");
                p.cal00.set_value("20221205");
                p.cal00.set_dateformat("yyyy-MM-dd ");
                p.cal00.set_usetrailingday("true");
                p.cal00.move("50","267","390","50",null,null);

                p.cal00_00.set_taborder("4");
                p.cal00_00.set_value("20221205");
                p.cal00_00.set_dateformat("yyyy-MM-dd ");
                p.cal00_00.set_usetrailingday("true");
                p.cal00_00.set_type("normal");
                p.cal00_00.set_popuptype("center");
                p.cal00_00.move("50","360","390","50",null,null);

                p.cal00_01.set_taborder("5");
                p.cal00_01.set_value("20221205");
                p.cal00_01.set_dateformat("yyyy-MM-dd ");
                p.cal00_01.set_usetrailingday("true");
                p.cal00_01.set_popuptype("system");
                p.cal00_01.move("50","440","390","50",null,null);

                p.Button01.set_taborder("6");
                p.Button01.set_text("Button01");
                p.Button01.move("569","52","291","100",null,null);

                p.Combo00.set_taborder("7");
                p.Combo00.set_innerdataset(Combo00_innerdataset);
                p.Combo00.set_codecolumn("codecolumn");
                p.Combo00.set_datacolumn("datacolumn");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("55","508","390","62",null,null);

                p.Combo00_00.set_taborder("8");
                p.Combo00_00.set_innerdataset(Combo00_00_innerdataset);
                p.Combo00_00.set_codecolumn("codecolumn");
                p.Combo00_00.set_datacolumn("datacolumn");
                p.Combo00_00.set_popuptype("center");
                p.Combo00_00.set_text("Combo00");
                p.Combo00_00.move("60","588","390","62",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Mobile_screen",480,678,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.move("13","34","457","113",null,null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102570_Base.xfdl", function() {
        this.fvnRollingTime    = 1000;		//배너 롤링 time
        this.fvnRollingTimerId1 = 10;		//배너 롤링 timer ID
        this.fvnRollingTimerId2 = 20;		//배너 롤링 timer ID


        this.Div00_onsetfocus = function(obj,e)
        {
        	obj.background = "pink";

        	//배너 롤링
        	this.setTimer(this.fvnRollingTimerId1, this.fvnRollingTime);
        };

        this.Div00_00_onsetfocus = function(obj,e)
        {
        	obj.background = "yellow";

        	//배너 롤링
        	this.setTimer(this.fvnRollingTimerId2, this.fvnRollingTime);
        };


        this.Button01_onsetfocus = function(obj,e)
        {
        	obj.background = "pink";
        };



        this.Base_ontimer = function(obj,e)
        {

        	if (e.timerid == this.fvnRollingTimerId1)
        	{
        		this.Static01.text =  nexacro.toNumber(this.Static01.text)+1;
        	}
        	else if (e.timerid == this.fvnRollingTimerId2)
        	{
        		this.Static02.text =  nexacro.toNumber(this.Static02.text)+1;
        	}

        };


        this.cal00_onchanged = function(obj,e)
        {

        };

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.cal00.popuptype+" :: "+this.cal00_00.popupsizee+" :: "+this.cal00_01.popupsize);
        };

        this.Button01_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "FrameBase::Form_Work.xfdl";
        	var vRtn = objFrame.showModal( "modal00", objParentFrame, null, this,"" );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.cal00.addEventHandler("onchanged",this.cal00_onchanged,this);
            this.cal00_01.addEventHandler("onchanged",this.cal00_onchanged,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("RP_102570_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
