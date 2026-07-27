//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//==============================================================================

if (!nexacro.NexacroPortal)
{
    //==============================================================================
    // nexacro.NexacroPortal — MFE(micro frontend) 컨테이너.
    // 컨트롤 루트 DOM에 data-appkey / data-fdl 을 부여하고 nexacro.__MFEAPI 로 마운트한다.
    // apppath 가 있으면 mount 시 [apppath]/nexacro.js → [apppath]/app.js 순으로 동적 import 한다.
    //==============================================================================

    nexacro.NexacroPortalMountEventInfo = function (obj, id, appkey)
    {
        this.id = this.eventid = id || "onmount";
        this.fromobject = this.fromreferenceobject = obj;

        this.appkey = appkey;        
    };

    var _pNexacroPortalMountEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.NexacroPortalMountEventInfo);
    nexacro.NexacroPortalMountEventInfo.prototype = _pNexacroPortalMountEventInfo;
    _pNexacroPortalMountEventInfo._type_name = "NexacroPortalMountEventInfo";
    _pNexacroPortalMountEventInfo = null;

    nexacro.NexacroPortalErrorEventInfo = function (obj, id, appkey, message)
    {
        this.id = this.eventid = id || "onerror";
        this.fromobject = this.fromreferenceobject = obj;
        this.appkey = appkey;     
        this.message = message;
    }

    var _pNexacroPortalErrorEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.NexacroPortalErrorEventInfo );
    nexacro.NexacroPortalErrorEventInfo.prototype = _pNexacroPortalErrorEventInfo;
    _pNexacroPortalErrorEventInfo._type_name = "NexacroPortalErrorEventInfo";
    _pNexacroPortalErrorEventInfo = null;


    nexacro.NexacroPortal = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.HTMLComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pNexacroPortal = nexacro._createPrototype(nexacro.HTMLComponent, nexacro.NexacroPortal);
    nexacro.NexacroPortal.prototype = _pNexacroPortal;
    _pNexacroPortal._type_name = "NexacroPortal";

    _pNexacroPortal._event_list = {        
        "onmount": 1,        
        "onunmount": 1,
        "onerror": 1,
        "onmove": 1,
        "onsize": 1
    };

    _pNexacroPortal._p_appkey = "";
    _pNexacroPortal._p_apppath = "";
    _pNexacroPortal._p_formurl = "";
    _pNexacroPortal._p_automount = true;

    _pNexacroPortal._is_attached_listeners = false;
    _pNexacroPortal._fns_container_listeners = null;
    
    _pNexacroPortal.on_apply_content = nexacro._emptyFn;

    _pNexacroPortal.on_create_contents = function ()
    {
         nexacro.HTMLComponent.prototype.on_create_contents.call(this);

         let control_elem = this.getElement();
         if (control_elem)
            control_elem.setElementCustomData("loadexternals", true);       

         if (this._p_appkey)
            this.on_apply_appkey(this._p_appkey);
         if (this._p_formurl)
            this.on_apply_formurl(this._p_formurl);
    };

    _pNexacroPortal.on_after_created = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
            control_elem.setElementOverflow("hidden");
      
        let container_handle = control_elem.handle;
        if (!container_handle)
            return;
        
        if (this._p_automount !== false)
            this._mount();            
    };


    _pNexacroPortal._detachContainerListeners = function ()
    {
        if (!this._is_attached_listeners || !this._attached_listeners_fns)
        {
            this._is_attached_listeners = false;
            this._attached_listeners_fns = null;            
            return;
        }

        let control_elem = this.getElement();
        if (!control_elem)
            return;

        let container_handle = control_elem.handle;
        if (!container_handle)
            return;

        let fn = this._attached_listeners_fns;
        if (container_handle && fn)
        {
            container_handle.removeEventListener("oncomplete", fn.oncomplete);
            container_handle.removeEventListener("onerror", fn.onerror);
            container_handle.removeEventListener("onunmount", fn.onunmount);
            container_handle.removeEventListener("resize", fn.resize);
        }
        this._is_attached_listeners = false;
        this._attached_listeners_fns = null;
    };

    _pNexacroPortal._attachContainerListeners = function ()
    {
        if (this._is_attached_listeners)
            return;

        let control_elem = this.getElement();
        if (!control_elem)
            return;

        let container_handle = control_elem.handle;
        if (!container_handle)
            return;
       
        var pthis = this;
        this._attached_listeners_fns = {
            oncomplete: function (e) { pthis._onMfeDomComplete(e); },
            onerror: function (e) { pthis._onMfeDomError(e); },
            onunmount: function (e) { pthis._onMfeDomUnmount(e); },
            resize: function (e) { pthis._onMfeDomResize(e); }
        };

        container_handle.addEventListener("oncomplete", this._attached_listeners_fns.oncomplete);
        container_handle.addEventListener("onerror", this._attached_listeners_fns.onerror);
        container_handle.addEventListener("onunmount", this._attached_listeners_fns.onunmount);
        container_handle.addEventListener("resize", this._attached_listeners_fns.resize);
        this._is_attached_listeners = true;
    };

    _pNexacroPortal._onMfeDomComplete = function (e)
    {
        let d = e && e.detail ? e.detail : {};
        this._nested_root = d.from;
        this._nested_nexacro = d.nexacro;
        this.on_fire_onmount(d);
    };

    _pNexacroPortal._onMfeDomError = function (e)
    {
        let d = e && e.detail ? e.detail : {};
        this.on_fire_onerror(d);
    };

    _pNexacroPortal._onMfeDomUnmount = function (e)
    {
        let d = e && e.detail ? e.detail : {};
        this.on_fire_onunmount(d);
    };

    _pNexacroPortal._onMfeDomResize = function (e)
    {
        let d = e && e.detail ? e.detail : {};
        let rect = d.rect || {};
        this.on_fire_onsize(rect.width, rect.height);
    };

    _pNexacroPortal.on_fire_onmount = function (domdetail)
    {
        if (this.onmount && this.onmount._has_handlers)
        {
            var evt = new nexacro.NexacroPortalMountEventInfo(this, "onmount", this._p_appkey);           
            return this.onmount._fireEvent(this, evt);
        }
        return true;
    };

    _pNexacroPortal.on_fire_onerror = function (domdetail)
    {
        if (this.onerror && this.onerror._has_handlers)
        {
            var evt = new nexacro.NexacroPortalErrorEventInfo(this, "onerror", this._p_appkey, domdetail?.message);
            return this.onerror._fireEvent(this, evt);
        }
        return true;
    };

    _pNexacroPortal.on_fire_onunmount = function (domdetail)
    {
        if (this.onunmount && this.onunmount._has_handlers)
        {
            var evt = new nexacro.NexacroPortalMountEventInfo(this, "onunmount", this._p_appkey);           
            return this.onunmount._fireEvent(this, evt);  
        }
        return true;
    };

    _pNexacroPortal.set_appkey = function (v)
    {
        if (this._is_created)
            this._unmount();
        
        v = nexacro._toString(v);
        if (this._p_appkey != v)
        {
            this._p_appkey = v;
            this.on_apply_appkey(this._p_appkey);

            if (this._is_created && this._p_appkey && this._p_automount !== false)          
                this._mount();
        }
    };

    _pNexacroPortal.on_apply_appkey = function (appkey)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementCustomData("appkey", appkey);        
    };

    _pNexacroPortal.set_formurl = function (v)
    {
        if (this._is_created)
            this._unmount();

        v = nexacro._toString(v);
        if (this._p_formurl != v)
        {
            this._p_formurl = v;
            this.on_apply_formurl(this._p_formurl);

            if (this._is_created)
            {                
                if (this._p_automount !== false)
                    this._mount();
            }
        }
    };

    _pNexacroPortal.on_apply_formurl = function (formrul)
    {
        let control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementCustomData("fdl", formrul);        
    };

    _pNexacroPortal.set_automount = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_automount != v)
            this._p_automount = v;
    };

    _pNexacroPortal.set_apppath = function (v)
    {
        v = nexacro._toString(v);
        if (this._p_apppath != v)
        {
            let env = this._getEnvironment();
            if (env)
            {
                if (nexacro._isSameOrigin(v, env.getProjectPath()))
                    return;               // 같은 도메인인 경우 처리하지 않음
            }
            this._p_apppath = v;
        }

        if (this._is_created)
        {
            this._unmount();
            if (this._p_automount !== false)
                this._mount();
        }
    };    

    _pNexacroPortal._invokeLoadAppContainer = function (container_handle)
    {
        let api = this._nested_nexacro && this._nested_nexacro.__MFEAPI;
        if (!api || typeof api._loadAppContainer !== "function")
            return false;
        api._loadAppContainer(container_handle);
        return true;
    };

    _pNexacroPortal._isLoadedLibrary = function (appurl)
    {
        if (globalThis.NEXACRO_REGISTRY_SYMBOL)
        {
            const globalReg = globalThis[globalThis.NEXACRO_REGISTRY_SYMBOL];
            if (!globalReg)
                return false;

            if (!appurl)
            {
                let apppath = this._getAppLibPath();
                if (!apppath)
                    return false;
                
                appurl = apppath + "app.js";
            }
            
            const loaders = globalReg.loader_path;
            if (loaders && loaders.has(appurl))
                return true;           
        }
        return false;        
    };

    _pNexacroPortal._getAppLibPath = function ()
    {
        let apppath = this._p_apppath;
        if (!apppath)
            return undefined;

        let env = this._getEnvironment();
        if (!env)
            return undefined;

        apppath = env._getServiceLocation(apppath, this._getRefFormBaseUrl());
        if (apppath.charAt(apppath.length - 1) !== "/")
            apppath += "/";
        return apppath;
    };

    _pNexacroPortal._loadLibrary = function ()
    { 
        let apppath = this._getAppLibPath();
        if (!apppath)
            return Promise.resolve(true);
      
        let nexacrourl, appurl;
        nexacrourl = apppath + "nexacro.js";
        appurl = apppath + "app.js";
        
        if (!nexacrourl || !appurl)
            return Promise.resolve(true);
        
        let global = (typeof globalThis !== "undefined") ? globalThis : window;        
        if (!global.NEXACRO_PORTALLIB_SYMBOL)   
            global.NEXACRO_PORTALLIB_SYMBOL = Symbol("nexacro-portallib");            

        if (!global[global.NEXACRO_PORTALLIB_SYMBOL])
            global[global.NEXACRO_PORTALLIB_SYMBOL] = {};

        let NEXACRO_PORTALLIB_SYMBOL = global.NEXACRO_PORTALLIB_SYMBOL; 

        let pthis = this;
        let _loadModule = function (url)
        {               
            if (global[NEXACRO_PORTALLIB_SYMBOL][url])   
                return global[NEXACRO_PORTALLIB_SYMBOL][url];

            global[NEXACRO_PORTALLIB_SYMBOL][url] = (async function ()
            {
               try
                {  
                    await import(url);
                    return true;
                }
                catch (err)
                {
                    delete global[NEXACRO_PORTALLIB_SYMBOL][url];
                    var msg = err && err.message ? err.message : String(err);
                    if (nexacro._trace)
                        nexacro._trace("NexacroPortal: " + url + " load failed — " + msg);
                    pthis.on_fire_onerror({ message: msg, libraryurl: url });
                    return false;
                }
            })();

            return globalThis[NEXACRO_PORTALLIB_SYMBOL][url];
        };

        return _loadModule(nexacrourl).then(function (success)
        {
            if (!success)
                return false;
            return _loadModule(appurl);            
        });
    };

    _pNexacroPortal.mount = function (formurl, appkey, apppath)
    {
        if (this._nested_root)
            this._unmount();

        if (arguments.length > 0)
        {            
            formurl = nexacro._toString(formurl);
            if (this._p_formurl != formurl)
            {
                this._p_formurl = formurl;
                this.on_apply_formurl(formurl);
            }         
        }
        
        if (arguments.length > 1)
        {
            appkey = nexacro._toString(appkey);
            if (this._p_appkey != appkey)
            {
                this._p_appkey = appkey;
                this.on_apply_appkey(appkey);
            }
        }
        
        if (arguments.length > 2)
        {
            apppath = nexacro._toString(apppath);
            if (this._p_apppath != apppath)
            {
                this._p_apppath = apppath;                
            }
        }

        return this._mount();        
    };

    _pNexacroPortal._mount = function ()
    {
        let control_elem = this.getElement();
        if (!control_elem)
            return false;

        let container_handle = control_elem.handle;
        if (!container_handle)
            return false;

        this._attachContainerListeners();       

        let apppath = this._getAppLibPath();
        if (!apppath)
            return false;
        
        let appurl = apppath + "app.js";
        if (this._isLoadedLibrary(appurl))
        {        
            // nested nexacro 참조 갱신         
            const globalReg = globalThis[globalThis.NEXACRO_REGISTRY_SYMBOL];
            const loaders = globalReg && globalReg.loader_path;
            if (loaders)
            {
                let appLoader = loaders.get(appurl);
                if (appLoader)
                {
                    this._nested_nexacro = appLoader.getManager().nexacro();                 
                }
            }

            return this._invokeLoadAppContainer(container_handle) !== false;
        }
        else
        {            
            return this._loadLibrary();
        }
    };

    _pNexacroPortal.unmount = function ()
    {
        return this._unmount();        
    };

    _pNexacroPortal._unmount = function ()
    {
        let control_elem = this.getElement();
        if (!control_elem)
            return false;

        let container_handle = control_elem.handle;
        if (!container_handle)
            return false;

        this._invokeUnloadAppContainer(container_handle);        
        this._detachContainerListeners();
        this._nested_root = null;
        return true;
    };

    _pNexacroPortal._invokeUnloadAppContainer = function (container_handle)
    {
        let api = this._nested_nexacro && this._nested_nexacro.__MFEAPI;
        if (!api || !container_handle || typeof api._unloadAppContainer !== "function")
            return null;
        return api._unloadAppContainer(container_handle);
    };

    _pNexacroPortal.getRootApplication = function ()
    {       
        let control_elem = this.getElement();
        if (!control_elem)
            return null;

        let container_handle = control_elem.handle;
        if (!container_handle)
            return null;

        let api = this._nested_nexacro && this._nested_nexacro.__MFEAPI;
        if (!api || !container_handle || typeof api._getRootApp !== "function")
            return null;
        return api._getRootApp(container_handle);
    };

    _pNexacroPortal.get_mainframe = function ()
    {
        const root = this._nested_root;
        if (!root || root._type_name !== "MainFrame")
            return null;
        return root;
    };

    _pNexacroPortal.get_form = function ()
    {
        const root = this._nested_root;
        if (!root || !root._is_form)
            return null;
        return root;
    };
    _pNexacroPortal.on_destroy_contents = function ()
    {
        this._unmount();
        this._nested_nexacro = null;
    };

    _pNexacroPortal._properties = [
        { name: "appkey" },
        { name: "apppath" },
        { name: "formurl" },
        { name: "automount" },
        { name: "mainframe", readonly: true, getter: _pNexacroPortal.get_mainframe },
        { name: "form", readonly: true, getter: _pNexacroPortal.get_form }
    ];
    nexacro._defineProperties(_pNexacroPortal, _pNexacroPortal._properties);

    _pNexacroPortal = null;
}
