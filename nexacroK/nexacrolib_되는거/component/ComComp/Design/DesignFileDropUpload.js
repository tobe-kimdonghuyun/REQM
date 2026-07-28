//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2024 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file
//          in accordance with the terms of the license agreement accompanying it.
//
//==============================================================================

if (nexacro.FileDropUpload)
{
    var _pFileDropUpload = nexacro.FileDropUpload.prototype;

    _pFileDropUpload.on_created_contents = function (win)
    {
        if (!this.context)
        {
            this.context = this._refform;
        }

        if (this._dropzone)
        {
            this._dropzone.on_created(win);
        }

        if (this._toolbar)
        {
            this._toolbar.on_created(win);
        }

        if (this._helpmessage)
        {
            this._helpmessage.on_created(win);
        }

        if (this._counter)
        {
            this._counter.on_created(win);
        }

        if (this._filelist_control)
        {
            this._filelist_control.on_created(win);
        }

        this._applyProperties();
        this._recalcLayout();
        this._updateCounter();
    };

    _pFileDropUpload.createCssDesignContents = function ()
    {
        if (!this.context)
        {
            this.context = this._refform;
        }

        this._applyProperties();
        this._recalcLayout();
        this._updateCounter();
    };

    _pFileDropUpload = null;
}
