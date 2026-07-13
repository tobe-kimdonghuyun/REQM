(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1034,744);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn_set","36","108","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn_set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_get","36","175","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn_get");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1034,744,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_73458_sample_private.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn_set_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile( "test02", "22222222222222NN" );
        	nexacro.setPrivateProfile( "test01", "233333333333333NN" );
        };


        this.btn_get_onclick = function(obj,e)
        {
        	var s1, s2;
        	s1 = nexacro.getPrivateProfile( "test02");
        	s2 = nexacro.getPrivateProfile( "test01");

        	alert("s1 >> " + s1 + " s2 >> " +s2 );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_set.addEventHandler("onclick",this.btn_set_onclick,this);
            this.btn_get.addEventHandler("onclick",this.btn_get_onclick,this);
        };

        this.loadIncludeScript("RP_73458_sample_private.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
