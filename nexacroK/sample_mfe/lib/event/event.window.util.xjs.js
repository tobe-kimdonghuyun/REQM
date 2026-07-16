//XJS=event.window.util.xjs
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

        if (typeof EVENT.dispatchWindowEvent !== 'undefined')
        	return;

        if (nexacro._Browser == "Runtime")
        {
        	var createSysWindowEvent = function (win, event_name, options)
        	{
        		if (!win || !win.handle)
        			return null;

        		var event_type = EVENT.getEventTypeByName(event_name),
        			  evt = options || {};

        		if (event_type != "WindowEvent")
        			return null;

        		evt['toArguments'] = function () {
        			return (this.params || []);
        		};
        		return evt;
        	};

        	var dispatchWindowEvent = function (win, name, options)
        	{
        		if (!win || !win.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name,
        			  opt = {
        				params: []
        			  };

        		if (options)
        		{
        			if (event_name == 'syscommand')
        			{
        				opt.params.push(null);
        				if ('state' in options) opt.params.push(options['state']); // "restore" | "minimize" | "maximize"
        			}
        			else if (event_name == 'resize')
        			{
        				 opt.params.push(options['width'] || win.getWidth());
        				 opt.params.push(options['height'] || win.getHeight());
        				 if ('reason' in options) opt.params.push(options['reason']); // 0: restore, 1: minimize, 2: maximize
        			}
        			else if (event_name == 'move')
        			{
        				 opt.params.push(options['left'] || win.getLeft());
        				 opt.params.push(options['top'] || win.getTop());
        			}
        			else if (event_name == 'duplicateexcution')
        			{
        				 if ('globalvalue' in options) opt.params.push(options['globalvalue']);
        			}
        			else if (event_name == 'orientationchange')
        			{
        				 if ('orientation' in options) opt.params.push(options['orientation']);
        			}
        		}


        		var evt = createSysWindowEvent(win, event_type, opt);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(win, event_name, evt);
        		}
        		return evt;
        	};
        }
        else
        {
        	//////////////////////////////////////////////////////////////////////////
        	// UI event
        	var _isSupportMessageEventConstructor = (function () {  try { var evt = new MessageEvent('message');  } catch (ex) { return false; } return true; })();;
        	var _isSupportUIEventConstructor = (function () {  try { var evt = new UIEvent('unload');  } catch (ex) { return false; } return true; })();;
        	var createSysWindowEvent = function (win, event_name, options)
        	{
        		if (!win || !win.handle)
        			return null;

        		var evt,
        			options = options || {},
        			event_type = EVENT.getEventTypeByName(event_name),
        			cur_win = win.handle,
        			initDic = {
        				bubbles: false,
        				cancelable: false,
        				view: cur_win,
        				detail: 0
        			},
        			initOpt = initDic;

        		if (event_type != 'UIEvent' && event_type != 'MessageEvent')
        			return null;

        		if (event_type == 'MessageEvent' && _isSupportMessageEventConstructor)
        		{
        			evt = new MessageEvent(event_name, options);
        		}
        		else if (event_type == 'UIEvent')
        		{
        			if (_isSupportUIEventConstructor)
        			{
        				for (var key in options)
        				{
        					if (options.hasOwnProperty(key))
        						initDic[key] = options[key];
        				}

        				evt = new UIEvent(event_name, initDic);
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

        				for (var key in options)
        				{
        					if (options.hasOwnProperty(key))
        						evt[key] = options[key];
        				}
        			}
        			else if (cur_doc.createEventObject)
        			{
        				evt = cur_doc.createEventObject();

        				for (var key in options)
        				{
        					if (options.hasOwnProperty(key))
        						evt[key] = options[key];
        				}
        			}
        		}

        		return evt;
        	};

        	var dispatchWindowEvent = function (win, name, options)
        	{
        		if (!win || !win.handle)
        			return;

        		var sysEventInfo = EVENT.getSysEventInfo(name);
        		if (!sysEventInfo) return;

        		var event_name = sysEventInfo.name,
        			  event_type = sysEventInfo.type || event_name;

        		var evt = createSysWindowEvent(win, event_type, options);
        		if (evt)
        		{
        			EVENT.dispatchSysEvent(win, event_name, evt);
        		}
        		return evt;
        	};
        }

        EVENT.dispatchWindowEvent = dispatchWindowEvent;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
