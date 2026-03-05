(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_CST009M00");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBtn","0",null,null,"60","-140","570",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","50","17","118","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101688_test_CST009M00.xfdl", function() {


        this.Common_onclick = function(obj,e)
        {

        	for(var i=0; i<4; i++)
        	{
        			var btnNew = new nexacro.Button;
        			var btnId = "btn"+i;

        			btnNew.init(btnId, 0, 0, 0, 40);          // 초기화
        			btnNew.fittocontents = "width";           // 넓이 자동조절
        			btnNew.text          = "test" + i;             // 버튼 문자
        			//btnNew.cssclass      = dsOtpt.getColumn(i, "cssClass") || "btn_WF_No";
        			//btnNew.addEventHandler("onclick", this.FV_ARGS_WORK_FLOW_INFO.lnkgEvnt, this);
        			this.divBtn.form.addChild(btnId, btnNew);
        			//btnNew.expr = dsOtpt.getColumn(i, "exclCnd");


        			btnNew.show();

        	}
        	this.divBtn.form.resetScroll();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divBtn.addEventHandler("onclick",this.Common_onclick,this);
            this.Button00.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("RP_101688_test_CST009M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
