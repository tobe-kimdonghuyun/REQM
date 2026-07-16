(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("promisetest_modal");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","23","20","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("showModal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","23","316","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("showModalWindow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","23","94","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("showModal nocallback");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","23","168","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("await showModal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","23","390","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("await showModalWindow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01_00","23","242","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("await showModalSync");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","280","20","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("regarcy open method");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","280","94","235","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("promise open method");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("A05_4041_Sample_promise_popup.xfdl", function(nexacro, system, trace, environment, application) {
        this.Button00_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "Base::popup_p.xfdl";

        	var vRtn = objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this, this.fn_callback );
        	trace("async showModal");

        };

        this.fn_callback = function( strID, vArgu )
        {
        	trace("callbak Function");
        };

        this.Button03_onclick = function(obj,e)
        {
        /*
        	let objFrame = new ChildFrame();
        	let objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "Base::popup_p.xfdl";

        	let req = objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this);

        	req.then(function() {
                trace('showModal closed');})
        		.catch(function(error){console.log("error")});
        */

        	let objFrame = new ChildFrame();
        	let objParentFrame = this.getOwnerFrame();
        	objFrame.init( "modal00", 0, 0, 200, 200 );
        	objFrame.formurl = "Base::popup_p.xfdl";

        	objFrame.showModal( objParentFrame
        		, {a:'aaa', b:'bbb'}
        		, this)
        	.then(returnvalue => {
        		trace(returnvalue.arg);
        		let userObj = JSON.parse(returnvalue.arg);
        		trace(userObj.name + " / " + userObj.age);
        	}).catch((err) => {
        		console.log("Failed to open popup: ", err);
        	});
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.fn_sync_showModal();
        };

        this.fn_sync_showModal = async function( strID, vArgu )
        {
        	let objFrame = new ChildFrame();
        	let objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.formurl = "Base::popup_p.xfdl";

        	await objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this);
        	trace("sync showmodal");
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.ModalSync();
        };

        this.ModalSync = async function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modalsync00", 0, 0, 500, 500 );
        	objFrame.formurl = "Base::popup_p.xfdl";
        	let aaa = await system.showModalSync(objFrame, "test", objParentFrame, {a:'aaa', b:'bbb'}, this );
        	trace("aaa ", aaa);
        };

        this.Button02_onclick = function(obj,e)
        {
        	var objCFrame = new ChildFrame();
        	objCFrame.init( "moda00", 0, 0, 500, 500 );
        	objCFrame.formurl = "Base::popup_p.xfdl";
        	var ret = system.showModalWindow( objCFrame, "modal01", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this );
        	trace("aaaa", ret);
        };

        this.Button05_onclick = async function(obj,e)
        {
        	this.syncShowModalWindow();
        };

        this.syncShowModalWindow = async function()
        {
        	var objCFrame = new ChildFrame();

        	objCFrame.init( "moda00", 0, 0, 500, 500 );
        	objCFrame.formurl = "Base::popup_p.xfdl";
        	var ret = await system.showModalWindow( objCFrame, "modal01", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this );
        	trace("aaaa", ret);
        };

        this.Button01_onclick = function(obj,e)
        {
        	trace(nexacro.open("regarcy_open_test1","Base::popup_p.xfdl", this.getOwnerFrame(), { user:"이몽룡1" }, "resizable=false showstatusbar=true", 150, 150));
        };


        this.Button02_00_onclick = function(obj,e)
        {
        	let ret = nexacro.open("promise_open_test","Base::popup_p.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise").then((result) => {
        	  trace("1 Closed popup with args: "+ " return = " + ret );
        	}).catch((err) => {
        	  trace("Failed to open popup: " + err.message + " return = " + ret);
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
        };

        this.loadIncludeScript("A05_4041_Sample_promise_popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
