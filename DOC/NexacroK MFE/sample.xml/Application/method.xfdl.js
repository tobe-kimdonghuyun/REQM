(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("method");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","4.79%","48","24.9%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("_clearImageItemCache");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","4.69%","376","32.81%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","30.66%","48","24.9%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("clearImageCache");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","30.57%","103","24.9%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("clearImageCache");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","5.27%","118","24.71%","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("UpdateCSSMap");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","5.47%","166","24.71%","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("deleteCSSMapItem");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","3.61%","449","30.08%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("getPrivateProfile");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","35.55%","454","30.08%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("getPrivateProfile");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","35","521","149","64",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("LoadCSS1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button08","218","523","150","64",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button08");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","153","605","332","150",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button09","39","600","142","52",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("LoadCSS2");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("method.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {

         nexacro._clearImageItemCache(this.Edit00.value);
        };


         nexacro._clearImageItemCache = function (url)
            {
            	var imageurl = nexacro._getImageLocation(url);
            	var imgcache = nexacro._getImageCacheMaps();
            	if (imageurl && imgcache && imgcache[imageurl])
            	{
            		imgcache[imageurl] = null;
            		delete imgcache[imageurl];
            	}
            };

        	nexacro._clearImageCache = function ()
            {
            	var imgcache = nexacro._getImageCacheMaps();
            	imgcache = {};
            };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro._clearImageCache();
        };

        this.Button02_onclick = function(obj,e)
        {
        nexacro._clearImageCache1();
        };

        nexacro._clearImageCache1= function ()
         {
            	nexacro._ImgInfoCacheList = {};

         };

        nexacro._updateCSSMapItem = function (parents, prop, value)
            {
            	var valueobject = eval(value);
            	var cssmap = nexacro._dimension_maps;
            	var parentlen = parents.length;
            	var item = parents[0];

            	//add
            	if (!cssmap[item])
            	{
            		for (var i = 0; i < parentlen; i++)
            		{
            			var item = parents[i];
            			var childitem = parents[i + 1];
            			if (childitem)
            			{
            				cssmap[item] = {};
            				cssmap[item][childitem] = {};
            				cssmap = cssmap[item];
            			}
            			else
            			{
            				cssmap[item][prop] = valueobject;
            			}
            		}
            	}
            	else  //update
            	{
            		for (var i = 0; i < parentlen; i++)
            		{
            			var item = parents[i];
            			var childitem = parents[i + 1];
            			if (cssmap[item])
            			{
            				if (cssmap[item][childitem])
            					cssmap = cssmap[item];
            				else
            				{
            					if (childitem)
            					{
            						cssmap[item][childitem] = {};
            						cssmap = cssmap[item];
            					}
            					else
            					{
            						cssmap[item][prop] = valueobject;
            					}
            				}
            			}
            			else
            			{
            				cssmap[item][prop] = valueobject;
            			}
            		}
            	}
            };

        this.Button03_onclick = function(obj,e)
        {
        	var mapdata = '{ "NAME" : {"Yongwoo": 1}, "AGE" : 25, "UNIVERSITY" : "Catholic Univ, of Korea", "MAJOR" : "Computer Science" }'
        var mapdata = 'nexacro._setCSSMaps ({MainFrame: {self:{enabled :{border1 : nexacro.BorderObject("3px solid #666666"),color : nexacro.ColorObject("#444444")},deactivate :{border : nexacro.BorderObject("2px solid #235798")}}}})';
        var module = eval(mapdata);
        //module.call(application);
        //nexacro._CSSMapsStringtoJson (mapdata);
         nexacro._updateCSSMapItem (["MainFrame1","self", "enable"], "border", 'nexacro.BorderObject("3px solid #666666")');
        nexacro._updateCSSMapItem (["MainFrame1","self", "enable"], "border1", 'nexacro.BorderObject("3px solid #666666")');
        nexacro._updateCSSMapItem (["MainFrame1","self", "enable"], "border", 'nexacro.BorderObject("4px solid #666666")');
        nexacro._updateCSSMapItem (["MainFrame1","self", "enable1"], "border", 'nexacro.BorderObject("4px solid #666666")');
        nexacro._updateCSSMapItem (["MainFrame1","self1", "enable"], "border", 'nexacro.BorderObject("4px solid #666666")');
        trace(nexacro._dimension_maps);
        };

        this.Button04_onclick = function(obj,e)
        {
        	nexacro._deleteCSSMapItem("MainFrame1, self1, enable");
        	nexacro._deleteCSSMapItem("MainFrame1, self1, enable", "border");
        	nexacro._deleteCSSMapItem("MainFrame1, self1, enable");
        	nexacro._deleteCSSMapItem("MainFrame1, self1");
        	nexacro._deleteCSSMapItem("MainFrame1");
        };

        nexacro._deleteCSSMapItem = function (parent, prop)
            {
            	var cssmap = nexacro._dimension_maps;

            	var parents = parent.split(",");
            	var parentlen = parents.length;
            	var item = parents[0];
            	item = item.trim();
            	//add
            	if (!cssmap[item])
            		return;

            	for (var i = 0; i < parentlen; i++)
            	{
            		var item = parents[i];
            		item = item.trim();
            		if (cssmap[item])
            		{
        				if (i == parentlen-1)
        				{
        					if (prop)
        					{
        						cssmap[item][prop] = null;
        						delete cssmap[item][prop];
        					}
        					else
        					{
        						cssmap[item] = null;
        						delete cssmap[item];
        					}
        				}

            			cssmap = cssmap[item];
            		}
            	}

            };

        this.Button05_onclick = function(obj,e)
        {
        	var strValue;
        	strValue = nexacro.getPrivateProfile("bb");
        	alert(strValue);
        };

        this.Button06_onclick = function(obj,e)
        {
        	var bSucc;
        	bSucc = nexacro.setPrivateProfile("bb", "A");
        	alert(bSucc);
        };

        this.Button07_onclick = function(obj,e)
        {
        var app = nexacro.getApplication();
        app.loadCss("Accessibility::aa.xcss");
        };

        this.Button08_onclick = function(obj,e)
        {
        	this.Div00.set_url("Application::nexacroapi.xfdl")
        };

        this.Button09_onclick = function(obj,e)
        {
        	var app = nexacro.getApplication();
           app.loadCss("Accessibility::aa1.xcss");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
        };

        this.loadIncludeScript("method.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
