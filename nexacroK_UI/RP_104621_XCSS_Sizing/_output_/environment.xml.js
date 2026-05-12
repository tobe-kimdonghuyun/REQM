if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

	env.on_getAllScreenInfo = function ()
	{
		return [
        {"id":"Desktop_screen","type":"desktop","themeid":"theme::blue","xadl":"Application_Desktop.xadl.js"}
		];
	};

	env.on_getUserFontInfo = function()
	{
		return [

		];
	};

    env.on_init = function ()
    {
        this.set_datatyperule("2.0");
        this.set_themeid("theme::blue");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");
        nexacro._addService("Base", "form", "./Base/", "session", null, "", "0", "0");
        nexacro._addService("FrameBase", "form", "./FrameBase/", "session", null, "", "0", "0");



    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript", "width":"150", "height":"50"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript", "width":"150", "height":"20"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript", "width":"140", "height":"20"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript", "width":"90", "height":"20"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript", "width":"90", "height":"20"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript", "width":"120", "height":"60"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript", "width":"200", "height":"150"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript", "width":"220", "height":"100"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript", "width":"280", "height":"50"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript", "width":"150", "height":"20"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript", "width":"170", "height":"100"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript", "width":"375", "height":"270"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript", "width":"150", "height":"20"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript", "width":"685", "height":"25"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript", "width":"220", "height":"100"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript", "width":"150", "height":"100"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript", "width":"300", "height":"200"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript", "width":"150", "height":"20"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript", "width":"90", "height":"100"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript", "width":"200", "height":"15"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript", "width":"false", "height":"false"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript", "width":"", "height":""},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript", "width":"270", "height":"180"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript", "width":"", "height":""},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript", "width":"170", "height":"100"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript", "width":"200", "height":"50"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript", "width":"120", "height":"50"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript", "width":"250", "height":"60"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript", "width":"250", "height":"60"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript", "width":"250", "height":"60"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript", "width":"250", "height":"330"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript", "width":"250", "height":"330"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables


        // Cookies


        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};



	env.loadTypeDefinition();

    // User Script


	env.loadIncludeScript("environment.xml");
	
    env = null;

    nexacro._getExtUserCssScreenType = nexacro._echoFn;
}
