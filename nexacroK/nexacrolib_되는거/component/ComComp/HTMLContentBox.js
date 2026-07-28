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

if (!nexacro.HTMLContentBox)
{
    //==============================================================================
    // nexacro.HTMLContentBox
    //==============================================================================
    nexacro.HTMLContentBox = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {        
        nexacro.HTMLComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pHTMLContentBox = nexacro._createPrototype(nexacro.HTMLComponent, nexacro.HTMLContentBox);
    nexacro.HTMLContentBox.prototype = _pHTMLContentBox;
    _pHTMLContentBox._type_name = "HTMLContentBox";

	// ------------------- internal variable -------------------- //
	_pHTMLContentBox._innerdataset = "";

    //===============================================================
    // nexacro.HTMLContentBox : Create & Update & destroy
    //===============================================================

	_pHTMLContentBox._setEventHandlerToInnerDataset = function ()
	{
		if (this._innerdataset)
		{
			this._innerdataset._setEventHandler("onload", this._callbackFromDataset, this);
			this._innerdataset._setEventHandler("onrowposchanged", this._callbackFromDataset, this);
			this._innerdataset._setEventHandler("oncolumnchanged", this._callbackFromDataset, this);
			this._innerdataset._setEventHandler("onrowsetchanged", this._callbackFromDataset, this);
			this._innerdataset._setEventHandler("onvaluechanged", this._callback_onvaluechanged, this);
		}
	};

    _pHTMLContentBox._removeEventHandlerToInnerDataset = function ()
    {
        if (this._innerdataset)
        {
            this._innerdataset._removeEventHandler("onload", this._callbackFromDataset, this);
            this._innerdataset._removeEventHandler("onrowposchanged", this._callbackFromDataset, this);
            this._innerdataset._removeEventHandler("oncolumnchanged", this._callbackFromDataset, this);
            this._innerdataset._removeEventHandler("onrowsetchanged", this._callbackFromDataset, this);
            this._innerdataset._removeEventHandler("onvaluechanged", this._callback_onvaluechanged, this);
            this._innerdataset = null;
        }
    };

    //===============================================================
    // nexacro.HTMLContentBox : Properties
    //===============================================================
	_pHTMLContentBox.set_innerdataset = function (str)
	{
		if (typeof str != "string")
		{
			this.setInnerDataset(str);
			return;
		}

		if (str != this._p_innerdataset)
		{
			this._removeEventHandlerToInnerDataset();

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
			this.on_apply_innerdataset();
		}
		else if (this._p_innerdataset && !this._innerdataset)
		{
			this._setInnerDatasetStr(this._p_innerdataset);
			this.on_apply_innerdataset();
		}
	};

	_pHTMLContentBox.on_apply_innerdataset = function ()
	{
		this._setEventHandlerToInnerDataset();

		var control = this.getElement();
		if (control && this._p_innerdataset)
		{
			this._last_focused = null;
		}
	};

    _pHTMLContentBox.setInnerDataset = function (obj)
    {
        this._removeEventHandlerToInnerDataset();

        if (!obj)
        {
            this._innerdataset = null;
            this._p_innerdataset = "";
            this.on_apply_innerdataset();
        }
        else if (obj instanceof nexacro.Dataset)
        {
            this._innerdataset = obj;
            this._p_innerdataset = obj.id;
            this.on_apply_innerdataset();
        }
    };

    _pHTMLContentBox._setInnerDatasetStr = function (str)
    {
        this._removeEventHandlerToInnerDataset();

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
    
	_pHTMLContentBox.set_cssclass = function (v)
	{
		if (v != this._p_cssclass)
		{
			this._p_cssclass = v;
			this.on_apply_cssclass();
		}
	};

	_pHTMLContentBox.on_apply_cssclass = function ()
	{
		if (this._is_created)
		{
            //this.on_apply_content();
		}
	};

	_pHTMLContentBox.getInnerDataset = function ()
    {
        return this._innerdataset;
    };
	
    _pHTMLContentBox.set_codecolumn = function (v)
    {
        if (this._p_codecolumn != v)
        {
            this._p_codecolumn = v;
            this.on_apply_codecolumn(v);
        }
    };

    _pHTMLContentBox.on_apply_codecolumn = function (codecolumn)
    {
        if (this._is_created)
        {
            //this.on_apply_content();
        }
    };

    _pHTMLContentBox.set_datacolumn = function (v)
    {
        if (this._p_datacolumn != v)
        {
            this._p_datacolumn = v;
            this.on_apply_datacolumn(v);
        }
    };

    _pHTMLContentBox.on_apply_datacolumn = function (datacolumn)
    {
        if (this._is_created)
        {
            //this.on_apply_content();
        }
    };

	_pHTMLContentBox._properties = [{ name: "content" }, { name: "value" }, { name: "enable" },
		{ name: "innerdataset" }, { name: "codecolumn" }, { name: "datacolumn" }, { name: "cssclass" }
	];
    nexacro._defineProperties(_pHTMLContentBox, _pHTMLContentBox._properties);

    //===============================================================
    // nexacro.HTMLContentBox : Stock Methods
    //===============================================================

	_pHTMLContentBox._callbackFromDataset = function (obj, e)
	{
		var reason = e.reason;
		if (reason == 91)
		{
			// delete
		}
		else
		{
            //this.on_apply_content();
		}
	};

	_pHTMLContentBox._callback_onvaluechanged = function (obj, e)
	{
        //this.on_apply_content();

		if (this._is_created)
		{
			//this.on_fire_oninnerdatachanged(obj, e.oldvalue, e.newvalue, e.columnid, e.col, e.row);
		}
	};


    _pHTMLContentBox = null;
}
