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


if (!nexacro._ExprInfo)
{
    //==============================================================================
    // nexacro._ExprInfo for nexacro.ComplexComponent
    //==============================================================================

    // [BindInfo Information 처리]
    // InnerBind/FullBind용 개별 BindInfo 정보 처리

    nexacro._ExprInfo = function ()
    {
    };

    var _pExprInfo = nexacro._createPrototype(Object, nexacro._ExprInfo);
    nexacro._ExprInfo.prototype = _pExprInfo;
    _pExprInfo._type_name = "_ExprInfo";

    _pExprInfo.baseid = "";               // expr info base id,
    _pExprInfo.basesq = -1;               // expr info base index (multi items index)
    _pExprInfo.target = null;             // expr target child control id,                null/empty/undefined = self target
    _pExprInfo.propid = "";               // expr target property id                      null/empty/undefined = no action
    _pExprInfo.setter = "";               // expr target setter function id,              null/empty/undefined = no action
    _pExprInfo.values = null;             // expr result value, variant or array,         null/empty/undefined = value;

    _pExprInfo.exprcx = "";               // expr syntax string
    _pExprInfo.exprix = -1;               // expr cache index


    // public methods
    /*
    _pBindInfo.toString = function ()
    {
        return "[object " + this._type_name + "]";
    };
    */

    _pExprInfo._isSetExprCtx = function ()
    {
        return this.exprcx != "";
    };
    _pExprInfo._isSetExprIdx = function ()
    {
        return this.exprix >= 0;
    };

    _pExprInfo._setExprFuncCtx = function (funcctx)
    {
        this.exprcx = funcctx;
    };
    _pExprInfo._setExprFuncIdx = function (funcidx)
    {
        this.exprix = funcidx;
    };
    _pExprInfo._setExprInfo = function (exprinfo)
    {
        this.exprif = exprinfo;
    };

    _pExprInfo._clear = function ()
    {
        /*
        this.baseid = "";
        this.basesq = -1;
        this.setter = "";
        */

        this.target = null;
        this.values = null;

        this.exprif = null;
        this.exprcx = "";
        this.exprix = -1;
    };

    _pExprInfo = null;
}


if (!nexacro._ExprData)
{
    //==============================================================================
    // nexacro._ExprData for nexacro.ComplexComponent
    //==============================================================================

    // [BindData Information 처리]
    // InnerBind/FullBind용 Dataset 정보 처리
    // ValueBind는 SimpleComponent 상속    

    nexacro._ExprData = function (valueexpr, dataexpr, fullexpr)
    {
        this._setExprType(valueexpr, dataexpr, fullexpr);
    };

    var _pExprData = nexacro._createPrototype(Object, nexacro._ExprData);
    nexacro._ExprData.prototype = _pExprData;
    _pExprData._type_name = "_ExprData";

    _pExprData._exprtarget = null;        // Expr Target Component

    _pExprData._exprinfo = [];            // Expr Info Array
    _pExprData._exprfunc = [];            // Expr Func Array
    /*
    _pExprData._useexprcache = false;     // Expr Cache
    _pExprData._expridxcache = {};        // Expr Func Index Cache
    _pExprData._exprretcache = [];        // Expr Func Return Cache
    _pExprData._exprexecache = [];        // Expr Func Execute Cache
    */

    // public methods
    /*
    _pExprData.toString = function ()
    {
        return "[object " + this._type_name + "]";
    };
    */

    _pExprData._setExprType = function (valueexpr, dataexpr, fullexpr, xmlexpr, jsonexpr)
    {
        this._exprtype = (valueexpr ? 0x01 : 0) + (dataexpr ? 0x02 : 0) + (xmlexpr ? 0x04 : 0) + (jsonexpr ? 0x08 : 0) + (fullexpr ? 0x10 : 0);
    };

    _pExprData._isValueExpr = function () { return (this._exprtype & 0x01) != 0; };
    _pExprData._isInnerExpr = function () { return (this._exprtype & 0x02) != 0; };
    _pExprData._isFullExpr  = function () { return (this._exprtype & 0x10) != 0; };
    _pExprData._isDataExpr  = function () { return (this._exprtype & 0x1E) != 0; };
    _pExprData._isXMLExpr   = function () { return (this._exprtype & 0x04) != 0; };
    _pExprData._isJSONExpr  = function () { return (this._exprtype & 0x08) != 0; };

    _pExprData._initExprParser = function ()
    {
    };
    _pExprData._initExprOwner = function (owner)
    {
        this._exprowner = owner;
    };
    _pExprData._initExprTarget = function (target)
    {
        this._exprtarget = target;
    };

    _pExprData._getExprInfos = function ()
    {
        return this._exprinfo;
    };
    _pExprData._initExprInfo = function (exprinfo)
    {
        if (exprinfo && this._exprtarget)
        {
            var exprcx = exprinfo.exprcx;
            var exprfn = nexacro._createExprFunc(exprcx, this._exprtarget);

            if (exprfn)
            {
                exprinfo._setExprFuncIdx(this.setExprFunc(exprcx, exprfn));
            }
        }
    };
    _pExprData._initExprInfoArray = function (exprinfos)
    {
        if (exprinfos)
        {
            for (var i = 0, l = exprinfos.length; i < l; i++)
            {
                this._initExprInfo(exprinfos[i]);
            }
        }
    };
    _pExprData._pushExprInfoArray = function (exprinfos)
    {
        if (exprinfos)
        {
            for (var i = 0, l = exprinfos.length; i < l; i++)
            {
                this._exprinfo.push(exprinfos[i]);
                exprinfos[i] = null;
            }
        }
    };
    _pExprData._pushInfoArray = function (infos, array)
    {
        if (infos && array)
        {
            for (var i = 0, l = infos.length; i < l; i++)
            {
                array.push(infos[i]);
                infos[i] = null;
            }
        }
    };
    _pExprData._setExprInfos = function (exprinfos)
    {
        this._clearExprInfos();
        this._clearExprFuncs();

        this._addExprInfo(exprinfos);
    };
    _pExprData._addExprInfo = function (exprinfo)
    {
        if (exprinfo.length)
        {
            this._initExprInfoArray(exprinfo);
            this._pushExprInfoArray(exprinfo);
        }
        else
        {
            this._initExprInfo(exprinfo);
            this._exprinfo.push(exprinfo);
        }
    };
    _pExprData.setExprFunc = function (exprctx, exprfunc)
    {
        var expridx = this._exprfunc.length;

        this._exprfunc.push(exprfunc);

        // TODO : exprfunc cache
        /*
        if (this._useexprcache)
        {
            this._expridxcache[exprctx] = expridx;
            this._exprretcache[expridx] = null;
            this._exprrescache[expridx] = false;
        }
        */

        return expridx;
    };
    _pExprData.getExprFuncByIdx = function (index)
    {
        return index >= 0 && index < this._exprfunc.length ? this._exprfunc[index] : null;
    };
    _pExprData.getExprFuncByCtx = function (ctx)
    {
        // TODO : exprfunc cache
        /*
        if (this._useexprcache)
        {
            return this.getExprFuncByIdx(this.getExprCacheIdx(ctx));
        }
        */
    };

    // TODO : exprfunc cache
    /*
    _pExprData.setExprCacheIdx = function (exprctx, expridx)
    {
        this._expridxcache[exprctx] = expridx;
    };
    _pExprData.setExprCacheRet = function (expridx, exprret)
    {
        this._exprretcache[expridx] = exprret;
    };
    _pExprData.getExprCacheIdx = function (exprctx)
    {
        return this._expridxcache[exprctx];
    };
    _pExprData.getExprCacheRet = function (expridx)
    {
        return expridx < this._exprretcache.length;
    };
    _pExprData.getExprCacheRet = function (expridx)
    {
        if (expridx < this._exprretcache.length)
            return this._exprretcache[expridx];
        else
            return 
    };
    */

    _pExprData._getExprData = function (index)
    {
        var infos = this._exprinfo;

        if (infos)
        {
            for (var i = 0, l = infos.length; i < l; i++)
            {
                var info = infos[i];

                if (info)
                {
                    info.values = this._fetchExprData(info.exprix, index);
                }
            }
        }

        return this;
    };

    _pExprData._fetchExprData = function (exprix, index)
    {
        if (exprix >= 0)
        {
            // TODO : exprfunc cache
            /*
            if (this._useexprcache)
            {
                var exprex = this._exprexecache[exprix];
 
                if (exprex)
                {
                    return this._exprretcache[exprix];
                }
 
                var exprfn = this._exprfunc[exprix];
 
                if (exprfn)
                {
                    var ret = exprfn.call(this._exprowner, this._exprtarget);
 
                    this._exprretcache[exprix] = ret;
                    this._exprexecache[exprix] = true;
 
                    return ret;
                }
            }
            else
            */
            {
                var exprfn = this._exprfunc[exprix];

                if (exprfn)
                {
                    return exprfn.call(this._exprowner, this._exprtarget);
                }
            }
        }

        return undefined;
    };

    _pExprData._clearExprTarget = function ()
    {
        this._exprtarget = null;
    };
    _pExprData._clearExprParser = function ()
    {
    };
    _pExprData._clearExprInfos = function ()
    {
        for (var i = 0, l = this._exprinfo.length; i < l; i++)
        {
            if (this._exprinfo[i])
            {
                this._exprinfo[i]._clear();
                delete this._exprinfo[i];
                this._exprinfo[i] = null;
            }
        }

        this._exprinfo = [];
    };
    _pExprData._clearExprFuncs = function ()
    {
        for (var i = 0, l = this._exprfunc.length; i < l; i++)
        {
            if (this._exprfunc[i])
            {
                delete this._exprfunc[i];
                this._exprfunc[i] = null;
            }
        }

        this._exprfunc = [];
    };

    /*
    _pExprData._resetExprRetCache = function ()
    {
        for (var i = 0, l = this._exprretcache.length; i < l; i++)
        {
            this._exprretcache[i] = null;
        }
    };
    _pExprData._resetExprExeCache = function ()
    {
        for (var i = 0, l = this._exprexecache.length; i < l; i++)
        {
            this._exprexecache[i] = false;
        }
    };
    _pExprData._clearExprIdxCache = function ()
    {
        this._exprcache = {};
    };
    _pExprData._clearExprRetCache = function ()
    {
        this._resetExprRetCache();
        this._exprretcache = [];
    };
    _pExprData._clearExprExeCache = function ()
    {
    //  this._resetExprExeCache();
        this._exprexecache = [];
    };
    _pExprData._clearExprCache = function ()
    {
        this._clearExprRetCache();
        this._clearExprExeCache();
        this._clearExprIdxCache();
    };
    */

    _pExprData._clear = function ()
    {
    //  this._clearExprCache();
        this._clearExprInfos();
        this._clearExprFuncs();
        this._clearExprParser();
        this._clearExprTarget();
    };

    _pExprData = null;
}

if (!nexacro._SelectInfo)
{
    //==============================================================================
    // nexacro._SelectInfo for nexacro.SimpleComponent
    //==============================================================================

    // [SelectInfo Information 처리]
    // InnerBind/FullBind용 개별 SelectInfo 정보 처리
    // SelectInfo는 ExprInfo를 상속하여 처리됨

    // nexacro._SelectConst
    nexacro._SelectConst =
    {
        SELECTTYPE_NONE : 0x0000,           // None Select                                               positcount : 0, rangecount : 0, multicount :  0, unselvalue : undefined
        SELECTTYPE_VALUE: 0x0001,           // Value Display Component Select (Text+NoEdit) Default      positcount : 1, rangecount : 2, multicount :  1, unselvalue : [-1,-1]
        SELECTTYPE_TEXT : 0x0002,           // Text Editable Component Select (Text+Edit) Default        positcount : 1, rangecount : 2, multicount :  1, unselvalue : [-1,-1]
        SELECTTYPE_COMP : 0x0004,           // Simple Component Select (Comp Select)  Default            positcount : 1, rangecount : 1, multicount :  1, unselvalue : false
        SELECTTYPE_ITEM : 0x0008,           // Complex Component Select (Item Select) Default            positcount : 2, rangecount : 2, multicount : -1, unselvalue : -9
        SELECTTYPE_USER : 0x0010,           // Type Reserved
        SELECTTYPE_MASK : 0x00FF,

        SELECTMODE_NONE : 0x0000,           // Mode None
        SELECTMODE_LEVEL: 0x0100,           // Mode Level Select
        SELECTMODE_USER : 0x1000,           // Mode Reserved
        SELECTMODE_MASK : 0xFF00,
    };

    // nexacro._SelectInfo
    nexacro._SelectInfo = function (selecttype, positcount, rangecount, multicount, unselvalue)
    {
        this._initSelect(selecttype, positcount, rangecount, multicount, unselvalue);
    };

    var _pSelectInfo = nexacro._createPrototype(nexacro.Object, nexacro._SelectInfo);
    nexacro._SelectInfo.prototype = _pSelectInfo;
    _pSelectInfo._type_name = "_SelectInfo";

    /*
     _pSelectInfo._selectlist = [];          // select data list select:[scope:[posit:[pos]...]...]...]
 
     _pSelectInfo._unselvalue = null;        // unselect value
     _pSelectInfo._selecttype =  0;          // select type : comp:component self, item:child item list, text:text property, value:value proeprty
     _pSelectInfo._positcount =  0;          // select position(band/row/index/..) dimension        posit:{pos,pos,pos,..}          0: no position (noitem, use selectstatus)      1:single posit no array, singe value json              {select:rowindex},          1>:multi posit json fixed       {row:row, col:col}                             0<:multi posit object unfixed     {row:posit1}, {row:posit1,col:posit2}, {row:posit1,subrow:posit2,col:posit3....}
     _pSelectInfo._rangecount =  0;          // select range(start/end..) dimension                 range:[posit][posit][..]        0: no range    (noitem, use selectstatus)      1:single range no array, single select json            {select:rowindex},          1>:multi range array fixed      [start,final], [{row:start},{row:final}]       0<:multi range array unfixed      [single], [multi1,multi2....],   [{row:single}], [{row:multi1},{row:multi2},...]
     _pSelectInfo._multicount =  0;          // select multi(range | position) count                multi:[range,..] | [posit,..]   0: no select   (noitem, use selectstatus)      1:single select toggle, single select in select list   selectlist[0]=select,       1>:multi select array fixed     [first,second], [{row:first},{row:second}]     0<:multi select array unlimited   [first,second,third.........],   [{row:first},{row:second},{row:third},........]
     _pSelectInfo._sellistidx = -1;          // current select point for select list
     */

    // public methods
    /*
    _pSelectInfo.toString = function ()
    {
        return "[object " + this._type_name + "]";
    };
    */

    _pSelectInfo._initSelect = function (selecttype, positcount, rangecount, multicount, unselvalue)
    {
        this._selectlist = [];
        this._unselvalue = unselvalue;

        this._selecttype = selecttype ? (selecttype & nexacro._SelectConst.SELECTTYPE_MASK) : nexacro._SelectConst.SELECTTYPE_NONE;
        this._selectmode = selecttype ? (selecttype & nexacro._SelectConst.SELECTMODE_MASK) : nexacro._SelectConst.SELECTMODE_NONE;

        this._positcount = positcount ?? (this._selecttype == nexacro._SelectConst.SELECTTYPE_ITEM ?  1 : 2);
        this._rangecount = rangecount ?? (this._selecttype == nexacro._SelectConst.SELECTTYPE_COMP ?  1 : 2);
        this._multicount = multicount ?? (this._selecttype == nexacro._SelectConst.SELECTTYPE_ITEM ? -1 : 1);

        this._sellistidx = this._multicount >= 0 ? this._multicount - 1 : -1;
    };

    // TODO : Event 처리는 SelectManager를 생성하여 Manager에서 처리
    _pSelectInfo._setSelectEvent = function (target)
    {
        // set select event target
        this.eventtarget = target;
    };
    _pSelectInfo._clearSelectEvent = function ()
    {
        // clear scroll event
        this.eventtarget = null;
    };

    _pSelectInfo._getCurrentSelect = function ()
    {
        if (this._sellistidx < 0 || this._sellistidx >= this._selectlist.length)
            return this._unselvalue;
        else
            return this._selectlist[this._sellistidx];
    };
    _pSelectInfo._setCurrentSelect = function (newselect)
    {
        this._sellistidx = this._sellistidx < 0 ? 0 : this._sellistidx;
        this._selectlist.length = this._sellistidx + 1;

        var oldselect = this._selectlist[this._sellistidx];
        if (this._checkSelectChange(oldselect, newselect))
        {
            this._selectlist[this._sellistidx] = newselect;

            if (this.eventtarget)
                this.eventtarget._onChangeSelect(oldselect, newselect);
        }
    };
    _pSelectInfo._addMultiSelect = function (newselect)
    {
        if (this._multicount < 0)
        {
            this._sellistidx++;
            this._selectlist.length = this._sellistidx + 1;
            this._selectlist[this._sellistidx] = newselect;

            if (this.eventtarget)
                this.eventtarget._onChangeSelect(null, newselect);
        }
        else if (this._multicount > 0 && this._sellistidx + 1 < this._multicount)
        {
            this._sellistidx++;
            this._selectlist[this._sellistidx] = newselect;

            if (this.eventtarget)
                this.eventtarget._onChangeSelect(null, newselect);
        }
    };
    _pSelectInfo._popMultiSelect = function ()
    {
        if (this._sellistidx - 1 < 0)
            return;

        var oldselect = this._selectlist[this._sellistidx];

        if (this._multicount < 0)
        {
            this._sellistidx--;
            this._selectlist.length = this._sellistidx - 1;

            if (this.eventtarget)
                this.eventtarget._onChangeSelect(oldselect, null);
        }
        else if (this._multicount > 0)
        {
            this._selectlist[this._sellistidx] = this._unselvalue;
            this._sellistidx--;

            if (this.eventtarget)
                this.eventtarget._onChangeSelect(oldselect, null);
        }
    };

    _pSelectInfo._clearCurrentSelect = function ()
    {
        if (this._multicount)
            return this._popMultiSelect();
        else
            return this._setCurrentSelect(this._onGetDefaultSelectArgument());
    };
    // 확인 : _onClearCurrentSelect 에서 제거
    /*
    _pSelectInfo._clearCurrentSelectPos = function ()
    {
        this._selectlist = [];
        this._sellistidx = this._multicount >= 0 ? this._multicount - 1 : -1;
    };
    */
    _pSelectInfo._clearMultiSelectList = function ()
    {
        var oldselectlist = this._selectlist.slice();
        this._selectlist = [];

        if (this._multicount > 0)
        {
            this._selectlist.length = this._multicount;
            this._sellistidx = this._multicount - 1;
        }
        else if (this._multicount < 0)
        {
            this._sellistidx = -1;
        }

        for (var i = 0, n = this._multicount; i < n; i++)
            this._selectlist[i] = this._unselvalue;

        if (this.eventtarget)
            this.eventtarget._onChangeSelect(oldselectlist, this._selectlist);
    };

    // 확인 : 내부처리/외부처리여부
    _pSelectInfo._checkAboveCurrentSelect = function (idx1, idx2)
    {
        if (this.eventtarget)
            return this.eventtarget._onCheckAboveCurrentSelect(idx1, idx2);
    };
    _pSelectInfo._checkAboveMultiSelectList = function (idx1, idx2)
    {
        if (this.eventtarget)
            return this.eventtarget._onCheckAboveMultiSelectList(idx1, idx2);
    };
    _pSelectInfo._checkSelectChange = function (oldselect, newselect)
    {
        if (this.eventtarget)
            return this.eventtarget._onCheckSelectChange(oldselect, newselect);
    };

    _pSelectInfo._getMultiSelectCount = function ()
    {
        return this._multicount ? this._multicount : this._selectlist.length;
    };
    _pSelectInfo._getMultiSelectList = function ()
    {
        return this._selectlist;
    };

    _pSelectInfo._clear = function ()
    {
        this._selectlist = [];
        this._unselvalue = null;
        this._eventtarget = null;
        this._sellistidx = -1;
    };

    _pSelectInfo = null;
}

if (!nexacro.SimpleComponent)
{
    //==============================================================================
    // nexacro.UserEventInfo
    //==============================================================================
    /*
    nexacro.UserEventInfo = function (obj, id, arg)
    {
        this.id = this.eventid = id || "on";
        this.fromobject = this.fromreferenceobject = obj;
        this.arg = arg;
    };
 
    var _pUserEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.UserEventInfo);
    nexacro.UserEventInfo.prototype = _pUserEventInfo;
    _pUserEventInfo._type_name = "UserEventInfo";
 
    delete _pUserEventInfo;
    */

    //==============================================================================
    // nexacro.SimpleComponent
    //==============================================================================

    /* template comment
    // [interface:status]               : template code inteface comment
    // [interface.subinterface:status]  : sub interface comment
    // [interface/]                     : close comment
    */
    /* template code
    // nexacro                          : nexacro. 과 같은 Package Name
    // SimpleComponent                  : SimpleComponent Type Name
    // Component                        : SimpleComponent Inherited Parent Component Type Name
    // BasicComponent                   : Nexacro Basic Component
    // ControlComponent                 : User Component의 하위 Control Component
    // Property(n)                      : User Property
    // Method(n)                        : User Method
    // Event(n)                         : User Event
    // Variant(n)                       : User Variant
    // PredefineStatus(n)               : Component Status
    // Status(n)                        : User Status
    // DEFAULT_VALUE                    : Property default value
    */

    // [object.inherit:create]
    nexacro.SimpleComponent = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

        // TODO : InitComponent로 이동시킬것
        this._initProperties();
        this._initEvents();
    };

    // [object.prototype:create]
    var _pSimpleComponent = nexacro._createPrototype(nexacro.Component, nexacro.SimpleComponent);
    nexacro.SimpleComponent.prototype = _pSimpleComponent;

    // [component.typename:create]
    _pSimpleComponent._type_name = "SimpleComponent";   // 각각 Component Type 개별 지정, Override 필요.
    _pSimpleComponent._is_simple_control = true;        // Simple/Complex Flag 고정 지정, Override 없음.

    //===============================================================
    // nexacro.SimpleComponent : Init
    //===============================================================

    // [component.variable:init]
    /*
    _pSimpleComponent._var1 = true;
    _pSimpleComponent._var2 = null;
    _pSimpleComponent._var3 = false;
    */

    // [object.property:init]
    /*
    _pSimpleComponent.prop1 = true;
    _pSimpleComponent.prop2 = false;
    _pSimpleComponent.prop3 = false;
    */

    // [component.status:init]
    /*
    _pComplexComponent._use_pushed_status = true;
    _pComplexComponent._use_selected_status = true;
    */

    // [component.accessibility:init]
    /*
    _pComplexComponent._accessibility_role = "RoleName";
    */

    // [object.event:init]
    /*
    _pSimpleComponent._event_list = 
    {
            "onlbuttondown": 1,
            "onlbuttonup": 1, 
            "onmouseenter": 1,
            "onmouseleave": 1,
            "onmousemove": 1,
            "onmove": 1,
            "onsize": 1,
            "onmousedown": 1,
            "onmouseup": 1,
            "ontouchstart": 1,
            "ontouchmove": 1,
            "ontouchend": 1,
            "onflingstart": 1,
            "onfling": 1,
            "onflingend": 1,
            "onpinchstart": 1,
            "onpinch": 1,
            "onpinchend": 1,
            "onlongpress": 1,
            "onslidestart": 1,
            "onslide": 1,
            "onslideend": 1
    };
    */


    //===============================================================
    // nexacro.SimpleComponent : Create/Destroy
    //===============================================================

    // [Simple Component 처리]
    // Control/Contents Element 및 주요 내용 Element(ex:IconText Element)의 처리 code는
    // 해당 Element를 가지는 Basic Component에서 모두 처리, 하위 상속에서는 노출없음.

    // [object:create]                              // 이부분의 override는 없음.
    _pSimpleComponent.create = function ()          
    {
        // check created
        if (this._is_created)
            return;

        // create component
        this.createComponent();
    };

    // [component:create]                           // 이부분 override는 basic component에서만
    _pSimpleComponent.onCreateComponent = function ()     
    {
        // check parent
        var parentElem = this._getParentElement();

        if (parentElem)
        {
            // create control element
            if (this._createControlElement(parentElem))
            {
                // TODO : _initControlElement가 기본속성을 설정하고 있음
                //      : 기본속성 처리방식에 따라 _init와 _apply의 호출순서를 ComBase와 동일처리할지 재확인

                // init control elements
                this._initControlElement();

                // apply properties
                this._applyProperties();
                // apply accessibility
                this._applyAccessibility();

                // init bindinfo for value
                this._initBindInfo();
                // init exprinfo for value
                this._initExprInfo();

                if (this._checkInitContentsFlag())
                {
                    // init/create contents
                    this._initContents();
                }
            }

            return true;
        }
        else
        {
            return false;
        }
    };

    // [component:created]                          // 이부분 override는 최소화 (window 별도 처리에만 override)
    _pSimpleComponent.onCreated = function (window)
    {
        // check form loading
        if (this._is_loading)                       // TODO:_is_loading? 확인
            return;

        // check parent
        var parentElem = this._getParentElement();

        if (parentElem)
        {
            // check window
            window = window || this._getWindow();

            // created control element
            if (this._createdControlElement(window))
            {
                // created layout
                this._createdControlElementLayoutProps();

                // created init logic
                this._initHotKey();

                // update propeties for command
                this._updateProperties();

                if (!this._checkInitContentsFlag())
                {
                    // init/create contents
                    this._initContents();
                }

                // created contents
                this._createdContents(window);

                // layout
                if (this._onCheckRelayoutAfterCreated())
                {
                    this._recalcLayout(false);
                }

                // status
                this._resetStatus();
            }
        }
    };

    // [component:created.after]                    // 이부분 override는 basic에서만
    _pSimpleComponent.on_after_created = function ()
    {
        this._onAfterCreated();
    };
    _pSimpleComponent._onAfterCreated = function ()
    {
    };

    // [component:init]                             // 이부분 override는 없음
    _pSimpleComponent._initComponent = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight)
    {
        if (!this._control_element)
        {
            this._initUniqueID();
            this._initOverflow();
            this._initSelect();
            this._initStatus();

            this._initBind();
            this._initExpr();

        //  this._initProperties();
        //  this._initEvents();

            if (nexacro._a11y_module_loaded)
                this._initAccessibility();
        }
    };
    // [component:init]                             // Override 제외 // TODO : createComponent 내에서 통합
    _pSimpleComponent._initComponentClone = function (source)
    {
        if (source)
        {
            this._initUniqueID();
            this._initOverflow();
            this._initSelect();
            this._initStatus();
            this._initBind();
            this._initExpr();

            this._cloneProperties(source);
            this._cloneEvents(source);

            if (nexacro._a11y_module_loaded)
                this._initAccessibility();
        }
    };

    // [component:clone]      // Override 제외
    _pSimpleComponent._cloneProperties = function (source)
    {
        if (source) this._onCloneProperities(source);
    };
    _pSimpleComponent._cloneEvents = function (source)
    {
        if (source) this._onCloneEvents(source);
    };
    // [component:clone]      // Override 처리
    _pSimpleComponent._onCloneProperities = function (source) 
    {
        if (source && source instanceof nexacro.Component)
        {
            // style
            this._onClonePropStyle(source);
            // accessibility
            this._onClonePropAccessibility(source);
        }
    };
    _pSimpleComponent._onCloneEvents = function (source) 
    {

    };

    _pSimpleComponent._onClonePropStyle = function (source) 
    {
        // clone property style

        // TODO : 기정의된 스타일 속성리스트로 대체
        var cloneprops =
            [
                "background",
                "border",
                "borderRadius",
                "boxShadow",
                "color",
                "cursor",
                "edge",
                "font",
                "letterSpacing",
                "opacity",
                "padding",
                "wordSpacing"
            ];

        for (var prop of cloneprops) this[prop] = source[prop];
    };
    _pSimpleComponent._onClonePropAccessibility = function (source) 
    {
        // clone property accessbility

        // TODO : 기정의된 접근성 속성리스트로 대체
        var cloneprops =
            [
                "accessbilityaction",
                "accessbilitydesclevel",
                "accessbilitydescription",
                "accessbilityenable",
                "accessbilitylabel",
                "accessbilityrole"
            ];

        for (var prop of cloneprops) this[prop] = source[prop];
    };

    // [component:uninit]                          // 이부분 override는 없음, TODO: Interface별로 분리할것.
    _pSimpleComponent._uninitComponent = function (callremovechild)
    {
        // clear propinit
        this._clearInitValue();
        // clear event listners
        this._clearEventListeners();
        // clear capture
        this._clearCaptureLock();
        // remove parent
        this._clearParentsList(callremovechild);
        // clear inner vars 
        this._clearInnerVars();
        // clear style vars
        this._clearStyleVars();
    };

    // [component.properity.initvalue:clear]
    _pSimpleComponent._clearInitValue = function ()
    {
        // clear propinit
        if (this._setpropinitfn)
        {
            delete this._setpropinitfn;
            this._setpropinitfn = null;
        }
    };

    // [component.capture:clear]
    _pSimpleComponent._clearCaptureLock = function ()
    {
        // clear capture
        var _window = this._getWindow();
        if (_window && this._track_capture)
        {
            _window._releaseCaptureLock(this);
            _window._releaseCaptureLock(this._attached_comp);
            this._track_capture = false;
        }
    };

    // [component:clearParent]
    _pSimpleComponent._clearParentsList = function ()
    {
        // remove parent
        if (this.parent && this.parent.removeChild)
        {
            this.parent.removeChild(this.id);
        }
        else
        {
            var win = this._getWindow();
            if (win)
                win._removeFromCurrentFocusPath(this);
        }
    };

    // [component:clearinnervar]
    _pSimpleComponent._clearInnerVars = function ()
    {
        // clear inner vars // TODO:Interface별로 분리
        if (this.parent)            this.parent     = null;
        if (this.hotkey)            this.hotkey     = null;

        if (this._refform)          this._refform   = null;
        if (this._refobj)           this._refobj    = null;

        if (this._event_list)       this._event_list    = null;
        if (this._last_focused)     this._last_focused  = null;
        if (this._cssselector)      this._cssselector   = null;
    };

    // [component:clearstylevar]
    _pSimpleComponent._clearStyleVars = function ()
    {
        // clear style vars
        this._clearStyleObject();
    };

    // [component:destory]                          // 이부분 override는 basic component에서만
    _pSimpleComponent.onDestroyComponent = function ()
    {
        // destory client contents
    //  if (!this._is_created)
        {
            this._is_created = false;
            this.onDestroyContents();               // 모든 Component Override
        }

        // clear logic
        this._clearHotKey();
        this._clearBind();
        this._clearExpr();
        this._clearSelect();
        this._clearStatus();

        // clear accessibility
        this._clearAccessibility();
        // clear properties
        this._clearProperties();

        // destory controlelement
        this._destroyControlElement();
    };

    // [component:destroy]                          // override는 최소화. onDestroyComponent에서 override 처리
    _pSimpleComponent.destroyComponent = function (callremovechild)
    {
    //  if (!this._is_loading)                      // TODO:_is_loading? 확인
        {
            this._is_alive = false;

            // uninit component
            this._uninitComponent(callremovechild);

            // destory override
            this.onDestroyComponent();

            return true;
        }
    };

    /*
    // [object:destroy]                             // override 없음
    _pSimpleComponent.destroy = function (callremovechild)
    {
        // check alive
        if (!this._is_alive)
            return false;

        // destroy component
        return this.destroyComponent(callremovechild);
    };
    */


    //===============================================================
    // nexacro.SimpleComponent : Position Absolute/Fluid
    //===============================================================

    _pSimpleComponent._updatePosition = function ()
    {
        return this._update_position();
    };

    // [component.layout:flud]                      // 이부분 override는 없음
    _pSimpleComponent._isFluidContainer = function (binner) 
    {
        return nexacro.Component.prototype._isFluidContainer.call(this, binner);
    };

    //===============================================================
    // nexacro.SimpleComponent : Control Element
    //===============================================================

    // [상위 Component 처리]
    // BasicComponent 까지만 ControlElement 직접코딩가능
    // UserComponent는 ControlElement 관련 Override 및 직접코딩 불가

    // [component.controlelement:created]           // 이부분 override는 basic component에서만
    _pSimpleComponent._createdControlElement = function (_window)
    {
        var controlElem = this._control_element;
        if (controlElem)
        {
            controlElem.create(_window);

            //  onCreatedControlElement();          // 이 override 노출은 제외, _createdControlElementLayoutProps 에서 처리

            return controlElem.handle;
        }
        return null;
    };

    // [component.controlelement:layout]            // 이부분 override는 없음 (TODO : LayoutProp 이외가 사용된다면 명칭변경 검토)
    _pSimpleComponent._createdControlElementLayoutProps = function ()
    {
        this._onCreatedControlElementLayoutProps();
    };

    // [component.controlelement:layout]            // 이부분 override는 basic component에서만, 가급적 제외
    _pSimpleComponent._onCreatedControlElementLayoutProps = function ()
    {
    };

    // [component.controlelement:destroy]           // 이부분 override는 basic component에서만, 가급적 제외
    _pSimpleComponent._destroyControlElement = function ()
    {
        if (this._control_element)
        {
            this._control_element.destroy();
            this._control_element = null;
        }

        //  onDestroyControlElement();              // 이 override 노출은 가급적 제외
    };


    //===============================================================
    // nexacro.SimpleComponent : Client Element
    //===============================================================

    // [SimpleComponent Component 처리]
    // BasicComponent 까지만 ClientElement 직접코딩가능
    // UserComponent는 ClientElement 관련 Override 및 직접코딩 불가

    // TODO : ControlElement내 ClientElement로 통합

    // [component.clientelement:create]             // 이부분 override는 basic component에서만
    _pSimpleComponent._createClientElement = function ()
    {
        // check parent
        var control_elem = this._control_element;
        if (control_elem)
        {
            // create client element
            this._onCreateClientElement(control_elem);

            // check client elements
            if (this._client_elem)
            {
                // init client elements
                this._initClientElement();
            }
        }
    };
    // [component.clientelement:create]             // 이부분 override는 basic component에서만
    _pSimpleComponent._onCreateClientElement = function (parent_elem)
    {
        this._client_elem = new nexacro.IconTextElement(parent_elem);
    };

    // [component.clientelement:init]               // 이부분 override는 basic component에서만
    _pSimpleComponent._initClientElement = function ()
    {
        this._initClientElementPositionSize();
        this._initClientElementStyleProps();
        this._initClientElementValueProps();
    };

    // [component.clientelement.init:possize]       // 이부분 override는 basic component에서만
    _pSimpleComponent._initClientElementPositionSize = function ()
    {
        this._client_elem.setElementPosition(0, 0);
        this._client_elem.setElementSize(this._getClientWidth(), this._getClientHeight());
    };

    // [component.clientelement.init:styleprop]     // 이부분 override는 basic component에서만
    _pSimpleComponent._initClientElementStyleProps = function ()
    {
        if (this.textAlign)
            this._client_elem.setElementTextAlign(this.textAlign);
        if (this.verticalAlign)
            this._client_elem.setElementVerticalAlign(this.verticalAlign);
    };

    // [component.clientelement.init:valueprop]     // 이부분 override는 basic component에서만
    _pSimpleComponent._initClientElementValueProps = function ()
    {
        // TODO : Basic Component별 처리
        /*
            if (this.id)
                this._setClientElementText(this.id);
        */
    };

    // [component.clientelement:get]                // 이부분 override는 basic component에서만
    _pSimpleComponent._getClientElement = function ()
    {
        return this._client_elem;
    };
    // [component.clientelement:set]                // 이부분 override는 basic component에서만
    _pSimpleComponent._setClientElementText = function (text)
    {
        this._client_elem.setElementText(text);
    };

    // [component.clientelement:created]            // 이부분 override는 basic component에서만, 가급적 제외
    _pSimpleComponent._createdClientElement = function (_window)
    {
        if (this._client_elem)
        {
            this._client_elem.create(_window);      // create? created?
        }

        //  onCreatedClientElement();                   // 이 override 노출은 제외
    };

    // [component.clientelement:destroy]            // 이부분 override는 basic component에서만, 가급적 제외
    _pSimpleComponent._destroyClientElement = function ()
    {
        if (this._client_elem)
        {
            this._client_elem.destroy();
            this._client_elem = null;
        }

        //  onDestroyClientElement();                   // 이 override 노출은 가급적 제외
    };

    //===============================================================
    // nexacro.SimpleComponent : Overflow
    //===============================================================

    // [Simple Component 처리]
    // Overflow는 Scroll/Expand 처리의 기본 설정만 제공
    // Simple에서는 현재 별도 처리 없고 Complex에서 별도 처리

    // [component:init]                             // 이부분 override는 Complex만
    _pSimpleComponent._initOverflow = function ()
    {
    };

    //===============================================================
    // nexacro.SimpleComponent : Contents (Format+Element)
    //===============================================================

    // [Simple Component 처리]
    // 아래는 Basic Component만 override 가능
    // 각 하위 Component는 ClientElement만 직접코딩가능

    // [component.contents:created]                 // 이부분 override는 basic component에서만      
    _pSimpleComponent._createdContents = function (window)
    {
        // TODO : _is_created와 _is_created_contents 처리시점 재확인
        //        _is_created-->_is_created_contents?
        if (!this._is_created)
        {
            this.on_created_contents(window);
            this._is_created = true;
            this.on_after_created();
        }
    };

    // [component.contents:created]                 // 이부분 override는 basic component에서만
    _pSimpleComponent.on_created_contents = function (_window)
    {
        this.onCreatedContents(_window);

        // TODO : _is_created, _is_created_contents 처리시점 재확인
        //        _is_created_contents 처리 on_create_contents --> on_created_contents?
        this._is_created_contents = true;
    };

    // [component.contents:set]                     // 이부분 override는 basic component에서만   
    _pSimpleComponent._setContents = function (strContents)
    {
        this._onSetContents(strContents);           // Contents 변경시에 Override
    };

    // [component.contents:clear]                   // CombaseEx 내에서만 call & override
    _pSimpleComponent._clearContents = function ()
    {
        this.onClearContents();                     // Recreate 처리를 위해 Content Clear는 여기서 모두 처리

        // TODO : _is_created, _is_created_contents 처리시점 재확인
        //        _is_created 제외 _is_created_contents 처리?
        this._is_created = this._is_created_contents = false;
    };

    // [component.contents:reset]                   // CombaseEx 내에서만 call & override
    _pSimpleComponent._resetContents = function ()
    {
        this._clearContents();
        this._initContents();
    };

    // [개별 Component 처리]
    // 아래는 각 Component에서 override 가능
    // 각 하위 Component는 ClientElement만 직접코딩가능

    // [component.contents:create]                  // Contents 변경시에 Override       
    _pSimpleComponent.onCreateContents = function (created)
    {
        this._createClientElement();
    };

   // [component.contents:created]                 // Contents 변경시에 Override             
    _pSimpleComponent.onCreatedContents = function (_window)
    {
        this._createdClientElement(_window);
    };

    // [component.contents:set]                     // Contents 변경시에 Override 
    _pSimpleComponent._onSetContents = function (strContents)
    {
    };

    // [component.contents:clear]                   // Contents 변경시에 Override          
    _pSimpleComponent.onClearContents = function ()
    {
        this._destroyClientElement();
    };
    // [component.contents:destory]                 // 이부분 override는 basic component에서만
    _pSimpleComponent.onDestroyContents = function ()
    {
        this._clearContents();                      // Recreate 처리를 위해 ClearContents로 모두 처리
    };


    // [component.contents.init:update]             // 이부분 override는 basic component에서만
    _pSimpleComponent._changeInitContentsFlag = function ()
    {
        return this._onChangeInitContentsFlag();
    };
    _pSimpleComponent._onChangeInitContentsFlag = function ()
    {
        // this._autocontsfit = true : fit to contents width/height/both,    false : fit to contents none
        // this._dynamicconts = true : create contents after updateposition, false : create contents after createcontrolelement        

        // check fittocontents vs dynamiccontents
        // this._dynamicconts = !this._autocontsfit && true;  
    };
    // [component.contents.init:check]              // 이부분 override는 basic component에서만
    _pSimpleComponent._checkInitContentsFlag = function ()
    {
        return this._onCheckInitContentsFlag();
    };
    _pSimpleComponent._onCheckInitContentsFlag = function ()
    {
        // return = true : create contents after createcontrolelement, false : create contents after updateposition        

        return true; // !this._dynamicconts;               
    };

    //===============================================================
    // nexacro.SimpleComponent : Recreate
    //===============================================================

    // [상위 Component 처리]
    // Recreate 처리용 Component에 한하여 추가처리


    // [component.contents:recreate]                
    _pSimpleComponent._recreateContents = function ()
    {
        this._resetContents();
        this._createdContents(this._getWindow());

        this._recalcLayout(true);
    };
    // [component:recreate]                         
    _pSimpleComponent._recreateComponent = function ()
    {
        this.destroyComponent();
        this.createComponent();
    };
    // [object:recreate]                           
    _pSimpleComponent._recreate = function ()
    {
        this.destroy();
        this.create();
    };

    // [하위 Component 처리]
    // Recreate Logic이 별도인 Basic Component에 한하여 Override



    //===============================================================
    // nexacro.SimpleComponent : Create Command/Handle
    //===============================================================

    // [상위 Component 처리]
    // Command/Attach는 Contents 수정시 같이 수정되도록 제공
    // SimpleComponent 까지는 Element Command/Attach 코딩가능

    /*
    // [component:createcommand]   
    _pSimpleComponent.createCommand = function ()     // TODO:소스통합
    {
        return this._createCommand();
    };
    _pSimpleComponent.attachHandle = function (win)   // TODO:소스통합
    {
        return this._attachHandle(win);
    };
    */

    // [component:createcommand]                    
    _pSimpleComponent.createCommand = function ()
    {
        var str = "";
        var controlElem = this._control_element;
        if (controlElem && !this._is_loading)
        {
            // onPrepareCommand내 _prepareStatus로 이동
            /* 
            var enable = this._isEnable();

            if ((this._real_enable == null && enable == false) || (this._real_enable && this._real_enable != enable))
            {
                this._real_enable = enable;
                this._changeStatus("disabled", !enable);
                this.on_apply_prop_enable(enable);
            }
            else
            {
                this._real_enable = enable;
                this._setAccessibilityStatFlag(this._status, this._userstatus);
            }

            if (this._status || this._userstatus)
                this._apply_status_toelement("", this._status, "", this._userstatus);
            */

            // prepare command
            this.onPrepareCommand();

            // get command
            str = controlElem.createCommandStart();
            if (str)
            {
                str += this.onCreateContentsCommand();  // Basic Component에서만 Override
                str += controlElem.createCommandEnd();
            }

            this._is_create_commandstr = true;
        }
        return str;
    };

    // [component.contents:preparecommand]           
    _pSimpleComponent.onPrepareCommand = function ()
    {
        // preparecommand flag
        this._is_prepare = true;

        // update position for command
        this._updatePosition();

        // update propeties for command
        this._updateProperties();

        // init contents
        if (!this._checkInitContentsFlag())
        {
            // init/create contents
            this._initContents();
        }

        // recalc layout for command
        this._recalcLayout(true);

        // reset status for command
        this._resetStatus();

        // preparecommand flag
        this._is_prepare = false;
    };

    // [component.contents:createcommand]           
    _pSimpleComponent.onCreateContentsCommand = function ()
    {
        return this._client_elem ? this._client_elem.createCommand() : "";
    };


    // [component:attachhandle]                     
    _pSimpleComponent.attachHandle = function (win, enablea11y)
    {
        if (!this._is_created && this._is_create_commandstr)
        {
            // attach handle
            this.onAttachControlHandle(win);            // Basic Component에서만 Override
            this.onAttachContentsHandle(win, enablea11y);           // Basic Component에서만 Override

            this.on_attach_contents_handle(win, enablea11y); // 접근성 처리를 위한 인터페이스
            
            // attach created
            this._is_created = true;
            this.on_after_created();

            // relayout for fittocontents
            if (this._onCheckRelayoutAfterCreated())
            {
                this._recalcLayout(false);
            }

            // 확인 : 아래코드 필요여부 확인
            // this._resetStatus();
        }
    };

    // [component.control:attachhandle]            
    _pSimpleComponent.onAttachControlHandle = function (win)
    {
        var controlElem = this._control_element;
        if (controlElem)
        {
            controlElem.attachHandle(win);
        }
    };
    // [component.contents:attachhandle]            
    _pSimpleComponent.onAttachContentsHandle = function (win/*, enablea11y*/)
    {
        var clientElem = this._client_elem;
        if (clientElem)
        {
            clientElem.attachHandle(win);
        }

        // 접근성 처리를 위한 인터페이스
        this.on_attach_contents_handle(win); 
    };

    // [하위 Component 처리]
    // Command/Attach는 Contents 와 무관하게 최대한 자동처리되도록 처리
    // UserComponent에서는 Element의 Command/Attach 불가, Control만 가능


    //===============================================================
    // nexacro.SimpleComponent : Layout/Recalc
    //===============================================================

    // [component.layout:recalc]                    // SimpleComponent에서는 사용하지 않음
    _pSimpleComponent._recalcLayout = function (reset)
    {
        if (this._is_created || reset)   // TODO: RecalcLayout 처리허용 Component Status 처리
        {
            this._onRecalcLayout(reset);
        }
    };

    // [하위 Component 처리]
    // SimpleComponent에서는 Override 없음

    // [component.layout:recalc]                    // SimpleComponent에서는 사용하지 않음
    _pSimpleComponent._onRecalcLayout = function (reset)
    {
    };

    // [component.layout:relayoutaftercreated]    // 필요시 Override
    _pSimpleComponent._onCheckRelayoutAfterCreated = function ()
    {
        return true;
    };

    //===============================================================
    // nexacro.ComplexComponent : Pos/Size (Width/Height/FitToContents)
    //===============================================================

    // [Simple Component 처리]
    // RecalcLayout으로 모두 통합처리
    // RTL도 추후 포함
    // SimpleComponent에서는 항상 100%임으로 별도 Override는 없음
    // AutoSize 부분은 내부 자동처리로 UserComponent에서 처리 없음

    // TODO:소스통합
    _pSimpleComponent.on_change_containerPos = function (left, top)
    {
        this._onChangeContainerPos(left, top);
    };
    _pSimpleComponent.on_change_containerRect = function (width, height)
    {
        this._onChangeContainerRect(width, height);
    };

    // [component.layout:setpos]                    // SimpleComponent에서는 Override 없음
    _pSimpleComponent._onChangeContainerPos = function (left, top)
    {
        //  this._setContainerPos(left, top);
    };

    // [component.layout:setsize]                   // SimpleComponent에서는 Override 없음
    _pSimpleComponent._onChangeContainerRect = function (width, height)
    {
        this._setContainerSize(width, height);

        if (width <= 0 || height <= 0) return;

        this._recalcLayout(); // this._recalcLayout(this._is_created);
    };

    // [component.layout.container:pos]             // SimpleComponent에서는 Override 없음
    _pSimpleComponent._setContainerPos = function (left, top)
    {
        var client_elem = this._client_elem;
        if (client_elem)
        {
            client_elem.setElementPosition(left, top);
        }

        this._onSetContainerPos(left, top);
    };
    // [component.layout.container:size]            // SimpleComponent에서는 Override 없음
    _pSimpleComponent._setContainerSize = function (width, height)
    {
        var client_elem = this._client_elem;
        if (client_elem)
        {
            client_elem.setElementSize(width, height);
        }

        this._onSetContainerSize(width, height);
    };


    // [하위 Component 처리]
    // SimpleComponent에서는 Override 없음

    // [component.layout.container:pos]             // SimpleComponent에서는 사용하지 않음
    _pSimpleComponent._onSetContainerPos = function (left, top)
    {
    };
    // [component.layout.container:size]            // SimpleComponent에서는 사용하지 않음
    _pSimpleComponent._onSetContainerSize = function (width, height)
    {
    };

    //===============================================================
    // nexacro.ComplexComponent : Size (Width/Height/FitToContents)
    //===============================================================

    // [component.layout:fittocontents]             // 필요시 override
    _pSimpleComponent._getFitToContentType = function ()
    {
        switch (this._p_fittocontents)
        {
            case "width"    : return 1;
            case "height"   : return 2;
            case "both"     : return 3;
            default         : return 0;
        }
    };

    // [component.layout:fittocontents]             // 필요시 override
    _pSimpleComponent._resizeFitToContent = function (fittype, sizew, sizeh)
    {
        this._p_fittocontents = fittype;
        this.on_apply_fittocontents(true);

        this.resize(sizew, sizeh);

        this._on_apply_fittocontents();
    };

    // [component.layout:fittocontents]             // 필요시 override
    _pSimpleComponent.on_apply_fittocontents = function (skipupdateposition)
    {
        this._autocontsfit = !nexacro._isNullEmpty(this._p_fittocontents) || this._p_fittocontents != "none";
        this._changeInitContentsFlag();

    //  nexacro.Component.prototype.on_apply_fittocontents.call(this);

        var control_elem = this.getElement();
        if (control_elem)
            control_elem._setElementFittocontents(this._p_fittocontents);

        if (!skipupdateposition)
        {
            if (this._is_created)
                this._update_position();

            this._on_apply_fittocontents();
        }
    };

    // [component.layout:fittocontents]             // 필요시 override
    _pSimpleComponent._on_getFitSize = function ()
    {
        if (this._isAvoidProp())
        {
            this._onAvoidProperties();
            this._recalcLayout(true);
        }

        var ret = nexacro.Component.prototype._on_getFitSize.call(this);

        if (this._isAvoidProp())
        {
            this._onApplyProperties();
        //  this._recalcLayout(true);
        }

        return ret;
    };

    // [component.layout:fittocontents_to_basis]    // CombaseEx내 override
    _pSimpleComponent._recalcBasisSize = function () 
    {
        var SP,SN;

        if (this._is_scrollable)
        {
            if (this._basis_width == -1)
            {
            //  if (this._is_component)
                {
                    SP = this._on_getFitSize_style();
                    SN = this._on_getFitSize_scroll();
                }

                this._basis_width = this._adjust_width - SP[0] - SN[0];
            }
            if (this._basis_height == -1)
            {
                if (!SP || !SN)
                {
                    SP = this._on_getFitSize_style();
                    SN = this._on_getFitSize_scroll();
                }

                this._basis_height = this._adjust_height - SP[1] - SN[1];
            }
        }
        else
        {
            if (this._basis_width == -1)
            {
                SP = this._on_getFitSize_style();

                this._basis_width = this._adjust_width - SP[0];
            }
            if (this._basis_height == -1)
            {
                if (!SP) SP = this._on_getFitSize_style();

                this._basis_height = this._adjust_height - SP[1];
            }
        }
    };

    //===============================================================
    // nexacro.SimpleComponent : ValueBind/Expr
    //===============================================================

    // [Simple Component 처리]
    // value bind는 기본으로 제공

    // [component.bind.valuebind:initprop]   
    _pSimpleComponent._is_valuebind = false;
    // [component.expr.valueexpr:initprop]   
    _pSimpleComponent._is_valueexpr = false;


    // [component.bind:init]                   
    _pSimpleComponent._initBind = function ()
    {
    };
    // [component.bind:initinfo]                   
    _pSimpleComponent._initBindInfo = function ()
    {
    };
    // [component.bind:clear]    
    _pSimpleComponent._clearBind = function ()
    {
    };

    // [component.expr:init]                   
    _pSimpleComponent._initExpr = function ()
    {
        if (this._is_valueexpr)
        {
            // [component.expr:create]
            this._exprdata = new nexacro._ExprData(true, false, false);

            // [component.expr:init]
            this._exprdata._initExprParser();
            this._exprdata._initExprTarget(this);
        }
    };
    // [component.expr:initinfo]                   
    _pSimpleComponent._initExprInfo = function ()
    {
        if (this._is_valueexpr)
        {
            // [component.expr.exprinfo:apply]
            this._applyExprInfos();

            // [component.expr.value:apply]
            this._applyValue();
        }
    };
    // [component.expr:applyinfo]                   // override 최소화
    _pSimpleComponent._applyExprInfos = function ()
    {
        if (this._exprdata)
        {
            // [component.expr.exprinfo:set]
            this._exprdata._setExprInfos(this._onGetExprInfos());
        }
    };
    // [component.expr:clear]    
    _pSimpleComponent._clearExpr = function ()
    {
        if (this._exprdata)
        {
            this._exprdata._clear();
            delete this._exprdata;
            this._exprdata = null;
        }
    };

    // [component.expr.cache:get]    
    _pSimpleComponent._getExprFuncByCtx = function (ctx)
    {
        if (this._exprdata)
        {
            return this._exprdata.getExprFuncByCtx(ctx);
        }
    };
    // [component.expr.cache:set]    
    _pSimpleComponent._setExprFuncByCtx = function (ctx, func)
    {
        if (this._exprdata)
        {
            return this._exprdata.setExprCacheIdx(ctx, this._exprdata.setExprFunc(ctx, func));
        }
    };

    // [component.expr.info:create]
    _pSimpleComponent.createExprInfo = function (baseid, targetid, targetprop, exprprop)
    {
        var exprinfo = new nexacro._ExprInfo();

        exprinfo.baseid = baseid;
        exprinfo.target = nexacro._nvl(targetid,    false) ? targetid.split('.') : null;
        exprinfo.propid = nexacro._nvl(targetprop,  false) ? targetprop          : "text";
        exprinfo.setter = nexacro._nvl(targetprop,  false) ? "set_" + targetprop : "set_text";
        exprinfo.exprid = nexacro._nvl(exprprop,    false) ? exprprop            : this._onGetExprProp();

        return exprinfo;
    };
    // [component.bind.databind:init]               // expr시 override
    _pSimpleComponent._onGetExprProp = function ()
    {
        return "expr";
    };

    // [component.expr.dataexpr:init]               // dataexpr시 override
    _pSimpleComponent._onGetExprInfos = function ()
    {
        if (this._is_valueexpr)
            return [this.createExprInfo()];

        return null;
    };

    // [component.bind.valuebind:initprop]          // value property가 없거나 다른 property로 처리시 override
    _pSimpleComponent._onGetBindableProperties = function ()      // 왜 Properties 복수지??
    {
        return "value";
    };

    // [component.bind.valuebind:initbind]          // TODO: 소스통합             
    _pSimpleComponent.on_init_bindSource = function (columnid, propid, ds)
    {
        return this._onInitBindSource(columnid, propid, ds);
    };
    // [component.bind.valuebind:initbind]
    // [component.bind.valueexpr:initexpr]
    _pSimpleComponent._onInitBindSource = function (columnid, propid, ds)
    {
        if (this._is_valuebind && propid == this._onGetBindableProperties())
        {
            this._setValue(undefined);
            this._applyVaule();
        }
        if (this._is_valueexpr && propid == this._onGetExprProperty())
        {
            this._setValue(undefined);
            this._applyVaule();
        }
    };

    // [component.bind.valuebind:changebind]        // TODO: 소스통합                 
    _pSimpleComponent.on_change_bindSource = function (propid, ds, row, col)
    {
        return this._onChangeBindSource(propid, ds, row, col);
    };
    // [component.bind.valuebind:changebind]                  
    _pSimpleComponent._onChangeBindSource = function (propid, ds, row, col)
    {
        if (this._is_created)
        {
            if (this._is_valuebind && propid == this._onGetBindableProperties())
            {
                this._setValue(ds.getColumn(row, col));
                this._applyValue();
            }
            if (this._is_valueexpr && propid == this._onGetExprProperty())
            {
                this._setValue(this._getExprData(row));
                this._applyValue();
            }
        }
    };

    // [component.bind.valuebind:valuetobind]               
    _pSimpleComponent._applyToBindSource = function (propid, Val)
    {
        if (!this._bind_event)
            return true;

        var evt =
        {
            propid: propid,
            val: Val
        };
        var ret = this._bind_event._fireEvent(this, evt);
        return ret;
    };

    // [component.bind.valuebind:set]                  
    _pSimpleComponent._setValue = function (v)
    {
        this[this._onGetBindableProperties()] = v;
    };

    // [component.bind.valuebind:get]                  
    _pSimpleComponent._getValue = function (v)
    {
        return this[this._onGetBindableProperties()];
    };

    // [component.bind.valuebind:applyvalue]                  
    _pSimpleComponent._applyValue = function ()
    {
        this.on_apply_value();
    };

    // [component.bind.valuebind:applyvalue]        // ValueBind시 Override                  
    _pSimpleComponent.on_apply_value = function ()
    {
        if (this._client_elem)
        {
            var value = this._getValue();
            if (value != null)
            {
                this._client_elem.setElementText(value);
            }
        }
    };


    // [하위 Component 처리]
    // value bind 처리시 override
    /*
    // [component.bind.valuebind:initprop]          // value property가 없거나 다른 property로 처리시 override
    _pSimpleComponent._onGetBindableProperties = function ()
    {
        return "value";
    };
 
    // [component.bind.valuebind:valuetobind]               
    _pSimpleComponent.updateToDataset = function ()
    {
        return this._applyToBindSource(this._onGetBindableProperties(), this.value);
    };
    */


    //===============================================================
    // nexacro.ComplexComponent : Select (Single/Multi)
    //===============================================================

    // [상위 Component 처리]
    // Select 사용시 Interface 제공
    // Select의 Single/Multi 여부는 Component의 Simple/Complex 여부와 무관
    // Select의 정보구성은 각 Component별 정보에 따라 별도로 구성
    // SimpleComponent의 기본 Select는 Component Select로 구성하고 selectstatus와 연동

    // [component.select:init]                      
    _pSimpleComponent._use_select = false;                  // Select 지원시 설정
    _pSimpleComponent.selectdragmode = "default";           // Scroll/Drag 동시지원시 추가

    // [component.select:get]                               // 필요시 override
    _pSimpleComponent.getSelect = function (bGetSelectArg)
    {
        return bGetSelectArg ? this._onGetCurrentSelect() : this._onGetSelectValue(this._onGetCurrentSelect());
    };
    // [component.select:set]
    _pSimpleComponent.setSelect = function (selectvalue)
    {
        return this._onSetCurrentSelect(this._onGetSelectArgument(selectvalue));
    };
    // [component.select:clear]
    _pSimpleComponent.clearSelect = function ()
    {
        return this._onClearCurrentSelect();
    };
    // [component.select:check]
    _pSimpleComponent.isAboveSelected = function (select, subselect)
    {
        return this._onCheckAboveCurrentSelect(this._onGetSelectArgument(select, subselect));
    };
    
    // [component.select:getdata]                               // 필요시 override
    _pSimpleComponent.getSelectedText = function ()
    {
        return this.id;
    };

    // [component.select:init]                   
    _pSimpleComponent._initSelect = function ()
    {
        if (this._use_select)
        {
            this._selectinfo = new nexacro._SelectInfo();

            this._selectinfo._setSelectEvent(this);

            this._onInitSelect();
        }
    };
    _pSimpleComponent._onInitSelect = function (selecttype, positcount, rangecount, multicount, unselvalue)
    {
        if (this._selectinfo)
        {
            // TODO : Simple Component 기본 Select 정보 처리 제공
            // edit  : text
            // value : value
            // control : comp

            this._selectinfo._initSelect(selecttype, positcount, rangecount, multicount, unselvalue);
        }
    };

    // [component.select:clear]    
    _pSimpleComponent._clearSelect = function ()
    {
        this._onClearSelect();

        if (this._selectinfo)
        {
            this._selectinfo._clear();
            delete this._selectinfo;
            this._selectinfo = null;
        }
    };
    _pSimpleComponent._onClearSelect = function ()
    {
    };


    // [component.select:argument]
    _pSimpleComponent._onGetDefaultSelectArgument = function ()
    {
        return this._selectinfo ? { select: this._selectinfo.unselvalue } : undefined;
    };
    _pSimpleComponent._onGetSelectArgument = function (select)
    {
        return this._selectinfo && !nexacro._isObject(select) ? { select: select } : select;
    };
    // [component.select:get]   // Override 처리
    _pSimpleComponent._onGetSelectValue = function (select)
    {
        return this._selectinfo && nexacro._isObject(select) ? select.select : select;
    };
    _pSimpleComponent._onGetCurrentSelect = function ()
    {
        if (this._selectinfo)
        {
            switch (this._selectinfo._selecttype)
            {
                case 0x01:  // nexacro._SelectConst.SELECTTYPE_VALUE:
                case 0x02:  // nexacro._SelectConst.SELECTTYPE_TEXT:
                case 0x08:  // nexacro._SelectConst.SELECTTYPE_ITEM:
                            return this._selectinfo._getCurrentSelect();
            //  case 0x04:  // nexacro._SelectConst.SELECTTYPE_COMP:
            //  case 0x00:  // nexacro._SelectConst.SELECTTYPE_NONE:
            }
        }
        return this._getSelectStatus();
    };
    // [component.select:set]   // Override 처리
    _pSimpleComponent._onSetCurrentSelect = function (select)
    {
        if (this._selectinfo)
        {
            switch (this._selectinfo._selecttype)
            {
                case 0x01:  // nexacro._SelectConst.SELECTTYPE_VALUE:
                case 0x02:  // nexacro._SelectConst.SELECTTYPE_TEXT:
                case 0x08:  // nexacro._SelectConst.SELECTTYPE_ITEM:
                            return this._selectinfo._setCurrentSelect(select);
                case 0x00:  // nexacro._SelectConst.SELECTTYPE_NONE:
                case 0x04:  // nexacro._SelectConst.SELECTTYPE_COMP:
                         // return this._selectinfo._setCurrentSelect(select);
            }
        }
        return this._setSelectStatus(this._onGetSelectValue(select));
    };
    // [component.select:clear]  // Override 처리
    _pSimpleComponent._onClearCurrentSelect = function ()
    {
        // TODO: SelectType별 Select Status 연동처리
        return this._selectinfo ? this._selectinfo._clearCurrentSelect() : this._clearSelectStatus();
    };

    // [component.select:check]  // Override 처리
    _pSimpleComponent._onCheckAboveCurrentSelect = function (checkselect, currselect)
    {
        return checkselect == currselect;
    };
    _pSimpleComponent._onCheckSelectChange = function (oldselect, newselect)
    {
        return this._selectinfo ? !nexacro._compareObject(oldselect, newselect) : oldselect != newselect;
    };
    _pSimpleComponent._onCheckSelectable = function ()
    {
        return this._use_selected_status == true;
    };
    _pSimpleComponent._onCheckSelectEnable = function ()
    {
        return this._use_select == true && this._isEnable();
    };

    // [component.select:event]
    _pSimpleComponent._onChangeSelect = function (oldselect, newselect)
    {
        // TODO : MultiSelect 처리
        this._on_basic_onselect(oldselect, newselect);
        this._on_fire_onselect(oldselect, newselect);
        this._on_default_onselect(oldselect, newselect);

        this._on_basic_onselectedchange(oldselect, newselect);
        this._on_fire_onselectedchange(oldselect, newselect);
        this._on_default_onselectedchange(oldselect, newselect);
    };

    // [component.select.event.onselect:fireevent]
    _pSimpleComponent._on_fire_onselect = function (oldselect, newselect)
    {
        if (this.onselect && this.onselect._has_handlers)
        {
            /* TODO : basic change event info
            // [component.eventinfo:create]         // User EventInfo 코드
            var evt = new nexacro.ChangeEventInfo(this, "onselect", oldselect, newselect);
            
            this.onselect._fireEvent(this, evt);
            */
            this.onselect._fireEvent(this, null);
        }
        return true;
    };
    // [component.select.event.onselect:basicaction]
    _pSimpleComponent._on_basic_onselect = function (oldselect, newselect)
    {
        if (this._selectinfo)
        {
            // Select Complex Comp Status
            switch (this._selectinfo._selecttype)
            {
                case 0x04: // nexacro._SelectConst.SELECTTYPE_COMP:
                    {
                        this._onSetCurrentSelect(newselect);
                        break;
                    }
                case 0x02: // nexacro._SelectConst.SELECTTYPE_TEXT:
                case 0x01: // nexacro._SelectConst.SELECTTYPE_VALUE:
                case 0xFF: // nexacro._SelectConst.SELECTTYPE_USER:
                    {
                        break;
                    }
            }
        }
    };
    // [component.select.event.onselect:defaultaction]
    _pSimpleComponent._on_default_onselect = function (oldselect, newselect)
    {
    };
    // [component.select.event.onselectchange:basicaction]
    _pSimpleComponent._on_basic_onselectedchange = function (oldselect, newselect)
    {
        // Update for Self Expr Update
    };
    // [component.select.event.onselect:fireevent]
    _pSimpleComponent._on_fire_onselectedchange = function (oldselect, newselect)
    {
    };
    // [component.select.event.onselect:defaultaction]
    _pSimpleComponent._on_default_onselectedchange = function (oldselect, newselect)
    {
    };

    // [component.select.status:set]
    _pSimpleComponent._setSelectStatus = function (selectstatus)
    {
        // Select Status
        if (this._use_selected_status)
        {
            this._select_status = selectstatus;
            this._changeUserStatus("selected", selectstatus ? (this._onCheckSelectable() ? true : false) : false);
        }
    };
    // [component.select.status:get]
    _pSimpleComponent._getSelectStatus = function ()
    {
        // Select Status
        return this._use_selected_status ? this._select_status : undefined;
    };
    // [component.select.status:clear]
    _pSimpleComponent._clearSelectStatus = function ()
    {
        // Clear Status
        this._setSelectStatus(undefined);
    };


    //===============================================================
    // nexacro.SimpleComponent : Interface Logic Override
    //===============================================================

    // [Simple Component 처리]
    // 해당 interface별 변경이 요구될때 Override 처리


    // [component.dlgcode:getdlgcode]               // override 없음
    _pSimpleComponent._getDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        return this._onGetDlgCode(keycode, altKey, ctrlKey, shiftKey);
    };

    // [component.dlgcode:getdlgcode]               // dlgcode 설정값 변경이 필요하면 override, default는 모두 false
    _pSimpleComponent._onGetDlgCode = function (keycode, altKey, ctrlKey, shiftKey)
    {
        return { want_tab: true, want_return: true, want_escape: true, want_chars: true, want_arrows: true };
    };

    // [component.dragdrop:getdragdata]             // drag 허용시 drag data
    _pSimpleComponent._onGetDragData = function ()
    {
        return this.getSelectedText();
    };

    // [component.tabstop:get]                      // Accessibility 용 별도 처리시 override
    _pSimpleComponent._onGetTabstop = function ()
    {
        // [component.accessibility.tabstop:get]
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            var accessibility = this._p_accessibility;
            if (accessibility && accessibility._p_enable && accessibility.role == "link")
                return true;
        }
        return false;
    };

    // [component.focus:get]                        // Accessibility 용 별도 처리시 override
    _pSimpleComponent._onGetFocusAcceptable = function ()
    {
        // [component.accessibility.focus:get]
        return this._getEnvironment()?._p_enableaccessibility === true;
    };

    // [component.hotkey:init]                      
    _pSimpleComponent._initHotKey = function (keycode, altKey, ctrlKey, shiftKey)
    {
        if (!this._is_subcontrol)
            this._registerHotkey();
    };
    // [component.hotkey:clear]                      
    _pSimpleComponent._clearHotKey = function ()
    {
        if (!this._is_subcontrol)
            this._unregisterHotkey();
    };
    // [component.hotkey:action]                    // hotkey 기본 Action 변경시 override
    _pSimpleComponent._onHotkey = function (keycode, altKey, ctrlKey, shiftKey)
    {
        // [component.hotkey:action]
        this.focus();
    };

    // [component.processkey:action]                // selectkey 기본 Action 변경시 override
    _pSimpleComponent._checkProcessedKey = function (keycode, alt_key, ctrl_key, shift_key, check_comp, refer_comp)
    {
        if (check_comp && refer_comp && refer_comp._isEditableComponent() && refer_comp._isEnable() && check_comp._isEnable())
        {
            // TODO : refer_comp에서 체크하도록 수정
            switch (keycode)
            {
                case nexacro.Event.KEY_TAB      : return check_comp._want_tab != true;
                case nexacro.Event.KEY_LEFT     : return check_comp.getCaretPos && check_comp.getCaretPos() <= 0;
                case nexacro.Event.KEY_RIGHT    : return check_comp.getCaretPos && check_comp.getCaretPos() >= check_comp._p_text?.length;
                case nexacro.Event.KEY_DOWN     :
                case nexacro.Event.KEY_UP       :
                case nexacro.Event.KEY_PAGE_UP  :
                case nexacro.Event.KEY_PAGE_DOWN: return false;
            }

            return true;
        }

        return false;
    };

    //===============================================================
    // nexacro.SimpleComponent : RTL/Locale (추후제공)
    //===============================================================

    // [상위 Component 처리]
    // Simple Component의 RTL/Locale은 ClientElement 대상으로만 처리
    // Basic Component에서만 처리되며 User Component에서는 별도 처리가 없다.

    // 상세 추후 추가


    // [하위 Component 처리]
    // Basic Component에서만 RTL Interface 일부 Override 처리

    // 상세 추후 추가


    //===============================================================
    // nexacro.SimpleComponent : Status
    //===============================================================

    // [Simple Component 처리]
    // 상태는 기본적으로 Basic Component에서 모두 제공하도록 구성
    // User Component에서는 추가된 UserStatus를 사용만 코딩하며 Metainfo에만 노출
    // 명시적인 상태를 추가하려면 Property/Method Interface를 이용하여 처리한다.

    // [component.status:init]
    _pSimpleComponent._initStatus = function ()     // Basic Component 에서 Override
    {
        /*
        this._sysstatus = null;                     // Stock Sys Status 값 변경시 설정
        this._usrstatus = null;                     // Stock Usr Status 값 변경시 설정
        */
        this._onInitStatus();                       // User Status 추가시 Override
    };

    // [component.status:init]                      // User Component는 이 Override를 아직 허용하지 않음
    _pSimpleComponent._onInitStatus = function ()
    {
        // status init logic
        /*
        this._sysstatus = null;                     // Stock Sys Status 값 변경시 설정
        this._usrstatus = null;                     // Stock Usr Status 값 변경시 설정
        */
    };

    /* resetStatus로 대체 
    // [component.status:init]                      // User Component는 이 Override를 아직 허용하지 않음
    _pSimpleComponent._prepareStatus = function ()
    {
        var enable = this._isEnable();

        if ((this._real_enable == null && enable == false) || (this._real_enable && this._real_enable != enable))
        {
            this._real_enable = enable;
            this._changeStatus("disabled", !enable);
            this.on_apply_prop_enable(enable);
        }
        else
        {
            this._real_enable = enable;
            this._setAccessibilityStatFlag(this._status, this._userstatus);
        }

        if (this._status || this._userstatus)
            this._apply_status_toelement("", this._status, "", this._userstatus);
    };
    */

    // [component.status:reset]                     // User Component는 이 Override를 아직 허용하지 않음
    _pSimpleComponent._resetStatus = function ()    
    {
        this._onResetSysStatus();
        this._onResetUserStatus();
    };

    // [component.status:onreset]                   // 기본 SysStatus Check Logic이 다른 Basic Component 에서만 Override
    _pSimpleComponent._onResetSysStatus = function ()
    {
        // check real sys status
      /*if (this._use_enable_status)*/ this._onResetSysEnable();
        if (this._use_readonly_status) this._onResetSysReadOnly();

        /*
        if (this._use_parent_mouseover) this._onResetSysMouseOver();
        if (this._use_parent_focused)   this._onResetSysFocused();
        if (this._use_parent_activate)  this._onResetSysActivate();
        */
    };
    // [component.status:onchange]                  // 기본 UserStatus Check Logic이 다른 Basic Component 에서만 Override
    _pSimpleComponent._onResetUserStatus = function ()
    {
        // check real user status
        /*
        if (this._use_parent_usrstat1)  this._onResetUserStatus1();
        */
    };
    // [component.status:onchange]                  // 기본 UserStatus Check Logic이 다른 Basic Component 에서만 Override
    _pSimpleComponent._onResetAccessibilityStatus = function ()
    {
        // check real user status
        /*
        if (this._use_parent_usrstat1)  this._onResetUserStatus1();
        */
    };

    // [component.status.reset:enable]
    _pSimpleComponent._onResetSysEnable = function ()
    {
        // check real sys status
        var parent = this.parent;
        if (parent)
        {
            this._real_enable = parent._real_enable != false && this._p_enable;

            if (this._real_enable != this._p_enable)
            {
                this._changeSysStatus("disabled", !this._real_enable);
                this._spreadSysStatus("disabled", !this._real_enable);
            }
        }
    };
    // [component.status.reset:readonly]
    _pSimpleComponent._onResetSysReadOnly = function ()
    {
        // check real sys status
        var parent = this.parent;
        if (parent)
        {
            this._real_readonly = parent._real_readonly == true || this._p_readonly;

            if (this._real_readonly != this._p_readonly)
            {
                this._changeSysStatus("readonly", this._real_readonly);
                this._spreadSysStatus("readonly", this._real_readonly);
            }
        }
    };
    // [component.status.reset:userstat]
    /*
    _pSimpleComponent._onResetUserStatus1 = function ()
    {
        // check real user status
        var parent = this.parent;
        if (parent)
        {
            this._real_userstat = parent._real_userstat || this.userstat;
            this._changeUserStatus("userstat", this._real_userstat);
            this._spreadUserStatus("userstat", this._real_userstat);
        }
    };
    */

    // [component.status.sys:change]                // Override 없음
    _pSimpleComponent._changeSysStatus = function (status, value)
    {
        return this._onChangeSysStatus(status, value);
    };
    // [component.status.user:change]               // Override 없음
    _pSimpleComponent._changeUserStatus = function (status, value)         
    {
        return this._onChangeUserStatus(status, value);
    };

    // [component.status:onchange]                 // 기본 SysStatus Change Logic이 다른 Basic Component 에서만 Override
    _pSimpleComponent._onChangeSysStatus = function (status, value)
    {
        this._on_changeStatus(status, value);      // TODO:소스통합

        /*
        this._oldstatus = this._status;
        this._statusmap[status] = value;
 
        var statusmap = this._statusmap;
        var applystatus = "enabled";
 
        if (statusmap.disabled)                                         applystatus = "disabled";
        else if (statusmap._p_readonly && this._use_readonly_status)    applystatus = "readonly";
        else if (statusmap.mouseover)                                   applystatus = "mouseover";
        else if (statusmap.focused)                                     applystatus = "focused";
        else if (statusmap.deactivate)                                  applystatus = "deactivate";
 
    //  this._status = applystatus;
        this._status = this.on_changeStatus(status, value, applystatus, this._status, this._userstatus);
 
        //폼에서 마우스 다운후 드래그해서 버튼위로 올라갔을때 // TODO : Sys Real Status 예외처리는 Element Layer에서 처리
        if (this._status == "mouseover" && nexacro._cur_track_info)
            return;
 
        if (this._oldstatus != this._status)
            this._apply_status_toelement(this._oldstatus, this._status, this._olduserstatus, this._userstatus);
 
        if (this._getEnvironment()?._p_enableaccessibility)
            this._setAccessibilityStatFlag(this._status, this._userstatus);
        */
    };
    // [component.status:onchange]                 // 기본 UserStatus Change Logic이 다른 Basic Component 에서만 Override
    _pSimpleComponent._onChangeUserStatus = function (status, value)
    {
        this._on_changeUserStatus(status, value); // TODO:소스통합  

        /*
        this._olduserstatus = this._userstatus;
        this._userstatusmap[status] = value;
 
        var statusmap = this._userstatusmap;
        var applystatus = "";
 
        if (this._use_pushed_status && statusmap.pushed)            applystatus = "pushed";
        else if (this._use_selected_status && statusmap.selected)   applystatus = "selected";
 
        this._userstatus = this.on_changeUserStatus(status, value, applystatus, this._status, this._userstatus);
 
        if (this._olduserstatus != this._userstatus)
            this._apply_status_toelement(this._oldstatus, this._status, this._olduserstatus, this._userstatus);
 
        if (this._getEnvironment()?._p_enableaccessibility)
            this._setAccessibilityStatFlag(this._status, this._userstatus);
        */
    };

    // [component.status:clear]                 // Clear 처리시 Override
    _pSimpleComponent._clearStatus = function ()
    {
    };

    /*
    // [component.logic:statuschange]               // User Status는 사용자 로직에서 _changeUserStatus 호출로 처리
    _pSimpleComponent._userLogic = function ()
    {
        // [object.status:change] 
        this._changeUserStatus("userstatus1", true);// 이 User Status 값은 Metainfo에 노출되어야 함
        this._changeUserStatus("userstatus2", true);
    };
    */

    // [object.status:spread] 
    _pSimpleComponent._spreadStatus = function (statusname, statusstat)
    {
    };
    _pSimpleComponent._spreadSysStatus = function (statusname, statusstat)
    {
        return this._spreadStatus(statusname, statusstat);
    };
    _pSimpleComponent._spreadUserStatus = function (statusname, statusstat)
    {
        return this._spreadStatus(statusname, statusstat);
    };

    //===============================================================
    // nexacro.ComplexComponent : Enable (Disabled)
    //===============================================================

    // 확인 : NRE enable/disable 확인

    // [component.disabled:init]
    /*
    _pSimpleComponent._is_disabled_control = false;         // 기본 system status
    _pSimpleComponent._use_disabled_status = false;         // 기본 system status
    _pSimpleComponent._p_enable = true;                     // 기본 system status
 
    _pSimpleComponent.set_enable = function (v)
    {
        v = nexacro._toBoolean(v);
        if (v != this._p_readonly)
        {
            this._p_enable = v;
            this.on_apply_prop_enable(v);
        }
    };
    */

    _pSimpleComponent.on_apply_prop_enable = function (enable)
    {
        this._changeStatus("disabled", !enable);
        this._spreadStatus("disabled", !enable);
    };

    _pSimpleComponent._isEnable = function ()
    {
        var p_parent = this.parent;
        var p_enable = p_parent ? (p_parent._real_enable ?? nexacro.Component.prototype._isEnable.call(p_parent)) : true;

        return (p_enable) && (this._p_enable == true);
    };
    _pSimpleComponent._isDisable = function ()
    {
        return !this._isEnable();
    };

    //===============================================================
    // nexacro.ComplexComponent : Edit (Editable/ReadOnly)
    //===============================================================

    // [상위 Component 처리]
    // Editable/ReadOnly 사용시 Interface 제공
    // Edit의 실제 처리부는 Component별 구성
    // Readonly Property와 Stats는 일괄제공

    // [component.editable:init]                      
    _pSimpleComponent._is_editable_control = false;         // Editable 지원시 설정
    _pSimpleComponent._use_readonly_status = false;         // readonly 지원시 설정
    _pSimpleComponent._p_readonly = undefined;              // readonly 지원시 true/false 설정

    _pSimpleComponent.set_readonly = function (v)
    {
        v = nexacro._toBoolean(v);
        if (v !== this._p_readonly || v !== this._real_readonly)
        {
            this._p_readonly = v;
            this._real_readonly = this._p_readonly || (this.parent ? (this.parent._real_readonly ? true : false) : false);

            this.on_apply_readonly(this._real_readonly);
        }
    };
    _pSimpleComponent.on_apply_readonly = function (readonly)
    {
        this._changeStatus("readonly", readonly);
        this._spreadStatus("readonly", readonly);
    };

    _pSimpleComponent._isReadOnly = function ()
    {
        return this._isEditableComponent() && this._p_readonly == true || this._real_readonly == true;
    };
    _pSimpleComponent._isEditable = function ()
    {
        return this._isEditableComponent() && this._p_readonly != true && this._real_readonly != true;
    };
    _pSimpleComponent._isEditableComponent = function ()
    {
        return nexacro.Component.prototype._isEditableComponent.call(this) || this._p_readonly !== undefined;
    };
    _pSimpleComponent._hasEditor = function (typename)
    {
        return this._onHasEditor(typename);
    };
    _pSimpleComponent._onHasEditor = function (typename)
    {
        return false;
    };

    _pSimpleComponent._isValueComponent = function (typename)
    {
        // TODO : prototype 기준 value 체크로 변경
        /*
        var comp = nexacro[typename]; return comp && comp ? comp.hasOwnProperty("value") : false;
        */
        switch (typename) { case "checkbox": case "switch": case "edit": case "textarea": return true; default: return false; };
    };
    _pSimpleComponent._isTextComponent = function (typename)
    {
        // TODO : prototype 기준 text 체크로 변경
        /*
        var comp = nexacro[typename]; return comp && comp ? comp.hasOwnProperty("text") : false;
        */
        switch (typename) { case "button": case "static": return true; default: return false; };
    };
    _pSimpleComponent._isUrlComponent = function (typename)
    {
        // TODO : prototype 기준 value 체크로 변경
        /*
        var comp = nexacro[typename]; return comp && comp ? comp.hasOwnProperty("url") : false;
        */
        switch (typename) { case "div": case "webbrowser": case "imageviewer": case "videoplayer": return true; default: return false; };
    };

    //===============================================================
    // nexacro.ComplexComponent : Layout/Popup
    //===============================================================

    _pSimpleComponent._isPopup = function ()
    {
        return this._is_popupcontains == true; // return this._isPopupContains();
    };
    /*
    _pSimpleComponent._setPopupContains = function (is_popupcontains)
    {
        nexacro.Component.prototype._setPopupContains.call(this, is_popupcontains);
    };
    */    
    _pSimpleComponent._setContainerPopupControl = function (popupcontrol)
    {
        return this._contpopupcontrol = popupcontrol;
    };
    _pSimpleComponent._getContainerPopupControl = function ()
    {
        return this._contpopupcontrol;
    };
    _pSimpleComponent._closePopupRoot = function ()
    {
        var root = this._getPopupRootComponent(this);
        if (root)
        {
            if (root._closePopup)
                root._closePopup();

            if (root._popupcontrol)
                root._popupcontrol._closePopup();

            if (root._contpopupcontrol)
                root._contpopupcontrol._closePopup();
        }
    };
    _pSimpleComponent._closePopupLeaf = function ()
    {
        this._closePopupSelf();
    };
    _pSimpleComponent._closePopupSelf = function ()
    {
        if (this._contpopupcontrol)
            this._contpopupcontrol._closePopup();

        this._onClosePopupSelf();
    };
    _pSimpleComponent._closePopup = function ()
    {
        /*
        if (this._popupcontrol)
            this._popupcontrol._closePopup();
        */
        nexacro.Component.prototype._closePopup.call(this);

        this._onClosePopup();
    };
    _pSimpleComponent._onClosePopup = function ()
    {
    };
    _pSimpleComponent._onClosePopupSelf = function ()
    {
    };

    // TODO : Embed 지원시 Popup 구조에 기반한 Embed 구조 추가
    /*
    //===============================================================
    // nexacro.ComplexComponent : Layout/Embed
    //===============================================================

    _pSimpleComponent._isEmbed = function ()
    {
        return this._isEmbedContains() == -true;
    };
    _pSimpleComponent._isEmbedContains = function ()
    {
        return this.is_embedcontains == true;
    };
    _pComponent._setEmbedContains = function (is_embedcontains)
    {
        this.is_embedcontains = !!is_embedcontains;
    }; 
    _pSimpleComponent._setContainerEmbedControl = function (embedcontrol)
    {
        return this._contembedcontrol = embedcontrol;
    };
    _pSimpleComponent._getContainerEmbedControl = function ()
    {
        return this._contembedcontrol;
    };
    _pSimpleComponent._getEmbedControl = function ()
    {
        return this._embedcontrol;
    };
    _pSimpleComponent._closeEmbed = function ()
    {
        if (this._embedcontrol)
            this._embedcontrol._closeEmbed();

        this._onCloseEmbed();
    };
    _pSimpleComponent._onCloseEmbed = function ()
    {
    };
    */

    //===============================================================
    // nexacro.SimpleComponent : Property
    //===============================================================

    // [기본 Component 처리]
    // Component Stock이나 상위 Componnet의 DefaultValue를 바꾸고자 하면 Override 하여 처리

    // [component.property:init]
    _pSimpleComponent._initProperties = function ()
    {
        /*
        this.stock_prop1 = DEFAULT_VALUE;           // 이 property는 상속되는 초기값 변경처리
        this.stock_prop2 = DEFAULT_VALUE;           
        */

        // TODO : Init Prop 변경 체크
        // [component.property:init]
        this._onInitProperties();                   // Property 추가처리시 Override

        // [component.property:initvalue]
        this._onInitValueProp();                    // InitValue Init
    };
    // [component.property:apply]
    _pSimpleComponent._applyProperties = function ()
    {
        // stock prop
        this.on_apply_prop_taborder();

        if (!nexacro._isNull(this.tooltiptext))
            this.on_apply_prop_tooltip();

        this.on_apply_positionstep();

        if (this._hittest_type)
            this.on_apply_hittesttype();

        if (this._is_locale_control)
            this._setLocale(this._getForm()._locale);
        
        if (!nexacro._isNull(this.readonly))
            this.on_apply_readonly();

        // override prop
        this._onApplyProperties();                  // Property 추가처리시 Override

        this.on_apply_prop_stringresource();
    };
    // [component.property:update]                  // Property 추가처리시 Override
    _pSimpleComponent._updateProperties = function ()
    {
        // override prop
        return this._onUpdateProperties();
    };
    // [component.property:clear]
    _pSimpleComponent._clearProperties = function ()
    {
        /*
        this.on_clear_stock_prop1();                // Component Stock Normal Property Clear
        this.on_clear_stock_prop2();
        */
        this._onClearProperties();                  // 별도의 clear 처리시 Override
    };

    // [기본 Component 처리]
    // 비상속 Property 처리
    // Primitive형 Property이면 생성만 처리
    // new/delete가 요구되는 Property이면 생성/삭제까지 처리

    // [component.property:init]                        // initvalue 처리, no override, TODO:소스통합
    _pSimpleComponent._onInitValueProp = function ()
    {
        //  this._on_apply_setpropinitfn();             // InitValue Init
    };

    // [component.property:init]                        // Property 추가시 Override
    _pSimpleComponent._onInitProperties = function ()
    {
        /*
        this.property1 = true;
        this.property2 = false;
        this.property3 = false;
        */
    };
    // [component.property:apply]        // Property 추가시 Override
    _pSimpleComponent._onApplyProperties = function ()
    {
        /*
        this.on_apply_property1();
        this.on_apply_property2();
        this.on_apply_property3();
        */
    };
    // [component.property:apply]        // Property 추가시 Override : dynamic prop
    _pSimpleComponent._onUpdateProperties = function ()
    {
        /*
        this.on_update_property1();
        this.on_update_property2();
        this.on_update_property3();
        */

        return false;
    };
    // [component.property:clear]        // Property 추가시 별도의 clear 처리일때 Override
    _pSimpleComponent._onClearProperties = function ()
    {
        // clear property
        /*
        this.on_clear_property1();
        this.on_clear_property2();
        this.on_clear_property3();
        */
    };

    /*
    // [component.property:init]
    _pSimpleComponent.proeprty1 = true;
 
    // [component.property:set]                     // readonly 아닌 Property 추가시 생성
    _pSimpleComponent.set_property1 = function (v)
    {
        // property check
        if (this.property1 != v)
        {
            // property set & type value check
            this.property1 = nexacro._toBoolean(v);
 
            // apply property
            this.on_apply_property1();
        }
    };
 
    // [object.property:apply]                      // readonly 아닌 Property 추가시 생성
    _pSimpleComponent.on_apply_property1 = function ()
    {
        // property apply user logic
        if (this.property1)
        {
            ;
        }
    };
 
    // [object.property:clear]                      // 별도의 property 개별 clear 처리시 생성
    _pSimpleComponent.on_clear_property1 = function ()
    {
        // property clear user logic
        this.property1 = null;
    };
    */

    //===============================================================
    // nexacro.SimpleComponent : Methods
    //===============================================================

    // [개별 Component 처리]
    // Method 추가 처리
    // Status 를 명시적으로 추가하고자 할때에는 Proeprty/Method로 처리

    // [method:click]
    _pSimpleComponent.click = function ()
    {
        // method user logic

        // [event:call]
        this.on_fire_onclick("none", false, false, false, -1, -1, -1, -1, -1, -1, this, this);
    };

    /*
    // [method:get]
    _pSimpleComponent.getAMethod = function ()
    {
        // [property:get]
        return this._A;
    };
 
    // [method:set]
    _pSimpleComponent.setAStatus = function (v)
    {
        // [property:set]
        var ret = this._A;
        this._A = v;
 
        // [status:change]
        this._changeUserStatus("Status1", v);
 
        return ret;
    };
    */

    //===============================================================
    // nexacro.SimpleComponent : Events
    //===============================================================

    // [개별 Component 처리]
    // 기본 System Event Handler는 Basic Component에서 모두 처리하며 User Component에서 이의 수정은 제공하지 않는다.
    // 모든 Event Handler는 Override 가능한 FireAction/DefaultAction/BasicAction Handler를 제공한다.
    // 이벤트 하위추가는 기존 event_list을 재정의하여 추가
    // 이벤트 하위삭제는 없으며, Metainfo에서만 삭제처리
    // EventInfo 변경, Action 변경시 Override 처리
    // Element 코드는 반드시 Basic Component에서만 허용

    // [component.event:init]
    _pSimpleComponent._initEvents = function ()     // Event 추가시 Override
    {
        // ListView 확인하여 Prototype으로 이동
        this._event_list =
        {
            "onkillfocus": 1, "onsetfocus": 1,
            "oninput": 1, "onkeydown": 1, "onkeyup": 1,
            "onclick": 1, "ondblclick": 1,
            "onlbuttondown": 1, "onlbuttonup": 1, "onrbuttondown": 1, "onrbuttonup": 1, "onmousedown": 1, "onmouseup": 1,
            "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1,
            "onmousewheel": 1,
            "ondrag": 1, "ondragenter": 1, "ondragleave": 1, "ondragmove": 1, "ondrop": 1,
            "onmove": 1, "onsize": 1,
            "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
            "oncontextmenu": 1

            // [event:init]
            // "onnewevent": 1
        };

        // [event:init]
        // this._event_list["onnewevent"] = 1;

        // 현재 Event 추가 방식 유지시 이 Override는 없음
        // this._onInitEvents();                            
    };

    // TODO : Event Action Handler Normalize
    // 기존 Event Action normalize
    // 형식일반화

    // [component.clickevent:basicaction]
    _pSimpleComponent._on_basic_onclick = function (obj, e)
    {
        // basic action
        return this.on_click_basic_action(null, e.button, e.alt_key, e.ctrl_key, e.shift_key, e.screenX, e.screenY, e.canvasX, e.canvasY/*, e.clientX, e.clientY*/, e.meta_key);
    };
    // [component.clickevent:defaultaction]
    _pSimpleComponent._on_default_onclick = function (obj, e)
    {
        // user default action
        //  return this.on_click_default_action(null, e.button, e.alt_key, e.ctrl_key, e.shift_key, e.screenX, e.screenY, e.canvasX, e.canvasY/*, e.clientX, e.clientY*/);
    };
    // [component.clickevent:fireevent]
    _pSimpleComponent._on_fire_onclick = function (obj, e)
    {
        if (this.onclick && this.onclick._has_handlers)
        {
            // [component.eventinfo:create]         // User EventInfo 코드
            return this.onclick._fireEvent(this, new nexacro.ClickEventInfo(this, "onclick", e.button, e.alt_key, e.ctrl_key, e.shift_key, e.screenX, e.screenY, e.canvasX, e.canvasY, e.clientX, e.clientY, this, e.from_refer_comp, e.meta_key));
        }
        return true;
    };

    // 기존 Event Action override
    // 동작을 변경하거나 EventInfo를 변경할때 Override하여 처리
    /*
    // [component.clickevent:basicaction]
    _pSimpleComponent.on_click_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY)
    {
        // user basic action
    };
    // [component.clickevent:defaultaction]
    _pSimpleComponent.on_click_default_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY)
    {
        // user default action
    };
    // [component.clickevent:fireevent]
    _pSimpleComponent.on_fire_onclick = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onclick && this.oneditclick._has_handlers)
        {
            // [component.eventinfo:create]         // User EventInfo 코드
            var evt = new nexacro.MyClickEventInfo(this, "onclick", caretpos, button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientXY[0], clientXY[1], this, this);
            return this.onclick._fireEvent(this, evt);
        }
        return true;
    };
 
    // [component.mouseevent:fireevent]             // Event Override (왜 따로하지?)
    _pSimpleComponent.on_fire_sys_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var rootComp = this._getRootComponent(from_comp);
 
            // [event:eventinfo]                    // User EventInfo 코드
            var evt = new nexacro.UserMouseEventInfo(rootComp, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);
 
            return this.onmouseup._fireSysEvent(this, evt);
        }
        return false;
    };
    // [component.mouseevent:fireevent]             // Event Override (왜 따로하지?)
    _pSimpleComponent.on_fire_user_onmouseup = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp)
    {
        if (this.onmouseup && this.onmouseup._has_handlers)
        {
            var rootComp = this._getRootComponent(from_comp);
 
            // [component.eventinfo:create]         // User EventInfo 코드
            var evt = new nexacro.UserMouseEventInfo(rootComp, "onmouseup", button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp);
 
            return this.onmouseup._fireUserEvent(this, evt);
        }
        return false;
    };
    */

    //===============================================================
    // nexacro.SimpleComponent : Accessibility (추후제공)
    //===============================================================

    // [Simple Component 처리]
    // 접근성용 Interface 일부 Override 처리
    _pSimpleComponent._initAccessibility = nexacro._emptyFn;
    _pSimpleComponent._clearAccessibility = nexacro._emptyFn;

    /* 접근성 JS로 이동
    // [component.accessibility:init]
    _pSimpleComponent._initAccessibility = function ()    // Basic Component 에서 Override
    {
        this._accessibility_role = "RoleName";      // Basic Component 에서 Role 지정
    
        //  this._onInitAccessibility();                // User Accessibility 처리시 Override
    };
 
    // [object.accessibility.role:get]
    _pSimpleComponent._getAccessibilityRole = function ()
    {
        var role = this._p_accessibilityrole ? this._p_accessibilityrole : this._accessibility_role;
        if (!role) role = "none";
        return role;
    };
 
    // [component.accessibility.label:get]
    _pSimpleComponent._getAccessibilityLabel = function ()
    {
        var label = this._getLinkedLabel(this._p_accessibilitylabel);
        return label ? label : this.on_get_accessibility_label();
    };
 
    // [component.accessibility:apply]
    _pSimpleComponent._applyAccessibility = function ()    // Basic Component 에서 Override
    {
        if (this._getEnvironment()?._p_enableaccessibility)
            this.on_apply_accessibility();
    };
    // [component.accessibility:clear]
    _pSimpleComponent._clearAccessibility = function ()    // Basic Component 에서 Override
    {
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            var application = nexacro.getApplication();
            if (application && application._a11yHistoryList)
            {
                application._remove_accessibility_history(this);
            }
        }
    };
 
    // [하위 Component 처리]
    // 접근성용 Interface 일부 Override 처리
 
    // [component.accessibility.label:get]
    _pSimpleComponent.on_get_accessibility_label = function ()
    {
        var label = this._p_text ? this._p_text : this._p_value;
        return label;
    };
    // [component.accessibility.role:getadd]
    _pSimpleComponent._onGetAccessibilityAdditionalRole = function ()
    {
        return " addrole";      // TODO:공백없이 추가되도록
    };
    */
    // 상세 추후 추가


    //===============================================================
    // nexacro.SimpleComponent : Inner Logic
    //===============================================================

    _pSimpleComponent._getParentElement = function ()
    {
        return (!this._is_window && this.parent) ? this.parent._control_element : null;
    };

    //===============================================================
    // nexacro.SimpleComponent : Util Logic
    //===============================================================

    // Percent/EM/REM 처리
    // TODO: 단위나 정밀도가 확대되면 prop.cvalue 대신 prop.value + prop.unit 구조를 사용할 것

    _pSimpleComponent._chkPercent           = function (p)      { return (p && p.unit == nexacro._UnitConst.SIZEUNIT_PERCENT); };
    _pSimpleComponent._chkREM               = function (p)      { return (p && p.unit == nexacro._UnitConst.SIZEUNIT_REM);     };
    _pSimpleComponent._chkEM                = function (p)      { return (p && p.unit == nexacro._UnitConst.SIZEUNIT_EM);      };

    _pSimpleComponent._chkAutoFitVal        = function (v)      { return (  v ==   -1                         ); };     // -1           : AutoSize/AutoFit
    _pSimpleComponent._chkAbstVal           = function (v)      { return ( !v ||  (-0.1 >= v && v >=  0.1)    ); };     // nexacro._UnitConst.SIZEEDGE_REL
    _pSimpleComponent._chkReltVal           = function (v)      { return (  v &&   -0.1 <  v && v <   0.1     ); };     // nexacro._UnitConst.SIZEEDGE_REL
    _pSimpleComponent._chkPercentVal        = function (v)      { return (/*v &&*/  0   <  v && v <   0.1     ); };     // nexacro._UnitConst.SIZEEDGE_REL
    _pSimpleComponent._chkRemEmVal          = function (v)      { return (/*v &&*/ -0.1 <  v && v <   0       ); };     // nexacro._UnitConst.SIZEEDGE_REL
    _pSimpleComponent._chkRemVal            = function (v)      { return (/*v &&*/ -0.1 <  v && v <= -0.000001); };     // nexacro._UnitConst.SIZEEDGE_RELSUB
    _pSimpleComponent._chkEmVal             = function (v)      { return (/*v &&*/  0   >  v && v >  -0.000001); };     // nexacro._UnitConst.SIZEEDGE_RELSUB

    _pSimpleComponent._valAutoFit           = function (v, c)   { return (v == -1 && c); };                             // -1           : AutoSize/AutoFit & Valid Control

    _pSimpleComponent._convPercentVal       = function (v, b)   { return           (v *  100        * b); };            //  100         : nexacro._UnitConst.SIZERATE_PERCENT / 100
    _pSimpleComponent._convPercentValFloor  = function (v, b)   { return Math.floor(v *  100        * b); };            //  100         : nexacro._UnitConst.SIZERATE_PERCENT / 100
    _pSimpleComponent._convRemVal           = function (v, b)   { return           (v * -10000      * b); };            // -10000       : nexacro._UnitConst.SIZERATE_REM / 1
    _pSimpleComponent._convRemValFloor      = function (v, b)   { return Math.floor(v * -10000      * b); };            // -10000       : nexacro._UnitConst.SIZERATE_REM / 1
    _pSimpleComponent._convEmVal            = function (v, b)   { return           (v * -1000000000 * b); };            // -1000000000  : nexacro._UnitConst.SIZERATE_EM / 1
    _pSimpleComponent._convEmValFloor       = function (v, b)   { return Math.floor(v * -1000000000 * b); };            // -1000000000  : nexacro._UnitConst.SIZERATE_EM / 1

    _pSimpleComponent._convReltValue = function (v, b)
    {
        if (this._chkPercentVal(v)) return this._convPercentVal(v, b);
        if (this._chkRemVal(v))     return this._convRemVal(v, this._getRootFontSize());
        if (this._chkEmVal(v))      return this._convEmVal(v,  this._getBaseFontSize());
        else                        return v;
    };
    _pSimpleComponent._convReltValueFloor = function (v, b)
    {
        if (this._chkPercentVal(v)) return this._convPercentValFloor(v, b);
        if (this._chkRemVal(v))     return this._convRemValFloor(v, this._getRootFontSize());
        if (this._chkEmVal(v))      return this._convEmValFloor(v,  this._getBaseFontSize());
        else                        return v;
    };
    _pSimpleComponent._convCValue = function (v, b)
    {
        if (this._chkAbstVal(v))    return v;
        else                        return this._convReltValue(v, b);
    };
    _pSimpleComponent._convCValueFloor = function (v, b)
    {
        if (this._chkAbstVal(v))    return v;
        else                        return this._convReltValueFloor(v, b);
    };
    _pSimpleComponent._convCtrlValue = function (v, b, c)
    {
        if (this._valAutoFit(v,c))  return this._getCtrlFitSize(v,b,c);
        if (this._chkAbstVal(v))    return v;
        else                        return this._convReltValue(v, b);
    };
    _pSimpleComponent._convCtrlValueFloor = function (v, b, c)
    {
        if (this._valAutoFit(v,c))  return this._getCtrlFitSize(v, b, c);
        if (this._chkAbstVal(v))    return v;
        else                        return this._convReltValueFloor(v, b);
    };
    // TODO : 메모리 최적화
    _pSimpleComponent._setReltComp = function (reltcomp) { this._refer_relt_comp = reltcomp; }; // 소속하위의 relsize 기준 comp
    _pSimpleComponent._setReltBase = function (reltbase) { this._refer_relt_base = reltbase; }; // 자신의 %,em 정보의 기준 comp
    _pSimpleComponent._getReltComp = function ()         { return this._refer_relt_comp; };
    _pSimpleComponent._getReltBase = function ()         { return this._refer_relt_base; };

    _pSimpleComponent._getReltWidth = function (basesize)
    {
        return this._refer_relt_base ? this._refer_relt_base.getOffsetWidth()  : basesize;
    };
    _pSimpleComponent._getReltHeight = function (basesize)
    {
        return this._refer_relt_base ? this._refer_relt_base.getOffsetHeight() : basesize;
    };
    _pSimpleComponent._getReferenceAbsoluteFont = function ()
    {
        if (nexacro._isNullEmpty(this._refer_relt_base)) 
            return nexacro.Component.prototype._getReferenceAbsoluteFont.call(this); 
        else
            return this._refer_relt_base._getReferenceAbsoluteFont();
    };
    _pSimpleComponent._getRootFontSize = function ()
    {
        if (!this._refer_root_font)
             this._refer_root_font = this._getRootObject()._getReferenceAbsoluteFont();

        return this._refer_root_font ? this._refer_root_font._size : 12;
    };
    _pSimpleComponent._getBaseFontSize = function ()
    {
        if (!this._refer_base_font)
             this._refer_base_font = this._getReferenceAbsoluteFont();

        return this._refer_base_font ? this._refer_base_font._size : 12;
    };
    _pSimpleComponent._getCtrlFitSize = function (ctrl, size, set)
    {
        var fs = [undefined, undefined];

        if (ctrl)
        {
            var bw = size[0];
            var bh = size[1];
            var fw = this._chkAutoFitVal(bw);
            var fh = this._chkAutoFitVal(bh);

            if (fw || fh)
            {
                if (fw && fh) { if (set) { ctrl.resize(bw, bh); } ctrl.set_fitToContents("both");   fs    = ctrl._on_getFitSize();    }
                else if (fw)  { if (set) { ctrl.set_height(bh); } ctrl.set_fitToContents("width");  fs[0] = ctrl._on_getFitSize()[0]; }
                else if (fh)  { if (set) { ctrl.set_width(bw);  } ctrl.set_fitToContents("height"); fs[1] = ctrl._on_getFitSize()[1]; }
            }
        }

        return fs;
    };
    _pSimpleComponent._clone = function ()
    {
        return nexacro._clone(this);
    };

    _pSimpleComponent._setPositionOrigin = function ()
    {
        var elem = this.getElement();
        if (elem && elem.handle)
        {
            var l = this.getOffsetLeft();
            var t = this.getOffsetTop();

            elem.setElementPosition(l, t);
        }
    };
    _pSimpleComponent._setPositionAdjust = function (l, t)
    {
        if (l == undefined || t == undefined) return;

        var elem = this.getElement();
        if (elem && elem.handle)
        {
            l += this.getOffsetLeft();
            t += this.getOffsetTop();

            elem.setElementPosition(l, t);
        }
    };
    _pSimpleComponent._setPositionAbsolute = function (ownc, zorder)
    {
        if (!ownc) return;

        var elem = this.getElement();
        var owne = ownc.getElement();

        if (elem && owne && elem.handle && owne.handle)
        {
            var ownt = owne.getContainerElement(elem.position_step);
            if (ownt)
            {
                this._moveElementNode(elem, elem.owner_elem, ownt, false, true);
            }
            else
            {
                elem.setElementZIndex(zorder);
            }

            this._setPositionOrigin();
        }
    };
    _pSimpleComponent._setPositionFixed = function (ownc, l, t, above)
    {
        if (!ownc) return;

        var elem = this.getElement();
        var owne = ownc.getElement();
        var fixd = above < 0 || above === undefined;

        if (elem && owne && elem.handle && owne.handle)
        {
            if (fixd)
            {
                this._moveElementNode(elem, elem.owner_elem, owne, true, false);
            }
            else
            {
                owne.bringToFrontElement(elem);
            }

            // TODD : SpinBar/ExpandBar Inside FixedItem Layout : Exchange Position --> NCLayout 
            if (fixd)
            {
                var ebar = ownc.expandbar;
                var hbar = ownc.hspinbar;
                var vbar = ownc.vspinbar;
                var ctrl;
                if (l !== undefined)
                {
                    ctrl = (ebar && ebar._p_visible) ? ebar :
                        (hbar && hbar._p_visible) ? hbar : null;

                    if (ctrl)
                    {
                        var nl = ctrl.getOffsetLeft();
                        var il = this.getOffsetLeft();
                        var nr = ctrl.getOffsetRight();
                        var ir = this.getOffsetRight();

                        switch (above)
                        {
                            case -1:   // lead horz inside : [ncfixeditem-ncctrl]-item
                                if (nl <= il)
                                {
                                    this.move(nl,                       this.getOffsetTop());
                                    ctrl.move(this.getOffsetRight(),    ctrl.getOffsetTop());
                                }
                                break;
                            case -2:   // tail horz inside : item-[ncctrl-ncfixeditem]
                                if (nl >= il || ir <= nr)
                                {
                                    var cw = nr - nl;
                                    var fl = ownc._getClientWidth() - (ir - il);

                                    ctrl.move(fl,                       ctrl.getOffsetTop());
                                    this.move(fl + cw,                  this.getOffsetTop());
                                }
                                break;
                            case -3:   // lead horz outside : [ncctrl-ncfixeditem]-item
                                if (nl >= il)
                                {
                                    ctrl.move(il,                       ctrl.getOffsetTop());
                                    this.move(ctrl.getOffsetRight(),    this.getOffsetTop());
                                }
                                break;
                            case -4:   // tail horz outside : item-[ncfixeditem-ncctrl]
                                if (nl <= il)
                                {
                                    this.move(nl,                       this.getOffsetTop());
                                    ctrl.move(this.getOffsetRight(),    ctrl.getOffsetTop());
                                }
                                break;
                            case -5:   // full horz lead inside : [ncfixeditem-ncctrllead-item-ncctrltail]-ncfixeditem
                                if (nl <= il)
                                {
                                    this.move(nl,                       this.getOffsetTop());
                                    ctrl.move(this.getOffsetRight(),    ctrl.getOffsetTop(),    ctrl.getOffsetWidth() - this.getOffsetWidth(),  ctrl.getOffsetHeight());
                                }
                                break;
                            case -6:   // full horz tail inside : ncfixeditem-[ncctrllead-item-ncctrltail-ncfixeditem]
                                if (nr >= ir)
                                {
                                    ctrl.move(nl,                       ctrl.getOffsetTop(),    ctrl.getOffsetWidth() - this.getOffsetWidth(),  ctrl.getOffsetHeight());
                                    this.move(ctrl.getOffsetRight(),    this.getOffsetTop());
                                }
                                break;
                            case -7:   // full horz lead outside : [ncctrllead-ncfixeditem]-item-ncfixeditem-ncctrltail
                                if (nl >= il)
                                {
                                    this.set_left(il + ctrl._getOffsetLead());
                                }
                                break;
                            case -8:   // full horz tail outside : ncctrllead-ncfixeditem-item-[ncfixeditem-ncctrltail]
                                if (nr <= ir)
                                {
                                    this.set_left(il - ctrl._getOffsetTail());
                                }
                                else
                                {
                                    this.set_left(nr - ctrl._getOffsetTail() - this.getOffsetWidth());
                                }
                                break;
                            case -9:   // lead horz fit : [ncfixeditem]-item-ncctrl
                                if (il > 0)
                                {
                                    this.move(0,                this.getOffsetTop());
                                }
                                break;
                            case -10:   // tail horz fit : ncctrl-item-[ncfixeditem]
                                var ow = ownc._getClientWidth() + ctrl.getOffsetWidth();
                                if (ir < ow)
                                {
                                    this.move(ow - (ir - il),   this.getOffsetTop());
                                }
                                break;
                        }
                    }

                    return;
                }
                if (t !== undefined)
                {
                    ctrl = (ebar && ebar._p_visible) ? ebar :
                        (vbar && vbar._p_visible) ? vbar : null;

                    if (ctrl)
                    {
                        var nt = ctrl.getOffsetTop();
                        var it = this.getOffsetTop();
                        var nb = ctrl.getOffsetBottom();
                        var ib = this.getOffsetBottom();

                        switch (above)
                        {
                            case -1:   // lead vert inside : [ncfixeditem-ncctrl]-item
                                if (nt <= it)
                                {
                                    this.move(this.getOffsetLeft(), nt);
                                    ctrl.move(ctrl.getOffsetLeft(), this.getOffsetBottom());
                                }
                                break;
                            case -2:   // tail vert inside : item-[ncctrl-ncfixeditem]
                                if (nt >= it || ib <= nb)
                                {
                                    var ch = nb - nt;
                                    var ft = ownc._getClientHeight() - (ib - it);

                                    ctrl.move(ctrl.getOffsetLeft(), ft);
                                    this.move(this.getOffsetLeft(), ft + ch);
                                }
                                break;
                            case -3:   // lead vert outside : [ncctrl-ncfixeditem]-item
                                if (nt >= it)
                                {
                                    ctrl.move(ctrl.getOffsetLeft(), it);
                                    this.move(this.getOffsetLeft(), ctrl.getOffsetBottom());
                                }
                                break;
                            case -4:   // tail vert outside : item-[ncfixeditem-ncctrl]
                                if (nt <= it)
                                {
                                    this.move(this.getOffsetLeft(), nt);
                                    ctrl.move(ctrl.getOffsetLeft(), this.getOffsetBottom());
                                }
                                break;
                            case -5:   // full vert lead inside : [ncfixeditem-ncctrllead-item-ncctrltail]-ncfixeditem
                                if (nt <= it)
                                {
                                    this.move(this.getOffsetLeft(), nt);
                                    ctrl.move(ctrl.getOffsetLeft(), this.getOffsetBottom(), ctrl.getOffsetWidth(), ctrl.getOffsetHeight() - this.getOffsetHeight());
                                }
                                break;
                            case -6:   // full vert tail inside : ncfixeditem-[ncctrllead-item-ncctrltail-ncfixeditem]
                                if (nb >= ib)
                                {
                                    ctrl.move(ctrl.getOffsetLeft(), nt, ctrl.getOffsetWidth(), ctrl.getOffsetHeight() - this.getOffsetHeight());
                                    this.move(this.getOffsetLeft(), ctrl.getOffsetBottom());
                                }
                                break;
                            case -7:   // full vert lead outside : [ncctrllead-ncfixeditem]-item-ncfixeditem-ncctrltail
                                if (nt >= it)
                                {
                                    this.set_top(it + ctrl._getOffsetLead());
                                }
                                break;
                            case -8:   // full vert tail outside : ncctrllead-ncfixeditem-item-[ncfixeditem-ncctrltail]
                                if (nb <= ib)
                                {
                                    this.set_top(it - ctrl._getOffsetTail());
                                }
                                else
                                {
                                    this.set_top(nb - ctrl._getOffsetTail() - this.getOffsetHeight());
                                }
                                break;
                            case -9:   // lead vert fit : [ncfixeditem]-item-ncctrl
                                if (it > 0)
                                {
                                    this.move(this.getOffsetLeft(), 0);
                                }
                                break;
                            case -10:   // tail vert fit : ncctrl-item-[ncfixeditem]
                                var oh = ownc._getClientHeight() + ctrl.getOffsetHeight();
                                if (ib < oh)
                                {
                                    this.move(this.getOffsetLeft(), oh - (ib - it));
                                }
                                break;
                        }
                    }

                    return;
                }
            }

            this._setPositionAdjust(l, t);
        }
    };

    _pSimpleComponent._moveElementNode = function (elem, srce, tare, srcc, tarc)
    {
        if (elem && elem.owner_elem != tare)
        {
            elem.owner_elem = tare;

            var setn = elem.handle;
            var srcn = srcc ? srce.dest_handle : srce.handle;
            var tarn = tarc ? tare.dest_handle : tare.handle;

            if (srcn && tarn)
            {
                nexacro.__unlinkDOMNode(srcn, setn);
                nexacro.__appendDOMNode(tarn, setn);
            }
        }
    };

    _pSimpleComponent = null;
}


if (!nexacro._CompUtil) 
{
    //==============================================================================
    // nexacro._CompUtil for ComBaseEx
    //==============================================================================

    // [추가 Utility 처리]
    // SimpleComponent/ComplexComponent용 Utility Function Set

    nexacro._CompUtil = true;

    if (nexacro.Component)
    {
        var _pComponent = nexacro.Component.prototype;

        // [util.combase.prop:display]             // TODO:-->ComBase default prop
        _pComponent.set_presence = function (v)
        {
            if (v != this._p_visible)
            {
                if (v)
                {
                    if (this.__w && this.__h)
                        this.resize(this.__w, this.__h);
                    else
                        this.move(this.__l, this.__t, this.__r, this.__b, this.__w, this.__h);

                    this.set_visible(v);
                }
                else
                {
                    this.set_visible(v);

                    this.__w = this._p_width;
                    this.__h = this._p_height;
                    this.__t = this._p_top;
                    this.__b = this._p_bottom;
                    this.__l = this._p_left;
                    this.__r = this._p_right;

                    this.resize(0, 0);
                }
            }
        };
        // [util.combase.prop:useeffect]        // TODO:-->ComBase default prop
        _pComponent.set_useeffect = function (v)
        {
            if (v != this._p_useeffect)
            {
                this._p_useeffect = v;
                this._use_effect = v !== undefined ? nexacro._toBoolean(v) : v;
            }        
        };
        _pComponent._isUseEffect = function (chkenv)
        {
            return this._use_effect ?? (chkenv ? (this._getEnvironment()?._use_effect ?? false) : undefined);
        };

        Object.defineProperty(_pComponent, "presence",  { get: _pComponent.get_visible,  set: _pComponent.set_presence,  enumerable: false, configurable: false });
        Object.defineProperty(_pComponent, "useeffect", { get: _pComponent._isUseEffect, set: _pComponent.set_useeffect, enumerable: false, configurable: false });
    }

    // [util.scope.global:get]                 // TODO:Get Runtime Global Scope
    nexacro._getGlobalScope = function ()
    {
        return null;    // MFE GlobalScope 변경으로 사용하지 않도록 null로 수정됨 // return nexacro.__getOSType ? null : window;
    };
    // [util.scope.nexacro:get]                // TODO:Get Runtime Custom Scope
    nexacro._getCustomScope = function (scope)
    {
        return nexacro; // eval(scope); 
    };

    // [util.scope.construct:get]          // TODO: Cache for Except Type Search
    nexacro._getTypeConstructor = function (_type, _deftype)
    {
        // check default type
        if (!_type) _type = _deftype;

        /*
        if (!_type.includes("."))               // TODO: Cache for Except String Search
        {
            // get type construct
            return nexacro[_type];
        }
        else
        */
        {
            // find constructor scope/type      // TODO: Cache for Except String Split & Type Search
            var parts = _type.split('.');
            var index = 0;
            var final = parts.length - 1;
            var tname = parts[final];
            var scope = nexacro._getGlobalScope(); // TODO: Check Dynamic Object Create All Browser

            if (!scope)
            {
                scope = nexacro._getCustomScope(parts[0]); // TODO: Check Custom Scope
                index = 1;
            }

            if (scope)
            {
                for (; index < final; index++)
                {
                    scope = scope[parts[index]];
                }

                return scope[tname];
            }
        }

        return null;
    };

    // [util.json:getjson]
    nexacro._getJson = function (some, nil)
    {
        return some ? (nexacro._isObject(some) || nexacro._isArray(some)) ? some : JSON.parse(some) : nil;
    };
    // [util.array:getarray]
    nexacro._getArray = function (some)
    {
        return nexacro._isArray(some) ? some : [some];
    };
    // [util.array:clonearray]
    nexacro._getCloneArray = function (array)
    {
        return array.slice(0, -1);
    };
    // [util.array:newarray]
    nexacro._getNewArray = function (count, defval)
    {
        return new Array(count).fill(defval);
    };
    // [util.array:subarray]
    nexacro._getSubArray = function (array, start, count)
    {
        return array.slice(start, count >= 0 ? start + count : -1);
        /*
        var ret = [];
        for (var i = Math.max(start, 0), l = Math.min(start + count, array.length); i < l; i++)
        {
            ret.push(array[i]);
        }
        return ret;
        */
    };
    // [util.boolen:check boolean]
    nexacro._isSetFalse = function (v)
    {
        return (v !== undefined) && (v === 0 || v === "0" || v === "false");
    };
    nexacro._isSetTrue = function (v)
    {
        return (v !== undefined) && (v !== 0 && v !== "0"); // v === "true"
    };
    nexacro._chkFalse = function (v)
    {
        return !v;
    };
    nexacro._chkTrue = function (v)
    {
        return !!v;
    };
    // [util.array:check null/undefined/empty]
    nexacro._isNullEmpty = function (v)
    {
        return (v === null || v === undefined || v === "");
    };
    // [util.string:check char keycode]
    nexacro._isChar = function (keyCode)
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
    // [util.number:convertfixednumber]
    nexacro._toFixed1 = function (n) { return Math.round(n * 10) / 10; };
    nexacro._toFixed2 = function (n) { return Math.round(n * 100) / 100; };
    nexacro._toFixed3 = function (n) { return Math.round(n * 1000) / 1000; };
    nexacro._toFixed4 = function (n) { return Math.round(n * 10000) / 10000; };
    nexacro._toFixed5 = function (n) { return Math.round(n * 100000) / 100000; };
    // [util.number:check cross rct]
    nexacro._checkCrossRect = function (l1, t1, r1, b1, l2, t2, r2, b2, chksame)
    {
        return chksame  ? (l1 <= r2 && r1 >= l2 && t1 <= b2 && b1 >= t2)
                        : (l1 <  r2 && r1 >  l2 && t1 <  b2 && b1 >  t2);
    };
    nexacro._checkCrossRectFixed0 = function (l1, t1, r1, b1, l2, t2, r2, b2, chksame)
    {
        return chksame  ? (Math.round(l1) <= Math.round(r2) && Math.round(r1) >= Math.round(l2) && Math.round(t1) <= Math.round(b2) && Math.round(b1) >= Math.round(t2))
                        : (Math.round(l1) <  Math.round(r2) && Math.round(r1) >  Math.round(l2) && Math.round(t1) <  Math.round(b2) && Math.round(b1) >  Math.round(t2));
    };
    nexacro._checkCrossRectFixed2 = function (l1, t1, r1, b1, l2, t2, r2, b2, chksame)
    {
        return chksame  ? (nexacro._toFixed2(l1) <= nexacro._toFixed2(r2) && nexacro._toFixed2(r1) >= nexacro._toFixed2(l2) && nexacro._toFixed2(t1) <= nexacro._toFixed2(b2) && nexacro._toFixed2(b1) >= nexacro._toFixed2(t2))
                        : (nexacro._toFixed2(l1) <  nexacro._toFixed2(r2) && nexacro._toFixed2(r1) >  nexacro._toFixed2(l2) && nexacro._toFixed2(t1) <  nexacro._toFixed2(b2) && nexacro._toFixed2(b1) >  nexacro._toFixed2(t2));
    };

    // [util.property]
    // Property parsing을 위한 Utility

    nexacro._UnitConst =
    {
        SIZEUNIT_PIXEL  : 0x00,         // pixel    unit
        SIZEUNIT_PERCENT: 0x01,         // percent  unit
        SIZEUNIT_REM    : 0x02,         // rem      unit
        SIZEUNIT_EM     : 0x03,         // em       unit

        SIZERATE_PIXEL  : 1,            // pixel    1:1           100px --> 100       999px --> 999         1px --> 1           0.01px --> 0.01                                                 rate = convertrate= 1:1   * calibration=1:1
        SIZERATE_PERCENT: 0.0001,       // perent   1/ 10000      100%  --> 0.01      999%  --> 0.0999      1%  --> 0.0001      0.01%  --> 0.000001        conv ==> base*value* 100             rate = convertrate= 1:100 * calibration=1:100
        SIZERATE_REM    :-0.0001,       // rem      1/-10000      100rem-->-0.01      999rem-->-0.0999      1rem-->-0.0001      0.01rem-->-0.000001        conv ==> base*value*-10000           rate = convertrate= 1:1   * calibration=1:10000
        SIZERATE_EM     :-0.000000001,  // em       1/-1000000000 100em -->-0.0000001 999em -->-0.000000999 1em -->-0.000000001 0.01em -->-0.00000000001   conv ==> base*value*-1000000000      rate = convertrate= 1:1   * calibration=1:1000000000

    //  SIZELMTH_PIXEL  : 9999999,      // pixel    limit high    base webbrowser limit
        SIZELMTL_PIXEL  : 0.1,          // pixel    limit low     0.1px   = 0.1
        SIZELMTH_PERCENT: 1000,         // percent  limit high    1000%   = 0.1 = 0.1px
    //  SIZELMTL_PERCENT: 0.01,         // percent  limit low     base webbrowser limit
        SIZELMTH_REM    : 1000,         // rem      limit high    1000rem = 0.1 = 0.1px
        SIZELMTL_REM    : 0.01,         // rem      limit low     0.01rem = 0.000001
        SIZELMTH_EM     : 1000,         // em       limit high    1000em  = 0.000001 = 0.01rem
    //  SIZELMTL_EM     : 0.01,         // em       limit low     base webbrowser limit

        SIZEEDGE_REL    : 0.1,          // pixel-perent/rem edge  0.1px   = 0.1 = 1000%, 1000rem
        SIZEEDGE_RELSUB : 0.000001,     // em-percent  /rem edge  0.01rem = 0.000001 = 1000em
        /*
        SIZEBASE_SELF   : 0x00,         // self     base : px, -1(autosize)
        SIZEBASE_PARENT : 0x01,         // parent   base : %, em
        SIZEBASE_ROOT   : 0x02,         // root     base : rem

        SIZEBASE_PIXEL  : 0x00,         // pixel    base : self
        SIZEBASE_PERCENT: 0x01,         // percent  base : parent
        SIZEBASE_REM    : 0x02,         // rem      base : root
        SIZEBASE_EM     : 0x01,         // em       base : parent
        */
    };

    // [util.property:parse]
    nexacro._parseProperty = function (propvalue, propinfo, defval)
    {
        if (propinfo === undefined || propinfo === null) return defval ?? propvalue;

        switch (propinfo.type)
        {
            case "enum": // single/multi value + enuminfo
                {
                    if (nexacro._isNullEmpty(propvalue)) return defval ?? propinfo.defaultval;

                    if (propinfo.multi)
                    {
                        let arr = propvalue.trim().split(propinfo.delimiter ?? /[,\s]+/);

                        if (propinfo.array)
                        {
                            let ret = [], i = 0;

                            for (let v of arr)
                            {
                                ret[i++] = propinfo.enumvalues[v] ?? 0;
                            }

                            return ret;
                        }
                        else
                        {
                            let ret = 0;

                            for (let v of arr)
                            {
                                ret |= propinfo.enumvalues[v] ?? 0;
                            }

                            return ret;
                        }
                    }
                    else
                    {
                        return propinfo.enumvalues[propvalue] ?? propinfo.defaultval;
                    }
                }
            case "scalar": // single value + multi unit info
                {
                    if (propinfo.multi)
                    {
                        if (nexacro._isNullEmpty(propvalue)) return [defval ?? propinfo.defaultval];

                        let arr = propinfo.multi ? propvalue.trim().split(propinfo.delimiter ?? /[,\s]+/) : [propvalue.trim()];
                        let ret = [], i = 0;

                        for (let v of arr)
                        {
                            ret[i] = nexacro._parseScalar(v, propinfo, propinfo.defaultval[i]); i++;
                        }

                        return ret;
                    }
                    else
                    {
                        if (nexacro._isNullEmpty(propvalue)) return defval ?? propinfo.defaultval;

                        return nexacro._parseScalar(propvalue, propinfo);
                    }
                }
            case "vector": // multi value + multi unit info
                {
                    if (propinfo.multi)
                    {
                        if (nexacro._isNullEmpty(propvalue)) return [defval ?? propinfo.defaultval];

                        let ret = [];
                        let arr = propvalue.trim().split(propinfo.delimiter ?? /[,\s]+/);
                        let i = 0;

                        for (let a of arr)
                        {
                            let vrr = a.split(propinfo.separater ?? ' ');
                            let k = i, j = 0;

                            ret[i++] = nexacro._getCloneArray(propinfo.defaultval);

                            // parse
                            for (let v of vrr)
                            {
                                ret[k][j] = nexacro._parseScalar(v, propinfo, propinfo.defaultval[j]); j++;
                            }

                            // fill
                            if (propinfo.fill && j)
                            {
                                for (let l = propinfo.defaultval.length, s = 0; j < l; j++, s = (s + 1) % l)
                                {
                                    ret[k][j++] = ret[k][s];
                                }
                            }
                        }

                        return ret;
                    }
                    else
                    {
                        if (nexacro._isNullEmpty(propvalue)) return defval ?? propinfo.defaultval;

                        let ret = nexacro._getCloneArray(propinfo.defaultval);
                        let vrr = propvalue.trim().split(propinfo.separater ?? ' ');
                        let j = 0;

                        // parse
                        for (let v of vrr)
                        {
                            ret[j] = nexacro._parseScalar(v, propinfo, propinfo.defaultval[j]); j++;
                        }

                        // fill
                        if (propinfo.fill && j)
                        {
                            for (let l = propinfo.defaultval.length, s = 0; j < l; j++, s = (s + 1) % l)
                            {
                                ret[j++] = ret[s];
                            }
                        }

                        return ret;
                    }
                }
            /*
            case "object"   : // nexa property object + object info
            case "style"    : // nexa style object + css style info
            case "formats"  : // nexa formats value + formats info
            case "contents" : // nexa contents value + contents info
            */
        }
        var obj1, obj2;
        if (propinfo.type == "object") for (var attr in obj1) { if (obj1[attr] != obj2[attr]) return false; }

        return true;
    };
    // [util.property:parse]
    nexacro._parseScalar = function (propvalue, propinfo, defval)
    {
    //  if (propinfo === undefined || propinfo === null) return defval ?? propvalue;

        if (propvalue)
        {
            let s = parseFloat(propvalue);
            let u = propinfo.defaultunit;

            for (let x in propinfo.unitvalues) if (propvalue.endsWith(x)) { u = propinfo.unitvalues[x]; break; }

            let c = s * propinfo.unitrates[u];

            return { pval: propvalue, sval: s, cval: c, unit: u };
        }
        else if (defval)
        {
            return defval;
        }
        else
        {
            let s = undefined;
            let u = propinfo.defaultunit;
            let c = s * propinfo.unitrates[u];

            return { pval: propvalue, sval: s, cval: c, unit: u };
        }
    };

    // [util.object:compare]
    nexacro._compareObject = function (obj1, obj2)
    {
        if (typeof obj1 != typeof obj2) return false;
        if (typeof obj1 == "object") for (var attr in obj1) { if (obj1[attr] != obj2[attr]) return false; }
        return obj1 !== obj2;
    };

    // [util.clone:clone]                       // TODO:Optimize
    nexacro._clone = function (obj)
    {
        // extends 'from' object with members from 'to'. 
        // If 'to' is null, a deep clone of 'from' is returned
        function extend(from, to)
        {
            if (from == null || typeof from != "object") return from;
            if (from.constructor != Object && from.constructor != Array) return from;
            if (from.constructor == Date   || from.constructor == RegExp || from.constructor == Function ||
                from.constructor == String || from.constructor == Number || from.constructor == Boolean)
                return new from.constructor(from);

            to = to || new from.constructor();

            for (var name in from)
            {
                to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
            }

            return to;
        }

        return extend(obj);
    };


    // K에서 html로 통합
    /*
    // TODO : image cover scroll 제공여부 확인하여 미제공시 주석처리
    // [util.saveImage]                // TODO:FullStyle
    var _use_savetoimage_runtime = false;
    var _use_savetoimage_html = false;
    */

    // [util.saveImage:getCurrentStyle]         // TODO:FullStyle
    nexacro._getCurrentStyleObject = function (elem)
    {
        if (!elem) return null;

        var _doc = elem._getRootWindowHandle();
        var _win = _doc.defaultView || _doc.parentWindow;
        var _cps = _win.getComputedStyle || 0;
        var _obj = _cps ? _win.getComputedStyle(elem.handle) : elem.handle.currentStyle;

        return _cps ? { curr: _obj, elem: elem, type: "compute" }
                    : { curr: _obj, elem: elem, type: "current" };
    };
    nexacro._getCurrentStyleValue = function (style, prop)
    {
        if (prop == "font")
        {
            if (style.type == "runtime")
            {
                return style.elem._getComputedStyle("font");
            }
            else
            {
                var font = [];
                font.push(nexacro._getCurrentStyleValue(style, "font-style"));
                font.push(nexacro._getCurrentStyleValue(style, "font-variant"));
                font.push(nexacro._getCurrentStyleValue(style, "font-weight"));
                font.push(nexacro._getCurrentStyleValue(style, "font-size"));
                font.push(nexacro._getCurrentStyleValue(style, "font-family"));
                return font.join(' ');
            }
        }
        else
        {
            var r;
            if (style.type == "runtime")
            {
                r = prop.split('-');
                if (r.length > 1 && r[0] == "background")
                {
                    return style.elem._getComputedStyleSubValue(r[0], prop);
                }
                else
                {
                    return style.elem._getComputedStyleValue(prop);
                }
            }
            else if (style.type == "current")
            {
                r = prop.split('-');
                for (var i = 1, l = r.length; i < l; i++)
                {
                    var s = r[i];
                    if (s.length)
                        s[0] = s[0].toUpperCase();
                }
                var p = r.join('');

                return style.curr[p];
            }
            else if (style.type == "compute")
            {
                return style.curr.getPropertyValue(prop);
            }
        }
    };

    // [util.saveImage:clip]
    nexacro._clipAdd2Canvas = function (canvas, left, top, width, height)
    {
        if (!canvas) return;

        var l = left, t = top, w = width, h = height;
        var a = canvas._cliprectarray;
        if (!a || !a.length)
        {
            canvas._cliprectarray = [[l, t, w, h]];
        }
        else
        {
            var r = a[a.length - 1];

            l = Math.max(r[0], left);
            t = Math.max(r[1], top);
            w = Math.min(r[0] + r[2], left + width) - l;
            h = Math.min(r[1] + r[3], top + height) - t;

            a.push([l, t, w, h]);
        }

        canvas.save();
        canvas.beginPath();
        canvas.rect(l, t, w, h);
        canvas.clip();
    };
    nexacro._clipPop2Canvas = function (canvas)
    {
        if (!canvas) return;

        var a = canvas._cliprectarray;
        if (a)
        {
            a.pop(); if (a.length <= 0) delete canvas._cliprectarray;
        }

        canvas.restore();
    };

    // [util.saveImage:drawelem]                // TODO:FullStyle
    nexacro._drawElement2Canvas = function (canvas, elem, left, top, optxt, opimg)
    {
        if (canvas && elem)
        {
            var l = left || 0;
            var t = top || 0;
            var w = elem.width;
            var h = elem.height;

            // style
            var style = nexacro._getCurrentStyleObject(elem);

            var bkcolor  = nexacro._getCurrentStyleValue(style, "background-color");
            var bkimage  = nexacro._getCurrentStyleValue(style, "background-image");
            var bkposit  = nexacro._getCurrentStyleValue(style, "background-position");
            var bkrepeat = nexacro._getCurrentStyleValue(style, "background-repeat");

            var halign   = nexacro._getCurrentStyleValue(style, "text-align");
            var font     = nexacro._getCurrentStyleValue(style, "font");
            var color    = nexacro._getCurrentStyleValue(style, ("color"));

            var drawImg, drawBox, drawIco, drawTxt;
            var image;

            // clip
            nexacro._clipAdd2Canvas(canvas, l, t, w, h);

            switch (elem._type_name)
            {
                case "ControlElement":
                case "ScrollableControlElement":
                case "FrameControlElement":
                case "GridScrollableControlElement":
                case "GridBandControlElement":
                case "GridRowControlElement":
                    {
                        var border = elem.border ? elem.border : elem._border_info;
                        var radius = elem.borderRadius ? elem.borderRadius : null;

                        // draw border
                        if (border)
                        {
                            var offset;

                            var rx = radius ? radius.x : 0;
                            var ry = radius ? radius.y : 0;

                            var tw = border.top._width;
                            var rw = border.right._width;
                            var bw = border.bottom._width;
                            var lw = border.left._width;

                            if (rx && ry)
                            {
                                if (tw)
                                {
                                    canvas._setLineStyle(border.top);
                                    canvas.drawStrokeInsetRoundRect(l, t, w, h, rx, ry);

                                    l += tw;
                                    t += tw;
                                    w -= tw;
                                    h -= tw;
                                }
                            }
                            else if (border._single)
                            {
                                if (tw)
                                {
                                    canvas._setLineStyle(border.top);
                                    canvas.drawStrokeInsetRect(l, t, w, h);

                                    l += tw;
                                    t += tw;
                                    w -= tw;
                                    h -= tw;
                                }
                            }
                            else
                            {
                                if (border.top._isValid())
                                {
                                    offset = t + tw / 2;
                                    canvas._setLineStyle(border.top);
                                    canvas.drawStrokeLine(l, offset, l + w, offset);
                                    t += tw;
                                }
                                if (border.right._isValid())
                                {
                                    offset = l + w - rw / 2;
                                    canvas._setLineStyle(border.right);
                                    canvas.drawStrokeLine(offset, t, offset, t + h);
                                    w -= rw;
                                }
                                if (border.bottom._isValid())
                                {
                                    offset = t + h - bw / 2;
                                    canvas._setLineStyle(border.bottom);
                                    canvas.drawStrokeLine(l, offset, l + w, offset);
                                    h -= bw;
                                }
                                if (border.left._isValid())
                                {
                                    offset = l + lw / 2;
                                    canvas._setLineStyle(border.left);
                                    canvas.drawStrokeLine(offset, t, offset, t + h);
                                    l += lw;
                                }
                            }
                        }

                        if (bkrepeat)
                        {
                            if (bkimage && bkimage != "none")
                            {
                                //  canvas.createPattern();
                                canvas.drawImage(elem, 0, 0, bkimage.width, bkimage.height);
                            }
                            else
                            {
                                //  canvas.createPattern();
                                canvas.setElementFillStyle(nexacro.ColorObject(bkcolor));
                                canvas.drawFillRect(l, t, w, h);
                            }
                        }
                        else
                        {
                            if (bkimage && bkimage != "none")
                            {
                                canvas.drawImage(bkimage, 0, 0, bkimage.width, bkimage.height);
                            }
                            else
                            {
                                canvas.setElementFillStyle(nexacro.ColorObject(bkcolor));
                                canvas.drawFillRect(l, t, w, h);
                            }
                        }

                        // draw edge
                        break;
                    }
                case "IconElement":
                case "ImageElement":
                    {
                        drawImg = !opimg || opimg == "drawImg";
                        drawBox = opimg && opimg == "drawBox";

                        // draw Image/Icon
                        if (drawImg)
                        {
                            if (style.type == "runtime")
                            {
                                image = new nexacro.Image();
                                if (elem.icon)
                                {
                                    image.set_src(elem.icon.value);
                                }
                                if (elem.image)
                                {
                                    image.set_src(elem.image.url);
                                }

                                canvas.drawImage(image, l, t, w, h);
                            }
                            else
                            {
                                canvas.drawImage(elem, l, t, w, h);
                            }
                        }
                        // draw box
                        if (drawBox)
                        {
                            canvas.setElementStrokeStyle(canvas.color);
                            canvas.drawStrokeInsetRect(l, t, w, h);
                        }

                        break;
                    }
                case "IconTextElement":
                    {
                        drawBox = elem._box_node || 0;
                        drawIco = elem._icon_node || elem.icon;
                        //drawTxt = elem._text_node || elem.text;

                        // draw box
                        if (drawBox)
                        {
                            if (bkcolor)
                            {
                                canvas.setElementFillStyle(nexacro.ColorObject(bkcolor));
                                canvas.drawFillRect(l, t, w, h);
                            }
                            if (bkimage && bkimage != "none")
                            {
                                image = new nexacro.Image();
                                image.set_src(bkimage);

                                var ix = l, iy = t;
                                var iw = image.width, ih = image.height;

                                if (bkposit && elem.parent_elem)
                                {
                                    var pw = elem.parent_elem.width;
                                    var ph = elem.parent_elem.height;

                                    ix += Math.max((pw - iw) / 2, 0);
                                    iy += Math.max((ph - ih) / 2, 0);
                                }

                                canvas.drawImage(image, ix, iy, iw, ih);
                            }
                        }
                        // draw icon
                        if (drawIco)
                        {
                            if (style.type == "runtime" && elem.icon)
                            {
                                image = new nexacro.Image();
                                image.set_src(elem.icon.value);

                                canvas.drawImage(image, l, t, image.width, image.height);
                            }
                            else if (elem._icon_node)
                            {
                                canvas.drawImage(elem._icon_node, l, t, elem._icon_node.width, elem._icon_node.height);
                            }
                        }
                        // draw text
                        //if (!drawTxt)
                        {
                            break;
                        }
                    }
                case "TextBoxElement":
                case "InputElement":
                case "TextAreaElement":
                    {
                        drawBox = (optxt && optxt == "drawBox") && elem.text;
                        drawTxt = (!optxt || optxt == "drawTxt") && elem.text;

                        // adjust padding
                        var padding = elem.textPadding;
                        if (padding)
                        {
                            l += padding.left;
                            t += padding.top;
                        }
                        // apply align
                        if (halign)
                        {
                            canvas.setElementTextAlign(halign);
                        }
                        // apply font
                        if (font)
                        {
                            canvas.setElementFont(nexacro.FontObject(font));
                        }
                        // apply color
                        if (color)
                        {
                            canvas.setElementFillStyle(nexacro.ColorObject(color));
                        }

                        var x;
                        // draw text
                        if (drawTxt)
                        {
                            var text = elem.text;
                            switch (halign)
                            {
                                case "right": x = l + w; break;
                                case "center": x = l + w / 2; break;
                                case "left": x = l; break;
                            }

                            canvas.fillText(text, x, t);
                        }
                        // draw box
                        if (drawBox)
                        {
                            var n = elem.text.length;
                            var c = 6, r = 8, s = 1;
                            x = Math.max(w - (c + s) * n - s, 0);

                            switch (halign)
                            {
                                case "right": break;
                                case "center": x /= 2; break;
                                case "left": x = 0; break;
                            }

                            l = l + x;
                            t = (h - r) / 2;

                            for (var i = 0; i < n && l + c < l + w; i++, l += c + s)
                            {
                                canvas.drawFillRect(l, t, c, r);
                            }
                        }

                        break;
                    }
                case "CanvasElement":
                case "PluginElement":
                case "WebBrowserPluginElement":
                case "VideoPlayerPluginElement":
                case "GoogleMapElement":
                case "ContainerElement":
                case "ModalOverlayElement":
                    {
                        break;
                    }
            }

            // unclip
            nexacro._clipPop2Canvas(canvas);
        }
    };
    // [util.saveImage:drawcomp]                // TODO:FullStyle
    nexacro._drawComponent2Canvas = function (canvas, comp, left, top, optxt, opimg)
    {
        if (canvas && comp)
        {
            var l = left || 0;
            var t = top || 0;
            var w = comp.getOffsetWidth();
            var h = comp.getOffsetHeight();

            // clip
            nexacro._clipAdd2Canvas(canvas, l, t, w, h);

            var control_elem = comp.getElement();
            if (control_elem && control_elem.handle)
            {
                var i, n;
                var items, item, children, child;

                var cl, ct;
                var el, et;

                // draw control/border/back/edge
                var b = comp._getCurrentStyleBorder();
                var bl = b ? b.left._width : 0;
                var bt = b ? b.top._width : 0;

                // draw
                nexacro._drawElement2Canvas(canvas, control_elem, l, t, optxt, opimg);

                l += bl;
                t += bt;

                // draw simple contents/client/cell
                var child_elem = control_elem.getContainerElement();
                child_elem = comp._getClientElement ? comp._getClientElement() : child_elem;
                child_elem = comp._cell_elem ? comp._cell_elem : child_elem;
                child_elem = comp._text_elem ? comp._text_elem : child_elem;
                child_elem = comp._img_elem ? comp._img_elem : child_elem;
                child_elem = comp._input_element ? comp._input_element : child_elem;

                if (child_elem && child_elem != control_elem && child_elem.handle)
                {
                    el = child_elem.left;
                    et = child_elem.top;

                    canvas.setElementFont(comp._getCurrentStyleInheritValue("font"));
                    canvas.setElementColor(comp._getCurrentStyleInheritValue("color"));

                    nexacro._drawElement2Canvas(canvas, child_elem, l + el, t + et, optxt, opimg);
                }

                // draw children
                children = comp._getChildren ? comp._getChildren() : null;
                if (children)
                {
                    for (i = 0, n = children.length; i < n; i++)
                    {
                        child = children[i];
                        if (child)
                        {
                            cl = child.getOffsetLeft();
                            ct = child.getOffsetTop();

                            nexacro._drawComponent2Canvas(canvas, child, l + cl, t + ct, optxt, opimg);
                        }
                    }
                }

                // draw itmes
                items = comp._getItems ? comp._getItems() : null;
                if (items)
                {
                    for (i = 0, n = items.length; i < n; i++)
                    {
                        item = items[i];
                        if (item)
                        {
                            cl = item.getOffsetLeft();
                            ct = item.getOffsetTop();

                            nexacro._drawComponent2Canvas(canvas, item, l + cl, t + ct, optxt, opimg);
                        }
                    }
                }

                // draw nc child
                var ncchild = comp._getNCChildren ? comp._getNCChildren() : null;
                if (ncchild)
                {
                    for (i = 0, n = ncchild.length; i < n; i++)
                    {
                        child = ncchild[i];
                        if (child)
                        {
                            cl = child.getOffsetLeft();
                            ct = child.getOffsetTop();

                            nexacro._drawComponent2Canvas(canvas, child, l + cl, t + ct, optxt, opimg);
                        }
                    }
                }
            }

            nexacro._clipPop2Canvas(canvas);
        }
    };

    // [util.style:effect]
    nexacro._getCompEffectTime = function (comp)
    {
        if (!nexacro._isArray(comp)) comp = [comp];

        var rtmax = 0;

        for (var c of comp)
        {
            var e = c.getElement();
            if (e)
            {
                var style = nexacro._getCurrentStyleObject(e);
                if (style)
                {
                    var trmaxs = 0;
                    var anmaxs = 0;

                    // get transition time
                    var trdurtns = nexacro._getCurrentStyleValue(style, "transition-duration");
                    var trdelays = nexacro._getCurrentStyleValue(style, "transition-delay");

                    if (trdurtns || trdelays)
                    {
                        // duration delay value array
                        var durtns = trdurtns.split(',').map(parseFloat);
                        var delays = trdelays.split(',').map(parseFloat);

                        // max (duration + delay) secend
                        trmaxs = Math.max(...durtns.map((d, i) => { return d + (delays[i] || 0); }));
                    }

                    // get animation time
                    var andurtns = nexacro._getCurrentStyleValue(style, "animation-duration");
                    var andelays = nexacro._getCurrentStyleValue(style, "animation-delay");

                    if (andurtns || andelays)
                    {
                        // duration delay value array
                        var durtns = andurtns.split(',').map(parseFloat);
                        var delays = andelays.split(',').map(parseFloat);

                        // max (duration + delay) secend
                        anmaxs = Math.max(...durtns.map((d, i) => { return d + (delays[i] || 0); }));
                    }

                    rtmax = Math.max(rtmax, Math.max(trmaxs, anmaxs));
                }
            }
        }

        return rtmax;
    };

    // [util.async:delay]
    nexacro._delay = function (ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    // [util.notify:notify]                     // TODO:Optimize
    nexacro._setNotifyType = function (type, comp)
    {
        this._notifytype = type;
        this._notifycomp = comp;
    };
    
    nexacro._errorV8CallStack = function ()
    {
        Error.stackTraceLimit = 30;

        var traceFn = nexacro.__onNexacroStudioError ? nexacro.__onNexacroStudioError : Error ? trace : null;
        if (traceFn)
        {
            var e = new Error();
            var stack = e.stack;
            var str = "";

            var i, j;
            var frame, func, argstr, tempstr;
            var _this, _obname, _fnname;

            try
            {
                // i=0은 현재 이 function
                for (i = 1; i < stack.length; i++)
                {
                    frame = stack[i];
                    func = frame.getFunction();
                    argstr = "";
                    for (j = 0; j < func.arguments.length; j++)
                    {
                        tempstr = func.arguments[j] + ", ";
                        if (tempstr.length > 30)
                        {
                            argstr += "[LONG STR], ";
                        }
                        else
                        {
                            argstr += tempstr;
                        }
                    }

                    _this = frame.getThis();
                    _obname = _this.id ? _this.id : _this.name;
                    _fnname = frame.getFunctionName();
                    str += "\n   " + _this + _obname + "." + _fnname + "(arg: " + argstr + ")";
                }

                var mode = 0;
                //var mode = 1;

                switch (mode)
                {
                    case 0:
                        traceFn("\n===[callstack(" + (stack.length - 1) + ")]==============================\n" + str + "\n============================================");
                        break;
                    case 1:
                        {
                            traceFn("\n===[callstack(" + (stack.length - 1) + ")]==============================");
                            var strlist = str.split("\n");
                            for (i = 0; i < strlist.length; i++)
                            {
                                traceFn(strlist[i]);
                            }
                            traceFn("============================================");
                        }
                        break;
                }
            }
            catch (err)
            {
                nexacro._settracemsg(err);
            }
        }
    };
}