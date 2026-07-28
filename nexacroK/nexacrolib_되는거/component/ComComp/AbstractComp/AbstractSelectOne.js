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

if(!nexacro.AbstractSelectOne)
{
    //==============================================================================
	// nexacro.AbstractSelectOne
	//==============================================================================

    nexacro.AbstractSelectOne = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro.AbstractComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

		this._p_selectcombo = null;
		this._p_selectradio = null;
		this._p_selectlistbox = null;

		// TODO : controltype 별 property map depth 분리 (auto, combo, listbox, radio)
		// this._property_map_auto = [];
    };
	
	var _pAbstractSelectOne = nexacro._createPrototype(nexacro.AbstractComponent, nexacro.AbstractSelectOne);
	nexacro.AbstractSelectOne.prototype = _pAbstractSelectOne;
	_pAbstractSelectOne._type_name = "AbstractSelectOne";
	
    /* control */

	/* default properties */
	// TODO : property init
	_pAbstractSelectOne._p_value = undefined;
	_pAbstractSelectOne._p_index = -1;
	_pAbstractSelectOne._p_text = "";

	_pAbstractSelectOne._p_controltype = "auto";
	_pAbstractSelectOne._p_innerdataset = "";
	_pAbstractSelectOne._p_codecolumn = "";
	_pAbstractSelectOne._p_datacolumn = "";
	
	_pAbstractSelectOne._p_selectcombo = null;
	_pAbstractSelectOne._p_selectradio = null;
	_pAbstractSelectOne._p_selectlistbox = null;
    

    /* internal variable */
	_pAbstractSelectOne._ctrltype = 0;
	_pAbstractSelectOne._ctrlobjtype = 0;
    _pAbstractSelectOne._ctrlobj = null;
    
	_pAbstractSelectOne._real_visible = false;

	nexacro._AbstractSelectOne_ControlConst =
	{
		CTRLTYPE_AUTO : 0,
		CTRLTYPE_COMBO : 1,
		CTRLTYPE_RADIO : 2,
		CTRLTYPE_LISTBOX : 3,
		CTRLTYPE_HLIMIT1 : 150,
		CTRLTYPE_HLIMIT2 : 300,
		CTRLTYPE_VLIMIT1 : 60,
		CTRLTYPE_VLIMIT2 : 150,
		CTRLTYPE_VLIMIT3 : 200
	};

    /* status */

    /* accessibility */
	_pAbstractSelectOne._p_accessibilityrole = "form";

	_pAbstractSelectOne._event_list = {
		// auto
		"canitemchange": 1, "oncontextmenu": 1,
		"ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
		"oninnerdatachanged": 1, "onitemchanged": 1, "onitemclick": 1,
        "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
        "onkeydown": 1, "onkeyup": 1, 
		"onlbuttondown": 1, "onlbuttonup": 1, "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmove": 1,
		"onrbuttondown": 1, "onrbuttonup": 1, "onsize": 1,
		"ontouchend": 1, "ontouchmove": 1, "ontouchstart": 1,
		// combo
		"oncloseup": 1, "ondropdown": 1, "oneditclick": 1, "oninput": 1, "onmouseup": 1, "onmousewheel": 1,
		// listBox
		"onhscroll": 1, "onitemdbclick": 1, "onvscroll": 1 
    };

    //===============================================================
    // nexacro.AbstractSelectOne : Create & Destroy & Update
    //===============================================================

    //===============================================================
    // nexacro.AbstractSelectOne : Override
    //===============================================================


    //===============================================================
    // nexacro.AbstractSelectOne : Properties
	//===============================================================

	// Appearance
	_pAbstractSelectOne.set_controltype = function (v)
	{
		if (this._p_controltype != v)
		{
			this._p_controltype = v;

			switch (v)
			{
				case "combo": this._ctrltype = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO; break;
				case "radio": this._ctrltype = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO; break;
				case "listbox": this._ctrltype = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX; break;
				default: this._ctrltype = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_AUTO; break;
			}

			this._resetControl(true);
		}
	};

	_pAbstractSelectOne._properties = [{ name: "selectcombo" }, { name: "selectlistbox" }, { name: "selectradio" }]; // TODO : ctrlobj setter
	nexacro._defineProperties(_pAbstractSelectOne, _pAbstractSelectOne._properties);
	
	//===============================================================
    // nexacro.AbstractSelectOne : OUTER FUNCTIONS (Methods)
    //===============================================================

    //===============================================================
    // nexacro.AbstractSelectOne : INNER FUNCTIONS (Methods)
    //===============================================================

	_pAbstractSelectOne._resetControl = function (force)
	{
		var oldctrl = this._ctrlobjtype;
		var newctrl = this._ctrlobjtype;

		if (this._ctrltype == nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_AUTO)
		{
			var fw = this.getOffsetWidth();
			var fh = this.getOffsetHeight();

			// Component Size Rule			
			if (fh <= nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_VLIMIT1)
				newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO;
			else if (fh <= nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_VLIMIT2)
				newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX;
			else
				newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO;

			if (this._p_selectradio && this._p_selectradio._innerdataset)
			{
				if(this._p_selectradio._p_direction == "vertical")
				{
					if (fw > nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_HLIMIT1 &&
						fh > nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_VLIMIT1)
						newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO;
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

	_pAbstractSelectOne._resetControlByData = function (force)
	{
		var oldctrl = this._ctrlobjtype;
		var newctrl = this._ctrlobjtype;

		if (this._ctrltype == nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_AUTO)
		{
			if (this._p_innerdataset && this._ctrlobj)
			{
				// TODO : innerdataset type check
				// 첫 로드 시 page rowcunt 유무 확인
				// 애초에 control을 다 만들고 binddata를 비교해야하나 ?
				if (this._p_selectradio && this._p_selectradio._innerdataset)
				{
					var item = this._p_selectradio._items[0];
					var item_height = item._on_getFitSize()[1];
					var total_height = item_height * this._p_selectradio._innerdataset._p_rowcount;
					var fh = this.getOffsetHeight();
					if (total_height > fh)
						newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX;
				}
				else if (this._p_selectlistbox && this._p_selectlistbox._innerdataset)
				{
					// Component Size Rule
					var fh = this.getOffsetHeight();

					if (fh > nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_VLIMIT2)
						newctrl = nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO;
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
			this._deleteControl(oldctrl);
			this._createControl(newctrl);
			this._setattControl(newctrl);
			this._appearControl(true);
		}
	};

	_pAbstractSelectOne._deleteControl = function(oldctrl)
	{
		if (oldctrl)
		{
			switch(oldctrl)
			{
				case 1 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO*/: this._deleteComboControl(); break;
				case 2 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO*/: this._deleteRadioControl(); break;
				case 3 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX*/ : this._deleteListBoxControl(); break;
			}
		}
		
		this._ctrlobj = null;
	};

	_pAbstractSelectOne._createControl = function (newctrl)
	{
		var ctrlobj = null;
		
		if (newctrl)
		{
			switch(newctrl)
			{
				case 1 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO*/: ctrlobj = this._createComboControl(); break;
				case 2 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO*/: ctrlobj = this._createRadioControl(); break;
				case 3 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX*/ : ctrlobj = this._createListBoxControl(); break;
			}
			ctrlobj._is_control_component = true;
			this._ctrlobj = ctrlobj;
			this._setEventHandlerToControlComponent();
		}
	};

	_pAbstractSelectOne._setattControl = function (newctrl)
	{
		var ctrlobj = this._ctrlobj;
		if (ctrlobj)
		{
			// common attribute
			this._setControlCommonProperty();

			// control attribute
			switch(newctrl)
			{
				case 1 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_COMBO*/: this._setattComboControl(); break;
				case 2 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_RADIO*/: this._setattRadioControl(); break;
				case 3 /*nexacro._AbstractSelectAny_ControlConst.CTRLTYPE_LISTBOX*/ : this._setattListBoxControl(); break;
			}
			
			// bind
			this._resetInnerBind();
			ctrlobj._bind_event = this._bind_event;

			// value
			this._initValue();
		}
	};
	
	_pAbstractSelectOne._createComboControl = function ()
	{
		if (!this._p_selectcombo)
		{
			this._p_selectcombo = new nexacro.Combo("selectcombo", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);

			//this.selectcombo.addEventHandler("onitemchanged", this._onControlItemChanged, this);
			//this.selectcombo.addEventHandler("onitemclick", this._onControlItemClick, this);

		};
		
		return this._p_selectcombo;
	};

	_pAbstractSelectOne._createRadioControl = function ()
	{
		if (!this._p_selectradio)
		{
			this._p_selectradio = new nexacro.Radio("selectradio", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);

			//this.selectradio.addEventHandler("onitemchanged", this._onControlItemChanged, this)
			//this.selectradio.addEventHandler("onclick", this._onControlItemChanged, this)
		}

		return this._p_selectradio;
	};

	_pAbstractSelectOne._createListBoxControl = function ()
	{
		if (!this._p_selectlistbox)
		{
			this._p_selectlistbox = new nexacro.ListBox("selectlistbox", this._p_left, this._p_top, this._p_width, this._p_height, this._p_right, this._p_bottom, this._p_minwidth, this._p_maxwidth, this._p_minheight, this._p_maxheight, this);

			//this.selectlistbox.addEventHandler("onitemchanged", this._onControlItemChanged, this)
		}

		return this._p_selectlistbox;
	};

	_pAbstractSelectOne._setattComboControl = function ()
	{
		if (this._p_selectcombo)
		{
			// TODO
		}
	};

	_pAbstractSelectOne._setattRadioControl = function () 
	{
		if (this._p_selectradio)
		{
			// TODO

		}
	};

	_pAbstractSelectOne._setattListBoxControl = function ()
	{
		if (this._p_selectlistbox)
		{
			// TODO
		}
	};
	
	_pAbstractSelectOne._deleteComboControl = function ()
	{
		if (this._p_selectcombo)
		{
			this._p_selectcombo.destroy();
			delete this._p_selectcombo;
			this._p_selectcombo = null;
		}
	};

	_pAbstractSelectOne._deleteRadioControl = function ()
	{
		if (this._p_selectradio)
		{
			this._p_selectradio.destroy();
			delete this._p_selectradio;
			this._p_selectradio = null;
		}
	};

	_pAbstractSelectOne._deleteListBoxControl = function ()
	{
		if (this._p_selectlistbox)
		{
			this._p_selectlistbox.destroy();
			delete this._p_selectlistbox;
			this._p_selectlistbox = null;
		}
	};
	/*
	_pAbstractSelectOne._recheckSelectItemValue = function ()
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
				v = ctrl[prop];

			if (prop == "value" || prop == "index" || prop == "text")
			{
				this[prop] = v;
				this._setPropertyMap(prop, v);
			}
		}
	};
	*/
	
	_pAbstractSelectOne._setControlValue = function ()
	{
		if (this._ctrlobjtype && this._ctrlobj)
		{
			switch (this._ctrlobjtype)
			{
				case 1 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO*/: this._ctrlobj.set_value(this._p_value); break;
				case 2 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO*/: this._ctrlobj.set_value(this._p_value); break;
				case 3 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX*/: this._ctrlobj.set_value(this._p_value); break;
			}
		}
	};

	_pAbstractSelectOne._resetInnerBind = function ()
	{
		// set innerbind
		if (this._ctrlobjtype && this._ctrlobj)
		{
			var ds = this._innerdataset? this._innerdataset : this._p_innerdataset;
			
			switch(this._ctrlobjtype)
			{
				case 1 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_COMBO*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
				case 2 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_RADIO*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
				case 3 /*nexacro._AbstractSelectOne_ControlConst.CTRLTYPE_LISTBOX*/: this._ctrlobj.set_innerdataset(ds); this._ctrlobj.set_codecolumn(this._p_codecolumn); this._ctrlobj.set_datacolumn(this._p_datacolumn); break;
			}			
		}
    };
    
    //_removeEventHandlerToInnerDataset
	
    //===============================================================
    // nexacro.AbstractSelectOne : Events
    //===============================================================
	
	/*
	_pAbstractSelectOne._onControlItemChanged = function (o, e)
	{
		this.value = e.postvalue;
		//trace("_onControlItemChanged - object : ", o, " / event : ",  e);
		this.on_fire_onitemchanged(o, e);
	};

	_pAbstractSelectOne.on_fire_onitemchanged = function (o, e)
	{
		if (this.onitemchanged && this.onitemchanged._has_handlers)
		{
			var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", e.preindex, e.pretext, e.prevalue, e.postindex, e.posttext, e.postvalue);
			
			return this.onitemchanged.fireEvent(this, evt);
		}
		return false;
	};

	_pAbstractSelectOne._onControlItemClick = function (o, e) {
		this.value = e.postvalue;
		//trace("_onControlItemClick - object : ", o, " / event : ", e);
		this.on_fire_onitemclick(o, e);
	};

	_pAbstractSelectOne.on_fire_onitemclick = function (o, e)
	{
		if (this.onitemclick && this.onitemclick._has_handlers)
		{
			var evt = new nexacro.ItemClickEventInfo(o, "onitemclick", e.preindex, e.pretext, e.prevalue, e.postindex, e.posttext, e.postvalue);
			this.onitemclick._fireEvent(this, evt);
		}

		return false;
	};
	*/

	//==============================================================================
	// nexacro.AbstractSelectOne : Style Part
	//==============================================================================

	// genie : 필요한가?
	_pAbstractSelectOne.on_get_css_assumedtypename = function ()
	{
		if (this._p_selectcombo)
			return "Combo";
		else if (this._p_selectradio)
			return "Radio";
		else if (this._p_selectlistbox)
			return "ListBox";

		return this._type_name; // genie : default return 값을 어떻게 가져갈까? 
	};
};