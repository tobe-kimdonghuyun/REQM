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

if(!nexacro.AbstractComponent)
{
    //==============================================================================
    // nexacro.AbstractComponent
    //==============================================================================

    nexacro.AbstractComponent = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
        
		this._p_readonly = false;
        this._is_abstract = true;
		this._property_map = [];
    };

    var _pAbstractComponent = nexacro._createPrototype(nexacro.Component, nexacro.AbstractComponent);
    nexacro.AbstractComponent.prototype = _pAbstractComponent;
    _pAbstractComponent._type_name = "AbstractComponent";

    /* control */

    /* default properties */    

    /* internal variable */
    // _pAbstractComponent._is_visible = false;
    _pAbstractComponent._real_visible = false;
	_pAbstractComponent._use_readonly_status = true;

    /* status */

    /* accessibility */
    // _pAbstractComponent.accessibilityrole = "form";

    /*
    _pAbstractComponent._event_list = {
        "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
        "oninput": 1, "onkeydown": 1, "onkeyup": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
        "onmousedown": 1, "onmouseup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onmove": 1, "onsize": 1, "oncontextmenu": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1, "ondevicebuttonup": 1
    };
    */
    //===============================================================
    // nexacro.AbstractComponent : Create & Destroy & Update
    //===============================================================

    _pAbstractComponent.on_create_contents = function ()
	{
		// Component의 ControlElement와 ContainerElement가 생성된 후 호출
		// 이 함수에서는 Component의 구성에 필요한 Control 또는 Contents Element Object를 생성(new)하고 개별 속성을 설정하는 등의 처리

		nexacro.Component.prototype.on_create_contents.call(this);

		this._initValue();
	};

    _pAbstractComponent.on_created_contents = function (win)
	{
		// 다른 Object 또는 Component와 관계있는 설정 처리
		// 생성된 Component의 ControlElement가 실체화(DOM Node 생성 등)된 후 호출
		// 이 함수에서는 다른 Object 또는 생성된 Control 또는 Contents Element Object를 실체화하기 위한 처리

		nexacro.Component.prototype.on_created_contents.call(this, win);
		
		this._appearControl(true);

		if (this._ctrlobj)
		{
			this._ctrlobj.on_created_contents(win);
			this._ctrlobj._is_created = true;
        }

		// notify event : callback function 등록은 on_created_contents에서 설정
		// this._ctrlobj._setEventHandler("ondropdown", this.on_notify_ctrlobj_ondropdown, this);
	};

	_pAbstractComponent.on_notify_ctrlobj_ondropdown = function ()
	{
		// ??
	}

    _pAbstractComponent.on_create_contents_command = function ()
	{
		// TODO : Create a string in the format of innerhtml by calling the createCommnad() function of control.
		var ret = nexacro.Component.prototype.on_create_contents_command.call(this);

		if (this._ctrlobj)
			ret = this._ctrlobj.on_create_contents_command();

		return ret;
	};

    _pAbstractComponent.on_attach_contents_handle = function (win, enablea11y)
	{
		// TODO : Call attachHandle() function of control to attach actual node handle to handle of nexacro.Element.
		nexacro.Component.prototype.on_attach_contents_handle.call(this, win, enablea11y);
				
		this._appearControl(true);

		if (this._ctrlobj)
		{
			this._ctrlobj.on_attach_contents_handle(win, enablea11y);
			this._changeStatus("readonly", this._ctrlobj._p_readonly);
			this._ctrlobj._is_created = true;
        }
	};

    _pAbstractComponent.on_destroy_contents = function ()
	{
		nexacro.Component.prototype.on_destroy_contents.call(this);
		this._destroyControl();
	};
    
    //===============================================================
    // nexacro.AbstractComponent : Override
    //===============================================================

    
    //===============================================================
    // nexacro.AbstractComponent : Properties
    //===============================================================
        
    _pAbstractComponent.set_cssclass = function (val)
	{
		if (this._p_cssclass != val)
		{
			this._p_cssclass = val;
			this._setPropertyMap("cssclass", val);
			if(this._ctrlobj)
				this._setControlSpecificProperty("cssclass");
		}
	};
    
	_pAbstractComponent.set_initvalueid = function (val)
	{
		if (this._p_initvalueid != val)
		{
			this._p_initvalueid = val;
			this._setPropertyMap("initvalueid", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("initvalueid");
        }
	};

	// Binding	
	_pAbstractComponent.set_codecolumn = function (val)
	{
		if (this._p_codecolumn != val)
		{
			this._p_codecolumn = val;
			this._resetInnerBind();
			this._setPropertyMap("codecolumn",val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("codecolumn");
		};
	};

	_pAbstractComponent.set_datacolumn = function (val)
	{
		if (this._p_datacolumn != val)
		{
			this._p_datacolumn = val;
			this._resetInnerBind();
			this._setPropertyMap("datacolumn", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("datacolumn");
		}
	};
	
	_pAbstractComponent.set_innerdataset = function (val)
	{
		var valueid;
		if (this._p_innerdataset != val)
		{
			if (val instanceof nexacro.Dataset)
			{				
				this._innerdataset = val;
				valueid = val.id;
            }
			else
			{
				valueid = val;
			}

			this._p_innerdataset = valueid;
			this._resetInnerBind();
			this._setPropertyMap("innerdataset", valueid); // TODO : allocateProperty 공통함수 분리
			if (this._ctrlobj)
			{
				this._resetControlByData();
				this._setControlSpecificProperty("innerdataset");
			}
		}
	};

	// Style
	_pAbstractComponent.set_background = function (val)
	{
		if (this._p_background != val)
		{
			this._p_background = val;
			this._setPropertyMap("background", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("background");
		}
	};

	_pAbstractComponent.set_border = function (val)
	{
		if (this._p_border != val)
		{
			this._p_border = val;
			this._setPropertyMap("border", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("border");
		}
	};

	_pAbstractComponent.set_borderRadius = function (val)
	{
		if (this._p_borderRadius != val)
		{
			this._p_borderRadius = val;
			this._setPropertyMap("borderRadius", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("borderRadius");
		}
	};

	_pAbstractComponent.set_boxShadow = function (val)
	{
		if (this._p_boxShadow != val)
		{
			this._p_boxShadow = val;
			this._setPropertyMap("boxShadow", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("boxShadow");
		}
	};

	_pAbstractComponent.set_color = function (val)
	{
		if (this._p_color != val)
		{
			this._p_color = val;
			this._setPropertyMap("color", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("color");
		}
	};

	_pAbstractComponent.set_cursor = function (val)
	{
		if (this._p_cursor != val)
		{
			this._p_cursor = val;
			this._setPropertyMap("cursor", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("cursor");
		}
	};

	_pAbstractComponent.set_edge = function (val)
	{
		if (this._p_edge != val)
		{
			this._p_edge = val;
			this._setPropertyMap("edge", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("edge");
		}
	};

	_pAbstractComponent.set_font = function (val)
	{
		if (this._p_font != val)
		{
			this._p_font = val;
			this._setPropertyMap("font", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("font");
		}
	};

	_pAbstractComponent.set_letterSpacing = function (val)
	{
		if (this._p_letterSpacing != val)
		{
			this._p_letterSpacing = val;
			this._setPropertyMap("letterSpacing", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("letterSpacing");
		}
	};

	_pAbstractComponent.set_opacity = function (val)
	{
		if (this._p_opacity != val)
		{
			this._p_opacity = val;
			this._setPropertyMap("opacity", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("opacity");
		}
	};

	_pAbstractComponent.set_padding = function (val)
	{
		if (this._p_padding != val)
		{
			this._p_padding = val;
			this._setPropertyMap("padding", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("padding");
		}
	};

	_pAbstractComponent.set_wordSpacing = function (val)
	{
		if (this._p_wordSpacing != val)
		{
			this._p_wordSpacing = val;
			this._setPropertyMap("wordSpacing", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("wordSpacing");
		}
	};

	// Action
	_pAbstractComponent.set_enable = function (val)
	{
		val = nexacro._toBoolean(val);
		if (this._p_enable != val)
		{
			this._p_enable = val;
			this._setEnable(val);
			this._setPropertyMap("enable", val);
            if (this._ctrlobj)
			{
				this._setControlSpecificProperty("enable");
				this._changeStatus("enable", this._ctrlobj._p_enable);
            }
		}
	};

	_pAbstractComponent.set_enableevent = function (val)
	{
		val = nexacro._toBoolean(val);
		if (this._p_enableevent != val)
		{
			this._p_enableevent = val;
			this._setPropertyMap("enableevent", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("enableevent");
		}
	};

	_pAbstractComponent.set_hotkey = function (val)
	{
		if (this._p_hotkey != val)
		{
			this._p_hotkey = val;
			this._setPropertyMap("hotkey", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("hotkey");
		}
	};

	_pAbstractComponent.set_index = function (val)
	{
		if (this._p_index != val)
		{
			this._p_index = val;
			this._setPropertyMap("index", val);
			if (this._ctrlobj)
			{
				this._setControlSpecificProperty("index");
            }
		}
	};

	_pAbstractComponent.set_readonly = function (val)
	{
		if (this._p_readonly != val)
		{
			this._p_readonly = val;
			this._setPropertyMap("readonly", val);
			if (this._ctrlobj)
			{
				this._setControlSpecificProperty("readonly");
				this._changeStatus("readonly", this._ctrlobj._p_readonly);
            }
		}
	};
	
	_pAbstractComponent.set_rtl = function (val)
	{
		if (this._p_rtl != val)
		{
			this._p_rtl = val;
			this._setPropertyMap("rtl", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("rtl");
		}
	};

	_pAbstractComponent.set_taborder = function (val)
	{
		if (this._p_taborder != val)
		{
			this._p_taborder = val;
			this._setPropertyMap("taborder", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("taborder");
		}
	};

	_pAbstractComponent.set_tabstop = function (val)
	{
		if (this._p_tabstop != val)
		{
			this._p_tabstop = val;
			this._setPropertyMap("tabstop", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("tabstop");
		}
	};

	_pAbstractComponent.set_text = function (val)
	{
        var ctrlobj = this._ctrlobj;
        /*if(ctrlobj)
        {
            if(ctrlobj instanceof nexacro.Radio || ctrlobj instanceof nexacro.ListBox || ctrlobj instanceof nexacro.CheckBoxSet) // readonly
                return;
        }*/
		if (this._p_text != val)
		{
			this._p_text = val;
			this._setPropertyMap("text", val);
			if (this._ctrlobj)
			{
				this._setControlSpecificProperty("text");
            }
		}
	};

	_pAbstractComponent.set_tooltiptext = function (val)
	{
		if (this._p_tooltiptext != val)
		{
			this._p_tooltiptext = val;
			this._setPropertyMap("tooltiptext", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("tooltiptext");
		}
	};

	_pAbstractComponent.set_tooltiptype = function (val)
	{
		if (this._p_tooltiptype != val)
		{
			this._p_tooltiptype = val;
			this._setPropertyMap("tooltiptype", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("tooltiptype");
		}
	};

	_pAbstractComponent.set_value = function (val)
	{
        if (!this._is_created && (val === undefined || val === null || val === ""))   // tool에서 입력된 빈값은 ""으로 들어와 구분이 불가하여 체크.
			return;
			
		if (this._p_value != val)
		{
			this._p_value = val;
			this._changeValue();
			this._setPropertyMap("value", val);
			if (this._ctrlobj)
			{
				this._setControlSpecificProperty("value");
            }
		}
	};
    
	_pAbstractComponent.set_visible = function (val)
	{
		if (this._p_visible != val)
		{
			this._p_visible = val;
			this._setPropertyMap("visible", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("visible");
		}
	};

	// Position
	_pAbstractComponent.set_positionstep = function (val)
	{
		if (this._p_positionstep != val)
		{
			this._p_positionstep = val;
			this._setPropertyMap("positionstep", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("positionstep");
		}
	};

	_pAbstractComponent.set_left = function (val)
	{
		if (this._p_left != val)
		{
			this._p_left = val;
			this._setPropertyMap("left", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("left");
		}
	};

	_pAbstractComponent.set_top = function (val)
	{
		if (this._p_top != val)
		{
			this._p_top = val;
			this._setPropertyMap("top", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("top");
		}
	};

	_pAbstractComponent.set_width = function (val)
	{
		if (this._p_width != val)
		{
			this._p_width = val;
			this._setPropertyMap("width", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("width");
		}
	};

	_pAbstractComponent.set_height = function (val)
	{
		if (this._p_height != val)
		{
			this._p_height = val;
			this._setPropertyMap("height", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("height");
		}
	};

	_pAbstractComponent.set_right = function (val)
	{
		if (this._p_right != val)
		{
			this._p_right = val;
			this._setPropertyMap("right", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("right");
		}
	};

	_pAbstractComponent.set_bottom = function (val)
	{
		if (this._p_bottom != val)
		{
			this._p_bottom = val;
			this._setPropertyMap("bottom", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("bottom");
		}
	};

	_pAbstractComponent.set_minwidth = function (val)
	{
		if (this._p_minwidth != val)
		{
			this._p_minwidth = val;
			this._setPropertyMap("minwidth", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("minwidth");
		}
	};

	_pAbstractComponent.set_minheight = function (val)
	{
		if (this._p_minheight != val)
		{
			this._p_minheight = val;
			this._setPropertyMap("minheight", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("minheight");
		}
	};

	_pAbstractComponent.set_maxwidth = function (val)
	{
		if (this._p_maxwidth != val)
		{
			this._p_maxwidth = val;
			this._setPropertyMap("maxwidth", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("maxwidth");
		}
	};

	_pAbstractComponent.set_maxheight = function (val)
	{
		if (this._p_maxheight != val)
		{
			this._p_maxheight = val;
			this._setPropertyMap("maxheight", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("maxheight");
		}
	};

	_pAbstractComponent.set_flexgrow = function (val)
	{
		if (this._p_flexgrow != val)
		{
			this._p_flexgrow = val;
			this._setPropertyMap("flexgrow", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("flexgrow");
		}
	};

	_pAbstractComponent.set_flexshrink = function (val)
	{
		if (this._p_flexshrink != val)
		{
			this._p_flexshrink = val;
			this._setPropertyMap("flexshrink", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("flexshrink");
		}
	};

	_pAbstractComponent.set_layoutorder = function (val)
	{
		if (this._p_layoutorder != val)
		{
			this._p_layoutorder = val;
			this._setPropertyMap("layoutorder", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("layoutorder");
		}
	};

	_pAbstractComponent.set_tablecellarea = function (val)
	{
		if (this._p_tablecellarea != val)
		{
			this._p_tablecellarea = val;
			this._setPropertyMap("tablecellarea", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("tablecellarea");
		}
	};

	// Misc
	_pAbstractComponent.set_acceptvaluetype = function (val)
	{
		if (this._p_acceptvaluetype != val)
		{
			this._p_acceptvaluetype = val;
			this._setPropertyMap("acceptvaluetype", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("acceptvaluetype");
		}
	};

	_pAbstractComponent.set_readonly = function (val)
	{
		if (this._p_readonly != val)
		{
			this._p_readonly = val;
			this._setPropertyMap("readonly", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("readonly");
		}
	};
    
	// Accessibility
	_pAbstractComponent.set_accessibilityaction = function (val)
	{
		if (this._p_accessibilityaction != val)
		{
			this._p_accessibilityaction = val;
			this._setPropertyMap("accessibilityaction", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilityaction");
		}
	};

	_pAbstractComponent.set_accessibilitydesclevel = function (val)
	{
		if (this._p_accessibilitydesclevel != val)
		{
			this._p_accessibilitydesclevel = val;
			this._setPropertyMap("accessibilitydesclevel", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilitydesclevel");
		}
	};

	_pAbstractComponent.set_accessibilitydescription = function (val)
	{
		if (this._p_accessibilitydescription != val)
		{
			this._p_accessibilitydescription = val;
			this._setPropertyMap("accessibilitydescription", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilitydescription");
		}
	};

	_pAbstractComponent.set_accessibilityenable = function (val)
	{
		if (this._p_accessibilityenable != val)
		{
			this._p_accessibilityenable = val;
			this._setPropertyMap("accessibilityenable", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilityenable");
		}
	};

	_pAbstractComponent.set_accessibilitylabel = function (val)
	{
		if (this._p_accessibilitylabel != val)
		{
			this._p_accessibilitylabel = val;
			this._setPropertyMap("accessibilitylabel", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilitylabel");
		}
	};

	_pAbstractComponent.set_accessibilityrole = function (val)
	{
		if (this._p_accessibilityrole != val)
		{
			this._p_accessibilityrole = val;
			this._setPropertyMap("accessibilityrole", val);
			if (this._ctrlobj)
				this._setControlSpecificProperty("accessibilityrole");
		}
	};

	_pAbstractComponent.on_change_containerRect = function (width, height)
	{
		this._resetControl();
		//this._resetContainer(width, height);
	};

	_pAbstractComponent._properties = [{ name: "cssclass" }, { name: "initvalueid" }, { name: "codecolumn" }, { name: "datacolumn" }, { name: "innerdataset" }, { name: "background" }, { name: "border" }, { name: "borderRadius" }, { name: "boxShadow" }, { name: "color" }, { name: "cursor" }, { name: "edge" }, { name: "font" }, { name: "letterSpacing" }, { name: "opacity" }, { name: "padding" }, { name: "wordSpacing" },
	{ name: "enable" }, { name: "enableevent" }, { name: "hotkey" }, { name: "index" }, { name: "rtl" }, { name: "taborder" }, { name: "tabstop" }, { name: "text"/*radio,listbox는 readonly*/ }, { name: "tooltiptext" }, { name: "tooltiptype" }, { name: "value" }, { name: "visible" }, { name: "positionstep" },
	{ name: "left" }, { name: "top" }, { name: "width" }, { name: "height" }, { name: "right" }, { name: "bottom" }, { name: "minwidth" }, { name: "minheight" }, { name: "maxwidth" }, { name: "maxheight" }, { name: "flexgrow" },
	{ name: "flexshrink" }, { name: "layoutorder" }, { name: "tablecellarea" }, { name: "acceptvaluetype" }, { name: "readonly" }, { name: "controltype" }, { name: "accessibilityaction" }, { name: "accessibilitydesclevel" }, { name: "accessibilitydescription" }, { name: "accessibilityenable" },
	{ name: "accessibilitylabel" }, { name: "accessibilityrole" }];
	nexacro._defineProperties(_pAbstractComponent, _pAbstractComponent._properties);

    //===============================================================
    // nexacro.AbstractComponent : OUTER FUNCTIONS (Methods)
    //===============================================================

	_pAbstractComponent.getCount = function ()
	{
		if (this._ctrlobj && this._ctrlobj.getCount)
			return this._ctrlobj.getCount();

		return 0;
	};

	_pAbstractComponent.getInnerDataset = function ()
	{
		if (this._ctrlobj && this._ctrlobj.getInnerDataset)
			return this._ctrlobj.getInnerDataset();

		return null;
	};

	_pAbstractComponent.setInnerDataset = function (obj)
	{
		if (this._ctrlobj && this._ctrlobj.setInnerDataset)
		{
			this._ctrlobj.setInnerDataset(obj);
			this.set_innerdataset(this._ctrlobj.innerdataset);
		}
		else if (!this._ctrlobj)
		{
			if (obj instanceof nexacro.Dataset || (typeof obj == "object" && obj._type_name == "Dataset"))
				this.set_innerdataset(obj);
        }
	};

	_pAbstractComponent.setSelect = function (start, end)
	{
		if (this._ctrlobj && this._ctrlobj.setSelect)
			return this._ctrlobj.setSelect(start, end);

		return false;
	};

	_pAbstractComponent.setSelectedText = function (v)
	{
		if (this._ctrlobj && this._ctrlobj.setSelectedText)
			return this._ctrlobj.setSelectedText(v);

		return "";
	};

	_pAbstractComponent.updateToDataset = function ()
	{
		if (this._ctrlobj && this._ctrlobj.updateToDataset)
		{
			this._ctrlobj.updateToDataset();
			this.set_innerdataset(this._ctrlobj.innerdataset);
        }
	};

    //===============================================================
    // nexacro.AbstractSelectAny : INNER FUNCTIONS (Methods)
    //===============================================================

    _pAbstractComponent._resetContainer = function (width, height)
	{
		this.resize(width, height);
		this._getForm().resetScroll();
	};

	_pAbstractComponent._destroyControl = function ()
	{
		var oldctrl = this._ctrlobjtype;
		if (oldctrl)
		{
			this._deleteControl(oldctrl);
		}
	};

	_pAbstractComponent._appearControl = function (force)
	{
		if (!this._is_created && !force) return;

		var ctrlobj = this._ctrlobj;
		if (ctrlobj)
		{
			/*
			if (!this.parent[this.name])
				this.parent.addChild(this.name, this);
			
			if (!ctrlobj.id)
				ctrlobj.id = ctrlobj.name = ctrlobj.name;
			else
				ctrlobj.id = ctrlobj.name;
			*/
			ctrlobj.show();
		}
	};

	_pAbstractComponent._unlinkControl = function()
	{
		var ctrlobj = this._ctrlobj;
		if (ctrlobj)
		{
			this._p_form.removeChild(ctrlobj._p_name);
		}
	};

    _pAbstractComponent._initValue = function ()
	{
		// init value info
		
		// set value
		this._changeValue();
	};

	_pAbstractComponent._changeValue = function ()
	{
		// get value

		// set control value
		this._setControlValue();
	};

	_pAbstractComponent._setPropertyMap = function (prop, val)
	{
		var _property_map = this._property_map;
		for (var i = 0; i < _property_map.length; i++)
		{
			var propname = _property_map[i][0];
			var propval = _property_map[i][1];

			if (propname == prop && propval == val)
				return;

			if (propname == prop)
			{
				_property_map[i][1] = val;
				return;
			}
		}
		_property_map.push([prop, val]);
	};

	_pAbstractComponent._setControlCommonProperty = function ()
	{
		var ctrl = this._ctrlobj;
		if (!ctrl)
			return;

		var _property_map = this._property_map;
		var v, prop;

		for (var i = 0, n = _property_map.length; i < n; i++)
		{
			prop = _property_map[i][0];
			if (prop != null)
			{
				v = this[prop];
				ctrl["set_" + prop](v);
			}
		}
	};

	_pAbstractComponent._setControlSpecificProperty = function (prop/*, value*/)
	{
		var ctrl = this._ctrlobj;
		if (!ctrl)
			return;

		if (prop != null)
		{
			var v = this[prop];
			ctrl["set_" + prop](v);
			this._syncSelectionDataProps(ctrl, prop);
		}
	};

    _pAbstractComponent._updateParentPosition = function (left, top, width, height)
    {
        this._setAdjustProps(left, top, width, height);
        this.on_change_containerRect();
    };
    
    _pAbstractComponent._setAdjustProps = function (left, top, width, height)
    {
        nexacro.Component.prototype._setAdjustPosition.call(this, left, top);
        nexacro.Component.prototype._setAdjustSize.call(this, width, height);

        if(this._ctrlobj) 
        {
            this._ctrlobj._setAdjustPosition(left, top);
            this._ctrlobj._setAdjustSize(width, height);
        }
    };

    _pAbstractComponent._syncSelectionDataProps = function (ctrl, prop) 
    {
        var properties = ["text", "index", "value"];

        if (properties.includes(prop)) 
        {
            for (var key of properties)
            {
                var val = ctrl["_p_" + key];
                this["_p_" + key] = val;
                this._setPropertyMap(key, val);
            }
        }
    };

	// TODO : 바인딩된 dataset이 변경되어 바인딩이 끊어지는 경우 갱신
	_pAbstractComponent.on_init_bindSource = function (columnid, propid, ds)
	{
		//trace("on_init_bindSource:");
	};

	_pAbstractComponent.on_change_bindSource = function (propid, ds, row, col)
	{
		if (this._ctrlobj) 
		{
			this._p_index = this._ctrlobj._p_index;
			this._p_value = this._ctrlobj._p_value;
			this._p_text = this._ctrlobj._p_text;

			this._ctrlobj.on_change_bindSource(propid, ds, row, col);
		}
	};

	_pAbstractComponent.on_getBindableProperties = function () 
	{
		return ["value"];
	};
    
    //===============================================================
    // nexacro.AbstractComponent : Events
    //===============================================================
    
	_pAbstractComponent._setEventHandlerToControlComponent = function ()
	{
		var ctrlobj = this._ctrlobj;
		if (!ctrlobj)
			return;

		// notify user event
		this._evt_arr = ["canitemchange", "onitemchanged", "onitemclick", "oncontextmenu", "oninnerdatachanged"];
		if (this._evt_arr && 0 < this._evt_arr.length)
		{
			for (var i = 0; i < this._evt_arr.length; i++)
			{
				var evt_id = this._evt_arr[i];
				var listener = this[evt_id];
				if (listener && listener._has_handlers)
					ctrlobj._setEventHandler(evt_id, listener._user_handlers[0].handler, listener._user_handlers[0].target);
			};
		};
	};
};