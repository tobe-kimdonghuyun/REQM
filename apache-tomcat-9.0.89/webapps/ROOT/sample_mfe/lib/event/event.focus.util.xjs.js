//XJS=event.focus.util.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libevent::event.lib.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("libevent::event.lib.xjs"); /*include "libevent::event.lib.xjs"*/

        if (typeof nexacro.test.Event === 'undefined')
        		nexacro.test.Event = {};

        var EVENT = nexacro.test.Event;

        if (typeof EVENT.dispatchFocusEvent !== 'undefined')
        	return;

        if (nexacro._Browser == "Runtime")
        {
        	var createSysFocusEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var event_type = EVENT.getEventTypeByName(event_name),
        			  initDic = {
        				toArguments: function () {
        					return [];
        				}
        			},
        			evt = options || {};

        		if (event_type != 'FocusEvent')
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}

        		return evt;
        	};

        	var dispatchFocusEvent = function (elem, name)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        			  }
        		;

        		var evt = createSysFocusEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }
        else
        {
        	//////////////////////////////////////////////////////////////////////////
        	// focus event
        	var _isSupportFocusEventConstructor = (function () {  try { var evt = new FocusEvent('focus');  } catch (ex) { return false; } return true; })();;
        	var createSysFocusEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var evt,
        			options = options || {},
        			event_type = EVENT.getEventTypeByName(event_name),
        			node = elem.handle,
        			cur_doc = node.ownerDocument || node.document,
        			cur_win = cur_doc.defaultView || cur_doc.parentWindow,
        			initDic = {
        				bubbles: false,
        				cancelable: true,
        				view: cur_win,
        				detail: 0,
        				relatedTarget: node
        			},
        			initOpt = {}
        		;

        		if (event_type != 'FocusEvent')
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}

        		if (_isSupportFocusEventConstructor)
        		{
        			evt = new FocusEvent(event_name, initOpt);
        		}
        		else if (cur_doc.createEvent)
        		{
        			evt = cur_doc.createEvent(event_type);
        			if (evt.initUIEvent)
        			{
        				evt.initUIEvent(event_name, initOpt.bubbles, initOpt.cancelable, initOpt.view, initOpt.detail);
        			}
        			else
        			{
        				evt.initEvent(event_name, initOpt.bubbles, initOpt.cancelable);
        			}
        			if (nexacro._Browser !== "IE" || event_name != "focusout")
        			{
        				if (initOpt.relatedTarget)
        					evt.relatedTarget = initOpt.relatedTarget;
        			}
        			if (nexacro._Browser == "IE")
        			{
        				evt.srcElement = cur_doc.activeElement;
        				evt.target = cur_doc.activeElement;
        			}
        		}
        		else if (cur_doc.createEventObject)
        		{
        			evt = cur_doc.createEventObject();
        			for (var key in initOpt)
        			{
        				if (initOpt.hasOwnProperty(key))
        					evt[key] = initOpt[key];
        			}
        		}

        		return evt;
        	};

        	var dispatchFocusEvent = function (elem, name)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        			  }
        		;

        		var target;
        		if (elem instanceof nexacro.InputElement || elem instanceof nexacro.TextAreaElement)
        		{
        			target = elem;
        		}
        		else
        		{
        			target = elem._getWindow();
        		}

        		var evt = createSysFocusEvent(target, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(target, event_name, evt);
        		}
        		return evt;
        	};
        }

        EVENT.dispatchFocusEvent = dispatchFocusEvent;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
