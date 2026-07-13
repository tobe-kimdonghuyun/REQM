(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("event_sub");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","60","44","52","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("edt00","91","24","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","1030","415","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","730","210","200","150",null,null,null,null,null,null,this);
            obj.set_formscrollbartype("fixed fixed");
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","18","40","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","60","126","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("event_sub1.xfdl", function(nexacro, system, trace, environment, application) {



        this.btn01_ondblclick = function(obj,e)
        {
        	alert("dblclick");
        };

        this.trlog = function(obj,e)
        {

        	trace ( " obj.name:"+ obj.name + "("+ obj._type_name+ ") e.eventid:" + e.eventid + " e.button:" + e.button + " e.clickitem:"+ e.clickitem + " e.clientx:"+ e.clientx + " e.clienty:"+ e.clienty + " e.canvasx:"+ e.canvasx + " e.canvasy:"+e.canvasy ) ;

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onlbuttondown",this.trlog,this);
            this.addEventHandler("onlbuttonup",this.trlog,this);
            this.btn01.addEventHandler("ondblclick",this.btn01_ondblclick,this);
            this.btn01.addEventHandler("onkillfocus",this.trlog,this);
            this.btn01.addEventHandler("onlbuttondown",this.trlog,this);
            this.btn01.addEventHandler("onlbuttonup",this.trlog,this);
            this.btn01.addEventHandler("onsetfocus",this.trlog,this);
            this.div00.addEventHandler("onkillfocus",this.trlog,this);
            this.div00.addEventHandler("onlbuttondown",this.trlog,this);
            this.div00.addEventHandler("onlbuttonup",this.trlog,this);
            this.div00.addEventHandler("onsetfocus",this.trlog,this);
            this.div00.form.btn00.addEventHandler("onkillfocus",this.trlog,this);
            this.div00.form.btn00.addEventHandler("onlbuttondown",this.trlog,this);
            this.div00.form.btn00.addEventHandler("onlbuttonup",this.trlog,this);
            this.div00.form.btn00.addEventHandler("onsetfocus",this.trlog,this);
            this.div00.form.btn00_00.addEventHandler("onkillfocus",this.trlog,this);
            this.div00.form.btn00_00.addEventHandler("onlbuttondown",this.trlog,this);
            this.div00.form.btn00_00.addEventHandler("onlbuttonup",this.trlog,this);
            this.div00.form.btn00_00.addEventHandler("onsetfocus",this.trlog,this);
        };

        this.loadIncludeScript("event_sub1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
