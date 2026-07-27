//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2023 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//==============================================================================

if (!nexacro.SpinField) 
{
    //==============================================================================
    // nexacro.SpinField (flexible)
    //==============================================================================
    nexacro.SpinField = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay) 
    {
        nexacro.TextField.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay);

        this._masktypeobj = new nexacro._EditMaskTypeNumber();

        this._FORMAT_TYPE = {
            ZERO: "9.9",
            NEAR_ZERO: "0.9",
            OUTER_ZERO: "9.9",
            OUTER_ZERO_WITH_COMMA: "9,999.9",
        };

    };

    var _pSpinField = nexacro._createPrototype(nexacro.TextField, nexacro.SpinField);
    nexacro.SpinField.prototype = _pSpinField;
    _pSpinField._type_name = "SpinField";

    _pSpinField._boxcontrol_socket = {
        instance_name: "SpinFieldBox",
        id: "box"
    };

    /* fixed prop */

    /* default properties */
    _pSpinField._p_value = undefined;
    _pSpinField._p_max = 10000;
    _pSpinField._p_min = 0;
    _pSpinField._p_type = "normal";
    _pSpinField._p_increment = 1;
    _pSpinField._p_buttontype = "default";
    _pSpinField._p_displaycomma = undefined;
    _pSpinField._p_useleadingbutton = true;
    _pSpinField._p_usetrailingbutton = true;

    /* internal variable */
    _pSpinField._popuptype = (nexacro._isTouchInteraction) ? "mobile" : "normal";
    _pSpinField._input_type = "";
    _pSpinField._invalid_value = null;
    _pSpinField._masktypeobj = null;
    _pSpinField._is_repeat = true;
    _pSpinField._is_locale_control = true;
    _pSpinField._inputmode = "tel";

    _pSpinField._default_value = undefined;
    _pSpinField._default_text = "";
    _pSpinField._default_mask = "9.9";
    _pSpinField._default_commamask = "9,999.9";
    _pSpinField._want_arrow = true;
    _pSpinField._has_inputElement = true;


    /* event list */
    _pSpinField._event_list = {
        "oneditclick": 1,
        "onkeydown": 1, "onkeyup": 1,
        "onkillfocus": 1, "onsetfocus": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1,
        "onmove": 1, "onsize": 1,
        "canchange": 1, "onchanged": 1, "oninput": 1,
        "onspin": 1,
        "oncontextmenu": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1, "ondevicebuttonup": 1,
        "oninvalid": 1,
    };

    /* accessibility */
    _pSpinField.accessibilityrole = "SpinField";

    //===============================================================
    // nexacro.SpinField : Create & Destroy & Update
    //===============================================================
    _pSpinField.on_create_contents = function () 
    {
        nexacro.TextField.prototype.on_create_contents.call(this);
        var input_elem = this._input_element = this._getInputElement();
        var _inputmode = this._inputmode;

        // Spin과 동일한 속성 세팅
        if(input_elem)
            input_elem.setElementInputMode(_inputmode);
    };

    _pSpinField.on_created_contents = function (win) 
    {
        var input_elem = this._input_element = this._getInputElement();
        
        this.on_apply_displaycomma(this._p_displaycomma);
        
        nexacro.TextField.prototype.on_created_contents.call(this, win);
        var _inputmode = this._inputmode;

        // Spin과 동일한 속성 세팅
        if(input_elem)
            input_elem.setElementInputMode(_inputmode);

        var buttonbox_elem = this._box._buttonbox_elem;
        var _box = this._box;

        var spinupbutton = this._box._leadbutton;
        var spindownbutton = this._box._trailbutton;

        if(this._isFlexible())
        {
            if(_box && buttonbox_elem)
            {
                var spinup_control_elem = spinupbutton.getElement();
                var spindown_control_elem = spindownbutton.getElement();
                
                spinup_control_elem._removeFromContainer(_box._control_element);
                spindown_control_elem._removeFromContainer(_box._control_element);
                spinup_control_elem._appendToContainer(buttonbox_elem);
                spindown_control_elem._appendToContainer(buttonbox_elem);
            }
        }
        else
        {   
            this.on_apply_buttontype(this._p_buttontype);
        }
        
    };

    _pSpinField.on_create_contents_command = function () 
    {

        this.on_apply_displaycomma(this._p_displaycomma);
        this.on_apply_value(this._p_value);

        var str = "";

        str += nexacro.TextField.prototype.on_create_contents_command.call(this);

        return str;

    };
    //정적, 동적 다탐
    _pSpinField.on_after_created_ext = function () 
    {
        nexacro.TextField.prototype.on_after_created_ext.call(this);

        this.on_apply_value(this._p_value);

        this._setEventHandlerToSpinButtons(this._box);
        this._setEventHandlerToCalendarEdit(this._box);
    };

    _pSpinField._setEventHandlerToBox = function ()
    {
        var box = this._box;

        if (box)
            box._setEventHandler("oninput", this.on_fire_oninput, this);
    };

    //===============================================================
    // nexacro.SpinField : Override
    //===============================================================

    _pSpinField.on_change_bindSource = function (propid, ds, row, col)
    {
        if (propid == "value")
        {
            var ds_val = ds.getColumn(row, col);
            var conv_val = this._convertValueType(ds_val, true);
            
            if (isNaN(conv_val))
            {
                this._setValue(ds_val);
            }
            else
            {
                this._setValue(conv_val);
            }
        }
    };

    _pSpinField._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        var want_arrow = this._want_arrow;
        if (keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN)
        {   
            const env = this._getEnvironment();
            if (env) 
                want_arrow = !env._p_enableaccessibility || !env._p_accessibilitycontentsearchkey;
            want_arrow = want_arrow || ctrlKey || altKey;
        }
        this._want_arrow = false;
        return { want_tab: false, want_return: false, want_escape: false, want_chars: false, want_arrows: want_arrow };
    };


    //===============================================================
    // nexacro.SpinField : Properties
    //===============================================================
    
    _pSpinField.set_buttontype = function (v) 
    {

        var type_enum = ["default", "horizontal"];
        if (type_enum.indexOf(v) == -1) 
        {
            return;
        }

        if (this._p_buttontype != v) 
        {

            this._p_buttontype = v;

            this.on_apply_buttontype(v);
        }
    };

    _pSpinField.on_apply_buttontype = function (v) 
    {
        var _box = this._box;

        if(_box)
        {
            var input_elem = _box._input_element;
            if (v == "horizontal")
            {   
                // 1. initial property가 horizontal 일때 (default -> horizontal)
                // 2. default에서 horizontal 처리 (default -> horizontal)
                _box._leading_button_id = "spindownbutton";
                _box._trailing_button_id = "spinupbutton";
                _box._destroyLeadingButton();
                _box._destroyTrailingButton();
                _box._updateLeadingButton();
                _box._updateTrailingButton();

                if(_box._buttonbox_elem)
                {
                    var spinupbutton = _box._trailbutton;
                    var spindownbutton = _box._leadbutton;
                    if (spinupbutton && spindownbutton)
                    {
                        var spinup_control_elem = spinupbutton.getElement();
                        var spindown_control_elem = spindownbutton.getElement();

                        //spinup_control_elem._removeFromContainer(_box._buttonbox_elem);
                        //spindown_control_elem._removeFromContainer(_box.buttonbox_elem);
                        
                        spindown_control_elem._insertToContainer(_box._control_element, input_elem);
                        spinup_control_elem._appendToContainer(_box._control_element);
                    }
                    _box._remove_buttonbox();
                }
            }
            else
            {
                // 3. horizontal에서 default 처리 (horizontal -> default)
                if (!_box._buttonbox_elem )
                {
                    _box._leading_button_id = "spinupbutton";
                    _box._trailing_button_id = "spindownbutton";
                    _box._destroyLeadingButton();
                    _box._destroyTrailingButton();
                    _box._updateLeadingButton();
                    _box._updateTrailingButton();

                    if (this._isFlexible())
                    {
                        _box._buttonbox_elem = new nexacro._ButtonBoxElement(_box._control_element, false);
                        _box._buttonbox_elem.create(this._getWindow());
                        _box._buttonbox_elem.attachHandle(this._getWindow());
                        _box._create_buttonbox();
                    }

                }
            }

            _box._recalc_box();
            this._setEventHandlerToSpinButtons(_box);
        }
    };

    _pSpinField.set_displaycomma = function (v) 
    {
        v = nexacro._toBoolean(v);
        if (this._p_displaycomma != v) 
        {
            this._p_displaycomma = v;

            this.on_apply_displaycomma(v);
            this.on_apply_value(this._p_value);
            // this._setDefaultText();
        }
    };

    _pSpinField.on_apply_displaycomma = function () 
    {
        if (this._box) 
        {
            this._on_apply_format(this._getSpinFieldFormatType());
        }
    };

    _pSpinField.set_max = function (v)
    {
        if (isNaN(v = +v))
        {
            return;
        }

        if (this._p_max != v)
        {
            this._p_max = v;
            
            this.on_apply_max(v);
            this.on_apply_value(this._p_value);
        }
    };

    _pSpinField.on_apply_max = function (max)
    {
        if (this._p_value > max)
        {
            this._p_value = max;
        }

        if (max < this._p_min)
        {
            this._p_min = max;
        }
    };

    _pSpinField.set_min = function (v)
    {
        if (isNaN(v = +v))
        {
            return;
        }

        if (this._p_min != v)
        {
            this._p_min = v;
            this.on_apply_min(v);
            this.on_apply_value(this._p_value);

        }
    };

    _pSpinField.on_apply_min = function (min)
    {
        if (this._p_value < min)
        {
            this._p_value = min;
        }

        if (this._p_max < min)
        {
            this._p_max = min;
        }
    };

    _pSpinField._on_apply_format = function (mask) 
    {
        var maskobj = this._masktypeobj;
        if (maskobj && this._box) 
        {
            mask = mask ? mask.replace(/^\s\s*/, '') : "";
            maskobj.setMask(mask);

            this._box._on_apply_inputtype();
        }
    };

    _pSpinField.on_apply_contentheight = function ()
    {
        this._recalc_contents();
        if(this._box)
        {
            this._box._recalc_box();
            this._box.on_change_containerRect();
        }
    };

    _pSpinField.set_locale = function (v)
    {
        if (this._p_locale != v)
        {
            this._p_locale = v;
            this.on_apply_locale(v);
            this.on_apply_value(this._p_value);
        }
    };

    _pSpinField.on_apply_locale = function (locale)
    {
        var _box = this._box;
        if (_box)
        {
            _box._setLocale(locale);
        }
    };

    _pSpinField._getSpinFieldFormatType = function () 
    {
        var ret;
        var val = +this._p_value;
        if (val === 0)
            ret = this._FORMAT_TYPE["ZERO"];
        else if (val < 1 && val > -1)
            ret = this._FORMAT_TYPE["NEAR_ZERO"];
        else if (isNaN(val))
        {
            if (this._p_displaycomma)
                ret = this._FORMAT_TYPE["OUTER_ZERO_WITH_COMMA"];
            else
            {
                if (this._default_mask == "9.9")
                    ret = this._FORMAT_TYPE["OUTER_ZERO"];
                else
                    ret = this._default_mask;
            }
        }
        else
        {
            if (this._p_displaycomma)
                ret = this._FORMAT_TYPE["OUTER_ZERO_WITH_COMMA"];
            else
            {
                if (this._default_mask == "9.9")
                    ret = this._FORMAT_TYPE["OUTER_ZERO"];
                else
                    ret = this._default_mask;
                
            }
        }

        return ret;
    };

    _pSpinField._calcValue = function (val, inc, bAdd)
    {
        var addConst = 1;
        var strVal = val.toString();
        var strInc = inc.toString();
        var bPointVal = strVal.indexOf(".");
        var bPointInc = strInc.indexOf(".");

        if (bPointVal > -1 || bPointInc > -1)
        {
            var decVal = bPointVal > -1 ? strVal.substring(bPointVal + 1, strVal.length) : "";
            var decInc = bPointInc > -1 ? strInc.substring(bPointInc + 1, strInc.length) : "";
            var maxLength = decVal.length >= decInc.length ? decVal.length : decInc.length;
            addConst = Math.pow(10, maxLength);

            val = Math.round(val * addConst);
            inc = Math.round(inc * addConst);
        }

        if (bAdd)
        {
            return (val + inc) / addConst;
        }
        else
        {
            return (val - inc) / addConst;
        }
    };

    _pSpinField._applyMaskToValue = function (value) 
    {
        this._on_apply_format(this._getSpinFieldFormatType());
        var maskobj = this._masktypeobj;
        if (maskobj && this._p_displaycomma) 
        {
            return maskobj.applyMask(value);
        }
        return value.toString();
    };

    _pSpinField._on_spin_up = function () 
    {
        if (this._p_readonly) 
        {
            return false;
        }

        var maskobj = this._masktypeobj;

        var increment = this._p_increment;
        var max = this._p_max;
        var min = this._p_min;
        var input = this._box._input_element;
        var pre_value = parseFloat(this._p_value);
        var pre_text = this._p_text;

        if (nexacro._isNull(pre_value) || isNaN(pre_value)) 
        {
            pre_value = 0;
        }

        var cur_value = this._calcValue(pre_value, increment, true);
        
        if (max < cur_value)
            cur_value = max;
        else if(min > cur_value)
            cur_value = min;

        var cur_text = maskobj.applyMask(cur_value);

        if (!this.on_fire_onspin(this, pre_text, pre_value, cur_text, cur_value, true)) 
        {
            cur_value = pre_value;
        }

        this._p_value = cur_value;

        this.on_apply_value(cur_value);

        this.on_fire_oninput();

        if(input)
            input.setElementFocus(true);
        // this._updateButton();
    };

    _pSpinField._on_spin_down = function () 
    {
        if (this._p_readonly) 
        {
            return false;
        }

        var maskobj = this._masktypeobj;

        var increment = this._p_increment;
        var max = this._p_max;
        var min = this._p_min;
        var input = this._box._input_element;

        var pre_value = parseFloat(this._p_value);
        var pre_text = this._p_text;

        if (nexacro._isNull(pre_value) || isNaN(pre_value)) 
        {
            pre_value = 0;
        }

        var cur_value = this._calcValue(pre_value, increment, false);

        if (max < cur_value)
            cur_value = max;
        else if(min > cur_value)
            cur_value = min;

        var cur_text = maskobj.applyMask(cur_value);

        if (!this.on_fire_onspin(this, pre_text, pre_value, cur_text, cur_value, false)) 
        {
            cur_value = pre_value;
        }

        this._p_value = cur_value;

        this.on_apply_value(cur_value);

        this.on_fire_oninput();

        if(input)
            input.setElementFocus(true);
        // this._updateButton();
    };
    _pSpinField.on_fire_canchange = function (obj, pretext, prevalue, posttext, postvalue)
    {
        if (this.canchange && this.canchange._has_handlers)
        {
            var evt = new nexacro.ChangeEventInfo(this, "canchange", pretext, prevalue, posttext, postvalue);
            return this.canchange._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pSpinField.on_fire_onchanged = function (obj, pretext, prevalue, posttext, postvalue)
    {
        if (this.onchanged && this.onchanged._has_handlers)
        {
            var evt = new nexacro.ChangeEventInfo(obj, "onchanged", pretext, prevalue, posttext, postvalue);
            return this.onchanged._fireEvent(this, evt);
        }
        return true;
    };

    _pSpinField.on_fire_onspin = function (obj, pretext, prevalue, posttext, postvalue, isUp) 
    {
        if (this.onspin && this.onspin._has_handlers)
        {
            var evt = new nexacro.SpinEventInfo(obj, "onspin", pretext, prevalue, posttext, postvalue, isUp);
            return this.onspin._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pSpinField.on_fire_oninput = function ()
    {
        this._invalidStatus(false);
        this._validStatus(false);
        var input_element = this._getInputElement();
        var v = this._needChangeInputValue(input_element.value);
        // var go_next = false;

        if (this._p_autoskip && this._maxlen > 0 && v)
        {
            if (!input_element.isComposing() && v.length >= this._maxlen)
            {
                v = v.substr(0, this._maxlen);
            //    go_next = true;
            }
        }

        if (v != input_element.value)
            input_element.setElementValue(v);

        if (this._p_displaycomma && v)
        {
            var pos = input_element.getElementCaretPos();
            var prevLen = v.length;
            var masked = this._applyMaskToValue(parseFloat(v.replace(/,/g, '')));
            if (masked != v)
            {
                input_element.setElementValue(masked);
                if (pos && pos != -1)
                {
                    var diff = masked.length - prevLen;
                    input_element.setElementSetSelect(pos.begin + diff, pos.end + diff);
                }
            }
        }

        var numericValue = v ? v.replace(/,/g, '') : v;
        var check = this._checkInputValidate(numericValue);

        if (check == false)
        {
            this.on_invalid(false);
        }
        else if (check == true)
            this.on_valid(false);

        var retn = true;
        if (this.oninput && this.oninput._has_handlers)
        {
            var evt = new nexacro.InputEventInfo(this, "oninput");
            retn = this.oninput._fireEvent(this, evt);
        }

        //if (go_next)
        //    this._setFocusToNextComponent();
        
        return retn;
    };

    _pSpinField._setEventHandlerToSpinButtons = function (spinfieldbox) 
    {
        var buttontype = this._p_buttontype;        

        if (spinfieldbox) 
        {
            if (buttontype == "default")
            {
                var spinupbutton = spinfieldbox._leadbutton;
                var spindownbutton = spinfieldbox._trailbutton;

            }
            else if (buttontype == "horizontal")
            {
                var spinupbutton = spinfieldbox._trailbutton;
                var spindownbutton = spinfieldbox._leadbutton;
            }

            if (spinupbutton) 
            {
                spinupbutton._setEventHandler("onclick", this._on_upbutton_onclick, this);
            }

            if (spindownbutton) 
            {
                spindownbutton._setEventHandler("onclick", this._on_downbutton_onclick, this);
            }
        }
        
    };

    _pSpinField._on_upbutton_onclick = function (obj, e) 
    {
        this._on_spin_up();
    };

    _pSpinField._on_downbutton_onclick = function (obj, e) 
    {
        this._on_spin_down();
    };

    _pSpinField.set_value = function (v)
    {
        v = this._convertValueType(v);
        v = this._needChangeInputValue(v);

        var check = this._checkApplyValidate(v);
        
        if (check == false)
        {
            this.on_invalid(true);
            v = "";
        }
        else if (check == true)
        {
            this.on_valid(true);
        }
        else
        {
            this._invalidStatus(false);
            this._validStatus(false);
        }
        
        if (this._p_value !== v)
        {
            if (!this.applyto_bindSource("value", v))
            {
                return;
            }

            this._setValue(v, true);
        }
        else
        {
            var input_elem = this._getInputElement();
            if (input_elem && input_elem.value != v)
                this._setValue(v, true);
        }
    };

    _pSpinField.on_apply_value = function (value)
    {
        var input_elem = this._getInputElement();
        var buttontype = this._p_buttontype;
        var _box = this._box;
        var spinupbutton, spindownbutton;

        if(_box)
        {
            if (buttontype == "horizontal") 
            {
                spindownbutton = this._box._leadbutton;
                spinupbutton = this._box._trailbutton;
            }
            else
            {
                spinupbutton = this._box._leadbutton;
                spindownbutton = this._box._trailbutton; 
            }
        }

        if (input_elem) {
            var pos = input_elem.getElementCaretPos();
            var text = this._p_text;

            if(value >= this._p_max)
            {
                value = this._p_max;
                if(spinupbutton)
                    spinupbutton._changeStatus("disabled", true);
            }
            else
            {
                if(spinupbutton)
                    spinupbutton._changeStatus("disabled", false);
            }
            
            if(value <= this._p_min)
            {
                value = this._p_min;
                if(spindownbutton)
                    spindownbutton._changeStatus("disabled", true);
            }
            else
            {
                if(spindownbutton)
                    spindownbutton._changeStatus("disabled", false);
            }

            if (typeof value !== 'number' || value == undefined) 
            {
                value = (this._p_value ? this._p_text : this._p_value);
            }
            else 
            {
                value = this._applyMaskToValue(value);
            }


            var _form = this._getForm();
            var _cur_focus = _form ? _form.getFocus() : null;

            if (!this._onlydisplay) 
            {
                if (this._undostack) 
                {
                    if (pos && pos != -1) 
                    {
                        this._undostack.push(value, pos.begin, pos.end);
                    }
                    else 
                    {
                        this._undostack.push(value, 0, 0);
                    }
                }

                if (value == "")
                    input_elem.value = null;

                input_elem.setElementValue(value);

                if (value != null)
                    text = input_elem.getElementText();
            }
            else 
            {
                input_elem.input_elem.setElementText(value);
            }

            if (this._p_text != text) 
            {
                this._p_text = text;
            }

            this._updateAccessibilityLabel();
            this._default_value = this._p_value;
            this._default_text = this._p_text;

            pos = input_elem.getElementCaretPos();
            if (pos && pos != -1) 
            {
                this._caret_pos = pos;
            }
            else 
            {
                this._change_value = this._is_created ? true : false;
            }

            if (!this._isFocused())
                this._setLabelFloating(this._isContainsText(), undefined, true);

            this._refreshLabel("value");
            this._setCharCount(this._p_text.length, this._maxlen);
        }
    };

    _pSpinField._checkApplyValidate = function (value, input_check) 
    {
        // 입력값을 validation 하는 spinfield 구체화 함수
        if (!value)
        {
            if (input_check)
            {
                if (this._input_element)
                {
                    var validity = this._input_element._getValidity();
                    if (validity)   // html only
                        return validity.valid;
                    else
                    {
                        if (value == null)
                        {
                            return -1;
                        }
                        return false; // Always return false if the value is falsy && input type number
                    }
                }
            }
            return -1;
        }

        var numberpattern = /^[+-]?(\d+(\.\d*)?|\.\d+)$|[eE]/;
        if (numberpattern)
        {
            numberpattern = new RegExp(numberpattern);
            if (!numberpattern.test(value))
                return false;
        }

        var pattern = this._p_pattern;

        if (this._p_pattern)
            pattern = new RegExp(this._p_pattern);

        //falsy 값에서 ""는 제외
        if (!pattern)
        {
            if (pattern != "")
                return -1;
            else
            { // 사용자가 pattern을 입력하지 않은 경우
                if (numberpattern.test(value))
                    return (isNaN(Number(value)) == false && isFinite(Number(value)) == true);
            }
        }

        if (pattern && pattern.test(value))
        {

            if (this._p_inputtype == "number")
                return (isNaN(Number(value)) == false && isFinite(Number(value)) == true);

            return true;
        }
        return false;
    };

    _pSpinField.on_apply_textAlign = function (halign) 
    {
        var input_elem = this._getInputElement();
        if (input_elem) 
        {
            input_elem.setElementTextAlign(halign);
        }
    };

    _pSpinField._on_edit_onkeydown = function (obj, e) 
    {
        this._invalidStatus(false);
        this._validStatus(false);        
        switch (e.keycode) 
        {
        case nexacro.Event.KEY_UP:
            this._on_spin_up();
            break;
        case nexacro.Event.KEY_DOWN:
            this._on_spin_down();
            break;
        case nexacro.Event.KEY_ENTER:
            if (this._default_value !== this._p_value)
            {
                this._on_value_change();
            }
            break;
        }
    };

    _pSpinField._setEventHandlerToCalendarEdit = function (box) 
    {

        if (box) 
        {
            box._setEventHandler("onkeydown", this._on_edit_onkeydown, this);
        }

    };

    _pSpinField.set_increment = function (v) 
    {
        if (isNaN(v = +v)) 
        {
            return;
        }

        if (this._p_increment != v) 
        {
            this._p_increment = v;
        }
    };


    _pSpinField._properties = [
        { name: "value" },
        { name: "text", readonly: true },
        { name: "max" },
        { name: "min" },
        { name: "type" },
        { name: "increment" },
        { name: "buttonsize" },
        { name: "locale" },
        { name: "visible" },
        { name: "buttontype" },
        { name: "displaycomma"}
    ];
    nexacro._defineProperties(_pSpinField, _pSpinField._properties);
    
    //===============================================================
    // nexacro.SpinField : Methods
    //===============================================================


    //===============================================================
    // nexacro.SpinField : Logical Part
    //===============================================================
    

    //===============================================================
    // nexacro.SpinField : Events
    //===============================================================
    _pSpinField._confirmValue = function ()
    {
        var input_elem = this._getInputElement();
        if (!input_elem) return;

        var cur_text = input_elem.value;
        var cur_value = cur_text ? parseFloat(cur_text.replace(/,/g, '')) : undefined;

        if (this._default_value !== cur_value)
        {
            this._p_value = cur_value;
            this._p_text = cur_text;
            this._on_value_change();
        }

        this.on_apply_value(this._p_value);
    };

    _pSpinField.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        nexacro.FieldBase.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);

        this._confirmValue();

        if (!this._onlydisplay)
        {
            var _win = this._getRootWindow();
            var idx = _win._indexOfCurrentFocusPaths(this);
            if (idx < 0)
            {
                this._getInputElement().setElementBlur();
            }
        }

        this._focus_keep = null;
        this._input_physical_focused = false;
    };
    //===============================================================
    // nexacro.SpinField : Event Handlers
    //===============================================================
    _pSpinField._on_value_change = function ()
    {
        var input_elem = this._input_element;
        var max = this._p_max;
        var min = this._p_min;

        var pre_value = this._default_value;
        var pre_text = this._default_text;

        var cur_value = this._p_value;
        var cur_text = this._p_text;

        if (input_elem && cur_text)
        {
            cur_value = parseFloat(cur_text.replace(/,/g, ''));
        }

        if (cur_value > max)
        {
            cur_value = max;
        }
        else if (cur_value < min)
        {
            cur_value = min;
        }
        else if (!cur_value)
        {
            cur_value = min;
        }

        if (!this.on_fire_canchange(this, pre_text, pre_value, cur_text, cur_value) ||
            !this.applyto_bindSource("value", cur_value))
        {
            this._setValue(pre_value);
            return false;
        }

        this._setValue(cur_value);

        this.on_fire_onchanged(this, pre_text, pre_value, cur_text, cur_value);

        return true;
    };

    //===============================================================
    // nexacro.SpinField : Util Function
    //===============================================================

    _pSpinField._convertValueType = function (v, bapplyrule)
    {
        if (v === "")
        {
            return v;
        }   
        else
        {
            if (bapplyrule)
            {
                return nexacro.Component.prototype._convertValueType.call(this, v, 2);
            }
            else
            {
                return nexacro._isNull(v) ? v : parseFloat(v);
            }   
        }
    };

    //===============================================================
    // nexacro.SpinFieldBox (flexible)
    //===============================================================
    nexacro.SpinFieldBox = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) 
    {
        nexacro.TextFieldBox.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pSpinFieldBox = nexacro._createPrototype(nexacro.TextFieldBox, nexacro.SpinFieldBox);
    nexacro.SpinFieldBox.prototype = _pSpinFieldBox;

    _pSpinFieldBox._type_name = "SpinFieldBox";
    _pSpinFieldBox._use_beforeinput = true;

    _pSpinFieldBox._p_type = "text";
    _pSpinFieldBox._input_leadingspace = undefined;

    _pSpinFieldBox._is_locale_control = true;
    _pSpinFieldBox._is_editable_control = true;

    // _pSpinFieldBox._p_buttonsize = undefined;
    // _pSpinFieldBox._p_buttontype = undefined;

    // additional control
    _pSpinFieldBox._buttonleftbox = null;
    _pSpinFieldBox._buttonrightbox = null;

    //===============================================================							
    // nexacro.SpinFieldBox : Override							
    //===============================================================							


    _pSpinFieldBox.on_create_contents = function () 
    {
        var buttontype = this._p_parent._p_buttontype;

        // _control_element
        // button type에 따라서 컨테이너 element를 만들어준다.
        if(buttontype == "default")
        {
            this._buttonbox_elem = new nexacro._ButtonBoxElement(this._control_element, false);
        }

        if (buttontype == "default")
        {
            this._leading_button_id = "spinupbutton";
            this._trailing_button_id = "spindownbutton";
        }
        
        if(buttontype == "horizontal")
        {
            this._leading_button_id = "spindownbutton";
            this._trailing_button_id = "spinupbutton";
        }

        nexacro.TextFieldBox.prototype.on_create_contents.call(this);
    };
    

    _pSpinFieldBox.on_created_contents = function (win) 
    {
        this.on_apply_locale(this._getLocale());
        nexacro.TextFieldBox.prototype.on_created_contents.call(this, win);
        if(this._buttonbox_elem)
        {
            this._buttonbox_elem.create(win);
            if(this._p_parent._isFlexible())
                this._buttonbox_elem.attachHandle(win);
        }
        this.on_change_containerRect();
    };

    _pSpinFieldBox._updateLeadingButton = function (create_only)
    {
        if (this._p_parent._p_useleadingbutton && !this._leadbutton)
        {
            var spinupbutton = this._leadbutton = new nexacro.FieldBaseIconControl(this._leading_button_id, 0, 0, 0, 0, null, null, null, null, null, null, this);
            spinupbutton._firstchild = true;   // node 순서를 맨 앞으로..

            if (!this._isFlexible())
                spinupbutton._excluded_flex = true;

            spinupbutton.createComponent(create_only);

            if (this._isFlexible())
                spinupbutton.set_flexgrow(0);
        }
    };

    _pSpinFieldBox._updateTrailingButton = function (create_only)
    {
        if (this._p_parent._p_usetrailingbutton && !this._trailbutton)
        {
            var spindownbutton = this._trailbutton = new nexacro.FieldBaseIconControl(this._trailing_button_id, 0, 0, 0, 0, null, null, null, null, null, null, this);

            if (!this._isFlexible())
                spindownbutton._excluded_flex = true;

            spindownbutton.createComponent(create_only);

            if (this._isFlexible())
                spindownbutton.set_flexgrow(0);
        }
    };

    _pSpinFieldBox.on_create_contents_command = function () 
    {

        this.on_apply_locale(this._getLocale());
        //var _buttonbox  = this._container_elem;
        var str = "";

        if(this._p_parent._p_buttontype == "default" && this._buttonbox_elem)
        {
            //_buttonbox.createCommand();            
            if (this._prefixctrl)
                str += this._prefixctrl.createCommand();

            str += this._input_element.createCommand();

            if (this._postfixctrl)
                str += this._postfixctrl.createCommand();

            str += this._buttonbox_elem .createCommandStart();

            if (this._leadbutton)
                str += this._leadbutton.createCommand();

            if (this._trailbutton)
                str += this._trailbutton.createCommand();

            str += this._buttonbox_elem .createCommandEnd();
        }
        else
        {
            if (this._leadbutton)
                str += this._leadbutton.createCommand();

            if (this._prefixctrl)
                str += this._prefixctrl.createCommand();

            str += this._input_element.createCommand();

            if (this._postfixctrl)
                str += this._postfixctrl.createCommand();

            if (this._trailbutton)
                str += this._trailbutton.createCommand();
        }
        return str;
    };

    _pSpinFieldBox.on_attach_contents_handle = function (win, enablea11y)
    {
        nexacro.TextFieldBox.prototype.on_attach_contents_handle.call(this, win, enablea11y);

        if (this._buttonbox_elem)
            this._buttonbox_elem.attachHandle(win);
        // input에 직접 label을 설정하므로 필요없음
        //nexacro._createNotifyAccessibilityInputElement();
    };

    _pSpinFieldBox._remove_buttonbox = function ()
    {
        this._buttonbox_elem.destroy();
        this._buttonbox_elem = null;
    };

    _pSpinFieldBox._create_buttonbox = function ()
    {
        var buttonbox_elem = this._buttonbox_elem ;
        var spinupbutton = this._leadbutton;
        var spindownbutton = this._trailbutton;
        var _win = this._p_parent._getWindow();

        if (spinupbutton && spindownbutton)
        {   
            var spinup_control_elem = spinupbutton.getElement();
            var spindown_control_elem = spindownbutton.getElement();
            spinup_control_elem.create(_win);
            spindown_control_elem.create(_win);
            spinup_control_elem.attachHandle(_win);
            spindown_control_elem.attachHandle(_win);

            spinup_control_elem._removeFromContainer(this._control_element);
            spindown_control_elem._removeFromContainer(this._control_element);

            spinup_control_elem._appendToContainer(buttonbox_elem);
            spindown_control_elem._appendToContainer(buttonbox_elem);
        }
    };
    
    _pSpinFieldBox._move_button = function (button, left, top, width, height)
    {
        if (button)
        {
            button.move(left, top, width, height, null, null);
        }
    };

    _pSpinFieldBox._recalc_box = function () 
    {
        if (this._control_element)
        {   
            var _box = 
            {
                left : this._getClientLeft(),
                top : this._getClientTop(),
                width : this._getClientWidth(),
                height : this._getClientHeight()
            };

            var buttonbox_elem = this._buttonbox_elem ;
            var input_elem = this._input_element;
            var prefixtext = this._prefixctrl;
            var postfixtext = this._postfixctrl;

            var spinbuttonsize;
            if (!this._p_iconbuttonsize)
                spinbuttonsize = _box.height;
            else
                spinbuttonsize = this._p_iconbuttonsize;

            // var spinupbutton = this._leadbutton; // textfield 상속받는 leading button
            // var spindownbutton = this._trailbutton; // textfield 상속받는 trailing button
            var spindownbutton = this._leadbutton;
            var spinupbutton = this._trailbutton;
            var buttontype = this._p_parent._p_buttontype;
        
            //text variable
            var prefix_width = 0, postfix_width = 0;
            var spinupbutton_width = 0, spindownbutton_width = 0;
            var pos_btn_right = _box.left + _box.width - spinbuttonsize;

            if (typeof (spinbuttonsize) == "number")
            {
                spinupbutton_width = spindownbutton_width = spinbuttonsize;
            }
            else
            {
                spinbuttonsize = spinbuttonsize.split(" ");
                spindownbutton_width = spinupbutton_width = +spinbuttonsize[0];
            }

            if (buttonbox_elem)
            {
                if(spinupbutton_width > 0)
                    spinbuttonsize = spinupbutton_width;

                if(this._isFlexible())
                {
                    buttonbox_elem.setElementSize(spinbuttonsize, _box.height);
                    buttonbox_elem.setElementPosition(pos_btn_right, 0);
                }
                else
                {
                    buttonbox_elem.setElementSize(0, 0);
                    buttonbox_elem.setElementPosition(0, 0);
                }

            }

            if (spinupbutton && spindownbutton) 
                this._recalc_spinbutton();

            var f_label_height = this._p_parent.getFloatingLabelHeight();

            if (this._p_parent._p_labelposition == "inside") 
            {
                var border = this._getCurrentStyleBorder();
                var border_t = border ? border.top._width : 0;

                _box.top = f_label_height + border_t;
                _box.height -= (_box.height);
            }

            if (prefixtext) 
            {
                var leadingspace = _box.left;
                if (buttontype == "horizontal")
                    leadingspace += spinbuttonsize;

                prefix_width = prefixtext._on_getFitSize()[0];
                this._recalc_box_prefixtext(leadingspace);
            }

            if (postfixtext) 
            {
                var trailingspace = _box.width - spinbuttonsize;
                postfix_width = postfixtext._on_getFitSize()[0];
                this._recalc_box_postfixtext(trailingspace);
            }

            if (input_elem) 
            {
                var input_width = _box.width - prefix_width - postfix_width;
                var input_leadingspace = _box.left + prefix_width;
                this._recalc_box_inputelem(input_elem, input_width, input_leadingspace);
            }

        }
    };
/*
    _pSpinFieldBox._recalc_box_icon = function ()
    {
        var iconsize = this._p_buttonsize;
        var _spinfieldbox_height = this.client_height;
        var _spinfieldbox_width = this.client_width;
        var obj_iconsize = {width:0, height:0};
        if (!iconsize)
        {
            obj_iconsize.width = _spinfieldbox_height;
            obj_iconsize.height = _spinfieldbox_height;
        }
        else 
        {
            if (typeof (iconsize) == "number")
            {
                obj_iconsize.width = obj_iconsize.height = iconsize;
            }
            else
            {
                iconsize = iconsize.split(" ");
                obj_iconsize.width = +iconsize[0];
                obj_iconsize.height = (iconsize[1]) ? +iconsize[1] : _spinfieldbox_height;
            }
        }

        if (obj_iconsize.width > _spinfieldbox_width) // width over, second
            obj_iconsize.width = _spinfieldbox_width;
        if (obj_iconsize.height > _spinfieldbox_height) // height over, second
            obj_iconsize.height = _spinfieldbox_height;
        
        // icon size가 정해지면 icon size를 기준으로 leading, trailing icon size를 정한다.
        obj_leadingiconsize.width = obj_iconsize.width;
        obj_leadingiconsize.height = obj_iconsize.height;
        obj_trailingiconsize.width = obj_iconsize.width;
        obj_trailingiconsize.height = obj_iconsize.height;
    };
*/

    _pSpinFieldBox._recalc_spinbutton = function () 
    {
        var buttontype = this._p_parent._p_buttontype;
        var box_width = this._p_parent._getClientWidth();
        var box_height = this._getClientHeight();
        var spinbuttonsize = this._p_parent._p_iconbuttonsize || this._getClientHeight();

        var btn_width, btn_height;

        if (typeof spinbuttonsize == "number") 
            btn_width = btn_height = spinbuttonsize;
        else 
        {
            spinbuttonsize = spinbuttonsize.split(" ");
            btn_width = +spinbuttonsize[0];
            btn_height = (spinbuttonsize[1]) ? +spinbuttonsize[1] : btn_width;
        }

        var isFlexible = this._p_parent._isFlexible();
        var btn_left = (isFlexible || buttontype !== 'default') ? 0 : box_width - btn_width;
        var btn_top = 0;

        if (buttontype == "horizontal") 
        {
            var spindownbutton = this._leadbutton;
            var spinupbutton = this._trailbutton;

            if (!isFlexible) 
                btn_top = (box_height - btn_height) / 2;

            spindownbutton.move(btn_left, btn_top, btn_width, btn_height, null, null);
            spinupbutton.move(box_width - btn_width, btn_top, btn_width, btn_height, null, null);
        } 
        else 
        { // 'default' (수직) 타입
            var spinupbutton = this._leadbutton;
            var spindownbutton = this._trailbutton;
            var final_btn_height = btn_height; // 최종적으로 적용될 각 버튼의 높이

            // iconbuttonsize 설정 여부에 따라 수직 위치 및 높이 재계산
            if (!this._p_parent._p_iconbuttonsize) // 자동 레이아웃
                final_btn_height = btn_height / 2;
            else 
            { // 사용자 지정 사이즈 레이아웃
                if (btn_height >= box_height) 
                    final_btn_height = box_height / 2;
                else if (isFlexible) 
                {
                    final_btn_height = btn_height / 2;
                    btn_top = (box_height - btn_height) / 2;
                } 
                else
                    btn_top = (box_height - (btn_height * 2)) / 2; // final_btn_height는 원본 btn_height를 그대로 사용
            }
            
            spinupbutton.move(btn_left, btn_top, btn_width, final_btn_height, null, null);
            spindownbutton.move(btn_left, btn_top + final_btn_height, btn_width, final_btn_height, null, null);

            if(this._isFlexible() && this._p_parent._p_iconbuttonsize && buttontype == "default")
                spinupbutton.move(btn_left, 0, btn_width, final_btn_height, null, null);
        }

        this._leadbutton._initControlElementLayoutProps();
        this._trailbutton._initControlElementLayoutProps();
    };

    _pSpinFieldBox._recalc_box_prefixtext = function (leadingspace)
    {
        var prefixtext = this._prefixctrl;
        var text_left = leadingspace;
        var text_top = this._getClientTop();
        var text_width = prefixtext._on_getFitSize()[0];
        var text_height = this._getClientHeight();

        if(this._isFlexible())
        {
            prefixtext.padding = "0px 10px";
        }

        prefixtext.move(text_left, text_top, text_width, text_height);
        prefixtext._initControlElementLayoutProps();

        if (this._isFlexible())
            prefixtext.getElement()._forceApplyPosTop(text_top);
    };

    _pSpinFieldBox._recalc_box_postfixtext = function (leadingspace)
    {
        var postfixtext = this._postfixctrl;
        var text_top = this._getClientTop();
        var text_width = postfixtext._on_getFitSize()[0];
        var text_height = this._getClientHeight();
        var text_left = leadingspace - text_width;

        postfixtext.move(text_left, text_top, text_width, text_height);
        postfixtext._initControlElementLayoutProps();

        if (this._isFlexible())
            postfixtext.getElement()._forceApplyPosTop(text_height);
    };

    _pSpinFieldBox._recalc_box_inputelem = function (input_elem, input_width, input_leadingspace) {
        var input_elem_height = this._getClientHeight();
        var input_elem_top = this._getClientTop();
        var buttontype = this._p_parent._p_buttontype;

        var spinbutton_width = this._p_parent._p_iconbuttonsize
            ? this._p_parent._p_iconbuttonsize.split(' ')[0]
            : this._getClientHeight();

        var width_multiplier = (buttontype == "horizontal") ? 2 : 1;
        var input_elem_width = input_width - (width_multiplier * spinbutton_width);
        
        var input_elem_left = input_leadingspace;
        this._input_leadingspace = input_elem_left;

        if (!this._isFlexible() && buttontype == "horizontal") 
            input_elem_left += +spinbutton_width;

        // input 요소의 최종 크기와 위치 적용
        input_elem.setElementSize(input_elem_width, input_elem_height);
        input_elem.setElementPosition(input_elem_left, input_elem_top);
    };

    _pSpinFieldBox._getWantLabelLeft = function () 
    {

        var left = -1;
        var spinbuttonsize;
        if(!this._p_parent._p_iconbuttonsize)
            spinbuttonsize = this._getClientHeight();
        else
            spinbuttonsize = this._p_parent._p_iconbuttonsize.split(" ")[0];
        var paddingleft = 10;
        var buttontype = this._p_parent._p_buttontype;
        
        // TextField의 보정 값 계산 필요. spinField 구조변경 때문에 지움
        var prevalue = nexacro.TextFieldBox.prototype._getWantLabelLeft.call(this) -
            (buttontype == "default" ? spinbuttonsize : 0);

        left = paddingleft + prevalue + this._input_leadingspace;
        return left;
    };

    _pSpinFieldBox.on_change_containerRect = function (width, height)
    {
        // todo : refact
        if (this._buttonbox_elem && this._control_element)
            this._recalc_box();
        else if (this._p_parent._p_buttontype == "horizontal" && this._control_element)
            this._recalc_box();
    };

    _pSpinFieldBox._getMaskObj = function () 
    {
        var maskobj = this._p_parent._masktypeobj;
        if (maskobj) 
        {
            return maskobj;
        }

        return null;
    };

    _pSpinFieldBox._on_apply_inputtype = function () 
    {
        var maskobj = this._getMaskObj();
        var input_elem = this._input_element;
        if (maskobj && input_elem) 
        {
            var mode = "text";

            if (!this._onlydisplay)
                input_elem.setElementInputType(mode, true);
        }
    };

    // SpinField에서는 입력 중 _p_value 반영 불필요 (killfocus 시 _confirmValue에서 처리)
    // parent로 전달하면 Edit.on_keyinput_basic_process를 통해 _p_value/_p_text가 갱신됨
    _pSpinFieldBox.on_keyinput_basic_action = function (input_text)
    {
        return true;
    };

    _pSpinFieldBox._setLocale = function (v)
    {
        if (this._p_locale)
            return;

        if (this._locale != v)
        {
            this._locale = v;
            this.on_apply_locale(v);
            this.parent.on_apply_value(this.parent._p_value);
        }
    };

    _pSpinFieldBox.on_apply_locale = function (locale) 
    {
        var maskobj = this._getMaskObj();
        if (maskobj) 
        {
            maskobj.setLocale(locale);
        }
    };

    _pSpinFieldBox._on_input_autoskip = nexacro._emptyFn;

    _pSpinFieldBox.on_lbuttondown_default_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key) 
    {
        return this._p_parent.on_lbuttondown_default_action(elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);
    };

    _pSpinFieldBox.on_lbuttonup_default_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key) 
    {
        return this._p_parent.on_lbuttonup_default_action(elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);
    };

    _pSpinFieldBox.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key) 
    {
        return this._p_parent.on_fire_onclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);
    };

    _pSpinFieldBox.on_keypress_basic_action = function (keycode, charcode, alt_key, ctrl_key)
    {
        // 기존 로직과 다른 로직 필요하여 재정의
        var input_elem = this._input_element;
        if (input_elem)
        {
            if (keycode == nexacro.Event.KEY_TAB)
            {
                if (!this._getDlgCode().want_tab)
                {
                    input_elem.stopSysEvent();
                    return;
                }
            }

            if (keycode !== 0 && charcode === 0)
            {
                return true;
            }
            else
            {
                // case :etc.. case by case
                if (keycode == nexacro.Event.KEY_ENTER || keycode == nexacro.Event.KEY_ESC)
                {
                    return true;
                }
            }

            charcode = charcode || keycode;
            if (!ctrl_key && !alt_key && charcode)
            {
                var input_char = String.fromCharCode(charcode);
                if (input_char.length > 0)
                {
                    var maskobj = this._getMaskObj();
                    var pos = input_elem.getElementCaretPos();
                    var input_pos = maskobj.findNearEditablePos(pos.begin, 1);

                    if(this._p_parent._p_displaycomma) // text에서 number 포멧 적용을 위한 변경
                    {
                        if (input_pos < 0 || maskobj.isFilterChar(input_char, input_pos, pos.end))
                        {
                            input_elem.stopSysEvent();
                            this._on_input_autoskip();
                            return;
                        }
                    }
                    maskobj.keyPressed(input_char, input_pos);
                }
            }
        }
    }

    _pSpinFieldBox.on_beforekeyinput_basic_action = function (value, status, begin, end, inputType) // IME를 막기위해 필요
    {
        return nexacro.MaskEdit.prototype.on_beforekeyinput_basic_action.call(this, value, status, begin, end, inputType);
    };

    _pSpinFieldBox._beforeinput_process_with_HTMLEvent = function (value, status, begin, end, inputType)
    {
        return nexacro.MaskEdit.prototype._beforeinput_process_with_HTMLEvent.call(this, value, status, begin, end, inputType);
    };

    _pSpinFieldBox._beforeinput_process_with_NexacroInputEvent = function (value, status, begin, end)
    {
        return nexacro.MaskEdit.prototype._beforeinput_process_with_NexacroInputEvent.call(this, value, status, begin, end);
    };

    _pSpinFieldBox = null;
    _pSpinField = null;
};
