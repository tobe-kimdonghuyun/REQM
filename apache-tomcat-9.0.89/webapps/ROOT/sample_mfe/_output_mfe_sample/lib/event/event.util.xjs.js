//XJS=event.util.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libevent::event.keyboard.util.xjs");
        this.addIncludeScript(path,"libevent::event.mouse.util.xjs");
        this.addIncludeScript(path,"libevent::event.wheel.util.xjs");
        this.addIncludeScript(path,"libevent::event.touch.util.xjs");
        this.addIncludeScript(path,"libevent::event.focus.util.xjs");
        this.addIncludeScript(path,"libevent::event.window.util.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("libevent::event.keyboard.util.xjs"); /*include "libevent::event.keyboard.util.xjs"*/
        this.executeIncludeScript("libevent::event.mouse.util.xjs"); /*include "libevent::event.mouse.util.xjs"*/
        this.executeIncludeScript("libevent::event.wheel.util.xjs"); /*include "libevent::event.wheel.util.xjs"*/
        this.executeIncludeScript("libevent::event.touch.util.xjs"); /*include "libevent::event.touch.util.xjs"*/
        this.executeIncludeScript("libevent::event.focus.util.xjs"); /*include "libevent::event.focus.util.xjs"*/
        this.executeIncludeScript("libevent::event.window.util.xjs"); /*include "libevent::event.window.util.xjs"*/

        if (typeof nexacro.test.Event === 'undefined')
        		nexacro.test.Event = {};

        var EVENT = nexacro.test.Event;

        nexacro.Event.KEY_PERIOD = 190;

        if (!EVENT || typeof EVENT.doDispatch !== 'undefined')
        	return;

        var doDispatch = function (element, evtName, params) {
        	if (!EVENT.isSupportSysEvent(evtName)) return null;

        	var forwardinfo = EVENT.getSysEventInfo(evtName);
        	if (!forwardinfo) return null;

        	var typeArg = forwardinfo.type;
        	var evtType = EVENT.getEventTypeByName(typeArg || forwardinfo.name);
        	if (evtType == "MouseEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchMouseEvent.apply(null, args);
        	}
        	else if (evtType == "KeyboardEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchKeyboardEvent.apply(null, args);
        	}
        	else if (evtType == "WheelEvent" || evtType == "MouseScrollEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchWheelEvent.apply(null, args);
        	}
        	else if (evtType == "InputEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchInputEvent.apply(null, args);
        	}
        	else if (evtType == "FocusEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchFocusEvent.apply(null, args);
        	}
        	else if (evtType == "TouchEvent" || evtType == "PointerEvent" || evtType == "MSPointerEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchTouchEvent.apply(null, args);
        	}
        	else if (evtType == "WindowEvent" || evtType == "UIEvent")
        	{
        		var target_win = element;
        		if (target_win instanceof nexacro.Element)
        			target_win = element._getWindow();

        		var args = [target_win, evtName].concat(params);
        		return EVENT.dispatchWindowEvent.apply(null, args);
        	}
        	else
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchEvent.apply(null, args);
        	}

        	return null;
        };

        var doDispatchEx = function (element, evtName, params) {
        	if (!EVENT.isSupportSysEvent(evtName)) return null;

        	var forwardinfo = EVENT.getSysEventInfo(evtName);
        	if (!forwardinfo) return null;

        	var typeArg = forwardinfo.type;
        	var evtType = EVENT.getEventTypeByName(typeArg || forwardinfo.name);
        	if (evtType == "MouseEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchMouseEventEx.apply(null, args);
        	}
        	else if (evtType == "KeyboardEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchKeyboardEvent.apply(null, args);
        	}
        	else if (evtType == "WheelEvent" || evtType == "MouseScrollEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchWheelEvent.apply(null, args);
        	}
        	else if (evtType == "InputEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchInputEvent.apply(null, args);
        	}
        	else if (evtType == "FocusEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchFocusEvent.apply(null, args);
        	}
        	else if (evtType == "TouchEvent" || evtType == "PointerEvent" || evtType == "MSPointerEvent")
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchTouchEvent.apply(null, args);
        	}
        	else if (evtType == "WindowEvent" || evtType == "UIEvent")
        	{
        		var target_win = element;
        		if (target_win instanceof nexacro.Element)
        			target_win = element._getWindow();

        		var args = [target_win, evtName].concat(params);
        		return EVENT.dispatchWindowEvent.apply(null, args);
        	}
        	else
        	{
        		var args = [element, evtName].concat(params);
        		return EVENT.dispatchEvent.apply(null, args);
        	}

        	return null;
        };

        var sendSpecialkeys = function (element, which, isDel, range) {
        	var charCode = which.charCodeAt(0);

        	if (which == '\n' || charCode == nexacro.Event.KEY_ENTER)
        	{
        		which = '\n';
        	}
        	else if (which == '\t' || charCode == nexacro.Event.KEY_TAB)
        	{
        		which = '\t';
        	}
        	else if (!isDel && which == '.')
        	{
        		which = '.';
        	}
        	else if (charCode == nexacro.Event.KEY_BACKSPACE)
        	{
        		which = '';
        		range[0] = Math.max(range[0]-1, 0);
        	}
        	else if (charCode == nexacro.Event.KEY_DELETE)
        	{
        		charCode = undefined;
        		which = '';
        		range[1] = range[1]+1;
        	}
        	else if (charCode == nexacro.Event.KEY_UP)
        	{
        		charCode = undefined;
        		which = '';

        		if (range[0] == range[1])	range[0] = Math.max(range[0]-1, 0);
        		range[1] = range[0];
        	}
        	else if (charCode == nexacro.Event.KEY_DOWN)
        	{
        		charCode = undefined;
        		which = '';

        		if (range[0] == range[1])	range[1] = range[1]+1;
        		range[0] = range[1];
        	}
        	else if (charCode == nexacro.Event.KEY_LEFT)
        	{
        		charCode = undefined;
        		which = '';

        		if (range[0] == range[1])	range[0] = Math.max(range[0]-1, 0);
        		range[1] = range[0];
        	}
        	else if (charCode == nexacro.Event.KEY_RIGHT)
        	{
        		charCode = undefined;
        		which = '';

        		if (range[0] == range[1])	range[1] = range[1]+1;
        		range[0] = range[1];
        	}
        	else if (charCode == nexacro.Event.KEY_HOME)
        	{
        		charCode = undefined;
        		which = '';
        		range[0] = 0;
        		range[1] = 0;
        	}
        	else if (charCode == nexacro.Event.KEY_END)
        	{
        		charCode = undefined;
        		which = '';
        		range[0] = -1;
        		range[1] = -1;
        	}
        	else if (charCode == nexacro.Event.KEY_PERIOD)
        	{
        		which = '.';
        	}

        	return { which: which, charCode: charCode, range: range };
        };

        // element:inputelement, data: string | array, pos: 'start|end|range', range:[start, end]
        // ex) sendKeys(elem, ['ab/n',  'd', nexacro.Event.KEY_LEFT, '\tqwerty'], 'end');
        var sendKeys = function (element, keys, pos, range) {

        	if (!element) return;

        	if (element._is_component)
        	{
        		if (!element._input_element)
        		{
        			for (var i in element)
        			{
        				if ((element[i] instanceof nexacro.Edit) || (element[i] instanceof nexacro.MaskEdit))
        				{
        					break;
        				}
        			}
        			element = element[i] ? element[i]._input_element : null;
        		}
        		else
        			element = element._input_element;
        	}

        	if (!element || !(element instanceof nexacro.InputElement))
        		return;

        	element.setElementFocus();
        	EVENT.doDispatch(element, 'focus');

        	if (pos == 'start')
        	{
        		range = [0, 0];
        	}
        	else if (pos == 'end')
        	{
        		range = [-1, -1];
        	}
        	else if (pos == 'all')
        	{
        		range = [0, -1];
        	}

        	if (!range)
        	{
        		var pos = element.getElementCaretPos();
        		if (pos && pos != -1)
        		{
        			range = [pos.begin, pos.end];
        		}
        		else
        		{
        			range = [0, 0];
        		}
        	}
        	element.setElementSetSelect(range[0], range[1]);

        	if (!keys || keys.length == 0)
        		return;

        	var strKey, strCh, nodeVal, data, len = keys.length, charLen;
        	for (var i=0;i<len;i++)
        	{
        		strKey = keys[i];
        		var isDel = false;
        		if (Array.isArray(keys) && typeof strKey == 'number') // charCode
        		{
        			if (strKey == nexacro.Event.KEY_PERIOD)
        				strKey = '¾';
        			else
        				strKey = String.fromCharCode(strKey);
        			if (strKey == '.') isDel = true;
        		}

        		charLen = strKey.length;
        		for (var ch=0;ch<charLen;ch++)
        		{
        			strCh = strKey[ch];

        			data = sendSpecialkeys(element, strCh, isDel, range);
        			if (data)
        			{
        				strCh = data.which;
        				range = data.range;

        				if (range[0] == -1 || range[1] == -1)
        				{
        					nodeVal = element._getInputValue() || '';
        					if (range[0] == -1) range[0] = nodeVal.length;
        					if (range[1] == -1) range[1] = nodeVal.length;
        				}

        				if (data.charCode != undefined)
        				{
        					EVENT.doDispatch(element, 'keypress', [strCh]);
        				}

        				if (nexacro._Browser == "Chrome" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit"))
        				{
        					var node = element.handle;
        					var doc = node.ownerDocument || node.document;
        					var evt = nexacro.__createHTMLEvent(doc, "beforeinput");
        					if (evt)
        					{
        						if (data.which)
        						{
        							evt.data = strCh;
        							evt.inputType = "insertText";
        						}
        						else
        						{
        							if (data.charCode == 8)
        							{
        								evt.inputType = "deleteContentBackward"
        							}
        						}

        						nexacro.__despatchEvent(node, evt);
        					}

        					var n = element._beforeinput_result ? element._beforeinput_result.length : 0;
        					var skip = false;
        					for(var j=0; j<n; j++)
        					{
        						// check maxlength
        						if (element._beforeinput_result[j] == 5)
        						{
        							if (element.parent.linkedcontrol.maxlength == (node.value.length+strCh.length))
        								break;
        							skip = true;
        							break;
        						}
        					}

        					if (skip) continue;
        				}

        				element.replaceElementText(strCh, range[0], range[1]);

        				range[0] = range[0] + strCh.length;
        				range[1] = range[0];

        				// framework에서 input이벤트를 발생시켜 주고 있어서 여기서 해줄필요 없음.
        				// IE는 아래코드 수행시 오류발생
        				//EVENT.doDispatch(element, 'input');
        			}
        		}
        	}
        };

        var click = function (element, strButton, x, y) {

        	if (!element)
        		return;

        	x |= 0;
        	y |= 0;

        	if (strButton == "lbutton")
        	{
        		EVENT.doDispatch(element, 'lbuttondown', [strButton, x, y]);
        		EVENT.doDispatch(element, 'lbuttonup', [strButton, x, y]);
        	}
        	else if (strButton == "rbutton")
        	{
        		EVENT.doDispatch(element, 'rbuttondown', [strButton, x, y]);
        		EVENT.doDispatch(element, 'rbuttonup', [strButton, x, y]);
        	}
        	else
        	{
        		EVENT.doDispatch(element, 'mousedown', [strButton, x, y]);
        		EVENT.doDispatch(element, 'mouseup', [strButton, x, y]);
        	}
        };

        var clickEx = function (element, strButton, altkey, ctrlkey, shiftkey, x, y) {

        	if (!element) return;
        	if (element._is_component)
        		element = EVENT.getElementInComp(element, x, y);
        	if (!element || !element.handle)
        		return;

        	if (!element)
        		return;

        	x |= 0;
        	y |= 0;


        	if (strButton == "lbutton")
        	{
        		EVENT.doDispatchEx(element, 'lbuttondown', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        		EVENT.doDispatchEx(element, 'lbuttonup', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        	}
        	else if (strButton == "rbutton")
        	{
        		EVENT.doDispatchEx(element, 'rbuttondown', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        		EVENT.doDispatchEx(element, 'rbuttonup', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        	}
        	else
        	{
        		EVENT.doDispatchEx(element, 'mousedown', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        		EVENT.doDispatchEx(element, 'mouseup', [strButton, altkey, ctrlkey, shiftkey, x, y]);
        	}

        };

        var key_downup = function (elem, key, location, ctrlKey, shiftKey, altKey, clientX, clientY) {

        	if (!elem) return;

        	if (elem._is_component)
        		elem = EVENT.getElementInComp(elem, clientX, clientY);
        	if (!elem || !elem.handle)
        		return;

        	nexacro.test.Event.dispatchKeyboardEvent(elem, 'keydown', key, location, ctrlKey, shiftKey, altKey);
         	nexacro.test.Event.dispatchKeyboardEvent(elem, 'keyup', key, location, ctrlKey, shiftKey, altKey);
        };

        var nx_common_dispatchMouseEvent = function (elem, name, sButton, altkey, ctrlkey, shiftkey, clientX, clientY, relatedElem)
        {
        	if (nexacro._isMobile && nexacro._isMobile())
        	{
        		if (name == "lbuttondown") name = "touchstart";
        		else if (name == "lbuttonup") name = "touchend";
        		else if (name == "mousemove") name = "touchmove";

        		EVENT.dispatchTouchEvent(elem, name, 0, clientX, clientY, false);

        	}
        	else
        	{
        		EVENT.dispatchMouseEventEx(elem, name, sButton, altkey, ctrlkey, shiftkey, clientX, clientY, relatedElem);
        	}
        };

        var nx_common_click = function (elem, sButton, altkey, ctrlkey, shiftkey, clientX, clientY)
        {
        	if (nexacro._isMobile && nexacro._isMobile())
        	{
        		EVENT.dispatchTouchEvent(elem, "touchstart", 0, clientX, clientY, false);
        		EVENT.dispatchTouchEvent(elem, "touchend", 0, clientX, clientY, false);

        	}
        	else
        	{
        		EVENT.clickEx(elem, sButton, altkey, ctrlkey, shiftkey,clientX, clientY);
        	}
        };

        EVENT.doDispatch 		= doDispatch;
        EVENT.doDispatchEx 		= doDispatchEx;
        EVENT.sendKeys 			= sendKeys;
        EVENT.click 			= click;
        EVENT.clickEx 			= clickEx;
        EVENT.key_downup		= key_downup;
        EVENT.nx_common_dispatchMouseEvent = nx_common_dispatchMouseEvent;
        EVENT.nx_common_click 	= nx_common_click;





        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
