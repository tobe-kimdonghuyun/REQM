//XJS=event.lib.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::test.util.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("lib::test.util.xjs"); /*include "lib::test.util.xjs"*/

        if (typeof nexacro.test.Event === 'undefined')
        		nexacro.test.Event = {};

        var EVENT = nexacro.test.Event;

        if (!EVENT || typeof EVENT.dispatchEvent !== 'undefined')
        	return;

        var nx_form = this;

        //////////////////////////////////////////////////////////////////////////
        // sysevent util

        var SYSEVENT_NAMES = {
        	'lbuttondown': {
        		runtime: { name: 'lbuttondown',  target: 'window' },
        		html: { name: 'mousedown',  target: 'body' }
        	},
        	'lbuttonup': {
        		runtime: { name: 'lbuttonup',  target: 'window' },
        		html: { name: 'mouseup',  target: 'body' }
        	},
        	'rbuttondown': {
        		runtime: { name: 'rbuttondown',  target: 'window' },
        		html: { name: 'mousedown',  target: 'body' }
        	},
        	'rbuttonup': {
        		runtime: { name: 'rbuttonup',  target: 'window' },
        		html: { name: 'mouseup',  target: 'body' }
        	},
        	'mousedown': {
        		runtime: { name: 'mousedown',  target: 'window' },
        		html: { name: 'mousedown',  target: 'body' }
        	},
        	'mouseup': {
        		runtime: { name: 'mouseup',  target: 'window' },
        		html: { name: 'mouseup',  target: 'body' }
        	},
        	'mousemove': {
        		runtime: { name: 'mousemove',  target: 'window' },
        		html: { name: 'mousemove',  target: 'body' }
        	},
        	'mouseenter': {
        		runtime: { name: 'mouseenter',  target: 'window' },
        		html: { name: 'mouseover',  target: 'body' }
        	},
        	'mouseleave': {
        		runtime: { name: 'mouseleave',  target: 'window' },
        		html: { name: 'mouseout',  target: 'body' }
        	},
        	'mousewheel': {
        		runtime: { name: 'mousewheel',  target: 'window' },
        		html: { name: 'mousewheel',  target: 'body', type: 'mousewheel' },
        		gecko: { name: 'DOMMouseScroll',  target: 'body', type: 'mousewheel' }
        	},
        	'wheel': {
        		html: { name: 'wheel',  target: 'body', type: 'wheel' }
        	},
        	'mousehover': {
        		runtime: { name: 'mousehover',  target: 'window' },
        		html: { name: 'mouseover',  target: 'body' }
        	},

        	'touchstart': {
        		support: (nexacro._SupportTouch || nexacro._SupportTouchEvent),
        		runtime: { name: 'touchstart',  target: 'window' },
        		html: { name: 'touchstart',  target: 'body' },
        		ie: { name: 'MSPointerDown',  target: 'window', type: 'pointerdown' },
        		ie8: { name: 'touchstart',  target: 'window' }
        	},
        	'touchend': {
        		support: (nexacro._SupportTouch || nexacro._SupportTouchEvent),
        		runtime: { name: 'touchend',  target: 'window' },
        		html: { name: 'touchend',  target: 'body' },
        		ie: { name: 'MSPointerUp',  target: 'window', type: 'pointerup' },
        		ie8: { name: 'touchend',  target: 'window' }
        	},
        	'touchmove': {
        		support: (nexacro._SupportTouch || nexacro._SupportTouchEvent),
        		runtime: { name: 'touchmove',  target: 'window' },
        		html: { name: 'touchmove',  target: 'body' },
        		ie: { name: 'MSPointerMove',  target: 'window', type: 'pointermove' },
        		ie8: { name: 'touchmove',  target: 'window' }
        	},
        	'touchcancel': {
        		support: (nexacro._SupportTouch || nexacro._SupportTouchEvent),
        		html: { name: 'touchcancel',  target: 'body' },
        		ie: { name: 'MSPointerCancel',  target: 'window', type: 'pointercancel' },
        		ie8: { name: 'touchcancel',  target: 'window' }
        	},

        	'dblclick': {
        		runtime: { name: 'dblclick',  target: 'window' },
        		html: { name: 'dblclick',  target: 'body' }
        	},

        	'keydown': {
        		runtime: { name: 'keydown',  target: 'window' },
        		html: { name: 'keydown',  target: 'body' }
        	},
        	'keypress': {
        		runtime: { name: 'keypress',  target: 'window' },
        		html: { name: 'keypress',  target: 'body' }
        	},
        	'keyup': {
        		runtime: { name: 'keyup',  target: 'window' },
        		html: { name: 'keyup',  target: 'body' }
        	},

        	'beforeinput': {
        		html: { name: 'beforeinput',  target: 'input' }
        	},
        	'input': {
        		runtime: { name: 'input',  target: 'input' },
        		html: { name: 'input',  target: 'input' }
        	},

        	'contextmenu': {
        		runtime: { name: 'contextmenu',  target: 'window' },
        		html: { name: 'contextmenu',  target: 'body' }
        	},

        	'dragstart': {
        		html: { name: 'dragstart',  target: 'body' }
        	},
        	'selectstart': {
        		html: { name: 'selectstart',  target: 'body' }
        	},
        	'select': {
        		html: { name: 'select',  target: 'body' }
        	},

        	'resize': {
        		runtime: { name: 'resize',  target: 'window' },
        		html: { name: 'resize',  target: 'window' }
        	},
        	'move': {
        		runtime: { name: 'move',  target: 'window' }
        	},
        	'activate': {
        		runtime: { name: 'activate',  target: 'window' },
        		html: { name: 'focus',  target: 'window' }
        	},
        	'deactivate': {
        		runtime: { name: 'deactivate',  target: 'window' },
        		html: { name: 'blur',  target: 'window' },
        		ie: { name: 'focusout',  target: 'document' }
        	},
        	'focus': {
        		runtime: { name: 'focus',  target: 'input', holder: this.target },
        		html: { name: 'focus',  target: 'input', holder: this.target }
        	},
        	'blur': {
        		runtime: { name: 'blur',  target: 'input', holder: this.target },
        		html: { name: 'blur',  target: 'input', holder: this.target },
        		ie: { name: 'focusout',  target: 'input', holder: this.target }
        	},
        	'load': {
        		ie: { name: 'load',  target: 'window' }
        	},
        	'beforeclose': {
        		runtime: { name: 'beforeclose',  target: 'window' },
        		html: { name: 'beforeunload',  target: 'window' }
        	},
        	'close': {
        		runtime: { name: 'close',  target: 'window' },
        		html: { name: 'unload',  target: 'window' }
        	},
        	'tray': {
        		runtime: { name: 'tray',  target: 'window' }
        	},

        	'message': {
        		runtime: { name: 'message',  target: 'window' },
        		html: { name: 'message',  target: 'window' }
        	},
        	'getminmaxinfo': {
        		runtime: { name: 'getminmaxinfo',  target: 'window' }
        	},
        	'reload': {
        		runtime: { name: 'reload',  target: 'window' }
        	},
        	'viewsource': {
        		runtime: { name: 'viewsource',  target: 'window' }
        	},
        	'syscommand': {
        		runtime: { name: 'syscommand',  target: 'window' }
        	},
        	'ncmousedown': {
        		runtime: { name: 'ncmousedown',  target: 'window' }
        	},
        	'duplicateexcution': {
        		runtime: { name: 'duplicateexcution',  target: 'window' }
        	},
        	'losecapture': {
        		ie: { name: 'losecapture',  target: 'body' }
        	},

        	'orientationchange': {
        		support: (nexacro._Browser == "Runtime" ||  nexacro._SupportOrientation),
        		runtime: { name: 'orientationchange',  target: 'window' },
        		html: { name: 'orientationchange',  target: 'window' }
        	},
        	'accessibilitygesture': {
        		runtime: { name: 'accessibilitygesture',  target: 'window' }
        	},
        	'accessibilityhover': {
        		runtime: { name: 'accessibilityhover',  target: 'window' }
        	}
        };

        var isSupportSysEvent = function (name)
        {
        	var sysEvent = SYSEVENT_NAMES[name];
        	if (!sysEvent) return false;

        	if (sysEvent.hasOwnProperty('support') && !sysEvent.support)
        		return false;

        	return true;
        };

        var getSysEventInfo = function(name)
        {
        	var sysEvent = SYSEVENT_NAMES[name];
        	if (!sysEvent)
        		return null;

        	if (!isSupportSysEvent(name))
        		return null;

        	var browser = nexacro._Browser;
        	var version = nexacro._BrowserVersion;
        	var browsertype = nexacro._BrowserType;

        	var info = null;
        	if (browser == "IE" && version <= 8) info = sysEvent['ie8'];
        	else if (browser == "IE" && browsertype == 'Edge') info = sysEvent['edge'];

        	if (!info) info = sysEvent[browser.toLowerCase()];
        	if (!info && browser != "Runtime") info = sysEvent['html'];

        	return info;
        };

        //////////////////////////////////////////////////////////////////////////
        // native event dispatch util
        if (nexacro._Browser == "IE")
        {
        	var eventTypeMatchers = {
        		'UIEvent': /^(?:load|unload|beforeunload|select|resize|scroll|losecapture|orientationchange)$/,
        		'MouseEvent': /^(?:click|dblclick|mouse(?:down|up|over|move|out|enter|leave|hover)|contextmenu|dragstart|selectstart)$/,
        		'WheelEvent': /^(?:mousewheel|wheel)$/,
        		'KeyboardEvent': /^(?:key(?:down|press|up))$/,
        		'InputEvent': /^(?:beforeinput|input)$/,
        		'CompositeEvent': /^(?:conposition(?:start|update|end))$/,
        		'FocusEvent': /^(?:focus|blur|focusin|focusout)$/,
        		'MessageEvent': /^(?:message)$/
        	};

        	if (nexacro._BrowserType == "Egde" || nexacro._Version > 10)
        	{
        		eventTypeMatchers['PointerEvent'] = /^(?:touch(?:start|end|move|cancel)|pointer(?:down|up|move|cancel)|MSPointer(?:Start|End|Move|Cancel))$/;
        	}
        	else
        	{
        		eventTypeMatchers['MSPointerEvent'] = /^(?:touch(?:start|end|move|cancel)|pointer(?:down|up|move|cancel)|MSPointer(?:Start|End|Move|Cancel))$/;
        	}
        }
        else if (nexacro._Browser !== "Runtime")
        {
        	var eventTypeMatchers = {
        		'UIEvent': /^(?:load|unload|beforeunload|select|resize|orientationchange)$/,
        		'MouseEvent': /^(?:click|dblclick|mouse(?:down|up|over|move|out|enter|leave|hover)|contextmenu|dragstart|selectstart)$/,
        		'WheelEvent': /^(?:mousewheel|wheel)$/,
        		'TouchEvent': /^(?:touch(?:start|end|move|cancel))$/,
        		'KeyboardEvent': /^(?:key(?:down|press|up))$/,
        		'InputEvent': /^(?:beforeinput|input)$/,
        		'CompositeEvent': /^(?:conposition(?:start|update|end))$/,
        		'FocusEvent': /^(?:focus|blur)$/,
        		'MessageEvent': /^(?:message)$/
        	};

        	if (nexacro._Browser == "Gecko")
        	{
        		eventTypeMatchers['MouseScrollEvent'] = /^(?:DOMMouseScroll)$/;
        	}
        }
        else
        {
        	var eventTypeMatchers = {
        		'WindowEvent': /^(?:close|beforeclose|tray|resize|move|syscommand|ncmousedown|duplicateexcution|orientationchange)$/,
        		'MouseEvent': /^(?:click|dblclick|mouse(?:down|up|over|move|out|enter|leave|hover)|contextmenu|selectstart|lbutton(?:down|up)|rbutton(?:down|up))$/,
        		'WheelEvent': /^(?:mousewheel|wheel)$/,
        		'TouchEvent': /^(?:touch(?:start|end|move|cancel))$/,
        		'KeyboardEvent': /^(?:key(?:down|press|up))$/,
        		'InputEvent': /^(?:beforeinput|input)$/,
        		'CompositeEvent': /^(?:conposition(?:start|update|end))$/,
        		'FocusEvent': /^(?:activate|deactivate|focus|blur)$/,
        		'MessageEvent': /^(?:message)$/
        	};
        }

        var getEventTypeByName = function (name)
        {
        	for (var type in eventTypeMatchers)
        	{
        		if (eventTypeMatchers[type].test(name)) return type;
        	}
        	return 'Event';
        };

        if (nexacro._Browser == "Runtime")
        {
        	if (!('api' in nexacro.test.Event))
        	{
        		var FRMWK_MODNAME = '';
        		if (typeof nexacro.test.installExtension !== 'undefined')
        		{
        			var ostype = nexacro._OS.toLowerCase();
        			if (ostype.substr(0, 7) == "windows" || ostype.substr(0, 7) == "android")
        			{
        				var systype = nexacro._SystemType.toLowerCase();
        				FRMWK_MODNAME = 'TestFrameworkLib.dll';
        			}

        			if (FRMWK_MODNAME)
        			{
        				var module = nexacro.test.installExtension(FRMWK_MODNAME);
        				if (module)
        				{
        					nexacro.test.Event['api'] = module;
        				}
        				else
        				{
        					trace("%UserApp%Component 에서 " + FRMWK_MODNAME + "파일을 찾을 수 없습니다.");
        				}
        			}
        		}
        	}

        	var createSysEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var evt = {
        				toArguments: function () {
        					var argList = [];
        					for (var key in this)
        					{
        						if (this.hasOwnProperty(key) && typeof this[key] != 'function' )
        							argList.push(this[key]);
        					}
        					return argList;
        				}
        			},
        			options = options || {};

        		for (var key in options)
        		{
        			if (options.hasOwnProperty(key))
        				evt[key] = options[key];
        		}
        		return evt;
        	};

        	var dispatchSysEvent = function (target, event_name, evt)
        	{
        		if (target)
        		{
        			var elem = target._is_window ? null : target;
        			var win_handle = (elem && elem.handle && elem._getWindowHandle() || null);

        			if (!win_handle)
        				win_handle = nexacro._getMainWindowHandle();

        			if (!win_handle || !event_name)
        				return;

        			var eventType = getEventTypeByName(event_name);
        			if (eventType != "MouseEvent")
        			{
        				var linkedcontrol = elem.linkedcontrol;
        				var bEdit = (linkedcontrol instanceof nexacro.Edit || linkedcontrol instanceof nexacro.MaskEdit || linkedcontrol instanceof nexacro.TextArea);
        				if (!elem.isInputElement() && !bEdit)
        				{
        					var win;
        					if (elem._getWindow && elem.linkedcontrol && elem.linkedcontrol._getWindow)
        					{
        						win = elem._getWindow();
        					}

        					if (win)
        					{
        						if (win._last_focused_elem instanceof nexacro.InputElement)
        						{
        							elem = win._last_focused_elem;
        						}
        					}
        				}
        			}

        			var argList;
        			if (evt.toArguments)
        			{
        				argList = evt.toArguments();
        			}
        			if (EVENT['api'])
        			{
        				if (elem.isInputElement() && event_name != "mousewheel" && EVENT['api'].__dispatchSysEventInput)
        				{
        					EVENT['api'].__dispatchSysEventInput(win_handle, elem, 'on' + event_name, argList);

        					if(event_name == "lbuttondown" || event_name == "lbuttonup")
        					{
        						EVENT['api'].__dispatchSysEvent(win_handle, elem, 'on' + event_name, argList);
        					}
        				}
        				else
        				{
        					EVENT['api'].__dispatchSysEvent(win_handle, elem, 'on' + event_name, argList);
        				}
        			}

        			if (eventType != "MouseEvent")
        			{
        				var rootcomp = nexacro._findParentComponent(elem);
        				if(rootcomp && rootcomp._getWindow)
        				{
        						var compwin = rootcomp._getWindow();
        						compwin._touch_end = false;
        				}
        			}
        		}
        	};

        	var dispatchEvent = function (target, name, options)
        	{
        		if (!target || !target.handle)
        			return;

        		var sysEventInfo = getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			event_type = sysEventInfo.type || event_name;

        		var evt = createSysEvent(target, event_type, options);
        		if (evt)
        		{
        			dispatchSysEvent(target, event_name, evt);
        		}
        		return evt;
        	};

        	// etc util
        	var getElementInComp = function(comp, x, y, style)
        	{
        		if (!comp || !nx_form) return null;

        		var h_pos = nx_form._hscroll_pos;
        		var v_pos = nx_form._vscroll_pos;

        		if (style)
        			nx_form._scrollTo(comp._left+x, comp._top+y, true, true, undefined, "mousewheel_v");
        		else
        			comp.setFocus(true);

        		var comp_elem = comp.getElement();
        		nexacro._flushCommand(comp_elem._getWindow()); // _flushCommand() 주석시에는 아래 _scrollTo() 함수도 주석 필요

        		var comp_elem_pos = nexacro._getElementXYInWindow(comp_elem.handle);

        		if (nexacro._zoom_factor != 100)
        		{
        			comp_elem_pos[0] = comp_elem_pos[0] * nexacro._zoom_factor / 100;
        			comp_elem_pos[1] = comp_elem_pos[1] * nexacro._zoom_factor / 100;

        			x = x * nexacro._zoom_factor / 100;
        			y = y * nexacro._zoom_factor / 100;
        		}

        		var elem;
        		if (nexacro.__HitTestRootByPoint) // MASTER 브랜치 변경집합 50682 이상 툴 버전 필요 (1/31)
        			elem = nexacro.__HitTestRootByPoint(comp_elem.handle, comp_elem_pos[0]+x, comp_elem_pos[1]+y);
        		else
        			elem = nexacro.__HitTestByPoint(comp_elem.handle, comp_elem_pos[0]+x, comp_elem_pos[1]+y); // 제거예정

        		if (h_pos === undefined) h_pos = 0;
        		if (v_pos === undefined) v_pos = 0;

        		nx_form._scrollTo(v_pos, v_pos, true, true, undefined, "mousewheel_v");

        		return elem;
        	};

        	// fdl테스트후 초기화 해주어야 할 data
        	var clearNXData = function ()
        	{

        	};
        }
        else
        {
        	var createSysEvent = function (elem, event_name, options)
        	{
        		if (!elem || !elem.handle)
        			return null;

        		var evt,
        			options = options || {},
        			event_type = getEventTypeByName(event_name),
        			node = elem.handle,
        			cur_doc = node.ownerDocument || node.document,
        			initOpt = {
        				bubbles: true,
        				cancelable: true
        			};

        		if (cur_doc.createEvent)
        		{
        			evt = cur_doc.createEvent(event_type);
        			evt.initEvent(event_name, initOpt.bubbles, initOpt.cancelable);
        		}
        		else if (cur_doc.createEventObject)
        		{
        			evt = cur_doc.createEventObject();
        			evt.bubbles = initOpt.canBubble;
        			evt.cancelable = initOpt.cancelable;
        		}

        		for (var key in options)
        		{
        			if (options.hasOwnProperty(key))
        				evt[key] = options[key];
        		}
        		return evt;
        	};

        	if (nexacro._Browser == "IE" && nexacro._BrowserVersion <= 8)
        	{
        		var dispatchSysEvent = function (target, event_name, evt)
        		{
        			if (!target || !target.handle || !evt)
        				return;

        			if (target.handle.fireEvent)
        			{
        				target.handle.fireEvent('on' + event_name, evt);
        			}
        			return evt;
        		};
        	}
        	else
        	{
        		var dispatchSysEvent = function (target, event_name, evt)
        		{
        			if (!target || !target.handle || !evt)
        				return;

        			target.handle.dispatchEvent(evt);
        			return evt;
        		};
        	}

        	var dispatchEvent = function (target, name, options)
        	{
        		if (!target || !target.handle)
        			return;

        		var sysEventInfo = getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			event_type = sysEventInfo.type || event_name;

        		var evt = createSysEvent(target, event_type, options);
        		if (evt)
        		{
        			dispatchSysEvent(target, event_name, evt);
        		}
        		return evt;
        	};

        	// etc util

        	function _findElementsFromPoint(comp, _doc, x, y)
        	{
        		if (_doc.elementsFromPoint)
        		{
        			return _doc.elementsFromPoint(x, y);
        		}

        		var elements = [], previousPointerEvents = [], current, i, d;

        			// get all elements via elementFromPoint, and remove them from hit-testing in order
        		while ((current = _doc.elementFromPoint(x,y)) && elements.indexOf(current)===-1 && current != null) {
        			var arrCurrentId = current.id.split(".");
        			var compId = arrCurrentId[arrCurrentId.length-1];

        			// push the element and its current style
        			elements.push(current);
        			previousPointerEvents.push({
        					value: current.style.getPropertyValue('pointer-events'),
        					priority: current.style.getPropertyPriority('pointer-events')
        				});

        				// add "pointer-events: none", to get to the underlying element
        			current.style.setProperty('pointer-events', 'none', 'important');

        			if(comp.id == compId)
        				break;
        		}

        		// restore the previous pointer-events values
        		for(i = previousPointerEvents.length; d=previousPointerEvents[--i]; ) {
        			elements[i].style.setProperty('pointer-events', d.value?d.value:'', d.priority);
        		}

        			// return our results
        		return elements;
        	};

        	var getElementInComp = function(comp, x, y, style)
        	{
        		if (!comp || !nx_form) return null;
        		var comp_elem = comp.getElement();
        		var node = comp_elem.handle;
        		var cur_doc = node.ownerDocument || node.document;

        		var h_pos = nx_form._hscroll_pos;
        		var v_pos = nx_form._vscroll_pos;

        		if (style)
        			nx_form._scrollTo(comp._left+x, comp._top+y, true, true, undefined, "mousewheel_v");
        		else
        			comp.setFocus(true);

        		var target_elem = null;
        		var comp_elem_pos = nexacro._getElementXYInWindow(comp_elem.handle);

        		var popupcontrol = comp._getPopupControl();
        		// 그리드도 필요하면 추가해주어야 함
        		if (comp instanceof nexacro.ListView)
        		{
        			if (comp._getCurrentCell)
        			{
        				var cell = comp._getCurrentCell();
        				popupcontrol = cell ? (cell._editor ? cell._editor._getPopupControl() : null) : null;
        			}
        		}

        		var popup_node =  popupcontrol ? popupcontrol.getElement().handle : null;
        		var hit_nodes = _findElementsFromPoint(comp, cur_doc, comp_elem_pos[0]+x, comp_elem_pos[1]+y);
        		var hit_cnt = hit_nodes.length, hit_node, hit_elem;

        		for (var i=0;i<hit_cnt;i++)
        		{
        			hit_elem = nexacro.__findParentElement(hit_nodes[i]);

        			if (hit_elem && hit_elem instanceof nexacro._ContainerElement)
        				continue;

        			if (hit_elem && hit_elem.handle && (node.contains(hit_elem.handle) || (popup_node && popup_node.contains(hit_elem.handle))))
        			{
        				target_elem = hit_elem;
        				break;
        			}
        		}

        		if (h_pos === undefined) h_pos = 0;
        		if (v_pos === undefined) v_pos = 0;

        		nx_form._scrollTo(v_pos, v_pos, true, true, undefined, "mousewheel_v");

        		//return target_elem ? target_elem.owner_elem : null;
        		//return target_elem ? (target_elem.parent instanceof nexacro.Element ? target_elem.parent : target_elem.parent.getElement()) : null;
        		return target_elem;
        	};



        	// fdl테스트후 초기화 해주어야 할 function
        	// 추가로 해제해주어야할 data가 있으면 여기서 호출
        	var clearNXData = function ()
        	{
        		// mouseevent사용시 IE이외의 브라우저에서 mouse lock을 사용하므로 해제해 주어야 함.
        		// (down->up이 정상적으로 이루어지지 않은경우 lock이 해제 되지 않음)
        		EVENT.clearMouseEvent(nx_form);
        	};
        }

        EVENT.getEventTypeByName	= getEventTypeByName;
        EVENT.getSysEventInfo 		= getSysEventInfo;

        EVENT.createSysEvent 		= createSysEvent;
        EVENT.dispatchSysEvent 		= dispatchSysEvent;
        EVENT.dispatchEvent 		= dispatchEvent;

        EVENT.isSupportSysEvent		= isSupportSysEvent;

        EVENT.getElementInComp 		= getElementInComp;

        EVENT.clearNXData 			= clearNXData;



        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
