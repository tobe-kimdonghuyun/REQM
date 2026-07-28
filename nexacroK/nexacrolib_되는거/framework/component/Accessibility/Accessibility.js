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
// Accessibility Utility Function
//==============================================================================
nexacro._a11y_module_loaded = true;

nexacro._setEnableAccessibility = function (env, v)
{
    v = nexacro._toBoolean(v);
    if (env._a11ytype === 0) //초기화가 되지 않음
    {
        nexacro._setAccessibilityType(env, env._p_accessibilitytype);
    }

    nexacro.__setEnableAccessibility(v);
};

nexacro._setAccessibilityType = function (env, accessibilitytype)
{
    //standard = 1 , sensereader= 2, jaws = 3, voiceover = 4, talkback = 5
    var v = nexacro._toString(accessibilitytype).toLowerCase();

    switch (v)
    {
        case "sensereader":
            env._a11ytype = 2;
            break;
        case "jaws":
            env._a11ytype = 3;
            break;
        default:
            env._a11ytype = 1; // standard;
            break;
    }

    if (!nexacro._isDesktop())
    {
        if (nexacro._OS == "Android")
        {
            env._a11ytype = 5; // talkback;
        }
        else if (nexacro._OS == "iOS")
        {
            env._a11ytype = 4; // voiceover;
        }
    }

    nexacro.__setAccessibilityType(accessibilitytype);
};

nexacro._setAccessibilityDescReadType = function (env, v)
{
    //0x00 null, 0x01 label, 0x02 action, 0x04 description
    //0x03 label,action , 0x05 label,description 0x06 action, description
    //0x07 label,action,description
    env._a11ydescreadtype = 0;
    if (v.match("label"))
        env._a11ydescreadtype |= 0x01;
    if (v.match("action"))
        env._a11ydescreadtype |= 0x02;
    if (v.match("description"))
        env._a11ydescreadtype |= 0x04;
};

nexacro._setAccessibilityWholeReadType = function (env, v)
{
    if (v == "load")
        env._a11ywholereadtype = 1;
    else if (v == "change")
        env._a11ywholereadtype = 2;
    else if (v == "load,change")
        env._a11ywholereadtype = 3;
    else
        env._a11ywholereadtype = 0;
};

nexacro._setAccessibilityContentSearchKey = function (v)
{
    v = nexacro._toBoolean(v);
    nexacro._accessibilitycontentsearchkey = v;
};

//nexacro._AccessibilityUtil
nexacro._AccessibilityUtil.getAccessibilityLabel = function (elem)
{
    var strLabel = "";
    if (elem)
    {
        strLabel = elem.accessibilitylabel;
    }
    return strLabel;
};

nexacro._AccessibilityUtil.getAccessibilityAction = function (elem)
{
    var strAction = "";
    if (elem)
    {
        strAction = elem.accessibilityaction;
    }
    return strAction;
};

nexacro._AccessibilityUtil.getAccessibilityDescription = function (elem)
{
    var strDescription = "";
    if (elem)
    {
        strDescription = elem.accessibilitydescription;
    }
    return strDescription;
};

/* Nexacro K에서 삭제 unused function
nexacro._AccessibilityUtil.setDOMNodeLabel = function (node, label)
{
    if (!node)
        return;

    const env = nexacro.getEnvironment();
    if (env._a11ytype == 2)
    {
        node.innerText = label;
    }
    else
    {
        node.setAttribute("aria-live", "assertive");
        node.innerHTML = label;
    }
};
*/ 
nexacro._AccessibilityUtil.checkComponentHotkey = function (obj, keyCode, altKey, ctrlKey, shiftKey)
{
    var strHotkey = "";
    var hotkeyList = null;

    if (obj instanceof nexacro.Grid)
    {
        hotkeyList = {};
        const env = obj._env;
        if (env._a11ytype == 2)        
        {
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINROW;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINROW;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_UP] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_PAGE_DOWN] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
        }
        else
        {
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_HOME] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELL;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_END] = nexacro._AccessibilityUtil.Hotkey.LASTCELL;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_UP] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINCOLUMN;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_DOWN] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINCOLUMN;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_LEFT] = nexacro._AccessibilityUtil.Hotkey.FIRSTCELLINROW;
            hotkeyList[nexacro.Event.KEY_CTRL + " " + nexacro.Event.KEY_ALT + " " + nexacro.Event.KEY_SHIFT + " " + nexacro.Event.KEY_RIGHT] = nexacro._AccessibilityUtil.Hotkey.LASTCELLINROW;
        }
    }

    if (ctrlKey)
    {
        strHotkey = strHotkey + nexacro.Event.KEY_CTRL + " ";
    }
    if (altKey)
    {
        strHotkey = strHotkey + nexacro.Event.KEY_ALT + " ";
    }
    if (shiftKey)
    {
        strHotkey = strHotkey + nexacro.Event.KEY_SHIFT + " ";
    }

    strHotkey = strHotkey + keyCode;

    if (hotkeyList)
    {
        return hotkeyList[strHotkey];
    }

    return nexacro._AccessibilityUtil.Hotkey.NONE;
};

nexacro._AccessibilityUtil.isUseTooltipText = function ()
{
    return true;
};

nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel = function (elem)
{
    var strAdditionalLabel = "";
    if (!elem)
        return strAdditionalLabel;

    var comp = elem.linkedcontrol;
    const env = comp._getEnvironment();
    const a11ytype = env._a11ytype;
    if (a11ytype < 4)
    {
        if (comp)
            strAdditionalLabel = comp._on_getAccessibilityAdditionalLabel() + comp._on_getAccessibilityAdditionalRole();
    }
    else if (a11ytype == 4)
    {
        if (comp)
        {
            if (comp._has_inputElement || comp._input_element)
            {
                if (!comp._p_password)
                {
                    // iOS에서 복합 컴포넌트의 value는 component의 _on_getAccessibilityAdditionalLabel에서 처리
                    if (!comp._is_compound && !comp._is_subcontrol)
                    {
                        strAdditionalLabel = (comp._primitivevalue) ? comp._makeCalendarText(comp._primitivevalue) : "";
                    }
                }
            }
            strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel() + comp._on_getAccessibilityAdditionalRole();;
        }
    }
    else if (a11ytype == 5)
    {
        if (comp)
        {
            if (comp._has_inputElement || comp._input_element)
            {
                if (!comp._p_password)
                {
                    if (comp._is_created)
                    {
                        if (comp._p_usedecorate)
                        {
                            strAdditionalLabel = comp._p_displaytext;
                        }
                        else
                        {
                            if (comp._is_compound)
                                strAdditionalLabel = comp._on_getAccessibilityAdditionalLabel();
                        }
                    }
                    else
                    {
                        strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel();
                    }
                }
            }
            else
            {
                strAdditionalLabel += " " + comp._on_getAccessibilityAdditionalLabel();
                strAdditionalLabel = strAdditionalLabel.trim();
            }
        }
    }

    return strAdditionalLabel;
};

nexacro._AccessibilityUtil.supportMobileApplicationAccessibility = function (container_handle, bForce, a11ytype)
{    
    if (a11ytype == 4)
    {
        var container_element = container_handle._linked_element;

        if (container_element && !bForce)
        {
            var comp = container_element.parent.linkedcontrol;

            if ((comp && comp._is_component && !comp._hasContainer() && !comp._is_subcontrol && !comp._p_parent._is_frame && !comp._is_frame))
            {
                if (comp._p_accessibilityrole != "spin" && comp._p_accessibilityrole != "grid" && comp._p_accessibilityrole != "treegrid" && comp._p_accessibilityrole != "radio" && comp._p_accessibilityrole != "listbox" && comp._p_accessibilityrole != "textbox" && comp._p_accessibilityrole != "edit" && comp._p_accessibilityrole != "webbrowser" && comp._p_accessibilityrole != "webview" && comp._p_accessibilityrole != "form" && comp._p_accessibilityrole != "fileupload")
                {
                    nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
                }
            }
            else if (comp && (comp instanceof nexacro.ScrollBarControl))
            {
                nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
            }
        }
        else
        {
            nexacro.__setDOMAccessibility_StatHidden(container_handle, true);
        }
    }
    return;
};

nexacro._AccessibilityUtil.unsupportMobileApplicationAccessibility = function (control_element, bForce, a11ytype)
{
    return;
};

nexacro._AccessibilityUtil.cancelTouchEvent = function (elem)
{    
    if (elem)
    {
        var linkedcontrol = elem.linkedcontrol;        
        if (!linkedcontrol && elem.parent)
        {
            linkedcontrol = elem.parent.linkedcontrol;
            if (linkedcontrol)
            {
                const env = linkedcontrol._getEnvironment();
                if (env && (env._a11ytype == 4 || env._a11ytype == 5))
                    return elem.parent.accessibilityrole == "link";
            }  
        } 
    }

/*
    const env = nexacro._getEnvironment();
    if (env && (env._a11ytype == 4 || env._a11ytype == 5))
    {
        var linkedcontrol = elem ? elem.linkedcontrol : null;
        if (!linkedcontrol && elem.parent)
        {
            linkedcontrol = elem.parent.linkedcontrol;
            if (linkedcontrol)
            {
                return elem.parent.accessibilityrole == "link";
            }
        }
    }
    return;
*/
};

//==============================================================================
// Platform
//==============================================================================

//==============================================================================
// SystemBase
//==============================================================================

nexacro._notifyAccessibility = function (node, label, notifyevent, elem, bfocus, benable, env)
{   
    if (env)
    {
        var from_refer_comp = elem ? elem.linkedcontrol : env;
        env.on_fire_onaccessibility(label, env, from_refer_comp);
    }

    nexacro.__notifyAccessibility(node, label, notifyevent, elem, bfocus, benable, env?._a11ytype);
};

nexacro._notifyAccessibilityInitialize = function (a11ytype)
{    
    if (nexacro._Browser == "Chrome" && a11ytype == 2)
        nexacro.__notifyInitAccessibility(a11ytype);
};

nexacro._notifyAccessibilityInputElement = function (label, a11ytype)
{    
    if (nexacro._Browser == "Chrome" && a11ytype == 2)
        nexacro.__notifyAccessibilityInputElement(label);
};

nexacro._createNotifyAccessibilityInputElement = function (label, a11ytype)
{
    if (nexacro._Browser == "Chrome" && a11ytype == 2)
        nexacro.__createNotifyAccessibilityInputElement();
};

//==============================================================================
// CompBase
//==============================================================================

if (nexacro.Component)
{
    var _pComponent = nexacro.Component.prototype;
    _pComponent._block_read_aria_stat = false;
    _pComponent._accessibilitylive = false;
    if (!nexacro._isDesktop())
    {
        _pComponent._use_translate_scroll = false;
    }
    //==============================================================================
    // Component : Overrides
    //==============================================================================

    //==============================================================================
    // Component : Accessibility Function
    //==============================================================================
    _pComponent._isAccessibilityRoleHeading = function ()
    {
        let role = this._getAccessibilityRole();
        return (role.indexOf("heading") > -1);
    };

    _pComponent._getAccessibilityRole = function ()
    {
        return this._p_accessibilityrole ? this._p_accessibilityrole : "none";
    };

    _pComponent._getAccessibilityLabel = function ()
    {
        var label = "";
        label = (label = this._getLinkedLabel(this._p_accessibilitylabel)) ? label : this.on_get_accessibility_label();
        label = this._getStringResourceProperty(label);

        var env = this._getEnvironment();
        var form = this._refform;
        if (form && form._is_form && !form._is_subcontrol && !form._is_track)
        {
            // first accessibilityenable true component in a form
            var comps = form._getComponentsByTaborder(form, 15, true);
            if (comps)
            {
                var comps_len = comps._p_length;
                if (comps_len > 0 && this == comps[0])
                {
                    // "this is the first component"
                    if (env && env.accessibilityfirstovermessage)
                        label = env.accessibilityfirstovermessage + " " + label;
                }

                if (comps_len > 0 && this == comps[comps_len - 1])
                {
                    // "this is the last component"                            
                    if (env && env.accessibilitylastovermessage)
                        label += " " + env.accessibilitylastovermessage;
                }
            }
        }
        return label ? label : "";
    };

    _pComponent._getAccessibilityDescLevel = function ()
    {
        var desclevel = this._p_accessibilitydesclevel;
        if (desclevel == "none" || desclevel == "child")
            return desclevel;
        var comp = this._p_parent;
        if (comp && comp._getDescLevel)
            return comp._getDescLevel();
        else
            return desclevel;
    };

    _pComponent._getAccessibilityDescription = function ()
    {
        var description = this._getLinkedDescription(this._p_accessibilitydescription);
        description = (description) ? description : this.on_get_accessibility_description();
        return this._getStringResourceProperty(description);
    };

    _pComponent._getAccessibilityAction = function ()
    {
        var action = this._getLinkedAction(this._p_accessibilityaction);
        action = action ? action : this.on_get_accessibility_action();
        return this._getStringResourceProperty(action);
    };

    _pComponent._getAccessibilityReadLabel = function (b_label)
    { //use form
        var control = this.getElement();
        if (control)
        {
            return control._makeAccessibilityLabelbyReadtype(b_label);
        }
        return "";
    };

    //on_gets
    _pComponent.on_get_accessibility_label = function ()
    {
        return ""; //accessibilitylabel의 default 값 설정 안하도록 스펙 제거
    };

    _pComponent.on_get_accessibility_description = function ()
    {
        return ""; // component.tooltiptext 설정시 accessibilitydescription과 중복 충돌이 발생하여 제거로 스펙 변경
    };

    _pComponent.on_get_accessibility_action = function ()
    {
        return "";
    };

    // get label, description, action  by linked id
    _pComponent.__getLinkedString = function (linked_str, get_func)
    {
        var ret = "";
        if (linked_str && get_func)
        {
            var _rs_ = String.fromCharCode(30);
            var arr = linked_str.toString().replace(/\[/g, _rs_ + "[").split(_rs_);
            var len = arr.length;

            for (var i = 0; i < len; i++)
            {
                var str = arr[i];
                var start = str.search("@");
                var end = str.search("]");

                if (start > 0 && end > 0)
                {
                    start += 1;

                    var linkedId = str.substring(start, end);
                    var linkedComp = this._getFormChildById(linkedId);
                    if (linkedComp)
                    {
                        // [@CompId] 형식 갖추면 찾아서 출력
                        ret += get_func.call(linkedComp);

                        // [@CompId] 형식 외 나머지 존재하는 경우
                        if (end + 1 < str.length)
                        {
                            end += 1;
                            ret += str.substring(end);
                        }
                    }
                    else
                    {
                        // [@CompId] 형식 안맞으면 그대로 출력
                        ret += str;
                    }
                }
                else
                {
                    // [@CompId] 형식 안맞으면 그대로 출력
                    start = (start < 0) ? 0 : start;
                    ret += str.substring(start);
                }
            }
        }
        return ret;
    };

    _pComponent._getLinkedLabel = function (label)
    {
        return this.__getLinkedString(label, this._getAccessibilityLabel);
    };

    _pComponent._getLinkedDescription = function (description)
    {
        return this.__getLinkedString(description, this._getAccessibilityDescription);
    };

    _pComponent._getLinkedAction = function (action)
    {
        return this.__getLinkedString(action, this._getAccessibilityAction);
    };

    _pComponent._getDescLevel = function ()
    {

        var desclevel = this._p_accessibilitydesclevel;
        var comp = this._p_parent;
        if (desclevel == "none" || desclevel == "self")
            return "none";
        else if (comp && comp._getDescLevel)
            return comp._getDescLevel();

        return "all";
    };

    _pComponent._getAccessibilityParentValue = function (accessibility)
    {
        var label = "";
        var type = this._getEnvironment()._a11ydescreadtype;
        if ((type & 0x01) == 0x01)
        {
            var _label = this._getAccessibilityLabel(accessibility);
            if (_label)
                label = _label;
        }
        if ((type & 0x02) == 0x02 && this._p_accessibilityaction)
        {
            var _action = " " + this._getAccessibilityAction(accessibility);
            if (_action)
                label += _action;
        }
        if ((type & 0x04) == 0x04 && this._p_accessibilitydescription)
        {
            var _description = " " + this._getAccessibilityDescription(accessibility);
            if (_description)
                label += _description;
        }
        return label;
    };

    _pComponent._setAccessibilityRole = function (role)
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            // heading role 인경우 level 같이 설정
            if (this._isAccessibilityRoleHeading())
            {
                let level = +(role.charAt(role.length - 1))
                this._setAccessibilityInfoLevel(isNaN(level) ? 1 : level);
            }
            control_elem.setElementAccessibilityRole(role);
        }
    };

    _pComponent._setAccessibilityLabel = function (label)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityLabel(label);
    };

    _pComponent._setAccessibilityEnable = function (enable)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityEnable(enable);
    };

    _pComponent._setAccessibilityDescription = function (desc)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityDescription(desc);
    };

    _pComponent._setAccessibilityAction = function (action)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityAction(action);
    };

    _pComponent._setAccessibilityDescLevel = function (desclevel)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityDescLevel(desclevel);
    };

    _pComponent._setAccessibilityValue = function (value, bfocus)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityValue(value, this._input_element, bfocus);
    };

    _pComponent._setAccessibilityStatDisabled = function (disabled)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatDisabled(disabled);
    };

    _pComponent._setAccessibilityStatHidden = function (hidden)
    {
        var control_elem = this._control_element;
        if (control_elem)
        {
            const env = this._getEnvironment();
            if (env._a11ytype == 4 || env._a11ytype == 5)
            {
                if (!this._skip_mobile_tabfocus && !this._p_accessibilityenable)
                    hidden = true;
            }

            control_elem.setElementAccessibilityStatHidden(hidden);
        }

    };

    _pComponent._setAccessibilityStatChecked = function (checked)
    {
        if (this._control_element)
        {
            this._control_element.setElementAccessibilityStatChecked(checked);
        }
    };

    _pComponent._setAccessibilityStatPressed = function (pressed)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatPressed(pressed);
    };

    _pComponent._setAccessibilityStatSelected = function (selected)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatSelected(selected);
    };

    _pComponent._setAccessibilityStatExpanded = function (expanded)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatExpanded(expanded);
    };

    _pComponent._setAccessibilityStatLive = function (v)
    {
        this._accessibilitylive = v;
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatLive(v);
    };

    _pComponent._setAccessibilityStatAutoComplete = function (autocomplete)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityStatAutoComplete(autocomplete);
    };

    _pComponent._setAccessibilityFlagHasPopup = function (haspopup)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagHasPopup(haspopup);
    };

    _pComponent._setAccessibilityFlagFocusable = function (focusable)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagFocusable(focusable);
    };

    _pComponent._setAccessibilityFlagReadOnly = function (readonly)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagReadOnly(readonly);
    };

    _pComponent._setAccessibilityFlagPassword = function (password)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagPassword(password);
    };

    _pComponent._setAccessibilityFlagMultiSelectable = function (multiselectable)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagMultiSelectable(multiselectable);
    };

    _pComponent._setAccessibilityFlagDefaultButton = function (defaultbutton)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagDefaultButton(defaultbutton);
    };

    _pComponent._setAccessibilityFlagMultiLine = function (multiline)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityFlagMultiLine(multiline);
    };

    _pComponent._setAccessibilityInfoCount = function (count)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoCount(count);
    };

    _pComponent._setAccessibilityInfoIndex = function (index)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoIndex(index);
    };

    _pComponent._setAccessibilityInfoValueMax = function (valuemax)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoValueMax(valuemax);
    };

    _pComponent._setAccessibilityInfoValueMin = function (valuemin)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoValueMin(valuemin);
    };

    _pComponent._setAccessibilityInfoValueCur = function (valuecur)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoValueCur(valuecur);
    };


    _pComponent._setAccessibilityInfoLevel = function (level)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityInfoLevel(level);
    };

    _pComponent._setAccessibilityHotKey = function (hotkey)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityHotKey(hotkey);
    };

    _pComponent._setAccessibilityActiveDescendant = function (subcontrol, element)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityActiveDescendant(subcontrol, element ? element : control_elem);
    };

    _pComponent._setAccessibilityControls = function (id_list, element)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityControls(id_list, element ? element : control_elem);
    };

    _pComponent._setAccessibilityOwns = function (id_list, element)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem.setElementAccessibilityOwns(id_list, element ? element : control_elem);
    };

    _pComponent._setAccessibilityDescriptionBy = function (id)
    {
        var control_elem = this._control_element;
        if (control_elem)
            control_elem._setElementAccessibilityDescriptionBy(id);
    };

    _pComponent._notifyAccessibility = function (label, notifyevent)
    {
        if (this._control_element)
        {
            this._control_element.notifyAccessibility(label, notifyevent);
        }
    };

    _pComponent._setAccessibilityStatFlag = function (status, userstatus)
    {
        if (!nexacro._isDesktop() && this._block_read_aria_stat)
        {
            this._setAccessibilityStatHidden(true);
        }

        if (status == "disabled")
        {
            this._setAccessibilityStatDisabled(true);
        }
        else //if (status == "enabled")
        {
            this._setAccessibilityStatDisabled(false);
        }

        if (status == "readonly")
        {
            this._setAccessibilityFlagReadOnly(true);
        }
        else if (status == "enabled")
        {
            this._setAccessibilityFlagReadOnly(false);
        }

        /*      // Todo : mobilesafari에서 "toggle button" 읽는 문제
        if (userstatus == "pushed")
            this._setAccessibilityStatPressed(true);
        else
            this._setAccessibilityStatPressed(false);
            */

        if (this._use_selected_status)
        {
            var is_selected = this._userstatusmap.selected ? true : false;
            if (this instanceof nexacro._RadioItemControl || this instanceof nexacro.CheckBox)
            {
                this._setAccessibilityStatChecked(is_selected);
            }
            else
            {
                this._setAccessibilityStatSelected(is_selected);
            }
        }

        if (userstatus == "selected" && status != "focused")
        {
            const env = this._getEnvironment();
            if (env._a11ytype == 4 || env._a11ytype == 5)
            {
                this._setAccessibilityStatFocus();

            }
        }

        if (!nexacro._isDesktop() && (this._block_read_aria_stat && this._p_accessibilityenable))
        {
            nexacro._OnceCallbackTimer.callonce(this, function () { this._setAccessibilityStatHidden(false); }, 100);
        }
    };

    _pComponent._isAccessibilityEnable = function ()
    {
        const env = this._getEnvironment();
        if (!env._p_enableaccessibility || !this._p_accessibilityenable)
            return false;
        return true;
    };

    _pComponent._isItemAccessibilityEnable = function ()
    {
        // listtype component만 해당 (Radio, Listbox, FileUpload)
        const env = this._getEnvironment();
        if (!env._p_enableaccessibility || !this._is_listtype || !this._p_itemaccessibilityenable)
            return false;
        return true;
    };

    _pComponent._updateAccessibilityLabel = function ()
    {
        var control_elem = this.getElement();
        if (control_elem)
            control_elem._updateElementAccessibilityLabel();

    };

    _pComponent._setAccessibilityTextContent = function (text)
    {
        var control_elem = this.getElement();
        if (control_elem)
            control_elem._setElementAccessibilityTextContent(text);
    };

    _pComponent._setAccessibilityStatFocus = function (evt_name)
    {
        const env = this._getEnvironment();
        if (this._control_element)
        {
            this._control_element.setElementAccessibilityStatFocus();

            // for showModal
            var form = this._getForm();
            if (form)
            {
                var _window = form._getWindow();
                _window._accessibility_last_focused_comp = this._getRootComponent(this);
            }
        }

        if (env)
            env._set_accessibility_history(this, evt_name);
    };

    // for killfocus
    _pComponent._setAccessibilityStatKillFocus = function ()
    {
        // edit 계열을 별도의 시점으로 처리되어 나중에 정리
        if (this._control_element && !this._isEditableComponent())
        {
            this._control_element.setElementAccessibilityStatKillFocus();
        }
    };

    _pComponent._setAccessibilityNotifyEvent = function (direction)
    {
        var control_element = this.getElement();
        if (control_element && control_element.accessibilityenable)
        {
            if (direction !== undefined)
            {
                this._resetScrollPos(
                    this,
                    this._adjust_left,
                    this._adjust_top,
                    this._adjust_left + this._adjust_width,
                    this._adjust_top + this._adjust_height,
                    (direction > 0) ? 0 : 1);
            }

            control_element.notifyAccessibility();
            var form = this._getForm();
            if (form)
            {
                var _window = form._getWindow();
                _window._accessibility_last_focused_comp = this._getRootComponent(this);
            }
            return true;
        }
        return false;
    };

    _pComponent._setAccessibilityInfoByHover = function ()
    {
        return this._setAccessibilityNotifyEvent();
    };

    _pComponent._accessibility_focusin = function (refer_comp, related_comp, reset_scroll, comp_focus, win)
    {
        // 접근성이 운영되는 환경에 따라 focus 수행 여부를 판단
        if (comp_focus)
        {
            this._on_focus(true, "");
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

    _pComponent._accessibility_focusout = function (refer_comp, related_comp, comp_init)
    {
        if (comp_init)
        {
            if (refer_comp && refer_comp._type_name == "Button")
            {
                if (refer_comp._status == "mouseover")
                {
                    refer_comp._changeStatus("mouseover", false);
                }
            }
        }
    };

    // system keydown event 발생 체크 (accessibility)
    _pComponent._isComponentKeydownAction = function ()
    {
        var ret = true;
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var _win = this._getWindow();
            if (_win)
            {
                ret = _win._is_fire_sys_keydown;
            }
        }
        return ret;
    };

    // system touchstart event 발생 체크 (accessibility)
    _pComponent._isComponentTouchAction = function ()
    {
        var ret = true;
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            var _win = this._getWindow();
            if (_win)
            {
                ret = _win._is_fire_sys_touchstart;
            }
        }
        return ret;
    };

    // 가상커서에서 발생된 마우스 이벤트 인지 체크
    _pComponent._isFireVirtualMouseEvent = function ()
    {
        var ret = false;
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility && env._a11ytype == 2)
        {
            var _win = this._getWindow();
            if (_win)
            {
                ret = _win._is_fire_virtual_mousedown;
            }
        }
        return ret;
    };

    _pComponent._accessibility_keydown = function (elem, refer_comp, keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        //trace("_accessibility_keyaction",this.id);
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility && env._a11ytype == 2)
        {
            var ret;
            if (env)
            {
                ret = env.on_fire_onaccessibilitykey(keycode, alt_key, ctrl_key, shift_key, this, this);
                if (ret)
                {
                    elem._event_stop = true;
                    return;
                }
            }

            var _comp = this;
            var _form = this._getForm();
            if (_form)
            {
                if (keycode == nexacro.Event.KEY_TAB)
                {
                    if (!this._getDlgCode(keycode, alt_key, ctrl_key, shift_key).want_tab)
                    {
                        _comp = _form;
                    }
                }
                else if ((keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN) && !alt_key && !ctrl_key && !shift_key)
                {
                    if (!this._getDlgCode(keycode, alt_key, ctrl_key, shift_key).want_arrows)
                    {
                        _comp = _form;
                    }
                }
            }
            if (keycode === nexacro.Event.KEY_SPACE) // checkbox toggle
            {
                var win = this._getWindow();
                win._keydown_element = this._keydown_element = elem;
                win._keydown_element_list.setItem(keycode, this._keydown_element);
            }
            ret = _comp._on_keydown(elem, keycode, alt_key, ctrl_key, shift_key, meta_key);
            if (ret || elem._event_stop)
            {
                elem._event_stop = false;
            }
            else
            {
                ret = _comp._on_keyup(elem, keycode, alt_key, ctrl_key, shift_key, meta_key);
            }
            return ret;
        }
        return false;
    };

    // allow keyaction at keyup event (가상커서 활성모드)
    _pComponent._isFireAccessibilityKeydown = function (keycode, alt_key, ctrl_key, shift_key, meta_key)
    {
        return (keycode === nexacro.Event.KEY_UP || keycode === nexacro.Event.KEY_DOWN);
    };

    _pComponent._isAccessibilityCotainerComponent = function ()
    {
        //Mobile, Div, Radio, Listbox, Grid
        const env = this._getEnvironment();
        if (env && (env._a11ytype == 4 || env._a11ytype == 5))
        {
            if (this._p_accessibilityenable == true && (this._p_accessibilitydesclevel == "all" || this._p_accessibilitydesclevel == "self"))
                return true;
        }
        return false;
    };
    _pComponent._clearAccessibilityInfoByHover = nexacro._emptyFn;

    //delete _pComponent;
}

//==============================================================================
// FormBase
//==============================================================================

if (nexacro.FormBase)
{
    var _pFormBase = nexacro.FormBase.prototype;
    _pFormBase._skip_mobile_tabfocus = true;

    //==============================================================================
    // FormBase : Overrides
    //==============================================================================

    //==============================================================================
    // FormBase : Accessibility Function
    //==============================================================================

    _pFormBase._searchNextHeadingFocus = function (current, filter_type)
    {
        // accessing only by accessibility mode
        const env = this._getEnvironment();
        if (!env._p_enableaccessibility)
            return null;

        // 15 = this check to true on accessibilityenable
        if (nexacro._isNull(filter_type))
            filter_type = 15;

        var next = this._getHeadingOrderNext(current, 1, filter_type);
        if (!next)
        {
            var parent = this._p_parent;
            if (parent)
            {
                if (parent._hasContainer && parent._hasContainer())
                {
                    // container component (DIv, TabPage)
                    parent = this._getRootComponent(parent);

                    var parent_form = this._getParentForm();
                    next = parent_form._searchNextHeadingFocus(parent, filter_type);
                }
                else
                {
                    // formbase type (Form)
                    next = parent._searchNextHeadingFocus(this, filter_type);
                }
            }
        }

        return next;
    };

    _pFormBase._searchPrevHeadingFocus = function (current, filter_type)
    {
        // accessing only by accessibility mode
        const env = this._getEnvironment();
        if (!env._p_enableaccessibility)
            return null;

        // 15 = this check to true on accessibilityenable
        if (nexacro._isNull(filter_type))
            filter_type = 15;

        var next = this._getHeadingOrderNext(current, -1, filter_type);
        if (!next)
        {
            var parent = this._p_parent;
            if (parent)
            {
                if (parent._hasContainer && parent._hasContainer())
                {
                    // container component (DIv, TabPage)
                    parent = this._getRootComponent(parent);

                    var parent_form = this._getParentForm();
                    next = parent_form._searchPrevHeadingFocus(parent, filter_type);
                }
                else
                {
                    // formbase type (Form)
                    next = parent._searchPrevHeadingFocus(this, filter_type);
                }
            }
        }

        return next;
    };

    // Function use to only type of formbase
    _pFormBase._getHeadingOrderFirst = function (filter_type)
    {
        return this._getHeadingOrderNext(null, 1, filter_type);
    };

    // Function use to only type of formbase
    _pFormBase._getHeadingOrderLast = function (filter_type)
    {
        return this._getHeadingOrderNext(null, -1, filter_type);
    };

    // Function use to only type of formbase
    _pFormBase._getHeadingOrderNext = function (current, direction, filter_type)
    {
        // accessing only by accessibility mode
        const env = this._getEnvironment();
        if (!env._p_enableaccessibility)
            return null;

        if (nexacro._isNull(filter_type))
            filter_type = 15; // filter validation

        if (nexacro._isNull(direction))
            direction = 1; // direction validation

        var ar = this._getComponentsByTaborder(this, filter_type);
        var len = ar._p_length;
        var cur_idx = -1;

        if (nexacro._isNull(current))
        {
            // null of current paremeter be to searching first or last comp
            if (direction < 0)
                cur_idx = len - 1;
            else
                cur_idx = 0;
        }
        else
        {
            // next heding comp search
            cur_idx = nexacro._indexOf(ar, current._getRootComponent(current));
            if (cur_idx < 0)
                return null;

            cur_idx += direction;
        }

        var comp = null, child = null;
        var i = cur_idx;

        if (direction < 0)
        {
            for (; i >= 0; i--)
            {
                comp = ar[i];
                if (comp._hasContainer && comp._hasContainer())
                {
                    child = comp._getHeadingOrderLast(filter_type);

                    if (child)
                    {
                        comp = child;
                        break;
                    }
                }
                else if (comp._isAccessibilityRoleHeading())
                {
                    break;
                }

                comp = null;
            }
        }
        else
        {
            for (; i < len; i++)
            {
                comp = ar[i];
                if (comp._isAccessibilityRoleHeading())
                {
                    break;
                }
                else if (comp._hasContainer())
                {
                    child = comp._getHeadingOrderFirst(filter_type);

                    if (child)
                    {
                        comp = child;
                        break;
                    }
                }

                comp = null;
            }
        }

        return comp;
    };

    _pFormBase = null;
}

if (nexacro.Form)
{
    var _pForm = nexacro.Form.prototype;

    //==============================================================================
    // Form : Overrides
    //==============================================================================

    //==============================================================================
    // Form : Accessibility Function
    //==============================================================================

    _pForm._getPrevHeadingComponent = function (current)
    {
        return this._searchPrevHeadingFocus(current, 15);
    };

    _pForm._getNextHeadingComponent = function (current)
    {
        var comp = null;
        if (current && current._hasContainer())
        {
            comp = current._getHeadingOrderFirst(15);
        }
        else
        {
            comp = this._searchNextHeadingFocus(current, 15);
        }

        return comp;
    };

    _pForm = null;
}

if (nexacro._InnerForm)
{
    var _pInnerForm = nexacro._InnerForm.prototype;

    //==============================================================================
    // FormBase : Overrides
    //==============================================================================

    //==============================================================================
    // FormBase : Accessibility Function
    //==============================================================================

    _pInnerForm._setAccessibilityLabel = function (label)
    {
        var components = this._p_components;
        if (!components || components._p_length > 0)
            return; //Do nothing
        nexacro.FormBase.prototype._setAccessibilityLabel.call(this, label);
    };

    _pInnerForm = null;
}

//==============================================================================
// FrameBase
//==============================================================================

if (nexacro.Frame)
{
    var _pFrame = nexacro.Frame.prototype;

    //==============================================================================
    // Frame : Overrides
    //==============================================================================

    //==============================================================================
    // Frame : Accessibility Function
    //==============================================================================
    _pFrame._searchNextHeadingFocus = function (current, filter_type)
    {
        if (nexacro._isNull(filter_type))
            filter_type = 15; // filter validation

        var comp = null;

        if (this._is_frameset)
        {
            // frameset type (HFrameSet, VFrameSet, FrameSet)
            var frames = this._frames;
            var cur_idx = -1;

            if (nexacro._isNull(current))
            {
                // Serching start on first frame
                cur_idx = 0;
            }
            else
            {
                // Serching start on current frame
                cur_idx = nexacro._indexOf(frames, current);
                if (cur_idx < 0)
                {
                    return null;
                }

                cur_idx += 1;
            }

            var i = cur_idx;
            var len = frames._p_length;
            var frame = null;

            for (; i < len; i++)
            {
                frame = frames[i];
                comp = frame._searchNextHeadingFocus(null, filter_type);

                if (comp)
                {
                    break;
                }

                comp = null;
            }

            current = null;
        }
        else
        {
            // frame type (ChildFrame)
            if (this.form)
            {
                if (nexacro._isNull(current))
                {
                    // Current frame search
                    comp = this.form._getHeadingOrderFirst(filter_type);
                }
                else if (current._is_form)
                {
                    // Parent frame search
                    current = null;
                }
            }
        }

        if (nexacro._isNull(comp) && nexacro._isNull(current))
        {
            var parent_frame = this._p_parent;
            if (parent_frame && parent_frame._is_frame && !parent_frame._isMainFrame())
            {
                comp = parent_frame._searchNextHeadingFocus(this, filter_type);
            }
        }

        return comp;
    };

    _pFrame._searchPrevHeadingFocus = function (current, filter_type)
    {
        if (nexacro._isNull(filter_type))
            filter_type = 15; // filter validation

        var comp = null;

        if (this._is_frameset)
        {
            // frameset type (HFrameSet, VFrameSet, FrameSet)
            var frames = this._frames;
            var len = frames._p_length;
            var cur_idx = -1;

            if (nexacro._isNull(current))
            {
                // Serching start on last frame
                cur_idx = len - 1;
            }
            else
            {
                // Serching start on current frame
                cur_idx = nexacro._indexOf(frames, current);
                if (cur_idx < 0)
                {
                    return null;
                }

                cur_idx -= 1;
            }

            var i = cur_idx;
            var frame = null;

            for (; i >= 0; i--)
            {
                frame = frames[i];
                comp = frame._searchPrevHeadingFocus(null, filter_type);

                if (comp)
                {
                    break;
                }

                comp = null;
            }

            current = null;
        }
        else
        {
            // frame type (ChildFrame)
            if (this.form)
            {
                if (nexacro._isNull(current))
                {
                    // Current frame search
                    comp = this.form._getHeadingOrderLast(filter_type);
                }
                else if (current._is_form)
                {
                    // Parent frame search
                    current = null;
                }
            }
        }

        if (nexacro._isNull(comp) && nexacro._isNull(current))
        {
            var parent_frame = this._p_parent;
            if (parent_frame && parent_frame._is_frame && !parent_frame._isMainFrame())
            {
                comp = parent_frame._searchPrevHeadingFocus(this, filter_type);
            }
        }

        return comp;
    };

    _pFrame = null;
}

if (nexacro.ChildFrame)
{
    var _pChildFrame = nexacro.ChildFrame.prototype;

    //==============================================================================
    // FormBase : Overrides
    //==============================================================================

    //==============================================================================
    // FormBase : Accessibility Function
    //==============================================================================
    if (nexacro._OS == "iOS" && nexacro._Browser == "MobileSafari")
    {
        _pChildFrame._accessibilityModalLock = function (modal_stack)
        {
            if (modal_stack.length > 0)
            {
                var modal_info = modal_stack[modal_stack.length - 1];
                var overlay_elem = modal_info[0]._modal_overlay_elem;
                if (overlay_elem)
                {
                    overlay_elem.setElementAccessibilityStatHidden(true);
                }
            }
            else
            {

                const app = this._getRootObject(); // chk
                if (app)
                {
                    let control_elem = app.frame ? app.frame.getElement() : app.getElement();
                    if (control_elem)
                    {
                        control_elem.setElementAccessibilityStatHidden(true);
                        app.frame ? app.frame._skip_mobile_tabfocus = false : app._skip_mobile_tabfocus = false;
                        control_elem.setElementAccessibilityRole("button");
                    }
                }
            }
        };

        _pChildFrame._accessibilityModalUnLock = function (modal_stack)
        {

            if (modal_stack.length > 0)
            {
                var info = modal_stack[modal_stack.length - 1];
                var overlay_elem = info[0]._modal_overlay_elem;
                if (overlay_elem)
                {
                    overlay_elem.setElementAccessibilityStatHidden(false);
                }
            }
            else
            {

                const app = this._getRootObject(); // chk
                if (app)
                {
                    let control_elem = app.frame ? app.frame.getElement() : app.getElement();
                    if (control_elem)
                    {
                        control_elem.setElementAccessibilityStatHidden(false);
                        app.frame ? app.frame._skip_mobile_tabfocus = true : app._skip_mobile_tabfocus = true;
                        const role = app.frame ? app.frame.accessibilityrole : app.accessibilityrole;
                        control_elem.setElementAccessibilityRole(role);
                    }
                }
            }
        };
    }
    else
    {
        _pChildFrame._accessibilityModalLock = function (modal_stack)
        {
            if (modal_stack.length > 0)
            {
                var modal_info = modal_stack[modal_stack.length - 1];
                var overlay_elem = modal_info[0]._modal_overlay_elem;
                if (overlay_elem)
                {
                    overlay_elem.setElementAccessibilityStatHidden(true);
                }
            }
            else
            {
                const app = this._getRootObject(); // chk
                if (app)
                {
                    let control_elem = app.frame ? app.frame.getElement() : app.getElement();
                    if (control_elem)
                    {
                        control_elem.setElementAccessibilityStatHidden(true);
                    }
                }


            }
        };

        _pChildFrame._accessibilityModalUnLock = function (modal_stack)
        {
            if (modal_stack.length > 0)
            {
                var info = modal_stack[modal_stack.length - 1];
                var overlay_elem = info[0]._modal_overlay_elem;
                if (overlay_elem)
                {
                    overlay_elem.setElementAccessibilityStatHidden(false);
                }
            }
            else
            {
                const app = this._getRootObject(); // chk
                if (app)
                {
                    let control_elem = app.frame ? app.frame.getElement() : app.getElement();
                    if (control_elem)
                    {
                        control_elem.setElementAccessibilityStatHidden(false);
                    }
                }


            }
        };

        if (nexacro._OS != "Android" && nexacro._Browser == "Chrome")
        {
            _pChildFrame._setModalUnlock = function ()
            {
                var win;
                if (this._window_type == 5)
                {
                    win = this._p_parent ? this._p_parent._getWindow() : null;
                }
                else
                {
                    win = this._getWindow();
                }
                if (!win)
                    return;

                // destroy overlay
                var modal_stack = win._modal_frame_stack;
                var modal_stack_len = modal_stack.length;
                var modal_info;
                for (var i = 0; i < modal_stack_len; i++)
                {
                    modal_info = modal_stack[i];
                    if (modal_info[0] == this)
                    {
                        // pop
                        for (var j = i; j < modal_stack_len - 1; j++)
                        {
                            modal_stack[j] = modal_stack[j + 1];
                        }
                        modal_stack.length = modal_stack_len - 1;
                        break;
                    }
                }

                nexacro._unregisterPopupFrame(this.id, win);

                this._accessibilityModalUnLock(modal_stack);

                // restore window focus
                if (modal_info)
                {
                    var bFocus = false;
                    var old_focus_path = modal_info[2];
                    if (old_focus_path && old_focus_path.length > 0)
                    {
                        // TODO check modal로 막혀있는 도중 객체가 파괴됐을 경우?? 어쩌나??
                        var old_focus_path_len = old_focus_path.length;
                        for (i = 0; i < old_focus_path_len; i++)
                        {
                            var comp = old_focus_path[i];
                            if (comp instanceof nexacro.ChildFrame)
                            {
                                comp._changeStateActivate(true);
                                //comp._on_activate();
                                continue;
                            }
                            else if (comp._is_form)
                            {
                                comp._on_focus(true);
                                //break;
                            }
                            //추후에 접근성 그리드 스펙으로 이동할 필요있음

                            if (comp._is_alive && comp instanceof nexacro._GridCellControl)
                            {
                                bFocus = true;
                                comp._on_focus(true);
                            }
                            else if (bFocus && i == (old_focus_path_len - 1))
                            {
                                comp._on_focus(true);
                            }
                        }
                    }
                }

                if (this._modal_overlay_elem)
                {
                    this._modal_overlay_elem.destroy();
                    this._modal_overlay_elem = null;
                }

            };
        }

    }

    _pChildFrame = null;
}

//==============================================================================
// nexacro.SimpleComponent
//==============================================================================
if (nexacro.SimpleComponent)
{
    var _pSimpleComponent = nexacro.SimpleComponent.prototype;
    //==============================================================================
    // SimpleComponent : Override
    //==============================================================================

    //==============================================================================
    // SimpleComponent : Accessibility Function
    //==============================================================================
    _pSimpleComponent._initAccessibility = function ()    // Basic Component 에서 Override
    {
        this._accessibility_role = "RoleName";      // Basic Component 에서 Role 지정

        //  this._onInitAccessibility();                // User Accessibility 처리시 Override
    };

    _pSimpleComponent._getAccessibilityRole = function ()
    {
        var role = this._p_accessibilityrole ? this._p_accessibilityrole : this._accessibility_role;
        if (!role) role = "none";
        return role;
    };

    _pSimpleComponent._getAccessibilityLabel = function ()
    {
        var label = this._getLinkedLabel(this._p_accessibilitylabel);
        return label ? label : this.on_get_accessibility_label();
    };

    _pSimpleComponent._applyAccessibility = function ()    // Basic Component 에서 Override
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
            this.on_apply_accessibility();
    };

    _pSimpleComponent._clearAccessibility = function ()    // Basic Component 에서 Override
    {
        const env = this._getEnvironment();
        if (env && env._p_enableaccessibility)
        {
            if (env._a11yHistoryList)
            {
                env._remove_accessibility_history(this);
            }
        }
    };

    // [하위 Component 처리]
    // 접근성용 Interface 일부 Override 처리
    _pSimpleComponent._onGetAccessibilityAdditionalRole = function ()
    {
        return "";      // TODO:공백없이 추가되도록
    };

    _pSimpleComponent = null;
}

if (nexacro.ComplexComponent)
{
    var _pComplexComponent = nexacro.ComplexComponent.prototype;
    //==============================================================================
    // ComplexComponent : Override
    //==============================================================================

    //==============================================================================
    // ComplexComponent : Accessibility Function
    //==============================================================================
    // [object.accessibility.role:getadd]
    _pComplexComponent._onGetAccessibilityAdditionalRole = function ()
    {
        return "";
    };

    _pComplexComponent = null;
}

//==============================================================================
// Element
//==============================================================================
if (nexacro.Element)
    {
        var _pElement = nexacro.Element.prototype;
        _pElement.setElementAccessibilityStatHidden = function (hidden)
        {
            // controlelement에만 stat 변수로 저장
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_StatHidden(handle, hidden);
            }
        };
    
        //delete _pElement;
    }
    
    if (nexacro.IconTextElement)
    {
        var _pIconTextElement = nexacro.IconTextElement.prototype;
        _pIconTextElement._on_createAccessibilityHandle = function (handle)
        {
            if (!handle)
                handle = this.handle;
            
            if (handle)
            {
                let parent_elem = this.parent_elem;
                if (parent_elem)
                {
                    let comp = parent_elem.linkedcontrol;
                    const env = comp._getEnvironment();
                    if (env && env._p_enableaccessibility)
                    {
                        if (env._a11ytype == 4)
                        {
                            if (comp instanceof nexacro._GridButtonControl)
                            {
                                nexacro.__setDOMAccessibility_Role(handle, "button");
                                nexacro.__setDOMNode_TabIndex(handle, "-1");
                            }
                            else
                                nexacro.__setDOMAccessibility_StatHidden(handle, true);
                        }
                        else if (env._a11ytype < 4)
                        {
                            if (comp instanceof nexacro.Button && comp._isAccessibilityRoleHeading())
                            {
                                // heading(h tag)는 자체로 초점이 이동 안되어 Button 일때는 내부 role도 설정하여 초점 이동하도록 추가
                                nexacro.__setDOMAccessibility_Role(handle, "button");
                                nexacro.__setDOMNode_TabIndex(handle, "-1");
                            }
                            // RP 100788 101631 label default 변경으로 text contents 출력 
                        }
                    }
                }
            }
        };
    
        _pIconTextElement._on_createAccessibilityCommand = function (acc_command)
        {
            let parent_elem = this.parent_elem;            
            let comp = parent_elem?.linkedcontrol;
            const env = comp._getEnvironment();
            if (env && env._p_enableaccessibility)
            {
                if (env._a11ytype == 4)
                {
                    acc_command += nexacro.__getDOMAccessibilityStr_StatHidden(true);
                }
                else if (env._a11ytype < 4)
                {                    
                    if (comp && comp instanceof nexacro.Button && comp._isAccessibilityRoleHeading())
                    {                        
                        // heading(h tag)는 자체로 초점이 이동 안되어 Button 일때는 내부 role도 설정하여 초점 이동하도록 추가
                        acc_command += nexacro.__getDOMAccessibilityStr_Role("button");
                        acc_command += nexacro.__getHTMLAttr_TabIndex("-1");
                    }
                }
                // RP 100788 101631 label default 변경으로 text contents 출력
            }
    
            return acc_command;
        };
        //delete _pIconTextElement;
    }
    
    //======================================================================
    // nexacro.ControlElement
    //======================================================================
    if (nexacro.ControlElement) // 추후에 수정
    {
        var _pControlElement = nexacro.ControlElement.prototype;
        //======================================================================
        // nexacro.ControlElement : Accessibility Fuction
        //======================================================================
        _pControlElement._refreshControlTabIndex = function (handle, tabindex)
        {
            if (!handle)
                handle = this.handle;
    
            if (handle)
            {
                if (tabindex === undefined)
                {
                    if (this.tabindex > -1)
                    {
                        nexacro.__setDOMNode_TabIndex(handle, this.tabindex);
                    }
                    else
                    {
                        // 동적 생성된 Component의 초점 허용 추가(정적생성과 동일 규칙)
                        var comp = this.linkedcontrol;
                        if (comp && comp._isFocusAcceptable() && !comp._isEditableComponent() && this.accessibilityenable)
                        {
                            nexacro.__setDOMNode_TabIndex(handle, this.tabindex);
                        }
                    }
                }
                else
                {
                    if (tabindex !== null)
                    {
                        nexacro.__setDOMNode_TabIndex(handle, tabindex);
                    }
                    else
                    {
                        nexacro.__removeHTMLAttr_Property(handle, "tabindex");
                    }
                }
            }
        };
    
        _pControlElement._on_createAccessibilityHandle = function (handle)
        {
            if (!handle)
                handle = this.handle;
            
            if (handle)
            {
                var comp = this.linkedcontrol;
                let env = null;
                if (comp)
                    env = comp._getEnvironment();                    
                else
                {
                    if (this.parent_elem)
                        env = this.parent_elem.linkedcontrol._getEnvironment();                                        
                }
                
                if (env && env._p_enableaccessibility)
                {
                    if (env._a11ytype == 5) //android talkback
                    {                        
                        if (comp && comp._skip_mobile_tabfocus)
                            this.tabindex = -99;
                    }
                    if (env._a11ytype == 4)
                    {
                        if (comp instanceof nexacro._GridButtonControl)
                        {
                            nexacro.__setDOMAccessibility_Role(handle, "button");
                            nexacro.__setDOMNode_TabIndex(handle, "-1");
                        }
                        else
                            nexacro.__setDOMAccessibility_StatHidden(handle, true);
                    }
                    else if (env._a11ytype < 4)
                    {
                        if (comp instanceof nexacro.Button && comp._isAccessibilityRoleHeading())
                        {
                            // heading(h tag)는 자체로 초점이 이동 안되어 Button 일때는 내부 role도 설정하여 초점 이동하도록 추가
                            nexacro.__setDOMAccessibility_Role(handle, "button");
                            nexacro.__setDOMNode_TabIndex(handle, "-1");
                        }
                        // RP 100788 101631 label default 변경으로 text contents 출력 
                    }
                }
            }
        };
    
        _pControlElement._on_createAccessibilityCommand = function (acc_command)
        {           
            if (!this._is_popup)
            {
                var comp = this.linkedcontrol;
                const env = comp._getEnvironment();
                if (comp && env && env._p_enableaccessibility)
                {
                    var is_remove_tabindex = false;
                    var is_taborder_bounds = false;
                    if (env._a11ytype == 5) //android talkback
                    {
                        is_remove_tabindex = (comp._skip_mobile_tabfocus || comp._input_element || comp._has_inputElement
                            || (!comp._p_semantictag && comp._p_parent instanceof nexacro.ProgressBar));
                    }
                    else if (env._a11ytype < 4) // Desktop WRE
                    {
                        // focus 처리가 필요한 control 및 item은 tabindex를 명시 센스리더는 tabindex 명시하면 초점 이동 (값 무관)   
                        var root_win = comp._getRootWindow();
                        var is_embedded = nexacro._isEmbeddedWindow(root_win);
                        if (is_embedded)
                        {
                            var _form = comp._refform;
                            if (comp._p_taborder == 0 || comp._p_taborder == _form._child_list.length - 1) // taborderfirst, taborderlast
                                is_taborder_bounds = true;
                        }
                        else
                        {
                            // focus 처리가 필요한 control 및 item은 tabindex를 명시 센스리더는 tabindex 명시하면 초점 이동 (값 무관)
                            var root_win = comp._getRootWindow();
                            var is_embedded = nexacro._isEmbeddedWindow(root_win);
                            if (is_embedded)
                            {
                                var _form = comp._refform;
                                if (comp._p_taborder == 0 || comp._p_taborder == _form._child_list.length - 1) // taborderfirst, taborderlast
                                    is_taborder_bounds = true;
                            }
                            else
                            {
                                is_remove_tabindex = (comp._isEditableComponent() || !this.accessibilityenable || !comp._isFocusAcceptable())
                            }
    
                            // IconTextControlElement 를 사용하는 Button 의 예외 처리
                            if (comp instanceof nexacro.Button && comp._isAccessibilityRoleHeading())
                            {
                                is_remove_tabindex = false;
    
                                // heading(h tag)는 자체로 초점이 이동 안되어 Button 일때는 내부 role도 설정하여 초점 이동하도록 추가
                                acc_command += nexacro.__getDOMAccessibilityStr_Role("button");
                                acc_command += nexacro.__getHTMLAttr_TabIndex("-1");
                            }
                        }
                    }
    
                    // screen reader 의 초점 이동 방지
                    if (is_remove_tabindex)
                    {
                        var replace_str = "tabindex ='" + this.tabindex + "'";
    
                        if (is_taborder_bounds)
                            acc_command = acc_command.replace(replace_str, "tabindex ='0'");
                        else if (is_remove_tabindex)
                            acc_command = acc_command.replace(replace_str, "");
                    }
    
                    acc_command += this._getAccessibilityInfoStr();
                }
            }  
                
            return acc_command;
        };
    
        _pControlElement.setElementAccessibilityRole = function (role)
        {
            var accrole = nexacro._roleList[role];
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();
            if (env && env._a11ytype > 3)
            {
                if (linkedcontrol && linkedcontrol._skip_mobile_tabfocus)
                    accrole = "";
            }
    
            //if (this.accessibilityrole != accrole)
            {
                if (accrole == "treeitem")
                {
                    // Static이 taborder 0번일때 문서 시작 출력 문제 수정
                    if (linkedcontrol._is_subcontrol == false && linkedcontrol._p_taborder == 0)
                    {
                        accrole = "";
                    }
                }
                this.accessibilityrole = accrole;
                var handle = this.handle;
                if (handle)
                {
                    nexacro.__setDOMAccessibility_Role(handle, accrole);
                }
            }
        };
    
        _pControlElement.setElementAccessibilityLabel = function (label)
        {
            if (this.accessibilitylabel != label)
            {
                this.accessibilitylabel = label;
            }
    
            this._updateElementAccessibilityLabel();
        };
    
        _pControlElement.setElementAccessibilityLabelledBy = function (id)
        {
            if (this.handle)
            {
                nexacro.__setDOMAccessibility_LabelledBy(this.handle, id);
            }
        };
    
        _pControlElement.accessibilityparentlabel = "";
    
        _pControlElement.setElementAccessibilityParentLabel = function (parentlabel)
        {
            if (this.accessibilityparentlabel != parentlabel)
            {
                this.accessibilityparentlabel = parentlabel;
            }
    
            this._updateElementAccessibilityLabel();
        };
    
        _pControlElement._updateElementAccessibilityLabel = function ()
        {
            var handle = this.handle;
            if (handle)
            {
                var readlabel = this._makeAccessibilityLabelbyReadtype(this);
                if (readlabel != this.accessibilityreadlabel)
                {
                    var comp = this.linkedcontrol;
                    this.accessibilityreadlabel = readlabel;
                    if (this._isAriaDescription())
                    {
                        if (comp && comp instanceof nexacro._GridCellControl)
                        {
                            readlabel += " " + comp._displaytext;
                        }
                        nexacro.__setDOMAccessibility_Description(handle, readlabel);
                        nexacro.__setDOMAccessibility_Label(handle, "");
                    }
                    else
                    {
                        var env = comp._getEnvironment();
                        nexacro.__setDOMAccessibility_Description(handle, "");
                        if (env?._a11ytype > 3 || !comp._isEditableComponent())
                            nexacro.__setDOMAccessibility_Label(handle, readlabel);
                    }
                }
            }
        };
    
        _pControlElement.setElementAccessibilityEnable = function (enable)
        {
            if (this.accessibilityenable != enable)
            {
                this.accessibilityenable = enable;
                var handle = this.handle;
                if (handle)
                {
                    //label
                    var readlabel = this._makeAccessibilityLabelbyReadtype(this);
                    if (enable) 
                    {
                        //role
                        nexacro.__setDOMAccessibility_Role(handle, this.accessibilityrole);
                        if (readlabel != this.accessibilityreadlabel) 
                        {
                            this.accessibilityreadlabel = readlabel;
                            nexacro.__setDOMAccessibility_Label(handle, readlabel);
                        }
    
                        this.setElementAccessibilityStatHidden(false);
                        this._refreshControlTabIndex(handle, -1); // tabindex
                    }
                    else 
                    {
                        var comp = this.linkedcontrol;
                        const env = comp._getEnvironment();
                        const accessibilitytype = env?._a11ytype;
                        if (accessibilitytype > 3 && comp && !comp._skip_mobile_tabfocus)
                        {
                            nexacro.__setDOMAccessibility_Role(handle, "");
                            nexacro.__setDOMAccessibility_Disabled(handle);
                            nexacro.__setDOMAccessibility_Label(handle, readlabel);
    
                            this._refreshControlTabIndex(handle, null); // tabindex 제거
                            this.setElementAccessibilityStatHidden(true);
                        }
                        else if (accessibilitytype < 4)
                        {
                            // scrollable, container component는 내부에 진입해야 하므로 hidden 처리 안함
                            if (comp && comp._is_containerset != true && comp._is_container != true && comp._is_subcontrol != true && comp._is_scrollable != true)
                            {
                                this.setElementAccessibilityStatHidden(true);
                                this._refreshControlTabIndex(handle, null); // tabindex 제거
                            }
    
                            nexacro.__setDOMAccessibility_Disabled(handle);
                            nexacro.__setDOMAccessibility_Label(handle, readlabel);
                        }
                    }
                }
            }
        };
    
        _pControlElement.setElementAccessibilityDescription = function (desc)
        {
            if (this.accessibilitydescription != desc)
            {
                this.accessibilitydescription = desc;
                var handle = this.handle;
                /*
                if (handle)
                    nexacro.__setDOMAccessibility_Description(handle, desc);
                */
                this._updateElementAccessibilityLabel();
            }
        };
    
        _pControlElement.setElementAccessibilityDescLevel = function (desclevel)
        {
            this.accessibilitydesclevel = desclevel;
    
            this._updateElementAccessibilityLabel();
        };
    
        _pControlElement.setElementAccessibilityAction = function (action)
        {
            this.accessibilityaction = action;
    
            this._updateElementAccessibilityLabel();
        };
    
        _pControlElement.setElementAccessibilityValue = function (value, input, bfocus)
        {
            if (this.accessibility_value != value)
            {
                this.accessibility_value = value;
                var handle = this.handle;
                if (handle)
                {
                    var comp = this.linkedcontrol;  
                    const env = comp._getEnvironment();                    
                    nexacro.__setDOMAccessibility_Value(handle, value, input, bfocus, env);
                }
            }
        };
    
        _pControlElement.setElementAccessibilityStatDisabled = function (disabled)
        {
            if (this.accessibility_stat_disabled != disabled)
            {
                this.accessibility_stat_disabled = disabled;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatDisabled(handle, disabled);
            }
        };
    
        _pControlElement.setElementAccessibilityStatHidden = function (hidden)
        {
            if (this.accessibility_stat_hidden != hidden)
            {
                this.accessibility_stat_hidden = hidden;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatHidden(handle, hidden);
            }
        };
    
        _pControlElement.setElementAccessibilityStatChecked = function (checked)
        {
            if (this.accessibility_stat_checked != checked)
            {
                this.accessibility_stat_checked = checked;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatChecked(handle, checked);
            }
        };
    
        _pControlElement.setElementAccessibilityStatPressed = function (pressed)
        {
            if (this.accessibility_stat_pressed != pressed)
            {
                this.accessibility_stat_pressed = pressed;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatPressed(handle, pressed);
            }
        };
    
        _pControlElement.setElementAccessibilityStatSelected = function (selected)
        {
            if (this.accessibility_stat_selected != selected)
            {
                this.accessibility_stat_selected = selected;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatSelected(handle, selected);
            }
        };
    
        _pControlElement.setElementAccessibilityStatCurrent = function (current)
        {
            if (this.accessibility_stat_current != current)
            {
                this.accessibility_stat_current = current;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatCurrent(handle, current);
            }
        };
    
        _pControlElement.setElementAccessibilityStatLive = function (v)
        {
            if (this.accessibilitylive != v)
            {
                this.accessibilitylive = v;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_Live(handle, v);
            }
    
        };
    
        _pControlElement.setElementAccessibilityStatExpanded = function (expanded)
        {
            this.accessibility_stat_expanded = expanded;
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_StatExpanded(handle, expanded);
            }
        };
    
        _pControlElement.setElementAccessibilityStatAutoComplete = function (autocomplete)
        {
            if (this.accessibility_stat_autocomplete != autocomplete)
            {
                this.accessibility_stat_autocomplete = autocomplete;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatAutoComplete(handle, autocomplete);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagHasPopup = function (haspopup)
        {
            if (this.accessibility_flag_haspopup != haspopup)
            {
                this.accessibility_flag_haspopup = haspopup;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_StatHasPopup(handle, haspopup);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagFocusable = function (focusable)
        {
            if (this.accessibility_flag_focusable != focusable)
            {
                this.accessibility_flag_focusable = focusable;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_FlagFocusable(handle, focusable);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagReadOnly = function (readonly)
        {
            //if (this.accessibility_flag_readonly != readonly)
            {
                this.accessibility_flag_readonly = readonly;
                var handle = this.handle;
                if (handle)
                {
                    nexacro.__setDOMAccessibility_FlagReadOnly(handle, readonly);
                }
            }
        };
    
        _pControlElement.setElementAccessibilityFlagPassword = function (password)
        {
            if (this.accessibility_flag_password != password)
            {
                this.accessibility_flag_password = password;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_FlagPassword(handle, password);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagMultiSelectable = function (multiselectable)
        {
            if (this.accessibility_flag_multiselectable != multiselectable)
            {
                this.accessibility_flag_multiselectable = multiselectable;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_FlagMultiSelectable(handle, multiselectable);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagDefaultButton = function (defaultbutton)
        {
            if (this.accessibility_flag_defaultbutton != defaultbutton)
            {
                this.accessibility_flag_defaultbutton = defaultbutton;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_FlagDefaultButton(handle, defaultbutton);
            }
        };
    
        _pControlElement.setElementAccessibilityFlagMultiLine = function (multiline)
        {
            if (this.accessibility_flag_multiline != multiline)
            {
                this.accessibility_flag_multiline = multiline;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_FlagMultiLine(handle, multiline);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoCount = function (count)
        {
            if (this.accessibility_prop_infocount != count)
            {
                this.accessibility_prop_infocount = count;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoCount(handle, count);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoIndex = function (index)
        {
            if (this.accessibility_prop_infoindex != index)
            {
                this.accessibility_prop_infoindex = index;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoIndex(handle, index);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoValueMax = function (valuemax)
        {
            if (this.accessibility_prop_infovaluemax != valuemax)
            {
                this.accessibility_prop_infovaluemax = valuemax;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoValueMax(handle, valuemax);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoValueMin = function (valuemin)
        {
            if (this.accessibility_prop_infovaluemin != valuemin)
            {
                this.accessibility_prop_infovaluemin = valuemin;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoValueMin(handle, valuemin);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoValueCur = function (valuecur)
        {
            if (this.accessibility_prop_infovaluecur != valuecur)
            {
                this.accessibility_prop_infovaluecur = valuecur;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoValueCur(handle, valuecur);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoLevel = function (level)
        {
            if (this.accessibility_prop_infolevel != level)
            {
                this.accessibility_prop_infolevel = level;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoLevel(handle, level);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoColIndex = function (index)
        {
            if (this.accessibility_prop_infocolindex != index)
            {
                this.accessibility_prop_infocolindex = index;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoColIndex(handle, index);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoRowIndex = function (index)
        {
            if (this.accessibility_prop_inforowindex != index)
            {
                this.accessibility_prop_inforowindex = index;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoRowIndex(handle, index);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoColCount = function (count)
        {
            if (this.accessibility_prop_infocolcount != count)
            {
                this.accessibility_prop_infocolcount = count;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoColCount(handle, count);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoRowCount = function (count)
        {
            if (this.accessibility_prop_inforowcount != count)
            {
                this.accessibility_prop_inforowcount = count;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoRowCount(handle, count);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoColIndexText = function (text)
        {
            if (this.accessibility_prop_infocolindextext != text)
            {
                this.accessibility_prop_infocolindextext = text;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoColIndexText(handle, text);
            }
        };
    
        _pControlElement.setElementAccessibilityInfoRowIndexText = function (text)
        {
            if (this.accessibility_prop_inforowindextext != text)
            {
                this.accessibility_prop_inforowindextext = text;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_InfoRowIndexText(handle, text);
            }
        };
    
        _pControlElement.setElementAccessibilityHotKey = function (hotkey)
        {
            if (this.accessibility_prop_hotkey != hotkey)
            {
                this.accessibility_prop_hotkey = hotkey;
                var handle = this.handle;
                if (handle)
                    nexacro.__setDOMAccessibility_HotKey(handle, hotkey);
            }
        };
    
        _pControlElement.setElementAccessibilityActiveDescendant = function (control, target_elem)
        {
            this.accessibility_prop_activedescendant = control._unique_id;
            var handle = target_elem.handle;
            if (handle)
                nexacro.__setDOMAccessibility_ActiveDescendant(handle, this.accessibility_prop_activedescendant);
        };
    
        _pControlElement.setElementAccessibilityControls = function (id_list, target_elem)
        {
            this.accessibility_prop_controls = id_list;
            var handle = target_elem.handle;
            if (handle)
                nexacro.__setDOMAccessibility_Controls(handle, this.accessibility_prop_controls);
        };
    
        _pControlElement.setElementAccessibilityOwns = function (id_list, target_elem)
        {
            this.accessibility_prop_owns = id_list;
            var handle = target_elem.handle;
            if (handle)
                nexacro.__setDOMAccessibility_Owns(handle, this.accessibility_prop_owns);
        };
    
        _pControlElement.setElementAccessibilityStatFocus = function (readlabel)
        {
            var handle = this.handle;
            var linkedcontrol = this.linkedcontrol;
            var env = linkedcontrol._getEnvironment();
    
            if (readlabel)
            {
                this.accessibilityreadlabel = readlabel;
            }
            else
            {
                readlabel = this._makeAccessibilityLabelbyReadtype(this);
                this.accessibilityreadlabel = readlabel;
            }
    
            /* 가상커서 이동시에도 읽어줘야 하기 때문에 무조건 설정 */
            if (handle)
            {
                if (env?._a11ytype < 4)
                {
                    // 데스크탑은 input에 라벨도 직접 설정하도록 변경함 RP 100002
                    // 근거 WAIARIA가 1.2 부터 권장, 센스리더가 직접 설정하지 않은 라벨과 value가 겹치면 value 음성출력을 제거함
                    if (!linkedcontrol._isEditableComponent())
                    {
                        if (!this._isAriaDescription() || linkedcontrol._isComponentKeydownAction())
                        {
                            nexacro.__setDOMAccessibility_Label(handle, readlabel);
                        }
                    }
                }
                else
                {
                    if (!this._isAriaDescription() || linkedcontrol._isComponentKeydownAction())
                    {
                        nexacro.__setDOMAccessibility_Label(handle, readlabel);
                    }
                }
            }
    
            if (!linkedcontrol._isEnable())
            {
                readlabel += " " + (linkedcontrol._p_value ? linkedcontrol._p_value : "");
                if (handle)
                {
                    nexacro._notifyAccessibility(handle, readlabel, "notify", this, false, false, env);
                }
            }
            else
            {
                env.on_fire_onaccessibility(readlabel, env, linkedcontrol);
            }
            /*
                        var notifyvalue;
                        if (label)
                            notifyvalue = label;
                        else
                        {
                            var readlabel = this._makeAccessibilityLabelbyReadtype(this);
                            this.accessibilityreadlabel = readlabel;
                            notifyvalue = readlabel;
                        }
                        
                        
                        var handle = this.handle;
                        if (handle)
                            nexacro._notifyAccessibility(handle, notifyvalue, "focus", this);
            */
        };
    
        _pControlElement.notifyAccessibility = function (label, notifyevent, bfocus)
        {
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();            
    
            var readlabel = this._makeAccessibilityLabelbyReadtype(this);
            this.accessibilityreadlabel = readlabel;
            nexacro._notifyAccessibility(this.handle, label ? label : this.accessibilityreadlabel, notifyevent ? notifyevent : "notify", this, bfocus, undefined, env);
        };
    
        _pControlElement._makeAccessibilityLabelbyReadtype = function (b_label)
        {
            var label = " ";
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();            
    
            if (this.accessibilityenable && this.accessibilitydesclevel != "none" && this.accessibilitydesclevel != "child")
            {
                if ((env?._a11ydescreadtype & 0x01) == 0x01)
                {
                    label = nexacro._AccessibilityUtil.getAccessibilityLabel(this);
                }
    
                if ((env?._a11ydescreadtype & 0x02) == 0x02 && this.accessibilityaction)
                {
                    label += " " + nexacro._AccessibilityUtil.getAccessibilityAction(this);
                }
    
                if ((env?._a11ydescreadtype & 0x04) == 0x04 && this.accessibilitydescription)
                {
                    label += " " + nexacro._AccessibilityUtil.getAccessibilityDescription(this);
                }
    
                if (nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel)
                {
                    label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
                }
    
                if (this.accessibilityparentlabel)
                {
                    label = this.accessibilityparentlabel + " " + label;
                }
            }
            else // accessibilityenable false / accessibilitydesclevel none or child
            {
                var linkedcontrol = this.linkedcontrol;
                var is_editable = (linkedcontrol && linkedcontrol._isEditableComponent());
                if (is_editable && nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel)
                {
                    if (env?._a11ytype == 4 || (this.accessibilitydesclevel == "none" || this.accessibilitydesclevel == "child"))
                    {
                        label += " " + nexacro._AccessibilityUtil.getAccessibilityAdditionalLabel(this);
                    }
                }
                else
                {
                    // GridBandControl은 Table 구조로 접근성 정보를 제공하므로, 초점 Skip 처리가 안되어 Table처럼 의도적인 "빈줄" 출력 필요
                    if (!(linkedcontrol instanceof nexacro._GridBandControl))
                    {
                        label = '\u200b'; // ZWSP 적용 (라벨출력 방지)
                    }
                }
            }
    
            return label;
        };
    
        _pControlElement._refreshAccessibilityInfo = function (handle, handle_style)
        {
            var comp = this.linkedcontrol;
            const env = comp._getEnvironment();
            const a11ytype = env._a11ytype;
            if (this.accessibilityenable)
            {
                if ((a11ytype == 4 || a11ytype == 5) && comp && comp._skip_mobile_tabfocus)
                    ;
                else if (a11ytype == 5 && comp && !(comp instanceof nexacro.TextArea) && comp._input_element)
                    ;
                else if (a11ytype == 4 && comp && comp._input_element)
                    ;
                else
                    nexacro.__setDOMAccessibility_Role(handle, this.accessibilityrole);
    
                var readlabel = this._makeAccessibilityLabelbyReadtype(this);
                if (readlabel != this.accessibilityreadlabel)
                {
                    this.accessibilityreadlabel = readlabel;
                }
    
                if (this._isAriaDescription())
                {
                    if (comp && comp instanceof nexacro.TextArea)
                    {
                        nexacro.__setDOMAccessibility_Description(handle, this.accessibilityreadlabel + " " + comp._p_text);
                    }
                    else
                    {
                        nexacro.__setDOMAccessibility_Description(handle, this.accessibilityreadlabel);
                    }
                    nexacro.__setDOMAccessibility_Label(handle, "");
                }
                else
                {
                    nexacro.__setDOMAccessibility_Description(handle, "");
                    // 누락코드 추가
                    if (a11ytype > 3 || (comp && !comp._isEditableComponent()))
                    {
                        if (a11ytype > 3)
                        {
                            if (comp && comp instanceof nexacro._CellButtonControl)
                                this.accessibility_stat_hidden = true;
                        }
                        nexacro.__setDOMAccessibility_Label(handle, this.accessibilityreadlabel);
                    }
                }
            }
            else
            {
                if ((a11ytype == 4 || a11ytype == 5) && comp && !comp._skip_mobile_tabfocus)
                {
                    nexacro.__setDOMAccessibility_Role(handle, "");
                    this.accessibility_stat_hidden = true;
                }
                else
                {
                    nexacro.__setDOMAccessibility_Disabled(handle);
                    this._refreshControlTabIndex(handle, null);
                }
            }
    
            if (this.accessibility_value)
                nexacro.__setDOMAccessibility_Value(handle, this.accessibility_value, undefined, undefined, env);
    
            if (this.accessibility_stat_disabled !== undefined)
                nexacro.__setDOMAccessibility_StatDisabled(handle, this.accessibility_stat_disabled);
            if (this.accessibility_stat_hidden !== undefined)
                nexacro.__setDOMAccessibility_StatHidden(handle, this.accessibility_stat_hidden);
    
            if (this.accessibility_stat_checked !== undefined)
                nexacro.__setDOMAccessibility_StatChecked(handle, this.accessibility_stat_checked);
            if (this.accessibility_stat_pressed !== undefined)
                nexacro.__setDOMAccessibility_StatPressed(handle, this.accessibility_stat_pressed);
            if (this.accessibility_stat_selected !== undefined)
                nexacro.__setDOMAccessibility_StatSelected(handle, this.accessibility_stat_selected);
            if (this.accessibility_stat_expanded !== undefined)
                nexacro.__setDOMAccessibility_StatExpanded(handle, this.accessibility_stat_expanded);
            if (this.accessibility_stat_autocomplete !== undefined)
                nexacro.__setDOMAccessibility_StatAutoComplete(handle, this.accessibility_stat_autocomplete);
    
            if (this.accessibility_flag_haspopup !== undefined)
                nexacro.__setDOMAccessibility_StatHasPopup(handle, this.accessibility_flag_haspopup);
            if (this.accessibility_flag_focusable !== undefined)
                nexacro.__setDOMAccessibility_FlagFocusable(handle, this.accessibility_flag_focusable);
            if (this.accessibility_flag_readonly !== undefined)
                nexacro.__setDOMAccessibility_FlagReadOnly(handle, this.accessibility_flag_readonly);
    
            if (this.accessibility_flag_password !== undefined)
                nexacro.__setDOMAccessibility_FlagPassword(handle, this.accessibility_flag_password);
            if (this.accessibility_flag_multiselectable !== undefined)
                nexacro.__setDOMAccessibility_FlagMultiSelectable(handle, this.accessibility_flag_multiselectable);
            if (this.accessibility_flag_defaultbutton !== undefined)
                nexacro.__setDOMAccessibility_FlagDefaultButton(handle, this.accessibility_flag_defaultbutton);
            if (this.accessibility_flag_multiline !== undefined)
                nexacro.__setDOMAccessibility_FlagMultiLine(handle, this.accessibility_flag_multiline);
    
            if (this.accessibility_prop_infocount !== undefined)
                nexacro.__setDOMAccessibility_InfoCount(handle, this.accessibility_prop_infocount);
            if (this.accessibility_prop_infoindex !== undefined)
                nexacro.__setDOMAccessibility_InfoIndex(handle, this.accessibility_prop_infoindex);
    
            if (this.accessibility_prop_infovaluecur !== undefined)
                nexacro.__setDOMAccessibility_InfoValueCur(handle, this.accessibility_prop_infovaluecur);
            if (this.accessibility_prop_infovaluemax !== undefined)
                nexacro.__setDOMAccessibility_InfoValueMax(handle, this.accessibility_prop_infovaluemax);
            if (this.accessibility_prop_infovaluemin !== undefined)
                nexacro.__setDOMAccessibility_InfoValueMin(handle, this.accessibility_prop_infovaluemin);
            if (this.accessbility_prop_infocolindex !== undefined)
                nexacro.__setDOMAccessibility_InfoColIndex(handle, this.accessbility_prop_infocolindex);
            if (this.accessbility_prop_inforowindex !== undefined)
                nexacro.__setDOMAccessibility_InfoRowIndex(handle, this.accessbility_prop_inforowindex);
            if (this.accessibility_prop_infocolcount !== undefined)
                nexacro.__setDOMAccessibility_InfoColCount(handle, this.accessibility_prop_infocolcount);
            if (this.accessibility_prop_inforowcount !== undefined)
                nexacro.__setDOMAccessibility_InfoRowCount(handle, this.accessibility_prop_inforowcount);
            if (this.accessibility_prop_infolevel !== undefined)
                nexacro.__setDOMAccessibility_InfoLevel(handle, this.accessibility_prop_infolevel);
        };
    
        _pControlElement._getAccessibilityInfoStr = function ()
        {
            var str = "", comp = this.linkedcontrol;
            const env = comp._getEnvironment();
            const a11ytype = env._a11ytype;
    
            var readlabel = this._makeAccessibilityLabelbyReadtype(this);
            if (this.accessibilityenable)
            {
                if ((a11ytype == 4 || a11ytype == 5) && comp && comp._skip_mobile_tabfocus)
                    str = "";
                else if (a11ytype == 5 && comp && !(comp instanceof nexacro.TextArea) && comp._input_element) //(nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) && this.linkedcontrol &&/*!(this.linkedcontrol instanceof nexacro.TextArea) &&*/ this.linkedcontrol._input_element)
                    str = "";
                else if (a11ytype == 4 && comp && comp._input_element)
                    str = "";
                else
                    str = nexacro.__getDOMAccessibilityStr_Role(this.accessibilityrole);
    
                //sense reader 8.1 자동읽기 기능 off - 추후에 자동읽기 기능이 필요하면 논의 후 기능 추가
                if (a11ytype == 2)
                {
                    str += nexacro.__getDOMAccessibilityStr_Live("off");
                }
    
                if (readlabel != this.accessibilityreadlabel)
                {
                    this.accessibilityreadlabel = readlabel;
                }
    
                if (this._isAriaDescription())
                {
                    if (comp)
                    {
                        let description_label = this.accessibilityreadlabel;
                        if (comp instanceof nexacro.TextArea)
                        {
                            description_label += " " + comp._p_text;
                        }
                        else if (comp instanceof nexacro._GridCellControl)
                        {
                            description_label += " " + comp._displaytext;
                        }
    
                        str += nexacro.__getDOMAccessibilityStr_Description(description_label);
                    }
                    else
                    {
                        //if (this.accessibilityreadlabel != " ")
                        str += nexacro.__getDOMAccessibilityStr_Description(this.accessibilityreadlabel);
                    }
                    str += nexacro.__getDOMAccessibilityStr_Label("");
                }
                else
                {
                    str += nexacro.__getDOMAccessibilityStr_Description("");
                    if (a11ytype > 3 || !comp._isEditableComponent())
                    {
                        if (a11ytype > 3)
                        {
                            if (comp && comp instanceof nexacro._CellButtonControl)
                                this.accessibility_stat_hidden = true;
                        }
                        str += nexacro.__getDOMAccessibilityStr_Label(this.accessibilityreadlabel);
                    }
                }
            }
            else
            {
                if ((a11ytype == 4 || a11ytype == 5) && comp)
                {
                    if (!comp._skip_mobile_tabfocus)
                        this.accessibility_stat_hidden = true;
                    else
                        str = "";
                }
                else if (a11ytype < 4)
                {
                    // scrollable, container component는 내부에 진입해야 하므로 hidden 처리 안함
                    if (comp && comp._is_containerset != true && comp._is_container != true && comp._is_subcontrol != true && comp._is_scrollable != true)
                    {
                        if (!comp._isItemAccessibilityEnable())
                        {
                            this.accessibility_stat_hidden = true;
                        }
                    }
    
                    str = nexacro.__getDOMAccessibilityStr_Disabled();
                    str = nexacro.__getDOMAccessibilityStr_Label(readlabel);
                }
            }
            // this part set event handler --> move to attach_handle()
            //if (this.accessibility_value)
            //	nexacro.__getDOMAccessibilityStr_Value(this.accessibility_value);
    
            if (this.accessibility_stat_disabled !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatDisabled(this.accessibility_stat_disabled);
            if (this.accessibility_stat_hidden !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatHidden(this.accessibility_stat_hidden);
    
            if (this.accessibility_stat_checked !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatChecked(this.accessibility_stat_checked);
            if (this.accessibility_stat_pressed !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatPressed(this.accessibility_stat_pressed);
            if (this.accessibility_stat_selected !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatSelected(this.accessibility_stat_selected);
    
            if (this.accessibility_stat_current !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatCurrent(this.accessibility_stat_current);
    
            if (this.accessibility_stat_expanded !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatExpanded(this.accessibility_stat_expanded);
            if (this.accessibility_stat_autocomplete !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatAutoComplete(this.accessibility_stat_autocomplete);
    
            if (this.accessibility_flag_haspopup !== undefined)
                str += nexacro.__getDOMAccessibilityStr_StatHasPopup(this.accessibility_flag_haspopup);
            if (this.accessibility_flag_focusable !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagFocusable(this.accessibility_flag_focusable);
            if (this.accessibility_flag_readonly !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagReadOnly(this.accessibility_flag_readonly);
    
            if (this.accessibility_flag_password !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagPassword(this.accessibility_flag_password);
            if (this.accessibility_flag_multiline !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagMultiLine(this.accessibility_flag_multiline);
            if (this.accessibility_flag_multiselectable !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagMultiSelectable(this.accessibility_flag_multiselectable);
    
            if (this.accessibility_flag_defaultbutton !== undefined)
                str += nexacro.__getDOMAccessibilityStr_FlagDefaultButton(this.accessibility_flag_defaultbutton);
    
            if (this.accessibility_prop_infocount !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoCount(this.accessibility_prop_infocount);
            if (this.accessibility_prop_infoindex !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoIndex(this.accessibility_prop_infoindex);
    
            if (this.accessibility_prop_infovaluecur !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoValueCur(this.accessibility_prop_infovaluecur);
            if (this.accessibility_prop_infovaluemax !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoValueMax(this.accessibility_prop_infovaluemax);
            if (this.accessibility_prop_infovaluemin !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoValueMin(this.accessibility_prop_infovaluemin);
    
            if (this.accessbility_prop_infocolindex !== undefined)
                str += nexacro.__getDOMAccessibility_InfoColIndex(this.accessbility_prop_infocolindex);
            if (this.accessbility_prop_inforowindex !== undefined)
                str += nexacro.__getDOMAccessibility_InfoRowIndex(this.accessbility_prop_inforowindex);
            if (this.accessibility_prop_infocolcount !== undefined)
                str += nexacro.__getDOMAccessibility_InfoColCount(this.accessibility_prop_infocolcount);
            if (this.accessibility_prop_inforowcount !== undefined)
                str += nexacro.__getDOMAccessibility_InfoRowCount(this.accessibility_prop_inforowcount);
            if (this.accessibility_prop_infolevel !== undefined)
                str += nexacro.__getDOMAccessibilityStr_InfoLevel(this.accessibility_prop_infolevel);
    
            return str;
        };
    
        _pControlElement._setAccessibility_notify = function (handle)
        {
            if (this.accessibility_value)
            {
                var linkedcontrol = this.linkedcontrol;
                const env = linkedcontrol._getEnvironment();    
                nexacro._notifyAccessibility(handle, this.accessibility_value, this, undefined, undefined, undefined, env);
            }
        };
    
        _pControlElement._isAriaDescription = function (role)
        {   
            var comp = this.linkedcontrol;       
            const env = comp._getEnvironment();
            const a11ytype = env._a11ytype;
            if (a11ytype == 5 && comp instanceof nexacro.Static) // Android TalkBack에서 Static label을 읽지 않아 Description만 설정
                return true;
    
            if (a11ytype < 4)
            {
                var comp = this.linkedcontrol;
                if (comp && comp instanceof nexacro.TextArea)
                {
                    if (comp._p_readonly || !comp._p_enable)
                    {
                        return true;
                    }
                }
    
                if (nexacro._Browser == "Chrome")
                {
                    if (this.accessibilityrole == "none" ||
                        this.accessibilityrole == "tabpanel" ||
                        this.accessibilityrole == "cell" ||
                        this.accessibilityrole == "columnheader" ||
                        this.accessibilityrole == "rowheader" ||
                        this.accessibilityrole == "link")
                    {
                        return true;
                    }
                }
            }
            return false;
        };
    
        _pControlElement._setElementAccessibilityTextContent = function (textContent)
        {
            var handle = this.handle;
            if (handle)
                nexacro.__setDOM_TextContent(handle, textContent);
        };
    
        _pControlElement._setElementAccessibilityDescriptionBy = function (id)
        {
            var handle = this.handle;
            if (handle)
                nexacro.__setDOMAccessibility_DescriptionBy(handle, id);
        };
    
        //delete _pControlElement;
    }
    
    //======================================================================
    // nexacro.ScrollableControlElement
    //======================================================================
    if (nexacro.ScrollableControlElement)
    {
        var _pScrollableControlElement = nexacro.ScrollableControlElement.prototype;
        _pScrollableControlElement._refreshControl = function (handle, handle_style/*, _doc*/)
        {
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();
            const a11ytype = env._a11ytype;
            if (linkedcontrol && linkedcontrol._skip_mobile_tabfocus && a11ytype == 5)
                this.tabindex = -99;    // skips setting tabindex                
    
            nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
        };
    
        //delete _pScrollableControlElement;
    }
    
    //======================================================================
    // nexacro.FrameControlElement
    //======================================================================
    if (nexacro.FrameControlElement)
    {
        var _pFrameControlElement = nexacro.FrameControlElement.prototype;
        _pFrameControlElement._refreshControl = function (handle, handle_style/*, _doc*/)
        {
            const env = this.linkedcontrol._getEnvironment();
            const a11ytype = env._a11ytype;
            if (a11ytype == 5)
            {
                this.tabindex = -99;
            }
    
            nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
        };
    
        //delete _pFrameControlElement;
    }
    
    //======================================================================
    // nexacro.GridRowControlElement
    //======================================================================
    if (nexacro.GridRowControlElement)
    {
        var _pGridRowControlElement = nexacro.GridRowControlElement.prototype;
        _pGridRowControlElement._refreshControl = function (handle, handle_style/*, _doc*/)
        {            
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();
            const a11ytype = env?._a11ytype;
            if (env._p_enableaccessibility && a11ytype == 5) //android talkback
            {               
                if (linkedcontrol && linkedcontrol._skip_mobile_tabfocus)
                    this.tabindex = -99;
            }
    
            nexacro.ControlElement.prototype._refreshControl.call(this, handle, handle_style);
        };
    
        _pGridRowControlElement._setScrollableElementHScrollPos = function (evt, left)
        {
            // change the scroll of grid by changing grid row
            var linkedcontrol = this.linkedcontrol;
            const env = linkedcontrol._getEnvironment();
            const a11ytype = env?._a11ytype;
            if (env._p_enableaccessibility && a11ytype > 3)
            {
                var scrollable_elem = this.parent_elem.parent_elem;
                if (scrollable_elem._last_scroll_left != left)
                {
                    // change scrollpos (GridScrollableControlElement > GridBandControlElement > GridRowControlElement)
                    scrollable_elem._setContainerHScrollPos(left);
                    nexacro._stopSysEvent(evt);
                }
            }
        }
    
        //delete _pGridRowControlElement;
    }
    
    //======================================================================
    // nexacro.TextBoxElement
    //======================================================================
    if (nexacro.TextBoxElement)
    {
        var _pTextBoxElement = nexacro.TextBoxElement.prototype;
        _pTextBoxElement._on_createAccessibilityHandle = function (handle)
        {
            if (!handle)
                handle = this.handle;
            
            if (handle)
            {
                const parent_elem = this.parent_elem;
                if (parent_elem)
                {
                    var comp = parent_elem.linkedcontrol;
                    if (comp)
                    {
                        const env = comp._getEnvironment();    
                        if (env && env._p_enableaccessibility)
                        {                    
                            if ( env._a11ytype < 4)
                            {
                                // 테이블 모드 지원위해서 설정
                                if (comp instanceof nexacro._GridCellControl)
                                {
                                    this.setElementAccessibilityStatHidden(true);
                                }
                            }
                            else // for mobile
                            {
                                if (comp instanceof nexacro.Static)
                                {
                                    nexacro.__setDOMAccessibility_StatHidden(handle, true);
                                }
                            }
                        }
                    }
                }            
                // RP 100788 101631 label default 변경으로 text contents 출력
            }
        };
    
        _pTextBoxElement._on_createAccessibilityCommand = function (acc_command)
        {           
            const parent_elem = this.parent_elem;
            if (parent_elem)
            {
                var comp = parent_elem.linkedcontrol;
                if (comp)
                {
                    const env = comp._getEnvironment();
                    if (env && env._p_enableaccessibility)
                    {
                        if (env._a11ytype < 4)
                        {
                            // 테이블 모드 지원위해서 설정
                            if (comp instanceof nexacro._GridCellControl)
                            {
                                acc_command += nexacro.__getDOMAccessibilityStr_StatHidden(true);
                            }
                        }
                        else // for mobile
                        {
                            if (comp instanceof nexacro.Static)
                            {
                                acc_command += nexacro.__getDOMAccessibilityStr_StatHidden(true);
                            }
                        }
                    }
                }
            }
            // RP 100788 101631 label default 변경으로 text contents 출력
            
            return acc_command;
        };
    
        //delete _pTextBoxElement;
    }
    
    //======================================================================
    // nexacro.TextAreaElement
    //======================================================================
    if (nexacro.TextAreaElement)
    {
        var _pTextAreaElement = nexacro.TextAreaElement.prototype;
        _pTextAreaElement._on_createAccessibilityCommand = function (acc_command)
        {   
            var parent_elem = this.parent_elem;
            if (parent_elem)                    
            {
                const env = parent_elem.linkedcontrol._getEnvironment();
                if (env && env._p_enableaccessibility)
                {
                    // 데스크탑은 input에 라벨도 직접 설정하도록 변경함 RP 100002
                    // 근거 WAIARIA가 2.1 부터 권장, 센스리더가 직접 설정하지 않은 라벨과 value가 겹치면 value 음성출력을 제거함
                    var comp_label = parent_elem._makeAccessibilityLabelbyReadtype();
                    if (env._a11ytype < 4)
                    {
                        acc_command += nexacro.__getDOMAccessibilityStr_Label(comp_label);
                    }
                    else
                    {
                        acc_command += nexacro.__getDOMAccessibilityStr_LabelledBy(parent_elem.name);
                        acc_command += nexacro.__getDOMAccessibilityStr_Role(parent_elem.accessibilityrole);
                    }
    
                    var tmp_command = nexacro.__getDOMAccessibilityStr_Labelfor(this.name);
                    acc_command = tmp_command + acc_command;
                }
            }        
    
            return acc_command;
        };
    
        //delete _pTextAreaElement;
    }
    
    //======================================================================
    // nexacro.InputElement
    //======================================================================
    if (nexacro.InputElement)
    {
        var _pInputElement = nexacro.InputElement.prototype;
        _pInputElement._on_createAccessibilityHandle = function (_doc, owner_elem, handle)
        {
            if (!handle)
                handle = this.handle;    
    
            if (handle)
            {
                var parent_elem = this.parent_elem;
                const env = parent_elem.linkedcontrol._getEnvironment();
                if (env && env._p_enableaccessibility)
                {
                    if (!this._label_handle)
                    {
                        var label_handle = nexacro.__createLabelElementHandle(_doc, this.name);
                        if (label_handle)
                        {
                            this._label_handle = label_handle;
                            nexacro.__appendDOMNode(owner_elem.dest_handle, label_handle);
                        }
                    }
                    
                    if (parent_elem)
                    {
                        // 데스크탑은 input에 라벨도 직접 설정하도록 변경함 RP 100002
                        // 근거 WAIARIA가 1.2 부터 권장, 센스리더가 직접 설정하지 않은 라벨과 value가 겹치면 value 음성출력을 제거함
                        if (env._a11ytype < 4)
                        {
                            var comp_label = parent_elem._makeAccessibilityLabelbyReadtype();
                            nexacro.__setDOMAccessibility_Label(handle, comp_label);
                        }
                        else
                        {
                            nexacro.__setDOMAccessibility_LabelBy(handle, parent_elem.name);
                            nexacro.__setDOMAccessibility_Role(handle, parent_elem.accessibilityrole);
                        }
                    }
                }
            }
        };
    
        _pInputElement._on_createAccessibilityCommand = function (acc_command)
        {
            var parent_elem = this.parent_elem;
            const env = parent_elem.linkedcontrol._getEnvironment();            
            if (env && env._p_enableaccessibility)
            {
                var owner_elem = this.owner_elem;
                if (owner_elem)
                {
                    if (!nexacro._isNull(this.value) || this.value === "")
                    {
                        var owner_comp = owner_elem.linkedcontrol;
                        if (env._a11ytype == 5 || (owner_comp && (owner_comp instanceof nexacro.MaskEdit)))
                        {
                            var replace_str = "value ='" + nexacro._encodeXml(this.value) + "'";
                            acc_command.replace(replace_str, "");
                        }
                    }
    
                    if (env._a11ytype < 4)
                    {
                        acc_command += "tabIndex='" + this.tabindex + "' ";
                    }
    
                    // 데스크탑은 input에 라벨도 직접 설정하도록 변경함 RP 100002
                    // 근거 WAIARIA가 1.2 부터 권장, 센스리더가 직접 설정하지 않은 라벨과 value가 겹치면 value 음성출력을 제거함
                    var comp_label = owner_elem._makeAccessibilityLabelbyReadtype();
                    if (env._a11ytype < 4)
                    {
                        acc_command += nexacro.__getDOMAccessibilityStr_Label(comp_label);
                    }
                    else
                    {
                        acc_command += nexacro.__getDOMAccessibilityStr_LabelledBy(owner_elem.name);
                        acc_command += nexacro.__getDOMAccessibilityStr_Role(owner_elem.accessibilityrole);
                    }
                }
    
                var tmp_command = nexacro.__getDOMAccessibilityStr_Labelfor(this.name);
                acc_command = tmp_command + acc_command;
            }
    
            return acc_command;
        };
    
        _pInputElement.setElementAccessibilityRole = function (role)
        {
            var accrole = nexacro._roleList[role];
            var input_handle = this.handle;
            if (input_handle)
            {
                nexacro.__setDOMAccessibility_Role(input_handle, accrole);
            }
        };
    
        _pInputElement.setElementAccessibilityActiveDescendant = function (target_id)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_ActiveDescendant(handle, target_id);
            }
        };
    
        _pInputElement.setElementAccessibilityControls = function (controls_list)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_Controls(handle, controls_list);
            }
        };
    
        _pInputElement.setElementAccessibilityOwns = function (owns_list)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_Owns(handle, owns_list);
            }
        };
    
        _pInputElement.setElementAccessibilityStatAutoComplete = function (autocomplete)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_StatAutoComplete(handle, autocomplete);
            }
        };
    
        _pInputElement.setElementAccessibilityStatExpanded = function (expanded)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_StatExpanded(handle, expanded);
            }
        };
    
        _pInputElement.setElementAccessibilityFlagHasPopup = function (haspopup)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_StatHasPopup(handle, haspopup);
            }
        };
    
        _pInputElement.setElementAccessibilityFlagReadOnly = function (readonly)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_FlagReadOnly(handle, readonly);
            }
        };
    
        _pInputElement.setElementAccessibilityInfoValueMax = function (valuemax)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_InfoValueMax(handle, valuemax);
            }
        };
    
        _pInputElement.setElementAccessibilityInfoValueMin = function (valuemin)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_InfoValueMin(handle, valuemin);
            }
        };
    
        _pInputElement.setElementAccessibilityInfoValueCur = function (valuecur)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_InfoValueCur(handle, valuecur);
            }
        };
    
        // CHECK : Element Value Cache를 사용하여 처리할 것
        _pInputElement._setElementInputRole = function ()
        {
        };
    
        if (nexacro._Browser == "Chrome" || nexacro._Browser == "Gecko" || nexacro._Browser == "Edge")
        {
            _pInputElement._wantAccessibilityAdditionalLabel = function ()
            {
                return true;
            };
        }
    
        // controlelement의 label을 input에 업데이트 (WAI-ARIA 2.1)
        _pInputElement._updateElementAccessibilityLabel = function ()
        {
            var handle = this.handle;
            if (handle)
            {
                var readlabel = "";
    
                var control_elem = this.parent_elem;
                if (control_elem)
                {
                    readlabel = control_elem.accessibilityreadlabel;
                }
    
                nexacro.__setDOMAccessibility_Label(handle, readlabel);
            }
        };
    
        _pInputElement.setElementAccessibilityStatLive = function (v)
        {
            var handle = this.handle;
            if (handle)
            {
                nexacro.__setDOMAccessibility_Live(handle, v);
            }
        };
    
        //delete _pInputElement;
    }
    
    //======================================================================
    // nexacro._ContainerElement
    //======================================================================
    if (nexacro._ContainerElement)
    {
        var _pContainerElement = nexacro._ContainerElement.prototype;
        var _bind_container_scroll_handler_after = function (elem, hpos, vpos)
        {
            var control_elem = elem.parent;
            var linked_control = control_elem?.linkedcontrol;
            const env = linked_control._getEnvironment();
            const a11ytype = env._a11ytype;
            if (a11ytype == 5)
            {               
                if (control_elem)
                {
                    control_elem.scroll_top = vpos;
                    control_elem.scroll_left = hpos;                    
                    if (linked_control)
                    {
                        linked_control._setHscrollPos(hpos);
                        linked_control._setVscrollPos(vpos);
                    }
                }
            }
            else if (a11ytype == 4)
            {
                if (control_elem && linked_control)
                {   
                    linked_control._scrollTo(hpos, vpos, true, false, undefined, "slide");                    
                }
            }
        };
    
        _pContainerElement._on_createAccessibilityHandle = function (handle)
        {
            if (!handle)
                handle = this.handle;
            
            if (handle)
            {
                var env; 
                var parent_elem = this.parent_elem;
                while(parent_elem && !parent_elem.linkedcontrol)
                {
                    parent_elem = parent_elem.parent_elem;
                }
    
                if (parent_elem && parent_elem.linkedcontrol)
                    env = parent_elem.linkedcontrol._getEnvironment();
    
                if (env && env._p_enableaccessibility)
                {
                    nexacro._AccessibilityUtil.supportMobileApplicationAccessibility(handle, undefined, env._a11ytype);
    
                    let owner_elem = this.parent_elem;
                    if (env._a11ytype > 3) 
                    {
                        if (!this._use_translate_scroll)
                        {
                            var handle_style = handle.style;
    
                            // for scrolling by virtual focusing 
                            if (!(owner_elem instanceof nexacro.GridScrollableControlElement || owner_elem instanceof nexacro.GridBandControlElement || owner_elem instanceof nexacro.GridRowControlElement))
                            {
                                if (env._a11ytype == 4)
                                {
                                    nexacro.__setDOMStyle_Overflow(handle_style, "scroll");
                                }
                                if (this._layoutype == "default")
                                    nexacro.__setDOMStyle_Display(handle_style, "block");
                            }
                        }
                    }
                    else
                    {
                        if (owner_elem instanceof nexacro.GridRowControlElement)
                        {
                            // left band는 rowheader 처리
                            let is_left = (this.type === "left");
                            nexacro.__setDOMAccessibility_Role(handle, (is_left) ? nexacro._roleList["null"] : nexacro._roleList["row"]);
                            this.setElementAccessibilityStatHidden(is_left);
                        }
                    }
                }
            }
        };
    
        _pContainerElement._on_createAccessibilityCommand = function (acc_command)
        {
            var owner_elem = this.parent_elem;
            const env = owner_elem.linkedcontrol._getEnvironment();
            if (env && env._p_enableaccessibility)
            {
                if (env._a11ytype < 4)
                {                    
                    if (owner_elem instanceof nexacro.GridRowControlElement)
                    {
                        // left band는 rowheader 처리
                        let is_left = (this.type === "left");
                        acc_command += nexacro.__getDOMAccessibilityStr_Role((is_left) ? nexacro._roleList["null"] : nexacro._roleList["row"]);
                        acc_command += nexacro.__getDOMAccessibilityStr_StatHidden(is_left);
                    }
                }
            }
            return acc_command;
        };
    
        // container의 style 관련함수 분리
        _pContainerElement._getAccessibilityStyleStr = function ()
        {
            let acc_command = "";
            var owner_elem = this.parent_elem;
            const env = owner_elem.linkedcontrol._getEnvironment();
            if (env && env._p_enableaccessibility)
            {
                // for scrolling by virtual focusing
                if (env._a11ytype > 3)
                {                    
                    if (!this._use_translate_scroll)
                    {
                        if (!(owner_elem instanceof nexacro.GridScrollableControlElement || owner_elem instanceof nexacro.GridBandControlElement || owner_elem instanceof nexacro.GridRowControlElement))
                        {
                            acc_command += "overflow:scroll;display:block;";
                        }
                    }
                }
            }
            return acc_command;
        };
    
        _pContainerElement = null;
        //delete _pContainerElement;
    }
    
    if (nexacro._WebBrowserPluginElement)
    {
        var __pWebBrowserPluginElement = nexacro._WebBrowserPluginElement.prototype;
    
        __pWebBrowserPluginElement._createInternalAccessibilityElementHandle = function (win, owner_elem)
        {
            var message_elem = null;
            const env = owner_elem.linkedcontrol._getEnvironment();
            if (!env || !env._p_enableaccessibility)
                return null;
    
            message_elem = new nexacro.TextBoxElement(owner_elem);
            if (message_elem)
            {
                message_elem.setElementText('\u200b'); //ZWSP
                message_elem.setElementPosition(this.width, this.height)
    
                if (nexacro._Browser == "MobileSafari" || nexacro._OS == "Android")
                {
                    message_elem.setElementVisible(false);
                }
    
                message_elem.create(win);
    
                let message_elem_handle = message_elem.handle;
                if (message_elem_handle)
                {
                    nexacro.__setDOMAccessibility_StatHidden(message_elem_handle, false);
                    nexacro.__setDOMNode_TabIndex(message_elem_handle, -1);
    
                    let message_elem_style = message_elem_handle.style;
                    nexacro.__setDOMStyle_OpacityObject(message_elem_style, 0);
    
                    nexacro._observeSysEvent(message_elem_handle, "focus", "onfocus", this._iframe_onfocus_forward);
                }
            }
    
            return message_elem;
        };
    
        //delete __pWebBrowserPluginElement;
    }
    
    if (nexacro._WebViewPluginElement)
    {
        var __pWebViewPluginElement = nexacro._WebViewPluginElement.prototype;
        __pWebViewPluginElement._createInternalAccessibilityElementHandle = __pWebBrowserPluginElement._createInternalAccessibilityElementHandle;
    
        //delete __pWebViewPluginElement;
    }
    
    //==============================================================================
    // SystemBase
    //==============================================================================  
    nexacro.__setDOMAccessibility_Disabled = function (node)
    {
        node.setAttribute("role", this._roleList.noread);
        node.setAttribute("aria-label", "");
        //node.setAttribute("aria-description", "");
        //  node.setAttribute("aria-labelledby", "accessibility_notify_0");
    };
    nexacro.__getDOMAccessibilityStr_Disabled = function ()
    {
        //return "role='listitem' aria-label='&#8203;' aria-description='&#8203;' aria-labelledby='accessibility_notify_0'"; // 빈줄출력 방지
        return "role='listitem' aria-label=''"; // 빈줄출력 방지
    };
    
    nexacro.__setDOMAccessibility_Role = function (node, role)
    {
        if (role)
            node.setAttribute("role", role);
        else
            node.removeAttribute("role");
        //node.setAttribute("role", (role ? role : "document"));
    };
    nexacro.__getDOMAccessibilityStr_Role = function (role)
    {
        //if (role)
        //    return "role='" + this._roleList[role] + "'";
        return "role='" + (role ? role : "") + "'";
    
    };
    
    nexacro.__setDOMAccessibility_Label = function (node, label)
    {
        node.setAttribute("aria-label", (label ? label : " "));
    };
    nexacro.__getDOMAccessibilityStr_Label = function (label, text)
    {
        if (label)
            label = label.toString().replace(/['"]/g, "");  //label = label.toString().replace(/[\'\"]/g, "");
    
        /*if (nexacro._accessibilitytype == 5)
        { //displaynulltext 두번읽어주는 문제로 기본테스트에 정상동작하고 불필요하다고 판단하여 주석 처리 
            if (label)
                label = label.trim();
    
            return " aria-label='" + (label ? label : " ") + (text? text : "") + "'";
        }
        else*/
        return " aria-label='" + (label ? label : " ") + (text ? text : "") + "'";
    };
    
    nexacro.__setDOMAccessibility_DescLevel = function (node, label)
    {
        node.setAttribute("aria-label", " ");
    };
    nexacro.__getDOMAccessibilityStr_DescLevel = function (label)
    {
        return " aria-label=' '";
    };
    nexacro.__setDOMAccessibility_LabelledBy = function (node, id)
    {
        node.setAttribute("aria-labelledby", (id ? id : "accessibility_notify_0"));
    };
    nexacro.__getDOMAccessibilityStr_LabelledBy = function (id)
    {
        return " aria-labelledby='" + (id ? id : "accessibility_notify_0") + "'";
    };
    nexacro.__setDOMAccessibility_Description = function (node, desc)
    {
        node.setAttribute("aria-description", desc);
    };
    nexacro.__getDOMAccessibilityStr_Description = function (desc)
    {
        if (desc)
            desc = desc.toString().replace(/['"]/g, "") //(/[\'\"]/g, "");
    
        return " aria-description='" + (desc ? desc : "") + "'";
    };
    
    nexacro.__setDOMAccessibility_DescriptionBy = function (node, id)
    {
        if (id)
        {
            node.setAttribute("aria-describedby", id);
        }
    };
    nexacro.__getDOMAccessibilityStr_DescriptionBy = function (id)
    {
        return id ? (" aria-describedby='" + id + "'") : "";
    };
    
    
    //stat/Flag
    nexacro.__setDOMAccessibility_StatNormal = function (node, normal)
    {
        //
    };
    
    nexacro.__setDOMAccessibility_StatDisabled = function (node, disable)
    {
        node.setAttribute("aria-disabled", (disable ? "true" : "false"));
    };
    nexacro.__getDOMAccessibilityStr_StatDisabled = function (disable)
    {
        return " aria-disabled='" + (disable ? "true" : "false") + "'";
    };
    
    nexacro.__setDOMAccessibility_StatHidden = function (node, hidden)
    {
        if (hidden)
            node.setAttribute("aria-hidden", "true");
        else
            node.removeAttribute("aria-hidden");
    };
    nexacro.__getDOMAccessibilityStr_StatHidden = function (hidden)
    {
        //return " aria-hidden='" + (hidden ? "true" : "false") + "'";
        return hidden ? " aria-hidden='true'" : "";
    };
    nexacro.__setDOMAccessibility_StatChecked = function (node, check)
    {
        node.setAttribute("aria-checked", check);
    };
    nexacro.__getDOMAccessibilityStr_StatChecked = function (check)
    {
        return " aria-checked='" + check + "'";
    };
    
    nexacro.__setDOMAccessibility_StatPressed = function (node, press)
    {
        node.setAttribute("aria-pressed", press);
    };
    nexacro.__getDOMAccessibilityStr_StatPressed = function (press)
    {
        return " aria-pressed='" + press + "'";
    };
    
    nexacro.__setDOMAccessibility_StatSelected = function (node, select)
    {
        node.setAttribute("aria-selected", select);
    };
    nexacro.__getDOMAccessibilityStr_StatSelected = function (select)
    {
        return " aria-selected='" + select + "'";
    };
    
    nexacro.__setDOMAccessibility_StatCurrent = function (node, current)
    {
        node.setAttribute("aria-current", current);
    };
    nexacro.__getDOMAccessibilityStr_StatCurrent = function (current)
    {
        return " aria-current='" + current + "'";
    };
    
    nexacro.__setDOMAccessibility_StatExpanded = function (node, expanded)
    {
        node.setAttribute("aria-expanded", expanded);
    };
    nexacro.__getDOMAccessibilityStr_StatExpanded = function (expanded)
    {
        return " aria-expanded='" + expanded + "'";
    };
    
    nexacro.__setDOMAccessibility_StatAutoComplete = function (node, autocomplete)
    {
        node.setAttribute("aria-autocomplete", autocomplete);
    };
    nexacro.__getDOMAccessibilityStr_StatAutoComplete = function (autocomplete)
    {
        return " aria-autocomplete='" + autocomplete + "'";
    };
    
    nexacro.__setDOMAccessibility_StatHasPopup = function (node, haspopup)
    {
        node.setAttribute("aria-haspopup", haspopup);
    };
    nexacro.__getDOMAccessibilityStr_StatHasPopup = function (haspopup)
    {
        return " aria-haspopup='" + haspopup + "'";
    };
    
    nexacro.__setDOMAccessibility_FlagFocusable = function (node, focus)
    {
        //
    };
    nexacro.__getDOMAccessibilityStr_FlagFocusable = function (focus)
    {
        return "";
    };
    
    nexacro.__setDOMAccessibility_FlagReadOnly = function (node, readonly)
    {
        node.setAttribute("aria-readonly", readonly);
    };
    nexacro.__getDOMAccessibilityStr_FlagReadOnly = function (readonly)
    {
        return " aria-readonly='" + readonly + "'";
    };
    
    nexacro.__setDOMAccessibility_FlagPassword = function (node, password)
    {
        //
    };
    nexacro.__getDOMAccessibilityStr_FlagPassword = function (password)
    {
        return "";
    };
    
    nexacro.__setDOMAccessibility_FlagMultiLine = function (node, multiline)
    {
        node.setAttribute("aria-multiline", multiline);
    };
    nexacro.__getDOMAccessibilityStr_FlagMultiLine = function (node, multiline)
    {
        return " aria-multiline='" + multiline + "'";
    };
    
    nexacro.__setDOMAccessibility_FlagMultiSelectable = function (node, multiselectable)
    {
        node.setAttribute("aria-multiselectable", multiselectable);
    };
    nexacro.__getDOMAccessibilityStr_FlagMultiSelectable = function (multiselectable)
    {
        return " aria-multiselectable='" + multiselectable + "'";
    };
    
    nexacro.__setDOMAccessibility_FlagDefaultButton = function (node, button)
    {
        //
    };
    nexacro.__getDOMAccessibilityStr_FlagDefaultButton = function (button)
    {
        return "";
    };
    
    
    nexacro.__setDOMAccessibility_InfoCount = function (node, count)
    {
        node.setAttribute("aria-setsize", count);
    };
    nexacro.__getDOMAccessibilityStr_InfoCount = function (count)
    {
        return " aria-setsize='" + count + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoIndex = function (node, index)
    {
        node.setAttribute("aria-posinset", index);
    };
    nexacro.__getDOMAccessibilityStr_InfoIndex = function (index)
    {
        return " aria-posinset='" + index + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoValueMax = function (node, maxvalue)
    {
        node.setAttribute("aria-valuemax", maxvalue);
    };
    nexacro.__getDOMAccessibilityStr_InfoValueMax = function (maxvalue)
    {
        return " aria-valuemax='" + maxvalue + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoValueMin = function (node, minvalue)
    {
        node.setAttribute("aria-valuemin", minvalue);
    };
    nexacro.__getDOMAccessibilityStr_InfoValueMin = function (minvalue)
    {
        return " aria-valuemin='" + minvalue + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoValueCur = function (node, value)
    {
        node.setAttribute("aria-valuenow", value);
    };
    nexacro.__getDOMAccessibilityStr_InfoValueCur = function (value)
    {
        return " aria-valuenow='" + value + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoValueText = function (node, text)
    {
        node.setAttribute("aria-valuetext", text);
    };
    nexacro.__getDOMAccessibilityStr_InfoValueText = function (text)
    {
        return " aria-valuetext='" + text + "'";
    };
    
    nexacro.__setDOMAccessibility_InfoLevel = function (node, level)
    {
        // level start value 1
        if (level)
        {
            node.setAttribute("aria-level", level);
        }
        else
        {
            node.removeAttribute("aria-level");
        }
    };
    nexacro.__getDOMAccessibilityStr_InfoLevel = function (level)
    {
        // level start value 1
        return level ? " aria-level='" + level + "'" : "";
    };
    
    /* attribute for table/grid/treegrid start */
    // col index
    nexacro.__getDOMACcessibilityStr_InfoColIndex = function (index)
    {
        if (index)
            return " aria-colindex'" + index + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoColIndex = function (node, index)
    {
        if (index)
            node.setAttribute("aria-colindex", index);
        else
            node.removeAttribute("aria-colindex");
    };
    
    // row index
    nexacro.__getDOMACcessibilityStr_InfoRowIndex = function (index)
    {
        if (index)
            return " aria-rowindex'" + index + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoRowIndex = function (node, index)
    {
        if (index)
            node.setAttribute("aria-rowindex", index);
        else
            node.removeAttribute("aria-rowindex");
    };
    
    // col count
    nexacro.__getDOMACcessibilityStr_InfoColCount = function (count)
    {
        if (count)
            return " aria-colcount'" + count + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoColCount = function (node, count)
    {
        if (count)
            node.setAttribute("aria-colcount", count);
        else
            node.removeAttribute("aria-colcount");
    };
    
    // row count
    nexacro.__getDOMACcessibilityStr_InfoRowCount = function (count)
    {
        if (count)
            return " aria-rowcount'" + count + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoRowCount = function (node, count)
    {
        if (count)
            node.setAttribute("aria-rowcount", count);
        else
            node.removeAttribute("aria-rowcount");
    };
    
    // col text
    nexacro.__getDOMACcessibilityStr_InfoColIndexText = function (text)
    {
        if (text)
            return " aria-colindextext'" + text + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoColIndexText = function (node, text)
    {
        if (text)
            node.setAttribute("aria-colindextext", text);
        else
            node.removeAttribute("aria-colindextext");
    };
    
    // row text
    nexacro.__getDOMACcessibilityStr_InfoRowIndexText = function (text)
    {
        if (text)
            return " aria-rowindextext'" + text + "'";
        else
            return "";
    };
    nexacro.__setDOMAccessibility_InfoRowIndexText = function (node, text)
    {
        if (text)
            node.setAttribute("aria-rowindextext", text);
        else
            node.removeAttribute("aria-rowindextext");
    };
    /* attribute for table/grid/treegrid end */
    
    nexacro.__createLabelElementHandle = function (_doc, name, value)
    {
        var handle = _doc.createElement("label");
        var handle_style = handle.style;
        handle.setAttribute("for", name);
        handle.textContent = value ? value : "";
        handle.id = name + ":label";
        nexacro.__setDOMStyle_Absolute(handle_style);
        nexacro.__setDOMStyle_Size(handle_style, 0, 0);
        nexacro.__setDOMAccessibility_StatHidden(handle, true);
        return handle;
    };
    
    nexacro.__getDOMAccessibilityStr_Labelfor = function (name, value)
    {
        return "<label for= '" + name + "' style='position:absolute;width:0px;overflow:hidden;' aria-hidden=true>" + (value ? value : "") + "</label>";
    };
    /*
    nexacro.__setDOMNode_Value = function (node, value)
    {
        node.setAttribute("value",value);
    };
    */
    
    nexacro.__setDOMAccessibility_Selection = function (node, select)
    {
        //Todo..
    };
    
    nexacro.__setDOMAccessibility_HotKey = function (node, select)
    {
        //Todo..
    };
    
    nexacro.__setDOMAccessibility_ActiveDescendant = function (node, id)
    {
        node.setAttribute("aria-activedescendant", id);
    };
    
    nexacro.__setDOMAccessibility_Owns = function (node, id_list)
    {
        node.setAttribute("aria-owns", id_list);
    };
    
    nexacro.__setDOMAccessibility_Controls = function (node, id_list)
    {
        node.setAttribute("aria-controls", id_list);
    };
    
    nexacro.__setDOMAccessibility_TabStop = function (node, id)
    {
    
    };
    
    nexacro.__setDOMAccessibility_Live = function (node, v)
    {
        if (v == true)
        {
            node.setAttribute("aria-relevant", "text");
            node.setAttribute("aria-live", "assertive");
            node.setAttribute("aria-atomic", "false");
        }
        else if (v == "off")
        {
            node.setAttribute("aria-relevant", "");
            node.setAttribute("aria-live", "off");
            node.setAttribute("aria-atomic", "");
        }
        else
        {
            node.setAttribute("aria-relevant", "");
            node.setAttribute("aria-live", "");
            node.setAttribute("aria-atomic", "");
        }
    };
    
    nexacro.__getDOMAccessibilityStr_Live = function (live)
    {
        return " aria-live='" + live + "'";
    };
    
    //변경된 값만 읽는다.
    nexacro.__setDOMAccessibility_Value = function (node, value, elem, bfocus, env)
    {
        nexacro._notifyAccessibility(node, value, "valuechange", elem, bfocus, undefined, env);
    };
    
    nexacro.__setDOM_TextContent = function (node, text)
    {
        node.textContent = text;
    };
    
    nexacro.__notifyAccessibilityInputElement = function (label)
    {
        var notifynode = this._notify_inputnode;
        if (!notifynode)
        {
            notifynode = nexacro.__createNotifyAccessibilityInputElement();
        }
    
        // 값 미입력하면 live 기능 제거 (초점 이동 방지)
        if (nexacro._isNull(label))
        {
            notifynode.setAttribute("aria-live", "");
        }
        else
        {
            notifynode.setAttribute("aria-live", "assertive");
        }
    
        // 지웠다가 넣어야 출력됨
        notifynode.setAttribute("aria-label", "");
        notifynode.setAttribute("aria-label", " ");
        notifynode.textContent = "";
        notifynode.textContent = label;
    };
    
    nexacro.__createNotifyAccessibilityInputElement = function ()
    {
        var notifynode = this._notify_inputnode;
        if (!notifynode)
        {
            var _doc = document;
    
            var node = _doc.createElement("div");
            node.id = "accessibility_notify_input";
    
            var node_style = node.style;
            nexacro.__setDOMStyle_Absolute(node_style);
            nexacro.__setDOMStyle_Size(node_style, 0, 0);
    
            //nexacro.__setDOMAccessibility_Role(node, "textbox");
            //nexacro.__setDOMAccessibility_Live(node, true);
            node.setAttribute("aria-live", "assertive");
    
            _doc.body.appendChild(node);
            this._notify_inputnode = notifynode = node;
        }
    
        return notifynode;
    };
    
    /* mouse event check from virtual cursor in sensereader */
    nexacro._getAccessibilityVirtualCursorMouseEvent = function (evt, win)
    {
        var env = win._getEnvironment();
        if (env && env._p_enableaccessibility && env._a11ytype === 2)
        {
            if (evt && evt.detail === 0 && evt.offsetX === 0 && evt.offsetY === 0)
            {
                return true;
            }
        }
        return false;
    };
    
    /*
    강제읽기 기능 분기 처리, accessibilityreplayhotkey, accessibilitywholereadtype, accessibilitybackwardkey 키등
    playaccessibility나 notifyaccessibility를 통해 강제읽기 기능으로 구현된 기능에서 브라우져 버그가 발생하여 분기처리함.
    */
    
    nexacro._AccessibilityNotifyManager = function ()
    {
        this._nodes = [];
        this._index = -1;
        this._count = 0;
    };
    
    var _pAccessibilityNotifyManager = nexacro._createPrototype(Object, nexacro._AccessibilityNotifyManager);
    nexacro._AccessibilityNotifyManager.prototype = _pAccessibilityNotifyManager;
    
    
    _pAccessibilityNotifyManager._init = nexacro._emptyFn;
    _pAccessibilityNotifyManager._notifyAriaLive = function (label)
    {
        var _doc = document;
        var node = this._nodes[this._index];
        if (node)
        {
            _doc.body.removeChild(node);
            this._nodes.pop();
            node = null;
        }
    
        node = _doc.createElement("div");
        node.id = "accessibility_notify_0";
    
        var node_style = node.style;
        nexacro.__setDOMStyle_Absolute(node_style);
        nexacro.__setDOMStyle_Size(node_style, 0, 0);
    
        nexacro.__setDOMAccessibility_Role(node, "alert");
        nexacro.__setDOMAccessibility_Live(node, true);
        nexacro.__setDOMAccessibility_Label(node, label);
    
        _doc.body.appendChild(node);
    
        this._nodes.push(node);
    
        this._count = 1;
        this._index = 0;
    
        return node;
    };
    
    
    _pAccessibilityNotifyManager._getNotifyNode_Gecko = function ()
    {
        if (this._index == -1)
        {
            var _doc = document;
            var node = _doc.createElement("div");
            node.id = "accessibility_notify_" + this._count;
    
            var node_style = node.style;
            nexacro.__setDOMStyle_Absolute(node_style);
            nexacro.__setDOMStyle_Size(node_style, 0, 0);
    
            //nexacro.__setDOMNode_TabIndex(node, -1);
            // nexacro.__setDOMAccessibility_Role(node, "document");
            _doc.body.appendChild(node);
    
    
            this._nodes.push(node);
    
            this._count = this._count + 1;
    
            var node2 = _doc.createElement("div");
            node2.id = "accessibility_notify_" + this._count;
    
            var node2_style = node2.style;
            nexacro.__setDOMStyle_Absolute(node2_style);
            nexacro.__setDOMStyle_Size(node2_style, 0, 0);
    
            _doc.body.appendChild(node2);
            //  nexacro.__setDOMAccessibility_Role(node2, "document");
            this._nodes.push(node2);
            this._index = 0;
        }
    
        return this._nodes;
    };
    
    _pAccessibilityNotifyManager._notify_Gecko = function (handle, label, notifyevent, elem, bfocus, benable)
    {
        var _is_live = (notifyevent == "arialive") ? true : undefined;
        if (_is_live)
        {
            this._notifyAriaLive(label);
        }
        else
        {
            var nodes = this._getNotifyNode_Gecko();
            if (nodes)
            {
                var node;
                if (notifyevent == "notify")
                {
                    node = nodes[this._index];
                    node.innerText = label;
                    nexacro.__setDOMNode_Title(node, label);
    
                    if (benable === false)
                        nexacro.__setDOMAccessibility_StatDisabled(node, true);
                    else
                        nexacro.__setDOMAccessibility_StatDisabled(node, false);
    
                    node.focus();
                    nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                }
                else
                {
                    node = nodes[0];
                    node.innerText = label;
                    nexacro.__setDOMNode_Title(node, label);
                }
            }
            this._index = this._index ^ 1;
        }
    };
    
    _pAccessibilityNotifyManager._getNotifyNode_Mobile = function ()
    {
        if (this._index == -1)
        {
            var _doc = document;
            var _container = _doc.createElement("div");
            var node_style = _container.style;
            nexacro.__setDOMStyle_Absolute(node_style);
            nexacro.__setDOMStyle_Size(node_style, 0, 0);
            nexacro.__setDOMAccessibility_StatHidden(_container, true);
            _doc.body.appendChild(_container);
    
            var node = _doc.createElement("div");
            node.id = "accessibility_notify_" + this._count;
    
            node_style = node.style;
            nexacro.__setDOMStyle_Absolute(node_style);
            nexacro.__setDOMStyle_Size(node_style, 0, 0);
            nexacro.__setDOMNode_TabIndex(node, -1);
            nexacro.__setDOMAccessibility_Role(node, "document");
            _container.appendChild(node);
    
    
            this._nodes.push(node);
    
            this._count = this._count + 1;
    
            var node2 = _doc.createElement("div");
            node2.id = "accessibility_notify_" + this._count;
    
            var node2_style = node2.style;
            nexacro.__setDOMStyle_Absolute(node2_style);
            nexacro.__setDOMStyle_Size(node2_style, 0, 0);
            nexacro.__setDOMNode_TabIndex(node2, -1);
    
            _container.appendChild(node2);
            nexacro.__setDOMAccessibility_Role(node2, "document");
            this._nodes.push(node2);
            this._index = 0;
        }
    
        return this._nodes;
    };
    
    _pAccessibilityNotifyManager._notify_Mobile = function (handle, label, notifyevent, elem, bfocus, benable)
    {
        var nodes = this._getNotifyNode_Mobile();
        if (nodes)
        {
            var node;
            if (notifyevent == "notify")
            {
                node = nodes[this._index];
    
                if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                {
                    node.innerText = "";
                    nexacro.__setDOMAccessibility_Label(node, label);
                }
                else
                {
                    node.innerText = label;
                }
    
                if (elem)
                {
                    if (elem.accessibilityrole)
                    {
                        nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
                    }
                    else
                    {
                        nexacro.__setDOMAccessibility_Role(node, "");
                    }
                    nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
                }
                else
                {
                    nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
                }
    
                if (benable === false)
                    nexacro.__setDOMAccessibility_StatDisabled(node, true);
                else
                    nexacro.__setDOMAccessibility_StatDisabled(node, false);
    
                node.focus();
                nexacro.__setDOMStyle_Pos(node.style, 0, 0);
            }
            else
            {
                node = nodes[this._index];
    
                if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                    nexacro.__setDOMAccessibility_Label(node, "");
    
                if (notifyevent == "valuechange")
                {
                    if (label == "#textarea:msg_accessibility_emptyline")
                    {
                        label = nexacro._getErrorMessge("msg_accessibility_emptyline");
                    }
    
                    node.innerText = label;
                    nexacro.__setDOMAccessibility_Role(node, "listitem");
                    nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
    
                    if (elem && elem.input_handle)
                    {
                        //nexacro.__setDOMAccessibility_Role(elem.input_handle, "document");
                    }
                    if (bfocus)
                        node.focus();
                    nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                }
                else if (notifyevent == "daychange")
                {
                    if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                    {
                        node.innerText = "";
                        nexacro.__setDOMAccessibility_Label(node, label);
                    }
                    else
                    {
                        node.innerText = label;
                    }
                    nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
                    nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                }
                else if (notifyevent == "wholeread")
                {
                    if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                    {
                        node.innerText = "";
                        nexacro.__setDOMAccessibility_Label(node, label);
                    }
                    else
                    {
                        node.innerText = label;
                    }
                    //node.innerText = label;
                    nexacro.__setDOMAccessibility_Role(node, "document");
                    node.focus();
                }
                else
                {
                    node.innerText = label;
                }
            }
    
        }
        this._index = this._index ^ 1;
    };
    
    _pAccessibilityNotifyManager._getNotifyNode_etc = function (a11ytype)
    {
        if (this._index == -1)
        {
            var _doc = document;
            var node = _doc.createElement("div");
            node.id = "accessibility_notify_" + this._count;
    
            var node_style = node.style;
            nexacro.__setDOMStyle_Absolute(node_style);
            nexacro.__setDOMStyle_Size(node_style, 0, 0);
    
            if (a11ytype == 2 && nexacro._Browser == "Chrome")
            {
                nexacro.__setDOMAccessibility_Role(node, "listitem");
                nexacro.__setDOMAccessibility_StatHidden(node, true);
            }
            else
                nexacro.__setDOMAccessibility_Role(node, "document");
    
            _doc.body.appendChild(node);
    
    
            this._nodes.push(node);
    
            this._count = this._count + 1;
    
            var node2 = _doc.createElement("div");
            node2.id = "accessibility_notify_" + this._count;
    
            var node2_style = node2.style;
            nexacro.__setDOMStyle_Absolute(node2_style);
            nexacro.__setDOMStyle_Size(node2_style, 0, 0);
    
            _doc.body.appendChild(node2);
            if (a11ytype == 2 && nexacro._Browser == "Chrome")
            {
                nexacro.__setDOMAccessibility_Role(node2, "listitem");
                nexacro.__setDOMAccessibility_StatHidden(node2, true);
            }
            else
                nexacro.__setDOMAccessibility_Role(node2, "document");
            this._nodes.push(node2);
    
            //accessibility false node
            var node_hidden = _doc.createElement("div");
            node_hidden.id = "accessibility_notify_hidden";
    
            var node_hidden_style = node_hidden.style;
            nexacro.__setDOMStyle_Absolute(node_hidden_style);
            nexacro.__setDOMStyle_Size(node_hidden_style, 0, 0);
    
            _doc.body.appendChild(node_hidden);
            if (a11ytype == 2 && nexacro._Browser == "Chrome")
            {
                nexacro.__setDOMAccessibility_Role(node_hidden, "listitem");
                nexacro.__setDOMAccessibility_StatHidden(node_hidden, true);
            }
            //this._nodes.push(node_hidden);
    
            this._index = 0;
        }
    
        return this._nodes;
    };
    
    _pAccessibilityNotifyManager._notify_etc = function (handle, label, notifyevent, elem, bfocus, benable, a11ytype)
    {
        var _is_live = (notifyevent == "arialive") ? true : undefined;
        if (_is_live)
        {
            this._notifyAriaLive(label);
        }
        else
        {
            var nodes = this._getNotifyNode_etc(a11ytype);
            if (nodes)
            {
                var node;
                if (notifyevent == "notify")
                {
                    node = nodes[this._index];
    
                    if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                    {
                        node.innerText = "";
                        nexacro.__setDOMAccessibility_Label(node, label);
                    }
                    else
                    {
                        node.innerText = label;
                    }
    
                    if (elem)
                    {
                        if (elem.accessibilityrole)
                        {
                            nexacro.__setDOMAccessibility_Role(node, elem.accessibilityrole);
                        }
                        else
                        {
                            nexacro.__setDOMAccessibility_Role(node, "");
                        }
                        nexacro.__setDOMStyle_Pos(node.style, elem.left, elem.top);
                    }
                    else
                    {
                        nexacro.__setDOMAccessibility_Role(node, handle ? handle.getAttribute('role') : "");
                    }
    
                    if (benable === false)
                        nexacro.__setDOMAccessibility_StatDisabled(node, true);
                    else
                        nexacro.__setDOMAccessibility_StatDisabled(node, false);
    
                    node.focus();
                    nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                }
                else
                {
                    node = nodes[this._index];
    
                    if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                        nexacro.__setDOMAccessibility_Label(node, "");
    
                    if (notifyevent == "valuechange")
                    {
                        if (label == "#textarea:msg_accessibility_emptyline")
                        {
                            label = nexacro._getErrorMessge("msg_accessibility_emptyline");
                        }
    
                        node.innerText = label;
                        nexacro.__setDOMAccessibility_Role(node, "listitem");
                        nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
    
                        if (elem && elem.input_handle)
                        {
                            //nexacro.__setDOMAccessibility_Role(elem.input_handle, "document");
                        }
                        if (bfocus)
                            node.focus();
                        nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                    }
                    else if (notifyevent == "daychange")
                    {
                        if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                        {
                            node.innerText = "";
                            nexacro.__setDOMAccessibility_Label(node, label);
                        }
                        else
                        {
                            node.innerText = label;
                        }
                        nexacro.__setDOMAccessibility_ActiveDescendant(handle, node.id);
                        nexacro.__setDOMStyle_Pos(node.style, 0, 0);
                    }
                    else if (notifyevent == "wholeread")
                    {
                        if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
                        {
                            node.innerText = "";
                            nexacro.__setDOMAccessibility_Label(node, label);
                        }
                        else
                        {
                            node.innerText = label;
                        }
                        //node.innerText = label;
                        nexacro.__setDOMAccessibility_Role(node, "document");
                        node.focus();
                    }
                    else
                    {
                        node.innerText = label;
                    }
                }
    
            }
            this._index = this._index ^ 1;
        }
    };
    
    _pAccessibilityNotifyManager._init = function (a11ytype)
    {
        if (!(nexacro._Browser === "Gecko") && !(a11ytype == 4 || a11ytype == 5))
        {
            var nodes = this._getNotifyNode_etc(a11ytype);
            if (nodes)
            {
                var node;
                for (var i = 0; i < nodes.length; i++)
                {
                    node = nodes[i];
                    nexacro.__setDOMAccessibility_Label(node, "");
                }
            }
        }
    };
    
    _pAccessibilityNotifyManager._notify = function (handle, label, notifyevent, elem, bfocus, benable, a11ytype)
    {       
        if (nexacro._Browser === "Gecko") 
        {
            this._notify_Gecko(handle, label, notifyevent, elem, bfocus, benable);
        }
        else if (a11ytype == 4 || a11ytype == 5) 
        {
            this._notify_Mobile(handle, label, notifyevent, elem, bfocus, benable);
        }
        else 
        {
            this._notify_etc(handle, label, notifyevent, elem, bfocus, benable, a11ytype);
        }
    };
    
    nexacro.__notifyAccessibility = function (node, label, notifyevent, elem, bfocus, benable, a11ytype)
    {
        if (!nexacro._AccessibilityNotifyNode)
            nexacro._AccessibilityNotifyNode = new nexacro._AccessibilityNotifyManager();
        nexacro._AccessibilityNotifyNode._notify(node, label, notifyevent, elem, bfocus, benable, a11ytype);
    };
    
    //특수한 케이스에대해 예외처리를 해주기위해
    nexacro._notifyAccessibilityValue = function (elem, label, notifyevent, a11ytype)
    {
        if (!nexacro._AccessibilityNotifyNode)
            nexacro._AccessibilityNotifyNode = new nexacro._AccessibilityNotifyManager();
        var handle = elem.handle;
        if (handle)
        {
            nexacro._AccessibilityNotifyNode._notify(handle, label, notifyevent, elem, undefined, undefined, a11ytype);
        }
    };
    
    nexacro.__notifyInitAccessibility = function (a11ytype)
    {
        if (!nexacro._AccessibilityNotifyNode)
            return;
        nexacro._AccessibilityNotifyNode._init(a11ytype);
    };
    
    if (nexacro._OS == "Android")
    {
        nexacro._roleList =
        {    //nexacro role : present role , //problem - checked
            "alert": "alert",
            "application": "application",
            "button": "button",
            "calendar": "textbox",
            "chart": "",
            "checkbox": "checkbox",
            "columnheader": "cell",
            "combobox": "combobox",
            "datepicker": "",
            "dialog": "dialog",
            "edit": "textbox",
            "fileupload": "",
            "form": "",
            "frame": "",
            "grid": "grid",
            "gridcell": "cell",
            "groupbox": "group",
            "image": "img",
            "listbox": "listbox",
            "listboxitem": "option",
            "listview": "group",
            "listviewband": "treeitem",
            "menubar": "menubar",
            "menu": "menu",
            "menuitem": "menuitem",
            "none": "",
            "progressbar": "", //sensereader bug
            //"radio": "radiogroup",
            "radio": "radiogroup",
            "radioitem": "radio",
            "row": "row",
            "rowheader": "cell",
            "rowgroup": "rowgroup", // rowelement  처리용
            "scrollbar": "scrollbar",
            "slider": "slider",
            "spin": "spin",
            //"spinbutton" : "spinbutton",
            "splitter": "",
            "static": "option",
            "statusbar": "status",
            "step": "",
            "tab": "tablist",
            "tabitem": "tab",
            "tabpage": "tabpanel",
            "textarea": "textbox",
            "textbox": "textbox",
            "titlebar": "region",
            "toolbar": "toolbar",
            "tooltip": "tooltip",            
            "treegrid": "tree",
            "treeitem": "treeitem",
            "webbrowser": "",
            "webview": "",
            "link": "link",
            "noread": "document",
            "null": "", // role is not setting
            // RP 101516 heading role aria-level 지원 추가 (legacy용 HTML spec)
            "heading": "heading",
            "heading1": "heading",
            "heading2": "heading",
            "heading3": "heading",
            "heading4": "heading",
            "heading5": "heading",
            "heading6": "heading",
    
            // section tag roles - 아직 사용하지 않으나 필요하면 스펙추가
            "header": "banner",
            "aside": "complementarty",
            "footer": "contentinfo",
            "main": "main",
            "nav": "navigation",
            "section": "region",
            "article": "article"
        };
    }
    else if (nexacro._Browser == "MobileSafari")
    {
        nexacro._roleList =
        {    //nexacro role : present role , //problem - checked
            "alert": "alert",
            "application": "application",
            "button": "button",
            "calendar": "textbox",
            "chart": "",
            "checkbox": "checkbox",
            "columnheader": "cell",
            "combobox": "combobox",
            "datepicker": "",
            "dialog": "dialog",
            "edit": "textbox",
            "fileupload": "",
            "form": "",
            "frame": "",
            "grid": "grid",
            "gridcell": "cell",
            "gridedit": "textbox", //temporary
            "groupbox": "group",
            "image": "img",
            "listbox": "listbox",
            "listboxitem": "option",
            "listview": "group",
            "listviewband": "option",
            "menubar": "menubar",
            "menu": "menu",
            "menuitem": "menuitem",
            "none": "",
            "progressbar": "meter",
            //"radio": "radiogroup",
            "radio": "radiogroup",
            "radioitem": "radio",
            "row": "row",
            "rowheader": "cell",
            "rowgroup": "rowgroup", // rowelement  처리용
            "scrollbar": "scrollbar",
            "slider": "slider",
            //"spin": "document",
            //"spinbutton" : "spinbutton",
            "splitter": "",
            "static": "",
            "statusbar": "status",
            "step": "",
            "tab": "tablist",
            "tabitem": "tab",
            "tabpage": "tabpanel",
            "textarea": "textbox",
            "textbox": "textbox",
            "titlebar": "region",
            "toolbar": "toolbar",
            "tooltip": "tooltip",
            "treegrid": "tree",
            "treeitem": "treeitem",                 // treeitem은 skip되서 option으로 변경.
            "webbrowser": "",
            "webview": "",
            "link": "link",
            "noread": "",
            "null": "", // role is not setting
            // RP 101516 heading role aria-level 지원 추가 (legacy용 HTML spec)
            "heading": "heading",
            "heading1": "heading",
            "heading2": "heading",
            "heading3": "heading",
            "heading4": "heading",
            "heading5": "heading",
            "heading6": "heading",
    
            // section tag roles - 아직 사용하지 않으나 필요하면 스펙추가
            "header": "banner",
            "aside": "complementarty",
            "footer": "contentinfo",
            "main": "main",
            "nav": "navigation",
            "section": "region",
            "article": "article"
        };
    }
    else if (nexacro._Browser == "Chrome" || nexacro._Browser == "Edge")
    {
        nexacro._roleList =
        {    //nexacro role : present role , //problem - checked
            "alert": "alert",
            "application": "application",
            "button": "button",
            "calendar": "",
            "chart": "",
            "checkbox": "checkbox",
            "columnheader": "columnheader",
            "combobox": "combobox",
            "datepicker": "",
            "dialog": "dialog",
            "edit": "textbox",
            "fileupload": "",
            "form": "form",
            "frame": "",
            "grid": "grid",
            "gridcell": "cell",
            "groupbox": "group",
            "image": "img",
            "listbox": "list",
            "listboxitem": "listitem",
            "listview": "group",
            "listviewband": "treeitem",
            "menubar": "menubar",
            "menu": "menu",
            "menuitem": "menuitem",
            "none": "none", // label 출력 temporary : "treeitem" (sensereader 8.0)
            "progressbar": "meter",
            "radio": "radiogroup", //check 필요 for sensereader 8.0 
            "radioitem": "radio",
            "row": "row",
            "rowheader": "rowheader",
            "rowgroup": "rowgroup",  // rowelement  처리용
            "scrollbar": "scrollbar",
            "slider": "slider",
            "spin": "textbox",
            "splitter": "",
            "static": "treeitem", // treeitem도 안되면 ZWSP로 우회 처리 해야함
            "statusbar": "status",
            "step": "none",
            "tab": "tablist",
            "tabitem": "tab",
            "tabpage": "tabpanel",
            "textarea": "textbox",
            "textbox": "textbox",
            "titlebar": "region",
            "toolbar": "toolbar",
            "tooltip": "tooltip",
            "treegrid": "treegrid",
            "treeitem": "treeitem",
            "webbrowser": "cell", //내부적으로 aria description 사용하려고
            "webview": "cell",
            "link": "link",
            "noread": "listitem",
            "null": "", // role is not setting
            // RP 101516 heading role aria-level 지원 추가 (legacy용 HTML spec)
            "heading": "heading",
            "heading1": "heading",
            "heading2": "heading",
            "heading3": "heading",
            "heading4": "heading",
            "heading5": "heading",
            "heading6": "heading",
    
            // section tag roles - 아직 사용하지 않으나 필요하면 스펙추가
            "header": "banner",
            "aside": "complementarty",
            "footer": "contentinfo",
            "main": "main",
            "nav": "navigation",
            "section": "region",
            "article": "article"
        };
    }
    else if (nexacro._Browser == "Gecko")
    {
        nexacro._roleList =
        {    //nexacro role : present role , //problem - checked
            "alert": "alert",
            "application": "application",
            "button": "button",
            "calendar": "",
            "chart": "",
            "checkbox": "checkbox",
            "columnheader": "columnheader",
            "combobox": "combobox",
            "datepicker": "",
            "dialog": "dialog",
            //"edit": "textbox",
            "fileupload": "",
            "form": "",
            "frame": "",
            "grid": "",
            "gridcell": "gridcell",
            "groupbox": "group",
            "image": "img",
            "listbox": "listbox",
            "listboxitem": "option",
            "listview": "group",
            "listviewband": "treeitem",
            "menubar": "menubar",
            "menu": "menu",
            "menuitem": "menuitem",
            "none": "",
            "progressbar": "", //sensereader bug
            //"radio": "radiogroup",
            "radio": "radiogroup",
            "radioitem": "radio",
            "row": "row",
            "rowheader": "rowheader",
            "rowgroup": "rowgroup", // rowelement  처리용
            "scrollbar": "scrollbar",
            "slider": "slider",
            "spin": "document",
            "splitter": "",
            "static": "",
            "statusbar": "status",
            "step": "",
            "tab": "tablist",
            "tabitem": "tab",
            "tabpage": "tabpanel",
            //"textarea": "textbox",
            //"textbox": "textbox",
            "textbox": "textbox",
            "titlebar": "region",
            "toolbar": "toolbar",
            "tooltip": "tooltip",
            "treegrid": "treegrid",
            "treeitem": "treeitem",
            "webbrowser": "",
            "webview": "",
            "link": "link",
            "noread": "document",
            "null": "", // role is not setting
            // RP 101516 heading role aria-level 지원 추가 (legacy용 HTML spec)
            "heading": "heading",
            "heading1": "heading",
            "heading2": "heading",
            "heading3": "heading",
            "heading4": "heading",
            "heading5": "heading",
            "heading6": "heading",
    
            // section tag roles - 아직 사용하지 않으나 필요하면 스펙추가
            "header": "banner",
            "aside": "complementarty",
            "footer": "contentinfo",
            "main": "main",
            "nav": "navigation",
            "section": "region",
            "article": "article"
        };
    }
    else
    {
        nexacro._roleList =
        {    //nexacro role : present role , //problem - checked
            "alert": "alert",
            "application": "application",
            "button": "button",
            "calendar": "document",
            "chart": "",
            "checkbox": "checkbox",
            "columnheader": "columnheader",
            "combobox": "combobox",
            "datepicker": "",
            "dialog": "dialog",
            //"edit": "textbox",
            "fileupload": "",
            "form": "",
            "frame": "",
            "grid": "",
            "gridcell": "gridcell",
            "groupbox": "group",
            //"image": "img",
            "listbox": "listbox",
            "listboxitem": "option",
            "listview": "group",
            "listviewband": "treeitem",
            "menubar": "menubar",
            "menu": "menu",
            "menuitem": "menuitem",
            "none": "",
            "progressbar": "", //sensereader bug
            //"radio": "radiogroup",
            "radio": "radiogroup",
            "radioitem": "radio",
            "row": "row",
            "rowheader": "rowheader",
            "rowgroup": "rowgroup", // rowelement  처리용
            "scrollbar": "scrollbar",
            "slider": "slider",
            "spin": "document",
            //"spinbutton" : "spinbutton",
            "splitter": "",
            "static": "",
            "statusbar": "status",
            "step": "",
            "tab": "tablist",
            "tabitem": "tab",
            "tabpage": "tabpanel",
            //"textarea": "textbox",
            //"textbox": "textbox",
            "titlebar": "region",
            "toolbar": "toolbar",
            "tooltip": "tooltip",
            "treegrid": "treegrid",
            "treeitem": "treeitem",
            "webbrowser": "",
            "webview": "",
            "link": "link",
            "noread": "document",
            "null": "", // role is not setting
            // RP 101516 heading role aria-level 지원 추가 (legacy용 HTML spec)
            "heading": "heading",
            "heading1": "heading",
            "heading2": "heading",
            "heading3": "heading",
            "heading4": "heading",
            "heading5": "heading",
            "heading6": "heading",
    
            // section tag roles - 아직 사용하지 않으나 필요하면 스펙추가
            "header": "banner",
            "aside": "complementarty",
            "footer": "contentinfo",
            "main": "main",
            "nav": "navigation",
            "section": "region",
            "article": "article"
        };
    }