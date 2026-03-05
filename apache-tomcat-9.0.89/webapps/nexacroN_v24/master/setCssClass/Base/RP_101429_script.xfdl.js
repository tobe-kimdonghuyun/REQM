(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("script");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebView("WebView00","56","159","468","301",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","100","10","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("1 - url  set (WebView)");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","260","7","182","56",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("3 - call scripturl  set (WebView)\r\nreturn \"테스트\";");
            obj.set_background("pink");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101429_script.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.WebView00.set_url("http://172.10.12.45:9090/RP_101429_callscript.html")
        };
        this.Button01_00_onclick = function(obj,e)
        {
        	/* as-is
            oRd.callScript("setOption('" + JSON.stringify(oRd._arg_RdOption) + "');");
            oRd.callScript("setRdFileNm('" + JSON.stringify(oRd._arg_RdFileNm) + "');");
            oRd.callScript('setRdPrint("' + oRd._arg_RdPrint + '");');
            if (oRd._arg_RdToolbar) {
                oRd.callScript('setToolbar("'+(oRd._arg_RdEnable ? "S" : "H")+'", "' + oRd._arg_RdToolbar + '");');
            }
            if (oRd._arg_RdAppendReport == true) {
                oRd.callScript("openAppendFile('" + JSON.stringify(oRd._arg_RdMrdList) + "');");
           }
            else {
                oRd.callScript('setUrl("' + oRd._arg_MrdName + '");');
                oRd.callScript('setParam("' + encodeURIComponent(oRd._arg_RdParam) + '");');
                oRd.callScript('openFile();');
            }
            this.gfnSetTranLog("P", this, "[" + (oRd._arg_MrdName||"").substr(1) + "] " + oRd._arg_RdParam);
            (oRd.parent._RPT_FOCUS_ ? oRd.parent._RPT_FOCUS_.setFocus() : oRd.setFocus())

        	*/

        	var oRd =
        	{
        		_arg_RdOption : "write",
        		_arg_RdFileNm : "접근섣심사문서.pdf",
        		_arg_RdPrint : "SINDOH D410",
        		_arg_RdEnable :"false",
        		_arg_RdToolbar :"true",
        		_arg_RdMrdList  : "c:\\temp",
        		_arg_MrdName : "aaa",
        		_arg_RdAppendReport : "false",
        		_arg_RdParam :"password"

        	}
        	var vString = "Function(\"" +
        				"setOption('\" + " + JSON.stringify(oRd._arg_RdOption) + " + \"');" +
        				"setRdFileNm('\" + " + JSON.stringify(oRd._arg_RdFileNm) + " + \"');" +
        				"setRdPrint('" + oRd._arg_RdPrint + "');";

        	if (oRd._arg_RdToolbar) {
        		vString += "setToolbar('"+(oRd._arg_RdEnable ? "S" : "H")+"', '" + oRd._arg_RdToolbar + "');"
        	}
        	if (oRd._arg_RdAppendReport == true) {
        	   vString += "openAppendFile('\" +" + JSON.stringify(oRd._arg_RdMrdList) + " + \"');";
        	}
        	else {
        	//	var rtn = nexacro.base64Encode(oRd._arg_RdParam);
        		vString +="setUrl('" + oRd._arg_MrdName + "');" +
        				"setParam('" + nexacro.base64Encode(oRd._arg_RdParam) + "');"+
        				"OpenFile();";
        	}
        	vString +="\")();";
        	trace(vString);
        	var test = this.WebView00.callScriptAsync(vString);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
        };
        this.loadIncludeScript("RP_101429_script.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
