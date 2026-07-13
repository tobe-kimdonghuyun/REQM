//XJS=style.parser.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libstyle::style.util.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("libstyle::style.util.xjs"); /*include "libstyle::style.util.xjs"*/

        if (typeof nexacro.test.Style === 'undefined')
        	nexacro.test.Style = {};

        var STYLE = nexacro.test.Style;

        var parseCSSValue = function(prop, cssValue)
        {
        	switch (prop)
        	{
        		case "background": cssValue = _parseCSSValueBackground(cssValue);  break;
        		case "font": cssValue = _parseCSSValueFont(cssValue); break;
        		case "border-radius": cssValue = _parseCSSValueBorderRadius(cssValue); break;
        		case "box-shadow": cssValue = _parseCSSValueBoxshadow(cssValue); break;
        		case "border": cssValue = _parseCSSValueBorder(cssValue); break;
        		case "text-padding": cssValue = _parseCSSValueTextPadding(cssValue); break;
        		case "edge": cssValue = _parseCSSValueEdge(cssValue); break;
        		case "padding": cssValue = _parseCSSValuePadding(cssValue); break;
        		case "icon": cssValue = _parseCSSValueIcon(cssValue); break;
        		case "word-spacing": cssValue = _parseCSSValueWordSpacing(cssValue); break;
        		case "letter-spacing": cssValue = _parseCSSValueLetterSpacing(cssValue); break;
        		case "opacity": cssValue = _parseCSSValueOpacity(cssValue); break;
        	}

        	return cssValue;
        }

        var _parseCSSValueFont = function (cssValue)
        {
        	var css_font = {
        		style: "",
        		weight: 0,
        		size: 0,
        		lineHeight: "",
        		family: ""
        	};

        	if (typeof cssValue === 'undefined')
        	{
        		return css_font;
        	}

        	// normal [700] 11px/normal "arial","맑은 고딕"
        	var fonts = cssValue.match(/(".*"|\S+)/g);

        	if (fonts)
        	{
        		var i = 0;
        		css_font.style = fonts[i++];

        		if (fonts[i].indexOf("/") == -1)
        		{
        			css_font.weight = fonts[i++];
        			if(css_font.weight == "normal")
        				css_font.weight = 400;
        			else if (css_font.weight == "bold")
        				css_font.weight = 700;
        		}
        		else
        		{
        			css_font.weight = 400; //default weight
        		}

        		var size_height = fonts[i++].split("/");
        		css_font.size = size_height[0];

        		var style = size_height[1];
        		if (isNaN(parseInt(style)))
        		{
        			if (style != "normal")
        				css_font.lineHeight = style;
        		}
        		else
        			css_font.lineHeight = parseInt(style) / parseInt(css_font.size);

        		css_font.family = fonts[i];
        		css_font.family = css_font.family.replace(/[\"]/g,"");
        	}

        	return css_font;
        }

        var _parseCSSValueBoxshadow = function (cssValue)
        {
        	var css_boxshadow = {
        		offset: 0,
        		blur: 0,
        		spread: 0,
        		color: ""
        	};
        //khc수정
        //box-shadow default값으로 none 리턴되도록 수정
        /*************************************************************************/
        	//원본if (typeof cssValue === 'undefined')
        	if (typeof cssValue === 'undefined' || cssValue == "")
        	{
        		css_boxshadow = "none";
        		return css_boxshadow;
        	}

        	// 5px 2px 20px darkmagenta
        	var boxshadows = cssValue.split(' ');

        	css_boxshadow.offset = boxshadows[0] + " " + boxshadows[1];
        	css_boxshadow.blur = boxshadows[2];
        	css_boxshadow.spread = boxshadows[3];
        	css_boxshadow.color = boxshadows[4];

        	if (STYLE.isCSSColor(css_boxshadow.color))
        	{
        		css_boxshadow.color = STYLE.colorNormalize(css_boxshadow.color);
        	}

        	return css_boxshadow;
        }
        /*************************************************************************/

        var _parseCSSValueEdge = function (cssValue)
        {
        	var css_edge = {
        		image: "",
        		fixedwidth: 0,
        		fixedheight: 0
        	};

        	if(cssValue == "")
        	{
        		css_edge = "none";
        		return css_edge;
        	}

        	if (typeof cssValue === 'undefined')
        	{
        		return css_edge;
        	}

        	// url('file://...../btn_MDI_homeN.png') 5px,5px
        	var edges = cssValue.split(' ');

        //khc수정
        //edge 값으로 잘못된값 가져오는 문제
        /************************************************/
        if(cssValue.indexOf(")") != cssValue.length-1)
        {
        	css_edge.image = edges[edges.length-2];

        	if (edges[edges.length-1])
        	{
        		var w_h = edges[edges.length-1].split(',')
        		css_edge.fixedwidth = w_h[0];
        		css_edge.fixedheight = w_h[1];
        	}
        }
        else
        {
        	css_edge.image = edges[edges.length-1];
        }

        /************************************************/
        	css_edge.image = STYLE.url2filename(css_edge.image);

        	return css_edge;
        }

        var _parseCSSValueTextPadding = function (cssValue)
        {
        	var css_padding = {
        		top: 0,
        		right: 0,
        		bottom: 0,
        		left: 0
        	};

        	if (typeof cssValue === 'undefined')
        	{
        		return css_padding;
        	}

        	var textPaddings = cssValue.split(' ');

        	css_padding.top = textPaddings[0];
        	css_padding.right = textPaddings[1];
        	css_padding.bottom = textPaddings[2];
        	css_padding.left = textPaddings[3];

        	return css_padding;
        }

        var _parseCSSValuePadding = function (cssValue)
        {
        	var css_padding = {
        		top: 0,
        		right: 0,
        		bottom: 0,
        		left: 0
        	};

        	if (typeof cssValue === 'undefined')
        	{
        		return css_padding;
        	}

        	var paddings = cssValue.split(' ');

        	css_padding.top = paddings[0];
        	css_padding.right = paddings[1];
        	css_padding.bottom = paddings[2];
        	css_padding.left = paddings[3];

        	return css_padding;
        }

        var _parseCSSValueBorderRadius = function (cssValue)
        {
        	// 동일한 값이면 값 하나만 들어감. (2px 2px면 2px만 들어가 있음)
        	var css_borderradius = {
        		topleft: 0,
        		topright: 0,
        		bottomright: 0,
        		bottomleft: 0
        	};

        	if (typeof cssValue === 'undefined' || cssValue == "")
        	{
        		css_borderradius = "0px 0px 0px 0px";
        		return css_borderradius;
        	}

        	if (cssValue.indexOf("/") >= 0)
        	{
        		var radius = cssValue.split("/");
        		var horizontalRadius = radius[0].split(" ");
        		var verticalRadius = radius[1].split(" ");

        		if (horizontalRadius.length == 1)
        		{
        			css_borderradius.topleft = css_borderradius.topright = css_borderradius.bottomright = css_borderradius.bottomleft = horizontalRadius[0];
        		}
        		else if (horizontalRadius.length == 2)
        		{
        			css_borderradius.topleft = css_borderradius.bottomright = horizontalRadius[0];
        			css_borderradius.topright = css_borderradius.bottomleft = horizontalRadius[1];
        		}
        		else if (horizontalRadius.length == 3)
        		{
        			css_borderradius.topleft = horizontalRadius[0];
        			css_borderradius.topright = css_borderradius.bottomleft = horizontalRadius[1];
        			css_borderradius.bottomright = horizontalRadius[2];
        		}
        		else if (horizontalRadius.length == 4)
        		{
        			css_borderradius.topleft = horizontalRadius[0];
        			css_borderradius.topright = horizontalRadius[1];
        			css_borderradius.bottomright = horizontalRadius[2];
        			css_borderradius.bottomleft = horizontalRadius[3];
        		}

        		if (verticalRadius.length == 1)
        		{
        			css_borderradius.topleft += " " + verticalRadius[0];
        			css_borderradius.topright += " " + verticalRadius[0];
        			css_borderradius.bottomright += " " + verticalRadius[0];
        			css_borderradius.bottomleft += " " + verticalRadius[0];
        		}
        		else if (verticalRadius.length == 2)
        		{
        			css_borderradius.topleft += " " + verticalRadius[0];
        			css_borderradius.bottomright += " " + verticalRadius[0];
        			css_borderradius.topright += " " + verticalRadius[1];
        			css_borderradius.bottomleft += " " + verticalRadius[1];
        		}
        		else if (verticalRadius.length == 3)
        		{
        			css_borderradius.topleft += " " + verticalRadius[0];
        			css_borderradius.topright += " " + verticalRadius[1];
        			css_borderradius.bottomleft += " " + verticalRadius[1];
        			css_borderradius.bottomright += " " + verticalRadius[2];
        		}
        		else if (verticalRadius.length == 4)
        		{
        			css_borderradius.topleft += " " + verticalRadius[0];
        			css_borderradius.topright += " " + verticalRadius[1];
        			css_borderradius.bottomright += " " + verticalRadius[2];
        			css_borderradius.bottomleft += " " + verticalRadius[3];
        		}
        	}
        	else
        	{
        		var radius = cssValue.split(" ");
        		if (radius.length == 1)
        		{
        			css_borderradius.topleft = css_borderradius.topright = css_borderradius.bottomright = css_borderradius.bottomleft = radius[0];// + " " + radius[0];
        		}
        		else if (radius.length == 2)
        		{
        			css_borderradius.topleft = css_borderradius.bottomright = radius[0];// + " " + radius[0];
        			css_borderradius.topright = css_borderradius.bottomleft = radius[1];// + " " + radius[1];
        		}
        		else if (radius.length == 3)
        		{
        			css_borderradius.topleft = radius[0];// + " " + radius[0];
        			css_borderradius.topright = css_borderradius.bottomleft = radius[1];// + " " + radius[1];
        			css_borderradius.bottomright = radius[2];// + " " + radius[2];
        		}
        		else if (radius.length == 4)
        		{
        			css_borderradius.topleft = radius[0];// + " " + radius[0];
        			css_borderradius.topright = radius[1];// + " " + radius[1];
        			css_borderradius.bottomright = radius[2];// + " " + radius[2];
        			css_borderradius.bottomleft = radius[3];// + " " + radius[3];
        		}
        	}

        	return css_borderradius;
        }

        var _parseCSSValueBackground = function (cssValue)
        {
        	var css_bg = {
        		imageurl: "",
        		linearGradient: "",
        		horizontalPosition: "",
        		verticalPosition: "",
        		repeatStyle: "",
        		color: 0
        	};

        	if (!cssValue)
        	{
        		css_bg.color = "transparent";
        		return css_bg;
        	}

        	css_bg.imageurl = cssValue.match(/url\(.*?\)/g) ? cssValue.match(/url\(.*?\)/g)[0] : "";
        	css_bg.repeatStyle = cssValue.match(/n?o?-?repeat-?[xy]?/g) ? cssValue.match(/n?o?-?repeat-?[xy]?/g)[0].trim() : "";
        	css_bg.linearGradient = cssValue.match(/linear-gradient\(.*?\)/g) ? cssValue.match(/linear-gradient\(.*?\)/g)[0] : "";
        	css_bg.linearGradient = STYLE.lineargradientNormalize(css_bg.linearGradient);

        	if (css_bg.imageurl)
        	{
        		css_bg.imageurl = STYLE.url2filename(css_bg.imageurl);
        	}

        	if (css_bg.repeatStyle)
        	{
        		var index = cssValue.lastIndexOf(css_bg.repeatStyle);
        		var bgPos = cssValue.substring(index).split(" ");
        		css_bg.horizontalPosition = bgPos[1] ? bgPos[1] : "left"; // default value 삽입
        		css_bg.verticalPosition = bgPos[2] ? bgPos[2] : "top"; // default value 삽입
        	}

        	return css_bg;
        }

        var _parseCSSValueBorder = function (cssValue)
        {
        	var css_border = {
        		topWidth: "",
        		topStyle: "",
        		topColor: "",
        		rightWidth: "",
        		rightStyle: "",
        		rightColor: "",
        		bottomWidth: "",
        		bottomStyle: "",
        		bottomColor: "",
        		leftWidth: "",
        		leftStyle: "",
        		leftColor: "",
        	};

        	if (!cssValue)
        	{
        		css_border.topWidth = css_border.rightWidth = css_border.bottomWidth = css_border.leftWidth = "0px";
        		css_border.topStyle = css_border.rightStyle = css_border.bottomStyle = css_border.leftStyle = "none";
        		return css_border;
        	}

        	var borders = cssValue.split(",");

        	if (borders.length == 1)
        	{
        		var vals = borders[0].split(" ");
        		css_border.topWidth = css_border.rightWidth = css_border.bottomWidth = css_border.leftWidth = vals[0];

        		if (vals.length == 3)
        		{
        			css_border.topStyle = css_border.rightStyle = css_border.bottomStyle = css_border.leftStyle = vals[1];
        			css_border.topColor = css_border.rightColor = css_border.bottomColor = css_border.leftColor = STYLE.colorNormalize(vals[2]);
        		}
        		else if (vals.length == 2)
        		{
        			if (STYLE.isCSSColor(vals[1]))
        			{
        				css_border.topColor = css_border.rightColor = css_border.bottomColor = css_border.leftColor = STYLE.colorNormalize(vals[1]);
        			}
        			else
        			{
        				css_border.topStyle = css_border.rightStyle = css_border.bottomStyle = css_border.leftStyle = vals[1];
        			}
        		}
        	}
        	else if (borders.length == 2)
        	{
        		var vals1 = borders[0].split(" ");
        		var vals2 = borders[1].split(" ");

        		css_border.topWidth = css_border.bottomWidth = vals1[0];
        		css_border.rightWidth = css_border.leftWidth = vals2[0];

        		if (vals1.length == 3)
        		{
        			css_border.topStyle = css_border.bottomStyle = vals1[1];
        			css_border.topColor = css_border.bottomColor = STYLE.colorNormalize(vals1[2]);
        		}
        		else if (vals1.length == 2)
        		{
        			if (STYLE.isCSSColor(vals1[1]))
        			{
        				css_border.topColor = css_border.bottomColor = STYLE.colorNormalize(vals1[1]);
        			}
        			else
        			{
        				css_border.topStyle = css_border.bottomStyle = vals1[1];
        			}
        		}

        		if (vals2.length == 3)
        		{
        			css_border.rightStyle = css_border.leftStyle = vals2[1];
        			css_border.rightColor = css_border.leftColor = STYLE.colorNormalize(vals2[2]);
        		}
        		else if (vals2.length == 2)
        		{
        			if (STYLE.isCSSColor(vals2[1]))
        			{
        				css_border.rightColor = css_border.leftColor = STYLE.colorNormalize(vals2[1]);
        			}
        			else
        			{
        				css_border.rightStyle = css_border.leftStyle = vals2[1];
        			}
        		}
        	}
        	else if (borders.length == 3)
        	{
        		var vals1 = borders[0].split(" ");
        		var vals2 = borders[1].split(" ");
        		var vals3 = borders[2].split(" ");

        		css_border.topWidth = vals1[0];
        		css_border.rightWidth = css_border.leftWidth = vals2[0];
        		css_border.bottomWidth = vals3[0];

        		if (vals1.length == 3)
        		{
        			css_border.topStyle = vals1[1];
        			css_border.topColor = STYLE.colorNormalize(vals1[2]);
        		}
        		else if (vals1.length == 2)
        		{
        			if (STYLE.isCSSColor(vals1[1]))
        			{
        				css_border.topColor = STYLE.colorNormalize(vals1[1]);
        			}
        			else
        			{
        				css_border.topStyle = vals1[1];
        			}
        		}

        		if (vals2.length == 3)
        		{
        			css_border.rightStyle = css_border.leftStyle = vals2[1];
        			css_border.rightColor = css_border.leftColor = STYLE.colorNormalize(vals2[2]);
        		}
        		else if (vals2.length == 2)
        		{
        			if (STYLE.isCSSColor(vals2[1]))
        			{
        				css_border.rightColor = css_border.leftColor = STYLE.colorNormalize(vals2[1]);
        			}
        			else
        			{
        				css_border.rightStyle = css_border.leftStyle = vals2[1];
        			}
        		}

        		if (vals3.length == 3)
        		{
        			css_border.bottomStyle = vals3[1];
        			css_border.bottomColor = STYLE.colorNormalize(vals3[2]);
        		}
        		else if (vals3.length == 2)
        		{
        			if (STYLE.isCSSColor(vals3[1]))
        			{
        				css_border.bottomColor = STYLE.colorNormalize(vals3[1]);
        			}
        			else
        			{
        				css_border.bottomStyle = vals3[1];
        			}
        		}
        	}
        	else if (borders.length == 4)
        	{
        		var vals1 = borders[0].split(" ");
        		var vals2 = borders[1].split(" ");
        		var vals3 = borders[2].split(" ");
        		var vals4 = borders[3].split(" ");

        		css_border.topWidth = vals1[0];
        		css_border.rightWidth = vals2[0];
        		css_border.bottomWidth = vals3[0];
        		css_border.leftWidth = vals4[0];

        		if (vals1.length == 3)
        		{
        			css_border.topStyle = vals1[1];
        			css_border.topColor = STYLE.colorNormalize(vals1[2]);
        		}
        		else if (vals1.length == 2)
        		{
        			if (STYLE.isCSSColor(vals1[1]))
        			{
        				css_border.topColor = STYLE.colorNormalize(vals1[1]);
        			}
        			else
        			{
        				css_border.topStyle = vals1[1];
        			}
        		}

        		if (vals2.length == 3)
        		{
        			css_border.rightStyle = vals2[1];
        			css_border.rightColor = STYLE.colorNormalize(vals2[2]);
        		}
        		else if (vals2.length == 2)
        		{
        			if (STYLE.isCSSColor(vals2[1]))
        			{
        				css_border.rightColor = STYLE.colorNormalize(vals2[1]);
        			}
        			else
        			{
        				css_border.rightStyle = vals2[1];
        			}
        		}

        		if (vals3.length == 3)
        		{
        			css_border.bottomStyle = vals3[1];
        			css_border.bottomColor = STYLE.colorNormalize(vals3[2]);
        		}
        		else if (vals3.length == 2)
        		{
        			if (STYLE.isCSSColor(vals3[1]))
        			{
        				css_border.bottomColor = STYLE.colorNormalize(vals3[1]);
        			}
        			else
        			{
        				css_border.bottomStyle = vals3[1];
        			}
        		}

        		if (vals4.length == 3)
        		{
        			css_border.leftStyle = vals4[1];
        			css_border.leftColor = STYLE.colorNormalize(vals4[2]);
        		}
        		else if (vals4.length == 2)
        		{
        			if (STYLE.isCSSColor(vals4[1]))
        			{
        				css_border.leftColor = STYLE.colorNormalize(vals4[1]);
        			}
        			else
        			{
        				css_border.leftStyle = vals4[1];
        			}
        		}
        	}

        	return css_border;
        }

        var _parseCSSValueIcon = function (cssValue)
        {
        	if (typeof cssValue === 'undefined') return "";

        	var filename = STYLE.url2filename(cssValue);
        	return filename;
        }

        var _parseCSSValueWordSpacing = function (cssValue)
        {
        	if (!cssValue)
        	{
        		cssValue = "0px";
        	}
        	return cssValue;
        }

        var _parseCSSValueLetterSpacing = function (cssValue)
        {
        	if (!cssValue)
        	{
        		cssValue = "normal";
        	}
        	return cssValue;
        }

        var _parseCSSValueOpacity = function (cssValue)
        {
        	if (cssValue)
        	{
        		cssValue = parseFloat(cssValue).toFixed(1);
        	}
        	return cssValue;
        }

        STYLE.parseCSSValue = parseCSSValue;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
