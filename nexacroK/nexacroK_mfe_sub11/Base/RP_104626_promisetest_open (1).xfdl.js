(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("promisetest_open");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","30","31","161","38",null,null,null,null,null,null,this);
            obj.set_background("red");
            obj.set_taborder("0");
            obj.set_text("promise open method1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","30","90","161","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("promise open method2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00_00","30","150","161","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("promise open method3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00_00_00","29","202","161","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("legacy open");
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
        this.registerScript("RP_104626_promisetest_open (1).xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	let ret1 = nexacro.open("promise_open_test1","Base::RP_104626_Form_Work1 (1).xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise")
        	.then((result1) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret1 + ", result1 = " + result1);
        	  /*
        	  let ret2 = nexacro.open("promise_open_test2","FrameBase::Form_Work2.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 300, 500,"promise").then((result2) => {
        		  trace("Closed popup with args: "  + " return2 = " + ret2 + ", result2 = " + result2);

        		  let ret3 = nexacro.open("promise_open_test3","FrameBase::Form_Work3.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 500, 500, 400, "promise").then((result3) => {
        			  trace("Closed popup with args: "  + " return3 = " + ret3 + ", result3 = " + result3);

        			  let ret4 = nexacro.open("promise_open_test4","FrameBase::Form_Work4.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 700, 500, 400, this, "promise").then((result4) => {
        			      trace("Closed popup with args: "  + " return4 = " + ret4 + ", result4 = " + result4);
        			  }).catch((err) => {
        			      trace("Failed to open promise_open_test4 popup: " + err.message + " return4 = " + ret4);
        			  });

        		  }).catch((err) => {
        			  trace("Failed to open promise_open_test3 popup: " + err.message + " return3 = " + ret3);
        		  });

        		}).catch((err) => {
        		  trace("Failed to open promise_open_test2 popup: " + err.message + " return2 = " + ret2);
        		});
        		*/
        	}).catch((err) => {
        		trace("Failed to open popup promise_open_test1 : " + err.message + " return = " + ret1);
        	});
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	trace("start~");
        	let ret = nexacro.open("promise_open_test1","FrameBase::Form_Work1.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 150, "promise").then((result) => {
        	  trace("Closed popup with args: "+ " return1 = " + ret);
        	}).catch((err) => {
        	  trace("Failed to open popup: " + err.message + " return = " + ret);
        	});
        	trace("ret - "+ret);

        	let ret2 = nexacro.open("promise_open_test2","FrameBase::Form_Work2.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 300, 500,"promise").then((result) => {
        	  trace("Closed popup with args: "  + " return2 = " + ret2);
        	}).catch((err) => {
        	  trace("Failed to open popup: " + err.message + " return2 = " + ret2);
        	});
        	trace("ret - "+ret);

        	let ret3 = nexacro.open("promise_open_test3","FrameBase::Form_Work3.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 500, 500, 400, "promise").then((result) => {
        	  trace("Closed popup with args: "  + " return3 = " + ret3);
        	}).catch((err) => {
        	  trace("Failed to open popup: " + err.message + " return3 = " + ret3);
        	});
        	trace("ret - "+ret);

        	let ret4 = nexacro.open("promise_open_test4","FrameBase::Form_Work4.xfdl", this.getOwnerFrame(), { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 700, 500, 400, this, "promise").then((result) => {
        	  trace("Closed popup with args: "  + " return4 = " + ret4);
        	}).catch((err) => {
        	  trace("Failed to open popup: " + err.message + " return4 = " + ret4);
        	});
        	trace("ret - "+ret);
        	trace("end~");
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	trace("start~");
        	showModeless(this.getOwnerFrame());
        	trace("end~");
        };
        async function showModeless(frame)
        {
            try {
        		let ret = await nexacro.open("promise_open_test1","FrameBase::Form_Work1.xfdl", frame, { user:"이몽룡" }, "resizable=false showstatusbar=true", 150, 500, 500, 400, "promise");
        		trace("return : "+ret);
            } catch (err) {
                trace("❌ 팝업에러 :"+err);
            }
        }

        this.Button00_00_00_00_onclick = function(obj,e)
        {
        	var bSucc = nexacro.open("modeless", "FrameBase::Form_Work1.xfdl",  this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "showtitlebar=true showstatusbar=false", 0, 0);
        	trace("open - "+bSucc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.Button00_00_00_00.addEventHandler("onclick",this.Button00_00_00_00_onclick,this);
        };

        this.loadIncludeScript("RP_104626_promisetest_open (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
