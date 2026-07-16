(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("promisetest_trackpopup");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.PopupDiv("PopupDiv00","15","734","335","236",null,null,null,null,null,null,this);
            obj.set_background("red");
            obj.set_url("FrameBase::Form_Work.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDateRangePicker("PopupDateRangePicker00","360","734","338","396",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","73","130","207","60",null,null,null,null,null,null,this);
            obj.set_background("aqua");
            obj.set_border("1px solid");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("0");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00_00","72","350","207","60",null,null,null,null,null,null,this);
            obj.set_background("aqua");
            obj.set_border("1px solid");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("1");
            obj.set_text("PopupDateRangePicker");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","72","206","209","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("2");
            obj.set_text("trackPopup - no callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_04","784","264","209","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("20");
            obj.set_text("closePopup");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","310","207","209","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("3");
            obj.set_text("trackPopup - callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01","72","264","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("4");
            obj.set_text("trackPopupByComponent - no callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00","310","264","230","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("5");
            obj.set_text("trackPopupByComponent - callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_01","72","423","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("6");
            obj.set_text("trackPopup - no callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_01_01","784","423","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("18");
            obj.set_text("trackPopup - await");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_01_00","546","423","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("15");
            obj.set_text("trackPopup - promise");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00_00","310","423","230","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("7");
            obj.set_text("trackPopup- callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_02","72","480","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("8");
            obj.set_text("trackPopupByComponent - no callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00_01","310","480","230","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("9");
            obj.set_text("trackPopupByComponent - callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_02_00","73","537","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("10");
            obj.set_text("trackPopupCenter - no callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00_01_00","311","537","230","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("11");
            obj.set_text("trackPopupCenter - callback");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","425","16","291","169",null,null,null,null,null,null,this);
            obj.set_enable("true");
            obj.set_taborder("12");
            obj.set_text("PopupBase Position");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_02","556","207","209","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("13");
            obj.set_text("trackPopup - promise");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_03","556","264","217","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("14");
            obj.set_text("trackPopupByComponent - promise");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_02_01","546","480","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("16");
            obj.set_text("trackPopupByComponent - promise");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_02_00_00","546","537","228","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("17");
            obj.set_text("trackPopupCenter - promise");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_03","783","206","209","47",null,null,null,null,null,null,this);
            obj.set_padding("0px 0px 0px 10px");
            obj.set_taborder("19");
            obj.set_text("trackPopup - await");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Form_Work.xfdl");
        };
        
        // User Script
        this.registerScript("RP_104348_RP_103769_promisetest_trackpopup (1).xfdl", function(nexacro, system, trace, environment, application) {
        this.fn_Callback = function(id, rtnVal)
        {
        	trace("trackPopup-"+ id +", rtnVal-"+rtnVal);
        }

        //trackPopup - no callback
        this.Button00_onclick = function(obj,e)
        {
        	let ret = this.PopupDiv00.trackPopup( 10,10 );
        	trace("return-"+ret);
        };

        //trackPopup - callback
        this.Button00_00_onclick = function(obj,e)
        {
        	let ret = this.PopupDiv00.trackPopup( 10,10, 200, 200, "fn_Callback", false );
        	trace("return-"+ret);
        };

        //trackPopupByComponent - no callback
        this.Button00_01_onclick = function(obj,e)
        {
        	let ret = this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10);
        	trace("return-"+ret);
        };

        //trackPopupByComponent - callback
        this.Button00_01_00_onclick = function(obj,e)
        {
        	let ret = this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10, 200, 200, "fn_Callback", false );
        	trace("return-"+ret);
        };

        //PopupDateRangePicker - no callback
        this.Button00_01_01_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200);
        	trace("return-"+ret);
        };

        //PopupDateRangePicker - callback
        this.Button00_01_00_00_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200, "fn_Callback", false );
        	trace("return-"+ret);
        };

        //trackPopupByComponent - no callback
        this.Button00_01_02_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopupByComponent( "start", this.Button04, 10,10, 200, 200);
        	trace("return-"+ret);
        };

        //trackPopupByComponent - callback
        this.Button00_01_00_01_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopupByComponent( "start", this.Button04, 10,10, 200, 200, "fn_Callback", false );
        	trace("return-"+ret);
        };

        //trackPopupCenter - no callback
        this.Button00_01_02_00_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopupCenter( "start");
        	trace("return-"+ret);
        };

        //trackPopupCenter - callback
        this.Button00_01_00_01_00_onclick = function(obj,e)
        {
        	let ret = this.PopupDateRangePicker00.trackPopupCenter( "start", 340, 400, "fn_Callback", false );
        	trace("return-"+ret);
        };

        //trackPopup - promise
        this.Button00_02_onclick = function(obj,e)
        {
        	let req1 = this.PopupDiv00.trackPopup( 10,10, 200, 200);
        	req1.then(function(rtn) {
                trace('PopupDiv00 closed, rtn-'+rtn);})
        		.catch(function(error){console.log("error")});
        };

        //trackPopupByComponent - promise
        this.Button00_01_03_onclick = function(obj,e)
        {
        	let req2 = this.PopupDiv00.trackPopupByComponent( this.Button04, 10,10, 200, 200);
        	req2.then(function(rtn) {
                trace('PopupDiv00 closed, rtn-'+rtn);})
        		.catch(function(error){console.log("error")});
        };

        //trackPopup - promise
        this.Button00_01_01_00_onclick = function(obj,e)
        {
        	let req3 = this.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200);
        	req3.then(function() {
                trace('PopupDateRangePicker00 closed');})
        		.catch(function(error){console.log("error")});
        };

        //trackPopupByComponent - promise
        this.Button00_01_02_01_onclick = function(obj,e)
        {
        	let req4 = this.PopupDateRangePicker00.trackPopupByComponent("start", this.Button04, 10,10, 200, 200);
        	req4.then(function() {
                trace('PopupDateRangePicker00 closed');})
        		.catch(function(error){console.log("error")});
        };

        //trackPopupCenter - promise
        this.Button00_01_02_00_00_onclick = function(obj,e)
        {
        	let req5 = this.PopupDateRangePicker00.trackPopupCenter("start");
        	req5.then(function() {
                trace('PopupDateRangePicker00 closed');})
        		.catch(function(error){console.log("error")});
        };

        this.Button00_03_onclick = function(obj,e)
        {
        	trace("start~");
        	showModeless1(this);
        	trace("end~");
        };
        async function showModeless1(thisP)
        {
            try {
        		await thisP.PopupDiv00.trackPopup( 10,10 );
        		trace("return : "+ret);
            } catch (err) {
                trace("❌ 팝업에러 :"+err);
            }
        }

        this.Button00_01_01_01_onclick = function(obj,e)
        {
        	trace("start~");
        	showModeless2(this);
        	trace("end~");
        };
        async function showModeless2(thisP)
        {
            try {
        		await thisP.PopupDateRangePicker00.trackPopup( "start", 10,10, 200, 200);
        		trace("return : "+ret);
            } catch (err) {
                trace("❌ 팝업에러 :"+err);
            }
        }

        this.Button00_04_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup("PopupDiv Closed!!");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_04.addEventHandler("onclick",this.Button00_04_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Button00_01_00.addEventHandler("onclick",this.Button00_01_00_onclick,this);
            this.Button00_01_01.addEventHandler("onclick",this.Button00_01_01_onclick,this);
            this.Button00_01_01_01.addEventHandler("onclick",this.Button00_01_01_01_onclick,this);
            this.Button00_01_01_00.addEventHandler("onclick",this.Button00_01_01_00_onclick,this);
            this.Button00_01_00_00.addEventHandler("onclick",this.Button00_01_00_00_onclick,this);
            this.Button00_01_02.addEventHandler("onclick",this.Button00_01_02_onclick,this);
            this.Button00_01_00_01.addEventHandler("onclick",this.Button00_01_00_01_onclick,this);
            this.Button00_01_02_00.addEventHandler("onclick",this.Button00_01_02_00_onclick,this);
            this.Button00_01_00_01_00.addEventHandler("onclick",this.Button00_01_00_01_00_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button00_02.addEventHandler("onclick",this.Button00_02_onclick,this);
            this.Button00_01_03.addEventHandler("onclick",this.Button00_01_03_onclick,this);
            this.Button00_01_02_01.addEventHandler("onclick",this.Button00_01_02_01_onclick,this);
            this.Button00_01_02_00_00.addEventHandler("onclick",this.Button00_01_02_00_00_onclick,this);
            this.Button00_03.addEventHandler("onclick",this.Button00_03_onclick,this);
        };

        this.loadIncludeScript("RP_104348_RP_103769_promisetest_trackpopup (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
