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

if (!nexacro.DateRangeCalendar)
{
    nexacro.RangeDateCalendarChangedEventInfo = function (obj, id, prestartdate, poststartdate, preenddate, postenddate)
    {
        this.id = this.eventid = id || "onrangedatechanged";
        this.prestartdate = prestartdate;
        this.poststartdate = poststartdate;
        this.preenddate = preenddate;
        this.postenddate = postenddate;
        this.fromobject = this.fromreferenceobject = obj;
    };

    var _pRangeDateChangedEventInfo = nexacro._createPrototype(nexacro.ChangedEventInfo, nexacro.RangeDateChangedEventInfo);
    nexacro.RangeDateChangedEventInfo.prototype = _pRangeDateChangedEventInfo;
    _pRangeDateChangedEventInfo._type_name = "RangeDateCalendarChangedEventInfo";

    _pRangeDateChangedEventInfo = null;

        //==============================================================================
    // nexacro.DateFieldCloseUpEventInfo
    //============================================================================== 
    nexacro.RangeDateCloseUpEventInfo = function (obj, id, pretext, posttext, prevalue, postvalue/*, isselect*/)
    {
        this.id = this.eventid = id || "oncloseup";
        this.fromobject = this.fromreferenceobject = obj;

        this.pretext = pretext;
        this.posttext = posttext;
        this.prevalue = prevalue;
        this.postvalue = postvalue;
    };
    var _pRangeDateCloseUpEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.RangeDateCloseUpEventInfo);
    nexacro.RangeDateCloseUpEventInfo.prototype = _pRangeDateCloseUpEventInfo;
    _pRangeDateCloseUpEventInfo._type_name = "RangeDateCloseUpEventInfo";


    //==============================================================================
    // nexacro.DateRangeCalendar
    //==============================================================================
    nexacro.DateRangeCalendar = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        this._startdate = { date: "", time: "" };
        this._enddate = { date: "", time: "" };
    };

    var _pDateRangeCalendar = nexacro._createPrototype(nexacro.Component, nexacro.DateRangeCalendar);
    nexacro.DateRangeCalendar.prototype = _pDateRangeCalendar;
    _pDateRangeCalendar._type_name = "DateRangeCalendar";

    _pDateRangeCalendar._use_readonly_status = true;

    /* properties */
    _pDateRangeCalendar._p_autoselect = false;//autoselect
    _pDateRangeCalendar._p_autoskip = false;//autoskip
    _pDateRangeCalendar._p_backgroundcolumn = "";//backgroundcolumn
    _pDateRangeCalendar._p_bordercolumn = "";//bordercolumn
    _pDateRangeCalendar._p_cancelbuttontext = "";//cancelbuttontext
    _pDateRangeCalendar._p_contentheight = 0;//contentheight
    _pDateRangeCalendar._p_datecolumn = "";//datecolumn
    _pDateRangeCalendar._p_displayformat = "";//displayformat
    _pDateRangeCalendar._p_displaymonthcount = 2;//displaymonthcount
    _pDateRangeCalendar._p_enddate = undefined;//enddate
    _pDateRangeCalendar._p_enddatenulltext = "";//enddatenulltext
    _pDateRangeCalendar._p_footerheight = 0;//footerheight
    _pDateRangeCalendar._p_format = "";//format
    _pDateRangeCalendar._p_headerheight = 0;//headerheight
    _pDateRangeCalendar._p_helpertext = "";//helpertext
    _pDateRangeCalendar._p_hintingcolumn = "";//hintingcolumn
    _pDateRangeCalendar._p_iconbuttonsize = 0;//iconbuttonsize
    _pDateRangeCalendar._p_innerdataset = "";//innerdataset
    _pDateRangeCalendar._p_invalidtext = "";//invalidtext
    _pDateRangeCalendar._p_invalidvalueaction = "empty";//invalidvalueaction
    _pDateRangeCalendar._p_labelfloatingfixed = true;//labelfloatingfixed
    _pDateRangeCalendar._p_labelgap = undefined;//labelgap
    _pDateRangeCalendar._p_labelposition = "";//labelposition
    _pDateRangeCalendar._p_locale = "";//locale
    _pDateRangeCalendar._p_maskchar = "";//maskchar
    _pDateRangeCalendar._p_maxdate = "";//maxdate
    _pDateRangeCalendar._p_mindate = "";//mindate
    _pDateRangeCalendar._p_okbuttontext = "";//okbuttontext
    _pDateRangeCalendar._p_popupsize = "";//popupsize
    _pDateRangeCalendar._p_popuptype = "default";//popuptype
    _pDateRangeCalendar._p_popupdirection = "";//popupdirection
    _pDateRangeCalendar._p_readonlycolumn = "";//readonlycolumn
    _pDateRangeCalendar._p_startdate = undefined;//startdate
    _pDateRangeCalendar._p_startdatenulltext = "";//startdatenulltext
    _pDateRangeCalendar._p_startlabeltext = "Start Date";//startdatenulltext
    _pDateRangeCalendar._p_endlabeltext = "End Date";//enddatenulltext
    _pDateRangeCalendar._p_textcolorcolumn = "";//textcolorcolumn
    //_pDateRangeCalendar._p_type = "";//type
    _pDateRangeCalendar._p_usecontextmenu = false;//usecontextmenu
    _pDateRangeCalendar._p_usedropbutton = true;//usedropbutton
    _pDateRangeCalendar._p_usesoftkeyboard = false;//usesoftkeyboard
    _pDateRangeCalendar._p_value = undefined;//value
    _pDateRangeCalendar._p_delimitertext = "-"; 
    
    //internal properties
    _pDateRangeCalendar._want_tabs = false;
    _pDateRangeCalendar._popuptype = (nexacro._isTouchInteraction) ? "mobile" : "normal";

    /* event list */
    //Todo
    _pDateRangeCalendar._event_list = {
        "oneditclick": 1, "onitemclick": 1,
        "onkeydown": 1, "onkeyup": 1,
        "onkillfocus": 1, "onsetfocus": 1,
        "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1, "onmousedown": 1, "onmouseup": 1,
        "onmouseenter": 1, "onmousemove": 1, "onmouseleave": 1,
        "onmove": 1, "onsize": 1,
        "canchange": 1, "onchanged": 1, "oninput": 1,
        "onmousewheel": 1, "oncontextmenu": 1,
        "oninvalid": 1,
        "ondropdown": 1, "ondayclick": 1, "oncloseup": 1,
        "oninnerdatachanged": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1, "ondevicebuttonup": 1
    };

    _pDateRangeCalendar._properties = [
    /*{ name: "accessibilityaction" },
    { name: "accessibilitydesclevel" },
    { name: "accessibilitydescription" },
    { name: "accessibilityenable" },
    { name: "accessibilitylabel" },
    { name: "accessibilityrole" },*/
    { name: "autoselect" },
    { name: "autoskip" },
    { name: "backgroundcolumn" },
    { name: "bordercolumn" }, ///bordercolumn
    { name: "cancelbuttontext" },
    { name: "contentheight" },
    { name: "datecolumn" },
    { name: "displayformat" },
    { name: "displaymonthcount" },
    { name: "enddate" },
    { name: "endlabeltext" },
    { name: "enddatenulltext" },
    { name: "format" },
    { name: "hintingcolumn" },
    { name: "iconbuttonsize" },
    { name: "innerdataset" },
    { name: "invalidvalueaction" },
    { name: "labelfloatingfixed" },
    { name: "labelgap" },
    { name: "labelposition" },
    { name: "locale" },
    { name: "maskchar" },
    { name: "maxdate" },
    { name: "mindate" },
    { name: "okbuttontext" },
    { name: "popupsize" },
    { name: "popuptype" },
    { name: "popupdirection" },
    { name: "readonlycolumn" },
    { name: "startdate" },
    { name: "startlabeltext" },
    { name: "startdatenulltext" },
    { name: "textcolorcolumn" },
    { name: "usecontextmenu" },
    { name: "usedropbutton" },
    { name: "usesoftkeyboard" },
    { name: "value" },
    { name: "delmitertext" },
    { name: "text", readonly: true }
];


    //===============================================================
    // nexacro.DateRangeCalendar : Create & Destroy & Update
    //===============================================================
    _pDateRangeCalendar.on_create_contents = function ()
    {
        //dateField 2개
        var control_elem = this.getElement();
        if (control_elem)
        {
            const startdatefield = this._p_startdatefield = new nexacro._DateFieldControl("startdatefield", 0, 0, 0, 0, null, null, null, null, null, null, this);
            const enddatefield = this._p_enddatefield = new nexacro._DateFieldControl("enddatefield", 0, 0, 0, 0, null, null, null, null, null, null, this);
            this._p_delimiter = new nexacro._DelimiterControl("delimiter", 0, 0, 0, 0, null, null, null, null, null, null, this);
            //startdatefield.set_labeltext("Start Date");
            startdatefield.set_usedropbutton(false);
            //enddatefield.set_labeltext("End Date");
            startdatefield.createComponent();
            enddatefield.createComponent();
            this._p_delimiter.createComponent();
            this.on_apply_usecontextmenu();
            this.on_apply_usedropbutton();
            this.on_apply_usesoftkeyboard();
        }
    };

    _pDateRangeCalendar.on_created_contents = function (win)
    {
        this.on_apply_autoselect();
        this.on_apply_autoskip();
        this.on_apply_backgroundcolumn();
        this.on_apply_bordercolumn();
        if (this._p_cancelbuttontext)
            this.on_apply_cancelbuttontext();
        if (this._p_contentheight)
           this.on_apply_contentheight();
        this.on_apply_datecolumn();
        this.on_apply_displayformat();
        if (this._p_displaymonthcount)
            this.on_apply_displaymonthcount();
        if (this._p_enddate)
            this.on_apply_enddate();
        if (this._p_enddatenulltext)
            this.on_apply_enddatenulltext();
        if (this._p_endlabeltext)
            this.on_apply_endlabeltext();
        this.on_apply_footerheight();
        this.on_apply_format();
        if (this._p_helpertext)
            this.on_apply_helpertext();
        this.on_apply_hintingcolumn();
        if (this._p_iconbuttonsize)
           this.on_apply_iconbuttonsize();
        this.on_apply_innerdataset();
        this.on_apply_invalidtext();
        this.on_apply_invalidvalueaction();
        this.on_apply_labelfloatingfixed();
        if (this._p_labelgap)
            this.on_apply_labelgap();
        this.on_apply_labelposition();
        this.on_apply_locale();
        this.on_apply_maskchar();
        this.on_apply_maxdate();
        this.on_apply_mindate();
        if (this._p_okbuttontext)
            this.on_apply_okbuttontext();
        this.on_apply_popupdirection();
        this.on_apply_readonlycolumn();
        if (this._p_startdate)
            this.on_apply_startdate();
        if (this._p_startdatenulltext)
            this.on_apply_startdatenulltext();
        if (this._p_startlabeltext)
            this.on_apply_startlabeltext();
        this.on_apply_textcolorcolumn();
        this._recalcLayout();

        this._p_startdatefield.on_created(win);
        this._p_delimiter.on_created(win);
        this._p_enddatefield.on_created(win);
    };

    _pDateRangeCalendar.on_destroy_contents = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.destroy();
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.destroy();
        }
    };

    _pDateRangeCalendar.on_create_contents_command = function ()
    {
        this.on_apply_autoselect();
        this.on_apply_autoskip();
        this.on_apply_backgroundcolumn();
        this.on_apply_bordercolumn();
        if (this._p_cancelbuttontext)
            this.on_apply_cancelbuttontext();
        if (this._p_contentheight)
           this.on_apply_contentheight();
        this.on_apply_datecolumn();
        this.on_apply_displayformat();
        if (this._p_displaymonthcount)
            this.on_apply_displaymonthcount();
        if (this._p_enddate)
            this.on_apply_enddate();
        if (this._p_enddatenulltext)
            this.on_apply_enddatenulltext();
        if (this._p_endlabeltext)
            this.on_apply_endlabeltext();
        this.on_apply_footerheight();
        this.on_apply_format();
        if (this._p_helpertext)
            this.on_apply_helpertext();
        this.on_apply_hintingcolumn();
        if (this._p_iconbuttonsize)
           this.on_apply_iconbuttonsize();
        this.on_apply_innerdataset();
        this.on_apply_invalidtext();
        this.on_apply_invalidvalueaction();
        this.on_apply_labelfloatingfixed();
        if (this._p_labelgap)
            this.on_apply_labelgap();
        this.on_apply_labelposition();
        this.on_apply_locale();
        this.on_apply_maskchar();
        this.on_apply_maxdate();
        this.on_apply_mindate();
        if (this._p_okbuttontext)
            this.on_apply_okbuttontext();
        this.on_apply_popupdirection();
        this.on_apply_readonlycolumn();
        if (this._p_startdate)
            this.on_apply_startdate();
        if (this._p_startdatenulltext)
            this.on_apply_startdatenulltext();
        if (this._p_startlabeltext)
            this.on_apply_startlabeltext();
        this.on_apply_textcolorcolumn();

        if (this._p_value)
            this.on_apply_value();
        if (this._p_delimitertext)
            this.on_apply_delmitertext();

        this._recalcLayout();
        let str = "";
        if (this._p_startdatefield)
        {
            str += this._p_startdatefield.createCommand();
        }
        if (this._p_delimiter)
        {
            str += this._p_delimiter.createCommand();
        }
        if (this._p_enddatefield)
        {
            str += this._p_enddatefield.createCommand();
        }

        return str;
    };

    _pDateRangeCalendar.on_attach_contents_handle = function (win)
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.attachHandle(win);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.attachHandle(win);
        }

        if (this._p_delimiter)
        {
            //this._p_delimiter
            this._p_delimiter.attachHandle(win);
        }
    };

    //===============================================================
    // nexacro.DateRangeCalendar : Override
    //===============================================================
    _pDateRangeCalendar.on_change_containerRect = function (width, height)
    {
        this._recalcLayout();
    };

    _pDateRangeCalendar.on_change_containerPos = function (left, top)
    {
    };
    //===============================================================
    // nexacro.DateRangeCalendar : Properties
    //===============================================================
    
    _pDateRangeCalendar.set_autoselect = function (v)
    {
        if (this._p_autoselect != v)
        {
            this._p_autoselect = v;
            this.on_apply_autoselect();
        }
    };

    _pDateRangeCalendar.on_apply_autoselect = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_autoselect(this._p_autoselect);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_autoselect(this._p_autoselect);
        }
    };

    _pDateRangeCalendar.set_autoskip = function (v)
    {
        if (this._p_autoskip != v)
        {
            this._p_autoskip = v;
            this.on_apply_autoskip();
        }
    };
    _pDateRangeCalendar.on_apply_autoskip = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_autoskip(this._p_autoskip);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_autoskip(this._p_autoskip);
        }
    };

    _pDateRangeCalendar.set_backgroundcolumn = function (v)
    {
        if (this._p_backgroundcolumn != v)
        {
            this._p_backgroundcolumn = v;
            this.on_apply_backgroundcolumn();
        }
    };
    _pDateRangeCalendar.on_apply_backgroundcolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_backgroundcolumn(this._p_backgroundcolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_backgroundcolumn(this._p_backgroundcolumn);
        }
    };

    _pDateRangeCalendar.set_bordercolumn = function (v)
    {
        if (this._p_bordercolumn != v)
        {
            this._p_bordercolumn = v;
            this.on_apply_bordercolumn();
        }
    };
    _pDateRangeCalendar.on_apply_bordercolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_bordercolumn(this._p_bordercolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_bordercolumn(this._p_bordercolumn);
        }
    };

    _pDateRangeCalendar.set_cancelbuttontext = function (v)
    {
        if (this._p_cancelbuttontext != v)
        {
            this._p_cancelbuttontext = v;
            this.on_apply_cancelbuttontext();
        }
    };
    _pDateRangeCalendar.on_apply_cancelbuttontext = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_cancelbuttontext(this._p_cancelbuttontext);
        }
    };
    /*
    _pDateRangeCalendar.set_closebuttonsize = function (v)
    {
        //Todo
        if (this._p_closebuttonsize != v)
        {
            this._p_closebuttonsize = v;
            this.on_apply_closebuttonsize();
        }
    };
    _pDateRangeCalendar.on_apply_closebuttonsize = function ()
    {
        //Todo
    };

    _pDateRangeCalendar.set_closebuttontext = function (v)
    {
        //Todo
        if (this._p_closebuttontext != v)
        {
            this._p_closebuttontext = v;
            this.on_apply_closebuttontext();
        }
    };
    _pDateRangeCalendar.on_apply_closebuttontext = function ()
    {
        //Todo
    };
    */

    _pDateRangeCalendar.set_contentheight = function (v)
    {
        if (this._p_contentheight != v)
        {
            this._p_contentheight = v;
            this.on_apply_contentheight();
        }
    };
    _pDateRangeCalendar.on_apply_contentheight = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_contentheight(this._p_contentheight);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_contentheight(this._p_contentheight);
        }
    };

    _pDateRangeCalendar.set_datecolumn = function (v)
    {
        if (this._p_datecolumn != v)
        {
            this._p_datecolumn = v;
            this.on_apply_datecolumn();
        }
    };
    _pDateRangeCalendar.on_apply_datecolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_datecolumn(this._p_datecolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_datecolumn(this._p_datecolumn);
        }

    };
    /*
    _pDateRangeCalendar.set_datetabbuttontext = function (v)
    {
        //Todo
        if (this._p_datetabbuttontext != v)
        {
            this._p_datetabbuttontext = v;
            this.on_apply_datetabbuttontext();
        }
    };
    _pDateRangeCalendar.on_apply_datetabbuttontext = function ()
    {
        //Todo
    };
   

    _pDateRangeCalendar.set_defaultrangeposition = function (v)
    {
        //Todo
        if (this._p_defaultrangeposition != v)
        {
            this._p_defaultrangeposition = v;
            this.on_apply_defaultrangeposition();
        }
    };
    _pDateRangeCalendar.on_apply_defaultrangeposition = function ()
    {
        //Todo
    };
    */

    _pDateRangeCalendar.set_displayformat = function (v)
    {
        if (this._p_displayformat != v)
        {
            this._p_displayformat = v;
            this.on_apply_displayformat();
        }
    };
    _pDateRangeCalendar.on_apply_displayformat = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_displayformat(this._p_displayformat);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_displayformat(this._p_displayformat);
        }
    };

    _pDateRangeCalendar.set_displaymonthcount = function (v)
    {
        if (this._p_displaymonthcount != v)
        {
            this._p_displaymonthcount = v;
            this.on_apply_displaymonthcount();
        }
    };
    _pDateRangeCalendar.on_apply_displaymonthcount = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield._setDisplayMonthCount(this._p_displaymonthcount);
        }
    };

    _pDateRangeCalendar.set_enddate = function (v)
    {
        if (this._p_enddate != v)
        {
            this._p_enddate = v;
            this.on_apply_enddate();
        }
    };
    _pDateRangeCalendar.on_apply_enddate = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_value(this._p_enddate);
        }
    };

    _pDateRangeCalendar.set_enddatenulltext = function (v)
    {
        if (this._p_enddatenulltext != v)
        {
            this._p_enddatenulltext = v;
            this.on_apply_enddatenulltext();
        }
    };
    _pDateRangeCalendar.on_apply_enddatenulltext = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_displaynulltext(this._p_enddatenulltext);
        }
    };

    _pDateRangeCalendar.set_endlabeltext = function (v)
    {
        if (this._p_endlabeltext != v)
        {
            this._p_endlabeltext = v;
            this.on_apply_endlabeltext();
        }
    };
    _pDateRangeCalendar.on_apply_endlabeltext = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_labeltext(this._p_endlabeltext);
        }   
    };


    _pDateRangeCalendar.set_footerheight = function (v)
    {
        if (this._p_footerheight != v)
        {
            this._p_footerheight = v;
            this.on_apply_footerheight();
        }
    };

    _pDateRangeCalendar.on_apply_footerheight = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_footerheight(this._p_footerheight);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_footerheight(this._p_footerheight);
        }
    };

    _pDateRangeCalendar.set_format = function (v)
    {
        if (this._p_format != v)
        {
            this._p_format = v;
            this.on_apply_format();
        }
    };
    _pDateRangeCalendar.on_apply_format = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_format(this._p_format);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_format(this._p_format);
        }
    };
    
    _pDateRangeCalendar.set_helpertext = function (v)
    {
        if (this._p_helpertext != v)
        {
            this._p_helpertext = v;
            this.on_apply_helpertext();
        }
    };
    _pDateRangeCalendar.on_apply_helpertext = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_helpertext(this._p_helpertext);
        }

        if (this._p_enddatefield)
        {
         //   this._p_enddatefield.set_helpertext(this._p_helpertext);
        }
    };

    _pDateRangeCalendar.set_hintingcolumn = function (v)
    {
        if (this._p_hintingcolumn != v)
        {
            this._p_hintingcolumn = v;
            this.on_apply_hintingcolumn();
        }
    };
    _pDateRangeCalendar.on_apply_hintingcolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_hintingcolumn(this._p_hintingcolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_hintingcolumn(this._p_hintingcolumn);
        }
    };

    _pDateRangeCalendar.set_iconbuttonsize = function (v)
    {
        if (this._p_iconbuttonsize != v)
        {
            this._p_iconbuttonsize = v;
            this.on_apply_iconbuttonsize();
        }
    };
    _pDateRangeCalendar.on_apply_iconbuttonsize = function ()
    {
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_iconbuttonsize(this._p_iconbuttonsize);
        }
    };

    _pDateRangeCalendar.set_innerdataset = function (v)
    {
        if (typeof v != "string")
        {
            this.setInnerDataset(v);
            return;
        }

        if (this._p_innerdataset != v || (this._p_innerdataset && !this._innerdataset))
        {
            this._setInnerDatasetStr(v);
            this.on_apply_innerdataset(this._innerdataset);
        }
    };

     _pDateRangeCalendar.getInnerDataset = function ()
    {
        return this._innerdataset;
    };

    _pDateRangeCalendar.setInnerDataset = function (obj)
    {
        if (!obj)
        {
            this._innerdataset = null;
            this._p_innerdataset = "";
            this.on_apply_innerdataset(this._innerdataset);
        }
        else if (obj instanceof nexacro.Dataset)
        {
            this._innerdataset = obj;
            this._p_innerdataset = obj.id;
            this.on_apply_innerdataset(this._innerdataset);
        }
    };


    _pDateRangeCalendar._setInnerDatasetStr = function (str)
    {
        if (!str)
        {
            this._innerdataset = null;
            this._p_innerdataset = "";
        }
        else
        {
            str = str.replace("@", "");
            this._innerdataset = this._findDataset(str);
            this._p_innerdataset = str;
        }
    };

    _pDateRangeCalendar.on_apply_innerdataset = function (ds)
    {
        if (ds)
        {
            ds._setEventHandler("onvaluechanged", this._on_dataset_onvaluechanged, this);
            //ds._setEventHandler("onrowsetchanged", this._on_dataset_onrowsetchanged, this);
        }

        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_innerdataset(this._p_innerdataset);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_innerdataset(this._p_innerdataset);
        }
    };
    /*
    _pDateRangeCalendar.set_inputtype = function (v)
    {
        //Todo
        if (this._p_inputtype != v)
        {
            this._p_inputtype = v;
            this.on_apply_inputtype();
        }
    };
    _pDateRangeCalendar.on_apply_inputtype = function ()
    {
        //Todo
    };
    */

    _pDateRangeCalendar.set_invalidtext = function (v)
    {
        if (this._p_invalidtext != v)
        {
            this._p_invalidtext = v;
            this.on_apply_invalidtext();
        }
    };
    _pDateRangeCalendar.on_apply_invalidtext = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_invalidtext(this._p_invalidtext);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_invalidtext(this._p_invalidtext);
        }
    };

    _pDateRangeCalendar.set_invalidvalueaction = function (v)
    {
        if (this._p_invalidvalueaction != v)
        {
            this._p_invalidvalueaction = v;
            this.on_apply_invalidvalueaction();
        }
    };
    _pDateRangeCalendar.on_apply_invalidvalueaction = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_invalidvalueaction(this._p_invalidvalueaction);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_invalidvalueaction(this._p_invalidvalueaction);
        }
    };

    _pDateRangeCalendar.set_labelfloatingfixed = function (v)
    {
        //Todo
        if (this._p_labelfloatingfixed != v)
        {
            this._p_labelfloatingfixed = v;
            this.on_apply_labelfloatingfixed();
        }
    };
    _pDateRangeCalendar.on_apply_labelfloatingfixed = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_labelfloatingfixed(this._p_labelfloatingfixed);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_labelfloatingfixed(this._p_labelfloatingfixed);
        }
    };

    _pDateRangeCalendar.set_labelgap = function (v)
    {
        //Todo
        if (this._p_labelgap != v)
        {
            this._p_labelgap = v;
            this.on_apply_labelgap();
        }
    };
    _pDateRangeCalendar.on_apply_labelgap = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_labelgap(this._p_labelgap);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_labelgap(this._p_labelgap);
        }
    };

    _pDateRangeCalendar.set_labelposition = function (v)
    {
        //Todo
        if (this._p_labelposition != v)
        {
            this._p_labelposition = v;
            this.on_apply_labelposition();
        }
    };
    _pDateRangeCalendar.on_apply_labelposition = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_labelposition(this._p_labelposition);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_labelposition(this._p_labelposition);
        }
    };

    _pDateRangeCalendar.set_locale = function (v)
    {
        if (this._p_locale != v)
        {
            this._p_locale = v;
            this.on_apply_locale();
        }
    };
    _pDateRangeCalendar.on_apply_locale = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_locale(this._p_locale);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_locale(this._p_locale);
        }
    };

    _pDateRangeCalendar.set_maskchar = function (v)
    {
        //Todo
        if (this._p_maskchar != v)
        {
            this._p_maskchar = v;
            this.on_apply_maskchar();
        }
    };
    _pDateRangeCalendar.on_apply_maskchar = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_maskchar(this._p_maskchar);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_maskchar(this._p_maskchar);
        }
    };

    _pDateRangeCalendar.set_maxdate = function (v)
    {
        //Todo
        if (this._p_maxdate != v)
        {
            this._p_maxdate = v;
            this.on_apply_maxdate();
        }
    };
    _pDateRangeCalendar.on_apply_maxdate = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield._setMaxDate(this._p_maxdate);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield._setMaxDate(this._p_maxdate);
        }
    };

    _pDateRangeCalendar.set_mindate = function (v)
    {
        //Todo
        if (this._p_mindate != v)
        {
            this._p_mindate = v;
            this.on_apply_mindate();
        }
    };
    _pDateRangeCalendar.on_apply_mindate = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield._setMinDate(this._p_mindate);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield._setMinDate(this._p_mindate);
        }
    };

    _pDateRangeCalendar.set_okbuttontext = function (v)
    {
        //Todo
        if (this._p_okbuttontext != v)
        {
            this._p_okbuttontext = v;
            this.on_apply_okbuttontext();
        }
    };
    _pDateRangeCalendar.on_apply_okbuttontext = function ()
    {
        //Todo
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_okbuttontext(this._p_okbuttontext);
        }
    };

    _pDateRangeCalendar.set_popupsize = function (v)
    {
        //Todo
        if (this._p_popupsize != v)
        {
            this._p_popupsize = v;
            this.on_apply_popupsize();
        }
    };
    _pDateRangeCalendar.on_apply_popupsize = function ()
    {
        //Todo
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_popupsize(this._p_popupsize);
        }
    };

    _pDateRangeCalendar.set_popuptype = function (v)
    {
        //Todo
        if (this._p_popuptype != v)
        {
            this._p_popuptype = v;
            this.on_apply_popuptype();
        }
    };
    _pDateRangeCalendar.on_apply_popuptype = function ()
    {
        //Todo
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_popuptype(this._p_popuptype);
        }
    };

    _pDateRangeCalendar.set_popupdirection = function (v)
    {
        //Todo
        if (this._p_popupdirection != v)
        {
            this._p_popupdirection = v;
            this.on_apply_popupdirection();
        }
    };
    _pDateRangeCalendar.on_apply_popupdirection = function ()
    {
        //Todo
        if (this._p_enddatefield)
        {
            this._p_enddatefield._setPopupdirection(this._p_popupdirection);
        }
    };

    _pDateRangeCalendar.set_readonlycolumn = function (v)
    {
        //Todo
        if (this._p_readonlycolumn != v)
        {
            this._p_readonlycolumn = v;
            this.on_apply_readonlycolumn();
        }
    };
    _pDateRangeCalendar.on_apply_readonlycolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_readonlycolumn(this._p_readonlycolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_readonlycolumn(this._p_readonlycolumn);
        }
    };

    _pDateRangeCalendar.set_startdate = function (v)
    {
        //Todo
        if (this._p_startdate != v)
        {
            this._p_startdate = v;
            this.on_apply_startdate();
        }
    };

    _pDateRangeCalendar.on_apply_startdate = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_value(this._p_startdate);
        }  
        //this._on_apply_value();
    };

    _pDateRangeCalendar.set_startdatenulltext = function (v)
    {
        //Todo
        if (this._p_startdatenulltext != v)
        {
            this._p_startdatenulltext = v;
            this.on_apply_startdatenulltext();
        }
    };
    _pDateRangeCalendar.on_apply_startdatenulltext = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_displaynulltext(this._p_startdatenulltext);
        }   
    };

     _pDateRangeCalendar.set_startlabeltext = function (v)
    {
        //Todo
        if (this._p_startlabeltext != v)
        {
            this._p_startlabeltext = v;
            this.on_apply_startlabeltext();
        }
    };
    _pDateRangeCalendar.on_apply_startlabeltext = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_labeltext(this._p_startlabeltext);
        }   
    };

    /*
    _pDateRangeCalendar.set_tabbuttonheight = function (v)
    {
        //Todo
        if (this._p_tabbuttonheight != v)
        {
            this._p_tabbuttonheight = v;
            this.on_apply_tabbuttonheight();
        }
    };
    _pDateRangeCalendar.on_apply_tabbuttonheight = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_tabbuttonheight(this._p_tabbuttonheight);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_tabbuttonheight(this._p_tabbuttonheight);
        }
    };
    */

    _pDateRangeCalendar.set_textcolorcolumn = function (v)
    {
        //Todo
        if (this._p_textcolorcolumn != v)
        {
            this._p_textcolorcolumn = v;
            this.on_apply_textcolorcolumn();
        }
    };
    _pDateRangeCalendar.on_apply_textcolorcolumn = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_textcolorcolumn(this._p_textcolorcolumn);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_textcolorcolumn(this._p_textcolorcolumn);
        }
    };
    /*
      _pDateRangeCalendar.set_type = function (v)
    {
        //Todo
        if (this._p_type != v)
        {
            this._p_type = v;
            this.on_apply_type();
        }
    };
    _pDateRangeCalendar.on_apply_type = function ()
    {
        //Todo
    };
    */

    _pDateRangeCalendar.set_usecontextmenu = function (v)
    {
        //Todo
        if (this._p_usecontextmenu != v)
        {
            this._p_usecontextmenu = v;
            this.on_apply_usecontextmenu();
        }
    };
    _pDateRangeCalendar.on_apply_usecontextmenu = function ()
    {
        //Todo
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_usecontextmenu(this._p_usecontextmenu);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_usecontextmenu(this._p_usecontextmenu);
        }
    };

    _pDateRangeCalendar.set_usedropbutton  = function (v)
    {
        //Todo
        if (this._p_usedropbutton != v)
        {
            this._p_usedropbutton = v;
            this.on_apply_usedropbutton();
        }
    };
    _pDateRangeCalendar.on_apply_usedropbutton = function ()
    {
        //Todo
        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_usedropbutton(this._p_usedropbutton);
        }
    };
    /*
    _pDateRangeCalendar.set_usehelpertext = function (v)
    {
        //Todo
        if (this._p_usehelpertext != v)
        {
            this._p_usehelpertext = v;
            this.on_apply_usehelpertext();
        }
    };
    _pDateRangeCalendar.on_apply_usehelpertext = function ()
    {
        //Todo
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_usehelpertext(this._p_usehelpertext);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_usehelpertext(this._p_usehelpertext);
        }
    };
    */

    _pDateRangeCalendar.set_usesoftkeyboard = function (v)
    {
        //Todo
        if (this._p_usesoftkeyboard != v)
        {
            this._p_usesoftkeyboard = v;
            this.on_apply_usesoftkeyboard();
        }
    };
    _pDateRangeCalendar.on_apply_usesoftkeyboard = function ()
    {
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_usesoftkeyboard(this._p_usesoftkeyboard);
        }

        if (this._p_enddatefield)
        {
            this._p_enddatefield.set_usesoftkeyboard(this._p_usesoftkeyboard);
        }
    };

    _pDateRangeCalendar.set_value = function (v)
    {
        //Todo
        if (this._p_value != v)
        {
            this._p_value = v;
            this.on_apply_value();
        }
    };

    _pDateRangeCalendar.on_apply_value = function ()
    {
        let startValue = null;
        let endValue = null;
        const value = this._p_value;

        if (value.includes("-"))
        {
            const [start, end] = value.split("-");
            startValue = start;
            endValue = end;
        } 
        else
        {
            startValue = value;
        }
        if (this._p_startdatefield)
        {
            this._p_startdatefield.set_value(startValue);
            this._p_enddatefield._setStartdate(startValue);
        }
        if (this._p_startdatefield)
            this._p_enddatefield.set_value(endValue);
    };

    _pDateRangeCalendar.set_delmitertext = function (v)
    {
        //Todo
        if (this._p_delimitertext != v)
        {
            this._p_delimitertext = v;
            this.on_apply_delmitertext();
        }
    };
    _pDateRangeCalendar.on_apply_delmitertext = function ()
    {
        if (this._p_delimiter)
        {
            this._p_delimiter.set_text(this._p_delimitertext);
        }
    };

    nexacro._defineProperties(_pDateRangeCalendar, _pDateRangeCalendar._properties);
    //===============================================================
    // nexacro.DateRangeCalendar : Methods
    //===============================================================
    _pDateRangeCalendar.getYear = function (type)
    {
        var ret = 1970;
        var target = type == "end" ? this._p_enddatefield : this._p_startdatefield;
        if (target)
        {
           return target.getYear();
        }
        return ret;
    };

    _pDateRangeCalendar.getMonth = function (type)
    {
        var ret = 1;
        var target = type == "end" ? this._p_enddatefield : this._p_startdatefield;
        if (target)
        {
           return target.getMonth();
        }
        return ret;
    };

    _pDateRangeCalendar.getDay = function (type)
    {
        var ret = 1;
        var target = type == "end" ? this._p_enddatefield : this._p_startdatefield;
        if (target)
        {
           return target.getDay();
        }
        return ret;
    };

    _pDateRangeCalendar.getDayOfWeek = function (type)
    {
        var ret = 4;
        var target = type == "end" ? this._p_enddatefield : this._p_startdatefield;
        if (target)
        {
            return target.getDayOfWeek();
        }
        return ret;
    };

    _pDateRangeCalendar.getDisplayText = function (type)
    {
        var ret = "";
        var target = type == "end" ? this._p_enddatefield : this._p_startdatefield;
        if (target)
        {
            return target.getDisplayText();
        }
        return ret;
    };
    //===============================================================
    // nexacro.DateRangeCalendar : Events
    //===============================================================
    _pDateRangeCalendar.on_fire_ondropdown = function (obj)
    {
        if (this.ondropdown && this.ondropdown._has_handlers)
        {
            var evt = new nexacro.Event(this, "ondropdown");
            evt.cancelable = true;
            evt.fromreferenceobject = this;
            return this.ondropdown._fireCheckEvent(this, evt);
        }

        return true;
    };
    //_on_datepicker_oncloseup
    _pDateRangeCalendar.on_fire_oncloseup = function (obj, pretext, prevalue, posttext, postvalue)
    {
        if (this.oncloseup && this.oncloseup._has_handlers)
        {
            var evt = new nexacro.RangeDateCloseUpEventInfo(this, "oncloseup", pretext, posttext, prevalue, postvalue);
            return this.oncloseup._fireEvent(this, evt);
        }

        return false;
    };


    _pDateRangeCalendar._on_datepicker_oncloseup = function (obj, e)
    {
        if (e._is_external_call)
        {
            var _window = this._getWindow();
            if (_window && this._track_capture)
            {
                _window._releaseCaptureLock(this);
            }
            if (this._recursive_closeup)
            {
                this._recursive_closeup = undefined;
                return;
            }  
        }
        else
        {
            this._recursive_closeup = true;
        }
        //_pDateRangeCalendar value set
        const startdatefield = this._p_startdatefield;
        const enddatefield = this._p_enddatefield;

        if (!startdatefield || !enddatefield)
        {
            return;
        }


        var pretext = this._p_text;
        var prevalue = this._p_value;
        var is_changed = false;
        if (e._apply_value)
        {
            var curvalue = e._startdate;
            this.set_startdate(curvalue);
            var endvalue = e._enddate == "" ? null : e._enddate;
            this.set_enddate(endvalue);
            var curvalue = this._p_startdate + "-" + this._p_enddate;
            var curtext = startdatefield._default_text + "" + this._p_delimitertext + enddatefield._default_text;//this._makeBufferTextFromValue(curvalue);
            is_changed = this._on_value_change(pretext, prevalue, curtext, curvalue);
        }

        this.on_fire_oncloseup(this, pretext, prevalue, this._p_text, this._p_value);

        if (is_changed)
        {
            this.on_fire_onchanged(this, pretext, prevalue, this._p_text, this._p_value);
        }
        if (!this._onlydisplay)
        {
            enddatefield.setFocus();
            const end_input = enddatefield._input_element;
            if (end_input.setElementFocus)
                end_input.setElementFocus();
        }

        //fire event
        return;

    };

    _pDateRangeCalendar.on_fire_onchanged = function (obj, pretext, prevalue, posttext, postvalue)
	{
		if (this.onchanged && this.onchanged._has_handlers)
		{
			var evt = new nexacro.ChangedEventInfo(this, "onchanged", pretext, prevalue, posttext, postvalue);
			return this.onchanged._fireEvent(this, evt);
		}
	};

    _pDateRangeCalendar._on_value_change = function (pretext, prevalue, posttext, postvalue)
    {
        var ret = true;
        if (prevalue == postvalue)
        {
            ret = false;
        }
        /*
        else if (!this.on_fire_canchange(this, pretext, prevalue, posttext, postvalue))
        {
            ret = false;
        }
        */
        else if (this._bind_event)
        {
            var ret_apply = this.applyto_bindSource("value", postvalue);
            if (!ret_apply || this._p_value === prevalue)
                ret = false;
        }

        if (!ret)
        {
            this._p_value = prevalue;
            this._p_text = pretext;
            this.on_apply_value(prevalue);
           
        }
        else
        {
            this._p_value = postvalue;
            this._p_text = posttext;
            //this._setValue(postvalue);
            this._default_value = postvalue;
            this._default_text = posttext;

            this._updateAccessibilityLabel();
        }

        return ret;
    };

    
    _pDateRangeCalendar.on_fire_canchange = function (obj, pretext, prevalue, posttext, postvalue)
    {
        if (this.canchange && this.canchange._has_handlers)
        {
            var evt = new nexacro.ChangeEventInfo(obj, "canchange", pretext, prevalue, posttext, postvalue);

            this._processing_canchange = true;
            var ret = this.canchange._fireCheckEvent(this, evt);
            this._processing_canchange = false;

            return ret;
        }

        return true;
    };

    _pDateRangeCalendar.on_fire_ondayclick = function (postdate)
    {
        if (this.ondayclick && this.ondayclick._has_handlers)
        {
            var evt = new nexacro.DateFieldDayClickEventInfo(this, "ondayclick", postdate);
            return this.ondayclick._fireEvent(this, evt);
        }
        return true;
    };
    /*
    _pDateRangeCalendar.on_fire_oneditclick = function (obj, caretpos, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
	{
		if (this._p_visible && this._isEnable() && this._p_enableevent)
		{
			if (this.oneditclick && this.oneditclick._has_handlers)
			{
			    var evt = new nexacro.EditClickEventInfo(this, "oneditclick", caretpos, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, this, from_refer_comp, meta_key);
				return this.oneditclick._fireEvent(this, evt);
			}
		}

		return true;
	};
    */

    _pDateRangeCalendar.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {
        var retn = true;
        if (this.oneditclick && this.oneditclick._has_handlers)
        {
            var caretpos = from_comp?._p_parent?.getCaretPos?.();
            var clientXY = this._getClientXY(canvasX, canvasY);

            var evt = new nexacro.EditClickEventInfo(this, "oneditclick", caretpos, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[1], this, this, meta_key);
            retn = this.oneditclick._fireEvent(this, evt);
        }

        //this._on_edit_oneditclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);

        return retn;
    };

    _pDateRangeCalendar.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        var curvalue = this._p_startdate + "-" + this._p_enddate;
        var curtext = this._p_startdatefield._default_text + "" + this._p_delimitertext + this._p_enddatefield._default_text;//this._makeBufferTextFromValue(curvalue);
        if (this._p_value != curvalue)
        {
            this._on_value_change(this._p_text, this._p_value, curtext, curvalue);
        }
    };

    //===============================================================
    // nexacro.DateRangeCalendar : Util
    //===============================================================
    _pDateRangeCalendar._recalcLayout = function (left, top)
    {
        if (this._is_created_contents)
        {
            const startdatefield = this._p_startdatefield;
            const enddatefield = this._p_enddatefield;
            const delmitor = this._p_delimiter;

            const client_left = this._getClientLeft();
            const client_top = this._getClientTop();
            const client_width = this._getClientWidth();
            const client_height = this._getClientHeight();

            const delmitor_size = delmitor._on_getFitSize();
            const delmitor_width = delmitor_size[0];
            const available_width = client_width - delmitor_width;
            let startdatefield_width = available_width * 0.43;
            let enddatefield_width = available_width - startdatefield_width; // 나머지 전부
            if (startdatefield)
            {
                startdatefield.move(client_left, client_top, startdatefield_width, client_height, null, null);
            }

            if (delmitor)
            {
                delmitor.move(startdatefield_width, client_top, delmitor_width, client_height, null, null);
            }

            if (enddatefield)
            {
                enddatefield.move(startdatefield_width + delmitor_width, client_top, enddatefield_width, client_height, null, null);
            }
        };
    };


    _pDateRangeCalendar._showPopup = function ()
    {
        /* 접근성 작업 후 Accessibility_Comp.js에 이관 */
        //if (nexacro._enableaccessibility)
        //{
        //    this._want_arrows = true;
        //}

        var _window = this._getWindow();
        var control_elem = this.getElement();
        if (control_elem)
        {
            var ret = this.on_fire_ondropdown(this);
            if (this.ondropdown && this.ondropdown.defaultprevented == true)
                return;

            if (this._popuptype == "none" || this._type == "system")
                return;

            if (ret)
            {
                let enddatefield = this._p_enddatefield;
                enddatefield._createPopupDatePickerControl();
                var popupcontrol = enddatefield._popupcontrol;
                var popupsize = enddatefield._getPopupSizeArr();

                var pos = this._getElementPosition();
                var cal_winpos_left = pos.x;
                var cal_winpos_top = pos.y;

                var parentpos = popupcontrol._getPopupParentPos();

                var cal_height = parentpos.height;

                var popup_left = 0;
                var popup_top = cal_height;
                var popup_width = popupsize.width;
                var popup_height = popupsize.height;

                var popup_winpos_right = cal_winpos_left + popup_width;
                var popup_winpos_bottom = cal_winpos_top + cal_height + popup_height;

                var win_width = _window.clientWidth;
                var win_height = _window.clientHeight;
                var width_gap = popup_winpos_right - win_width;

                /* popup에 초점을 읽게하기 위함 접근성 작업 후 Accessibility_Comp.js에 이관 */
                //if (this._input_element && nexacro._enableaccessibility)
                //{
                //    var descendant_elem = this._input_element;
                //    control_elem.setElementAccessibilityActiveDescendant(popupcontrol, descendant_elem);
                //}

                if (popup_winpos_right > win_width && cal_winpos_left > width_gap)
                {
                    popup_left = popup_left - width_gap;
                }

                if (cal_winpos_left < 0)
                {
                    popup_left = -cal_winpos_left;
                }

                if (cal_winpos_top > popup_height && popup_winpos_bottom > win_height)
                {
                    popup_top = -popup_height;
                }

                if (popup_winpos_bottom > win_height)
                {
                    var t_temp = win_height - popup_height;
                    if (t_temp < 0)
                        popup_top = -cal_winpos_top;
                    else if (popup_height > cal_winpos_top)
                        popup_top = t_temp - cal_winpos_top;
                }

                // 팝업도 동일 비율로 확대/축소

                if (this._popuptype == "center" || this._popuptype == "mobile")
                {
                    var frame = _window.frame;
                    var frame_pos = nexacro._getElementPositionInFrame(frame.getElement());
                    var width = frame.width;
                    var height = frame.height;
                   
                    var l = ((width / 2) - (popup_width / 2));
                    var t = ((height / 2) - (popup_height / 2));

                    t = t < 0 ? 0 : t;

                    popupcontrol._popup((l + frame_pos.x), (t + frame_pos.y), popup_width, popup_height);
                }
                else
                {
                    //if (popup_top > 0)
                    //    popup_top -= this._getHelperLineHeight();

                    popupcontrol._popupBy(this, popup_left + parentpos.xgap, popup_top + parentpos.ygap, popup_width, popup_height);
                }
                if (_window && this._track_capture)
                {
                    _window._setCaptureLock(this, true, false);
                }
            }
        }
    };

    _pDateRangeCalendar._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        var _want_arrows = this._want_arrows;
        var _want_tab = this._want_tabs;
        if ((keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN))
        {

        }
        if (keycode == nexacro.Event.KEY_TAB)
        {
            if (shiftKey == true)
            {
                const _lastfocusedcontrol = this._lastfocusedcontrol;
                if(_lastfocusedcontrol == this._p_enddatefield)
                {
                    _want_tab = true;
                }
            }
            else
            {
                const _lastfocusedcontrol = this._lastfocusedcontrol;
                if (_lastfocusedcontrol == this._p_startdatefield)
                {
                    _want_tab = true;
                }
            }
        }

        return { want_tab: _want_tab, want_return: false, want_escape: false, want_chars: false, want_arrows: _want_arrows };
    };
    
    _pDateRangeCalendar._isPopupVisible = function ()
    {
        let ret = false;
        var comp = this._p_enddatefield;
        if (comp)
            ret = comp._isPopupVisible();
        
        return ret;
    };

    _pDateRangeCalendar.on_fire_user_onkeydown = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key)
    {
        var ret = false;
        if (!this.onkeydown || (this.onkeydown && !this.onkeydown.defaultprevented))
        {
            if (key_code == nexacro.Event.KEY_ENTER || key_code == nexacro.Event.KEY_TAB || key_code == nexacro.Event.KEY_RIGHT || key_code == nexacro.Event.KEY_LEFT || key_code == nexacro.Event.KEY_BACKSPACE)
            {
                if (this._on_user_onkeydown(key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key))
                {
                    if (this._getWindow()._keydown_element)
                        this._getWindow()._keydown_element._event_stop = true;

                    return true;
                }
            }
            else if (nexacro._enableaccessibility && nexacro._accessibilitycontentsearchkey)
            {
                if (key_code == nexacro.Event.KEY_DOWN || key_code == nexacro.Event.KEY_UP)
                {
                    if (this._on_user_onkeydown(key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key))
                    {
                        return true;
                    }
                }
            }
        }
        ret = nexacro.Component.prototype.on_fire_user_onkeydown.call(this, key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key);
        
        if (key_code >= nexacro.Event.KEY_LEFT && key_code <= nexacro.Event.KEY_DOWN)
		{
			if (this._isPopupVisible())
			{
                var comp = this._lastfocusedcontrol;
                if (comp)
                    comp._input_element.stopSysEvent();
			}
		}
        return ret;
    };

    _pDateRangeCalendar._on_user_onkeydown = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp, meta_key)
    {
        const _lastfocusedcontrol = this._lastfocusedcontrol;
        if (key_code == nexacro.Event.KEY_TAB)
        {
            var comp = null;
             if (shift_key && _lastfocusedcontrol == this._p_enddatefield)
            {
                comp = this._p_startdatefield;
                this._want_tab = false;
                this._setLastFocusedControl(comp);
            }
            else if (!shift_key && _lastfocusedcontrol == this._p_startdatefield)
            {
                comp = this._p_enddatefield;
                this._want_tab = false;
                this._setLastFocusedControl(comp);
            }
            //else
            this._want_tabs = false;    
            if (comp)
                comp._setFocus(true, 0, true);
             return true;
        }
        /*
        else if (key_code == nexacro.Event.KEY_ENTER)
        {
            var curvalue = this._p_startdate + "-" + this._p_enddate;
            var curtext = this._p_startdatefield._default_text + "" + this._p_delimitertext + this._p_enddatefield._default_text;//this._makeBufferTextFromValue(curvalue);
            if (this._p_value != curvalue)
            {
                this._on_value_change(this._p_text, this._p_value, curtext, curvalue);
            }
        }
            */

    };
    /*
    //on_keydown_default_process
    _pDateRangeCalendar.on_keydown_default_process = function (keycode, altkey, ctrlkey, shiftkey, refercomp, metakey)
	{
        if (keycode == nexacro.Event.KEY_ENTER)
        {
            var curvalue = this._p_startdate + "-" + this._p_enddate;
            var curtext = this._p_startdatefield._default_text + "" + this._p_delimitertext + this._p_enddatefield._default_text;//this._makeBufferTextFromValue(curvalue);
            if (this._p_value != curvalue)
            {
                this._on_value_change(this._p_text, this._p_value, curtext, curvalue);
            }
        }
    };
    */
    _pDateRangeCalendar._on_edit_onkeydown = function (obj, e)
	{
		var keycode = e.keycode;
		var calendaredit = this._p_calendaredit;
		if (keycode >= nexacro.Event.KEY_LEFT && keycode <= nexacro.Event.KEY_DOWN)
		{
			if (this._isPopupVisible())
			{
				calendaredit._input_element.stopSysEvent();
			}
			else
			{
				if (keycode == nexacro.Event.KEY_UP || keycode == nexacro.Event.KEY_DOWN)
				{
					calendaredit._input_element.stopSysEvent();
				}
			}
		}
		return false;
	};


    _pDateRangeCalendar._apply_setfocus = function (evt_name)
    {
        var startdatefield = this._p_startdatefield;
        var enddatefield = this._p_enddatefield;
        if (startdatefield && enddatefield)
        {
            if (evt_name == "tabkey" || evt_name === undefined)
            {
                startdatefield._changeStatus("focused", true);
                this._setLastFocusedControl(startdatefield);
                startdatefield._on_focus(true, evt_name);
            }
            else if (evt_name == "shifttabkey")
            {
                enddatefield._changeStatus("focused", true);
                enddatefield._on_focus(true, evt_name);
                this._setLastFocusedControl(enddatefield);


            }    
        }
    };

     _pDateRangeCalendar._on_dataset_onvaluechanged = function (obj, e)
    {
        if (this._is_created)
        {
            this.on_fire_oninnerdatachanged(obj, e.oldvalue, e.newvalue, e.columnid, e.col, e.row);
        }
    };

    _pDateRangeCalendar.on_fire_oninnerdatachanged = function (obj, oldvalue, newvalue, columnid, col, row)
    {
        if (this.oninnerdatachanged && this.oninnerdatachanged._has_handlers)
        {
            var evt = new nexacro.InnerdataChangedEventInfo(obj, "oninnerdatachanged", oldvalue, newvalue, columnid, col, row);
            return this.oninnerdatachanged._fireEvent(this, evt);
        }

        return true;
    };

    //_setLastFocus(this);
    _pDateRangeCalendar._setLastFocusedControl = function (comp)
    {
        this._lastfocusedcontrol = comp;
    };

    _pDateRangeCalendar._getPopupControl = function ()
    {
        const enddatefield = this._p_enddatefield;
        if (enddatefield)
            return enddatefield._popupcontrol;
        return null;
    };

    _pDateRangeCalendar._getElementPosition = function ()
    {
        return nexacro._getElementPositionInFrame(this.getElement());
    };

    _pDateRangeCalendar.on_fire_oninvalid = function ()
    {
        if (this.oninvalid && this.oninvalid._has_handlers)
        {
            var evt = new nexacro.EventInfo(this, "oninvalid");
            this.oninvalid._fireEvent(this, evt);
        }
    };

    _pDateRangeCalendar._on_apply_value = function ()
    {
        var curvalue = (this._p_startdate ? this._p_startdate : null) + "-" + (this._p_enddate ? this._p_enddate : null);
        var curtext = this._p_startdatefield._default_text + "" + this._p_delimitertext + this._p_enddatefield._default_text;//this._makeBufferTextFromValue(curvalue);
        //trace("curvalue", curvalue, "this._p_value", this._p_value)
        this._on_value_change(this._p_text, this._p_value, curtext, curvalue);
    };
   
    _pDateRangeCalendar._setStartdate = function (v)
    {
        if (this._p_startdate != v)// && (!this._p_enddate || v <= this._p_enddate))
        {
             this._p_startdate = v;
             this._on_apply_value();
        }       
    };

    _pDateRangeCalendar._setEnddate = function (v)
    {
        if (this._p_enddate != v)// && this._p_startdate <= v)
        {
            this._p_enddate = v;
            this._on_apply_value();
        }
    };


    //==============================================================================
    // nexacro._DateFieldControl (flexible)
    //==============================================================================

    nexacro._DateFieldControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay)
    {
        nexacro.DateField.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, onlydisplay);
    };

    var _pDateFieldControl = nexacro._createPrototype(nexacro.DateField, nexacro._DateFieldControl);
    nexacro._DateFieldControl.prototype = _pDateFieldControl;
    _pDateFieldControl._type_name = "DateFieldControl";

    /* default properties */
    _pDateFieldControl._p_displayfootertype = "all";
    /* internal variable */
    _pDateFieldControl._is_subcontrol = true;
    _pDateFieldControl._is_subfocused = false;
    _pDateFieldControl._is_repeat = false;

    /* status */
    /* event list */
    /* accessibility */

    //===============================================================
    // nexacro._DateFieldControl : Create & Update
    //===============================================================

    //===============================================================
    // nexacro._DateFieldControl : Override
    //===============================================================
    _pDateFieldControl._getFromComponent = function (comp)
    {
        var parent = comp._p_parent;
        if (parent && parent._isPopupVisible())
        {
            return parent;
        }
        else
        {
            return nexacro.Component.prototype._getFromComponent.call(this, comp);
        }
    };

    _pDateFieldControl._setDisplayMonthCount = function (n)
    {
        this._displaymonthcount = n;
        if (this._p_datetimepicker)
        {
            this._p_datetimepicker.set_displaymonthcount(n);
        }
    };

    _pDateFieldControl._setType = function (type)
    {
        if (this._p_datetimepicker)
        {
            this._p_datetimepicker.set_type(type);
        }
    };

    _pDateFieldControl._showPopup = function ()
    {
        /* 접근성 작업 후 Accessibility_Comp.js에 이관 */
        //if (nexacro._enableaccessibility)
        //{
        //    this._want_arrows = true;
        //}
        let daterangecalendar = this.parent;
        if (daterangecalendar)
        {
            daterangecalendar._showPopup();
        }
    };


    _pDateFieldControl._createDatePicker = function ()
    {
        var datepicker = this._p_datetimepicker;

        if (datepicker)
            datepicker.destroy();

        datepicker = this._p_datetimepicker = new nexacro._DateRangePickerControl("daterangepicker", 0, 0, 0, 0, null, null, null, null, null, null, this);
        datepicker._excluded_flex = true;
        datepicker._setControl();
        datepicker._setDisplayfootertype(this._p_displayfootertype);
        datepicker._is_popup_child = true;
        datepicker.set_displaymonthcount(this._displaymonthcount ? this._displaymonthcount : 2);
        datepicker.set_type("range");
        datepicker._setPopupContains(true);
        //datepicker._is_focus_accept = false;
        datepicker._headline_autoposition = true;
        datepicker._usertimeformat = this._format;
        datepicker._useclosebutton = true;
        datepicker.createComponent(true);
    };

    _pDateFieldControl._getPopupSizeArr = function ()
    {
        var datepicker = this._p_datetimepicker;
        var size = this._p_popupsize;
        let displaymonthcount = datepicker._p_displaymonthcount;
        if (!size)
            size = 220 * displaymonthcount + " 250";

        size = size.split(/\s+/);

        var width = +size[0];
        var height = size[1] ? +size[1] : width;

        if (!this._p_popupsize)
        {
            if (datepicker.closebutton)
                height += datepicker.closebutton._adjust_height;
            if (datepicker._datetabbutton)
                height += datepicker._datetabbutton._adjust_height;
            if (this._popuptype == "mobile")  // popupsuze 고정이 아닌 경우만
            {
                var orient = nexacro._getMobileOrientation();
                if (orient == 2 || orient == 3) // landscape
                {
                    width += 70;
                }
                else
                {
                    width += 70;
                    height += 30;
                }
            }
        }

        return { width: width, height: height };
    };

    _pDateFieldControl._on_datepicker_oncloseup = function (obj, e)
    {          
        this.parent._on_datepicker_oncloseup(obj, e);
        if (this._isPopupVisible())
            this._closePopup(this._p_autoskip);

        if (!this._onlydisplay)
        {
            this._input_element.setElementFocus();
        }
    };
   
    _pDateFieldControl._setEventHandlerToDatePicker = function ()
    {
        var datepicker = this._p_datetimepicker;
        if (datepicker)
        {
            datepicker._setEventHandler("ondayclick", this._on_datepicker_ondayclick, this);
            datepicker._setEventHandler("oncloseup", this._on_datepicker_oncloseup, this);
            //datepicker._setEventHandler("onchanged", this._on_datepicker_onchanged, this); [DateRangePicker 키액션 기능 추가 후 DateField와 연동]
        }
    };

    _pDateFieldControl._applyDatePickerProps = function ()
    {
        var datepicker = this._p_datetimepicker;
        if (datepicker)
        {
            datepicker._setEnable(this._p_enable);
            datepicker.set_readonly(this._p_readonly);
            datepicker.set_startdate(this.parent._p_startdate);
            datepicker.set_enddate(this.parent._p_enddate);
            datepicker.set_innerdataset(this._p_innerdataset);
            datepicker.set_backgroundcolumn(this._p_backgroundcolumn);
            datepicker.set_bordercolumn(this._p_bordercolumn);
            datepicker.set_datecolumn(this._p_datecolumn);
            datepicker.set_textcolorcolumn(this._p_textcolorcolumn);
            datepicker.set_hintingcolumn(this._p_hintingcolumn);
            datepicker.set_readonlycolumn(this._p_readonlycolumn);
            datepicker.set_locale(this._p_locale);
            datepicker.set_headlinedateformat(this._p_headlinedateformat);
            datepicker.set_headlinetimeformat(this._p_headlinetimeformat);
            datepicker.set_headlineposition(this._p_headlineposition);
            datepicker.set_headlinesize(this._p_headlinesize);
            datepicker.set_okbuttontext(this._p_okbuttontext);
            datepicker.set_cancelbuttontext(this._p_cancelbuttontext);
            datepicker._setDisplayfootertype(this._p_displayfootertype);
           
            if (this._startdate)
                datepicker.set_startdate(this._startdate);
            if (this._popupdirection)
                datepicker.set_direction(this._popupdirection);
            if (this._mindate)
                datepicker.set_mindate(this._mindate);
            if (this._maxdate)
                datepicker.set_maxdate(this._maxdate);
            //datepicker.set_enddate(this._p_value);
            datepicker.on_apply_value();
        }
    };
     _pDateFieldControl._setStartdate = function (startdate)
    {
        this._startdate = startdate;
    };
     _pDateFieldControl._on_drop_onlbuttondown = function (obj, e)
    {
        if (e.button != "lbutton") return;
        if (this._p_readonly || !this._p_enable)
        {
            return false;
        }

        if (this._isPopupVisible())
        {
            this._closePopup(false, true);

            if (!this._p_autoselect)
            {
                this._setInitCaret();
            }
        }
        else
        {
            this._showPopup();
            //this._setDatePickerValue(this._getConfirmValue()); 
            if (!this._p_autoselect)
            {
                this._setInitCaret();
            }
        }

        return false;
    };
    /*
    _pDateFieldControl._setFocus = function (bResetScroll, calledby, block_inner_focus)    
    {
        nexacro.Component.prototype._setFocus(bResetScroll, calledby, block_inner_focus);
        this.parent._setLastFocusedControl(this);    
    };this._isPopupVisible()
    */
    _pDateFieldControl._isPopupVisible = function ()
    {
        var ret = false;
        if (this.id == "enddatefield")
        {             
            if (this._popupcontrol)
                ret = this._popupcontrol._p_visible;
            
            return ret;
        }
        const drc = this.parent;
        if (drc)
        {
            return drc._isPopupVisible();
        }
        return false;
    };

    _pDateFieldControl._setInitCaret = function ()
    {       
        if (this._isPopupVisible())
        {
            if (!this._onlydisplay)
            {
                this._input_element.setElementBlur();
            }
            var drc = this.parent;
            if (drc)
            {
                const pc = drc._getPopupControl();
                if (pc)
                {
                    pc._attached_comp._setFocus(false);
                }
            }
            
        }
    };

    _pDateFieldControl._on_input_autoskip = function ()
    {        
        if (this._p_autoskip && this._p_value && this._getCurrentSelectRange() == this._ranges_order[this._ranges_order.length - 1])
        {
            if (this.id =="startdatefield")
                this._setFocusToEnddatefield();
            else
                this._setFocusToNextComponent();
        }
    };

    _pDateFieldControl._setFocusToEnddatefield = function ()
    {    
        const cal = this._p_parent;
        if (cal)
        {
            const enddatefield = cal._p_enddatefield;

            enddatefield.setFocus();
            if (enddatefield)
                enddatefield._setDefaultCaret();
        }

    };
    //_setPopupdirection
    _pDateFieldControl._setPopupdirection = function (v)
    {    
        this._popupdirection = v;
    };

    //set_mindate
    _pDateFieldControl._setMinDate = function (v)
    {    
        this._mindate = v;
    };

    //set_maxdate
    _pDateFieldControl._setMaxDate = function (v)
    {    
        this._maxdate = v;
    };

    _pDateFieldControl._on_datepicker_ondayclick = function (obj, e)
    {
        this.on_fire_ondayclick(e.date);
        this.parent.on_fire_ondayclick(e.date);
    };

    _pDateFieldControl.on_killfocus_basic_action = function (new_focus, new_refer_focus)
    {
        nexacro.DateField.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);
        if (this.id == "startdatefield" && this._p_parent)
        {
            this._p_parent._setStartdate(this._p_value);
        } 
        else if (this.id == "enddatefield" && this._p_parent)
        {
            this._p_parent._setEnddate(this._p_value);
        }     
    };
    
    /*
    //on_keydown_default_process
    _pDateFieldControl.on_keydown_default_process = function (keycode, altkey, ctrlkey, shiftkey, refercomp, metakey)
    {
        nexacro.DateField.prototype.on_keydown_default_process.call(this, keycode, altkey, ctrlkey, shiftkey, refercomp, metakey);
        if (keycode == nexacro.Event.KEY_ENTER)
        {
            if (this.id == "startdatefield" && this._p_parent)
            {
                this._p_parent.set_startdate(this._p_value);
            }
            else if (this.id == "enddatefield" && this._p_parent)
            {
                this._p_parent.set_enddate(this._p_value);
            }
            /*
            const p = this._p_parent;
            if (p)
            {
                p.on_keydown_default_process(keycode, altkey, ctrlkey, shiftkey, refercomp, metakey);
            }
            
        }
    };
    */

    _pDateFieldControl.on_fire_canchange = function (obj, pretext, prevalue, posttext, postvalue)
    {
        return this._p_parent.on_fire_canchange(obj, pretext, prevalue, posttext, postvalue);
    };

    _pDateFieldControl.on_fire_onchanged = function (obj, pretext, prevalue, posttext, postvalue)
    {
        return this._p_parent.on_fire_onchanged(obj, pretext, prevalue, posttext, postvalue);
    };

    _pDateFieldControl.on_fire_oninput = function ()
    {
        if (!this._skip_oninput && this._oninput_cnt == 1)
        {
            this._invalidStatus(false);
            this._validStatus(false);

            var check = this._checkInputValidate(this._p_value);
            var apply_value = false;

            if (check == false)
                this.on_invalid(apply_value);
            else if (check == true)
                this.on_valid(apply_value);
            return this._p_parent.on_fire_oninput();
        }
        return true;        
    };

    _pDateFieldControl.on_apply_value = function (pretext, prevalue, posttext, postvalue)
    {
        nexacro.DateField.prototype.on_apply_value.call(this, pretext, prevalue, posttext, postvalue);
        if (this.id == "startdatefield" && this._p_parent)
        {
            this._p_parent._setStartdate(this._p_value);
        }
        else if (this.id == "enddatefield" && this._p_parent)
        {
            this._p_parent._setEnddate(this._p_value);
        }
    };


    _pDateFieldControl.on_invalid = function (apply_value)
    {
        var errkind = "value_invalid";

        if (apply_value)
            this._p_parent.on_fire_oninvalid();

        this._custom_err[errkind] = nexacro._getErrorMessge(errkind);
        this._invalidStatus(true, !apply_value);
        this.on_invalid_basic_action();
    };

    _pDateFieldControl.on_lbuttondown_default_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key)
    {
        nexacro.DateField.prototype.on_lbuttondown_default_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp, meta_key);

        const calendar = this.parent;
        if (calendar)
            calendar._setLastFocusedControl(this);
    };

    _pDateFieldControl._confirmValue = function ()
    {
        if (this._onlydisplay)
            return;

        var input_elem = this._getInputElement();
        var pre_value = this._default_value;
        var pre_text = this._default_text;
        var input_value = input_elem._getInputValue();
        var cur_value, cur_text;
       
        if (this._p_value != null) // 입력을 한번도 안한 경우
        {
            if (input_value == this._getEmptyText() || input_value == "")
                cur_value = "";
            else
                cur_value = this._makeValueFromBuffer();

            cur_text = this._makeBufferTextFromValue(cur_value);

            if (!(/^[0-9]+$/.test(cur_value)) || this._isValidValue(cur_value) == false)
            {
                if (this._p_invalidvalueaction == "rollback")
                {
                    this._p_value = pre_value;
                    this._p_text = pre_text;
                    this._invalidStatus(false);
                    this.on_valid(true);
                }
                else if (this._p_invalidvalueaction == "minimum")
                {                
                    var cur_value = this._p_value = this._makeValueFromBuffer(true);
                    if (this.id == "enddatefield")
                    {
                        var startdatefield = this.parent._p_startdatefield;      
                        if (startdatefield)
                            this._p_value = startdatefield._p_value && cur_value < startdatefield._p_value ? startdatefield._p_value : cur_value;
                    }
                    else
                    {
                        var enddatefield = this.parent._p_enddatefield;
                        if (enddatefield)
                            this._p_value = enddatefield._p_value && cur_value > enddatefield._p_value ? enddatefield._p_value : cur_value;
                    }
                    this._p_text = this._makeBufferTextFromValue(this._p_value);
                }
                else // "empty"
                {
                    this._invalid_value = cur_value;
                    this._p_value = "";
                    this._p_text = cur_text;
                }
            }
        }

        if (this._on_value_change(pre_text, pre_value, this._p_text, this._p_value))
        {
            this.on_fire_onchanged(this, pre_text, pre_value, this._p_text, this._p_value);
        }
        else
        {
            this._p_value = pre_value;
            this._p_text = pre_text;
        }
    };

    _pDateFieldControl._isValidValue = function (cur_value)
    {
        return this.id =="enddatefield" && this.parent._p_startdate && cur_value < this.parent._p_startdate || this.id =="startdatefield" && this.parent._p_enddate && cur_value > this.parent._p_enddate ? false : true;
    };

    _pDateFieldControl._on_drop_mobile_onclick = function (/*obj, e*/)
    {
        if (!this._p_readonly && this._p_enable)
        {
            if (this._isPopupVisible())
            {
                this._closePopup(false, true);
            }
            else
            {
                this._showPopup();
            //  this._setDatePickerValue(this._getConfirmValue());
            }
        }
        return false;
    };

    //===============================================================
    // nexacro._DateFieldControl : Properties
    //===============================================================


    //===============================================================
    // nexacro._DateFieldControl : Events
    //===============================================================
    _pDateFieldControl.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key)
    {        
        this._on_edit_oneditclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);

        return this._p_parent.on_fire_onclick(button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp, meta_key);
    };

    _pDateFieldControl = null;


    nexacro._DelimiterControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Static.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pDelimiterControl = nexacro._createPrototype(nexacro.Static, nexacro._DelimiterControl);
    nexacro._DelimiterControl.prototype = _pDelimiterControl;
    _pDelimiterControl._type_name = "StaticControl";

    /* internal variable */
    _pDelimiterControl._is_subcontrol = true;
    _pDelimiterControl._is_focus_accept = false;

    _pDelimiterControl = null;


    nexacro._DateRangePickerControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.DateRangePicker.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pDateRangePickerControl = nexacro._createPrototype(nexacro.DateRangePicker, nexacro._DateRangePickerControl);
    nexacro._DateRangePickerControl.prototype = _pDateRangePickerControl;
    _pDateRangePickerControl._type_name = "DateRangePicker";

    _pDateRangePickerControl._isUseOKButton = function ()
    {
        return true;
    };

    _pDateRangePickerControl = null;

}

