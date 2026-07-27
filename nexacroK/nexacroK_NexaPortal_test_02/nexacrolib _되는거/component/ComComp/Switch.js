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

if (!nexacro.Switch)
{
    //==============================================================================
    // nexacro.SwitchChangedEventInfo
    //==============================================================================
    nexacro.SwitchChangedEventInfo = function (obj, id, prevalue, postvalue)
    {
        this.id = this.eventid = id || "onchanged";
        this.prevalue = prevalue;
        this.postvalue = postvalue;
        this.fromobject = this.fromreferenceobject = obj;
    };

    var _pSwitchChangedEventInfo = nexacro._createPrototype(nexacro.ChangedEventInfo, nexacro.SwitchChangedEventInfo);
    nexacro.SwitchChangedEventInfo.prototype = _pSwitchChangedEventInfo;
    _pSwitchChangedEventInfo._type_name = "SwitchChangedEventInfo";

    _pSwitchChangedEventInfo = null;

    //==============================================================================
    // nexacro.Switch
    //==============================================================================
    nexacro.Switch = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    };

    var _pSwitch = nexacro._createPrototype(nexacro.Component, nexacro.Switch);
    nexacro.Switch.prototype = _pSwitch;
    _pSwitch._type_name = "Switch";

    /*  control  */
    _pSwitch.switchbutton = null;
    _pSwitch._switchtext = null;

    /* default properties */
    _pSwitch._p_text = "";
    _pSwitch._p_value = false;
    _pSwitch._p_readonly = false;
    _pSwitch._p_falsevalue = null;
    _pSwitch._p_truevalue = null;
    _pSwitch._p_textposition = "right";
    _pSwitch._p_bartype = "fit";
    _pSwitch._p_switchbuttonsize = undefined;

    /*status*/
    _pSwitch._is_focus_acceptable = true;
    _pSwitch._use_pushed_status = false;
    _pSwitch._use_selected_status = true;
    _pSwitch._use_readonly_status = true;

    /*accessibility*/
    _pSwitch._p_accessibilityrole = "checkbox";

    /* internal variable */
    _pSwitch._default_value = false;
    _pSwitch._selectstatus = false;

    /* event list */
    _pSwitch._event_list = {
        "onclick": 1, "ondblclick": 1, "onkillfocus": 1, "onsetfocus": 1,
        "oninput": 1, "onkeydown": 1, "onkeyup": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
        "onmousedown": 1, "onmouseup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmousewheel": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onmove": 1, "onsize": 1, "oncontextmenu": 1, "onchanged": 1, "canchange": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1, "ondevicebuttonup": 1
    };

    //===============================================================
    // nexacro.Switch : Create & Destroy & Update 
    //===============================================================
    _pSwitch.on_create_contents = function ()
    {
        const client_height = this._getClientHeight();

        // create switchbuttoncontrol
        const switchbutton = new nexacro.SwitchButtonControl("switchbutton", 0, 0, 0, 0, null, null, null, null, null, null, this);
        switchbutton._setControl();
        //switchbutton.resize(client_height * 2, client_height);
        switchbutton.createComponent(true);
        this.switchbutton = switchbutton;

        // create switchtext
        const switchtext = new nexacro._IconText("switchtext", 0, 0, 0, 0, null, null, null, null, null, null, this);
        switchtext._setControl();
        switchtext.set_text(this._p_text);
        //switchtext.resize(client_height - switchbutton._width, client_height);
        switchtext.createComponent(true);
        this._switchtext = switchtext;

        nexacro.Component.prototype.on_create_contents.call(this);
    };

    _pSwitch.on_created_contents = function (win) 
    {
        if (this._switchtext)
        {
            this._switchtext.on_created(win);
        }

        if (this.switchbutton)
        {
            this.switchbutton.on_created(win);

            const env = win._getEnvironment();
            if (env._p_enableaccessibility)
            {
                this._on_created_accessibility_contents(win, true);
                this.switchbutton._setAccessibilityStatHidden(true);
            }
        }

        nexacro.Component.prototype.on_created_contents.call(this, win);
    };

    _pSwitch.on_destroy_contents = function ()
    {
        if (this.switchbutton)
        {
            this.switchbutton.destroy();
            this.switchbutton = null;
        }
        if (this._switchtext)
        {
            this._switchtext.destroy();
            this._switchtext = null;
        }
    };

    _pSwitch.on_create_contents_command = function ()
    {
        var str = "";

        if (this.switchbutton)
        {
            str += this.switchbutton.createCommand();
        }
        if (this._switchtext)
        {
            str += this._switchtext.createCommand();
        }

        return str;
    };

    _pSwitch.on_attach_contents_handle = function (win, enablea11y)
    {
        if (this.switchbutton)
        {
            this.switchbutton.attachHandle(win, enablea11y);
        }
        if (this._switchtext)
        {
            this._switchtext.attachHandle(win, enablea11y);
        }

        if (enablea11y)
        {
            this._on_attach_accessibility_contents_handle(win, enablea11y);
        }
        nexacro.Component.prototype.on_attach_contents_handle.call(this, win);
    };

    // final created
    _pSwitch.on_after_created = function ()
    {
        this.on_apply_bartype();
        this.on_apply_switchbuttonsize();
        this.on_apply_textposition();

        this._recalcLayout();
        this.on_apply_value();
    };

    _pSwitch.on_change_containerRect = function (width, height)
    {
        // height 변경될 때 size 조정
        if (this._height != height)
        {
            this._recalcLayout();
        }
    };

    //===============================================================
    // nexacro.Switch : Override
    //===============================================================
    _pSwitch._on_changeUserStatus = function (status, value)
    {
        if (this.switchbutton)
        {
            this.switchbutton._changeUserStatus(status, value);
        }
        nexacro.Component.prototype._on_changeUserStatus.call(this, status, value);
    };

    _pSwitch.on_init_bindSource = function (columnid, propid, ds)
    {
        if (propid == "value")
        {
            this._setValue(this._default_value);
            this.on_apply_value();
        }
    };

    _pSwitch.on_change_bindSource = function (propid, ds, row, col)
    {
        if (propid == "value")
        {
            this._setValue(this._changeValue(ds.getColumn(row, col)));
            this.on_apply_value();
        }
    };

    _pSwitch.on_getBindableProperties = function ()
    {
        return "value";
    };

    _pSwitch._on_hotkey = function (key_code, alt_key, ctrl_key, shift_key)
    {
        this.on_fire_onclick("", alt_key, ctrl_key, shift_key, -1, -1, -1, -1, -1, -1, this, this, false);
    };

    _pSwitch._isFocusAcceptable = function ()
    {
        return this._is_focus_acceptable;
    };

    //===============================================================
    // nexacro.Switch : Properties
    //===============================================================
    _pSwitch.on_apply_text = function (text)
    {
        if (this._switchtext)
        {
            // _on_apply_text 함수 수정하고 변경
            this._switchtext.set_text(text);
            this._recalcLayout();
        }
    };

    _pSwitch.on_apply_textAlign = function (halign)
    {
        if (this._switchtext)
        {
            this._switchtext.on_apply_textAlign(halign);
        }
    };

    _pSwitch.on_apply_verticalAlign = function (valign)
    {
        if (this._switchtext)
        {
            this._switchtext.on_apply_verticalAlign(valign);
        }
    };

    _pSwitch.on_apply_textDecoration = function (textDecoration)
    {
        if (this._switchtext)
        {
            this._switchtext.on_apply_textDecoration(textDecoration);
        }
    };

    _pSwitch.on_apply_wordWrap = function (wordWrap)
    {
        if (this._switchtext)
        {
            this._switchtext.on_apply_wordWrap(wordWrap);
        }
    };

    _pSwitch.on_apply_edge = function ()
    {
        if (this._is_created)
        {
            var control_elem = this._control_element;
            if (control_elem)
                control_elem.setElementEdge(this._edge);
        }
    };

    _pSwitch.set_switchbuttonsize = function (v)
    {
        //v = nexacro._isNull(v) ? 0 : +v;

        if (this._p_switchbuttonsize != v)
        {
            this._p_switchbuttonsize = v;
            this.on_apply_switchbuttonsize();
        }
    }

    _pSwitch.on_apply_switchbuttonsize = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            if (this.switchbutton)
            {
                this.switchbutton._setButtonSize(this._p_switchbuttonsize);
                this.switchbutton._recalcLayout();
            }
        }
    }

    _pSwitch.set_textposition = function (v)
    {
        if (this._p_textposition != v)
        {
            this._p_textposition = v;
            this.on_apply_textposition();
        }
    }

    _pSwitch.on_apply_textposition = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            this._recalcLayout();

            if (this.switchbutton)
            {
                this.switchbutton._setTextPosition(this._p_textposition);
                this.switchbutton._recalcLayout();
            }
        }
    }

    _pSwitch.set_bartype = function (v)
    {
        if (this._p_bartype != v)
        {
            this._p_bartype = v;
            this.on_apply_bartype();
        }
    }

    _pSwitch.on_apply_bartype = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            if (this.switchbutton)
            {
                this.switchbutton._setBarType(this._p_bartype);
                this.switchbutton._recalcLayout();
            }
        }
    };

    _pSwitch.set_value = function (v)
    {
        v = this._changeValue(v);
        if (this._p_value != v)
        {
            if (this.applyto_bindSource("value", v))
            {
                this._setValue(v);
                this.on_apply_value();
            }
        }
    }

    _pSwitch.on_apply_value = function () 
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            let checked = this._isChecked(this._p_value);
            this._changeUserStatus("selected", checked);

            if (this.switchbutton)
            {
                this.switchbutton._setValue(checked);
                this.switchbutton._moveToggleButton(checked);
            }
        }
    };

    _pSwitch.set_truevalue = function (v)
    {
        if (v != undefined)
            v = v.toString();

        if (this._p_truevalue !== v)
        {
            if (this._isChecked(this._p_value))
            {
                if (this.applyto_bindSource("value", v))
                {
                    this._setValue(v);
                }
            }
            this._p_truevalue = v;
        }
    };

    _pSwitch.set_falsevalue = function (v)
    {
        if (v != undefined)
            v = v.toString();

        if (this._p_falsevalue !== v)
        {
            if (!this._isChecked(this._p_value))
            {
                if (this.applyto_bindSource("value", v))
                {
                    this._setValue(v);
                }
            }
            this._p_falsevalue = v;
        }
    };

    _pSwitch.set_readonly = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_readonly != v)
        {
            this._p_readonly = v;
            this.on_apply_readonly(v);
        }
    };

    _pSwitch.on_apply_readonly = function (readonly)
    {
        if (this.switchbutton)
        {
            this.switchbutton.set_readonly(readonly);
        }
        this._changeStatus("readonly", readonly);
    };

    _pSwitch.on_apply_prop_enable = function (v)
    {
        if (this.switchbutton)
        {
            this.switchbutton._setEnable(v);
        }
        nexacro.Component.prototype.on_apply_prop_enable.call(this, v);
    };

    _pSwitch._properties = [ { name: "value" }, { name: "truevalue" }, { name: "falsevalue" }, { name: "readonly" }, { name: "switchbuttonsize" }, { name: "textposition" }, { name: "bartype" } ];
    nexacro._defineProperties(_pSwitch, _pSwitch._properties);

    //===============================================================
    // nexacro.Switch : Methods
    //===============================================================
    _pSwitch.getSelectedStatus = function ()
    {
        return this._isChecked(this._p_value);
    };

    _pSwitch.setSelectedStatus = function (v)
    {
        this.set_value(v);
    };

    _pSwitch.toggleSelectedStatus = function ()
    {
        var selected = this.getSelectedStatus();
        this.setSelectedStatus(!selected);
        return selected;
    };

    //===============================================================
    // nexacro.Switch : Event Handlers
    //===============================================================
    _pSwitch.on_keyup_default_action = function (key_code, alt_key, ctrl_key, shift_key, refer_comp, meta_key)
    {
        if (key_code == nexacro.Event.KEY_SPACE)
        {
            this.on_fire_onclick("", alt_key, ctrl_key, shift_key, -1, -1, -1, -1, -1, -1, this, this, meta_key);
        }
    };

    _pSwitch.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (!this._is_alive)
            return false;

        if (this._isEnable() && !this._p_readonly)
        {
            var pre_val = this._p_value;
            var post_val = this._isChecked(pre_val) ? ((nexacro._isNull(this._p_falsevalue)) ? false : this._p_falsevalue) : ((nexacro._isNull(this._p_truevalue)) ? true : this._p_truevalue);

            var ret = this.on_fire_canchange(this, pre_val, post_val);
            if (ret)
            {
                if (pre_val !== post_val)
                {
                    this.set_value(post_val);
                    this.on_fire_onchanged(this, pre_val, post_val);
                }
            }

            return nexacro.Component.prototype.on_fire_onclick.call(this, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, this, from_refer_comp, meta_key);
        }
        return false;
    };

    _pSwitch.on_fire_canchange = function (obj, prevalue, postvalue)
    {
        if (this.canchange && this.canchange._has_handlers)
        {
            var evt = new nexacro.SwitchChangedEventInfo(this, "canchange", prevalue, postvalue);
            return this.canchange._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pSwitch.on_fire_onchanged = function (obj, prevalue, postvalue)
    {
        if (this.onchanged && this.onchanged._has_handlers)
        {
            var evt = new nexacro.SwitchChangedEventInfo(this, "onchanged", prevalue, postvalue);
            return this.onchanged._fireEvent(this, evt);
        }
    };

    //===============================================================
    // nexacro.Switch : Logical Part
    //===============================================================
    _pSwitch._recalcLayout = function ()
    {
        if (!this._is_created_contents)
            return;

        // control
        const switchtext = this._switchtext;
        const switchbutton = this.switchbutton;

        // client size
        const client_width = this._getClientWidth();
        const client_height = this._getClientHeight();
        
        // switchbutton control size
        let btn_width = client_height * 2;
        let btn_height = client_height;
        
        // switchtext size
        let txt_width = client_width - btn_width;
        let txt_height = client_height;

        let txt_top = 0, btn_top = 0;
        let txt_left = (this._p_textposition == "right") ? btn_width : 0;
        let btn_left = (this._p_textposition == "right") ? 0 : txt_width;

        if (switchtext)
        {
            switchtext.move(txt_left, txt_top, txt_width, txt_height);
        }

        if (switchbutton)
        {
            switchbutton.move(btn_left, btn_top, btn_width, btn_height);
        }
    };

    _pSwitch._changeValue = function (v)
    {
        var use_truevalue = !nexacro._isNull(this._p_truevalue);
        var use_falsevalue = !nexacro._isNull(this._p_falsevalue);

        if (nexacro._isNull(v))
        {
            if (use_falsevalue)
                return this._p_falsevalue
            return false;
        }

        v = v.toString();
        if (use_truevalue)
        {
            if (v === this._p_truevalue)
            {
                // priority one
                return v;
            }

            if (use_falsevalue)
            {
                // truevalue, falsevalue both
                if (v === this._p_falsevalue)
                    return v;
                return this._p_value;
            }
            else
            {
                if (parseInt(v) === 0)
                {
                    return 0;
                }
                else if (parseInt(v) === 1)
                {
                    return 1;
                }
            }
        }
        return nexacro._toBoolean(v);
    };

    _pSwitch._isChecked = function (value)
    {
        if (this._p_truevalue != null)
        {
            if (this._p_falsevalue != null) // both
            {
                if (value === this._p_falsevalue || value === undefined)
                {
                    return false;
                }

                if (value === this._p_truevalue || nexacro._toBoolean(value) || this._p_value === this._p_truevalue)
                {
                    return true;
                }
                return false;
            }
            return (value === this._p_truevalue || nexacro._toBoolean(value)) ? true : false;
        }
        else // not use truevalue
        {
            if (this._p_falsevalue != null) // falsevalue only
            {
                return (value === this._p_falsevalue) ? false : true;
            }
            return nexacro._toBoolean(value);
        }
    };

    _pSwitch._applyStatus = function ()
    {
        var pre_val = this._p_value;
        var post_val = (this._isChecked(pre_val)) ? ((nexacro._isNull(this._p_falsevalue)) ? false : this._p_falsevalue) : ((nexacro._isNull(this._p_truevalue)) ? true : this._p_truevalue);

        var ret = this.on_fire_canchange(this, pre_val, post_val);
        if (ret)
        {
            if (this.applyto_bindSource("value", post_val))
            {
                this._setValue(post_val);
            }

            if (pre_val !== post_val)
            {
                this.on_fire_onchanged(this, pre_val, post_val);
            }
            if (this._is_alive)
                this.on_apply_value();
        }
    };

    //===============================================================
    // nexacro.Switch : Util Function
    //===============================================================
    _pSwitch._setValue = function (v)
    {
        this._p_value = v;
    };

    _pSwitch = null;
}

if (!nexacro.SwitchButtonControl)
{
    //==============================================================================
    // nexacro.SwitchButtonControl
    //==============================================================================
    nexacro.SwitchButtonControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pSwitchButtonControl = nexacro._createPrototype(nexacro.Component, nexacro.SwitchButtonControl);
    nexacro.SwitchButtonControl.prototype = _pSwitchButtonControl;
    _pSwitchButtonControl._type_name = "SwitchButton";

    _pSwitchButtonControl._is_focus_accept = false;

    /* control */
    _pSwitchButtonControl._switchbuttonitem = null;
    _pSwitchButtonControl._switchbuttontrack = null;    

    /* status */
    _pSwitchButtonControl._use_pushed_status = false;
    _pSwitchButtonControl._use_selected_status = true;

    /* internal variables */
    _pSwitchButtonControl._value = false;    
    _pSwitchButtonControl._bartype = "fit"; 
    _pSwitchButtonControl._track_height_factor = {"fit": 1, "inner": 0.8, "line": 0.2};
    _pSwitchButtonControl._buttonsize = undefined;
    _pSwitchButtonControl._textposition = "right";

    //==============================================================================
    // nexacro.SwitchButtonControl : Create & Destroy & Update
    //==============================================================================
    _pSwitchButtonControl.on_create_contents = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            // siwtchbuttontrack control
            const switchbuttontrack = new nexacro.Button("switchbuttontrack", 0, 0, 0, 0, null, null, null, null, null, null, this);
            switchbuttontrack._setControl();
            switchbuttontrack._use_pushed_status = false;
            switchbuttontrack._is_focus_accept = false;
            switchbuttontrack.createComponent(true);
            this._switchbuttontrack = switchbuttontrack;

            // switchbuttonitem control
            const switchbuttonitem = new nexacro.Button("switchbuttonitem", 0, 0, 0, 0, null, null, null, null, null, null, this);
            switchbuttonitem._setControl();
            switchbuttonitem._use_pushed_status = false;
            switchbuttonitem._is_focus_accept = false;
            switchbuttonitem.createComponent(true);
            this._switchbuttonitem = switchbuttonitem;
        }
        nexacro.Component.prototype.on_create_contents.call(this);
    };

    _pSwitchButtonControl.on_created_contents = function (win)
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack.on_created(win);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem.on_created(win);
        }
        nexacro.Component.prototype.on_created_contents.call(this, win);
    };

    _pSwitchButtonControl.on_destroy_contents = function ()
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack.destroy();
            this._switchbuttontrack = null;
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem.destroy();
            this._switchbuttonitem = null;
        }
        nexacro.Component.prototype.on_destroy_contents.call(this);
    };

    _pSwitchButtonControl.on_create_contents_command = function ()
    {
        var str = nexacro.Component.prototype.on_create_contents_command.call(this);
        if (this._switchbuttontrack)
        {
            str += this._switchbuttontrack.createCommand();
        }
        if (this._switchbuttonitem)
        {
            str += this._switchbuttonitem.createCommand();
        }
        return str;
    };

    _pSwitchButtonControl.on_attach_contents_handle = function (win, enablea11y)
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack.attachHandle(win);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem.attachHandle(win, enablea11y);
        }
        nexacro.Component.prototype.on_attach_contents_handle.call(this, win);
    };

    _pSwitchButtonControl.on_after_created = function()
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack._setEventHandler("onclick", this._on_switchbuttonitem_onclick, this);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem._setEventHandler("onclick", this._on_switchbuttonitem_onclick, this);
        }
    };

    _pSwitchButtonControl.on_change_containerRect = function (width, height)
    {
        if (this._height != height)
        {
            this._recalcLayout();
        }
    };

    //==============================================================================
    // nexacro.SwitchButtonControl : Override
    //==============================================================================
    _pSwitchButtonControl._on_changeUserStatus = function (status, value)
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack._changeUserStatus(status, value);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem._changeUserStatus(status, value);
        }
        nexacro.Component.prototype._on_changeUserStatus.call(this, status, value);
    };

    //==============================================================================
    // nexacro.SwitchButtonControl : Properties
    //==============================================================================
    _pSwitchButtonControl.on_apply_readonly = function (readonly)
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack.on_apply_readonly(readonly);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem.on_apply_readonly(readonly);
        }
    };

    _pSwitchButtonControl.on_apply_prop_enable = function (enable)
    {
        if (this._switchbuttontrack)
        {
            this._switchbuttontrack._setEnable(enable);
        }
        if (this._switchbuttonitem)
        {
            this._switchbuttonitem._setEnable(enable);
        }
    };

    //==============================================================================
    // nexacro.SwitchButtonControl : Event Handler
    //==============================================================================
    _pSwitchButtonControl._on_switchbuttonitem_onclick = function (obj, e)
    {
        return this.on_fire_onclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, null, obj, e.metakey);
    };

    _pSwitchButtonControl.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        const switch_comp = this._p_parent;
        if (switch_comp)
        {
            return switch_comp.on_fire_onclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, null, from_refer_comp, meta_key);
        }
        return false;
    };

    //==============================================================================
    // nexacro.SwitchButtonControl : Loical Part
    //==============================================================================
    _pSwitchButtonControl._recalcLayout = function ()
    {
        if (!this._is_created_contents)
            return;

        const client_width = this._getClientWidth();
        const client_height = this._getClientHeight();

        let buttonsize = this._buttonsize;
        if (!buttonsize || buttonsize > client_height)
            buttonsize = client_height;
        
        const top_factor = 0.5;        
        const track_width = buttonsize * 2;
        const left = (this._textposition == "left") ? client_width - track_width : 0;
        
        let top = 0;
        const switchbuttontrack = this._switchbuttontrack;
        if (switchbuttontrack)
        {
            let track_height = buttonsize;
            let type_factor = this._track_height_factor[ this._bartype ];
            if (type_factor)
            {
                let min_height = 4;
                track_height = track_height * type_factor;
                track_height = (track_height > min_height) ? track_height : min_height;
            }

            top = (client_height - track_height) * top_factor;
            switchbuttontrack.move(left, top, track_width, track_height);
        }

        const switchbuttonitem = this._switchbuttonitem;
        if (switchbuttonitem)
        {
            top = (client_height - buttonsize) * top_factor;
            switchbuttonitem.move(left, top, buttonsize, buttonsize);
        }
    };

    _pSwitchButtonControl._moveToggleButton = function (checked)
    {
        const switchbuttonitem = this._switchbuttonitem;
        const switchbuttontrack = this._switchbuttontrack;

        if (switchbuttonitem && switchbuttontrack)
        {
            const client_width = this._getClientWidth();
            const adjust_pos = client_width - switchbuttontrack._width;

            if (this._textposition == "left")
            {
                switchbuttonitem._setLeft(checked ? null : adjust_pos);
                switchbuttonitem._setRight(checked ? 0 : null);
            }
            else
            {
                switchbuttonitem._setLeft(checked ? null : 0);
                switchbuttonitem._setRight(checked ? adjust_pos : null);
            }
            switchbuttonitem._update_position();
        }
    };

    //==============================================================================
    // nexacro.SwitchButtonControl : Util Part
    //==============================================================================
    _pSwitchButtonControl._setValue = function (value)
    {
        this._value = value;
    };

    _pSwitchButtonControl._setBarType = function (bartype)
    {
        this._bartype = bartype;
    };

    _pSwitchButtonControl._setButtonSize = function (buttonsize)
    {
        this._buttonsize = buttonsize;
    };

    _pSwitchButtonControl._setTextPosition = function (textposition)
    {
        this._textposition = textposition;
    };

    _pSwitchButtonControl = null;

    //==============================================================================
    // nexacro.SwitchButtonItem
    //==============================================================================
    nexacro.SwitchButtonItemControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    }
    var _pSwitchButtonItemControl = nexacro._createPrototype(nexacro.Component, nexacro.SwitchButtonItemControl);
    nexacro.SwitchButtonItemControl.prototype = _pSwitchButtonItemControl;
    _pSwitchButtonItemControl._type_name = "SwitchButtonItem";

    _pSwitchButtonItemControl._is_subcontrol = true;
    _pSwitchButtonItemControl._thumbbutton = null;

    _pSwitchButtonItemControl.on_getIDCSSSelector = function ()
    {
        return "switchbuttonitem";
    };

    //==============================================================================
    // nexacro.SwitchButtonItem : Create & Destroy & Update
    //==============================================================================
    _pSwitchButtonItemControl.on_create_contents = function ()
    {
        var control = this.getElement();
        if (control)
        {
            this._thumbbutton = new nexacro.SwitchThumbButtonControl("switchthumbbutton", 0, 0, 0, 0, null, null, null, null, null, null, this);
            this._thumbbutton._setControl();
            this._thumbbutton.createComponent(true);
        }
    };

    _pSwitchButtonItemControl.on_created_contents = function (win)
    {
        this._thumbbutton.on_created(win);
    };

    _pSwitchButtonItemControl.on_destroy_contents = function ()
    {
        if (this._thumbbutton)
        {
            this._thumbbutton.destroy();
            this._thumbbutton = null;
        }
    };

    _pSwitchButtonItemControl.on_create_contents_command = function ()
    {
        this.redraw();
        var str = "";
        if (this._thumbbutton)
        {
            str += this._thumbbutton.createCommand();
        }
        return str;
    };

    _pSwitchButtonItemControl.on_change_containerRect = function (width, height)
    {
        this._recalcLayout();
    };

    _pSwitchButtonItemControl._recalcLayout = function ()
    {
        var control_elem = this.getElement();
        if (control_elem) 
        {
            var button = this._thumbbutton;
            if (button)
            {
                var client_height = this._getClientHeight();
                button.resize(client_height, client_height);
            }
        }
    };

    _pSwitchButtonItemControl.on_attach_contents_handle = function (win, enablea11y)
    {
        if (this._thumbbutton)
        {
            this._thumbbutton.attachHandle(win, enablea11y);
        }
    };

    //==============================================================================
    // nexacro.SwitchButtonItem : Properties
    //==============================================================================
    _pSwitchButtonItemControl.on_apply_readonly = function (readonly)
    {
        this._changeStatus("readonly", readonly);
    };

    _pSwitchButtonItemControl.on_apply_prop_enable = function (v)
    {
        if (this._thumbbutton)
        {
            this._thumbbutton._setEnable(v);        
        }
    };

    _pSwitchButtonItemControl = null;

    //==============================================================================
    // nexacro.ThumbButtonControl
    //==============================================================================
    nexacro.SwitchThumbButtonControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Button.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    }
    var _pSwitchThumbButtonControl = nexacro._createPrototype(nexacro.Button, nexacro.SwitchThumbButtonControl);
    nexacro.SwitchThumbButtonControl.prototype = _pSwitchThumbButtonControl;
    _pSwitchThumbButtonControl._type_name = "SwitchThumbButtonControl";

    _pSwitchThumbButtonControl._is_subcontrol = true;
    _pSwitchThumbButtonControl._use_pushed_status = false;
    _pSwitchThumbButtonControl._use_selected_status = true;

    _pSwitchThumbButtonControl.on_getIDCSSSelector = function ()
    {
        return "switchthumbbutton";
    };

    //==============================================================================
    // nexacro.ThumbButtonControl : Properties
    //==============================================================================
    _pSwitchThumbButtonControl.on_apply_readonly = function (readonly)
    {
        this._changeStatus("readonly", readonly);
    };

    _pSwitchThumbButtonControl = null;

    //==============================================================================
    // nexacro.SwitchTrackControl
    //==============================================================================
    nexacro.SwitchTrackControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Button.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    }
    var _pSwitchTrackControl = nexacro._createPrototype(nexacro.Button, nexacro.SwitchTrackControl);
    nexacro.SwitchTrackControl.prototype = _pSwitchTrackControl;
    _pSwitchTrackControl._type_name = "SwitchTrackControl";

    _pSwitchTrackControl._is_subcontrol = true;

    _pSwitchTrackControl._use_pushed_status = false;
    _pSwitchTrackControl._use_selected_status = true;

    _pSwitchTrackControl.on_getIDCSSSelector = function ()
    {
        return "switchbuttontrack";
    }

    _pSwitchTrackControl = null;

}