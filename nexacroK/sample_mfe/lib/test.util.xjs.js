//XJS=test.util.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        if (typeof nexacro.test === 'undefined')
        	nexacro.test = {};

        var TEST = nexacro.test;

        if (typeof TEST.installExtension === 'undefined')
        {
        	if (nexacro._Browser == "Runtime")
        	{
        		TEST.installExtension = function (name)
        		{
        			return module = nexacro;
        		};

        		TEST.uninstallExtension = function (name)
        		{
        			nexacro._clearExtensionModule(name);
        		};
        	}
        	else
        	{
        		TEST.installExtension = function (name) { };
        		TEST.uninstallExtension = function (name) { };
        	}
        }

        if (typeof setTimeout === 'undefined')
        {
        	//////////////////////////////////////////////////////////////////////////////////////////////
        	// timer utils
        	var Timer = function (cbFunc, cbArgs)
        	{
        		this.id = undefined;
        		this.cbFunc = cbFunc;
        		this.cbArgs = cbArgs;
        	};

        	var onTimeoutCallback = function (timerObj)
        	{
        		return function ()
        		{
        			if (!timerObj || timerObj.id == undefined)
        				return;

        			nexacro._clearSystemTimer(null, timerObj.id);
        			if (timerObj.cbFunc)
        			{
        				timerObj.cbFunc.apply(null, timerObj.cbArgs);
        			}
        		};
        	};

        	setTimeout = function(callbackFunc, milliseconds)
        	{
        		if (typeof callbackFunc != "function")
        			return;

        		milliseconds |= 0;
        		var callbackArgs = Array.prototype.slice.call(arguments, 2);

        		var timerObj = new Timer(callbackFunc, callbackArgs);
        		var sysCallbackFunc = onTimeoutCallback(timerObj);

        		var timerId = nexacro._setSystemTimer(null, sysCallbackFunc, milliseconds);
        		timerObj.id = timerId;

        		return timerId;
        	};

        	clearTimeout = function(timerid)
        	{
        		nexacro._clearSystemTimer(null, timerid);
        	};

        	var onIntervalCallback = function (timerObj)
        	{
        		return function ()
        		{
        			if (!timerObj || timerObj.id == undefined)
        				return;

        			if (timerObj.cbFunc)
        			{
        				timerObj.cbFunc.apply(null, timerObj.cbArgs);
        			}
        		};
        	};
        	setInterval = function(callbackFunc, milliseconds)
        	{
        		if (typeof callbackFunc != "function")
        			return;

        		milliseconds |= 0;
        		var callbackArgs = Array.prototype.slice.call(arguments, 2);

        		var timerObj = new Timer(callbackFunc, callbackArgs);
        		var sysCallbackFunc = onIntervalCallback(timerObj);

        		var timerId = nexacro._setSystemTimer(null, sysCallbackFunc, milliseconds);
        		timerObj.id = timerId;

        		return timerId;
        	};

        	clearInterval = function(timerid)
        	{
        		nexacro._clearSystemTimer(null, timerid);
        	};
        }

        //////////////////////////////////////////////////////////////////////////////////////////////
        // polyfill
        if (!Object.keys) {
        	Object.keys = (function () {
        		var hasOwnProperty = Object.prototype.hasOwnProperty,
        			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        			dontEnums = [
        				'toString',
        				'toLocaleString',
        				'valueOf',
        				'hasOwnProperty',
        				'isPrototypeOf',
        				'propertyIsEnumerable',
        				'constructor'
        			],
        			dontEnumsLength = dontEnums.length;

        		return function (obj) {
        			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null)
        				throw new TypeError('Object.keys called on non-object');

        			var result = [];

        			for (var prop in obj) {
        				if (hasOwnProperty.call(obj, prop))
        					result.push(prop);
        			}

        			if (hasDontEnumBug) {
        				for (var i=0; i < dontEnumsLength; i++) {
        					if (hasOwnProperty.call(obj, dontEnums[i]))
        						result.push(dontEnums[i]);
        				}
        			}
        			return result;
        		}
        	})();
        };

        if (!Array.prototype.forEach)
        {
        	Array.prototype.forEach = function forEach (callback, thisArg)
        	{
        		if (typeof callback !== 'function')
        		{
        			throw new TypeError(callback + ' is not a function');
        		}

        		var array = this;
        		thisArg = thisArg || this;

        		for (var i = 0, l = array.length; i !== l; ++i)
        		{
        			callback.call(thisArg, array[i], i, array);
        		}
        	};
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
