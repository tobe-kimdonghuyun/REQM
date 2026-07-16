//XJS=style.wrapper.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libstyle::style.util.xjs");
        this.addIncludeScript(path,"libstyle::style.parser.xjs");
        this.addIncludeScript(path,"libevent::event.lib.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {

        this.executeIncludeScript("libstyle::style.util.xjs"); /*include "libstyle::style.util.xjs"*/
        this.executeIncludeScript("libstyle::style.parser.xjs"); /*include "libstyle::style.parser.xjs"*/
        this.executeIncludeScript("libevent::event.lib.xjs"); /*include "libevent::event.lib.xjs"*/

        if (typeof nexacro.test.Style === 'undefined')
        	nexacro.test.Style = {};

        var STYLE = nexacro.test.Style;
        var EVENT = nexacro.test.Event;

        var getComputedStyle = function(obj, prop, clientX, clientY)
        {
        	if (!obj || !prop) return "";

        	var str, control_elem;

        	if (obj._is_component)
        	{
        		if (clientX != undefined && clientY != undefined)
        			control_elem = EVENT.getElementInComp(obj, clientX, clientY, true);
        		else
        			control_elem = obj.getElement();
        	}
        	else
        	{
        		control_elem = obj;
        	}

        	if (!control_elem || !control_elem.handle)
        		return "";

        	prop = prop.toLowerCase();

        	// gridcell & gridsubcell property에서 -odd 문자열 제거
        	prop = prop.replace("-odd", "");

        	if (nexacro._Browser == "Runtime")
        	{
         		if (prop == "text-align" || prop == "vertical-align" || prop == "text-decoration"
         			|| prop == "word-wrap" || prop == "icon" || prop == "icon-position" || prop == "text-padding")
        		{
        			nexacro._flushCommand(control_elem._getWindow());

        			var child_elem;
        			if (control_elem.linkedcontrol && (control_elem.linkedcontrol instanceof nexacro.Edit ||
                                                       control_elem.linkedcontrol instanceof nexacro.MaskEdit ||
                                                       control_elem.linkedcontrol instanceof nexacro.TextArea))
        			{
        				child_elem = control_elem.linkedcontrol._input_element;
        			}
        			else if (!obj._is_simple_control) //Menuitem
        			{
        				var comp = obj.linkedcontrol;
        				if (comp)
        				{
        					child_elem = comp._cell_elem;
        				}
        			}
        			else
        			{
        				child_elem = nexacro.__findElement(control_elem.handle, "nexacontentsbox");
        				if (!child_elem)
        				{
        					child_elem = nexacro.__findElement(control_elem.handle, "nexacontentsbox nexaleftalign"); // gridcell

        				}
        			}

         			if (child_elem)
        			{
        				str = child_elem._getComputedStyleValue(prop);

        //khc추가
        //Runtime에서 icon값 못가져오는 문제
        /************************************************/
        				if(prop == "icon")
        				{
        					if(child_elem.icon)
        					{
        						str = child_elem.icon.url;
        						str = str.split("/").pop().replace("\")", "").replace("')", "");
        					}
        				}
        /************************************************/
         			}
        		}
        		else if (prop == "padding")
        		{
        			str = nx_getPadding(control_elem);
        		}
        		else if (prop == "width")
        		{
        			var left = control_elem._getComputedStyle("left");
        			var right = control_elem._getComputedStyle("right");
        			str = String(right - left);
        		}
        		else if (prop == "height")
        		{
        			var top = control_elem._getComputedStyle("top");
        			var bottom = control_elem._getComputedStyle("bottom");
        			str = String(bottom - top);
        		}
        		else
        		{
        			str = control_elem._getComputedStyle(prop);
        		}

        		str = STYLE.parseCSSValue(prop, str);

        		// background-color 는 파싱이 쉽지 않아 직접 계산값을 가지고 오게함.
        		if (prop == "background")
        		{
        			var bgColor = control_elem._getComputedStyleSubValue(prop, "background-color");
        			if (bgColor)
        			{
        				str.color = STYLE.colorNormalize(bgColor);
        			}
        		}
        		//khc추가
        		//text-decoration default값 none으로 리턴
        		if(prop == "text-decoration" && str == "")
        		{
        			str = "none";
        		}
        		//vertical-align default값 middle로 리턴
        		if(prop == "vertical-align" && str == "")
        		{
        			str = "middle";
        		}
        		//opacity default값 1로 리턴
         		if(prop == "opacity" && str == "")
         		{
         			str = "1";
         		}
        		//word-wrap default값 리턴
        		if(prop == "word-wrap" && str == "" && obj.id == "trackbar")
        		{
        			str = "none";
        		}
        		if(prop == "word-wrap" && str == "" && obj.id != "trackbar")
        		{
        			str = "english";
        		}
        	}
        	else
        	{
        		switch (prop)
        		{
        			case "background": return nx_getBackground(control_elem);
        			case "font": return nx_getFont(control_elem);
        			case "border-radius": return nx_getBorderradius(control_elem);
        			case "box-shadow": return nx_getBoxshadow(control_elem);
        			case "border": return nx_getBorder(control_elem);
        			case "word-wrap": return nx_getWordwrap(control_elem);
        			case "text-decoration": return nx_getTextdecoration(control_elem);
        			case "text-align": return nx_getTextalign(control_elem);
        			case "vertical-align": return nx_getVerticalalign(control_elem);
        			case "text-padding": return nx_getTextpadding(control_elem);
        			case "edge": return nx_getEdge(control_elem);
        			case "icon": return nx_getIcon(control_elem);
        			case "padding": return nx_getPadding(control_elem);
        			case "icon-position": return nx_getIconposition(control_elem);

        			default : str = control_elem._getComputedStyle(prop);
        		}
        	}

        	if (STYLE.isCSSColor(str))
        	{
        		str = STYLE.colorNormalize(str);
        	}

        	return str;
        }

        var getComputedStyleString = function(obj, prop, clientX, clientY)
        {
        	var v = getComputedStyle(obj, prop, clientX, clientY);
        	if (!v) return "";

        	return STYLE.stringify(v, prop);
        }

        var nx_toColorname = function (v)
        {
        	if (!v) return "";

        	v = v.toLowerCase();
        	for (var prop in nexacro._xreNamedColorList)
        	{
        		if (nexacro._xreNamedColorList[prop] && (v == nexacro._xreNamedColorList[prop].toLowerCase()))
        			return prop;
        	}
        	return v;
        }

        var nx_getBackground = function (elem)
        {
        	var css_bg = {
        		imageurl: "",
        		linearGradient: "",
        		horizontalPosition: "",
        		verticalPosition: "",
        		repeatStyle: "",
        		color: 0
        	};

        	if (!elem)	return css_bg;

        	var style = elem._getComputedStyle("background-image");
        	var idx_gradient = style.indexOf("linear-gradient");
        	if ( idx_gradient != -1)
        	{
        		css_bg.linearGradient = style;
        		css_bg.linearGradient = STYLE.lineargradientNormalize(css_bg.linearGradient);
        	}
        	else
        	{
        		if (style == "none")
        			style = "";
        		css_bg.imageurl = style;
        	}

        	if (css_bg.imageurl)
        	{
        		css_bg.imageurl = STYLE.url2filename(css_bg.imageurl);

        		style = elem._getComputedStyle("background-position-x");
        		if (nexacro._Browser == "IE")
        		{
        			css_bg.horizontalPosition = style;
        		}
        		else
        		{
        			if (style == "0%") css_bg.horizontalPosition = "left";
        			else if (style == "50%") css_bg.horizontalPosition = "center";
        			else  css_bg.horizontalPosition = "right";
        		}

        		style = elem._getComputedStyle("background-position-y");
        		if (nexacro._Browser == "IE")
        		{
        			css_bg.verticalPosition = style;
        		}
        		else
        		{
        			if (style == "0%") css_bg.verticalPosition = "top";
        			else if (style == "50%") css_bg.verticalPosition = "center";
        			else  css_bg.verticalPosition = "bottom";
        		}
        		css_bg.repeatStyle = elem._getComputedStyle("background-repeat");
        	}
        	css_bg.color = elem._getComputedStyle("background-color");
        	if (STYLE.isCSSColor(css_bg.color))
        	{
        		css_bg.color = STYLE.colorNormalize(css_bg.color);
        	}

        	return css_bg;
        };

        var nx_getBorder = function (elem)
        {
        	var css_border = {
        		topWidth: 0,
        		topStyle: "",
        		topColor: "",
        		rightWidth: 0,
        		rightStyle: "",
        		rightColor: "",
        		bottomWidth: 0,
        		bottomStyle: "",
        		bottomColor: "",
        		leftWidth: 0,
        		leftStyle: "",
        		leftColor: "",
        	};

        	if (!elem) return css_border;

        	css_border.topWidth = elem._getComputedStyle("border-top-width");
        	css_border.topStyle = elem._getComputedStyle("border-top-style");
        	if (css_border.topWidth == "0px" && css_border.topStyle == "none")
        		css_border.topColor = "";
        	else
        	{
        		css_border.topColor = elem._getComputedStyle("border-top-color");
        		if (STYLE.isCSSColor(css_border.topColor))
        		{
        			css_border.topColor = STYLE.colorNormalize(css_border.topColor);
        		}
        	}

        	css_border.rightWidth = elem._getComputedStyle("border-right-width");
        	css_border.rightStyle = elem._getComputedStyle("border-right-style");
        	if (css_border.rightWidth == "0px" && css_border.rightStyle == "none")
        		css_border.rightColor = "";
        	else
        	{
        		css_border.rightColor = elem._getComputedStyle("border-right-color");
        		if (STYLE.isCSSColor(css_border.rightColor))
        		{
        			css_border.rightColor = STYLE.colorNormalize(css_border.rightColor);
        		}
        	}

        	css_border.bottomWidth = elem._getComputedStyle("border-bottom-width");
        	css_border.bottomStyle = elem._getComputedStyle("border-bottom-style");
        	if (css_border.bottomWidth == "0px" && css_border.bottomStyle == "none")
        		css_border.bottomColor = "";
        	else
        	{
        		css_border.bottomColor = elem._getComputedStyle("border-bottom-color");
        		if (STYLE.isCSSColor(css_border.bottomColor))
        		{
        			css_border.bottomColor = STYLE.colorNormalize(css_border.bottomColor);
        		}
        	}

        	css_border.leftWidth = elem._getComputedStyle("border-left-width");
        	css_border.leftStyle = elem._getComputedStyle("border-left-style");
        	if (css_border.leftWidth == "0px" && css_border.leftStyle == "none")
        		css_border.leftColor = "";
        	else
        	{
        		css_border.leftColor = elem._getComputedStyle("border-left-color");
        		if (STYLE.isCSSColor(css_border.leftColor))
        		{
        			css_border.leftColor = STYLE.colorNormalize(css_border.leftColor);
        		}
        	}

        	return css_border;
        };

        var nx_getFont = function (elem)
        {
        	var css_font = {
        		style: "",
        		weight: 0,
        		size: 0,
        		lineHeight: "",
        		family: ""
        	};

        	if (!elem) return css_font;

        	css_font.style = elem._getComputedStyle("font-style");
        	css_font.weight = elem._getComputedStyle("font-weight");
        	css_font.size = elem._getComputedStyle("font-size");
        	var style = elem._getComputedStyle("line-height");
        	if (isNaN(parseInt(style)))
        	{
        		if (style != "normal")
        			css_font.lineHeight = style;
        	}
        	else
        		css_font.lineHeight = parseInt(style) / parseInt(css_font.size);
        	css_font.family = elem._getComputedStyle("font-family");
        	css_font.family = css_font.family.replace(/[\"]/g,"");

        	return css_font;
        };

        var nx_getBorderradius = function (elem)
        {
        	// 동일한 값이면 값 하나만 들어감. (2px 2px면 2px만 들어가 있음)
        	var css_borderradius = {
        		topleft: 0,
        		topright: 0,
        		bottomright: 0,
        		bottomleft: 0
        	};

        	css_borderradius.topleft = elem._getComputedStyle("border-top-left-radius");
        	css_borderradius.topright = elem._getComputedStyle("border-top-right-radius");
        	css_borderradius.bottomright = elem._getComputedStyle("border-bottom-right-radius");
        	css_borderradius.bottomleft = elem._getComputedStyle("border-bottom-left-radius");

        	return css_borderradius;
        };

        var nx_getBoxshadow = function (elem)
        {
        	var css_boxshadow = {
        		offset: 0,
        		blur: 0,
        		spread: 0,
        		color: ""
        	};

        	if (!elem) return css_boxshadow;

        	var style = elem._getComputedStyle("box-shadow");

        	if (nexacro._Browser == "IE" || (nexacro._Browser == "Edge" && nexacro._BrowserType == "Edge"))
        	{
        		var px_idx = style.indexOf("px");
        		px_idx = style.indexOf("px", px_idx+1);
        		css_boxshadow.offset = style.substring(0, px_idx+2);
        		var px_idx1 = style.indexOf("px", px_idx+1);
        		css_boxshadow.blur = style.substring(px_idx+3, px_idx1+2);
        		var px_idx2 = style.indexOf("px", px_idx1+1);
        		/* IE는 spred값이 기본값으로 설정되지 않아 없으면 추가하도록 수정 */
        		if(px_idx2 > -1)
        		{
        			css_boxshadow.spread = style.substring(px_idx1+3, px_idx2+2);
        		}
        		else
        		{
        			css_boxshadow.spread = "0px";
        			px_idx2 = px_idx1;
        		}

        		var color = style.substring(px_idx2+3);

        		if (STYLE.isCSSColor(color))
        		{
        			css_boxshadow.color = STYLE.colorNormalize(color);
        		}
        	}
        	else if (nexacro._Browser == "Runtime")
        	{

        	}
        	else
        	{
        		var c = style.substring(0, 3);
        		var color = "";
        		var idx = 0;
        		if (c == "rgb")
        		{
        			idx = style.indexOf(")");
        		}
        		else
        		{
        			idx = style.indexOf(" ");
        		}
        		color = style.substring(0, idx+1);

        		if (STYLE.isCSSColor(color))
        		{
        			css_boxshadow.color = STYLE.colorNormalize(color);
        		}

        		var px_idx = style.indexOf("px");
        		px_idx = style.indexOf("px", px_idx+1);
        		css_boxshadow.offset = style.substring(idx+2, px_idx+2);
        		var px_idx1 = style.indexOf("px", px_idx+1);
        		css_boxshadow.blur = style.substring(px_idx+3, px_idx1+2);
        		var px_idx2 = style.indexOf("px", px_idx1+1);
        		css_boxshadow.spread = style.substring(px_idx1+3, px_idx2+2);
        	}

        	if(style == "none")
        		css_boxshadow = "none";

        	return css_boxshadow;
        };

        var _nx_getContents = function (child)
        {

        	for (var i=0, n=child.length; i<n; i++)
        	{
        		var className = child[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1 || className.indexOf("nexainput") != -1 ||className.indexOf("nexatextarea") != -1)
        		{
        			return child[i];
        		}

        		if (className.indexOf("container") != -1 || child[i].children.length > 0)
        		{
        			return _nx_getContents(child[i].children);
        		}
        	}

        	return null;
        };

        var nx_getWordwrap = function (elem)
        {
        	var handle = null;
        	var children = elem.handle.children;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1 || className.indexOf("nexainput") != -1 ||className.indexOf("nexatextarea") != -1)
        		{
        			handle = children[i]._linked_element.handle;
        			break;
        		}
        		else if (className.indexOf("container") != -1) // textarea
        		{
        			handle = _nx_getContents(children[i].children);
        			if (handle) break;
        		}
        	}

        	if (!handle) return "none";
        	//khc수정
        	//HTML5에서 none인데 char 리턴되는 현상 수정
        	var style = window.getComputedStyle(handle, null);
            var style_sub1 = style.getPropertyValue("word-break");
        	var style_sub2 = style.getPropertyValue("white-space");

        	if (style_sub1 == "break-all")
        	{
        		if(style_sub2 == "pre")
        			return "none";

        		return "char";
        	}
        	else if (style_sub1 == "normal") return "english";
        	else return "none";
        };

        var nx_getTextdecoration = function (elem)
        {
        	var handle = null;
        	var children = elem.handle.children;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1 || className.indexOf("nexainput") != -1 ||className.indexOf("nexatextarea") != -1)
        		{
        			handle = children[i]._linked_element.handle;
        			break;
        		}
        		else if (className.indexOf("container") != -1) // textarea
        		{
        			handle = _nx_getContents(children[i].children);
        			if (handle) break;
        		}

        	}
        //khc추가
        //default 값 none 리턴되도록 수정
        /********************************************************************/
        	if (handle == null)
        	{
        		css_edge = "none";
        		return css_edge;
        	}
        /********************************************************************/

        	if (!handle) return null;

        	var style = window.getComputedStyle(handle, null);

        	if (nexacro._Browser == "IE" || nexacro._Browser == "Edge")
        	{
        		style = style.getPropertyValue("text-decoration");
        	}
        	else
        	{
        		style = style.getPropertyValue("text-decoration-line");
        	}

        	return style;
        };



        var nx_getTextalign = function (elem)
        {
        	var handle = null;
        	var children = elem.handle.children;

        //khc추가
        //default 값 none 리턴되도록 수정
        /********************************************************************/
        	if (children.length == 0)
        	{
        		var style = "center";
        		return style;
        	}
        /********************************************************************/

        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1 || className.indexOf("nexainput") != -1 ||className.indexOf("nexatextarea") != -1)
        		{
        			handle = children[i]._linked_element.handle;
        			break;
        		}
        		else if (className.indexOf("container") != -1) // textarea
        		{
        			handle = _nx_getContents(children[i].children);
        			if (handle) break;
        		}
        	}

        	if (!handle) return null;

        	var style = window.getComputedStyle(handle, null);
            style = style.getPropertyValue("text-align");

        //khc추가
        //start, end 값 left, right로 리턴되도록 수정
        /********************************************************************/
        	if(style == "start")
        	{
        		style = "left";
        	}
        	else if(style == "end")
        	{
        		style = "right";
        	}

        	return style;
        };

        var nx_getVerticalalign = function (elem)
        {
        	//var handle = elem.handle.children[0]._linked_element.handle;
        	var handle = null;
        	var children = elem.handle.children;

        //khc추가
        //default 값 none 리턴되도록 수정
        /********************************************************************/
        	if (children.length == 0)
        	{
        		var style = "middle";
        		return style;
        	}
        /********************************************************************/

        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1 || className.indexOf("nexainput") != -1 ||className.indexOf("nexatextarea") != -1)
        		{
        			handle = children[i]._linked_element.handle;
        			break;
        		}
        		else if (className.indexOf("container") != -1) // textarea
        		{
        			handle = _nx_getContents(children[i].children);
        			if (handle) break;
        		}
        	}

        	if (!handle) return null;

        	var style = window.getComputedStyle(handle, null);
            style = style.getPropertyValue("vertical-align");

        	return style;
        };

        var nx_getTextpadding = function (elem)
        {
        	var css_padding = {
        		top: 0,
        		right: 0,
        		bottom: 0,
        		left: 0
        	};
        	var handle = null;
        	var children = elem.handle.children;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1)
        		{
        			var _child = children[i].children;
        			for (var i1=0, n1=_child.length; i1<n1; i1++)
        			{
        				var className = _child[i1].className;
        				if (className && className.indexOf("nexatextitem") != -1)
        				{
        					handle = _child[i1];
        					break;
        				}
        			}
        			if (handle) break;
        		}
        		else if (className.indexOf("container") != -1)
        		{
        			handle = _nx_getContents(children[i].children);
        			var _child = handle ? handle.children : null;
        			var n1 = _child ? _child.length : 0;
        			for (var i1=0; i1<n1; i1++)
        			{
        				var className = _child[i1].className;
        				if (className && className.indexOf("nexatextitem") != -1)
        				{
        					handle = _child[i1];
        					break;
        				}
        			}

        			if (handle) break;
        		}
        	}

        	if (!handle) return css_padding;

        	var style = window.getComputedStyle(handle, null);
            css_padding.top = style.getPropertyValue("padding-top");
        	css_padding.right = style.getPropertyValue("padding-right");
        	css_padding.bottom = style.getPropertyValue("padding-bottom");
        	css_padding.left = style.getPropertyValue("padding-left");

        	return css_padding;
        };

        var nx_getIcon = function (elem)
        {
        	var handle = null;
        	var children = elem.handle.children;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1)
        		{
        			var _child = children[i].children;
        			if (_child && _child.length > 0)
        			{
        				for (var i1=0, n1=_child.length; i1<n1; i1++)
        				{
        					var className1 = _child[i1].className;
        					if (className1 && className1.indexOf("nexaiconitem") != -1)
        					{
        						handle = _child[i1];
        						break;
        					}
        				}
        			}
        			else
        			{
        				var style = window.getComputedStyle(children[i]._linked_element.handle, null);
        				style = style.getPropertyValue("background-image");
        				return style ? STYLE.url2filename(style) : "";
        			}
        		}
        	}

        	return handle ? (handle.src ? STYLE.url2filename(handle.src) : "") : null
        };

        // className:nexaedge에 들어있음
        var nx_getEdge = function (elem)
        {
        	var css_edge = {
        		image: "",
        		fixedwidth: 0,
        		fixedheight: 0
        	};

        	var handle = null;
        	var children = elem.handle.children;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (className && className.indexOf("nexaedge") != -1)
        		{
        			handle = children[i];
        			break;
        		}
        	}
        //khc추가
        //default 값 none 리턴되도록 수정
        /********************************************************************/
        	if (handle == null)
        	{
        		css_edge = "none";
        		return css_edge;
        	}
        /********************************************************************/
        	if (!handle) return css_edge;

        	var style = window.getComputedStyle(handle, null);
        	css_edge.image = style.getPropertyValue("border-image-source");
        	css_edge.image = STYLE.url2filename(css_edge.image);

        	var width = style.getPropertyValue("border-image-width");
        	var idx = width.indexOf("px");
        	css_edge.fixedheight = width.substring(0, idx+2);
        	css_edge.fixedwidth = width.substring(idx+3);

        	return css_edge;
        };

        var nx_getPadding = function (elem)
        {
        	if (nexacro._Browser != "Runtime")
        	{
        		var css_padding = {
        			top: "0px",
        			right: "0px",
        			bottom: "0px",
        			left: "0px"
        		};

        		if (!elem) return css_padding;

        		// input은 자신이 들고 있음
        		var _input_elem = elem.parent._input_element;
        		if (_input_elem)
        		{
        			var style = window.getComputedStyle(_input_elem.handle, null);
        			css_padding.left = style.getPropertyValue("padding-left");
        			css_padding.top = style.getPropertyValue("padding-top");
        			css_padding.right = style.getPropertyValue("padding-right");
        			css_padding.bottom = style.getPropertyValue("padding-bottom");
        			return css_padding;
        		}

        		var p_b_l = parseInt(elem._getComputedStyle("border-left-width"));
        		var p_b_t = parseInt(elem._getComputedStyle("border-top-width"));
        		var p_b_r = parseInt(elem._getComputedStyle("border-right-width"));
        		var p_b_b = parseInt(elem._getComputedStyle("border-bottom-width"));
        		var p_w = parseInt(elem._getComputedStyle("width"));
        		var p_h = parseInt(elem._getComputedStyle("height"));
        		var handle = null;
        		var children = elem.handle.children;
        		var container = null;
        		for (var i=0, n=children.length; i<n; i++)
        		{
        			var className = children[i].className;
        			if (!className) continue;

        			if (className.indexOf("nexacontentsbox") != -1)
        			{
        				handle = children[i]._linked_element.handle;
        				break;
        			}
        			else if (className.indexOf("container") != -1)
        			{
        				handle = children[i];
        				//handle = _nx_getContents(children[i].children);
        				if (handle) break;
        			}

        		}
        		//if (!handle) return css_padding;

        		var l=0, t=0, w=0, h=0;

        		if (handle)
        		{
        			var style = window.getComputedStyle(handle, null);
        			l = parseInt(style.getPropertyValue("left"));
        			t = parseInt(style.getPropertyValue("top"));
        			w = parseInt(style.getPropertyValue("width"));
        			h = parseInt(style.getPropertyValue("height"));

        			css_padding.left = l+"px";
        			css_padding.top = t+"px";

        			if (nexacro._Browser == "IE")
        			{
        				// w, h값이 안맞음 그래서 clientWidth, clientHeight를 이용
           				css_padding.right = (p_w-handle.clientWidth-l)+"px";
           				css_padding.bottom = (p_h-handle.clientHeight-t)+"px";
        			}
        			else
        			{
        				css_padding.right = (p_w-w-l-(p_b_l+p_b_r))+"px";
        				css_padding.bottom = (p_h-h-t-(p_b_t+p_b_b))+"px";
        			}
        		}
        		else
        		{


        			// 다른 형태가 나오면 추가해야함
        		}

        		return css_padding;
        	}
        	else // runtime padding
        	{
        		var strPadding = "0px 0px 0px 0px";

        		if (elem)
        		{
        			var child_elem = nexacro.__findElement(elem.handle, "nexasimplecontainer");
        			if (!child_elem && elem.linkedcontrol && !(elem.linkedcontrol instanceof nexacro.TextArea))
        			{
        				child_elem = nexacro.__findElement(elem.handle, "nexacontainer");
        			}
        			if (!child_elem)
        			{
        				child_elem = nexacro.__findElement(elem.handle, "nexacontentsbox");
        			}
        			if (!child_elem)
        			{
        				child_elem = nexacro.__findElement(elem.handle, "nexacontentsbox nexaleftalign");
        			}

        			if (child_elem)
        			{
         				var l = (child_elem.client_left != undefined) ? child_elem.client_left : child_elem.left;
         				var t = (child_elem.client_top != undefined) ? child_elem.client_top : child_elem.top;
         				var w = (child_elem.client_width != undefined) ? child_elem.client_width : child_elem.width;
         				var h = (child_elem.client_height != undefined) ? child_elem.client_height : child_elem.height;

        				var borderObj = STYLE.getComputedStyle(elem, "border");
        				var p_b_l = parseInt(borderObj.leftWidth);
        				var p_b_r = parseInt(borderObj.rightWidth);
        				var p_b_t = parseInt(borderObj.topWidth);
        				var p_b_b = parseInt(borderObj.bottomWidth);

        				var p_w = elem.width;
        				var p_h = elem.height;

        				var left = l + "px";
        				var top = t + "px";
        				var right = (p_w-w-l-(p_b_l+p_b_r)) + "px";
        				var bottom = (p_h-h-t-(p_b_t+p_b_b)) + "px";

        				strPadding = top + " " + right + " " + bottom + " " + left;
        			}
        			else
        			{
        				strPadding = elem._getComputedStyle("padding");
        			}
        		}

        		return strPadding;
        	}
        };

        var nx_getIconposition = function (elem)
        {
        	var handle = null;
        	var children = elem.handle.children;
        	var idx = 0;
        	for (var i=0, n=children.length; i<n; i++)
        	{
        		var className = children[i].className;
        		if (!className) continue;

        		if (className.indexOf("nexacontentsbox") != -1)
        		{
        			var _child = children[i].children;
        			if (_child && _child.length > 0)
        			{
        				for (var i1=0, n1=_child.length; i1<n1; i1++)
        				{
        					var className1 = _child[i1].className;
        					if (className1 && className1.indexOf("nexatextitem") != -1)
        					{
        						idx = i1;
        						handle = _child[i1];
        						break;
        					}
        				}
        			}
        		}
        		else if (className.indexOf("container") != -1)
        		{
        			handle = _nx_getContents(children[i].children);
        			var _child = handle ? handle.children : null;
        			var n1 = _child ? _child.length : 0;
        			for (var i1=0; i1<n1; i1++)
        			{
        				var className = _child[i1].className;
        				if (className && className.indexOf("nexatextitem") != -1)
        				{
        					handle = _child[i1];
        					break;
        				}
        			}

        			if (handle) break;
        		}
        	}


        	if (!handle) return null;

        	var style = window.getComputedStyle(handle, null);
        	style = style.getPropertyValue("display");

        	if (style == "inline-block")
        	{
        		if (idx == 1) return "left";
        		else		return "right";
        	}
        	else if (style == "block")
        	{
        		if (idx == 1) return "top";
        		else		return "bottom";
        	}

        	return null;

        };



        STYLE.getComputedStyle = getComputedStyle;
        STYLE.getComputedStyleString = getComputedStyleString;
        STYLE.nx_toColorname = nx_toColorname;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
