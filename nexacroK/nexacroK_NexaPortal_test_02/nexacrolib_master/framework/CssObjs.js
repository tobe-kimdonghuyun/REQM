//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.1.html	
//
//==============================================================================

//==============================================================================
// nexacro Style Object Data
//==============================================================================

if (!nexacro._bInitCssObjects)
{
	"use strict";

	var _process = true;
	nexacro._bInitCssObjects = true;

	//==============================================================================
	// nexacro New Style Data Object
	//==============================================================================
	nexacro._CSSValueObject = function (v)
	{
		var val = v.trim();
		if (val)
		{
			this.value = val;
			var pos = val.search(/px|pt|cm|em|%/i);
			if (pos < 0)
				return null;
			this._unit = val.substr(pos).toLowerCase();
			var size = (+val.substring(0, pos));
			if (size != size)
				return null;
			this._sysvalue = size;
		}
	};

	var _pCSSValueObject = nexacro._createPrototype(nexacro.Object, nexacro._CSSValueObject);
	nexacro._CSSValueObject.prototype = _pCSSValueObject;
	_pCSSValueObject._type_name = "CSSValueObject";

	_pCSSValueObject.value = "";
	_pCSSValueObject._value = 0;
	_pCSSValueObject._unit = "";

	// override for value
	_pCSSValueObject.valueOf = function ()
	{
		return this.value;
	};
	_pCSSValueObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._CSSValueObject_caches = {};
	nexacro.CSSValueObject = function (val)
	{
		var obj = nexacro._CSSValueObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._CSSValueObject(val);
		nexacro._CSSValueObject_caches[val] = obj;

		return obj;
	};


	//==============================================================================
	nexacro._ColorObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = nexacro._getSupportedWebColor(val);
			}
		}
	};

	var _pColorObject = nexacro._createPrototype(nexacro.Object, nexacro._ColorObject);
	nexacro._ColorObject.prototype = _pColorObject;
	_pColorObject._type_name = "ColorObject";

	_pColorObject.value = "";
	_pColorObject._sysvalue = "";

	// override for value
	_pColorObject.valueOf = function ()
	{
		return this.value;
	};
	_pColorObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._ColorObject_caches = {};
	nexacro.ColorObject = function (val)
	{
		var obj = nexacro._ColorObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._ColorObject(val);
		nexacro._ColorObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._FontObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;

				var parts = val.split(/\s+/);
				var cnt = parts.length;

				if (cnt > 0)
				{
					var pos = -1;
					var part;
					while (parts && (part = parts.shift()))
					{
						pos = part.search(/px|pt|cm|rem|em|%/i);
						if (pos > -1)
							break;
					}
					if (pos < 0)
						return null;

					var lpos = part.indexOf("/");
					var unit_len = lpos < 0 ? part.length : lpos;
					var unit = part.substring(pos, unit_len);

					this._unit = unit.toLowerCase();

					var spos = part.lastIndexOf(' ', pos); // size pos
					var size = (+part.substring(spos + 1, pos));
					if (size != size) // isNaN
						return null;

					this._size = size;

					pos = lpos + 1;
					if (pos > 0)
					{
						var line = part.substring(pos, part.length);
						lpos = line.search(/px|pt|cm|rem|em|%/i);
						if (lpos < 0)
							return null;

						var height = +line.substring(0, lpos);
						if (height != height)
							return null;

						this._lineheight = height;
						this._lineunit = line.substring(lpos, line.length);
					}
				}
			}
		}
	};

	var _pFontObject = nexacro._createPrototype(nexacro.Object, nexacro._FontObject);
	nexacro._FontObject.prototype = _pFontObject;
	_pFontObject._type_name = "FontObject";

	_pFontObject.value = "";
	_pFontObject._sysvalue = "";
	_pFontObject._size = "";
	_pFontObject._unit = "";
	_pFontObject._lineheight = "";
	_pFontObject._lineunit = "";

	// override for value
	_pFontObject.valueOf = function ()
	{
		return this.value;
	};
	_pFontObject.toString = function ()
	{
		return this.value;
	};
	_pFontObject._parseInfo = function (val)
	{
		//parse font
		// support web spec (bold italic underline strikeout antialias 9px Verdana,'times New Roman',Sans-serif) & nexacro spec (Verdana,9,bold italic underline strikeout antialias)
		var tempval = val;
		var _index = tempval.indexOf('"');
		if (_index >= 0)
		{
			var parse_val = "";
			for (var i = 0; i < tempval.length; i++)
			{
				var c = tempval.charAt(i);
				if (i > _index && c == " ")
					c = "#";

				parse_val += c;
			}

			tempval = parse_val;
		}

		var parts = tempval.split(/\s+/);
		var part;
		var faces = [], size = 0;
		var webfont_style = true;
		var types = [];
		var i, n;

		for (i = 0, n = parts.length; i < n && webfont_style; i++)
		{
			part = parts[i];
			switch (part)
			{
				case "bold":
					this._bold = true;
					types.push(part);
					break;
				case "italic":
					this._italic = true;
					types.push(part);
					break;
				case "underline":
					this._underline = true;
					types.push(part);
					break;
				case "strikeout":
					this._strikeout = true;
					types.push(part);
					break;
				case "antialias":
					this._antialias = true;
					types.push(part);
					break;
				case "normal":
					this._normal = true;
					types.push(part);
					break;

				default:
					{
						var intpart = parseInt(part);
						if (intpart != intpart)
						{
							if (size == 0)
							{
								webfont_style = false;
							}
							else
							{
								part = part.replace(/#/gi, " ");
								faces.push(part);
							}
						}
						else
						{
							var pos;
							if ((pos = part.indexOf("/")) >= 0)
							{
								pos++;
								var line = part.substring(pos, part.length);
								var lpos = line.search(/px|pt|cm|rem|em|%/i);
								if (lpos >= 0)
									this.lineheight = parseInt(line);
							}
							size = intpart;
						}
					}
					break;
			}
		}

		if (webfont_style)
		{
			this.face = (faces.length > 0) ? faces.join(" ") : this._default_face;
			this.size = (size > 0) ? size : this._default_size;
		}
		else
		{
			//parse font
			parts = val.split(',');
			if (parts.length >= 2)
			{
				this.face = parts[0];
				types = [];

				this.size = (parseInt(parts[1]) | 0);
				if (parts[2])
				{
					var parts0 = parts[2].split(/\s+/);

					for (i = 0, n = parts0.length; i < n; i++)
					{
						part = parts0[i];
						switch (part)
						{
							case "bold":
								this._bold = true;
								types.push(part);
								break;
							case "italic":
								this._italic = true;
								types.push(part);
								break;
							case "underline":
								this._underline = true;
								types.push(part);
								break;
							case "strikeout":
								this._strikeout = true;
								types.push(part);
								break;
							case "antialias":
								this._antialias = true;
								types.push(part);
								break;
							case "normal":
								this._normal = true;
								types.push(part);
								break;
						}
					}
				}
			}
		}
		this.type = types.join(",");
	};

	// for object cache
	nexacro._FontObject_caches = {};
	nexacro.FontObject = function (val)
	{
		var obj = nexacro._FontObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._FontObject(val);
		nexacro._FontObject_caches[val] = obj;

		return obj;
	};

	//==============================================================================
	nexacro._TextDecorationObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
			}
		}
	};

	var _pTextDecorationObject = nexacro._createPrototype(nexacro.Object, nexacro._TextDecorationObject);
	nexacro._TextDecorationObject.prototype = _pTextDecorationObject;
	_pTextDecorationObject._type_name = "TextDecorationObject";

	_pTextDecorationObject.value = "";

	// override for value
	_pTextDecorationObject.valueOf = function ()
	{
		return this.value;
	};
	_pTextDecorationObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._TextDecorationObject_caches = {};
	nexacro.TextDecorationObject = function (val)
	{
		var obj = nexacro._TextDecorationObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._TextDecorationObject(val);
		nexacro._TextDecorationObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._BorderLineObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val && val.indexOf("none") < 0 && val.indexOf("hidden") < 0)
			{
				this.style = "solid";
				this.value = val;
				this._width = 0;

				var parts = [];
				var cur_idx = 0;
				var next_idx = -1;

				var color_start_idx = -1;
				var color_end_idx = -1;

				var part;

				while (true)
				{
					color_start_idx = this._findColor(val, cur_idx);
					next_idx = val.indexOf(" ", cur_idx);

					if (color_start_idx > 0 && color_start_idx < next_idx)
					{
						color_end_idx = val.indexOf(")", color_start_idx);
						next_idx = val.indexOf(" ", color_end_idx);
					}

					if (next_idx > 0)
					{
						part = val.slice(cur_idx, next_idx);
						cur_idx = next_idx + 1;
					}
					else
					{
						part = val.slice(cur_idx);
						cur_idx = val.length + 1;
					}

					parts[parts.length] = part.trim();

					if (cur_idx >= val.length)
						break;

				}


				//var parts = val.split(/\s+/);
				var cnt = parts.length;
				for (var i = 0; i < cnt; i++)
				{
					var str = parts[i];

					switch (str)
					{
						case "thin":
							if (this.style != "none")
							{
								this.width = str;
								this._width = 1;
							}
							break;
						case "medium":
							if (this.style != "none")
							{
								this.width = str;
								this._width = 3;
							}
							break;
						case "thick":
							if (this.style != "none")
							{
								this.width = str;
								this._width = 5;
							}
							break;

						case "solid":
						case "double":
						case "dotted":
						case "dashed":

						case "groove":
						case "ridge":
						case "inset":
						case "outset":
						case "hidden":
							this.style = str;
							break;

						default:
							if (str.charAt(0) >= '0' && str.charAt(0) <= '9')
							{
								var wv = nexacro._isEmRemUnit(str) ? parseFloat(str) : parseInt(str);
								if (wv == 0)
								{
									this.value = "none";
									this.width = "";
									this._width = 0;
									this.style = "none";
									this.color = "";
									return;
								}
								this.width = wv + "px";
								this._width = wv;
							}
							else
							{
								if (!this.color)
									this.color = nexacro.ColorObject(str);
							}
							break;
					}
				}
			}
			// em/rem 단위 포함 여부 확인
			this._hasRelative = /\d(rem|em)/i.test(v);
		}
	};

	var _pBorderLineObject = nexacro._createPrototype(nexacro.Object, nexacro._BorderLineObject);
	nexacro._BorderLineObject.prototype = _pBorderLineObject;
	_pBorderLineObject._type_name = "BorderLineObject";

	_pBorderLineObject.value = "none";
	_pBorderLineObject.width = "";
	_pBorderLineObject._width = 0;
	_pBorderLineObject.style = "none";
	_pBorderLineObject.color = "";
	_pBorderLineObject._hasRelative = false;

	// override for value
	_pBorderLineObject.valueOf = function ()
	{
		return this.value;
	};
	_pBorderLineObject.toString = function ()
	{
		return this.value;
	};

	_pBorderLineObject._findColor = function (str, idx)
	{
		if (!str)
			return -1;

		str = str.toLowerCase();

		var values = ["rgb", "rgba", "hsl", "hsla"];
		var len = values.length;
		var n = -1;
		for (var i = 0; i < len; i++)
		{
			n = str.indexOf(values[i], idx);
			if (n >= 0)
			{
				return n;
			}
		}

		return -1;
	};

	// for object cache
	nexacro._BorderLineObject_caches = {};
	nexacro.BorderLineObject = function (val)
	{
		var obj = nexacro._BorderLineObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._BorderLineObject(val);
		nexacro._BorderLineObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._BorderRadiusObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				var arr1 = val.split('/');
				var arr2;
				if (arr1.length == 1)
				{
					arr2 = arr1[0].split(' ');
					switch (arr2.length)
					{
						case 4:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[2];
							this.bottomLeftWidth = arr2[3];
							break;
						case 3:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[2];
							this.bottomLeftWidth = arr2[1];
							break;
						case 2:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[0];
							this.bottomLeftWidth = arr2[1];
							break;
						default:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[0];
							this.bottomRightWidth = arr2[0];
							this.bottomLeftWidth = arr2[0];
							break;
					}
				}
				else if (arr1.length == 2)
				{
					arr2 = arr1[0].trim().split(' ');
					switch (arr2.length)
					{
						case 4:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[2];
							this.bottomLeftWidth = arr2[3];
							break;
						case 3:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[2];
							this.bottomLeftWidth = arr2[1];
							break;
						case 2:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[1];
							this.bottomRightWidth = arr2[0];
							this.bottomLeftWidth = arr2[1];
							break;
						default:
							this.topLeftWidth = arr2[0];
							this.topRightWidth = arr2[0];
							this.bottomRightWidth = arr2[0];
							this.bottomLeftWidth = arr2[0];
							break;
					}

					arr2 = arr1[1].trim().split(' ');
					switch (arr2.length)
					{
						case 4:
							this.topLeftHeight = arr2[0];
							this.topRightHeight = arr2[1];
							this.bottomRightHeight = arr2[2];
							this.bottomLeftHeight = arr2[3];
							break;
						case 3:
							this.topLeftHeight = arr2[0];
							this.topRightHeight = arr2[1];
							this.bottomRightHeight = arr2[2];
							this.bottomLeftHeight = arr2[1];
							break;
						case 2:
							this.topLeftHeight = arr2[0];
							this.topRightHeight = arr2[1];
							this.bottomRightHeight = arr2[0];
							this.bottomLeftHeight = arr2[1];
							break;
						default:
							this.topLeftHeight = arr2[0];
							this.topRightHeight = arr2[0];
							this.bottomRightHeight = arr2[0];
							this.bottomLeftHeight = arr2[0];
							break;
					}
				}
			}
		}
	};

	var _pBorderRadiusObject = nexacro._createPrototype(nexacro.Object, nexacro._BorderRadiusObject);
	nexacro._BorderRadiusObject.prototype = _pBorderRadiusObject;
	_pBorderRadiusObject._type_name = "BorderRadiusObject";

	_pBorderRadiusObject.value = "";
	_pBorderRadiusObject.topLeftWidth = null;
	_pBorderRadiusObject.topRightWidth = null;
	_pBorderRadiusObject.bottomRightWidth = null;
	_pBorderRadiusObject.bottomLeftWidth = null;
	_pBorderRadiusObject.topLeftHeight = null;
	_pBorderRadiusObject.topRightHeight = null;
	_pBorderRadiusObject.bottomRightHeight = null;
	_pBorderRadiusObject.bottomLeftHeight = null;

	// override for value
	_pBorderRadiusObject.valueOf = function ()
	{
		return this.value;
	};
	_pBorderRadiusObject.toString = function ()
	{
		return this.value;
	};
	_pBorderRadiusObject._getTopLeft = function ()
	{
		return this.topLeftHeight ? this.topLeftWidth + " " + this.topLeftHeight : this.topLeftWidth;
	};
	_pBorderRadiusObject._getTopRight = function ()
	{
		return this.topRightHeight ? this.topRightWidth + " " + this.topRightHeight : this.topRightWidth;
	};
	_pBorderRadiusObject._getBottomRight = function ()
	{
		return this.bottomRightHeight ? this.bottomRightWidth + " " + this.bottomRightHeight : this.bottomRightWidth;
	};
	_pBorderRadiusObject._getBottomLeft = function ()
	{
		return this.bottomLeftHeight ? this.bottomLeftWidth + " " + this.bottomLeftHeight : this.bottomLeftWidth;
	};

	// for object cache
	nexacro._BorderRadiusObject_caches = {};
	nexacro.BorderRadiusObject = function (val)
	{
		var obj = nexacro._BorderRadiusObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._BorderRadiusObject(val);
		nexacro._BorderRadiusObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._BorderObject = function (v)
	{
		if (v && (typeof (v) == "string") && v != "none")
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				var parts = [];
				var cur_idx = 0;
				var next_idx = -1;

				var color_start_idx = -1;
				var color_end_idx = -1;

				var part;


				while (true)
				{
					color_start_idx = this._findColor(val, cur_idx);
					next_idx = val.indexOf(",", cur_idx);

					if (color_start_idx > 0 && color_start_idx < next_idx)
					{
						color_end_idx = val.indexOf(")", color_start_idx);
						next_idx = val.indexOf(",", color_end_idx);
					}

					if (next_idx > 0)
					{
						part = val.slice(cur_idx, next_idx);
						cur_idx = next_idx + 1;
					}
					else
					{
						part = val.slice(cur_idx);
						cur_idx = val.length + 1;
					}

					parts[parts.length] = part.trim();

					if (cur_idx >= val.length)
						break;

				}

				var cnt = parts.length;
				switch (cnt)
				{
					case 1:
						this._single = true;
						this.top = this.right = this.bottom = this.left = nexacro.BorderLineObject(parts[0]);
						break;
					case 2:
						this._single = false;
						this.top = this.bottom = nexacro.BorderLineObject(parts[0]);
						this.left = this.right = nexacro.BorderLineObject(parts[1]);
						break;
					case 3:
						this._single = false;
						this.top = nexacro.BorderLineObject(parts[0]);
						this.left = this.right = nexacro.BorderLineObject(parts[1]);
						this.bottom = nexacro.BorderLineObject(parts[2]);
						break;
					case 4:
						this._single = false;
						this.top = nexacro.BorderLineObject(parts[0]);
						this.right = nexacro.BorderLineObject(parts[1]);
						this.bottom = nexacro.BorderLineObject(parts[2]);
						this.left = nexacro.BorderLineObject(parts[3]);

						var top = this.top;
						var right = this.right;
						var left = this.left;
						var bottom = this.bottom;

						if (top == "none")
							top = "0px none";
						if (right == "none")
							right = "0px none";
						if (left == "none")
							left = "0px none";
						if (bottom == "none")
							bottom = "0px none";

						break;
				}
			}
			// em/rem 단위 포함 여부 집계
			this._hasRelative = /\d(rem|em)/i.test(v);
		}
	};

	var _pBorderObject = nexacro._createPrototype(nexacro.Object, nexacro._BorderObject);
	nexacro._BorderObject.prototype = _pBorderObject;
	_pBorderObject._type_name = "BorderObject";

	_pBorderObject.value = "none";
	_pBorderObject._single = true;
	_pBorderObject.left = null;
	_pBorderObject.top = null;
	_pBorderObject.right = null;
	_pBorderObject.bottom = null;
	_pBorderObject._hasRelative = false;

	// override for value
	_pBorderObject.valueOf = function ()
	{
		return this.value;
	};
	_pBorderObject.toString = function ()
	{
		return this.value;
	};

	_pBorderObject._getBorderWidth = function ()
	{
		return (this.left ? this.left._width : 0) + (this.right ? this.right._width : 0);
	};
	_pBorderObject._getBorderHeight = function ()
	{
		return (this.top ? this.top._width : 0) + (this.bottom ? this.bottom._width : 0);
	};

	_pBorderObject._getBorderLeftWidth = function ()
	{
		return (this.left ? this.left._width : 0);
	};
	_pBorderObject._getBorderTopWidth = function ()
	{
		return (this.top ? this.top._width : 0);
	};


	_pBorderObject._findColor = function (str, idx)
	{
		if (!str)
			return -1;

		str = str.toLowerCase();

		var values = ["rgb", "rgba", "hsl", "hsla"];
		var len = values.length;
		var n = -1;
		var ret = -1;
		for (var i = 0; i < len; i++)
		{
			n = str.indexOf(values[i], idx);
			if (n >= 0)
			{
				if (ret >= 0)
					ret = n < ret ? n : ret;
				else
					ret = n;
			}
		}

		return ret;
	};

	// for object cache
	nexacro._BorderObject_caches = {};
	nexacro.BorderObject = function (val)
	{
		var obj = nexacro._BorderObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._BorderObject(val);
		nexacro._BorderObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._BKGradientObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = nexacro._getSupportedWebGradient(val);

				if (this._sysvalue)
				{
					this._sysvalue = this._convertDirectionPart(this._sysvalue);
				}
			}
		}
	};

	var _pBKGradientObject = nexacro._createPrototype(nexacro.Object, nexacro._BKGradientObject);
	nexacro._BKGradientObject.prototype = _pBKGradientObject;
	_pBKGradientObject._type_name = "BKGradientObject";

	_pBKGradientObject.value = "";
	_pBKGradientObject._sysvalue = "";
	_pBKGradientObject.style = "";
	_pBKGradientObject.color_stops = [];
	_pBKGradientObject.point = { startX: 0, startY: 0, endX: 0, endY: 100 };

	// override for value
	_pBKGradientObject.valueOf = function ()
	{
		return this.value;
	};
	_pBKGradientObject.toString = function ()
	{
		return this.value;
	};

	_pBKGradientObject._convertDirectionPart = function (gradientStr)
	{
		if (!gradientStr)
			return gradientStr;

		const directionMap = [
			["to left top", "to var(--nexa-dir-left) top"],
			["to left bottom", "to var(--nexa-dir-left) bottom"],
			["to right top", "to var(--nexa-dir-right) top"],
			["to right bottom", "to var(--nexa-dir-right) bottom"],
			["to left", "to var(--nexa-dir-left)"],
			["to right", "to var(--nexa-dir-right)"],
			["to top", "to top"],
			["to bottom", "to bottom"],
		];

		const match = gradientStr.match(/linear-gradient\(([^,]+),/);
		if (!match)
			return gradientStr;

		const originalDir = match[1].trim();
		let converted = gradientStr;

		for (let i = 0; i < directionMap.length; i++)
		{
			const [key, val] = directionMap[i];
			if (originalDir.includes(key))
			{
				converted = converted.replace(
					key,
					val
				);
				break;
			}
		}
		return converted;
	}

	_pBKGradientObject._parseInfo = function (val)
	{
		if (val.indexOf("linear-gradient") >= 0)
		{
			this.style = "linear";

			var idx = val.indexOf("(");
			var gradientVal = val.substring(idx + 1, val.length - 1);
			var angle = "";

			if (gradientVal.substring(0, 2) == "to")
			{
				idx = gradientVal.indexOf(",");
				angle = gradientVal.substring(0, idx).trim();
				gradientVal = gradientVal.substring(idx + 1).trim();
			}

			var regExps = /\s*((?:#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|rgb\(\s*(?:[0-9]{1,3}\s*,\s*){2}[0-9]{1,3}\s*\)|rgba\(\s*(?:[0-9]{1,3}\s*,\s*){3}(0|0\.\d+|1)\s*\)|[_A-Za-z-][_A-Za-z0-9-]*))(?:\s+((?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?))?(?:\s*,\s*)?/gi;
			this.color_stops = [];

			var colorstopObj;
			var colorStops = regExps.exec(gradientVal);
			while (colorStops !== null)
			{
				colorstopObj = {
					color: colorStops[1]
				};

				if (colorStops[2]) //if (!!colorStops[2]) 단순 조건 체크용 boolean전환 필요없음. 
				{
					colorstopObj.percents = parseFloat(colorStops[2]) / 100;
				}
				this.color_stops.push(colorstopObj);

				colorStops = regExps.exec(gradientVal);
			}

			this.point = { startX: 0, startY: 0, endX: 0, endY: 100 };
			if (angle)
			{
				var angle1, angle2;
				var angleList = angle.split(" ");

				angle1 = angleList[1];
				angle2 = angleList[2];

				if (angle1 == "right")
				{
					if (angle2 == "bottom")
					{
						this.point = { startX: 0, startY: 0, endX: 100, endY: 100 };
					}
					else if (angle2 == "top")
					{
						this.point = { startX: 0, startY: 100, endX: 100, endY: 0 };
					}
					else
					{
						this.point = { startX: 0, startY: 0, endX: 100, endY: 0 };
					}
				}
				else if (angle1 == "left")
				{
					if (angle2 == "bottom")
					{
						this.point = { startX: 100, startY: 0, endX: 0, endY: 100 };
					}
					else if (angle2 == "top")
					{
						this.point = { startX: 100, startY: 100, endX: 0, endY: 0 };
					}
					else
					{
						this.point = { startX: 100, startY: 0, endX: 0, endY: 0 };
					}
				}
				else if (angle1 == "bottom")
				{
					this.point = { startX: 0, startY: 0, endX: 0, endY: 100 };
				}
				else if (angle1 == "top")
				{
					this.point = { startX: 0, startY: 100, endX: 0, endY: 0 };
				}
			}

			var sPercents = 0;
			var ePercents = 0;
			var cnt = 0;
			var colorstopLen = this.color_stops.length;
			var i;

			for (i = 0; i < colorstopLen; i++)
			{
				var obj = this.color_stops[i];
				if (!obj.percents)
				{
					if (i == 0)
					{
						obj.percents = 0;
					}
					else if (i == colorstopLen - 1)
					{
						obj.percents = 1;
					}
					else
					{
						obj.percents = -1;
					}
				}

				var midPercents = 0;
				if (obj.percents > 0)
				{
					ePercents = obj.percents;
					midPercents = (ePercents - sPercents) / cnt;
					for (var j = 1; j < cnt; j++)
					{
						this.color_stops[i - j].percents = (ePercents - (midPercents * j));
					}

					sPercents = ePercents;
					cnt = 0;
				}
				cnt++;
			}
		}
		else if (val.indexOf("radial-gradient") >= 0)
		{
			this.style = "radial";
		}
	};

	// for object cache
	nexacro._BKGradientObject_caches = {};
	nexacro.BKGradientObject = function (val)
	{
		var obj = nexacro._BKGradientObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._BKGradientObject(val);
		nexacro._BKGradientObject_caches[val] = obj;
		return obj;
	};




	//==============================================================================
	//set_background("red");	
	//set_background("linear-gradient(to right, blue, #e4e4e4)");  ==>gradient support ie10, HTML5  
	//set_background("url(theme://images/alert_confirm.png) no-repeat center top");	
	//set_background("url(theme://images/alert_confirm.png) left top no-repeat red");
	//set_background("red url(theme://images/alert_confirm.png) left top no-repeat");
	//set_background("transparent");
	nexacro._BackgroundObject = function (v, target)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				if (val == "none")
				{
					this.url = "none";
					return;
				}

				var props = val.split(/\s+/);
				var cnt = props.length;

				var bLoadColor = true;
				var bLoadImage = true;
				var bLoadGradient = true;
				var bLoadRepeat = true;
				var bLoadPos = true;
				var bLoadOrigin = true;
				var bLoadClip = true;
				var bLoadSize = true;
				for (var i = 0; i < cnt; i++)
				{
					var part = props[i];
					if (bLoadImage && part.substring(0, 3).toLowerCase() == "url")
					{
						//bLoadColor = false;
						bLoadImage = false;
						var urlstr = part;

						if (part.indexOf(")") < 0)  //for space
						{
							for (i++; i < cnt; i++)
							{
								urlstr += " " + props[i];
								if (props[i].indexOf(")") >= 0)
									break;
							}
						}

						var url = /'.+'|".+"/.exec(urlstr);
						if (!url)
						{
							url = /(.+)/.exec(urlstr)[0];
							url = url.substring(4, url.length - 1).trim();
						}
						else
						{
							url = url[0];
							url = url.replace(/['"]/g, ''); //url = url.replace(/\'|\"/g, '');
						}

						this.url = url;
						if (target)
						{
							const env =  target._getEnvironment();
							if (env)
							{
								this._sysbaseurl = target._getRefFormBaseUrl();
								this._sysurl = url.length > 0 ? env._getSupportedImageUrl(url, this._sysbaseurl) : "";								
							}							
						}
						continue;
					}


					if (bLoadRepeat && this._load_repeat(part))
					{
						bLoadRepeat = false;
						continue;
					}
					else if (bLoadPos && this._load_pos(part))
					{
						bLoadPos = false;
						if (i < (cnt - 1))
						{
							var temp = i + 1;
							part = props[temp];
							if (this._load_pos2(part))
							{
								i++;
							}
						}
						else if (i == (cnt - 1))
						{
							if (part == "center")
								this._load_pos2("center")
						}
						continue;
					}
					else if (bLoadSize && part.search(/\//g) > -1)					    
					{
						/* background size spec change to subproperty of position */
						if (part.length == 1)
						{
							i++;
							part = props[i];
						}
						else
						{
							part = part.substr(1);
						}

						if (bLoadSize && this._load_size(part))
						{
							bLoadSize = false;
							if (i < (cnt - 1))
							{
								var temp = i + 1;
								part = props[temp];
								if (this._load_size(part, true))
								{
									i++;
								}
							}
						}
						continue;
					}
					var grstr, lcnt, rcnt;
					if (bLoadGradient && (part.substring(0, 15).toLowerCase() == "linear-gradient"))
					{
						bLoadPos = false;
						bLoadColor = false;
						bLoadImage = false;
						bLoadGradient = false;
						grstr = part;
						lcnt = nexacro.getMatchedCount(grstr, '(');
						rcnt = nexacro.getMatchedCount(grstr, ')');
						if ((lcnt == 0) || (lcnt != rcnt))
						{
							for (i++; i < cnt; i++)
							{
								var gpart = props[i];
								if (bLoadOrigin && this._load_origin(gpart))
								{
									bLoadOrigin = false;
									continue;
								}
								else if (bLoadClip && this._load_clip(gpart))
								{
									bLoadClip = false;
									continue;
								}
								else if (bLoadRepeat && this._load_repeat(gpart))
								{
									bLoadRepeat = false;
									continue;
								}
								grstr += " " + gpart;
								lcnt = nexacro.getMatchedCount(grstr, '(');
								rcnt = nexacro.getMatchedCount(grstr, ')');
								if ((lcnt > 0) && (lcnt == rcnt))
								{
									break;
								}
							}
						}
						this.gradient = nexacro.BKGradientObject(grstr);
						continue;
					}

					if (bLoadOrigin && this._load_origin(part))
					{
						bLoadOrigin = false;
						continue;
					}
					else if (bLoadClip && this._load_clip(part))
					{
						bLoadClip = false;
						continue;
					}

					if (bLoadColor)
					{
						if (part)
						{
							bLoadColor = false;
							grstr = part;
							lcnt = nexacro.getMatchedCount(grstr, '(');
							rcnt = nexacro.getMatchedCount(grstr, ')');
							if (lcnt != rcnt)
							{
								for (i++; i < cnt; i++)
								{
									grstr += " " + props[i];
									lcnt = nexacro.getMatchedCount(grstr, '(');
									rcnt = nexacro.getMatchedCount(grstr, ')');
									if (lcnt == rcnt)
									{
										break;
									}
								}
							}
							//var color = nexacro._getSupportedWebColor(grstr);
							this.color = nexacro.ColorObject(grstr);
							// this._syscolor = color;
							continue;
						}
					}

				}
			}
		}
	};

	var _pBackgroundObject = nexacro._createPrototype(nexacro.Object, nexacro._BackgroundObject);
	nexacro._BackgroundObject.prototype = _pBackgroundObject;
	_pBackgroundObject._type_name = "BackgroundObject";

	_pBackgroundObject.value = "";
	_pBackgroundObject.color = "";
	_pBackgroundObject.gradient = null;
	_pBackgroundObject.url = "";
	_pBackgroundObject.repeat = "repeat";
	_pBackgroundObject.pos_x = "calc(50% * var(--nexa-dir-sign) + 50%)";
	_pBackgroundObject.pos_y = "top";
	_pBackgroundObject.origin = "";
	_pBackgroundObject.clip = "";
	_pBackgroundObject.size = "";
	//_pBackgroundObject._syscolor = "";
	_pBackgroundObject._sysurl = "";
	_pBackgroundObject._sysbaseurl = "";

	// override for value
	_pBackgroundObject.valueOf = function ()
	{
		return this.value;
	};
	_pBackgroundObject.toString = function ()
	{
		return this.value;
	};

	_pBackgroundObject._load_repeat = function (str)
	{
		if (str == "no-repeat" || str == "repeat" || str == "repeat-x" || str == "repeat-y")
		{
			this.repeat = str;
			return true;
		}
		return false;
	};

	_pBackgroundObject._load_pos = function (str)
	{
		if (str == "left")
		{
			this.pos_x = "calc(50% * var(--nexa-dir-sign) + 50%)";
			return true;
		}
		else if (str == "right")
		{
			this.pos_x = "calc(-50% * var(--nexa-dir-sign) + 50%)";
			return true;
		}
		else if (str == "center")
		{
			this.pos_x = "50%";
			return true;
		}
		else if (str == "top" || str == "bottom")
		{
			this.pos_y = str;
			return false;
		}
		else if (str.charAt(0) !== '/' && str.search(/px|pt|cm|em|%/i) > 0)
		{
			var except_list = [
				"lemonchiffon"  // color
			];

			var except_cnt = except_list.length;

			for (var i = 0; i < except_cnt; i++)
			{
				if (str == except_list[0])
					return false;
			}

			this.pos_x = str;
			return true;
		}
		return false;
	};
	_pBackgroundObject._load_pos2 = function (str)
	{
		if (str == "left")
		{
			if (!this.pos_x)
			{
				this.pos_x = "calc(50% * var(--nexa-dir-sign) + 50%)";
			}
			return true;
		}
		else if (str == "right")
		{
			if (!this.pos_x)
			{
				this.pos_x = "calc(-50% * var(--nexa-dir-sign) + 50%)";
			}
			return true;
		}
		else if ((str == "top" || str == "bottom" || str == "center") || str.search(/px|pt|cm|em|%/i) > 0)
		{
			this.pos_y = str;
			return true;
		}
		return false;
	};

	_pBackgroundObject._load_origin = function (str)
	{
		if (/*str == "initial" || str == "inherit" ||*/ str == "padding-box" || str == "border-box"/* || str == "content-box"*/)
		{
			this.origin = str;
			return true;
		}
		return false;
	};

	_pBackgroundObject._load_clip = function (str)
	{
		if (/*str == "initial" || str == "inherit" ||*/ str == "padding-box" || str == "border-box" /*|| str == "content-box"*/)
		{
			this.clip = str;
			return true;
		}
		return false;
	};

	_pBackgroundObject._load_size = function (str, is_subval)
	{
		if (is_subval && /\d(px|rem|em|%)/i.test(str))
		{
			this.size += " " + str;
			return true;
		}
		else if (str == "auto" || str == "cover" || str == "contain" || /\d(px|rem|em|%)/i.test(str))
		{
			this.size = str;
			return true;
		}
		return false;
	};

	// for object cache
	nexacro._BackgroundObject_caches = {};
	nexacro.BackgroundObject = function (val, target)
	{
		let obj, env;
		if (target)
		{
			env = target._getEnvironment();
			if (env)
			{
				obj = env._getCacheCSSObject(3, val);			
				if (obj) return obj;
			}			
		}		
		
		obj = nexacro._BackgroundObject_caches[val];
		if (obj) return obj;
	
		
		obj = new nexacro._BackgroundObject(val, target);

		if (env)
			env._setCacheCSSObject(3, val, obj);			
		else
			nexacro._BackgroundObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._EdgeImageObject = function (v, target)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				var parts = val.split(/\s+/);
				var cnt = parts.length;

				var part = parts[0];
				if (part.substring(0, 3).toLowerCase() == "url")
				{
					var image_url;
					var ch = part.charAt(4);
					if (ch == '\'' || ch == '"') image_url = part.substring(5, part.lastIndexOf(ch));
					else image_url = part.substring(4, part.length - 1);
					this.url = image_url;
					if (target)
					{
						const env =  target._getEnvironment();
						if (env)
						{
							this._sysbaseurl = target._getRefFormBaseUrl();
	    					this._sysurl = env._getSupportedImageUrl(this.url, this._sysbaseurl);	
						}
					}					
				}

				if (cnt >= 2)
				{
					part = parseInt(parts[1]);
					var edge = +(part);
					if (edge == edge) // !isFinite
					{
						this.edge_x = edge;

						part = parseInt(parts[2]);
						edge = +(part);
						if (edge == edge) // !isFinite
						{
							this.edge_y = edge;
						}
					}
				}
			}
		}
	};

	var _pEdgeImageObject = nexacro._createPrototype(nexacro.Object, nexacro._EdgeImageObject);
	nexacro._EdgeImageObject.prototype = _pEdgeImageObject;
	_pEdgeImageObject._type_name = "EdgeImageObject";

	_pEdgeImageObject.value = "";
	_pEdgeImageObject.url = "";
	_pEdgeImageObject.edge_x = 0;
	_pEdgeImageObject.edge_y = 0;
	_pEdgeImageObject._sysurl = "";

	// override for value
	_pEdgeImageObject.valueOf = function ()
	{
		return this.value;
	};
	_pEdgeImageObject.toString = function ()
	{
		return this.value;
	};

	// for object cache	
	nexacro.EdgeImageObject = function (val, target)
	{		
		let obj, env;
		if (target)
		{
			env = target._getEnvironment();
			if (env)
			{
				obj = env._getCacheCSSObject(2, val);			
				if (obj) return obj;
			}
		}
				
		obj = new nexacro._EdgeImageObject(val, target);
		if (env)
		{
			env._setCacheCSSObject(2, val, obj);			
		}
		return obj;
	};

	

	//==============================================================================
	nexacro._MarginObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				var parts = val.split(/\s+/);
				var cnt = parts.length;
				switch (cnt)
				{
					case 1:
						this.left = this.top = this.right = this.bottom = parseInt(parts[0]);
						break;
					case 2:
						this.top = this.bottom = parseInt(parts[0]);
						this.left = this.right = parseInt(parts[1]);
						break;
					case 3:
						this.top = parseInt(parts[0]);
						this.left = this.right = parseInt(parts[1]);
						this.bottom = parseInt(parts[2]);
						break;
					case 4:
						this.top = parseInt(parts[0]);
						this.right = parseInt(parts[1]);
						this.bottom = parseInt(parts[2]);
						this.left = parseInt(parts[3]);
						break;
				}
			}
		}
	};

	var _pMarginObject = nexacro._createPrototype(nexacro.Object, nexacro._MarginObject);
	nexacro._MarginObject.prototype = _pMarginObject;
	_pMarginObject._type_name = "MarginObject";

	_pMarginObject.value = "";
	_pMarginObject.left = 0;
	_pMarginObject.top = 0;
	_pMarginObject.right = 0;
	_pMarginObject.bottom = 0;

	// override for value
	_pMarginObject.valueOf = function ()
	{
		return this.value;
	};
	_pMarginObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._MarginObject_caches = {};
	nexacro.MarginObject = function (val)
	{
		var obj = nexacro._MarginObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._MarginObject(val);
		nexacro._MarginObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._PaddingObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				var parts = val.split(/\s+/);
				var cnt = parts.length;

				// per-side 문자열 저장 (단위 포함, 숫자 정규화 전)
				switch (cnt)
				{
					case 1:  this._topStr = this._rightStr = this._bottomStr = this._leftStr = parts[0]; break;
					case 2:  this._topStr = this._bottomStr = parts[0]; this._rightStr = this._leftStr = parts[1]; break;
					case 3:  this._topStr = parts[0]; this._rightStr = this._leftStr = parts[1]; this._bottomStr = parts[2]; break;
					default: this._topStr = parts[0]; this._rightStr = parts[1]; this._bottomStr = parts[2]; this._leftStr = parts[3]; break;
				}

				for (var i = 0; i < cnt; i++)
				{
					var part = parts[i];
					if (part.search(/px|pt|cm|em|%/i) < 0)
						parts[i] = "0";
				}

				var tv, rv, bv, lv;
				switch (cnt)
				{
					case 1:
						{
							tv = parseInt(parts[0]);
							this.left = this.top = this.right = this.bottom = (tv >= 0 ? tv : 0);
						}
						break;
					case 2:
						{
							tv = parseInt(parts[0]);
							rv = parseInt(parts[1]);
							this.top = this.bottom = (tv >= 0 ? tv : 0);
							this.left = this.right = (rv >= 0 ? rv : 0);
						}
						break;
					case 3:
						{
							tv = parseInt(parts[0]);
							rv = parseInt(parts[1]);
							bv = parseInt(parts[2]);
							this.top = (tv >= 0 ? tv : 0);
							this.left = this.right = (rv >= 0 ? rv : 0);
							this.bottom = (bv >= 0 ? bv : 0);
						}
						break;
					case 4:
						{
							tv = parseInt(parts[0]);
							rv = parseInt(parts[1]);
							bv = parseInt(parts[2]);
							lv = parseInt(parts[3]);
							this.top = (tv >= 0 ? tv : 0);
							this.right = (rv >= 0 ? rv : 0);
							this.bottom = (bv >= 0 ? bv : 0);
							this.left = (lv >= 0 ? lv : 0);
						}
						break;
				}
			}
			// em/rem 단위 포함 여부 확인
			this._hasRelative = /\d(rem|em)/i.test(val);
		}
	};

	var _pPaddingObject = nexacro._createPrototype(nexacro.Object, nexacro._PaddingObject);
	nexacro._PaddingObject.prototype = _pPaddingObject;
	_pPaddingObject._type_name = "PaddingObject";

	_pPaddingObject.value = "";
	_pPaddingObject.left = 0;
	_pPaddingObject.top = 0;
	_pPaddingObject.right = 0;
	_pPaddingObject.bottom = 0;
	_pPaddingObject._topStr = "";
	_pPaddingObject._rightStr = "";
	_pPaddingObject._bottomStr = "";
	_pPaddingObject._leftStr = "";
	_pPaddingObject._hasRelative = false;

	// override for value
	_pPaddingObject.valueOf = function ()
	{
		return this.value;
	};
	_pPaddingObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._PaddingObject_caches = {};
	nexacro.PaddingObject = function (val)
	{
		var obj = nexacro._PaddingObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._PaddingObject(val);
		nexacro._PaddingObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._AlignObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				var valarr = val.split(/\s+/);
				for (var i = 0, n = valarr.length; i < n; i++)
				{
					var tok = valarr[i];
					switch (tok)
					{
						case "left":
						case "center":
						case "right":
							this.halign = tok;
							break;
						case "top":
						case "middle":
						case "bottom":
							this.valign = tok;
							break;
					}
				}
			}
		}
	};

	var _pAlignObject = nexacro._createPrototype(nexacro.Object, nexacro._AlignObject);
	nexacro._AlignObject.prototype = _pAlignObject;
	_pAlignObject._type_name = "AlignObject";

	_pAlignObject.value = "";
	_pAlignObject.halign = "";
	_pAlignObject.valign = "";

	// override for value
	_pAlignObject.valueOf = function ()
	{
		return this.value;
	};
	_pAlignObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._AlignObject_caches = {};
	nexacro.AlignObject = function (val)
	{
		var obj = nexacro._AlignObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._AlignObject(val);
		nexacro._AlignObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._CursorObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = nexacro._getSupportedWebCursor(val);
			}
		}
	};

	var _pCursorObject = nexacro._createPrototype(nexacro.Object, nexacro._CursorObject);
	nexacro._CursorObject.prototype = _pCursorObject;
	_pCursorObject._type_name = "CursorObject";

	_pCursorObject.value = "auto";
	_pCursorObject._sysvalue = "default";

	// override for value
	_pCursorObject.valueOf = function ()
	{
		return this.value;
	};
	_pCursorObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._CursorObject_caches = {};
	nexacro.CursorObject = function (val)
	{
		var obj = nexacro._CursorObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._CursorObject(val);
		nexacro._CursorObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	// opacity value range : 0 ~ 1
	nexacro._OpacityObject = function (v)
	{
		if (v || v === 0)
		{
			this.value = v;
			this._sysvalue = v;
			/*	if ((v + "").indexOf(".") >= 0)
				{
					this.value = v;
					this._sysvalue = v;
				}
				else
				{			    
					this.value = v;
					this._sysvalue = v;
					//this._sysvalue = (parseInt(v) / 100);
				}
			*/
		}
	};

	var _pOpacityObject = nexacro._createPrototype(nexacro.Object, nexacro._OpacityObject);
	nexacro._OpacityObject.prototype = _pOpacityObject;
	_pOpacityObject._type_name = "Opacity";

	_pOpacityObject.value = 1;
	_pOpacityObject._sysvalue = 1;

	// override for value
	_pOpacityObject.valueOf = function ()
	{
		return this.value;
	};
	_pOpacityObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._OpacityObject_caches = {};
	nexacro.OpacityObject = function (val)
	{
		var obj = nexacro._OpacityObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._OpacityObject(val);
		nexacro._OpacityObject_caches[val] = obj;
		return obj;
	};


	//==============================================================================
	nexacro._ShadowObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				var arr = val.split(' ');
				arr[0] = `calc(var(--nexa-dir-sign) * ${arr[0]})`;
				this.value = arr.join(' ');
			}
		}
	};

	var _pShadowObject = nexacro._createPrototype(nexacro.Object, nexacro._ShadowObject);
	nexacro._ShadowObject.prototype = _pShadowObject;
	_pShadowObject._type_name = "ShadowObject";

	_pShadowObject.value = "";

	// override for value
	_pShadowObject.valueOf = function ()
	{
		return this.value;
	};
	_pShadowObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._ShadowObject_caches = {};
	nexacro.ShadowObject = function (val)
	{
		var obj = nexacro._ShadowObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._ShadowObject(val);
		nexacro._ShadowObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	nexacro._TransformObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;
			}
		}
	};
	var _pTransformObject = nexacro._createPrototype(nexacro.Object, nexacro._TransformObject);
	nexacro._TransformObject.prototype = _pTransformObject;
	_pTransformObject._type_name = "TransformObject";
	_pTransformObject.value = "";
	_pTransformObject._sysvalue = "";
	// override for value
	_pTransformObject.valueOf = function ()
	{
		return this.value;
	};
	_pTransformObject.toString = function ()
	{
		return this.value;
	};
	// for object cache
	nexacro._TransformObject_caches = {};
	nexacro.TransformObject = function (val)
	{
		var obj = nexacro._TransformObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._TransformObject(val);
		nexacro._TransformObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	nexacro._TransformOriginObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;
			}
		}
	};
	var _pTransformOriginObject = nexacro._createPrototype(nexacro.Object, nexacro._TransformOriginObject);
	nexacro._TransformOriginObject.prototype = _pTransformOriginObject;
	_pTransformOriginObject._type_name = "TransformOriginObject";
	_pTransformOriginObject.value = "";
	_pTransformOriginObject._sysvalue = "";
	// override for value
	_pTransformOriginObject.valueOf = function ()
	{
		return this.value;
	};
	_pTransformOriginObject.toString = function ()
	{
		return this.value;
	};
	// for object cache
	nexacro._TransformOriginObject_caches = {};
	nexacro.TransformOriginObject = function (val)
	{
		var obj = nexacro._TransformOriginObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._TransformOriginObject(val);
		nexacro._TransformOriginObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	nexacro._AnimationObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;
			}
		}
	};
	var _pAnimationObject = nexacro._createPrototype(nexacro.Object, nexacro._AnimationObject);
	nexacro._AnimationObject.prototype = _pAnimationObject;
	_pAnimationObject._type_name = "AnimationObject";
	_pAnimationObject.value = "";
	_pAnimationObject._sysvalue = "";
	// override for value
	_pAnimationObject.valueOf = function ()
	{
		return this.value;
	};
	_pAnimationObject.toString = function ()
	{
		return this.value;
	};
	// for object cache
	nexacro._AnimationObject_caches = {};
	nexacro.AnimationObject = function (val)
	{
		var obj = nexacro._AnimationObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._AnimationObject(val);
		nexacro._AnimationObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	nexacro._AnimationPlayStateObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;
			}
		}
	};
	var _pAnimationPlayStateObject = nexacro._createPrototype(nexacro.Object, nexacro._AnimationPlayStateObject);
	nexacro._AnimationPlayStateObject.prototype = _pAnimationPlayStateObject;
	_pAnimationPlayStateObject._type_name = "AnimationPlayStateObject";
	_pAnimationPlayStateObject.value = "";
	_pAnimationPlayStateObject._sysvalue = "";
	// override for value
	_pAnimationPlayStateObject.valueOf = function ()
	{
		return this.value;
	};
	_pAnimationPlayStateObject.toString = function ()
	{
		return this.value;
	}
	// for object cache
	nexacro._AnimationPlayStateObject_caches = {};
	nexacro.AnimationPlayStateObject = function (val)
	{
		var obj = nexacro._AnimationPlayStateObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._AnimationPlayStateObject(val);
		nexacro._AnimationPlayStateObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	nexacro._TransitionObject = function (v)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				this._sysvalue = val;
			}
		}
	};
	var _pTransitionObject = nexacro._createPrototype(nexacro.Object, nexacro._TransitionObject);
	nexacro._TransitionObject.prototype = _pTransitionObject;
	_pTransitionObject._type_name = "TransitionObject";
	_pTransitionObject.value = "";
	_pTransitionObject._sysvalue = "";

	// override for value
	_pTransitionObject.valueOf = function ()
	{
		return this.value;
	};
	_pTransitionObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._TransitionObject_caches = {};
	nexacro.TransitionObject = function (val)
	{
		var obj = nexacro._TransitionObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._TransitionObject(val);
		nexacro._TransitionObject_caches[val] = obj;
		return obj;
	};

	//==============================================================================
	//UrlObject - Button
	nexacro._UrlObject = function (v, target)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;
				var parts = val.split(/\s+/);
				var part = parts[0];

				if (part.substring(0, 3).toLowerCase() == "url")
				{
					var url;
					var ch = part.charAt(4);
					if (ch == '\'' || ch == '"') url = part.substring(5, part.lastIndexOf(ch));
					else url = part.substring(4, part.length - 1);
					this.url = url;
					if (target)
					{
						const env =  target._getEnvironment();
						if (env)
						{
							this._sysbaseurl = target._getRefFormBaseUrl();
							this._sysurl = env._getSupportedImageUrl(this.url, this._sysbaseurl);	
						}
					}
				}
				else if (val !== "none")
				{
					this.url = val;
					if (target)
					{
						const env =  target._getEnvironment();
						if (env)
						{
							this._sysbaseurl = target._getRefFormBaseUrl();
							this._sysurl = env._getSupportedImageUrl(this.url, this._sysbaseurl);	
						}
					}
				}				
			}
		}
	};

	var _pUrlObject = nexacro._createPrototype(nexacro.Object, nexacro._UrlObject);
	nexacro._UrlObject.prototype = _pUrlObject;
	_pUrlObject._type_name = "UrlObject";

	_pUrlObject.value = "";
	_pUrlObject.url = "";
	_pUrlObject._sysurl = "";
	_pUrlObject._sysbaseurl = "";

	// override for value
	_pUrlObject.valueOf = function ()
	{
		return this.value;
	};

	_pUrlObject.toString = function ()
	{
		return this.value;
	};

	_pUrlObject._updateSysUrl = function (target)
	{
		const env =  target._getEnvironment();
		this._sysbaseurl = target._getRefFormBaseUrl();
	    this._sysurl = env._getSupportedImageUrl(this.url, this._sysbaseurl);		
	};

	// for object cache	
	nexacro.UrlObject = function (val, target)
	{
		let obj, env;
		if (target)
		{
			env = target._getEnvironment();
			if (env)
			{
				obj = env._getCacheCSSObject(1, val);			
				if (obj) return obj;
			}
		}		
		
		obj = new nexacro._UrlObject(val, target);
		if (env)
		{
			env._setCacheCSSObject(1, val, obj);			
		}
		return obj;
	};

	//==============================================================================
	//TransitionEffectObject
	nexacro._TransitionEffectObject = function (v, target)
	{
		if (v && (typeof (v) == "string"))
		{
			var val = v.trim();
			if (val)
			{
				this.value = val;

				var valarr = val.split(/\s+/);
				for (var i = 0, n = valarr.length; i < n; i++)
				{
					var tok = valarr[i];
					switch (i)
					{
						case 0:
							this.type = tok;
							break;
						case 1:
							this.duration = tok;
							break;
						case 2:
							this.easing = tok;
							break;
						case 3:
							this.direction = tok;
							break;
					}
				}
			}
		}
	};

	var _pTransitionEffectObject = nexacro._createPrototype(nexacro.Object, nexacro._TransitionEffectObject);
	nexacro._TransitionEffectObject.prototype = _pTransitionEffectObject;
	_pTransitionEffectObject._type_name = "TransitionEffectObject";

	_pTransitionEffectObject.value = "";
	_pTransitionEffectObject.type = "";
	_pTransitionEffectObject.duration = 0;
	_pTransitionEffectObject.easing = "";
	_pTransitionEffectObject.direction = "";

	// override for value
	_pTransitionEffectObject.valueOf = function ()
	{
		return this.value;
	};

	_pTransitionEffectObject.toString = function ()
	{
		return this.value;
	};

	// for object cache
	nexacro._TransitionEffectObject_caches = {};
	nexacro.TransitionEffectObject = function (val, target)
	{
		var obj = nexacro._TransitionEffectObject_caches[val];
		if (obj) return obj;
		obj = new nexacro._TransitionEffectObject(val, target);
		nexacro._TransitionEffectObject_caches[val] = obj;
		return obj;
	};
} //if ( !nexacro._bInitCssObjects )


if (_process)
{
	_process = null;
	_pColorObject = null;
	_pFontObject = null;
	_pTextDecorationObject = null;
	_pBorderLineObject = null;
	_pBorderObject = null;
	_pBorderRadiusObject = null;
	_pMarginObject = null;
	_pPaddingObject = null;
	_pAlignObject = null;
	_pCursorObject = null;
	_pOpacityObject = null;
	_pShadowObject = null;
	_pUrlObject = null;
	_pTransitionEffectObject = null;
}
