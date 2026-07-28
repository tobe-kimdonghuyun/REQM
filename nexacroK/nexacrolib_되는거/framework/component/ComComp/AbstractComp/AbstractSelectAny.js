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

if(!nexacro.AbstractSelectAny)
{
    //==============================================================================
    // nexacro.AbstractSelectAny
    //==============================================================================

    nexacro.AbstractSelectAny = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro.AbstractComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

		this._p_selectmulticombo = null;
		this._p_selectcheckboxset = null;
		this._p_selectlistbox = null;

		// TODO : controltype 별 property map depth 분리 (auto, multicombo, listbox, checkboxset)
		// this._property_map_auto = [];
    };
	
	var _pAbstractSelectAny = nexacro._createPrototype(nexacro.AbstractComponent, nexacro.AbstractSelectAny);
	nexacro.AbstractSelectAny.prototype = _pAbstractSelectAny;
	_pAbstractSelectAny._type_name = "AbstractSelectAny";
	
    /* control */

	/* default properties */
	// TODO : property init
	_pAbstractSelectAny._p_value = undefined;
	_pAbstractSelectAny._p_index = -1;
	_pAbstractSelectAny._p_text = "";
	
	_pAbstractSelectAny._p_controltype = "auto";
	_pAbstractSelectAny._p_innerdataset = "";
	_pAbstractSelectAny._p_codecolumn = "";
	_pAbstractSelectAny._p_datacolumn = "";
	
	_pAbstractSelectAny._p_selectmulticombo = null;
	_pAbstractSelectAny._p_selectcheckboxset = null;
	_pAbstractSelectAny._p_selectlistbox = null;
    

    /* internal variable */
	_pAbstractSelectAny._ctrltype = 0;
	_pAbstractSelectAny._ctrlobjtype = 0;
	_pAbstractSelectAny._ctrlobj = null;
	
	_pAbstractSelectAny._multivalueseparator = ",";
	_pAbstractSelectAny._textseparator = ",";
    
	_pAbstractSelectAny._real_visible = false;

	nexacro._AbstractSelectAny_ControlConst =
	{
		CTRLTYPE_AUTO : 0,
		CTRLTYPE_MULTICOMBO : 1,
		CTRLTYPE_CHECKBOXSET : 2,
		CTRLTYPE_LISTBOX : 3,
		CTRLTYPE_HLIMIT1 : 150,
		CTRLTYPE_HLIMIT2 : 300,
		CTRLTYPE_VLIMIT1 : 60,
		CTRLTYPE_VLIMIT2 : 150,
		CTRLTYPE_VLIMIT3 : 200
	};

    /* status */

    /* accessibility */
    _pAbstractSelectAny._p_accessibilityrole = "form";

    // TODO : checkboxset
	_pAbstractSelectAny._event_list = {
		// auto
		"canitemchange": 1, "oncontextmenu": 1,
		"ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
		"oninnerdatachanged": 1, "onitemchanged": 1, "onitemclick": 1,
        "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
        "onkeydown": 1, "onkeyup": 1,
		"onlbuttondown": 1, "onlbuttonup": 1, "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmove": 1,
		"onrbuttondown": 1, "onrbuttonup": 1, "onsize": 1,
		"ontouchend": 1, "ontouchmove": 1, "ontouchstart": 1,
		// multicombo
        "oncloseup": 1, "ondropdown": 1, "oneditclick": 1, "oninput": 1, "onmouseup": 1, "onmousewheel": 1,
		// listBox
		"onhscroll": 1, "onitemdbclick": 1, "onvscroll": 1 
    };

	
    
    //===============================================================
    // nexacro.AbstractSelectAny : Create & Destroy & Update
    //===============================================================
    
    //===============================================================
    // nexacro.AbstractSelectAny : Override
    //===============================================================
    
    //===============================================================
    // nexacro.AbstractSelectAny : Properties
    //===============================================================

	// normal properties

	_pAbstractSelectAny.set_innerdataset = function (val)
	{		
		nexacro.AbstractComponent.prototype.set_innerdataset.call(this, val);
		
		if (this._ctrlobj)
			this._setControlSpecificProperty("index");
	};

	// Appearance
	_pAbstractSelectAny.set_controltype = function (v)
	{
		if (this._p_controltype != v)
		{
			this._p_controltype = v;

			switch (v)
			{
				case "multicombo": this._ctrltype = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO; break;
				case "checkboxset": this._ctrltype = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET; break;
				case "listbox": this._ctrltype = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX; break;
				default: this._ctrltype = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_AUTO; break;
			}

			this._resetControl(true);
		}
	};
	
	_pAbstractSelectAny._properties = [{ name: "selectmulticombo" }, { name: "selectlistbox" }, { name: "selectcheckboxset" }]; // TODO : ctrlobj setter
	nexacro._defineProperties(_pAbstractSelectAny, _pAbstractSelectAny._properties);

    //===============================================================
    // nexacro.AbstractSelectAny : OUTER FUNCTIONS (Methods)
    //===============================================================

	_pAbstractSelectAny.getSelectedItems = function ()
	{
		if (this._ctrlobj && this._ctrlobj.getSelectedItems)
			return this._ctrlobj.getSelectedItems();
	}

	_pAbstractSelectAny.clearSelect = function ()
	{
		if (this._ctrlobj && this._ctrlobj.clearSelect)
			this._ctrlobj.clearSelect();
	}

	_pAbstractSelectAny.getSelect = function ()
	{
		if (this._ctrlobj && this._ctrlobj.getSelect)
			return this._ctrlobj.getSelect();
	}

	_pAbstractSelectAny.getSelectedCount = function ()
	{
		if (this._ctrlobj && this._ctrlobj.getSelectedCount)
			return this._ctrlobj.getSelectedCount();
	}
	
    //===============================================================
    // nexacro.AbstractSelectAny : INNER FUNCTIONS (Methods)
    //===============================================================


	_pAbstractSelectAny._resetControl = function (force)
	{
		var oldctrl = this._ctrlobjtype;
		var newctrl = this._ctrlobjtype;

		if (this._ctrltype == nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_AUTO)
		{
			var fw = this.getOffsetWidth();
			var fh = this.getOffsetHeight();

			// Component Size Rule
			if (fh <= nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_VLIMIT1)
				newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO;
			else if (fh <= nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_VLIMIT2)
				newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX;
			else
				newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET;
			
			if (this._p_selectcheckboxset && this._p_selectcheckboxset._innerdataset)
			{
				if(this._p_selectcheckboxset._p_direction == "vertical")
				{
					if (fw > nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_HLIMIT1 &&
						fh > nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_VLIMIT1)
						newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET;
				}
			}

			//this._resetControlByData();
			this._ctrlobjtype = newctrl;
		}		
		else if (!this._ctrlobjtype || force)
		{
			newctrl = this._ctrlobjtype = this._ctrltype;
		}

		if (oldctrl != newctrl)
		{
			//this._unlinkControl();
			this._deleteControl(oldctrl);
			this._createControl(newctrl);
			this._setattControl(newctrl);
			this._appearControl(true);
			this._resetControlByData();
		}
	};

	_pAbstractSelectAny._resetControlByData = function (force)
	{
		var oldctrl = this._ctrlobjtype;
		var newctrl = this._ctrlobjtype;

		if (this._ctrltype == nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_AUTO)
		{
			if (this._p_innerdataset && this._ctrlobj)
			{
				// TODO : innerdataset type check
				// 첫 로드 시 page rowcunt 유무 확인
				// 애초에 control을 다 만들고 binddata를 비교해야하나 ?
				if (this._p_selectcheckboxset && this._p_selectcheckboxset._innerdataset)
				{
					// TODO
					var item = this._p_selectcheckboxset._items[0];
					var item_height = item._on_getFitSize()[1];
					var total_height = item_height * this._p_selectcheckboxset._innerdataset._p_rowcount;
					var fh = this.getOffsetHeight();
					if (total_height > fh)
						newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX;					
				}
				else if (this._p_selectlistbox && this._p_selectlistbox._innerdataset)
				{
					// Component Size Rule
					var fh = this.getOffsetHeight();

					if (fh > nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_VLIMIT2)
						newctrl = nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET;
				}

				this._ctrlobjtype = newctrl;
			}
		}
		else if (!this._ctrlobjtype || force)
		{
			newctrl = this._ctrlobjtype = this._ctrltype;
		}

		if (oldctrl != newctrl)
		{
			//this._select_multi = this._ctrlobj._select_multi; // multi select info 끌어올리기
			this._deleteControl(oldctrl);
			this._createControl(newctrl);
			this._setattControl(newctrl);
			this._appearControl(true);
		}
	};
	
	_pAbstractSelectAny._deleteControl = function(oldctrl)
	{
		if (oldctrl)
		{
			switch(oldctrl)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO*/: this._deleteMultiComboControl(); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET*/: this._deleteCheckboxSetControl(); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/ : this._deleteListBoxControl(); break;
			}
		}
		
		this._ctrlobj = null;
	};

	_pAbstractSelectAny._createControl = function (newctrl)
	{
		var ctrlobj = null;
		
		if (newctrl)
		{
			switch(newctrl)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO*/: ctrlobj = this._createMultiComboControl(); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET*/: ctrlobj = this._createCheckboxSetControl(); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/ : ctrlobj = this._createListBoxControl(); break;
			}
			ctrlobj._is_control_component = true;
			this._ctrlobj = ctrlobj;
			this._setEventHandlerToControlComponent();
		}
	};

	_pAbstractSelectAny._setattControl = function (newctrl)
	{
		var ctrlobj = this._ctrlobj;
		if (ctrlobj)
		{
			// common attribute
			this._setControlCommonProperty();

			// apply multi select info
			//this._setControlSelectMultiInfo();

			// control attribute
			switch(newctrl)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO*/: this._setattMultiComboControl(); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET*/: this._setattCheckboxSetControl(); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/ : this._setattListBoxControl(); break;
			}
			
			// bind
			this._resetInnerBind();			
			ctrlobj._bind_event = this._bind_event;

			// value
			this._initValue();
		}
	};
	/*
	_pAbstractSelectAny._setControlSelectMultiInfo = function () 
	{		
		var ctrl = this._ctrlobj;
		if (!ctrl)
			return;
		
		if (this._select_multi) 
		{
			ctrl._select_multi = this._select_multi;
			ctrl._select_withmouseevent(ctrl.index);
		}
	};
	*/	
	
	_pAbstractSelectAny._createMultiComboControl = function ()
	{
		if (!this._p_selectmulticombo)
		{
			this._p_selectmulticombo = new nexacro.MultiCombo("selectmulticombo", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);

			//this.selectmulticombo.addEventHandler("onitemchanged", this._onControlItemChanged, this);
			//this.selectmulticombo.addEventHandler("onitemclick", this._onControlItemClick, this);

		};
		
		return this._p_selectmulticombo;
	};

	_pAbstractSelectAny._createCheckboxSetControl = function ()
	{
		if (!this._p_selectcheckboxset)
		{
			this._p_selectcheckboxset = new nexacro.CheckBoxSet("selectcheckboxset", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);

			//this.selectcheckboxset.addEventHandler("onitemchanged", this._onControlItemChanged, this)
			//this.selectcheckboxset.addEventHandler("onclick", this._onControlItemChanged, this)
		}

		return this._p_selectcheckboxset;
	};

	_pAbstractSelectAny._createListBoxControl = function ()
	{
		if (!this._p_selectlistbox)
		{
			this._p_selectlistbox = new nexacro.ListBox("selectlistbox", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);
			
			// TODO : multiselect = true (readonly)
			this._p_selectlistbox.set_multiselect(true);
			
			//this.selectlistbox.addEventHandler("onitemchanged", this._onControlItemChanged, this)
		}

		return this._p_selectlistbox;
	};

	_pAbstractSelectAny._setattMultiComboControl = function ()
	{
		if (this._p_selectmulticombo)
		{
			// TODO
		}
	};

	_pAbstractSelectAny._setattCheckboxSetControl = function () 
	{
		if (this._p_selectcheckboxset)
		{
			// TODO
			this._p_selectcheckboxset.set_direction("vertical");

		}
	};

	_pAbstractSelectAny._setattListBoxControl = function ()
	{
		if (this._p_selectlistbox)
		{
			// TODO
		}
	};
	
	_pAbstractSelectAny._deleteMultiComboControl = function ()
	{
		if (this._p_selectmulticombo)
		{
			this._p_selectmulticombo.destroy();
			delete this._p_selectmulticombo;
			this._p_selectmulticombo = null;
		}
	};

	_pAbstractSelectAny._deleteCheckboxSetControl = function ()
	{
		if (this._p_selectcheckboxset)
		{
			this._p_selectcheckboxset.destroy();
			delete this._p_selectcheckboxset;
			this._p_selectcheckboxset = null;
		}
	};

	_pAbstractSelectAny._deleteListBoxControl = function ()
	{
		if (this._p_selectlistbox)
		{
			this._p_selectlistbox.destroy();
			delete this._p_selectlistbox;
			this._p_selectlistbox = null;
		}
	};
	/*
	_pAbstractSelectAny._recheckSelectItemValue = function ()
	{
		var ctrl = this._ctrlobj;
		if (!ctrl)
			return;

		var _property_map = this._property_map;

		for (var i = 0, n = _property_map.length; i < n; i++)
		{
			var v;
			var prop = _property_map[i][0];
			if (prop != null)
				v = this[prop];

			if (prop == "value" || prop == "index" || prop == "text")
			{
				this[prop] = v;
				this._setPropertyMap(prop, v);
			}
		}
	};
	*/
	
	_pAbstractSelectAny._setControlValue = function ()
	{
		if (this._ctrlobjtype && this._ctrlobj)
		{
			var env = this._getEnvironment();
			if (env?._p_multivalueseparator && env._p_multivalueseparator != this._multivalueseparator)
				this._multivalueseparator = env._p_multivalueseparator;

			switch (this._ctrlobjtype)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO*/: this._ctrlobj.set_value(this._p_value); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET*/: this._ctrlobj.set_value(this._p_value); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/:
					if (typeof this._p_index === "string")
					{
						var indexes = this._p_index.split(",");
						var lastidx = indexes[indexes.length - 1];
						this._ctrlobj._p_index = lastidx;

						for (var i = 0; i < indexes.length; i++)
						{
							var idx = indexes[i];
							this._ctrlobj._select_add(idx);
							this._ctrlobj._set_last_selectfocused(idx);
						}
					}
					else
					{
						this._ctrlobj.set_value(this._p_value);
					}
					break;
			}
		}
	};

	_pAbstractSelectAny._resetInnerBind = function ()
	{
		// set innerbind
		if (this._ctrlobjtype && this._ctrlobj)
		{			
			var ds = this._innerdataset ? this._innerdataset : this._p_innerdataset;
			
			switch(this._ctrlobjtype)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_MULTICOMBO*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_CHECKBOXSET*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
			}			
		}
    };

	_pAbstractSelectAny._updateMultiSelectProperty = function (index, text, value, isSelected)
	{
		var valueseparator = this._multivalueseparator;
		var textseparator = this._textseparator;
		this._p_index = this._p_index + "";
		if (isSelected)
		{
			// select add
			this._p_index && this._p_index != "-1" ? this._p_index += "," + index : this._p_index = index;
			this._p_text ? this._p_text += textseparator + text : this._p_text = text;
			this._p_value ? this._p_value += valueseparator + value : this._p_value = value;
		}
		else
		{
			// select remove
			this._p_index = this._p_index.split(",").filter((idx) => idx !== index + "").join(",");
			this._p_text = this._p_text.split(textseparator).filter((txt) => txt !== text).join(textseparator);
			this._p_value = this._p_value.split(valueseparator).filter((val) => val !== value).join(valueseparator);
		}
	};

	//_removeEventHandlerToInnerDataset

    //===============================================================
    // nexacro.AbstractSelectAny : Events
    //===============================================================
    
	/*
	_pAbstractSelectAny._onControlItemChanged = function (o, e)
	{
		this.value = e.postvalue;
		//trace("_onControlItemChanged - object : ", o, " / event : ",  e);
		this.on_fire_onitemchanged(o, e);
	};

	_pAbstractSelectAny.on_fire_onitemchanged = function (o, e)
	{
		if (this.onitemchanged && this.onitemchanged._has_handlers)
		{
			var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", e.preindex, e.pretext, e.prevalue, e.postindex, e.posttext, e.postvalue);
			
			return this.onitemchanged.fireEvent(this, evt);
		}
		return false;
	};

	_pAbstractSelectAny._onControlItemClick = function (o, e) {
		this.value = e.postvalue;
		//trace("_onControlItemClick - object : ", o, " / event : ", e);
		this.on_fire_onitemclick(o, e);
	};

	_pAbstractSelectAny.on_fire_onitemclick = function (o, e)
	{
		if (this.onitemclick && this.onitemclick._has_handlers)
		{
			var evt = new nexacro.ItemClickEventInfo(o, "onitemclick", e.preindex, e.pretext, e.prevalue, e.postindex, e.posttext, e.postvalue);
			this.onitemclick._fireEvent(this, evt);
		}

		return false;
	};
	*/
	//===============================================================
	// nexacro.AbstractSelectAny : Style Part
	//===============================================================

	// genie : 필요한가?
	_pAbstractSelectAny.on_get_css_assumedtypename = function ()
	{
		if (this._p_selectmulticombo)
			return "MultiCombo";
		else if (this._p_selectcheckboxset)
			return "CheckboxSet";
		else if (this._p_selectlistbox)
			return "ListBox";

		return this._type_name; // genie : default return 값을 어떻게 가져갈까? 
	};
}

