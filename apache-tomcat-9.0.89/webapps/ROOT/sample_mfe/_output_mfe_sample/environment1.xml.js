const envLoader = function(nexacro, system, trace) 
{ 	
    if (nexacro.Environment)
    {
        console.log("environment1.xml.js");
        var env = new nexacro.Environment();
        env._importurl = import.meta.url;

        env.on_getAllScreenInfo = function ()
        {
            return [
            {"enableaccessibility":"true","id":"mobile","type":"mobile_small","zoomfactortype":"portrait","filesecurelevel":"all","enableinspector":"true","themeid":"theme::blue","initvaluefileid":"initvalue::bb.xiv","xadl":"application.xadl.js"},
            {"id":"medium","type":"mobile_medium","filesecurelevel":"all","enableinspector":"true","themeid":"theme::Mobile","initvaluefileid":"initvalue::bb.xiv","xadl":"application.xadl.js"},
            {"id":"large","type":"mobile_large","filesecurelevel":"all","enableinspector":"true","themeid":"theme::Mobile","initvaluefileid":"initvalue::bb.xiv","xadl":"application.xadl.js"},
            {"id":"desktop","type":"desktop","filesecurelevel":"all","enableinspector":"true","themeid":"theme::Mobile","initvaluefileid":"initvalue::bb.xiv","xadl":"Application_Desktop.xadl.js"}
            ];
        };

        env.on_getUserFontInfo = function()
        {
            return [

            ];
        };

        env.on_init = function ()
        {
            this.getSetter("appkey").set("KKKKKKK");
            this.set_browserreloadkey("reloadactiveform");
            this.set_csscollisionpreventkey("KKKKKKK");
            this.set_themekey("KKKKKKK");
            this.set_datatyperule("2.0");
            this.set_enableaccessibility("false");
            this.set_enableinspector("true");
            this.set_filesecurelevel("all");
            this.set_initvaluefileid("initvalue::aa.xiv");
            this.set_loadingimage("url(\'theme::Mobile/images/loadingimage.gif\')");
            this.getSetter("onpagerefreshbykey").set("Environment_onpagerefreshbykey");
            this.set_preventbrowserbackbutton("true");
            this.set_rtl("false");
            this.set_themeid("theme::Mobile");
            this.set_usestringresource("true");
        };

        env.on_initEvent = function ()
        {
            // add event handler
            this.addEventHandler("onbeforepopstate",this.Environment_onbeforepopstate,this);
            this.addEventHandler("onerror",this.Environment_onerror,this);
            this.addEventHandler("oninit",this.Environment_oninit,this);
            this.addEventHandler("onload",this.Environment_onload,this);
            this.addEventHandler("onpopstate",this.Environment_onpopstate,this);
            this.addEventHandler("onuserhotkey",this.Environment_onuserhotkey,this);
        };

        env.loadTypeDefinition = function ()
        {
            this._setTypeDefinitionURL("typedefinition.xml");
            this._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
            this._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
            this._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
            this._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
            this._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
            this._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
            this._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
            this._addService("svcUrl", "JSP", "http://127.0.0.1:4098/", "none", null, "", "0", "0");
            this._addService("license", "file", "./license/", "session", null, "", "0", "0");
            this._addService("MobileLib", "file", "./_extlib_/MobileLib/", "session", null, "", "0", "0");
            this._addService("frame", "form", "./frame/", "session", null, "", "0", "0");
            this._addService("common", "form", "./common/", "session", null, "", "0", "0");
            this._addService("sample", "form", "./sample/", "session", null, "", "0", "0");
            this._addService("design", "form", "./design/", "session", null, "", "0", "0");
            this._addService("samplefile", "file", "./samplefile/", "none", null, "", "0", "0");
            this._addService("svcQuickCodeTutorial", "model", "./svcQuickCodeTutorial/", "session", null, "", "0", "0");
            this._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
            this._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
            this._addService("Environment", "form", "./Environment/", "session", null, "", "0", "0");
            this._addService("Application", "form", "./Application/", "session", null, "", "0", "0");
            this._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
            this._addService("Dataset", "form", "./Dataset/", "session", null, "", "0", "0");
            this._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
            this._addService("libstyle", "js", "./lib/style/", "session", null, "", "0", "0");
            this._addService("libevent", "js", "./lib/event/", "session", null, "", "0", "0");
            this._addService("sample_nav", "form", "./sample_nav/", "session", null, "", "0", "0");
    
            // External


            this._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
            this._theme_uri = "./_resource_/_theme_/";

            // load components
            var registerclass = [
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
            		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
            		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
            		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
            		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
            		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
            		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"},
            		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
            		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
            		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
            		{"id":"XPush", "classname":"nexacro.XPush", "type":"JavaScript"},
            		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"},
            		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
            		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
            		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
            		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
            		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
            		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
            		{"id":"HTMLContentBox", "classname":"nexacro.HTMLContentBox", "type":"JavaScript"},
            		{"id":"AbstractSelectOne", "classname":"nexacro.AbstractSelectOne", "type":"JavaScript"},
            		{"id":"AbstractSelectAny", "classname":"nexacro.AbstractSelectAny", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };

        env.on_loadVariables = function ()
        {
            // Variables
            nexacro.setEnvironmentVariable("evMessagePopup", "true");
            nexacro.setEnvironmentVariable("evQuickView", "Y");

            // Cookies


            // HTTP Header

        };

        env.on_loadDeviceAdaptors = function ()
        {
            // load device adatpor

        };

        env.on_getResourceLanguageInfo = function ()
        {
        	return { "en":true, "ko":true };
        };
        env.on_getStringResourceFileExt = function ()
        {
        	return "json";
        };

        env.loadTypeDefinition();

        // User Script
        env.registerScript("environment.xml", function(nexacro, system, trace, environment, application) {



        this.Environment_onload = function(obj,e)
        {
        	trace("environment1.xml.js Environment_onload");
        };

        this.Environment_oninit = function(obj,e)
        {
        	trace("Environment_oninit");
        };

        this.Environment_onerror = function(obj,e)
        {
        return;
            e.obj.parent.getApplication();

        	trace("Environment_onerror");
        };

        this.callbackDS = function(serviceid, errorcode, errormsg)
        {
        trace("callbackDS :"+ serviceid + " errorcode:"+ errorcode + " errormsg:"+ errormsg);
        };


        this.Environment_onbeforepopstate = function(obj,e)
        {

        	let app = nexacro.getApplication();
        	if (app)
        	{
        	trace("onbeforepopstate e.key:["+ e.key + "] e.data:["+ e.data + "] e.url:["+  e.url + "] e.currenturl:["+ e.currenturl + "]");

        		let activeform = app.getActiveForm();
        		if (activeform)
        		activeform.fetchStateData(true);
        	}


        };

        this.Environment_onpopstate = function(obj,e)
        {
            let app = nexacro.getApplication();
        	if (app)
        	{
        		trace("onpopstate e.key:["+ e.key + "] e.data:["+ e.data + "] e.url:["+  e.url + "] e.currenturl:["+ e.currenturl + "]");

        		let activeform = app.getActiveForm();
        		if (activeform)
        		{
        			activeform.goMenubyBackButton(e.key, e.url,  e.data );
        			//activeform.restoreStateData();
        		}

        	}
        	trace("onpopstate:" )
        };

        this.Environment_onpagerefreshbykey = function(obj,e)
        {
        	let app = nexacro.getApplication();
        			if (app)
        			{
        				let activeform = app.getActiveForm();
        				if (activeform)
        					activeform.reload();
        			}
        			return true;
        };

        this.Dataset1_onload = function (obj,e)
        		{
        			trace("Dataset1_onload:" + obj.name);
        		};

        		this.DataObject0_onload = function (obj,e)
        		{
        			trace("DataObject0_onload:" + obj.name);
        		};


        this.Environment_onuserhotkey = function(obj,e)
        {

        };

        });

        env.loadIncludeScript("environment.xml");
        
      //  env = null;

        nexacro._getExtUserCssScreenType = nexacro._echoFn;
        return env;
    }
}

;(function () {								
    const { nexacro, system, trace } = globalThis;								
    if (nexacro) {								
      envLoader(nexacro, system, trace);								
    }								
    })();								
                                    
export default envLoader;								
    
