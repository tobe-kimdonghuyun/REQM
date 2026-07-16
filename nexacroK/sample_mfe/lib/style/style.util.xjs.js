//XJS=style.util.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        if (typeof nexacro.test.Style === 'undefined')
        	nexacro.test.Style = {};

        var STYLE = nexacro.test.Style;

        //every string I match against are lowercase
        var HEX_PATTERN = /^#(?:[a-f0-9]{3})?(?:[a-f0-9]{3})$/;
        // css color names + initial + inherit + currentColor + transparent
        var CSS_COLOR_NAMES = nexacro._xreNamedColorList;

        var PREFIX = '^(rgb|hsl)(a?)\\s*\\(';
        var VALUE = '\\s*([-+]?\\d+%?)\\s*';
        var ALPHA = '(?:,\\s*([-+]?(?:(?:\\d+(?:\.\\d+)?)|(?:\.\\d+))\\s*))?';
        var SUFFIX = '\\)$';
        var RGB_HSL_PATTERN = new RegExp(PREFIX + VALUE + ',' + VALUE + ',' + VALUE + ALPHA + SUFFIX);

        var NUM_TYPE = 1;
        var PERCENTAGE_TYPE = 2;
        var ERROR_TYPE = NUM_TYPE & PERCENTAGE_TYPE;

        var isCSSColor = function(str) {
        	function getColorType(token) {
        		return token.indexOf('%') !== -1 ? PERCENTAGE_TYPE : NUM_TYPE;
        	}

        	if(!str || typeof str !== 'string') {
        		return false;
        	}

        	var color = str.replace(/^\s+|\s+$/g, '').toLocaleLowerCase();

        	// named colors or hex code
        	if(CSS_COLOR_NAMES[color] || HEX_PATTERN.test(color)) {
        		return true;
        	}

        	var result = color.match(RGB_HSL_PATTERN);
        	if(result) {
        		var flavor = result[1];
        		var alpha = result[2];
        		var rh = result[3];
        		var gs = result[4];
        		var bl = result[5];
        		var a = result[6];

        		// alpha test
        		if((alpha === 'a' && !a) || (a && alpha === '')) {
        			return false;
        		}

        		// hsl
        		if(flavor === 'hsl') {
        			if(getColorType(rh) !== NUM_TYPE) {
        				return false;
        			}
        			return (getColorType(gs) & getColorType(bl)) === PERCENTAGE_TYPE;
        		}

        		// rgb
        		return (getColorType(rh) & getColorType(gs) & getColorType(bl)) !== ERROR_TYPE;
        	}

        	return false;
        }

        var isRgb = function(str)
        {
        	var rxValidRgb = /([R][G][B][A]?[(]\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])(\s*,\s*((0\.[0-9]{1})|(1\.0)|(1)))?[)])/i;
        	return rxValidRgb.test(str);
        }
        var rgb2hex = function(rgb)
        {
        	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

        	return (rgb && rgb.length === 4) ? "#" +
        	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        	("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
        }

        var isRgba = function(str)
        {
        	return /^rgba/.test(str);
        }
        var rgba2hex = function(rgba)
        {
        	var a, isPercent,
        	rgb = rgba.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        	alpha = (rgb && rgb[4] || "").trim(),
        	hex = rgb ?
        	(rgb[1] | 1 << 8).toString(16).slice(1) +
        	(rgb[2] | 1 << 8).toString(16).slice(1) +
        	(rgb[3] | 1 << 8).toString(16).slice(1) : rgba;

        	if (alpha !== "") {
        		a = alpha;
        	} else {
        		a = 01;
        	}
        	// multiply before convert to HEX
        	a = ((a * 255) | 1 << 8).toString(16).slice(1)
        	hex = hex + a;

        	return "#" + hex;
        }

        var isColorName = function(str)
        {
        	return CSS_COLOR_NAMES.hasOwnProperty(str);
        }
        var colorname2hex = function(nameValue)
        {
        	return CSS_COLOR_NAMES[nameValue];
        }

        var isHsl = function(str)
        {
        	return /^hsl/.test(str);
        }
        var hsl2hex = function(hslValue)
        {
        	var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
        	var h = parseInt(hsl[1]) / 360;
        	var s = parseInt(hsl[2]) / 100;
        	var l = parseInt(hsl[3]) / 100;

        	function hue2rgb(p, q, t)
        	{
        		if (t < 0) t += 1;
        		if (t > 1) t -= 1;
        		if (t < 1 / 6) return p + (q - p) * 6 * t;
        		if (t < 1 / 2) return q;
        		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        		return p;
        	}
        	var r, g, b;
        	if (s == 0)
        	{
        		r = g = b = l;
        	}
        	else
        	{
        		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        		var p = 2 * l - q;
        		r = hue2rgb(p, q, h + 1 / 3);
        		g = hue2rgb(p, q, h);
        		b = hue2rgb(p, q, h - 1 / 3);
        	}
        	var rgb = 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
        	return rgb2hex(rgb);
        }

        var colorNormalize = function(value)
        {
        	var hexColor = value;

        	if (isRgba(value))
        	{
        		hexColor = STYLE.rgba2hex(value);
        	}
        	else if (isRgb(value))
        	{
        		hexColor = STYLE.rgb2hex(value);
        	}
        	else if (isColorName(value))
        	{
        		hexColor = STYLE.colorname2hex(value);
        	}
        	else if (isHsl(value))
        	{
        		hexColor = STYLE.hsl2hex(value);
        	}

        	if (hexColor == "#00000000")
        	{
        		hexColor = "transparent";
        	}

        	hexColor = hexColor.toLowerCase();

        	return hexColor;
        }

        // from format: linear-gradient(to left bottom, rgb(0, 0, 0) 74%, rgb(255, 255, 255) 100%)
        // from format: linear-gradient(to left bottom, hsl(0, 0%, 0%) 74%, hsl(0, 0%, 100%) 100%)
        // to format  : linear-gradient(to left bottom,#000000 74%,#ffffff 100%)
        var lineargradientNormalize = function(value)
        {
        	var regex = / ?rgb\(.*?\)| ?rgba\(.*?\)| ?hsl\(.*?\)/g;

        	var colors = value.match(regex);
        	for (var i in colors)
        	{
         		value = value.replace(colors[i], STYLE.colorNormalize(colors[i].trim()));
         	}

        	return value;
        }

        var stringify = function(obj, prop)
        {
        	if (typeof obj === "string") return obj;

        	var str = "";
        	if (prop == "border")
        	{
        		// 1,2,3,4회 입력에서 각각 0px none 인 경우 color값은 제외한다
        		if (obj.topWidth || obj.topStyle || obj.topColor)
        		{
        			str = obj.topWidth + " " + obj.topStyle;
        			if (obj.topWidth != "0px" && obj.topStyle != "none")
        			{
        				str += " " + obj.topColor;
        			}
        		}

        		if ((obj.topWidth != obj.bottomWidth || obj.topStyle != obj.bottomStyle || obj.topColor != obj.bottomColor) &&
        			(obj.rightWidth != obj.leftWidth || obj.rightStyle != obj.leftStyle || obj.rightColor != obj.leftColor))
        		{
        			str += ", " + obj.rightWidth + " " + obj.rightStyle;
        			if (obj.rightWidth != "0px" && obj.rightStyle != "none")
        			{
        				str += " " + obj.rightColor;
        			}
        			str += ", " + obj.bottomWidth + " " + obj.bottomStyle;
        			if (obj.bottomWidth != "0px" && obj.bottomStyle != "none")
        			{
        				str += " " + obj.bottomColor;
        			}
        			str += ", " + obj.leftWidth + " " + obj.leftStyle;
        			if (obj.leftWidth != "0px" && obj.leftStyle != "none")
        			{
        				str += " " + obj.leftColor;
        			}
        		}
        		else if ((obj.topWidth != obj.bottomWidth || obj.topStyle != obj.bottomStyle || obj.topColor != obj.bottomColor) &&
        			     obj.rightWidth == obj.leftWidth && obj.rightStyle == obj.leftStyle && obj.rightColor == obj.leftColor)
        		{
        			str += ", " + obj.rightWidth + " " + obj.rightStyle;
        			if (obj.rightWidth != "0px" && obj.rightStyle != "none")
        			{
        				str += " " + obj.rightColor;
        			}
        			str += ", " + obj.bottomWidth + " " + obj.bottomStyle;
        			if (obj.bottomWidth != "0px" && obj.bottomStyle != "none")
        			{
        				str += " " + obj.bottomColor;
        			}
        		}
        		else if (obj.topWidth == obj.bottomWidth && obj.topStyle == obj.bottomStyle && obj.topColor == obj.bottomColor &&
        				 obj.rightWidth == obj.leftWidth && obj.rightStyle == obj.leftStyle && obj.rightColor == obj.leftColor &&
        				 (obj.bottomWidth != obj.rightWidth || obj.bottomStyle != obj.rightStyle || obj.bottomColor != obj.rightColor))
        		{
        			str += ", ";
        			str += obj.rightWidth + " " + obj.rightStyle;
        			if (obj.rightWidth != "0px" && obj.rightStyle != "none")
        			{
        				str += " " + obj.rightColor;
        			}
        		}

        		str = str.replace(/ ,/gi, ",").trim();
        	}
        	else if (prop == "background")
        	{
        		if (obj.imageurl)
        		{
        			str += obj.imageurl + " " + obj.repeatStyle + " " + obj.horizontalPosition + " " + obj.verticalPosition;
        		}
        		else if (obj.linearGradient)
        		{
        			str += obj.linearGradient;
        		}
        		if (obj.color.length > 0)
        		{
        			str += " " + obj.color;
        		}

        		str = str.replace(/\s+/g, " ").trim();
        	}
        // 	else if (prop == "padding")
        // 	{
        // 		if (obj.top != obj.bottom && obj.right != obj.left)
        // 		{
        // 			str = obj.top + " " + obj.right + " " + obj.bottom + " " + obj.left; // 4회 입력
        // 		}
        // 		else if (obj.top != obj.bottom && obj.right == obj.left)
        // 		{
        // 			str = obj.top + " " + obj.right + " " + obj.bottom; // 3회 입력
        // 		}
        // 		else if (obj.top == obj.bottom && obj.right == obj.left && obj.bottom != obj.right)
        // 		{
        // 			str = obj.top + " " + obj.right; // 2회 입력
        // 		}
        // 		else
        // 		{
        // 			str = obj.top; // 1회 입력
        // 		}
        // 	}
        	else
        	{
        		for (var i in obj)
        		{
        			if (obj[i])
        			{
        				if (str)
        					str = str + " " + obj[i];
        				else
        					str = str + obj[i];
        			}
        		}
        	}

        	return str;
        }

        var url2filename = function(url)
        {
            var filename = url.split("/").pop().replace("\")", "").replace("')", "");

        	return filename;
        }


        // Color 관련 Util
        STYLE.isCSSColor = isCSSColor;

        STYLE.isRgb = isRgb;
        STYLE.rgb2hex = rgb2hex;

        STYLE.isRgba = isRgba;
        STYLE.rgba2hex = rgba2hex;

        STYLE.isColorName = isColorName;
        STYLE.colorname2hex = colorname2hex;

        STYLE.isHsl = isHsl;
        STYLE.hsl2hex = hsl2hex;

        STYLE.colorNormalize = colorNormalize;
        STYLE.lineargradientNormalize = lineargradientNormalize;

        // css style 객체를 문자열로 변환
        STYLE.stringify = stringify;

        STYLE.url2filename = url2filename;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
