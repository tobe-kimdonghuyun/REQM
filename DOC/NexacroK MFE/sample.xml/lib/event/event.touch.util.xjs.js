//XJS=event.touch.util.xjs
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

        if (typeof EVENT.dispatchTouchEvent !== 'undefined')
        	return;

        var touchList = new nexacro.Collection;

        if (nexacro._Browser == "Runtime")
        {
        	var eventInfoToArguments = function (event_name, eventInfo)
        	{
        		var argList = [];

        		argList.push(eventInfo.touches);
        		argList.push(eventInfo.changedTouches);
        		argList.push(eventInfo.time);

        		return argList;
        	};

        	var createSysTouchEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var win_handle = elem._getWindowHandle() || null,
        			  event_type = EVENT.getEventTypeByName(event_name),
        			  initDic = {
        				touches: [],
        				changedTouches: [],
        				time: (new Date()).getTime(),

        				toArguments: function () {
        					return eventInfoToArguments(event_name, this);
        				}
        			},
        			evt = options || {};

        		if (event_type != "TouchEvent")
        			return null;

        		for (var key in initDic)
        		{
        			if (initDic.hasOwnProperty(key) && !evt.hasOwnProperty(key))
        				evt[key] = initDic[key];
        		}
        		return evt;
        	};

        	var createTouchObject = function (identifier, elem, clientX, clientY)
        	{
        		if (!elem || !elem.handle)
        		return null;

        		var handle = elem.handle,
        			  scr_pos = nexacro._getElementScreenPosition(elem),
        			  elem_pos = nexacro._getElementXYInWindow( handle),
        			  touch = {
        				id: identifier, 			/* require */
        				target: elem,			/* require */
        				timeStamp: (new Date()).getTime(),
        				screenX: scr_pos.x,
        				screenY: scr_pos.y,
        				clientX: elem_pos[0],
        				clientY: elem_pos[1]
        		};

        		if (typeof clientX !== 'undefined')
        		{
        			clientX = parseInt(clientX);
        			if (clientX != NaN)
        			{
        				touch.clientX += clientX;
        				touch.screenX += clientX;
        			}
        		}
        		if (typeof clientY !== 'undefined')
        		{
        			clientY = parseInt(clientY);
        			if (clientY != NaN)
        			{
        				touch.clientY += clientY;
        				touch.screenY += clientY;
        			}
        		}
        		return touch;
        	};

        	var dispatchTouchEvent = function (elem, name, identifier, clientX, clientY, isPrimary)
        	{
        		if (!elem) return;

        		if (elem._is_component)
        			elem = EVENT.getElementInComp(elem, clientX, clientY);
        		if (!elem || !elem.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  changed = createTouchObject(identifier, elem, clientX, clientY),
        			  opt = {
        					touches: [],
        					changedTouches: [changed]
        			};

        		if (isPrimary)
        			touchList.clear();

        		var touch = touchList[identifier];
        		if (!touch)
        		{
        			if (event_type === 'touchmove')
        				event_type = 'touchstart';
        		}
        		else
        		{
        			if (event_type === 'touchstart')
        				event_type = 'touchmove';
        		}

        		if (event_type == 'touchstart' || event_type == 'touchmove')
        			touchList.add(identifier, changed);
        		else
        			touchList.remove(identifier);

        		opt.touches = Array.prototype.slice.call(touchList, 0);

        		var evt = createSysTouchEvent(elem, event_type, opt);
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
        	// touch event
        	if (nexacro._Browser == "IE")
        	{
        		var _isSupportPointerEventConstructor = (function () {
        			try {
        				var evt = new PointerEvent('pointercancel');
        			}
        			catch (ex) {
        				return false;
        			} return true;
        		})();;
        		var createSysTouchEvent = function (elem, event_name, options)
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
        					pointerId: 0,
        					width: 1,
        					height: 1,
        					pressure: 0,
        					pointerType: 'touch', /*  MSPOINTER_TYPE_TOUCH: 0x00000002 or 'touch' */
        					isPrimary: false,
        					screenX: 0,
        					screenY: 0,
        					clientX: 0,
        					clientY: 0,
        					ctrlKey: false,
        					shiftKey: false,
        					altKey: false,
        					metaKey: false,
        					buttons: 1
        				},
        				initOpt = {}
        			;

        			if (event_type != 'PointerEvent' && event_type != 'MSPointerEvent')
        				return null;

        			for (var key in initDic)
        			{
        				if (initDic.hasOwnProperty(key))
        					initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        			}

        			if (_isSupportPointerEventConstructor)
        			{
        				evt = new PointerEvent(event_name, initOpt);
        			}
        			else if (cur_doc.createEvent)
        			{
        				evt = cur_doc.createEvent(event_type);
        				if (evt.initPointerEvent)
        				{
        					evt.initPointerEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						0, null, 0, 0, 1, 1, 0, 0, 0, 0,
        						initOpt.pointerId, initOpt.pointerType, (new Date()).getTime(), initOpt.isPrimary
        					 );
        				}
        				else if (evt.initMouseEvent)
        				{
        					evt.initMouseEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						initOpt.button, null
        					 );
        					 evt.pointerId =  initOpt.pointerId;
        					 evt.pointerType =  initOpt.pointerType;
        					 evt.isPrimary =  initOpt.isPrimary;
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

        		var dispatchTouchEvent = function (elem, name, identifier, clientX, clientY, isPrimary)
        		{
        			if (!elem) return;

        			if (elem._is_component)
        				elem = EVENT.getElementInComp(elem, clientX, clientY);
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
        					pointerId: identifier,
        					isPrimary: isPrimary || false,
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1]
        				};

        			if (touchList.length == 0)
        				opt.isPrimary = true;

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

        			if (event_type === 'pointerover' || event_type === 'pointerenter' ||
        			    event_type === 'pointerout' || event_type === 'pointerleave')
        				return;

        			var evt = createSysTouchEvent(elem, event_type, opt);
        			if (evt)
        			{
        				EVENT.dispatchSysEvent(elem, event_name, evt);
        			}
        			return evt;
        		};
        	}
        	else
        	{
        		var _isSupportTouchEventConstructor = (function () {
        			try {
        				var evt = new TouchEvent('touchcancel');
        			}
        			catch (ex) {
        				return false;
        			} return true;
        		})();;
        		var createSysTouchEvent = function (elem, event_name, options)
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
        					touches: 0,
        					changedTouches: 0,
        					ctrlKey: false,
        					shiftKey: false,
        					altKey: false,
        					metaKey: false
        				},
        				initOpt = {}
        			;

        			if (event_type != 'TouchEvent')
        				return null;

        			for (var key in initDic)
        			{
        				if (initDic.hasOwnProperty(key))
        					initOpt[key] = (options.hasOwnProperty(key) ? options[key] : initDic[key]);
        			}

        			if (_isSupportTouchEventConstructor)
        			{
        				evt = new TouchEvent(event_name, initOpt);
        			}
        			else if (cur_doc.createEvent)
        			{
        				evt = cur_doc.createEvent(event_type);
        				if (evt.initTouchEvent)
        				{
        					evt.initTouchEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						initOpt.touches, 0, initOpt.changedTouches
        					 );
        				}
        				else if (evt.initMouseEvent)
        				{
        					evt.initMouseEvent(event_name, initOpt.bubbles, initOpt.cancelable,
        						initOpt.view, initOpt.detail,
        						initOpt.screenX, initOpt.screenY, initOpt.clientX, initOpt.clientY,
        						initOpt.ctrlKey, initOpt.altKey, initOpt.shiftKey, initOpt.metaKey,
        						initOpt.button, null
        					 );
        					 evt.touches = initOpt.touches;
        					 evt.changedTouches = initOpt.changedTouches;
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

        		var _create_touch_method = typeof Touch != 'undefined' ? 1 : (document.createTouch ? 2 : 0);
        		var createTouchObject = function (identifier, elem, clientX, clientY, ctrlKey, shiftKey, altKey)
        		{
        			if (!elem || !elem.handle)
        			return null;

        			var node = elem.handle,
        				  cur_doc = node.ownerDocument || node.document,
        				  cur_win = cur_doc.defaultView || cur_doc.parentWindow,
        				  scr_pos = nexacro._getElementScreenPosition(elem),
        				  elem_pos = nexacro._getElementXYInWindow( node),
        				  touch = {
        					identifier: identifier, 	/* require */
        					target: node,				/* require */
        					screenX: scr_pos.x,
        					screenY: scr_pos.y,
        					clientX: elem_pos[0],
        					clientY: elem_pos[1],
        					pageX: elem_pos[0] + (cur_win.pageXOffset || cur_win.scrollX),
        					pageY: elem_pos[1] + (cur_win.pageYOffset || cur_win.scrollY)
        			};

        			if (typeof clientX !== 'undefined')
        			{
        				clientX = parseInt(clientX);
        				if (clientX != NaN)
        				{
        					touch.clientX += clientX;
        					touch.pageX += clientX;
        					touch.screenX += clientX;
        				}
        			}
        			if (typeof clientY !== 'undefined')
        			{
        				clientY = parseInt(clientY);
        				if (clientY != NaN)
        				{
        					touch.clientY += clientY;
        					touch.pageY += clientY;
        					touch.screenY += clientY;
        				}
        			}

        			if (_create_touch_method == 1)
        			{
        				return new Touch(touch);
        			}
        			else if (_create_touch_method == 2)
        			{
        				var cur_doc = node.ownerDocument || node.document;
        				var cur_win = cur_doc.defaultView || cur_doc.parentWindow;
        				return document.createTouch(cur_win, touch.target, touch.identifier, touch.pageX, touch.pageY, touch.screenX, touch.screenY, touch.clientX, touch.clientY);
        			}
        			return touch;
        		};

        		var dispatchTouchEvent = function (elem, name, identifier, clientX, clientY, isPrimary)
        		{
        			if (!elem) return;

        			if (elem._is_component)
        				elem = EVENT.getElementInComp(elem, clientX, clientY);
        			if (!elem || !elem.handle)
        				return;

        			var sysEventInfo = EVENT.getSysEventInfo(name);
        			if (!sysEventInfo) return;

        			var event_name = sysEventInfo.name,
        				  event_type = sysEventInfo.type || event_name,
        				  changed = createTouchObject(identifier, elem, clientX, clientY),
        				  opt = {
        						touches: [],
        						changedTouches: [ changed ]
        				};

        			if (isPrimary)
        				touchList.clear();

        			var touch = touchList[identifier];
        			if (!touch)
        			{
        				if (event_type === 'touchmove')
        					event_type = 'touchstart';
        			}
        			else
        			{
        				if (event_type === 'touchstart')
        					event_type = 'touchmove';
        			}

        			if (event_type == 'touchstart' || event_type == 'touchmove')
        				touchList.add(identifier, changed);
        			else
        				touchList.remove(identifier);

        			opt.touches = Array.prototype.slice.call(touchList, 0);

        			var evt = createSysTouchEvent(elem, event_type, opt);
        			if (evt)
        			{
        				EVENT.dispatchSysEvent(elem, event_name, evt);
        			}
        			return evt;
        		};
        	}
        }

        EVENT.dispatchTouchEvent = dispatchTouchEvent;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
