//XJS=event.mouse.util.xjs
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

        if (typeof EVENT.dispatchMouseEvent !== 'undefined')
        	return;

        if (nexacro._Browser == "Runtime")
        {
        	var eventInfoToArguments = function (event_name, eventInfo)
        	{
        		var argList = [];
        		if (event_name == 'mouseenter' || event_name == 'mouseleave')
        				argList.push(eventInfo.relatedTarget);

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

        	var clearMouseEvent = function (form)
        	{
        	};

        	var createSysMouseEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var win_handle = elem._getWindowHandle() || null,
        			  event_type = EVENT.getEventTypeByName(event_name),
        			  initDic = {
        				screenX: 0,
        				screenY: 0,
        				clientX: 0,
        				clientY: 0,
        				ctrlKey: false,
        				shiftKey: false,
        				altKey: false,
        				button: 'lbutton',
        				relatedTarget: null,

        				toArguments: function () {
        					return eventInfoToArguments(event_name, this);
        				}
        			},
        			evt = options || {};

        		if (event_type != "MouseEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}
        		return evt;
        	};

        	var dispatchMouseEvent = function (elem, name, sButton, clientX, clientY, relatedElem)
        	{
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  handle = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( handle),
        			  opt = {
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: sButton || 'lbutton'
        				};

        		if (typeof clientX !== 'undefined')
        		{
        			clientX = parseInt(clientX);
        			if (clientX != NaN)
        			{
        				opt.clientX += clientX;
        				opt.screenX += clientX;
        			}
        		}
        		if (typeof clientY !== 'undefined')
        		{
        			clientY = parseInt(clientY);
        			if (clientY != NaN)
        			{
        				opt.clientY += clientY;
        				opt.screenY += clientY;
        			}
        		}

        		if (relatedElem && relatedElem.handle)
        		{
        			opt['relatedTarget'] = relatedElem;
        		}

        		var evt = createSysMouseEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);
        		}
        		return evt;
        	};

        	var dispatchMouseEventEx = function (elem, name, sButton, altkey, ctrlkey, shiftkey,clientX, clientY, relatedElem)
        	{
        		if (!elem) return;
        		if (elem._is_component)
        			elem = EVENT.getElementInComp(elem, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		if (relatedElem && relatedElem._is_component)
        			relatedElem = relatedElem.getElement();

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  handle = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( handle),
        			  opt = {
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: sButton || 'lbutton',
        					altKey: altkey,
        					ctrlKey: ctrlkey,
        					shiftKey: shiftkey
        				};

        		if (typeof clientX !== 'undefined')
        		{
        			clientX = parseInt(clientX);
        			if (clientX != NaN)
        			{
        				opt.clientX += clientX;
        				opt.screenX += clientX;
        			}
        		}
        		if (typeof clientY !== 'undefined')
        		{
        			clientY = parseInt(clientY);
        			if (clientY != NaN)
        			{
        				opt.clientY += clientY;
        				opt.screenY += clientY;
        			}
        		}

        		if (relatedElem && relatedElem.handle)
        		{
        			opt['relatedTarget'] = relatedElem;
        		}

        		var evt = createSysMouseEvent(elem, event_type, opt);
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
        	// mouse event
        	var g_elem_list = [];
        	var _isSupportMouseEventConstructor = (function () {  try { var evt = new MouseEvent('mouseup');  } catch (ex) { return false; } return true; })();;
        	var createSysMouseEvent = function (elem, event_name, options)
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

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key))
        				initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        		}

        		if (event_name == 'mousedown' || event_name == 'mouseup')
        			initOpt.detail = 1;

        		if (event_type != "MouseEvent")
        			return null;

        		if (_isSupportMouseEventConstructor)
        		{
        			evt = new MouseEvent(event_name, initOpt);
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
        				for (var key in initOpt)
        				{
        					if (initOpt.hasOwnProperty(key))
        						evt[key] = initOpt[key];
        				}
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

        	var getButtonIDByString = function (sButton)
        	{
        		switch (sButton)
        		{
        			case "lbutton":
        				return 0;
        			case "mbutton":
        				return 1;
        			case "rbutton":
        				return 2;
        		}
        		return 0;
        	};

        	var clearMouseEvent = function (form)
        	{
        		if (nexacro._Browser != "IE")
        		{
        			if (g_elem_list)
        			{
        				for (var i=0, len=g_elem_list.length; i<len; i++)
        				{
        					var elem = g_elem_list[i];
        					if (form._getWindow)
        					{
        						var win = form._getWindow();
        						if (win.handle)
        							win.handle.nexacro_HTMLSysEvent.unlockMouseMove(elem);
        					}
        					elem = null;
        				}

        				g_elem_list = [];
        			}
        		}
        	};

        	var dispatchMouseEvent = function (elem, name, sButton, clientX, clientY, relatedElem)
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
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: getButtonIDByString(sButton)
        				};

        		if (typeof clientX !== 'undefined')
        		{
        			clientX = parseInt(clientX);
        			if (clientX != NaN)
        			{
        				opt.clientX += clientX;
        				opt.screenX += clientX;
        			}
        		}
        		if (typeof clientY !== 'undefined')
        		{
        			clientY = parseInt(clientY);
        			if (clientY != NaN)
        			{
        				opt.clientY += clientY;
        				opt.screenY += clientY;
        			}
        		}

        		if (relatedElem && relatedElem.handle)
        		{
        			opt['relatedTarget'] = relatedElem.handle;
        		}

        		var evt = createSysMouseEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);

        			if (nexacro._Browser != "IE")
        			{
        				if (event_name.indexOf("mousedown") > -1)
        				{
        					if (g_elem_list)
        					{
        						if (g_elem_list.indexOf(elem) == -1)
        						{
        							var elem1 = elem;
        							g_elem_list.push(elem1);
        						}
        					}
        				}
        				else if (event_name.indexOf("mouseup") > -1)
        				{
        					if (g_elem_list)
        					{
        						for (var i=0, len=g_elem_list.length; i<len; i++)
        						{
        							if (g_elem_list[i] == elem)
        							{
        								g_elem_list.splice(i, 1);
        								break;
        							}
        						}
        					}
        				}
        			}
        		}
        		return evt;
        	};

        	var dispatchMouseEventEx = function (elem, name, sButton, altkey, ctrlkey, shiftkey, clientX, clientY, relatedElem)
        	{
        		if (!elem) return;
        		if (elem._is_component)
        			elem = EVENT.getElementInComp(elem, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		if (relatedElem && relatedElem._is_component)
        			relatedElem = relatedElem.getElement();

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  node = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( node),
        			  opt = {
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					button: getButtonIDByString(sButton),
        					altKey: altkey,
        					ctrlKey: ctrlkey,
        					shiftKey: shiftkey
        				};

        		if (typeof clientX !== 'undefined')
        		{
        			clientX = parseInt(clientX);
        			if (clientX != NaN)
        			{
        				opt.clientX += clientX;
        				opt.screenX += clientX;
        			}
        		}
        		if (typeof clientY !== 'undefined')
        		{
        			clientY = parseInt(clientY);
        			if (clientY != NaN)
        			{
        				opt.clientY += clientY;
        				opt.screenY += clientY;
        			}
        		}

        		if (relatedElem && relatedElem.handle)
        		{
        			opt['relatedTarget'] = relatedElem.handle;
        		}

        		var evt = createSysMouseEvent(elem, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(elem, event_name, evt);

        			if (nexacro._Browser != "IE")
        			{
        				if (event_name.indexOf("mousedown") > -1)
        				{
        					if (g_elem_list)
        					{
        						if (g_elem_list.indexOf(elem) == -1)
        						{
        							g_elem_list.push(elem);
        						}
        					}
        				}
        				else if (name.indexOf("mouseup") > -1)
        				{
        					if (g_elem_list)
        					{
        						for (var i=0, len=g_elem_list.length; i<len; i++)
        						{
        							if (g_elem_list[i] == elem)
        							{
        								g_elem_list.splice(i, 1);
        								break;
        							}
        						}
        					}
        				}
        			}
        		}
        		return evt;
        	};
        }

        EVENT.clearMouseEvent = clearMouseEvent;
        EVENT.dispatchMouseEvent = dispatchMouseEvent;
        EVENT.dispatchMouseEventEx = dispatchMouseEventEx;

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
