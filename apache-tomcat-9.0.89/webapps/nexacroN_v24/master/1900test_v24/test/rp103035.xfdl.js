(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scr_btbnt00_m01");
            this.set_titletext("공지사항목록조회_시스템");
            if (Form == this.constructor)
            {
                this._setFormPosition(1320,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSysNtc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"ntcMteTitlNm\" type=\"STRING\" size=\"256\"/><Column id=\"regDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ntcMteTitlNm\">첫번째</Col><Col id=\"rownum\">1</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">두번째</Col><Col id=\"rownum\">2</Col><Col id=\"regDt\">2025/07/14</Col></Row><Row><Col id=\"ntcMteTitlNm\">세번째</Col><Col id=\"rownum\">3</Col><Col id=\"regDt\">2025/07/14</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","23","43","260","66",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("static");
            this.addChild(obj.name, obj);

            obj = new Div("divImage","20","140",null,"254","370",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("FrameBase::frameWorkMainImg.xfdl");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","50","430","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일반 스테틱");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","23","483","367","55",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","485","413","443","135",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("azure");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","4","120","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("div 내부 스테틱");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta02","17","46","320","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("서로가 상호 존중하는");
            obj.set_cssclass("sta_MF_ImgTxt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta03","17","78","400","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
            obj.set_cssclass("sta_MF_ImgTxt");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divImage
            obj = new Layout("default","",0,0,this.divImage.form,function(p){});
            this.divImage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("div 내부 스테틱");
                p.Static00.move("23","4","120","60",null,null);

                p.sta02.set_taborder("1");
                p.sta02.set_text("서로가 상호 존중하는");
                p.sta02.set_cssclass("sta_MF_ImgTxt");
                p.sta02.move("17","46","320","45",null,null);

                p.sta03.set_taborder("2");
                p.sta03.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
                p.sta03.set_cssclass("sta_MF_ImgTxt");
                p.sta03.set_usedecorate("true");
                p.sta03.move("17","78","400","55",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("tablet","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("mobile","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1320,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("공지사항목록조회_시스템");

                p.Button00.set_taborder("0");
                p.Button00.set_text("static");
                p.Button00.move("23","43","260","66",null,null);

                p.divImage.set_taborder("1");
                p.divImage.set_text("Div00");
                p.divImage.set_url("FrameBase::frameWorkMainImg.xfdl");
                p.divImage.set_tabstop("false");
                p.divImage.move("20","140",null,"254","370",null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("일반 스테틱");
                p.Static00.move("50","430","120","60",null,null);

                p.sta03.set_taborder("3");
                p.sta03.set_text("<fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학부모</fc></b></fs>와 <fs v=\'35\'><b v=\'true\'><fc v=\'#CA434E\'>학교간</fc></b></fs>의 소통");
                p.sta03.set_cssclass("sta_MF_ImgTxt");
                p.sta03.set_usedecorate("true");
                p.sta03.move("23","483","367","55",null,null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_background("azure");
                p.Div00.move("485","413","443","135",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("tablet","desktopScr,tabletScr",780,550,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divImage.move("20","170",null,"254","370",null);

                p.Button00.set_text("버튼 accessibilitydesc 읽지 않음");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","desktopScr,mobileScr",450,963,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divImage.set_url("test::frameWorkMainImg.xfdl");
                p.divImage.set_text("Div00");
                p.divImage.move("5","119",null,"254","15",null);

                p.Button00.set_text("static_m");

                p.Div00.move("-1","610","443","135",null,null);
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
            this._addPreloadList("fdl","FrameBase::frameWorkMainImg.xfdl");
            this._addPreloadList("fdl","test::frameWorkMainImg.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.addEventHandler("oninit",this.form_oninit,this);
        };
        this.loadIncludeScript("rp103035.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
