//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.1.html	
//
//==============================================================================
if (globalThis.chrome && globalThis.chrome.webview)
{
    nexacro.DeviceI.prototype.setup = function ()
    {
        if (nexacro.__initDevice)
            nexacro.__initDevice(this, this.runCallback, this.keyEvent, system, nexacro);

        if (nexacro.__getLibVersion)
            this.libraryversion = nexacro.__getLibVersion();

        if (globalThis.chrome && globalThis.chrome.webview)
            this._is_hybrid = true;

        this._userCreatedObj = {};
        this.curDevice = nexacro._DeviceType.WINDOWS;
        this.isphone = 0;
    };

    nexacro.DeviceI.prototype.exec = function (method)
    {
        if (globalThis.chrome && globalThis.chrome.webview)	
        {
            var ret = globalThis.chrome.webview.hostObjects.sync.hostNexacro.__exec(method);
            // Promise
            // globalThis.chrome.webview.hostObjects.hostNexacro.__exec(jsonString).sync();
            if (ret && ret.length > 0)
            {
                const obj = nexacro._parseJsonLiteral(ret);
                if (obj && typeof obj === 'object' && 'runfunc' in obj) 
                {
                    if (obj.runfunc == "runCallback");
                    {
                        nexacro.Device.runCallback(obj.sid, obj.sfunc, obj.params);
                    }
                }
                else
                    return ret;
            }
        }
        else
            nexacro.__execDeviceAPI(method);
    };

    nexacro._callscript = function (script)
    {
        nexacro._executeEvalStr(script);
    };

    nexacro._setProtocolVar = function (name, key, val, env)
    {
        return nexacro.ProtocolAdp.setProtocolVar(name, key, val, env);
    };

    nexacro._isHybrid = function ()
    {
        return nexacro.Device._isHybrid();
    };

    nexacro._initDeviceAPI();
}
