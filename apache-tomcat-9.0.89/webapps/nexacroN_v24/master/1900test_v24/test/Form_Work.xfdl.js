(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_guide00");
            this.set_titletext("이용가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,953);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data01", this);
            obj._setContents("<ColumnInfo><Column id=\"제공받는자\" type=\"STRING\" size=\"256\"/><Column id=\"제공목적\" type=\"STRING\" size=\"256\"/><Column id=\"제공항목\" type=\"STRING\" size=\"256\"/><Column id=\"보유이용기간\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"제공받는자\">시도교육청</Col><Col id=\"제공목적\">온라인(서면) 상담 처리</Col><Col id=\"제공항목\">온라인(서면) 상담 내용 및 신청자 정보</Col><Col id=\"보유이용기간\">해당 기관의 지침에 따름</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09","20","0",null,"95","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이용가이드");
            obj.set_cssclass("sta_WF_Title");
            obj.set_accessibilityrole("heading");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","20","100",null,null,"0","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab0");
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_Guide");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("상시상담");
            obj.set_url("FrameBase::frameWorkMainImg.xfdl");
            obj.set_accessibilityenable("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("집중상담");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("온라인(서면)상담결과");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1340,953,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("이용가이드");

                p.Static09.set_taborder("0");
                p.Static09.set_text("이용가이드");
                p.Static09.set_cssclass("sta_WF_Title");
                p.Static09.set_accessibilityrole("heading");
                p.Static09.move("20","0",null,"95","0",null);

                p.Tab00.set_taborder("1");
                p.Tab00.set_tabindex("0");
                p.Tab00.set_cssclass("tab_WF_Guide");
                p.Tab00.move("20","100",null,null,"0","0");

                p.Tab00.Tabpage1.set_text("상시상담");
                p.Tab00.Tabpage1.set_url("FrameBase::frameWorkMainImg.xfdl");
                p.Tab00.Tabpage1.set_accessibilityenable("false");

                p.Tab00.Tabpage2.set_text("집중상담");

                p.Tab00.Tabpage3.set_text("온라인(서면)상담결과");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",800,953,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",480,1019,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static09.set_cssclass("sta_WF_TitleM");
                p.Static09.move("15","0",null,"60","15",null);

                p.Tab00.set_cssclass("tab_WF_M");
                p.Tab00.move("15","81",null,null,"15","0");
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
            this._addPreloadList("fdl","FrameBase::frameWorkMainImg.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
