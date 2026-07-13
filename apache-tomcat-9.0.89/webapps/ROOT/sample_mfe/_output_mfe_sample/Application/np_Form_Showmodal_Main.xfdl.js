(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("showmodal_parent");
            this.set_titletext("Show modal form");
            this.getSetter("classname").set("popup_test1");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","92","126","92","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("popup");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","17","13","711","36",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_taborder("1");
            obj.set_text("   This is sample used to send the parameter to popup opened by showmodal, passing \"123\" to popup");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","17","245","711","36",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_taborder("2");
            obj.set_text("   Received parameter by callback function, which is exdecuted  when popup is closed");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","2.63%","302","569","52",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","35.92%","132","165","51",null,null,null,null,null,null,this);
            obj.set_hotkey("CTRL+F10");
            obj.set_taborder("4");
            obj.set_text("hotkey(CTRL+F10)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","66.05%","143","100","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("modeless01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","434","70","77","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",760,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_Form_Showmodal_Main.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	//showmodal
        	this.lfn_Dialog("frmpop01", "Base::np_Form_Showmodal_Popup.xfdl", "123", 0, 0, 200, 200, true, "f_pop_callback");
        };

        this.lfn_Dialog = function (sFormId, sUrl, sArg, nLeft, nTop, nWidth, nHeight, bModeless, sCallbackFunc)
        {
        	var newChild = null;
        	var objParentFrame = this.getOwnerFrame();

        	newChild = new ChildFrame();
        	newChild.init(sFormId, 0, 0, nWidth, nHeight, null, null, sUrl);
        	//newChild.set_openalign("center middle");
        	newChild.autosize = true;
        	newChild.showModal(sFormId,objParentFrame, {pv_arg:sArg}, this, sCallbackFunc);
        };

        this.f_pop_callback=function(v1,v2)
        {
        	this.Edit00.set_value(v1 + " / " + v2);
        };

        //****************************************//
        this.gfn_isNull = function (Val)
        {
        	if (new String(Val).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (Val == null)
        	{
        		return true;
        	}
        	if (("x" + Val == "xNaN") && (new String(Val.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (Val.length == 0)
        	{
        		return true;
        	}

        	return false;
        };

        this.Button01_onclick = function(obj,e)
        {
        	trace("parent kot key");
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.open("modeless01", "Base::np_Form_Showmodal_Popup.xfdl", this.getOwnerFrame(),{}, "showtitlebar=true", 400, 200);
        };

        this.showmodal_parent_onrbuttonup = function(obj,e)
        {
        	trace("e.canvasx==>" + e.canvasx);
        	trace("e.canvasy==>" + e.canvasy);
        	trace("e.clientx==>" + e.clientx);
        	trace("e.clienty==>" + e.clienty);

        	this.lfn_Dialog("frmpop01", "Base::np_Form_Showmodal_Popup.xfdl", "123", e.clientx, e.clienty, 200, 200, true, "f_pop_callback");

        	var nX = e.screenX - system.clientToScreenX(nexacro.getApplication().mainframe, 0);
        	var nY = e.screenY - system.clientToScreenY(nexacro.getApplication().mainframe, 0);
        	trace(nX);
        	trace(nY);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onrbuttonup",this.showmodal_parent_onrbuttonup,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("np_Form_Showmodal_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
