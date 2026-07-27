//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2026 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.1.html	
//
//==============================================================================



if (!nexacro.FilteredDataset) 
{
    //==============================================================================
    // nexacro.FilteredDataset	
    //==============================================================================
    nexacro.FilteredDataset = function (id, parent) 
    {
        nexacro.Dataset.call(this, id, parent);

        this._p_binddataset = "";        

        // ----------------- internal variable ------------------ // 
        this._binddataset = null;
        this._bindrow_to_raw_map = null;
        this._raw_to_bindrow_map = null;
    };

    var _pFilteredDataset = nexacro._createPrototype(nexacro.Dataset, nexacro.FilteredDataset);
    nexacro.FilteredDataset.prototype = _pFilteredDataset;

    _pFilteredDataset._is_filtered = true;

    // not supported (properties)
    _pFilteredDataset.set_url = nexacro._emptyFn;
    _pFilteredDataset.set_arguments = nexacro._emptyFn;
    _pFilteredDataset.set_serverdatasetid = nexacro._emptyFn;
    _pFilteredDataset.set_firefirstcount = nexacro._emptyFn;
    _pFilteredDataset.set_firenextcount = nexacro._emptyFn;
    _pFilteredDataset.set_progressload = nexacro._emptyFn;
    _pFilteredDataset.set_preload = nexacro._emptyFn;
    _pFilteredDataset.set_dataobjectpath = nexacro._emptyFn;
    _pFilteredDataset.set_dataobjectbindmode = nexacro._emptyFn;
    _pFilteredDataset.set_savenan = nexacro._emptyFn;
    _pFilteredDataset.set_saveinfinity = nexacro._emptyFn;
    _pFilteredDataset.set_saveinvaliddate = nexacro._emptyFn;
    _pFilteredDataset.set_collation = nexacro._emptyFn;

    // not supported (method)
    _pFilteredDataset.addColumn = nexacro._emptyFn;
    _pFilteredDataset.addColumnInfo = nexacro._emptyFn;
    _pFilteredDataset.addConstColumn = nexacro._emptyFn;
    _pFilteredDataset.addRow = nexacro._emptyFn;
    _pFilteredDataset.append = nexacro._emptyFn;
    _pFilteredDataset.appendData = nexacro._emptyFn;
    _pFilteredDataset.applyChange = nexacro._emptyFn;
    _pFilteredDataset.assign = nexacro._emptyFn;
    _pFilteredDataset.copyData = nexacro._emptyFn;
    _pFilteredDataset.copyRow = nexacro._emptyFn;
    _pFilteredDataset.deleteAll = nexacro._emptyFn;
    _pFilteredDataset.deleteColumn = nexacro._emptyFn;
    _pFilteredDataset.deleteMultiRows = nexacro._emptyFn;
    _pFilteredDataset.deleteRow = nexacro._emptyFn;
    _pFilteredDataset.getDeletedColumn = nexacro._emptyFn;
    _pFilteredDataset.getDeletedRowCount = nexacro._emptyFn;
    _pFilteredDataset.getDeletedRowset = nexacro._emptyFn;
    _pFilteredDataset.insertRow = nexacro._emptyFn;
    _pFilteredDataset.reset = nexacro._emptyFn;
    _pFilteredDataset.setConstColumn = nexacro._emptyFn;
    _pFilteredDataset.load = nexacro._emptyFn;
    _pFilteredDataset.loadBIN = nexacro._emptyFn;
    _pFilteredDataset.loadCSV = nexacro._emptyFn;
    _pFilteredDataset.loadFromDataObject = nexacro._emptyFn;
    _pFilteredDataset.loadJSON = nexacro._emptyFn;
    _pFilteredDataset.loadSSV = nexacro._emptyFn;
    _pFilteredDataset.loadXML = nexacro._emptyFn;
    _pFilteredDataset.mergeData = nexacro._emptyFn;
    _pFilteredDataset.updateColID = nexacro._emptyFn;
    _pFilteredDataset.updateConstColID = nexacro._emptyFn;

    _pFilteredDataset.on_created = function ()
    {
        this._is_created = true;
    };

    _pFilteredDataset.destroy = function ()
    {
        this._p_rowcount = 0;

        this.on_fire_sys_onload(0, "", 91); //nexacro.Dataset.REASON_UNBINDSOURCE  //don't fire userevent

        if (this._binddataset)
            this._removeBindEventHandlers(this._binddataset);

        this._binddataset = null;
        this._viewRecords = null;
        this._rawRecords = null;
        this._event_list = null;
        this._exprFuncs = null;
        this._filterFn = null;
        this.__loadConvertFn = null;
        this.__lazyParseRecordFn = null;
        this._keycols = null;
        this._p_colinfos = null;
        this._constVars = null;
        this._is_created = null;
        this._bindrow_to_raw_map = null;
        this._raw_to_bindrow_map = null;

        if (this._keycol_levels)
        {
            this._keycol_levels.length = null;
            this._keycol_levels = null;
        }

        if (this._p_parent && this._p_parent.removeChild)
            this._p_parent.removeChild(this.id);
        this._p_parent = null;

        nexacro._EventSinkObject.prototype.destroy.call(this);
    };

    _pFilteredDataset._setBindEventHandlers = function (orgds)
    {
        orgds._setEventHandler("onload", this.on_dsnotify_onload, this);
        orgds._setEventHandler("onrowposchanged", this.on_dsnotify_onrowposchanged, this);
        orgds._setEventHandler("oncolumnchanged", this.on_dsnotify_oncolumnchanged, this);
        orgds._setEventHandler("onvaluechanged", this.on_dsnotify_onvaluechanged, this);
        orgds._setEventHandler("onrowsetchanged", this.on_dsnotify_onrowsetchanged, this);
    };

    _pFilteredDataset._removeBindEventHandlers = function (orgds)
    {
        orgds._removeEventHandler("onload", this.on_dsnotify_onload, this);
        orgds._removeEventHandler("onrowposchanged", this.on_dsnotify_onrowposchanged, this);
        orgds._removeEventHandler("oncolumnchanged", this.on_dsnotify_oncolumnchanged, this);
        orgds._removeEventHandler("onvaluechanged", this.on_dsnotify_onvaluechanged, this);
        orgds._removeEventHandler("onrowsetchanged", this.on_dsnotify_onrowsetchanged, this);
    };

    _pFilteredDataset.on_dsnotify_onload = function (obj, e)
    {
        this._loadData();
    };

    _pFilteredDataset.on_dsnotify_onrowposchanged = function (obj, e)
    {

    };

    _pFilteredDataset.on_dsnotify_oncolumnchanged = function (obj, e)
    {
        var rawidx = this._bindrowToRaw(e.row);
        var row = this._viewRecords.findIndex(row => row._rawidx == rawidx);
        
        if (row < 0)
            return;

        var eventInfo = new nexacro.DSColChangeEventInfo(this, "oncolumnchanged", row, e.col, e.colidx, e.columnid, e.oldvalue, e.newvalue);
        this.on_fire_oncolumnchanged(eventInfo);
    };

    _pFilteredDataset.on_dsnotify_onvaluechanged = function (obj, e)
    {
        var rawidx = this._bindrowToRaw(e.row);
        var row = this._viewRecords.findIndex(row => row._rawidx == rawidx);

        if (row < 0)
            return;

        e.row = row;
        this.on_fire_onvaluechanged(e);
    };

    _pFilteredDataset._deleteRowIdxMap = function (arr, idx)
    {
        for (let i = idx + 1; i < arr.length; i++)
        {
            arr[i - 1] = arr[i] - 1;
        }

        arr.pop();

        return arr;
    };

    _pFilteredDataset._deleteRawRecord = function (arr, idx)
    {
        for (let i = idx + 1; i < arr.length; i++)
        {
            let r = arr[i];

            arr[i - 1] = r;

            if (r._rawidx > 0)
                r._rawidx--;
        }

        arr.pop();

        return arr;
    };

    _pFilteredDataset._deleteRow = function (row)
    {
        var viewRecords = this._viewRecords;
        var rawRecords = this._rawRecords;
        var rowRow = viewRecords[row];

        if (rowRow)
        {
            var raw = rowRow._rawidx;

            this._deleteRawRecord(rawRecords, raw);

            if (this._raw_to_bindrow_map)
            {
                var bindrow = this._raw_to_bindrow_map[raw];

                this._deleteRowIdxMap(this._raw_to_bindrow_map, raw);
                this._deleteRowIdxMap(this._bindrow_to_raw_map, bindrow);
            }

            if (viewRecords != rawRecords)
            {
                if (row == 0)
                    viewRecords.shift();
                else
                    viewRecords.splice(row, 1);
            }
        }

        this._p_rowcount = viewRecords.length;
        return row;
    };

    _pFilteredDataset.on_dsnotify_onrowsetchanged = function (obj, e)
    {
        var rawidx = -1, rowidx = -1;

        if (e.row >= 0)
        {
            rawidx = this._bindrowToRaw(e.row);
            rowidx = this._viewRecords.findIndex(row => row._rawidx == rawidx);
        }

        this._bind_ds_rowset = true;

        var proc = true;

        switch (e.reason)
        {
            case 20:    
                if (e.row >= 0) // deleterow
                {
                    if (rowidx >= 0)
                    {
                        if (this._parseKeyCols() == 0)  // no group
                        {
                            nexacro.Dataset.prototype.deleteRow.call(this, rowidx);
                            break;
                        }
                    }
                    else
                    {
                        proc = false;
                        break;
                    }
                }
                this._loadData();
                break;
            default:
                this._loadData();
            break;
        };
        this._bind_ds_rowset = false;

        if (!proc)
            return;

        var count = e.count;
        var reason = e.reason;

        if (this._p_enableevent)
            this.on_fire_onrowsetchanged(rowidx, count, reason);
    };

    _pFilteredDataset._rawToBindrow = function (raw)
    {
        if (this._raw_to_bindrow_map)
            return this._raw_to_bindrow_map[raw];
        else
            return raw;
    };

    _pFilteredDataset._bindrowToRaw = function (bindrow)
    {
        if (this._bindrow_to_raw_map[bindrow])
            return this._bindrow_to_raw_map[bindrow];
        else
            return bindrow;
    };

    _pFilteredDataset.on_fire_cancolumnchange = function (evt)
    {
        if (nexacro.Dataset.prototype.on_fire_cancolumnchange.call(this, evt))
        {
            if (this._binddataset)
            {
                var rawidx = this._viewRecords[evt.row]._rawidx;
                var bindrow = this._rawToBindrow(rawidx);
                var eventInfo = new nexacro.DSColChangeEventInfo(this, "oncolumnchanged", bindrow, evt.col, evt.colidx, evt.columnid, evt.oldvalue, evt.newvalue);

                return this._binddataset.on_fire_cancolumnchange(eventInfo);
            }
        }
        return false;
    };

    _pFilteredDataset._apply_columnchanged = function (rowRow, colinfo, fromval, evt)
    {
        if (this._binddataset)
        {
            var ds = this._binddataset;
            var bindrow = this._rawToBindrow(rowRow._rawidx);

            evt.row = bindrow;
            rowRow = ds._viewRecords[bindrow];

            this._binddataset._apply_columnchanged(rowRow, colinfo, fromval, evt);
        }
    };

    _pFilteredDataset.on_fire_onrowsetchanged = function (row, count, reason)
    {
        if (this._bind_ds_rowset)
            return;

        var event = this.onrowsetchanged;
        if (event && event._has_handlers)
        {
            var evt = new nexacro.DSRowsetChangeEventInfo(this, "onrowsetchanged", row, count, reason);
            event._fireEvent(this, evt);
        }
    };

    _pFilteredDataset._findDataset = function (id)
    {
        if (id && id.length > 0)
        {
            var refform = this.parent;
            var ds;

            if (refform.parent && refform.parent._is_view)
            {
                if (refform.parent.viewdataset == id)
                    return refform.parent.getViewDataset();
                else
                    ds = refform[id];
            }
            else
            {
                ds = refform[id];
            }

            if (ds && (ds._type_name == "Dataset"))
            {
                return ds;
            }

            var _p = refform.opener || refform.parent;
            if (_p && _p._findDataset)
                return _p._findDataset(id);
            else if (_p)
                return _p.lookup(id);
        }

        return undefined;
    };

    _pFilteredDataset._clearAll = function ()
    {
        var cnt = this._p_rowcount;

        this.colinfos.clear();
        this._constVars.clear();

        this._viewRecords.splice(0, this._viewRecords.length);
        this._rawRecords.splice(0, this._rawRecords.length);

        this._p_colcount = 0;
        this._p_constcount = 0;
        this._p_rowcount = 0;

        // ���� ���� �Լ��� ��ü
        this._clearKeyCols();

        if (this._is_created)
        {
            if (this._p_loadkeymode == "reset")
            {
                this._p_keystring = this._defaultKeyStr;
            }
            if (this._p_loadfiltermode == "reset")
            {
                this._p_filterstr = this._defaultFilterStr; //reset�϶� DatasetFilterInfo�� �Ӽ��� ���󰡾� �ϳ� �� �κ��� ���� �������� ����;
            }
        }
        this._filterFn = null;
        this.__loadConvertFn = null;
        this.__lazyParseRecordFn = null;

        this._clearAllExprs();

        return cnt;
    };

    _pFilteredDataset._loadData = function ()
    {
        nexacro.Dataset.prototype.assign.call(this, this._binddataset);
    }

    _pFilteredDataset._assign = function (srcds)
    {
        this._copyConstColList(srcds._constVars);
        this._appendColList(srcds.colinfos);
        this._assignRowList(srcds, srcds._viewRecords);

        this._p_constcount = this._constVars.length;
        this._p_colcount = this.colinfos.length + this._p_constcount;
        this._p_rowcount = this._viewRecords.length;
    };

    _pFilteredDataset._getRecordProxyHandler = function (idx)
    {
        return {
            _p_rawidx: idx,
            get: function (target, prop, receiver)
            {
                if (prop === "_rawidx") 
                {
                    return this._p_rawidx;
                }
                return Reflect.get(...arguments);
            },
            set: function (target, prop, value, receiver)
            {
                if (prop === "_rawidx") 
                {
                    this._p_rawidx = value;
                    return true;
                }
                return Reflect.set(...arguments);
            }
        };
    };

    _pFilteredDataset._assignRowList = function (srcds, srcRecords)
    {
        var cnt = 0;

        var viewRecords = this._viewRecords;
        var rawRecords = this._rawRecords;

        this._bindrow_to_raw_map = null;
        this._raw_to_bindrow_map = null;

        if (this._binddataset._parseKeyCols() >= 0)
        {
            var bindrow_raw_map = this._bindrow_to_raw_map = [];
            var raw_bindrow_map = this._raw_to_bindrow_map = [];

            function __assignRowList_loopFn(i)
            {
                var srcRow = srcds.__getParsedRow(srcRecords[i]);
                var rowRow;

                if (srcRow._rtype != 16)
                {
                    rowRow = new Proxy(srcRow, this._getRecordProxyHandler(i));

                    bindrow_raw_map.push(raw_bindrow_map.length);
                    raw_bindrow_map.push(i);

                    if (viewRecords != rawRecords)
                    {
                        viewRecords[viewRecords.length] = rowRow;
                    }
                    rowRow._rawidx = rawRecords.length;
                    rawRecords[rawRecords.length] = rowRow;
                    cnt++;
                }
                else
                {
                    bindrow_raw_map.push(-1);
                }
            }
            nexacro.__forLoop(this, 0, srcRecords.length, __assignRowList_loopFn);
        }
        else
        {
            function __assignRowList_loopFn(i)
            {
                var srcRow = srcds.__getParsedRow(srcRecords[i]);
                var rowRow;

                if (srcRow._rtype != 16)
                {
                    rowRow = new Proxy(srcRow, this._getRecordProxyHandler(i));

                    if (viewRecords != rawRecords)
                    {
                        viewRecords[viewRecords.length] = rowRow;
                    }
                    rowRow._rawidx = rawRecords.length;
                    rawRecords[rawRecords.length] = rowRow;
                    cnt++;
                }
            }

            nexacro.__forLoop(this, 0, srcRecords.length, __assignRowList_loopFn);
        }

        return cnt;
    };

    _pFilteredDataset.setBindDataset = function (obj)
    {
        if (obj instanceof nexacro.Dataset)
        {
            if (this._binddataset)
                this._removeDSEventHandlers(this._binddataset);

            if (!obj)
            {
                this._binddataset = null;
                this._p_binddataset = "";
            }
            else
            {
                this._binddataset = obj;
                this._p_binddataset = obj.id;
            }
            this.on_apply_prop_binddataset();
        }
    };

    _pFilteredDataset.getBindDataset = function ()
    {
        return this._binddataset;
    };

    _pFilteredDataset.set_binddataset = function (str)
    {
        if (str && typeof str != "string")
        {
            this.setBindDataset(str);
            return;
        }
        if (str != this._p_binddataset || this._p_binddataset && !this._binddataset)
        {
            if (this._binddataset)
                this._removeBindEventHandlers(this._binddataset);

            if (!str)
            {
                this._binddataset = null;
                this._p_binddataset = "";
            }
            else
            {
                str = str.replace("@", "");
                this._binddataset = this._findDataset(str);
                this._p_binddataset = str;
            }
            this.on_apply_prop_binddataset();
        }
        return this._p_binddataset;
    };

    _pFilteredDataset.on_apply_prop_binddataset = function ()
    {
        var ds = this._binddataset;
        if (ds)
        {
            this._p_rowposition = -1;
            this._p_collation = ds._p_collation;
            this._p_reversesubsum = ds._p_reversesubsum;
            this._p_savenan = ds._p_savenan;
            this._p_saveinfinity = ds._p_saveinfinity;
            this._p_saveinvaliddate = ds._p_saveinvaliddate;
            this._p_binddataset = ds.id;

            this._loadData();

            this._setBindEventHandlers(ds);
        }
        else
        {
            nexacro.Dataset.prototype.clear.call(this);
        }
    };

    _pFilteredDataset._properties = [{ name: "binddataset" }, { name: "colcount", readonly: true },
        { name: "colinfos", readonly: true }, { name: "constcount", readonly: true },
        { name: "enableevent" }, { name: "filterstr" }, { name: "keystring" }, { name: "loadfiltermode" },
        { name: "loadkeymode" }, { name: "name" },
        { name: "reversesubsum" }, { name: "rowcount", readonly: true }, { name: "rowposition" }, { name: "groupheadertext" }, { name: "grouprowtype" }
    ];
    nexacro._defineProperties(_pFilteredDataset, _pFilteredDataset._properties);
    _pFilteredDataset = null;


}
