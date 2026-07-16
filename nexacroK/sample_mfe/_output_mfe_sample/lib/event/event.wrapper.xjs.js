//XJS=event.wrapper.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libevent::event.util.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/

        if (typeof nexacro.test.Event === 'undefined')
        		nexacro.test.Event = {};

        var EVENT = nexacro.test.Event;

        if (typeof EVENT.nx_dragdrop !== 'undefined')
        	return;

        var nx_dragdrop = function (drag_elem, drop_elem, related_elem, drag_clientX, drag_clientY, drop_clientX, drop_clientY, related_clientX, related_clientY, altkey, ctrlkey, shiftkey, single_drag_action)
        {
        	if (typeof drag_clientX !== 'undefined')
        	{
        		drag_clientX = parseInt(drag_clientX);
        	}
        	else
        	{
        		drag_clientX = 1;
        	}

        	if (typeof drag_clientY !== 'undefined')
        	{
        		drag_clientY = parseInt(drag_clientY);
        	}
        	else
        	{
        		drag_clientY = 1;
        	}

        	if (typeof drop_clientX !== 'undefined')
        	{
        		drop_clientX = parseInt(drop_clientX);
        	}
        	else
        	{
        		drop_clientX = 1;
        	}

        	if (typeof drop_clientY !== 'undefined')
        	{
        		drop_clientY = parseInt(drop_clientY);
        	}
        	else
        	{
        		drop_clientY = 1;
        	}

        	if (typeof related_clientX !== 'undefined')
        	{
        		related_clientX = parseInt(related_clientX);
        	}
        	else
        	{
        		related_clientX = 1;
        	}

        	if (typeof related_clientY !== 'undefined')
        	{
        		related_clientY = parseInt(related_clientY);
        	}
        	else
        	{
        		related_clientY = 1;
        	}

        	if(single_drag_action == true)
        	{
        		EVENT.nx_common_dispatchMouseEvent(drag_elem, 'lbuttondown', 'lbutton', altkey, ctrlkey, shiftkey, drag_clientX, drag_clientY);
        		EVENT.nx_common_dispatchMouseEvent(drag_elem, 'mousemove', '', altkey, ctrlkey, shiftkey,drag_clientX+1, drag_clientY+1);
        		EVENT.nx_common_dispatchMouseEvent(drop_elem, 'mousemove', '', altkey, ctrlkey, shiftkey,drop_clientX, drop_clientY);
        		EVENT.nx_common_dispatchMouseEvent(drop_elem, 'lbuttonup', 'lbutton', altkey, ctrlkey, shiftkey,drop_clientX, drop_clientY);
        	}
        	else
        	{
        		EVENT.nx_common_dispatchMouseEvent(drag_elem, 'lbuttondown', 'lbutton', altkey, ctrlkey, shiftkey, drag_clientX, drag_clientY);
        		EVENT.nx_common_dispatchMouseEvent(drag_elem, 'mousemove', '', altkey, ctrlkey, shiftkey,drag_clientX+1, drag_clientY+1);
        		EVENT.nx_common_dispatchMouseEvent(drag_elem, 'mouseleave', '', altkey, ctrlkey, shiftkey,drag_clientX+1, drag_clientY+1, related_elem);
        		EVENT.nx_common_dispatchMouseEvent(related_elem, 'mousemove', '', altkey, ctrlkey, shiftkey,related_clientX, related_clientY);
        		EVENT.nx_common_dispatchMouseEvent(drop_elem, 'mouseenter', '', altkey, ctrlkey, shiftkey,drop_clientX, drop_clientY, related_elem);
        		EVENT.nx_common_dispatchMouseEvent(drop_elem, 'mousemove', '', altkey, ctrlkey, shiftkey,drop_clientX, drop_clientY);
        		EVENT.nx_common_dispatchMouseEvent(drop_elem, 'lbuttonup', 'lbutton', altkey, ctrlkey, shiftkey,drop_clientX, drop_clientY);
        	}

        };


        if (typeof EVENT.nx_key_copy !== 'undefined')
        	return;

        var nx_key_copy = function (comp)
        {
        	if (!comp) return;

        	var elem = comp._input_element;
        	if (!elem || !(elem instanceof nexacro.InputElement))
        		return;

        	//nexacro.test.Event.dispatchKeyboardEvent(elem, 'keydown', 'c', 0, true, false, false);//ctrl + c
         	//nexacro.test.Event.dispatchKeyboardEvent(elem, 'keyup', 'c', 0, true, false, false);//ctrl + c
        	nexacro.test.Event.dispatchKeyboardEventEx(comp, 'keydown', 'c', 0, true, false, false, 5, 5);//ctrl + c
         	nexacro.test.Event.dispatchKeyboardEventEx(comp, 'keyup', 'c', 0, true, false, false, 5, 5);//ctrl + c
        };

        if (typeof EVENT.nx_key_cut !== 'undefined')
        	return;

        var nx_key_cut = function (comp)
        {
        	if (!comp) return;

        	var elem = comp._input_element;
        	if (!elem || !(elem instanceof nexacro.InputElement))
        		return;

        	//EVENT.dispatchKeyboardEvent(elem, 'keydown', 'x', 0, true, false, false);//ctrl + x
         	//EVENT.dispatchKeyboardEvent(elem, 'keyup', 'x', 0, true, false, false);//ctrl + x

        	EVENT.dispatchKeyboardEventEx(comp, 'keydown', 'x', 0, true, false, false, 5, 5);//ctrl + x
         	EVENT.dispatchKeyboardEventEx(comp, 'keyup', 'x', 0, true, false, false, 5, 5);//ctrl + x
        };


        if (typeof EVENT.nx_key_paste !== 'undefined')
        	return;

        var nx_key_paste = function (comp, paste_string)
        {
        	if (!comp) return;

        	var elem = comp._input_element;
        	if (!elem || !(elem instanceof nexacro.InputElement))
        		return;

        	//EVENT.dispatchKeyboardEvent(elem, 'keydown', 'v', 0, true, false, false);//ctrl + v
        	EVENT.dispatchKeyboardEventEx(comp, 'keydown', 'v', 0, true, false, false, 5, 5);//ctrl + v
        	if (nexacro._Browser == "Chrome" || nexacro._Browser == "Gecko" || nexacro._Browser == "Opera" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "WebKit"))
        	{
        		var val = comp.value;
        		//var pos = comp.getCaretPos();
        		var pos = comp.getSelect();
        		var begin = pos[0];
        		var end = pos[1];
        		//	pos = pos == -1 ? 0 : pos;

        		if (val)
        		{
        			elem.replaceElementText(paste_string, begin, end);
        		}
        		else
        		{
        			elem.replaceElementText(paste_string, begin, end);
        		}
        	}

        	//EVENT.doDispatch(elem, "input");

         	//EVENT.dispatchKeyboardEvent(elem, 'keyup', 'v', 0, true, false, false);//ctrl + v
        	EVENT.dispatchKeyboardEventEx(comp, 'keyup', 'v', 0, true, false, false, 5, 5);//ctrl + v
        };

        if (typeof EVENT.nx_key_all !== 'undefined')
        	return;

        var nx_key_all = function (comp)
        {
        	if (!comp) return;
        	/*
        	var elem = comp._input_element;
        	EVENT.dispatchKeyboardEvent(elem, 'keydown', 'a', 0, true, false, false);//ctrl + a
        	comp.setSelect(0, -1);
         	EVENT.dispatchKeyboardEvent(elem, 'keyup', 'a', 0, true, false, false);//ctrl + a
        	*/
        	EVENT.dispatchKeyboardEventEx(comp, 'keydown', 'a', 0, true, false, false, 5, 5);//ctrl + a
        	comp.setSelect(0, -1);
        	EVENT.dispatchKeyboardEventEx(comp, 'keyup', 'a', 0, true, false, false, 5, 5);//ctrl + a
        };

        if (typeof EVENT.nx_getGridEditor !== 'undefined')
        	return;
        var nx_getGridEditor = function (comp)
        {
        	if (!comp) return;

        	if (comp._showEditing)
        		return comp._currentCellEditor;
        	return;
        };

        var g_sub_control = [];
        var _getSubcontrol = function (v)
        {
        	for (var i in v)
        	{
        		if (i &&  i != "parent" && v[i] && v[i]._is_subcontrol)
        		{
        			//trace(i);
        			g_sub_control[g_sub_control.length] = v[i];
        			_getSubcontrol(v[i]);
        		}
        	}
        	return null;
        };

        var nx_getSubcontrol = function (v)
        {
        	_getSubcontrol(v);

        	return g_sub_control;
        };

        var nx_cleanSubcontrol = function ()
        {
        	g_sub_control = [];
        };

        var nx_getListViewEditor = function (comp)
        {
        	if (!comp) return;

        	if (comp._getCurrentCell)
        	{
        		var cell = comp._getCurrentCell();
        		return cell._editor;
        	}

        	return null;
        };

        EVENT.nx_dragdrop = nx_dragdrop;
        EVENT.nx_key_copy = nx_key_copy;
        EVENT.nx_key_cut = nx_key_cut;
        EVENT.nx_key_paste = nx_key_paste;
        EVENT.nx_key_all = nx_key_all;
        EVENT.nx_getGridEditor = nx_getGridEditor;
        EVENT.nx_getSubcontrol = nx_getSubcontrol;
        EVENT.nx_cleanSubcontrol = nx_cleanSubcontrol;
        EVENT.nx_getListViewEditor = nx_getListViewEditor;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
