(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("promisetest_popup");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "DATE"},{"id" : "Column1","size" : "256","type" : "DATE"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "DATETIME"},{"id" : "Column4","size" : "256","type" : "TIME"},{"id" : "Column5","size" : "256","type" : "TIME"}]},"Rows" : [{"Column0" : "20230615","Column1" : "20230924","Column2" : "20230615153059000","Column3" : "20230924163030000","Column4" : "153059000","Column5" : "163059000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.PopupDiv("PopupDiv00","47","454","277","193",null,null,null,null,null,null,this);
            obj.set_background("red");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","56","36","120","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","47","127","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("trackPopup callbackFn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","47","211","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("trackPopup Promise");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","59","2698","104","195",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","347","127","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("trackPopupByComponent callbackFn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","349","211","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("trackPopupByComponent Promise");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDateRangePicker("PopupDateRangePicker00","337","449","318","256",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","47","295","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("popupcalendar trackpopup callbackFn");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","47","379","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("popupcalendar trackpopup promise");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","349","295","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("popupcalendar trackpopupByComponent");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","348","379","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("popupcalendar trackpopupByComponent promise");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","47","35","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("trackPopup no callback");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button10","350","35","286","58",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("trackPopupByComponent no callback");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","PopupDateRangePicker00","enddate","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","PopupDateRangePicker00","startdate","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("A05_4041_Sample_promise_trackpopup.xfdl", function(nexacro, system, trace, environment, application) {
        this.fn_Callback = function(id)
        {
        	trace("trackPopup   "+ id);
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup( 10,10, 200, 200, "fn_Callback", false );
        };

        this.Button01_onclick = function(obj,e)
        {
        	let req = this.PopupDiv00.trackPopup( 10,10, 200, 200);
        	req.then(function() {
                trace('First popup closed');})
        		.catch(function(error){console.log("error")});
        };

        this.trackpopuBycomponentCallbackFn_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10, 200, 200, "fn_Callback", false );
        };

        this.trackpopupBycomponentPromise_onclick = function(obj,e)
        {
        	let req = this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10, 200, 200);
        	req.then(function() {
                trace('popupbycomponent closed');})
        		.catch(function(error){console.log("error")});
        };

        this.Button05_onclick = function(obj,e)
        {
        	this.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200, "fn_Callback", false );
        };

        this.Button06_onclick = function(obj,e)
        {
        	let req = this.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200);
        	req.then(function() {
                trace('popupbycomponent closed');})
        		.catch(function(error){console.log("error")});
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.PopupDateRangePicker00.trackPopupByComponent( "start", this.Button04, 10,10, 200, 200, "fn_Callback", false );
        };

        this.Button08_onclick = function(obj,e)
        {
        	let req = this.PopupDateRangePicker00.trackPopupByComponent("start", this.Button04, 10,10, 200, 200);
        	req.then(function() {
                trace('popupbycomponent closed');})
        		.catch(function(error){console.log("error")});
        };

        this.Button09_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup( 10,10 );
        };

        this.Button10_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button03.addEventHandler("onclick",this.trackpopuBycomponentCallbackFn_onclick,this);
            this.Button04.addEventHandler("onclick",this.trackpopupBycomponentPromise_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
        };

        this.loadIncludeScript("A05_4041_Sample_promise_trackpopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
