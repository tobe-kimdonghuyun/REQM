(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S30");
            this.set_titletext("담당자정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
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

            obj = new Div("divMain","0","50",null,"3640","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입주자 담당자");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divTat","0","0","100%","360",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("입주자 담당자");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S31.xfdl");
            obj.set_flexgrow("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divBstr","0.00","326","100.00%","1704",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("분야별 담당자");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S32.xfdl");
            obj.set_flexgrow("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divGrndsAgt","0","0","100.00%","406",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("현장대리인");
            obj.set_cssclass("div_WF_Bg");
            obj.set_url("work::CST/SUB/CST002S33.xfdl");
            obj.set_flexgrow("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divSafeMngr","0","0","100.00%","690",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("안전관리자");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S34.xfdl");
            obj.set_flexgrow("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divPrvc","0","3240","100.00%","390",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("개인정보수잡");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_url("work::CST/SUB/CST002S35.xfdl");
            obj.set_flexgrow("1");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divTat
            obj = new Layout("default","",0,0,this.divMain.form.divTat.form,function(p){});
            this.divMain.form.divTat.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divBstr
            obj = new Layout("default","",0,0,this.divMain.form.divBstr.form,function(p){});
            this.divMain.form.divBstr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divGrndsAgt
            obj = new Layout("default","",0,0,this.divMain.form.divGrndsAgt.form,function(p){});
            this.divMain.form.divGrndsAgt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divSafeMngr
            obj = new Layout("default","",0,0,this.divMain.form.divSafeMngr.form,function(p){});
            this.divMain.form.divSafeMngr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divPrvc
            obj = new Layout("default","",0,0,this.divMain.form.divPrvc.form,function(p){});
            this.divMain.form.divPrvc.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTat.set_taborder("0");
                p.divTat.set_text("입주자 담당자");
                p.divTat.set_cssclass("div_WF_Bg");
                p.divTat.set_fittocontents("height");
                p.divTat.set_url("work::CST/SUB/CST002S31.xfdl");
                p.divTat.set_flexgrow("1");
                p.divTat.move("0","0","100%","360",null,null);

                p.divBstr.set_taborder("1");
                p.divBstr.set_text("분야별 담당자");
                p.divBstr.set_cssclass("div_WF_Bg");
                p.divBstr.set_fittocontents("height");
                p.divBstr.set_url("work::CST/SUB/CST002S32.xfdl");
                p.divBstr.set_flexgrow("1");
                p.divBstr.move("0.00","326","100.00%","1704",null,null);

                p.divGrndsAgt.set_taborder("2");
                p.divGrndsAgt.set_text("현장대리인");
                p.divGrndsAgt.set_cssclass("div_WF_Bg");
                p.divGrndsAgt.set_url("work::CST/SUB/CST002S33.xfdl");
                p.divGrndsAgt.set_flexgrow("1");
                p.divGrndsAgt.move("0","0","100.00%","406",null,null);

                p.divSafeMngr.set_taborder("2");
                p.divSafeMngr.set_text("안전관리자");
                p.divSafeMngr.set_cssclass("div_WF_Bg");
                p.divSafeMngr.set_fittocontents("height");
                p.divSafeMngr.set_url("work::CST/SUB/CST002S34.xfdl");
                p.divSafeMngr.set_flexgrow("1");
                p.divSafeMngr.move("0","0","100.00%","690",null,null);

                p.divPrvc.set_taborder("2");
                p.divPrvc.set_text("개인정보수잡");
                p.divPrvc.set_cssclass("div_WF_Bg");
                p.divPrvc.set_fittocontents("height");
                p.divPrvc.set_url("work::CST/SUB/CST002S35.xfdl");
                p.divPrvc.set_flexgrow("1");
                p.divPrvc.move("0","3240","100.00%","390",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMain.form
            obj = new Layout("mobile","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divMain.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            obj.set_type("default");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::CST/SUB/CST002S31.xfdl");
            this._addPreloadList("fdl","work::CST/SUB/CST002S32.xfdl");
            this._addPreloadList("fdl","work::CST/SUB/CST002S33.xfdl");
            this._addPreloadList("fdl","work::CST/SUB/CST002S34.xfdl");
            this._addPreloadList("fdl","work::CST/SUB/CST002S35.xfdl");
        };
        
        // User Script
        this.registerScript("CST002S30.xfdl", function() {

        this.CST002M00_01_onload = function(obj,e)
        {
        	//this.divMain.form.divPrvc.visible = false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CST002M00_01_onload,this);
        };
        this.loadIncludeScript("CST002S30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
