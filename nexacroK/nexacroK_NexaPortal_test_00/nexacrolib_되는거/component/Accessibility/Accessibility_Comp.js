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
// Div
//==============================================================================

if (nexacro.Div)
{
    var _pDiv = nexacro.Div.prototype;
    _pDiv._skip_mobile_tabfocus = true;
    //==============================================================================
    // Div : Override
    //==============================================================================
    _pDiv.removeChild = function (id)
    {
        var obj = null;
        if (!this._is_alive && id === "form")
        {
            obj = this._p_form;
            if (obj)
            {
                var is_focused = false;
                var _window = this._getWindow();
                if (_window)
                {
                    is_focused = (_window._indexOfCurrentFocusPaths(obj) > -1);
                }

                if (obj._control_element)
                {
                    if (obj._control_element)
                    {
                        obj._control_element._removeFromContainer();
                    }

                    if (is_focused)
                    {
                        if (obj instanceof nexacro.Form)
                        {
                            // deactivate 처리
                            obj._on_deactivate();
                        }

                        // Focus된 컴포넌트가 사라지는 Case처리 
                        _window._removeFromCurrentFocusPath(obj, true);
                    }
                }
            }

            delete this[id];
        }
        else
        {
            var first_comp;
            var form = this._p_form;
            const env = this._getEnvironment();
            const is_mobile_a11y = (env && env._p_enableaccessibility && env._a11ytype > 3);
            if (is_mobile_a11y)
            {
                if (this._isAccessibilityCotainerComponent())
                {
                    first_comp = form.getFirstAccessibilityComponent();
                }
            }

            obj = form.removeChild(id);

            if (is_mobile_a11y)
            {
                if (first_comp && first_comp == obj)
                {
                    obj._setAccessibilityDescriptionBy("");
                    first_comp = form.getFirstAccessibilityComponent();
                    first_comp._setAccessibilityDescriptionBy(this._unique_id);
                }
            }
        }

        return obj;
    };

    _pDiv._on_focus = function (self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus)
    {
        var ret = nexacro.Component.prototype._on_focus.call(this, self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus);

        if (!this._isAccessibilityEnable() && (evt_name == "downkey" || evt_name == "upkey"))
        {
            var form = this._p_form;
            if (form && self_flag == false)
            {
                var desclevel = this._getAccessibilityDescLevel();
                if (desclevel != "self")
                {
                    ret = form._on_focus(self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus);
                }
            }
        }
        return ret;
    };

    //==============================================================================
    // Div : Accessibility Function
    //==============================================================================
    _pDiv._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;

        if (!enablea11y)
            return;

        const control_elem = this.getElement();
        if (control_elem) 
        {
            const inner_form = this._p_form;
            const cell_elem = this._cell_elem;

            const accessibilityenable = this._isAccessibilityEnable();
            const display_text = this._displaytext;

            // enable과 상관없이 항상 false 어야 하기 때문에 tabindex 제거
            control_elem._refreshControlTabIndex(null, null); //remove tabindex

            if (accessibilityenable) 
            {
                if (inner_form) 
                {
                    if (inner_form.components && inner_form.components.length > 0) 
                    {
                        //  form 에 component 있는 경우
                        if (cell_elem) 
                        {
                            // display text skip
                            cell_elem.setElementAccessibilityStatHidden(true);
                        }

                        if (this._isAccessibilityCotainerComponent()) 
                        {
                            var first_comp = inner_form.getFirstAccessibilityComponent();
                            if (first_comp) 
                            {
                                first_comp._setAccessibilityDescriptionBy(this._unique_id);
                            }
                        }
                    }
                    else 
                    {
                        //  form 에 component 없는 경우
                        if (cell_elem && display_text) 
                        {
                            // display text는 출력
                            cell_elem.setElementAccessibilityStatHidden(false);
                        }

                        inner_form._setAccessibilityStatHidden(true);
                    }
                }

                control_elem._refreshControlTabIndex(); //set tabindex
            }
            else 
            {
                // accessibility false
                if (inner_form) 
                {
                    if (inner_form.components && inner_form.components.length > 0)
                    {
                        //  form 에 component 있는 경우 진입
                        inner_form._setAccessibilityStatHidden(false);
                        control_elem.setElementAccessibilityStatHidden(false);
                    }
                    else
                    {
                        if (cell_elem && display_text)
                        {
                            cell_elem.setElementAccessibilityStatHidden(false);
                            control_elem.setElementAccessibilityStatHidden(false);
                        }
                        else
                        {
                            //  form 에 component 없는 경우만 skip
                            inner_form._setAccessibilityStatHidden(true);
                            control_elem.setElementAccessibilityStatHidden(true);
                        }
                    }
                }
                else
                {
                    // div에 text가 있으면 초점 이동
                    if (cell_elem && display_text)
                    {
                        cell_elem.setElementAccessibilityStatHidden(false);
                        control_elem.setElementAccessibilityStatHidden(false);
                    }
                    else
                    {
                        control_elem.setElementAccessibilityStatHidden(true);
                    }
                }
            }
        }
    };
    _pDiv._on_created_accessibility_contents = _pDiv._on_attach_accessibility_contents_handle;

    _pDiv._getHeadingOrderNext = function (current, direction, filter_type)
    {
        if (this._p_form)
        {
            return this._p_form._getHeadingOrderNext(current, direction, filter_type);
        }

        return null;
    };

    _pDiv._getHeadingOrderFirst = function (filter_type)
    {
        if (this._p_form)
        {
            return this._p_form._getHeadingOrderNext(null, 1, filter_type);
        }

        return null;
    };

    _pDiv._getHeadingOrderLast = function (filter_type)
    {
        if (this._p_form)
        {
            return this._p_form._getHeadingOrderNext(null, -1, filter_type);
        }

        return null;
    };

    _pDiv._searchNextHeadingFocus = function (current, filter_type)
    {
        var comp = null;
        if (this._p_form)
        {
            comp = this._p_form._searchNextHeadingFocus(current, filter_type);
        }

        return comp;
    };

    _pDiv._searchPrevHeadingFocus = function (current, filter_type)
    {
        var comp = null;
        if (this._p_form)
        {
            comp = this._p_form._searchPrevHeadingFocus(current, filter_type);
        }

        return comp;
    };

    _pDiv._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        if (comp_focus)
        {
            if (this._p_form)
            {
                this._p_form._last_focused = null;
            }
            //nexacro.Component.prototype._accessibility_focusin.call(this, refer_comp, related_comp);
            this._block_inner_focus = true;
            this._on_focus(true, "focus");
            this._block_inner_focus = false;
        }

        if (reset_scroll)
        {
            this._resetScrollPos(this, this._adjust_left,
                this._adjust_top,
                this._adjust_left + this._adjust_width,
                this._adjust_top + this._adjust_height,
                this._focus_direction);
        }
    };

    _pDiv._getAccessibilityRole = function ()
    {
        // semantictag 사용하면 role을 설정하지 않게하여 tag에 맞는 HTML 기준 role 출력
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility && this._p_semantictag)
        {
            return "null";
        }

        return nexacro.Component.prototype._getAccessibilityRole.call(this);
    };
    
    _pDiv._setAccessibilityLabel = function (label)
    {
        if (this._isAccessibilityRoleHeading())
        {
            if (!label || label.indexOf('\u200b') < 0)
            {
                label += '\u200b';
            }
        }
        nexacro.Component.prototype._setAccessibilityLabel.call(this, label);
    };

    _pDiv._setAccessibilityRole = function (role)
    {
        nexacro.Component.prototype._setAccessibilityRole.call(this, role);

        // role heading 변경시 label 재적용
        if (this._isAccessibilityRoleHeading())
        {
            this._setAccessibilityLabel(this._p_accessibilitylabel);
        }
    };

    _pDiv = null;
}

//==============================================================================
// Tab
//==============================================================================
if (nexacro.Tab)
{
    var _pTab = nexacro.Tab.prototype;
    _pTab._skip_mobile_tabfocus = true;
    //==============================================================================
    // Tab : Override
    //==============================================================================
    _pTab.on_create_contents_command = function ()
    {
        var str = "";

        var tabpages = this._p_tabpages;
        var tabpages_length = tabpages._p_length;
        var tabbuttonitems = this._tabbuttonitems;
        var tabbuttonitems_length = tabbuttonitems.length;

        // 생성순서 tabbutton -> prevbutton -> nextbutton -> tabpage
        for (let i = 0; i < tabbuttonitems_length; i++)
        {
            str += tabbuttonitems[i].createCommand();
        }

        var prevbutton = this._p_prevbutton;
        if (prevbutton)
        {
            str += prevbutton.createCommand();
        }

        var nextbutton = this._p_nextbutton;
        if (nextbutton)
        {
            str += nextbutton.createCommand();
        }

        for (var i = 0; i < tabpages_length; i++)
        {
            str += tabpages[i].createCommand();
        }

        return str;
    };

    _pTab.on_killfocus_basic_action = function (new_focus, new_ref_focus)
    {
        nexacro.Component.prototype.on_killfocus_basic_action.call(this);

        if (new_focus === this)
            return;

        if (new_focus == null && new_ref_focus == null)
            return;

        this._focusobj = null;
        this._last_focused = null;
    };

    _pTab._getFirstTabbuttonIndex = function ()
    {
        var tabbuttonitems = this._tabbuttonitems;
        var tabbuttonitems_len = tabbuttonitems.length;
        var tabbuttonitem;
        var v = -1;

        const env = this._getEnvironment();
        for (var i = 0; i < tabbuttonitems_len; i++)
        {
            tabbuttonitem = tabbuttonitems[i];
            if (env._p_enableaccessibility)
            {
                if (tabbuttonitem._p_visible && tabbuttonitem._p_left > -1)
                {
                    v = i;
                    break;
                }
            }
            else
            {
                if (tabbuttonitem._p_visible)
                {
                    v = i;
                    break;
                }
            }
        }

        return v;
    };

    _pTab._adjustTabButtonPosition = function (beginTabindex, tabbuttonitem, tab_size, tab_max_size, bovered)
    {
        var tabindex = this._p_tabindex;
        var tabposition = this._p_tabposition;
        var bmultiline = this._p_multiline;
        var tabbuttonitem_pos = tabbuttonitem._position;

        var pos, next_pos;
        if (tabposition == "top" || tabposition == "bottom")
        {
            pos = tabbuttonitem_pos.left;
            next_pos = pos + tabbuttonitem_pos.width;
        }
        else
        {
            pos = tabbuttonitem_pos.top;
            next_pos = pos + tabbuttonitem_pos.height;
        }

        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility && bovered && !bmultiline)
        {
            tabbuttonitem.set_visible(this._p_usetabbutton);
            if (tabindex != tabbuttonitem._tabindex)
            {
                this._changeUserStatusAll(tabbuttonitem, false);
            }

            if (next_pos > tab_max_size)
            {
                // 탭 너비 뒤로 넘어가는 버튼
                if (tabposition == "top" || tabposition == "bottom")
                {
                    tabbuttonitem_pos.left = tab_size;
                }
                else
                {
                    tabbuttonitem_pos.top = tab_size;
                }

                this._show_button_cnt = (this._show_button_cnt == 0) ? tabbuttonitem._tabindex - beginTabindex : this._show_button_cnt;
                next_pos = tab_size;
            }
            else if (tabbuttonitem._tabindex < beginTabindex)
            {
                // 탭 너비 앞으로 넘어가는 버튼
                if (tabposition == "top" || tabposition == "bottom")
                {
                    tabbuttonitem_pos.left -= tabbuttonitem_pos.width;
                }
                else
                {
                    tabbuttonitem_pos.top -= tabbuttonitem_pos.height;
                }

                next_pos = 0;
            }
        }
        else
        {
            this._show_button_cnt = 0;
            if (!bmultiline && next_pos > tab_max_size)
            {
                tabbuttonitem.set_visible(false);
            }
            else
            {
                tabbuttonitem.set_visible(this._p_usetabbutton);
                if (tabindex != tabbuttonitem._tabindex)
                {
                    this._changeUserStatusAll(tabbuttonitem, false);
                }
            }

            if (tabbuttonitem._p_visible)
            {
                if (!bmultiline && tabbuttonitem._tabindex < beginTabindex)
                {
                    tabbuttonitem.set_visible(false);
                    next_pos = pos;
                }
            }
        }

        return next_pos;
    };

    //==============================================================================
    // Tab : Accessibility Function
    //==============================================================================
    _pTab._getHeadingOrderNext = function (current, direction, filter_type)
    {
        return nexacro.FormBase.prototype._getHeadingOrderNext.call(this, current, direction, filter_type);
    };

    _pTab._getHeadingOrderFirst = function (filter_type)
    {
        return nexacro.FormBase.prototype._getHeadingOrderFirst.call(this, filter_type);
    };

    _pTab._getHeadingOrderLast = function (filter_type)
    {
        return nexacro.FormBase.prototype._getHeadingOrderLast.call(this, filter_type);
    };

    _pTab._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        if (win && !win._cur_ldown_elem)
        {
            if (refer_comp instanceof nexacro._TabButtonItemControl)
            {
                var beginTabindex = this._show_button_cnt == 0 ? 0 : refer_comp._tabindex;
                var endTabindex = this._next_button_idx - this._show_button_cnt;
                if (beginTabindex >= endTabindex)
                {
                    beginTabindex = endTabindex;
                }

                this._rearrangeContents(beginTabindex);
                refer_comp._on_focus(true);
            }
            else
            {
                nexacro.Component.prototype._accessibility_focusin.call(this, refer_comp, related_comp, reset_scroll, comp_focus, win);
            }
        }
    };

    _pTab._accessibility_focusout = function (refer_comp, related_comp, comp_init)
    {
        if (comp_init)
        {
            this._is_first_focus = false;
            if (refer_comp instanceof nexacro._TabButtonItemControl) 
            {
                refer_comp._updateAccessibilityLabel();
            }
        }

        nexacro.Component.prototype._accessibility_focusout.call(this, refer_comp, related_comp, comp_init);
    };

    _pTab._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        // accessibilityenable이 false여도 layout을 사용자에게 인지하게 하기 위해 role 유지
        // 필요 컴포넌트는 탭 뿐이라 수정 시점은 해당 위치로 적용하고 추후 재검토
        this._setAccessibilityRole(this._p_accessibilityrole);
    };
    _pTab._on_created_accessibility_contents = _pTab.on_attach_contents_handle;

    _pTab = null;
}

//==============================================================================
// Tabpage
//==============================================================================
if (nexacro.Tabpage)
{
    var _pTabpage = nexacro.Tabpage.prototype;
    //==============================================================================
    // Tabpage : Override
    //==============================================================================
    //==============================================================================
    // Tabpage : Accessibility function
    //==============================================================================    
    _pTabpage.on_attach_contents_handle = function (win, enablea11y)
    {
        // accessibilityenable이 false여도 layout을 사용자에게 인지하게 하기 위해 role 유지
        // 필요 컴포넌트는 탭 뿐이라 수정 시점은 해당 위치로 적용하고 추후 재검토
        this._setAccessibilityRole(this._p_accessibilityrole);
    };
    _pTabpage._on_created_accessibility_contents = _pTabpage.on_attach_contents_handle;

    _pTabpage = null;
}

//==============================================================================
// _TabButtonItemControl
//==============================================================================
if (nexacro._TabButtonItemControl)
{
    var _pTabButtonItemControl = nexacro._TabButtonItemControl.prototype;
    //==============================================================================
    // _TabButtonItemControl : Override
    //==============================================================================
    _pTabButtonItemControl.on_keydown_default_action = function (keycode, alt_key, ctrl_key, shift_key, refer_comp, meta_key) 
    {
        const tab_comp = this._p_parent;
        if (tab_comp) 
        {
            const env = tab_comp._getEnvironment();
            if (env?._p_enableaccessibility && keycode == nexacro.Event.KEY_SPACE) 
            {
                tab_comp._changeTabIndex(this._tabindex, true, false);
            }
        }
    };

    //==============================================================================
    // _TabButtonItemControl : Accessibility Function
    //==============================================================================
    _pTabButtonItemControl._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;
        
		if (enablea11y)
		{
			if (this._tabpage)
			{
                this._setAccessibilityControls(this._tabpage._unique_id);
			}
		}
    };

    _pTabButtonItemControl._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = this._displaytext;
        var tab_comp = this._p_parent;

        if (this._tabindex == 0) 
        {
            if (tab_comp && tab_comp._is_first_focus) 
            {
                add_label = tab_comp._getAccessibilityReadLabel() + add_label;
            }
        }
        return add_label;
    };

    _pTabButtonItemControl = null;
}

//==============================================================================
// Button
//==============================================================================
if (nexacro.Button)
{
    var _pButton = nexacro.Button.prototype;
    _pButton._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";
        const env = this._getEnvironment();

        // 스펙을 맞추기 위해 label에 value를 같이 설정하여 [name] + [value] 출력
        // Desktop은 제외 8.7 기준으로 내부 까지 읽음 (101718, 103605)
        if (env && env._a11ytype > 3)
        {
            add_label = this._p_text ? this._p_text : "";
        }

        return add_label;
    };

    _pButton._setAccessibilityRole = function (role) 
    {
        nexacro.Component.prototype._setAccessibilityRole.call(this, role);

        // heading(h tag)는 자체로 초점이 이동 안되어 Button 일때는 내부 role도 설정하여 초점 이동하도록 추가
        var cell_elem = this._cell_elem;
        if (cell_elem) 
        {
            cell_elem._on_createAccessibilityHandle();
        }
    };
}

//==============================================================================
// Radio
//==============================================================================
if (nexacro.Radio)
{
    var _pRadio = nexacro.Radio.prototype;
    _pRadio._skip_mobile_tabfocus = true;
    //==============================================================================
    // Radio : Override
    //==============================================================================
    
    //==============================================================================
    // Radio : Accessibility Function
    //==============================================================================
    _pRadio._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        if (comp_focus && refer_comp instanceof nexacro._RadioItemControl)
        {
            // 초점 이동할 item focus
            var evt_name = "";
            if (related_comp instanceof nexacro._RadioItemControl)
            {
                if (related_comp._index > refer_comp._index)
                {
                    evt_name = "upkey";
                }
                else
                {
                    evt_name = "downkey";
                }
            }
            else if (related_comp instanceof nexacro.Radio)
            {
                evt_name = "downkey";
            }
            else
            {
                evt_name = "upkey";
            }

            this._accessibility_index = refer_comp._index;
            refer_comp._on_focus(true, evt_name);
        }
        else
        {
            nexacro.Component.prototype._accessibility_focusin.call(this, refer_comp, related_comp, reset_scroll, comp_focus, win);
        }
    };

    // android NRE 용 코드 (추후 제거)
    // ---------------------------------------------------------------------------------------------------------
    _pRadio.on_fire_sys_onaccessibilitygesture = function (direction/*, fire_comp, refer_comp*/)
    {
        // When operating within a RadioItem
        var ret = false;
        var items = this._items;

        if (items && items.length > 0)
        {
            if (this._accessibility_index == undefined && this._p_index > -1)
            {
                this._accessibility_index = this._p_index;
            }

            if (direction > 0)
                this._accessibility_index++;
            else
                this._accessibility_index--;

            if (items[this._accessibility_index])
            {
                ret = true;
                items[this._accessibility_index]._setAccessibilityNotifyEvent();
            }
        }

        return ret;
    };

    _pRadio._setAccessibilityNotifyEvent = function (direction)
    {
        // When entering from sweeping motion on the outside
        var items = this._items;

        if (items && items.length > 0)
        {
            var obj = null;

            // Unconditionally circulate from the beginning / end.
            this._accessibility_index = -1;

            if (this._accessibility_index < 0 || this._accessibility_index >= items.length)
            {
                if (direction == undefined)
                    direction = 1;

                if (direction > 0)
                    this._accessibility_index = 0;
                else
                    this._accessibility_index = items.length - 1;

            }

            obj = items[this._accessibility_index];
            if (obj)
            {
                return obj._setAccessibilityNotifyEvent();
            }
        }
        else
        {
            return nexacro.Component.prototype._setAccessibilityNotifyEvent.call(this, direction);
        }
    };

    _pRadio._setAccessibilityInfoByHover = function (control)
    {
        // When entering from a single tab on the outside
        if (control)
        {
            if (control.parent instanceof nexacro._RadioItemControl)
            {
                control = control.parent;
            }
            // Specifies the selected RadioItem index. 
            this._accessibility_index = control._index;
            return control._setAccessibilityNotifyEvent();
        }
        else
        {
            return nexacro.Component.prototype._setAccessibilityNotifyEvent.call(this);
        }
    };
    // ---------------------------------------------------------------------------------------------------------

    _pRadio._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this.on_apply_prop_accessibilitylabel();
            this.on_apply_prop_itemaccessibilityenable();
        }
    };

    _pRadio._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;

        if (enablea11y)
        {
            this.on_apply_prop_accessibilitylabel();
            this.on_apply_prop_itemaccessibilityenable();
            /*if (this._isAccessibilityCotainerComponent())
            {
                var first_item = this._getItem(0);
                if (first_item)
                    first_item._setAccessibilityDescriptionBy(this._unique_id);
            }*/
        }
    };

    _pRadio._on_getAccessibilityAdditionalLabel = function ()
    {
        const env = this._getEnvironment();
        if (env?._a11ytype < 4)
        {
            if (this._isAccessibilityEnable() && !this._is_first_focus)
            {
                return "";
            }
        }
        else
        {
            return nexacro.Component.prototype._on_getAccessibilityAdditionalLabel.call(this);
        }
    };

    _pRadio.set_itemaccessibilityenable = function (accessibilityenable)
    {
        var accenable = nexacro._toBoolean(accessibilityenable);
        if (this._p_itemaccessibilityenable != accenable)
        {
            this._p_itemaccessibilityenable = accenable;
            this.on_apply_prop_itemaccessibilityenable();
        }
    };

    _pRadio.on_apply_prop_itemaccessibilityenable = function ()
    {
        var items = this._items;
        var item_len = items.length;
        this._block_read_aria_stat = this._p_itemaccessibilityenable == false ? true : false;
        for (var i = 0; i < item_len; i++)
        {
            var item = items[i];
            item._p_accessibilityenable = this._p_itemaccessibilityenable;
            item._setAccessibilityStatHidden(this._block_read_aria_stat);
        }
    };

    _pRadio = null;
}

//==============================================================================
// RadioItemControl
//==============================================================================
if (nexacro._RadioItemControl)
{
    var _pRadioItemControl = nexacro._RadioItemControl.prototype;
    //==============================================================================
    // RadioItemControl : Accessibility Function
    //==============================================================================
    _pRadioItemControl._setAccessibilityStatFocus = function (evt_name)
    {
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
        if (evt_name == "upkey" || evt_name == "downkey")
        {
            this._changeStatus("mouseover", true);
        }
        else if (evt_name == "tabkey" || evt_name == "shifttabkey")
        {
            var radio = this._p_parent;
            if (radio && radio._is_first_focus && radio._accessibility_index == this._index)
            {
                this._changeStatus("mouseover", true);
            }
        }
    };

    _pRadioItemControl._setAccessibilityStatKillFocus = function ()
    {
        nexacro.Component.prototype._setAccessibilityStatKillFocus.call(this);
        this._changeStatus("mouseover", false);
    };

    _pRadioItemControl._getAccessibilityLabel = function (accessibility)
    {
        var label = "";
        var parent = this._p_parent;
        if (parent && parent._is_first_focus)
        {
            var p_accessibility = parent._p_accessibility;
            label = parent._getAccessibilityParentValue(p_accessibility);
        }
        label += " " + nexacro.Component.prototype._getAccessibilityLabel.call(this, accessibility);
        return label;
    };

    _pRadioItemControl._on_getAccessibilityAdditionalLabel = function ()
    {
        const env = this._getEnvironment();
        if (env?._a11ytype == 5)
            return "";

        var add_label = "";

        // 스펙을 맞추기 위해 label에 value를 같이 설정하여 [name] + [value] 출력
        add_label = this._displaytext ? this._displaytext : "";

        return add_label;
    };

    _pRadioItemControl = null;
}

//==============================================================================
// Edit
//==============================================================================
if (nexacro.Edit)
{
    var _pEdit = nexacro.Edit.prototype;
    //==============================================================================
    // Edit : Accessibility Function
    //==============================================================================
    _pEdit._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {     
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;

        if (enablea11y)
        {   
            this._setAccessibilityFlagPassword(this._p_password);
            // input에 직접 label을 설정하므로 필요없음
            //nexacro._createNotifyAccessibilityInputElement();

            //RP : 74932
            const env = this._getEnvironment();
            if (env?._a11ytype == 4)
            {
                //   if ((!(this._p_accessibilitydesclevel == "none") && !(this._p_accessibilitydesclevel == "child")))
                //       this._setAccessibilityActiveDescendant(this._input_element);
            }
        }
    };

    _pEdit._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this._setAccessibilityFlagPassword(this._p_password);
            // input에 직접 label을 설정하므로 필요없음
            //nexacro._createNotifyAccessibilityInputElement();

            //RP : 74932
            if (env?._a11ytype == 4)
            {
                //   if ((!(this._p_accessibilitydesclevel == "none") && !(this._p_accessibilitydesclevel == "child")))
                //       this._setAccessibilityActiveDescendant(this._input_element);
            }
        }
    };

    _pEdit._setAccessibilityFlagReadOnly = function (readonly)
    {
        var input_elem = this._input_element;
        if (input_elem)
        {
            input_elem.setElementAccessibilityFlagReadOnly(readonly);
        }
    };

    _pEdit._setAccessibilityLabel = function (label)
    {
        nexacro.Component.prototype._setAccessibilityLabel.call(this, label);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pEdit._setAccessibilityDescription = function (desc)
    {
        nexacro.Component.prototype._setAccessibilityDescription.call(this, desc);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pEdit._setAccessibilityAction = function (action)
    {
        nexacro.Component.prototype._setAccessibilityAction.call(this, action);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pEdit = null;
    //delete _pEdit;
}

//==============================================================================
// Checkbox
//==============================================================================
if (nexacro.CheckBox)
{
    var _pCheckBox = nexacro.CheckBox.prototype;
    _pCheckBox._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";

        const env = this._getEnvironment();
        if (env?._a11ytype == 4)
        {
            // 스펙을 맞추기 위해 label에 value를 같이 설정하여 [name] + [value] 출력
            add_label = this._p_text ? this._p_text : "";
        }
        return add_label;
    };
}

//==============================================================================
// Combo
//==============================================================================
if (nexacro.Combo)
{
    var _pCombo = nexacro.Combo.prototype;
    _pCombo._is_compound = true;
    //==============================================================================
    // Combo : Override
    //==============================================================================
    _pCombo._apply_setfocus = function (evt_name)
    {
        var comboedit = this._p_comboedit;
        if (comboedit)
        {
            comboedit._changeStatus("focused", true);

            var control_elem = this.getElement();           
            if (control_elem)
            {
                if (this._isDropdownType())
                {
                    control_elem.setElementFocus(true);
                }
                else
                {
                    const env = this._getEnvironment();
                    if (env && env._p_accessibility && env._a11ytype > 3)
                    {
                        let edit_control_elem = comboedit.getElement();
                        if (edit_control_elem && nexacro._isTouchInteraction && nexacro._SupportTouch)
                        {
                            edit_control_elem.setElementFocus(true);
                        }
                        else
                        {
                            comboedit.on_focus_basic_action(true, evt_name);
                        }
                    }
                    else
                    {
                        comboedit._on_focus(true, evt_name);
                    }
                }
            }
        }
    };

    _pCombo.on_lbuttondown_default_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key)
    {
        nexacro.Component.prototype.on_lbuttondown_default_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);
        // lbuttondown 시점에 dropdown 여는 것은 desktop 접근성용
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility && env?._a11ytype < 4)
        {
            if (this._isDropdownType() && this._isEnable() && this._isAccessibilityEnable())
            {
                var control_elem = this.getElement();
                if (control_elem === elem)
                {
                    this._on_dropdown();
                }
            }
        }
    };

    _pCombo._on_click = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, meta_key)
    {
        // desktop은 edit의 click 이벤트로 처리되나, mobile은 접근성 상태에서 comboedit로 들어오는 이벤트 전달
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility && env?._a11ytype > 4)
        {
            if (this._isDropdownType() && this._isEnable() && this._isAccessibilityEnable())
            {
                var comboedit = this.comboedit;
                if (comboedit)
                {
                    comboedit._on_click(elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, meta_key);
                }
            }
        }
    };

    //==============================================================================
    // Combo : Accessibility Function
    //==============================================================================
    _pCombo._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (!env || !env._p_enableaccessibility)
            return;

        const comboedit = this._p_comboedit;
        const dropbutton = this._p_dropbutton;
        const control_elem = this.getElement();

        this._setAccessibilityStatExpanded(false);

        if (this._isDropdownType())
        {
            // dropdown은 edit를 inert 하고 combo에서 제거하도록 해야함
            if (control_elem)
            {
                if (comboedit)
                {
                    var edit_control_elem = comboedit.getElement();
                    if (edit_control_elem)
                    {
                        edit_control_elem.setElementPreventedEvent(true);
                    }
                }

                control_elem._refreshControlTabIndex(null, -1);

                this._setAccessibilityLabel(this._getAccessibilityLabel());
                this._setAccessibilityStatAutoComplete("list");
                this._setAccessibilityFlagHasPopup("listbox");
                this._setAccessibilityStatLive(true);
                this._setAccessibilityRole("combobox");
            }
        }
        else
        {
            if (control_elem)
            {
                control_elem._refreshControlTabIndex(null, null);
            }
        }

        if (dropbutton)
        {
            dropbutton._setAccessibilityEnable(false);
            dropbutton._setAccessibilityStatHidden(true);
        }        
    };

    // 동일한 로직으로 유지보수성을 위해서 합침
    _pCombo._on_attach_accessibility_contents_handle = _pCombo._on_created_accessibility_contents;

    _pCombo._setAccessibilityStatLive = function (v)
    {
        if (this._p_comboedit)
        {
            this._p_comboedit._setAccessibilityStatLive(v);
        }
    };

    _pCombo._getAccessibilityReadLabel = function (bwholeread)
    {
        var _readlabel = nexacro.Component.prototype._getAccessibilityReadLabel.call(this);
        if (bwholeread && this._p_comboedit._input_element && this._status != "focus")
        {
            if (!this._p_comboedit._input_element._wantAccessibilityAdditionalLabel || !this._p_comboedit._input_element._wantAccessibilityAdditionalLabel())
            {
                _readlabel = this._p_text + " " + _readlabel;
            }
        }

        return _readlabel;
    };

    _pCombo._accessibility_showPopup = function (ds, index)
    {
        const env = this._getEnvironment();
        if (env._p_enableaccessibility)
        {
            var combolist = this._p_combolist;
            var comboedit = this._p_comboedit;

            if (comboedit && combolist)
            {
                /* popup에 초점을 읽게하기 위함 */
                if (!ds)
                {
                    ds = this._selectDataset();
                }

                if (ds)
                {
                    var idx = this._getIndexFromText(ds, this._p_text);
                    var item = combolist._getItem(idx);
                    if (item)
                    {
                        var input_elem = comboedit._input_element;
                        if (input_elem)
                        {
                            input_elem.setElementAccessibilityStatExpanded(true);
                            this._setAccessibilityControls(combolist._unique_id, input_elem);
                            this._setAccessibilityActiveDescendant(item, input_elem);
                        }

                        if (this._isDropdownType())
                        {
                            this._setAccessibilityStatExpanded(true);
                            this._setAccessibilityControls(combolist._unique_id);
                            this._setAccessibilityActiveDescendant(item);
                        }
                    }
                }

                if (env._a11ytype > 3)
                {
                    combolist.setFocus(false);
                }
            }
        }
    };

    _pCombo._accessibility_closePopup = function ()
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            var combolist = this._p_combolist;
            if (combolist)
            {
                combolist._overeditemindex = -1;
            }

            var comboedit = this._p_comboedit;
            if (comboedit)
            {
                if (comboedit._input_element)
                {
                    comboedit._input_element.setElementAccessibilityStatExpanded(false);

                    // killfocus 아닐때만 처리
                    if (!this._is_killfocusing) 
                    {
                        comboedit._apply_setfocus();
                    }
                }
            }

            if (this._isDropdownType())
            {
                this._setAccessibilityStatExpanded(false);
            }
        }
    };

    _pCombo = null;
}

//==============================================================================
// ComboListControl
//==============================================================================
if (nexacro._ComboListControl)
{
    var _pComboListControl = nexacro._ComboListControl.prototype;
    //==============================================================================
    // ComboListControl : Accessibility Function
    //==============================================================================
    _pComboListControl._setAccessibilityStatFlag = function (status, userstatus)
    {
        if (status == "enable")
        {
            this._setAccessibilityStatDisabled(false);
        }
        if (status == "disabled")
        {
            this._setAccessibilityStatDisabled(true);
        }
        else if (status == "readonly")
        {
            this._setAccessibilityFlagReadOnly(true);
        }
    };

    _pComboListControl._getAccessibilityRole = function ()
    {
        return nexacro.Component.prototype._getAccessibilityRole.call(this);
    };

    _pComboListControl = null;
}

//==============================================================================
// ComboEditControl
//==============================================================================
if (nexacro._ComboEditControl)
{
    var _pComboEditControl = nexacro._ComboEditControl.prototype;
    //==============================================================================
    // ComboEditControl : Accessibility Function
    //==============================================================================
    _pComboEditControl.on_created_contents = function (win)
    {
        nexacro.Edit.prototype.on_created_contents.call(this, win);

        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            var input_elem = this._input_element;
            if (input_elem && (input_elem instanceof nexacro.InputElement))
            {
                var combo = this._p_parent;
                if (combo)
                {
                    // WAI-ARIA 1.2부터 input에 직접 마크업 하도록 변경
                    var owns_list = combo._unique_id + ".combolist";
                    input_elem.setElementAccessibilityOwns(owns_list);
                    input_elem.setElementAccessibilityStatAutoComplete("list");
                    input_elem.setElementAccessibilityStatExpanded(false);
                    input_elem.setElementAccessibilityFlagHasPopup("listbox");
                    input_elem.setElementAccessibilityFlagReadOnly(nexacro._toBoolean(combo._p_readonly));
                    input_elem.setElementAccessibilityStatLive(true);

                    input_elem.setElementAccessibilityRole(combo._p_accessibilityrole);
                    //-------------------------------------------
                }
            }

            //nexacro._createNotifyAccessibilityInputElement();
        }
    };

    _pComboEditControl.on_attach_contents_handle = function (win, enablea11y)
    {
        nexacro.Edit.prototype.on_attach_contents_handle.call(this, win, enablea11y);

        if (enablea11y)
        {
            var input_elem = this._input_element;
            if (input_elem)
            {
                var combo = this._p_parent;
                if (combo && !combo._p_readonly)
                {
                    // WAI-ARIA 1.2부터 input에 직접 마크업 하도록 변경
                    var owns_list = combo._unique_id + ".combolist";
                    input_elem.setElementAccessibilityOwns(owns_list);
                    input_elem.setElementAccessibilityStatAutoComplete("list");
                    input_elem.setElementAccessibilityStatExpanded(false);
                    input_elem.setElementAccessibilityFlagHasPopup("listbox");
                    input_elem.setElementAccessibilityStatLive(true);

                    input_elem.setElementAccessibilityRole(combo._p_accessibilityrole);
                    //-------------------------------------------
                }
            }
        }
    };

    _pComboEditControl._getAccessibilityRole = function ()
    {
        var role = "";
        var combo = this._p_parent;
        if (combo)
        {
            role = combo._getAccessibilityRole();
            if (combo._isDropdownType())
            {
                role = "null";
            }
        }
        return role;
    };

    _pComboEditControl._setAccessibilityFlagReadOnly = function (v)
    {
        nexacro.Edit.prototype._setAccessibilityFlagReadOnly.call(this, v);
    };

    _pComboEditControl._getAccessibilityLabel = function ()
    {
        var combo = this._p_parent;
        if (combo && !combo._isDropdownType())
        {
            return combo._getAccessibilityLabel();
        }
        return "";
    };

    _pComboEditControl._getAccessibilityDescription = function ()
    {
        var combo = this._p_parent;
        if (combo && !combo._isDropdownType())
        {
            return combo._getAccessibilityDescription();
        }
        return "";
    };

    _pComboEditControl._getAccessibilityAction = function ()
    {
        var combo = this._p_parent;
        if (combo && !combo._isDropdownType())
        {
            return combo._getAccessibilityAction();
        }
        return "";
    };

    _pComboEditControl = null;
}

//==============================================================================
// ComboListItemControl
//==============================================================================
if (nexacro._ComboListItemControl)
{
    var _pComboListItemControl = nexacro._ComboListItemControl.prototype;
    //==============================================================================
    // ComboListItemControl : Accessibility Function
    //==============================================================================

    _pComboListItemControl = null;
    //delete _pComboListItemControl
}

//==============================================================================
// Calendar
//==============================================================================
if (nexacro.Calendar)
{
    var _pCalendar = nexacro.Calendar.prototype;
    //==============================================================================
    // Calendar : Override
    //==============================================================================
    _pCalendar._on_click = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, meta_key)
    {
        // desktop은 edit의 click 이벤트로 처리되나, mobile은 접근성 상태에서 calendaredit로 들어오는 이벤트 전달
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility && env?._a11ytype > 3)
        {
            // system popuptype인 경우에만 처리
            if (this._type == "system" && !this.readonly)
            {
                var calendaredit = this.calendaredit;
                if (calendaredit)
                {
                    calendaredit._on_click(elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, meta_key);
                }
            }
        }
    };

    //==============================================================================
    // Calendar : Accessibility Function
    //==============================================================================
    _pCalendar._on_getAccessibilityAdditionalLabel = function ()
    {
        var str_additional_label = "";
        var env = this._getEnvironment();
        if(!env)
            return str_additional_label;

        if (env?._a11ytype > 3)
        {
            // 모바일 WRE의 value 출력은 additionallabel에서 가져오기
            if (this.calendaredit)
            {
                var calendaredit = this._p_calendaredit;
                str_additional_label = calendaredit._on_getAccessibilityAdditionalLabel();
            }
        }
        return str_additional_label;
    };

    _pCalendar._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {   
        let env;             
        if (enablea11y == undefined)
        {
            env = this._getEnvironment();
            enablea11y = env?._p_enableaccessibility;
        }

        if (enablea11y)
        {
            if (this._type == "monthonly")
            {
                this._setAccessibilityRole("datepicker");
                this._accessibilityvalue = this._masktypeobj.applyMask(this.datepicker.body.on_get_accessibility_label());
            }
            else
            {
                var control_elem = this.getElement();
                var calendaredit = this.calendaredit;

                if (control_elem)
                {
                    control_elem._refreshControlTabIndex(null, null);

                    if (this._type == "system" && env?._a11ytype > 3)
                    {
                        if (calendaredit)
                        {
                            var edit_control_elem = calendaredit.getElement();
                            if (edit_control_elem)
                            {
                                if (env?._a11ytype == 5)
                                {
                                    edit_control_elem.setElementPreventedEvent(true);
                                }
                                else
                                {
                                    edit_control_elem._refreshControlTabIndex(null, null);
                                }
                            }
                        }

                        control_elem._refreshControlTabIndex(null, -1);
                        this._updateAccessibilityLabel();
                    }
                }

                var spinupbutton = this.calendarspinupbutton;
                if (spinupbutton)
                {
                    spinupbutton._setAccessibilityEnable(false);
                    spinupbutton._setAccessibilityStatHidden(true);
                }

                var spindownbutton = this.calendarspindownbutton;
                if (spindownbutton)
                {
                    spindownbutton._setAccessibilityEnable(false);
                    spindownbutton._setAccessibilityStatHidden(true);
                }

                var dropbutton = this.dropbutton;
                if (dropbutton)
                {
                    dropbutton._setAccessibilityEnable(false);
                    dropbutton._setAccessibilityStatHidden(true);
                }
            }
        }
    };

    _pCalendar._on_created_accessibility_contents = _pCalendar._on_attach_accessibility_contents_handle;

    _pCalendar._setAccessibilityLabel = function (label)
    {
        nexacro.Component.prototype._setAccessibilityLabel.call(this, label);
        if (this._p_calendaredit)
        {
            this._p_calendaredit._setAccessibilityLabel(label);
        }
    };

    _pCalendar._setAccessibilityDescription = function (desc)
    {
        nexacro.Component.prototype._setAccessibilityDescription.call(this, desc);
        if (this._p_calendaredit)
        {
            this._p_calendaredit._setAccessibilityDescription(desc);
        }
    };

    _pCalendar._setAccessibilityAction = function (action)
    {
        nexacro.Component.prototype._setAccessibilityAction.call(this, action);
        if (this._p_calendaredit)
        {
            this._p_calendaredit._setAccessibilityAction(action);
        }
    };

    _pCalendar._accessibility_showPopup = function ()
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this._want_arrows = true;

            var control_elem = this.getElement();
            if (control_elem)
            {
                var calendaredit = this._p_calendaredit;
                var popupcontrol = this._popupcontrol;

                if (popupcontrol && calendaredit)
                {
                    /* popup에 초점을 읽게하기 위함 */
                    var descendant_elem = calendaredit._input_element;
                    if (descendant_elem)
                    {
                        control_elem.setElementAccessibilityActiveDescendant(popupcontrol, descendant_elem);
                    }
                }
            }
        }
    };

    _pCalendar._accessibility_closePopup = function ()
    {
        const env = this._getEnvironment();
        if (!env || !env._p_enableaccessibility)
            return;

        this._want_arrows = false;

        var type = this._p_type;
        var calendaredit = this._p_calendaredit;
        if (calendaredit && type == "normal")
        {
            // 팝업 닫힐때 가상커서 초점을 잃음
            var _win = this._getWindow();
            if (_win)
            {
                _win._removeFromCurrentFocusPath(calendaredit, true);
            }

            calendaredit._on_focus(true, "focus");
        }
    };

    _pCalendar = null;
}

//==============================================================================
// CalendarEditControl
//==============================================================================
if (nexacro._CalendarEditControl)
{
    var _pCalendarEditControl = nexacro._CalendarEditControl.prototype;
    //==============================================================================
    // CalendarEditControl : Override
    //==============================================================================
    _pCalendarEditControl.on_beforekeyinput_basic_action = function (value, status, begin, end, inputType)
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var calendar = this._p_parent;
            if (calendar && calendar._isPopupVisible())
            {
                // popup이 열린 상태에서는 input의 처리를 하지 않음 삭제하면 지우면서 탐색됨
                // 접근성은 음성 출력을 위해 caret을 마지막으로 옮김
                return [1]; //_BeforeinputState.CANCEL
            }
        }
        return nexacro.MaskEdit.prototype.on_beforekeyinput_basic_action.call(this, value, status, begin, end, inputType);
    };

    _pCalendarEditControl.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        nexacro.MaskEdit.prototype.on_killfocus_basic_action.call(this);
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            nexacro._notifyAccessibilityInitialize(env._a11ytype);
        }
    };

    //==============================================================================
    // CalendarEditControl : Accessibility Function
    //==============================================================================
    _pCalendarEditControl._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (!env || !env._p_enableaccessibility)
            return;

        // edit에 role을 textbox로 설정 하지 않아도 textbox로 인식하기 때문에 제거
        // var input_elem = this._input_element;
        // if (input_elem)
        // {
        //     if (env._a11ytype < 4)
        //     {
        //         input_elem.setElementAccessibilityRole(this._p_accessibilityrole);
        //     }
        // }

        // input에 직접 label을 설정하므로 필요없음
        //nexacro._createNotifyAccessibilityInputElement();
    };

    _pCalendarEditControl._on_attach_accessibility_contents_handle = _pCalendarEditControl._on_created_accessibility_contents;

    _pCalendarEditControl._getAccessibilityLabel = function ()
    {
        var calendar = this._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityLabel();
        }
        return "";
    };

    _pCalendarEditControl._getAccessibilityDescription = function ()
    {
        var calendar = this._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityDescription();
        }
        return "";
    };

    _pCalendarEditControl._getAccessibilityAction = function ()
    {
        var calendar = this._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityAction();
        }
        return "";
    };

    _pCalendarEditControl._getAccessibilityReadLabel = function (b_label)
    {
        var calendar = this.parent;
        if (calendar)
        {
            return calendar._getAccessibilityReadLabel(b_label);
        }
        return "";
    };

    // calendar에서 label 만들때 호출하므로 모듈로 분리
    _pCalendarEditControl._on_getAccessibilityAdditionalLabel = function ()
    {
        const env = this._getEnvironment();
        // 모바일은 value를 additional로 처리
        if (env?._a11ytype > 3)
        {
            return this._p_value ? this._p_text : this._p_displaynulltext ? this._p_displaynulltext : "";
        }
        return "";
    };

    _pCalendarEditControl = null;
    //delete _pCalendarEditControl;
}

//==============================================================================
// SpinEditControl
//==============================================================================
if (nexacro._SpinEditControl)
{
    var _pSpinEditControl = nexacro._SpinEditControl.prototype;
    //==============================================================================
    // SpinEditControl : Override
    //==============================================================================
    _pSpinEditControl.on_attach_contents_handle = function (win, enablea11y)
    {
        nexacro.MaskEdit.prototype.on_attach_contents_handle.call(this, win, enablea11y);
        
        if (enablea11y)
        {
            const env = win._getEnvironment();
            var _spin = this._p_parent;
            var input_elem = this._input_element;
            if (input_elem && _spin)
            {
                input_elem.setElementAccessibilityRole(this._p_accessibilityrole);
                input_elem.setElementAccessibilityInfoValueMax(_spin._p_max);
                input_elem.setElementAccessibilityInfoValueMin(_spin._p_min);
                input_elem.setElementAccessibilityInfoValueCur(_spin._p_value);

                if (env._a11ytype != 2)
                {
                    if (this._p_accessibilitydesclevel != "none" && this._p_accessibilitydesclevel != "child")
                    {
                        input_elem.setElementAccessibilityActiveDescendant(_spin._unique_id);
                    }
                }
                else
                {
                    if (env._a11ytype == 5)
                    {
                        this._setAccessibilityStatHidden(true);
                    }
                }
            }
        }
    }

    //==============================================================================
    // SpinEditControl : Accessibility Function
    //==============================================================================
    _pSpinEditControl._getAccessibilityLabel = function ()
    {
        var spin = this._p_parent;
        if (spin)
        {
            return spin._getAccessibilityLabel();
        }
        return "";
    };

    _pSpinEditControl._getAccessibilityDescription = function ()
    {
        var spin = this._p_parent;
        if (spin)
        {
            return spin._getAccessibilityDescription();
        }
        return "";
    };

    _pSpinEditControl._getAccessibilityAction = function ()
    {
        var spin = this._p_parent;
        if (spin)
        {
            return spin._getAccessibilityAction();
        }
        return "";
    };

    _pSpinEditControl = null;
    //delete _pSpinEditControl;
}

//==============================================================================
// TextArea
//==============================================================================
if (nexacro.TextArea)
{
    var _pTextArea = nexacro.TextArea.prototype;
    //==============================================================================
    // TextArea : Override
    //==============================================================================
    _pTextArea._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            if (this._p_readonly)
            {
                this._setAccessibilityFlagReadOnly(this._p_readonly);
            }

            this._setAccessibilityFlagMultiLine(true);
            //nexacro._createNotifyAccessibilityInputElement();
        }
    };

    _pTextArea._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;

        if (enablea11y)
        {
            if (this._p_readonly)
            {
                this._setAccessibilityFlagReadOnly(this._p_readonly);
            }

            this._setAccessibilityFlagMultiLine(true);
            //nexacro._createNotifyAccessibilityInputElement();
        }
    };

    _pTextArea._on_accessibility_apply_prop_enable = function ()
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this._setAccessibilityRole(this.enable ? "null" : "textarea");

            var control_elem = this.getElement();
            if (control_elem && control_elem.handle)
            {
                control_elem._refreshAccessibilityInfo(control_elem.handle);
            }
        }
    };

    //==============================================================================
    // TextArea : Accessibility Function
    //==============================================================================

    _pTextArea = null;
}

//==============================================================================
// MaskEdit
//==============================================================================
if (nexacro.MaskEdit)
{
    var _pMaskEdit = nexacro.MaskEdit.prototype;
    //==============================================================================
    // MaskEdit : Accessibility Function
    //==============================================================================
    _pMaskEdit._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        let env;             
        if (enablea11y == undefined)
        {
            env = this._getEnvironment();
            enablea11y = env?._p_enableaccessibility;
        }

        if (enablea11y)
        {
            if (env?._a11ytype == 5)
            {
                this.on_apply_value(this._p_value);
            }

            // input에 직접 label을 설정하므로 필요없음
            //nexacro._createNotifyAccessibilityInputElement();
        }
    };

    _pMaskEdit._setAccessibilityLabel = function (label)
    {
        nexacro.Component.prototype._setAccessibilityLabel.call(this, label);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pMaskEdit._setAccessibilityDescription = function (desc)
    {
        nexacro.Component.prototype._setAccessibilityDescription.call(this, desc);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pMaskEdit._setAccessibilityAction = function (action)
    {
        nexacro.Component.prototype._setAccessibilityAction.call(this, action);

        if (!this._onlydisplay)
        {
            var input_elem = this._getInputElement();
            if (input_elem)
            {
                input_elem._updateElementAccessibilityLabel();
            }
        }
    };

    _pMaskEdit._updateAccessibilityLabel = function ()
    {
        if (this._is_subcontrol)
        {
            var comp = this._p_parent;
            comp._setAccessibilityLabel(comp._getAccessibilityLabel());
        }

        nexacro.Component.prototype._updateAccessibilityLabel.call(this);
    };

    _pMaskEdit = null;
    //delete _pMaskEdit;
}

//==============================================================================
// ListBox
//==============================================================================
if (nexacro.ListBox)
{
    var _pListBox = nexacro.ListBox.prototype;
    _pListBox._skip_mobile_tabfocus = true;
    //==============================================================================
    // ListBox : Override
    //==============================================================================
    _pListBox.on_fire_user_onkeydown = function (keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp, meta_key)    
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            var accIdx = this._accessibility_index;
            var rowcount = this._getInnerdatasetInfo("_rowcount");

            if (keycode == nexacro.Event.KEY_UP)
            {
                accIdx += -1;

                if (accIdx < -1)
                {
                    this._want_arrow = false;
                }
                else
                {
                    this._refreshScroll(accIdx, shift_key ? 1 : 0);
                }
            }
            else if (keycode == nexacro.Event.KEY_DOWN)
            {
                accIdx += 1;

                if (accIdx >= rowcount)
                {
                    this._want_arrow = false;
                }
                else
                {
                    this._refreshScroll(accIdx, shift_key ? 1 : 0);
                }
            }
            else if (keycode == nexacro.Event.KEY_PAGE_UP)
            {
                accIdx = accIdx < 0 ? 0 : accIdx;
                accIdx -= this._page_rowcount;

                if (accIdx < 0)
                {
                    accIdx = 0
                }

                this._refreshScroll(accIdx, shift_key ? 1 : 0, keycode);
            }
            else if (keycode == nexacro.Event.KEY_PAGE_DOWN)
            {
                accIdx = accIdx < 0 ? 0 : accIdx;
                accIdx += this._page_rowcount;

                if (accIdx > rowcount)
                {
                    accIdx = rowcount - 1;
                }

                this._refreshScroll(accIdx, shift_key ? 1 : 0, keycode);
            }
            else if (keycode == nexacro.Event.KEY_HOME)
            {
                accIdx = 0;
                this._refreshScroll(accIdx, shift_key ? 1 : 0, keycode);
            }
            else if (keycode == nexacro.Event.KEY_END)
            {
                accIdx = rowcount - 1;
                this._refreshScroll(accIdx, shift_key ? 1 : 0, keycode);
            }

            this._accessibility_index = accIdx;

            var item = this._getItem(accIdx);
            if (item)
            {
                item._on_focus(true);
            }
            else if (accIdx == -1)
            {
                // focus path 문제로 이동 안되어 추가 함 로직상으로 처리 가능해지면 제거
                let win = this._getWindow();
                if (win)
                {
                    win._removeFromCurrentFocusPath(this);
                }
                this._on_focus(true);
            }
        }
        return nexacro.Component.prototype.on_fire_user_onkeydown.call(this, keycode, alt_key, ctrl_key, shift_key, fire_comp, refer_comp, meta_key);
    };

    _pListBox._apply_setfocus = function (evt_name)
    {
        var item = null;
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            if (evt_name == "tabkey" || evt_name == "shifttabkey")
            {
                item = this._getItem(this._p_index);
            }
            else if (evt_name == "downkey" || evt_name == "upkey")
            {
                item = this._getItem(this._accessibility_index);
            }
        }

        if (item)
        {
            item._on_focus(true);
        }
        else
        {
            nexacro.Component.prototype._apply_setfocus.call(this, evt_name);
        }
    };

    //==============================================================================
    // Listbox : Accessibility Function
    //==============================================================================
    _pListBox._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        if (comp_focus && refer_comp instanceof nexacro._ListBoxItemControl)
        {
            if (!(related_comp instanceof nexacro.ListBox))
            {
                this._first_focus = true;
            }

            this._accessibility_index = this._p_index;
            refer_comp._on_focus(true);
            refer_comp._changeStatus("focused", true);
        }
    };

    _pListBox._accessibility_keydown = function (elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        var ret = false;
        const env = this._getEnvironment();
        if (env?._a11ytype != 2 || nexacro._Browser != "Chrome")
        {
            if (this._first_focus)
            {
                if (keycode == nexacro.Event.KEY_TAB || keycode == nexacro.Event.KEY_DOWN)
                {
                    this._accessibility_index = -1;
                }
                else if ((keycode == nexacro.Event.KEY_TAB && shift_key) || keycode == nexacro.Event.KEY_UP)
                {
                    this._accessibility_index = this._getInnerdatasetInfo("_rowcount");
                }
                this._first_focus = false;
            }
            ret = nexacro.Component.prototype._accessibility_keydown.call(this, elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key);
        }
        else
        {
            if (this._first_focus)
                ret = nexacro.Component.prototype._accessibility_keydown.call(this, elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key);
        }
        return ret;
    };

    _pListBox._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this.on_apply_prop_accessibilitylabel();

            if (this._isAccessibilityCotainerComponent())
            {
                var items = this._getContentsItem();
                if (items && items[0])
                {
                    items[0]._setAccessibilityDescriptionBy(this._unique_id);
                }
            }
        }
    };

    _pListBox._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;

        if (enablea11y)
        {
            this.on_apply_prop_accessibilitylabel();

            if (this._isAccessibilityCotainerComponent())
            {
                var items = this._getContentsItem();
                if (items && items[0])
                {
                    items[0]._setAccessibilityDescriptionBy(this._unique_id);
                }
            }
        }
    };

    _pListBox = null;
    //delete _pListBox;
}

//==============================================================================
// ListBoxItemControl
//==============================================================================
if (nexacro._ListBoxItemControl)
{
    var _pListBoxItemControl = nexacro._ListBoxItemControl.prototype;
    //==============================================================================
    // ListBoxItemControl : Override
    //==============================================================================
    _pListBoxItemControl.on_keydown_default_action = function (keycode, alt_key, ctrl_key, shift_key, refer_comp)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            var listbox = this._p_parent;
            if (listbox)
            {
                listbox.on_keydown_default_action(keycode, alt_key, ctrl_key, shift_key, refer_comp);
            }
        }
    };

    //==============================================================================
    // ListBoxItemControl : Accessibility Function
    //==============================================================================
    _pListBoxItemControl._getAccessibilityLabel = function ()
    {
        var flag = this._p_parent._is_first_focus;
        var label = "";
        if (flag && this._isAccessibilityEnable())
        {
            var parent = this._p_parent;
            var p_accessibility = parent._p_accessibility;
            label = parent._getAccessibilityParentValue(p_accessibility);
        }
        label += " " + nexacro.Component.prototype._getAccessibilityLabel.call(this);
        return label;
    };

    _pListBoxItemControl._getAccessibilityRole = function ()
    {
        var role = "";
        if (this._isAccessibilityEnable())
        {
            var parent = this._p_parent;
            if (parent._is_first_focus)
            {
                return parent._getAccessibilityRole();
            }
            else
            {
                role = nexacro.Component.prototype._getAccessibilityRole.call(this);
            }
        }
        return role;
    };

    _pListBoxItemControl._setAccessibilityStatFocus = function (evt_name)
    {
        var list = this._p_parent;
        if (!list._is_subcontrol)
        {
            if (list.multiselect && list._shift_select_base_index && list._shift_select_base_index != this._p_index)
            {
                var item = list._getItem(list._shift_select_base_index);
                if (item && item._status == "selected")
                {
                    var label = item._getAccessibilityLabel();
                    label += " " + this._getAccessibilityLabel();
                    this._setAccessibilityLabel(label);
                }
            }

            if (!evt_name)
            {
                var keycode = list._last_keydown_keycode;
                switch (keycode)
                {
                    case nexacro.Event.KEY_DOWN:
                        evt_name = "downkey";
                        break;
                    case nexacro.Event.KEY_UP:
                        evt_name = "upkey";
                        break;
                    case nexacro.Event.KEY_TAB:
                        evt_name = "tabkey";
                        break;
                    case nexacro.Event.KEY_SHIFT:
                        evt_name = "shiftkey";
                        break;
                }

            }

            return nexacro.Component.prototype._setAccessibilityStatFocus.call(this, evt_name);
        }
    };

    _pListBoxItemControl = null;
    //delete _pListBoxItemControl;
}

//==============================================================================
// WebBrowser
//==============================================================================
if (nexacro.WebBrowser)
{
    var _pWebBrowser = nexacro.WebBrowser.prototype;
    _pWebBrowser._skip_mobile_tabfocus = true;
    //==============================================================================
    // WebBrowser : Override
    //==============================================================================
    _pWebBrowser._apply_setfocus = function (evt_name, self_flag, refer_lose_focus, refer_new_focus)
    {
        if (evt_name == "tabkey" || evt_name == "shifttabkey")
        {
            var ifrm_elem = this._ifrm_elem;
            if (ifrm_elem)
            {
                ifrm_elem._setElementFocus();
            }
        }
        else
        {
            const env = this._getEnvironment();
            if (env?._p_enableaccessibility)
            {
                nexacro.Component.prototype._apply_setfocus.call(this, evt_name);
            }
        }
    };

    _pWebBrowser = null;
    //delete _pWebBrowser;
}

//==============================================================================
// WebView
//==============================================================================
if (nexacro.WebView)
{
    var _pWebView = nexacro.WebView.prototype;
    _pWebView._skip_mobile_tabfocus = true;
    //==============================================================================
    // WebView : Override
    //==============================================================================
    _pWebView._apply_setfocus = function (evt_name, self_flag, refer_lose_focus, refer_new_focus)
    {
        if (evt_name == "tabkey" || evt_name == "shifttabkey")
        {
            var ifrm_elem = this._ifrm_elem;
            if (ifrm_elem)
            {
                ifrm_elem._setElementFocus();
            }
        }
        else
        {
            const env = this._getEnvironment();
            if (env?._p_enableaccessibility)
            {
                nexacro.Component.prototype._apply_setfocus.call(this, evt_name);
            }
        }
    };

    _pWebView = null;
    //delete _pWebView;
}

//==============================================================================
// FileUpload
//==============================================================================
if (nexacro.FileUpload)
{
    var _pFileUpload = nexacro.FileUpload.prototype;
    _pFileUpload._skip_mobile_tabfocus = true;
    //==============================================================================
    // FileUpload : Accessibility Function
    //==============================================================================
    _pFileUpload._on_getAccessibilityAdditionalLabel = function ()
    {
        if (this._first_focus == false)
        {
            var count = 0;
            var items = this._items;
            if (items)
                count = items.length;
            return (+this._p_index) + 1 + " " + count;
        }
        return "";
    };

    _pFileUpload._isAccessibilityEnable = function ()
    {
        return true;
    };

    /* accessibility method for android */
    _pFileUpload.on_fire_sys_onaccessibilitygesture = function (direction, fire_comp, refer_comp)
    {
        var idx = this._p_index;
        var items = this._items;

        while (true)
        {
            if (direction)
            {
                if (!this._buttonFlag && items[idx].fileitembutton._isAccessibilityEnable())
                {
                    this._editFlag = false;
                    this._buttonFlag = true;
                }
                else
                {
                    if (items[++idx])
                    {
                        this._editFlag = true;
                        this._buttonFlag = false;

                        if (!items[idx].fileitemedit._isAccessibilityEnable())
                        {
                            continue;
                        }
                    }
                    else
                    {
                        this._editFlag = false;
                        this._buttonFlag = false;
                        return this._want_arrow = false;
                    }
                }
            }
            else
            {
                if (!this._editFlag && items[idx].fileitemedit._isAccessibilityEnable())
                {
                    this._editFlag = true;
                    this._buttonFlag = false;
                }
                else
                {
                    if (items[--idx])
                    {
                        this._editFlag = false;
                        this._buttonFlag = true;
                        if (!items[idx].fileitembutton._isAccessibilityEnable())
                        {
                            continue;
                        }
                    }
                    else
                    {
                        this._editFlag = false;
                        this._buttonFlag = false;
                        return this._want_arrow = false;
                    }
                }
            }
            break;
        }

        if (items[idx])
        {
            if (this._editFlag)
            {
                items[idx].fileitemedit._setAccessibilityNotifyEvent();
            }
            else if (this._buttonFlag)
            {
                items[idx].fileitembutton._setAccessibilityNotifyEvent();
            }

            this._p_index = idx;
            this._p_value = items[idx]._p_value;
            return this._want_arrow = true;
        }
        else
        {
            return this._want_arrow = false;
        }
    };

    _pFileUpload._setAccessibilityNotifyEvent = function (direction)
    {
        this._editFlag = false;
        this._buttonFlag = false;

        var idx;
        var items = this._items;
        var itemLen = items.length;
        if (itemLen)
        {
            if (direction)
            {
                idx = 0;
                if (items[idx] && items[idx].fileitemedit._isAccessibilityEnable())
                {
                    this._editFlag = true;
                }
                else if (items[idx] && items[idx].fileitembutton._isAccessibilityEnable())
                {
                    this._buttonFlag = true;
                }
            }
            else
            {
                idx = itemLen - 1;
                if (items[idx] && items[idx].fileitembutton._isAccessibilityEnable())
                {
                    this._buttonFlag = true;
                }
                else if (items[idx] && items[idx].fileitemedit._isAccessibilityEnable())
                {
                    this._editFlag = true;
                }
            }

            if (this._buttonFlag || this._editFlag)
            {
                if (this._editFlag)
                {
                    items[idx].fileitemedit._setAccessibilityNotifyEvent();
                }
                else if (this._buttonFlag)
                {
                    items[idx].fileitembutton._setAccessibilityNotifyEvent();
                }

                this._p_index = idx;
                this._p_value = items[idx]._p_value;
                return this._want_arrow = true;
            }
        }

        this._want_arrow = false;
        return nexacro.Component.prototype._setAccessibilityNotifyEvent.call(this, direction);
    };

    _pFileUpload._setAccessibilityInfoByHover = function (control)
    {
        if (control)
        {
            this._editFlag = false;
            this._buttonFlag = false;

            var item = control._p_parent;
            if (control instanceof nexacro.FileItemEditCtrl)
            {
                this._editFlag = true;
            }
            else if (control instanceof nexacro.FileItemButtonCtrl)
            {
                this._buttonFlag = true;
            }

            this._p_index = item._p_index;
            //this.set_index(item._p_index);
            this._want_arrow = true;
            control._setAccessibilityNotifyEvent();

            return true;
        }

        return false;
    };

    _pFileUpload = null;
    //delete _pFileUpload;
}

//==============================================================================
// FileUploadItemControl
//==============================================================================
if (nexacro._FileUploadItemControl)
{
    var _pFileUploadItemControl = nexacro._FileUploadItemControl.prototype;
    _pFileUploadItemControl._skip_mobile_tabfocus = true;

    _pFileUploadItemControl = null;
    //delete _pFileUploadItemControl;
}

//==============================================================================
// Grid
//==============================================================================
if (nexacro.Grid)
{
    var _pGrid = nexacro.Grid.prototype;
    //_pGrid._skip_mobile_tabfocus = true;

    //==============================================================================
    // Grid : Override
    //==============================================================================
    _pGrid._setFocus = function (bResetScroll, dir, block_inner_focus)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this._currentBand = "grid";
            this._accept_arrow = true;
            this._accept_focus = true;
            this._removeAccessibilityCurrentFocus();

            if (dir == 2)
            {
                this._setAccessibilityRole("grid");
                if (!this._p_accessibilityenable)
                    this._setAccessibilityBandFocus("next", true, false);
            }
            else if (dir == 3)
            {
                this._setAccessibilityRole("grid");
                this._setAccessibilityBandFocus("prev", true);
                return;
            }
            else if (dir < 2)
            {
                this._setAccessibilityRole("null");
                this._acceptstab = false;
            }
        }

        return nexacro.Component.prototype._setFocus.call(this, bResetScroll, dir, block_inner_focus);
    };

    _pGrid._isFocusAcceptable = function ()
    {
        // 비어있는그리드의 음성 출력
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            return this._isAccessibilityEnable();
        }

        return this._is_focus_accept;
    };

    _pGrid._isAccessibilityEnable = function ()
    {
        // 비어 있는 그리드의 음성 출력
        const env = this._getEnvironment();
        if (env?._a11ytype < 3 && this._p_rowcount < 1)
        {
            return true;
        }
        return (this._accept_focus && this._p_accessibilityenable);
    };

    _pGrid._getAccessibilityRole = function ()
    {
        const env = this._getEnvironment();
        var role = nexacro.Component.prototype._getAccessibilityRole.call(this);
        if (this._hasTree)
        {
            role = "treegrid";
        }
        else if (this._p_rowcount < 1 && env?._a11ytype < 4)
        {
            role = "null"; // 미설정
        }
        return role;
    };

    //==============================================================================
    // Grid : Accessibility Function
    //==============================================================================
    _pGrid._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";
        if (this._p_rowcount <= 0)
        {
            add_label = this._p_nodatatext;
        }
        return add_label;
    };

    _pGrid._on_accessibility_killfocus = function ()
    {
        if (this._firstEditableCell)
            this._firstEditableCell = null;
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            this._accept_arrow = false;
            this._acceptstab = false;

            var firstcell = this._getFirstEditableCell();
            if (firstcell.row != null && firstcell.row >= 0)
            {
                var cellobj = this._getCurrentBodyCell(firstcell.row, firstcell.cell);
                if (cellobj)
                    cellobj.on_apply_prop_accessibilitylabel();
            }

            if (this._hasTree)
                this._setAccessibilityRole("treegrid");
            else
                this._setAccessibilityRole("grid");
        }
    };

    _pGrid._setGridAccessibilityFocus = function (comp)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            if (comp._p_accessibilityenable && !this._accept_focus)
            {
                this._accept_focus = true;
            }
        }
    };

    _pGrid._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        const env = this._getEnvironment();
        if (!env || !env._p_enableaccessibility)
            return;

        let editable_cell = null;

        // 처음 editable cell의 정적 editcontrol 생성
        let editable_pos = this._getFirstEditableCell();
        if (editable_pos)
        {
            editable_cell = this._getCurrentBodyCell(editable_pos.row, editable_pos.cell);
            if (editable_cell)
            {
                this._staticCreateEditControl(editable_cell, "current");
            }
        }

        // 마지막 editable cell의 정적 editcontrol 생성
        editable_pos = this._getLastEditableCell();
        if (editable_pos)
        {
            editable_cell = this._getCurrentBodyCell(editable_pos.row, editable_pos.cell);
            if (editable_cell)
            {
                this._staticCreateEditControl(editable_cell, "current");
            }
        }

        this._setGridAccessibilityFocus(this);
    };

    _pGrid._on_created_accessibility_contents = _pGrid._on_attach_accessibility_contents_handle;

    // allow keyaction at keyup event (가상커서 활성모드)
    _pGrid._isFireAccessibilityKeydown = function (keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        if (this._hasTree && this._p_treeuseexpandkey == false)
        {
            // tree의 단축키 지원
            if (ctrl_key && alt_key && (keycode === nexacro.Event.KEY_LEFT || keycode === nexacro.Event.KEY_RIGHT))
            {
                return true;
            }
        }

        return nexacro.Component.prototype._isFireAccessibilityKeydown.call(this, keycode, alt_key, ctrl_key, shift_key, meta_key);
    };

    _pGrid._accessibility_keydown = function (elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        if (this._hasTree && this._p_treeuseexpandkey == false)
        {
            // tree의 단축키 지원
            if (ctrl_key && alt_key && refer_comp && refer_comp._subComp instanceof nexacro._CellTreeItemControl)
            {
                if (keycode === nexacro.Event.KEY_LEFT)
                {
                    this._treeStateKeyAction(this._selectinfo.currow, 0);
                }
                else if (keycode === nexacro.Event.KEY_RIGHT)
                {
                    this._treeStateKeyAction(this._selectinfo.currow, 1);
                }
            }
        }

        return nexacro.Component.prototype._accessibility_keydown.call(this, elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key);
    };

    _pGrid._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        //trace("focus in!!!!!!!!!!!!!!!!!!!!!", refer_comp.name, this.currentrow, this.currentcol, this._currentCellCell, this._currentCellRow, win._cur_ldown_elem);
        if (this._isFocused() === false)
        {
            nexacro.Component.prototype._accessibility_focusin.call(this, refer_comp, related_comp, reset_scroll, comp_focus, win);
        }

        if (!comp_focus)
            return;

        if (this._firstEditableCell)
            this._firstEditableCell = null;

        var refer_cell = null;
        if (refer_comp)
        {
            refer_cell = this._findCellObj(refer_comp);

            // 마우스 동작은 focusin 처리 안함 (RP 98160) / 센스리더와 사용자의 마우스이벤트            
            var _is_focusin_process = true;
            if (win && win._cur_ldown_elem || this._async_down_act)
                _is_focusin_process = false;

            if (refer_cell && _is_focusin_process)
            {
                if (refer_cell instanceof nexacro._GridCellControl)
                {                    
                    this._hideEditor();

                    var autoenter = this._p_autoenter;
                    if (refer_cell._rowidx != this._p_currentrow || refer_cell._cellidx != this._p_currentcell)
                    {
                        this._currentBand = refer_cell._band.name; //band 설정
                        this._p_currentrow = refer_cell._rowidx;
                        this._p_currentcol = refer_cell._refinfo ? refer_cell._refinfo._col : this._p_currentcol;
                        this._p_currentsubrow = refer_cell._refinfo ? refer_cell._refinfo._row : this._p_currentrow; // 101705
                        this._focused_row = refer_cell._getDataRow();
                        this._focused_cell = refer_cell._cellidx;

                        this._moveToPosAccessibilityCell(refer_cell._rowidx, refer_cell._cellidx);
                    }

                    if (autoenter == "select")
                    {
                        let editor = refer_cell._editor;
                        if (editor && refer_cell._static_create)
                        {
                            editor.set_height(refer_cell._getControlRect().height);
                            editor._apply_setfocus();
                        }
                    }
                }
                else if (refer_cell instanceof nexacro.Grid)
                {
                    var firstcell = this._getFirstEditableCell();
                    if (firstcell.row >= 0)
                    {
                        var cellobj = this._getCurrentBodyCell(firstcell.row, firstcell.cell);
                        if (cellobj)
                            cellobj.on_apply_prop_accessibilitylabel();
                    }
                }

                // pre create editor control
                if (refer_cell instanceof nexacro._GridCellControl)
                {
                    this._staticCreateEditControl(refer_cell, "prev");
                    this._staticCreateEditControl(refer_cell, "up");
                    this._staticCreateEditControl(refer_cell, "next");
                    this._staticCreateEditControl(refer_cell, "down");
                } 
                else if (refer_cell instanceof nexacro.Grid)
                {
                    cellobj = this._getCurrentBodyCell(-1, -1);
                    this._staticCreateEditControl(cellobj, "current");
                }
            }
        }

        return;
    };

    _pGrid._accessibility_focusout = function (refer_comp, related_comp, comp_init)
    {
        //trace("accessibility focus out !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! : ", this._p_name, refer_comp, related_comp);
        nexacro.Component.prototype._accessibility_focusout.call(this, refer_comp, related_comp, comp_init);

        if(comp_init)
        {
            if (this._firstEditableCell)
                this._firstEditableCell = null;
            if (!related_comp)
            {
                // deactivate시 초기화
                var _win = this._getWindow();
                if (_win)
                {
                    _win._is_fire_sys_keydown = false;
                    _win._is_fire_sys_focusin = false;
                }

                this._keydown_elem = null;
            }
        }
    };

    _pGrid._moveToAccessibilityCell = function (type, tabstop, extcomp, colmove)
    {
        var retn;
        if (this._is_band_focus && !tabstop)
        {
            retn = true;
            if (type == "prev" || type == "up")
            {
                retn = this._setAccessibilityBandFocus(type);
            }
            else
            {
                if (type == "next" || (type == "down" && this._currentBand == "head"))
                {
                    this._p_currentcell = this._p_currentsubrow = this._p_currentcol = 0;
                }

                if (!this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell))
                {
                    retn = this._setAccessibilityBandFocus(type);
                }
            }
            return retn;
        }

        var editcell;

        if (this._currentBand == "grid")
        {
            if (type == "prev" || type == "next" || type == "down")
            {
                if (tabstop)
                {
                    if (type == "next")
                    {
                        if (this._bodyBand && this._bodyBand._get_rows().length > 0)
                        {
                            editcell = this._getFirstEditableCell();

                            if (editcell && editcell.row !== null)
                            {
                                this._showEditorFocus = true;
                                if (this.vscrollbar && this.vscrollbar._p_visible)
                                    this.vscrollbar.set_pos(0);

                                this._currentBand = "body"; // only accessibility
                                this._moveToPosAccessibilityCell(editcell.row, editcell.cell);
                                this._showEditorFocus = false;
                                return true;
                            }
                        }
                    }
                    return false;
                }
                return this._setAccessibilityBandFocus(type, true);
            }
            else
            {
                this._accept_arrow = false;
                return false;
            }
        }

        var band;
        retn = true;

        var cellobj = null;
        var cellinfo;
        var accessibility_enable = false;
        this._is_band_focus = false;
        this._beforegridrowpos = this._p_currentrow;
        this._beforegridcolpos = this._p_currentcol;
        var curRow;
        var curCol;
        var cellidx;
        var row, col;

        if (this._currentBand == "body") // body band keyaction for accessibility
        {
            this._is_first_bodycell = false;

            while (true)
            {
                if (tabstop)
                    retn = this._moveToCell(type, true, colmove, undefined, undefined, true);
                else
                    retn = this._moveToCell(type, false, colmove, undefined, undefined, true);

                if (retn)
                {
                    if (this._showEditing)
                    {
                        this._hideEditor();
                    }
                    cellobj = this._getAccessibilityCurrentCell();
                    if (cellobj)
                    {
                        if (tabstop)
                        {
                            if (this._p_autoenter == "select")
                            {
                                this._showEditor();
                            }
                            else
                            {
                                cellobj._setFocus(false);
                            }
                            break;
                        }
                        else
                        {
                            cellinfo = cellobj._refinfo;
                            var datarow = this._getDataRow(cellobj._rowidx);
                            var display_type = cellinfo._getDisplaytype(datarow);

                            accessibility_enable = cellobj.accessibilityenable;
                            if (accessibility_enable)
                            {
                                if (this._p_autoenter == "select")
                                {
                                    this._showEditor();
                                }
                                else
                                {
                                    // Display Control에 focus X
                                    cellobj._setFocus(false);
                                }
                                break;
                            }/* accessibility enable true */
                        }
                    }/* cellobj true */
                }
                else
                {
                    if (!tabstop)
                    {
                        retn = this._setAccessibilityBandFocus(type);
                    }
                    else if (tabstop && type == "prev")
                    {
                        if (this._curFormat && this._curFormat._headcells)
                        {
                            var headcells = this._curFormat._headcells;
                            var hlen = headcells.length;
                            var editType;
                            var displayType;

                            for (var j = hlen - 1; j >= 0; j--)
                            {
                                var row = -1;
                                editType = headcells[j]._getEdittype(row);
                                displayType = headcells[j]._getDisplaytype(row);

                                if ((editType !== "" && editType !== "none") || (displayType == "checkboxcontrol" || displayType == "buttoncontrol"))
                                {
                                    this._currentBand = "head";
                                    this._moveToPosAccessibilityCell(row, j);
                                    retn = true;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                }
            } // bodyband 내부에서 keyaction인 경우
            return retn;
        }
        // head or body band keyaction by tabkey
        if (tabstop)
        {
            if (this._currentBand == "head")
            {
                if (type == "next" && this._bodyBand && this._bodyBand._get_rows().length > 0)
                {
                    this._currentBand = "body";
                    editcell = this._getFirstEditableCell(false);

                    if (editcell.row !== null)
                    {
                        this._is_first_bodycell = true;
                        //                      retn = this._moveToPosAccessibilityCell(editcell.row, editcell.cell);
                        this._moveToPosAccessibilityCell(editcell.row, editcell.cell);
                    }
                    return true;
                }
            }
            return false;
        }

        // head or summary band keyaction for accessibility        
        if (type == "next")
        {
            while (true)
            {
                this._p_currentcell++;
                cellobj = this._getAccessibilityCurrentCell();
                if (cellobj)
                {
                    //width가 0일 경우 없는것으로 처리
                    if (cellobj.width <= 0)
                    {
                        continue;
                    }
                    else
                    {
                        accessibility_enable = cellobj.accessibilityenable;
                        if (!accessibility_enable)
                        {
                            continue;
                        }

                        cellinfo = cellobj._refinfo;
                        this._p_currentsubrow = cellinfo._row;
                        this._p_currentcol = cellinfo._col;
                        this._p_currentrow = cellobj._rowidx;
                        this.currentDSrow = cellobj._getDataRow();

                        cellobj._showfull(); // Cell must excute showfull for cell text read                            
                        cellobj._setFocus(false);
                    }
                }
                else // cellobj null
                {
                    this._p_currentcell--;
                    retn = this._setAccessibilityBandFocus(type);
                }
                break;
            } // loop
        }
        else if (type == "prev")
        {
            while (true)
            {
                this._p_currentcell--;
                cellobj = this._getAccessibilityCurrentCell();
                if (cellobj)
                {
                    //width가 0일 경우 없는것으로 처리
                    if (cellobj.width <= 0)
                    {
                        continue;
                    }
                    else
                    {
                        accessibility_enable = cellobj.accessibilityenable;
                        if (!accessibility_enable)
                        {
                            continue;
                        }

                        cellinfo = cellobj._refinfo;
                        this._p_currentsubrow = cellinfo._row;
                        this._p_currentcol = cellinfo._col;
                        this._p_currentrow = cellobj._rowidx;
                        this.currentDSrow = cellobj._getDataRow();

                        cellobj._showfull(); // Cell must excute showfull for cell text read
                        cellobj._setFocus(false);
                    }
                }
                else // cellobj null
                {
                    this._p_currentcell++;
                    retn = this._setAccessibilityBandFocus(type);
                }
                break;
            } // loop
        }
        else if (type == "up")
        {
            if (this._currentBand == "head")
                band = this._headBand;
            else
                band = this._summBand;

            if (band)
            {
                cellobj = this._getAccessibilityCurrentCell();

                if (cellobj)
                {
                    cellinfo = cellobj._refinfo;
                    curRow = cellinfo._row;
                    curCol = cellinfo._col;
                    cellidx = this._p_currentcell;

                    while (true)
                    {
                        this._p_currentcell--;
                        cellobj = this._getAccessibilityCurrentCell();
                        if (cellobj)
                        {
                            row = cellobj._refinfo._row;
                            col = cellobj._refinfo._col;

                            if (col == curCol && row == curRow - 1)
                            {
                                accessibility_enable = cellobj.accessibilityenable;
                                if (!accessibility_enable)
                                {
                                    continue;
                                }

                                this._p_currentsubrow = row;
                                this._p_currentcol = col;
                                this._p_currentrow = cellobj._rowidx;
                                this.currentDSrow = cellobj._getDataRow();

                                cellobj._setFocus(false);
                                break;
                            }
                        }
                        else
                        {
                            if (this._p_currentcell <= 0)
                            {
                                this._p_currentcol = curCol;
                                this._p_currentcell = cellidx;
                                retn = this._setAccessibilityBandFocus(type);
                                break;
                            }
                        }
                    }
                }
            }
        }
        else if (type == "down")
        {
            cellobj = this._getAccessibilityCurrentCell();

            if (cellobj)
            {
                cellinfo = cellobj._refinfo;
                curRow = cellinfo._row;
                curCol = cellinfo._col;
                cellidx = this._p_currentcell;

                while (true)
                {
                    this._p_currentcell++;
                    cellobj = this._getAccessibilityCurrentCell();
                    if (cellobj)
                    {
                        row = cellobj._refinfo._row;
                        col = cellobj._refinfo._col;

                        if (col == curCol && row == curRow + 1)
                        {
                            this._p_currentsubrow = row;
                            this._p_currentcol = col;
                            this._p_currentrow = cellobj._rowidx;
                            this.currentDSrow = cellobj._getDataRow();

                            cellobj._setFocus(false);
                            break;
                        }
                    }
                    else
                    {
                        this._p_currentcell = cellidx;
                        retn = this._setAccessibilityBandFocus(type);
                        break;
                    }
                } // while
            }
        }
        return retn;
    };

    _pGrid._moveToPosAccessibilityCell = function (rowidx, cellidx)
    {
        var retn = false, cellobj = null;
        var cellinfo;

        rowidx = this._getDataRow(rowidx);
        //cellidx = this._getAccessibilityCellIndex(cellidx);

        // cell select only bodyband
        if (this._currentBand == "body" && this._bodyBand._get_rows().length > 0)
        {
            this._hideEditor();
            cellobj = this._getAccessibilityCurrentCell();
            if (cellobj)
            {
                cellinfo = cellobj._refinfo;
                if (cellinfo._row != rowidx || cellinfo._cellidx != cellidx)
                {
                    cellobj._changeStatus("focused", false); // before focused cell change to normal pseudo
                }
            }
            this._moveToPosCell(rowidx, cellidx);
        }

        cellobj = this._getAccessibilityCurrentCell(rowidx, cellidx);

        if (cellobj)
        {
            cellinfo = cellobj._refinfo;

            retn = true;
            cellobj._showfull();
            if (this._currentBand != "body" || this._p_autoenter != "select" || !this._showEditing)
            {
                if (cellobj._subComp && cellinfo._getDisplaytype(rowidx) != "treeitemcontrol")
                {
                    cellobj._subComp._setFocus(false);
                }
                else
                {
                    cellobj._setFocus(false);
                }
            }
            else
            {
                this._showEditor();
            }
            this.currentcol = cellinfo._col; // refresh current column
        }

        this._is_band_focus = this._is_first_focus = false;
        return retn;
    };

    _pGrid._moveToAccessibilityBand = function (togrid)
    {
        this._removeAccessibilityCurrentFocus(togrid);

        if (!togrid)
        {
            this._is_band_focus = true;
            var curBand = this._currentBand;
            if (curBand == "head")
            {
                this._headBand._setFocus(false);
            }
            else if (curBand == "body")
            {
                this._bodyBand._setFocus(false);
            }
            else if (curBand == "summary")
            {
                this._summBand._setFocus(false);
            }
        }
        else
        {
            this._setFocus(false);
        }
    };

    _pGrid._setAccessibilityBandFocus = function (type, extcomp, hotkey)
    {
        var retn = true, band = null, curBand = this._currentBand;
        var bandrows;
        var accessibility_enable;

        if (type == "next")
        {
            if (curBand == "grid")
            {
                if (this._headBand)
                {
                    band = this._headBand;
                    this._currentBand = "head";
                    this._currentDSrow = this._p_currentrow = -1;
                }
                else if (this._bodyBand && this._p_body && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                {
                    band = this._bodyBand;
                    this._currentBand = "body";
                    this._currentDSrow = this._p_currentrow = 0;
                }
                else if (this._summBand)
                {
                    band = this._summBand;
                    this._currentBand = "summary";
                    this._currentDSrow = this._p_currentrow = -2;
                }
                else
                {
                    this._accept_arrow = false;
                    retn = false;
                }
            }
            else
            {
                if (curBand == "head")
                {
                    if (this._bodyBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                    {
                        this._is_first_bodycell = true;
                        band = this._bodyBand;
                        this._currentBand = "body";
                        this._currentDSrow = this._p_currentrow = 0;
                    }
                    else if (this._summBand)
                    {
                        band = this._summBand;
                        this._currentBand = "summary";
                        this._currentDSrow = this._p_currentrow = -2;
                    }
                }
                else if (curBand == "body")
                {
                    if (this._summBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                    {
                        this._hideEditor();
                        band = this._summBand;
                        this._currentBand = "summary";
                        this._currentDSrow = this._p_currentrow = -2;
                    }
                }
                else if (curBand == "summary" && (this._p_summarytype == "top" || this._p_summarytype == "lefttop"))
                {
                    if (this._bodyBand)
                    {
                        this._is_first_bodycell = true;
                        band = this._bodyBand;
                        this._currentBand = "body";
                        this._currentDSrow = this._p_currentrow = 0;
                    }
                }
            }

            if (band)
            {
                if (hotkey)
                {
                    this._p_currentsubrow = 0;
                    this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell);
                }
                else
                {
                    accessibility_enable = band.accessibilityenable;
                    const env = this._getEnvironment();
                    if (!(env?._a11ytype == 4 || env?._a11ytype == 5) && (!this._is_band_focus && (accessibility_enable || (band._isBody && this._p_rowcount <= 0))))
                    {
                        if (extcomp)
                        {
                            this._p_currentcell = this._p_currentsubrow = this._p_currentcol = 0;
                        }
                        this._moveToAccessibilityBand(false);
                    }
                    else
                    {
                        if (curBand == "grid" && extcomp && !this.accessibilityenable)
                        {
                            this._first_focus = true;
                        }
                        this._p_currentcell = this._p_currentsubrow = this._p_currentcol = 0;
                        this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell);
                    }
                }
            }
        }
        else if (type == "prev")
        {
            if (curBand == "grid")
            {
                if (extcomp || hotkey) // 외부 compnent focus or hotkey
                {
                    if (this._summBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                    {
                        band = this._summBand;
                        this._currentBand = "summary";

                        bandrows = band._get_rows();

                        if (bandrows.length)
                        {
                            this._currentDSrow = this._p_currentrow = -2;
                            this._p_currentsubrow = band._get_rows()[0]._format_rows.length - 1;
                        }
                    }
                    else if (this._bodyBand && this._p_body)
                    {
                        band = this._bodyBand;
                        this._currentBand = "body";

                        bandrows = band._get_rows();

                        if (bandrows.length)
                        {
                            this._currentDSrow = this._p_currentrow = this._p_rowcount - 1;
                            this._p_currentsubrow = bandrows[0]._format_rows.length - 1;
                        }
                    }
                    else if (this._headBand)
                    {
                        band = this._headBand;
                        this._currentBand = "head";

                        bandrows = band._get_rows();

                        if (bandrows.length)
                        {
                            this._currentDSrow = this._p_currentrow = -1;
                            this._p_currentsubrow = bandrows[0]._format_rows.length - 1;
                        }
                    }
                    else
                    {
                        retn = false;
                    }
                } // 외부 compnent focus in
                else
                {
                    retn = false;
                }
            }
            else
            {
                if (curBand == "summary")
                {
                    accessibility_enable = this._summBand.accessibilityenable;
                    if (!this._is_band_focus && accessibility_enable)
                    {
                        this._moveToAccessibilityBand(false);
                    }
                    else
                    {
                        if (this._bodyBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                        {
                            this._is_first_bodycell = true;
                            band = this._bodyBand;
                            this._currentBand = "body";
                            this._p_currentrow = this._currentDSrow = this._p_rowcount - 1;
                        }
                        else if (this._headBand)
                        {
                            band = this._headBand;
                            this._currentBand = "head";
                            this._currentDSrow = this._p_currentrow = -1;
                        }
                    }
                }
                else if (curBand == "body")
                {
                    accessibility_enable = this._bodyBand.accessibilityenable;
                    if (!this._is_band_focus && accessibility_enable)
                    {
                        this._hideEditor();
                        this._moveToAccessibilityBand(false);
                    }
                    else
                    {
                        if (this._summBand && (this._p_summarytype == "top" || this._p_summarytype == "lefttop"))
                        {
                            this._hideEditor();
                            band = this._summBand;
                            this._currentBand = "summary";
                            this._currentDSrow = this._p_currentrow = -2;
                            this._p_currentsubrow = this._curFormat._summrows.length - 1;
                        }
                        else if (this._headBand)
                        {
                            this._hideEditor();
                            band = this._headBand;
                            this._currentBand = "head";
                            this._currentDSrow = this._p_currentrow = -1;
                            this._p_currentsubrow = this._curFormat._headrows.length - 1;
                        }
                    }
                }
            }

            if (band)
            {
                //                accessibility_enable = band.accessibilityenable;
                if (band._isBody && this._p_rowcount <= 0)
                {
                    this._removeAccessibilityCurrentFocus();
                    this._moveToAccessibilityBand(false);
                    this._p_currentcol = this._curFormat._cols.length - 1;
                    this._p_currentcell = -1;
                }
                else
                {
                    if (!hotkey)
                    {
                        this._p_currentcol = this._curFormat._cols.length - 1;
                        this._p_currentcell = this._getAccessibilityLastCellIndex() - 1;
                    }
                    this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell);
                }
            }
        }
        else if (type == "up")
        {
            if (curBand == "summary")
            {
                accessibility_enable = this._summBand.accessibilityenable;
                if (!this._is_band_focus && accessibility_enable)
                {
                    this._moveToAccessibilityBand(false);
                }
                else
                {
                    if (this._bodyBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                    {
                        band = this._bodyBand;
                        this._currentBand = "body";
                        this._currentDSrow = this._p_currentrow = this._p_rowcount - 1;
                        this._p_currentsubrow = 0;
                    }
                    else if (this._headBand)
                    {
                        band = this._headBand;
                        this._currentBand = "head";
                        this._currentDSrow = this._p_currentrow = -1;
                        this._p_currentsubrow = this._curFormat._headrows.length - 1;
                    }
                    else
                    {
                        curBand = "grid";
                    }
                }
            }
            else if (curBand == "body")
            {
                accessibility_enable = this._bodyBand.accessibilityenable;
                if (!this._is_band_focus && accessibility_enable)
                {
                    this._hideEditor();
                    this._moveToAccessibilityBand(false);
                }
                else
                {
                    if (this._summBand && (this._p_summarytype == "top" || this._p_summarytype == "lefttop"))
                    {
                        this._hideEditor();
                        band = this._summBand;
                        this._currentBand = "summary";
                        this._currentDSrow = this._p_currentrow = -2;
                        this._p_currentsubrow = this._curFormat._summrows.length - 1;
                    }
                    else if (this._headBand)
                    {
                        this._hideEditor();
                        band = this._headBand;
                        this._currentBand = "head";
                        this._currentDSrow = this._p_currentrow = -1;
                        this._p_currentsubrow = this._curFormat._headrows.length - 1;
                    }
                    else
                    {
                        curBand = "grid";
                    }
                }
            }
            else if (curBand == "head" && this._p_currentcell <= 0)
            {
                accessibility_enable = this._headBand.accessibilityenable;
                if (!this._is_band_focus && accessibility_enable)
                {
                    this._moveToAccessibilityBand(false);
                }
                else
                {
                    curBand = "grid";
                }
            }

            if (band)
            {
                this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell);
            }
            else if (curBand == "grid")
            {
                this._is_band_focus = false;
                this._currentBand = curBand;

                if (this.accessibilityenable)
                {
                    this._moveToAccessibilityBand(true);
                }
                else
                {
                    retn = this._moveToAccessibilityCell(type);
                }
            }
        }
        else if (type == "down")
        {
            if (curBand == "grid")
            {
                retn = this._setAccessibilityBandFocus("next", true);
            }
            else
            {
                if (curBand == "head")
                {
                    if (this._bodyBand && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                    {
                        this._is_first_bodycell = true;
                        band = this._bodyBand;
                        this._currentBand = "body";
                        this._currentDSrow = this._p_currentrow = 0;
                    }
                    else if (this._summBand)
                    {
                        band = this._summBand;
                        this._currentBand = "summary";
                        this._currentDSrow = this._p_currentrow = -2;
                    }
                }
                else if (curBand == "body" && this._p_summarytype != "top" && this._p_summarytype != "lefttop")
                {
                    if (this._summBand)
                    {
                        this._hideEditor();
                        band = this._summBand;
                        this._currentBand = "summary";
                        this._currentDSrow = this._p_currentrow = -2;
                    }
                    else if (this._bodyBand && this._p_rowcount <= 0)
                    {
                        this._hideEditor();
                        this._accept_arrow = false;
                        retn = false;
                    }
                }
                else if (curBand == "summary" && (this._p_summarytype == "top" || this._p_summarytype == "lefttop"))
                {
                    if (this._bodyBand)
                    {
                        this._is_first_bodycell = true;
                        band = this._bodyBand;
                        this._currentBand = "body";
                        this._currentDSrow = this._p_currentrow = 0;
                    }
                }

                if (band)
                {
                    accessibility_enable = band.accessibilityenable;
                    if (!this._is_band_focus && (accessibility_enable || (this._p_rowcount <= 0 && band._isBody)))
                    {
                        this._moveToAccessibilityBand(false);
                    }
                    else
                    {
                        this._p_currentsubrow = 0;
                        this._moveToPosAccessibilityCell(this._p_currentrow, this._p_currentcell);
                    }
                }
                else if (this._p_currentcell >= this._getAccessibilityLastCellIndex() - 1)
                {
                    this._accept_arrow = false;
                    retn = false;
                }
            }
        }
        return retn;
    };

    _pGrid._getAccessibilityCellIndex = function (cellidx)
    {
        var band = null;
        if (this._currentBand == "body")
        {
            band = this._bodyBand;
        }
        else if (this._currentBand == "head")
        {
            band = this._headBand;
        }
        else if (this._currentBand == "summary")
        {
            band = this._summBand;
        }

        if (band)
        {
            var row = band._get_row(this._getDataRow(this._p_currentrow));
            if (row)
            {
                var cells = row._cells, cellinfo = null;
                for (var i = 0, n = cells.length; i < n; i++)
                {
                    cellinfo = cells[i]._refinfo;
                    if (cellinfo._col <= this._p_currentcol && this._p_currentcol <= (cellinfo._col + cellinfo._colspan - 1))
                    {
                        if (this._p_currentsubrow == 0)
                        {
                            return cells[i]._cellidx;
                        }
                        else
                        {
                            if (cellinfo._row == this._p_currentsubrow)
                                return cells[i]._cellidx;
                        }
                    }
                }
            }
        }
        return (cellidx >= 0) ? cellidx : null;
    };

    _pGrid._getAccessibilityCurrentCell = function (ridx, cidx)
    {
        var cellobj = null;

        if (ridx === undefined || cidx === undefined)
        {
            ridx = -1;
            cidx = -1;
        }
        else if (cidx < 0)
        {
            cidx = this._getAccessibilityCellIndex();
        }

        if (this._currentBand == "body")
        {
            cellobj = this._getCurrentBodyCell(ridx, cidx);
        }
        else
        {
            if (this._currentBand == "head")
                cellobj = this._getCurrentHeadCell(cidx, true);
            else
                cellobj = this._getCurrentSummCell(cidx, true);
        }
        return cellobj;
    };

    _pGrid._getAccessibilityLastCellIndex = function ()
    {
        var cellidx = -1;
        if (this._currentBand == "head" && this._curFormat._headcells)
        {
            cellidx = this._curFormat._headcells.length;
        }
        else if (this._currentBand == "body" && this._curFormat._bodycells)
        {
            cellidx = this._curFormat._bodycells.length;
        }
        else if (this._currentBand == "summary" && this._curFormat._summcells)
        {
            cellidx = this._curFormat._summcells.length;
        }
        return cellidx;
    };

    // band, row의 lastfocus 삭제
    _pGrid._removeAccessibilityCurrentFocus = function (togrid)
    {
        // last focus를 제거해도 focus를 줄때 lastfocus에 해당하는 focus를 읽어주는 현상을 제거하기 위해
        // form에서 해당 component의 focuspath remove해서 처리 2014/03/03 최창열
        var win = this._getWindow();
        if (togrid)
        {
            win._removeFromCurrentFocusPath(this, true);
        }
        else
        {
            if (this._currentBand == "body")
                win._removeFromCurrentFocusPath(this._bodyBand, true);
            else if (this._currentBand == "head")
                win._removeFromCurrentFocusPath(this._headBand, true);
            else if (this._currentBand == "summary")
                win._removeFromCurrentFocusPath(this._summBand, true);
        }
    };

    _pGrid._staticCreateEditControl = function (cellobj, type)
    {
        if (this._p_autoenter != "select")
            return false;

        var next_idx = this._getNextEditableCell(cellobj, type);

        if (next_idx.row > -1 && next_idx.cell > -1)
        {
            var create_cell = this._getCurrentBodyCell(next_idx.row, next_idx.cell);
            if (create_cell && create_cell._hasEditor())
            {
                if (create_cell._static_create === false)
                {
                    this._staticDestroyEditControl(create_cell);

                    var editor = create_cell._createEditor();
                    if (editor)
                    {
                        editor._EditUpdateAll(create_cell._refinfo, create_cell);

                        var control_elem = create_cell.getElement();
                        if (control_elem && !(editor instanceof nexacro._CellButtonControl))
                        {
                            control_elem._refreshControlTabIndex(null, null);
                        }

                        var input_elem = create_cell._getEditorInputElement();
                        if (input_elem && input_elem.handle)
                        {
                            control_elem._refreshControlTabIndex(input_elem.handle, 0);
                        }

                        editor.set_height(0);
                        create_cell._static_create = true;
                        return true;
                    }
                }
            }
        }

        return false;
    };

    _pGrid._staticDestroyEditControl = function (cellobj)
    {
        if (cellobj)
        {
            cellobj._destroyEditor();

            var control_elem = cellobj.getElement();
            if (control_elem)
            {
                control_elem._refreshControlTabIndex(null, -1);
            }
            cellobj._static_create = false;
            return true;
        }

        return false;
    };

    _pGrid._getFirstEditableCell = function (checkHead)
    {
        if (checkHead === undefined)
            checkHead = true;

        var editType;
        if (this._firstEditableCell)
        {
            if (checkHead == false && this._firstEditableCell.row == -1)
            {
                // ignore cache
            }
            else
            {
                return this._firstEditableCell;
            }
        }

        if (checkHead && this._curFormat && this._curFormat._headcells)
        {
            var headcells = this._curFormat._headcells;
            var hlen = headcells.length;

            for (var j = 0; j < hlen; j++)
            {
                var row = -1;
                editType = headcells[j]._getEdittype(row);
                var displayType = headcells[j]._getDisplaytype(row);

                if ((editType !== "" && editType !== "none") || (displayType == "checkboxcontrol" || displayType == "buttoncontrol"))
                {
                    this._firstEditableCell = { row: row, cell: j };
                    return this._firstEditableCell;
                }
            }
        }

        if (this._binddataset && this._curFormat && this._curFormat._bodycells)
        {
            var rlen = this._getGridRowCount();
            var clen = this._curFormat._bodycells.length;

            for (var i = 0; i < rlen; i++)
            {
                for (var j = 0; j < clen; j++)
                {
                    var row = i;
                    if (this._hasTree)
                        row = this._treeIndexes[row];

                    editType = this._curFormat._bodycells[j]._getEdittype(row);

                    if (editType !== "" && editType !== "none")
                    {
                        this._firstEditableCell = { row: row, cell: j };
                        return this._firstEditableCell;
                    }
                }
            }
        }
        this._firstEditableCell = { row: null, cell: null };
        return this._firstEditableCell;
    };

    _pGrid = null;
    //delete _pGrid;
}

//==============================================================================
// GridBandControl
//==============================================================================
if (nexacro._GridBandControl)
{
    var _pGridBand = nexacro._GridBandControl.prototype;
    _pGridBand._skip_mobile_tabfocus = true;
    //==============================================================================
    // GridbandControl : Accessibility Overrides
    //==============================================================================
    _pGridBand._setAccessibilityEnable = function (enable)
    {
        enable = false; // 항상 false로 동작 제약 사항
        nexacro.Component.prototype._setAccessibilityEnable.call(this, enable);
    };

    _pGridBand._getAccessibilityRole = function ()
    {
        // 센스리더 빈줄 방지
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser === "Chrome")
        {
            var rows = this._get_rows();
            if (!rows || rows.length == 0)
            {
                return "null";
            }
        }
        return nexacro.Component.prototype._getAccessibilityRole.call(this);
    };

    //==============================================================================
    // GridbandControl : Accessibility Function
    //==============================================================================
    _pGridBand._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        var grid = this._grid;
        if (grid)
        {
            if (grid._setGridAccessibilityFocus)
            {
                grid._setGridAccessibilityFocus(this);
            }

            var control_elem = this.getElement();
            if (control_elem)
            {
                var rows = this._get_rows();
                if (rows)
                {
                    this.on_apply_prop_accessibilityrole();
                    control_elem.setElementAccessibilityInfoRowCount(rows.length);
                }
            }
        }
    };

    _pGridBand._on_created_accessibility_contents = _pGridBand._on_attach_accessibility_contents_handle;

    _pGridBand = null;
    //delete _pGridBand;
}

//==============================================================================
// GridRowControl
//==============================================================================
if (nexacro._GridRowControl)
{
    var _pGridRow = nexacro._GridRowControl.prototype;
    _pGridRow._skip_mobile_tabfocus = true;
    _pGridRow._on_created_accessibility_contents = function (win)
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementAccessibilityInfoRowIndex(this._rowidx + 1);
        }
    };

    _pGridRow._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        var control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementAccessibilityInfoRowIndex(this._rowidx + 1);
        }
    };

    _pGridRow._setAccessibilityStatFocus = nexacro._emptyFn;

    _pGridRow = null;
    //delete _pGridRow;
}

// GridCell 전용 동작은 GridCell로 분리
//==============================================================================
// GridCellControl
//==============================================================================
if (nexacro._GridCellControl)
{
    var _pGridCell = nexacro._GridCellControl.prototype;
    //==============================================================================
    // GridCellControl : Accessibility Function
    //==============================================================================
    _pGridCell._on_created_accessibility_contents = function (win, enablea11y)
    {
        const env = this._getEnvironment();
        if (!env?._p_enableaccessibility)
            return;

        const grid = this._grid;
        if (grid)
        {
            if (grid._setGridAccessibilityFocus)
            {
                grid._setGridAccessibilityFocus(this);
            }

            let control_elem = this.getElement();
            if (control_elem)
            {
                // 해당 코드 원인 파악해서 연관성 없으면 통합해서 처리
                if (env._a11ytype == 5)
                {
                    if (grid.fillareatype != "none")
                    {
                        if (this._curDisplayType == 'normal' && this.getDisplayText() == undefined)
                        {
                            control_elem.setElementPreventedEvent(true);
                        }
                    }
                }
            }

            this._created_accessibility_process(); // created/attach 공통 코드 함수로 모듈화
        }
    };

    _pGridCell._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {        
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()?._p_enableaccessibility;
        
        if (!enablea11y)
            return; 

        const grid = this._grid;
        if (grid)
        {
            if (grid._setGridAccessibilityFocus)
            {
                grid._setGridAccessibilityFocus(this);
            }

            this._created_accessibility_process(); // created/attach 공통 코드 함수로 모듈화
        }
    };

    _pGridCell._created_accessibility_process = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            let cellinfo = this._refinfo;
            if (cellinfo)
            {
                let col_index = cellinfo._col;
                if (col_index > -1)
                {
                    control_elem.setElementAccessibilityInfoColIndex(col_index + 1);
                }
            }

            // textboxelement의 name을 cell에도 적용하도록 수정
            let text_elem = this._text_elem;
            if (text_elem)
            {
                control_elem.setElementAccessibilityLabelledBy(text_elem.name);
            }

            // display control의 name을 cell에도 적용하도록 수정
            let subcontrol_elem = this._subComp ? this._subComp.getElement() : null;
            if (subcontrol_elem)
            {
                control_elem.setElementAccessibilityLabelledBy(subcontrol_elem.name);
            }

            // checkbox와 radio는 직접 접근하여 처리 (role, status 출력)
            let _display_type = this._getDisplaytype();
            if (_display_type == "checkboxcontrol" || _display_type == "radioitemcontrol")
            {
                control_elem._refreshControlTabIndex(null, null);
            }
        }
    };

    _pGridCell.set_accessibilityrole = function (accessibilityrole)
    {        
        var _display_type = this._getDisplaytype();
        if (_display_type === "treeitemcontrol")
        {
            accessibilityrole = "treeitem";
        }
        else
        {
            /* 센스리더 단축키 지원위한 role 설정 */
            const env = this._getEnvironment();
            if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
            {
                if (accessibilityrole === "gridcell")
                {
                    accessibilityrole = this._getAccessibilityRoleParentType();
                }
                else
                {
                    accessibilityrole = "gridcell";
                }
            }
        }
        nexacro.Component.prototype.set_accessibilityrole.call(this, accessibilityrole);
    };

    _pGridCell._getAccessibilityRole = function ()
    {
        var role = this.accessibilityrole;
        var _display_type = this._getDisplaytype();

        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        var role = this._p_accessibilityrole;
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            if (_display_type === "treeitemcontrol")
            {
                role = "treeitem";
            }
            else
            {
                // Table 모드 단축키 지원을 위해서 cell로 유지하고 role 은 control에 접근하여 지원
                role = "gridcell";
            }
        }
        else
        {
            if (role === "gridcell")
            {
                var _role = this._getAccessibilityRoleParentType();

                if (_role)
                    role = _role;

                if (_display_type === "treeitemcontrol")
                    role = "treeitem";
                else if (this._subComp)
                    role = this._subComp._getAccessibilityRole();
            }
            else if (role === "calendar")
            {
                role = "edit";
            }
        }
        return role;
    };

    /* make label [leftBand + headBand] */
    _pGridCell.__getAccessibilityMakeAddLabelMiddleClass = function ()
    {
        var tmpLabel = "", grid = this._grid, curCellinfo = this._refinfo, i, n;

        /* make cellLabel only bodyBand */
        if (curCellinfo._type == "body" || curCellinfo._type == "summary")
        {
            var headband = grid._headBand;
            var label = "", cells = null, cellinfo = null, leftLabel = "", headLabel = "";

            if (this.parentcell)
            {
                cells = this.parentcell.parent._cells;
            }
            else
            {
                cells = this.parent._cells;
            }

            /* make leftBand label */
            for (i = 0, n = cells.length; i < n; i++)
            {
                let cell = cells[i];
                cellinfo = cell._refinfo;

                if (cellinfo._area == "left")
                {
                    label = cell._getAccessibilityLabel(true) + cell._on_getAccessibilityAdditionalLabel();
                    if (cellinfo._row <= curCellinfo._row && curCellinfo._row <= (cellinfo._row + cellinfo._rowspan - 1))
                    {
                        if (leftLabel)
                            leftLabel += " " + label;
                        else
                            leftLabel = label;
                    }
                }
                else
                {
                    break;
                }
            }

            /* make headBand label */
            if (headband)
            {
                var rows = headband._get_rows();
                var row_len = rows.length;
                if (rows && row_len)
                {
                    cells = rows[0]._cells;

                    for (i = 0, n = cells.length; i < n; i++)
                    {
                        let cell = cells[i];
                        cellinfo = cell._refinfo;

                        var is_currow = row_len == 1 ? true : cellinfo._row == curCellinfo._row ? true : false;
                        if (is_currow && cellinfo._col <= curCellinfo._col && curCellinfo._col <= (cellinfo._colspan + cellinfo._col - 1))
                        {
                            label = cell._getAccessibilityLabel(true) + cell._on_getAccessibilityAdditionalLabel();
                            if (headLabel)
                                headLabel = headLabel + " " + label;
                            else
                                headLabel = label;
                        }
                    }
                }
            }

            /* combine headBand & leftBand label */
            if (curCellinfo._area == "left")
            {
                if (headLabel)
                    tmpLabel += " " + headLabel;
            }
            else
            {
                if (grid.accessibilityreadbandlabel)    
                {
                    tmpLabel += " " + leftLabel + " " + headLabel;
                }
                else
                {
                    if (leftLabel && grid._beforegridrowpos != grid._p_currentrow)
                        tmpLabel += " " + leftLabel;

                    if (grid._beforegridcolpos != grid._p_currentcol
                        || (grid._is_first_bodycell && (grid._p_currentcell == 0 || grid._p_currentrow == grid._p_rowcount - 1)))
                    {
                        if (headLabel)
                        {
                            if (tmpLabel)
                                tmpLabel = tmpLabel + " " + headLabel;
                            else
                                tmpLabel = headLabel;
                        }
                    }
                }
            }
        }

        return tmpLabel;
    };

    _pGridCell._getAccessibilityRoleParentType = function ()
    {
        var cellinfo = this._refinfo;
        var role = this._p_accessibilityrole;

        if (cellinfo && cellinfo._type == "head")
        {
            role = "columnheader";
        }

        return role;
    };

    _pGridCell._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";
        var displaytype = this._getDisplaytype();
        var displaytext = this._displaytext;

        const env = this._getEnvironment();
        if (env?._a11ytype > 3 || (displaytype != "checkboxcontrol" && displaytype != "buttoncontrol"))
        {
            add_label = (displaytext ? displaytext : "");
        }
        else
        {
            // check editcontrol(edit, mask, combo, calendar, multicombo, textarea, button, image, checkbox)
            var is_edit_control = (displaytype != "treeitemcontrol" && displaytype.indexOf("control") > -1);
            if (!is_edit_control)
            {
                add_label = (displaytext ? displaytext : "");
            }
        }

        return add_label;
    };

    _pGridCell = null;
};

//==============================================================================
// CellControl
//==============================================================================
if (nexacro._CellControl)
{
    var _pCellControl = nexacro._CellControl.prototype;
    //==============================================================================
    // CellControl : Accessibility Function
    //==============================================================================
    _pCellControl._on_create_accessibility_contents = function ()
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            if (env._a11ytype < 4)
            {
                const cellinfo = this._refinfo;
                const edittype = cellinfo ? cellinfo._getEdittype(this._getDataRow()) : null;

                // edittype이 radioitem or checkbox 이면 hidden 처리 안하고 role 출력 지원
                const subcomp = this._subComp;
                if (subcomp && (!edittype || (edittype != "checkbox" && edittype != "radioitem")))
                {
                    subcomp._setAccessibilityStatHidden(true);
                }
            }
        }
    };

    _pCellControl._on_created_accessibility_contents = function (win)
    {
        // GridCell 전용 코드라서  GridCell 재정의 함수로 옮김
    };

    _pCellControl._on_attach_accessibility_contents_handle = function ()
    {
        // GridCell 전용 코드라서  GridCell 재정의 함수로 옮김
    };

    _pCellControl.on_apply_prop_accessibilitylabel = function ()
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            let label = this._getAccessibilityLabel();
            if (this._subComp)
            {
                this._subComp.set_accessibilitylabel(label); // cell control의 name 지정
            }
            control_elem.setElementAccessibilityParentLabel(this._getAccessibilityMakeAddLabel());
        }
    };

    _pCellControl.on_apply_accessibility = function ()
    {
        nexacro.Component.prototype.on_apply_accessibility.call(this);

        if (this._subComp)
        {
            this._subComp.on_apply_accessibility();
        }
    };

    _pCellControl.on_apply_prop_accessibilityrole = function ()
    {
        nexacro.Component.prototype.on_apply_prop_accessibilityrole.call(this);
    };

    _pCellControl.on_apply_prop_accessibilityenable = function ()
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            this._setAccessibilityEnable(this._p_accessibilityenable);
            control_elem.setElementAccessibilityStatHidden(!this._p_accessibilityenable);
        }
    };

    _pCellControl._setAccessibilityStatExpanded = function (expanded)
    {
        nexacro.Component.prototype._setAccessibilityStatExpanded.call(this, expanded);

        var subcomp = this._subComp;
        if (subcomp)
        {
            subcomp._setAccessibilityStatExpanded(expanded);
        }
    };

    _pCellControl._setAccessibilityStatLive = function (v)
    {
        this._accessibilitylive = v;
        var subcomp = this._subComp;
        if (subcomp)
        {
            subcomp._setAccessibilityStatLive(v);
        }
    };

    _pCellControl._getAccessibilityRoleParentType = function () { };// parent 구조에 따라 다르므로 재정의하여 사용.

    _pCellControl._setAccessibilityStatFocus = function ()
    {
        const env = this._getEnvironment();
        if (env?._a11ytype > 3)
            return;
        else if (env?._a11ytype < 4 && nexacro._Browser === "Chrome" && !this._isComponentKeydownAction())
            return;

        this._setAccessibilityStatSelected(this._p_selected);

        // refresh accessibility info        
        this.on_apply_accessibility();

        var editor = this._editor;
        var subcomp = this._subcomp;

        if (editor && editor._p_visible && editor._adjust_width > 0)
        {
            editor._setAccessibilityStatFocus();
        }
        else if (subcomp && this._curDisplayType != "treeitemcontrol")
        {
            subcomp._setAccessibilityStatFocus();
        }
        else
        {
            nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
        }
    };

    _pCellControl._getAccessibilityLabel = function ()
    {
        var tmpLabel = "";

        /* make cell accessibility label */
        tmpLabel = nexacro.Component.prototype._getAccessibilityLabel.call(this);

        /* accessibility stat setting */
        var subComp = this._subComp;
        if (subComp)
        {
            var displayType = this._curDisplayType;

            if (displayType == "treeitemcontrol")
            {
                var datarow = this._getDataRow();
                var cellinfo = this._refinfo;
                var state = this._getTreeStatus();
                var level = cellinfo._getTreeLevel(datarow);
                var startlevel = cellinfo._getTreeStartLevel(datarow);

                switch (state)
                {
                    case 0:
                        this._setAccessibilityStatExpanded(false);
                        break;
                    case 1:
                        this._setAccessibilityStatExpanded(true);
                        break;
                    default:
                        this._setAccessibilityStatExpanded(undefined);
                }
                this._setAccessibilityInfoLevel(level - startlevel + 1);
            }
        }
        return tmpLabel;
    };

    _pCellControl.__getAccessibilityMakeAddLabelMiddleClass = function ()   // parent 구조에 따라 다르므로 재정의하여 사용.
    {
        return "";
    };

    _pCellControl._getAccessibilityMakeAddLabel = function ()
    {
        var tmpLabel = "", view = this._view;

        var desclevel = this._getDescLevel();
        if (desclevel == "none" || desclevel == "child")
            return "";

        // accessibilitydesclevel이 all 일때만 동작
        if (view && view._getAccessibilityDescLevel() == "all")
        {
            if (view && view._isAccessibilityEnable() && view._control_element)
            {
                // 모바일은 Grid에 건너뛰기 때문에 설정, 데스크탑은 accessibilityenable이 false 일때 설정
                const env = this._getEnvironment();
                if (env?._a11ytype > 3 || !this._isAccessibilityEnable())
                {
                    var bandid = "head";
                    if (!view._headBand)
                    {
                        if (view._summBand && view._p_summarytype === "top")
                        {
                            bandid = "summ";
                        }
                        else if (view._bodyBand)
                        {
                            bandid = "body";
                        }
                    }

                    // fitst band
                    if (this._band.id === bandid)
                    {
                        tmpLabel = view._getAccessibilityLabel();

                        // 모바일에서 처음 cell에 초점 이동 시 describedby로 grid 정보 출력 (18 버전에서 보류)
                        //this._setAccessibilityDescriptionBy(view._unique_id);
                    }
                }
            }
        }

        /* make cellLabel parent */
        tmpLabel += this.__getAccessibilityMakeAddLabelMiddleClass();
        //trace("_pCellControl._getAccessibilityMakeAddLabel",this.id, tmpLabel);
        return tmpLabel;
    };

    _pCellControl._setAccessibilityNotifyEvent = function (direction)
    {
        var label = this._getAccessibilityLabel();
        label = label.trim();
        this._setAccessibilityLabel(label);
        return nexacro.Component.prototype._setAccessibilityNotifyEvent.call(this, (direction && direction > 0) ? 0 : 1);
    };

    _pCellControl._getEditorInputElement = function ()
    {
        // inputelement 찾는 함수
        var editor = this._editor;
        if (editor && editor._has_inputElement)
        {
            if (editor._p_calendaredit)
                editor = editor._p_calendaredit;
            else if (editor._p_comboedit)
                editor = editor._p_comboedit;

            return editor._input_element;
        }
        return null;
    };

    _pCellControl = null;
    //delete _pCellControl;
}

//==============================================================================
// CellExpandControl
//==============================================================================
if (nexacro._CellExpandControl)
{
    var _pCellExpand = nexacro._CellExpandControl.prototype;
    //==============================================================================
    // CellExpandControl : Accessibility Function
    //==============================================================================
    _pCellExpand._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellExpand = null;
    //delete _pCellExpand;
}

//==============================================================================
// CellProgressBarControl
//==============================================================================
if (nexacro._CellProgressBarControl)
{
    var _pCellBar = nexacro._CellProgressBarControl.prototype;
    //==============================================================================
    // CellProgressBarControl : Accessibility Function
    //==============================================================================
    _pCellBar._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellBar = null;
    //delete _pCellBar
}

//==============================================================================
// CellEditControl
//==============================================================================
if (nexacro._CellEditControl)
{
    var _pCellEdit = nexacro._CellEditControl.prototype;
    _pCellEdit._skip_mobile_tabfocus = true;
    //==============================================================================
    // CellEditControl : Override
    //==============================================================================
    _pCellEdit._on_created_accessibility_contents = function (win, enablea11y)
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var input_elem = this._input_element;
            if (input_elem)
            {
                if (env._a11ytype == 4)
                {
                    if (this._p_accessibilitydesclevel != "none" && this._p_accessibilitydesclevel != "child")
                    {
                        this._setAccessibilityActiveDescendant(input_elem, this._p_parent);
                    }
                }
            }
        }
    };

    _pCellEdit._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility && env?._a11ytype == 4)
        {
            if (this._p_accessibilitydesclevel != "none" && this._p_accessibilitydesclevel != "child")
            {
                this._setAccessibilityActiveDescendant(this._input_element, this._p_parent);
            }
        }
    };

    _pCellEdit._isFocusAcceptable = function ()
    {
        if (this._displaymode)
            return false;
        else
            return nexacro.Component.prototype._isFocusAcceptable.call(this);
    };

    //==============================================================================
    // CellEditControl : Accessibility Function
    //==============================================================================
    _pCellEdit._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellEdit._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellEdit = null;
    //delete _pCellEdit;
}

//==============================================================================
// CellTextAreaControl
//==============================================================================
if (nexacro._CellTextAreaControl)
{
    var _pCellTextArea = nexacro._CellTextAreaControl.prototype;
    //==============================================================================
    // CellTextAreaControl : Accessibility Function
    //==============================================================================
    _pCellTextArea._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellTextArea._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellTextArea = null;
    //delete _pCellTextArea;
}

//==============================================================================
// CellMaskEditControl
//==============================================================================
if (nexacro._CellMaskEditControl)
{
    var _pCellMaskEdit = nexacro._CellMaskEditControl.prototype;
    //==============================================================================
    // CellMaskEditControl : Override
    //==============================================================================
    _pCellMaskEdit._isFocusAcceptable = function ()
    {
        if (this._displaymode)
            return false;
        else
            return nexacro.Component.prototype._isFocusAcceptable.call(this);
    };

    //==============================================================================
    // CellMaskEditControl : Accessibility Function
    //==============================================================================
    _pCellMaskEdit._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellMaskEdit._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellMaskEdit = null;
    //delete _pCellMaskEdit;
}

//==============================================================================
// CellMaskEditControl
//==============================================================================
if (nexacro._CellCalendarControl)
{
    var _pCellCalendar = nexacro._CellCalendarControl.prototype;

    _pCellCalendar._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellCalendar._isFocusAcceptable = function ()
    {
        if (this._displaymode)
            return false;
        else
            return nexacro.Component.prototype._isFocusAcceptable.call(this);
    };

    _pCellCalendar._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        if (cellobj)
        {
            var parent_label = cellobj._getAccessibilityMakeAddLabel();
            var cell_label = cellobj._getAccessibilityLabel();
            var cell_description = cellobj._getAccessibilityDescription();
            var cell_action = cellobj._getAccessibilityAction();


            var calendaredit = this._p_calendaredit;
            if (calendaredit)
            {
                calendaredit._control_element.setElementAccessibilityLabel(cell_label);
                calendaredit._control_element.setElementAccessibilityAction(cell_action);
                calendaredit._control_element.setElementAccessibilityDescription(cell_description);
                calendaredit._control_element.setElementAccessibilityParentLabel(parent_label);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellCalendar._getAccessibilityLabel = function ()
    {
        var cellobj = this._cellobj;
        if (cellobj)
        {
            return cellobj._getAccessibilityLabel();
        }
        return "";
    };

    _pCellCalendar._getAccessibilityDescription = function ()
    {
        var cellobj = this._cellobj;
        if (cellobj)
        {
            return cellobj._getAccessibilityDescription();
        }
        return "";
    };

    _pCellCalendar._getAccessibilityAction = function ()
    {
        var cellobj = this._cellobj;
        if (cellobj)
        {
            return cellobj._getAccessibilityAction();
        }
        return "";
    };

    _pCellCalendar = null;
    //delete _pCellCalendar;
}

if (nexacro._CellComboControl)
{
    var _pCellCombo = nexacro._CellComboControl.prototype;

    _pCellCombo._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellCombo._isFocusAcceptable = function ()
    {
        if (this._displaymode)
            return false;
        else
            return nexacro.Component.prototype._isFocusAcceptable.call(this);
    };

    _pCellCombo._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this._p_comboedit ? this._p_comboedit.getElement() : null;
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Combo.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellCombo = null;
    //delete _pCellCombo;
}

if (nexacro._CellCheckboxControlBase)
{
    var _pCellCheckboxBase = nexacro._CellCheckboxControlBase.prototype;

    _pCellCheckboxBase._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var checked = this.isChecked();
            this._setAccessibilityStatChecked(checked);
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellCheckboxBase = null;
    //delete _pCellCheckboxBase;
}

if (nexacro._CellCheckboxControl)
{
    var _pCellCheckbox = nexacro._CellCheckboxControl.prototype;
    
    _pCellCheckbox._isFocusAcceptable = function ()
    {
        return false;
    };

    _pCellCheckbox = null;
    //delete _pCellCheckbox;
}

if (nexacro._CellRadioItemControl)
{
    var _pCellRadioItem = nexacro._CellRadioItemControl.prototype;

    _pCellRadioItem._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }

            var checked = !!this._p_value;
            this._setAccessibilityStatChecked(checked);
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellRadioItem = null;
    //delete _pCellRadioItem;
}

if (nexacro._CellImageControl)
{
    var _pCellImage = nexacro._CellImageControl.prototype;

    _pCellImage._getAccessibilityRole = function ()
    {
        const env = this._getEnvironment();
        if (env?._a11ytype < 4 && nexacro._Browser == "Chrome")
        {
            return "";
        }
        else
        {
            var cellobj = this._cellobj;
            if (cellobj)
            {
                if (cellobj._p_accessibilityrole == "gridcell")
                {
                    return this._p_accessibilityrole;
                }

                return cellobj._p_accessibilityrole;
            }

            return "none";
        }
    };

    _pCellImage._isFocusAcceptable = function ()
    {
        return false; // cell의 image contole은 초점 이동 대상이 아님
    };

    _pCellImage._setAccessibilityStatFocus = function ()
    {
        var cellobj = this._cellobj;
        var control_elem = this.getElement();
        if (cellobj && control_elem)
        {
            var cell_control_elem = cellobj.getElement();
            if (cell_control_elem)
            {
                control_elem.setElementAccessibilityLabel(cell_control_elem.accessibilityreadlabel);
            }
        }
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this);
    };

    _pCellImage = null;
    //delete _pCellImage;
}

if (nexacro._CellButtonControl)
{
    var _pCellButton = nexacro._CellButtonControl.prototype;
    _pCellButton._skip_mobile_tabfocus = true;

    _pCellButton._isFocusAcceptable = function ()
    {
        if (this._displaymode)
            return false;
        else
            return this._is_focus_accept;
    }

    _pCellButton._getAccessibilityRole = function ()
    {
        /* 센스리더 단축키 지원위한 role 설정 */
        if (nexacro._Browser == "Chrome")
        {
            return nexacro.Component.prototype._getAccessibilityRole.call(this);
        }
        return this._cellobj ? this._cellobj._p_accessibilityrole : this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pCellButton = null;
    //delete _pCellButton;
}

if (nexacro._CellTreeControl)
{
    var _pCellTree = nexacro._CellTreeControl.prototype;
    _pCellTree._skip_mobile_tabfocus = true;
    //_pCellTreeControl.accessibilityenable = false
    //==============================================================================
    // CellTree : Accessibility Function
    //==============================================================================
    _pCellTree._on_created_accessibility_contents = function (win, enablea11y)
    {
        const env = this._getEnvironment();
        if (env?._p_enableaccessibility)
        {
            if (this._rightline_ctrl)
            {
                this._rightline_ctrl._setAccessibilityStatHidden(true);
            }

            if (this._upline_ctrl)
            {
                this._upline_ctrl._setAccessibilityStatHidden(true);
            }

            if (this._downline_ctrl)
            {
                this._downline_ctrl._setAccessibilityStatHidden(true);
            }

            this._setAccessibilityStatHidden(true);
        };
    };

    _pCellTree._setAccessibilityStatExpanded = function (expanded)
    {
        if (this._text_ctrl)
        {
            this._text_ctrl._setAccessibilityStatExpanded(expanded);
        }
    };

    _pCellTree._setAccessibilityStatLive = function (v)
    {
        this._accessibilitylive = v;
        if (this._text_ctrl)
            this._text_ctrl._setAccessibilityStatLive(v);
    };

    _pCellTree._setAccessibilityStatFocus = function (evt_name)
    {
        var cellobj = this._cellobj;
        var label = cellobj._getAccessibilityLabel();
        label = label.trim();
        this._setAccessibilityLabel(label);

        var datarow = cellobj._getDataRow();
        var level = this._cellinfo._getTreeLevel(datarow);
        var startlevel = this._cellinfo._getTreeStartLevel(datarow);

        if (cellobj._getTreeStatus() == 0)
        {
            if (this._text_ctrl)
                this._text_ctrl._setAccessibilityStatExpanded(false);
        }
        else
        {
            if (this._text_ctrl)
                this._text_ctrl._setAccessibilityStatExpanded(true);
        }

        this._setAccessibilityInfoLevel(level - startlevel + 1);
        nexacro.Component.prototype._setAccessibilityStatFocus.call(this, evt_name);
    };

    _pCellTree = null;
    //delete _pCellTree;
}

if (nexacro._CellTreeLineControl)
{
    var _pCellTreeLine = nexacro._CellTreeLineControl.prototype;
    _pCellTreeLine._skip_mobile_tabfocus = true;

    _pCellTreeLine = null;
    //delete _pCellTreeLine;
}

if (nexacro._TreeItemTextControl)
{
    var _pTreeItemTextControl = nexacro._TreeItemTextControl.prototype;

    _pTreeItemTextControl.accessibilityrole = "treeitem";

    _pTreeItemTextControl._getAccessibilityLabel = function ()
    {
        var cellobj = this._p_parent._cellobj;
        var datarow = cellobj._getDataRow();
        var cellinfo = cellobj._refinfo;
        var state = cellobj._getTreeStatus();
        var level = cellinfo._getTreeLevel(datarow);
        var startlevel = cellinfo._getTreeStartLevel(datarow);

        switch (state)
        {
            case 0:
                this._setAccessibilityStatExpanded(false);
                break;
            case 1:
                this._setAccessibilityStatExpanded(true);
                break;
            default:
                this._setAccessibilityStatExpanded("");
        }

        level = level - startlevel + 1;
        this._setAccessibilityInfoLevel(level);

        var label = cellobj._getAccessibilityLabel();

        if (!nexacro._isDesktop())
            label += " level " + level;

        return label;
    };

    _pTreeItemTextControl.on_created_contents = function (win)
    {
        nexacro.Static.prototype.on_created_contents.call(this, win);
        this.on_apply_accessibility();
    };

    _pTreeItemTextControl = null;
    //delete _pTreeItemTextControl;
}

if (nexacro.ScrollBarControl)
{
    var _pScrollBar = nexacro.ScrollBarControl.prototype;
    _pScrollBar._p_accessibilityenable = false;

    _pScrollBar.onCreatedAfter = function (resultCreated)
    {
        this._setAccessibilityStatHidden(true);
    };

    _pScrollBar = null;
}

//ImageViewer
if (nexacro.ImageViewer)
{
    var _pImageViewer = nexacro.ImageViewer.prototype;
    //==============================================================================
    // ImageViewer : Accessibility Function
    //==============================================================================
    _pImageViewer._on_created_accessibility_contents = _pImageViewer._on_attach_accessibility_contents_handle;
    _pImageViewer._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        let env;             
        if (enablea11y == undefined)
        {
            env = this._getEnvironment();
            enablea11y = env?._p_enableaccessibility;
        }

        if (env && enablea11y)
        {
            var image = this._image;
            var image_text = this._imagetext;

			if (env._a11ytype == 4)
			{
				let role = this._p_accessibilityrole;
				if (this._isAccessibilityRoleHeading())
				{
					if (image_text)
					{
						image_text._setAccessibilityRole(role);
						if (image)
						{
							image._setAccessibilityStatHidden(true);
						}
					}
					else
					{
						if (image)
						{
							image._setAccessibilityRole(role);
						}
						else
						{
							this._setAccessibilityTextContent(" ");
						}
					}
				}
				else
				{
					if (image_text)
					{
						image_text._setAccessibilityRole("none");
					}
				}
			}
            else
            {
                if (this._isAccessibilityRoleHeading())
                {
                    // heading role 설정시에는 image role 포함하여 설정하여 출력( HTML접근성 처리)
                    if (image_text)
                    {
                        image_text._setAccessibilityStatHidden(true);

                        if (image)
                        {
                            image._setAccessibilityRole("image");
                        }
                        else
                        {
                            image_text._setAccessibilityRole("image");
                            image_text._setAccessibilityStatHidden(false);
                        }
                    }
                }
                else
                {
                    if (image)
                    {
                        image._setAccessibilityStatHidden(true);
                    }

                    if (image_text)
                    {
                        image_text._setAccessibilityStatHidden(true);
                    }
                }
            }
        }
    };

    _pImageViewer._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";
        if (this._imagetext)
        {
            // imageviewer 구조적 특성으로 label에 displaytext 추가
            add_label += this._displaytext;
        }
        return add_label;
    };

    _pImageViewer = null;
    //delete _pImageViewer;
}


//DatePicker
if (nexacro._DatePickerBodyControl)
{
    var _pDatePickerBodyControl = nexacro._DatePickerBodyControl.prototype;
    _pDatePickerBodyControl._getAccessibilityRole = function ()
    {
        var calendar = this._p_parent._p_parent;

        if (calendar._p_accessibilityrole == "calendar")
        {
            return "datepicker";
        }

        return calendar._p_accessibilityrole;
    };

    _pDatePickerBodyControl._setCalendarAccessibility = function ()
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var calendar = this._p_parent._p_parent;
            var date = this._date;
            var cal_value = date.str_year + date.str_month + date.str_day;

            if (!calendar._masktypeobj)
                return;

            var editmask_type = calendar._masktypeobj.getEditFormatType();
            if (editmask_type == 1)
                cal_value = calendar._p_value ? calendar._p_value : "";
            else if (editmask_type == 2)
                cal_value += calendar._p_value ? calendar._p_value.substr(8) : "";

            var accessibility_value = calendar._masktypeobj.applyMask(cal_value);
            if (calendar._p_type != "monthonly")
            {
                /* popup calendar 선택 출력 */
                calendar._popupcontrol._setAccessibilityLabel(accessibility_value);
                calendar._p_calendaredit.setCaretPos(-1); // 공백 읽음 방지 by 스펙 변경이 필요
            }
            else
            {
                this._p_parent._setAccessibilityLabel(accessibility_value);
                this._setAccessibilityLabel(accessibility_value);
            }

            if (env._a11ytype != 2)
            {
                // 사용하지 않아도 정상 동작 (센스리더)
                nexacro._notifyAccessibilityValue(this._control_element, accessibility_value, "daychange", env._a11ytype);
            }
        }
    };

    _pDatePickerBodyControl._getAccessibilityLabel = function ()
    {
        var calendar = this._p_parent._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityLabel();
        }
        return "";
    };

    _pDatePickerBodyControl._getAccessibilityDescription = function ()
    {
        var calendar = this._p_parent._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityDescription();
        }
        return "";
    };

    _pDatePickerBodyControl._getAccessibilityAction = function ()
    {
        var calendar = this._p_parent._p_parent;
        if (calendar)
        {
            return calendar._getAccessibilityAction();
        }
        return "";
    };

    _pDatePickerBodyControl = null;
}

if (nexacro._WaitControl)
{
    var __pWaitControl = nexacro._WaitControl.prototype;
    __pWaitControl._getAccessibilityRole = function ()
    {
        return "treeitem";
    };
    __pWaitControl._skip_mobile_tabfocus = true;
    __pWaitControl = null;
}

if (nexacro.Spin)
{
    var _pSpin = nexacro.Spin.prototype;
    //==============================================================================
    // nexacro.Spin : Override
    //==============================================================================
    _pSpin.on_apply_accessibility = function ()
    {
        nexacro.Component.prototype.on_apply_accessibility.call(this);
        if (this.spinedit)
        {
            this.spinedit.on_apply_accessibility();
        }
    };

    //==============================================================================
    // nexacro.Spin : Accessibility Function
    //==============================================================================
    _pSpin._on_created_accessibility_contents = function ()
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            this._setAccessibilityInfoValueMax(this._p_max);
            this._setAccessibilityInfoValueMin(this._p_min);
            this._setAccessibilityInfoValueCur(this._p_value);

            if (this._p_accessibilitydesclevel != "none" && this._p_accessibilitydesclevel != "child")
            {
                this._setAccessibilityActiveDescendant(this._p_spinedit._input_element);
            }

            if (env._a11ytype == 5)
            {
                this._p_spinedit._setAccessibilityStatHidden(true);
            }

            if (this._p_spinupbutton)
            {
                this._p_spinupbutton._setAccessibilityStatHidden(true);
            }

            if (this._p_spindownbutton)
            {
                this._p_spindownbutton._setAccessibilityStatHidden(true);
            }

            this._want_arrow = false;
        }
    };

    _pSpin._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        let env;             
        if (enablea11y == undefined)
        {
            env = this._getEnvironment();
            enablea11y = env?._p_enableaccessibility;
        }

        if (env && enablea11y)
        {
            this._setAccessibilityInfoValueMax(this._p_max);
            this._setAccessibilityInfoValueMin(this._p_min);
            this._setAccessibilityInfoValueCur(this._p_value);
            this._updateAccessibilityLabel();

            var spinupbutton = this._p_spinupbutton;
            var spindownbutton = this._p_spindownbutton;

            if (spinupbutton && spindownbutton)
            {
                if (env._a11ytype != 5 && env._a11ytype != 4)
                {
                    spinupbutton._setAccessibilityStatHidden(true);
                    spindownbutton._setAccessibilityStatHidden(true);
                }
                else
                {
                    spinupbutton.set_accessibilitylabel("spinnupbutton");
                    spindownbutton.set_accessibilitylabel("spinndownbutton");
                }
            }
            this._want_arrow = false;
        }
    };

    _pSpin._on_getAccessibilityAdditionalLabel = function ()
    {
        if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
        {
            return "";
        }
        else
        {
            var label = "";
            var spinedit = this._p_spinedit;
            if (spinedit)
            {
                if (spinedit._p_text)
                    label = spinedit._p_text;
                else if (this._default_value != null)
                    label = this._default_value;
                else if (this._p_displaynulltext)
                    label = this._p_displaynulltext;
            }
            return label;// + " " + this._p_min + " " + this._p_max;
        }
    };

    _pSpin._getAccessibilityReadLabel = function (bwholeread)
    {
        var _readlabel = nexacro.Component.prototype._getAccessibilityReadLabel.call(this);
        if (bwholeread && this.spinedit._input_element && this._status != "focus")
        {
            if (!this.spinedit._input_element._wantAccessibilityAdditionalLabel || !this.spinedit._input_element._wantAccessibilityAdditionalLabel())
            {
                _readlabel = this._p_text + " " + _readlabel;
            }
        }
        return _readlabel;
    };

    _pSpin = null;
    //delete _pSpin;
}

if (nexacro._MenuItemControl)
{
    var _pMenuItemControl = nexacro._MenuItemControl.prototype;
    //==============================================================================
    // MenuitemControl : Override
    //==============================================================================

    //==============================================================================
    // MenuitemControl : Accessibility Function
    //==============================================================================
    _pMenuItemControl.on_apply_accessibility = function ()
    {
        nexacro.Component.prototype.on_apply_accessibility.call(this);

        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var menu = this._getRootComponent(this);
            if (menu && menu._innerdataset)
            {
                var rowcnt = menu._innerdataset.getRowCount();
                this._setAccessibilityInfoCount(rowcnt);
            }

            // menu의 level과 index는은 0부터 시작이지만, 접근성은 1부터 시작
            this._setAccessibilityInfoLevel((+this.level) + 1);
            this._setAccessibilityInfoIndex(this.index + 1);
            this._setAccessibilityFlagHasPopup(this._canExpand);
        }
    };

    _pMenuItemControl = null;
}

if (nexacro._PopupMenuItemControl)
{
    var _pPopupMenuItemControl = nexacro._PopupMenuItemControl.prototype;

    _pPopupMenuItemControl.onCreatedAfter = function (resultCreated)
    {
        var control_elem = this.getElement();
        if (control_elem && control_elem.handle)
        {
            control_elem._refreshControlTabIndex(control_elem.handle, -1);
        }
    };

    _pPopupMenuItemControl = null;
}

//==============================================================================
// ListView
//==============================================================================
if (nexacro.ListView)
{
    var _pListView = nexacro.ListView.prototype;

    //==============================================================================
    // ListView : Override
    //==============================================================================
    _pListView._on_getAccessibilityAdditionalLabel = function ()
    {
        var add_label = "";
        if (!this._formats || !this._formats._getCurrentItem())
        {
            add_label = this.nodatatext;
        }
        return add_label;
    };

    //==============================================================================
    // ListView : Accessibility Function
    //==============================================================================
    _pListView._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        if(!comp_focus)
            return;

        var _is_focusin_process = true;
        if (win && win._cur_ldown_elem)
            _is_focusin_process = false;

        if (refer_comp && _is_focusin_process)
        {
            var refer_cell = this._findObj(refer_comp);
            var bandobj = refer_cell.bandobj;
            var cellobj = refer_cell.cellobj;
            var firstcellobj;

            if (bandobj && cellobj) // cell
            {
                this.showEditor(false);
                this.setSelect(cellobj._rowidx, cellobj._bandidx, cellobj._cellidx);

                if (this._p_autoenter == "select")
                {
                    var editor = cellobj._editor;
                    if (editor && cellobj._static_create)
                    {
                        cellobj._on_focus(true);
                        editor.set_height(cellobj._getControlRect().height);
                        editor._on_focus()
                    }
                    else
                    {
                        cellobj._on_focus(true);
                    }
                }
                else
                {
                    cellobj._on_focus(true);
                }

                cellobj.on_apply_accessibility();

                this._staticCreateEditControl(cellobj, "prev");
                this._staticCreateEditControl(cellobj, "next");
            }
            else if (bandobj)
            {
                if (refer_comp instanceof nexacro._ListViewBandExpandbarControl)
                {
                    refer_comp._apply_setfocus();
                }
                else // band
                {
                    bandobj._on_focus(true);

                    var cells = this._getBandCells(bandobj);
                    if (cells)
                    {
                        firstcellobj = this._findEditableCell(bandobj, 0, 1);
                        if (firstcellobj && firstcellobj._rowidx == bandobj._itemindex && firstcellobj._bandidx == bandobj._itemsubidx)
                            firstcellobj.on_apply_accessibility();
                    }

                    this._staticCreateEditControl(bandobj, "prev");
                    this._staticCreateEditControl(bandobj, "next");
                }
            }
            else // listview
            {
                refer_comp._on_focus(true);

                var firstcell = this._getFirstEditableCell();
                if (firstcell.row >= 0)
                {
                    firstcellobj = this._getCurrentCell(firstcell.row, firstcell.band, firstcell.cell);
                    firstcellobj.on_apply_accessibility();
                }

                //this._staticCreateEditControl(refer_comp, "prev");
                this._staticCreateEditControl(refer_comp, "next");
            }
        }
    };

    _pListView._accessibility_focusout = function (refer_comp, related_comp, comp_init)
    {
        nexacro.Component.prototype._accessibility_focusout.call(this, refer_comp, related_comp, comp_init);

        if (comp_init)
        {
            if (!related_comp)
            {
                // deactivate시 초기화
                var _win = this._getWindow();
                if (_win)
                {
                    _win._is_fire_sys_keydown = false;
                    _win._is_fire_sys_focusin = false;
                }
            }
        }
    };

    _pListView._staticCreateEditControl = function (obj, type)
    {
        if (this._p_autoenter != "select")
            return false;

        if (obj)
        {
            var rowidx, bandidx, cellidx;
            var direction = type == "prev" ? -1 : 1;

            if (obj instanceof nexacro.ListView)
            {
                rowidx = 0;
                bandidx = 0;
                cellidx = 0;
            }
            else if (obj instanceof nexacro._ListViewBandControl)
            {
                rowidx = obj._rowidx;
                bandidx = obj._itemsubidx;
                cellidx = type == "prev" ? -1 : 0;
            }
            else if (obj instanceof nexacro._ListViewCellControl)
            {
                rowidx = obj._rowidx;
                bandidx = obj._bandidx;
                cellidx = obj._cellidx + (type == "prev" ? -1 : 1);
            }

            var band = this._getCurrentBand(rowidx, bandidx);
            var cell = null;

            for (var i = 0; i < 2; i++)
            {
                if (band)
                {
                    if (direction == -1)
                    {
                        cell = this._findEditableCell(band, cellidx, direction);

                        if (!cell)
                        {
                            if (bandidx > 0)
                            {
                                bandidx--;
                            }
                            else
                            {
                                rowidx--;

                                if (this._isExistSubSlot(rowidx))
                                    bandidx = this._getPanelSlotCount() - 1;
                                else
                                    bandidx = 0;
                            }

                            if (band = this._getCurrentBand(rowidx, bandidx))
                            {
                                var cells = this._getBandCells(band);
                                cellidx = cells ? cells.length - 1 : 0;
                                cell = this._findEditableCell(band, cellidx, -1);
                            }
                        }
                    }
                    else
                    {
                        cell = this._findEditableCell(band, cellidx, direction);

                        if (!cell)
                        {
                            if (bandidx < this._getPanelSlotCount() - 1 && this._isExistSubSlot(rowidx))
                            {
                                bandidx++;
                            }
                            else
                            {
                                rowidx++;
                                bandidx = 0;
                            }

                            if (band = this._getCurrentBand(rowidx, bandidx))
                            {
                                cellidx = 0;
                                cell = this._findEditableCell(band, cellidx, 1);
                            }
                        }
                    }

                    if (cell && cell._hasEditor())
                    {
                        if (cell._static_create === false)
                        {
                            this._staticDestroyEditControl(cell);

                            var editor = cell._createEditor();
                            if (editor)
                            {
                                editor._EditUpdateAll(cell._refinfo, cell);

                                var control_elem = cell.getElement();
                                if (control_elem && !(editor instanceof nexacro._CellButtonControl))
                                {
                                    control_elem._refreshControlTabIndex(null, null);
                                }

                                var input_elem = cell._getEditorInputElement();
                                if (input_elem && input_elem.handle)
                                {
                                    control_elem._refreshControlTabIndex(input_elem.handle, 0);
                                }

                                editor.set_height(0);
                                cell._static_create = true;
                                //return true;
                            }
                        }
                        cellidx = cell._cellidx + direction;
                        cell = null;
                    }
                }
            }
        }

        //return false;
    };

    _pListView._staticDestroyEditControl = function (cellobj)
    {
        if (cellobj)
        {
            cellobj._destroyEditor();

            var control_elem = cellobj.getElement();
            if (control_elem)
            {
                control_elem._refreshControlTabIndex(null, -1);
            }
            cellobj._static_create = false;
            return true;
        }

        return false;
    };

    _pListView = null;
    //delete _pListView;
}

//==============================================================================
// ListViewBandControl
//==============================================================================
if (nexacro._ListViewBandControl)
{
    var _pListViewBandControl = nexacro._ListViewBandControl.prototype;

    //==============================================================================
    // ListViewbandControl : Accessibility Function
    //==============================================================================
    _pListViewBandControl._setAccessibilityEnable = function (enable)
    {
        enable = false; // 항상 false로 동작 제약 사항
        nexacro.Component.prototype._setAccessibilityEnable.call(this, enable);
    };

    _pListViewBandControl = null;
    //delete _pListViewBandControl;
}

//==============================================================================
// ListViewBandControl
//==============================================================================
if (nexacro._ListViewBandExpandbarControl)
{
    var _pListViewBandExpandbarControl = nexacro._ListViewBandExpandbarControl.prototype;

    //==============================================================================
    // ListViewbandControl : Accessibility Function
    //==============================================================================
    _pListViewBandExpandbarControl._on_created_accessibility_contents = function (win)
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var band = this.parent;
            if (band)
            {
                if (band.id != "body" || band.expandbartype == false)
                {
                    this._setAccessibilityStatHidden(true);
                }
            }
        }
    };

    _pListViewBandExpandbarControl.on_keydown_default_action = function (keycode, alt_key, ctrl_key, shift_key, refer_comp, meta_key)
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            if (this._isComponentKeydownAction() && (keycode == 13 || keycode == 32)) // 13 'enter' , 32 'space'
            {
                var band = this._p_parent;
                var listview = band._view;
                if (listview && band)
                {
                    if (listview.getBandExpandStatus(band._rowidx))
                    {
                        listview.hideDetailBand(band._rowidx);
                    }
                    else
                    {
                        listview.showDetailBand(band._rowidx);
                    }
                }
            }
        }
    };

    _pListViewBandExpandbarControl = null;
    //delete _pListViewBandExpandbarControl;
}


//==============================================================================
// GridCellControl
//==============================================================================
if (nexacro._ListViewCellControl)
{
    var _pListViewCellControl = nexacro._ListViewCellControl.prototype;
    //==============================================================================
    // GridCellControl : Accessibility Function
    //==============================================================================
    _pListViewCellControl._getAccessibilityRole = function ()
    {
        var role = nexacro.Component.prototype._getAccessibilityRole.call(this);
        if (this._getCellDisplayType() == "checkboxcontrol" && this._getCellEditType() == "checkbox")
        {
            role = "checkbox";
        }
        return role;
    };

    _pListViewCellControl.__getAccessibilityMakeAddLabelMiddleClass = function ()
    {
        var tmpLabel = "";

        var view = this._view;
        var band = this.parent;

        if (view && band)
        {
            if ((view._is_first_focus_band && band == view._getCurrentBand()) || band._status != "focused")
            {
                var cells = view._getBandCells(band);
                if (cells)
                {
                    var firstcell = view._findEditableCell(band, 0, 1);
                    if (this == firstcell)
                    {
                        tmpLabel += " " + band._getAccessibilityLabel();
                    }
                }
            }
        }

        return tmpLabel;
    };

    _pListViewCellControl._getAccessibilityMakeAddLabel = function ()
    {
        var tmpLabel = "", view = this._view;

        var desclevel = this._getDescLevel();
        if (desclevel == "none" || desclevel == "child")
            return "";

        /* first focus add view accessibility label */
        if (view && view._control_element)
        {
            if (view._is_first_focus || view._status != "focused")
            {
                // 첫번째 editable, 마지막 editable 셀에 ListView
                var cellobj = view._getFirstEditableCell();
                if (this._rowidx === cellobj.row && this._bandidx === cellobj.band && this._cellidx === cellobj.cell)
                {
                    tmpLabel = view._getAccessibilityLabel();
                }
            }
        }

        /* make cellLabel parent */
        tmpLabel += this.__getAccessibilityMakeAddLabelMiddleClass();

        return tmpLabel;
    };

    _pListViewCellControl = null;
    //delete _pListViewCellControl;
}

//==============================================================================
// Static
//==============================================================================
if (nexacro.Static)
{
    var _pStatic = nexacro.Static.prototype;
    //==============================================================================
    // Static : Override
    //==============================================================================

    //==============================================================================
    // Static : Accessibility Function
    //==============================================================================
    _pStatic._getAccessibilityLabel = function ()
    {
        var label = nexacro.Component.prototype._getAccessibilityLabel.call(this);

        // decorate 처리용
        if (this._p_usedecorate)
        {
            label += this._displaytext;
        }
        return label;
    };

    _pStatic._on_getAccessibilityAdditionalLabel = function ()
    {
        const env = this._getEnvironment();
        if (!this._p_usedecorate && env?._a11ytype < 4)
            return "";

        return this._displaytext || "";
    };

    _pStatic._on_attach_accessibility_contents_handle = function (win/*, enablea11y*/)
    {
        var control_elem = this.getElement();
        var text_elem = this._cell_elem;
        if (text_elem)
        {
            // 기본 hidden 처리
            text_elem.setElementAccessibilityStatHidden(true);

            if (this._p_usedecorate)
            {
                // link 걸리거나 heading이 걸려 있으면 내부로 초점 이동
                if (this._linkCount > 0 || this._isAccessibilityRoleHeading())
                {
                    if (this._linkCount > 0)
                    {
                        if (control_elem)
                            control_elem._refreshControlTabIndex(null, null); //remove tabindex
                        this._setAccessibilityRole("noread");
                    }

                    text_elem.setElementAccessibilityStatHidden(false);
                }
            }
        }
    };

    _pStatic._on_created_accessibility_contents = _pStatic._on_attach_accessibility_contents_handle;

    _pStatic = null;
    //delete _pStatic;
}

//==============================================================================
// nexacro._CheckBoxSetItemControl
//==============================================================================
if (nexacro._CheckBoxSetItemControl)
{
    var _pCheckBoxSetItemControl = nexacro._CheckBoxSetItemControl.prototype;
    //==============================================================================
    // _CheckBoxSetItemControl : Override
    //==============================================================================

    //==============================================================================
    // _CheckBoxSetItemControl : Accessibility Function
    //==============================================================================
    _pCheckBoxSetItemControl._getAccessibilityLabel = function ()
    {
        var flag = this._p_parent._is_first_focus;
        var label = "";
        if (flag && this._isAccessibilityEnable())
        {
            var parent = this._p_parent;
            var p_accessibility = parent._p_accessibility;
            label = parent._getAccessibilityParentValue(p_accessibility);
        }
        label += " " + nexacro.Component.prototype._getAccessibilityLabel.call(this);
        return label;
    };

    _pCheckBoxSetItemControl._getAccessibilityRole = function ()
    {
        var role = "";
        if (this._isAccessibilityEnable())
        {
            var parent = this._p_parent;
            if (parent._is_first_focus)
            {
                return parent._getAccessibilityRole();
            }
            else
            {
                role = nexacro.Component.prototype._getAccessibilityRole.call(this);
            }
        }
        return role;
    };

    _pCheckBoxSetItemControl._setAccessibilityStatFocus = function (evt_name)
    {
        var list = this._p_parent;

        if (!list._is_subcontrol) // && list._status == "focused")
        {
            if (list.multiselect && list._shift_select_base_index && list._shift_select_base_index != this._p_index)
            {
                var item = list._getItem(list._shift_select_base_index);
                if (item && item._status == "selected")
                {
                    var label = item._getAccessibilityLabel();
                    label += " " + this._getAccessibilityLabel();
                    this._setAccessibilityLabel(label);
                }
            }

            if (!evt_name)
            {
                var keycode = list._last_keydown_keycode;
                switch (keycode)
                {
                    case nexacro.Event.KEY_DOWN:
                        evt_name = "downkey";
                        break;
                    case nexacro.Event.KEY_UP:
                        evt_name = "upkey";
                        break;
                    case nexacro.Event.KEY_TAB:
                        evt_name = "tabkey";
                        break;
                    case nexacro.Event.KEY_SHIFT:
                        evt_name = "shiftkey";
                        break;
                }

            }

            return nexacro.Component.prototype._setAccessibilityStatFocus.call(this, evt_name);
        }
    };

    _pCheckBoxSetItemControl = null;
}

if (nexacro.ProgressBar)
{
    var _pProgressBar = nexacro.ProgressBar.prototype;

    //===============================================================
    // nexacro.ProgressBar : Accessibility Function
    //===============================================================
    _pProgressBar._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {                  
        if (enablea11y == undefined)
            enablea11y = this._getEnvironment()._p_enableaccessibility;
        
        if (enablea11y)
        {
            this._setAccessibilityInfoValueMin(this._p_min);
            this._setAccessibilityInfoValueMax(this._p_max);
            this._setAccessibilityInfoValueCur(this._p_pos);
        }
    };

    _pProgressBar._on_getAccessibilityAdditionalLabel = function ()
    {
        var additional = "";
        if (this._isAccessibilityEnable())
        {
            additional = (this._p_expr && this._p_expr.length > 0) ? this._displaytext + " " + this._p_min + " " + this._p_max : this._p_pos + " " + this._p_min + " " + this._p_max;
        }
        return additional;
    };

    _pProgressBar._on_getAccessibilityAdditionalRole = function ()
    {
        if (this._getAccessibilityRole() == "progressbar")
            return " ProgressBar";
        return "";
    };

    _pProgressBar = null;
}

if (!nexacro.MultiCombo)
{
    var _pMultiCombo = nexacro.MultiCombo.prototype;
    //===============================================================
    // nexacro.MultiCombo : Accessibility Function
    //===============================================================
    _pMultiCombo._getAccessibilityReadLabel = function (bwholeread)
    {
        var _readlabel = nexacro.Component.prototype._getAccessibilityReadLabel.call(this);
        if (bwholeread && this.multicombotext._input_element && this._status != "focus")
        {
            if (!this.multicombotext._input_element._wantAccessibilityAdditionalLabel || !this.multicombotext._input_element._wantAccessibilityAdditionalLabel())
            {
                _readlabel = this._p_text + " " + _readlabel;
            }
        }

        return _readlabel;
    };

    _pMultiCombo = null;
}

if (nexacro.Switch)
{
    var _pSwitch = nexacro.Switch.prototype;
    //===============================================================
    // nexacro.Switch : Accessibility Function
    //===============================================================
    _pSwitch._on_attach_accessibility_contents_handle = function (win, enablea11y)
    {
        if (this.switchbutton)
        {
            this.switchbutton._setAccessibilityStatHidden(true);
        }

        this._setAccessibilityStatChecked(this._isChecked(this._p_value));
    };

    _pSwitch = null;
}


if (nexacro.Paginator)
{
    var _pPaginator = nexacro.Paginator.prototype;
    //===============================================================
    // nexacro.Paginator : Accessibility Function
    //===============================================================

    _pPaginator._accessibility_keydown = function (elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        //if (keycode == 13)
        //{
        //    trace(keycode);
        //}
    };

    _pPaginator._accessibility_focusout = function (refer_comp, related_comp, comp_init)
    {
        //trace("accessibility focus out !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! : ", this._p_name, refer_comp, related_comp);
        nexacro.Component.prototype._accessibility_focusout.call(this, refer_comp, related_comp, comp_init);
        if(comp_init)
        {
            this._a11y_focused_page = -1;
            this._a11y_focused_ncbutton = null;
        }
    };

    _pPaginator._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        nexacro.Component.prototype._accessibility_focusin.call(this, refer_comp, related_comp, reset_scroll, comp_focus, win);

        if (comp_focus)
        {
            var page = parseInt(refer_comp.text);

            if (!isNaN(page))
            {
                this._a11y_focused_page = page;
                this._focused_page = page;
                this._doFocus(parseInt(page), true);
            }
        }
    };
}