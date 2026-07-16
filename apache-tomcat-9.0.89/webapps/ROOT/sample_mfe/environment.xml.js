const envLoader = function(nexacro, system, trace) 
{ 	
    if (nexacro.Environment)
    {
        var env = new nexacro.Environment();
        env._importurl = import.meta.url;
        env.on_getAllScreenInfo = function ()
        {
            return [
            {"enableaccessibility":"true","id":"mobile","type":"mobile_small","zoomfactortype":"portrait","filesecurelevel":"all","enableinspector":"true","themeid":"theme::blue","initvaluefileid":"initvalue::aa.xiv","xadl":"application.xadl.js"},
            {"id":"medium","type":"mobile_medium","filesecurelevel":"all","enableinspector":"true","themeid":"theme::Mobile","initvaluefileid":"initvalue::aa.xiv","xadl":"application.xadl.js"},
            {"id":"large","type":"mobile_large","filesecurelevel":"all","enableinspector":"true","themeid":"theme::Mobile","initvaluefileid":"initvalue::aa.xiv","xadl":"application.xadl.js"},
            {"id":"desktop","type":"desktop","filesecurelevel":"all","enableinspector":"true","themeid":"theme::blue","initvaluefileid":"initvalue::aa.xiv","xadl":"Application_Desktop.xadl.js"}
            ];
        };

        env.on_getUserFontInfo = function()
        {
            return [

            ];
        };

        env.on_init = function ()
        {
            this.set_appkey("Sample_K");
            this.set_browserreloadkey("reloadactiveform");
            this.set_csscollisionpreventkey("Sample_K");
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
            this.set_themekey("Sample_K");
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
            this._addService("theme", "resource", "./_resource_/_theme_/", "session", null, "", "0", "");
            this._addService("initvalue", "resource", "./_resource_/_initvalue_/", "session", null, "", "0", "");
            this._addService("xcssrc", "resource", "./_resource_/_xcss_/", "session", null, "", "0", "");
            this._addService("imagerc", "resource", ["./_resource_/_images_/", "http://172.10.12.23:8080/nexacro/XP17_Master/NKNAV_sample/_resource_/_images_/"], "session", null, "", "0", "");
            this._addService("font", "resource", "./_resource_/_font_/", "session", null, "", "0", "");
            this._addService("font", "resource", "./_resource_/_font_/", "session", null, "", "0", "");
            this._addService("extlib", "resource", "./_extlib_/", "session", null, "", "0", "");
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
            this._addService("stringrc", "resource", "./_resource_/_stringrc_/", "session", null, "", "0", "");
            this._addService("Environment", "form", "./Environment/", "session", null, "", "0", "0");
            this._addService("Application", "form", "./Application/", "session", null, "", "0", "0");
            this._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");
            this._addService("Dataset", "form", "./Dataset/", "session", null, "", "0", "0");
            this._addService("lib", "js", "./lib/", "session", null, "", "0", "0");
            this._addService("libstyle", "js", "./lib/style/", "session", null, "", "0", "0");
            this._addService("libevent", "js", "./lib/event/", "session", null, "", "0", "0");
            this._addService("sample_nav", "form", ["./sample_nav/", "http://172.10.12.45:9091/sample_nav/"], "session", null, "", "0", "0");
            this._addService("nexaviewlib", "js", "http://172.10.12.23:8080/nexacro/XP17_Master/", "session", null, "", "0", "0");
    
            // External


            this._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
            this._theme_uri = "./_resource_/_theme_/";

            // load components
            var registerclass = [
            		{"id":"Button", "classname":"nexacro.Button", "constructor":nexacro.Button, "type":"JavaScript", "width":"120", "height":"50"},
            		{"id":"Combo", "classname":"nexacro.Combo", "constructor":nexacro.Combo, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"Edit", "classname":"nexacro.Edit", "constructor":nexacro.Edit, "type":"JavaScript", "width":"140", "height":"20"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "constructor":nexacro.MaskEdit, "type":"JavaScript", "width":"90", "height":"20"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "constructor":nexacro.TextArea, "type":"JavaScript", "width":"90", "height":"20"},
            		{"id":"Static", "classname":"nexacro.Static", "constructor":nexacro.Static, "type":"JavaScript", "width":"120", "height":"60"},
            		{"id":"Div", "classname":"nexacro.Div", "constructor":nexacro.Div, "type":"JavaScript", "width":"200", "height":"150"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "constructor":nexacro.PopupDiv, "type":"JavaScript", "width":"220", "height":"100"},
            		{"id":"Radio", "classname":"nexacro.Radio", "constructor":nexacro.Radio, "type":"JavaScript", "width":"280", "height":"50"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "constructor":nexacro.CheckBox, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "constructor":nexacro.ListBox, "type":"JavaScript", "width":"170", "height":"100"},
            		{"id":"Grid", "classname":"nexacro.Grid", "constructor":nexacro.Grid, "type":"JavaScript", "width":"375", "height":"270"},
            		{"id":"Spin", "classname":"nexacro.Spin", "constructor":nexacro.Spin, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"Menu", "classname":"nexacro.Menu", "constructor":nexacro.Menu, "type":"JavaScript", "width":"685", "height":"25"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "constructor":nexacro.PopupMenu, "type":"JavaScript", "width":"220", "height":"100"},
            		{"id":"Tab", "classname":"nexacro.Tab", "constructor":nexacro.Tab, "type":"JavaScript", "width":"150", "height":"100"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "constructor":nexacro.GroupBox, "type":"JavaScript", "width":"300", "height":"200"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "constructor":nexacro.Calendar, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "constructor":nexacro.ImageViewer, "type":"JavaScript", "width":"90", "height":"100"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "constructor":nexacro.ProgressBar, "type":"JavaScript", "width":"200", "height":"15"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "constructor":nexacro.Plugin, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "constructor":nexacro.NormalDataset, "type":"JavaScript", "width":"", "height":""},
            		{"id":"ListView", "classname":"nexacro.ListView", "constructor":nexacro.ListView, "type":"JavaScript", "width":"270", "height":"180"},
            		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "constructor":nexacro.CheckBoxSet, "type":"JavaScript", "width":"170", "height":"100"},
            		{"id":"TextField", "classname":"nexacro.TextField", "constructor":nexacro.TextField, "type":"JavaScript", "width":"250", "height":"60"},
            		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "constructor":nexacro.MultiLineTextField, "type":"JavaScript", "width":"250", "height":"60"},
            		{"id":"DateField", "classname":"nexacro.DateField", "constructor":nexacro.DateField, "type":"JavaScript", "width":"250", "height":"60"},
            		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "constructor":nexacro.DateRangePicker, "type":"JavaScript", "width":"250", "height":"330"},
            		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "constructor":nexacro.PopupDateRangePicker, "type":"JavaScript", "width":"250", "height":"330"},
            		{"id":"DataObject", "classname":"nexacro.DataObject", "constructor":nexacro.DataObject, "type":"JavaScript", "width":"", "height":""},
            		{"id":"View", "classname":"nexacro.View", "constructor":nexacro.View, "type":"JavaScript", "width":"200", "height":"150"},
            		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "constructor":nexacro.MultiCombo, "type":"JavaScript", "width":"200", "height":"50"},
            		{"id":"XPush", "classname":"nexacro.XPush", "constructor":nexacro.XPush, "type":"JavaScript", "width":"", "height":""},
            		{"id":"Panel", "classname":"nexacro.Panel", "constructor":nexacro.Panel, "type":"JavaScript", "width":"120", "height":"50"},
            		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "constructor":nexacro.VirtualFile, "type":"JavaScript", "width":"", "height":""},
            		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "constructor":nexacro.GoogleMap, "type":"JavaScript", "width":"300", "height":"300"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "constructor":nexacro.FileUpload, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "constructor":nexacro.FileUpTransfer, "type":"JavaScript", "width":"", "height":""},
            		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "constructor":nexacro.FileDownTransfer, "type":"JavaScript", "width":"", "height":""},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "constructor":nexacro.FileDownload, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"FileDialog", "classname":"nexacro.FileDialog", "constructor":nexacro.FileDialog, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"Sketch", "classname":"nexacro.Sketch", "constructor":nexacro.Sketch, "type":"JavaScript", "width":"", "height":""},
            		{"id":"HTMLContentBox", "classname":"nexacro.HTMLContentBox", "constructor":nexacro.HTMLContentBox, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"AbstractSelectOne", "classname":"nexacro.AbstractSelectOne", "constructor":nexacro.AbstractSelectOne, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"AbstractSelectAny", "classname":"nexacro.AbstractSelectAny", "constructor":nexacro.AbstractSelectAny, "type":"JavaScript", "width":"150", "height":"20"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "constructor":nexacro.WebBrowser, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"WebView", "classname":"nexacro.WebView", "constructor":nexacro.WebView, "type":"JavaScript", "width":"false", "height":"false"},
            		{"id":"NexacroPortal", "classname":"nexacro.NexacroPortal", "constructor":nexacro.NexacroPortal, "type":"JavaScript", "width":"false", "height":"false"}
            ];
            this._addClasses(registerclass);
        };

        env.on_loadVariables = function ()
        {
            // Variables
            this.setEnvironmentVariable("evMessagePopup", "true");
            this.setEnvironmentVariable("evQuickView", "Y");

            // Cookies
            this.setCookieVariable("Cookie0", "www", "false");
            this.setCookieVariable("Cookie1", "g2", "true");

            // HTTP Header
            this.setHTTPHeaderVariable("header0", "2");
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
        	trace("Environment_onload");
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
    if (nexacro && !nexacro._environment) {								
      envLoader(nexacro, system, trace);								
    }								
    })();								
                                    
export default envLoader;								
    
