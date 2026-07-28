//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2025 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//==============================================================================

if (!nexacro.SelectField) 
{
    //==============================================================================
    // nexacro.SelectField (flexible)
    //==============================================================================
    nexacro.SelectField = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay) 
    {
        nexacro.TextField.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay);
        this._onlydisplay = onlydisplay;
    };

    var _pSelectField = nexacro._createPrototype(nexacro.TextField, nexacro.SelectField);
    nexacro.SelectField.prototype = _pSelectField;
    _pSelectField._type_name = "SelectField";

    _pSelectField._boxcontrol_socket = {
        instance_name: "SelectFieldBox",
        id: "box"
    };

    /* control */
    _pSelectField._dropbutton = null;
    _pSelectField._selectfieldlist = null;
    _pSelectField._popupcontrol = null;

    /* default properties */
    _pSelectField._p_value = undefined;
    _pSelectField._p_index = -1;
    _pSelectField._p_text = "";

    _pSelectField._p_codecolumn = "";
    _pSelectField._p_datacolumn = "";
    _pSelectField._p_innerdataset = "";

    _pSelectField._p_autoselect = false;
    _pSelectField._p_autoskip = false;

    _pSelectField._initsoftkeyboard = undefined;
    _pSelectField._p_usesoftkeyboard = true;
    _pSelectField._p_usetrailingbutton = true;

    _pSelectField._p_displaynulltext = "";
    _pSelectField._p_readonly = false;
    _pSelectField._p_usecontextmenu = true;

    _pSelectField._p_displayrowcount = undefined;
    _pSelectField._p_buttonsize = undefined;
    _pSelectField._p_itemheight = undefined;
    _pSelectField._p_type = "dropdown";
    _pSelectField._p_popuptype = "normal";
    _pSelectField._p_popupsize = undefined;
    _pSelectField._p_acceptvaluetype = "allowinvalid";   //allowinvalid | ignoreinvalid

    _pSelectField._p_selectbyarrowkey = false;

    /* internal variable */
    _pSelectField._is_close_popup_by_select = false;
    _pSelectField._isFiredOnInput = false;
    _pSelectField._innerdataset = "";
    _pSelectField._filtereddataset = "";
    _pSelectField._default_value = undefined;
    _pSelectField._default_text = "";
    _pSelectField._default_index = -1;
    _pSelectField._has_inputElement = true;
    _pSelectField._want_arrows = true;
    _pSelectField._searched_index = undefined;

    /* status */
    _pSelectField._use_readonly_status = true;
    _pSelectField._is_editable_control = true;


    /* event list */
    _pSelectField._event_list = {
        "oneditclick": 1, "onitemclick": 1,
        "onkeydown": 1, "onkeyup": 1,
        "onkillfocus": 1, "onsetfocus": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1,
        "onmove": 1, "onsize": 1,
        "canitemchange": 1, "onitemchanged": 1, "oninput": 1,
        "ondropdown": 1, "oncloseup" : 1,
        "onmousewheel": 1, "oncontextmenu": 1,
        "oninnerdatachanged": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1, "ondevicebuttonup": 1,
    };

    /* accessibility */
    _pSelectField.accessibilityrole = "SelectField";

    //===============================================================
    // nexacro.SelectField : Create & Destroy & Update
    //===============================================================
    _pSelectField.on_create_contents = function () 
    {
        nexacro.TextField.prototype.on_create_contents.call(this);
        this._input_element = this._getInputElement();
        this._dropbutton = this._box._trailbutton;
    };

    _pSelectField.on_created_contents = function (win) 
    {
        nexacro.TextField.prototype.on_created_contents.call(this, win);
        this._input_element = this._getInputElement();
        this._dropbutton = this._box._trailbutton;
    };

    _pSelectField.on_destroy_contents = function (win)
    {
        if(this._selectfieldlist)
        {
            this._selectfieldlist.destroy();
            this._selectfieldlist = null;
        }
        
        if(this._popupcontrol)
        {
            this._popupcontrol.destroy();
            this._popupcontrol = null;
        }

        var _window = this._getWindow();
        if (_window)
        {
            _window._releaseCaptureLock(this);
        }

        this._removeEventHandlerToInnerDataset();
        this._refreshLabel();
        this._dropbutton = null;

        nexacro.TextField.prototype.on_destroy_contents.call(this, win);
    };

    _pSelectField._removeEventHandlerToInnerDataset = function ()
    {
        if (this._innerdataset)
        {
            this._innerdataset._removeEventHandler("onvaluechanged", this._on_dataset_onvaluechanged, this);
            this._innerdataset._removeEventHandler("onrowsetchanged", this._on_dataset_onrowsetchanged, this);
            this._innerdataset = null;
        }

        if (this._filtereddataset)
        {
            this._filtereddataset.destroy();
            this._filtereddataset = null;
        }
    };

    _pSelectField.on_create_contents_command = function () 
    {
        var str = "";
        str += nexacro.TextField.prototype.on_create_contents_command.call(this);

        this._setEventHandlerToBox();
        return str;
    };

    _pSelectField.on_after_created_ext = function () 
    {
        nexacro.TextField.prototype.on_after_created_ext.call(this);

        this._setEventHandlerToBox();
    };

    _pSelectField._setEventHandlerToTrailingButton = function ()
    {
        var _dropbutton = this._dropbutton;

        if (_dropbutton)
        {
            if (nexacro._isTouchInteraction && nexacro._SupportTouch)
                _dropbutton._setEventHandler("onclick", this._on_drop_mobile_onclick, this);
            else
                _dropbutton._setEventHandler("onclick", this._on_fire_drop_onclick, this);
        }
    };

    _pSelectField._setEventHandlerToBox = function ()
    {
		var input_elem = this._input_element;
        var box = this._box;
		if (input_elem)
		{
			var bMobile = (nexacro._isTouchInteraction && nexacro._SupportTouch);
			if (bMobile)
			{
				box._setEventHandler("onlbuttondown", this._on_edit_mobile_onlbuttondown, this);
			}
			else
			{
                box._setEventHandler("onlbuttondown", this._on_edit_onlbuttondown, this);
			}

			// 이벤트 구조 변경으로 mobile 구분을 둘 필요가 없음, combo, comboedit 키보드 이벤트는 전부 combo의 default action 처리
			box._setEventHandler("onkeydown", this._on_edit_onkeydown, this);
			box._setEventHandler("oninput", this._on_edit_oninput, this);
		}
    }

    _pSelectField._setEventHandlerToListBox = function ()
    {
        var selectfieldlist = this._selectfieldlist;
        if (selectfieldlist)
        {
            selectfieldlist._setEventHandler("onitemclick", this._on_list_onitemclick, this);
            selectfieldlist._setEventHandler("canitemchange", this.on_notify_list_canitemchange, this);
            selectfieldlist._setEventHandler("onitemchanged", this.on_notify_list_onitemchanged, this);
		}
    };

    _pSelectField._setInnerDatasetStr = function (str)
    {
        this._removeEventHandlerToInnerDataset();

        if (str)
        {
            str = str.replace("@", "");
            var _v = this._findDataset(str);
            this._innerdataset = _v ? _v : "";
            this._p_innerdataset = str;
        }
        else
        {
            this._innerdataset = null;
            this._p_innerdataset = "";
        }
    };

    _pSelectField._setDefaultCaret = function ()
    {
        this.setCaretPos(0);
    };

    _pSelectField.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {        
        if (this.oneditclick && this.oneditclick._has_handlers)
        {
            var caretpos = this.getCaretPos();
            var clientXY = this._getClientXY(canvasX, canvasY);

            var evt = new nexacro.EditClickEventInfo(this, "oneditclick", caretpos, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[1], this, this, meta_key);
            return this.oneditclick._fireEvent(this, evt);
        }

        return true;
    };

    

    //===============================================================
    // nexacro.SelectField : Override
    //===============================================================

    _pSelectField.on_init_bindSource = function (columnid, propid, ds)
    {
        if (this._isFilterType())
        {
            this._createFilteredDataset();
        }

        this._setValue(undefined, true);
        this._setIndex(-1);
        this._setText("");

        this.redraw();
    };

    _pSelectField.on_change_bindSource = function (propid, ds, row, col)
    {
        if (propid == "value")
        {
            if (this._isFilterType())
            {
                this._createFilteredDataset();
            }

            var idx = -1;
            var txt = "";
            var val = ds.getColumn(row, col);

            val = this._convertValueType(val, true);

            if (this._p_value == val)
            {
                return;
            }

            this._setValue(val, true);

            ds = this._selectDataset();
            if (ds)
            {
                idx = this._getIndexFromValue(ds, val);
                if (idx > -1)
                {
                    txt = this._getItemText(idx);
                }

                this._setIndex(idx);
                this._setText(txt);

                this._updateAccessibilityLabel();
            }

            this.redraw();
            this._setDefaultProps(this._p_index, this._p_value, this._p_text);
        }
    };

    _pSelectField._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        var want_arrow = this._want_arrow;
        if (keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN)
        {
            const env = this._getEnvironment();             
            if (env)
                want_arrow = !env._p_enableaccessibility || !env._p_accessibilitycontentsearchkey || ctrlKey || altKey;
        }
        this._want_arrow = false;
        return { want_tab: false, want_return: false, want_escape: false, want_chars: false, want_arrows: want_arrow };
    };

    _pSelectField._apply_setfocus = function (evt_name)
    {
        var box = this._box;
        if (!box) return;
        
        box._changeStatus("focused", true);

        var isTouch = nexacro._isTouchInteraction && nexacro._SupportTouch

        if (!isTouch)
        {
            box._on_focus(true, evt_name);
            return;
        }

        if (this._isDropdownType())
        {
            var control_elem = this.getElement();
            if (control_elem)
            {
                control_elem.setElementFocus(true);
            }
            else
            {
                box._on_focus(true, evt_name);
            }
        }
        else
        {
            box._on_focus(true, evt_name);
            this._input_element.setElementFocus(evt_name);
        }
    };

    //===============================================================
    // nexacro.SelectField : Properties
    //===============================================================

    _pSelectField.set_value = function (v)
    {
        if (!this._is_created && (v === undefined || v === null))// || v === ""))   // tool에서 입력된 빈값은 ""으로 들어와 구분이 불가하여 체크.
            return;

        v = this._convertValueType(v);

        if (this._p_value !== v)
        {
            if (this._p_acceptvaluetype == "ignoreinvalid")
            {
                var idx = -1;
                var ds = this._selectDataset();
                if (ds)
                {
                    idx = this._getIndexFromValue(ds, v);
                    if (idx < 0)
                        return;
                }
            }

            if (this._bind_event)
            {
                this.applyto_bindSource("value", v);
                return;
            }
            this._p_value = v;
            this.on_apply_value(v);
            this.redraw();
        }
    };

    _pSelectField.on_apply_value = function (value)
    {
        //var control_elem = this.getElement();
        //if (control_elem)
        {
            var idx = -1;
            var txt = "";
            var ds = this._selectDataset();
            if (ds)
            {
                idx = this._getIndexFromValue(ds, value);
                if (idx > -1)
                {
                    txt = this._getItemText(idx);
                }

                this._setIndex(idx);
                this._setText(txt);

                // if (nexacro._enableaccessibility)
                // {
                //     this._updateAccessibilityLabel();
                // }
            }

            this._setDefaultProps(this._p_index, this._p_value, this._p_text);
        }
    };

    _pSelectField.set_index = function (v)
    {
        if (isNaN(v = +v) || v < -1)
        {
            return;
        }

        if (this._p_index != v)
        {
            this._p_index = v;
            this.on_apply_index(v);
            this.redraw();
        }
    };

    _pSelectField.on_apply_index = function (idx)
    {
        //var control_elem = this.getElement();
        //if (control_elem)
        //{
        var val;
        var txt = "";

        var ds = this._innerdataset;
        if (ds)
        {
            if (idx !== null && idx >= 0 && idx < ds.getRowCount())
            {
                val = this._getItemValue(idx);
                txt = this._getItemText(idx);
            }
            else
            {
                idx = -1;
            }

            if (this.applyto_bindSource("value", val))
            {
                this._setValue(val, true);
                this._setText(txt);
                if (this._p_index != idx)
                {
                    this._setIndex(-1);
                }
            }
            else
            {
                var result = "restore";

                // check bind value
                var form = this._getForm();
                var item = form._bind_manager._findBindItem(this, "value");
                if (!item)
                {
                    form = this._getMainForm();
                    item = form._bind_manager._findBindItem(this, "value");
                }
                if (item)
                {
                    var bind_ds = item._dataset;
                    if (bind_ds.rowcount > 0)
                    {
                        if (val == this._p_value)
                        {
                            if (txt == this._p_text)
                            {
                                result = "change";
                            }
                        }
                        else if (nexacro._isNumber(idx) && idx >= 0 && idx < ds.getRowCount()) // 유효한 val과 txt 있을경우만
                        {
                            result = "change";
                        }
                    }
                }

                // apply bind result
                if (result == "restore")
                {
                    this._setIndex(this._default_index);
                    this._setValue(this._default_value, true);
                    this._setText(this._default_text);
                }
                else if (result == "change")
                {
                    this._setIndex(idx);
                    this._setValue(val, true);
                    this._setText(txt);
                }
            }
        }
        else
        {
            this._setIndex(-1);
            this._setValue(undefined, true);
            this._setText("");
        }

        this._setDefaultProps(this._p_index, this._p_value, this._p_text);
        //}
    };

    _pSelectField.set_type = function (v)
    {
        var type_enum = ["dropdown", "search", "filter", "filterlike", "caseisearch", "caseifilter", "caseifilterlike"];
        if (type_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_type != v)
        {
            this._p_type = v;
            this.on_apply_type(v);
        }
    };

    _pSelectField.set_itemheight = function (v)
    {
        if (v !== undefined)
        {
            v = Number(v)
            if (isNaN(v))
            {
                return;
            }
        }

        if (this._p_itemheight != v)
        {
            this._p_itemheight = v;
            this.on_apply_itemheight(v);
        }
    };

    _pSelectField.on_apply_itemheight = function (itemheight)
    {
        var selectfieldlist = this._selectfieldlist;
        if (selectfieldlist)
        {
            selectfieldlist.set_itemheight(itemheight);
        }
    };

    _pSelectField.on_apply_type = function (type)
    {
        if (this._filtereddataset)
        {
            this._filtereddataset.filter("");
        }

        this.on_apply_readonly();
        this.on_apply_autoselect(this._p_autoselect);
    };

    _pSelectField.set_acceptvaluetype = function (v)
    {
        var type_enum = ["allowinvalid", "ignoreinvalid"];

        if (type_enum.indexOf(v) == -1)
        {
            return;
        }
        this._p_acceptvaluetype = v;
    };

    _pSelectField._isPopupVisible = function ()
    {
        var ret = false;
        if (this._popupcontrol)
            ret = this._popupcontrol._p_visible;
        
        return ret;
    };

    _pSelectField._clearFilteredDataset = function ()
    {
        if (this._filtereddataset)
        {
            this._filtereddataset.set_filterstr("");
        }
    };

    _pSelectField.redraw = function ()
    {
    var _is_itemchanged = this._default_index != this._p_index;
    var displayText = null;
    var hasValue = this._p_text || !nexacro._isNull(this._p_value);

        if (this._p_index == -1)
        {
            if(this._default_text && this._default_value)
            {
                this._p_text = this._default_text;
                this._p_value = this._default_value;
            }
            else
            {
            this._p_text = undefined;
            this._p_value = undefined;
        }
        
            displayText = this._p_text;
        }
            
    if (hasValue)
            {
        var showEmptyReadOnly = (this._onlydisplay && this._p_index < 0 && this._p_text == "");
        var showEmptyEditable = (!this._onlydisplay && this._p_displaynulltext && this._p_text == "");

        if (showEmptyReadOnly || showEmptyEditable)
        {
            displayText = undefined;
                    }
                    else
                    {
            if (!_is_itemchanged)
            {
                        this._p_text = this._default_text;
                this._p_value = this._default_value;
            }
            displayText = this._p_text;
                    }
                }

    this._setEditValue(displayText);

        if (!this._p_selectbyarrowkey)
    {
            this._setDefaultCaret();
    }
    };

    _pSelectField.set_usetrailingbutton = nexacro._emptyFn;
    _pSelectField.set_useleadingbutton = nexacro._emptyFn;

    _pSelectField.set_innerdataset = function (v)
    {
        if (typeof v != "string")
        {
            this.setInnerDataset(v);
            return;
        }

        if (this._p_innerdataset != v)
        {
            this._removeEventHandlerToInnerDataset();

            if (!v)
            {
                this._innerdataset = null;
                this._p_innerdataset = "";
            }
            else
            {
                v = v.replace("@", "");
                var _v = this._findDataset(v);
                this._innerdataset = _v ? _v : "";
                this._p_innerdataset = v;
            }
            this.on_apply_innerdataset(this._innerdataset);
        }
        else if (this._p_innerdataset && !this._innerdataset)
        {
            this._setInnerDatasetStr(this._p_innerdataset);
            this.on_apply_innerdataset(this._innerdataset);
        }
    };

    _pSelectField.on_apply_innerdataset = function (ds)
    {
        if (this._selectfieldlist)
        {
            this._selectfieldlist.setInnerDataset(ds);
        }

        if (ds)
        {
            ds._setEventHandler("onvaluechanged", this._on_dataset_onvaluechanged, this);
            ds._setEventHandler("onrowsetchanged", this._on_dataset_onrowsetchanged, this);

            if (this._isFilterType())
            {
                this._createFilteredDataset();
            }

            if (this._p_index > -1)
            {
                this._recheckIndex();
            }
            else if (this._p_value !== undefined)
            {
                this._recheckValue();
            }
            else if (this._p_text !== "")
            {
                this._recheckText();
            }

            this.redraw();
        }
    };

    _pSelectField.set_codecolumn = function (v)
    {
        if (this._p_codecolumn != v)
        {
            this._p_codecolumn = v;
            this.on_apply_codecolumn(v);
        }
    };

    _pSelectField.on_apply_codecolumn = function (codecolumn)
    {
        if (this._selectfieldlist)
        {
            this._selectfieldlist.set_codecolumn(codecolumn);
        }

        if (this._isFilterType())
        {
            this._createFilteredDataset();
        }

        if (this._is_created)
        {
            if (this._p_index > -1)
            {
                this._recheckIndex();
            }
            else if (this._p_value !== undefined)
            {
                this._recheckValue();
            }
            else if (this._p_text !== "")
            {
                this._recheckText();
            }
            this._setDefaultProps(this._p_index, this._p_value, this._p_text);
            this.redraw();
        }
    };
    
    _pSelectField.set_datacolumn = function (v)
    {
        if (this._p_datacolumn != v)
        {
            this._p_datacolumn = v;
            this.on_apply_datacolumn(v);
        }
    };

    _pSelectField.on_apply_datacolumn = function (datacolumn)
    {
        var selectfieldlist = this._selectfieldlist;
        if (selectfieldlist)
        {
            selectfieldlist.set_datacolumn(this._p_datacolumn);
        }

        if (this._isFilterType())
        {
            this._createFilteredDataset();
        }

        if (this._is_created)
        {
            if (this._p_index > -1)
            {
                this._recheckIndex();
            }
            else if (this._p_value !== undefined)
            {
                this._recheckValue();
            }
            else if (this._p_text !== "")
            {
                this._recheckText();
            }
            this._setDefaultProps(this._p_index, this._p_value, this._p_text);
            this.redraw();
        }
    };

    _pSelectField.set_displayrowcount = function (v)
    {
        if (v !== undefined)
        {
            if (isNaN(v = +v) || v < 0)
            {
                return;
            }
        }

        if (this._p_displayrowcount != v)
        {
            this._p_displayrowcount = v;
        }
    };

    _pSelectField.set_scrollbarbarminsize = function (scrollbarbarminsize)
    {
        if (scrollbarbarminsize !== undefined)
        {
            scrollbarbarminsize = parseInt(scrollbarbarminsize);
            if (isNaN(scrollbarbarminsize))
                return;
        }
        if (this._p_scrollbarbarminsize != scrollbarbarminsize)
        {
            this._p_scrollbarbarminsize = scrollbarbarminsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbarbarminsize(scrollbarbarminsize);
            }
        }
    };

    _pSelectField.set_scrollbardecbuttonsize = function (scrollbardecbuttonsize)
    {
        if (scrollbardecbuttonsize !== undefined)
        {
            scrollbardecbuttonsize = parseInt(scrollbardecbuttonsize);
            if (isNaN(scrollbardecbuttonsize))
                return;
        }

        if (this._p_scrollbardecbuttonsize != scrollbardecbuttonsize)
        {
            this._p_scrollbardecbuttonsize = scrollbardecbuttonsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbardecbuttonsize(scrollbardecbuttonsize);
            }
        }
    };

    _pSelectField.set_scrollbarbaroutsize = function (scrollbarbaroutsize)
    {
        if (scrollbarbaroutsize !== undefined)
        {
            scrollbarbaroutsize = parseInt(scrollbarbaroutsize);
            if (isNaN(scrollbarbaroutsize))
                return;
        }

        if (this._p_scrollbarbaroutsize != scrollbarbaroutsize)
        {
            this._p_scrollbarbaroutsize = scrollbarbaroutsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbarbaroutsize(scrollbarbaroutsize);
            }
        }
    };

    _pSelectField.set_scrollbarincbuttonsize = function (scrollbarincbuttonsize)
    {
        if (scrollbarincbuttonsize !== undefined)
        {
            scrollbarincbuttonsize = parseInt(scrollbarincbuttonsize);
            if (isNaN(scrollbarincbuttonsize))
                return;
        }

        if (this._p_scrollbarincbuttonsize != scrollbarincbuttonsize)
        {
            this._p_scrollbarincbuttonsize = scrollbarincbuttonsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbarincbuttonsize(scrollbarincbuttonsize);
            }
        }
    };

    _pSelectField.set_scrollbarsize = function (scrollbarsize)
    {
        if (scrollbarsize !== undefined)
        {
            scrollbarsize = parseInt(scrollbarsize);
            if (isNaN(scrollbarsize))
                return;
        }

        if (this._p_scrollbarsize != scrollbarsize)
        {
            this._p_scrollbarsize = scrollbarsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbarsize(scrollbarsize);
            }
        }
    };

    _pSelectField.set_scrollbartrackbarsize = function (scrollbartrackbarsize)
    {
        if (scrollbartrackbarsize !== undefined)
        {
            scrollbartrackbarsize = parseInt(scrollbartrackbarsize);
            if (isNaN(scrollbartrackbarsize))
                return;
        }

        if (this._p_scrollbartrackbarsize != scrollbartrackbarsize)
        {
            this._p_scrollbartrackbarsize = scrollbartrackbarsize;

            var selectfieldlist = this._selectfieldlist;
            if (selectfieldlist)
            {
                selectfieldlist.set_scrollbartrackbarsize(scrollbartrackbarsize);
            }
        }
    };

    _pSelectField.set_selectbyarrowkey = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_selectbyarrowkey != v)
        {
            this._p_selectbyarrowkey = v;
        }
    };

    _pSelectField._properties = [
        { name: "value" }, 
        { name: "index" }, 
        { name: "text" }, 
        { name: "codecolumn" }, 
        { name: "datacolumn" }, 
        { name: "innerdataset" }, 
        { name: "autoselect" }, 
        { name: "autoskip" }, 
        { name: "usesoftkeyboard" }, 
        { name: "displaynulltext" },
        { name: "readonly" }, 
        { name: "usecontextmenu" }, 
        { name: "displayrowcount" }, 
        { name: "buttonsize" }, 
        { name: "itemheight" }, 
        { name: "type" }, 
        { name: "popuptype" }, 
        { name: "popupsize" }, 
        { name: "acceptvaluetype" }, 
        { name: "scrollbarbarminsize" }, 
        { name: "scrollbardecbuttonsize" }, 
        { name: "scrollbarsize" }, 
        { name: "scrollbarbaroutsize " }, 
        { name: "scrollbarincbuttonsize" }, 
        { name: "scrollbartrackbarsize" }, 
        { name: "selectbyarrowkey" }
    ];

    nexacro._defineProperties(_pSelectField, _pSelectField._properties);
    
    //===============================================================
    // nexacro.SelectField : Methods
    //===============================================================
    _pSelectField.dropdown = function ()
    {
        var ds;

        if (!this._p_enable || this._p_readonly || !this._p_visible)
        {
            return false;
        }

        var input_elem = this._input_element ? this._input_element : null;
        if (input_elem && input_elem._is_accept_touch && !input_elem._is_accept_touch())            
        {
            return false;
        }

        if (!this.isDropdown())
        {
            ds = this._selectDataset(true);

            if (this._isFilterType() && ds.rowcount == 0)
            {
                ds = this._innerdataset;
            }
        }
        else
        {
            return false;
        }

        var lastfocus = this._find_lastFocused();
        if (lastfocus instanceof nexacro.Div)
            lastfocus = lastfocus._getLastFocused();

        if (lastfocus != this)
            this.setFocus(false);

        this._showPopup(ds, this._p_index, 1);
    };

    _pSelectField.getCount = function ()
    {
        if (this.getElement())
        {
            if (this._selectfieldlist)
            {
                return this._selectfieldlist.getCount();
            }
            else if (this._innerdataset)
            {
                return this._innerdataset.getRowCount();
            }
        }

        return 0;
    };

    _pSelectField.getInnerDataset = function ()
    {
        return this._innerdataset;
    };

    _pSelectField.setInnerDataset = function (obj)
    {
        this._removeEventHandlerToInnerDataset();

        if (!obj)
        {
            this._innerdataset = null;
            this._p_innerdataset = "";
            this.on_apply_innerdataset(null);
        }
        else if (obj instanceof nexacro.Dataset || (typeof obj == "object" && obj._type_name == "Dataset"))
        {
            this._innerdataset = obj;
            this._p_innerdataset = obj.id;
            this.on_apply_innerdataset(obj);
            if (this._is_created)
            {
                this._recheckIndex();
                this.redraw();
            }
        }
    };

    _pSelectField.updateToDataset = function ()
    {
        return this.applyto_bindSource("value", this._p_value);
    };

    //===============================================================
    // nexacro.SelectField : Logical Part
    //===============================================================
    
    _pSelectField._createPopupListBoxControl = function (ds)
    {
        if (!this._isUsableDataset(ds))
        {
            return;
        }

        this._createPopupControl();
        this._createListBoxControl(ds);

        this._createdPopupControl(this._selectfieldlist);
        this._createdListBoxControl();
    };
    
    _pSelectField._createListBoxControl = function (ds)
    {
        if (!this._isUsableDataset(ds))
        {
            return;
        }

        var datacol = this._p_datacolumn;
        var codecol = this._p_codecolumn;
        var selectfieldlist = this._selectfieldlist;

        if (!selectfieldlist)
        {
            selectfieldlist = this._selectfieldlist = new nexacro._SelectFieldListControl("selectfieldlist", 0, 0, 0, 0, null, null, null, null, null, null, this);

            selectfieldlist.set_scrolltype("vertical");
            var vscrollbartype = this._getVScrollBarType() || "auto";

            selectfieldlist.set_scrollbartype("none " + vscrollbartype);
            selectfieldlist.set_codecolumn(codecol);
            selectfieldlist.set_datacolumn(datacol);
			selectfieldlist.setInnerDataset(ds);
            selectfieldlist.set_index(this._p_index);
            selectfieldlist.set_cssclass(this._p_cssclass);

            selectfieldlist.set_itemheight(this._p_itemheight);
            selectfieldlist.set_scrollbarbarminsize(this._p_scrollbarbarminsize);
            selectfieldlist.set_scrollbardecbuttonsize(this._p_scrollbardecbuttonsize);
            selectfieldlist.set_scrollbarbaroutsize(this._p_scrollbarbaroutsize);
            selectfieldlist.set_scrollbarincbuttonsize(this._p_scrollbarincbuttonsize);
            selectfieldlist.set_scrollbarsize(this._p_scrollbarsize);
            selectfieldlist.set_scrollbartrackbarsize(this._p_scrollbartrackbarsize);

            selectfieldlist._setPopupContains(true);
            selectfieldlist.createComponent(true);
		}
		else
		{
			if (selectfieldlist._is_created)
			{
				if (selectfieldlist._innerdataset != ds)
				{
					selectfieldlist.setInnerDataset(ds);
				}
			}
		}
    };

    _pSelectField._createPopupControl = function ()
    {
        var popupcontrol = this._popupcontrol;
        if (!popupcontrol)
        {
            popupcontrol = this._popupcontrol = new nexacro._SelectFieldPopupControl("selectfieldpopup", 0, 0, 0, 0, null, null, null, null, null, null, this);
            popupcontrol._excluded_flex = true;
            popupcontrol._setType(this._p_popuptype);
            popupcontrol.createComponent(true);
        }
    };

    _pSelectField._createdPopupControl = function (attach_comp)
    {
        var popupcontrol = this._popupcontrol;
        if (popupcontrol && !popupcontrol._is_created)
        {
            popupcontrol._attach(attach_comp);
            popupcontrol.on_created();
        }
    };

    _pSelectField._createFilteredDataset = function ()
	{
		var ids = this._innerdataset;
		var fds = this._filtereddataset;
		var codecol = this._p_codecolumn;
		var datacol = this._p_datacolumn;
		var selectfieldlist = this._selectfieldlist;

		if (ids && (!(codecol in ids.colinfos) || !(datacol in ids.colinfos)))
		{
			return;
		}

		if (!this._isUsableDataset(ids))
		{
			return;
		}

		if (!fds)
		{
			fds = this._filtereddataset = new nexacro.Dataset("filter_" + this.id);
		}

		fds.set_enableevent(false);

		fds.clear();
		fds.addColumn(codecol, "string");
		fds.addColumn(datacol, "string");

		for (var i = 0, cnt = ids.getRowCount(); i < cnt; i++)
		{
			fds.insertRow(i);
			fds.setColumn(i, codecol, ids.getColumn(i, codecol));
			fds.setColumn(i, datacol, ids.getColumn(i, datacol));
		}

		fds.set_enableevent(true);

		if (selectfieldlist)
		{
			selectfieldlist._redrawListBoxContents(false);
			selectfieldlist._onRecalcScrollSize();
		}
	};

    _pSelectField._createdListBoxControl = function (ds)
    {
        var selectfieldlist = this._selectfieldlist;
        if (selectfieldlist && !selectfieldlist._is_created)
        {
            selectfieldlist._setEventHandler("oncloseup", this._on_list_oncloseup, this);
            selectfieldlist._setEventHandler("onitemclick", this._on_list_onitemclick, this);

            selectfieldlist.on_created();
        }
    };
    
    _pSelectField._showPopup = function (ds, index, use_timer)
    {
        this._on_showPopup(ds, index);
    };

    _pSelectField._on_showPopup = function (ds, index)
    {
        if (!this._p_visible)
            return;

        if (this._isPopupVisible())
        {
            this._closePopup();
        }

		var win = this._getWindow();
		var rowcnt = this._innerdataset.rowcount;

		if (this.on_fire_ondropdown(this))
		{
			// TODO : ondropdown에서 index변경경우 필요.
			if ((this.ondropdown && this.dropdown.preventable && this.ondropdown.defaultprevented) || !this._isUsableDataset(ds) || this._getPopupType() == "none")
			{
				return;
			}

			index = (rowcnt == this._innerdataset.rowcount) ? index : this._p_index;

			this._createPopupListBoxControl(ds);

			var selectfieldlist = this._selectfieldlist;

			var popupcontrol = this._popupcontrol;
			if (popupcontrol)
			{
                popupcontrol._popupAuto();
			}

            selectfieldlist._redrawListBoxContents(false);
            selectfieldlist._onRecalcScrollSize();

			if (selectfieldlist)
			{
				selectfieldlist.set_index(index);
				selectfieldlist._refreshScroll(index, 1);

				if (win)
				{
					win._setCaptureLock(this, true, false);
				}

				// if (nexacro._enableaccessibility)
				// {
				// 	this._accessibility_showPopup(ds, index);
				// }
			}
		}
    };

    _pSelectField._closePopup = function ()
    {
        var _window = this._getWindow();
        if (_window)
        {
            _window._releaseCaptureLock(this);
        }

        var popupcontrol = this._popupcontrol;
        if (popupcontrol)
        {
            popupcontrol._closePopup();
        }
    }; 

    _pSelectField._recheckIndex = function ()
	{
		var idx = this._p_index;
		var txt = "";
        var val;

		var ds = this._innerdataset;
		if (ds)
		{
			var rowcount = ds.getRowCount();
            if (idx > -1 && rowcount > 0 && idx < rowcount)
			{
				val = this._getItemValue(idx);
				txt = this._getItemText(idx);
			}
			else
			{
				idx = -1;
			}
		}
		else
		{
			idx = -1;
		}

		this._setValue(val, true);
		this._setText(txt);
		this._setIndex(idx);
	};

    _pSelectField._recheckValue = function ()
    {
        var idx = -1;
        var txt = "";
		var val = this._p_value;
        var column = this._p_codecolumn || this._p_datacolumn;

        var ds = this._innerdataset;
        if (ds)
        {
			var rowcount = ds.getRowCount();
            if (rowcount > 0 && ds._isValidColumn(column))
            {                
				for (var i = 0; i < rowcount; i++)
				{
					if (val == this._getItemValue(i))
					{
						idx = i;
						txt = this._getItemText(i);
						break;
					}
				}
			}
        }
        else
		{
			val = undefined;
		}

		this._setValue(val, true); //[TextField]로 부터 상속 받음, true valid 체크 하지 않는 파라미터
        this._setText(txt);
        this._setIndex(idx);
    };

    _pSelectField._recheckText = function ()
    {
        var idx = -1;
		var txt = this._p_text;
		var val;

        var ds = this._innerdataset;
        if (ds)
        {
			var rowcount = ds.getRowCount();
			if (rowcount > 0)
			{
				for (var i = 0; i < rowcount; i++)
				{
					if (txt == this._getItemText(i))
					{
						idx = i;
						val = this._getItemValue(i);
						break;
					}
				}
			}
			else
			{
				txt = "";
			}
        }
        else
        {
			txt = "";
        }

		this._setValue(val, true);
		this._setText(txt);
        this._setIndex(idx);
    };

    _pSelectField._selectDataset = function (bInit)
    {
        if (this._isFilterType())
        {
            if (!this._filtereddataset)
            {
                this._createFilteredDataset();
            }
            else
            {
                if (bInit)
                {
                    this._clearFilteredDataset();
                }
            }

            return this._filtereddataset;
        }
        else
        {
            return this._innerdataset;
        }
    };
    //===============================================================
    // nexacro.SelectField : Events
    //===============================================================
    
    _pSelectField.on_fire_oninput = function ()
    {
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

        var retn = true;

        if (this.oninput && this.oninput._has_handlers)
        {
            var evt = new nexacro.InputEventInfo(this, "oninput");
            retn = this.oninput._fireEvent(this, evt);
        }
        
        return retn;
    };

    _pSelectField.on_fire_oninnerdatachanged = function (obj, oldvalue, newvalue, columnid, col, row)
    {
        if (this.oninnerdatachanged && this.oninnerdatachanged._has_handlers)
        {
            var evt = new nexacro.InnerdataChangedEventInfo(obj, "oninnerdatachanged", oldvalue, newvalue, columnid, col, row);
            return this.oninnerdatachanged._fireEvent(this, evt);
        }

        return true;
    };

    _pSelectField.on_fire_onitemclick = function (obj, index, itemtext, itemvalue, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, meta_key)
    {
        if (this.onitemclick && this.onitemclick._has_handlers)
        {
            var evt = new nexacro.ItemClickEventInfo(obj, "onitemclick", index, itemtext, itemvalue, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, meta_key);
            this.onitemclick._fireEvent(this, evt);
        }

        return false;
    };

    _pSelectField.on_fire_canitemchange = function (obj, preindex, pretext, prevalue, postindex, posttext, postvalue)
    {
        if (this.canitemchange && this.canitemchange._has_handlers)
        {
            var evt = new nexacro.ItemChangeEventInfo(this, "canitemchange", preindex, pretext, prevalue, postindex, posttext, postvalue);
            var ret = this.canitemchange._fireCheckEvent(this, evt);
            return nexacro._toBoolean(ret);
        }

        return true;
    };

    _pSelectField.on_fire_onitemchanged = function (obj, preindex, pretext, prevalue, postindex, posttext, postvalue)
    {
        if (this.onitemchanged && this.onitemchanged._has_handlers)
        {
            var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", preindex, pretext, prevalue, postindex, posttext, postvalue);
            this.onitemchanged._fireEvent(this, evt);
        }
    };

    _pSelectField.on_fire_oncloseup = function (obj, preindex, pretext, prevalue, postindex, posttext, postvalue, is_select)
    {
        var ret;
        if (this.oncloseup && this.oncloseup._has_handlers)
        {
			var evt = new nexacro.ComboCloseUpEventInfo(this, "oncloseup", preindex, pretext, prevalue, postindex, posttext, postvalue, is_select);
            ret = this.oncloseup._fireEvent(this, evt);
            ret = nexacro._toBoolean(ret);
        }

        return ret;
    };
    
    _pSelectField.on_fire_ondropdown = function (obj)
    {
        if (this.ondropdown && this.ondropdown._has_handlers)
        {
            var evt = new nexacro.EventInfo(this, "ondropdown");
            return this.ondropdown._fireCheckEvent(this, evt);
        }

        return true;
    };

    _pSelectField._on_drop_mobile_onclick = function (obj, e)
    {
        if(!this._isDropdownType())
        {
            this._on_dropdown();
        }

        return this.on_fire_ondropbuttonclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.fromobject, e.fromreferenceobject, e.metakey);
    };
    
    _pSelectField._on_fire_drop_onclick = function (obj, e)
    {
        if (e.button != "lbutton" || this._isDropdownType()) return;

        if (this._p_readonly || !this._p_enable)
        {
            return false;
        }
        else
        {
            this._on_dropdown();
        }

        return this.on_fire_ondropbuttonclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.fromobject, e.fromreferenceobject, e.metakey);
    };

    _pSelectField._on_list_onitemclick = function (obj, e)
    {
        var input_elem = this._input_element;
        if (!this._selectfieldlist || !input_elem)
        {
            return false;
        }

        var pre_value = this._p_value;
        var pre_text = this._p_text;
        var pre_index = this._p_index;

        var cur_index = e.index;
        var cur_text = e.itemtext;
        var cur_value = e.itemvalue;

        this.on_fire_onitemclick(obj, cur_index, cur_text, cur_value, e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.metakey);

        if (this._isFilterType())
        {
            var ds = this._selectDataset();
            cur_index = this._getRawIndex(ds, e.index);
            if (cur_index != this._p_index)
            {
                cur_text = this._getItemText(cur_index);
                cur_value = this._getItemValue(cur_index);
            }
		}

		this._is_close_popup_by_select = true;
        if (cur_index != this._p_index)
        {
            if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
            {
                this._p_value = cur_value = pre_value;
                this._p_text = cur_text = pre_text;
                this._p_index = cur_index = pre_index;
            }

            this.redraw();

            if (this._isPopupVisible())
			{
                this._closePopup();

                if(this._input_element)
                {
                    this._apply_setfocus(e);
                    this._input_element.setElementFocus();
                }
				
                if (this._p_autoskip)
                {
                    this._setFocusToNextComponent();
                }
            }

			this._setDefaultProps(cur_index, cur_value, cur_text);
        }
        else
        {
            this.redraw();

            if (this._isPopupVisible())
			{
				this._closePopup();
            }
		}
		this._is_close_popup_by_select = false;
    };

    _pSelectField._on_list_oncloseup = function (obj, e)
    {
        var _window = this._getWindow();
        if (_window && this._track_capture)
        {
            _window._releaseCaptureLock(this);
        }

        if (!this._isFiredOnInput)
        {
            if (this._p_displaynulltext != "" && nexacro._isNull(this._p_value))
            {
                this._setEditValue(undefined);
            }
            else
            {
                this._setEditValue(this._p_text);
            }
        }

        this._changeStatus("mouseover", false);
        this._box._changeStatus("mouseover", false);
        this._dropbutton._changeStatus("mouseover", false);

        this.on_fire_oncloseup(this, this._default_index, this._default_text, this._default_value, this._p_index, this._p_text, this._p_value, this._is_close_popup_by_select);
	};


    _pSelectField.on_killfocus_basic_action = function (new_focus, new_refer_focus)
	{
		nexacro.FieldBase.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);

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

        var input_elem = this._input_element;
        if (input_elem)
        {
            this._box._changeStatus("focused", false);

            var text = input_elem.getElementText();
            if (this._p_text != text)
            {
                this.setCaretPos(0);
            }
        }

		this.redraw();
        this._setDefaultProps(this._p_index, this._p_value, this._p_text);

        this._confirmValue();

		if (this._isPopupVisible())
		{
			this._closePopup();
		}
    };
    
    _pSelectField._on_dropdown = function ()
    {
        if (this._p_readonly)
        {
            return;
        }

        var input_elem = this.input_elem;
        if (input_elem && input_elem._is_accept_touch && !input_elem._is_accept_touch())            
        {
            return false;
        }

        var ds = this._selectDataset(true);
        var idx = this._p_index;

        if (this._isPopupVisible())
        {
            this._closePopup();
            this._setEditValue(this._getItemText(this._p_index));
        }
        else
        {

            if (this._isFilterType())
            {
                this._clearFilteredDataset();
            }

            this._showPopup(ds, idx, 1);
        }
    };

    _pSelectField._on_value_change = function (preindex, pretext, prevalue, postindex, posttext, postvalue)
    {
        if (!this.on_fire_canitemchange(this, preindex, pretext, prevalue, postindex, posttext, postvalue))
        {
            return false;
        }

        var ds = this._selectDataset();
        var before_index = ds ? this._getIndexFromValue(ds, postvalue) : this._p_index;

        var bind_applied = this.applyto_bindSource("value", postvalue);        
        if (bind_applied)
        {
            if (this._bind_event && this._p_value === prevalue)
                return false; // pre value 설정

            var after_index = ds ? this._getIndexFromValue(ds, postvalue) : this._p_index;
            if (before_index == after_index)
            {
                this._p_value = postvalue;
                this._p_text = posttext;
                this._p_index = postindex;
            }
        }
        else
        {
            if (prevalue == postvalue)
            {
                // Dataset Event의 반환인지, 중복체크로 인한 결과값인지 알수 없음. TODO
                if (preindex != postindex)
                {
                    // 기존 요구사항(RP_84541)으로 처리되었지만, Dataset cancolumnchange 반환값에 대한 대응을 하지 못함.
                    this._p_value = postvalue;
                    this._p_text = posttext;
                    this._p_index = postindex;
                }
            }
            else
            {
                // Dataset Event의 반환값.
                return false;
            }
        }

        // if (nexacro._enableaccessibility)
        // {
        //     this._updateAccessibilityLabel();
        // }

        this.on_fire_onitemchanged(this, preindex, pretext, prevalue, postindex, posttext, postvalue);

        return true;
    };

    _pSelectField._on_dataset_onvaluechanged = function (obj, e)
    {
        if (this._isFilterType())
        {
            this._createFilteredDataset();
        }

        this._recheckValue();
        this.redraw();

        if (this._is_created)
        {
            this.on_fire_oninnerdatachanged(obj, e.oldvalue, e.newvalue, e.columnid, e.col, e.row);
        }
    };

    _pSelectField._on_dataset_onrowsetchanged = function (obj, e)
    {
        if (e.reason == nexacro.NormalDataset.REASON_FILTER || e.reason == nexacro.NormalDataset.REASON_SORTGROUP)
        {
            if (this._isFilterType())
            {
                this._createFilteredDataset();
            }

            this._recheckValue();
            this.redraw();

            return;
        }
        else if (e.reason == nexacro.NormalDataset.REASON_ASSIGN)
        {
            this.set_index(-1);
            this._recheckIndex();
            this.redraw();
        }
        else if (e.reason == nexacro.NormalDataset.REASON_COPY ||
            e.reason == nexacro.NormalDataset.REASON_ENABLEEVENT)
        {
            if (this._p_index > -1)
            {
                this._recheckIndex();
            }
            else if (this._p_value !== undefined)
            {
                this._recheckValue();
            }
            else if (this._p_text !== "")
            {
                this._recheckText();
            }

            this.redraw();
            this._setDefaultProps(this._p_index, this._p_value, this._p_text);
        }
        else if (e.reason == nexacro.NormalDataset.REASON_DELETE)
        {
            if (this._p_index < e.row)
                return;

            if (this._p_index == e.row)
                this.set_index(-1);
            else if (this._p_index > e.row)
                this.set_index(this._p_index - 1);

            this._recheckIndex();
            this.redraw();
        }
    };

    _pSelectField._on_edit_onlbuttondown = function (obj, e)
    {
        var is_readonly = this._p_readonly;
        var is_touched = nexacro._isTouchInteraction && nexacro._SupportTouch;
        if (is_readonly || is_touched) return;

        var box = this._box;
        var input_elem = box ? box._input_element : null;
        var input_elem_is_touched = input_elem._is_accept_touch && !input_elem._is_accept_touch()

        if (input_elem && input_elem_is_touched) return false;           

        var ds = this._selectDataset(true);
        var idx = this._p_index;

        if (this._isPopupVisible())
        {
            if(this._isDropdownType())
            {
                this._closePopup();
            }
            this._setEditValue(this._getItemText(this._p_index));
        }
        else if (this._isDropdownType())
        {
            this._showPopup(ds, idx, 1);
        }
    };

    _pSelectField.on_keydown_default_action = function (keycode, alt_key, ctrl_key, shift_key, refer_comp, meta_key)
    {
        var selectfieldlist = this._selectfieldlist;

        if (this._p_readonly || !this._isEnable())
        {
            return false;
        }

        var ds = this._selectDataset();
        var datacol = this._p_datacolumn;
        var codecol = this._p_codecolumn;

        if (!ds || (!datacol && !codecol))
        {
            return;
        }

        var pre_value = this._default_value;
        var pre_text = this._default_text;
        var pre_index = this._default_index;

        
        var cur_text = this._p_text;
        var cur_index = this._p_index;
        var cur_value = this._p_value = this._getItemValue(cur_index);

        var nextidx;
        var rawidx;
        var curobj = null;
        var text = "";
        var rowcnt = ds.getRowCount();

        if (this._isPopupVisible())
        {
            curobj = selectfieldlist._get_rowobj_status("mouseover", "status") || selectfieldlist._get_rowobj_status("selected", "userstatus");
            if (curobj)
            {
                cur_index = curobj.index;
            }
        }

        if (keycode == nexacro.Event.KEY_ESC)
        {
            if (this._isPopupVisible())
            {
                text = this._getItemText(this._p_index);

                this._closePopup();
                this._setEditValue(text);
            }
        }
        else if ((keycode == nexacro.Event.KEY_UP || (keycode == nexacro.Event.KEY_LEFT && this._isDropdownType())) && this._isComponentKeydownAction())
		{
			nextidx = cur_index - 1;
			if (this._isPopupVisible())
            {
                if (!alt_key)
                {
                    if (nextidx < 0)
                    {
                        nextidx = 0;
                    }

                    text = ds.getColumn(nextidx, datacol || codecol);

                    this._setEditValue(text);
                    selectfieldlist._refreshScroll(nextidx, 1);

                    if (this._p_selectbyarrowkey)
                    {
                        if (selectfieldlist._changeIndex(nextidx))
                        {
                            selectfieldlist.on_apply_index(nextidx);

                            if (this._p_index != nextidx)
                            {
                                cur_value = this._getItemValue(nextidx);
                                cur_text = this._getItemText(nextidx);
                                cur_index = nextidx;

                                if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
                                {
                                    cur_value = pre_value;
                                    cur_text = pre_text;
                                    cur_index = pre_index;
                                }

                                this._setDefaultProps(cur_index, cur_value, cur_text);
                                this.redraw();
                            }
                        }
                        else
                        {
                            this._setDefaultProps(pre_index, pre_value, pre_text);
                            this.redraw();
                        }
                    }
                    else
                    {
                        selectfieldlist._change_status_item_from_key(cur_index, nextidx);
                    }
                }
            }
			else
			{
				if (nextidx < 0)
				{
					nextidx = 0;
				}

				if (this._isFilterType())
				{
					rawidx = this._getRawIndex(ds, nextidx);
					rawidx = (rawidx == -1) ? nextidx : rawidx;
					this._clearFilteredDataset();

					nextidx = rawidx;
				}

				if (this._p_index != nextidx)
				{
					cur_value = this._getItemValue(nextidx);
					cur_text = this._getItemText(nextidx);
					cur_index = nextidx;

					if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
					{
						cur_value = pre_value;
						cur_text = pre_text;
						cur_index = pre_index;
					}

					this._setDefaultProps(cur_index, cur_value, cur_text);
					this.redraw();
				}
			}
        }
        else if ((keycode == nexacro.Event.KEY_DOWN || (keycode == nexacro.Event.KEY_RIGHT && this._isDropdownType())) && this._isComponentKeydownAction())
        {
            nextidx = cur_index + 1;

            if (this._isPopupVisible())
            {
                if (!alt_key)
                {
                    if (nextidx < rowcnt)
                    {
                        text = ds.getColumn(nextidx, datacol || codecol);
                        text = text == undefined ? "" : text;

                        this._setEditValue(text);
                        selectfieldlist._refreshScroll(nextidx, 0);

                        if (this._p_selectbyarrowkey)
                        {
                            if (selectfieldlist._changeIndex(nextidx))
                            {
                                selectfieldlist.on_apply_index(nextidx);

                                if (this._p_index != nextidx)
                                {
                                    cur_value = this._getItemValue(nextidx);
                                    cur_text = this._getItemText(nextidx);
                                    cur_index = nextidx;

                                    if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
                                    {
                                        cur_value = pre_value;
                                        cur_text = pre_text;
                                        cur_index = pre_index;
                                    }

                                    this._setDefaultProps(cur_index, cur_value, cur_text);
                                    this.redraw();
                                }
                            }
                            else
                            {
                                this._setDefaultProps(pre_index, pre_value, pre_text);
                                this.redraw();
                            }
                        }
                        else
                        {
                            selectfieldlist._change_status_item_from_key(cur_index, nextidx);
                        }
                    }
                }
            }
            else
            {
                var input_elem = this._input_element ? this._input_element : null;
                if (alt_key && (!input_elem || (input_elem && (!input_elem._is_accept_touch || (input_elem._is_accept_touch && input_elem._is_accept_touch())))))
                {
                    this._showPopup(ds, cur_index, 1);
                }
				else if (!alt_key)
				{
					if (nextidx >= rowcnt)
					{
						nextidx = rowcnt - 1;
					}

					if (this._isFilterType())
					{
						rawidx = this._getRawIndex(ds, nextidx);
						rawidx = (rawidx == -1) ? nextidx : rawidx;
						this._clearFilteredDataset();

						nextidx = rawidx;
					}

					if (this._p_index != nextidx)
					{
						cur_value = this._getItemValue(nextidx);
						cur_text = this._getItemText(nextidx);
						cur_index = nextidx;

						if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
						{
							cur_value = pre_value;
							cur_text = pre_text;
							cur_index = pre_index;
						}

						this._setDefaultProps(cur_index, cur_value, cur_text);
						this.redraw();
					}
				}
            }
        }
        else if (keycode == nexacro.Event.KEY_ENTER)
        {
            if (cur_index >= 0)
            {
                if (this._isFilterType())
                {
                    rawidx = this._getRawIndex(ds, cur_index);
                    rawidx = (rawidx == -1) ? cur_index : rawidx;
                    ds.set_filterstr("");
                }
                else
                {
                    rawidx = cur_index;
                }
            }
            else
            {
                rawidx = cur_index;
            }

            if (this._p_index != rawidx)
            {
                cur_value = this._getItemValue(rawidx);
                cur_text = this._getItemText(rawidx);
                cur_index = rawidx;

                if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
                {
                    this._setEditValue(this._p_text);
                    cur_value = pre_value;
                    cur_text = pre_text;
                    cur_index = pre_index;
                }
            }

            this.redraw();

            this._setLabelFloating(true, true);
            this._detectStatus(this._status, true);

            if (this._isPopupVisible())
            {
                this._is_close_popup_by_select = true;
                this._closePopup();
                this._is_close_popup_by_select = false;

				if (this._p_autoskip)
				{
					this._setFocusToNextComponent();
				}
			}
			else
			{
                if (this._isDropdownType() && this._isAccessibilityEnable())
				{
					// dropdown type일때 키액션 추가 (접근성 전용)
					this._showPopup(ds, this._p_index);
				}
            }

            cur_value = this._p_value;
            cur_text = this._p_text;
            cur_index = this._p_index;
            this._setDefaultProps(cur_index, cur_value, cur_text);
        }
        else if (keycode == nexacro.Event.KEY_PAGE_UP)
        {
            if (this._isPopupVisible())
            {
                let curidx = cur_index;
                if (curidx < 0)
                    curidx = 0;

                nextidx = curidx - selectfieldlist._page_rowcount;

                if (nextidx <= 0)
                {
                    nextidx = 0;
                }

                text = ds.getColumn(nextidx, datacol || codecol);
                text = text == undefined ? "" : text;

                this._setEditValue(text);
                selectfieldlist._refreshScroll(null, null, keycode);
                selectfieldlist._change_status_item_from_key(curidx, nextidx);
            }
        }
        else if (keycode == nexacro.Event.KEY_PAGE_DOWN)
        {
            if (this._isPopupVisible())
            {
                let curidx = cur_index;
                if (curidx < 0)
                    curidx = 0;

                nextidx = curidx + selectfieldlist._page_rowcount;

                if (nextidx >= rowcnt)
                {
                    nextidx = rowcnt - 1;
                }

                text = ds.getColumn(nextidx, datacol || codecol);
                text = text == undefined ? "" : text;

                this._setEditValue(text);
                selectfieldlist._refreshScroll(null, null, keycode);
                selectfieldlist._change_status_item_from_key(curidx, nextidx);
            }
        }
        else if (keycode == nexacro.Event.KEY_HOME)
        {
            if (this._isPopupVisible() && this._isDropdownType())
            {
                let curidx = cur_index;
                if (curidx < 0)
                    curidx = 0;

                nextidx = 0;
                text = ds.getColumn(nextidx, datacol || codecol);
                text = text == undefined ? "" : text;

                this._setEditValue(text);
                selectfieldlist._refreshScroll(null, null, keycode);
                selectfieldlist._change_status_item_from_key(curidx, nextidx);
            }
        }
        else if (keycode == nexacro.Event.KEY_END)
        {
            if (this._isPopupVisible() && this._isDropdownType())
            {
                let curidx = cur_index;
                if (curidx < 0)
                    curidx = 0;

                nextidx = rowcnt - 1;
                text = ds.getColumn(nextidx, datacol || codecol);
                text = text == undefined ? "" : text;

                this._setEditValue(text);
                selectfieldlist._refreshScroll(null, null, keycode);
                selectfieldlist._change_status_item_from_key(curidx, nextidx);
            }
        }
    };

    
    _pSelectField._on_edit_onkeydown = function (obj, e)
    {
        // this.on_keydown_default_action(e.keycode, e.altkey, e.ctrlkey, e.shiftkey, e.fromobject, e.metakey);
    };

    _pSelectField._on_edit_oninput = function (obj, e)
    {
        if (this._p_readonly || !this._isEnable())
        {
            return false;
		}

        this._isFiredOnInput = true;
        this.on_fire_oninput();

        var input_elem = this._input_element ? this._input_element : null;
        if (input_elem && (input_elem._is_accept_touch && !input_elem._is_accept_touch()))
        {
            if (this._isPopupVisible())
            {
                this._closePopup();

            }
            this._isFiredOnInput = false;
            return false;
        }        

		var ds = this._selectDataset();
        var box = this._box;
		if (ds && box._processing_keyfilter)
        {
            var col = this._p_datacolumn || this._p_codecolumn;
            var edit_val = input_elem.getElementText()

            var type = this._p_type;
            if (!this._isDropdownType())
            {
                if (!this._selectfieldlist)
                {
                    this._createPopupListBoxControl(ds);
                }
            }
            var parse_val;
            switch (type)
            {
                case "search":
                case "caseisearch":
                    var index;
                    if (this._p_type == "caseisearch")
                    {
                        parse_val = this._getParseValue(edit_val);
                        parse_val = nexacro._escapeWhitespace(parse_val);
                        this._searched_index = index = ds.findRowExpr(col + ".match(/^" + parse_val + "/i)");
                    }
                    else
                        this._searched_index = index = ds.findRowAs(col, edit_val);

                    if (index >= 0)
                    {
                        this._showPopup(ds, index);
                    }
                    else
                    {
                        if (this._isPopupVisible())
                        {
                            this._closePopup();
                        }
                    }
                    break;
                case "filter":
                case "filterlike":
                case "caseifilter":
                case "caseifilterlike":
                    var trans_val = "";                    
                    parse_val = this._getParseValue(edit_val);
                    trans_val = nexacro._escapeWhitespace(parse_val);

                    if (this._p_type == "filter")
                        ds.set_filterstr(col + ".match(/^(" + trans_val + ")/)");
                    else if (this._p_type == "filterlike")
                        ds.set_filterstr(col + ".indexOf('" + parse_val + "') > -1");
                    else if (this._p_type == "caseifilter")
                        ds.set_filterstr(col + ".match(/^(" + trans_val + ")/i)");
                    else    //caseifilterlike
                        ds.set_filterstr(col + ".match(/(" + trans_val + ")/i)");
                    
                    if (edit_val && ds.getRowCount() > 0)
                    {
                        this._showPopup(ds, 0);
                    }
                    else
                    {
                        if (this._isPopupVisible())
                            this._closePopup();
                    }
                    break;
                default:
                    break;
            }
        }

        this._isFiredOnInput = false;
    };

    _pSelectField.on_fire_ondropbuttonclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this._input_element)
            this._input_element.setElementFocus();

        if (this.ondropbuttonclick && this.ondropbuttonclick._has_handlers)
        {
            var evt = new nexacro.ClickEventInfo(this, "ondropbuttonclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);
            var ret = this.ondropbuttonclick._fireEvent(this, evt);
            evt.destroy();
            return ret;
        }
        return false;
    };

    _pSelectField._getParseValue = function (edit_val)
    {
        var regExp;
        var parse_val = "";
        var edit_val_len = edit_val.length;
        // 특수문자 입력시 \\을 붙여준다.
        for (var i = 0; i < edit_val_len; i++)
        {
            regExp = new RegExp("[][{}\\/?.;,|)*~`!^_+<>@#$%&\\\\=('\"-]", "gi");
            var c = edit_val.charAt(i);

            if (regExp.test(c))
                parse_val += "\\";
            parse_val += c;
        }
        return parse_val;
    };

    _pSelectField._confirmValue = function ()
    {
        var input_elem = this._getInputElement();
        var pre_value = this._default_value;
        var pre_text = this._default_text;
        var pre_index = this._p_index;

        var ds = this._selectDataset();
        var cur_index = this._p_index;
        var cur_value = this._getItemValue(cur_index);
        
        var pre_p_value = this._p_value;

        if (pre_value != cur_value)
        {
            if (this._maxlen > 0)
            {
                if (cur_value && cur_value.length > this._maxlen)
                {
                    cur_value = cur_value.substr(0, this._maxlen);
                    if (cur_value != input_elem.value)
                        input_elem.setElementValue(cur_value);
                }
            }
        }

        var cur_text = cur_value ? cur_value : "";

        if (pre_value != cur_value)
        {
            if (!this._on_value_change(pre_index, pre_text, pre_value, cur_index, cur_text, cur_value))
            {
                var pos = input_elem.getElementCaretPos();
                var cur_text_len = cur_text ? cur_text.length : 0;
                var pre_text_len = pre_text ? pre_text.length : 0;

                if (pos != -1)
                {
                    if (cur_text_len - pre_text_len >= 0)
                        pos.begin = pos.end = pos.begin - (cur_text_len - pre_text_len);

                    if (pos.begin < 0) pos.begin = pos.end = 0;

                    this._caret_pos = pos;
                }
                else
                {
                    this._caret_pos.begin = this._caret_pos.end = pre_value ? pre_value.length : 0;
                }

                this._p_value = pre_value;
                this._p_text = pre_text;

                cur_value = this._p_value;

                input_elem.setElementValue(pre_value);
                input_elem.setElementSetSelect(this._caret_pos.begin, this._caret_pos.end);
            }

            if (input_elem && input_elem._updateElementValue)
            {
                if (pre_p_value != this._p_value)
                    cur_value = this._p_value;

                var index = this._getIndexFromValue(ds, cur_value); 

                if(index < 0)
                    cur_value = this._default_value;

                input_elem._updateElementValue(cur_value);
                this._setValue(cur_value === null ? undefined : cur_value, true);
            }

            if (nexacro._OS == "iOS" || nexacro._Browser == "Gecko")
            {
                input_elem._clearNumberGabageValue();
            }
        }
        this._caret_pos = input_elem.getElementCaretPos();
    };

    _pSelectField._on_edit_mobile_onlbuttondown = function (obj, e)
	{
        var is_readonly = this._p_readonly;
        var input_elem = this._input_element;
        
        var is_touched = input_elem && input_elem._is_accept_touch && !input_elem._is_accept_touch()
        if (!is_readonly && !is_touched)            
        {
            var ds = this._selectDataset(true);
            var idx = this._p_index;

            if (this._isPopupVisible())
            {
                this._closePopup();
                this._setEditValue(this._getItemText(this._p_index));
            }
            else if (this._isDropdownType())
            {
                this._showPopup(ds, idx, 1);
            }
        }

        this.on_fire_onclick(obj, e.caretpos, e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, obj, obj, e.metakey);
    };
    //===============================================================
    // nexacro.SelectField : Event Handlers
    //===============================================================


    //===============================================================
    // nexacro.SelectField : Util Function
    //===============================================================
    
    _pSelectField._getPopupSizeArr = function ()
    {
        var size = this._p_popupsize;
        if (!size)
            return;
        size = size.split(/\s+/);
        var width = +size[0];
        var height = size[1] ? +size[1] : undefined;
        return { width: width, height: height };
	};

    _pSelectField._getPopupType = function ()
    {
        return this._p_popuptype ? this._p_popuptype : "normal";
    };
    
    _pSelectField._isUsableDataset = function (ds)
    {
        if (!ds)
        {
            return false;
        }
        else
        {
            if (ds.getRowCount() <= 0)
            {
                return false;
            }
            if (!this._p_datacolumn && !this._p_codecolumn)
            {
                return false;
            }
        }

        return true;
    };

    _pSelectField._isContainsText = function()
    {
        var _box = this._box;
        if(!_box) return false;

        var _isContainPrefix = this._box._prefixctrl && this._box._prefixctrl._p_visible;
        var _isContainPostfix = this._box._postfixctrl && this._box._postfixctrl._p_visible;
        var _isContainsText = _isContainPrefix || _isContainPostfix || this._p_displaynulltext;
        var value = this._input_element.getElementText();

        if (_box && _isContainsText)
            return true;

        return (value != "");
    };

    _pSelectField._isFilterType = function()
    {
        var type = this._p_type;
        if ((type == "filter" || type == "filterlike" || type == "caseifilter" || type == "caseifilterlike"))
            return true;

        return false;
    }

    _pSelectField._isInputEditType = function()
    {
        var type = this._p_type;
        if ((type == "filter" || type == "filterlike" || type == "caseifilter" || type == "caseifilterlike" || type == "caseisearch" || type == "search"))
            return true;

        return false;
    }

    _pSelectField.isDropdown = function ()
    {
        return this._isPopupVisible();
    };

    _pSelectField._setEditValue = function (v)
    {
        var input_elem = this._input_element
        if (input_elem)
        {
            var text = input_elem.getElementText();
            if (text != v)
            {                
                input_elem.setElementValue(v);

                if (!this._input_physical_focused)
                {
                    this._setLabelFloating(this._isContainsText(), undefined, true);
                    this._refreshLabel("floating");
                }
            }
        }
    };

    _pSelectField._setIndex = function (v)
    {
        this._p_index = v;
    };

    _pSelectField._setText = function (v)
    {
		this._p_text = v;
    };

    _pSelectField._setDefaultProps = function (index, value, text)
	{
		this._default_value = value;
		this._default_text = text;
		this._default_index = index;
	}

    _pSelectField._isReadOnly = function ()
    {
        return this._p_readonly;
    };

    _pSelectField.on_apply_readonly = function ()
    {
        var readonly = this._isReadOnly();
        this._changeStatus("readonly", readonly);

        if (!this._onlydisplay)
        {
            this.set_readonly(readonly);
        }
        else
        {
            this._changeStatus("readonly", readonly);
        }
        if (this._isDropdownType())
        {
            this._setReadonlyView(true);
            // if (nexacro._enableaccessibility)
            //     this._setAccessibilityFlagReadOnly(readonly);
        }
        else
        {
            if (readonly == true)
                this._setReadonlyView(true);
            else
                this._setReadonlyView(false);
        }

        var dropbutton = this._dropbutton;
        if (dropbutton)
        {
            dropbutton._setEnable(this._isEnable() && !readonly);
        }

        var selectfieldlist = this._selectfieldlist;
        if (selectfieldlist)
        {
            selectfieldlist.set_readonly(readonly);
        }
    };

    _pSelectField.set_popuptype = function (v)
    {
        var popuptype_enum = ["normal", "center", "system", "none"];
        if (popuptype_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_popuptype != v)
        {
            this._p_popuptype = v;
            this.on_apply_popuptype(v);
        }
    };

    _pSelectField.on_apply_popuptype = function (popuptype)
    {
        var popupcontrol = this._popupcontrol;
        if (popupcontrol)
        {
            popupcontrol._setType(popuptype);
        }
    };

    _pSelectField.on_apply_headerheight = function ()
    {
        if (this._p_headerheight < 0)
            this._p_headerheight = 0;

        this._recalc_contents();
    };

    _pSelectField._getColumn = function (ds, index, column)
    {
        return ds.getColumn(index, column);
    };

    _pSelectField._getRowCount = function (ds)
    {
        return ds.getRowCount();
    };

    _pSelectField._getItemValue = function (index)
    {
        var ds = this._innerdataset;
        var column = this._p_codecolumn || this._p_datacolumn;

        if (ds && column)
        {
            var rtn = this._getColumn(ds, index, column);
            if (rtn == undefined && this._isFilterType() && this._filtereddataset)
            {
                rtn = this._filtereddataset.getColumn(index, column);
            }

            return this._convertValueType(rtn,true);
        }

        return null;
    };

    
    _pSelectField._getItemText = function (index)
    {
        var ds = this._innerdataset;
        var column = this._p_datacolumn || this._p_codecolumn;

        if (ds && column)
        {
            var rtn = this._getColumn(ds, index, column);
            if (rtn == undefined && this._isFilterType() && this._filtereddataset)
            {
                rtn = this._filtereddataset.getColumn(index, column);
            }

            return nexacro._toString(rtn);
        }

        return null;
    };

    _pSelectField._getIndexFromValue = function (ds, value)
    {
        if (value instanceof nexacro.Decimal)
        {
            value = value.toString();
        }

        var column = this._p_codecolumn || this._p_datacolumn;                              
        if (!ds._isValidColumn(column)) return -1;

        var row_count = this._getRowCount(ds);
        for (var i = 0; i < row_count; i++)
        {
            var v = this._getItemValue(i);
            if (v instanceof nexacro.Decimal)
            {
                v = v.toString();
            }

            if (value == v)
            {
                var newval = value;
                var preval = v;

                if (newval === 0)
                    newval = newval + "";
                if (preval === 0)
                    preval = preval + "";

                if (newval == preval)
                {
                    return i;
                }
            }
        }

        return -1;
    };

    _pSelectField._getIndexFromText = function (ds, text)
    {
        var row_count = this._getRowCount(ds);
        for (var i = 0; i < row_count; i++)
        {
            if (this._getItemText(i) == text)
            {
                return i;
            }
        }

        return -1;
    };

    _pSelectField._getRawIndex = function (fds, idx)
    {
        var ids = this._innerdataset;

        if (idx == -1 || (fds._viewRecords.length <= idx))
        {
            return -1;
        }

        var rawidx = fds._viewRecords[idx]._rawidx;
        var idsArr = ids._rawRecords;
        var row_count = idsArr.length;

        for (var i = 0; i < row_count; i++)
        {
            if (idsArr[i]._rawidx == rawidx)
            {
                return rawidx;
            }
        }

        return -1;
    };

    _pSelectField._isDropdownType = function ()
    {
        return (this._p_type === "dropdown");
    };

    //===============================================================
    // nexacro.SelectFieldBox (flexible)
    //===============================================================
    nexacro.SelectFieldBox = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) 
    {
        nexacro.TextFieldBox.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pSelectFieldBox = nexacro._createPrototype(nexacro.TextFieldBox, nexacro.SelectFieldBox);
    nexacro.SelectFieldBox.prototype = _pSelectFieldBox;

    _pSelectFieldBox._type_name = "SelectFieldBox";
    _pSelectFieldBox._trailing_button_id = "dropbutton";
    // _pSelectFieldBox._use_beforeinput = true;

    // _pSelectFieldBox._p_type = "text";
    // _pSelectFieldBox._input_leadingspace = undefined;

    // _pSelectFieldBox._is_locale_control = true;
    // _pSelectFieldBox._is_editable_control = true;

    _pSelectFieldBox._processing_keyfilter = false;
    _pSelectFieldBox._undostack = null;

    //===============================================================							
    // nexacro.SelectFieldBox : Override							
    //===============================================================							

    _pSelectFieldBox.on_create_contents = function () 
    {
        nexacro.TextFieldBox.prototype.on_create_contents.call(this);

        this._undostack = new nexacro._EditUndoStack(this);
    };
    
    _pSelectFieldBox.on_created_contents = function (win) 
    {
        nexacro.TextFieldBox.prototype.on_created_contents.call(this, win);

        this._undostack = new nexacro._EditUndoStack(this);
    };

    _pSelectFieldBox.on_keydown_basic_action = function (keycode, alt_key, ctrl_key, shift_key, refer_comp, meta_key)
    {
        if (this._p_readonly || !this._isEnable())
        {
            return;
        }

        var input_elem = this._input_element;
        if (input_elem)
		{
			this._processing_keyfilter = true;

            if (nexacro._OS == "Mac OS" || nexacro._OS == "OSX")
                ctrl_key = meta_key;
            
            if (keycode == nexacro.KeyCode_ImeInput && this._imedisable) // 229
            {
                input_elem.stopSysEvent();
                return;
            }
            else if (!alt_key && !shift_key && ctrl_key && keycode == 90) // 'z'
            {
                if (input_elem.isComposing())
                {
                    input_elem.setCompositionComplete();
                }

                if (this._undostack && !this._p_parent._isDropdownType())
                {
                    this._undostack.undo();
                    input_elem.stopSysEvent();
                    return;
                }
            }
            else if (!alt_key && !shift_key && ctrl_key && keycode == 89) // 'y'
            {
                if (this._undostack)
                {
                    this._undostack.redo();
                    input_elem.stopSysEvent();
                    return;
                }
            }

            if (this._undostack)
            {
                var pos = input_elem.getElementCaretPos();
                if (pos && pos != -1)
                {
                    this._undostack.update(pos.begin, pos.end);
                }
            }
        }
    };

    _pSelectFieldBox.on_keyup_basic_action = function (/*keycode, alt_key, ctrl_key, shift_key, refer_comp*/)
    {
        this._processing_keyfilter = true;
    };
    //===============================================================
    // nexacro.SelectFieldBox : Properties
    //===============================================================
   
    //===============================================================
    // nexacro.SelectFieldBox : Methods
    //===============================================================

    //===============================================================
    // nexacro.SelectFieldBox : Logical Part
    //===============================================================
    

    //===============================================================
    // nexacro.SelectFieldBox : Events
    //===============================================================
    

    _pSelectFieldBox.on_fire_oninput = function ()
    {
        if (this.oninput && this.oninput._has_handlers)
        {
            var evt = new nexacro.InputEventInfo(this, "oninput");
            return this.oninput._fireEvent(this, evt);
        }     

        return true;
    };

    _pSelectFieldBox._apply_setfocus = function (evt_name, self_flag)
    {
		this._processing_updateToDataset = false;

		var input_elem = this._input_element;
        if(!input_elem) return;

        if (evt_name)
        {
            this._default_value = this._p_value;
            this._default_text = this._p_text;
        }

        this._changeUserStatus("nulltext", false);

        if (this._onlydisplay) return;
        
        input_elem.on_apply_imeSet();
        input_elem.on_apply_force_imeSet();
        
        input_elem.setElementFocus(evt_name, self_flag);

        var text = input_elem.getElementText();
        if (text != this._p_text)
        {
            this._default_text = this._p_text = text;
        }

        if (this._p_autoselect) return;
        var pos = input_elem._last_selection_range;
        if (pos)
        {
            this._caret_pos = { begin: pos[0], end: pos[1] };
        }

        if (this._caret_pos == -1)
        {
            if (this._change_value)
            {
                if (!input_elem._use_timer && this._p_password)
                    input_elem._use_timer = true;

                input_elem.setElementSetSelect(this._p_value ? this._p_value.length : 0);
            }
            else
            {
                if (nexacro._isDesktop() || input_elem._is_sys_focused)
                {
                    var is_focus = (evt_name == "focus" || evt_name == "lbuttondown");

                    if (!input_elem._use_timer && is_focus)
                        input_elem._use_timer = true;

                    input_elem.setElementSetSelect(0, 0);
                }
            }
            if (input_elem._use_timer)
                input_elem._use_timer = false;
        }
    };
    
    //===============================================================
    // nexacro.SelectFieldBox : Event Handlers
    //===============================================================

    //===============================================================
    // nexacro.SelectFieldBox : Util Function
    //===============================================================

    //==============================================================================
    // nexacro._SelectFieldListControl
    //==============================================================================
    nexacro._SelectFieldListControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ListBox.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._overedItem = null;
    };

    var _pSelectFieldListControl = nexacro._createPrototype(nexacro.ListBox, nexacro._SelectFieldListControl);
    nexacro._SelectFieldListControl.prototype = _pSelectFieldListControl;
    _pSelectFieldListControl._type_name = "ListBoxControl";
    _pSelectFieldListControl._is_subcontrol = true;

    /* default properties */

    /* internal variable */
    _pSelectFieldListControl._overeditemindex = -1;
    _pSelectFieldListControl._excluded_flex = true; // sticky가 없으면 popup이 보이지 않음
    /* status */

    /* event list */
    _pSelectFieldListControl._event_list = {
        "onitemclick": 1, "onitemdblclick": 1,
        "onkeydown": 1, "onkeyup": 1,
        "onkillfocus": 1, "onsetfocus": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1, "onmousedown": 1, "onmouseup": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1,
        "onmove": 1, "onsize": 1,
        "canitemchange": 1, "onitemchanged": 1,
        "oncloseup": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
        "onvscroll": 1, "onhscroll": 1, "ondevicebuttonup": 1
    };

    //===============================================================
    // nexacro._pSelectFieldListControl : Create & Update
    //===============================================================

    //===============================================================
    // nexacro._pSelectFieldListControl : Override
    //===============================================================

    //===============================================================
    // nexacro._pSelectFieldListControl : Properties
    //===============================================================

    //===============================================================
    // nexacro._pSelectFieldListControl : Methods
    //===============================================================

    //===============================================================
    // nexacro._pSelectFieldListControl : Events
    //===============================================================

    _pSelectFieldListControl.on_notify_item_onlbuttondown = function (obj, e)
    {
        this._do_select(obj.index, false);
    };

    _pSelectFieldListControl.on_notify_item_onlbuttonup = function (obj, e)
    {
        var up_item = this._upitem;
        if (up_item)
        {
            var rowobj;

            if (nexacro._isTouchInteraction && nexacro._SupportTouch)
            {
                var win = this._getWindow();
                var touch_manager = win ? win._gesture_manager : null;
                if (touch_manager && touch_manager._is_ondrag)
                {
                    rowobj = this._get_rowobj_status("selected", "userstatus");
                    if (rowobj)
                        this._do_deselect(rowobj.index);

                    return;
                }
            }

            if ((up_item.index >= 0) && this._contains(up_item))
            {
                obj = up_item;
            }
            else
            {
                rowobj = this._get_rowobj_status("selected", "userstatus");
                if (rowobj)
                {
                    this._do_deselect(rowobj.index);
                }
                return;
            }

            this.on_fire_onitemclick(obj, obj.index, obj.text, obj.value, e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.metakey);
        }
    };

    _pSelectFieldListControl.on_focus_basic_action = function (self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus)
    {
        var selectfield = this._p_parent;
        if (selectfield)
        {
            // if (nexacro._enableaccessibility)
            // {
            //     selectfield._setAccessibilityStatFocus(evt_name);
            // }

            selectfield._apply_setfocus(evt_name);
        }
    };

    //===============================================================
    // nexacro._pSelectFieldListControl : Logical part
    //===============================================================
	_pSelectFieldListControl._redrawListBoxContentsAfter = nexacro._emptyFn;

    _pSelectFieldListControl._createListItem = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        return new nexacro._SelectFieldListItemControl(id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    _pSelectFieldListControl._createListItemControl = function (index)
    {
        var ds = this._innerdataset;

        if (!ds)
            return null;

        var dataCol = this._p_datacolumn ? this._p_datacolumn : this._datacolumn;
        var codeCol = this._p_codecolumn ? this._p_codecolumn : this._codecolumn;
        var txt = ds.getColumn(index, dataCol);
        txt = nexacro._toString(txt);
        var val = ds.getColumn(index, codeCol);
        val = this._convertValueType(val, true);

        var itemheight = this._getItemHeight();
        var client_w = this._getClientWidth();

        var item = this._createListItem("item_" + index, 0, index * itemheight, Math.max(this._contents_maxwidth, client_w), itemheight, null, null, null, null, null, null, this);
        item.set_value(val);
        item.set_text(txt);
        item.set_index(index);
        item.set_selected(false);
        item.set_readonly(this._p_readonly);

        // if (nexacro._enableaccessibility)
        // {
        //     this._setItemAccessibility(item);
        // }

        item._setEventHandler("onlbuttondown", this.on_notify_item_onlbuttondown, this);
        item._setEventHandler("onlbuttonup", this.on_notify_item_onlbuttonup, this);
        // item._setEventHandler("ontouchstart", this.on_notify_item_ontouchstart, this);
        // item._setEventHandler("ontouchend", this.on_notify_item_ontouchend, this);
        // item._setEventHandler("onmouseenter", this.on_notify_item_onmouseenter, this);
        // item._setEventHandler("onmouseleave", this.on_notify_item_onmouseleave, this);
        // item._setEventHandler("onmousemove", this.on_notify_item_onmousemove, this);

		item.createComponent(this._is_created ? false : true);

        if (this._p_index == index)
        {
            item.set_selected(true);
        }

        return item;
    };

    _pSelectFieldListControl._change_status_item_from_key = function (curidx, nextidx)
    {
        var currowobj = this._getItem(curidx);
        var rowobj = this._getItem(nextidx);

        if (currowobj)
        {
            currowobj._changeStatus("mouseover", false);
        }
        if (rowobj)
        {
            rowobj._changeStatus("mouseover", true);
            this._overeditemindex = rowobj.index;
        }
    };

    //===============================================================
    // nexacro._pSelectFieldListControl : Util Function
    //===============================================================
    _pSelectFieldListControl._changeIndex = function (v)
    {
        if (this._p_index != v)
        {
            var dataset = this._innerdataset;
            var postindex = parseInt(v, 10) | 0;

            if (dataset && (this._p_codecolumn || this._p_datacolumn))
            {
                var datavalue = dataset.getColumn(postindex, this._p_datacolumn || this._p_codecolumn);
                var codevalue = dataset.getColumn(postindex, this._p_codecolumn || this._p_datacolumn);

                var posttext = datavalue == undefined ? "" : nexacro._toString(datavalue);
                var postvalue = codevalue;

                this._accessibility_index = this._p_index = postindex;
                this._p_text = posttext;
                this._p_value = postvalue;

                this._selectinfo.obj = null;
                this._selectinfo.index = postindex;
                this._selectinfo.text = posttext;
                this._selectinfo.value = postvalue;

                return true;
            }
        }

        return false;
    };

    _pSelectFieldListControl._get_rowobj_status = function (status, flag)
    {
        var buffer_pages = this._buffer_pages;
        if (buffer_pages)
        {
            var rowobjs, rowobj;
            for (var i = 0, n = buffer_pages.length ; i < n ; i++)
            {
                rowobjs = buffer_pages[i];
                if (rowobjs)
                {
                    for (var j = 0, jlen = rowobjs.length ; j < jlen ; j++)
                    {
                        rowobj = rowobjs[j];
                        if (rowobj &&
                            ((flag == "status" && rowobj._status == status) || (flag == "userstatus" && rowobj._userstatus == status)))
                        {
                            return rowobj;
                        }
                    }
                }
            }
        }

        return null;
    };

    _pSelectFieldListControl._get_all_rowobj_status = function (status, flag)
    {
        var ret = [];
        var buffer_pages = this._buffer_pages;
        if (buffer_pages)
        {
            var rowobjs, rowobj;
            for (var i = 0, n = buffer_pages.length ; i < n ; i++)
            {
                rowobjs = buffer_pages[i];
                if (rowobjs)
                {
                    for (var j = 0, jlen = rowobjs.length ; j < jlen ; j++)
                    {
                        rowobj = rowobjs[j];
                        if (rowobj &&
                            ((flag == "status" && rowobj._status == status) || (flag == "userstatus" && rowobj._userstatus == status)))
                        {
                            ret.push(rowobj);
                        }
                    }
                }
            }
        }

        return ret;
    };

    _pSelectFieldListControl.on_fire_oncloseup = function (obj)
    {
        var rowobj = this._get_rowobj_status("mouseover", "status");
        if (rowobj)
        {
            rowobj._changeStatus("mouseover", false);
        }

        if (this.oncloseup && this.oncloseup._has_handlers)
        {
            return this.oncloseup._fireEvent(this);
        }

        return false;
    };

    _pSelectFieldListControl = null;

    //==============================================================================
    // nexacro._SelectFieldListItemControl
    //==============================================================================
    nexacro._SelectFieldListItemControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro._ListBoxItemControl.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pSelectFieldListItemControl = nexacro._createPrototype(nexacro._ListBoxItemControl, nexacro._SelectFieldListItemControl);
    nexacro._SelectFieldListItemControl.prototype = _pSelectFieldListItemControl;

    _pSelectFieldListItemControl.on_fire_sys_onlbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key)
    {
        var list = this._p_parent;
        if (list)
        {
            var window = this._getWindow();
            var comp = window.findComponent(from_elem);

            list._upitem = comp;
        }
        return nexacro.Component.prototype.on_fire_sys_onlbuttonup.call(this, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key);
    };

    _pSelectFieldListItemControl = null;
    
    //===============================================================
    // nexacro.SelectFieldPopupControl : Popup
    //===============================================================
    nexacro._SelectFieldPopupControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.PopupControl.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pSelectFieldPopupControl = nexacro._createPrototype(nexacro.PopupControl, nexacro._SelectFieldPopupControl);
    nexacro._SelectFieldPopupControl.prototype = _pSelectFieldPopupControl;
    _pSelectFieldPopupControl._type_name = "popupSelectField";

    /* accessibility */    

    /* internal variable */

    //===============================================================
    // nexacro._ComboPopupControl : Override
    //===============================================================

    //===============================================================
    // nexacro._ComboPopupControl : Properties
    //===============================================================

    //===============================================================
    // nexacro._ComboPopupControl : Logical part
    //===============================================================
    _pSelectFieldPopupControl._popupAuto = function ()
    {
        var pos = {};
        
        if (this._type == "center")
        {
            pos = this._getPopupPositionCenter();
			
			var root_frame = this._getRootFrame();
			if (root_frame)
			{
                if (this._attached_comp)
                {
                    this._attached_comp.move(0, 0, pos.width, pos.height);
                }
				this._popupBy(root_frame, pos.left, pos.top, pos.width, pos.height, true);
			}	
        }
        else
        {            
            pos = this._getPopupPosition();

            this._popupBy(this._p_parent, pos.left, pos.top, pos.width, pos.height);
        }
    };

    //===============================================================
    // nexacro._pSelectFieldPopupControl : Util Function
    //===============================================================
    _pSelectFieldPopupControl._setType = function (type)
    {
        this._type = type;
    };
    
    _pSelectFieldPopupControl._getPopupPosition = function ()
	{
        var popup_left = 0;
        var popup_top = 0;
        var popup_width = 0;
        var popup_height = 0;
        var xgap = 0;
        var ygap = 0;

        var selectfield = this._p_parent;
        var selectfieldlist = this._attached_comp;
		var rootframe = this._getRootFrame();
		if (selectfield && selectfieldlist && rootframe)
		{
			var win = this._getWindow();

			var minimum_row = 3;
            
			var selectfieldpos = this._getPopupParentPos();
			var selectfield_elem_pos = { "x": selectfieldpos.x, "y": selectfieldpos.y };
			var selectfield_size = [selectfieldpos.width, selectfieldpos.height];
			xgap = selectfieldpos.xgap;
			ygap = selectfieldpos.ygap;

            var selectfield_vscrollsize = selectfield._getVScrollBarSize();
            var selectfield_displayrowcount = selectfield._p_displayrowcount;
            var selectfield_roucount = selectfield._selectDataset() ? selectfield._selectDataset().getRowCount() : 0;
            var selectfield_popupsize = selectfield._getPopupSizeArr();

            var selectfieldlist_size = selectfieldlist._on_getFitSize();
            var selectfieldlist_itemheight = selectfieldlist._getItemHeight();

            var selectfieldlist_bordersize = selectfieldlist._getCurrentStyleBorder();
            selectfieldlist_bordersize = selectfieldlist_bordersize ? selectfieldlist_bordersize._getBorderHeight() : 0;

            var selectfieldlist_paddingsize = selectfieldlist._getCurrentStylePadding();
            selectfieldlist_paddingsize = selectfieldlist_paddingsize ? selectfieldlist_paddingsize.top + selectfieldlist_paddingsize.bottom : 0;

			var selectfieldlist_stylesize = selectfieldlist_bordersize + selectfieldlist_paddingsize;
			var selectfieldlist_minimum_height;
			var selectfieldlist_height;

			var rootframe_elem_pos = nexacro._getElementPositionInFrame(rootframe.getElement());
         			
			var win_left = this._isAllowDefaultPinchZoom() ? nexacro._getWindowOffsetPosition(win).left : rootframe_elem_pos.x;

            var view_height = nexacro._getWindowHandleClientHeight(win.handle);

            var upper_space_height = selectfield_elem_pos.y;
			var below_space_height = view_height - (selectfield_elem_pos.y + selectfield_size[1]);                                                  

			


            popup_top = selectfield_size[1]

			if (selectfield_popupsize)
			{
				popup_width = selectfield_popupsize.width;
				popup_height = selectfield_popupsize.height ? selectfield_popupsize.height : popup_height;
			}
			else
			{
				popup_width = Math.max(selectfield_size[0], selectfieldlist_size[0]);
			}

			if (selectfield_displayrowcount == null)
			{
				selectfieldlist_minimum_height = (selectfield_roucount < minimum_row ? selectfield_roucount : minimum_row) * selectfieldlist_itemheight + selectfieldlist_stylesize;
				selectfieldlist_height = (selectfield_roucount * selectfieldlist_itemheight) + selectfieldlist_stylesize;

				if (below_space_height > selectfieldlist_minimum_height) // enough below space
				{
					if (below_space_height > selectfieldlist_height)
					{
						popup_height = selectfieldlist_height;
					}
					else
					{
						popup_height = below_space_height;

						if (!selectfield_popupsize)
						{
							if (popup_width == selectfieldlist_size[0])
							{
								popup_width += selectfield_vscrollsize;
							}	
						}
					}
				}
				else // not enough below space
				{
					if (upper_space_height > selectfieldlist_minimum_height)// enough upper space
					{
						if (upper_space_height > selectfieldlist_height)
						{
							popup_top = -selectfieldlist_height;
							popup_height = selectfieldlist_height;
						}
						else
						{
							popup_top = -upper_space_height;
							popup_height = upper_space_height;
						}
					}
					else
					{
						if (below_space_height > upper_space_height)
						{
							popup_height = below_space_height;
						}
						else
						{
							popup_top = -upper_space_height;
							popup_height = upper_space_height;
						}
					}
				}
			}
			else
			{
				if (selectfield_roucount > selectfield_displayrowcount)
				{
					selectfield_roucount = selectfield_displayrowcount;

					if (!selectfield_popupsize && popup_width <= selectfieldlist_size[0] + selectfield_vscrollsize)
					{
						popup_width = selectfieldlist_size[0] + selectfield_vscrollsize;
					}
				}

				selectfieldlist_minimum_height = selectfield_roucount * selectfieldlist_itemheight + selectfieldlist_stylesize;

				if (below_space_height > selectfieldlist_minimum_height) // enough below space
                {
					popup_height = selectfieldlist_minimum_height;
				}
				else // not enough below space
				{
					if (upper_space_height > selectfieldlist_minimum_height)// enough upper space
					{
						popup_top = -selectfieldlist_minimum_height;
						popup_height = selectfieldlist_minimum_height;
					}
					else // not enough below space and upper space
					{
						if (below_space_height > upper_space_height)
						{
							popup_height = below_space_height;
						}
						else
						{
							popup_top = -upper_space_height;
							popup_height = upper_space_height;
						}
					}
				}
			}


			var client_width = win ? nexacro._getWindowHandleClientWidth(win.handle) : 0;

            if (selectfield_elem_pos.x < win_left)
            {
                if (nexacro._Browser == "MobileSafari")
                    popup_left = 0;
                else
                    popup_left += win_left - selectfield_elem_pos.x;
            }
			else if (selectfield_elem_pos.x + popup_width > win_left + client_width)
			{
				popup_left -= (selectfield_elem_pos.x + popup_width) - (win_left + client_width);

				if (popup_left < (win_left - selectfield_elem_pos.x))
				{
					popup_left = win_left - selectfield_elem_pos.x;
				}	
			}
		}

		return { left: popup_left + xgap, top: popup_top + ygap, width: popup_width, height: popup_height };
	};

    _pSelectFieldPopupControl._getPopupPositionCenter = function ()
    {
        var popup_left = 0;
        var popup_top = 0;
        var popup_width = 0;
        var popup_height = 0;

        var window_width = 0;
        var window_height = 0;

        var _parent = this._p_parent;
        var _selectfieldlist = this._attached_comp;
        if (_parent && _selectfieldlist)
        {
            var add_addressbar_height = 0;
            var win = this._getWindow();
            if (win)
            {
                if (nexacro._OS == "iOS" && nexacro._Browser == "MobileSafari")
                {
                    window_width = win.handle.innerWidth;
                    window_height = win.handle.innerHeight;
                    // ios browser에서 주소창이 갑작스럽게 생겨날경우 document.body에 scroll값이 생길때가 있다.
                    // 전체 화면 height 값에서 이걸 분간할 방법이 없기 때문에, 최종 top값에 보정시켜준다.
                    var body_scroll = nexacro._getWindowDestinationHandle(win.handle).scrollTop;
                    if (body_scroll > 0)
                        add_addressbar_height += body_scroll * 2;
                }
                else
                {
                    window_width = nexacro._getWindowHandleClientWidth(win.handle);
                    window_height = nexacro._getWindowHandleClientHeight(win.handle);
                }
            }

            var selectfield_vscrollsize = _parent._getVScrollBarSize();
            var selectfield_displayrowcount = _parent._p_displayrowcount;
            var selectfield_roucount = _parent._selectDataset() ? _parent._selectDataset().getRowCount() : 0;
            var selectfield_popupsize = _parent._getPopupSizeArr();

            var selectfieldlist_size = _selectfieldlist._on_getFitSize();
            var selectfieldlist_itemheight = _selectfieldlist._getItemHeight();
            
            var selectfieldlist_bordersize = _selectfieldlist._getCurrentStyleBorder();
            selectfieldlist_bordersize = selectfieldlist_bordersize ? selectfieldlist_bordersize._getBorderHeight() : 0;

            var selectfieldlist_paddingsize = _selectfieldlist._getCurrentStylePadding();
            selectfieldlist_paddingsize = selectfieldlist_paddingsize ? selectfieldlist_paddingsize.top + selectfieldlist_paddingsize.bottom : 0;
            
            var selectfieldlist_stylesize = selectfieldlist_bordersize + selectfieldlist_paddingsize;

            popup_width = selectfield_popupsize ? selectfield_popupsize.width : selectfieldlist_size[0];
            if (selectfield_popupsize && selectfield_popupsize.height)
            {
                popup_height = selectfield_popupsize.height;
            }
            else
                popup_height = (selectfield_roucount * selectfieldlist_itemheight) + selectfieldlist_stylesize;

            if (selectfield_displayrowcount == null)
            {
                if (popup_height > window_height)
                {
                    popup_height = window_height;
                    popup_width += selectfield_vscrollsize;
                }
            }
            else
            {
                if (selectfield_roucount > selectfield_displayrowcount)
                {
                    popup_height = (selectfield_displayrowcount * selectfieldlist_itemheight) + selectfieldlist_stylesize;

                    if (popup_height > window_height)
                    {
                        popup_height = window_height;
                    }

                    popup_width += selectfield_vscrollsize;
                }
                else
                {
                    if (popup_height > window_height)
                    {
                        popup_height = window_height;
                        popup_width += selectfield_vscrollsize;
                    }
                }
            }

            popup_left = ((window_width / 2) - (popup_width / 2));
            popup_top = ((window_height / 2) - (popup_height / 2));
            popup_top = popup_top < 0 ? 0 : popup_top;
            popup_top += add_addressbar_height;
        }

        return { left: popup_left, top: popup_top, width: popup_width, height: popup_height };
    };

    //📌
    _pSelectFieldPopupControl._getPopupParentPos = function ()
	{
		var _parent = this._p_parent;
		var selectfield_size = [_parent._adjust_width, _parent._adjust_height];
		var selectfield_elem_pos = nexacro._getElementPositionInFrame(_parent.getElement());
				
		var xgap = 0, ygab = 0;
		/* rootframe의 top 값이 음수이면 보정 */
		if (nexacro._Browser == "MobileSafari")
		{
			var rootframe = this._getRootFrame();
			if (rootframe)
			{
                var rootframe_pos = nexacro._getElementPositionInFrame(rootframe.getElement());
                xgap = rootframe_pos.x < 0 ? rootframe_pos.x * (-1) : 0;
				ygab = rootframe_pos.y < 0 ? rootframe_pos.y * (-1) : 0;
			}
		}

		return { "x": selectfield_elem_pos.x, "y": selectfield_elem_pos.y, "width": selectfield_size[0], "height": selectfield_size[1], "xgap": xgap, "ygap": ygab };
	}

    _pSelectFieldPopupControl._getFlexElementPosition = function (elem)
    {
        var _parent = this._p_parent;     
        if (!_parent) 
        {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
    
        var node = _parent.handle;
        var _doc = node.ownerDocument || node.document;
        var box = node.getBoundingClientRect();

        var docElem = _doc.documentElement;
        var body = _doc.body;

        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;

        var y = box.top + scrollTop - clientTop;
        var x = box.left + scrollLeft - clientLeft;

        return {
            x: Math.round(x),
            y: Math.round(y),
            width: elem.getOffsetWidth(),
            height: elem.getOffsetHeight()
        };
    };

    _pSelectFieldBox = null;
    _pSelectField = null;
};
