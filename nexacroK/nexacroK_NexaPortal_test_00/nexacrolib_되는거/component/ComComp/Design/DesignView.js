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

if (nexacro.View)
{
    var _pView = nexacro.View.prototype;

    _pView.createCssDesignContents = function ()
    {
        this.set_text("View");
    };
     
    _pView.resetScroll = function ()
    {
        var form = this._p_form;

        if (form)
            form.resetScroll();
    };

    _pView.set_viewtype = function (v)
    {
        this._p_viewtype = v;
    };

    _pView.set_viewdataset = function (v)
    {
        this._p_viewdataset = v;
    };

    _pView.set_sourceview = function (v)
    {
        this._p_sourceview = v;
    };

    _pView.set_url = function (v) 
    {
        // ? 신규 논의중 ?
        var init = nexacro.Component.prototype.set_initvalueid;
        nexacro.Component.prototype.set_initvalueid = function (initvalueid) 
        {
            if (!this._is_created) 
            {
                this._p_initvalueid = initvalueid;
                var fn = this._type_name + initvalueid;
                const nexacro_init = this._getEnvironment()?._getInitValues();
                if (nexacro_init && nexacro_init[fn]) 
                {
                    nexacro_init[fn].call(this, this);
                }
            }
        };
        if (this._p_url != v) 
{
            this._p_url = v;
            this.on_apply_url();
        }
        nexacro.Component.prototype.set_initvalueid = init;
    };

    _pView = null;
}

if (nexacro._InnerForm)
{
    var _pInnerForm = nexacro._InnerForm.prototype;
    _pInnerForm.loadForm = nexacro.FormBase.prototype.loadForm;

    _pInnerForm = null;
}
