//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2014 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro-public-license-readme-1.0.html	
//
//==============================================================================

if (!nexacro._MegaMenuItemTextControl)
{
    //==============================================================================
    // nexacro._MegaMenuItemTextControl
    //==============================================================================
    nexacro._MegaMenuItemTextControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Static.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    }

    var _pMegaMenuItemTextControl = nexacro._createPrototype(nexacro.Static, nexacro._MegaMenuItemTextControl);
    nexacro._MegaMenuItemTextControl.prototype = _pMegaMenuItemTextControl;

    _pMegaMenuItemTextControl._type_name = "StaticControl";
    _pMegaMenuItemTextControl._is_subcontrol = true;

    _pMegaMenuItemTextControl.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        var cellElem = this._cell_elem;
        if (cellElem)
        {
            cellElem.attachHandle(win);
        }
    };

    _pMegaMenuItemTextControl.set_autobreak = function (v) { this._p_autobreak = v };

    _pMegaMenuItemTextControl = null;
}

if (!nexacro._MegaMenuItemExpandControl)
{
    nexacro._MegaMenuItemExpandControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Button.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    }

    var _pMegaMenuItemExpandControl = nexacro._createPrototype(nexacro.Button, nexacro._MegaMenuItemExpandControl);
    nexacro._MegaMenuItemExpandControl.prototype = _pMegaMenuItemExpandControl;
    _pMegaMenuItemExpandControl._type_name = "MegaMenuItemExpandControl";

    _pMegaMenuItemExpandControl._is_subcontrol = true;
    _pMegaMenuItemExpandControl._use_selected_status = false;
    _pMegaMenuItemExpandControl._use_pushed_status = false;  // !nexacro._has_megamenu_expand_status;

    _pMegaMenuItemExpandControl.on_getIDCSSSelector = function ()
    {
        return "menuitemexpand";
    };

    _pMegaMenuItemExpandControl.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        return changestatus;
    };

    _pMegaMenuItemExpandControl = null;
}

if (!nexacro._MegaMenuItemControl)
{
    //==============================================================================
    // nexacro._MegaMenuItemControl
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */

    // nexacro._MenuItemConst
    nexacro._MenuItemConst =
    {
        ELEMTYPE_ICON                   : 0x00000001,
        ELEMTYPE_TEXT                   : 0x00000002,
        ELEMTYPE_DESC                   : 0x00000004,
        ELEMTYPE_CUSTOM                 : 0x00000008,
        ELEMTYPE_MASK                   : 0x0000000F,

        ITEMTYPE_CTRLTYPE_NONE          : 0x00000000,
        ITEMTYPE_CTRLTYPE_EDIT_CHECK    : 0x00000001,
        ITEMTYPE_CTRLTYPE_EDIT_SWITCH   : 0x00000002,
        ITEMTYPE_CTRLTYPE_EDIT_EDIT     : 0x00000004,
        ITEMTYPE_CTRLTYPE_EDIT_CUSTOM   : 0x00000008,
        ITEMTYPE_CTRLTYPE_EDIT_MASK     : 0x0000000F,
        ITEMTYPE_CTRLTYPE_CTRL_BUTTON   : 0x00000010,
        ITEMTYPE_CTRLTYPE_CTRL_STATIC   : 0x00000020,
        ITEMTYPE_CTRLTYPE_CTRL_CUSTOM   : 0x00000080,
        ITEMTYPE_CTRLTYPE_CTRL_MASK     : 0x000000F0,
        ITEMTYPE_CTRLTYPE_VIEW_WEBVIEW  : 0x00000100,
        ITEMTYPE_CTRLTYPE_VIEW_IMGVIEW  : 0x00000200,
        ITEMTYPE_CTRLTYPE_VIEW_DIVVIEW  : 0x00000400,
        ITEMTYPE_CTRLTYPE_VIEW_VIDVIEW  : 0x00000800,
        ITEMTYPE_CTRLTYPE_VIEW_MASK     : 0x00000F00,
    //  ITEMTYPE_CTRLTYPE_RESERVED      : 0x000FF000,
        ITEMTYPE_CTRLTYPE_MASK          : 0x000FFFFF,

        ITEMTYPE_MENUITEM               : 0x00100000,
        ITEMTYPE_GROUPITEM              : 0x00200000,
        ITEMTYPE_HEADERITEM             : 0x00400000,
        ITEMTYPE_FOOTERITEM             : 0x00800000,
        ITEMTYPE_DIVIDEITEM             : 0x01000000,
        ITEMTYPE_BUTTONITEM             : 0x02000000,
        ITEMTYPE_EDITORITEM             : 0x04000000,
        ITEMTYPE_VIEWERITEM             : 0x08000000,
    //  ITEMTYPE_RESERVED               : 0xF0000000,
        ITEMTYPE_MASK                   : 0xFFF00000,

        ITEMTYPE_MENUITEM_NONE          : 0x00100000,
        ITEMTYPE_MENUITEM_EDIT_CHECK    : 0x00100001,
        ITEMTYPE_MENUITEM_EDIT_SWITCH   : 0x00100002,
        ITEMTYPE_MENUITEM_EDIT_EDIT     : 0x00100004,
        ITEMTYPE_MENUITEM_EDIT_CUSTOM   : 0x00100008,
        ITEMTYPE_MENUITEM_EDIT_MASK     : 0x0010000F,
        ITEMTYPE_MENUITEM_CTRL_BUTTON   : 0x00100010,
        ITEMTYPE_MENUITEM_CTRL_STATIC   : 0x00100020,
        ITEMTYPE_MENUITEM_CTRL_CUSTOM   : 0x00100080,
        ITEMTYPE_MENUITEM_CTRL_MASK     : 0x001000F0,
        /*
        ITEMTYPE_MENUITEM_VIEW_IMGVIEW  : 0x00100100,
        ITEMTYPE_MENUITEM_VIEW_DIVVIEW  : 0x00100200,
        ITEMTYPE_MENUITEM_VIEW_WEBVIEW  : 0x00100400,
        ITEMTYPE_MENUITEM_VIEW_VIDVIEW  : 0x00100800,
        ITEMTYPE_MENUITEM_VIEW_MASK     : 0x00100F00,
        */

        /*
        ITEMTYPE_GROUPITEM_NONE         : 0x00200000,
        ITEMTYPE_GROUPITEM_EDIT_CHECK   : 0x00200001,
        ITEMTYPE_GROUPITEM_EDIT_SWITCH  : 0x00200002,
        ITEMTYPE_GROUPITEM_EDIT_EDIT    : 0x00200004,
        ITEMTYPE_GROUPITEM_EDIT_CUSTOM  : 0x00200008,
        ITEMTYPE_GROUPITEM_EDIT_MASK    : 0x0020000F,
        ITEMTYPE_GROUPITEM_CTRL_BUTTON  : 0x00200010,
        ITEMTYPE_GROUPITEM_CTRL_STATIC  : 0x00200020,
        ITEMTYPE_GROUPITEM_CTRL_CUSTOM  : 0x00200080,
        ITEMTYPE_GROUPITEM_CTRL_MASK    : 0x002000F0,
        ITEMTYPE_GROUPITEM_VIEW_IMGVIEW : 0x00200100,
        ITEMTYPE_GROUPITEM_VIEW_DIVVIEW : 0x00200200,
        ITEMTYPE_GROUPITEM_VIEW_WEBVIEW : 0x00200400,
        ITEMTYPE_GROUPITEM_VIEW_CUSTOM  : 0x00200800,
        ITEMTYPE_GROUPITEM_VIEW_MASK    : 0x00200F00,
        */

        ITEMTYPE_HEADERITEM_NONE        : 0x00400000,
        ITEMTYPE_HEADERITEM_EDIT_CHECK  : 0x00400001,
        ITEMTYPE_HEADERITEM_EDIT_SWITCH : 0x00400002,
        ITEMTYPE_HEADERITEM_EDIT_EDIT   : 0x00400004,
        ITEMTYPE_HEADERITEM_EDIT_CUSTOM : 0x00400008,
        ITEMTYPE_HEADERITEM_EDIT_MASK   : 0x0040000F,
        ITEMTYPE_HEADERITEM_CTRL_BUTTON : 0x00400010,
        ITEMTYPE_HEADERITEM_CTRL_STATIC : 0x00400020,
        ITEMTYPE_HEADERITEM_CTRL_CUSTOM : 0x00400080,
        ITEMTYPE_HEADERITEM_CTRL_MASK   : 0x004000F0,
        ITEMTYPE_HEADERITEM_VIEW_IMGVIEW: 0x00400100,
        ITEMTYPE_HEADERITEM_VIEW_DIVVIEW: 0x00400200,
        ITEMTYPE_HEADERITEM_VIEW_WEBVIEW: 0x00400400,
        ITEMTYPE_HEADERITEM_VIEW_VIDVIEW: 0x00400800,
        ITEMTYPE_HEADERITEM_VIEW_MASK   : 0x00400F00,

        ITEMTYPE_FOOTERITEM_NONE        : 0x00800000,
        ITEMTYPE_FOOTERITEM_EDIT_CHECK  : 0x00800001,
        ITEMTYPE_FOOTERITEM_EDIT_SWITCH : 0x00800002,
        ITEMTYPE_FOOTERITEM_EDIT_EDIT   : 0x00800004,
        ITEMTYPE_FOOTERITEM_EDIT_CUSTOM : 0x00800008,
        ITEMTYPE_FOOTERITEM_EDIT_MASK   : 0x0080000F,
        ITEMTYPE_FOOTERITEM_CTRL_BUTTON : 0x00800010,
        ITEMTYPE_FOOTERITEM_CTRL_STATIC : 0x00800020,
        ITEMTYPE_FOOTERITEM_CTRL_CUSTOM : 0x00800080,
        ITEMTYPE_FOOTERITEM_CTRL_MASK   : 0x008000F0,
        ITEMTYPE_FOOTERITEM_VIEW_IMGVIEW: 0x00800100,
        ITEMTYPE_FOOTERITEM_VIEW_DIVVIEW: 0x00800200,
        ITEMTYPE_FOOTERITEM_VIEW_WEBVIEW: 0x00800400,
        ITEMTYPE_FOOTERITEM_VIEW_VIDVIEW: 0x00800800,
        ITEMTYPE_FOOTERITEM_VIEW_MASK   : 0x00800F00,

        /*
        ITEMTYPE_DIVIDEITEM_NONE        : 0x01000000,
        ITEMTYPE_BUTTONITEM_NONE        : 0x02000000,
        */

        ITEMTYPE_EDITORITEM_NONE        : 0x04000000,
        ITEMTYPE_EDITORITEM_EDIT_CHECK  : 0x04000001,
        ITEMTYPE_EDITORITEM_EDIT_SWITCH : 0x04000002,
        ITEMTYPE_EDITORITEM_EDIT_EDIT   : 0x04000004,
        ITEMTYPE_EDITORITEM_EDIT_CUSTOM : 0x04000008,
        ITEMTYPE_EDITORITEM_EDIT_MASK   : 0x0400000F,
        ITEMTYPE_EDITORITEM_CTRL_BUTTON : 0x04000010,
        ITEMTYPE_EDITORITEM_CTRL_STATIC : 0x04000020,
        ITEMTYPE_EDITORITEM_CTRL_CUSTOM : 0x04000080,
        ITEMTYPE_EDITORITEM_CTRL_MASK   : 0x040000F0,
        ITEMTYPE_EDITORITEM_VIEW_IMGVIEW: 0x04000100,
        ITEMTYPE_EDITORITEM_VIEW_DIVVIEW: 0x04000200,
        ITEMTYPE_EDITORITEM_VIEW_WEBVIEW: 0x04000400,
        ITEMTYPE_EDITORITEM_VIEW_VIDVIEW: 0x04000800,
        ITEMTYPE_EDITORITEM_VIEW_MASK   : 0x04000F00,

        ITEMTYPE_VIEWERITEM_NONE        : 0x08000000,
        ITEMTYPE_VIEWERITEM_EDIT_CHECK  : 0x08000001,
        ITEMTYPE_VIEWERITEM_EDIT_SWITCH : 0x08000002,
        ITEMTYPE_VIEWERITEM_EDIT_EDIT   : 0x08000004,
        ITEMTYPE_VIEWERITEM_EDIT_CUSTOM : 0x08000008,
        ITEMTYPE_VIEWERITEM_EDIT_MASK   : 0x0800000F,
        ITEMTYPE_VIEWERITEM_CTRL_BUTTON : 0x08000010,
        ITEMTYPE_VIEWERITEM_CTRL_STATIC : 0x08000020,
        ITEMTYPE_VIEWERITEM_CTRL_CUSTOM : 0x08000080,
        ITEMTYPE_VIEWERITEM_CTRL_MASK   : 0x080000F0,
        ITEMTYPE_VIEWERITEM_VIEW_IMGVIEW: 0x08000100,
        ITEMTYPE_VIEWERITEM_VIEW_DIVVIEW: 0x08000200,
        ITEMTYPE_VIEWERITEM_VIEW_WEBVIEW: 0x08000400,
        ITEMTYPE_VIEWERITEM_VIEW_VIDVIEW: 0x08000800,
        ITEMTYPE_VIEWERITEM_VIEW_MASK   : 0x08000F00,
    };

    // [object.inherit:create]
    nexacro._MegaMenuItemControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    // [object.prototype:create]
    var _pMegaMenuItemControl = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._MegaMenuItemControl);
    nexacro._MegaMenuItemControl.prototype = _pMegaMenuItemControl;

    // [component.classinfo:create]

    // 수정 : 정적 class info와 동적 state info를 구별 : 아래는 class info 대상으로 제약
    // 수정 : 단순 flag 변수는 연관 변수와 함께 묶음처리 : ComBase는 유지, ComBaseEx는 통합

    _pMegaMenuItemControl._type_name = "MegaMenuItemControl";

    _pMegaMenuItemControl._is_subcontrol = true;
    _pMegaMenuItemControl._is_fluid_layout = true;
    _pMegaMenuItemControl._excluded_flex = true;

    _pMegaMenuItemControl._not_use_scrollLeft = true;
    _pMegaMenuItemControl._is_editable_control = true;
    _pMegaMenuItemControl._use_readonly_status = true;          // Readonly 지원시 설정
    _pMegaMenuItemControl._use_subcontrol_tabkey = true;

    _pMegaMenuItemControl._layoutflag = 0x0003;                 // TODO : 상수조합으로 수정

    // _pMegaMenuItemControl._is_container = true;

    /* accessibility */
    _pMegaMenuItemControl._p_accessibilityrole = "menuitem";

    //===============================================================
    // nexacro._MegaMenuItemControl : Init
    //===============================================================

    // 수정 : 정적 class info와 동적 state info를 구별 : 아래는 state info 대상으로 제약
    //      : nexacro._has_megamenu_expand_status 상태변수 설정/처리 여부 확인

    // [component.stateinfo:create]
    _pMegaMenuItemControl._setInnerFlags = function ()
    {
        // item inner flags ( useflex, useformat, usepanel, usecontainer )
        this._setUseLayout(true, false, false, true);

        // item inner flags ( head, tail, mark, null, client )
        this._setUseItems(false, false, false, false, false);

        // part inner flags ( part, add, acc )
        this._setUseParts(false, 1, 1);

        // select inner flags (selectinfo, selectstatus, selectorcontrol)
        this._setUseSelect(false, true, false);

        // scroll inner flags ( scroll, cover, track, stick, action timer )
        this._setUseScroll(false, false);
        this._setUseScrollCover(false);
        this._setUseScrollTrack(false);
        this._setUseScrollStick(false);
        this._setUseScrollTimer(300, 300, 600, 300, 0);   // no scroll no timer

        // expand inner flags
        this._setUseExpand(false, false, true, false);
        this._setUseExpandStatus(false); //  this._setUseExpandStatus(nexacro._has_megamenu_expand_status);

        // bind inner flags ( databind, levelbind, xmlbind, jsonbind, fullbind, dataexpr, fullexpr )
        this._setUseBind(false, false, false, false, false);
        this._setUseExpr(false, false);
    };

    //===============================================================
    // nexacro._MegaMenuItemControl : Override
    //===============================================================

    // 확인 : 아래는 선언값 또는 상위값을 사용하도록 수정
    // [component.layout.formats.config:init]
    _pMegaMenuItemControl._onInitFormatsLayout = function ()
    {
        // use ref format
        /*
        var formats = this._formats;

        if (formats)
        {
            formats._initFormats(
                nexacro._FormatsConst.FORMATMODE_XML,
                nexacro._FormatsConst.FORMATTYPE_POSITION,
                nexacro._FormatsConst.FORMATBIND_BIND | nexacro._FormatsConst.FORMATBIND_EXPR,
                [],
                [
                    "menuitemicon",
                    "menuitemcheck",
                    "menuitemexpand",
                    "menuitemtext",
                    "menuitemdesc",
                    "menuitemhotkey",
                    "menuitemdivider",
                    "menuitembadge",
                    "menuitembutton",
                    "menuitemswitch",
                    "menuitemedit",
                    "menuitemview"
                ],
                [],
                [], [], [],
                {
                    // MenuItem Ctrl Control : Icon/Static/Button..
                    "Icon"      : "nexacro._Icon",
                    "Check"     : "nexacro._Icon",
                    "Expand"    : "nexacro._MegaMenuItemExpandControl",
                    "Close"     : "nexacro.Button",
                    "Text"      : "nexacro._MegaMenuItemTextControl",
                    "Desc"      : "nexacro._MegaMenuItemTextControl",
                    "HotKey"    : "nexacro._MegaMenuItemTextControl",
                    "Divider"   : "nexacro.Button",
                    "Badge"     : "nexacro.Button",
                    "Button"    : "nexacro.Button",
                    "Switch"    : "nexacro.Switch",
                    "Edit"      : "nexacro.Edit",
                    "View"      : "nexacro.WebView",
                    "Control"   : "nexacro.Component"
                }
            );
        }
        */
    };

    _pMegaMenuItemControl._onRefFormatsLayout = function ()
    {
    };

    _pMegaMenuItemControl.onCreateCtxtControl = function (item, ctxt, bind, seq)
    {
        if (item && ctxt)
        {
            if (item._setAddedCreateInfo)
                item._setAddedCreateInfo(this, ctxt, bind, seq);

            if (item._setEventHandler)
            {
                item._setEventHandler("onclick",    this.on_notify_child_onclick,       this);
                item._setEventHandler("ondblclick", this.on_notify_child_ondblclick,    this);
                item._setEventHandler("onsetfocus", this.on_notify_child_onfocus,       this);
                item._setEventHandler("onchanged",  this.on_notify_child_onchanged,     this);
                item._setEventHandler("oninput",    this.on_notify_child_oninput,       this);
            }
        }

        return item;
    };

    _pMegaMenuItemControl.onUpdateItem = function (index, info)
    {
        // update info
        if (this._rowidx != index)
            this._rowidx = index;

        // update all ctrl
        this.on_update_position(true, false, false);

        /*
        var children = this._children;
        if (children)
        {
            for (var i = 0, l = children.length, child; i < l; i++)
            {
                child = children[i];
                if (child)
                {
                    if (child._updateAll)
                        child._updateAll();
                }
            }
        }
        */
    };

    _pMegaMenuItemControl._textbreakwidth  = 24;
    _pMegaMenuItemControl._textbreakheight = 12;
    _pMegaMenuItemControl._descbreakwidth  = 48;
    _pMegaMenuItemControl._descbreakheight = 12;

    _pMegaMenuItemControl._updateTextCtrlShow = function () { var ctrl = this._findChild("menuitemtext");  if (ctrl && ctrl._p_autobreak) { var v = ctrl.getOffsetWidth() > this._textbreakwidth && ctrl.getOffsetHeight() > this._textbreakheight; if (v != ctrl._p_visible) { ctrl.set_visible(v); return true; } } };
    _pMegaMenuItemControl._updateDescCtrlShow = function () { var ctrl = this._findChild("menuitemdesc");  if (ctrl && ctrl._p_autobreak) { var v = ctrl.getOffsetWidth() > this._descbreakwidth && ctrl.getOffsetHeight() > this._descbreakheight; if (v != ctrl._p_visible) { ctrl.set_visible(v); return true; } } };

    _pMegaMenuItemControl.on_update_position = function (resize_flag, move_flag, update)
    {
        // update pos/size
        return nexacro.ComplexComponent.prototype.on_update_position.call(this, resize_flag, move_flag, update);

        /*
        if (!this._is_created || this._change_position) return;

        // update auto break
        if (this._updateTextCtrlShow()) this._change_position = true;
        if (this._updateDescCtrlShow()) this._change_position = true;

        if (this._change_position)
        {
            this._update_position();
            this._change_position = false;
        }
        */
    };

    /*
    _pMegaMenuItemControl.on_apply_fittocontents = function ()
    {
        if (this._is_created)
        {
            this._update_position();
        }
        this._on_apply_fittocontents();
    };
    */

    _pMegaMenuItemControl._defeditwidth = 100;
    _pMegaMenuItemControl._defeditheight = 24;
    _pMegaMenuItemControl._defviewwidth = 120;
    _pMegaMenuItemControl._defviewheight = 48;

    // TODO : Simple/Complex에서 Child 및 Format 기반으로 자동계산되도록 개선
    _pMegaMenuItemControl._on_getFitSize = function ()
    {
        var w = this.getPixelWidth();
        var h = this.getPixelHeight();

        var cw = false;
        var ch = false;

        switch (this._p_fittocontents)
        {
            case "none"     : return [w, h];
            case "width"    : cw = true;      break;
            case "height"   : ch = true;      break;
            case "both"     : cw = ch = true; break;
        }

        var sb = this._getCurrentStyleBorder();             // border size
        var sp = this._getCurrentStylePadding();            // padding size
        var gi = this._view._getMenuItemInnerGap();         // inner gap
        var ga = this._view._getMenuItemInnerGapAround();;  // inner gap around : default=false
        var gw = this._convCValueFloor(gi[0], w);           // inner gap width
        var gh = this._convCValueFloor(gi[1], h);           // inner gap height
        var gr = ga ? 2 : 0;

        var ff = this._isFixFormLayout();
        if (ff)
        {
            // built-in format fitsize

            switch (this._band)
            {
                case "mainheaderitem":      // gap-[icontext]-gap
                    {
                        var it = this._findChild("menuitemicontext");
                    //  var ic = this._findChild("menuitemclose");

                        var wh = it ? it._on_getFitSize() : [0,0];

                        if (cw) w = (wh[0]) + (gw * gr);
                        if (ch) h = (wh[1]) + (gh * gr);

                        break;
                    }
                case "mainmenuitem":        // gap-[icon/check]-gap-[text]-gap{-[badge]-gap}-[{button/edit/}expand]-gap
                    {
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max((ie ? ie.getPixelWidth() + gw : 0), (ib ? ib.getPixelWidth() + gw : 0)) + (ic ? ic.getPixelWidth() + gw : 0) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0)  + (gw * gr);
                        if (ch) h = Math.max((ie ? ie.getPixelHeight()     : 0), (ib ? ib.getPixelHeight()     : 0),   (ic ? ic.getPixelHeight()     : 0),  (wh[1]),  (ig ? ig.getPixelHeight()     : 0)) + (gh * gr);

                        break;
                    }
                case "maingroupitem":       // gap-[icon/check]-gap-[text]-gap{-[badge]-gap}{-[button/edit]-gap}-[expand]-gap
                    {
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w =          (ie ? ie.getPixelWidth() + gw : 0) + (ib ? ib.getPixelWidth() + gw : 0) + (ic ? ic.getPixelWidth() + gw : 0) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0)  + (gw * gr);
                        if (ch) h = Math.max((ie ? ie.getPixelHeight()     : 0),  (ib ? ib.getPixelHeight()     : 0),  (ic ? ic.getPixelHeight()     : 0),  (wh[1]),  (ig ? ig.getPixelHeight()     : 0)) + (gh * gr);

                        break;
                    }
                case "mainfooteritem":      // gap-[iconttext]-gap{-[view/button]-gap}
                    {
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");
                        var ib = this._findChild("menuitembutton");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w =          (wh[0]) + (ib ? ib.getPixelWidth() + gw : 0) + (iv ? this._defviewwidth + gw : 0)  + (gw * gr);
                        if (ch) h = Math.max((wh[1]),  (ib ? ib.getPixelHeight()     : 0),  (iv ? this._defviewheight     : 0)) + (gh * gr);

                        break;
                    }
                case "maindivideritem":     // gap-[divider]-gap
                    {
                        var is = this._findChild("menuitemdivider");

                        if (cw) w = is ? (is.getPixelWidth()  + (gw * gr)) : 0;
                        if (ch) h = is ? (is.getPixelHeight() + (gh * gr)) : 0;

                        break;
                    }
                case "mainbuttonitem":      // gap-[button/badge]-gap
                    {
                        var ib = this._findChild("menuitembutton");

                        if (cw) w = ib ? (ib.getPixelWidth()  + (gw * gr)) : 0;
                        if (ch) h = ib ? (ib.getPixelHeight() + (gh * gr)) : 0;

                        break;
                    }
                case "mainedititem":        // gap-[icontext]-gap-[edit]-gap{-[button]-gap}
                    {
                        var it = this._findChild("menuitemicontext");
                        var ie = this._findChild("menuitemedit");
                        var ib = this._findChild("menuitembutton");

                        if (cw) w =          (it ? it.getPixelWidth() + gw : 0) + (ib ? ib.getPixelWidth() + gw : 0) + (ie ? this._defeditwidth  : 0)  + (ie ? gw * gr : 0);
                        if (ch) h = Math.max((it ? it.getPixelHeight()     : 0),  (ib ? ib.getPixelHeight()     : 0),  (ie ? this._defeditheight : 0)) + (ie ? gh * gr : 0);

                        break;
                    }
                case "mainviewitem":        // gap-[icontext]-gap-[view]-gap
                    {
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");

                        if (cw) w =          (it ? it.getPixelWidth()  : 0) + (iv ? this._defviewwidth + gw : 0)  + (it ? gw * gr : 0);
                        if (ch) h = Math.max((it ? it.getPixelHeight() : 0),  (iv ? this._defviewheight     : 0)) + (it ? gh * gr : 0);

                        break;
                    }

                case "subheaderitem":       // gap-[icontext]-gap-[desc]-gap
                    {
                        var it = this._findChild("menuitemicontext");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w =          (wh[0]) + (id ? id.getPixelWidth() + gw : 0)  + (it ? gw * gr : 0);
                        if (ch) h = Math.max((wh[1]),  (id ? id.getPixelHeight()     : 0)) + (it ? gh * gr : 0);

                        break;
                    }
                case "submenuitem":         // gap-[icon/check]-gap-[text]-gap{-[badge]-gap}-[{button/edit/}expand]-gap
                    {                       //                {-gap-[                    desc                     ]-gap}
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max(Math.max((ie ? ie.getPixelWidth() + gw : 0), (ib ? ib.getPixelWidth() + gw : 0)) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0), (id ? id.getPixelWidth() + gw : 0)) + (ic ? ic.getPixelWidth()  + gw : 0)  + (gw * gr);
                        if (ch) h = Math.max(Math.max((ie ? ie.getPixelHeight()     : 0), (ib ? ib.getPixelHeight()     : 0),   (wh[1]),  (ig ? ig.getPixelHeight()     : 0), (ic ? ic.getPixelHeight()     : 0)) + (id ? id.getPixelHeight() + gh : 0)) + (gh * gr);

                        break;
                    }
                case "subgroupitem":        // gap-[icon/check]-gap-[text]-gap{-[badge]-gap}{-[button/edit]-gap}-[expand]-gap
                    {                       //                {-gap-[                        desc                       ]-gap}
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w =          Math.max((ie ? ie.getPixelWidth() + gw : 0) + (ib ? ib.getPixelWidth() + gw : 0) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0),   (id ? id.getPixelWidth()       : 0)) + (ic ? ic.getPixelWidth() + gw : 0)  + (gw * gr);
                        if (ch) h = Math.max(Math.max((ie ? ie.getPixelHeight()     : 0),  (ib ? ib.getPixelHeight()     : 0),  (wh[1]),  (ig ? ig.getPixelWidth()      : 0)) + (id ? id.getPixelHeight() + gh : 0),   (ic ? ic.getPixelHeight()     : 0)) + (gh * gr);

                        break;
                    }
                case "subfooteritem":       // gap-[iconttext]-gap{-[        view       ]-gap}
                    {                       //                -gap{-[desc]-gap}-{[button]-gap}
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");
                        var ib = this._findChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w =          Math.max((ib ? ib.getPixelWidth()  + gw : 0) + (id ? id.getPixelWidth()  + gw : 0),   (iv ? this._defviewwidth + gw : 0)) + (wh[0])  + (gw * gr);
                        if (ch) h = Math.max(Math.max((ib ? ib.getPixelHeight() + gh : 0),  (id ? id.getPixelHeight() + gh : 0)) + (iv ? this._defviewheight     : 0),   (wh[1])) + (gh * gr);

                        break;
                    }
                case "subdivideritem":      // gap-[divider]-gap
                    {
                        var is = this._findChild("menuitemdivider");

                        if (cw) w = is ? (is.getPixelWidth()  + (gw * gr)) : 0;
                        if (ch) h = is ? (is.getPixelHeight() + (gh * gr)) : 0;

                        break;
                    }
                case "subbuttonitem":       //  gap-[button/badge]-gap
                    {                       // {gap-[    desc    ]-gap}
                        var ib = this._findChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max((ib ? ib.getPixelWidth()  : 0),  (id ? id.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h =          (ib ? ib.getPixelHeight() : 0) + (id ? id.getPixelHeight() + gh : 0)  + (gh * gr);

                        break;
                    }
                case "subedititem":         //  gap-[icontext]-gap-[edit]-gap{-[button]-gap}
                    {                       //                {gap-[        desc      ]-gap}
                        var it = this._findChild("menuitemicontext");
                        var ie = this._findChild("menuitemedit");
                        var ib = this._findChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max(         (ie ? this._defeditwidth + gw : 0) + (ib ? ib.getPixelWidth() + gw : 0),   (id ? id.getPixelWidth()  + gw : 0)) + (it ? it.getPixelWidth()  : 0)  + (gw * gr);
                        if (ch) h = Math.max(Math.max((ie ? this._defeditheight     : 0),  (ib ? ib.getPixelHeight()     : 0)) + (id ? id.getPixelHeight() + gh : 0),   (it ? it.getPixelHeight() : 0)) + (gh * gr);

                        break;
                    }
                case "subviewitem":         // gap-[icontext]-gap-[view]-gap
                    {                       //               {gap-[desc]-gap}
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max((iv ? this._defviewwidth + gw : 0),  (id ? id.getPixelWidth()  + gw : 0)) + (it ? it.getPixelWidth()  : 0)  + (gw * gr);
                        if (ch) h = Math.max((iv ? this._defviewheight     : 0) + (id ? id.getPixelHeight() + gh : 0),   (it ? it.getPixelHeight() : 0)) + (gh * gr);

                        break;
                    }

                case "headeritem":          //  gap-[close]-gap-[icontext]-gap
                case "detailheaderitem":    // {gap-[         desc       ]-gap}
                    {
                        var ic = this._findChild("menuitemclose");
                        var it = this._findChild("menuitemicontext");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max((ic ? ic.getPixelWidth() + gw : 0) + (wh[0]),   (id ? id.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h = Math.max((ic ? ic.getPixelHeight()     : 0),  (wh[1])) + (id ? id.getPixelHeight() + gh : 0)  + (gh * gr);

                        break;
                    }
                case "menuitem":            //  gap-[icon/check]-gap-[text]-gap{-[badge]-gap}-[{button/edit/}expand]-gap
                case "detailmenuitem":      // {gap-[                                desc                          ]-gap}
                    {
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max(Math.max((ie ? ie.getPixelWidth()  : 0), (ib ? ib.getPixelWidth() + gw : 0)) + (ic ? ic.getPixelWidth() + gw : 0) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0),   (id ? id.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h =          Math.max((ie ? ie.getPixelHeight() : 0), (ib ? ib.getPixelHeight()     : 0),   (ic ? ic.getPixelHeight()     : 0),  (wh[1]),  (ig ? ig.getPixelHeight()     : 0)) + (id ? id.getPixelHeight() + gh : 0)  + (gh * gr);

    // trace ( "mi.text:" + (it?it._displaytext:"notextitem") + "[" + it.getPixelWidth() + "," + it.getPixelHeight() + "]" );
    // trace ( "mi.desc:" + (id?id._displaytext:"nodescitem") + "[" + id.getPixelWidth() + "," + id.getPixelHeight() + "]" );

                        break;
                    }
                case "groupitem":           //  gap-[icon/check]-gap-[text]-gap{-[badge]-gap}{-[button/edit]-gap}-[expand]-gap
                case "detailgroupitem":     // {gap-[                                 desc                               ]-gap}
                    {
                        var ic = this._findChild("menuitemicon");
                        var it = this._seekChild("menuitemtext");
                        var ig = this._findChild("menuitembadge");
                        var ib = this._findChild("menuitemswitch") ?? this._findChild("menuitembutton");
                        var ie = this._findChild("menuitemexpand");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max((ie ? ie.getPixelWidth() + gw : 0) + (ib ? ib.getPixelWidth() + gw : 0) + (ic ? ic.getPixelWidth() + gw : 0) + (wh[0]) + (ig ? ig.getPixelWidth() + gw : 0),   (id ? id.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h = Math.max((ie ? ie.getPixelHeight()     : 0),  (ib ? ib.getPixelHeight()     : 0),  (ic ? ic.getPixelHeight()     : 0),  (wh[1]),  (ig ? ig.getPixelHeight()     : 0)) + (id ? id.getPixelHeight() + gh : 0)  + (gh * gr);

    // trace ( "gi.text:" + (it?it._displaytext:"notextitem") + "[" + it.getPixelWidth() + "," + it.getPixelHeight() + "]" );
    // trace ( "gi.desc:" + (id?id._displaytext:"nodescitem") + "[" + id.getPixelWidth() + "," + id.getPixelHeight() + "]" );

                        break;
                    }
                case "footeritem":          //  gap-[      iconttext      ]-gap
                case "detailfooteritem":    // {gap-[        view         ]-gap}
                    {                       // {gap-{[desc]}-{gap-[button]}-gap}
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");
                        var ib = this._findChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        var wh = it ? it._on_getFitSize() : [0, 0];

                        if (cw) w = Math.max((ib ? ib.getPixelWidth()  + gw : 0) + (id ? id.getPixelWidth()  + gw : 0),   (iv ? this._defviewwidth  + gw : 0),  (wh[0])) + (gw * gr);
                        if (ch) h = Math.max((ib ? ib.getPixelHeight() + gh : 0),  (id ? id.getPixelHeight() + gh : 0)) + (iv ? this._defviewheight + gh : 0) + (wh[1])  + (gh * gr);

                        break;
                    }
                case "divideritem":         // gap-[divider]-gap
                case "detaildivideritem":
                    {
                        var is = this._findChild("menuitemdivider");

                        if (cw) w = is ? (is.getPixelWidth()  + (gw * gr)) : 0;
                        if (ch) h = is ? (is.getPixelHeight() + (gh * gr)) : 0;

                        break;
                    }
                case "buttonitem":          //  gap-[button/badge]-gap
                case "detailbuttonitem":    // {gap-[    desc    ]-gap}
                    {
                        var ib = this._findChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max((ib ? ib.getPixelWidth()  : 0),  (id ? id.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h =          (ib ? ib.getPixelHeight() : 0) + (id ? id.getPixelHeight() + gh : 0)  + (gh * gr);

                        break;
                    }
                case "edititem":            //  gap-[      icontext      ]-gap
                case "detailedititem":      //  gap-[ edit ]-gap{-[button]-gap}
                    {                       // {gap-[        desc        ]-gap}
                        var it = this._findChild("menuitemicontext");
                        var ie = this._findChild("menuitemedit");
                        var ib = this._seekChild("menuitembutton");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max((ie ? this._defeditwidth  : 0) + (ib ? ib.getPixelWidth() + gw : 0),   (id ? id.getPixelWidth()       : 0),  (it ? it.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h = Math.max((ie ? this._defeditheight : 0),  (ib ? ib.getPixelHeight()     : 0)) + (id ? id.getPixelHeight() + gh : 0) + (it ? it.getPixelHeight() + gh : 0)  + (gh * gr);

                        break;
                    }
                case "viewitem":            //  gap-[icontext]-gap
                case "detailviewitem":      //  gap-[  view  ]-gap
                    {                       // {gap-[  desc  ]-gap}
                        var it = this._findChild("menuitemicontext");
                        var iv = this._findChild("menuitemview");
                        var id = this._seekChild("menuitemdesc");

                        if (cw) w = Math.max((iv ? this._defviewwidth  : 0),  (id ? id.getPixelWidth()       : 0),  (it ? it.getPixelWidth()       : 0)) + (gw * gr);
                        if (ch) h =          (iv ? this._defviewheight : 0) + (id ? id.getPixelHeight() + gh : 0) + (it ? it.getPixelHeight() + gh : 0)  + (gh * gr);

                        break;
                    }
                default :                   // UserFormat AutoSize // TODO : 아래 별도 체크중이니 확인하여 제거
                    {
                        var I = Number.POSITIVE_INFINITY;
                        var l=I, t=I; 
                        var r=0, b=0;

                        var chdlst = this._getChildren();
                        if (chdlst.length)
                        {
                            for (var chd in this._getChildren())
                            {
                                if (chd && chd._p_visible)
                                {
                                    if (cw) (l = l === undefined ? l : Math.min(l, chd.getOffsetLeft())), (r = r === undefined ? r : Math.max(r, chd.getOffsetRight()));
                                    if (ch) (t = t === undefined ? t : Math.min(t, chd.getOffsetTop())),  (b = b === undefined ? b : Math.max(b, chd.getOffsetBottom()));
                                }
                            }

                            if (cw) w = Math.max(w, r-(l == I ? 0 : l));
                            if (ch) h = Math.max(h, b-(t == I ? 0 : t));
                        }

                        break;
                    }
            }
        }
        else
        {
            // TODO : native css size로 변경할것

            // userformat fitsize
            var chd = this._getChildren();
            var cnt = chd.length;
            if (cnt)
            {
                var bw = this._basis_width  || this.getOffsetHeight(); 
                var bh = this._basis_height || this.getOffsetHeight();

                if (sp)
                {
                    bw -= sp.left + sp.right;
                    bh -= sp.top  + sp.bottom;
                }
                if (sb)
                {
                    bw -= sb._getBorderWidth();
                    bh -= sb._getBorderHeight();
                }

                var gh = this._getFluidHorizontalGap();
                var gv = this._getFluidVerticalGap();

                switch (this._getFluidLayoutType())
                {
                    default:
                    case "default":
                    {
                        var ll = 0, lr = 0, rl = 0, rr = 0, ww = 0;
                        var tt = 0, tb = 0, bt = 0, bb = 0, hh = 0;

                        for (var c of chd)
                        {
                            if (c && c._p_visible)
                            {
                                if (cw)
                                {
                                    if (c._p_left && c._p_right)    { ww = bw; }
                                    else
                                    {
                                        if (c._p_left)              { ll = Math.min(ll, c.getOffsetLeft()); lr = Math.max(lr, c.getOffsetRight()); }
                                        if (c._p_right)             { rl = Math.min(rl, c.getOffsetLeft()); rr = Math.max(rr, c.getOffsetRight()); }
                                    }
                                }

                                if (ch)
                                {
                                    if (c._p_top && c._p_bottom)    { hh = bh; }
                                    else
                                    {
                                        if (c._p_top)               { tt = Math.min(tt, c.getOffsetTop());  tb = Math.max(tb, c.getOffsetBottom()); }
                                        if (c._p_bottom)            { bt = Math.min(bt, c.getOffsetTop());  bb = Math.max(bb, c.getOffsetBottom()); }
                                    }
                                }
                            }
                        }

                        if (cw) w = Math.max((lr-ll)+(rr-rl), ww);
                        if (ch) h = Math.max((tb-tt)+(bb-bt), hh);

                        break;
                    }
                    case "horizontal":
                    {
                        if (this._p_flexwrap == "wrap")
                        {
                            var ww = 0, wi = 0, hw = 0, ow = 0, tw = 0;
                            var hh = 0, hi = 0, vh = 0, oh = 0;

                            for (var c of chd)
                            {
                                if (!c || !c._p_visible) continue;

                                ow = c.getOffsetWidth();
                                oh = c.getOffsetHeight();
                                tw = ow + (wi ? gh : 0);

                                if (c._p_top  && c._p_bottom) oh = bh;
                                if (c._p_left && c._p_right )
                                {
                                    if (wi && hw)    {                      ww=Math.max(ww,hw);     hi++,hh+=vh;                        }
                                                     { hw =0;               vh=0;                   hi++,hh+=oh;   wi=0;                }
                                }
                                else
                                {
                                    if (bw >= hw+tw) { hw+=tw;              vh=Math.max(vh,oh);                    wi++;      continue; }
                                    if (wi && hw)    {                      ww=Math.max(ww,hw);     hi++,hh+=vh;                        }
                                                     { hw =ow;              vh=oh;                                 wi=1;                }
                                }
                            }
                            {
                                    if (wi && hw)    {                      ww=Math.max(ww,hw);     hi++,hh+=vh;                        }
                            }

                            if (cw)         w = ww;
                            if (ch && hi)   h = hh + gv*(hi-1);
                        }
                        else
                        {
                            var ww = 0, hh = 0, hw = 0, vh = 0; wi = 0;

                            for (var c of chd)
                            {
                                if (c && c._p_visible)
                                {
                                    if (cw)
                                    {
                                        if (c._p_left && c._p_right) { ww = bw; }
                                        else                         { hw += c.getOffsetWidth(); wi++; }
                                    }
                                    if (ch)
                                    {
                                        if (c._p_top && c._p_bottom) { hh = bh; }
                                        else                         { vh = Math.max(vh, c.getOffsetHeight()); }
                                    }
                                }
                            }

                            if (cw && wi)   w = Math.max(hw, ww) + (gh*(wi-1));
                            if (ch)         h = Math.max(vh, hh);
                        }

                        break;
                    }
                    case "vertical":
                    {
                        if (this._p_flexwrap == "wrap")
                        {
                            var wi = 0, ow = 0, hw = 0, ww = 0;
                            var hi = 0, oh = 0, vh = 0, hh = 0, th = 0;

                            for (var c of chd)
                            {
                                if (!c || !c._p_visible) continue;

                                ow = c.getOffsetWidth();
                                oh = c.getOffsetHeight();
                                th = oh + (hi ? gv : 0);

                                if (c._p_left && c._p_right ) ow = bw;
                                if (c._p_top  && c._p_bottom)
                                {
                                    if (hi && vh)    {                      hh=Math.max(hh,vh);     wi++,ww+=hw;                        }
                                                     { vh =0;               hw=0;                   wi++,ww+=ow;    hi=0;               }
                                }
                                else
                                {
                                    if (bh >= vh+th) { vh+=th;              hw=Math.max(hw,ow);                     hi++;     continue; }
                                    if (hi && vh)    {                      hh=Math.max(hh,vh);     wi++,ww+=hw;                        }
                                                     { vh =oh;              hw=ow;                                  hi=1;               }
                                }
                            }
                            {
                                    if (hi && vh)    {                      hh=Math.max(hh,vh);     wi++,ww+=hw;                        }
                            }

                            if (cw && wi)   w = ww + gh*(wi-1);
                            if (ch)         h = hh;
                        }
                        else
                        {
                            var ww = 0, hh = 0, hw = 0, vh = 0; hi = 0;

                            for (var c of chd)
                            {
                                if (c && c._p_visible)
                                {
                                    if (cw)
                                    {
                                        if (c._p_left && c._p_right) { ww = bw; }
                                        else                         { hw = Math.max(hw, c.getOffsetWidth()); }
                                    }
                                    if (ch)
                                    {
                                        if (c._p_top && c._p_bottom) { hh = bh; }
                                        else                         { vh += c.getOffsetHeight(); hi++; }
                                    }
                                }
                            }

                            if (cw)         w = Math.max(hw, ww);
                            if (ch && hi)   h = Math.max(vh, hh) + (gv*(hi-1));
                        }

                        break;
                    }
                    case "table":
                    {
                        if (!this._p_tabletemplate)
                        {
                            if (cw) w = this._basis_width;
                            if (ch) h = this._basis_height;

                            break;
                        }

                        // TODO : Cache 처리
                        var td = this._p_tabledirection != "vertical";
                        var tt = this._p_tabletemplate.split("/");
                        var th = tt.length > 0 ? tt[0] : "";
                        var tw = tt.length > 1 ? tt[1] : "";
                        var ha = th.split(" ").filter(s => s != "");
                        var wa = tw.split(" ").filter(s => s != "");
                        var hn = ha.length;
                        var wn = wa.length;
                        var fh = bh;
                        var fw = bw;
                        var mh = ha.map((v) => { var p=Number.parseFloat(v); var r = v.endsWith("%") ? (p/100*bh) : v.endsWith("*") ? -p : p; if (r>0) fh-=r; return r;} ); fh /= hn; mh.forEach((v,i,a) => { if(v<0) a[i]*=-fh; } );
                        var mw = wa.map((v) => { var p=Number.parseFloat(v); var r = v.endsWith("%") ? (p/100*bw) : v.endsWith("*") ? -p : p; if (r>0) fw-=r; return r;} ); fw /= wn; mw.forEach((v,i,a) => { if(v<0) a[i]*=-fw; } );
                        var wi, hi, wx, hx, hc, wc;
                        var ow, oh;

                        wi = hi = wx = hx = hc = wc = 0;

                        if (this._p_tabletemplatearea)
                        {
                            var ta = this._p_tabletemplatearea.trim().split(/["']/).filter(row => row.trim() !== '').map(row => row.trim().split(/\s+/));
                            var ca = Array.from(Array(hn), () => Array(wn).fill(0));
                            
                            for (var c of chd)
                            {
                                var tc = c._p_tablecellarea;

                                if (tc)
                                {
                                    hx = ta.findIndex(row => row.includes(tc));
                                    wx = hx < 0 ? -1 : ta[hx].indexOf(tc);

                                    ow = c.getOffsetWidth();
                                    oh = c.getOffsetHeight();

                                    mw[wx] = Math.max(mw[wx], ow);
                                    mh[hx] = Math.max(mh[hx], oh);
                                    
                                    ca[hx][wx]++;
                                }
                            }
                            for (var c of chd)
                            {
                                tc = c._p_tablecellarea;

                                if (!tc)
                                {
                                    if (td) { while (ca[hi][wi] && hi<hn) { if (++wi >= wn) { wi=0; hi++; } } }
                                    else    { while (ca[hi][wi] && wi<wn) { if (++hi >= hn) { hi=0; wi++; } } }

                                    ow = c.getOffsetWidth();
                                    oh = c.getOffsetHeight();

                                    mw[wi] = Math.max(mw[wi], ow);
                                    mh[hi] = Math.max(mh[hi], oh);

                                    if (td) { if (++wi >= wn) { wi=0; hi++; } }
                                    else    { if (++hi >= hn) { hi=0; wi++; } }
                                }
                            }

                            if (cw) w = mw.reduce((a,c) => a+c) + (gh*(Math.max(wn,wi+1)-1));
                            if (ch) h = mh.reduce((a,c) => a+c) + (gv*(Math.max(hn,hi+1)-1));
                        }
                        else
                        {
                            for (var c of chd)
                            {
                                ow = c.getOffsetWidth();
                                oh = c.getOffsetHeight();

                                mw[wi] = Math.max(mw[wi], ow);
                                mh[hi] = Math.max(mh[hi], oh);

                                if (td) { if (++wi >= wn) { wi=0; hi++; } }
                                else    { if (++hi >= hn) { hi=0; wi++; } }
                            }

                            if (cw) w = mw.reduce((a,c) => a+c) + (gh*(Math.max(wn,wi+1)-1));
                            if (ch) h = mh.reduce((a,c) => a+c) + (gv*(Math.max(hn,hi+1)-1));
                        }

                        break;
                    }
                }
            }
            else
            {
                if (cw) w = this._basis_width;
                if (ch) h = this._basis_height;
            }
        }

        if (sp)
        {
            if (cw) w += sp.left + sp.right;
            if (ch) h += sp.top  + sp.bottom;
        }
        if (sb)
        {
            if (cw) w += sb._getBorderWidth();
            if (ch) h += sb._getBorderHeight();
        }

        return [w, h];
    };

    _pMegaMenuItemControl._on_getFocusCtrl = function ()
    {
        switch (this._band)
        {
        //  case "mainheaderitem":  case "subheaderitem":   case "detailheaderitem":    case "headeritem":
        //  case "mainmenuitem":    case "submenuitem":     case "detailmenuitem":      case "menuitem":
        //  case "maingroupitem":   case "subgroupitem":    case "detailgroupitem":     case "groupitem":
        //  case "mainfooteritem":  case "subfooteritem":   case "detailfooteritem":    case "footeritem":
        //  case "maindivideritem": case "subdivideritem":  case "detaildivideritem":   case "divideritem":
            case "mainbuttonitem":  case "subbuttonitem":   case "detailbuttonitem":    case "buttonitem":  return this._seekChild("menuitembutton");
            case "mainedititem":    case "subedititem":     case "detailedititem":      case "edititem":    return this._seekChild("menuitemedit");
            case "mainviewitem":    case "subviewitem":     case "detailviewitem":      case "viewitem":    return this._seekChild("menuitemview");
        }
    };

    //===============================================================
    // nexacro._MegaMenuItemControl : Status
    //===============================================================
    _pMegaMenuItemControl._onResetUserStatus = function ()
    {
        if (this._is_expandable && this._use_expand_status)
        {
            this._onResetUserExpand();
        }
    };

    _pMegaMenuItemControl._onResetUserExpand = function ()
    {
        var expandbtn = this._findChild("menuitemexpand");
        if (expandbtn)
        {
            var megamenu = this._view;
            if (megamenu && megamenu.getItemExpandStatus(this._itemindex) > 0)
            {
                expandbtn._changeUserStatus("expand", true);

                if (this._getEnvironment()?._p_enableaccessibility && nexacro._isArray(megamenu._getItem(this._itemindex)))
                {
                    expandbtn._setAccessibilityStatExpanded(true);
                }
            }
            else
            {
                expandbtn._changeUserStatus("collapse", true);

                if (this._getEnvironment()?._p_enableaccessibility && nexacro._isArray(megamenu._getItem(this._itemindex)))
                {
                    expandbtn._setAccessibilityStatExpanded(false);
                }
            }
        }
    };

    //===============================================================
    // nexacro._MegaMenuItemControl : Property
    //===============================================================
    /*
    // [object.property:init]
    _pMegaMenuItemControl._onInitProperties = function ()
    {
        // init interface prop

    };
    // [object.property:apply]
    _pMegaMenuItemControl._onApplyProperties = function ()
    {
        // apply interface prop

        // apply component prop
    };
    // [object.property:clear]
    _pMegaMenuItemControl._onClearProperties = function ()
    {
        // clear interface property

        // clear component property
    };
    */

    /*
    _pMegaMenuItemControl._chkfit = undefined;
    _pMegaMenuItemControl._autocontsfit = true;

    _pMegaMenuItemControl.set_chkfit = function (v)
    {
        this._chkfit = v;
        this._autocontsfit = v;
    };
    */

    _pMegaMenuItemControl.set_formattype = function (v)
    {
        this._setLayoutFixForm(v == "fix");
    };


    //===============================================================
    // nexacro._MegaMenuItemControl : Event
    //===============================================================

    _pMegaMenuItemControl._initEvents = function ()
    {
        nexacro.ComplexComponent.prototype._initEvents.call(this);

        this._event_list["onchanged"] = 1;
    };

    // 확인 : 공통화하여 ComBaseEx로 이전
    _pMegaMenuItemControl.on_notify_child_onclick = function (obj, e)
    {
        this.on_fire_onclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, this, e.fromobject, e.metakey, e.clickitem);
    };

    _pMegaMenuItemControl.on_notify_child_ondblclick = function (obj, e)
    {
        this.on_fire_ondblclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, this, e.fromobject, e.metakey, e.clickitem);
    };

    _pMegaMenuItemControl.on_notify_child_onfocus = function (obj, e)
    {
        this.on_fire_onsetfocus(e.oldcomponent, e.oldreferencecomponent, this, e.fromobject);
    };

    _pMegaMenuItemControl.on_notify_child_onchanged = function (obj, e)
    {
        this._setEditingCtrl(null);
        this.on_fire_onchanged(e);
    };

    _pMegaMenuItemControl.on_notify_child_oninput = function (obj, e)
    {
        this._setEditingCtrl(e.fromobject);
        this.on_fire_oninput(e);
    };

    _pMegaMenuItemControl.on_fire_onchanged = function (evt)
    {
        if (this.onchanged && this.onchanged._has_handlers)
        {
            return this.onchanged._fireEvent(this, evt);
        }
        return false;
    };

    _pMegaMenuItemControl.on_fire_oninput = function (evt)
    {
        if (this.oninput && this.oninput._has_handlers)
        {
            return this.oninput._fireEvent(this, evt);
        }
        return false;
    };

    // 확인 : 아래 좌표변환은 EventInfo property getter에서 수행하도록 변경
    _pMegaMenuItemControl.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key, clickitem)
    {
        if (this.onclick && this.onclick._has_handlers)
        {
            var canvas = this._getRecalcCanvasXY(from_refer_comp._control_element, canvasX, canvasY);
            canvasX = canvas[0];
            canvasY = canvas[1];

            var clientXY = this._getClientXY(canvasX, canvasY);
            clientX = clientXY[0];
            clientY = clientXY[1];

            var evt = new nexacro.ClickEventInfo(this, "onclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);
            evt.clickitem = clickitem ?? (button == "none" ? "call" : button);

            return this.onclick._fireEvent(this, evt);
        }
        return false;
    };

    _pMegaMenuItemControl.on_fire_ondblclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key, clickitem)
    {
        if (this.ondblclick && this.ondblclick._has_handlers)
        {
            var canvas = this._getRecalcCanvasXY(from_refer_comp._control_element, canvasX, canvasY);
            canvasX = canvas[0];
            canvasY = canvas[1];

            var clientXY = this._getClientXY(canvasX, canvasY);
            clientX = clientXY[0];
            clientY = clientXY[1];

            var evt = new nexacro.ClickEventInfo(this, "ondblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);
            evt.clickitem = clickitem;

            return this.ondblclick._fireEvent(this, evt);
        }
        return false;
    };

    _pMegaMenuItemControl._on_last_lbuttonup = function ()
    {
        this.parent._on_last_lbuttonup();
    };

    _pMegaMenuItemControl._on_last_keyup = function ()
    {
        this.parent._on_last_keyup();
    };

    _pMegaMenuItemControl._on_focus = function (self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus)
    {
        nexacro.Component.prototype._on_focus.call(this, self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus);

        var focusctrl = this._on_getFocusCtrl();
        if (focusctrl)
            focusctrl.setFocus();
    };

    //===============================================================
    // nexacro._MegaMenuItemControl : Interface Logic Override
    //===============================================================
    /* 확인 : 공통화하여 ComBaseEx로 이전
    _pMegaMenuItemControl.on_apply_prop_enable = function (v)
    {
        var child = this._children;
        if (!child)
            return;

        var count = child.length;
        if (count)
        {
            for (var i = 0; i < count; i++)
            {
                child[i]._setEnable(v);
            }
        }
    };
    */
    _pMegaMenuItemControl._onGetDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        return { want_tab: true, want_return: true, want_escape: true, want_chars: true, want_arrows: true };
    };

    _pMegaMenuItemControl.on_getIDCSSSelector = function ()
    {
        return this._band;
    };

    _pMegaMenuItemControl._getItemTypeName = function ()
    {
        // TODO : Format으로 이동
        switch (this._band)
        {
            default:
            case "menuitem"             : return "MegaMenuMenuItemControl";
            case "headeritem"           : return "MegaMenuHeaderItemControl";
            case "footeritem"           : return "MegaMenuFooterItemControl";
            case "divideritem"          : return "MegaMenuDividerItemControl";
            case "groupitem"            : return "MegaMenuGroupItemControl";
            case "buttonitem"           : return "MegaMenuButtonItemControl";
            case "edititem"             : return "MegaMenuEditItemControl";
            case "viewitem"             : return "MegaMenuViewItemControl";

            case "mainmenuitem"         : return "MegaMenuMainMenuItemControl";
            case "mainheaderitem"       : return "MegaMenuMainHeaderItemControl";
            case "mainfooteritem"       : return "MegaMenuMainFooterItemControl";
            case "maindivideritem"      : return "MegaMenuMainDividerItemControl";
            case "maingroupitem"        : return "MegaMenuMainGroupItemControl";
            case "mainbuttonitem"       : return "MegaMenuMainButtonItemControl";
            case "mainedititem"         : return "MegaMenuMainEditItemControl";
            case "mainviewitem"         : return "MegaMenuMainViewItemControl";
            case "submenuitem"          : return "MegaMenuSubMenuItemControl";
            case "subheaderitem"        : return "MegaMenuSubHeaderItemControl";
            case "subfooteritem"        : return "MegaMenuSubFooterItemControl";
            case "subdivideritem"       : return "MegaMenuSubDividerItemControl";
            case "subgroupitem"         : return "MegaMenuSubGroupItemControl";
            case "subbuttonitem"        : return "MegaMenuSubButtonItemControl";
            case "subedititem"          : return "MegaMenuSubEditItemControl";
            case "subviewitem"          : return "MegaMenuSubViewItemControl";
            case "detailmenuitem"       : return "MegaMenuDetailMenuItemControl";
            case "detailheaderitem"     : return "MegaMenuDetailHeaderItemControl";
            case "detailfooteritem"     : return "MegaMenuDetailFooterItemControl";
            case "detaildivideritem"    : return "MegaMenuDetailDividerItemControl";
            case "detailgroupitem"      : return "MegaMenuDetailGroupItemControl";
            case "detailbuttonitem"     : return "MegaMenuDetailButtonItemControl";
            case "detailedititem"       : return "MegaMenuDetailEditItemControl";
            case "detailviewitem"       : return "MegaMenuDetailViewItemControl";

            /*
            case "popupmenuitem"        : return "MegaMenuPopupMenuItemControl";
            case "popupheaderitem"      : return "MegaMenuPopupHeaderItemControl";
            case "popupfooteritem"      : return "MegaMenuPopupFooterItemControl";
            case "popupdivideritem"     : return "MegaMenuPopupDividerItemControl";
            case "popupgroupitem"       : return "MegaMenuPopupGroupItemControl";
            case "popupbuttonitem"      : return "MegaMenuPopupButtonItemControl";
            case "popupedititem"        : return "MegaMenuPopupEditItemControl";
            case "popupviewitem"        : return "MegaMenuPopupViewItemControl";
            case "popupmainmenuitem"    : return "MegaMenuPopupMainMenuItemControl";
            case "popupmainheaderitem"  : return "MegaMenuPopupMainHeaderItemControl";
            case "popupmainfooteritem"  : return "MegaMenuPopupMainFooterItemControl";
            case "popupmaindivideritem" : return "MegaMenuPopupMainDividerItemControl";
            case "popupmaingroupitem"   : return "MegaMenuPopupMainGroupItemControl";
            case "popupmainbuttonitem"  : return "MegaMenuPopupMainButtonItemControl";
            case "popupmainedititem"    : return "MegaMenuPopupMainEditItemControl";
            case "popupmainviewitem"    : return "MegaMenuPopupMainViewItemControl";
            case "popupsubmenuitem"     : return "MegaMenuPopupSubMenuItemControl";
            case "popupsubheaderitem"   : return "MegaMenuPopupSubHeaderItemControl";
            case "popupsubfooteritem"   : return "MegaMenuPopupSubFooterItemControl";
            case "popupsubdivideritem"  : return "MegaMenuPopupSubDividerItemControl";
            case "popupsubgroupitem"    : return "MegaMenuPopupSubGroupItemControl";
            case "popupsubbuttonitem"   : return "MegaMenuPopupSubButtonItemControl";
            case "popupsubedititem"     : return "MegaMenuPopupSubEditItemControl";
            case "popupsubviewitem"     : return "MegaMenuPopupSubViewItemControl";
            */
        }
    };

    //===============================================================
    // nexacro._MegaMenuItemControl : Inner Logic
    //===============================================================
    _pMegaMenuItemControl._onSetAddedCreateInfo = function (comp, ctxt, bind, seq)
    {
        // init band(menuitem)
        this._refinfo = ctxt._bandinfo;
        this._view = comp;
        this._band = ctxt.id;
        this._rowidx = seq;

        // TODO : bandid 대신 ctxt expandable 설정값 기반으로 체크하여 처리
        switch (this._band)
        {
            case "menuitem" : case "detailmenuitem" : case "mainmenuitem" : case "submenuitem" :
            case "groupitem": case "detailgroupitem": case "maingroupitem": case "subgroupitem": 
              /*if (ctxt.isexpandable)*/ { this._setUseExpandStatus(true); break; }
            default: 
                if (ctxt.isexpandable)   { this._setUseExpandStatus(true); break; }
        }

        this._setControl(ctxt.csstypename ?? this._getItemTypeName());
    };

    _pMegaMenuItemControl._onCheckSelectable = function ()
    {
        var view = this._view;
        if (view)
        {
            return view._onCheckSelectable() && this._isEnable();
        }
    };

    _pMegaMenuItemControl._onCheckExpandable = function ()
    {
        var expand = this._findChild("menuitemexpand");

        return expand && expand._isVisible() && expand._isEnable();
    };

    _pMegaMenuItemControl._onHasEditor = function (typename)
    {
        switch (this._band ?? typename)
        {
            case "edititem"   : case "detailedititem"   : case "mainedititem"   : case "subedititem"   :
            case "buttonitem" : case "detailbuttonitem" : case "mainbuttonitem" : case "subbuttonitem" : 
                return true;
            default: 
                return false;
        }
    };

    /*
    _pMegaMenuItemControl._setChildEventHandler = function (eventid, handlerfunc, handlertarget)
    {
        // init band(menuitem)
        var children = this._children;

        if (children)
        {
            for (var i = 0, l = children.length; i < l; i++)
            {
                var child = children[i];

                if (child)
                    child._setEventHandler(eventid, handlerfunc, handlertarget);
            }
        }
    };

    _pMegaMenuItemControl._checkProcessedKey = function (keycode, alt_key, ctrl_key, shift_key, check_comp, refer_comp, meta_key)
    {
        // 들어온 keyaction을 처리할지 무시할지 판단.
        // item이 expandable 상태일때는 custom keyaction 처리를 위해 true 반환.
        return check_comp && refer_comp && refer_comp._onCheckExpandable() && refer_comp._isEnable() && check_comp._isEnable();
    };
    */

    _pMegaMenuItemControl = null;
}

/*
// TODO : Div를 수정하여 처리, Control 추가 최소화
if (!nexacro._MegaMenuDivControl)
{
    //==============================================================================
    // nexacro._MegaMenuDivControl
    //==============================================================================
    nexacro._MegaMenuDivControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Div.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    }

    var _pMegaMenuDivControl = nexacro._createPrototype(nexacro.Div, nexacro._MegaMenuDivControl);
    nexacro._MegaMenuDivControl.prototype = _pMegaMenuDivControl;
    _pMegaMenuDivControl._type_name = "MegaMenuDivControl";

    _pMegaMenuDivControl._is_subcontrol = true;
    _pMegaMenuDivControl._use_selected_status = false;
    
    _pMegaMenuDivControl.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        return changestatus;
    };
    _pMegaMenuDivControl.getParentContext = function ()
    {
        return this.parent.getParentContext();
    };

    _pMegaMenuDivControl = null;
}
*/

if (!nexacro._MegaMenuOverflowButtonControl)
{
    //==============================================================================
    // nexacro._MegaMenuExpandControl
    //==============================================================================
    nexacro._MegaMenuOverflowButtonControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Button.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    }

    var _pMegaMenuOverflowButtonControl = nexacro._createPrototype(nexacro.Button, nexacro._MegaMenuOverflowButtonControl);
    nexacro._MegaMenuOverflowButtonControl.prototype = _pMegaMenuOverflowButtonControl;
    _pMegaMenuOverflowButtonControl._type_name = "MegaMenuOverflowButtonControl";

    _pMegaMenuOverflowButtonControl._is_subcontrol = true;
    _pMegaMenuOverflowButtonControl._use_selected_status = false;
    
    _pMegaMenuOverflowButtonControl.on_getIDCSSSelector = function ()
    {
        return "overflowbutton";
    };

    _pMegaMenuOverflowButtonControl.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        return changestatus;
    };

    _pMegaMenuOverflowButtonControl = null;
}

if (!nexacro.MegaMenu)
{
    //==============================================================================
    // nexacro.MegaMenuItemOverflowEventInfo
    //==============================================================================
    nexacro.MegaMenuItemOverflowEventInfo = function (obj, id, from_comp, from_refer_comp, expandidx, expandcnt)
    {
        this.eventid = id || "onmenuoverflowpopup";

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.expandindex = expandidx;
        this.expandcount = expandcnt;
    };

    var _pMegaMenuItemOverflowEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuItemOverflowEventInfo);
    nexacro.MegaMenuItemOverflowEventInfo.prototype = _pMegaMenuItemOverflowEventInfo;
    _pMegaMenuItemOverflowEventInfo._type_name = "MegaMenuItemOverflowEventInfo";

    _pMegaMenuItemOverflowEventInfo = null;

    // TODO : 동일 동작 함수 코드 통합 (nexacro._defineProperties/mixin 등)
    //==============================================================================
    // nexacro.MegaMenuSelectEventInfo
    //==============================================================================
    // 확인 : info object를 설정하고 getter에서 info에서 필요한값을 가져가거나 계산하도록 수정
    nexacro.MegaMenuSelectEventInfo = function (obj, id, oldselect, newselect)
    {
        this.eventid = id || "onselectchanged";

        this.fromobject = obj;
        this.fromreferenceobject = obj;

        this._oldselect = oldselect;
        this._newselect = newselect;
    };

    var _pMegaMenuSelectEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuSelectEventInfo);
    nexacro.MegaMenuSelectEventInfo.prototype = _pMegaMenuSelectEventInfo;
    _pMegaMenuSelectEventInfo._type_name = "MegaMenuSelectEventInfo";

    Object.defineProperty(_pMegaMenuSelectEventInfo, "itemid",                  { get() { return this.fromobject._getSelectItemId(this._newselect); },     set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "olditemid",               { get() { return this.fromobject._getSelectItemId(this._oldselect); },     set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "itemindex",               { get() { return this.fromobject._getSelectItemIndex(this._newselect); },  set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "olditemindex",            { get() { return this.fromobject._getSelectItemIndex(this._oldselect); },  set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "bindindex",               { get() { return this.fromobject._getSelectBindIndex(this._newselect); },  set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "oldbindindex",            { get() { return this.fromobject._getSelectBindIndex(this._oldselect); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuSelectEventInfo, "id",                      { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.idcolumn); },                      set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "code",                    { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.codecolumn); },                    set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "caption",                 { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.captioncolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "description",             { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.descriptioncolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "icon",                    { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.iconcolumn); },                    set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "badge",                   { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.badgecolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "enable",                  { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.enablecolumn); },                  set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "level",                   { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.levelcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "type",                    { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.typecolumn); },                    set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "controltype",             { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.controltypecolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "controlvalue",            { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.controlvaluecolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "userdata",                { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.userdatacolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "navtarget",               { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.navtargetcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "navurl",                  { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.navurlcolumn); },                  set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuSelectEventInfo, "navtargetproperties",     { get() { return this.fromobject._getColumnValueBySelect(this.itemindex, this.fromobject.navtargetpropertiescolumn); },     set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuSelectEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuItemStatusEventInfo
    //==============================================================================
    nexacro.MegaMenuItemStatusEventInfo = function (obj, id, from_comp, from_refer_comp, itemindex, itemstatuscode, itemstatusname)
    {
        this.eventid = id || "onmenuitemstatuschanged";

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.itemindex = itemindex;
        this.itemstatus = itemstatusname;
        this.itemstatuscode = itemstatuscode;
        this.itemstatusname = itemstatusname;
    };

    var _pMegaMenuItemStatusEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuItemStatusEventInfo);
    nexacro.MegaMenuItemStatusEventInfo.prototype = _pMegaMenuItemStatusEventInfo;
    _pMegaMenuItemStatusEventInfo._type_name = "MegaMenuItemStatusEventInfo";

    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "itemid",              { get() { return this.fromobject._getItemId(this.fromobject._getItem(this.itemindex)); },   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "bindindex",           { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); },               set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "id",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "code",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "caption",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "description",         { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "icon",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "badge",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "enable",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "level",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "type",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "controltype",         { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "controlvalue",        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "userdata",            { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "navtarget",           { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "navurl",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemStatusEventInfo, "navtargetproperties", { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuItemStatusEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuClickEventInfo
    //==============================================================================
    nexacro.MegaMenuClickEventInfo = function (obj, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itemid, ctrlid, itemidx, clickitem, meta_key)
    {
        nexacro.ClickEventInfo.call(this, obj, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.ctrlid = ctrlid;
        this.itemid = itemid;
        this.itemindex = itemidx;
    };

    var _pMegaMenuClickEventInfo = nexacro._createPrototype(nexacro.ClickEventInfo, nexacro.MegaMenuClickEventInfo);
    nexacro.MegaMenuClickEventInfo.prototype = _pMegaMenuClickEventInfo;
    _pMegaMenuClickEventInfo._type_name = "MegaMenuClickEventInfo";

    Object.defineProperty(_pMegaMenuClickEventInfo, "bindindex",                { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuClickEventInfo, "id",                       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "code",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "caption",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "description",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "icon",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "badge",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "enable",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "level",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "type",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "controltype",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "controlvalue",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "userdata",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "navtarget",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "navurl",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuClickEventInfo, "navtargetproperties",      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuClickEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuDragEventInfo
    //==============================================================================
    nexacro.MegaMenuDragEventInfo = function (obj, id, dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, itemid, ctrlid, itemidx, meta_key)
    {
        nexacro.DragEventInfo.call(this, obj, id, dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, null, null, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, meta_key);

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.ctrlid = ctrlid;
        this.itemid = itemid;
        this.itemindex = itemidx;
    };

    var _pMegaMenuDragEventInfo = nexacro._createPrototype(nexacro.DragEventInfo, nexacro.MegaMenuDragEventInfo);
    nexacro.MegaMenuDragEventInfo.prototype = _pMegaMenuDragEventInfo;
    _pMegaMenuDragEventInfo._type_name = "MegaMenuDragEventInfo";

    Object.defineProperty(_pMegaMenuDragEventInfo, "bindindex",                 { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuDragEventInfo, "id",                        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "code",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "caption",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "description",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "icon",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "badge",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "enable",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "level",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "type",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "controltype",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "controlvalue",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "userdata",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "navtarget",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "navurl",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuDragEventInfo, "navtargetproperties",       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuDragEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuMouseEventInfo
    //==============================================================================
    nexacro.MegaMenuMouseEventInfo = function (obj, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itemid, ctrlid, itemidx, meta_key)
    {
        nexacro.MouseEventInfo.call(this, obj, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.itemid = itemid;
        this.ctrlid = ctrlid;
        this.itemindex = itemidx;
    };

    var _pMegaMenuMouseEventInfo = nexacro._createPrototype(nexacro.MouseEventInfo, nexacro.MegaMenuMouseEventInfo);
    nexacro.MegaMenuMouseEventInfo.prototype = _pMegaMenuMouseEventInfo;
    _pMegaMenuMouseEventInfo._type_name = "MegaMenuMouseEventInfo";

    Object.defineProperty(_pMegaMenuMouseEventInfo, "bindindex",                { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuMouseEventInfo, "id",                       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "code",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "caption",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "description",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "icon",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "badge",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "enable",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "level",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "type",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "controltype",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "controlvalue",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "userdata",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "navtarget",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "navurl",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuMouseEventInfo, "navtargetproperties",      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuMouseEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuContextMenuEventInfo
    //==============================================================================
    nexacro.MegaMenuContextMenuEventInfo = function (obj, id, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itemid, ctrlid, itemidx, meta_key)
    {
        nexacro.ContextMenuEventInfo.call(this, obj, id, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, meta_key);

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;
        this.bubbles = true;

        this.itemindex = itemidx;
        this.itemid = itemid;
        this.ctrlid = ctrlid;
    };

    var _pMegaMenuContextMenuEventInfo = nexacro._createPrototype(nexacro.MouseEventInfo, nexacro.MegaMenuContextMenuEventInfo);
    nexacro.MegaMenuContextMenuEventInfo.prototype = _pMegaMenuContextMenuEventInfo;
    _pMegaMenuContextMenuEventInfo._type_name = "MegaMenuContextMenuEventInfo";

    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "bindindex",          { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "id",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "code",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "caption",            { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "description",        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "icon",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "badge",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "enable",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "level",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "type",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "controltype",        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "controlvalue",       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "userdata",           { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "navtarget",          { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "navurl",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuContextMenuEventInfo, "navtargetproperties",{ get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuContextMenuEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuEditEventInfo
    //==============================================================================
    nexacro.MegaMenuEditEventInfo = function (obj, id, index, itemid, ctrlid, value, from_refer_comp)
    {
        this.id = this.eventid = id || "onmegamenuedit";

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.itemid = itemid;
        this.ctrlid = ctrlid;
        this.itemindex = index;

        this.editvalue = value; // edit value
    };

    var _pMegaMenuEditEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuEditEventInfo);
    nexacro.MegaMenuEditEventInfo.prototype = _pMegaMenuEditEventInfo;
    _pMegaMenuEditEventInfo._type_name = "MegaMenuEditEventInfo";

    Object.defineProperty(_pMegaMenuEditEventInfo, "bindindex",                 { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuEditEventInfo, "id",                        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "code",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "caption",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "description",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "icon",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "badge",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "enable",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "level",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "type",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "controltype",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "controlvalue",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "userdata",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "navtarget",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "navurl",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuEditEventInfo, "navtargetproperties",       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuEditEventInfo = null;

    nexacro.MegaMenuKeyEventInfo = function (obj, id, index, itemid, ctrlid, alt_key, ctrl_key, shift_key, key_code, from_refer_comp)
    {
        this.id = this.eventid = id || "onmegamenukeyevent";

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;

        this.itemindex = index;
        this.itemid = itemid;
        this.ctrlid = ctrlid;

        this.altkey = alt_key;
        this.ctrlkey = ctrl_key;
        this.shiftkey = shift_key;
        this.keycode = key_code;
    };
    var _pMegaMenuKeyEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuKeyEventInfo);
    nexacro.MegaMenuKeyEventInfo.prototype = _pMegaMenuKeyEventInfo;
    _pMegaMenuKeyEventInfo._type_name = "MegaMenuKeyEventInfo";

    Object.defineProperty(_pMegaMenuKeyEventInfo, "bindindex",                  { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuKeyEventInfo, "id",                         { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "code",                       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "caption",                    { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "description",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "icon",                       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "badge",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "enable",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "level",                      { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "type",                       { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "controltype",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "controlvalue",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "userdata",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "navtarget",                  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "navurl",                     { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuKeyEventInfo, "navtargetproperties",        { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuKeyEventInfo = null;

    nexacro.MegaMenuItemValueEventInfo = function (obj, id, index, itemid, ctrlid, from_refer_comp, e)
    {
        this.id = this.eventid = id || "onmenuitemcontrolvaluechanged";

        this.fromobject = obj;
        this.fromreferenceobject = from_refer_comp;
        this.fromeventinfo = e;

        this.itemindex = index;
        this.itemid = itemid;
        this.ctrlid = ctrlid;

        this.prevalue = e.prevalue;
        this.postvalue = e.postvalue;
    };
    var _pMegaMenuItemValueEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuItemValueEventInfo);
    nexacro.MegaMenuItemValueEventInfo.prototype = _pMegaMenuItemValueEventInfo;
    _pMegaMenuItemValueEventInfo._type_name = "MegaMenuItemValueEventInfo";

    Object.defineProperty(_pMegaMenuItemValueEventInfo, "bindindex",            { get() { return this.fromobject._getBindIndexByItemIndex(this.itemindex); }, set: nexacro._emptyFn, enumerable: false, configurable: false });

    Object.defineProperty(_pMegaMenuItemValueEventInfo, "id",                   { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.idcolumn); },                   set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "code",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.codecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "caption",              { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.captioncolumn); },              set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "description",          { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.descriptioncolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "icon",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.iconcolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "badge",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.badgecolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "enable",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.enablecolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "level",                { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.levelcolumn); },                set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "type",                 { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.typecolumn); },                 set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "controltype",          { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controltypecolumn); },          set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "controlvalue",         { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.controlvaluecolumn); },         set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "userdata",             { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.userdatacolumn); },             set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "navtarget",            { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetcolumn); },            set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "navurl",               { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navurlcolumn); },               set: nexacro._emptyFn, enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenuItemValueEventInfo, "navtargetproperties",  { get() { return this.fromobject._getColumnValueByIndex(this.itemindex, this.fromobject.navtargetpropertiescolumn); },  set: nexacro._emptyFn, enumerable: false, configurable: false });

    _pMegaMenuItemValueEventInfo = null;

    //==============================================================================
    // nexacro.MegaMenuInputEventInfo
    //==============================================================================
    /*
    nexacro.MegaMenuInputEventInfo = function (obj, itemid, ctrlid, index, id)
    {
        this.id = this.eventid = id || "oninput";
        this.fromobject = this.fromreferenceobject = obj;
        this.index = index;
        this.itemid = itemid;
        this.ctrlid = ctrlid;
    };
    var _pMegaMenuInputEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.MegaMenuInputEventInfo);
    nexacro.MegaMenuInputEventInfo.prototype = _pMegaMenuInputEventInfo;
    _pMegaMenuInputEventInfo._type_name = "MegaMenuInputEventInfo";

    delete _pMegaMenuInputEventInfo;
    */


    //==============================================================================
    // nexacro.MegaMenu
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */

    // [object.inherit:create]
    nexacro.MegaMenu = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
        /*
        this._is_use_bind_expr_prop = { body: null, head: null, tail: null };
        this._is_use_bind_expr_style = { body: null, head: null, tail: null };
        */
    };

    // [object.prototype:create]
    var _pMegaMenu = nexacro._createPrototype(nexacro.ComplexComponent, nexacro.MegaMenu);
    nexacro.MegaMenu.prototype = _pMegaMenu;

    _pMegaMenu._properties = [
        { name: "innerdataset" },

        { name: "minlevel" },
        { name: "maxlevel" },
        { name: "extlevel" },
    //  { name: "loaddepth" },
    //  { name: "startindex" },
    //  { name: "finalindex" },

        { name: "idcolumn" },
        { name: "levelcolumn" },
        { name: "typecolumn" },
        { name: "iconcolumn" },
        { name: "captioncolumn" },
        { name: "descriptioncolumn" },
        { name: "badgecolumn" },
        { name: "controlvaluecolumn" },
        { name: "controltypecolumn" },
        { name: "enablecolumn" },
        { name: "userdatacolumn" },

        { name: "navtargetcolumn" },
        { name: "navurlcolumn" },
        { name: "navtargetpropertiescolumn" },

        { name: "hotkeycolumn" },
    //  { name: "hotkeytextgap" },

        { name: "formats" },
        { name: "formatid" },
        { name: "useriteminfo" },
        { name: "useritemformats" },

        { name: "nodatatext" },
        { name: "nodataimage" },

        // MainMenu Prop Define
    //  { name: "mainmenuplace" },
    //  { name: "mainmenuposition" },
    //  { name: "mainmenusize" },
    //  { name: "mainmenuitemcount" },

        { name: "mainmenuexpandtrigger" },
        { name: "mainmenuexpandtype" },
        { name: "mainmenuexpandinitstatus" },
    //  { name: "mainmenuexpandindentsize" },

        { name: "mainmenurowfirst" },
        { name: "mainmenuarrange" },
        { name: "mainmenuoverflow" },

        { name: "mainmenushowheader" },
        { name: "mainmenushowfooter" },
        { name: "mainmenushowcontrol" },
        { name: "mainmenutooltiptype" },

        { name: "mainmenuinnergap" },
        { name: "mainmenuoutergap" },

        { name: "mainmenuitemsize" },
        { name: "maingroupitemsize" },
        { name: "mainheaderitemsize" },
        { name: "mainfooteritemsize" },
        { name: "maindivideritemsize" },
        { name: "mainbuttonitemsize" },
        { name: "mainedititemsize" },
        { name: "mainviewitemsize" },

        { name: "mainmenuitemtype" },
        { name: "mainheaderitemtype" },
        { name: "mainfooteritemtype" },

        // SubMenu Prop Define
        { name: "submenuplace" },
        { name: "submenuposition" },
        { name: "submenusize" },
    //  { name: "submenuitemcount" },

        { name: "submenuexpandtrigger" },
        { name: "submenuexpandtype" },
        { name: "submenuexpandinitstatus" },
        { name: "submenuexpandindentsize" },

        { name: "submenurowfirst" },
        { name: "submenuarrange" },
        { name: "submenuoverflow" },

        { name: "submenushowheader" },
        { name: "submenushowfooter" },
        { name: "submenushowcontrol" },
        { name: "submenutooltiptype" },

        { name: "submenuinnergap" },
        { name: "submenuoutergap" },

        { name: "submenuitemsize" },
        { name: "subgroupitemsize" },
        { name: "subheaderitemsize" },
        { name: "subfooteritemsize" },
        { name: "subdivideritemsize" },
        { name: "subbuttonitemsize" },
        { name: "subedititemsize" },
        { name: "subviewitemsize" },

        { name: "submenuitemtype" },
        { name: "subheaderitemtype" },
        { name: "subfooteritemtype" },

        // DetailMenu Prop Define
        { name: "detailmenuplace" },
        { name: "detailmenuposition" },
        { name: "detailmenusize" },
    //  { name: "detailmenuitemcount" },

        { name: "detailmenuexpandtrigger" },
        { name: "detailmenuexpandtype" },
        { name: "detailmenuexpandinitstatus" },
        { name: "detailmenuexpandindentsize" },

        { name: "detailmenurowfirst" },
        { name: "detailmenuarrange" },
        { name: "detailmenuoverflow" },

        { name: "detailmenushowheader" },
        { name: "detailmenushowfooter" },
        { name: "detailmenushowcontrol" },
        { name: "detailmenutooltiptype" },

        { name: "detailmenuinnergap" },
        { name: "detailmenuoutergap" },

        { name: "detailmenuitemsize" },
        { name: "detailgroupitemsize" },
        { name: "detailheaderitemsize" },
        { name: "detailfooteritemsize" },
        { name: "detaildivideritemsize" },
        { name: "detailbuttonitemsize" },
        { name: "detailedititemsize" },
        { name: "detailviewitemsize" },

        { name: "detailmenuitemtype" },
        { name: "detailheaderitemtype" },
        { name: "detailfooteritemtype" },

        // OverflowMenu Prop Define
        { name: "overflowmenutype" },
        { name: "overflowmenuplace" },
        { name: "overflowmenuposition" },
        { name: "overflowmenusize" },
    //  { name: "overflowmenuitemcount" },

    //  { name: "overflowmenuexpandtrigger" },
    //  { name: "overflowmenuexpandtype" },
    //  { name: "overflowmenuexpandinitstatus" },
    //  { name: "overflowmenuexpandindentsize" },

        { name: "overflowmenurowfirst" },
        { name: "overflowmenuarrange" },
        { name: "overflowmenuoverflow" },

        { name: "overflowmenushowheader" },
        { name: "overflowmenushowfooter" },
    //  { name: "overflowmenushowcontrol" },
    //  { name: "overflowmenutooltiptype" },

    //  { name: "overflowmenuinnergap" },
    //  { name: "overflowmenuoutergap" },

    //  { name: "overflowmenuitemsize" },
    //  { name: "overflowgroupitemsize" },
    //  { name: "overflowheaderitemsize" },
    //  { name: "overflowfooteritemsize" },
    //  { name: "overflowdivideritemsize" },
    //  { name: "overflowbuttonitemsize" },
    //  { name: "overflowedititemsize" },
    //  { name: "overflowviewitemsize" },

    //  { name: "overflowmenuitemtype" },
    //  { name: "overflowheaderitemtype" },
    //  { name: "overflowfooteritemtype" },

        // Overflow Button Prop Define
        { name: "overflowbuttonsize" },
        { name: "overflowbuttontype" },
        { name: "overflowbuttonactiontype" },
    //  { name: "overflowbutton", readonly: true },

        // Overflow Scroll/Spin Prop Define
    //  { name: "scrollleaditemtype" },
    //  { name: "scrollleaditempos" },

        // Select Prop Define
        { name: "selecttype" },
        { name: "selectchangetype" },
        { name: "selectscrollmode" },
        { name: "dataselectmode" },
        { name: "pathselectmode" },
        { name: "autoselectmode" },
        { name: "useselcolor" },

        // Basic Prop Define
        { name: "locale" },
        { name: "enableredraw" },
        { name: "readonly" }
        /*
        { name: "selector" },
        { name: "usesoftkeyboard" },
        { name: "autohotkey" },
        */

        /*
        { name: "showcover" },
        { name: "showtrack" },
        { name: "tracktype" },
        { name: "trackalign" },
        { name: "multiselect" },
        { name: "rangeselect" },
        */
        /*
        { name: "autoenter" },
        { name: "autoupdatetype" },
        */
        /*
        { name: "ctrlclickbound" },
        { name: "ctrlswitchsize" },
        { name: "ctrlcalendarbuttonsize" },
        { name: "ctrlcombobuttonsize" },
        { name: "ctrlmulticombobuttonsize" },
        { name: "ctrlcalendarpopuptype" },
        { name: "ctrlcombopopuptype" },
        { name: "ctrlmulticombopopuptype" },
        { name: "ctrlcalendarpopupsize" },
        { name: "ctrlcombopopupsize" },
        { name: "ctrlmulticombopopupsize" },
        */
        /*
        { name: "createrowstype" }
        */
    ];

    // [component.typename:create]
    _pMegaMenu._type_name = "MegaMenu";

    // [component.composite.layout.items:useset]
    _pMegaMenu._is_child = false;
    _pMegaMenu._is_items = true;

    // [component.composite.layout.items:update]
    _pMegaMenu._updateitemtype = "item";

    // [component.composite.layout.items:names]
    _pMegaMenu._lvlnm = ["main", "sub", "detail"];
    _pMegaMenu._itmnm = "item";

    // [component.composite.nclayout:useset]
    _pMegaMenu._is_nc_layout = false;
    _pMegaMenu._is_nc_head = false;
    _pMegaMenu._is_nc_foot = false;
    _pMegaMenu._is_nc_lead = false;
    _pMegaMenu._is_nc_tail = false;

    // [component.composite:common]
    _pMegaMenu._is_after_recreate = false;
    _pMegaMenu._after_recreate = false;

    _pMegaMenu._p_readonly = false;
    _pMegaMenu._is_editable_control = false;
    _pMegaMenu._use_readonly_status = true;
    _pMegaMenu._is_locale_control = true;
    _pMegaMenu._selectscrollmode = (nexacro._isTouchInteraction) ? "scroll" : "select";

    /* properties */
    /*
    _pMegaMenu._p_createrowstype = "auto";
    */

    /* accessibility */
    _pMegaMenu._p_accessibilityrole = "menubar";
    _pMegaMenu._is_megamenu_focus = false;
    _pMegaMenu._is_expandbar_focus = false;
    _pMegaMenu._is_first_focus = false;
    _pMegaMenu._is_first_focus_band = false;

    /* aniation/effect */
    _pMegaMenu._use_effect = true;

    // 확인 : _is_listtype flag로 하위 item에 focus 직접 갈때 동작되도록 Focus 루틴 수정할것
    //       _is_container flag로 하위 item에 focus 직접 갈때 처리되도록 지정중
    /* container for focus */
    _pMegaMenu._is_container = true;
    _pMegaMenu._is_listtype  = true;

    //===============================================================
    // nexacro.MegaMenu : Init
    //===============================================================
    _pMegaMenu._setInnerFlags = function ()
    {
        // item inner flags ( flex, format, panel, container )
        this._setUseLayout(false, true, true, true);

        // item inner flags ( head, tail, mark, null, client )
        this._setUseItems(-true, -true, false, false, false);

        // part inner flags ( part, add, acc )
        this._setUseParts(false, 1, 1);

        // select inner flags
        this._setUseSelect(true, true, false);

        // scroll inner flags ( scroll, cover, track, stick, action timer )
        this._setUseScroll(true, true);
        this._setUseScrollBoth(false);
        this._setUseScrollCover(false);
        this._setUseScrollTrack(false);
        this._setUseScrollStick(true);
        this._setUseScrollTimer(300, 300, 600, 300, 0);

        // expand inner flags
        this._setUseExpand(true, true);
        this._setUseExpandStatus(true);

        // bind inner flags ( databind, levelbind, xmlbind, jsonbind, fullbind ) ( dataexpr, fullexpr )
        this._setUseBind(true, true, false, false, true);
        this._setUseExpr(true, true);
    };

    _pMegaMenu._default_scrolleventthrottle = "none";                       // scroll native event 사용으로 none 처리
    _pMegaMenu._default_scrolltracktype = ["trackmoved"];                   // scroll track 사용시 추가
    _pMegaMenu._default_scrolltrackalign = ["tail tracktop"];               // scroll track 사용시 추가

    _pMegaMenu._default_expandtype = "popup";

    //===============================================================
    // nexacro.MegaMenu : Create/Destroy
    //===============================================================

    // 확인 : 최대한 DesignTime 동작되도록
    _pMegaMenu.onCreateContents = function ()
    {
        if (nexacro._isDesignMode()) return;

        return nexacro.ComplexComponent.prototype.onCreateContents.call(this);
    };

    /*
    // 확인 : 최대한 ComplexComponent로 이동
    _pMegaMenu.onCreatedContents = function (_window)
    {
        // created contents before
        this._update_position();

        // created contents
        this._createdFormats();
        this._createdItems(_window);

        this._setEventHandler("onlbuttondown", this._on_megamenu_onlbuttondown, this);
        this._setEventHandler("onlbuttonup", this._on_megamenu_onlbuttonup, this);
    };

    _pMegaMenu.onAttachContentsHandle = function (win, enablea11y)
    {
        // attach contents before

        // attach contents
        // if (this._is_items && this._items)
        {
            this.onAttachHandleItems(win, enablea11y);
        }

        // attach contents after
        if (!this._onCheckRelayoutAfterCreated())
        {
            this._resetNCChild(false);
        }

        this._setEventHandler("onlbuttondown", this._on_megamenu_onlbuttondown, this);
        this._setEventHandler("onlbuttonup", this._on_megamenu_onlbuttonup, this);
    };
    */

    _pMegaMenu._onAfterCreated = function ()
    {
        this._setEventHandler("onlbuttondown",  this._on_megamenu_onlbuttondown, this);
        this._setEventHandler("onlbuttonup",    this._on_megamenu_onlbuttonup, this);
    };

    _pMegaMenu._onCheckRelayoutAfterCreated = function ()
    {
        // for item fittocontents
        return this._isitemautofit == true;
    };

    // ComplexComponent로 이동
    /*
    _pMegaMenu._recreateContents = function ()
    {
        // clear
        this._clearContents();

        // init
        this._initPanelLayout();
        this._initContents();

        // recreate contents ( item items )
        this._createdItems(this._getWindow());

        // recalc
        this._recalcLayout(true);

        var lastfocus = this._find_lastFocused();
        if (lastfocus == this)
        {
            this._control_element.setElementFocus();
        }
    };
    */
    /*
    _pMegaMenu._recreateItems = function (rowposition)
    {
        if (this._is_created)
        {
            this._recreateContents();

            this._resetScrollInfo(rowposition);
            this._resetSelectInfo(rowposition);
        }
    };

    _pMegaMenu._resetScrollInfo = function (rowposition)
    {
        var currrow;
        var slot_top = 0;

        if (this._getBindCount() > 0)
        {
            if ((rowposition !== null || rowposition !== undefined) && rowposition > -1)
            {
                currrow = rowposition;
            }
            else
            {
                currrow = this.getSelect().row;
            }

            var panel_slot = this._getPanelSlot(currrow);
            if (panel_slot)
            {
                slot_top = panel_slot._getSlotCalcTop();
            }
        }

        this._updateItemVScrollInfo(slot_top, "trackinit", true);
    };

    _pMegaMenu._resetSelectInfo = function (rowposition)
    {
        this.clearSelect();

        if (this._getBindCount() > 0)
        {
            if ((rowposition !== null || rowposition !== undefined) && rowposition > -1)
            {
                this.setSelect(rowposition);
            }
            else
            {
                this.setSelect(rowposition);
            }
        }
    };

    _pMegaMenu._onSetContents = function (strContents)
    {
        this.set_formats(strContents);

        if (this._is_created_contents && !this._is_created)
        {
            this._clearContents();

            this._initPanelLayout();
            this._initContents();
        }
    };
    */

    //===============================================================
    // nexacro.MegaMenu : NCChild
    //===============================================================

    /*
    // [component.layout.ncchild:create]
    _pMegaMenu.onCreateNCHeadControl = function (child)
    {
        // user item create logic
        this.createNCHeadControl(new nexacro._MegaMenuHead("nchead", 0, 0, 0, 0, null, null, null, null, null, null, this));
    };
    */

    //===============================================================
    // nexacro.MegaMenu : Child
    //===============================================================

    /*
    // [component.layout.child:create]
    _pMegaMenu.onCreateChild = function ()
    {
        // child create
        if (this.childcontrol = this.createChildControl(new nexacro._MegaMenuHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this)))
        {
            // attach event
            this.childcontrol._setEventHandler("onclick", this.on_notify_child_onclick, this);
        }
    };
    */

    //===============================================================
    // nexacro.MegaMenu : Overflow
    //===============================================================
    _pMegaMenu._initOverflow = function ()
    {
        if (this._is_scrollable)
        {
            this._use_native_scroll = true;
            this._use_native_scroll_size = false;

            this._use_translate_scroll = false;
            this._use_translate_scroll_force = false;
            this._use_translate_move = false;

            this._use_container_move = true;
            this._use_container_multi = false;
        }
    };

    _pMegaMenu._actionExpandMenu = function (expandidx, expandcnt, ctrl, trigger)
    {
        var status = this._expandOverflowMenu(expandidx, expandcnt);

        if (status && status.oldstatus != status.newstatus)
        {
            switch (trigger)
            {
                case "menuexpand":
                    {
                        if (status.newstatus > 0)   this._on_fire_onoverflowmenupopup(expandidx, expandcnt, this, ctrl);
                        else                        this._on_fire_onoverflowmenuclose(expandidx, expandcnt, this, ctrl);
                        break;
                    }
            }
        }
    };

    _pMegaMenu._expandOverflowMenu = function (expandidx, expandcnt)
    {
        var expandacttype = this._getExpandActType();

        if (expandacttype == "popup")
        {
            var slot = this._getPanelOverExpandSlot(expandidx);
            if (slot)
            {
                var oldstat = slot._getSlotStatus();

                this._setPanelOverflowToggle(expandidx, this._isOverflowFullItem());

                var newstat = slot._getSlotStatus();

                return { oldstatus: oldstat, newstatus: newstat };
            }
        }
    };

    _pMegaMenu._onInitPopupOverflow = function (overflowslot)
    {
        // overflow의 arrange 설정 제공
        this.set_mainmenurowfirst(this._p_overflowmenurowfirst ?? false);
        this.set_mainmenuarrange(this._p_overflowmenuarrange);

        // overflow의 overflow 설정
        this.set_mainmenuoverflow(this._p_overflowmenuoverflow);

        // size는 owner와 같게 - %는 비율기준 재조정
        /*
        this.set_mainmenuitemsize();
        this.set_maingroupitemsize();
        this.set_maindivideritemsize();
        */

        this._onApplyMenuProperties();

        if (this._isOverflowShowHeader())
        {
        //  this._setUseHead(false);
            this.set_mainmenushowheader(this._p_overflowmenushowheader);
        //  this.set_mainheaderitemsize();
        }
        else
        {
        //  this._setUseHead(false);
            this.set_mainmenushowheader("none");
            this.set_mainheaderitemsize("0px 0px");
        }
        if (this._isOverflowShowFooter())
        {
        //  this._setUseTail(false);
            this.set_mainmenushowfooter(this._p_overflowmenushowfooter);
        //  this.set_mainfooteritemsize();
        }
        else
        {
        //  this._setUseTail(false);
            this.set_mainmenushowfooter("none");
            this.set_mainfooteritemsize("0px 0px");
        }

        this._onApplyMenuProperties();

        // size/place/pos는 overflow size/place/pos로 별도 지정
        // this.set_fittocontents("both");
    };

    /*
    _pMegaMenu._onGetChildAreaWidth  = function ()  { return          Math.max(this._isPopupOverflow() ? this._getPopupOverflowOwner()._getClientWidth()  : this._getClientWidth(),  this._getClientWidth());     };
    _pMegaMenu._onGetChildAreaHeight = function ()  { return          Math.max(this._isPopupOverflow() ? this._getPopupOverflowOwner()._getClientHeight() : this._getClientHeight(), this._getClientWidth());     };
    _pMegaMenu._onGetItemsAreaWidth  = function ()  { return Math.max(Math.max(this._isPopupOverflow() ? this._getPopupOverflowOwner()._getClientWidth()  : this._getClientWidth(),  this._getClientWidth()), 0); };
    _pMegaMenu._onGetItemsAreaHeight = function ()  { return Math.max(Math.max(this._isPopupOverflow() ? this._getPopupOverflowOwner()._getClientHeight() : this._getClientHeight(), this._getClientWidth()), 0); };
    */

    _pMegaMenu._onGetPopupSelfControlName = function (slot, itemidx)
    {
        if (slot)
        {
            if (slot._isOverflowSlot())
                return "overflowmenu";
            else
                return "popupmenu" + itemidx;
        }
    };

    //===============================================================
    // nexacro.MegaMenu : Items
    //===============================================================

    // TODO : bind header, nc header를 공통화하여 상위로 이동
    _pMegaMenu.onCreateItemBegin = function (ctxtdata, binddata, nc)
    {
        if (!this._isShowHeaderControl() && !this._is_subcontrol)
            return;

        // user before item create logic
        // if (this._is_format_layout && ctxtdata)
        {
            // create head control && attach context
            this.headcontrol = this.createItemCtxtControl(ctxtdata, binddata, -1, this._isShowHeaderNC());

            return this.headcontrol;
        }
    };

    // TODO : bind item, nc item을 공통화하여 상위로 이동
    _pMegaMenu.onCreateItem = function (ctxtdata, binddata, index, nc)
    {
        // default item create logic by ctxt
        // if (this._is_format_layout && ctxtdata)
        {
            // create menu item control && attach context
            return this.createItemCtxtControl(ctxtdata, binddata, index, nc);
        }
    };

    // TODO : bind footer, nc footer를 공통화하여 상위로 이동
    _pMegaMenu.onCreateItemFinal = function (ctxtdata, binddata, nc)
    {
        // user after item create logic
        if (!this._isShowFooterControl() && !this._is_subcontrol)
            return;

        // user before item create logic
        // if (this._is_format_layout && ctxtdata)
        {
            // create head control && attach context
            this.tailcontrol = this.createItemCtxtControl(ctxtdata, binddata, -2, this._isShowFooterNC());

            return this.tailcontrol;
        }
    };

    _pMegaMenu.onDestroyItems = function ()
    {
        // unlink items
        if (this.headcontrol) this.headcontrol = null;
        if (this.tailcontrol) this.tailcontrol = null;
    };

    /*
    _pMegaMenu._moveItem = function (prevslot, nextslot)
    {
        //==================================================================================
        // Item move ( Not Slot move )

        // TODO : MegaMenu 전용 interface. ComplexComponent에 요구사항이 있을시 도입 검토.
        //==================================================================================
        var items = this._getItems();
        var count = items.length;

        if (items && count)
        {
            var headcount = this._head_count && this._use_headitem ? this._head_count : 0;
            var bodycount = this._body_count ? this._body_count : 1;

            var previdx = prevslot * bodycount + headcount;
            var nextidx = nextslot * bodycount + headcount;

            var itemseq;

            if (this._use_partitem)
            {
                if (this._body_count > 1)
                {
                    for (var i = 0, l = bodycount; i < l; i++, previdx++, nextidx++)
                    {
                        items[nextidx] = items[previdx];
                        bandseq = this._formats._getBandSeq(items[nextidx].id);

                        this._setItemIndex(items[nextidx], nextslot);
                        this._updateItem(items[nextidx], nextslot, undefined, bandseq);

                        items[previdx] = null;
                    }
                }
                else
                {
                    items[nextidx] = items[previdx];
                    bandseq = this._formats._getBandSeq(items[nextidx].id);

                    this._setItemIndex(items[nextidx], nextslot);
                    this._updateItem(items[nextidx], nextslot, undefined, bandseq);

                    items[previdx] = null;
                }

                return true;
            }
            else
            {
                // 분할생성이 아니면 move 할일이 없음.
            }
        }

        return false;
    };
    */

    _pMegaMenu._onSetItemIndentSize = function (item, indentsize)
    {
        if (item && indentsize)
            item._itemindentsize = [indentsize, 0, -indentsize, 0, 0, 0];
    };
    _pMegaMenu._onGetIndentSize = function (lvl)
    {
        return this._getSubMenuIndentSize(lvl) ?? 0;
    };
    _pMegaMenu._onGetIndentSizeList = function ()
    {
        var sizelist = this._submenuindentsize;
        if (sizelist)
        {
            return sizelist.map((s) => s.cval);
        }

        return [0];
    };

    // 확인 : ListView 확인하여 가능하면 ComplexComponent로 이동
    _pMegaMenu._actionSelectItem = function (itemindex, subidx, ctrlidx, item, ctrl, trigger)
    {
        if (!nexacro._isNumber(itemindex) || itemindex < -2 || itemindex > this._getBindCount())
            return;

        switch (trigger)
        {
            case "itemfocus": // mouse/method focus in
            case "ctrlfocus": // mouse/method focus in
                {
                    /*
                    if (this._isCurrentPopup())
                    {
                        var pidx = this._getCurrentPopupItemIndex();
                        var pitm = this._getItem(pidx);
            
                        this._actionExpandItem(pidx, -1, -1, pitm, null, "keyinclose");
                    }
                    */
                    if (this._p_selectchangetype == "down")
                    {
                        this.setSelect(itemindex, subidx, ctrlidx);
                    }
                    break;
                }
            case "tabfocus": // tab key focus in
            case "keyfocus": // arr key focus in
                {
                    if (this._isCurrentPopup())
                    {
                        var pidx = this._getCurrentPopupItemIndex();
                        var pitm = this._getItem(pidx);

                        this._actionExpandItem(pidx, -1, -1, pitm, null, "keyinclose");
                    }
                   // if (true) // 확인 : Focus-->Select 또는 Focus-->Focus/Select-->Focus 자동처리여부 확인하여 코드정리
                   // {
                        this.setSelect(itemindex, subidx, ctrlidx);

                        this._actionFocusItem(itemindex, subidx, ctrlidx, item, ctrl);
                    //}
                    break;
                }
            case "callclick": // mouse/method click
            case "itemclick": // mouse/method click
                {
                    var callcick = trigger == "callclick";

                    if (callcick || this._p_selectchangetype == "up")
                    {
                        this.setSelect(itemindex, subidx, ctrlidx);
                    }
                    if (callcick || this._isSubTriggerSelect())
                    {
                        if (item && item._onCheckExpandable())
                        {
                            this._actionExpandItem(itemindex, subidx, ctrlidx, item, ctrl, "itemexpand");
                        }
                        else
                        {
                            this._actionExpandItem(itemindex, subidx, ctrlidx, item, ctrl, "clickclose");
                        }
                    }
                    break;
                }
            case "ctrlclick": // mouse/method click
                {
                    break;
                }
        }
    };

    _pMegaMenu._actionFocusItem = function (itemindex, subidx, ctrlidx, item, ctrl, trigger)
    {
        switch (trigger)
        {
            default:
                if (itemindex >= 0)
                {
                    this._focusItem(itemindex);
                }
                if (subidx >= 0)
                {
                    this._focusItemChild(itemindex, subidx, ctrlidx);
                }
        }
    };

    _pMegaMenu._actionExpandItem = function (itemindex, subidx, ctrlidx, item, ctrl, trigger)
    {
        var status;

        // mouse/key close action
        {
            switch (trigger)
            {
                case "iconexpand":
                case "itemexpand":
                case "clickclose": status = this._toggleItem(itemindex, item, "item", trigger); break;
            //  case "keyinclose": status = this._closeItem( itemindex, item, "item", trigger); break;
            }
        }

        // status change action
        if (status && status.oldstatus != status.newstatus)
        {
            // event fire는 아래 _on_nofity_updateitemstatus 에서 처리
            /*
            switch (trigger)
            {
                case "iconexpand": this._on_fire_onmenuitemstatuschanged(itemindex, status.newstatus, this, ctrl); break;
                case "itemexpand": 
                case "clickclose": 
                case "keyinclose": this._on_fire_onmenuitemstatuschanged(itemindex, status.newstatus, this, item); break;
            }
            */
        }

        // mouse/key close action
        {
            switch (trigger)
            {
                case "clickclose": this._closePopupRoot(); break;
                case "keyinclose": this._closePopupLeaf(); break;
            }
        }
    };

    _pMegaMenu._on_nofity_updateitemstatus = function (itemindex, status, item, updateitemtype, triggertype)
    {
        nexacro.ComplexComponent.prototype._on_nofity_updateitemstatus.call(this, itemindex, status, item, updateitemtype, triggertype);

     // if (statuschange) // 상태가 바뀐경우만 호출됨
        {
            switch (triggertype)
            {
                case "iconexpand": this._on_fire_onmenuitemstatuschanged(itemindex, status, this, item); break;
                case "itemexpand": 
                case "clickclose": 
                case "keyinclose": this._on_fire_onmenuitemstatuschanged(itemindex, status, this, item); break;
                case "accdnclose": 
                default          : this._on_fire_onmenuitemstatuschanged(itemindex, status, this, item); break;

            }
        }
    };

    // TODO : ListView 확인하여 toggle/popup/close/expand/collapse 모두 ComplexComponent로 이동
    //      : 상태 변경시 상태 이벤트 발생 추가되어야 함
    /*
    _pMegaMenu._toggleItem = function (itemindex, item)
    {
        var slot = this._getPanelSlot(itemindex);
        if (slot)
        {
            var oldstat = slot._getSlotStatus();

            this._setPanelGroupToggle(itemindex);

            this._updateItem(item ? item : this._getItem(itemindex), itemindex);

            var newstat = slot._getSlotStatus();

            return { oldstatus: oldstat, newstatus: newstat };
        }
    };
    _pMegaMenu._closeItem = function (itemindex, item)
    {
        var slot = this._getPanelSlot(itemindex);
        if (slot)
        {
            var oldstat = slot._getSlotStatus();

            this._setPanelGroupClose(itemindex);

            this._updateItem(item ? item : this._getItem(itemindex), itemindex);

            var newstat = slot._getSlotStatus();

            return { oldstatus: oldstat, newstatus: newstat };
        }
    };
    _pMegaMenu._collapseItem = function (itemindex, item)
    {
        var slot = this._getPanelSlot(itemindex);
        if (slot)
        {
            var oldstat = slot._getSlotStatus();

            this._setPanelGroupCollapse(itemindex);

            this._updateItem(item ? item : this._getItem(itemindex), itemindex);

            var newstat = slot._getSlotStatus();

            return { oldstatus: oldstat, newstatus: newstat };
        }
    };
    */

    // 확인 : ListView 확인하여 ComplexComponent로 이동
    /*
    _pMegaMenu._moveToCtrlRight = function (add)
    {
        var ctrl = this._getCurrentCtrl();
        if (ctrl)
        {
            var nextctrl = ctrl._refinfo._key_direction.right;

            if (nextctrl >= 0)
            {
                ctrl = this._getCurrentCtrl(null, null, nextctrl);
                ctrl._setFocus(false);
            }
            else
            {
                var currselect = this.getSelect();
                var currow = currselect.row;
                var curitem = currselect.item;

                if (currow >= 0)
                {
                    var rowidx, itemidx = curitem;

                    rowidx = this._findNextSelectIndex(nexacro.Event.KEY_RIGHT);

                    if (currow == rowidx)
                        return;

                    if (curitem > 0)
                    {
                        // detail expand check?
                    }

                    var item = this._getCurrentItem(rowidx, itemidx);
                    if (item)
                    {
                        nextctrl = this._getKeyActionOtheritemCtrl(ctrl, item, "r");
                        ctrl = this._getCurrentCtrl(rowidx, itemidx, nextctrl);
                        ctrl._setFocus(false);

                        if (add)
                            this.addSelect(rowidx);
                    }
                }
            }
        }
    };

    _pMegaMenu._moveToCtrlLeft = function (add)
    {
        var ctrl = this._getCurrentCtrl();
        if (ctrl)
        {
            var nextctrl = ctrl._refinfo._key_direction.left;

            if (nextctrl >= 0)
            {
                ctrl = this._getCurrentCtrl(null, null, nextctrl);
                ctrl._setFocus(false);
            }
            else
            {
                var currselect = this.getSelect();
                var currow = currselect.row;
                var curitem = currselect.item;

                if (currow >= 0)
                {
                    var rowidx, itemidx = curitem;

                    rowidx = this._findNextSelectIndex(nexacro.Event.KEY_LEFT);

                    if (currow == rowidx)
                        return;

                    if (curitem > 0)
                    {
                        // detail expand check?
                    }

                    var item = this._getCurrentItem(rowidx, itemidx);
                    if (item)
                    {
                        nextctrl = this._getKeyActionOtheritemCtrl(ctrl, item, "l");
                        ctrl = this._getCurrentCtrl(rowidx, itemidx, nextctrl);
                        ctrl._setFocus(false);

                        if (add)
                            this.addSelect(rowidx);
                    }
                }
            }
        }
    };

    _pMegaMenu._moveToCtrlUp = function (add)
    {
        var ctrl = this._getCurrentCtrl();
        if (ctrl)
        {
            var nextctrl = ctrl._refinfo._key_direction.up;

            if (nextctrl >= 0)
            {
                ctrl = this._getCurrentCtrl(null, null, nextctrl);
                ctrl._setFocus(false);
            }
            else
            {
                var currselect = this.getSelect();
                var currow = currselect.row;
                var curitem = currselect.item;

                if (currow >= 0)
                {
                    var rowidx, itemidx;

                    if (curitem > 0)
                    {
                        rowidx = currow;
                        itemidx = curitem - 1;
                    }
                    else
                    {
                        rowidx = this._findNextSelectIndex(nexacro.Event.KEY_UP);

                        if (currow == rowidx)
                            return;

                        // detail expand check
                        if (this._isExistSubSlot(rowidx))
                            itemidx = this._getPanelSlotCount() - 1;
                    }

                    var item = this._getCurrentItem(rowidx, itemidx);
                    if (item)
                    {
                        nextctrl = this._getKeyActionOtheritemCtrl(ctrl, item, "t");
                        ctrl = this._getCurrentCtrl(rowidx, itemidx, nextctrl);
                        ctrl._setFocus(false);

                        if (add)
                            this.addSelect(rowidx);
                    }
                }
            }
        }
    };

    _pMegaMenu._moveToCtrlDown = function (add)
    {
        var ctrl = this._getCurrentCtrl();
        if (ctrl)
        {
            var nextctrl = ctrl._refinfo._key_direction.down;

            if (nextctrl >= 0)
            {
                ctrl = this._getCurrentCtrl(null, null, nextctrl);
                ctrl._setFocus(false);
            }
            else
            {
                var currselect = this.getSelect();
                var currow = currselect.row;
                var curitem = currselect.item;

                if (currow >= 0)
                {
                    var rowidx, itemidx;

                    // detail expand check
                    if (curitem < this._getPanelSlotCount() - 1 && this._isExistSubSlot(currow))    // detail
                    {
                        rowidx = currow;
                        itemidx = curitem + 1;
                    }
                    else
                    {
                        rowidx = this._findNextSelectIndex(nexacro.Event.KEY_DOWN);

                        if (currow == rowidx)
                            return;

                        itemidx = 0;
                    }

                    var item = this._getCurrentItem(rowidx, itemidx);
                    if (item)
                    {
                        nextctrl = this._getKeyActionOtheritemCtrl(ctrl, item, "b");
                        ctrl = this._getCurrentCtrl(rowidx, itemidx, nextctrl);
                        ctrl._setFocus(false);

                        if (add)
                            this.addSelect(rowidx);
                    }
                }
            }
        }
    };

    _pMegaMenu._moveToCtrlPagedown = function ()
    {
        var rowidx = this._findNextSelectIndex(nexacro.Event.KEY_PAGE_DOWN);
        var ctrl = this._getCurrentCtrl(rowidx);

        if (ctrl)
        {
            ctrl._setFocus(false);
        }
    };

    _pMegaMenu._moveToCtrlPageup = function ()
    {
        var rowidx = this._findNextSelectIndex(nexacro.Event.KEY_PAGE_UP);
        var ctrl = this._getCurrentCtrl(rowidx);

        if (ctrl)
        {
            ctrl._setFocus(false);
        }
    };

    _pMegaMenu._moveToCtrlTab = function (prev)
    {
        var item = this._getCurrentItem();
        var ctrl = null;

        if (item)
        {
            var currselect = this.getSelect();
            var currow = currselect.row;
            var curitem = currselect.item;
            var curctrl = currselect.ctrl;
            var i;

            if (!prev)  // next
            {
                ctrl = this._findEditableCtrl(item, curctrl + 1, 1);

                if (!ctrl)
                {
                    var rowcnt = this._getBindCount();
                    for (i = currow; i < rowcnt; i++)
                    {
                        if (curitem < this._getPanelSlotCount() - 1 && this._isExistSubSlot(currow))    // detail expand check
                        {
                            curitem++;
                        }
                        else
                        {
                            currow++;
                            curitem = 0;
                        }

                        if (item = this._getCurrentItem(currow, curitem))
                        {
                            curctrl = 0;
                            ctrl = this._findEditableCtrl(item, curctrl, 1);
                        }

                        if (ctrl) break;
                    }

                    this._is_first_focus_item = true;
                }
            }
            else // prev
            {
                ctrl = this._findEditableCtrl(item, curctrl - 1, -1);

                if (!ctrl)
                {
                    for (i = currow; i >= 0; i--)
                    {
                        if (curitem > 0)
                        {
                            curitem--;
                        }
                        else
                        {
                            currow--;

                            // detail expand check
                            if (this._isExistSubSlot(currow))
                                curitem = this._getPanelSlotCount() - 1;
                            else
                                curitem = 0;
                        }

                        if (item = this._getCurrentItem(currow, curitem))
                        {
                            var ctrls = this._getItemCtrls(item);
                            curctrl = ctrls ? ctrls.length - 1 : 0;
                            ctrl = this._findEditableCtrl(item, curctrl, -1);
                        }

                        if (ctrl) break;
                    }

                    this._is_first_focus_item = true;
                }
            }

            if (ctrl && this._acceptstab)
            {
                ctrl._setFocus(false);
            }
        }
    };

    _pMegaMenu._moveToCtrlNext = function ()
    {
        var item = this._getCurrentItem();
        if (item)
        {
            var ctrls = this._getItemCtrls(item);

            var currselect = this.getSelect();
            var rowidx = currselect.row;
            var itemidx = currselect.item;
            var ctrlidx = currselect.ctrl;

            var nextctrl = null;
            var expandbar = null;

            if (rowidx >= 0)
            {
                if (this._is_megamenu_focus)
                {
                    nextctrl = this._getCurrentCtrl(0, 0, 0);
                    this._is_first_focus_item = true;
                }
                else
                {
                    nextctrl = this._is_expandbar_focus ? null : ctrls[ctrlidx + 1];

                    if (!nextctrl)
                    {
                        if (this._getEnvironment()?._p_enableaccessibility && item._p_expandbartype == true && item._item == "main" && !this._is_expandbar_focus)
                        {   
                            expandbar = item.expandbar;
                        }
                        else
                        {
                            if (itemidx < this._getPanelSlotCount() - 1 && this._isExistSubSlot(rowidx)) // detail expand check
                            {
                                itemidx++;
                                this._is_first_focus_item = true;
                            }
                            else
                            {
                                rowidx++;
                                itemidx = 0;
                                this._is_first_focus_item = true;
                            }

                            if (item = this._getCurrentItem(rowidx, itemidx))
                            {
                                ctrls = this._getItemCtrls(item);
                                nextctrl = ctrls && ctrls[0];
                            }
                        }
                    }
                    else
                    {
                        if (this._is_megamenu_focus)
                            this._is_first_focus_item = true;
                    }
                }
            }

            if (nextctrl)
            {
                nextctrl._setFocus(false);
                this._is_expandbar_focus = false;
            }
            else if (expandbar)
            {
                var win = this._getWindow();
                win._removeFromCurrentFocusPath(item, true);
                expandbar._setFocus(false);
                this._is_expandbar_focus = true;
            }
        }
    };

    _pMegaMenu._moveToCtrlPrev = function ()
    {
        var item = this._getCurrentItem();
        if (item)
        {
            var ctrls = this._getItemCtrls(item);

            var currselect = this.getSelect();
            var rowidx = currselect.row;
            var itemidx = currselect.item;
            var ctrlidx = currselect.ctrl;

            var prevctrl = null;
            var expandbar = null;

            if (rowidx >= 0)
            {
                prevctrl = this._is_expandbar_focus ? ctrls[ctrls.length - 1] : ctrls[ctrlidx - 1];

                if (!prevctrl)
                {
                    if (itemidx > 0)
                    {
                        itemidx--;
                        this._is_first_focus_item = true;
                    }
                    else
                    {
                        rowidx--;

                        if (this._isExistSubSlot(rowidx)) // detail expand check
                        {
                            itemidx = this._getPanelSlotCount() - 1;
                        }
                        else
                        {
                            itemidx = 0;
                        }

                        this._is_first_focus_item = true;
                    }

                    if (item = this._getCurrentItem(rowidx, itemidx))
                    {
                        if (this._getEnvironment()?._p_enableaccessibility && item._p_expandbartype == true && item._item == "main")
                        {
                            expandbar = item.expandbar;
                        }
                        else
                        {
                            ctrls = this._getItemCtrls(item);
                            ctrlidx = ctrls ? ctrls.length - 1 : 0;
                            prevctrl = ctrls && ctrls[ctrlidx];
                        }
                    }
                }

            }

            if (prevctrl)
            {
                prevctrl._setFocus(false);
                this._is_expandbar_focus = false;
            }
            else if (expandbar)
            {
                expandbar._setFocus(false);
                this._is_expandbar_focus = true;
            }
        }
    };
    */

    // 확인 : ListView 확인하여 ComplexComponent로 이동
    _pMegaMenu._moveToItemNext = function (key)
    {
        var rowidx = this._getCurrentSelectItemIndex();
        var rowcnt = this._getItemCount(); if (rowcnt <= 0) return false;

        // Key to Popup
        var popup = this._getCurrentPopup();
        if (popup && popup._isPopup())
        {
            var popmenu = popup._getAttachedComponent();
            if (popmenu._moveToItemNext(key))
            {
                return true;
            }
            popmenu._closePopupSelf();
        }

        if (rowidx === undefined || rowidx < 0) rowidx = -1;

        // TODO : Filtered Dataset 또는 Panel Filtered Slot 정보기반으로 루프없이 찾도록 변경

        if (!this._isMainLayout())    // SubMenu는 처음/마지막에 전환
        {
            for (var currow = rowidx; ++currow < rowcnt;)
            {
                var item = this._getItemAvailable(currow);
                if (this._isKeyAccsItem(item)) 
                {
                    item.setFocus(); return true;
                }
            }

            return false;
        }
        else                        // MainMenu는 처음/마지막에 순환
        {
            for (var currow = rowidx; ++currow != rowidx;)
            {
                if (currow < rowcnt)
                {
                    var item = this._getItemAvailable(currow);
                    if (this._isKeyAccsItem(item)) 
                    {
                        item._setFocus(); return true;
                    }
                }
                else
                {
                    if (rowidx >= 0) currow = -1;
                    else break;
                }
            }

            return false;
        }
    };
    _pMegaMenu._moveToItemPrev = function (key)
    {
        var rowidx = this._getCurrentSelectItemIndex();
        var rowcnt = this._getItemCount(); if (rowcnt <= 0) return false;

        var popup, popmenu;

        // Key to Popup
        var popup = this._getCurrentPopup();
        if (popup && popup._isPopup())
        {
            var popmenu = popup._getAttachedComponent();
            if (popmenu)
            {
                if (popmenu._moveToItemPrev(key))
                {
                    return true;
                }
                popmenu._closePopupSelf();
            }
        }

        if (rowidx < 0) rowidx = rowcnt;

        // TODO : Filtered Dataset 또는 Panel Filtered Slot 정보기반으로 루프없이 찾도록 변경

        if (!this._isMainLayout())    // SubMenu는 처음/마지막에 전환
        {
            for (var currow = rowidx; --currow >= 0;)
            {
                var item = this._getItemAvailable(currow);
                if (this._isKeyAccsItem(item))
                {
                    item.setFocus(); return true;
                }
            }

            return false;
        }
        else                        // MainMenu는 처음/마지막에 순환
        {
            for (var currow = rowidx; --currow != rowidx;)
            {
                if (currow >= 0)
                {
                    var item = this._getItemAvailable(currow);
                    if (this._isKeyAccsItem(item))
                    {
                        item._setFocus(); return true;
                    }
                }
                else
                {
                    if (rowidx < rowcnt) currow = rowcnt;
                    else break;
                }
            }

            return false;
        }
    };

    // 확인 : 공통화하여 ComplexComponent로 이동, Framework 제어용 코드는 Comp에 노출되지 않도록
    _pMegaMenu._selectItemKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        switch (keycode)
        {
            case nexacro.Event.KEY_PAGE_UP:
            case nexacro.Event.KEY_PAGE_DOWN:
                if (!this._getEnvironment()?._p_enableaccessibility || (this._getEnvironment()?._p_enableaccessibility && this._isComponentKeydownAction()))
                {
                    var select = this._findNextSelectIndex(keycode, alt_key, ctrl_key, shift_key);

                    if (select == null || select < 0)
                        return false;

                    if (this._getEnvironment()?._p_enableaccessibility)
                    {
                        var win = this._getWindow();
                        var item = this._getCurrentItem();
                        if (keycode == nexacro.Event.KEY_DOWN)
                        {
                            if (this._is_megamenu_focus)
                            {
                                select = 0;
                            }

                            if (select == item._rowidx)
                            {
                                if (!this._is_megamenu_focus)
                                {
                                    if (this._accept_arrow)
                                    {
                                        win._removeFromCurrentFocusPath(this, true);
                                        this._setFocus(false);
                                        this._is_megamenu_focus = true;
                                    }
                                    return false;
                                }
                            }
                        }
                        else if (keycode == nexacro.Event.KEY_UP)
                        {
                            if (this._is_megamenu_focus)
                            {
                                if (this._accept_arrow)
                                {
                                    var rowcnt = this._getBindCount();
                                    select = rowcnt - 1;
                                }
                                else
                                {
                                    return false;
                                }
                            }

                            if (select == item._rowidx)
                            {
                                if (!this._is_megamenu_focus)
                                {
                                    win._removeFromCurrentFocusPath(this, true);
                                    this._setFocus(false);
                                    this._is_megamenu_focus = true;
                                    return false;
                                }
                            }
                        }
                    }

                    /*
                    if (shift_key)
                        this.addSelect(select);
                    */

                    // 확인 : Focus & Select 동작 확인 필요 (Focus-->Select인지 Select-->Focus인지) 
                    //       _focusItem 에서 setSelect 한번 더 호출됨
                    this._focusItem(select);   //  this.setSelect(select);    
                }
                break;
            case nexacro.Event.KEY_UP:
                this._moveToItemPrev(nexacro.Event.KEY_UP);
                break;
            case nexacro.Event.KEY_DOWN:
                this._moveToItemNext(nexacro.Event.KEY_DOWN);
                break;
            case nexacro.Event.KEY_LEFT:
                this._moveToItemPrev(nexacro.Event.KEY_LEFT);
                break;
            case nexacro.Event.KEY_RIGHT:
                this._moveToItemNext(nexacro.Event.KEY_RIGHT);
                break;
            case nexacro.Event.KEY_TAB:
                if (shift_key)  this._moveToItemPrev(nexacro.Event.KEY_TAB);
                else            this._moveToItemNext(nexacro.Event.KEY_TAB);

                var win = this._getWindow();
                if (win && win._keydown_element)
                {
                    win._keydown_element._event_stop = true;
                }

                break;
        }

        return true;
    };

    _pMegaMenu._editorCtrlKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        // TODO : Editor 종류별 추가처리
    };
    _pMegaMenu._clickCtrlKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        // TODO : Editor 종류별 추가처리
        /*
        var ctrl = this._getCurrentCtrl();
        if (!ctrl)
            return;

        if (ctrl._getCtrlEditType() == "switch")
        {
            ctrl._subComp && ctrl._subComp._toggleCheck();
        }
        */
    };

    _pMegaMenu._expandItemKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        var ctrl = this._getCurrentCtrl();

        if (!ctrl)
            return;

        if (ctrl._isShowEditor())
        {
            var item = this._getCurrentItem();
            if (item)
                item._expandItemKeyInfo(keycode, alt_key, ctrl_key, shift_key);
        }
    };

    _pMegaMenu._closeItemKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        var iidx = this._getCurrentPopupItemIndex();
        var bidx = this._getCurrentPopupBindIndex();
        var pitm = this._getItem(bidx);

        this._actionExpandItem(iidx, -1, -1, pitm, null, "keyinclose");
    };

    _pMegaMenu._customItemKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        switch (this._checkCustomActionKeyInfo(keycode, alt_key, ctrl_key, shift_key))
        {
            case "select":
                this._selectItemKeyInfo(keycode, alt_key, ctrl_key, shift_key);
                break;
            case "editor":
                this._editorCtrlKeyInfo(keycode, alt_key, ctrl_key, shift_key);
                break;
            case "click":
                this._clickCtrlKeyInfo(keycode, alt_key, ctrl_key, shift_key);
                break;
            case "expand":
                this._expandItemKeyInfo(keycode, alt_key, ctrl_key, shift_key);
                break;
            case "close":
                this._closeItemKeyInfo(keycode, alt_key, ctrl_key, shift_key);
                break;
        }
    };

    _pMegaMenu._checkCustomActionKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        var ret = "";

        switch (keycode)
        {
            case nexacro.Event.KEY_TAB:
            case nexacro.Event.KEY_DOWN:
            case nexacro.Event.KEY_UP:
            case nexacro.Event.KEY_LEFT:
            case nexacro.Event.KEY_RIGHT:
            case nexacro.Event.KEY_PAGE_UP:
            case nexacro.Event.KEY_PAGE_DOWN:
                var win = this._getWindow();
                var kem = win?._keydown_element;
                if (kem && this._isEditorKeyAction(kem, keycode, alt_key, ctrl_key, shift_key) == false)
                    ret = "select";
                break;
            case 69:  // KEY_E
                if (alt_key && ctrl_key && !shift_key)
                    ret = "expand";
                break;
            case nexacro.Event.KEY_ESC:
                    ret = "close";
                break;
            case nexacro.Event.KEY_SPACE:
            case nexacro.Event.KEY_ENTER:
            default:
                    ret = "click";
                break;
        }

        return ret;
    };

    // 공통으로 이동
    /*
    _pMegaMenu._isChar = function (keyCode)
    {
        switch (keyCode)
        {
            case 9:
            case 25:
            case 27:
            case 144:
            case 145:
                return false;
        }

        if ((keyCode >= 16 && keyCode <= 21) || (keyCode >= 33 && keyCode <= 40) || (keyCode >= 91 && keyCode <= 93) || (keyCode >= 112 && keyCode <= 123))
            return false;

        return true;
    };
    _pMegaMenu._editorCtrlKeyInfo = function (keycode, alt_key, ctrl_key, shift_key)
    {
        var ctrl = this._getCurrentCtrl();
        if (!ctrl)
            return;

        if (keycode == nexacro.Event.KEY_ENTER)
        {
            if (ctrl_key)
            {
                ctrl._actionEditCtrl(ctrl, "ctrlenterkey");
                return;
            }
            ctrl._actionEditCtrl(ctrl, "enterkey");
        }
    };
    _pMegaMenu._isEditorKeyAction = function (elem, keyCode, altKey, ctrlKey, shiftKey)
    {
        if (this._is_editor_keyaction == false)
        {
            this._is_editor_keyaction = true;
            return true;
        }

        var ctrl = this._getCurrentCtrl();
        if (!ctrl || !ctrl._isShowEditor())
        {
            return false;
        }

        if (elem.isInputElement())
        {
            var pos = elem.getElementCaretPos();
            var line;
            var max_line;

            if (elem.readonly == true)
                return false;

            if (keyCode == nexacro.Event.KEY_LEFT)
            {
                if (ctrlKey || shiftKey || altKey)
                {
                    return true;
                }

                if ((pos && pos != -1) && pos.begin != 0)
                {
                    return true;
                }
            }
            else if (keyCode == nexacro.Event.KEY_RIGHT)
            {
                if (ctrlKey || shiftKey || altKey)
                {
                    return true;
                }

                var elem_val = elem.getElementValue();
                var v = elem_val ? elem_val.length : 0;

                if ((pos && pos != -1) && pos.begin != v)
                {
                    return true;
                }
            }
            else if (keyCode == nexacro.Event.KEY_UP)
            {
                if (ctrlKey || shiftKey || altKey)
                {
                    return true;
                }

                if (elem.usemultiline)
                {
                    line = elem.getElementCaretLine();
                    if (line != 1)
                    {
                        return true;
                    }
                }
            }
            else if (keyCode == nexacro.Event.KEY_DOWN)
            {
                if (ctrlKey || shiftKey || altKey)
                {
                    return true;
                }

                if (elem.usemultiline)
                {
                    max_line = parseInt(elem.parent.linkedcontrol._getLineCount());
                    line = elem.getElementCaretLine();
                    if (line != max_line)
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    */
    /*
    _pMegaMenu._refreshBody = function ()
    {
        if (!this._p_enableredraw)
            return;

        var curctrl = (ctrlidx != null) ? ctrlidx : this.currentctrl;
        var item = this._getCurrentItem(rowidx, itemidx);
        var ctrl = null;

        if (item) {
            var ctrls = this._getItemCtrls(item);

            if (ctrls)
                ctrl = ctrls[curctrl];
        }
        return ctrl;
    };

    _pMegaMenu._refreshHead = function ()
    {
        if (!this._p_enableredraw)
            return;
    };
    
    _pMegaMenu._refreshBodyCtrl = function (rowidx, itemidx, ctrlidx)
    {
        if (!this._p_enableredraw)
            return;

        var ctrl = this._getCurrentCtrl(rowidx, itemidx, ctrlidx);

        if (ctrl)
            ctrl._updateAll();
    };
    */

    //===============================================================
    // nexacro.MegaMenu : Layout/Popup
    //===============================================================
    // Popup Create
    _pMegaMenu._onCreatePopupChild = function (slot, slotidx, isband, issameindex, issamelevel, skiplevel) //, skipindex)
    {
        var child = nexacro.ComplexComponent.prototype._onCreatePopupChild.call(this, slot, slotidx, isband, issameindex, issamelevel, skiplevel) //, skipindex);

        if (child)
        {
            /* accessibility */
            child.set_accessibilityrole("menu");
        }

        return child;
    };
    _pMegaMenu._onGetContextWidth = function (parentwidth, originwidth)
    {
        return this.getOffsetWidth();
    };
    _pMegaMenu._onGetContextHeight = function (parentheight, originheight)
    {
        return this.getOffsetHeight();
    };

    // Popup Overide
    // 확인 : ComplexComponent로 이동
    /*
    _pMegaMenu._getPopupControl = function ()
    {
        return this._getCurrentPopup();
    };
    */

    _pMegaMenu._onGetPopupChildPlace = function (popup)
    {
        var place;
        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp && cmp._getSubMenuPlace) place = cmp._getSubMenuPlace();
        }

        if (place == nexacro._PanelConst.GROUPING_SUBPLACE_CUSTOM)
        {
            place = this._ishorizflat
                 ? (nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_DOWN |
                    nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT)
                 : (nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_FIT |
                    nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_NEXT);
        }

        if (place === undefined)
        {
            return nexacro.ComplexComponent.prototype._onGetPopupChildPlace.call(this, popup);
        }

        return place;
    };
    _pMegaMenu._onGetPopupChildPosition = function (popup, basewidth, baseheight, fixleft, fixtop)
    {
        var popps = nexacro.ComplexComponent.prototype._onGetPopupChildPosition.call(this, popup, basewidth, baseheight, fixleft, fixtop);
        var retps = [-1, -1];
        var setps;

        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp)
            {
                if (cmp._isPopupOverflow()) { if (cmp._getOverflowMenuPos) setps = cmp._getOverflowMenuPos(); }
                else                        { if (cmp._getSubMenuPos)      setps = cmp._getSubMenuPos();      }
            } 
        }
        if (setps && nexacro._isArray(setps))
        {
            var l = fixleft ?? setps[0];
            var t = fixtop  ?? setps[1];

            retps[0] = (l == -1) ? popps[0] : this._convCValueFloor(l, basewidth);     // (l == 0 || l <= -1 || l >= 1) ? l : Math.floor(l * 100 * basewidth);
            retps[1] = (t == -1) ? popps[1] : this._convCValueFloor(t, baseheight);    // (t == 0 || t <= -1 || t >= 1) ? t : Math.floor(t * 100 * baseheight);

            return retps;
        }
        return popps;
    };
    _pMegaMenu._onGetPopupChildSize = function (popup, basewidth, baseheight, fixwidth, fixheight)
    {
        var popsz = nexacro.ComplexComponent.prototype._onGetPopupChildSize.call(this, popup, basewidth, baseheight, fixwidth, fixheight);
        var retsz = [-1, -1];
        var setsz, fitsz;

        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp)
            {
                if (cmp._isPopupOverflow()) { if (cmp._getOverflowMenuSize) setsz = cmp._getOverflowMenuSize(); }
                else                        { if (cmp._getSubMenuSize)      setsz = cmp._getSubMenuSize();      }
            }
        }
        if (setsz && nexacro._isArray(setsz))
        {
            var w = fixwidth  ?? setsz[0];
            var h = fixheight ?? setsz[1];

            retsz[0] = this._convCValueFloor(w, basewidth);
            retsz[1] = this._convCValueFloor(h, baseheight);

            if (w == -1 || h == -1)
            {
                var cmp = popup._getAttachedComponent();
                if (cmp)                
                {
                    var popover = cmp._isPopupOverflow();
                    var aw = false;
                    var ah = false;

                    // overflowmenu에 개별itemsize 속성이 주어질때 해제
                    if (!popover) 
                    {
                        // check all item %
                        var as = [
                                cmp._brgMenuItemSize(),
                                cmp._brgGroupItemSize(),
                                cmp._brgHeaderItemSize(),
                                cmp._brgFooterItemSize(),
                                cmp._brgDividerItemSize(),
                                cmp._brgEditItemSize(),
                                cmp._brgButtonItemSize(),
                                cmp._brgViewItemSize()
                                ];

                        aw = w == -1 && this._chkPerItemWidth(as);
                        ah = h == -1 && this._chkPerItemHeight(as);
                    }

                    if (aw || ah)
                    {
                        var ds = { pval: "", sval: -1, cval: -1, unit: nexacro._UnitConst.SIZEUNIT_PIXEL };
                        
                        var r = cmp._autorowfirst ? false : cmp._isRowFirst();

                        var W = w == -1 ? (r ? 300 : 100) : retsz[0];
                        var H = h == -1 ? (r ? 100 : 300) : retsz[1];

                        // pre autofit size
                        cmp._resizeFitToContent("none", W, H);

                        // set fit size
                        cmp._chgMenuItemSize(   0, (aw && this._chkPerItemWidth(as[0]) ? ds : as[0].w), (ah && this._chkPerItemHeight(as[0]) ? ds : as[0].h));
                        cmp._chgGroupItemSize(  0, (aw && this._chkPerItemWidth(as[1]) ? ds : as[1].w), (ah && this._chkPerItemHeight(as[1]) ? ds : as[1].h));
                        cmp._chgHeaderItemSize( 0, (aw && this._chkPerItemWidth(as[2]) ? ds : as[2].w), (ah && this._chkPerItemHeight(as[2]) ? ds : as[2].h));
                        cmp._chgFooterItemSize( 0, (aw && this._chkPerItemWidth(as[3]) ? ds : as[3].w), (ah && this._chkPerItemHeight(as[3]) ? ds : as[3].h));
                        cmp._chgDividerItemSize(0, (aw && this._chkPerItemWidth(as[4]) ? ds : as[4].w), (ah && this._chkPerItemHeight(as[4]) ? ds : as[4].h));
                        cmp._chgEditItemSize(   0, (aw && this._chkPerItemWidth(as[5]) ? ds : as[5].w), (ah && this._chkPerItemHeight(as[5]) ? ds : as[5].h));
                        cmp._chgButtonItemSize( 0, (aw && this._chkPerItemWidth(as[6]) ? ds : as[6].w), (ah && this._chkPerItemHeight(as[6]) ? ds : as[6].h));
                        cmp._chgViewItemSize(   0, (aw && this._chkPerItemWidth(as[7]) ? ds : as[7].w), (ah && this._chkPerItemHeight(as[7]) ? ds : as[7].h));

                        cmp._recreateContents(true, true);

                        // set autofit size
                        if (w * h > 0)  cmp._resizeFitToContent("both",   W, H); else
                        if (w  ==  -1)  cmp._resizeFitToContent("width",  W, H); else
                                        cmp._resizeFitToContent("height", W, H);

                        // get autofit size
                        fitsz = cmp._on_getFitSize();

                        if (w == -1) retsz[0] = fitsz[0];
                        if (h == -1) retsz[1] = fitsz[1];

                        // fit autofit size
                        cmp._resizeFitToContent("none", retsz[0], retsz[1]);

                        // set org size
                        cmp._chgMenuItemSize(   0, as[0].w, as[0].h);
                        cmp._chgGroupItemSize(  0, as[1].w, as[1].h);
                        cmp._chgHeaderItemSize( 0, as[2].w, as[2].h);
                        cmp._chgFooterItemSize( 0, as[3].w, as[3].h);
                        cmp._chgDividerItemSize(0, as[4].w, as[4].h);
                        cmp._chgEditItemSize(   0, as[5].w, as[5].h);
                        cmp._chgButtonItemSize( 0, as[6].w, as[6].h);
                        cmp._chgViewItemSize(   0, as[7].w, as[7].h);

                        cmp._recreateContents(true, true);

                        // set autofit size
                        if (w * h > 0)  cmp._resizeFitToContent("both",   W, H); else
                        if (w  ==  -1)  cmp._resizeFitToContent("width",  W, H); else
                                        cmp._resizeFitToContent("height", W, H);

                        // get autofit size
                        fitsz = cmp._on_getFitSize();

                        if (w == -1) retsz[0] = fitsz[0];
                        if (h == -1) retsz[1] = fitsz[1];
                        
                        // fit autofit size
                        cmp._resizeFitToContent("none", retsz[0], retsz[1]);
                    }
                    else
                    {
                        var r = cmp._autorowfirst ? false : cmp._isRowFirst();

                        var W = w == -1 ? (r ? 300 : 100) : retsz[0];
                        var H = h == -1 ? (r ? 100 : 300) : retsz[1];

                        // pre autofit size
                        cmp._resizeFitToContent("none", W, H);

                        // set autofit size
                        if (w * h > 0)  cmp._resizeFitToContent("both",   W, H); else
                        if (w  ==  -1)  cmp._resizeFitToContent("width",  W, H); else
                                        cmp._resizeFitToContent("height", W, H);

                        // get autofit size
                        fitsz = cmp._on_getFitSize();

                        if (w == -1) retsz[0] = fitsz[0];
                        if (h == -1) retsz[1] = fitsz[1];
                    }
                }
            }

            return retsz;
        }

        return popsz;
    };

    _pMegaMenu._onGetPopupOverflowPlace = function (popup)
    {
        var place;

        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp && cmp._getOverflowMenuPlace) place = cmp._getOverflowMenuPlace();
        }
        if (place == nexacro._PanelConst.GROUPING_SUBPLACE_CUSTOM || place === undefined)
        {
            return nexacro.ComplexComponent.prototype._onGetPopupOverflowPlace.call(this, popup);
        }

        return place;
    };

    // onGetPopupChildPosition/Size와 통합
    /*
    _pMegaMenu._onGetPopupOverflowPosition = function (popup, basewidth, baseheight)
    {   
        var pos;

        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp && cmp._getOverflowMenuPos) pos = cmp._getOverflowMenuPos();
        }
        
        return pos ?? nexacro.ComplexComponent.prototype._onGetPopupOverflowPosition.call(this, popup);
    };
    _pMegaMenu._onGetPopupOverflowSize= function (popup, basewidth, baseheight)
    {
        var size;
        
        if (popup)
        {
            var cmp = popup._getAttachedComponent();
            if (cmp && cmp._getOverflowMenuSize) size = cmp._getOverflowMenuSize();
        }

        return size ?? nexacro.ComplexComponent.prototype._onGetPopupOverflowSize.call(this, popup);
    };
    */

    _pMegaMenu._onGetItemExpandRange = function (width, height, before) 
    {
        return nexacro.ComplexComponent.prototype._onGetItemExpandRange.call(this, width, height, before);
    };
    _pMegaMenu._onGetItemExpandSizes = function (width, height, before)
    {
        return nexacro.ComplexComponent.prototype._onGetItemExpandSizes.call(this, width, height, before);
    };

    // 아래 확인하여 ComplexComponent로 이동할것
    // Popup Event
    _pMegaMenu.on_notify_popup_onpopup = function (popupindex, startindex, startlevel, limitlevel, bindindex, itemindex, popupstyle, popupowner)
    {
        if (popupowner != this)
        {
            this._on_fire_onmenuitemstatuschanged(itemindex, 2, this, popupowner);

            return;
        }

        var popup = this._popuplist[popupindex];
        if (popup)
        {
            var origin = popup._getOrigin(false);
            var comp = popup._getAttachedComponent();

            // apply status
            var stat = "";
            var status = origin._statusmap;
            for (stat in status)
            {
                comp._changeStatus(stat, status[stat]);
            }

            // apply userstatus
            var userstatus = origin._userstatusmap;
            for (stat in userstatus)
            {
                comp._changeUserStatus(stat, userstatus[stat]);
            }

            this._setCurrentPopup(popup, popupindex, startindex, startlevel, limitlevel, bindindex, itemindex, popupstyle, popupowner);
        }
    };

    _pMegaMenu.on_notify_popup_onclose = function (popupindex, startindex, startlevel, limitlevel, bindindex, itemindex, popupstyle, popupowner)
    {
        if (popupowner != this)
        {
            this._on_fire_onmenuitemstatuschanged(itemindex, -2, this, popupowner);

            return;
        }

        var panel = this._getPanel();
        if (panel)
        {        
            if (popupstyle && popupstyle.overpopup)
            {
                var slot = panel._getPanelOverExpandSlot(itemindex);
                if (slot)
                {
                    var itemstatus = slot._getSlotStatus();
                    if (itemstatus > 0)
                    {
                        panel._setPanelOverflowSlotStatusNoAction(itemindex, -itemstatus);
                    }

                    var erng = this._getContentsExpandRange();
                    var eidx = erng[0];
                    var ecnt = erng[1];

                    this._on_fire_onoverflowmenuclose(eidx, ecnt, this, this);                    
                }
            }
            else
            {
                var slot = panel._getPanelSlot(itemindex);
                if (slot)
                {
                    var itemstatus = slot._getSlotStatus();
                    if (itemstatus > 0)
                    {
                        panel._setPanelSlotStatusNoAction(itemindex, -itemstatus);
                    }

                    this._updateItem(this._getItem(itemindex), itemindex);

                    if (itemstatus != (itemstatus = slot._getSlotStatus()))
                    {
                        this._on_fire_onmenuitemstatuschanged(itemindex, itemstatus, this, this);
                    }
                }
            }
        }
    };

    //===============================================================
    // nexacro.MegaMenu : Formats
    //===============================================================

    // [상위 Component 처리]
    // Formats는 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 property/method 노출처리

    // [component.composite.layout.formats:useset]
    _pMegaMenu._is_format_layout = true;

    // 확인 : 아래는 상수에 해당함으로 선언값을 사용하도록 수정
    // [component.layout.formats.config:init]
    _pMegaMenu._onInitFormatsLayout = function ()
    {
        var formats = this._formats;

        if (formats)
        {
            formats._initFormats(
                nexacro._FormatsConst.FORMATMODE_XML,
                nexacro._FormatsConst.FORMATTYPE_POSITION | nexacro._FormatsConst.FORMATTYPE_MULTIGROUP | nexacro._FormatsConst.FORMATTYPE_MULTILEVEL,
                nexacro._FormatsConst.FORMATBIND_BIND | nexacro._FormatsConst.FORMATBIND_EXPR | nexacro._FormatsConst.FORMATBIND_SETTINFO,
                [
                    "mainheaderitem",   "subheaderitem",    "detailheaderitem",
                ],
                [
                    "mainmenuitem",     "submenuitem",      "detailmenuitem",
                    "maingroupitem",    "subgroupitem",     "detailgroupitem",
                    "maindivideritem",  "subdivideritem",   "detaildivideritem",
                    "mainheaderitem",   "subheaderitem",    "detailheaderitem",
                    "mainfooteritem",   "subfooteritem",    "detailfooteritem",
                    "mainbuttonitem",   "subbuttonitem",    "detailbuttonitem",
                    "mainedititem",     "subedititem",      "detailedititem",
                    "mainviewitem",     "subviewitem",      "detailviewitem",
                ],
                [
                    "mainfooteritem",   "subfooteritem",    "detailfooteritem",
                ],
                [], [], [],
                {
                    // TODO : Format 노출시 Band-->Item? 노출명칭 변경
                    // MenuItem Band Control : MeageMenuItemControl/MeageMenuHeaderItemControl...
                    "Band"      : "nexacro._MegaMenuItemControl",
                    "Item"      : "nexacro._MegaMenuItemControl",

                    // MenuItem Ctrl Control : Icon/Static/Button..
                    "Icon"      : "nexacro._Icon",
                    "Check"     : "nexacro._Icon",
                    "IconText"  : "nexacro._IconText",
                    "Text"      : "nexacro._MegaMenuItemTextControl",
                    "Desc"      : "nexacro._MegaMenuItemTextControl",
                    "HotKey"    : "nexacro._MegaMenuItemTextControl",
                    "Expand"    : "nexacro._MegaMenuItemExpandControl",
                    "Close"     : "nexacro.Button",
                    "Divider"   : "nexacro.Button",
                    "Badge"     : "nexacro.Button",
                    "Button"    : "nexacro.Button",             // 확인 : type bind에 의해 text 를 가진 Button/Static 등으로 전환
                    "Switch"    : "nexacro.Switch",             // 확인 : type bind에 의해 value를 가진 Check/Switch 등으로 전환
                    "Edit"      : "nexacro.Edit",               // 확인 : type bind에 의해 value를 가진 Edit/TextArea/Spin 등으로 전환
                    "WebView"   : "nexacro.WebView",            // 확인 : type bind에 의해 url  을 가진 Div/WebView/ImageViewer/MediaPlayer 등으로 전환
                    "ImageView" : "nexacro.ImageViewer",        // 확인 : type bind에 의해 url  을 가진 Div/WebView/ImageViewer/MediaPlayer 등으로 전환
                    "VideoView" : "nexacro.VideoPlayer",        // 확인 : type bind에 의해 url  을 가진 Div/WebView/ImageViewer/MediaPlayer 등으로 전환
                    "DivView"   : "nexacro.Div",                // 확인 : type bind에 의해 url  을 가진 Div/WebView/ImageViewer/MediaPlayer 등으로 전환
                    "Control"   : "nexacro.Component"
                },
                {
                //  "none"      : nexacro._FormatsConst.FORMATBANDIDX_NONE,
                //  "root"      : nexacro._FormatsConst.FORMATBANDIDX_ROOT,
                //  "branch"    : nexacro._FormatsConst.FORMATBANDIDX_BRCH,
                //  "leaf"      : nexacro._FormatsConst.FORMATBANDIDX_LEAF,
                    "main"      : nexacro._FormatsConst.FORMATBANDIDX_MAIN,
                    "sub"       : nexacro._FormatsConst.FORMATBANDIDX_SUB,
                    "detail"    : nexacro._FormatsConst.FORMATBANDIDX_FIN
                },
                {},
                {
                    _default_id     : "default",
                    _default_level  : "detail",
                    _default_band   : ["mainmenuitem",   "submenuitem",   "detailmenuitem"],
                    _default_head   : ["mainheaderitem", "subheaderitem", "detailheaderitem"],
                    _default_tail   : ["mainfooteritem", "subfooteritem", "detailfooteritem"],
                }
            );

            formats._setUsrDefBandNames(
                this._defitemtype,
                this._defheadtype,
                this._deffoottype
            );
   
        }

        this._setUserFormat(this._p_useriteminfo, this._p_useritemformats);
    };

    // [component.layout.formats.contents:setuserformat]
    _pMegaMenu._onSetUserFormat = function (usrformatinfo, usrformatstr) 
    {
        if (usrformatinfo)
        {
            var userinfo = nexacro._getJson(usrformatinfo, {});

            if (userinfo.itemtypename)      this._formats._setUsrBandNames(this._onGetBindTypeNameAllLevel(nexacro._getJson(userinfo.itemtypename, [])));
            if (userinfo.itemid)            this._formats._setUsrBandNames(userinfo.itemid);
            if (userinfo.controltypeinfo)   this._formats._setUsrControlTypes(userinfo.controltypeinfo);           
        }
        if (usrformatstr)
        {
            this._formats._setUsrFormatString(usrformatstr);
        }
    };

    // [component.layout.formats.contents:get]
    _pMegaMenu._onGetStrFormats = function () 
    {
        // 확인 : XML String --> JSON String 으로 변경
        // 확인 : 가능하다면 JSON Object로 변경

        var m, s, f;

             if (this._isFinLayout())   { m = -1, s = -1,                                      f = 0; }
        else if (this._isSubLayout())   { m = -1, s =  0,                                      f = this._isSubGroupTypeGroup(0) ? 1 : -1; }
        else                            { m =  0, s = this._isSubGroupTypeGroup(0) ? 1 : -1;   f = this._isSubGroupTypeGroup(1) ? 2 : -1; }

        var his, mis, gis, sis, eis, bis, vis, fis;

        var sms;                                                // show menuitem switch
        var smb;                                                // show menuitem button
        var sfw;                                                // show footer view
        var sfb;                                                // show footer button
        var sfc;                                                // show footer view/button
        var seb;                                                // show editor button
        var svw;                                                // show viewer weview
        var svi;                                                // show viewer imageview
        var svv;                                                // show viewer videoplayer
        var svd;                                                // show viewer divview

        var bbr;                                                // base badge right
        var btr;                                                // base text right
        var bcb;                                                // base control bottom
        var bcr;                                                // base control right
        var bvb;                                                // base viewer bottom
        var ber;                                                // base editor right
        var bdr;                                                // base desc right
        var btl; // 누락
        var afb;                                                // align footer bottom

        var igh;                                                // inner gap horz
        var igv;                                                // inner gap vert
        var pgh = 0;                                            // padding gap horz
        var pgv = 0;                                            // padding gap vert
        var bgv;                                                // base gap vert
        var bgh;                                                // base gap horz
        var vgv;                                                // view gap vert

        var ttc;                                                // tooltiptype
        var ttt;                                                // tooltiptext

        var comp = this._getParentComponent();
        var pw = false;
        var ph = false;

        var db = 24;                                            // badge default size           : material default size 
        var dw = 34;                                            // switch/button default width  : material default size 
        var dh = 20;                                            // switch/button default height : material default size

        var scc = false;                                        // show control close
        var scb = !nexacro._isNull(this._p_badgecolumn);        // show control badge
        var scd = !nexacro._isNull(this._p_descriptioncolumn);  // show control desc

        var sce = !nexacro._isNull(this._p_enablecolumn)        // set item enable
                ? `enable="expr:!nexacro._isSetFalse(${this._p_enablecolumn})"`
                : ``;

        var fif = ` formattype="fix"`;                          // set item built-in fixformat
        var uif = this._p_useritemformats ?? "";

        switch (comp._p_fittocontents)
        {
            case "width" : pw = true; break;
            case "height": ph = true; break;
            case "both"  : pw = ph = true; break;
        }

        function _fit(size, def)
        {
            var nw = (size[0].cval == -1 || size[0].pval == "") || def == 'w';
            var nh = (size[1].cval == -1 || size[1].pval == "") || def == 'h';

            if (nw && nh)   return "both";
            if (nw)         return "width";
            if (nh)         return "height";

            return def == 'b' ? "both" : "none";
        }
        function _chk(size, def)
        {
            var nw = (size[0].cval == -1 || size[0].pval == "") || /*(pw && (size[0].cval > 0 || size[0].cval < 1)) ||*/ def == 'w';
            var nh = (size[1].cval == -1 || size[1].pval == "") || /*(ph && (size[1].cval > 0 || size[1].cval < 1)) ||*/ def == 'h';

            if (nw && nh)   return "both";
            if (nw)         return "width";
            if (nh)         return "height";

            return def == 'b' ? "both" : "none";
        }
        function _sethorz(val)
        {
            return val[0].pval == "" ? "-1" : val[0].pval;
        }
        function _setvert(val)
        {
            return val[1].pval == "" ? "-1" : val[1].pval;
        }

        return (
            `<Formats>
               <Format id="default">

            ${m >= 0 ?
                (   his = this._headeritemsize[m],
                    mis = this._menuitemsize[m],
                    gis = this._groupitemsize[m],
                    sis = this._divideritemsize[m],
                    eis = this._edititemsize[m],
                    bis = this._buttonitemsize[m],
                    vis = this._viewitemsize[m],
                    fis = this._footeritemsize[m],
                    igh = this._menuinnergap[m][0].pval,
                    igv = this._menuinnergap[m][1].pval,
                    scc = this._isMainLayout() && this._isPopupContains() && !this._isPopupOverflow(),
                    sms = this._isShowCtrlMenuItemEditSwitch(m),
                    smb = this._isShowCtrlMenuItemCtrlButton(m),
                    sfw = this._isShowCtrlFooterViewWebview(m),
                    sfb = this._isShowCtrlFooterCtrlButton(m),
                    seb = this._isShowCtrlEditorCtrlButton(m),
                    svw = this._isShowCtrlViewerViewWebView(m) || this._isShowCtrlViewerViewDefault(m),
                    svi = this._isShowCtrlViewerViewImgView(m),
                    svv = this._isShowCtrlViewerViewVidView(m),
                    svd = this._isShowCtrlViewerViewDivView(m),
                    sfc = sfw || sfb,
                    bcr = "menuitemexpand:",
                    bbr = (sms ? "menuitemswitch:" : smb ? "menuitembutton:" : bcr),
                    btr = (scb ? "menuitembadge:" : bbr),
                    ber = (seb ? "menuitembutton:" : ""),
                    bcb = (scd ? "menuitemdesc:" : ""),
                    bgv = (scd ? igv : pgv),
                    ttc = this._p_mainmenutooltiptype != "none" && this._p_descriptioncolumn,
                    ttt = `${(ttc ? `tooltiptext="bind:${this._p_descriptioncolumn}"` : ``)} ${(ttc ? `tooltiptype="${this._p_mainmenutooltiptype}"` : ``)}`,

                    `<Band          id="mainheaderitem"     level="main"        width="${_sethorz(his)}"                                                height="${_setvert(his)}"                                               fittocontents="${_chk(his)}"        ${fif} ${ttt} ${sce}>
                         <IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(his, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scc ? `<Close     id="menuitemclose"                          width="${db}"                                   right="${pgh}"          height="${dh}"  top="${igv}"                                            fittocontents="both"/>` : ``}
                     </Band>
                     <Band          id="mainmenuitem"       level="main"        width="${_sethorz(mis)}"                                                height="${_setvert(mis)}"                                               fittocontents="${_chk(mis)}"        ${fif} ${ttt} ${sce}                                            childalign="middle">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(mis, 'w')}"   icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(mis, 'w')}"                                                                                           visible="expr:!!comp.getItemSubGroup(rowidx)"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"                    top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(mis, 'n')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                     </Band>
                     <Band          id="maingroupitem"      level="main"        width="${_sethorz(gis)}"                                                height="${_setvert(gis)}"                                               fittocontents="${_chk(gis)}"        ${fif} ${ttt} ${sce}                                            childalign="middle">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(gis, 'w')}"   icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(gis, 'w')}"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${bcr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${bcr}${igh}"                    top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"                    top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(gis, 'n')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                     </Band>
                     <Band          id="maindivideritem"    level="main"        width="${_sethorz(sis)}"                                                height="${_setvert(sis)}"                                               fittocontents="${_chk(sis)}"        ${fif} ${ttt} ${sce}>
                         <Divider   id="menuitemdivider"                                        left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(sis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                     </Band>
                     <Band          id="mainbuttonitem"     level="main"        width="${_sethorz(bis)}"                                                height="${_setvert(bis)}"                                               fittocontents="${_chk(bis)}"        ${fif} ${ttt} ${sce}>
                         <Button    id="menuitembutton"                                         left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(bis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                     </Band>
                     <Band          id="mainedititem"       level="main"        width="${_sethorz(eis)}"                                                height="${_setvert(eis)}"                                               fittocontents="${_chk(eis)}"        ${fif} ${ttt} ${sce}                                            childalign="middle">
                         <IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(eis, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${seb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                                                                                                        visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                         <Edit      id="menuitemedit"                                           left="menuitemicontext:${igh}"  right="${seb?`${ber}${igh}`:`${pgh}`}"  top="${pgv}"                    bottom="${pgv}"                                             value="bind:${this._p_controlvaluecolumn}"/>
                     </Band>
                     <Band          id="mainviewitem"       level="main"        width="${_sethorz(vis)}"                                                height="${_setvert(vis)}"                                               fittocontents="${_chk(vis)}"        ${fif} ${ttt} ${sce}                                            childtype="expr:'icontext,'+${this._p_controltypecolumn}">
                         <IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(vis, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${svw ? `<WebView   id="menuitemwebview"                                        left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"                                             url="bind:${this._p_controlvaluecolumn}"/>` : ``}
                ${svi ? `<ImageView id="menuitemimageview"                                      left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"                                             image="bind:${this._p_controlvaluecolumn}"/>` : ``}
                ${svv ? `<VideoView id="menuitemvideoview"                                      left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"                                             url="bind:${this._p_controlvaluecolumn}"                        showcontrolbar="true"/>` : ``}
                ${svd ? `<DivView   id="menuitemdivview"                                        left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"                                             url="bind:${this._p_controlvaluecolumn}"/>` : ``}
                     </Band>
                     <Band          id="mainfooteritem"     level="main"        width="${_sethorz(fis)}"                                                height="${_setvert(fis)}"                                               fittocontents="${_chk(fis)}"        ${fif} ${ttt} ${sce}                                            childalign="middle">
                ${sfc ? `<IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`
                      : `<IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(fis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`}
                ${sfw ? `<View      id="menuitemview"                                           left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"                                             url="expr:${this._p_controltypecolumn}=='webview'?${this._p_controlvaluecolumn}:''"     visible="expr:!(${this._p_controltypecolumn}!='webview')"/>` : ``}
                ${sfb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                     </Band>`
                ) : ``}

            ${s >= 0 ?
                (   his = this._headeritemsize[s],
                    mis = this._menuitemsize[s],
                    gis = this._groupitemsize[s],
                    sis = this._divideritemsize[s],
                    eis = this._edititemsize[s],
                    bis = this._buttonitemsize[s],
                    vis = this._viewitemsize[s],
                    fis = this._footeritemsize[s],
                    igh = this._menuinnergap[s][0].pval,
                    igv = this._menuinnergap[s][1].pval,
                    sms = this._isShowCtrlMenuItemEditSwitch(s),
                    smb = this._isShowCtrlMenuItemCtrlButton(s),
                    sfw = this._isShowCtrlFooterViewWebview(s),
                    sfb = this._isShowCtrlFooterCtrlButton(s),
                    seb = this._isShowCtrlEditorCtrlButton(s),
                    sfc = sfw || sfb,
                    bcr = "menuitemexpand:",
                    bbr = (sms ? "menuitemswitch:" : smb ? "menuitembutton:" : bcr),
                    btr = (scb ? "menuitembadge:" : bbr),
                    bcb = (scd ? "menuitemdesc:" : ""),
                    bvb = (scd ? "menuitemdesc:" : sfb ? "menuitembutton:" : ""),
                    bdr = (sfb ? "menuitembutton:" : ""),
                    afb = (sfw ? "childalign='middlebottom:menuitemdesc,menuitembutton'" : "childalign='middle'"),
                    bgv = (scd ? igv : pgv),
                    vgv = (scd ? igv : sfb ? igv : pgv),
                    bgh = (sfb ? igh : pgh),
                    ttc = this._p_submenutooltiptype != "none" && this._p_descriptioncolumn,
                    ttt = `${(ttc ? `tooltiptext="bind:${this._p_descriptioncolumn}"` : ``)} ${(ttc ? `tooltiptype="${this._p_submenutooltiptype}"` : ``)}`,

                    `<Band          id="subheaderitem"     level="sub"          width="${_sethorz(his)}"                                                height="${_setvert(his)}"                                               fittocontents="${_chk(his)}"        ${fif} ${ttt} ${sce}                                            childalign="middle">
                         <IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(his, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(his, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="submenuitem"       level="sub"          width="${_sethorz(mis)}"                                                height="${_setvert(mis)}"                                               fittocontents="${_chk(mis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemicon,menuitemexpand,menuitemswitch,menuitembutton,menuitembadge,menuitemtext">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                           height="${dh}"  top="${pgv}"                                            fittocontents="both"                icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"                                                                                                        visible="expr:!!comp.getItemSubGroup(rowidx)"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(mis, 'h')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicon:${igh}"      right="${pgh}"                          top="menuitemtext:${igv}"       bottom="${pgv}"         fittocontents="${_fit(mis, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="subgroupitem"      level="sub"          width="${_sethorz(gis)}"                                                height="${_setvert(gis)}"                                               fittocontents="${_chk(gis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemicon,menuitemexpand,menuitemswitch,menuitembutton,menuitembadge,menuitemtext">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                           height="${dh}"  top="${pgv}"                                            fittocontents="both"                icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${bcr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${bcr}${igh}"                    top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(gis, 'h')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicon:${igh}"      right="${pgh}"                          top="menuitemtext:${igv}"       bottom="${pgv}"         fittocontents="${_fit(gis, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="subdivideritem"    level="sub"          width="${_sethorz(sis)}"                                                height="${_setvert(sis)}"                                               fittocontents="${_chk(sis)}"        ${fif} ${ttt} ${sce}>
                         <Divider   id="menuitemdivider"                                        left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(sis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                     </Band>
                     <Band          id="subbuttonitem"     level="sub"          width="${_sethorz(bis)}"                                                height="${_setvert(bis)}"                                               fittocontents="${_chk(bis)}"        ${fif} ${ttt} ${sce}>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="${pgh}"                   right="${pgh}"          height="0"                                      bottom="${pgv}"         fittocontents="${_fit(bis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                                                visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                         <Button    id="menuitembutton"                                         left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${bcb}${bgv}"   fittocontents="${_fit(bis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${pgh}"          height="0"      top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                     </Band>
                     <Band          id="subedititem"       level="sub"          width="${_sethorz(eis)}"                                                height="${_setvert(eis)}"                                               fittocontents="${_chk(eis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemicontext,menuitemedit,menuitembutton">
                         <IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(eis, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicontext:${igh}"  right="${pgh}"          height="0"                                      bottom="${pgv}"         fittocontents="${_fit(eis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                ${seb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"          height="0"      top="${pgv}"                                            fittocontents="both"                                                                                                        presence="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                         <Edit      id="menuitemedit"                                           left="menuitemicontext:${igh}"  right="${seb?`${ber}${igh}`:`${pgh}`}"  top="${pgv}"                    bottom="${bcb}${bgv}"                                       value="bind:${this._p_controlvaluecolumn}"/>
                     </Band>
                     <Band          id="subviewitem"       level="sub"          width="${_sethorz(vis)}"                                                height="${_setvert(vis)}"                                               fittocontents="${_chk(vis)}"        ${fif} ${ttt} ${sce}>
                         <IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(vis, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicontext:${igh}"  right="${pgh}"          height="0"                                      bottom="${pgv}"         fittocontents="${_fit(vis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                         <View      id="menuitemview"                                           left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${bcb}${bgv}"                                       url="bind:${this._p_controlvaluecolumn}"/>
                     </Band>
                     <Band          id="subfooteritem"     level="sub"          width="${_sethorz(fis)}"                                                height="${_setvert(fis)}"                                               fittocontents="${_chk(fis)}"        ${fif} ${ttt} ${sce} ${afb}>
                ${sfc ? `<IconText  id="menuitemicontext"                       width="${dw}"   left="${pgh}"                                                           top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(fis, 'w')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`
                      : `<IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(fis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`}
                ${sfb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"          height="${dh}"                                  bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scd ? `<Text      id="menuitemdesc"      usedecorate="true"                   left="menuitemicontext:${igh}"  right="${bdr}${bgh}"    height="0"                                      bottom="${pgv}"         fittocontents="${_fit(fis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                ${sfw ? `<View      id="menuitemview"                                           left="menuitemicontext:${igh}"  right="${pgh}"                          top="${pgv}"                    bottom="${bvb}${vgv}"                                       url="bind:${this._p_controlvaluecolumn}"                                                visible="expr:!(${this._p_controltypecolumn}!='webview')"/>` : ``}
                     </Band>`
                ) : ``}
                
            ${f >= 0 ?
                (   his = this._headeritemsize[f],
                    mis = this._menuitemsize[f],
                    gis = this._groupitemsize[f],
                    sis = this._divideritemsize[f],
                    eis = this._edititemsize[f],
                    bis = this._buttonitemsize[f],
                    vis = this._viewitemsize[f],
                    fis = this._footeritemsize[f],
                    igh = this._menuinnergap[f][0].pval,
                    igv = this._menuinnergap[f][1].pval,
                    scc = this._isExtLayout() && this._isPopupContains(),
                    sms = this._isShowCtrlMenuItemEditSwitch(f),
                    smb = this._isShowCtrlMenuItemCtrlButton(f),
                    sfw = this._isShowCtrlFooterViewWebview(f),
                    sfb = this._isShowCtrlFooterCtrlButton(f),
                    seb = this._isShowCtrlEditorCtrlButton(f),
                    sfc = sfw || sfb,
                    bcr = "menuitemexpand:",
                    bbr = (sms ? "menuitemswitch:" : smb ? "menuitembutton:" : bcr),
                    btl = (scc ? "menuitemclose:" : ""),
                    btr = (scb ? "menuitembadge:" : bbr),
                    bcb = (scd ? "menuitemdesc:" : ""),
                    bvb = (scd ? "menuitemdesc:" : sfb ? "menuitembutton:" : ""),
                    bdr = (sfb ? "menuitembutton:" : ""),
                    afb = (sfw ? "childalign='middlebottom:menuitemdesc,menuitembutton'" : ""),
                    bgv = (scd ? igv : pgv),
                    vgv = (scd ? igv : sfb ? igv : pgv),
                    bgh = (sfb ? igh : pgh),
                    ttc = this._p_detailmenutooltiptype != "none" && this._p_descriptioncolumn,
                    ttt = `${(ttc ? `tooltiptext="bind:${this._p_descriptioncolumn}"` : ``)} ${(ttc ? `tooltiptype="${this._p_detailmenutooltiptype}"` : ``)}`,

                    `<Band          id="detailheaderitem"   level="detail"      width="${_sethorz(his)}"                                                height="${_setvert(his)}"                                               fittocontents="${_chk(his)}"        ${fif} ${ttt} ${sce}                                   ${scc ? `childalign="middletop:menuitemclose,menuitemicontext"` : ``}>
                ${scc ? `<Close     id="menuitemclose"                          width="${db}"   left="${pgh}"                                           height="${dh}"  top="${pgv}"                                            fittocontents="both"/>` : ``}
                         <IconText  id="menuitemicontext"                                       left="${btl}${scc ? igh : pgh}" right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(his, 'h')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"                          top="menuitemicontext:${igv}"   bottom="${pgv}"         fittocontents="${_fit(his, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="detailmenuitem"     level="detail"      width="${_sethorz(mis)}"                                                height="${_setvert(mis)}"                                               fittocontents="${_chk(mis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemicon,menuitemexpand,menuitemswitch,menuitembutton,menuitembadge,menuitemtext">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                           height="${dh}"  top="${pgv}"                                            fittocontents="both"                icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"                                                                                                        visible="expr:!!comp.getItemSubGroup(rowidx)"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(comp.getItemSubGroup(rowidx) || ${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(mis, 'h')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"                          top="menuitemtext:${igv}"       bottom="${pgv}"         fittocontents="${_fit(mis, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="detailgroupitem"    level="detail"      width="${_sethorz(gis)}"                                                height="${_setvert(gis)}"                                               fittocontents="${_chk(gis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemicon,menuitemexpand,menuitemswitch,menuitembutton,menuitembadge,menuitemtext">
                         <Icon      id="menuitemicon"                           width="${db}"   left="${pgh}"                                           height="${dh}"  top="${pgv}"                                            fittocontents="both"                icon="bind:${this._p_iconcolumn}"/>
                         <Expand    id="menuitemexpand"                         width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"/>
                ${sms ? `<Switch    id="menuitemswitch"                         width="${dw}"                                   right="${bcr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="none"                value="bind:${this._p_controlvaluecolumn}"                                              visible="expr:!(${this._p_controltypecolumn}!='switch')"/>` : ``}
                ${smb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${bcr}${igh}"                    top="${pgv}"                    bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${bbr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                         <Text      id="menuitemtext"                                           left="menuitemicon:${igh}"      right="${btr}${igh}"    height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(gis, 'h')}"   text="bind:${this._p_captioncolumn}"                            autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_captioncolumn})"/>
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"                          top="menuitemtext:${igv}"       bottom="${pgv}"         fittocontents="${_fit(gis, 'n')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                     </Band>
                     <Band          id="detaildivideritem"  level="detail"      width="${_sethorz(sis)}"                                                height="${_setvert(sis)}"                                               fittocontents="${_chk(sis)}"        ${fif} ${ttt} ${sce}>
                         <Divider   id="menuitemdivider"                                        left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${pgv}"         fittocontents="${_fit(sis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                     </Band>
                     <Band          id="detailbuttonitem"   level="detail"      width="${_sethorz(bis)}"                                                height="${_setvert(bis)}"                                               fittocontents="${_chk(bis)}"        ${fif} ${ttt} ${sce}>
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"          height="${dh}"                                  bottom="${pgv}"         fittocontents="${_fit(bis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                         <Button    id="menuitembutton"                                         left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${bcb}${bgv}"   fittocontents="${_fit(bis, 'n')}"   background="expr:'URL('+${this._p_iconcolumn}+') no-repeat center center'" text="bind:${this._p_captioncolumn}"/>
                ${scb ? `<Badge     id="menuitembadge"                          width="${db}"                                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="both"                text="bind:${this._p_badgecolumn}"                                                      visible="expr:!nexacro._isNullEmpty(${this._p_badgecolumn})"/>` : ``}
                     </Band>
                     <Band          id="detailedititem"     level="detail"      width="${_sethorz(eis)}"                                                height="${_setvert(eis)}"                                               fittocontents="${_chk(eis)}"        ${fif} ${ttt} ${sce}                                            childalign="middletop:menuitemedit,menuitembutton">
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"          height="${dh}"                                  bottom="${pgv}"         fittocontents="${_fit(eis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                         <IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(eis, 'h')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                ${seb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"          height="0"      top="menuitemicontext:${igv}"                           fittocontents="both"                                                                                                        presence="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                         <Edit      id="menuitemedit"                                           left="${pgh}"                   right="${seb?`${ber}${igh}`:`${pgh}`}"  top="menuitemicontext:${igv}"   bottom="${bcb}${bgv}"                                       value="bind:${this._p_controlvaluecolumn}"/>
                     </Band>
                     <Band          id="detailviewitem"     level="detail"      width="${_sethorz(vis)}"                                                height="${_setvert(vis)}"                                               fittocontents="${_chk(vis)}"        ${fif} ${ttt} ${sce}>
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${pgh}"          height="${dh}"                                  bottom="${pgv}"         fittocontents="${_fit(vis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                         <IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(vis, 'h')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>
                         <WebView   id="menuitemview"                                           left="${pgh}"                   right="${pgh}"                          top="menuitemicontext:${igh}"   bottom="${bcb}${bgv}"                                       url="bind:${this._p_controlvaluecolumn}"/>
                     </Band>
                     <Band          id="detailfooteritem"   level="detail"      width="${_sethorz(fis)}"                                                height="${_setvert(fis)}"                                               fittocontents="${_chk(fis)}"        ${fif} ${ttt} ${sce} ${afb}>
                ${sfb ? `<Button    id="menuitembutton"                         width="${dw}"                                   right="${pgh}"          height="${dh}"                                  bottom="${pgv}"         fittocontents="both"                text="bind:${this._p_controlvaluecolumn}"                                               visible="expr:!(${this._p_controltypecolumn}!='button')"/>` : ``}
                ${scd ? `<Text      id="menuitemdesc"       usedecorate="true"                  left="${pgh}"                   right="${bdr}${bgh}"    height="${dh}"                                  bottom="${pgv}"         fittocontents="${_fit(fis, 'h')}"   text="bind:${this._p_descriptioncolumn}"                        autobreak="true"        visible="expr:!nexacro._isNullEmpty(${this._p_descriptioncolumn})"/>` : ``}
                ${sfc ? `<IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"          height="${dh}"  top="${pgv}"                                            fittocontents="${_fit(fis, 'h')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`
                      : `<IconText  id="menuitemicontext"                                       left="${pgh}"                   right="${pgh}"                          top="${pgv}"                    bottom="${bvb}${vgv}"   fittocontents="${_fit(fis, 'n')}"   icon="bind:${this._p_iconcolumn}" text="bind:${this._p_captioncolumn}"/>`}
                ${sfw ? `<WebView   id="menuitemview"                                           left="${pgh}"                   right="${pgh}"                          top="menuitemicontext:${igh}"   bottom="${bvb}${vgv}"                                       url="bind:${this._p_controlvaluecolumn}"                                                visible="expr:!(${this._p_controltypecolumn}!='webview')"/>` : ``}
                     </Band>`
                ) : ``}

                ${uif}

                 </Format>
            </Formats>`
        );
    };


    // 확인 : 아래 부분 ListView와 통일하여 ComplexComponent로 최대한 이동
    //      : 하위 속성을 바로 접근하는 부분은 모두 변경 (getter사용등)

    /*
    // [component.layout.formats.context.base:set] 
    _pMegaMenu._onSetCtxtBaseInfo = function ()
    {
        // make iteminfo/ctrlinfo
        var ctxt = this._getCtxtBaseInfo(); if (!ctxt) return;
        var bands = ctxt._bands;            if (!bands) return;

        for (var band in bands)
        {
            this._makeItemCtrlInfo(bands[band]);
        }
    };
    // [component.layout.formats.context.base:clear] 
    _pMegaMenu._onClearCtxtBaseInfo = function ()
    {
        // make bandinfo/ctrlinfo
        var ctxt = this._getCtxtBaseInfo(); if (!ctxt) return;
        var bands = ctxt._bands;            if (!bands) return;

        for (var band in bands)
        {
            this._clearBandCtrlInfo(bands[band]);
        }                
    };
    _pMegaMenu._resetBandCtrlInfo = function (band, clearonly)
    {
        if (band)
        {
            {
                this._clearBandInfo(band);
                this._clearCtrlInfo(band);
            }
            if (!clearonly)
            {
                this._makeBandInfo(band);
                this._makeCtrlInfo(band);
            }
        }
    };
    _pMegaMenu._makeBandCtrlInfo = function (band)
    {
        this._resetBandCtrlInfo(band, false);
    };
    _pMegaMenu._clearBandCtrlInfo = function (band)
    {
        this._resetBandCtrlInfo(band, true);
    };
    _pMegaMenu._makeBandInfo = function (band)
    {
        band._bandinfo = null // new nexacro.MegaMenuBandInfo(item.id, item.id, null, this);

        this._onMakeBandInfo(band);
    };
    _pMegaMenu._makeCtrlInfo = function (band)
    {
        for (var i = 0, l = band._items.length; i < l; i++)
        {
            band._items[i]._ctrlinfo = null; // new nexacro.MegaMenuCtrlInfo(item.id + i, item._iteminfo, this, item.id, i);

            this._onMakeCtrlInfo(band._items[i]);
        }
    };
    _pMegaMenu._changeCtrlInfo = function (bandid, ctrlid, propid, propval)
    {
        var ctxt = this._getCtxtBaseInfo();
        if (ctxt)
        {
            var ctrl = ctxt._getBandChildFromId(bandid, ctrlid);
            if (ctrl)
            {
                return this._onChangeCtrlInfo(ctrl, propid, propval);
            }
        }

        return false;
    };
    */
    _pMegaMenu._getCtrlinfo = function (bandid, ctrlid, propid)
    {
        var ctxt = this._getCtxtBaseInfo();
        if (ctxt)
        {
            var ctrl = ctxt._getBandChildFromId(bandid, ctrlid);
            if (ctrl)
            {
                if (!propid)
                    return ctrl._ctrlinfo;
                else
                    return ctrl._ctrlinfo[propid];
            }
        }
    };
    /*
    _pMegaMenu._clearItemInfo = function (item)
    {
        if (item._iteminfo)
        {
            delete item._iteminfo;
            item._iteminfo = null;
        }
    };
    _pMegaMenu._clearCtrlInfo = function (item)
    {
        for (var i = 0, l = item._items.length; i < l; i++)
        {
            if (item._items[i]._ctrlinfo)
            {
                delete item._items[i]._ctrlinfo;
                item._items[i]._ctrlinfo = null;
            }
        }
    };

    _pMegaMenu._onMakeItemInfo = function (item)
    {

    };
    _pMegaMenu._onMakeCtrlInfo = function (ctrl)
    {
        var ctrlinfo = ctrl ? ctrl._ctrlinfo : null;
        var ctrlsett = ctrl ? ctrl._setts : null;
        if (ctrlinfo && ctrlsett)
        {
            for (var propid in ctrlsett)
            {
                var func = ctrlinfo["set_" + propid];
                if (func)
                {
                    func.call(ctrlinfo, ctrl[propid]);
                }
                else if (ctrlinfo.hasOwnProperty(propid) == false)    // userdata
                {
                    var attrval = ctrl["_p_" + propid];

                    switch (propid)
                    {
                        //--- reserved ---
                        case "col":
                        case "row":
                        case "colspan":
                        case "rowspan":
                            break;
                        //----------------
                        default:
                            ctrlinfo["_p_" + propid] = new nexacro.BindableValue(undefined);
                            ctrlinfo["_p_" + propid]._propname = propid;
                            ctrlinfo._addPropertyMap(ctrlinfo, [[propid, null, true, undefined, false]], true);

                            if (attrval !== null && attrval !== undefined)
                                ctrlinfo["set_" + propid](attrval);

                            break;
                    }
                }
            }
        }
    };
    _pMegaMenu._onChangeCtrlInfo = function (ctrl, propid, propval)
    {
        var ctrlinfo = ctrl ? ctrl._ctrlinfo : null;
        if (ctrlinfo)
        {
            var func = ctrlinfo["set_" + propid];
            if (func)
            {
                func.call(ctrlinfo, propval);

                if (propid == "left" || propid == "top" || propid == "width" || propid == "height" || propid == "right" || propid == "bottom")
                {
                    ctrlinfo._syncPosition(ctrl);
                }

                return true;
            }
            else if (ctrlinfo.hasOwnProperty(propid) == false)    // userdata
            {
                var attrval = ctrl["_p_" + propid];

                switch (propid)
                {
                    //--- reserved ---
                    case "col":
                    case "row":
                    case "colspan":
                    case "rowspan":
                        break;
                    //----------------
                    default:
                        ctrlinfo["_p_" + propid] = new nexacro.BindableValue(undefined);
                        ctrlinfo["_p_" + propid]._propname = propid;
                        ctrlinfo._addPropertyMap(ctrlinfo, [[propid, null, true, undefined, false]], true);

                        if (attrval !== null && attrval !== undefined)
                            ctrlinfo["set_" + propid](attrval);

                        break;
                }
                return true;
            }
        }
        return false;
    };
    */

    // [component.layout.formats.context.control:create]
    _pMegaMenu.onCreateCtxtControl = function (item, ctxt, bind, seq)
    {
        // context control created logic
        if (item && ctxt)
        {
            // set added creation info
        //  if (item._setAddedCreateInfo)
                item._setAddedCreateInfo(this, ctxt, bind, seq);

            // set event handler
        //  if (item._setEventHandler)
            {
                item._setEventHandler("onclick",        this.on_notify_item_onclick,        this);
                item._setEventHandler("ondblclick",     this.on_notify_item_ondblclick,     this);
                item._setEventHandler("onsetfocus",     this.on_notify_item_onsetfocus,     this);
                item._setEventHandler("onexpand",       this.on_notify_item_onexpand,       this);
                item._setEventHandler("onexpandclick",  this.on_notify_item_onexpandclick,  this);
                item._setEventHandler("onchanged",      this.on_notify_item_onchanged,      this);
            }
        }

        return item;
    };

    /*
    // 확인 : 아래코드 확인하여 ComplexComponent로 이전 (create temp format 없이 구성하도록)
    //      : Get Code에 Create가 있어 로직 확인 필요 --> 불필요한 코드면 삭제
    _pMegaMenu._onGetContextDataNull = function (index)
    {
        if (this._formats)
        {
            var itemchild;

            var ctxt = this._onGetContextDataBand(this._formats._null_items);
            if (ctxt && ctxt[0])
            {
                itemchild = ctxt[0]._items;
            }
            else
            {
                // create temp format
                var tmp = new nexacro._Formats();
                tmp._initFormats(
                    nexacro._FormatsConst.FORMATMODE_XML,
                    nexacro._FormatsConst.FORMATTYPE_POSITION,
                    nexacro._FormatsConst.FORMATBIND_BIND,
                    ["header"],
                    ["mainmenu", "submenu"],
                    ["footer"],
                    [""],
                    ["null"],
                    ["null"],
                    { "Item": "nexacro._MegaMenuItemControl", "Static": "nexacro.Static" }
                );

                tmp._loadFormatFromDOM("default", "");
                tmp._makeAutoBands();

                // get null item
                var item = tmp._getItem("default");

                ctxt = [item._getBand("null", false)];
                itemchild = item._getBandChilds("null");
            }

            if (itemchild && itemchild[0])
            {
                itemchild[0].text = this._getStringResourceProperty(this._p_nodatatext);
                itemchild[0].background = "transparent " + this._p_nodataimage + " center center no-repeat";
            }

            return this._null_ctxts = ctxt;
        }
    };
    */

    // TODO : NullBand 속성추가 및 CustomFormat에 NullBand 추가
    _pMegaMenu._onGetCustomCtxtNullBand = function (band, format, ctxt)
    {
        return ctxt;
    };
    _pMegaMenu._onGetCustomCtxtNullCtrl = function (band, format, ctxt)
    {
        /*
        //  if (ctxt && ctxt.attrs && nexacro._isArray(ctxt.attrs))
        {
            ctxt.attrs.push({ "name": "text", "value": this._getStringResourceProperty(this._p_nodatatext) });
            ctxt.attrs.push({ "name": "background", "value": "transparent " + this._p_nodataimage + " center center no-repeat" });
        }
        */
        return ctxt;
    };

    /*
    // analyze
    _pMegaMenu._analyzeKeyMatrix = function ()
    {
        var ctxt = this._getCtxtBaseInfo();
        var items = ctxt ? ctxt._items : null;

        if (!items || !items["main"])
            return;

        var slot_cnt = this._getPanelSlotCount(0);

        for (var i = 0; i < slot_cnt; i++)
        {
            this._analyzeKeyMatrixCtrlSameItem(this._items[i]);
        }
    };

    _pMegaMenu._getKeyActionOtheritemCtrl = function (ctrl, ohteritem, direction)
    {
        var ctrls = this._getItemCtrls(ohteritem);
        if (!ctrls)
            return -1;

        var ctrl1_x, ctrl1_y, ctrl2, ctrl2_x, ctrl2_y;

        var i, n;
        var dir;
        var diridx = (direction == "l" || direction == "r") ? 0 : 1;
        var min = Infinity;
        var same = null;
        var key_direction = -1;

        ctrl1_x = ctrl._adjust_left + (ctrl._adjust_width / 2);
        ctrl1_y = ctrl._adjust_top + (ctrl._adjust_height / 2);

        for (i = 0, n = ctrls.length; i < n; i++)
        {
            ctrl2 = ctrls[i];
            ctrl2_x = ctrl2._adjust_left + (ctrl2._adjust_width / 2);
            ctrl2_y = ctrl2._adjust_top + (ctrl2._adjust_height / 2);

            switch (direction)
            {
                case "l":
                    ctrl2_x -= ohteritem._adjust_width;
                    break;
                case "t":
                    ctrl2_y -= ohteritem._adjust_height;
                    break;
                case "r":
                    ctrl2_x += ctrl.parent._adjust_width;
                    break;
                case "b":
                    ctrl2_y += ctrl.parent._adjust_height;
                    break;
            }

            var result = this._calcCtrlAngleDistance(ctrl1_x, ctrl1_y, ctrl2_x, ctrl2_y);

            result.idx = i;
            result.x = ctrl2_x;
            result.y = ctrl2_y;

            dir = result.direction[diridx];

            if (dir == direction)
            {
                if (min > result.distance)
                {
                    same = [];
                    same.push(result);
                    min = result.distance;
                }
                else if (min == result.distance)
                {
                    if (same)
                    {
                        same.push(result);
                    }
                }
            }
        }

        if (same)
        {
            var neer = Infinity;

            if (diridx == 0)
            {
                for (i = 0, n = same.length; i < n; i++)
                {
                    var h = Math.abs(same[i].y - ctrl1_y);

                    if (neer > h)
                    {
                        neer = h;
                        key_direction = same[i].idx;
                    }
                }
            }
            else
            {
                for (i = 0, n = same.length; i < n; i++)
                {
                    var w = Math.abs(same[i].x - ctrl1_x);

                    if (neer > w)
                    {
                        neer = w;
                        key_direction = same[i].idx;
                    }
                }
            }
        }

        return key_direction;
    };

    _pMegaMenu._analyzeKeyMatrixCtrlSameItem = function (itemctrl)
    {
        if (!itemctrl)
            return;

        var ctrls = this._getItemCtrls(itemctrl);
        if (!ctrls)
            return;

        var i, j, k, n, nn;
        var w, h;
        var ctrl1, ctrl1_x, ctrl1_y, ctrl2, ctrl2_x, ctrl2_y;
        for (i = 0, n = ctrls.length; i < n; i++)
        {
            var key_direction = { left: -1, up: -1, right: -1, down: -1 };
            var min = { l: Infinity, t: Infinity, r: Infinity, b: Infinity };
            var same = { l: null, t: null, r: null, b: null };

            ctrl1 = ctrls[i];
            ctrl1_x = ctrl1._adjust_left + (ctrl1._adjust_width / 2);
            ctrl1_y = ctrl1._adjust_top + (ctrl1._adjust_height / 2);

            for (j = 0; j < n; j++)
            {
                if (i == j)
                    continue;

                ctrl2 = ctrls[j];
                ctrl2_x = ctrl2._adjust_left + (ctrl2._adjust_width / 2);
                ctrl2_y = ctrl2._adjust_top + (ctrl2._adjust_height / 2);

                // 1. ctrl1 기준 ctrl2의 방향, 거리 수집
                var result = this._calcCtrlAngleDistance(ctrl1_x, ctrl1_y, ctrl2_x, ctrl2_y);

                result.idx = j;
                result.x = ctrl2_x;
                result.y = ctrl2_y;

                // 2. 수집결과에서 같은 거리를 가진 ctrl들의 존재 유무 체크
                for (k = 0; k < 2; k++) // [0] - x, [1] - y
                {
                    var dir = result.direction[k];
                    if (dir != undefined)
                    {
                        if (min[dir] > result.distance)
                        {
                            same[dir] = [];
                            same[dir].push(result);
                            min[dir] = result.distance;
                        }
                        else if (min[dir] == result.distance)
                        {
                            same[dir].push(result);
                        }
                    }
                }
            }

            var neer;

            // 3. 같은 거리를 가진 ctrl들이 존재할 경우, 해당 방향에서 가장 가까운 각도의 ctrl 수집
            if (same["l"])
            {
                neer = Infinity;
                for (j = 0, nn = same["l"].length; j < nn; j++)
                {
                    h = Math.abs(same["l"][j].y - ctrl1_y);

                    if (neer > h)
                    {
                        neer = h;
                        key_direction.left = same["l"][j].idx;
                    }
                }
            }

            if (same["t"])
            {
                neer = Infinity;
                for (j = 0, nn = same["t"].length; j < nn; j++)
                {
                    w = Math.abs(same["t"][j].x - ctrl1_x);

                    if (neer > w)
                    {
                        neer = w;
                        key_direction.up = same["t"][j].idx;
                    }
                }
            }

            if (same["r"])
            {
                neer = Infinity;
                for (j = 0, nn = same["r"].length; j < nn; j++)
                {
                    h = Math.abs(same["r"][j].y - ctrl1_y);

                    if (neer > h)
                    {
                        neer = h;
                        key_direction.right = same["r"][j].idx;
                    }
                }
            }

            if (same["b"])
            {
                neer = Infinity;
                for (j = 0, nn = same["b"].length; j < nn; j++)
                {
                    w = Math.abs(same["b"][j].x - ctrl1_x);

                    if (neer > w)
                    {
                        neer = w;
                        key_direction.down = same["b"][j].idx;
                    }
                }
            }

            ctrl1._refinfo._key_direction = key_direction;
        }
    };

    _pMegaMenu._calcCtrlAngleDistance = function (ctrl1_x, ctrl1_y, ctrl2_x, ctrl2_y)
    {
        var w = ctrl2_x - ctrl1_x;
        var h = ctrl2_y - ctrl1_y;
        var distance = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
        var angle = 180 * Math.atan2(w, -h) / Math.PI;
        var dir = new Array(2);

        if (angle < -45 && angle > -135)
        {
            dir[0] = "l";
        }
        else if (angle > -45 && angle < 45)
        {
            dir[1] = "t";
        }
        else if (angle > 45 && angle < 135)
        {
            dir[0] = "r";
        }
        else if (angle == -45)
        {
            dir[0] = "l";
            dir[1] = "t";
        }
        else if (angle == 45)
        {
            dir[0] = "r";
            dir[1] = "t";
        }
        else if (angle == 135)
        {
            dir[0] = "r";
            dir[1] = "b";
        }
        else if (angle == -135)
        {
            dir[0] = "l";
            dir[1] = "b";
        }
        else
        {
            dir[1] = "b";
        }

        return { direction: dir, distance: distance };
    };
    */
    // 확인 : format은 내부처리로 변경
    // [component.formats:set]   
    _pMegaMenu.set_formats = function (str)
    {
        if (this._p_formats != str)
        {
            // set property value
            this._p_formats = str;

            // [component.formats:apply]           
            this.on_apply_formats();
        }
    };

    // [component.formats:apply]   
    _pMegaMenu.on_apply_formats = function ()
    {
        if (this._is_created)
        {
            this._setFormats(this._onGetStrFormats());
            this._updateFormats();

            this._recreateItems();
        }
    };

    // [component.formats:clear] 
    _pMegaMenu.on_clear_formats = function ()
    {
        if (!this._is_created)
            return;

        // [component.formats:clear] 
        this._clearFormats();
    };

    // [component.formats.formatid:set]   
    _pMegaMenu.set_formatid = function (v)
    {
        if (v && v != this._p_formatid)
        {
            // set property value
            this._p_formatid = v;

            // [component.formats.formatid:apply]
            this.on_apply_formatid();
        }
    };
    // [component.formats.formatid:apply]   
    _pMegaMenu.on_apply_formatid = function ()
    {
        if (!this._is_created)
            return;

        this._changeFormatId(this._p_formatid);

        this._recreateItems();
    };

    // [component.formats.formatid:clear]   
    _pMegaMenu.on_clear_formatid = function ()
    {
        if (!this._is_created)
            return;

        // [component.formats.formatid:clear] 
        this._clearFormatId();
    };

    /*
    // [component.layout.formats.prop:get]
    _pMegaMenu._onGetFormatsProp  = function () { return "formats"; };
    _pMegaMenu._onGetFormatIdProp = function () { return "formatid"; };
    */
   
    // [component.formats.userformat:init]   
    _pMegaMenu._onGetFormatExProps = function ()
    {
        return ["useriteminfo", "useritemformats"];
    };

    // [component.formats.userformat:set]   
    _pMegaMenu.set_useriteminfo       = function (v) { if (v && v != this._p_useriteminfo)      { this._p_useriteminfo    = v;    this.on_apply_userformatprop(); } };    
    _pMegaMenu.set_useritemformats    = function (v) { if (v && v != this._p_useritemformats)   { this._p_useritemformats = v;    this.on_apply_userformatprop(); } }; 

    // [component.formats.userformat:apply]   
    _pMegaMenu.on_apply_userformatprop = function ()
    {
        if (this._is_created)
        {
            this._setUserFormat(this._p_useriteminfo, this._p_useritemformats);
            this._updateFormats();

            this._recreateItems();
        }
    };

    //===============================================================
    // nexacro.MegaMenu : InnerBind/FullBind
    //===============================================================

    // [상위 Component 처리]
    // value bind는 Simple Component 기본으로 제공
    // inner bind/full bind도 Complex Component에서 제공

    // [개별 Component 처리]
    // override 대상과 bind별 property/method 노출처리
    // bind 처리는 상위 interface를 사용

    // TODO: Interface Socketing으로 통합시킬것
    // 확인: FullBind ListView와 InnerBind MegaMenu에서 공통화부분은 ComplexComponent로 이전 할것
    // 확인: Property 변수를 직접사용하는 부분은 I/F에 맞게 변경 (.prop --> ._p_prop으로 변경)


    // [component.bind.databind:init]           // innerbind시 override
    _pMegaMenu._onGetBindDataProp   = function () { return "innerdataset"; };
    _pMegaMenu._onGetCodeProp       = function () { return "idcolumn"; };
    _pMegaMenu._onGetLevelProp      = function () { return "levelcolumn"; };
    _pMegaMenu._onGetGroupProp      = function () { return "typecolumn"; };
    _pMegaMenu._onGetCodeColumn     = function () { return this._p_idcolumn; };
    _pMegaMenu._onGetLevelColumn    = function () { return this._p_levelcolumn; };
    _pMegaMenu._onGetGroupColumn    = function () { return this._p_typecolumn; };

    // [component.bind.databind:init]               // innerbind시 override
    _pMegaMenu._onGetBindProps = function ()
    {
        return []; // ["startindex", "finalindex", "minlevel", "maxlevel", "extlevel"];  // level 속성 값은 별도 처리로 제외
    };

    // [component.bind.databind:init]           // innerbind시 override
    _pMegaMenu._onGetDataProps = function ()
    {
        return [
            "iconcolumn",                   // disp
            "captioncolumn",                // disp
            "descriptioncolumn",            // disp
            "badgecolumn",                  // disp
            "controltypecolumn",            // edit
            "controlvaluecolumn",           // edit
            "enablecolumn",                 // stat
            "userdatacolumn",               // user
            "navtargetcolumn",              // navigate
            "navurlcolumn",                 // navigate
            "navtargetpropertiescolumn",    // navigate
            "hotkeycolumn"                  // disp
        ];
    };
    _pMegaMenu._onGetDataColumns = function ()
    {
        return [
            this.iconcolumn,                // disp
            this.captioncolumn,             // disp
            this.descriptioncolumn,         // disp
            this.badgecolumn,               // edit
            this.controltypecolumn,         // edit
            this.controlvaluecolumn,        // edit
            this.enablecolumn,              // stat
            this.userdatacolumn,            // user
            this.navtargetcolumn,           // navigate
            this.navurlcolumn,              // navigate
            this.navtargetpropertiescolumn, // navigate
            this.hotkeycolumn               // hotkey
        ];
    };

    // [component.bind.databind:init]               // innerbind/fullbind시 override
    _pMegaMenu._onGetBindDataSource = function ()
    {
        // return dataset string property or json/xml ctxt
        return  ( this._is_xmlbind || this._is_jsonbind ) 
                ? this._p_innerdatactx 
                : this._p_innerdataset;
    };

    // [component.bind.innerbind.dataset:set]   
    _pMegaMenu.set_innerdataset = function (dataset)
    {
        if (this._p_innerdataset != dataset)
        {
            // [component.bind.dataset:setid]
            if (dataset && typeof dataset != "string" && dataset.parent == this)
                this._p_innerdataset = dataset;                         // component innerdataset
            else
                this._p_innerdataset = this._getBindDataID(dataset);    // form/global dataset

            // [component.bind.dataset:set]
            this._setBindDataSource();

            // [component.bind.dataset:apply]           
            this.on_apply_innerdataset();
        }
    };

    // [component.bind.innerbind.dataset:apply]   
    _pMegaMenu.on_apply_innerdataset = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.bind.innerbind:recreate]
        this._recreateItems();
    };

    // [component.bind.innerbind.binddataset:detach]   
    _pMegaMenu.on_clear_innerdataset = function ()
    {
        this._clearBindDataSource();

        this._p_innerdataset = null;
    };

    // [component.bind.innerbind.datactx:set]   
    _pMegaMenu.set_innerdatactx = function (datactx)
    {
        if (this._p_innerdatactx != datactx)
        {
            // [component.bind.datactx:setid]
            this._p_innerdatactx = datactx;

            // [component.bind.datactx:set]
            this._setBindDataSource();

            // [component.bind.datactx:apply]           
            this.on_apply_innerdatactx();
        }
    };

    // [component.bind.innerbind.datactx:apply]   
    _pMegaMenu.on_apply_innerdatactx = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.bind.innerbind:recreate]
        this._recreateItems();
    };

    // [component.bind.innerbind.datactx:detach]   
    _pMegaMenu.on_clear_innerdatactx = function ()
    {
        this._clearBindDataSource();

        this._p_innerdatactx = null;
    };

    // [component.bind.innerbind.level:min]   
    _pMegaMenu.set_minlevel = function (level)
    {
        if (this._p_minlevel != level)
        {
            this._p_minlevel = level;

            this.on_apply_leveldepthstart();            
        }
    };
    // [component.bind.innerbind.level:max]   
    _pMegaMenu.set_maxlevel = function (level)
    {
        if (this._p_maxlevel != level)
        {
            this._p_maxlevel = level;

            this.on_apply_leveldepthstart();            
        }
    };
    // [component.bind.innerbind.level:min]   
    _pMegaMenu.set_extlevel = function (level)
    {
        if (this._p_extlevel != level)
        {
            this._p_extlevel = level;

            this.on_apply_leveldepthstart();            
        }
    };    
    /*
    // [component.bind.innerbind.index:start]   
    _pMegaMenu.set_startindex = function (index)
    {
        if (this._p_startindex != index)
        {
            this._p_startindex = index;

            this.on_apply_leveldepthstart();            
        }
    };
    // [component.bind.innerbind.index:final]   
    _pMegaMenu.set_finalindex = function (index)
    {
        if (this._p_finalindex != index)
        {
            this._p_finalindex = index;

            this.on_apply_leveldepthstart();            
        }
    };
    */
    // [component.bind.innerbind.level:apply]   
    _pMegaMenu.on_apply_leveldepthstart = function ()
    {
        if (!this._is_created)
            return;

        this._onApplyLevelProperties();
        this._recreateItems();
    };

    // [component.bind.innerbind.codecolumn:set]   
    _pMegaMenu.set_idcolumn = function (v)
    {
        if (v != this._p_idcolumn)
        {
            // set property value
            this._p_idcolumn = v;

            // [component.bind.codecolumn:set]
            this._setCodeColumn();
            // [component.bind.codecolumn:apply]
            this.on_apply_codecolumn();
        }
    };
    // [component.bind.innerbind.levelcolumn:set]   
    _pMegaMenu.set_levelcolumn = function (v)
    {
        if (v != this._p_levelcolumn)
        {
            // set property value
            this._p_levelcolumn = v;

            // [component.bind.levelcolumn:set]
            this._setLevelColumn();
            // [component.bind.levelcolumn:apply]
            this.on_apply_levelcolumn();
        }
    };
    _pMegaMenu.set_typecolumn = function (v)
    {
        if (v != this._p_typecolumn)
        {
            // set property value
            this._p_typecolumn = v;

            // [component.bind.groupcolumn:set]
            this._setGroupColumn();
            // [component.bind.groupcolumn:apply]
            this.on_apply_groupcolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu.set_iconcolumn = function (v)
    {
        if (v != this._p_iconcolumn)
        {
            // set property value
            this._p_iconcolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu.set_captioncolumn = function (v)
    {
        if (v != this._p_captioncolumn)
        {
            // set property value
            this._p_captioncolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu.set_descriptioncolumn = function (v)
    {
        if (v != this._p_descriptioncolumn)
        {
            // set property value
            this._p_descriptioncolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu.set_badgecolumn = function (v)
    {
        if (v != this._p_badgecolumn)
        {
            // set property value
            this._p_badgecolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pMegaMenu.set_controltypecolumn = function (v)
    {
        if (v != this._p_controltypecolumn)
        {
            // set property value
            this._p_controltypecolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pMegaMenu.set_controlvaluecolumn = function (v)
    {
        if (v != this._p_controlvaluecolumn)
        {
            // set property value
            this._p_controlvaluecolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pMegaMenu.set_enablecolumn = function (v)
    {
        if (v != this._p_enablecolumn)
        {
            // set property value
            this._p_enablecolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]   
    _pMegaMenu.set_userdatacolumn = function (v)
    {
        if (v != this._p_userdatacolumn)
        {
            // set property value
            this._p_userdatacolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu.set_hotkeycolumn = function (v)
    {
        if (v != this._p_hotkeycolumn)
        {
            // set property value
            this._p_hotkeycolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_datacolumn();
        }
    };
    // [component.bind.innerbind.navcolumn:set]
    _pMegaMenu.set_navtargetcolumn = function (v)
    {
        if (v != this._p_navtargetcolumn)
        {
            // set property value
            this._p_navtargetcolumn = v;

            // [component.bind.navcolumn:set]
            this._setDataColumn();
            // [component.bind.navcolumn:apply]
            this.on_apply_navcolumn();
        }
    };
    // [component.bind.innerbind.navcolumn:set]
    _pMegaMenu.set_navurlcolumn = function (v)
    {
        if (v != this._p_navurlcolumn)
        {
            // set property value
            this._p_navurlcolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_navcolumn();
        }
    };
    // [component.bind.innerbind.navcolumn:set]
    _pMegaMenu.set_navtargetpropertiescolumn = function (v)
    {
        if (v != this._p_navtargetpropertiescolumn)
        {
            // set property value
            this._p_navtargetpropertiescolumn = v;

            // [component.bind.datacolumn:set]
            this._setDataColumn();
            // [component.bind.datacolumn:apply]
            this.on_apply_navcolumn();
        }
    };

    // [component.bind.innerbind.codecolumn:apply]   
    _pMegaMenu.on_apply_codecolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.valuebind:change]  
        this._applyValue();
    };
    // [component.bind.innerbind.levelcolumn:apply]   
    _pMegaMenu.on_apply_levelcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.layout.items:recreaet]
        this._recreateItems();
    };
    // [component.bind.innerbind.groupcolumn:apply]   
    _pMegaMenu.on_apply_groupcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.layout.items:recreaet]
        this._recreateItems();
    };
    // [component.bind.innerbind.datacolumn:apply]   
    _pMegaMenu.on_apply_datacolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.bind.innerbind.datacolumn:apply]   
        this._recreateItems();
    };
    // [component.bind.innerbind.datacolumn:apply]   
    _pMegaMenu.on_apply_navcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind:resetbind]
        this._resetBindInfo();

        // [component.bind.innerbind.datacolumn:apply]   
    //  this._recreateItems();
    };

    // [component.bind.innerbind.codecolumn:clear]   
    _pMegaMenu.on_clear_codecolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.codecolumn:clear]   
        this._clearCodeColumn();
    };
    // [component.bind.innerbind.levelcolumn:clear]   
    _pMegaMenu.on_clear_levelcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.levelcolumn:clear]   
        this._clearLevelColumn();
    };
    // [component.bind.innerbind.groupcolumn:clear]   
    _pMegaMenu.on_clear_groupcolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.groupcolumn:clear]   
        this._clearGroupColumn();
    };
    // [component.bind.innerbind.datacolumn:clear]
    _pMegaMenu.on_clear_datacolumn = function ()
    {
        if (!this._is_created)
            return;

        // [component.bind.innerbind.datacolumn:clear]   
        this._clearDataColumn();
    };

    /*
    // [component.bind.innerbind.codecolumn:set]
    _pMegaMenu._setCodeColumn = function ()
    {
        // set codecolumn
        if (this._databind)
            return this._databind._setCodeColumn(this._onGetCodeColumn(), this._onGetCodeProp());
    };
    // [component.bind.innerbind.codecolumn:clear]
    _pMegaMenu._clearCodeColumn = function ()
    {
        // clear codecolumn
        if (this._databind)
            return this._databind._clearCodeColumn();
    };

    // [component.bind.innerbind.levelcolumn:set]
    _pMegaMenu._setLevelColumn = function ()
    {
        // set levelcolumn
        if (this._databind)
            return this._databind._setLevelColumn(this._onGetLevelColumn(), this._onGetLevelProp());
    };
    // [component.bind.innerbind.levelcolumn:clear]
    _pMegaMenu._clearLevelColumn = function ()
    {
        // clear CodeColmn
        if (this._databind)
            return this._databind._clearLevelColumn();
    };

    // [component.bind.innerbind.groupcolumn:set]
    _pMegaMenu._setGroupColumn = function ()
    {
        // set levelcolumn
        if (this._databind)
            return this._databind._setGroupColumn(this._onGetGroupColumn(), this._onGetGroupProp());
    };
    // [component.bind.innerbind.levelcolumn:clear]
    _pMegaMenu._clearGroupColumn = function ()
    {
        // clear CodeColmn
        if (this._databind)
            return this._databind._clearGroupColumn();
    };

    // [component.bind.innerbind.datacolumn:set]
    _pMegaMenu._setDataColumn = function ()
    {
        // set DataColmn, DataColumnInfo
        if (this._databind)
            return this._databind._setDataColumn(this._onGetDataColumns(), this._onGetDataProps());
    };
    // [component.bind.innerbind.datacolumn:clear]
    _pMegaMenu._clearDataColumn = function ()
    {
        // clear DataColmn
        if (this._databind)
            return this._databind._clearDataColumn();
    };
    */

    // bind event
    /*
    _pMegaMenu._callback_onload = function (obj, e)
    {
        // [component.bind.rowcount:reset]
        this._rowcount = this._getBindCount();

        // default callback
        nexacro.ComplexComponent.prototype._callback_onload(obj, e);
    };

    _pMegaMenu._callback_onrowsetchanged = function (obj, e)
    {
        // [component.bind.rowcount:reset]
        this._rowcount = this._getBindCount();

        // default callback
        nexacro.ComplexComponent.prototype._callback_onrowsetchanged(obj, e);
    };
    _pMegaMenu._callback_onrowposchanged = function (obj, e)
    {
        if (!this._is_created)
            return;

        if (this._beginChangeRowPosition())
            return;

        var currsel = this.getSelect();
        var sel = this._onGetSelectArgument(obj.rowposition, currsel.item, currsel.ctrl);
        this._onSetCurrentSelect(sel);

        if (this._finalChangeRowPosition()) return;
    };
    */
    //===============================================================
    // nexacro.MegaMenu : Layout/Panel
    //===============================================================

    // [component.composite.layout.panel:useset]
    _pMegaMenu._is_panel_layout = true;

    // [component.layout.panel:init]
    _pMegaMenu._onInitPanelLayout = function ()
    {
        var panel = this._getPanel();

        if (panel)
        {
            // TODO: RuleBased Socketing 처리
            panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_POSITION);

            panel._setSizeInfoRefPanel(null, this._getRefPanelType());                              // nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
            panel._setGroupingSubPanel(null, this._getSubGroupType(), this._getSubMenuPlace(),      // nexacro._PanelConst.GROUPING_SUBPLACE_NONE
                                             this._getSubRootLevel(), this._getSubLeafLevel());     // popupmenu:root==leaf, groupmenu:root!=leaf   

            panel._setSlotArrangeType(this._getArrangeType(), this._isRtl());                       // _rowfirst | _arrange;
            panel._setSlotOverFlowType(this._getOverflowType());                                    // _overflow | _partslot;

            panel._setSlotShowItemType(this._getItemShowType());                                    // _show header/footer/divider/group
            panel._setSlotShowItemSize(this._getMenuItemSize(),   this._getGroupItemSize(),
                                       this._getHeaderItemSize(), this._getFooterItemSize(),
                                       this._getDividerItemSize());

            panel._setSlotSelectorType(this._getSelectorType());                                    // nexacro._PanelConst.SLOT_SELECTORTYPE_NONE

            panel._setSlotBandFixType(true, false, true);
            panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
            panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_DEFAULT);
        //  panel._setSlotAutoFillType(nexacro._PanelConst.SLOT_AUTOFILLTYPE_DEFAULT);
            panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

            panel._setFitToContentType(this._getFitToContentType());
            panel._setPanelLimitHeight(this._getPanelLimitHeight());
        }
    };
    // [component.layout.panel.slot:setfixed]
    _pMegaMenu._onSetPanelFixedInfo = function (counthead, counttail)
    {
        var panel = this._panel;

        if (panel)
        {
            panel._setPanelFixedSlotCount(counthead && this._isShowHeaderFixed() ? 1 : 0, counttail && this._isShowFooterFixed() ? 1 : 0);
        }

        // 추가 Fixed 처리는 ComplexComponent에서 처리
        /*
        if (this._use_scrollmanager && this._scrollmanager)
        {
            this._scrollmanager._setItemScrollFixLeadCount(counthead);
            this._scrollmanager._setItemScrollFixTailCount(counttail);
        }
        */
    };
    // [component.layout.panel.level:setlevel]
    _pMegaMenu._onApplyLevelProperties = function ()
    {
        // Popup/Embed Sub는 내부에서 미리 설정됨
        if (!this.__isMain()) return;

        var sttindex = this._p_startindex !== undefined ? parseInt(this._p_startindex) : 0;
        var finindex = this._p_finalindex !== undefined ? parseInt(this._p_finalindex) : undefined;
        var minlevel = this._p_minlevel   !== undefined ? parseInt(this._p_minlevel)   : this._getBindRootLevel();
        var extlevel = this._p_extlevel   !== undefined ? parseInt(this._p_extlevel)   : this._getBindLeafLevel();
        var maxlevel = this._p_maxlevel   !== undefined ? parseInt(this._p_maxlevel)   : Number.POSITIVE_INFINITY;

        // set sub/fin/ext level
        this._setSubFinLayoutLevel(minlevel > 0, minlevel >= extlevel, minlevel > extlevel);

        // set sub/fin/ext level
        this._initPanelMainStartInfo(sttindex, minlevel, maxlevel, finindex);        
    };

    /*
    // [component.layout.panel:subinit]
    _pMegaMenu._onInitSubPanelNCChildLayout = function (ncchild, panel)
    {
        // set ncchild panel link
    };
    // [component.layout.panel:subinit]
    _pMegaMenu._onInitSubPanelChildLayout = function (child, panel)
    {
        // set parent/child panel link
    };
    // [component.layout.panel:subinit]
    _pMegaMenu._onInitSubPanelItemsLayout = function (item, panel, binddata, index)
    {
    };
    // [component.layout.panel.popup:subinit]
    _pMegaMenu._onInitPopupSubPanelNCChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]
    _pMegaMenu._onInitPopupSubPanelChildLayout = function (parent, startindex, startlevel)
    {
    };
    // [component.layout.panel.popup:subinit]
    _pMegaMenu._onInitPopupSubPanelItemsLayout = function (parent, startindex, startlevel)
    {
    };
    */

    // 확인 : ComplexComponent로 이동
    /*
    _pMegaMenu._calcItemScrollViewStart = function (pos, row, col, rowfirst)
    {
        // TODO : Head/Final 포함
        var expandtype = this._p_itemexpandtype;
        if (expandtype == "expand" || expandtype == "accordion")
        {
            if (this._use_scrollmanager && this._scrollmanager)
            {
                var start = this._getItemScrollViewStart();
                if (start < 0)
                    start = 0;

                var calc_row = rowfirst ? (start / row) : (start / col);
                var scroll_direction = "forward";	// forward, backward

                if (rowfirst)
                {
                    var iw = this._getItemWidth(0);

                    if (iw <= 0)
                        return 0;
                    else
                        return Math.floor(pos / iw) * (row ? row : 1);
                }
                else
                {
                    var bind_count = this._getBindCount();

                    var i = 0;
                    var len = start + col > bind_count ? bind_count : start + col;
                    var item_top = 0;
                    var item_bottom = 0;
                    var item_maxheight_row = 0;

                    for (i = start; i < len; i++)
                    {
                        var item = this._getItem(i);
                        if (item)
                        {
                            item_maxheight_row = Math.max(item_maxheight_row, this._getItemHeight(i, -9));

                            if (i === start)
                            {
                                if (nexacro._isArray(item))
                                {
                                    item_top = item[0].top;
                                }
                                else
                                {
                                    item_top = item.top;
                                }
                            }
                        }
                    }

                    if (item_maxheight_row <= 0)
                    {
                        return start;
                    }

                    if (pos == item_top)
                    {
                        return start;
                    }

                    item_bottom = item_top + item_maxheight_row;

                    if (pos < item_bottom)
                    {
                        scroll_direction = "backward";
                    }

                    if (scroll_direction == "forward")
                    {
                        while (pos >= item_bottom)
                        {
                            start += col;
                            item_maxheight_row = 0;

                            // 다음 row에서 최대 높이를 찾음
                            for (i = start; i < start + col; i++)
                            {
                                item_maxheight_row = Math.max(item_maxheight_row, this._getItemHeight(i, -9));
                            }

                            if (item_maxheight_row > 0)
                            {
                                item_bottom += item_maxheight_row;
                                calc_row++;
                            }
                            else
                            {
                                break;
                            }
                        }
                    }
                    else
                    {
                        while (pos < item_top)
                        {
                            start -= col;
                            item_maxheight_row = 0;

                            // 이전row에서 최대높이를 찾음
                            for (i = start; i < start + col; i++)
                            {
                                item_maxheight_row = Math.max(item_maxheight_row, this._getItemHeight(i, -9));
                            }

                            if (item_maxheight_row > 0)
                            {
                                item_top -= item_maxheight_row;
                                calc_row--;
                            }
                            else
                            {
                                break;
                            }
                        }
                    }
                }
                return calc_row * (col ? col : 1);
            }
        }
        else
        {
            return nexacro.ComplexComponent.prototype._calcItemScrollViewStart.call(this, pos, row, col, rowfirst);
        }
    };

    _pMegaMenu._calcItemScrollViewCount = function (pos, row, col, rowfirst)
    {
        // up
        // TODO : Head/Final 포함
        // TODO : autosize pos 기준 count
        var expandtype = this._p_itemexpandtype;
        if (expandtype == "expand" || expandtype == "accordion")
        {
            if (this._use_scrollmanager && this._scrollmanager)
            {
                var bindcount = this._getBindCount();

                if (rowfirst)
                {
                    var cw = this._getClientWidth();
                    var iw = this._getItemArrWidth(0, -9, cw);

                    if (cw <= 0 || iw <= 0)
                        return 0;
                    else
                        return Math.ceil(cw / iw) * (row ? row : 1);
                }
                else
                {
                    var rc = 0;

                    var ch = this._getClientHeight();
                    var ih = 0;

                    var ii = pos > 0 ? pos : 0;
                    var itemsize = this._getItemArrHeight(ii, -9, ch);

                    if (ch <= 0 || itemsize <= 0)
                    {
                        return 0;
                    }
                    else
                    {
                        while (ch >= itemsize)
                        {
                            for (var i = 0; i < col; i++)
                            {
                                ii++;
                                if (ii >= bindcount)
                                {
                                    ih = Math.max(ih, this._getItemArrHeight(0, -9, ch));
                                }
                                else
                                {
                                    ih = Math.max(ih, this._getItemArrHeight(ii, -9, ch));
                                }
                            }

                            if (ih > 0)
                            {
                                itemsize += ih;
                                rc++;
                            }
                            else
                            {
                                break;
                            }
                        }

                        rc++;

                        return rc * (col ? col : 1);

                    }
                }
            }
        }
        else
        {
            return nexacro.ComplexComponent.prototype._calcItemScrollViewCount.call(this, pos, row, col, rowfirst);
        }
    };

    _pMegaMenu._calcItemScrollInfo = function (pos, rowfirst)
    {
        //==================================================================================
        // MegaMenu 기준 over item calc
        //==================================================================================

        if (this._use_scrollmanager)
        {
            var cn = this._getItemViewCountRow(rowfirst);
            var co = this._getItemViewCountCol(rowfirst);

            if (!cn || !co)
                return undefined;

            var fullc = this._getBindCount();
            var start = this._getItemScrollViewStart(); if (start < 0) start = 0;
            var viewc = this._getItemScrollViewCount();
            var prevc = this._getItemScrollPrevCount();
            var nextc = this._getItemScrollNextCount();

            var overc;

            if (pos >= 0 && viewc >= 0)
            {
                var newps = this._calcItemScrollViewStart(pos, cn, co, rowfirst);
                var expandtype = this._p_itemexpandtype;
                if (expandtype == "expand" || expandtype == "accordion")
                {
                    viewc = this._calcItemScrollViewCount(newps, cn, co, rowfirst);
                }
                var diffc = newps - start;

                start = newps;

                prevc += diffc;
                nextc -= diffc;

                overc = nextc < viewc || prevc < viewc ? viewc : 0;     // over 기준 정하는 부분
                if (overc)
                {
                    if (prevc < viewc)
                    {
                        prevc = viewc;
                        nextc = viewc;

                        var diffp = start - prevc;
                        if (diffp < 0)
                        {
                            prevc += diffp;
                            nextc -= diffp;
                        }

                        if (prevc < 0)
                        {
                            prevc = 0;
                        }
                    }

                    if (nextc < viewc)
                    {
                        prevc = viewc;
                        nextc = viewc;

                        var diffn = fullc - (start + viewc + nextc);
                        if (diffn < 0)
                        {
                            nextc += diffn;
                            prevc -= diffn;
                        }

                        if (nextc < 0)
                        {
                            nextc = 0;
                        }
                    }
                }
            }
            else
            {
                var index = 0;
                var count = 0;

                if (viewc < 0)
                {
                    if (cn <= 0) cn = 1;
                    if (co <= 0) co = 1;

                    viewc = this._calcItemScrollViewCount(-1, cn, co, rowfirst);
                    nextc = viewc * (this._add_partitem + 1);
                    prevc = 0;
                }
                else
                {
                    viewc = cn * co;
                    prevc = nextc = viewc * this._add_partitem;
                }

                index = start - prevc;
                count = viewc + prevc + nextc;

                if (index < 0)
                {
                    count += index;
                    prevc += index; if (prevc < 0) prevc = 0;
                    index = 0;
                }

                overc = (index + count) - fullc;

                if (overc > 0)
                {
                    nextc -= overc;
                    if (nextc < 0)
                    {
                        nextc = 0;
                    }
                }

                overc = undefined;
            }

            this._setItemScrollViewStart(start);
            this._setItemScrollViewCount(viewc);
            this._setItemScrollPrevCount(prevc);
            this._setItemScrollNextCount(nextc);

            this._resetItemScrollFullSize(rowfirst);

            return overc;
        }

        return 0;
    };
    */
    /*
        _pMegaMenu._movePanelItemSlot = function (ctrls, start, count, prevc, nextc)
        {
            //==================================================================================
            // start + prev + next + count 에 해당하는 slot에 item control move
            // return true  : this._showPanelItemSlot 수행 안함.
            // reutrn false : this._showPanelItemSlot 수행함.
    
            // TODO : MegaMenu 전용 interface. ComplexComponent에 요구사항이 있을시 도입 검토.
            //==================================================================================
    
            var panel = this._panel;
            if (panel && this._use_partitem && ctrls)
            {
                // 실제 생성된 item 갯수
                var itemscount = ctrls.filter(function (ctrl, index, array) { if (ctrl) return true; }, this).length;
    
                // control 기준 체크. 실제로 생성된 item이 없으면 move할게 없음
                if (!itemscount)
                    return false;
    
                var moved = true;
                var enough = true;
    
                var slotindex = 0;
                var baseindex = 0;
    
                var bindcount = this._getBindCount();
                var slotcount = 0;
    
                var slot, slot_empty;
                var slot_movable_idx;
                var slot_movable_idxArr = new Array();
    
                slotindex = (!start || start < 0) ? baseindex : Math.max(baseindex + start - prevc, 0);
                slotcount = (!count || count < 0) ? bindcount : Math.min(slotindex + count + prevc + nextc, bindcount);
    
                for (var i = 0; i < bindcount; i++)
                {
                    slot = panel._getPanelSlot(i);
                    slot_empty = slot ? !slot._isNonEmptyTarget(slot._getSlotTarget()) : false;
                    if (!slot_empty)
                    {
                        if (i < slotindex || i >= slotcount) slot_movable_idxArr.push(i);
                    }
                }
    
                for (; slotindex < slotcount; slotindex++)
                {
                    slot = panel._getPanelSlot(slotindex);
                    slot_empty = !slot._isNonEmptyTarget(slot._getSlotTarget());
                    if (slot_empty)
                    {
                        slot_movable_idx = slot_movable_idxArr.shift();
                        if (!nexacro._isNull(slot_movable_idx))
                        {
                            panel._getPanelSlot(slot_movable_idx)._clearSlotTarget();
                            slot._placeSlotTarget(this._getItem(slot_movable_idx));
    
                            moved = this._moveItem(slot_movable_idx, slotindex);
                        }
                        else
                        {
                            enough = false;
                        }
                    }
                }
    
                return moved & enough;
            }
    
            return false;
        };
    
        _pMegaMenu._trackPanelItemSlot = function (action)
        {
            //==================================================================================
            //  cover + action case에 따라 Apper, Ready 결정
            //  cover + action case에 따라 Sync,  Async 결정
            //==================================================================================
    
            var usecover = this._p_showcover;
            var manager = this._scrollmanager;
    
            if (!manager) return;
    
            switch (action)
            {
                case "pagemove":
                    if (usecover)
                    {
                        this._callbackApper();
                        manager._callbackReady(this, this._callbackReady, true);
                    }
                    break;
                case "trackstart":
                    if (usecover)
                    {
                        manager._actionTrackCover(action);
                        manager._actionTrackItems(action);
                    }
                    break;
                case "trackmove":
                    if (usecover)
                    {
                        manager._actionTrackCover(action);
                        manager._actionTrackItems(action);
                    }
                    else
                    {
                        this._callbackApper();
                    }
                    break;
                case "trackend":
                    if (usecover)
                    {
                        manager._actionTrack(action, this, this._callbackApper, this._callbackPause, this._callbackClose);
                    }
                    break;
                default:
                    manager._actionTrack(action, this, this._callbackApper, this._callbackPause, this._callbackClose);
                    break;
            }
        };
    
        _pMegaMenu._apperPanelItemSlot = function (action, over)
        {
            //==================================================================================
            //  Apperance Item ( 보여주기 용도 )
            //  action : Item Focus, Item Select
    
            //  TODO : trigger 에 따라 apper가 다르게 수행되야 하는 경우
            //  Trigger Expample : reset, itemshow
            //==================================================================================
            if (isNaN(+over) === true)
            {
                over = null;
            }
    
            this._callbackApper(over);
        };
    
        _pMegaMenu._readyPanelItemSlot = function (action)
        {
            //==================================================================================
            //  cover + action case에 따라 ScrollManager Ready, Component Ready 수행여부 결정
    
            //  ScrollManager Ready : Trackcover, TrackItems ( action )
            //                        Component Ready        ( callback )
            //  Component Ready     : Component Ready        ( callback )
            //==================================================================================
    
            var usecover = this._p_showcover;
            var manager = this._scrollmanager;
    
            if (!manager) return;
    
            if (action == "trackwheel")
            {
                manager._callbackReady(this, this._callbackReady, true);
            }
            else
            {
                if (usecover)
                {
                    manager._actionReady(action, this, this._callbackReady);
                }
                else
                {
                    manager._callbackReady(this, this._callbackReady, true);
                }
            }
        };
    
        _pMegaMenu._callbackPause = function ()
        {
            if (this._use_partitem)
            {
                if (this._use_scrollmanager && this._scrollmanager)
                {
                    this._scrollmanager._actionTrackCover("trackpause");
                }
            }
        };
    
        _pMegaMenu._callbackClose = function ()
        {
            if (this._use_partitem)
            {
                if (this._use_scrollmanager && this._scrollmanager)
                {
                    this._scrollmanager._actionTrackItems("trackend");
                }
            }
        };
    
        _pMegaMenu._callbackApper = function (over)
        {
            //==============================
            // 현재 Scroll 위치에서 보여야할 Item 생성 ( Apperance )
            // item 이 생성만 하면 scroll frame이 점차 저하되므로, 일정 갯수에서 rotation 처리
            // item start : viewstart - prevcount
            // item count : viewcount + prevcount + nextcount
    
            // TODO : trackwheel event가 scroll eventinfo를 생성하지 않기때문에 앞에서 over를 계산하고 넘어와야함.
            //        trackwheel event를 다른 scroll eventflow와 맞춰야 over 계산이 간결해짐.
            //        scroll event 에서는 scroll eventinfo에 변경된 position이 있고, Component._vscroll_pos 에는 아직 적용이 안된상태
            //==============================
            if (this._use_partitem)
            {
                // Calc New Range
                if (over === undefined)
                {
                    over = this._isRowFirst() ?
                        this._calcItemScrollInfo(this._scrollmanager && this._scrollmanager.hscrollinfo ? this._scrollmanager.hscrollinfo.pos : this._hscroll_pos, true) :
                        this._calcItemScrollInfo(this._scrollmanager && this._scrollmanager.vscrollinfo ? this._scrollmanager.vscrollinfo.pos : this._vscroll_pos, false);
                }
    
                if (over !== 0)
                {
                    var items = this._getItems();
    
                    // Get Slot Range
                    var viewstart = this._getItemScrollViewStart();
                    var viewcount = this._getItemScrollViewCount();
                    var prevcount = this._getItemScrollPrevCount();
                    var nextcount = this._getItemScrollNextCount();
    
                    // Move or Show Panel Slot PartItem
                    if (!this._movePanelItemSlot(items, viewstart, viewcount, prevcount, nextcount))
                    {
                        this._showPanelItemSlot(items, viewstart, viewcount, prevcount, nextcount, over, true);
                    }
    
                    this._resetStatus();
                }
            }
        };
    
        _pMegaMenu._callbackReady = function ()
        {
            //=========================================
            //  Component item이 정확하게 만들어진 상태
    
            //  TODO : Body의 make, hide 의 로직 변경 ( item 재사용하게 )
            //=========================================
            if (this._use_partitem)
            {
                var items = this._getItems();
                var rowfirst = this._isRowFirst();
    
                var viewstart = this._getItemScrollViewStart();
                var viewcount = this._getItemScrollViewCount();
                var prevcount = this._getItemScrollPrevCount();
                var nextcount = this._getItemScrollNextCount();
    
                // Make Head Ready Slot
                if (this._use_headitem)
                    this._makePanelItemSlot(items, viewstart, viewcount, prevcount, nextcount, -1, rowfirst);
    
                // Make Tail Ready Slot
                if (this._use_tailitem)
                    this._makePanelItemSlot(items, viewstart, viewcount, prevcount, nextcount, -2, rowfirst);
    
                // Make Body Ready Slot
                this._makePanelItemSlot(items, viewstart, viewcount, prevcount, nextcount, 0, rowfirst);
    
                // Make Scroll Manager Track
                this._resetLayoutTrack();
                this._resetScrollStatus();
    
                this._resetStatus();
            }
        };
    */
    //===============================================================
    // nexacro.MegaMenu : Layout/Divider
    //===============================================================

    // [Complex Component 처리]
    // Resize Element를 Divider의 구현요소로 이용해 Layout 크기변경을 처리한다.
    // Divider 동작은 각 Control에 크기변경을 주고 Panel에 의해 Layout 재처리된다.

    //===============================================================
    // nexacro.MegaMenu : Layout/Sizing
    //===============================================================

    // [Complex Component 처리]
    // Panel/Arrangemenet/Autosize/MinMax의 기능을 이용해 Layout 크기를 처리한다.
    // Arrangemenet/Autosize/MinMax의 결과가 크기변경을 주고 Panel에 의해 Layout 최종처리된다.

    //===============================================================
    // nexacro.MegaMenu : Layout/Move
    //===============================================================

    // [Complex Component 처리]
    // DragDrop의 구현요소로 이용해 Layout 이동변경을 처리한다.
    // DragDrop 동작은 각 Control에 위치변경을 주고 Panel에 의해 Layout 재처리된다.

    //===============================================================
    // nexacro.MegaMenu : Overflow
    //===============================================================

    // [Complex Component 처리]
    // Overflow는 Scroll/Expand 처리 제공

    //===============================================================
    // nexacro.MegaMenu : Scroll
    //===============================================================
    /*
    _pMegaMenu._on_beforescroll = function (prehpos, prevpos, posthpos, postvpos, evttype, evtkind)
    {
      //hpos = (hpos = (parseInt(hpos) | 0)) < 0 ? 0 : hpos;
        postvpos = (postvpos = (parseInt(postvpos) | 0)) < 0 ? 0 : postvpos;

        var bChangeVpos = prevpos != postvpos;
      // var bChangeHpos = prehpos != posthpos;

        if (bChangeVpos)
        {
            if (evtkind)
            {
                if (evtkind.indexOf("mousewheel") > -1)
                {
                    this._updateItemVScrollInfo(postvpos, "trackwheel", true);
                    this._changeItemVScrollInfo(postvpos, "trackwheel", false);
                }
            }
            else
            {
                this._updateItemVScrollInfo(postvpos, "none", true);
                this._changeItemVScrollInfo(postvpos, "none", false);
            }
        }

        return true;
    };

    _pMegaMenu._on_basic_onvscroll = function (obj, info)
    {
        //
    };

    _pMegaMenu._on_default_onvscroll = function (obj, info)
    {
        //==================================================================================
        // cover 사용시 container 움직이면 안됨
        //==================================================================================
        var usecover = this._p_showcover;

        switch (info.type)
        {
            case "track":
            case "trackstart":
            case "trackend":
            case "trackfirst":
            case "trackfirstover":
            case "tracklast":
            case "tracklastover":

                if (!usecover)
                {
                    this._control_element.setElementVScrollPos(info.pos);
                }
                break;
            default:
                {
                    this._control_element.setElementVScrollPos(info.pos);
                }
                break;
        }
    };

    _pMegaMenu._on_update_onvscroll = function (obj, info)
    {
        var usecover = this._p_showcover;

        switch (info.type)
        {
            case "pagedown":
            case "pageup":
            case "linedown":
            case "lineup":
            case "first":
            case "firstover":
            case "last":
            case "lastover":
                if (usecover)
                {
                    this._updateItemVScrollInfo(info.pos, "pagemove", true);
                }
                else
                {
                    this._updateItemVScrollInfo(info.pos, "trackmove", false);
                }
                break;
            default:
                {
                    this._updateItemVScrollInfo(info.pos, "trackmove", false);
                }
                break;
        }
    };

    _pMegaMenu._on_change_onvscroll = function (obj, info)
    {
        this._changeItemVScrollInfo(info.pos, "trackchange", false);
    };

    _pMegaMenu._on_finish_onvscroll = function (obj, info)
    {
        // 스크롤동작을 거칠게 할때 _on_default_onvscroll, _on_update_onvscroll을 건너뛰고 finish로 바로 들어올수 있다.
        // setElementVScrollPos을 마지막까지 수행해줘야될 필요가 있음.

        switch (info.type)
        {
            case "track":
            case "trackstart":
            case "trackend":
            case "trackfirst":
            case "trackfirstover":
            case "tracklast":
            case "tracklastover":
                {
                    this._control_element.setElementVScrollPos(info.pos);
                    this._updateItemVScrollInfo(info.pos, "trackend", true);
                }
                break;
            default:
                {
                    this._updateItemVScrollInfo(info.pos, "trackend", true);
                }
                break;
        }
    };
    */

    //===============================================================
    // nexacro.MegaMenu : Popup/Close & Expand/Collapse
    //===============================================================

    // [component.layout.panel.popup:init]             // 노출속성이 있다면 override
    _pMegaMenu._onInitPopupIndexLevel = function (popupslot, minlevel, maxlevel, extlevel) 
    {
        if (popupslot)
        {
            this.set_minlevel(minlevel);
            this.set_maxlevel(maxlevel);
            this.set_extlevel(extlevel);
        }
    }

    //===============================================================
    // nexacro.MegaMenu : Select (Single/Multi)
    //===============================================================
    _pMegaMenu._use_selector = false;               // Selector 지원시 설정
    _pMegaMenu._use_multiselector = false;          // MultiSelector 지원시 추가, 복수 Selector 처리
    _pMegaMenu._use_partsselector = false;          // PartsSelector 지원시 추가, 분할 Selector 처리

    /*
    _pMegaMenu._p_multiselect = false;              // MultiSelect 지원시 추가, Ctrl Action 처리 --> selecttype으로 통합
    _pMegaMenu._p_rangeselect = false;              // RangeSelect 지원시 추가, Drag Action 처리 --> selecttype으로 통합
    _pMegaMenu._p_levelselect = false;              // LevelSelect 지원시 추가, Path Action 처리 --> PathMethod로 직접제공
    */

    // Select Init
    /*
    _pMegaMenu._onInitSelect = function (selecttype, positcount, rangecount, multicount, unselvalue)
    {
        if (this._selectinfo)
        {
            if (selecttype === undefined) selecttype = this._is_items ? nexacro._SelectConst.SELECTTYPE_ITEM : nexacro._SelectConst.SELECTTYPE_COMP
            if (positcount === undefined) positcount = 3; // default { row:rowidx, sub:subidx, ctrl:ctrlidx } { row:rowidx, band:bandidx, col:coldx }
            if (rangecount === undefined) rangecount = this._p_rangeselect ?  2 : 1;
            if (multicount === undefined) multicount = this._p_multiselect ? -1 : 1;

            this._selectinfo._initSelect(selecttype, positcount, rangecount, multicount, unselvalue);
        }
    };
    */
    /*
    // Select Property
    _pMegaMenu.set_multiselect = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this._p_multiselect)
        {
            this._p_multiselect = _v;

            this.on_apply_multiselect();
        }
    };

    _pMegaMenu.on_apply_multiselect = function ()
    {
        if (!this._is_created)
            return;

        this._onInitSelect();
    };

    _pMegaMenu.set_rangeselect = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this._p_rangeselect)
        {
            this._p_rangeselect = _v;

            this.on_apply_rangeselect();
        }
    };

    _pMegaMenu.on_apply_rangeselect = function ()
    {
        if (!this._is_created)
            return;

        this._onInitSelect();
    };

    _pMegaMenu.set_levelselect = function (v)
    {
        var _v = nexacro._toBoolean(v);

        if (_v != this._p_levelselect)
        {
            this._p_levelselect = _v;

            this.on_apply_levelselect();
        }
    };

    _pMegaMenu.on_apply_levelselect = function ()
    {
        if (!this._is_created)
            return;

        this._onInitSelect();
    };
    */

    // Select Method ( inner )
    /*
    _pMegaMenu.getSelect = function (bindindex)
    {
        return nexacro.ComplexComponent.prototype.getSelect.call(this) ?? this._onGetDefaultSelectArgument();
    };
    _pMegaMenu.getSelectIndex = function (bBindIndex)
    {
        return bBindIndex ? this._getCurrentSelectBindIndex() : this._getCurrentSelectItemIndex();
    };
    _pMegaMenu.setSelect = function (rowselectindex, subselectindex, ctrlselectindex, isdataindex)
    {
        return nexacro.ComplexComponent.prototype.setSelect.call(this, rowselectindex, subselectindex, ctrlselectindex, isdataindex);
    };
    */
    // Select Logical Event

    // 확인 : Complext Compnoent로 이동
    // 확인 : 숫자는 상수로 변경
    /*
    _pMegaMenu._beginChangeRowPosition = function () { return !(this.__changeRowposition ? false : this.__changeRowposition = true); };
    _pMegaMenu._finalChangeRowPosition = function () { return !(this.__changeRowposition = false); };

    _pMegaMenu._on_rowposition_change = function (itemidx, bandidx, ctrlidx)
    {
        if (this._beginChangeRowPosition()) return;

        var ret = false;
        var binddata = this._getBindDataSet();
        if (binddata)
        {
            ret = itemidx == binddata._setRowPosition(itemidx, 51);
        }

        if (this._finalChangeRowPosition()) return ret;
    };

    // Select Basic Event
    _pMegaMenu._on_basic_onselect = function (oldselect, newselect)
    {
        if (this._is_created)
        {
            if (oldvalue)
            {
                this._setItemSelect(oldvalue.row, false);
                this._setItemChildSelect(oldvalue.row, oldvalue.band, oldvalue.ctrl, false);
            }

            if (newvalue)
            {
                this._setItemSelect(newvalue.row, true);
                this._setItemChildSelect(newvalue.row, newvalue.band, newvalue.ctrl, true);
            }
        }
    };

    _pMegaMenu._on_basic_onselectedchange = function (oldselect, newselect)
    {
        // Update for Self Expr Update
        nexacro.ComplexComponent.prototype._on_basic_onselectedchange.call(this, oldselect, newselect);
    };
    */

    // Select Default Event

    // 확인 : ListView 확인하여 최대한 ComplexComponent로 이전
    // Select Fire Event
    _pMegaMenu._on_fire_onselectedchange = function (oldselect, newselect)
    {
        if (this.onselectchanged && this.onselectchanged._has_handlers)
        {
            return this.onselectchanged._fireUserEvent(this, new nexacro.MegaMenuSelectEventInfo(this, "onselectchanged", oldselect, newselect));
        }
        return false;
    };

    /*
    _pMegaMenu._on_fire_onselectorresize = function (obj, e)
    {
        if (this.onselectorresize && this.onselectorresize._has_handlers)
        {
            this.onselectorresize._fireEvent(this, e);
        }
        return true;
    };
    */

    // Select Inner Logic
    // 확인 : 불필요한 argument(obj,type) 제거 및 ComplexComponent로 이동
    /*
    _pMegaMenu._onChangeSelect = function (oldvalue, newvalue)
    {
        this._on_basic_onselect(oldvalue, newvalue);
        this._on_fire_onselect(oldvalue, newvalue);
        this._on_default_onselect(oldvalue, newvalue);

        this._on_basic_onselectedchange(oldvalue, newvalue);
        this._on_fire_onselectedchange(oldvalue, newvalue);
    //  this._on_default_onselectedchange(oldvalue, newvalue);
    };
    _pMegaMenu._onCheckSelectChange = function (oldselect, newselect)
    {
        if (typeof newselect == "object" && (typeof oldselect != typeof newselect))
            return true;

        for (var attr in newselect)
        {
            if (oldselect[attr] != newselect[attr])
                return true;
        }
        return false;
    };
    */

    // TODO : ListView 확인하여 ComplexComponent로 이동
    _pMegaMenu._onCheckSelectable       = function () { return this._p_useselcolor; };
    _pMegaMenu._onCheckSelectScrollMode = function () { return this._p_selectscrollmode == "select"; };
    _pMegaMenu._onCheckSelectDataSync   = function () { return this._p_dataselectmode == "datarowselect" ? true : this._p_dataselectmode == "datarowselect,correct" ? -true : false; };
    _pMegaMenu._onCheckSelectPathSync   = function () { return this._p_pathselectmode == "allitemselect"; }; // this._p_levelselect == true
    _pMegaMenu._onCheckSelectScrollSync = function () { return this._p_autoselectmode != "noautoscroll";  };
    _pMegaMenu._onCheckSelectLeaderSync = function () { return this._p_autoselectmode == "scrollselect";  };
    _pMegaMenu._onCheckSelectBranchSync = function () { return this._p_autoselectmode == "branchselect" ? true : this._p_autoselectmode == "leafautoselect" ? -true : false; };

    /*
    _pMegaMenu._onGetSelectArgument = function (rowidx, bandidx, ctrlidx)
    {
        //    Single (row) Select : {row : rowidx, band : bandidx, ctrl : ctrlidx}
        //    Single (item) Select : 
        //    Milti Select : 
        //    Area Select : 

        var currselect = this.getSelect();

        rowidx  = nexacro._isNull(rowidx)  ? currselect.row : rowidx;
        bandidx = nexacro._isNull(bandidx) ? currselect.band : bandidx;
        ctrlidx = nexacro._isNull(ctrlidx) ? currselect.ctrl : ctrlidx;

        return { row: rowidx, band: bandidx, ctrl: ctrlidx };
    };
    */

    // 확인 : ComplexComponent로 이동
    /*
    _pMegaMenu._setItemSelect = function (rowidx, status, show)
    {
        if (rowidx == null)
        {
            return;
        }

        if (rowidx.length)
        {
            //TODO : part, multi, range
        }

        var rowcount = this._getBindCount();
        if (rowidx >= rowcount)
        {
            return;
        }

        if (rowidx == this._DEFAULT_ROWINDEX)
        {
            // all?
        }
        else
        {
            var item = this._getItem(rowidx);
            if (!item)
            {
                var panel = this._getPanel();
                if (panel)
                {
                    var slot = panel._getPanelSlot(rowidx);
                    var slot_pos_top = slot ? slot._getSlotCachedPos()[1] : 0;
                    var scroll_top = slot_pos_top - this._adjust_height;

                    this.scrollTo(0, scroll_top);
                }
            }
            //single
            this._setItemArraySelect(this._getItem(rowidx), status);
            if (show != false)
            {
                if (this._evt_name != "lbuttondown")
                    this._showItem(rowidx, status);
                else
                {
                    this._show_item = true;
                    this._show_rowidx = rowidx;
                    this._show_status = status;
                }
            }

        }
    };

    _pMegaMenu._setItemChildSelect = function (itemidx, bandidx, ctrlidx, status)
    {
        var ctrl = this._getItemChildByIndex(itemidx, bandidx, ctrlidx);
        if (ctrl)
        {
            ctrl.selected = status;
        }

        var popupctrl = this._getItemChildInPopup(itemidx, bandidx, ctrlidx);
        if (popupctrl)
        {
            popupctrl.selected = status;
        }
    };
    */

    //===============================================================
    // nexacro.MegaMenu : Edit/SubControl
    //===============================================================

    // 확인 : 가능하면 Item Inferface나 ComplexComponent Interface로 제공
    _pMegaMenu._isEditSubControl = function (ctrl, ctrlid)
    {
        switch (ctrlid ?? this._getChildId(ctrl))
        {
            case "menuitemswitch"   :
            case "menuitemedit"     : return true;
            case "menuitembutton"   :
            case "menuitemview"     : return false;
        }

        return false;
    };
    _pMegaMenu._isControlSubControl = function (ctrl, ctrlid)
    {
        switch (ctrlid ?? this._getChildId(ctrl))
        {
            case "menuitemswitch"   :
            case "menuitemedit"     :
            case "menuitembutton"   :
            case "menuitemview"     : return true;
        }

        return false;
    };
    _pMegaMenu._isExpandSubControl = function (ctrl, ctrlid)
    {
        return ctrl instanceof nexacro.Button && ctrlid == "menuitemexpand";
    };

    //===============================================================
    // nexacro.MegaMenu : Interface Logic for MegaMenu Item/Ctrl
    //===============================================================

    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu._getColumnValueByIndex = function (idx, col)
    {
        return this._getBindColumnByID(this._getBindIndexByItemIndex(idx), col);
    };
    _pMegaMenu._getColumnValueBySelect = function (sel, col)
    {
        return this._getBindColumnByID(this._getSelectBindIndex(sel), col);
    };

    _pMegaMenu._setColumnValueByIndex = function (idx, col, val)
    {
        return this._setBindColumnByID(this._getBindIndexByItemIndex(idx), col, val);
    };
    _pMegaMenu._setColumnValueBySelect = function (sel, col, val)
    {
        return this._setBindColumnByID(this._getSelectBindIndex(sel), col, val);
    };

    _pMegaMenu._getDataRowJSONByIndex = function (idx, tostring)
    {
        var bindidx = this._getBindIndexByItemIndex(idx);
        var rowjson = {};

        var codecol  = this._onGetCodeColumn();                                  rowjson[codecol]  = this._getBindColumn(bindidx, codecol);
        var levelcol = this._onGetLevelColumn();                                 rowjson[levelcol] = this._getBindColumn(bindidx, levelcol);
        var groupcol = this._onGetGroupColumn();                                 rowjson[groupcol] = this._getBindColumn(bindidx, groupcol);
        var datacols = this._onGetDataColumns(); for (var datacol in datacols) { rowjson[datacol]  = this._getBindColumn(bindidx, datacol); }

        return tostring ? JSON.stringify(rowjson) : rowjson;
    };

    _pMegaMenu._getDataRow = function (rowidx)
    {
        if (rowidx >= this._getBindCount())
            return this._DEFAULT_ROWINDEX;

        return rowidx;
    };

    _pMegaMenu._isFakeCtrl = function (rowidx)
    {
        if (this._getBindCount() <= rowidx || rowidx < -2)
            return true;

        return false;
    };

    _pMegaMenu._getAvailableRect = function (comp)
    {
        var rect = { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 };

        rect.left   = comp._getClientLeft();
        rect.top    = comp._getClientTop();
        rect.right  = comp._getClientLeft() + comp._getClientWidth();
        rect.bottom = comp._getClientTop()  + comp._getClientHeight();
        rect.width  = comp._getClientWidth();
        rect.height = comp._getClientHeight();

        return rect;
    };
    /*
    _pMegaMenu._clearBindTypeFlag = function ()
    {
        this._is_use_bind_expr_prop.body = null;
        this._is_use_bind_expr_prop.head = null;
        this._is_use_bind_expr_prop.tail = null;
    };
    */
    //===============================================================
    // nexacro.MegaMenu : Interface Logic Override
    //===============================================================
    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu.on_apply_prop_createrowstype = function ()
    {
        var type = this._p_createrowstype;
        this._use_partitem = (type === "all") ? false : true;
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu.on_apply_prop_enable = function (v)
    {
        // ctrl 에서 enable 참조하기 위한 값.
        this._enable = v;

        // item 에 enable 상태 전파
        var items = this._getItems();
        if (!items)
        {
            return;
        }

        var count = items.length;
        if (count)
        {
            for (var i = 0; i < count; i++)
            {
                if (items[i])
                {
                    items[i]._setEnable(v);
                }
            }
        }

        // scroll 에 enable 상태 전파
        if (this._is_scrollable)
        {
            if (this._p_vscrollbar)
            {
                this._p_vscrollbar._setEnable(v);
            }
            if (this._p_hscrollbar)
            {
                this._p_hscrollbar._setEnable(v);
            }
        }
    };

    _pMegaMenu._enable = true;
    _pMegaMenu._isEnable = function ()
    {
        this._enable = nexacro.ComplexComponent.prototype._isEnable.call(this);
        return this._enable;
    };

    // [component.dlgcode:init]                     // dlgcode 설정값 변경이 필요하면 override, default는 모두 false
    _pMegaMenu._onGetDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        this._is_first_focus_band = false;

        return { want_tab: this._acceptstab, want_return: true, want_escape: true, want_chars: true, want_arrows: this._accept_arrow };
    };

    // [component.dragdrop:getdragdata]             // drag 허용시 drag data
    _pMegaMenu._onGetDragData = function ()
    {
        return this.getSelectedText();
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    // [component.tabstop:get]                      // Accessibility 용 별도 처리시 override
    _pMegaMenu._onGetTabstop = function ()
    {
        // [component.accessibility.tabstop:get]
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            var accessibility = this.accessibility;
            if (accessibility && accessibility._p_enable && accessibility.role == "link")
                return true;
        }
        return false;
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    // [component.focus:get]                        // Accessibility 용 별도 처리시 override
    _pMegaMenu._onGetFocusAcceptable = function ()
    {
        // [component.accessibility.focus:get]
        return this._getEnvironment()?._p_enableaccessibility;
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    // [component.hotkey:action]                    // hotkey 기본 Action 변경시 override
    _pMegaMenu._onHotkey = function (keycode, altKey, ctrlKey, shiftKey)
    {
        // [component.hotkey:action]
        this.click();
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu.on_apply_prop_stringresource = function ()
    {
        if (!this._getEnvironment()?._isExistStringResource())
            return false;
        if (!this._is_created)
            return false;

        this._recreateItems();

        nexacro.ComplexComponent.prototype.on_apply_prop_stringresource.call(this);

        this.on_apply_nodatatext(this._getStringResourceProperty(this._p_nodatatext));
        return true;
    };
    /*
    _pMegaMenu._focusItem = function (index)
    {
        var item = this._getItem(index);

        if (item && item.length) item = item[0];
        if (item && item.setFocus) item.setFocus(true, true);

        this._showItem(index, true);

        this._is_megamenu_focus = false;
        this._is_expandbar_focus = false;
    };
    */
    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu._setFocus = function (bResetScroll, calledby, block_inner_focus)
    {
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            this._accept_arrow = true;
        }
        this._acceptstab = true

        return nexacro.ComplexComponent.prototype._setFocus.call(this, bResetScroll, calledby, block_inner_focus);
    };

    // 확인 : ListView 확인후 ComplexComponent로 이동
    _pMegaMenu._showItem = function (rowidx, status)
    {
        this._show_item = false;
        this._show_rowidx = -1;
        this._show_status = "";

        nexacro.ComplexComponent.prototype._showItem.call(this, rowidx, status);
    };


    //===============================================================
    // nexacro.MegaMenu : RTL/Locale (추후제공)
    //===============================================================

    // [상위 Component 처리]
    // Simple Component의 RTL/Locale은 ClientElement 대상으로만 처리
    // Basic Component에서만 처리되며 User Component에서는 별도 처리가 없다.

    // 상세 추후 추가


    // [하위 Component 처리]
    // Basic Component에서만 RTL Interface 일부 Override 처리

    // 상세 추후 추가


    //===============================================================
    // nexacro.MegaMenu : Status
    //===============================================================

    // 확인 : ListView 확인하여 Complex/SimpleComponent 사용으로 변경
    _pMegaMenu._onResetSysStatus = function ()
    {
      /*if (this._use_enable_status)*/ this._onResetSysEnable();
        if (this._use_readonly_status) this._onResetSysReadOnly();
    };

    _pMegaMenu._onResetUserStatus = function ()
    {
        // MegaMenu 는 select status를 사용하지 않지만, 하위 item, child가 reset이 필요함.
        if (this._use_select && this._use_selected_status)
        {
            this._onResetUserSelected();
        }
    };

    _pMegaMenu._onResetUserSelected = function ()
    {
        // 확인 : 아래 필요여부 확인
        /*
        // 최초 상태일때 판단.
        var currselect = this.getSelect();
        if (currselect.row == this._DEFAULT_ROWINDEX)
        {
            // TODO : _on_rowposition_change 관련해서 중복되지 않도록 변경. 
            var rowidx = this._getBindCurrentPos();
            if (rowidx > -1)
            {
                var bandidx = -1;
                var ctrlidx = -1;

                var band, ctrl;
                var item = this._getItem(rowidx);

                if (nexacro._isArray(item))
                {
                    for (var i = 0, l=item.length; i < l; i++)
                    {
                        band = this._getCurrentBand(rowidx, i);
                        if (band)
                        {
                            ctrl = this._findEditableCtrl(band, 0, 1);
                            if (ctrl)
                            {
                                bandidx = band._itemsubidx;
                                ctrlidx = ctrl._ctrlidx;
                                break;
                            }
                        }
                    }

                    if (bandidx == -1)
                        bandidx = 0;
                }
                else
                {
                    band = this._getCurrentBand(rowidx, 0);
                    if (band)
                    {
                        bandidx = band._itemsubidx;

                        ctrl = this._findEditableCtrl(item, 0, 1);
                        if (ctrl)
                        {
                            ctrlidx = ctrl._ctrlidx;
                        }
                    }
                }

                if (this._getEnvironment()?._p_enableaccessibility)
                    this._is_megamenu_focus = true;

                this._onSetCurrentSelect({ row: rowidx, band: bandidx, ctrl: ctrlidx });
            }

            return;
        }

        // 현재 select 상태에 맞게 status 갱신
        var selab = this._onCheckSelectable();
        var items = this._getItems(); if (!items) return;
        for (var i = 0, l = items.length; i < l; i++)
        {
            item = items[i];
            if (item)
            {
                item._changeUserStatus("selected", selab && item._rowidx == currselect.row);

                // 확인 : 아래 코드 확인하여 제거 (MenuItem에서 하위가 처리되도록)
                var children = item._getChildren();
                for (var j = 0, n = children.length; j < n; j++)
                {
                    var child = children[j];
                    if (child)
                    {
                        child._changeUserStatus("selected", item._rowidx == currselect.row);
                    }
                }
            }
        }
        */
    };

    //===============================================================
    // nexacro.MegaMenu : Override
    //===============================================================

    // 확인 : ComplexComponent로 공통화
    _pMegaMenu.on_update_position = function (resize_flag, move_flag, update)
    {
        nexacro.ComplexComponent.prototype.on_update_position.call(this, resize_flag, move_flag, update);

        // Div/Panel 하위에 있을때 호출차이 문제로 _onSetContainerSize로 이동
        /*
        if (resize_flag)
        {
            var ishorizflat = this.getOffsetWidth() > this.getOffsetHeight() * 2;

            if (this._ishorizflat !== ishorizflat)
            {
                this._ishorizflat = ishorizflat;

                if (this._is_created && this._dynamicformat)
                {
                    if (this._updateProperties())
                    {
                        this._recreateItems();
                    }
                }
            }
            if (this._is_created)
            {
                this._updateItemScrollInfo("trackinit", true);
            }
        }
        */
    };

    // [component.layout.container:size]            // ComplexComponent에서 별도처리시 Override
    _pMegaMenu._onSetContainerSize = function (width, height)
    {
        //  if (resize_flag)
        {
            var ishorizflat = this.getOffsetWidth() > this.getOffsetHeight() * 2;

            if (this._ishorizflat !== ishorizflat)
            {
                this._ishorizflat = ishorizflat;

                if (this._is_created && this._dynamicformat)
                {
                    if (this._updateProperties())
                    {
                        // panel item size가 현재 format 기반 --> dynamicformat = format+panel reset
                        this._recreateItems(this.getSelectIndex(), true, true);
                    }
                }
            }
            if (this._is_created)
            {
                this._updateItemScrollInfo("trackinit", true);
            }
        }
    };

    //===============================================================
    // nexacro.MegaMenu : Property/PropInfo
    //===============================================================

    _pMegaMenu._propinfo_megamenuarrange =
    {
        type: "enum",
        multi: true,
        delimiter: " ",
        defaultval: (     /* "horz vert" */
                          nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD
                    ),
        enumvalues:
        {
            "horz"      : nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD,
            "horzlead"  : nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD,
            "horztail"  : nexacro._PanelConst.SLOT_ARRANGETYPE_HORZTAIL,
            "horzmiddle": nexacro._PanelConst.SLOT_ARRANGETYPE_HORZAMID,
            "horzinvert": nexacro._PanelConst.SLOT_ARRANGETYPE_HORZINVT,
            "horzaround": nexacro._PanelConst.SLOT_ARRANGETYPE_HORZARND,
            "horzgapped": nexacro._PanelConst.SLOT_ARRANGETYPE_HORZGAPD,

            "vert"      : nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD,
            "vertlead"  : nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD,
            "verttail"  : nexacro._PanelConst.SLOT_ARRANGETYPE_VERTTAIL,
            "vertmiddle": nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID,
            "vertinvert": nexacro._PanelConst.SLOT_ARRANGETYPE_VERTINVT,
            "vertaround": nexacro._PanelConst.SLOT_ARRANGETYPE_VERTARND,
            "vertgapped": nexacro._PanelConst.SLOT_ARRANGETYPE_VERTGAPD
        },
    };
    _pMegaMenu._propinfo_megamenuplace =
    {
        type: "enum",
        multi: true,
        delimiter: " ",
        /*
        defaultval: (         // "compdown,comphorzfit"
                              nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_DOWN |
                              nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT
                    ),
        */
        defaultval: (         // default : horzflat = "menudown,menuhorzfit", !horzflat = "menunext,menuvertfit"
                              nexacro._PanelConst.GROUPING_SUBPLACE_CUSTOM
                    ),
        enumvalues:
        {
            /*
            "item"          : nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_ORIGIN,
            "menu"          : nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_OWNER,
            "comp"          : nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_ROOT,
            "down"          : nexacro._PanelConst.GROUPING_SUBPLACE_DOWN,
            "up"            : nexacro._PanelConst.GROUPING_SUBPLACE_UP,
            "middle"        : nexacro._PanelConst.GROUPING_SUBPLACE_MIDDLE,
            "top"           : nexacro._PanelConst.GROUPING_SUBPLACE_TOP,
            "bottom"        : nexacro._PanelConst.GROUPING_SUBPLACE_BOTTOM,
            "vertfit"       : nexacro._PanelConst.GROUPING_SUBPLACE_VERT_FIT,
            "next"          : nexacro._PanelConst.GROUPING_SUBPLACE_NEXT,
            "prev"          : nexacro._PanelConst.GROUPING_SUBPLACE_PREV,
            "center"        : nexacro._PanelConst.GROUPING_SUBPLACE_CENTER,
            "left"          : nexacro._PanelConst.GROUPING_SUBPLACE_LEFT,
            "right"         : nexacro._PanelConst.GROUPING_SUBPLACE_RIGHT,
            "horzfit"       : nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT,
            "inplacefit"    : nexacro._PanelConst.GROUPING_SUBPLACE_INPLACE_OWNER,
            */

            "itemvertpos"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_NONE,
            "itemdown"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_DOWN,
            "itemup"        : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_UP,
            "itemmiddle"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_MIDDLE,
            "itemtop"       : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_TOP,
            "itembottom"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_BOTTOM,
            "itemvertfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_FIT,
            "menudown"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_DOWN,
            "menuup"        : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_UP,
            "menumiddle"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_MIDDLE,
            "menutop"       : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_TOP,
            "menubottom"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_BOTTOM,
            "menuvertfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_FIT,
            "compdown"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_DOWN,
            "compup"        : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_UP,
            "compmiddle"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_MIDDLE,
            "comptop"       : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_TOP,
            "compbottom"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_BOTTOM,
            "compvertfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_FIT,
            "compvertadj"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_ADJ,
            "compvertadjust": nexacro._PanelConst.GROUPING_SUBPLACE_BASE_VERT_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_VERT_ADJ,

            "itemhorzpos"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_NONE,
            "itemnext"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_NEXT,
            "itemprev"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_PREV,
            "itemcenter"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_CENTER,
            "itemleft"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_LEFT,
            "itemright"     : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_RIGHT,
            "itemhorzfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ORIGIN | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT,
            "menunext"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_NEXT,
            "menuprev"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_PREV,
            "menucenter"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_CENTER,
            "menuleft"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_LEFT,
            "menuright"     : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_RIGHT,
            "menuhorzfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_OWNER  | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT,
            "compnext"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_NEXT,
            "compprev"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_PREV,
            "compcenter"    : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_CENTER,
            "compleft"      : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_LEFT,
            "compright"     : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_RIGHT,
            "comphorzfit"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_FIT,
            "comphorzadj"   : nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_ADJ,
            "comphorzadjust": nexacro._PanelConst.GROUPING_SUBPLACE_BASE_HORZ_ROOT   | nexacro._PanelConst.GROUPING_SUBPLACE_HORZ_ADJ,

            "iteminplacefit": nexacro._PanelConst.GROUPING_SUBPLACE_INPLACE_ORIGIN,
            "menuinplacefit": nexacro._PanelConst.GROUPING_SUBPLACE_INPLACE_OWNER,
            "compinplacefit": nexacro._PanelConst.GROUPING_SUBPLACE_INPLACE_ROOT,

            "itemposition"  : nexacro._PanelConst.GROUPING_SUBPLACE_POSITION_ORIGIN,
            "menuposition"  : nexacro._PanelConst.GROUPING_SUBPLACE_POSITION_OWNER,
            "compposition"  : nexacro._PanelConst.GROUPING_SUBPLACE_POSITION_ROOT,
        },
    };
    _pMegaMenu._propinfo_megamenushowitem =
    {
        type: "enum",
        multi: false,
        delimiter: "",
        /*
        defaultval: (         // "none"
                              nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE
                    ),
        */
        defaultval: (         // "item,auto"
                              nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM |
                              nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_AUTO
                    ),
        enumvalues:
        {
            /*
            "none"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE,
            "item"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM,
            "control"       : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_CONTROL,
            "fixed"         : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_FIXED,
            "stick"         : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_STICK,
            "nc"            : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NC,
            "horz"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_HORZ,
            "horzreverse"   : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_HORZREVS,
            "vert"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_VERT,
            "vertreverse"   : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_VERTREVS,
            "auto"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_AUTO
            */
            "none"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE,
            "horz"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_HORZ | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM,
            "vert"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_VERT | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM,
            "auto"          : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_AUTO | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM,
            "horz,fixed"    : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_HORZ | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_FIXED,
            "vert,fixed"    : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_VERT | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_FIXED,
            "auto,fixed"    : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_AUTO | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ITEM | nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_FIXED
        },
    };
    _pMegaMenu._propinfo_megamenushowcontrol =
    {
        type: "enum",
        multi: true,
        array: true,
        delimiter: ",",
        defaultval: (            /* "none" */
                                 [nexacro._MenuItemConst.ITEMTYPE_CTRLTYPE_NONE]
                    ),
        enumvalues:
        {
            "menuitemswitch"    : nexacro._MenuItemConst.ITEMTYPE_MENUITEM_EDIT_SWITCH,
            "menuitembutton"    : nexacro._MenuItemConst.ITEMTYPE_MENUITEM_CTRL_BUTTON,
            "footeritembutton"  : nexacro._MenuItemConst.ITEMTYPE_FOOTERITEM_CTRL_BUTTON,
            "footeritemwebview" : nexacro._MenuItemConst.ITEMTYPE_FOOTERITEM_VIEW_WEBVIEW,
            "viewitemwebview"   : nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_WEBVIEW,
            "viewitemdivview"   : nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_DIVVIEW,
            "viewitemimageview" : nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_IMGVIEW,
            "viewitemvideoview" : nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_VIDVIEW,
            "edititembutton"    : nexacro._MenuItemConst.ITEMTYPE_EDITORITEM_CTRL_BUTTON,
        },
    };
    _pMegaMenu._propinfo_megamenupos =
    {
        type: "vector",

        multi: false,
        fill: true,
        delimiter: "",
        separater: " ",
        defaultval: 
        [
            { pval: "0px", sval: 0, cval: 0, unit: nexacro._UnitConst.SIZEUNIT_PIXEL },
            { pval: "0px", sval: 0, cval: 0, unit: nexacro._UnitConst.SIZEUNIT_PIXEL }
        ],
        defaultunit: nexacro._UnitConst.SIZEUNIT_PIXEL,
        unitvalues:
        {
            "px"    : nexacro._UnitConst.SIZEUNIT_PIXEL,
            "%"     : nexacro._UnitConst.SIZEUNIT_PERCENT,
            "rem"   : nexacro._UnitConst.SIZEUNIT_REM,
            "em"    : nexacro._UnitConst.SIZEUNIT_EM
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_PIXEL]     : nexacro._UnitConst.SIZERATE_PIXEL,        // 1: 1 
            [nexacro._UnitConst.SIZEUNIT_PERCENT]   : nexacro._UnitConst.SIZERATE_PERCENT,      // 1: 10000    convert *  10000   (calibration 100 * 100)
            [nexacro._UnitConst.SIZEUNIT_EM]        : nexacro._UnitConst.SIZERATE_EM,           // 1:-1000     convert * -1000    (calibration 1000)
            [nexacro._UnitConst.SIZEUNIT_REM]       : nexacro._UnitConst.SIZERATE_REM           // 1:-1000000  convert * -100000  (calibration 1000000)
        }
    };
    _pMegaMenu._propinfo_megamenusize =
    {
        type: "vector",
        multi: false,
        fill: true,
        delimiter: "",
        separater: " ",
        defaultval:
        [
            { pval: "", sval: -1, cval: -1, unit: nexacro._UnitConst.SIZEUNIT_PIXEL },
            { pval: "", sval: -1, cval: -1, unit: nexacro._UnitConst.SIZEUNIT_PIXEL }
        ],
        defaultunit: nexacro._UnitConst.SIZEUNIT_PIXEL,
        unitvalues:
        {
            "px"    : nexacro._UnitConst.SIZEUNIT_PIXEL,
            "%"     : nexacro._UnitConst.SIZEUNIT_PERCENT,
            "rem"   : nexacro._UnitConst.SIZEUNIT_REM,
            "em"    : nexacro._UnitConst.SIZEUNIT_EM
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_PIXEL]     : nexacro._UnitConst.SIZERATE_PIXEL,        // 1: 1 
            [nexacro._UnitConst.SIZEUNIT_PERCENT]   : nexacro._UnitConst.SIZERATE_PERCENT,      // 1: 10000    convert *  10000   (calibration 100 * 100)
            [nexacro._UnitConst.SIZEUNIT_EM]        : nexacro._UnitConst.SIZERATE_EM,           // 1:-1000     convert * -1000    (calibration 1000)
            [nexacro._UnitConst.SIZEUNIT_REM]       : nexacro._UnitConst.SIZERATE_REM           // 1:-1000000  convert * -100000  (calibration 1000000)
        }
    };
    _pMegaMenu._propinfo_megamenugap =
    {
        type: "vector",
        multi: false,
        fill: true,
        delimiter: "",
        separater: " ",
        defaultval:
        [
            { pval: "5px", sval: 5, cval: 5, unit: nexacro._UnitConst.SIZEUNIT_PIXEL },
            { pval: "5px", sval: 5, cval: 5, unit: nexacro._UnitConst.SIZEUNIT_PIXEL }
        ],
        defaultunit: nexacro._UnitConst.SIZEUNIT_PIXEL,
        unitvalues:
        {
            "px"    : nexacro._UnitConst.SIZEUNIT_PIXEL,
            "%"     : nexacro._UnitConst.SIZEUNIT_PERCENT,
            "rem"   : nexacro._UnitConst.SIZEUNIT_REM,
            "em"    : nexacro._UnitConst.SIZEUNIT_EM
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_PIXEL]     : nexacro._UnitConst.SIZERATE_PIXEL,        // 1: 1 
            [nexacro._UnitConst.SIZEUNIT_PERCENT]   : nexacro._UnitConst.SIZERATE_PERCENT,      // 1: 10000    convert *  10000   (calibration 100 * 100)
            [nexacro._UnitConst.SIZEUNIT_EM]        : nexacro._UnitConst.SIZERATE_EM,           // 1:-1000     convert * -1000    (calibration 1000)
            [nexacro._UnitConst.SIZEUNIT_REM]       : nexacro._UnitConst.SIZERATE_REM           // 1:-1000000  convert * -100000  (calibration 1000000)
        }
    };
    _pMegaMenu._propinfo_megamenulength =
    {
        type: "scalar",
        defaultval: { pval: "0", sval: 0, cval: 0, unit: nexacro._UnitConst.SIZEUNIT_PIXEL },
        defaultunit: nexacro._UnitConst.SIZEUNIT_PIXEL,
        unitvalues:
        {
            "px"    : nexacro._UnitConst.SIZEUNIT_PIXEL,
            "%"     : nexacro._UnitConst.SIZEUNIT_PERCENT,
            "rem"   : nexacro._UnitConst.SIZEUNIT_REM,
            "em"    : nexacro._UnitConst.SIZEUNIT_EM
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_PIXEL]     : nexacro._UnitConst.SIZERATE_PIXEL,        // 1: 1 
            [nexacro._UnitConst.SIZEUNIT_PERCENT]   : nexacro._UnitConst.SIZERATE_PERCENT,      // 1: 10000    convert *  10000   (calibration 100 * 100)
            [nexacro._UnitConst.SIZEUNIT_EM]        : nexacro._UnitConst.SIZERATE_EM,           // 1:-1000     convert * -1000    (calibration 1000)
            [nexacro._UnitConst.SIZEUNIT_REM]       : nexacro._UnitConst.SIZERATE_REM           // 1:-1000000  convert * -100000  (calibration 1000000)
        }
    };
    _pMegaMenu._propinfo_megamenuside =
    {
        type: "vector",
        multi: false,
        fill: true,
        defaultval:
        [
            { pval: "17px", sval: 17, cval: 17, unit: nexacro._UnitConst.SIZEUNIT_PIXEL },
            { pval: "17px", sval: 17, cval: 17, unit: nexacro._UnitConst.SIZEUNIT_PIXEL }
        ],
        defaultunit: nexacro._UnitConst.SIZEUNIT_PIXEL,
        unitvalues:
        {
            "px"    : nexacro._UnitConst.SIZEUNIT_PIXEL,
            "%"     : nexacro._UnitConst.SIZEUNIT_PERCENT,
        //  "rem"   : nexacro._UnitConst.SIZEUNIT_REM,
        //  "em"    : nexacro._UnitConst.SIZEUNIT_EM
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_PIXEL]     : nexacro._UnitConst.SIZERATE_PIXEL,        // 1: 1 
            [nexacro._UnitConst.SIZEUNIT_PERCENT]   : nexacro._UnitConst.SIZERATE_PERCENT,      // 1: 10000    convert *  10000   (calibration 100 * 100)
        //  [nexacro._UnitConst.SIZEUNIT_EM]        : nexacro._UnitConst.SIZERATE_EM,           // 1:-1000     convert * -1000    (calibration 1000)
        //  [nexacro._UnitConst.SIZEUNIT_REM]       : nexacro._UnitConst.SIZERATE_REM           // 1:-1000000  convert * -100000  (calibration 1000000)
        }
    };    
    _pMegaMenu._propinfo_megamenucount =
    {
        type: "scalar",
        defaultval: { pval: "-1", sval: -1, cval: -1, unit: nexacro._UnitConst.SIZEUNIT_COUNT },
        defaultunit: nexacro._UnitConst.SIZEUNIT_COUNT,
        unitvalues:
        {
            "ea"    : nexacro._UnitConst.SIZEUNIT_COUNT
        },
        unitrates:
        {
            [nexacro._UnitConst.SIZEUNIT_EA]: 1              // 1:1
        }
    };

    _pMegaMenu._onInitProperties = function ()
    {
        // Const
        this._DEFAULT_ROWINDEX = -9;
        this._DEFAULT_BANDINDEX = -1;   // 확인 : 명확한 명칭으로 변경 SUB->BAND
        this._DEFAULT_CTRLINDEX = -1;

        // init interface prop
        this._acceptstab = true;
        this._accept_arrow = true;

        // init inner prop
        this._ishorizflat = undefined;
        this._dynamicformat = false;
        this._autorowfirst = false;
        this._autoouterfit = false;
        this._autocontsfit = false;

        // bind
        this._p_innerdataset = null;

        // bindcolumn
        this._p_idcolumn = null;
        this._p_levelcolumn = null;
        this._p_typecolumn = null;
        this._p_iconcolumn = null;
        this._p_captioncolumn = null;
        this._p_desctiptioncolumn = null;
        this._p_badgecolumn = null;
        this._p_controltypecolumn = null;
        this._p_controlvaluecolumn = null;
        this._p_enablecolumn = null;
        this._p_userdatacolumn = null;
        this._p_navtargetcolumn = null;
        this._p_navtargetpropertiescolumn = null;
        this._p_navurlcolumn = null;
        this._p_hotkeycolumn = null;

        // ListView 확인하여 ComplexComponent로 이동
        // formats
        this._p_formats = "<formats/>";                // set formats string for initcontents trigger
        this._p_formatid = "";                          // set formats string for initcontents trigger

        // init component panel prop for mainmenu
    //  this._p_mainmenuplace = undefined;
    //  this._p_mainmenuposition = undefined;
    //  this._p_mainmenusize = undefined;
    //  this._p_mainmenuitemcount = undefined;

        this._p_mainmenurowfirst = undefined;           // true/false:staticformat, undefined:dynamicformat
        this._p_mainmenuarrange = "default";
        this._p_mainmenuoverflow = "scroll";

        this._p_mainmenuexpandtrigger = "itemclick";    // itemclick/expandclick action prop
        this._p_mainmenuexpandtype = "popup";           // popup/group + subplace
        this._p_mainmenuexpandinitstatus = "collapse";  // collapse/expand for group
    //  this._p_mainmenuexpandindentsize = undefined;

        this._p_mainmenushowcontrol = "";
        this._p_mainmenushowheader = "";
        this._p_mainmenushowfooter = "";

        this._p_mainmenutooltiptype = "";

        this._p_mainmenuinnergap = undefined;
        this._p_mainmenuoutergap = undefined;

        this._p_mainmenuitemsize = undefined;
        this._p_maingroupitemsize = undefined;
        this._p_mainheaderitemsize = undefined;
        this._p_mainfooteritemsize = undefined;
        this._p_maindivideritemsize = undefined;

        this._p_mainmenuitemtype = "";
        this._p_mainheaderitemtype = "";
        this._p_mainfooteritemtype = "";

        // init component panel prop for submenu
        this._p_submenuplace = undefined;
        this._p_submenuposition = undefined;
        this._p_submenusize = undefined;
    //  this._p_submenuitemcount = undefined;

        this._p_submenurowfirst = undefined;            // true/false:staticformat, undefined:dynamicformat
        this._p_submenuarrange = "default";
        this._p_submenuoverflow = "scroll";

        this._p_submenuexpandtrigger = "itemclick";     // itemclick/expandclick action prop
        this._p_submenuexpandtype = "popup";            // popup/group + subplace
        this._p_submenuexpandinitstatus = "collapse";   // collapse/expand for group
        this._p_submenuexpandindentsize = undefined;    // position for group/popup


        this._p_submenushowcontrol = "";
        this._p_submenushowheader = "";
        this._p_submenushowfooter = "";

        this._p_submenutooltiptype = "";

        this._p_submenuinnergap = undefined;
        this._p_submenuoutergap = undefined;

        this._p_submenuitemsize = undefined;
        this._p_subgroupitemsize = undefined;
        this._p_subheaderitemsize = undefined;
        this._p_subfooteritemsize = undefined;
        this._p_subdivideritemsize = undefined;

        this._p_submenuitemtype = "";
        this._p_subheaderitemtype = "";
        this._p_subfooteritemtype = "";

        // init component panel prop for detailmenu
        this._p_detailmenurowfirst = undefined;            // true/false:staticformat, undefined:dynamicformat
        this._p_detailmenuarrange = "default";
        this._p_detailmenuoverflow = "scroll";

        this._p_detailmenuexpandtrigger = "itemclick";     // itemclick/expandclick action prop
        this._p_detailmenuexpandtype = "popup";            // popup/group + subplace
        this._p_detailmenuexpandinitstatus = "collapse";   // collapse/expand for group
        this._p_detailmenuexpandindentsize = undefined;    // position for group/popup

        this._p_detailmenusize = undefined;
    //  this._p_detailmenuitemcount = undefined;

        this._p_detailmenushowcontrol = "";
        this._p_detailmenushowheader = "";
        this._p_detailmenushowfooter = "";

        this._p_detailmenutooltiptype = "";

        this._p_detailmenuinnergap = undefined;
        this._p_detailmenuoutergap = undefined;

        this._p_detailmenuitemsize = undefined;
        this._p_detaildivideritemsize = undefined;
        this._p_detailheaderitemsize = undefined;
        this._p_detailfooteritemsize = undefined;
        this._p_detailgroupitemsize = undefined;

        this._p_detailmenuitemtype = "";
        this._p_detailheaderitemtype = "";
        this._p_detailfooteritemtype = "";

        // init overflow panel prop for overflowmenu
        this._p_overflowmenurowfirst = undefined;            // true/false:staticformat, undefined:auto
        this._p_overflowmenuarrange = "default";
        this._p_overflowmenuoverflow = "spin";

        this._p_overflowmenushowheader = "";
        this._p_overflowmenushowfooter = "";
        this._p_overflowmenutype = "overitem";
        this._p_overflowmenuplace = undefined;
        this._p_overflowmenuposition = undefined;
        this._p_overflowmenusize = undefined;
        /*
        this._p_overflowmenuindentsize = [];
        this._p_overflowmenuitemcount = undefined;
        */

        // init overflow button prop
        this._p_overflowbuttonsize = undefined;
        this._p_overflowbuttontype = "auto";
        this._p_overflowbuttonactiontype = "popup";
        /*
        this.overflowbuttontriggertype = "click";
        */

        // init component prop
        /*
        this._p_autoenter = "none";
        this._p_autoupdatetype = "none";
        this._p_ctrlclickbound = "control";
        */
        this._p_nodatatext = "";
        this._p_nodataimage = "";


        this._p_useselcolor = true;
        this._p_selector = "none";
        this._p_selecttype = "row";
        this._p_selectchangetype = "down";
        this._p_selectscrollmode = "default";     // Scroll/Select 동시지원시 추가,                    TODO : Select Manager로 이관
        this._p_dataselectmode = "datarowselect"; // SelectSync 지원시 추가, Scroll Action 처리,       TODO : Select Manager로 이관
        this._p_pathselectmode = "curitemselect"; // SelectSync 지원시 추가, Scroll Action 처리,       TODO : Select Manager로 이관
        this._p_autoselectmode = "";              // SelectSync 지원시 추가, Scroll Action 처리,       TODO : Select Manager로 이관
        /*
        this._p_multiselect = false;              // MultiSelect 지원시 추가, Ctrl Action 처리
        this._p_rangeselect = false;              // RangeSelect 지원시 추가, Drag Action 처리
        */

        /*
        this._initsoftkeyboard = undefined;
        this._p_usesoftkeyboard = true;

        this._p_ctrlswitchsize = undefined;
        this._p_ctrlcalendarbuttonsize = undefined;
        this._p_ctrlcombobuttonsize = undefined;
        this._p_ctrlmulticombobuttonsize = undefined;
        */
        this._p_locale = "";

        // 확인 : 아래 외부속성/내부속성 확인하여 공통/개별 처리로 이동

        // init scroll prop
        this._p_showcover = false;
        this._p_showtrack = false;

        // init component internal variable
        this._is_popup_changed = false;

        // init component layout interface properties
        this._subgroup = [];
        this._subtrigger = [];
    };

    _pMegaMenu._onApplyProperties = function ()
    {
        // apply data prop
        /*
        this.on_apply_innerdataset();
        */

        // apply formats prop
        /*
        this.on_apply_formats();
        this.on_apply_formatid();
        */

        /*
        this.on_apply_nodatatext();
        this.on_apply_nodataimage();
        */

        // apply component panel prop
        /*
        this.on_apply_itemexpandtype();
        this.on_apply_iteminitstatus();
        this.on_apply_itemindentsize();
        */

        // apply arrangement prop
        /*
        this.on_apply_showheader();
        this.on_apply_rowfirst();
        this.on_apply_arrange();
        */

        // apply select prop
        /*
        this.on_apply_selector();
        */

        this._onApplyMenuProperties();
    };
    _pMegaMenu._onApplyMenuProperties = function ()
    {
        this._onApplyLevelProperties();

        var li = this._getLayoutIndex();
        var ld = this._getLayoutDepth();

        if (this._isFinLayout())
        {
            this._setArrangeType(   [this._p_detailmenuarrange],        [this._p_detailmenurowfirst],       li,ld);
            this._setMenuItemShow(  [this._p_detailmenushowheader],     [this._p_detailmenushowfooter],
                                    [this._p_detailmenushowcontrol],     true, true,                        li,ld);
            this._setMenuItemGap(   [this._p_detailmenuinnergap],       [this._p_detailmenuoutergap],       li,ld);
            this._setMenuItemSize(  [this._p_detailmenuitemsize],       [this._p_detailgroupitemsize],
                                    [this._p_detailheaderitemsize],     [this._p_detailfooteritemsize],
                                    [this._p_detaildivideritemsize],    [this._p_detailedititemsize],
                                    [this._p_detailbuttonitemsize],     [this._p_detailviewitemsize],       li,ld);
            this._setMenuItemType(  [this._p_detailheaderitemtype],     [this._p_detailfooteritemtype],
                                    [this._p_detailmenuitemtype],                                           li,ld);
            this._setSubMenuPlace(  [this._p_detailmenuplace],          [this._p_detailmenuposition],
                                    [this._p_detailmenusize],           [this._p_detailmenuexpandindentsize],
                                 /* [this._p_detailmenuitemcount], */                                       li,ld);
            this._setSubGroupType(  [this._p_detailmenuexpandtype],     [this._p_detailmenuexpandinitstatus],
                                    [this._p_detailmenuexpandtrigger],                                      li,ld);
            this._setOverflowShow(   this._p_overflowmenushowheader,     this._p_overflowmenushowfooter,
                                     this._p_overflowmenushowcontrol,    true, true,                        li,ld);
            this._setOverflowType(  [this._p_detailmenuoverflow],        this._p_overflowmenutype,
                                     this._p_overflowmenuplace,          this._p_overflowmenuposition,
                                     this._p_overflowmenusize,           this._p_overflowmenuindentsize,
                                 /* this._p_overflowmenuitemcount, */    this._p_overflowbuttonsize,        li,ld);
            this._setMenuItemAcc(   [this._p_detailmenukeyskipitemtype],                                    li,ld);
        }
        else if (this._isSubLayout())
        {
            this._setArrangeType(   [this._p_submenuarrange,            this._p_detailmenuarrange],         [this._p_submenurowfirst,           this._p_detailmenurowfirst],        li,ld);
            this._setMenuItemShow(  [this._p_submenushowheader,         this._p_detailmenushowheader],      [this._p_submenushowfooter,         this._p_detailmenushowfooter],
                                    [this._p_submenushowcontrol,        this._p_detailmenushowcontrol],      true, true,                                                            li,ld);
            this._setMenuItemGap(   [this._p_submenuinnergap,           this._p_detailmenuinnergap],        [this._p_submenuoutergap,           this._p_detailmenuoutergap],        li,ld);
            this._setMenuItemSize(  [this._p_submenuitemsize,           this._p_detailmenuitemsize],        [this._p_subgroupitemsize,          this._p_detailgroupitemsize],
                                    [this._p_subheaderitemsize,         this._p_detailheaderitemsize],      [this._p_subfooteritemsize,         this._p_detailfooteritemsize],
                                    [this._p_subdivideritemsize,        this._p_detaildivideritemsize],     [this._p_subedititemsize,           this._p_detailedititemsize],
                                    [this._p_subbuttonitemsize,         this._p_detailbuttonitemsize],      [this._p_subviewitemsize,           this._p_detailviewitemsize],        li,ld);
            this._setMenuItemType(  [this._p_subheaderitemtype,         this._p_detailheaderitemtype],      [this._p_subfooteritemtype,         this._p_detailfooteritemtype],
                                    [this._p_submenuitemtype,           this._p_detailmenuitemtype],                                                                                li,ld);
            this._setSubMenuPlace(  [this._p_submenuplace,              this._p_detailmenuplace],           [this._p_submenuposition,           this._p_detailmenuposition],
                                    [this._p_submenusize,               this._p_detailmenusize],            [this._p_submenuexpandindentsize,   this._p_detailmenuexpandindentsize],
                                 /* [this._p_submenuitemcount,          this._p_detailmenuitemcount], */                                                                            li,ld);
            this._setSubGroupType(  [this._p_submenuexpandtype,         this._p_detailmenuexpandtype],      [this._p_submenuexpandinitstatus,   this._p_detailmenuexpandinitstatus],
                                    [this._p_submenuexpandtrigger,      this._p_detailmenuexpandtrigger],                                                                           li,ld);
            this._setOverflowShow(   this._p_overflowmenushowheader,    this._p_overflowmenushowfooter,
                                     this._p_overflowmenushowcontrol,   true, true,                                                                                                 li,ld);
            this._setOverflowType(  [this._p_submenuoverflow,           this._p_detailmenuoverflow],         this._p_overflowmenutype,
                                     this._p_overflowmenuplace,                                              this._p_overflowmenuposition,
                                     this._p_overflowmenusize,                                               this._p_overflowmenuindentsize,
                                  /* this._p_overflowmenuitemcount, */                                       this._p_overflowbuttonsize,                                                                                 li,ld);
            this._setMenuItemAcc(   [this._p_submenukeyskipitemtype,    this._p_detailmenukeyskipitemtype],                                                                         li,ld);
        }
        else
        {
            this._setArrangeType(   [this._p_mainmenuarrange,           this._p_submenuarrange,         this._p_detailmenuarrange],         [this._p_mainmenurowfirst,          this._p_submenurowfirst,            this._p_detailmenurowfirst],        li,ld);
            this._setMenuItemShow(  [this._p_mainmenushowheader,        this._p_submenushowheader,      this._p_detailmenushowheader],      [this._p_mainmenushowfooter,        this._p_submenushowfooter,          this._p_detailmenushowfooter],
                                    [this._p_mainmenushowcontrol,       this._p_submenushowcontrol,     this._p_detailmenushowcontrol],      true, true,                                                                                                li,ld);
            this._setMenuItemGap(   [this._p_mainmenuinnergap,          this._p_submenuinnergap,        this._p_detailmenuinnergap],        [this._p_mainmenuoutergap,          this._p_submenuoutergap,            this._p_detailmenuoutergap],        li,ld);
            this._setMenuItemSize(  [this._p_mainmenuitemsize,          this._p_submenuitemsize,        this._p_detailmenuitemsize],        [this._p_maingroupitemsize,         this._p_subgroupitemsize,           this._p_detailgroupitemsize],
                                    [this._p_mainheaderitemsize,        this._p_subheaderitemsize,      this._p_detailheaderitemsize],      [this._p_mainfooteritemsize,        this._p_subfooteritemsize,          this._p_detailfooteritemsize],
                                    [this._p_maindivideritemsize,       this._p_subdivideritemsize,     this._p_detaildivideritemsize],     [this._p_mainedititemsize,          this._p_subedititemsize,            this._p_detailedititemsize],
                                    [this._p_mainbuttonitemsize,        this._p_subbuttonitemsize,      this._p_detailbuttonitemsize],      [this._p_mainviewitemsize,          this._p_subviewitemsize,            this._p_detailviewitemsize],        li,ld);
            this._setMenuItemType(  [this._p_mainheaderitemtype,        this._p_subheaderitemtype,      this._p_detailheaderitemtype],      [this._p_mainfooteritemtype,        this._p_subfooteritemtype,          this._p_detailfooteritemtype],
                                    [this._p_mainmenuitemtype,          this._p_submenuitemtype,        this._p_detailmenuitemtype],                                                                                                                    li,ld);
            this._setSubMenuPlace(  [this._p_mainmenuplace,             this._p_submenuplace,           this._p_detailmenuplace],           [this._p_mainmenuposition,          this._p_submenuposition,            this._p_detailmenuposition],
                                    [this._p_mainmenusize,              this._p_submenusize,            this._p_detailmenusize],            [this._p_mainmenuexpandindentsize,  this._p_submenuexpandindentsize,    this._p_detailmenuexpandindentsize],
                                 /* [this._p_mainmenuitemcount,         this._p_submenuitemcount,       this._p_detailmenuitemcount], */                                                                                                                li,ld);
            this._setSubGroupType(  [this._p_mainmenuexpandtype,        this._p_submenuexpandtype,      this._p_detailmenuexpandtype],      [this._p_mainmenuexpandinitstatus,  this._p_submenuexpandinitstatus,    this._p_detailmenuexpandinitstatus],
                                    [this._p_mainmenuexpandtrigger,     this._p_submenuexpandtrigger,   this._p_detailmenuexpandtrigger],                                                                                                               li,ld);
            this._setOverflowShow(   this._p_overflowmenushowheader,    this._p_overflowmenushowfooter,
                                     this._p_overflowmenushowcontrol,   true, true,                                                                                                                                                                     li,ld);
            this._setOverflowType(  [this._p_mainmenuoverflow,          this._p_submenuoverflow,        this._p_detailmenuoverflow],         this._p_overflowmenutype,
                                     this._p_overflowmenuplace,                                                                              this._p_overflowmenuposition,
                                     this._p_overflowmenusize,                                                                               this._p_overflowmenuindentsize, 
                                  /* this._p_overflowmenuitemcount,  */                                                                      this._p_overflowbuttonsize,                                                                                                                                                     li,ld);
            this._setMenuItemAcc(   [this._p_mainmenukeyskipitemtype,   this._p_submenukeyskipitemtype, this._p_detailmenukeyskipitemtype],                                                                                                             li,ld);
        }

        this._onApplySelectProperties();
        this._onApplyScrollProperties();
    };

    _pMegaMenu._onApplySelectProperties = function ()
    {
    //  on_apply_prop_selecttype();
    //  this._setSelectorType(this._p_selector);
    };

    _pMegaMenu._onApplyScrollProperties = function ()
    {
        this.on_apply_prop_scrolltype();
        this.on_apply_scrollpropagation();  
    };

    _pMegaMenu.on_apply_prop_scrolltype = function ()
    {
        this._setScrollExpandType(this._autorowfirst ? this._ishorizflat : this._isRowFirst());
    };

    _pMegaMenu._onCheckRowFirst = function ()
    {
        return  this._isFinLayout() ? this._p_detailmenurowfirst == true :
                this._isSubLayout() ? this._p_submenurowfirst    == true :
                                      this._p_mainmenurowfirst   == true;
    };
    _pMegaMenu._onChangeInitContentsFlag = function ()
    {
        // this._autocontsfit  = true : fit to contents width/height/both,    false : fit to contents none
        // this._dynamicformat = true : create contents after updateposition, false : create contents after createcontrolelement        

        // check fittocontents vs dynamiccontents
        return this._dynamicformat = (this._autorowfirst || this._autoouterfit) && !this._autocontsfit;
    };
    _pMegaMenu._onCheckInitContentsFlag = function ()
    {
        // return = true : create contents after createcontrolelement, false : create contents after updateposition        
        return this._dynamicformat ? false : true;
    };
    _pMegaMenu._onUpdateProperties = function ()
    {
        return this._dynamicformat ? this._onUpdateMenuProperties() : false;
    };
    _pMegaMenu._onUpdateMenuProperties = function ()
    {
        var li = this._getLayoutIndex();
        var ld = this._getLayoutDepth();

        if (this._isFinLayout())
        {
            this._setArrangeType(   [this._p_detailmenuarrange],                                                                                [this._p_detailmenurowfirst],                                                               li,ld);
            this._setMenuItemSize(  [this._p_detailmenuitemsize],                                                                               [this._p_detailgroupitemsize],
                                    [this._p_detailheaderitemsize],                                                                             [this._p_detailfooteritemsize],
                                    [this._p_detaildivideritemsize],                                                                            [this._p_detailedititemsize],
                                    [this._p_detailbuttonitemsize],                                                                             [this._p_detailviewitemsize],                                                               li,ld);
        }
        else if (this._isSubLayout())
        {
            this._setArrangeType(   [this._p_submenuarrange,            this._p_detailmenuarrange],                                             [this._p_submenurowfirst,   this._p_detailmenurowfirst],                                    li,ld);
            this._setMenuItemSize(  [this._p_submenuitemsize,           this._p_detailmenuitemsize],                                            [this._p_subgroupitemsize,  this._p_detailgroupitemsize],
                                    [this._p_subheaderitemsize,         this._p_detailheaderitemsize],                                          [this._p_subfooteritemsize, this._p_detailfooteritemsize],
                                    [this._p_subdivideritemsize,        this._p_detaildivideritemsize],                                         [this._p_subedititemsize,   this._p_detailedititemsize],
                                    [this._p_subbuttonitemsize,         this._p_detailbuttonitemsize],                                          [this._p_subviewitemsize,   this._p_detailviewitemsize],                                    li,ld);
        }
        else
        {
            this._setArrangeType(   [this._p_mainmenuarrange,           this._p_submenuarrange,             this._p_detailmenuarrange],         [this._p_mainmenurowfirst,      this._p_submenurowfirst,    this._p_detailmenurowfirst],    li,ld);
            this._setMenuItemSize(  [this._p_mainmenuitemsize,          this._p_submenuitemsize,            this._p_detailmenuitemsize],        [this._p_maingroupitemsize,     this._p_subgroupitemsize,   this._p_detailgroupitemsize],
                                    [this._p_mainheaderitemsize,        this._p_subheaderitemsize,          this._p_detailheaderitemsize],      [this._p_mainfooteritemsize,    this._p_subfooteritemsize,  this._p_detailfooteritemsize],
                                    [this._p_maindivideritemsize,       this._p_subdivideritemsize,         this._p_detaildivideritemsize],     [this._p_mainedititemsize,      this._p_subedititemsize,    this._p_detailedititemsize],
                                    [this._p_mainbuttonitemsize,        this._p_subbuttonitemsize,          this._p_detailbuttonitemsize],      [this._p_mainviewitemsize,      this._p_subviewitemsize,    this._p_detailviewitemsize],    li,ld);
        }

        this._onApplyScrollProperties();

        return true;
    };

    _pMegaMenu._onClearProperties = function ()
    {
        // destory 과정. property 변경으로 인해 추가로 생성된 object / array 등을 추가로 제거해줘야함.

        // clear data prop
        this.on_clear_innerdataset();

        // clear format prop
        /*
        this.on_clear_formats();
        this.on_clear_formatid();
        */

        /*
        this.on_clear_nodatatext();
        this.on_clear_nodataimage();
        */

        // clear component panel prop
        /*
        this.on_clear_itemexpandtype();
        this.on_clear_iteminitstatus();
        this.on_clear_itemindentsize();
        */

        // clear arrangement property
        /*
        this.on_clear_showheader();
        this.on_clear_rowfirst();
        this.on_clear_arrange();

        */
        // clear component select prop
        /*
        this.on_clear_selector();
        this.on_clear_multiselect();
        this.on_clear_rangeselect();
        */

        // clear component status prop
        /*
        this.on_clear_readonly();
        */

        this.onClearMenuProperties();
    };
    _pMegaMenu.onClearMenuProperties = function ()
    {
    };

    _pMegaMenu._onGetCloneProps = function ()
    {
        return (
            [
                // Menu Prop Clone

                // Inner Setting Prop
            //  "minlevel",
            //  "maxlevel",
            //  "extlevel",
            //  "loaddepth",
            //  "startindex",
            //  "finalindex",

                // MainMenu Prop Clone
            //  "mainmenuplace",
            //  "mainmenuposition",
            //  "mainmenusize",
            //  "mainmenuitemcount",
                "mainmenurowfirst",
                "mainmenuarrange",
                "mainmenuoverflow",
                "mainmenuexpandtrigger",
                "mainmenuexpandtype",
                "mainmenuexpandinitstatus",
            //  "mainmenuexpandindentsize",
                "mainmenushowheader",
                "mainmenushowfooter",
                "mainmenushowcontrol",
                "mainmenutooltiptype",
                "mainmenuinnergap",
                "mainmenuoutergap",
                "mainmenuitemsize",
                "maingroupitemsize",
                "mainheaderitemsize",
                "mainfooteritemsize",
                "maindivideritemsize",
                "mainedititemsize",
                "mainbuttonitemsize",
                "mainviewitemsize",
                "mainmenuitemtype",
                "mainheaderitemtype",
                "mainfooteritemtype",

                // SubMenu Prop Clone
                "submenuplace",
                "submenuposition",
                "submenusize",
            //  "submenuitemcount",
                "submenurowfirst",
                "submenuarrange",
                "submenuoverflow",
                "submenuexpandtrigger",
                "submenuexpandtype",
                "submenuexpandinitstatus",
                "submenuexpandindentsize",
                "submenushowheader",
                "submenushowfooter",
                "submenushowcontrol",
                "submenutooltiptype",
                "submenuinnergap",
                "submenuoutergap",
                "submenuitemsize",
                "subgroupitemsize",
                "subheaderitemsize",
                "subfooteritemsize",
                "subdivideritemsize",
                "subbuttonitemsize",
                "subedititemsize",
                "subviewitemsize",
                "submenuitemtype",
                "subheaderitemtype",
                "subfooteritemtype",

                // DetailMenu Prop Clone
                "detailmenuplace",
                "detailmenuposition",
                "detailmenusize",
            //  "detailmenuitemcount",
                "detailmenurowfirst",
                "detailmenuarrange",
                "detailmenuoverflow",
                "detailmenuexpandtrigger",
                "detailmenuexpandtype",
                "detailmenuexpandinitstatus",
                "detailmenuexpandindentsize",
                "detailmenushowheader",
                "detailmenushowfooter",
                "detailmenushowcontrol",
                "detailmenutooltiptype",
                "detailmenuinnergap",
                "detailmenuoutergap",
                "detailmenuitemsize",
                "detailgroupitemsize",
                "detailheaderitemsize",
                "detailfooteritemsize",
                "detaildivideritemsize",
                "detailbuttonitemsize",
                "detailedititemsize",
                "detailviewitemsize",
                "detailmenuitemtype",
                "detailheaderitemtype",
                "detailfooteritemtype",

                // Overflow Button/Menu Prop Clone
                "overflowmenutype",
                "overflowmenuplace",
                "overflowmenuposition",
                "overflowmenusize",
            //  "overflowmenuitemcount",
                "overflowmenurowfirst",
                "overflowmenuarrange",
            //  "overflowmenuoverflow",
            //  "overflowmenuexpandtrigger",
            //  "overflowmenuexpandtype",
            //  "overflowmenuexpandinitstatus",
            //  "overflowmenuexpandindentsize",
                "overflowmenushowheader",
                "overflowmenushowfooter",
            //  "overflowmenushowcontrol",
            //  "overflowmenutooltiptype",
            //  "overflowmenuinnergap",
            //  "overflowmenuoutergap",
            //  "overflowmenuitemsize",
            //  "overflowgroupitemsize",
            //  "overflowheaderitemsize",
            //  "overflowfooteritemsize",
            //  "overflowdivideritemsize",
            //  "overflowbuttonitemsize",
            //  "overflowedititemsize",
            //  "overflowviewitemsize",
            //  "overflowmenuitemtype",
            //  "overflowheaderitemtype",
            //  "overflowfooteritemtype",

                "overflowbuttonsize",
                "overflowbuttontype",
                "overflowbuttonactiontype",
            //  "overflowbuttontriggertype",

                // Overflow Scroll/Spin Prop Clone
                "spinbardecbuttonsize",
                "spinbarincbuttonsize",
                "spinbartype",
                "scrollbarbarminsize",
                "scrollbarbaroutsize",
                "scrollbardecbuttonsize",
                "scrollbarincbuttonsize",
                "scrollbarsize",
                "scrollbartrackbarsize",
                "scrollbartype",
                "scrollindicatorsize",
                "scrolltype",

            //  "scrollleaditemtype",
            //  "scrollleaditempos",

                // Select Prop Clone
                "selecttype",
                "selectchangetype",
                "selectscrollmode",
                "dataselectmode",
                "pathselectmode",
                "autoselectmode",
                "useselcolor",

                // Basic Prop Clone
                "locale",
                "enableredraw",
                "readonly"
            ]
        );
    };

    /*
    _pMegaMenu.set_enableredraw = function (v)
    {
        if (v != null && this._p_enableredraw != v)
        {
            v = nexacro._toBoolean(v);
            this._p_enableredraw = v;

            if (v)
            {
                // todo format정보 갱신
                this.on_apply_enableredraw();
            }
        }
        return v;
    };

    _pMegaMenu.on_apply_enableredraw = function ()
    {
        nexacro.ComplexComponent.prototype.on_apply_enableredraw.call(this);

        // todo enableredraw 히스토리 관리?
        if (!this._is_created)
            return;

        var down_act = this._isDownActionKeyMouse();
        if (down_act && !this._is_after_recreate)
        {
            this._after_recreate = true;
            return;
        }

        // [component.layout.items:recreate]
        this._recreateItems();
    };
    */
    /*
    _pMegaMenu.set_autoenter = function (v)
    {
        if (this._p_autoenter != v)
        {
            switch (v)
            {
                case "select":
                case "key":
                case "none":
                    this._p_autoenter = v;
                    break;
            }
        }
    };

    _pMegaMenu.set_autoupdatetype = function (v)
    {
        if (this._p_autoupdatetype != v)
        {
            switch (v)
            {
                case "none":
                case "comboselect":
                case "dateselect":
                case "itemselect":
                    this._p_autoupdatetype = v;
                    break;
            }
        }
    };
    */
    /*
    _pMegaMenu.set_ctrlclickbound = function (v)
    {
        if (this._p_ctrlclickbound != v)
        {
            switch (v)
            {
                case "control":
                case "ctrl":
                    this._p_ctrlclickbound = v;
                    break;
            }
        }
    };
    */

    // 확인 : ComplexComponet로 이동할것
    _pMegaMenu.set_nodatatext = function (v)
    {
        if (this._p_nodatatext != v)
        {
            this._p_nodatatext = v;

            this.on_apply_nodatatext();
        }
    };

    _pMegaMenu.on_apply_nodatatext = function ()
    {
        if (!this._is_created)
            return;

        // 확인 : 생성된 band/ctrl에 설정할것
        /*
        if (!this._formats || !this._formats._getCurrentItem())
        {
            var nullctrl = this._getItemChildById(0, "nullitem", "nullctrl");
            var nullctxt = this._getCtxtData(-4);
            if (nullctrl && nullctxt)
            {
                var child;

                if (nexacro._isArray(nullctxt))
                {
                    for (var i = 0; i <= nullctxt.length; i++)
                    //for (var i in nullctxt)
                    {
                        if (nullctxt[i])
                        {
                            child = nullctxt[i]._items[0];
                            if (child)
                            {
                                child["text"] = this._getStringResourceProperty(this._p_nodatatext);

                                if (child._setts["text"]) 
                                {
                                    child._setts["text"].call(nullctrl, this._getStringResourceProperty(this._p_nodatatext));
                                }
                            }
                        }
                    }
                }
                else
                {
                    child = nullctxt._items[0];
                    if (child)
                    {
                        child["text"] = this._getStringResourceProperty(this._p_nodatatext);

                        if (child._setts["text"])
                        {
                            child._setts["text"].call(nullctrl, this._getStringResourceProperty(this._p_nodatatext));
                        }
                    }
                }
            }

        }
        else
        */
        {
            this.setCtrlProperty("null", "nullctrl", "text", this._getStringResourceProperty(this._p_nodatatext));
        }
    };

    _pMegaMenu.set_nodataimage = function (v)
    {
        if (this._p_nodataimage != v)
        {
            this._p_nodataimage = v;

            this.on_apply_nodataimage();
        }
    };

    _pMegaMenu.on_apply_nodataimage = function ()
    {
        if (!this._is_created)
            return;

        // 확인 : 생성된 band/ctrl에 설정할것
        /*
        if (!this._formats || !this._formats._getCurrentItem())
        {
            var nullctrl = this._getItemChildById(0, "nullitem", "nullctrl");
            var nullctxt = this._getCtxtData(-4);
            if (nullctrl && nullctxt)
            {
                var child;

                if (nexacro._isArray(nullctxt))
                {
                    for (var i in nullctxt)
                    {
                        if (!nullctxt.hasOwnProperty(i)) continue;
                        child = nullctxt[i]._items[0];
                        if (child)
                        {
                            child["background"] = "transparent " + this._p_nodataimage + " center center no-repeat";

                            if (child._setts["background"])
                                child._setts["background"].call(nullctrl, child["background"]);
                        }
                    }
                }
                else
                {
                    child = nullctxt._items[0];
                    if (child)
                    {
                        child["background"] = "transparent " + this._p_nodataimage + " center center no-repeat";

                        if (child._setts["background"])
                            child._setts["background"].call(nullctrl, child["background"]);
                    }
                }
            }

        }
        else
        */
        {
            this.setCtrlProperty("null", "nullctrl", "background", "transparent " + this._p_nodataimage + " center center no-repeat");
        }
    };

    // TODO : ListView 확인하여 ComplexComponent로 이동
    _pMegaMenu.set_selectchangetype = function (v)
    {
        if (this._p_selectchangetype != v)
        {
            switch (v)
            {
                case "down":
                case "up":
                    this._p_selectchangetype = v;
                    break;
            }
        }
    };

    _pMegaMenu.set_selectscrollmode = function (v)
    {
        switch (v)
        {
            case "select":
            case "scroll":
                this._selectscrollmode = this._p_selectscrollmode = v;
                break;
            case "default":
                this._p_selectscrollmode = v;
                this._selectscrollmode = (nexacro._isTouchInteraction) ? "scroll" : "select";
                break;
        }
    };

    _pMegaMenu.set_selecttype = function (v)
    {
        var type_enum = ["row", "multirow"];
        if (type_enum.indexOf(v) == -1)
        {
            return;
        }

        if (this._p_selecttype != v)
        {
            this._p_selecttype = v;
        }
    };

    _pMegaMenu.set_useselcolor = function (v)
    {
        v = nexacro._toBoolean(v);

        if (this._p_useselcolor != v)
        {
            this._p_useselcolor = v;

            this.on_apply_useselcolor();
        }
    };

    _pMegaMenu.on_apply_useselcolor = function ()
    {
        if (!this._is_created)
            return;

        this._onResetUserSelected();
    };

    _pMegaMenu.set_dataselectmode = function (v)
    {
        var type_enum = ["datarowselect", "itemonlyselect", "datarowselect,correct"];
        if (type_enum.indexOf(v) >= 0 && this._p_dataselectmode != v)
        {
            this._p_dataselectmode = v;
            this._onInitSelect();
        }
    };

    _pMegaMenu.set_pathselectmode = function (v)
    {
        var type_enum = ["curitemselect", "allitemselect"];
        if (type_enum.indexOf(v) >= 0 && this._p_pathselectmode != v)
        {
            this._p_pathselectmode = v;
            this._p_levelselect = v == "allitemselect";
            this._onInitSelect();
        }
    };

    _pMegaMenu.set_autoselectmode = function (v)
    {
        var type_enum = ["scrollselect" /*, "hoverselect", "hoverbranchselect", "hoverleafselect", "noautoscroll" */];
        if (type_enum.indexOf(v) >= 0 && this._p_autoselectmode != v)
        {
            this._p_autoselectmode = v;
            this._onInitSelect();
        }
    };

    /*
    _pMegaMenu.set_scrollleaditemtype = function (v)
    {
        if (this._p_scrollleaditemtype != v)
        {
            this._p_scrollleaditemtype = v;
        }
    };    
    _pMegaMenu.set_scrollleaditempos = function (v)
    {
        var type_enum = ["unused", "first", "middle"];
        if (type_enum.indexOf(v)>= 0 && this._p_scrollleaditempos != v)
        {
            this._p_scrollleaditempos = v;
        }
    };
    */

    /*
    _pMegaMenu.set_usesoftkeyboard = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_usesoftkeyboard != v)
        {
            this._p_usesoftkeyboard = v;
    
            if (!this._initsoftkeyboard)
                this._initsoftkeyboard = true;
        }
    };
    
    _pMegaMenu.set_ctrlswitchsize = function (v)
    {
        if (v != this._p_ctrlswitchsize)
        {
            this._p_ctrlswitchsize = v;
            this.on_apply_ctrlswitchsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlswitchsize = function ()
    {
        if (!this._is_created)
            return;
    
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlcalendarbuttonsize = function (v)
    {
        if (v != this._p_ctrlcalendarbuttonsize)
        {
            this._p_ctrlcalendarbuttonsize = v;
            this.on_apply_ctrlcalendarbuttonsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcalendarbuttonsize = function ()
    {
        if (!this._is_created)
            return;
    
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlcombobuttonsize = function (v)
    {
        if (v != this._p_ctrlcombobuttonsize)
        {
            this._p_ctrlcombobuttonsize = v;
            this.on_apply_ctrlcombobuttonsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcombobuttonsize = function ()
    {
        if (!this._is_created)
            return;
    
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlmulticombobuttonsize = function (v)
    {
        if (v != this._p_ctrlmulticombobuttonsize)
        {
            this._p_ctrlmulticombobuttonsize = v;
            this.on_apply_ctrlmulticombobuttonsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlmulticombobuttonsize = function ()
    {
        if (!this._is_created)
            return;
    
        this._recreateItems();
    };
    */

    _pMegaMenu.set_locale = function (v)
    {
        if (v != this._p_locale)
        {
            this._p_locale = v;
            this._locale = v;
            this.on_apply_locale(v);
        }
    };

    _pMegaMenu.on_apply_locale = function (v)
    {
        if (!this._is_created)
            return;

        this._recreateItems();
    };
    /*
    _pMegaMenu.set_ctrlcalendarpopuptype = function (v)
    {
        if (v != this._p_ctrlcalendarpopuptype)
        {
            this._p_ctrlcalendarpopuptype = v;
            this.on_apply_ctrlcalendarpopuptype();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcalendarpopuptype = function ()
    {
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlcombopopuptype = function (v)
    {
        if (v != this._p_ctrlcombopopuptype)
        {
            this._p_ctrlcombopopuptype = v;
            this.on_apply_ctrlcombopopuptype();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcombopopuptype = function ()
    {
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlmulticombopopuptype = function (v)
    {
        if (v != this._p_ctrlmulticombopopuptype)
        {
            this._p_ctrlmulticombopopuptype = v;
            this.on_apply_ctrlmulticombopopuptype();
        }
    };
    
    _pMegaMenu.on_apply_ctrlmulticombopopuptype = function ()
    {
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlcalendarpopupsize = function (v)
    {
        if (v != this._p_ctrlcalendarpopupsize)
        {
            this._p_ctrlcalendarpopupsize = v;
            this.on_apply_ctrlcalendarpopupsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcalendarpopupsize = function ()
    {
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlcombopopupsize = function (v)
    {
        if (v != this._p_ctrlcombopopupsize)
        {
            this._p_ctrlcombopopupsize = v;
            this.on_apply_ctrlcombopopupsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlcombopopupsize = function ()
    {
        this._recreateItems();
    };
    
    _pMegaMenu.set_ctrlmulticombopopupsize = function (v)
    {
        if (v != this._p_ctrlmulticombopopupsize)
        {
            this._p_ctrlmulticombopopupsize = v;
            this.on_apply_ctrlmulticombopopupsize();
        }
    };
    
    _pMegaMenu.on_apply_ctrlmulticombopopupsize = function ()
    {
        this._recreateItems();
    };
    */

//  _pMegaMenu.set_mainmenuplace                = function (v) { if (this._p_mainmenuplace              != v) { this._p_mainmenuplace               = v;                                                    this.on_apply_mainmenuregionprop(); } };
//  _pMegaMenu.set_mainmenuposition             = function (v) { if (this._p_mainmenuposition           != v) { this._p_mainmenuposition            = v;                                                    this.on_apply_mainmenuregionprop(); } };
//  _pMegaMenu.set_mainmenusize                 = function (v) { if (this._p_mainmenusize               != v) { this._p_mainmenusize                = v;                                                    this.on_apply_mainmenuregionprop(); } };
//  _pMegaMenu.set_mainmenuitemcount            = function (v) { if (this._p_mainmenuitemcount          != v) { this._p_mainmenuitemcount           = v;                                                    this.on_apply_mainmenuregionprop(); } };

    _pMegaMenu.set_mainmenuexpandtype           = function (v) { if (this._p_mainmenuexpandtype         != v) { this._p_mainmenuexpandtype          = v;                                                    this.on_apply_mainmenuexpandprop(); } };
    _pMegaMenu.set_mainmenuexpandtrigger        = function (v) { if (this._p_mainmenuexpandtrigger      != v) { this._p_mainmenuexpandtrigger       = v;                                                    this.on_apply_mainmenuexpandprop(); } };
    _pMegaMenu.set_mainmenuexpandinitstatus     = function (v) { if (this._p_mainmenuexpandinitstatus   != v) { this._p_mainmenuexpandinitstatus    = v;                                                    this.on_apply_mainmenuexpandprop(); } };
//  _pMegaMenu.set_mainmenuexpandindentsize     = function (v) { if (this._p_mainmenuexpandindentsize   != v) { this._p_mainmenuexpandindentsize    = v;                                                    this.on_apply_mainmenuexpandprop(); } };

    _pMegaMenu.set_mainmenurowfirst             = function (v) { if (this._p_mainmenurowfirst           != v) { this._p_mainmenurowfirst            = nexacro._isNullEmpty(v) ? v : nexacro._toBoolean(v);  this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuarrange              = function (v) { if (this._p_mainmenuarrange            != v) { this._p_mainmenuarrange             = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuoverflow             = function (v) { if (this._p_mainmenuoverflow           != v) { this._p_mainmenuoverflow            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenushowheader           = function (v) { if (this._p_mainmenushowheader         != v) { this._p_mainmenushowheader          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenushowfooter           = function (v) { if (this._p_mainmenushowfooter         != v) { this._p_mainmenushowfooter          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenushowcontrol          = function (v) { if (this._p_mainmenushowcontrol        != v) { this._p_mainmenushowcontrol         = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenutooltiptype          = function (v) { if (this._p_mainmenutooltiptype        != v) { this._p_mainmenutooltiptype         = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuinnergap             = function (v) { if (this._p_mainmenuinnergap           != v) { this._p_mainmenuinnergap            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuoutergap             = function (v) { if (this._p_mainmenuoutergap           != v) { this._p_mainmenuoutergap            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuitemsize             = function (v) { if (this._p_mainmenuitemsize           != v) { this._p_mainmenuitemsize            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_maingroupitemsize            = function (v) { if (this._p_maingroupitemsize          != v) { this._p_maingroupitemsize           = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainheaderitemsize           = function (v) { if (this._p_mainheaderitemsize         != v) { this._p_mainheaderitemsize          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainfooteritemsize           = function (v) { if (this._p_mainfooteritemsize         != v) { this._p_mainfooteritemsize          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_maindivideritemsize          = function (v) { if (this._p_maindivideritemsize        != v) { this._p_maindivideritemsize         = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainbuttonitemsize           = function (v) { if (this._p_mainbuttonitemsize         != v) { this._p_mainbuttonitemsize          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainedititemsize             = function (v) { if (this._p_mainedititemsize           != v) { this._p_mainedititemsize            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainviewitemsize             = function (v) { if (this._p_mainviewitemsize           != v) { this._p_mainviewitemsize            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainmenuitemtype             = function (v) { if (this._p_mainmenuitemtype           != v) { this._p_mainmenuitemtype            = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainheaderitemtype           = function (v) { if (this._p_mainheaderitemtype         != v) { this._p_mainheaderitemtype          = v;                                                    this.on_apply_mainmenulayoutprop(); } };
    _pMegaMenu.set_mainfooteritemtype           = function (v) { if (this._p_mainfooteritemtype         != v) { this._p_mainfooteritemtype          = v;                                                    this.on_apply_mainmenulayoutprop(); } };

    /*
    _pMegaMenu.on_apply_mainmenuregionprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };
    */
    _pMegaMenu.on_apply_mainmenuexpandprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recalcLayout(true);
    };
    _pMegaMenu.on_apply_mainmenulayoutprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };


    _pMegaMenu.set_submenuplace                 = function (v) { if (this._p_submenuplace               != v) { this._p_submenuplace                = v;                                                    this.on_apply_submenuregionprop(); } };
    _pMegaMenu.set_submenuposition              = function (v) { if (this._p_submenuposition            != v) { this._p_submenuposition             = v;                                                    this.on_apply_submenuregionprop(); } };
    _pMegaMenu.set_submenusize                  = function (v) { if (this._p_submenusize                != v) { this._p_submenusize                 = v;                                                    this.on_apply_submenuregionprop(); } };
//  _pMegaMenu.set_submenuitemcount             = function (v) { if (this._p_submenuitemcount           != v) { this._p_submenuitemcount            = v;                                                    this.on_apply_submenuregionprop(); } };

    _pMegaMenu.set_submenuexpandtype            = function (v) { if (this._p_submenuexpandtype          != v) { this._p_submenuexpandtype           = v;                                                    this.on_apply_submenuexpandprop(); } };
    _pMegaMenu.set_submenuexpandtrigger         = function (v) { if (this._p_submenuexpandtrigger       != v) { this._p_submenuexpandtrigger        = v;                                                    this.on_apply_submenuexpandprop(); } };
    _pMegaMenu.set_submenuexpandinitstatus      = function (v) { if (this._p_submenuexpandinitstatus    != v) { this._p_submenuexpandinitstatus     = v;                                                    this.on_apply_submenuexpandprop(); } };
    _pMegaMenu.set_submenuexpandindentsize      = function (v) { if (this._p_submenuexpandindentsize    != v) { this._p_submenuexpandindentsize     = v;                                                    this.on_apply_submenuexpandprop(); } };

    _pMegaMenu.set_submenurowfirst              = function (v) { if (this._p_submenurowfirst            != v) { this._p_submenurowfirst             = nexacro._isNullEmpty(v) ? v : nexacro._toBoolean(v);  this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuarrange               = function (v) { if (this._p_submenuarrange             != v) { this._p_submenuarrange              = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuoverflow              = function (v) { if (this._p_submenuoverflow            != v) { this._p_submenuoverflow             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenushowheader            = function (v) { if (this._p_submenushowheader          != v) { this._p_submenushowheader           = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenushowfooter            = function (v) { if (this._p_submenushowfooter          != v) { this._p_submenushowfooter           = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenushowcontrol           = function (v) { if (this._p_submenushowcontrol         != v) { this._p_submenushowcontrol          = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenutooltiptype           = function (v) { if (this._p_submenutooltiptype         != v) { this._p_submenutooltiptype          = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuinnergap              = function (v) { if (this._p_submenuinnergap            != v) { this._p_submenuinnergap             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuoutergap              = function (v) { if (this._p_submenuoutergap            != v) { this._p_submenuoutergap             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuitemsize              = function (v) { if (this._p_submenuitemsize            != v) { this._p_submenuitemsize             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subgroupitemsize             = function (v) { if (this._p_subgroupitemsize           != v) { this._p_subgroupitemsize            = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subheaderitemsize            = function (v) { if (this._p_subheaderitemsize          != v) { this._p_subheaderitemsize           = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subfooteritemsize            = function (v) { if (this._p_subfooteritemsize          != v) { this._p_subfooteritemsize           = v;                                                    this.on_apply_submenulayoutprop(); } }
    _pMegaMenu.set_subdivideritemsize           = function (v) { if (this._p_subdivideritemsize         != v) { this._p_subdivideritemsize          = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subbuttonitemsize            = function (v) { if (this._p_subbuttonitemsize          != v) { this._p_subbuttonitemsize           = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subedititemsize              = function (v) { if (this._p_subedititemsize            != v) { this._p_subedititemsize             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subviewitemsize              = function (v) { if (this._p_subviewitemsize            != v) { this._p_subviewitemsize             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_submenuitemtype              = function (v) { if (this._p_submenuitemtype            != v) { this._p_submenuitemtype             = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subheaderitemtype            = function (v) { if (this._p_subheaderitemtype          != v) { this._p_subheaderitemtype           = v;                                                    this.on_apply_submenulayoutprop(); } };
    _pMegaMenu.set_subfooteritemtype            = function (v) { if (this._p_subfooteritemtype          != v) { this._p_subfooteritemtype           = v;                                                    this.on_apply_submenulayoutprop(); } };

    _pMegaMenu.on_apply_submenuregionprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };
    _pMegaMenu.on_apply_submenuexpandprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recalcLayout(true);
    };
    _pMegaMenu.on_apply_submenulayoutprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };

    _pMegaMenu.set_detailmenuplace              = function (v) { if (this._p_detailmenuplace            != v) { this._p_detailmenuplace             = v;                                                    this.on_apply_detailmenuregionprop(); } };
    _pMegaMenu.set_detailmenuposition           = function (v) { if (this._p_detailmenuposition         != v) { this._p_detailmenuposition          = v;                                                    this.on_apply_detailmenuregionprop(); } };
    _pMegaMenu.set_detailmenusize               = function (v) { if (this._p_detailmenusize             != v) { this._p_detailmenusize              = v;                                                    this.on_apply_detailmenuregionprop(); } };
//  _pMegaMenu.set_detailmenuitemcount          = function (v) { if (this._p_detailmenuitemcount        != v) { this._p_detailmenuitemcount         = v;                                                    this.on_apply_detailmenuregionprop(); } };

    _pMegaMenu.set_detailmenuexpandtype         = function (v) { if (this._p_detailmenuexpandtype       != v) { this._p_detailmenuexpandtype        = v;                                                    this.on_apply_detailmenuexpandprop(); } };
    _pMegaMenu.set_detailmenuexpandtrigger      = function (v) { if (this._p_detailmenuexpandtrigger    != v) { this._p_detailmenuexpandtrigger     = v;                                                    this.on_apply_detailmenuexpandprop(); } };
    _pMegaMenu.set_detailmenuexpandinitstatus   = function (v) { if (this._p_detailmenuexpandinitstatus != v) { this._p_detailmenuexpandinitstatus  = v;                                                    this.on_apply_detailmenuexpandprop(); } };
    _pMegaMenu.set_detailmenuexpandindentsize   = function (v) { if (this._p_detailmenuexpandindentsize != v) { this._p_detailmenuexpandindentsize  = v;                                                    this.on_apply_detailmenuexpandprop(); } };

    _pMegaMenu.set_detailmenurowfirst           = function (v) { if (this._p_detailmenurowfirst         != v) { this._p_detailmenurowfirst          = nexacro._isNullEmpty(v) ? v : nexacro._toBoolean(v);  this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuarrange            = function (v) { if (this._p_detailmenuarrange          != v) { this._p_detailmenuarrange           = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuoverflow           = function (v) { if (this._p_detailmenuoverflow         != v) { this._p_detailmenuoverflow          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenushowheader         = function (v) { if (this._p_detailmenushowheader       != v) { this._p_detailmenushowheader        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenushowfooter         = function (v) { if (this._p_detailmenushowfooter       != v) { this._p_detailmenushowfooter        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenushowcontrol        = function (v) { if (this._p_detailmenushowcontrol      != v) { this._p_detailmenushowcontrol       = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenutooltiptype        = function (v) { if (this._p_detailmenutooltiptype      != v) { this._p_detailmenutooltiptype       = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuinnergap           = function (v) { if (this._p_detailmenuinnergap         != v) { this._p_detailmenuinnergap          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuoutergap           = function (v) { if (this._p_detailmenuoutergap         != v) { this._p_detailmenuoutergap          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuitemsize           = function (v) { if (this._p_detailmenuitemsize         != v) { this._p_detailmenuitemsize          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailgroupitemsize          = function (v) { if (this._p_detailgroupitemsize        != v) { this._p_detailgroupitemsize         = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailheaderitemsize         = function (v) { if (this._p_detailheaderitemsize       != v) { this._p_detailheaderitemsize        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailfooteritemsize         = function (v) { if (this._p_detailfooteritemsize       != v) { this._p_detailfooteritemsize        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detaildivideritemsize        = function (v) { if (this._p_detaildivideritemsize      != v) { this._p_detaildivideritemsize       = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailbuttonitemsize         = function (v) { if (this._p_detailbuttonitemsize       != v) { this._p_detailbuttonitemsize        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailedititemsize           = function (v) { if (this._p_detailedititemsize         != v) { this._p_detailedititemsize          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailviewitemsize           = function (v) { if (this._p_detailviewitemsize         != v) { this._p_detailviewitemsize          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailmenuitemtype           = function (v) { if (this._p_detailmenuitemtype         != v) { this._p_detailmenuitemtype          = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailheaderitemtype         = function (v) { if (this._p_detailheaderitemtype       != v) { this._p_detailheaderitemtype        = v;                                                    this.on_apply_detailmenulayoutprop(); } };
    _pMegaMenu.set_detailfooteritemtype         = function (v) { if (this._p_detailfooteritemtype       != v) { this._p_detailfooteritemtype        = v;                                                    this.on_apply_detailmenulayoutprop(); } };

    // TODO : 동일로직이면 1개로 통합
    _pMegaMenu.on_apply_detailmenuregionprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };
    _pMegaMenu.on_apply_detailmenuexpandprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recalcLayout(true);
    };
    _pMegaMenu.on_apply_detailmenulayoutprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(true, true);
    };

    _pMegaMenu.set_overflowmenutype         = function (v) { if (this._p_overflowmenutype           != v) { this._p_overflowmenutype         = v;                                                   this.on_apply_overflowmenuregionprop(); } };
    _pMegaMenu.set_overflowmenuplace        = function (v) { if (this._p_overflowmenuplace          != v) { this._p_overflowmenuplace        = v;                                                   this.on_apply_overflowmenuregionprop(); } };
    _pMegaMenu.set_overflowmenuposition     = function (v) { if (this._p_overflowmenuposition       != v) { this._p_overflowmenuposition     = v;                                                   this.on_apply_overflowmenuregionprop(); } };
    _pMegaMenu.set_overflowmenusize         = function (v) { if (this._p_overflowmenusize           != v) { this._p_overflowmenusize         = v;                                                   this.on_apply_overflowmenuregionprop(); } };
    _pMegaMenu.set_overflowmenuindentsize   = function (v) { if (this._p_overflowmenuindentsize     != v) { this._p_overflowmenuindentsize   = v;                                                   this.on_apply_overflowmenuregionprop(); } };
//  _pMegaMenu.set_overflowmenuitemcount    = function (v) { if (this._p_overflowmenuitemcount      != v) { this._p_overflowmenuitemcount    = v;                                                   this.on_apply_overflowmenuregionprop(); } };

    // TODO : expand/overflow 중 1개 변수만 사용하도록 통합
    _pMegaMenu.set_overflowbuttonsize       = function (v) { if (this._p_overflowbuttonsize         != v) { this._p_overflowbuttonsize       = v;                                                   this.on_apply_overflowmenuexpandprop(); } };
    _pMegaMenu.set_overflowbuttontype       = function (v) { if (this._p_overflowbuttontype         != v) { this._p_overflowbuttontype       = v;                                                   this.on_apply_overflowmenuexpandprop(); } };
    _pMegaMenu.set_overflowbuttonactiontype = function (v) { if (this._p_overflowbuttonactiontype   != v) { this._p_overflowbuttonactiontype = v;                                                   this.on_apply_overflowmenuexpandprop(); } };

    _pMegaMenu.set_overflowmenurowfirst     = function (v) { if (this._p_overflowmenurowfirst       != v) { this._p_overflowmenurowfirst     = nexacro._isNullEmpty(v) ? v : nexacro._toBoolean(v); this.on_apply_overflowmenulayoutprop(); } };
    _pMegaMenu.set_overflowmenuarrange      = function (v) { if (this._p_overflowmenuarrange        != v) { this._p_overflowmenuarrange      = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
    _pMegaMenu.set_overflowmenuoverflow     = function (v) { if (this._p_overflowmenuoverflow       != v) { this._p_overflowmenuoverflow     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
    _pMegaMenu.set_overflowmenushowheader   = function (v) { if (this._p_overflowmenushowheader     != v) { this._p_overflowmenushowheader   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
    _pMegaMenu.set_overflowmenushowfooter   = function (v) { if (this._p_overflowmenushowfooter     != v) { this._p_overflowmenushowfooter   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };

//  _pMegaMenu.set_overflowmenushowcontrol  = function (v) { if (this._p_overflowmenushowcontrol    != v) { this._p_overflowmenushowcontrol  = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowmenutooltiptype  = function (v) { if (this._p_overflowmenutooltiptype    != v) { this._p_overflowmenutooltiptype  = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowmenuinnergap     = function (v) { if (this._p_overflowmenuinnergap       != v) { this._p_overflowmenuinnergap     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowmenuoutergap     = function (v) { if (this._p_overflowmenuoutergap       != v) { this._p_overflowmenuoutergap     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowmenuitemsize     = function (v) { if (this._p_overflowmenuitemsize       != v) { this._p_overflowmenuitemsize     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowgroupitemsize    = function (v) { if (this._p_overflowgroupitemsize      != v) { this._p_overflowgroupitemsize    = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowheaderitemsize   = function (v) { if (this._p_overflowheaderitemsize     != v) { this._p_overflowheaderitemsize   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowfooteritemsize   = function (v) { if (this._p_overflowfooteritemsize     != v) { this._p_overflowfooteritemsize   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowdivideritemsize  = function (v) { if (this._p_overflowdivideritemsize    != v) { this._p_overflowdivideritemsize  = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowbuttonitemsize   = function (v) { if (this._p_overflowbuttonitemsize     != v) { this._p_overflowbuttonitemsize   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowedititemsize     = function (v) { if (this._p_overflowedititemsize       != v) { this._p_overflowedititemsize     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowviewitemsize     = function (v) { if (this._p_overflowviewitemsize       != v) { this._p_overflowviewitemsize     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowmenuitemtype     = function (v) { if (this._p_overflowmenuitemtype       != v) { this._p_overflowmenuitemtype     = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowheaderitemtype   = function (v) { if (this._p_overflowheaderitemtype     != v) { this._p_overflowheaderitemtype   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };
//  _pMegaMenu.set_overflowfooteritemtype   = function (v) { if (this._p_overflowfooteritemtype     != v) { this._p_overflowfooteritemtype   = v;                                                   this.on_apply_overflowmenulayoutprop(); } };


    // TODO : 동일로직이면 1개로 통합, _recreateContents 대신 _recalcLayout 적용
    _pMegaMenu.on_apply_overflowmenuregionprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(false, true);
    };    
    _pMegaMenu.on_apply_overflowmenuexpandprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recalcLayout(true);
    };    
    _pMegaMenu.on_apply_overflowmenulayoutprop = function ()
    {
        if (!this._is_created) return;

        this._onApplyMenuProperties();
        this._recreateContents(false, true);
    };

    /*
    _pMegaMenu.set_selector = function (v)
    {
        if (v && v != this._p_selector)
        {
            // set property value
            this._p_selector = v;
    
            var arr = this._p_selector ? this._p_selector.split(",") : [];
    
            for (var i = 0, l = arr.length; i < l; i++)
            {
                switch (arr[i])
                {
                    case "line"     : this._selector |= nexacro._PanelSelectConst.TYPE_LINE;    break;
                    case "area"     : this._selector |= nexacro._PanelSelectConst.TYPE_AREA;    break;
                    case "resizer"  : this._selector |= nexacro._PanelSelectConst.ACT_RESIZER;  break;
                    case "pointer"  : this._selector |= nexacro._PanelSelectConst.ACT_POINTER;  break;
                    case "carrier"  : this._selector |= nexacro._PanelSelectConst.ACT_CARRIER;  break;
                    case "horz"     : this._selector |= nexacro._PanelSelectConst.DIR_HORZ;     break;
                    case "vert"     : this._selector |= nexacro._PanelSelectConst.DIR_VERT;     break;
                    case "inner"    : this._selector |= nexacro._PanelSelectConst.ALIGN_INNER;  break;
                    case "outer"    : this._selector |= nexacro._PanelSelectConst.ALIGN_OUTER;  break;
                    case "middle"   : this._selector |= nexacro._PanelSelectConst.ALIGN_MIDDL;  break;

                    case "parts"    : this._use_selector = true; this._use_partsselector = true; break;
                    case "multi"    : this._use_selector = true; this._use_multiselector = true; break;
                    case "none"     : this._use_selector = false; break;
                }
            }
    
            // apply property value
            this.on_apply_selector();
        }
    };
    
    _pMegaMenu.on_apply_selector = function ()
    {
        if (!this._is_created)
            return;
    
        // [component.layout.panel._p_selector:init]               
        var panel = this._getPanel();
    
        if (panel)
            panel._setSlotSelectorType(this._selector);
    
        // [component.layout._p_selector:recreate]
        this._recreateSelector();
    };
    
    _pMegaMenu.set_createrowstype = function (type)
    {
        type = type ? type.toString() : "";
        if (type !== this._p_createrowstype)
        {
            switch (type)
            {
                case "auto":
                case "all":
                    this._p_createrowstype = type;
                    break;
                default:
                    this._p_createrowstype = "auto";
                    break;
            }
    
            this.on_apply_prop_createrowstype();
        }
    };
    */


    //===============================================================
    // nexacro.MegaMenu : Methods
    //===============================================================
    // Dataset Method

    _pMegaMenu.getInnerDataset = function ()
    {
        return this._getBindDataSet();
    };

    _pMegaMenu.setInnerDataset = function (objDataset)
    {
        if (this._is_jsonbind || this._is_xmlbind )
        {
            this._clearBindDataSource();
            this._is_jsonbind = this._is_xmlbind = false;
        }

        return this.set_innerdataset(objDataset);
    };

    _pMegaMenu.setInnerDataSource = function (datasource)
    {
        if (!this._is_jsonbind && !this._is_xmlbind )
        {
            this._clearBindDataSource();
            this._is_jsonbind = this._is_xmlbind = true;
        }

        return this.set_innerdatactx(datasource);
    };


    // 확인 : ComplexComponent로 이동
    /*
    // Format Method
    _pMegaMenu.createFormat = function ()
    {
        return this.set_formats(this.makeFormatString());
    };

    _pMegaMenu.getCurFormatString = function (bOriginal)
    {
        if (this._formats)
        {
            if (bOriginal)
            {
                return this._formats._getFormatsStringFromXml(this.formats, this.formatid);
            }
            else
            {
                return this._formats._getFormatsStringFromContext(this.formatid);
            }
        }
        return "";
    };

    _pMegaMenu.getFormatString = function ()
    {
        return this.formats;
    };

    _pMegaMenu.setFormat = function (id)
    {
        this.set_formatid(id);

        return this._formats ? !this._formats._isInvalid() : false;
    };

    _pMegaMenu.makeFormatString = function ()
    {
        var _makeFormatStringByCol = function (type, name, colinfo, bindable, l, t, w, h, r, b)
        {
            var fmt = "<" + type + " id=\"" + name + "\"";

            if (l != null) fmt += " left=\"" + l + "\"";
            if (r != null) fmt += " right=\"" + r + "\"";
            if (t != null) fmt += " top=\"" + t + "\"";
            if (b != null) fmt += " bottom=\"" + b + "\"";
            if (w != null) fmt += " width=\"" + w + "\"";
            if (h != null) fmt += " height=\"" + h + "\"";

            if (bindable)
            {
                fmt += " text=\"bind:" + colinfo.id + "\"";
            }
            else
            {
                fmt += " text=\"" + colinfo.id + "\"";
            }
            fmt += "/>";

            return fmt;
        };

        var ret = "";

        var formats = this._formats;
        var data = this._databind;
        if (formats && data)
        {
            ret += "<Formats>";
            ret += "<Format id=\"" + formats._default_id + "\">";

            var bandformat = "";
            var ctrlformat = "";

            var colinfos = data._getBindDataSetColInfos();
            if (colinfos)
            {
                var bandtype = "Band";
                var ctrltype = "Ctrl";

                var l = 0;
                var t = 5;

                var contents_h = 24;

                var label_gap = 10;
                var editor_gap = 5;
                var line_gap = 5;

                var label_w = 120;
                var editor_w = label_w * 1.5;
                var contents_w = label_gap + label_w + editor_gap + editor_w;

                var target_w = this._adjust_width;
                //var target_h = this._adjust_height;

                var colinfo, ctrlname, labelname;
                var ctrlcnt = 0;
                for (var i = 0; i < colinfos.length; i++)
                {
                    colinfo = colinfos[i];
                    labelname = ctrlcnt < 10 ? ctrltype + "0" + ctrlcnt : ctrltype + ctrlcnt;
                    ctrlcnt++;
                    ctrlname = ctrlcnt < 10 ? ctrltype + "0" + ctrlcnt : ctrltype + ctrlcnt;
                    ctrlcnt++;

                    // LabelCtrl Contents ( nobind )
                    if (i > 0)
                    {
                        // first contents set은 무조건 보장. 그뒤의 contents set은 붙여그릴지 밑으로 갈지 결정.
                        if (l + contents_w >= target_w)
                        {
                            l = label_gap;
                            t += contents_h + line_gap;
                        }
                        else
                        {
                            l += label_gap;
                        }
                    }
                    else
                    {
                        l += label_gap;
                    }

                    ctrlformat += _makeFormatStringByCol(ctrltype, labelname, colinfo, false, l, t, label_w, contents_h, null, null);

                    // EditorCtrl Contents
                    l += label_w + editor_gap;

                    ctrlformat += _makeFormatStringByCol(ctrltype, ctrlname, colinfo, true, l, t, editor_w, contents_h, null, null);

                    l += editor_w;
                }

                bandformat = "<" + bandtype + " id=\"body\" width=\"100%\" height=\"" + (t + contents_h + line_gap) + "\">";

                ret += bandformat;
                ret += ctrlformat;
                ret += "</" + bandtype + ">";
            }

            ret += "</Format>";
            ret += "</Formats>";
        }

        return ret;
    };

    _pMegaMenu.getFormatIdList = function ()
    {
        if (!this._formats || !this._formats._format_items)
            return [];

        var list = [];
        for (var formatid in this._formats._format_items)
        {
            list.push(formatid);
        }
        return list;
    };

    // Head Method
    _pMegaMenu.getHeadValue = nexacro._emptyFn;
    */

    // Item Method
    _pMegaMenu.getBandProperty = function (bandid, propid)
    {
        return this._formats ? this._formats._getBandProperty(bandid, propid) : undefined;
    };

    _pMegaMenu.setBandProperty = function (bandid, propid, propval)
    {
        if (!this._formats || !this._formats._setBandProperty(bandid, propid, propval))
            return false;

        this._resetBindInfo();
        this._recreateItems();

        return true;
    };

    // Ctrl Method

    _pMegaMenu.getCtrlCount = function (bandid)
    {
        return this._formats ? this._formats._getBandChildCount(bandid) : 0;
    };

    _pMegaMenu.getCtrlProperty = function (bandid, ctrlid, propid)
    {
        if (!this._formats)
            return;

    //  return this._formats ? this._formats._getBandChildProperty(bandid, ctrlid, propid) : undefined;
        return this._getCtrlinfo(bandid, ctrlid, propid);
    };

    _pMegaMenu.setCtrlProperty = function (bandid, ctrlid, propid, propval)
    {
        if (propid == "id") // 동적설정 허용안함.
            return false;

        if (!this._formats || !this._formats._setBandChildProperty(bandid, ctrlid, propid, propval))
            return false;

        this._resetBindInfo();

        // Control이 Cell일때에 처리 (Cell 허용시)
        /*
        if (!this._changeCtrlInfo(bandid, ctrlid, propid, propval))
            return false;
        */

        this._recreateItems();

        return true;
    };

    /*
    _pMegaMenu.getCtrlRect = function (rowindex, bandid, ctrlid)
    {
        rowindex = parseInt(rowindex);

        var rect = { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 };

        var child = this._getItemChildById(rowindex, bandid, ctrlid);
        if (child)
        {
            var subindex = child._bandidx;
            var base = this._onGetItemRect(rowindex, subindex, null, true);

            rect.left = child.getOffsetLeft() + base.left;
            rect.top = child.getOffsetTop() + base.top;
            rect.right = child.getOffsetRight() + base.left;
            rect.bottom = child.getOffsetBottom() + base.top;
            rect.width = rect.right - rect.left;
            rect.height = rect.bottom - rect.top;
        }

        return rect;
    };

    _pMegaMenu.getCtrlText = function (rowindex, bandid, ctrlid)
    {
        var ctrl = this._getItemChildById(rowindex, bandid, ctrlid);
        if (ctrl)
        {
            if (ctrl._getCtrlText)
                return ctrl._getCtrlText();
            else
                return ctrl._p_text;
        }
    };

    _pMegaMenu.getCtrlValue = function (rowindex, bandid, ctrlid)
    {
        var ctrl = this._getItemChildById(rowindex, bandid, ctrlid);
        if (ctrl)
        {
            if (ctrl._getCtrlValue)
                return ctrl._getCtrlValue();
            else
                return ctrl._p_value;
        }
    };

    _pMegaMenu.redrawExprCtrl = function (bandid)
    {
        var item, i;

        if (!bandid)
        {
            var bind_count = this._getBindCount();
            for (i = 0; i < bind_count; i++)
            {
                item = this._getItem(i);
                if (item)
                {
                    this._updateItem(item, i, undefined);
                }
            }
        }
        else
        {
            var bandseq;
            switch (bandid)
            {
                case "main":
                    bandseq = 0;
                    break;
                case "detail":
                    bandseq = 1;
                    break;
            }

            if (bandseq != undefined)
            {
                var items = this._getItems();
                for (i = 0; i < items.length; i++)
                {
                    item = items[i];
                    if (bandseq == this._formats._getBandSeq(item.id))
                    {
                        this._updateItem(item, item._rowidx, undefined, bandseq);
                    }
                }
            }
        }
    };

    // Ctrl Editor Method
    _pMegaMenu.getCurEditType = function ()
    {
        var currselect = this.getSelect();
        var ctrl = this._getItemChildByIndex(currselect.row, currselect.band, currselect.ctrl);
        if (ctrl)
        {
            if (ctrl._getCtrlEditType)
                return ctrl._getCtrlEditType();
        }
    };

    _pMegaMenu.showEditor = function (show)
    {
        // check first
        if (this._p_readonly)
            return false;

        var currselect = this.getSelect();
        var ctrl = this._getItemChildByIndex(currselect.row, currselect.band, currselect.ctrl);

        // check second
        if (ctrl)
        {
            if (ctrl._hasEditor())
            {
                if (show === undefined)
                    show = true;
                else
                    show = nexacro._toBoolean(show);

                // check third
                if (ctrl._isShowEditor() == show)
                    return false;

                if (show)
                {
                    if (ctrl._showEditor)
                        ctrl._showEditor();
                }
                else
                {
                    if (ctrl._hideEditor)
                        ctrl._hideEditor();
                }

                return true;
            }
            else
            {
                var edittype = ctrl._refinfo._getEdittype(currselect.row);
                if (edittype == "switch")
                {
                    return true;
                }
            }
        }

        return false;
    };
    */

    // Ctrl Focus Method
    /*
    _pMegaMenu.moveToNextItem = function ()
    {
        var beforeselect = this.getSelect();

        this._selectItemKeyInfo(nexacro.Event.KEY_TAB, false, false, false);

        var afterselect = this.getSelect();

        if (beforeselect.row != afterselect.row || beforeselect.band != afterselect.band || beforeselect.ctrl != afterselect.ctrl)
        {
            return true;
        }

        return false;
    };

    _pMegaMenu.moveToPrevItem = function ()
    {
        var beforeselect = this.getSelect();

        this._selectItemKeyInfo(nexacro.Event.KEY_TAB, false, false, true);

        var afterselect = this.getSelect();

        if (beforeselect.row != afterselect.row || beforeselect.band != afterselect.band || beforeselect.ctrl != afterselect.ctrl)
        {
            return true;
        }

        return false;
    };

    _pMegaMenu.setItemPos = function (bandid, ctrlid)
    {
        var currselect = this.getSelect();
        var ctrl = this._getItemChildById(currselect.row, bandid, ctrlid);
        if (ctrl && ctrl._isEnable() && ctrl.setFocus())
        {
            return true;
        }

        return false;
    };
    */

    // Expand Method

    // 확인 : Detail Band Collapse/Expand/Popup 처리여부
    /*
    _pMegaMenu.hideDetailBand = function (rowindex)
    {
        var itemindex = rowindex;

        var panel = this._getPanel();
        var slot  = panel ? panel._getPanelSlot(itemindex) : null;

        if (slot)
        {
            var bandstatus = slot._getSlotStatusBand();

            this._setPanelBandCollapse(itemindex);

            if (bandstatus != (bandstatus = slot._getSlotStatusBand()))
            {
                this._on_fire_onbandstatuschanged(itemindex, bandstatus, this, this);
            }

            var items = this._getItem(itemindex);
            if (items)
            {
                if (nexacro._isArray(items))
                {
                    for (var i = 0; i < items.length; i++)
                    {
                        items[i]._resetStatus();
                    }
                }
                else
                {
                    items._resetStatus();
                }
            }
        }
    };

    _pMegaMenu.showDetailBand = function (rowindex)
    {
        var itemindex = rowindex;

        var panel = this._getPanel();
        var slot  = panel ? panel._getPanelSlot(itemindex) : null;

        if (slot)
        {
            var bandstatus = slot._getSlotStatusBand();

            if (this._p_bandexpandtype == "popup")
            {
                this._setPanelBandPopup(itemindex);
            }
            if (this._p_bandexpandtype == "expand" || this._p_bandexpandtype == "accordion")
            {
                this._setPanelBandExpand(itemindex);
            }

            if (bandstatus != (bandstatus = slot._getSlotStatusBand()))
            {
                this._on_fire_onbandstatuschanged(itemindex, bandstatus, this, this);
            }

            var items = this._getItem(itemindex);
            if (items)
            {
                if (nexacro._isArray(items))
                {
                    for (var i = 0; i < items.length; i++)
                    {
                        items[i]._resetStatus();
                    }
                }
                else
                {
                    items._resetStatus();
                }
            }
        }
    };
    */

    _pMegaMenu.showItemSubGroup = function (rowindex)
    {
        var itemindex = rowindex;
        var item      = this._getItem(itemindex)
        var itemlevel = this._getItemLevel(item);

        if (this._isPanelSubGroupPopup(itemlevel))  this._popupItem(itemindex,  item, "item", "methodcall");
        else                                        this._expandItem(itemindex, item, "item", "methodcall");

        /*
        this._updateItem(item, itemindex);

        var panel = this._getPanel();
        var slot  = panel ? panel._getPanelSlot(itemindex) : null;
        if (panel && slot)
        {
            // 확인: 속성 대신 설정된 Panel 상태 기반으로 변경 코드 확인
            var itemstatus = slot._getSlotStatus();

            if (panel._isGroupPopup())  this._setPanelGroupPopup(itemindex);
            else                        this._setPanelGroupExpand(itemindex);

            if (itemstatus != (itemstatus = slot._getSlotStatus()))
            {
                this._on_fire_onmenuitemstatuschanged(itemindex, itemstatus, this, this);
            }

            // 확인 : 아래 ComplexComponent.ResetStatus 함수로 변경
            var items = this._getItem(itemindex);
            if (items)
            {
                if (nexacro._isArray(items))
                {
                    for (var i = 0; i < items.length; i++)
                    {
                        items[i]._resetStatus();
                    }
                }
                else
                {
                    items._resetStatus();
                }
            }
        }
        */
    };

    _pMegaMenu.hideItemSubGroup = function (rowindex)
    {
        var itemindex = rowindex;
        var item      = this._getItem(itemindex)
        var itemlevel = this._getItemLevel(item);

        if (this._isPanelSubGroupPopup(itemlevel))  this._closeItem(   itemindex, item, "item", "methodcall");
        else                                        this._collapseItem(itemindex, item, "item", "methodcall");

        /*
        this._updateItem(item, itemindex);

        var panel = this._getPanel();
        var slot  = panel ? panel._getPanelSlot(itemindex) : null;
        if (panel && slot)
        {
            var itemstatus = slot._getSlotStatus();

            // TODO: 속성 대신 설정된 Panel 상태 기반으로 변경
            if (panel._isGroupPopup())  this._setPanelGroupClose(itemindex);
            else                        this._setPanelGroupCollapse(itemindex);

            if (itemstatus != (itemstatus = slot._getSlotStatus()))
            {
                this._on_fire_onmenuitemstatuschanged(itemindex, itemstatus, this, this);
            }

            // 확인 : 아래 ComplexComponent.ResetStatus 함수로 변경
            var items = this._getItem(itemindex);
            if (items)
            {
                if (nexacro._isArray(items))
                {
                    for (var i = 0; i < items.length; i++)
                    {
                        items[i]._resetStatus();
                    }
                }
                else
                {
                    items._resetStatus();
                }
            }
        }
        */
    };

    _pMegaMenu.getItemExpandStatus = function (rowindex, rettype)
    {
        var itemindex = rowindex;
        var statuscode; 

        var panel = this._getPanel();
        if (panel)
            statuscode = panel._getPanelSlotStatus(itemindex)
        else
            statuscode = nexacro._PanelSlotConst.STATUS_NONE;

        switch (rettype)
        {
            case "code" : return statuscode;
            case "name" : return this._getItemStatusCodeName(statuscode);
            case "bool" :
            default     : return statuscode > 0; 
        }
    };

    _pMegaMenu.getItemSubGroup = function (rowindex)
    {
        var itemindex = rowindex;

        return this._getItemLevelSubGroup(this._getItemSingle(itemindex));
    };

    /*
    // dropdown Method
    _pMegaMenu.dropdownCalendar = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor._type_name == "CalendarControl")
        {
            editor.dropdown();
            return true;
        }
        return false;
    };

    _pMegaMenu.dropdownCombo = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor._type_name == "ComboControl")
        {
            editor.dropdown();
            return true;
        }
        return false;
    };

    _pMegaMenu.dropdown = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor.dropdown)
        {
            editor.dropdown();
            return true;
        }
        return false;
    };

    _pMegaMenu.isDropdownCalendar = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor._type_name == "CalendarControl")
        {
            return editor.isDropdown();
        }
        return false;
    };

    _pMegaMenu.isDropdownCombo = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor._type_name == "ComboControl")
        {
            return editor.isDropdown();
        }
        return false;
    };

    _pMegaMenu.isDropdown = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (editor && editor._p_visible == true && editor.isDropdown)
        {
            return editor.isDropdown();
        }
        return false;
    };

    // Edit Method
    _pMegaMenu.setEditSelect = function (nBegin, nEnd)
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return false;

        var editor = ctrl._editor;

        if (!editor)
            return false;

        if (nBegin == -1)
        {
            editor.setSelect(0, 0);
            return true;
        }
        else
        {
            if (editor.setSelect)
                return editor.setSelect(nBegin, nEnd);
        }
        return false;
    };

    _pMegaMenu.getEditCaret = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return -1;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp && editComp.getCaretPos)
            {
                return editComp.getCaretPos();
            }
        }
        return -1;
    };

    _pMegaMenu.getEditSelect = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        var editComp = ctrl._editor;

        if (editComp && editComp.getSelect)
        {
            return editComp.getSelect();
        }
        return;
    };

    _pMegaMenu.getEditSelectedText = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return "";

        var editComp = ctrl._editor;

        if (editComp && editComp.getSelectedText)
        {
            return editComp.getSelectedText();
        }
        return "";
    };

    _pMegaMenu.getEditText = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp._p_text;
            }
        }
        return;
    };

    _pMegaMenu.getEditingText = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp._getEditingText();
            }
        }
    };

    _pMegaMenu.getEditValue = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp._p_value;
            }
        }
    };

    _pMegaMenu.getEditingValue = function ()
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp._getEditingValue();
            }
        }
    };

    _pMegaMenu.setEditValue = function (value)
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp.set_value(value);
            }
        }
    };

    _pMegaMenu.setEditingValue = function (value)
    {
        var ctrl = this._getCurrentCtrl();

        if (ctrl == null)
            return;

        if (ctrl._editor)
        {
            var editComp = ctrl._editor;
            if (editComp)
            {
                return editComp._setEditingValue(value);
            }
        }
    };
    */

    // DatasetRow Method
    _pMegaMenu.getDatasetRow = function (itemindex)
    {
        return this._getBindIndexByItemIndex(itemindex);
    };
    _pMegaMenu.getSelectedRow = function ()
    {
        return this._getCurrentSelectItemIndex();
    };
    _pMegaMenu.getSelectedDatasetRow = function ()
    {
        return this._getCurrentSelectBindIndex();
    };

    // TODO : ListView 확인하여 통합 및 제거
    /*
    _pMegaMenu.getSelectedRows = function ()
    {
        var selects = this.getSelect();

        // TODO : MultiSelect
        var selrow = selects.row;
        var retn = [];

        if (selrow > -1)
        {
            retn.push(selrow);
        }

        return retn;
    };

    _pMegaMenu.getSelectedDatasetRows = function ()
    {
        var selects = this.getSelect();

        // TODO : MultiSelect
        var selrow = selects.row;
        var retn = [];

        retn.push(selrow);
        
        return retn;
    };
    */

    _pMegaMenu.getSelectedPath = function (type, delimiter)
    {
        var pathindex = this._getItemSelectPathByLevel(this.getSelect(true));

        switch(type)
        {
            default :
            case "rowindex,string"  : return pathindex.map((x) => this._getBindIndexByItemIndex(this._onGetSelectItemIndex(x))).join(delimiter);
            case "rowindex,array"   : return pathindex.map((x) => this._getBindIndexByItemIndex(this._onGetSelectItemIndex(x)));
            case "caption,string"   : return pathindex.map((x) => this._getColumnValueByIndex(this._onGetSelectItemIndex(x), this._p_captioncolumn)).join(delimiter);
            case "caption,array"    : return pathindex.map((x) => this._getColumnValueByIndex(this._onGetSelectItemIndex(x), this._p_captioncolumn));
            case "json,string"      : return pathindex.map((x) => this._getDataRowJSONByIndex(this._onGetSelectItemIndex(x), true)).join(delimiter);
            case "json,array"       : return pathindex.map((x) => this._getDataRowJSONByIndex(this._onGetSelectItemIndex(x), false));
        }
    };


    /*
    // Ctrl Method
    _pMegaMenu.getBindCtrlId = function (enumItem, strColID)
    {
        var format = this._formats;
        var formatitems = format ? format._getItem() : null;
        if (!formatitems || !strColID)
            return "";

        enumItem = enumItem.toLowerCase();
        var bindCtrls = formatitems._getBinds();
        if (bindCtrls)
        {
            var i, ctrlinfo;
            var bindCtrls_len = bindCtrls.length;

            for (i = 0; i < bindCtrls_len; i++)
            {
                ctrlinfo = bindCtrls[i];

                if (ctrlinfo.baseid == enumItem && ctrlinfo.bindid == strColID)
                {
                    return ctrlinfo.target[0]; // ctrlid (String)
                }
            }
            // TODO : "head" & "tail"
        }

        return "";
    };
    */

    // 확인 : ListView와 주요 코드 공동화하여 Simeple/Complex로 이동
    // Select Method
    /*
    _pMegaMenu.clearSelect = function ()
    {
        return this._onSetCurrentSelect(this._onGetDefaultSelectArgument());
    };
    */

    _pMegaMenu.selectRow = function (rowindex, bSelect, isDataRow)
    {
        return this.setSelect(rowindex, undefined, undefined, bSelect, isDataRow);
    };

    //===============================================================
    // nexacro.MegaMenu : Events
    //===============================================================
    // Event init
    _pMegaMenu._initEvents = function ()
    {
        nexacro.ComplexComponent.prototype._initEvents.call(this);

        this._event_list["onmenuitemclick"] = 1;
        this._event_list["onmenuitemdblclick"] = 1;
    //  this._event_list["onnodataareaclick"] = 1;
    //  this._event_list["onnodataareadblclick"] = 1;
        this._event_list["onmenuitemctrlclick"] = 1;
        this._event_list["onmenuitemctrldblclick"] = 1;
        this._event_list["onmenuitemexpandclick"] = 1;
        this._event_list["onmenuitemexpand"] = 1;
        this._event_list["onmenuitemcollapse"] = 1;
        this._event_list["onmenuitempopup"] = 1;
        this._event_list["onmenuitemclose"] = 1;
        this._event_list["onmenuitemstatuschanged"] = 1;
        this._event_list["onmenuitemvaluechanged"] = 1;
    //  this._event_list["onmenuitemeditchanged"] = 1;
        this._event_list["onoverflowbuttonclick"] = 1;
        this._event_list["onoverflowmenupopup"] = 1;
        this._event_list["onoverflowmenuclose"] = 1;
        this._event_list["onselectchanged"] = 1;
    };

    // Item notify

    // TODO : Complex Component 가급적 통합
    _pMegaMenu.on_notify_item_onclick = function (obj, e)
    {
        // process event basic action
        {
            this._on_basic_onitemclick(obj, e);
        }
        // fire event & default action
        if (this._on_fire_onitemclick(obj, e) !== false)
        {
            this._on_default_onitemclick(obj, e);
        }
    };

    _pMegaMenu.on_notify_item_ondblclick = function (obj, e)
    {
        this._on_basic_onitemdblclick(obj, e);
        this._on_fire_onitemdblclick(obj, e);
        this._on_default_onitemdblclick(obj, e);
    };

    _pMegaMenu.on_notify_item_onsetfocus = function (obj, e)
    {
        this._on_basic_onitemsetfocus(obj, e);
        this._on_fire_onitemsetfocus(obj, e);
        this._on_default_onitemsetfocus(obj, e);
    };

    _pMegaMenu.on_notify_item_onchanged = function (obj, e)
    {
        this._on_basic_onitemchanged(obj, e);
        this._on_fire_onitemchanged(obj, e);
        this._on_default_onitemchanged(obj, e);
    };

    /*
    _pMegaMenu.on_notify_item_oninput = function (obj, e)
    {
        this.on_fire_oninput(e);
    };

    _pMegaMenu.on_fire_oninput = function (e)
    {
        if (this.oninput && this.oninput._has_handlers)
        {
            var obj = this._makeEventInfo(e.from_refer_comp);
            var evt = new nexacro.MegaMenuInputEventInfo(this, obj.itemid, obj.ctrlid, obj.rowidx, "oninput");
            return this.oninput._fireEvent(this, evt);
        }
        return false;
    };
    */

    _pMegaMenu.on_notify_item_onexpand = function (obj, e)
    {
        this._on_basic_onexpand(obj, e);
        this._on_fire_onexpand(obj, e);
        this._on_default_onexpand(obj, e);
    };

    _pMegaMenu.on_notify_item_onexpandclick = function (obj, e)
    {
        this._on_basic_onexpandclick(obj, e);
        this._on_fire_onexpand(obj, e);
        this._on_default_onexpandclick(obj, e);
    };

    // 확인 : 공통화하여 ComplexComponent로 이동
    _pMegaMenu._on_megamenu_onlbuttondown = function (obj, e)
    {
        // 아래 PopupExpand 함수로 정리
        var item = this._getActionItem(e);

        if (item) switch (item.id)
            {
                case "hscrollbar": case "vscrollbar":
                case "hspinbar"  : case "vspinbar"  : case "overflowbutton":
                    return;
                default: if (item.id.startsWith("popupmenu"))
                    return
            }

        var ctrl = this._getActionItemCtrl(e);
        var ctid = this._getItemChildId(item, ctrl);

        if (ctid == "menuitemexpand" && !this._isSubTriggerSelect())
        {
            var iidx = this._getItemSlotIndex(item);
            var sidx = this._getItemSubIndex(item);
            var cidx = this._findChildIndex(item, ctrl);

            return this._actionExpandItem(iidx, sidx, cidx, item, ctrl, "iconexpand");
        }
        if (ctid == "menuitemclose")
        {
            return this._closePopupSelf();
        }
        if (this._isCurrentPopup())
        {
            var sidx = this._getItemSlotIndex(item);
            var pidx = this._getCurrentPopupItemIndex();

            if (sidx == pidx && this._isSubTriggerSelect()) return;

            var pitm = this._getItem(pidx);

            if (this._getItemLevelSubGroup(pitm)) return;

            return this._actionExpandItem(pidx, -1, -1, pitm, null, "clickclose");
        }

        /*
        // 공통에 preventDefault 버그로 인해 강제 flag 처리
        // 공통 수정후 구문삭제
        if (this.onlbuttonup)
        {
            this.onlbuttonup.defaultprevented = false;
        }

        // 아래 CloseExpand 함수로 정리
        var popup = this._getPopupControl();

        if (popup && popup._isPopup())
        {
            if (!popup._attached_comp)
                return false;

            var itemindex = popup._attached_comp._itemindex;
            this._setPanelBandToggle(itemindex);

            this._is_popup_changed = true;
        }

        // 아래 PopupExpand 함수로 정리
        var item = this._getActionItem(e);
        var ctrl = this._getActionItemCtrl(e);

        if (this._getItemChildId(item, ctrl) == "menuitemexpand")
        {
            var iidx = this._getItemIndex(item);
            var sidx = this._getItemSubIndex(item);
            var cidx = this._findChildIndex(item, ctrl);

            this._actionExpandItem(iidx, sidx, cidx, item, ctrl, "iconexpand");
        }
        */
    };

    // 확인 : 공통화하여 ComplexComponent로 이동
    _pMegaMenu._on_megamenu_onlbuttonup = function (obj, e)
    {
        /*
        var popup = this._getPopupControl();

        if (popup && this._is_popup_changed)
        {
            e.preventDefault();
            this._is_popup_changed = false;
        }

        if (this._show_item)
        {
            this._showItem(this._show_rowidx, this._show_status);
        }
        */
    };

    // 확인 : 공통화하여 ComplexComponent로 이동
    // Basic event
    _pMegaMenu._on_basic_onitemclick = function (obj, e)
    {
        var item = this._getActionItem(e);
        var ctrl = this._getActionItemCtrl(e);
        var iidx = this._getItemSlotIndex(item);
        var sidx = this._getItemSubIndex(item);
        var cidx = this._findItemChildIndex(item, ctrl);

        return this._actionSelectItem(iidx, sidx, cidx, item, ctrl, this._isControlSubControl(ctrl) ? "ctrlclick" : "itemclick");
    };

    _pMegaMenu._on_basic_onitemdblclick = function (obj, e)
    {
    };

    _pMegaMenu._on_basic_onitemsetfocus = function (obj, e)
    {
        var item = this._getActionItem(e);
        var ctrl = this._getActionItemCtrl(e);
        var iidx = this._getItemSlotIndex(item);
        var sidx = this._getItemSubIndex(item);
        var cidx = this._findItemChildIndex(item, ctrl);

        this._actionSelectItem(iidx, sidx, cidx, item, ctrl, cidx >= 0 ? "ctrlfocus" : "itemfocus");
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_basic_onexpand = function (obj, e)
    {
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_fire_onexpand = function (obj, e)
    {
        if (e.fromreferenceobject._type_name == "_MegaMenuItemControl")
        {
            if (this.onmenuitemexpand && this.onmenuitemexpand._has_handlers)
            {
                e.fromobject = this;
                this.onmenuitemexpand._fireEvent(this, e);
            }
        }
        if (this.onexpand && this.onexpand._has_handlers)
        {
            e.fromobject = this;
            this.onexpand._fireEvent(this, e);
        }
        return true;
    };

    _pMegaMenu._on_basic_onexpandclick = function (obj, e)
    {
    };


    _pMegaMenu.on_focus_basic_action = function (self_flag, evt_name)
    {
        nexacro.ComplexComponent.prototype.on_focus_basic_action.call(this, self_flag, evt_name);

        if (self_flag)
        {
            var rowcnt = this._getBindCount();
            if (rowcnt > 0)
                this._accept_arrow = true;
            else
                this._accept_arrow = false;

            switch (evt_name)
            {
                case "tabkey":
                    var firstctrl = this._getFirstEditableCtrl();
                    if (firstctrl.row >= 0)
                    {
                        this._is_first_focus = true;
                        this._is_first_focus_band = true;
                        this._actionSelectItem(firstctrl.rowidx, firstctrl.bandidx, firstctrl.ctrlidx, firstctrl.item, firstctrl.ctrl, "tabfocus");
                        this._is_first_focus = false;
                    }
                    this._acceptstab = this._remainEditableCtrl(1);
                    break;
                case "shifttabkey":
                    var lastctrl = this._getLastEditableCtrl();
                    if (lastctrl.row >= 0)
                    {
                        this._is_first_focus_band = true;
                        this._actionSelectItem(lastctrl.rowidx, lastctrl.bandidx, lastctrl.ctrlidx, lastctrl.item, lastctrl.ctrl, "tabfocus");
                    }
                    this._acceptstab = this._remainEditableCtrl(-1);
                    break;
                case "downkey":
                    this._is_megamenu_focus = true;
                    break;
                case "upkey":
                    var rowidx = rowcnt - 1;
                    if (rowidx >= 0)
                    {
                        this._actionFocusItem(rowidx);
                    }
                    break;
            }
        }
    };
    /*
    _pMegaMenu.on_lbuttondown_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key)
    {
        // def basic action
        nexacro.ComplexComponent.prototype.on_lbuttondown_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);

        //own basic action
        var ctrl = nexacro._MegaMenuCtrlControl.prototype._getActionCtrl(refer_comp);
        if (ctrl)
        {
            ctrl._autoenter_selected = ctrl.selected;
        }
    };

    _pMegaMenu.on_lbuttonup_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key)
    {
        // def basic action
        nexacro.ComplexComponent.prototype.on_lbuttonup_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);

        // own basic action
        var ctrl = nexacro._MegaMenuCtrlControl.prototype._getActionCtrl(refer_comp);
        if (ctrl)
        {
            ctrl._actionEditCtrl(ctrl, "lbuttonup");
        }
    };

    _pMegaMenu.on_touchstart_basic_action = function (touch_manager, touchinfos, changedtouchinfos, refer_comp)
    {
        // def basic action
        nexacro.ComplexComponent.prototype.on_touchstart_basic_action.call(this, touch_manager, touchinfos, changedtouchinfos, refer_comp);

        //own basic action
        var ctrl = nexacro._MegaMenuCtrlControl.prototype._getActionCtrl(refer_comp);
        if (ctrl)
        {
            ctrl._autoenter_selected = ctrl.selected;
        }
    };
    */

    // Default event
    _pMegaMenu._on_default_onitemclick = function (obj, e)
    {
        // nav default action
        if (obj && e)
        {
            var iidx = this._getItemIndex(e.fromobject);

            this.on_click_default_action(
                this._getColumnValueByIndex(iidx, this.navtargetcolumn),
                this._getColumnValueByIndex(iidx, this.navurlcolumn),
                this._getColumnValueByIndex(iidx, this.navtargetpropertiescolumn),
            );
        }
    };

    _pMegaMenu._on_default_onitemdblclick = function (obj, e)
    {
    };

    _pMegaMenu._on_default_onitemsetfocus = function (obj, e)
    {
    };

    _pMegaMenu._on_default_onexpand = function (obj, e)
    {
        if (obj.id == "overflowbutton")
        {
            var ctrl = obj;
            var erng = this._getContentsExpandRange();
            var eidx = erng[0];
            var ecnt = erng[1];

            // menu overflow by menu expandbar
            this._actionExpandMenu(eidx, ecnt, ctrl, "menuexpand");
        }
        else
        {
            var item = this._getActionItem(e);
            var ctrl = this._getActionItemCtrl(e);
            var iidx = this._getItemIndex(item);
            var sidx = this._getItemSubIndex(item);
            var cidx = this._findChildIndex(item, ctrl);

            // item expand by item expandbutton
            this._actionExpandItem(iidx, sidx, cidx, item, ctrl, "itemexpand");
        }
    };

    _pMegaMenu._on_default_onexpandclick = function (obj, e)
    {
    };

    // Fire event
    _pMegaMenu._on_fire_onitemclick = function (obj, e)
    {
        //  if (this.onmenuitemclick && this.onmenuitemclick._has_handlers)
        {
            // TODO: 아래 Argument들을 얻는 부분은 EventInfo Property에서 처리되도록 일괄 정리
            var item = this._getActionItem(e);
            var ctrl = this._getActionItemCtrl(e);
            var iidx = this._getItemIndex(item);
        //  var sidx = this._getItemSubIndex(item);
        //  var cidx = this._findItemChildIndex(item, ctrl);
            var itid = this._getItemId(item);
            var ctid = this._getItemChildId(item, ctrl);

            return this.on_fire_onclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.fromobject, e.fromreferenceobject, e.metakey, iidx, itid, ctid, ctrl, e.clickitem || "");
        }
        return true;
    };

    _pMegaMenu._on_fire_onitemdblclick = function (obj, e)
    {
        //  if (this.onmenuitemdblclick && this.onmenuitemdblclick._has_handlers)
        {
            // TODO: 아래 Argument들을 얻는 부분은 EventInfo Property에서 처리되도록 일괄 정리
            var item = this._getActionItem(e);
            var ctrl = this._getActionItemCtrl(e);
            var iidx = this._getItemIndex(item);
        //  var sidx = this._getItemSubIndex(item);
        //  var cidx = this._findItemChildIndex(item, ctrl);
            var itid = this._getItemId(item);
            var ctid = this._getItemChildId(item, ctrl);

            return this.on_fire_ondblclick(e.button, e.altkey, e.ctrlkey, e.shiftkey, e.screenx, e.screeny, e.canvasx, e.canvasy, e.clientx, e.clienty, e.fromobject, e.fromreferenceobject, e.metakey, iidx, itid, ctid, ctrl, e.clickitem || "");
        }
        return true;
    };

    _pMegaMenu._on_fire_onitemsetfocus = function (obj, e)
    {
    };

    _pMegaMenu.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key, itemindex, itembandid, itemctrlid, itemctrl, clickitem)
    {
        var evt;

        var canvas = this._getRecalcCanvasXY(from_refer_comp._control_element, canvasX, canvasY);
        canvasX = canvas[0];
        canvasY = canvas[1];

        var clientXY = this._getClientXY(canvasX, canvasY);
        clientX = clientXY[0];
        clientY = clientXY[1];

        // clickitem : expandbutton
        if (clickitem == "expandbutton")
        {
            if (this.onmenuitemexpandclick && this.onmenuitemexpandclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemexpandclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", itemctrlid || "", itemindex, clickitem, meta_key);
                return this.onmenuitemexpandclick._fireEvent(this, evt);
            }
        }

        // clickitem : expandbar
        if (this._isExpandSubControl(itemctrl, itemctrlid))
        {
            //TODO : expandbar를 button이 아니라 expandbutton으로 만들기
            if (this.onmenuitemexpandclick && this.onmenuitemexpandclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemexpandclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", itemctrlid, itemindex, clickitem, meta_key);
                return this.onmenuitemexpandclick._fireEvent(this, evt);
            }

            return true;
        }

        // clickitem : control (edit/switch/button/view)
        if (this._isControlSubControl(itemctrl, itemctrlid))
        {
            if (!this._p_readonly && this._isEditSubControl(itemctrl, itemctrlid))
            {
                if (from_refer_comp._toggleCheck && (from_refer_comp instanceof nexacro.Switch || from_refer_comp instanceof nexacro.CheckBox))
                {
                    from_refer_comp._toggleCheck();
                }
            }

            if (this.onmenuitemctrlclick && this.onmenuitemctrlclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemctrlclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", itemctrlid || "", itemindex, clickitem, meta_key);
                this.onmenuitemctrlclick._fireEvent(this, evt);
            }

            if (from_comp && from_comp.id && !from_comp.id.endsWith("buttonitem"))
            {
                return true;
            }
        }

        // itemindex
        if (itemindex >= 0)
        {
            if (this.onmenuitemclick && this.onmenuitemclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", itemindex, clickitem, meta_key);

                this.onmenuitemclick._fireEvent(this, evt);

                if (this.onmenuitemclick.defaultprevented) return false;
            }
        }
        /*
        else if (itemindex == -1)
        {
            if (this.onheaderclick && this.onheaderclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onheaderclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", -1, clickitem, meta_key);
                return this.onheaderclick._fireEvent(this, evt);
            }
        }
        else if (itemindex == -2)
        {
            if (this.onfooterclick && this.onfooterclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onfooterclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", -1, clickitem, meta_key);
                return this.onfooterclick._fireEvent(this, evt);
            }
        }
        else if (itemindex == null || itemindex == -4)
        {
            var cw = this._getClientWidth();
            var ch = this._getClientHeight();

            // border click
            if (clientX < 0 || clientY < 0 || clientX > cw || clientY > ch)
            {
                if (this.onclick && this.onclick._has_handlers)
                {
                    evt = new nexacro.MegaMenuClickEventInfo(this, "onclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, "none", "", this._DEFAULT_ROWINDEX, clickitem, meta_key);
                    return this.onclick._fireEvent(this, evt);
                }
            }
            else
            {
                if (this.onnodataareaclick && this.onnodataareaclick._has_handlers)
                {
                    evt = new nexacro.MegaMenuClickEventInfo(this, "onnodataareaclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, "none", "", this._DEFAULT_ROWINDEX, clickitem, meta_key);
                    return this.onnodataareaclick._fireEvent(this, evt);
                }
            }
        }
        */

        return true;
    };

    _pMegaMenu.on_fire_ondblclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key, itemindex, itembandid, itemctrlid, itemctrl, clickitem)
    {
        var evt;

        var canvas = this._getRecalcCanvasXY(from_refer_comp._control_element, canvasX, canvasY);
        canvasX = canvas[0];
        canvasY = canvas[1];

        var clientXY = this._getClientXY(canvasX, canvasY);
        clientX = clientXY[0];
        clientY = clientXY[1];

        // clickitem : control (edit/switch/button/view)
        if (this._isControlSubControl(itemctrl, itemctrlid))
        {
            if (this.onmenuitemctrldblclick && this.onmenuitemctrldblclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemctrldblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", itemctrlid || "", itemindex, clickitem, meta_key);
                this.onmenuitemctrldblclick._fireEvent(this, evt);
            }

            if (!itembandid.endsWith("buttonitem"))
            {
                return true;
            }
        }
        if (itemindex >= 0)
        {
            if (this.onmenuitemdblclick && this.onmenuitemdblclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onmenuitemdblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", itemindex, clickitem, meta_key);
                return this.onmenuitemdblclick._fireEvent(this, evt);
            }
        }
        /*
        if (itemindex == -1)
        {
            if (this.onheaderdblclick && this.onheaderdblclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onheaderdblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", this._DEFAULT_ROWINDEX, clickitem, meta_key);
                return this.onheaderdblclick._fireEvent(this, evt);
            }
        }
        if (itemindex == -2)
        {
            if (this.onfooterdblclick && this.onfooterdblclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onfooterdblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", "", this._DEFAULT_ROWINDEX, clickitem, meta_key);
                return this.onfooterdblclick._fireEvent(this, evt);
            }
        }
        if (itemindex == null)
        {
            if (this.onnodataareadblclick && this.onnodataareadblclick._has_handlers)
            {
                evt = new nexacro.MegaMenuClickEventInfo(this, "onnodataareadblclick", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, itembandid || "none", itemctrlid || "", -1, clickitem, meta_key);
                return this.onnodataareadblclick._fireEvent(this, evt);
            }
        }
        */

        return true;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onkeydown = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key)
    {
        if (this.onkeydown && this.onkeydown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuKeyEventInfo(this, "onkeydown", obj.rowidx, obj.bandid, obj.ctrlid, alt_key, ctrl_key, shift_key, key_code, from_refer_comp, meta_key);

            return this.onkeydown._fireUserEvent(this, evt);
        }
        return false;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onkeyup = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key)
    {
        if (this.onkeyup && this.onkeyup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuKeyEventInfo(this, "onkeyup", obj.rowidx, obj.bandid, obj.ctrlid, alt_key, ctrl_key, shift_key, key_code, from_refer_comp, meta_key);

            return this.onkeyup._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onlbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onlbuttondown && this.onlbuttondown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onlbuttondown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onlbuttondown._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onlbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onlbuttondown && this.onlbuttondown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onlbuttondown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onlbuttondown._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onlbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key)
    {
        if (this.onlbuttonup && this.onlbuttonup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onlbuttonup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onlbuttonup._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onlbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key)
    {
        if (this.onlbuttonup && this.onlbuttonup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onlbuttonup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onlbuttonup._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onrbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onrbuttondown && this.onrbuttondown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onrbuttondown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onrbuttondown._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onrbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onrbuttondown && this.onrbuttondown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onrbuttondown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onrbuttondown._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onrbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key)
    {
        if (this.onrbuttonup && this.onrbuttonup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onrbuttonup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onrbuttonup._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onrbuttonup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, from_elem, meta_key)
    {
        if (this.onrbuttonup && this.onrbuttonup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onrbuttonup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onrbuttonup._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_oncontextmenu = function (from_comp, from_refer_comp, button, canvasX, canvasY, clientX, clientY, alt_key, ctrl_key, shift_key, screenX, screenY, meta_key)
    {
        if (this.oncontextmenu && this.oncontextmenu._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuContextMenuEventInfo(this, "oncontextmenu", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.oncontextmenu._fireEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onmouseenter = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseenter && this.onmouseenter._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseenter", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.onmouseenter._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onmouseenter = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseenter && this.onmouseenter._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseenter", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.onmouseenter._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onmouseleave = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseleave && this.onmouseleave._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseleave", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.onmouseleave._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onmouseleave = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseleave && this.onmouseleave._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseleave", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.onmouseleave._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onmousedown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmousedown && this.onmousedown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmousedown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmousedown._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onmousedown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmousedown && this.onmousedown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmousedown", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmousedown._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmouseup._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmouseup._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_onmousemove = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmousemove && this.onmousemove._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmousemove", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmousemove._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_onmousemove = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.onmousemove && this.onmousemove._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuMouseEventInfo(this, "onmousemove", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);

            return this.onmousemove._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_ondrag = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, refer_comp, self_refer_comp, meta_key)
    {
        if (this.ondrag && this.ondrag._has_handlers)
        {
            var dragData = this._getDragData();
            var obj = this._makeEventInfo(self_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondrag", dragData, null, "text", null, this, self_refer_comp, from_comp, refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return [this.ondrag._fireSysEvent(this, evt), this, self_refer_comp, dragData, evt.userdata];
        }
        return [false];
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._noFireDragFlag = false;
    _pMegaMenu.on_fire_user_ondrag = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, refer_comp, self_refer_comp, meta_key)
    {
        this._noFireDragFlag = false;


        var evt = null;
        var userdata = null;
        var dragData = this._getDragData();
        var ret = [false];
        var obj = null;
        if (this.ondrag && this.ondrag._has_handlers)
        {
            obj = this._makeEventInfo(self_refer_comp);
            evt = new nexacro.MegaMenuDragEventInfo(this, "ondrag", dragData, null, "text", null, this, self_refer_comp, from_comp, refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
        }
        if (this._selectscrollmode !== "scroll")
        {
            if (evt)
            {
                if (this.ondrag._fireUserEvent(this, evt) == true)
                    return [true, this, self_refer_comp, dragData, evt.userdata];
                else if (this.ondrag.defaultprevented == true)
                    return [false, this, self_refer_comp, dragData, evt.userdata];
            }
        }
        else
        {
            this._noFireDragFlag = true;
        }
        if (this._noFireDragFlag == true)
        {
            var dragInfo = nexacro._cur_drag_info;
            if (dragInfo)
                dragInfo.isSelfAction = true;
        }
        ret = [this._noFireDragFlag, this, self_refer_comp, dragData, userdata];
        return ret;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_ondragenter = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.ondragenter && this.ondragenter._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondragenter", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondragenter._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_ondragenter = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this._noFireDragFlag == true || (src_comp && src_comp._selectscrollmode && (src_comp._selectscrollmode == "scroll")))
            return true;

        if (this.ondragenter && this.ondragenter._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondragenter", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondragenter._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_ondragleave = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.ondragleave && this.ondragleave._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondragleave", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondragleave._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_ondragleave = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this._noFireDragFlag == true || (src_comp && src_comp._selectscrollmode && (src_comp._selectscrollmode == "scroll")))
            return true;
        if (this.ondragleave && this.ondragleave._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondragleave", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondragleave._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_ondrop = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this.ondrop && this.ondrop._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondrop", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondrop._fireSysEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_ondrop = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (this._noFireDragFlag == true || (src_comp && src_comp._selectscrollmode && (src_comp._selectscrollmode == "scroll")))
        {
            if (src_comp && src_comp._noFireDragFlag)
            {
                src_comp._noFireDragFlag = false;
            }
            this._noFireDragFlag = false;
            return true;
        }

        if (this.ondrop && this.ondrop._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);
            var evt = new nexacro.MegaMenuDragEventInfo(this, "ondrop", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
            return this.ondrop._fireUserEvent(this, evt);
        }
        return false;
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_sys_ondragmove = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, xdeltavalue, ydeltavalue, meta_key)
    {
        return nexacro.Component.prototype.on_fire_sys_ondragmove.call(this, src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
            button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, xdeltavalue, ydeltavalue, meta_key);
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu.on_fire_user_ondragmove = function (src_comp, src_refer_comp, dragdata, userdata, datatype, filelist,
        button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        if (!src_comp || !src_comp._selectscrollmode || src_comp._selectscrollmode && (src_comp._selectscrollmode !== "scroll"))
        {
            if (this.ondragmove && this.ondragmove._has_handlers)
            {
                var obj = this._makeEventInfo(from_refer_comp);
                var evt = new nexacro.MegaMenuDragEventInfo(this, "ondragmove", dragdata, userdata, datatype, filelist, src_comp, src_refer_comp, from_comp, from_refer_comp, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, obj.bandid, obj.ctrlid, obj.rowidx, meta_key);
                return this.ondragmove._fireUserEvent(this, evt);
            }
        }
        else
        {
            return true;
        }
        return false;
    };


    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_fire_onmenuitemstatuschanged = function (itemindex, itemstatus, from_comp, from_refer_comp)
    {
        if (this.onmenuitemstatuschanged && this.onmenuitemstatuschanged._has_handlers)
        {
            var evt = new nexacro.MegaMenuItemStatusEventInfo(this, "onmenuitemstatuschanged", from_comp, from_refer_comp, itemindex, itemstatus, this._convertItemStatusCode2Name(itemstatus));
            this.onmenuitemstatuschanged._fireEvent(this, evt);
        }

        // TODO : 상태별 Event 제공
        /*
        if (this.onmenuitemexpand && this.onmenuitemexpand._has_handlers)
        if (this.onmenuitemcollapse && this.onmenuitemcollapse._has_handlers)
        if (this.onmenuitempopup && this.onmenuitempopup._has_handlers)
        if (this.onmenuitemclose && this.onmenuitemclose._has_handlers)
        */
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_fire_onoverflowmenupopup = function (expandidx, expandcnt, from_comp, from_refer_comp)
    {
        if (this.onoverflowmenupopup && this.onoverflowmenupopup._has_handlers)
        {
            var evt = new nexacro.MegaMenuItemOverflowEventInfo(this, "onoverflowmenupopup", from_comp, from_refer_comp, expandidx, expandcnt);
            this.onoverflowmenupopup._fireEvent(this, evt);
        }
    };
    _pMegaMenu._on_fire_onoverflowmenuclose = function (expandidx, expandcnt, from_comp, from_refer_comp)
    {
        if (this.onoverflowmenuclose && this.onoverflowmenuclose._has_handlers)
        {
            var evt = new nexacro.MegaMenuItemOverflowEventInfo(this, "onoverflowmenuclose", from_comp, from_refer_comp, expandidx, expandcnt);
            this.onoverflowmenuclose._fireEvent(this, evt);
        }
    };
    _pMegaMenu._on_fire_onexpandclick = function (obj, e)
    {
        if (this.onoverflowbuttonclick && this.onoverflowbuttonclick._has_handlers)
        {
            if (obj.id != "overflowbutton") return;
            
            var erng = this._getContentsExpandRange();

            var evt = new nexacro.MegaMenuItemOverflowEventInfo(this, "onoverflowbuttonclick", this, obj, erng[0], erng[1]);
            this.onoverflowbuttonclick._fireEvent(this, evt);
        }
    };
    /*
    _pMegaMenu.on_fire_ondropdown = function (from_refer_comp)
    {
        if (this.ondropdown && this.ondropdown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);

            var value;
            if (from_refer_comp._getCtrlValue)
            {
                value = from_refer_comp._getCtrlValue();
            }
            else
            {
                value = from_refer_comp._p_value;
            }

            var evt = new nexacro.MegaMenuEditEventInfo(this, "ondropdown", obj.rowidx, obj.bandid, obj.ctrlid, value, from_refer_comp);

            return this.ondropdown._fireCheckEvent(this, evt);
        }
        return true;
    };

    _pMegaMenu.on_fire_oncloseup = function (from_refer_comp, pretext, posttext, prevalue, postvalue)
    {
        if (this.oncloseup && this.oncloseup._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp, postvalue);

            var value;
            if (from_refer_comp._getCtrlValue)
            {
                value = from_refer_comp._getCtrlValue();
            }
            else
            {
                value = from_refer_comp._p_value;
            }

            var evt = new nexacro.MegaMenuEditEventInfo(this, "oncloseup", obj.rowidx, obj.bandid, obj.ctrlid, value, from_refer_comp);

            return this.oncloseup._fireEvent(this, evt);
        }
        return true;
    };

    _pMegaMenu.on_fire_onenterdown = function (from_refer_comp)
    {
        if (this._p_readonly)
        {
            return true;
        }

        if (this.onenterdown && this.onenterdown._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);

            var value;
            if (from_refer_comp._getCtrlValue)
            {
                value = from_refer_comp._getCtrlValue();
            }
            else
            {
                value = from_refer_comp._p_value;
            }

            var evt = new nexacro.MegaMenuEditEventInfo(this, "onenterdown", obj.rowidx, obj.bandid, obj.ctrlid, value, from_refer_comp);

            return this.onenterdown._fireEvent(this, evt);
        }
        return true;
    };

    _pMegaMenu.on_fire_onimeaction = function (from_refer_comp, key_code, alt_key, ctrl_key, shift_key, from_comp, meta_key)
    {
        if (!this._p_enable) return true;

        if (this.onctrlimeaction && this.onctrlimeaction._has_handlers)
        {
            var obj = this._makeEventInfo(from_refer_comp);

            var evt = new nexacro.MegaMenuKeyEventInfo(this, "onctrlimeaction", obj.rowidx, obj.bandid, obj.ctrlid, alt_key, ctrl_key, shift_key, key_code, from_refer_comp, meta_key);
            return this.onctrlimeaction._fireEvent(this, evt);
        }
        return false;
    };
    */

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_basic_onitemchanged = function (obj, e)
    {

    };
    _pMegaMenu._on_fire_onitemchanged = function (obj, e)
    {
        if (this.onmenuitemvaluechanged && this.onmenuitemvaluechanged._has_handlers)
        {
            var obj = this._makeEventInfo(e.fromobject);
            var evt = new nexacro.MegaMenuItemValueEventInfo(this, "onmenuitemvaluechanged", obj.rowidx, obj.bandid, obj.ctrlid, e.fromobject, e);
            this.onmenuitemvaluechanged._fireEvent(this, evt);
        }
    };
    _pMegaMenu._on_default_onitemchanged = function (obj, e)
    {
        if (!this._p_readonly)
        {
            var obj = this._makeEventInfo(e.fromobject);
            this._setColumnValueByIndex(obj.rowidx, this.controlvaluecolumn, e.postvalue);
        }
    };

    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_last_lbuttonup = function ()
    {
        if (this._after_recreate)
        {
            this._is_after_recreate = true;
            this._recreateItems();
            this._after_recreate = false;
            this._is_after_recreate = false;
        }
    }
    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_last_keyup = function ()
    {
        if (this._after_recreate)
        {
            this._is_after_recreate = true;
            this._recreateItems();
            this._after_recreate = false;
            this._is_after_recreate = false;
        }
    }
    // 확인 : 공통화하여 ComplexComponent로 이전 : EventInfo 생성부분만 각 컴포넌트에서 추가 정의하도록
    _pMegaMenu._on_killfocus = function (new_focus, new_refer_focus)
    {
        if (!this._is_alive) return;

        /*
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            var firstctrl = this._getFirstEditableCtrl();
            if (firstctrl.row >= 0)
            {
                var firstctrlobj = this._getCurrentCtrl(firstctrl.rowidx, firstctrl.bandidx, firstctrl.ctrlidx);
                firstctrlobj.on_apply_accessibility();
            }
        }
        */

        this.on_killfocus_basic_action(new_focus, new_refer_focus);
    };

    //===============================================================
    // nexacro.MegaMenu : Inner Logic
    //===============================================================

    // 확인 : 공통화 및 Override 처리하여 ComplexComponent로 이전
    _pMegaMenu._setRefPanelType = function (refpaneltype)
    {
    };
    _pMegaMenu._getRefPanelType = function ()
    {
        return nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK;
    };

    _pMegaMenu._decideRowFirst = function (rowfirst)
    {
        return rowfirst === undefined
            ? (this._ishorizflat ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST)
            : (rowfirst          ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST);
    };
    _pMegaMenu._setArrangeType = function (arrangetype, rowfirst, lvlindex, lvldepth)
    {
        this._autorowfirst = rowfirst && rowfirst.length && rowfirst[0] === undefined;      // autorowfirst
        this._changeInitContentsFlag();

        this._arrange = arrangetype.map((v, i) => nexacro._parseProperty(v, this._propinfo_megamenuarrange) | this._decideRowFirst(rowfirst[i]));
    };
    _pMegaMenu._getArrangeType = function (l) { return this._arrange[l ?? 0]; };

    // [component.layout.formats.context:getbindtypename]   // 컴포넌트별 override
    _pMegaMenu._onGetBindTypeName = function (v, l)
    {
        return this._lvlnm[l ?? 0] + v + this._itmnm;
    };
    _pMegaMenu._onGetBindTypeNameAllLevel = function (v)
    {
        if (nexacro._isArray(v))
            return v.map((x,i) => this._onGetBindTypeNameAllLevel(x)).flat();
        else
            return this._lvlnm.map((l, i) => l + v + this._itmnm);
    };    
    /*
    _pMegaMenu._onGetItemName   = function () { return this._itmnm; }
    _pMegaMenu._onGetLevelNames = function () { return this._lvlnm; }
    */

    _pMegaMenu._setMenuItemType = function (headtype, foottype, itemtype, lvlindex, lvldepth)
    {
        this._defheadtype = headtype.map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+i) : null);
        this._deffoottype = foottype.map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+i) : null);
        this._defitemtype = itemtype.map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+i) : null);

        if (this._formats)
        {
            this._formats._setUsrDefBandNames(this._defitemtype, this._defheadtype, this._deffoottype);
        }
    };
    _pMegaMenu._getHeadItemType = function (l) { return (this._defheadtype[l ?? 0]); };
    _pMegaMenu._getFootItemType = function (l) { return (this._deffoottype[l ?? 0]); };
    _pMegaMenu._getMenuItemType = function (l) { return (this._defitemtype[l ?? 0]); };

    _pMegaMenu._setMenuItemShow = function (showheader, showfooter, showcontrol, showgroup, showdivider, lvlindex, lvldepth)
    {
        var flag =  (showgroup   ? nexacro._PanelConst.GROUPING_SUBTYPE_GROUP_ITEM : 0) |
                    (showdivider ? nexacro._PanelConst.GROUPING_SUBTYPE_SPLIT_ITEM : 0);

        var header  = showheader.map((v)  => nexacro._parseProperty(v, this._propinfo_megamenushowitem));
        var footer  = showfooter.map((v)  => nexacro._parseProperty(v, this._propinfo_megamenushowitem));
        var control = showcontrol.map((v) => nexacro._parseProperty(v, this._propinfo_megamenushowcontrol));

        var nh = header.length;
        var nf = footer.length;

        var n = Math.max(nh, nf);
        var c = showcontrol.length;

        this._showitemtype = nexacro._getNewArray(n, 0);
        this._showitemctrl = nexacro._getNewArray(c, 0);

        for (let i = 0; i < n; i++) this._showitemtype[i] = (i < nh ? header[i] << 0 : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE)
                                                          | (i < nf ? footer[i] << 8 : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE)
                                                          | flag;

        for (let t = 0; t < c; t++) this._showitemctrl[t] = control[t];
    };
    _pMegaMenu._setShowHeaderFixed  = function (l) { return (this._showitemtype[l ?? 0] |=  nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_FIXED); }
    _pMegaMenu._setShowFooterFixed  = function (l) { return (this._showitemtype[l ?? 0] |=  nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_FIXED); }
    _pMegaMenu._setShowHeaderUnFix  = function (l) { return (this._showitemtype[l ?? 0] &= !nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_FIXED); }
    _pMegaMenu._setShowFooterUnFix  = function (l) { return (this._showitemtype[l ?? 0] &= !nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_FIXED); }
    _pMegaMenu._getItemShowType     = function (l) { return (this._showitemtype[l ?? 0]); };
    _pMegaMenu._getItemShowTypeHead = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_MASK); }
    _pMegaMenu._getItemShowTypeFoot = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_MASK) >> 8; }
    _pMegaMenu._isShowHeader        = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_MASK) != 0; }
    _pMegaMenu._isShowFooter        = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_MASK) != 0; }
    _pMegaMenu._isShowHeaderItem    = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_ITEM) != 0; }
    _pMegaMenu._isShowFooterItem    = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_ITEM) != 0; }
    _pMegaMenu._isShowHeaderControl = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_CONTROL) != 0; }
    _pMegaMenu._isShowFooterControl = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_CONTROL) != 0; }
    _pMegaMenu._isShowHeaderFixed   = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_FIXED) != 0; }
    _pMegaMenu._isShowFooterFixed   = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_FIXED) != 0; }
    _pMegaMenu._isShowHeaderNC      = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_NC) != 0; }
    _pMegaMenu._isShowFooterNC      = function (l) { return (this._showitemtype[l ?? 0] & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_NC) != 0; }

    // [component.layout.formats.context:getheadtailshow]   // 컴포넌트별 override
    _pMegaMenu._onGetContextShowType = function ()
    {
        return [
            [this._isShowHeaderItem(0), true, this._isShowFooterItem(0)],
            [this._isShowHeaderItem(1), true, this._isShowFooterItem(1)],
            [this._isShowHeaderItem(2), true, this._isShowFooterItem(2)]
        ];  // [[showhead,showbody,showtail],...]
    }

    _pMegaMenu._getItemCtrlType                 = function (l) { return (this._showitemctrl[l ?? 0] ?? []); };
    _pMegaMenu._isShowCtrlMenuItemEditCheck     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_MENUITEM_EDIT_CHECK)      >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlMenuItemEditSwitch    = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_MENUITEM_EDIT_SWITCH)     >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlMenuItemCtrlButton    = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_MENUITEM_CTRL_BUTTON)     >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlFooterViewWebview     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_FOOTERITEM_VIEW_WEBVIEW)  >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlFooterCtrlButton      = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_FOOTERITEM_CTRL_BUTTON)   >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlEditorCtrlButton      = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_EDITORITEM_CTRL_BUTTON)   >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlViewerViewWebView     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_WEBVIEW)  >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlViewerViewImgView     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_IMGVIEW)  >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlViewerViewVidView     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_VIDVIEW)  >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlViewerViewDivView     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_VIEWERITEM_VIEW_DIVVIEW)  >= 0) && this._p_controlvaluecolumn; }
    _pMegaMenu._isShowCtrlViewerViewDefault     = function (l) { return (this._getItemCtrlType(l).indexOf(nexacro._MenuItemConst.ITEMTYPE_CTRLTYPE_NONE)            >= 0) && this._p_controlvaluecolumn; }

    _pMegaMenu._setMenuItemGap = function (menuinnergap, menuoutergap, lvlindex, lvldepth)
    {
        this._menuinnergap = menuinnergap.map((v) => nexacro._parseProperty(v, this._propinfo_megamenugap));
        this._menuoutergap = menuoutergap.map((v) => nexacro._parseProperty(v, this._propinfo_megamenugap));
    };
    _pMegaMenu._getMenuItemInnerGap = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._menuinnergap[l] ? [this._menuinnergap[l][0].cval, this._menuinnergap[l][1].cval] : [5, 5]); };
    _pMegaMenu._getMenuItemOuterGap = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._menuoutergap[l] ? [this._menuoutergap[l][0].cval, this._menuoutergap[l][1].cval] : [0, 0]); };
    _pMegaMenu._getMenuItemInnerGapAround = function (l) { return false; };
    _pMegaMenu._getMenuItemOuterGapAround = function (l) { return false; };

    _pMegaMenu._defHorzItemSize = [{ pval: "100%",  sval: 100,  cval: 0.01, unit: nexacro._UnitConst.SIZEUNIT_PERCENT },    { pval: "",     sval: -1,   cval: -1,   unit: nexacro._UnitConst.SIZEUNIT_PIXEL }];
    _pMegaMenu._defVertItemSize = [{ pval: "",      sval: -1,   cval: -1,   unit: nexacro._UnitConst.SIZEUNIT_PIXEL },      { pval: "100%", sval: 100,  cval: 0.01, unit: nexacro._UnitConst.SIZEUNIT_PERCENT }];
    _pMegaMenu._defAutoItemSize = [{ pval: "",      sval: -1,   cval: -1,   unit: nexacro._UnitConst.SIZEUNIT_PIXEL },      { pval: "",     sval: -1,   cval: -1,   unit: nexacro._UnitConst.SIZEUNIT_PIXEL }];

    _pMegaMenu._makeDefItemSize = function (itemshowtype)
    {
        if (itemshowtype & nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_HORZ) return this._defHorzItemSize;    // horzheader/horzfooter
        if (itemshowtype & nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_VERT) return this._defVertItemSize;    // vettheader/vertfooter
        if (itemshowtype == 0)  // if (itemshowtype & nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_TYPE_MASK == nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE)
        {
            this._autoouterfit = false;                                                                         // noneheader/nonefooter
            this._changeInitContentsFlag();

            return this._defAutoItemSize;
        }
        else                    // if (itemshowtype & nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_ARRG_MASK == nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_AUTO)
        {
            this._autoouterfit = true;                                                                          // autoheader/autofooter
            this._changeInitContentsFlag();

            if (this._autorowfirst)
                return this._ishorizflat  ? this._defVertItemSize : this._defHorzItemSize;
            else
                return this._isRowFirst() ? this._defVertItemSize : this._defHorzItemSize;
        }
    };
    _pMegaMenu._chkFitItemSize = function (a)
    {
        if (nexacro._isArray(a))
        {
            for (var s of a)
            {
                if ((s[0].pval == "" && s[0].cval == -1) ||
                    (s[1].pval == "" && s[1].cval == -1)) return true;
            }
        }
        else
        {
            if ((s.pval == "" && s.cval == -1) ||
                (s.pval == "" && s.cval == -1)) return true;
        }

        return false;
    };
    _pMegaMenu._chkPerItemWidth = function (a)
    {
        if (nexacro._isArray(a))
        {
            for (var s of a)
            {
                if (this._chkPercent(s.w)) return true;
            }
        }
        else
        {
            if (this._chkPercent(a.w)) return true;
        }

        return false;
    };
    _pMegaMenu._chkPerItemHeight = function (a)
    {
        if (nexacro._isArray(a))
        {
            for (var s of a)
            {
                if (this._chkPercent(s.h)) return true;
            }
        }
        else
        {
            if (this._chkPercent(a.h)) return true;
        }

        return false;
    };

    _pMegaMenu._setMenuItemSize = function (menuitemsize, groupitemsize, headeritemsize, footeritemsize, divideritemsize, edititemsize, buttonitemsize, viewitemsize, lvlindex, lvldepth)
    {
        this._headeritemsize  = headeritemsize.map((v, i)  => nexacro._isNullEmpty(v) ? (this._makeDefItemSize(this._getItemShowTypeHead(i))) : nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._footeritemsize  = footeritemsize.map((v, i)  => nexacro._isNullEmpty(v) ? (this._makeDefItemSize(this._getItemShowTypeFoot(i))) : nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._divideritemsize = divideritemsize.map((v, i) => nexacro._isNullEmpty(v) ? (this._makeDefItemSize(this._getItemShowTypeHead(i))) : nexacro._parseProperty(v, this._propinfo_megamenusize));

        this._menuitemsize   = menuitemsize.map((v)   => nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._groupitemsize  = groupitemsize.map((v)  => nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._edititemsize   = edititemsize.map((v)   => nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._buttonitemsize = buttonitemsize.map((v) => nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._viewitemsize   = viewitemsize.map((v)   => nexacro._parseProperty(v, this._propinfo_megamenusize));

        this._isitemautofit  = this._chkFitItemSize(this._menuitemsize)
                            || this._chkFitItemSize(this._groupitemsize)
                            || this._chkFitItemSize(this._footeritemsize)
                            || this._chkFitItemSize(this._divideritemsize)
                            || this._chkFitItemSize(this._edititemsize)
                            || this._chkFitItemSize(this._buttonitemsize)
                            || this._chkFitItemSize(this._viewitemsize);
    };

    _pMegaMenu._getMenuItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._menuitemsize[l]    ? [this._menuitemsize[l][0].cval,     this._menuitemsize[l][1].cval]      : [-1, -1]); };
    _pMegaMenu._getGroupItemSize    = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._groupitemsize[l]   ? [this._groupitemsize[l][0].cval,    this._groupitemsize[l][1].cval]     : [-1, -1]); };
    _pMegaMenu._getHeaderItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._headeritemsize[l]  ? [this._headeritemsize[l][0].cval,   this._headeritemsize[l][1].cval]    : [-1, -1]); };
    _pMegaMenu._getFooterItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._footeritemsize[l]  ? [this._footeritemsize[l][0].cval,   this._footeritemsize[l][1].cval]    : [-1, -1]); };
    _pMegaMenu._getDividerItemSize  = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._divideritemsize[l] ? [this._divideritemsize[l][0].cval,  this._divideritemsize[l][1].cval]   : [-1, -1]); };
    _pMegaMenu._getEditItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._edititemsize[l]    ? [this._edititemsize[l][0].cval,     this._edititemsize[l][1].cval]      : [-1, -1]); };
    _pMegaMenu._getButtonItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._buttonitemsize[l]  ? [this._buttonitemsize[l][0].cval,   this._buttonitemsize[l][1].cval]    : [-1, -1]); };
    _pMegaMenu._getViewItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._viewitemsize[l]    ? [this._viewitemsize[l][0].cval,     this._viewitemsize[l][1].cval]      : [-1, -1]); };

    _pMegaMenu._brgMenuItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._menuitemsize[l]    ? { w: this._menuitemsize[l][0],    h: this._menuitemsize[l][1] }     : { w: null, h: null }); };
    _pMegaMenu._brgGroupItemSize    = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._groupitemsize[l]   ? { w: this._groupitemsize[l][0],   h: this._groupitemsize[l][1] }    : { w: null, h: null }); };
    _pMegaMenu._brgHeaderItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._headeritemsize[l]  ? { w: this._headeritemsize[l][0],  h: this._headeritemsize[l][1] }   : { w: null, h: null }); };
    _pMegaMenu._brgFooterItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._footeritemsize[l]  ? { w: this._footeritemsize[l][0],  h: this._footeritemsize[l][1] }   : { w: null, h: null }); };
    _pMegaMenu._brgDividerItemSize  = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._divideritemsize[l] ? { w: this._divideritemsize[l][0], h: this._divideritemsize[l][1] }  : { w: null, h: null }); };
    _pMegaMenu._brgEditItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._edititemsize[l]    ? { w: this._edititemsize[l][0],    h: this._edititemsize[l][1] }     : { w: null, h: null }); };
    _pMegaMenu._brgButtonItemSize   = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._buttonitemsize[l]  ? { w: this._buttonitemsize[l][0],  h: this._buttonitemsize[l][1] }   : { w: null, h: null }); };
    _pMegaMenu._brgViewItemSize     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._viewitemsize[l]    ? { w: this._viewitemsize[l][0],    h: this._viewitemsize[l][1] }     : { w: null, h: null }); };

    _pMegaMenu._chgMenuItemSize     = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._menuitemsize[l])     this._menuitemsize[l][0]    = w, this._menuitemsize[l][1]    = h; };
    _pMegaMenu._chgGroupItemSize    = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._groupitemsize[l])    this._groupitemsize[l][0]   = w, this._groupitemsize[l][1]   = h; };
    _pMegaMenu._chgHeaderItemSize   = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._headeritemsize[l])   this._headeritemsize[l][0]  = w, this._headeritemsize[l][1]  = h; };
    _pMegaMenu._chgFooterItemSize   = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._footeritemsize[l])   this._footeritemsize[l][0]  = w, this._footeritemsize[l][1]  = h; };
    _pMegaMenu._chgDividerItemSize  = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._divideritemsize[l])  this._divideritemsize[l][0] = w, this._divideritemsize[l][1] = h; };
    _pMegaMenu._chgEditItemSize     = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._edititemsize[l])     this._edititemsize[l][0]    = w, this._edititemsize[l][1]    = h; };
    _pMegaMenu._chgButtonItemSize   = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._buttonitemsize[l])   this._buttonitemsize[l][0]  = w, this._buttonitemsize[l][1]  = h; };
    _pMegaMenu._chgViewItemSize     = function (l, w, h) {   /*l??=0;*/ l = l === undefined ? 0 : l; if (this._viewitemsize[l])     this._viewitemsize[l][0]    = w, this._viewitemsize[l][1]    = h; };

    _pMegaMenu._setSubMenuPlace = function (submenuplace, submenupos, submenusize, subindentsize, /*subitemcount,*/ lvlindex, lvldepth)
    {
        this._submenuplace      = submenuplace.map((v)  => nexacro._parseProperty(v, this._propinfo_megamenuplace));
        this._submenupos        = submenupos.map((v)    => nexacro._parseProperty(v, this._propinfo_megamenupos));
        this._submenusize       = submenusize.map((v)   => nexacro._parseProperty(v, this._propinfo_megamenusize));
        this._submenuindentsize = subindentsize.map((v) => nexacro._parseProperty(v, this._propinfo_megamenulength));
    //  this._submenuitemcount  = subitemcount.map((v)  => nexacro._parseProperty(v, this._propinfo_megamenucount));
    };
    _pMegaMenu._getSubMenuPlace = function (l)
    {
        return this._isExtLayout() ? nexacro._PanelConst.GROUPING_SUBPLACE_INPLACE_OWNER : (/*l??=0;*/ l = l === undefined ? 0 : l, this._submenuplace[l]);
    };
    _pMegaMenu._getSubMenuPos           = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._submenupos[l]        ? [this._submenupos[l][0].cval,  this._submenupos[l][1].cval]   : [-1, -1]); };
    _pMegaMenu._getSubMenuSize          = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._submenusize[l]       ? [this._submenusize[l][0].cval, this._submenusize[l][1].cval]  : [-1, -1]); };
    _pMegaMenu._getSubMenuIndentSize    = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._submenuindentsize[l] ?  this._submenuindentsize[l].cval  :  0); };
//  _pMegaMenu._getSubMenuItemCount     = function (l) { return (/*l??=0;*/ l = l === undefined ? 0 : l, this._submenuitemcount[l]  ?  this._submenuitemcount[l].cval   : -1); };

    _pMegaMenu._setSubGroupType = function (expandtype, expandstatus, expandtrigger, lvlindex, lvldepth)
    {
        this._subgroup   = nexacro._getNewArray(expandtype.length, 0);
        this._subtrigger = nexacro._getNewArray(expandtrigger.length, 0);

        for (var i = 0, n = expandtype.length; i < n; i++)
        {
            switch (expandtype[i])
            {
                default:
                case "group":
                case "collapse":
                case "expand":
                    {
                        this._subgroup[i] = expandstatus[i] == "expand"
                                          ? nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_EXPAND
                                          : nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_COLLAPSE;
                        break;
                    }
                case "accordion":
                    {
                        this._subgroup[i] = expandstatus[i] == "expand"
                                          ? nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_ACCORDION | nexacro._PanelConst.GROUPING_SUBSTYLE_NONE_EXPAND_FIRST
                                          : nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_ACCORDION;
                        break;
                    }
                case "popup":
                    {
                        this._subgroup[i] = expandstatus[i] == "expand"
                                          ? nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP  // | nexacro._PanelConst.GROUPING_SUBSTYLE_NONE_EXPAND_FIRST
                                          : nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP;
                        break;
                    }
                case "none":
                    {
                        switch (expandstatus[i])
                        {
                            case "collapse" : this._subgroup[i] = nexacro._PanelConst.GROUPING_SUBSTYLE_NONE_COLLAPSE;  break;
                            case "expand"   : this._subgroup[i] = nexacro._PanelConst.GROUPING_SUBSTYLE_NONE_EXPAND;    break;
                            default         : this._subgroup[i] = nexacro._PanelConst.GROUPING_SUBSTYLE_NONE;           break;
                        }
                        break;
                    }
            }

            switch (expandtrigger[i])
            {
                default:
                case "itemclick"    : this._subtrigger[i] = nexacro._PanelConst.GROUPING_SUBACTION_TRIGGER_SELECT; break;
                case "expandclick"  : this._subtrigger[i] = nexacro._PanelConst.GROUPING_SUBACTION_TRIGGER_EXPAND; break;
            }
        }
    };

    _pMegaMenu._getSubGroupType     = function ()  { return (this._subgroup); };
    _pMegaMenu._isSubGroupTypePopup = function (l) { return (this._subgroup[l ?? 0] & nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP) >  0; };
    _pMegaMenu._isSubGroupTypeGroup = function (l) { return (this._subgroup[l ?? 0] & nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP) == 0; };

    _pMegaMenu._getSubTriggerType   = function ()  { return (this._subtrigger); };
    _pMegaMenu._isSubTriggerSelect  = function (l) { return (this._subtrigger[l ?? 0] & nexacro._PanelConst.GROUPING_SUBACTION_TRIGGER_SELECT) > 0; };
    _pMegaMenu._isSubTriggerExpand  = function (l) { return (this._subtrigger[l ?? 0] & nexacro._PanelConst.GROUPING_SUBACTION_TRIGGER_EXPAND) > 0; };

    _pMegaMenu._setOverflowShow = function (showheader, showfooter, showcontrol, showgroup, showdivider, lvlindex, lvldepth)
    {
        var flag =  (showgroup   ? nexacro._PanelConst.GROUPING_SUBTYPE_GROUP_ITEM : 0) |
                    (showdivider ? nexacro._PanelConst.GROUPING_SUBTYPE_SPLIT_ITEM : 0);

        var header  = nexacro._parseProperty(showheader,  this._propinfo_megamenushowitem,  nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE);
        var footer  = nexacro._parseProperty(showfooter,  this._propinfo_megamenushowitem,  nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE);
        var control = nexacro._parseProperty(showcontrol, this._propinfo_megamenushowcontrol);

        this._showoverflowitemtype = (header ? header << 0 : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE)
                                   | (footer ? footer << 8 : nexacro._PanelConst.GROUPING_SUBTYPE_SHOWITEM_NONE)
                                   | flag;
        this._showoverflowitemctrl = control;
    };
    _pMegaMenu._setOverflowType = function (overflow, overmenutype, overmenuplace, overmenupos, overmenusize, overindentsize, /*overitemcount,*/ overbuttonsize, lvlindex, lvldepth)
    {
        this._overflowtype = nexacro._getNewArray(overflow.length, 0);
        this._overflowarng = nexacro._getNewArray(overflow.length, 0);

        for (var i = 0, n = overflow.length; i < n; i++)
        {
            if (this._use_partitem)
            {
                this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_PARTSLOT;
            }
            if (overflow[i] === undefined)
            {
                this._chkoverflow |= 1 << i;
                this._overflowtype[i] |= this._ishorizflat
                                      ? nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN
                                      : nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN;
                this._overflowarng[i] = nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN;
            }
            else
            {
                // TODO : parseProeprty enuminfo parsing으로 변경

                switch (overflow[i])
                {
                    default:
                    case "none"                 : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_NONE;      break;
                    case "scroll"               : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL;    break;
                    case "spin":
                    case "spin,outside"         : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_BOTHOUTSIDE;  break;
                    case "spin,inside"          : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_BOTHINSIDE;   break;
                    case "spin,afterfooter"     : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_TAILOUTSIDE;  break;
                    case "spin,beforefooter"    : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_TAILINSIDE;   break;
                    case "spin,afterheader"     : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_LEADINSIDE;   break;
                    case "spin,beforeheader"    : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_LEADOUTSIDE;  break;
                //  case "paging"               : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_PAGING;  break;
                    case "popup":
                    case "popup,afterfooter"    : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_POPUP; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_TAILOUTSIDE; break;
                    case "popup,beforefooter"   : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_POPUP; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_TAILINSIDE;  break;
                    case "popup,afterheader"    : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_POPUP; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_LEADINSIDE;  break;
                    case "popup,beforeheader"   : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_POPUP; this._overflowarng[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_LEADOUTSIDE; break;
                }

                switch (overmenutype)
                {
                    default :
                    case "overitem"             : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_OVERITEM; break;
                    case "allitem"              : this._overflowtype[i] |= nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLITEM; break;
                }
            }
        }

        this._overflowmenuplace      = nexacro._parseProperty(overmenuplace,    this._propinfo_megamenuplace);
        this._overflowmenupos        = nexacro._parseProperty(overmenupos,      this._propinfo_megamenupos);
        this._overflowmenusize       = nexacro._parseProperty(overmenusize,     this._propinfo_megamenusize);
    //  this._overflowmenuindentsize = nexacro._parseProperty(overindentsize,   this._propinfo_megamenulength);
    //  this._overflowmenuitemcount  = nexacro._parseProperty(overitemcount,    this._propinfo_megamenucount);

        this._overflowbuttonsize     = nexacro._parseProperty(overbuttonsize,   this._propinfo_megamenuside);
    };

    _pMegaMenu._isOverflowShowHeader = function () { return (this._showoverflowitemtype & nexacro._PanelConst.GROUPING_SUBTYPE_HEADER_MASK) != 0; }
    _pMegaMenu._isOverflowShowFooter = function () { return (this._showoverflowitemtype & nexacro._PanelConst.GROUPING_SUBTYPE_FOOTER_MASK) != 0; }

    _pMegaMenu._getOverflowMenuType  = function () { return this._overflowmenutype; };
    _pMegaMenu._getOverflowMenuPlace = function () { return this._overflowmenuplace; };
    _pMegaMenu._getOverflowMenuPos   = function () { return this._overflowmenupos  ? [this._overflowmenupos[0].cval,  this._overflowmenupos[1].cval]  : [-1, -1]; };
    _pMegaMenu._getOverflowMenuSize  = function () { return this._overflowmenusize ? [this._overflowmenusize[0].cval, this._overflowmenusize[1].cval] : [-1, -1]; };

    _pMegaMenu._getOverflowType      = function (l) { return this._overflowtype[l ?? 0]; };
    _pMegaMenu._getOverflowArng      = function (l) { return this._overflowarng[l ?? 0]; };

    _pMegaMenu._isOverflowTypeScroll = function (l) { return this._is_scrollable && (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL) > 0; };
    _pMegaMenu._isOverflowTypeSpin   = function (l) { return this._is_scrollable && (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_SPIN)   > 0; };
 // _pMegaMenu._isOverflowTypePaging = function (l) { return this._is_scrollable && (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_PAGING) > 0; };
    _pMegaMenu._isOverflowTypeExpand = function (l) { return this._is_expandable && (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_POPUP)  > 0; };

    _pMegaMenu._isOverflowFullItem   = function (l) { return (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLITEM)  >  0; };
    _pMegaMenu._isOverflowOverItem   = function (l) { return (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_ITEM_MASK) == 0; };

    _pMegaMenu._isOverflowCtrInside  = function (l) { return (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_INSIDE)    >  0; };
    _pMegaMenu._isOverflowCtrOutside = function (l) { return (this._overflowtype[l ?? 0] & nexacro._PanelConst.SLOT_OVERFLOWTYPE_SIDE_MASK) == 0; };


    _pMegaMenu._onGetSpinBarDirection = function ()
    {
        return this._isRowFirst() ? "horz" : "vert";
    };
    _pMegaMenu._onGetSpinBarArrange = function ()
    {
        if (this._isOverflowTypeSpin())
        {
            switch (this._getOverflowArng())
            {
                default:
                case 0x0C00 /*SLOT_OVERFLOWTYPE_BOTHOUTSIDE*/: return "outside"; // "default"
                case 0x0D00 /*SLOT_OVERFLOWTYPE_BOTHINSIDE */: return "inside";
                case 0x0400 /*SLOT_OVERFLOWTYPE_TAILOUTSIDE*/: return "tailoutside";
                case 0x0500 /*SLOT_OVERFLOWTYPE_TAILINSIDE */: return "tailinside";
                case 0x0800 /*SLOT_OVERFLOWTYPE_LEADOUTSIDE*/: return "leadoutside";
                case 0x0900 /*SLOT_OVERFLOWTYPE_LEADINSIDE */: return "leadinside";
            }
        }

        return nexacro.ComplexComponent.prototype._onGetSpinBarArrange.call(this);
    };

    _pMegaMenu._onGetExpandActType = function ()
    {
        return this._p_overflowbuttonactiontype;
    };
    _pMegaMenu._onGetExpandBarType = function ()
    {
        return this._p_overflowbuttontype;
    };
    _pMegaMenu._onGetExpandVisible = function ()
    {
        return this._p_overflowbuttontype == "fixed" && this._isOverflowFullItem() ? "const" : this._p_overflowbuttontype;
    };    
    _pMegaMenu._onGetExpandBarSize = function ()
    {
        if (this._overflowbuttonsize)
            return [this._overflowbuttonsize[0].cval, this._overflowbuttonsize[1].cval];
        else
            return this._p_overflowbuttonsize;
    };
    _pMegaMenu._onGetExpandDirType = function ()
    {
        return this._isRowFirst() ? "horz" : "vert";
    };
    _pMegaMenu._onGetExpandArrange = function ()
    {
        if (this._isOverflowTypeExpand())
        {
            switch (this._getOverflowArng())
            {
                default:
                case 0x0400 /*SLOT_OVERFLOWTYPE_TAILOUTSIDE*/: return "tailoutside";
                case 0x0500 /*SLOT_OVERFLOWTYPE_TAILINSIDE */: return "tailinside";
                case 0x0800 /*SLOT_OVERFLOWTYPE_LEADOUTSIDE*/: return "leadoutside";
                case 0x0900 /*SLOT_OVERFLOWTYPE_LEADINSIDE */: return "leadinside";
            }
        }

        return nexacro.ComplexComponent.prototype._onGetExpandArrange.call(this);
    };

    // Menu는 Expand를 Menu하위 Item으로 제어
    _pMegaMenu._onGetExpandCtrlSet = function ()
    {
        return "custom";
    };
    _pMegaMenu._onGetExpandCtrlOpt = function ()
    {
        return "fit";
    };

    // TODO : 아래 함수는 Override 없는 함수 --> Override 구조로 변경 (control 변경처리 등)
    _pMegaMenu._createExpandBarCustom = function (ctrlname, left, top, width, height)
    {
        if (this.expandbar && this.expandbar._type_name != "MegaMenuOverflowButtonControl")
        {
            this._destroyExpandBar();
        }

        if (this.overflowbutton == null)
        {
            return this.overflowbutton = this.expandbar = new nexacro._MegaMenuOverflowButtonControl("overflowbutton", left, top, width, height, null, null, null, null, null, null, this);
        }
        else
        {
            return this.overflowbutton = this.expandbar;
        }
    };
    _pMegaMenu._destroyExpandControl = function ()
    {
        nexacro.ComplexComponent.prototype._destroyExpandControl.call(this);

        this.overflowbutton = null;
    }

    _pMegaMenu._setSelectorType = function (selectortype)
    {
        // 확인 : Select Flag 통합
        this._selector = selectortype ? selectortype : nexacro._PanelConst.SLOT_SELECTORTYPE_NONE;
    };
    _pMegaMenu._getSelectorType = function () { return this._selector; };

    _pMegaMenu._setScrollExpandType = function (rowfirst)
    {
        var _is_scrollable = this._is_scrollable;
        this._is_scrollable = false;

        var noscroll = this._isOverflowTypeExpand() && this._isOverflowOverItem();

        this.set_scrolltype( noscroll ? "none" : rowfirst ? "horizontal" : "vertical");
        this.set_expandtype(!noscroll ? "none" : rowfirst ? "horizontal" : "vertical");

        this._is_scrollable = _is_scrollable;

        this._onResetScrollBar();
    };
    _pMegaMenu._getScrollType = function () { return this.scrolltype; };

    _pMegaMenu._setMenuItemAcc = function (keyskipitemtype, lvlindex, lvldepth)
    {
    //  this._keyaccsitemtype = nexacro._getNewArray(keyaccsitemtype.length, 0);
        this._keyskipitemtype = nexacro._getNewArray(keyskipitemtype.length, 0);

    //  var deflst = "menu,group,button,edit,view";
        var extlst = "header,footer,divider";

    /*
        for (var l = 0, n = this._keyaccsitemtype.length; l < n; l++)
        {
            var itmlst = keyaccsitemtype[l];
            if (itmlst)
                this._keyaccsitemtype[l] = itmlst.split(",").map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+l) : null);
            else
                this._keyaccsitemtype[l] = deflst.split(",").map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+l) : null);
        }
    */
        for (var l = 0, n = this._keyskipitemtype.length; l < n; l++)
        {
            var itmlst = keyskipitemtype[l];
            if (itmlst)
                this._keyskipitemtype[l] = itmlst.split(",").map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+l) : null);
            else
                this._keyskipitemtype[l] = extlst.split(",").map((v, i) => v ? this._onGetBindTypeName(v, lvlindex+l) : null);
        }
    };
//  _pMegaMenu._isKeyAccsItemType = function (type) { return this._keyaccsitemtype ? this._keyaccsitemtype.some((v, i) => v ? v.includes(type) : false) : false };
    _pMegaMenu._isKeySkipItemType = function (type) { return this._keyskipitemtype ? this._keyskipitemtype.some((v, i) => v ? v.includes(type) : false) : false };
//  _pMegaMenu._isKeyAccsItem = function (item) { return item && item._p_visible && item._p_enable &&  this._isKeyAccsItemType(item._band); };
    _pMegaMenu._isKeyAccsItem = function (item) { return item && item._p_visible && item._p_enable && !this._isKeySkipItemType(item._band); };

    _pMegaMenu._getSubRootLevel = function () { return this._onFindRootLevel(); };
    _pMegaMenu._getSubLeafLevel = function () { return this._onFindLeafLevel(); };
    _pMegaMenu._getLayoutIndex  = function () { return this._isExtLayout() ? 2 : this._isFinLayout() ? 2 : this._isSubLayout() ? 1 : 0; }
    _pMegaMenu._getLayoutDepth  = function () { return this._isExtLayout() ? 1 : this._isFinLayout() ? 1 : this._isSubLayout() ? 2 : 3; }

    _pMegaMenu._onFindRootLevel = function ()
    {
    //  if (nexacro._isDesignMode())    return 0;

        if (this._isExtLayout())        return this._getPanelStartLevel();
        if (this._isFinLayout())        return 2;
        if (this._isSubLayout())        return 1;
    /*  if (this._isMainLayout()) */    return 0;
    };
    _pMegaMenu._onFindLeafLevel = function ()
    {
    //  if (nexacro._isDesignMode())    return 0;

        if (this._isExtLayout())        return this._getPanelLimitLevel();
        if (this._isFinLayout())        return this._chkLeafLevel(this._subgroup[0]) ? 2 : 3;
        if (this._isSubLayout())        return this._chkLeafLevel(this._subgroup[0]) ? 1 :
                                               this._chkLeafLevel(this._subgroup[1]) ? 2 : 3
    /*  if (this._isMainLayout()) */    return this._chkLeafLevel(this._subgroup[0]) ? 0 :
                                               this._chkLeafLevel(this._subgroup[1]) ? 1 :
                                               this._chkLeafLevel(this._subgroup[2]) ? 2 : 3;
    };
    _pMegaMenu._chkLeafLevel = function (subgroup)
    {
        return  subgroup == nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP ||
                subgroup == nexacro._PanelConst.GROUPING_SUBSTYLE_NONE_COLLAPSE;
    };
    /*
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._makeEventInfo = function (from_refer_comp)
    {
        var obj = { ctrlid: "", ctrlidx: this._DEFAULT_CTRLINDEX, rowidx: this._DEFAULT_ROWINDEX, bandid: "", bandidx: this._DEFAULT_BANDINDEX };
        var ctrls = this._findObj(from_refer_comp);

        if (ctrls.bandobj)
        {
            if (ctrls.ctrlobj)
            {
                obj.ctrlid = ctrls.ctrlobj.id;
                obj.ctrlidx = ctrls.ctrlobj._ctrlidx;
            }
            obj.rowidx = ctrls.bandobj._itemindex;
            obj.bandid = ctrls.bandobj.id;
            obj.bandidx = ctrls.bandobj._itemsubidx;
        }
        return obj;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._findObj = function (from_refer_comp)
    {
        var obj = { ctrlobj: null, bandobj: null };

        var fromComp = from_refer_comp;

        // bandobj
        while (fromComp && !(fromComp instanceof nexacro._MegaMenuItemControl))
        {
            if (fromComp instanceof nexacro.MegaMenu)
            {
                if (fromComp == this)
                {
                    break;
                }
            }
            fromComp = fromComp.parent;
        }
        if (fromComp != this)
            obj.bandobj = fromComp;
        fromComp = from_refer_comp;

        // ctrlobj
        while (fromComp && !(fromComp instanceof nexacro.Component))
        {
            if (fromComp == this)
            {
                break;
            }
            else
            {
                fromComp = fromComp.parent;
            }
        }
        if (fromComp != this)
            obj.ctrlobj = fromComp;

        return obj;
    };
    */
    /*
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._findEditableCtrl = function (item, from_ctrlidx, dir)
    {
        var i, n;
        var ctrl = null;

        if (nexacro._isArray(item))
        {
            for (i = 0, n = item.length; i < n; i++)
            {
                if (i > 0)
                {
                    from_ctrlidx = (dir == 1) ? 0 : item._getLastChild() ? item._getLastChild()._ctrlidx : 0;

                    if (item[i] && !this._isExistSubSlot(item[i]._rowidx)) // detail item collapse
                        continue;
                }

                if (item[i] && (ctrl = this._findEditableCtrl(item[i], from_ctrlidx, dir)))
                    break;
            }
        }
        else
        {
            var ctrls = this._getItemCtrls(item);
            if (ctrls)
            {
                switch (dir)
                {
                    case -1:
                        for (i = from_ctrlidx; i >= 0; i--)
                        {
                            if (ctrls[i]._hasEditor() || ctrls[i]._refinfo._getEdittype(ctrls[i]._getDataRow()) == "switch")
                            {
                                ctrl = ctrls[i];
                                break;
                            }
                        }
                        break;
                    case 1:
                        for (i = from_ctrlidx, n = ctrls.length; i < n; i++)
                        {
                            if (ctrls[i]._hasEditor() || ctrls[i]._refinfo._getEdittype(ctrls[i]._getDataRow()) == "switch")
                            {
                                ctrl = ctrls[i];
                                break;
                            }
                        }
                        break;
                }
            }
        }

        return ctrl;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._remainEditableCtrl = function (dir)
    {
        // 현재 select 시점 기준으로 front / back 방향으로 움직일 Ctrl이 있는지 여부 판단
        var sel = this.getSelect();
        var rowcnt = this._getBindCount();

        var item;
        var items = this._getItem(sel.row);
        if (items)
        {
            var item, ctrl, i;

            var rowidx = sel.row;
            var bandidx = sel.band;
            var ctrlidx = sel.ctrl < 0 ? 0 : sel.ctrl;

            switch (dir)
            {
                // 역방향
                case -1:
                    item = nexacro._isArray(items) ? items[bandidx >= 0 ? sel.band : 0] : items;
                    ctrl = this._findEditableCtrl(item, ctrlidx - 1, dir);

                    if (!ctrl)
                    {
                        for (i = rowidx; i >= 0; i--)
                        {
                            if (bandidx > 0)
                            {
                                bandidx--;
                            }
                            else
                            {
                                rowidx--;

                                // detail expand check
                                if (this._isExistSubSlot(rowidx))
                                    bandidx = this._getPanelSlotCount() - 1;
                                else
                                    bandidx = 0;
                            }

                            if (item = this._getCurrentItem(rowidx, bandidx))
                            {
                                var ctrls = this._getItemCtrls(item);
                                ctrlidx = ctrls ? ctrls.length - 1 : 0;
                                ctrl = this._findEditableCtrl(item, ctrlidx, -1);
                            }

                            if (ctrl) break;
                        }
                    }
                    break;
                // 순방향
                case 1:
                    item = nexacro._isArray(items) ? items[bandidx >= 0 ? sel.band : 0] : items;
                    ctrl = this._findEditableCtrl(item, ctrlidx + 1, dir);

                    if (!ctrl)
                    {
                        for (i = rowidx; i < rowcnt; i++)
                        {
                            if (bandidx < this._getPanelSlotCount() - 1 && this._isExistSubSlot(rowidx))    // detail expand check
                            {
                                bandidx++;
                            }
                            else
                            {
                                rowidx++;
                                bandidx = 0;
                            }

                            if (item = this._getCurrentItem(rowidx, bandidx))
                            {
                                ctrlidx = 0;
                                ctrl = this._findEditableCtrl(item, ctrlidx, 1);
                            }

                            if (ctrl) break;
                        }
                    }
                    break;
            }

            if (ctrl)
                return true;
        }

        return false;
    };
    */

    /*
        MegaMenu 에서 사용할만한 getter List

        _getItems : Component에 생성된 Item List (Array)
        _getItem  : 특정 row에 대응하는 ItemControl (Array or Object)
        _getItemCtrls : 특정 ItemControl에 속해있는 CtrlControl List

        _getCurrentItem : 현재 선택된 row의 item Object
        _getCurrentCtrl : 현재 선택된 row / item의 Ctrl Object

        _getFirstEditableCtrl : Component에서 최초로 접근 가능한 EditableCtrl index info
        _getLastEditableCtrl : Component에서 마지막으로 접근 가능한 EditableCtrl index info

        _getActionItem
        _getActionItemCtrl
    */
    // 확인 : 공통화하여 ComplexComponent로 이전
    /*
    _pMegaMenu._getItemCtrls = function (item)
    {
        var ctrls = item._children;

        if (ctrls && ctrls.length)
        {
        //    if (ctrls[0] instanceof nexacro.Component)
                return ctrls;
        }

        return null;
    };
    */
    // 확인 : 공통화하여 ComplexComponent로 이전
    /*
    _pMegaMenu._getCurrentItem = function (rowidx)
    {
        if (rowidx === undefined)
        {
            rowidx = this._getCurrentSelectItemIndex();
        }
        if (rowidx !== undefined)
        {
            return this._getItem(rowidx);
        }
    }
    */
    // 확인 : 공통화하여 ComplexComponent로 이전
    /*
    _pMegaMenu._getCurrentBand = function (rowidx, bandidx)
    {
        var ctxt = this._getCtxtBaseInfo();
        var items = ctxt ? ctxt._items : null;

        if (!items)
            return null;

        var currselect = this.getSelect();
        var currow = (rowidx != null) ? rowidx : currselect.row;
        var cursub = (subidx != null) ? subidx : currselect.sub;
        var item = null;
        var type = "main";
        var slotcnt = this._getPanelSlotCount();

        switch (currow)
        {
            case -1:
                type = "head";
                break;
            case -2:
                type = "tail";
                break;
        }

        var bodyitem = items[type];

        if (!bodyitem && type == "main")
        {
            var checkdetail = "detail";
            if (items[checkdetail])
            {
                type = checkdetail;
                bodyitem = items[type];

            }
        }
        if (!bodyitem) return null;

        if (type == "main" || type == "detail")
        {
            if (this._items.length > currow)
            {
                item = this._items[currow * slotcnt + cursub];
            }
        }
        return item;
    };
    */
    /*
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getCurrentCtrl = function (rowidx, subidx, ctrlidx)
    {
        var currselect = this.getSelect();
        var curctrl = (ctrlidx != null) ? ctrlidx : currselect.ctrl;
        var item = this._getCurrentItem(rowidx, subidx);
        var ctrl = null;

        if (item)
        {
            var ctrls = this._getItemCtrls(item);

            if (ctrls)
            {
                if (typeof (curctrl) == "string")
                {
                    for (var i = 0, n = ctrls.length; i < n; i++)
                    {
                        if (ctrls[i].id == curctrl)
                        {
                            ctrl = ctrls[i];
                            break;
                        }
                    }
                }
                else
                {
                    ctrl = ctrls[curctrl];
                }
            }
        }
        return ctrl;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getFirstEditableCtrl = function ()
    {
        var info = { rowidx: this._DEFAULT_ROWINDEX, bandidx: this._DEFAULT_BANDINDEX, ctrlidx: this._DEFAULT_CTRLINDEX, item: null, ctrl: null };

        var rowcnt = this._getBindCount();
        if (rowcnt > 0)
        {
            // find row, ctrl : first -> last
            for (var i = 0; i < rowcnt; i++)
            {
                var item = this._getItem(0);
                if (item)
                {
                    var ctrl = this._findEditableCtrl(item, 0, 1);
                    if (ctrl)
                    {
                        info.rowidx  = ctrl._rowidx;
                        info.bandidx = ctrl._bandidx;
                        info.ctrlidx = ctrl._ctrlidx;
                        info.item = item;
                        info.ctrl = ctrl;
                        break;
                    }
                }
            }
        }

        return info;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getLastEditableCtrl = function ()
    {
        var info = { row: this._DEFAULT_ROWINDEX, band: this._DEFAULT_BANDINDEX, ctrl: this._DEFAULT_CTRLINDEX };

        var rowcnt = this._getBindCount();
        if (rowcnt > 0)
        {
            // find row, ctrl : last -> first
            for (var i = rowcnt - 1; i >= 0; i--)
            {
                var items = this._getItem(i);
                if (items)
                {
                    var ctrl, lastctrl;
                    if (nexacro._isArray(items))
                    {
                        for (var j = items.length - 1; j >= 0; j--)
                        {
                            var item = items[j];
                            if (j > 0)
                            {
                                if (!this._isExistSubSlot(item._rowidx)) // detail item collapse
                                    continue;
                            }
                            if (item && (lastctrl = item._getLastChild()))
                            {
                                if (lastctrl && (ctrl = this._findEditableCtrl(item, lastctrl._ctrlidx, -1)))
                                    break;
                            }
                        }
                    }
                    else
                    {
                        if (lastctrl = items._getLastChild())
                        {
                            ctrl = this._findEditableCtrl(items, lastctrl._ctrlidx, -1);
                        }
                    }

                    if (ctrl)
                    {
                        info.row  = ctrl._rowidx;
                        info.band = ctrl._bandidx;
                        info.ctrl = ctrl._ctrlidx;
                        break;
                    }
                }
            }
        }

        return info;
    };
    */
    /*
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getActionItem = function (e)
    {
        return e ? e.fromobject : null;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getActionItemCtrl = function (e)
    {
        return e ? e.fromreferenceobject : null;
    };
    */
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getSelectScrollMode = function ()
    {
        var mode = this._p_selectscrollmode;
        if (mode == "default")
        {
            if (nexacro._isTouchInteraction)
            {
                mode = "scroll";
            }
            else
            {
                mode = "select";
            }
        }

        return mode;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._getViewStartScrollPos = function ()
    {
        var startitemindex = this._getItemScrollViewStart();
        if (startitemindex < 0) startitemindex = 0;

        // viewstart 기준 panel
        var panel_slot = this._getPanelSlot(startitemindex);
        if (panel_slot)
        {
            // panel 기준 scrollPos
            return panel_slot._getSlotCalcTop();
        }

        return undefined;
    };
    // 확인 : 공통화하여 ComplexComponent로 이전
    _pMegaMenu._isDownActionKeyMouse = function ()
    {
        var window = this._getWindow();

        if (window && (window._cur_ldown_elem || window._keydown_element))
        {
            var elem = window._cur_ldown_elem || window._keydown_element,
                comp = window.findComponent(elem, 0, 0)[0],
                isMegaMenu = false;

            while (comp)
            {
                if (comp instanceof nexacro.ScrollBarControl)
                    break;

                if (comp instanceof nexacro.MegaMenu && comp == this && comp.id == this.id)
                {
                    isMegaMenu = true;
                    break;
                }
                comp = comp.parent;
            }
            return isMegaMenu;
        }
        return false;
    };

    /*
    // 확인 : ListView 확인하여 ComplexComponent로 이동
    _pMegaMenu._getPanelSlotCount = function (rowidx)
    {
        rowidx = (rowidx != undefined) ? rowidx : this.getSelect().row;

        // if (rowidx >= 0 && this._panel && this._panel._panel_slots.length > 0)
        // {
        //    if (nexacro._isArray(this._panel._panel_slots[rowidx]._slot_target))
        //        return this._panel._panel_slots[rowidx]._slot_target.length;
        //    else
        //        return 1;
        // }
        // return 0;

        return this._getPanelSlotTargetCount(rowidx, true);
    };
    */
    /*
    // 확인 : ListView 확인하여 ComplexComponent로 이동
    _pMegaMenu._isExistSubSlot = function (rowidx)
    {
        rowidx = (rowidx != undefined) ? rowidx : this.getSelect().row;

        if (rowidx >= 0)
        {
            if (this._panel && this._panel._panel_slots.length > 0)
            {
                if (nexacro._isArray(this._panel._panel_slots[rowidx]._slot_target))
                {
                    var multi = this._panel._panel_slots[rowidx]._slot_multi;
                    if (multi == 0 || multi == 1)
                        return true;
                }
            }
        }
        return false;
    };
    */

    nexacro._defineProperties(_pMegaMenu, _pMegaMenu._properties);

    // 추가 재정의
    Object.defineProperty(_pMegaMenu, "overflowbutton", { get: _pMegaMenu._getOverflowControl, set: nexacro._emptyFn, enumerable: false, configurable: false });
    /*
    Object.defineProperty(_pMegaMenu, "overflowbuttonsize",         { get : _pMegaMenu._onGetExpandBarSize, set: _pMegaMenu.set_expandbarsize,      enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenu, "overflowbuttontype",         { get : _pMegaMenu._onGetExpandBarType, set: _pMegaMenu.set_expandbartype,      enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenu, "overflowbuttonactiontype",   { get : _pMegaMenu._onGetExpandActType, set: _pMegaMenu.set_expandtype,         enumerable: false, configurable: false });
    Object.defineProperty(_pMegaMenu, "overflowbuttontriggertype",  { get : _pMegaMenu._onGetExpandTrgType, set: _pMegaMenu.set_expandtriggertype,  enumerable: false, configurable: false });
    */

    _pMegaMenu = null;
}