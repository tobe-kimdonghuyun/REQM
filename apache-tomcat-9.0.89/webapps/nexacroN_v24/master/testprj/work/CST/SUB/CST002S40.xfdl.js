(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S40");
            this.set_titletext("전달사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","20","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("표는 필수 입력 사항입니다.");
            obj.set_cssclass("sta_WF_EsentialTxt");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00","0","staSubTitle:0","100%","437",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","100%","376",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","267","100.00%","387",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","583","508","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","371","100.00%","166",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"760\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","53","302","100%","100",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("내용 입력");
            this.div00_01_01_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_01_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02_00.set_taborder("1");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.move("20.00","0","100%","376",null,null);

                p.pan02.set_taborder("2");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","267","100.00%","387",null,null);

                p.Static00.set_taborder("5");
                p.Static00.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_fittocontents("height");
                p.Static00.move("583","508","100%","40",null,null);

                p.Grid00.set_taborder("4");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("20.00","371","100.00%","166",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("전달사항");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("3");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("53","302","100%","100",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CST002S40.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
