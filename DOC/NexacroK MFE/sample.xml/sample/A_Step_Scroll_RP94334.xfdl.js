(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_190320");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(540,420);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","71","80","209","108",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("step1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","116","846","209","108",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","40","22","209","108",null,null,null,null,null,null,this);
            obj.set_positionstep("1");
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","326","820","209","108",null,null,null,null,null,null,this);
            obj.set_positionstep("2");
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","170","192","209","108",null,null,null,null,null,null,this);
            obj.set_background("(left bottom) aqua");
            obj.set_positionstep("1");
            obj.set_taborder("4");
            obj.set_text("step2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","300","280","209","108",null,null,null,null,null,null,this);
            obj.set_background("blue");
            obj.set_positionstep("2");
            obj.set_taborder("5");
            obj.set_text("step3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","461","17","49","26",null,null,null,null,null,null,this);
            obj.set_positionstep("0");
            obj.set_taborder("6");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",540,420,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("A_Step_Scroll_RP94334.xfdl", function(nexacro, system, trace, environment, application) {
        //include "libevent::event.util.xjs"
        //include "lib::libCommon.xjs";
        /*
         *
         */

        /*
        tc.validator ['tc_vc2'] = {
        	description: "Step Scroll 유지 기능 테스트",
        	prepare: function (){
        		var vpos = 200;
        		this.stepselector.set_stepindex(0);
        		this.scrollTo(0,vpos);
        	},
        	run: function () {
        		var vpos = 200;
        		this.stepselector.set_stepindex(1);
        		this.stepselector.set_stepindex(0);
        		var stepchanged_vpos = this.getVScrollPos();
        		return vpos == stepchanged_vpos;
        	},
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, true);
        	},
        	teardown: function () {

        	}
        };

        tc.validator ['tc_vc3'] = {
        	description: "Step Scroll 유지 기능 테스트",
        	prepare: function (){},
        	run: function () {
        		var vpos = 300;
        		this.stepselector.set_stepindex(2);
        		this.scrollTo(0,vpos);
        		this.stepselector.set_stepindex(1);
        		this.stepselector.set_stepindex(2);
        		var stepchanged_vpos = this.getVScrollPos();
        		return vpos == stepchanged_vpos;
        	},
        	check: function  (resultValue) {

        		return nexacro.test.checkEqual(this, resultValue, true);
        	},
        	teardown: function () {

        	}
        };
        */
        //this.tcList = [tc];

        this.test_190320_onstepchanged = function(obj,e)
        {
        return;
        	if (e.postindex == 1)
        	{
        		this.stepselector.set_stepindex(0)
        	}
        	/*else if (e.postindex == 0)
        	{
        		var runner = this.gfnGetRunner();
        		runner.setAsync(true); //true: Async, false: Sync
        	}*/
        };

        this.btn00_onclick = function(obj,e)
        {
        	this.scrollTo(0,50);
        	this.stepselector.set_stepindex(1);
        };

        this.test_190320_onload = function(obj,e)
        {
        	// 	this.gfnInit(this.tcList, this); //러너에 테스트케이스 등록
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_190320_onload,this);
            this.addEventHandler("onstepchanged",this.test_190320_onstepchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };

        this.loadIncludeScript("A_Step_Scroll_RP94334.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
