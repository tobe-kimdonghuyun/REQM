//XJS=event.wheel.util.xjs
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

        if (typeof EVENT.dispatchWheelEvent !== 'undefined')
        	return;

        if (nexacro._Browser == "Runtime")
        {
        	var eventInfoToArguments = function (event_name, eventInfo)
        	{
        		var argList = [];

        		argList.push(eventInfo.deltaY);
        		argList.push(eventInfo.button);
        		argList.push(eventInfo.altKey);
        		argList.push(eventInfo.ctrlKey);
        		argList.push(eventInfo.shiftKey);
        		argList.push(eventInfo.clientX);
        		argList.push(eventInfo.clientY);
        		argList.push(eventInfo.screenX);
        		argList.push(eventInfo.screenY);

        		return argList;
        	};

        	var createSysWheelEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var win_handle = elem._getWindowHandle() || null,
        			  event_type = EVENT.getEventTypeByName(event_name),
        		      initDic = {
        				deltaX: 0.0,
        				deltaY: 0.0,
        				screenX: 0,
        				screenY: 0,
        				clientX: 0,
        				clientY: 0,
        				ctrlKey: false,
        				shiftKey: false,
        				altKey: false,
        				button: 'mbutton',

        				toArguments: function () {
        					return eventInfoToArguments(event_name, this);
        				}
        			},
        			evt = options || {};

        		if (event_type != "WheelEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}
        		return evt;
        	};

        	var dispatchWheelEvent = function (elem, name, deltaX, deltaY)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		//deltaY *= -1;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  handle = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( handle),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 'mbutton'
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};

        	var dispatchWheelEventEx = function (comp, name, altkey, ctrlkey, shiftkey, deltaX, deltaY, clientX, clientY)
        	{
        		if (!comp) return;

        		var elem = comp;
        		if (comp._is_component)
        			elem = EVENT.getElementInComp(comp, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		//deltaY *= -1;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  handle = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( handle),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 'mbutton',
        					altKey: altkey,
        					ctrlKey: ctrlkey,
        					shiftKey: shiftkey
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }
        else if (nexacro._Browser == "Gecko")
        {
        	//////////////////////////////////////////////////////////////////////////
        	// wheel event
        	var _isSupportWheelEventConstructor = (function () {  try { var evt = new WheelEvent('wheel');  } catch (ex) { return false; } return true; })();
        	var _isSupportMouseScrollEventConstructor = (function () {  try { var evt = document.createEvent('MouseScrollEvent');  } catch (ex) { return false; } return true; })();;
        	var createSysWheelEvent = function (elem, event_name, options)
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
        				bubbles: true,
        				cancelable: true,
        				view: cur_win,
        				detail: 0,
        				deltaX: 0.0,
        				deltaY: 0.0,
        				deltaZ: 0.0,
        				deltaMode: 0, /* 0: pixel, 1:line, 2: page  */
        				screenX: 0,
        				screenY: 0,
        				clientX: 0,
        				clientY: 0,
        				ctrlKey: false,
        				shiftKey: false,
        				altKey: false,
        				metaKey: false,
        				button: 1,
        				relatedTarget: null
        			},
        			initOpt = {}
        		;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}

        		if (event_type == "WheelEvent" && _isSupportWheelEventConstructor)
        		{
        			evt = new WheelEvent(event_name, initOpt);
        		}
        		else if (cur_doc.createEvent)
        		{
        			if (event_type == "MouseScrollEvent" && _isSupportMouseScrollEventConstructor)
        			{
        				evt = cur_doc.createEvent(event_type);

        				if (evt.initMouseEvent)
        				{
        					var axis = Math.abs(initOpt.deltaX) > Math.abs(initOpt.deltaY) ? 1 /*HORIZONTAL_AXIS*/ : 2 /*VERTICAL_AXIS*/;
        					var axis_value = axis == 1 ? initOpt.deltaX : initOpt.deltaY;

        					evt.initMouseScrollEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						initOpt.button, initOpt.relatedTarget,
        						axis
        					 );

        					if (initOpt.deltaMode == 0)
        						evt.detail = axis_value / -40;
        					else if (initOpt.deltaMode == 1)
        						evt.detail = axis_value;
        					else
        						evt.detail = axis_value < 0 ? -32768 : +32768;
        				 }
        			}
        			else
        			{
        				evt = cur_doc.createEvent(event_type);
        				if (evt.initMouseEvent)
        				{
        					evt.initMouseEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						initOpt.button, initOpt.relatedTarget
        					 );
        				}

        				evt.wheelDeltaX = initOpt.deltaX;
        				evt.wheelDeltaY = initOpt.deltaY;
        				evt.wheelDelta = initOpt.deltaY; // for IE
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

        	var dispatchWheelEvent = function (elem, name, deltaX, deltaY)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  node = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( node),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 1
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};

        	var dispatchWheelEventEx = function (comp, name, altkey, ctrlkey, shiftkey, deltaX, deltaY, clientX, clientY)
        	{
        		if (!comp) return;

        		var elem = comp;
        		if (comp._is_component)
        			elem = EVENT.getElementInComp(comp, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  node = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( node),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 0,
        					altKey: altkey,
        					ctrlKey: ctrlkey,
        					shiftKey: shiftkey
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
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
        	// wheel event
        	var _isSupportWheelEventConstructor = (function () {  try { var evt = new WheelEvent('wheel');  } catch (ex) { return false; } return true; })();;
        	var createSysWheelEvent = function (elem, event_name, options)
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
        				bubbles: true,
        				cancelable: true,
        				view: cur_win,
        				detail: 0,
        				deltaX: 0.0,
        				deltaY: 0.0,
        				deltaZ: 0.0,
        				deltaMode: 0, /* 0: pixel, 1:line, 2: page  */
        				screenX: 0,
        				screenY: 0,
        				clientX: 0,
        				clientY: 0,
        				ctrlKey: false,
        				shiftKey: false,
        				altKey: false,
        				metaKey: false,
        				button: 0,
        				relatedTarget: null
        			},
        			initOpt = {}
        		;

        		if (event_type != "WheelEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}

        		if (_isSupportWheelEventConstructor)
        		{
        			evt = new WheelEvent(event_name, initOpt);
        		}
        		else if (cur_doc.createEvent)
        		{
        			evt = cur_doc.createEvent(event_type);
        			if (evt.initMouseEvent)
        			{
        				evt.initMouseEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        					initOpt.view, initOpt.detail,
        					initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        					initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        					initOpt.button, initOpt.relatedTarget
        				 );
        			}
        			else
        			{
        				evt.initEvent(event_name, initOpt.bubbles, initOpt.cancelable);
        			}
        			evt.wheelDeltaX = initOpt.deltaX;
        			evt.wheelDeltaY = initOpt.deltaY;
        			evt.wheelDelta = initOpt.deltaY;
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

        	var dispatchWheelEvent = function (elem, name, deltaX, deltaY)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		//if (nexacro._Browser == "IE")
        		//	deltaY *= -1;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  node = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( node),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 0
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};

        	var dispatchWheelEventEx = function (comp, name, altkey, ctrlkey, shiftkey, deltaX, deltaY, clientX, clientY)
        	{
        		if (!comp) return;

        		var elem = comp;
        		if (comp._is_component)
        			elem = EVENT.getElementInComp(comp, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		//if (nexacro._Browser == "IE")
        		//	deltaY *= -1;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  node = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( node),
        			  opt = {
        					deltaX: deltaX || 0.0,
        					deltaY: deltaY || 0.0,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: 0,
        					altKey: altkey,
        					ctrlKey: ctrlkey,
        					shiftKey: shiftkey
        				};

        		var evt = createSysWheelEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};
        }

        EVENT.dispatchWheelEvent = dispatchWheelEvent;
        EVENT.dispatchWheelEventEx = dispatchWheelEventEx;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
