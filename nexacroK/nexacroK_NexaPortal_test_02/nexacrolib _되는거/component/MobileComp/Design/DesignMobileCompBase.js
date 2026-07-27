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
if (nexacro.FieldBase)
{
    var _pFieldBase = nexacro.FieldBase.prototype;

    _pFieldBase._p_labelfloatingfixed = true;
    _pFieldBase._design_labelfloatingfixed = false;
    _pFieldBase._design_init_height = 0;

    _pFieldBase._initDesignDefaultProperty = function ()
    {
        this.set_labeltext(this._p_name);
    };

    _pFieldBase.design_set_labelfloatingfixed  = function (v)
    {
        this._design_labelfloatingfixed = v;
    };

    _pFieldBase.design_get_labelfloatingfixed  = function ()
    {
        return this._design_labelfloatingfixed;
    };

    _pFieldBase._setInitFieldHeight = function (v)
    {        
        this._design_init_height = v;
    };

    _pFieldBase._getInitFieldHeight = function ()
    {
        return this._design_init_height;
    };

    _pFieldBase.on_change_containerRect = function (width, height)
    {
        if (width > 0 && height > 0)
        {
            // field 초기 사이즈값 저장 (design 용)
            if (!this._p_footerheight && !this._p_contentheight)
            {
                var border = this._getCurrentStyleBorder();
                if (border)
                {
                    height += border._getBorderHeight();
                }
                var padding = this._getCurrentStylePadding();
                if (padding)
                {
                    height += padding.top + padding.bottom;
                }

                var footer_height = this._getHelperLineHeight();
                if (this._p_usehelpertext || this._p_usecharcount)
                {
                    this._setInitFieldHeight(height - footer_height);
                }
                else
                {
                    this._setInitFieldHeight(height);
                }
            }
        }
        this._recalc_contents("onsize");
    };

    _pFieldBase.on_apply_usehelpertext = function ()
    {
        this._updateHelperText();
        if (!this._p_footerheight && !this._p_contentheight)
        {
            var field_height = this._getInitFieldHeight();
            if (field_height > 0)
            {
                // 디자인 타임에서는 Helpertext의 생성이 Field의 size에 포함하도록 처리            
                var footer_height = this._getHelperLineHeight();
                if (this._p_usehelpertext || this._p_usecharcount)
                {
                    field_height = field_height + footer_height;
                }
                this.set_height(field_height);
                if (this._isFluidContainer())
                {
                    // 디자인 타임에서만 element 강제 size 업데이트
                    this._setAdjustSize(this._adjust_width, field_height);
                    this.on_update_position(true, false);

                    // 디자인 타임에서만 fluid 강제 fitsize 업데이트
                    this._getSizeInfo();
                    this._update_layoutbasis();
                }
                //nexacro._setProperty(this, "height", this._adjust_height);
            }
        }
        this._recalc_contents();
    }; 

    _pFieldBase = null;
}
