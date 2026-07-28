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

if (!nexacro._IconText)
{
    //==============================================================================
    // nexacro._IconText
    //==============================================================================
    nexacro._IconText = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pIconText = nexacro._createPrototype(nexacro.Component, nexacro._IconText);
    nexacro._IconText.prototype = _pIconText;
    _pIconText._type_name = "IconText";

    /* default properties */
    _pIconText._p_text = "";
    _pIconText._p_icon = "";
    _pIconText._p_iconWidth = "";
    _pIconText._p_iconHeight = "";
    _pIconText._p_iconPosition = "";
    _pIconText._p_textPadding = "";
    _pIconText._p_textwidth = undefined;
    _pIconText._p_tabstop = false;
    _pIconText._p_iconAnimation = "";
    _pIconText._p_iconAnimationPlayState = "";
    _pIconText._p_iconTransform = "";
    _pIconText._p_iconTransformOrigin = "";
    _pIconText._p_iconTransition = "";
    _pIconText._p_textAnimation = "";
    _pIconText._p_textAnimationPlayState = "";
    _pIconText._p_textTransform = "";
    _pIconText._p_textTransformOrigin = "";
    _pIconText._p_textTransition = "";

    /* internal variable */
    _pIconText._icon = null;
    _pIconText._textwidth = undefined;
    _pIconText._textpadding = null;
    _pIconText._iconAnimation = null;
    _pIconText._iconAnimationPlayState = null;
    _pIconText._iconTransform = null;
    _pIconText._iconTransformOrigin = null;
    _pIconText._iconTransition = null;
    _pIconText._textAnimation = null;
    _pIconText._textAnimationPlayState = null;
    _pIconText._textTransform = null;
    _pIconText._textTransformOrigin = null;
    _pIconText._textTransition = null;

    /* status */
    _pIconText._is_focus_accept = false;
    _pIconText._is_icontext_control = true;
    _pIconText._is_eventinfo_control = false;
    _pIconText._is_fiticonsize = false;
    _pIconText._usedecoratetext = false;

    /* accessibility */
    _pIconText._p_accessibilityrole = "none";

    //===============================================================
    // nexacro._IconText : Create & Destroy & Update 
    //===============================================================
    _pIconText.on_create_normal_control_element = function (parent_elem)
    {
        // create control element
        const control_elem = new nexacro.IconTextControlElement(parent_elem);
        if (control_elem)
            control_elem.setLinkedControl(this);

        this._control_element = control_elem;

        return control_elem;
    };

    _pIconText.on_create_contents = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (this._p_textAlign)
                control_elem.setElementTextAlign(this._p_textAlign);
            if (this._p_verticalAlign)
                control_elem.setElementVerticalAlign(this._p_verticalAlign);

            if (this._p_wordWrap)
                control_elem.setElementWordWrap(this._p_wordWrap);
            else
                control_elem.setElementCSSMapWordWrapInfo(this._getCSSStyleValue("wordWrap"));

            if (this._p_textOverflow)
                control_elem.setElementTextOverflow(this._p_textOverflow);
            else
                control_elem.setElementCSSMapTextOverflowInfo(this._getCSSStyleValue("textOverflow"));

            const textPadding = this._textpadding || this._getCSSStyleValue("textPadding");
            if (textPadding)
                control_elem.setElementTextPadding(textPadding);

            var _tw = this._getTextWidth();
            if (_tw != null)
                control_elem.setElementTextWidth(_tw);

            if (this._textdecoration)
                control_elem.setElementTextDecoration(this._textdecoration);

            if (this._displaytext)
            {
                if (this._usedecoratetext)
                    control_elem.setElementDecorateText(this._displaytext);
                else
                    control_elem.setElementText(this._displaytext);
            }

            if (this._icon)
                control_elem.setElementIcon(this._icon);
            if (this._p_iconWidth)
                control_elem.setElementIconWidth(this._p_iconWidth);
            if (this._p_iconHeight)
                control_elem.setElementIconHeight(this._p_iconHeight);
            if (this._iconAnimation)
                control_elem.setElementIconAnimation(this._iconAnimation);
            if (this._iconAnimationPlayState)
                control_elem.setElementIconAnimationPlayState(this._iconAnimationPlayState);
            if (this._iconTransform)
                control_elem.setElementIconTransform(this._iconTransform);
            if (this._iconTransformOrigin)
                control_elem.setElementIconTransformOrigin(this._iconTransformOrigin);
            if (this._iconTransition)
                control_elem.setElementIconTransition(this._iconTransition);
            if (this._textAnimation)
                control_elem.setElementTextAnimation(this._textAnimation);
            if (this._textAnimationPlayState)
                control_elem.setElementTextAnimationPlayState(this._textAnimationPlayState);
            if (this._textTransform)
                control_elem.setElementTextTransform(this._textTransform);
            if (this._textTransformOrigin)
                control_elem.setElementTextTransformOrigin(this._textTransformOrigin);
            if (this._textTransition)
                control_elem.setElementTextTransition(this._textTransition);

            const icon_pos = this._p_iconPosition || this._getCSSStyleValue("iconPosition");
            control_elem.setElementIconPos(icon_pos);

            const fittocontents = this._p_fittocontents;
            if (fittocontents != "none")
            {
                // fittocontents가 width와 both 일때는 적용하지 않음
                if (fittocontents !== "height")
                {
                    control_elem.setElementWordWrap("none");
                }
                this._on_apply_fittocontents();
            }
        }
    };

    _pIconText.on_created_contents = function (win)
    {
        if (this._p_expr)
            this._on_apply_expr(this._p_expr);

        if (this._p_fittocontents != "none")
        {
            this._update_position();
            //this._on_apply_fittocontents();
        }
    };

    _pIconText.on_destroy_contents = function ()
    {
        if (this._textpadding)
            this._textpadding = null;

        if (this._icon)
            this._icon = null;
    };

    _pIconText.on_create_contents_command = function ()
    {
        if (this._p_expr)
            this._on_apply_expr(this._p_expr);

        return "";
    };

    _pIconText.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }
    };

    //===============================================================
    // nexacro._IconText : Override
    //===============================================================	
    _pIconText.on_apply_status = function (status, userstatus)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (!this._p_icon)
                control_elem._recreateContents(); // icon 은 map 으로 node 최적화 여부를 결정하고 css 를 그대로 사용
            if (!this._p_textPadding)
                control_elem.setElementTextPadding(this._getCSSStyleValue("textPadding", status, userstatus));
            if (!this._p_iconPosition)
                control_elem.setElementIconPos(this._getCSSStyleValue("iconPosition", status, userstatus));
            if (!this._p_wordWrap)
                control_elem.setElementCSSMapWordWrapInfo(this._getCSSStyleValue("wordWrap", status, userstatus));
            if (!this._p_textOverflow)
                control_elem.setElementCSSMapTextOverflowInfo(this._getCSSStyleValue("textOverflow", status, userstatus));
        }
    };

    _pIconText._on_getFitSize = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            let total_w = 0;
            let total_h = 0;

            const border = this._getCurrentStyleBorder();
            if (border)
            {
                total_w += border._getBorderWidth();
                total_h += border._getBorderHeight();
            }

            const padding = this._getCurrentStylePadding();
            if (padding)
            {
                total_w += padding.left + padding.right;
                total_h += padding.top + padding.bottom;
            }

            const border_padding_w = total_w;
            const border_padding_h = total_h;

            let text;
            if (this._displaytext && this._displaytext !== "")
            {
                // apply_text로 처리된 대상 기준으로 fittocontects가 이루어져야 함
                text = this._displaytext;
            }
            else
                text = this._p_text;
            if (text)
            {
                const font = this._getCurrentStyleInheritValue("font");
                const refer_font = this._getReferenceAbsoluteFont(font); // use to em / rem
                const wordspace = this._getCurrentStyleInheritValue("wordSpacing");
                const letterspace = this._getCurrentStyleInheritValue("letterSpacing");
                const textpadding = this._textpadding || this._getCSSStyleValue("textPadding");

                let wordwrap = "none";
                let width = null;

                let multiline = false;
                if (text.search("\n") > -1)
                {
                    multiline = true;
                }

                if (this._p_fittocontents == "height")
                {
                    // fittocontents가 height 인경우 wordwrap 적용하고 그에 따라 multiline도 반영
					wordwrap = this._p_wordWrap || this._getCSSStyleValue("wordWrap") || "none";
					if (wordwrap && wordwrap != "none")
					{
						// refresh wordwrap (width/both -> height)
						control_elem.setElementWordWrap(wordwrap);
						multiline = true;
						width = this._adjust_width - total_w;
					}
                }

                const text_size = nexacro._getTextSize(text, font, multiline, width, wordwrap, wordspace, letterspace, this._usedecoratetext, undefined, undefined, refer_font);

                var _tw = this._getTextWidth();
                total_w += Math.ceil(_tw != null ? _tw : text_size[0]);
                total_h += Math.ceil(text_size[1]);

                if (textpadding)
                {
                    total_w += textpadding.left + textpadding.right;
                    total_h += textpadding.top + textpadding.bottom;
                }
            }

            const icon = this._icon || this._getCSSStyleValue("icon");
            if (icon)
            {
                const icon_pos = this._p_iconPosition || this._getCSSStyleValue("iconPosition");
                const icon_width = this._p_iconWidth || this._getCSSStyleValue("iconWidth");
                const icon_height = this._p_iconHeight || this._getCSSStyleValue("iconHeight");
                
                const _resolved_width = icon_width ? this._resolveEmPx(icon_width) : null;
                const _resolved_height = icon_height ? this._resolveEmPx(icon_height) : null;
                let icon_size = { width: _resolved_width, height: _resolved_height };
                if (icon_size.width == null || icon_size.height == null)
                {
                    let natural_size = { width: 0, height: 0 };
                    if (icon._sysurl)
                    {
                        natural_size = nexacro._getImageSize_extended(icon._sysurl, this._on_icon_onload, this) || { width: 0, height: 0 };
                    }

                    // 한쪽 크기만 지정된 경우 원본 이미지의 종횡비 유지
                    if (icon_size.width != null)
                    {
                        icon_size.height = natural_size.width > 0 ? icon_size.width * (natural_size.height / natural_size.width) : 0;
                    }
                    else if (icon_size.height != null)
                    {
                        icon_size.width = natural_size.height > 0 ? icon_size.height * (natural_size.width / natural_size.height) : 0;
                    }
                    else
                    {
                        icon_size = natural_size;
                    }
                }

                if (icon_pos == "top" || icon_pos == "bottom")
                {
                    total_h += icon_size.height;
                    total_w = Math.max(total_w, icon_size.width + border_padding_w);
                }
                else
                {
                    total_w += icon_size.width;
                    total_h = Math.max(total_h, icon_size.height + border_padding_h);
                }
            }

            // minwidth, minheight 보완
            const minwidth = this._getComputedPropMinWidth();
            const minheight = this._getComputedPropMinHeight();

            total_w = (minwidth && minwidth > total_w) ? minwidth : total_w;
            total_h = (minheight && minheight > total_h) ? minheight : total_h;
            return [total_w, total_h];
        }

        return [this._adjust_width, this._adjust_height];
    };

    _pIconText._isFocusAcceptable = function ()
    {
        return this._getEnvironment()?._p_enableaccessibility === true;
    };

    //===============================================================
    // nexacro._IconText : Property
    //===============================================================
    _pIconText.set_icon = function (v)
    {
        this._p_icon = v;
        if (v)
        {
            if (this._icon == null || this._icon.value != v)
            {
                const icon = nexacro.UrlObject(v, this);
                this._icon = icon;
                this.on_apply_icon(icon);
            }
        }
        else
        {
            if (this._icon)
            {
                this._icon = null;
                this.on_apply_icon(null);
            }
        }
    };

    _pIconText.on_apply_icon = function (icon)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIcon(icon);
        }
    };

    _pIconText.set_iconWidth = function (v)
    {
        if (this._p_iconWidth != v)
        {
            this._p_iconWidth = v;
            this.on_apply_iconWidth(v);
        }
    };

    _pIconText.on_apply_iconWidth = function (iconwidth)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconWidth(iconwidth || this._getCSSStyleValue("iconWidth", this._status, this._userstatus));
        }
    };

    _pIconText.set_iconHeight = function (v)
    {
        if (this._p_iconHeight != v)
        {
            this._p_iconHeight = v;
            this.on_apply_iconHeight(v);
        }
    };

    _pIconText.on_apply_iconHeight = function (iconheight)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconHeight(iconheight || this._getCSSStyleValue("iconHeight", this._status, this._userstatus));
        }
    };

    _pIconText.set_iconPosition = function (v)
    {
        if (this._p_iconPosition != v)
        {
            this._p_iconPosition = v;
            this.on_apply_iconPosition(v);
        }
    };

    _pIconText.on_apply_iconPosition = function (iconpos)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconPos(iconpos || this._getCSSStyleValue("iconPosition", this._status, this._userstatus));
        }
    };

    _pIconText.set_iconAnimation = function (v)
    {
        this._p_iconanimation = v;
        if (v)
        {
            if (this._iconAnimation == null || this._iconAnimation.value != v)
            {
                const animation = nexacro.AnimationObject(v);
                this._iconAnimation = animation;
                this.on_apply_iconAnimation(animation);
            }
        }
        else
        {
            if (this._iconAnimation)
            {
                this._iconAnimation = null;
                this.on_apply_iconAnimation(null);
            }
        }
    };

    _pIconText.on_apply_iconAnimation = nexacro._queueAnimationFrame(function (iconAnimation)
    {      
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconAnimation(iconAnimation);
        }
    });

    _pIconText.set_iconAnimationPlayState = function (v)
    {
        this._p_iconAnimationPlayState = v;
        if (v)
        {
            if (this._iconAnimationPlayState == null || this._iconAnimationPlayState.value != v)
            {
                const animationPlayState = nexacro.AnimationPlayStateObject(v);
                this._iconAnimationPlayState = animationPlayState;
                this.on_apply_iconAnimationPlayState(animationPlayState);
            }
        }
        else
        {
            if (this._iconAnimationPlayState)
            {
                this._iconAnimationPlayState = null;
                this.on_apply_iconAnimationPlayState(null);
            }
        }
    };

    _pIconText.on_apply_iconAnimationPlayState = function (iconAnimationPlayState)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconAnimationPlayState(iconAnimationPlayState);
        }
    };

    _pIconText.set_iconTransform = function (v)
    {
        this._p_iconTransform = v;
        if (v)
        {
            if (this._iconTransform == null || this._iconTransform.value != v)
            {
                const iconTransform = nexacro.TransformObject(v);
                this._iconTransform = iconTransform;
                this.on_apply_iconTransform(iconTransform);
            }
        }
        else
        {
            if (this._iconTransform)
            {
                this._iconTransform = null;
                this.on_apply_iconTransform(null);
            }
        }
    };

    _pIconText.on_apply_iconTransform = function (iconTransform)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransform(iconTransform);
        }
    };

    _pIconText.set_iconTransformOrigin = function (v)
    {
        this._p_iconTransformOrigin = v;
        if (v)
        {
            if (this._iconTransformOrigin == null || this._iconTransformOrigin.value != v)
            {
                const iconTransformOrigin = nexacro.TransformOriginObject(v);
                this._iconTransformOrigin = iconTransformOrigin;
                this.on_apply_iconTransformOrigin(iconTransformOrigin);
            }
        }
        else
        {
            if (this._iconTransformOrigin)
            {
                this._iconTransformOrigin = null;
                this.on_apply_iconTransformOrigin(null);
            }
        }
    };

    _pIconText.on_apply_iconTransformOrigin = function (iconTransformOrigin)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransformOrigin(iconTransformOrigin);
        }
    };

    _pIconText.set_iconTransition = function (v)
    {
        this._p_iconTransition = v;
        if (v)
        {
            if (this._iconTransition == null || this._iconTransition.value != v)
            {
                const transition = nexacro.TransitionObject(v);
                this._iconTransition = transition;
                this.on_apply_iconTransition(transition);
            }
        }
        else
        {
            if (this._iconTransition)
            {
                this._iconTransition = null;
                this.on_apply_iconTransition(null);
            }
        }
    };

    _pIconText.on_apply_iconTransition = function (iconTransition)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransition(iconTransition);
        }
    };

    _pIconText.set_textAnimation = function (v)
    {
        this._p_textAnimation = v;
        if (v)
        {
            if (this._textAnimation == null || this._textAnimation.value != v)
            {
                const animation = nexacro.AnimationObject(v);
                this._textAnimation = animation;
                this.on_apply_textAnimation(animation);
            }
        }
        else
        {
            if (this._textAnimation)
            {
                this._textAnimation = null;
                this.on_apply_textAnimation(null);
            }
        }
    };

    _pIconText.on_apply_textAnimation = nexacro._queueAnimationFrame(function (textAnimation)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAnimation(textAnimation);
        }
    });

    _pIconText.set_textAnimationPlayState = function (v)
    {
        this._p_textAnimationPlayState = v;
        if (v)
        {
            if (this._textAnimationPlayState == null || this._textAnimationPlayState.value != v)
            {
                const animationPlayState = nexacro.AnimationPlayStateObject(v);
                this._textAnimationPlayState = animationPlayState;
                this.on_apply_textAnimationPlayState(animationPlayState);
            }
        }
        else
        {
            if (this._textAnimationPlayState)
            {
                this._textAnimationPlayState = null;
                this.on_apply_textAnimationPlayState(null);
            }
        }
    };

    _pIconText.on_apply_textAnimationPlayState = function (textAnimationPlayState)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAnimationPlayState(textAnimationPlayState);
        }
    };

    _pIconText.set_textTransform = function (v)
    {
        this._p_textTransform = v;
        if (v)
        {
            if (this._textTransform == null || this._textTransform.value != v)
            {
                const textTransform = nexacro.TransformObject(v);
                this._textTransform = textTransform;
                this.on_apply_textTransform(textTransform);
            }
        }
        else
        {
            if (this._textTransform)
            {
                this._textTransform = null;
                this.on_apply_textTransform(null);
            }
        }
    };

    _pIconText.on_apply_textTransform = function (textTransform)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransform(textTransform);
        }
    };

    _pIconText.set_textTransformOrigin = function (v)
    {
        this._p_textTransformOrigin = v;
        if (v)
        {
            if (this._textTransformOrigin == null || this._textTransformOrigin.value != v)
            {
                var textTransformOrigin = nexacro.TransformOriginObject(v);
                this._textTransformOrigin = textTransformOrigin;
                this.on_apply_textTransformOrigin(textTransformOrigin);
            }
        }
        else
        {
            if (this._textTransformOrigin)
            {
                this._textTransformOrigin = null;
                this.on_apply_textTransformOrigin(null);
            }
        }
    };

    _pIconText.on_apply_textTransformOrigin = function (textTransformOrigin)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransformOrigin(textTransformOrigin);
        }
    };

    _pIconText.set_textTransition = function (v)
    {
        this._p_textTransition = v;
        if (v)
        {
            if (this._textTransition == null || this._textTransition.value != v)
            {
                const transition = nexacro.TransitionObject(v);
                this._textTransition = transition;
                this.on_apply_textTransition(transition);
            }
        }
        else
        {
            if (this._textTransition)
            {
                this._textTransition = null;
                this.on_apply_textTransition(null);
            }
        }
    };

    _pIconText.on_apply_textTransition = function (textTransition)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransition(textTransition);
        }
    };

    _pIconText.set_textPadding = function (v)
    {
        this._p_textPadding = v;
        if (v)
        {
            if (this._textpadding == null || this._textpadding.value != v)
            {
                var textPadding = nexacro.PaddingObject(v);
                if (textPadding._hasRelative)
                    textPadding = this._resolvePaddingEm(textPadding);
                this._textpadding = textPadding;
                this.on_apply_textPadding(textPadding);
            }
        }
        else
        {
            if (this._textpadding)
            {
                this._textpadding = null;
                this.on_apply_textPadding(null);
            }
        }
    };

    _pIconText.on_apply_textPadding = function (textPadding)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextPadding(textPadding || this._getCSSStyleValue("textPadding", this._status, this._userstatus));
        }
    };

    _pIconText.on_apply_font = function (font)
    {
        nexacro.Component.prototype.on_apply_font.call(this, font);
        if (this._p_textPadding)
        {
            var raw = nexacro.PaddingObject(this._p_textPadding);
            if (raw._hasRelative)
            {
                var resolved = this._resolvePaddingEm(raw);
                this._textpadding = resolved;
                this.on_apply_textPadding(resolved);
            }
        }
        if (nexacro._isEmRemUnit(this._p_textwidth))
            this.on_apply_textwidth(this._p_textwidth);
    };

    _pIconText.set_textwidth = function (v)
    {
        if (v !== undefined && !nexacro._isEmRemUnit(v))
        {
            if (isNaN(v = +v)) return;
        }
        if (this._p_textwidth != v)
        {
            this._p_textwidth = v;
            this.on_apply_textwidth(v);
        }
    };

    _pIconText._getTextWidth = function ()
    {
        // em/rem 단위면 raw 문자열 반환 (DOM에 직접 설정, 브라우저 자동 스케일링)
        if (nexacro._isEmRemUnit(this._p_textwidth))
            return this._p_textwidth;
        return (this._textwidth !== undefined) ? this._textwidth : this._p_textwidth;
    };

    _pIconText.on_apply_textwidth = function (textwidth)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            var val = nexacro._isEmRemUnit(this._p_textwidth) ? this._p_textwidth : textwidth;
            control_elem.setElementTextWidth(val);
        }
    };

    _pIconText.on_apply_text = function (text)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (this._usedecoratetext)
                control_elem.setElementDecorateText(this._displaytext);
            else
                control_elem.setElementText(text);
        }

        if (this._getEnvironment()?._p_enableaccessibility)
        {
            this._setAccessibilityLabel(this._getAccessibilityLabel());
        }
    };

    _pIconText.on_apply_textAlign = function (halign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAlign(halign);
        }
    };

    _pIconText.on_apply_verticalAlign = function (valign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementVerticalAlign(valign);
        }
    };

    _pIconText.on_apply_wordWrap = function (wordwrap)
    {
         const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementWordWrap(wordwrap);

            const fittocontents = this._p_fittocontents;
            if (fittocontents != "none")
            {
                // fittocontents가 width와 both 일때는 적용하지 않음
                if (fittocontents != "height")
                    control_elem.setElementWordWrap("none");

                this._update_position();
            }
        }
    };

    _pIconText.on_apply_textOverflow = function (textoverflow)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextOverflow(textoverflow);
        }
    };

    _pIconText.on_apply_textDecoration = function (textDecoration)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextDecoration(textDecoration);
        }
    };

    _pIconText._properties = [{ name: "icon" }, {name: "iconWidth" }, {name: "iconHeight" }, { name: "iconPosition" }, { name: "textPadding" }, { name: "textwidth" }, 
        { name: "iconAnimation" }, { name: "iconAnimationPlayState" }, { name: "iconTransform" }, { name: "iconTransformOrigin" }, { name: "iconTransition" },
        { name: "textAnimation" }, { name: "textAnimationPlayState" }, { name: "textTransform" }, { name: "textTransformOrigin" }, { name: "textTransition" }
    ];
    nexacro._defineProperties(_pIconText, _pIconText._properties);

    //===============================================================
    // nexacro._IconText : Event Handler
    //===============================================================
    _pIconText._on_icon_onload = function (url, width, height)
    {
        if (this._p_fittocontents !== "none")
        {
            this._update_position();
        }
    };

    //===============================================================
    // nexacro._IconText : Util Function
    //===============================================================
    _pIconText._getCurrentIcon = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
            return control_elem.icon;

        return null;
    };

    _pIconText = null;
}

if (!nexacro._Icon)
{
    //==============================================================================
    // nexacro._Icon
    //==============================================================================
    nexacro._Icon = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pIcon = nexacro._createPrototype(nexacro.Component, nexacro._Icon);
    nexacro._Icon.prototype = _pIcon;
    _pIcon._type_name = "Icon";

    /* default properties */
    _pIcon._p_icon = "";
    _pIcon._p_iconWidth = "";
    _pIcon._p_iconHeight = "";
    _pIcon._p_padding = "";
    _pIcon._p_textAlign = "";
    _pIcon._p_verticalAlign = "";
    _pIcon._p_tabstop = false;
    _pIcon._p_iconAnimation = "";
    _pIcon._p_iconAnimationPlayState = "";
    _pIcon._p_iconTransform = "";
    _pIcon._p_iconTransformOrigin = "";
    _pIcon._p_iconTransition = "";

    /* internal variable */
    _pIcon._icon = null;
    _pIcon._iconAnimation = null;
    _pIcon._iconAnimationPlayState = null;
    _pIcon._iconTransform = null;
    _pIcon._iconTransformOrigin = null;
    _pIcon._iconTransition = null;

    /* status */
    _pIcon._is_focus_accept = false;
    _pIcon._is_simple_control = true;
    _pIcon._is_eventinfo_control = false;
    _pIcon._is_fiticonsize = false;

    _pIcon._p_accessibilityrole = "Icon";

    //===============================================================
    // nexacro._Icon : Create & Destroy & Update 
    //===============================================================
    _pIcon.on_create_normal_control_element = function (parent_elem)
    {
        // create control element
        const control_elem = new nexacro.IconTextControlElement(parent_elem);
        if (control_elem)
            control_elem.setLinkedControl(this);

        this._control_element = control_elem;

        return control_elem;
    };

    _pIcon.on_create_contents = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (this._p_textAlign)
                control_elem.setElementTextAlign(this._p_textAlign);
            if (this._p_verticalAlign)
                control_elem.setElementVerticalAlign(this._p_verticalAlign);

            if (this._icon)
                control_elem.setElementIcon(this._icon);
            if (this._p_iconWidth)
                control_elem.setElementIconWidth(this._p_iconWidth);
            if (this._p_iconHeight)
                control_elem.setElementIconHeight(this._p_iconHeight);
            if (this._iconAnimation)
                control_elem.setElementIconAnimation(this._iconAnimation);
            if (this._iconAnimationPlayState)
                control_elem.setElementIconAnimationPlayState(this._iconAnimationPlayState);
            if (this._iconTransform)
                control_elem.setElementIconTransform(this._iconTransform);
            if (this._iconTransformOrigin)
                control_elem.setElementIconTransformOrigin(this._iconTransformOrigin);
            if (this._iconTransition)
                control_elem.setElementIconTransition(this._iconTransition);

            if (this._p_fittocontents != "none")
                this._on_apply_fittocontents();
        }
    };

    _pIcon.on_created_contents = function (win)
    {
        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }
    };

    _pIcon.on_destroy_contents = function ()
    {
        if (this._icon)
            this._icon = null;
    };

    _pIcon.on_create_contents_command = function ()
    {
        return "";
    };

    _pIcon.on_attach_contents_handle = function (win/*, enablea11y*/)
    {
        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }
    };

    //===============================================================
    // nexacro._Icon : Override
    //===============================================================
    _pIcon._on_getFitSize = function ()
    {
        const elem = this.getElement();
        if (elem)
        {
            let total_w = 0;
            let total_h = 0;

            const border = this._getCurrentStyleBorder();
            if (border)
            {
                total_w += border._getBorderWidth();
                total_h += border._getBorderHeight();
            }

            const padding = this._getCurrentStylePadding();
            if (padding)
            {
                total_w += padding.left + padding.right;
                total_h += padding.top + padding.bottom;
            }

            const icon = this._icon || this._getCSSStyleValue("icon");
            if (icon)
            {
                const icon_pos = this._p_iconPosition || this._getCSSStyleValue("iconPosition");
                const icon_width = this._p_iconWidth || this._getCSSStyleValue("iconWidth");
                const icon_height = this._p_iconHeight || this._getCSSStyleValue("iconHeight");
                
                const _resolved_width = icon_width ? this._resolveEmPx(icon_width) : null;
                const _resolved_height = icon_height ? this._resolveEmPx(icon_height) : null;
                let icon_size = { width: _resolved_width, height: _resolved_height };
                if (icon_size.width == null || icon_size.height == null)
                {
                    let natural_size = { width: 0, height: 0 };
                    if (icon._sysurl)
                    {
                        natural_size = nexacro._getImageSize_extended(icon._sysurl, this._on_icon_onload, this) || { width: 0, height: 0 };
                    }

                    // 한쪽 크기만 지정된 경우 원본 이미지의 종횡비 유지
                    if (icon_size.width != null)
                    {
                        icon_size.height = natural_size.width > 0 ? icon_size.width * (natural_size.height / natural_size.width) : 0;
                    }
                    else if (icon_size.height != null)
                    {
                        icon_size.width = natural_size.height > 0 ? icon_size.height * (natural_size.width / natural_size.height) : 0;
                    }
                    else
                    {
                        icon_size = natural_size;
                    }
                }

                if (icon_pos == "left" || icon_pos == "right")
                {
                    total_w += icon_size.width;
                    total_h = Math.max(total_h, icon_size.height);
                }
                else
                {
                    total_h += icon_size.height;
                    total_w = Math.max(total_w, icon_size.width);
                }
            }

            return [total_w, total_h];
        }

        return [this._adjust_width, this._adjust_height];
    };

    _pIcon._isFocusAcceptable = function ()
    {
        return this._getEnvironment()?._p_enableaccessibility === true;
    };

    //===============================================================
    // nexacro._Icon : Property
    //===============================================================
    _pIcon.set_icon = function (v)
    {
        this._p_icon = v;
        if (v)
        {
            if (this._icon == null || this._icon.value != v)
            {
                const icon = nexacro.UrlObject(v, this);
                this._icon = icon;
                this.on_apply_icon(icon);
            }
        }
        else
        {
            if (this._icon)
            {
                this._icon = null;
                this.on_apply_icon(null);
            }
        }
    };

    _pIcon.on_apply_icon = function (icon)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIcon(icon);
        }
    };

    _pIcon.on_apply_textAlign = function (halign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAlign(halign);
        }
    };

    _pIcon.on_apply_verticalAlign = function (valign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementVerticalAlign(valign);
        }
    };

    _pIcon.set_iconAnimation = function (v)
    {
        this._p_iconanimation = v;
        if (v)
        {
            if (this._iconAnimation == null || this._iconAnimation.value != v)
            {
                const animation = nexacro.AnimationObject(v);
                this._iconAnimation = animation;
                this.on_apply_iconAnimation(animation);
            }
        }
        else
        {
            if (this._iconAnimation)
            {
                this._iconAnimation = null;
                this.on_apply_iconAnimation(null);
            }
        }
    };

    _pIcon.on_apply_iconAnimation = nexacro._queueAnimationFrame(function (iconAnimation)
    {      
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconAnimation(iconAnimation);
        }
    });

    _pIcon.set_iconAnimationPlayState = function (v)
    {
        this._p_iconAnimationPlayState = v;
        if (v)
        {
            if (this._iconAnimationPlayState == null || this._iconAnimationPlayState.value != v)
            {
                const animationPlayState = nexacro.AnimationPlayStateObject(v);
                this._iconAnimationPlayState = animationPlayState;
                this.on_apply_iconAnimationPlayState(animationPlayState);
            }
        }
        else
        {
            if (this._iconAnimationPlayState)
            {
                this._iconAnimationPlayState = null;
                this.on_apply_iconAnimationPlayState(null);
            }
        }
    };

    _pIcon.on_apply_iconAnimationPlayState = function (iconAnimationPlayState)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconAnimationPlayState(iconAnimationPlayState);
        }
    };

    _pIcon.set_iconTransform = function (v)
    {
        this._p_iconTransform = v;
        if (v)
        {
            if (this._iconTransform == null || this._iconTransform.value != v)
            {
                const iconTransform = nexacro.TransformObject(v);
                this._iconTransform = iconTransform;
                this.on_apply_iconTransform(iconTransform);
            }
        }
        else
        {
            if (this._iconTransform)
            {
                this._iconTransform = null;
                this.on_apply_iconTransform(null);
            }
        }
    };

    _pIcon.on_apply_iconTransform = function (iconTransform)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransform(iconTransform);
        }
    };

    _pIcon.set_iconTransformOrigin = function (v)
    {
        this._p_iconTransformOrigin = v;
        if (v)
        {
            if (this._iconTransformOrigin == null || this._iconTransformOrigin.value != v)
            {
                const iconTransformOrigin = nexacro.TransformOriginObject(v);
                this._iconTransformOrigin = iconTransformOrigin;
                this.on_apply_iconTransformOrigin(iconTransformOrigin);
            }
        }
        else
        {
            if (this._iconTransformOrigin)
            {
                this._iconTransformOrigin = null;
                this.on_apply_iconTransformOrigin(null);
            }
        }
    };

    _pIcon.on_apply_iconTransformOrigin = function (iconTransformOrigin)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransformOrigin(iconTransformOrigin);
        }
    };

    _pIcon.set_iconTransition = function (v)
    {
        this._p_iconTransition = v;
        if (v)
        {
            if (this._iconTransition == null || this._iconTransition.value != v)
            {
                const transition = nexacro.TransitionObject(v);
                this._iconTransition = transition;
                this.on_apply_iconTransition(transition);
            }
        }
        else
        {
            if (this._iconTransition)
            {
                this._iconTransition = null;
                this.on_apply_iconTransition(null);
            }
        }
    };

    _pIcon.on_apply_iconTransition = function (iconTransition)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementIconTransition(iconTransition);
        }
    };

    _pIcon._properties = [{ name: "icon" }, { name: "iconWidth" }, { name: "iconHeight" }, { name: "iconAnimation" }, { name: "iconAnimationPlayState" }, { name: "iconTransform" }, { name: "iconTransformOrigin" }, { name: "iconTransition" }];
    nexacro._defineProperties(_pIcon, _pIcon._properties);

    //===============================================================
    // nexacro._Icon : Event Handler
    //===============================================================
    _pIcon._on_icon_onload = function (url, width, height)
    {
        if (this._p_fittocontents !== "none")
        {
            this._update_position();
        }
    };

    //===============================================================
    // nexacro._Icon : Util Function
    //===============================================================
    _pIcon._getCurrentIcon = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
            return control_elem.icon;

        return null;
    };

    _pIcon = null;
}

if (!nexacro.Static)
{
    //==============================================================================
    // nexacro.Static
    //==============================================================================
    nexacro.Static = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Component.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pStatic = nexacro._createPrototype(nexacro.Component, nexacro.Static);
    nexacro.Static.prototype = _pStatic;
    _pStatic._type_name = "Static";

    /* default properties */
    _pStatic._p_text = "";
    _pStatic._p_textPadding = "";
    _pStatic._p_usedecorate = false;
    _pStatic._p_tabstop = false;
    _pStatic._p_textAnimation = "";
    _pStatic._p_textAnimationPlayState = "";
    _pStatic._p_textTransform = "";
    _pStatic._p_textTransformOrigin = "";
    _pStatic._p_textTransition = "";
    _pStatic._p_selectable = "none";

    /* internal variable */
    _pStatic._textpadding = null;
    _pStatic._textAnimation = null;
    _pStatic._textAnimationPlayState = null;
    _pStatic._textTransform = null;
    _pStatic._textTransformOrigin = null;
    _pStatic._textTransition = null;

    /* status */
    _pStatic._is_focus_accept = false;
    _pStatic._is_simple_control = true;
    _pStatic._apply_client_padding = true;
    _pStatic._is_overflow_visible = false;

    _pStatic._p_accessibilityrole = "static";

    /* event list */
    _pStatic._event_list =
    {
        "onclick": 1,
        "onlbuttondown": 1, "onlbuttonup": 1, "onlongpress": 1,
        "onmouseenter": 1, "onmouseleave": 1, "onmousemove": 1, "onmove": 1,
        "onmousedown": 1, "onmouseup": 1,
        "onsize": 1,
        "ontouchstart": 1, "ontouchmove": 1, "ontouchend": 1,
        "oncontextmenu": 1,
        "onrbuttondown": 1, "onrbuttonup": 1
    };

    //===============================================================
    // nexacro.Static : Create & Destroy & Update 
    //===============================================================
    _pStatic.on_create_normal_control_element = function (parent_elem)
    {
        // create control element
        const control_elem = new nexacro.IconTextControlElement(parent_elem);
        if (control_elem)
            control_elem.setLinkedControl(this);

        this._control_element = control_elem;

        return control_elem;
    };

    _pStatic.on_create_contents = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (this._p_textAlign)
                control_elem.setElementTextAlign(this._p_textAlign);
            if (this._p_verticalAlign)
                control_elem.setElementVerticalAlign(this._p_verticalAlign);

            if (this._p_wordWrap)
                control_elem.setElementWordWrap(this._p_wordWrap);
            else
                control_elem.setElementCSSMapWordWrapInfo(this._getCSSStyleValue("wordWrap"));

            if (this._p_textOverflow)
                control_elem.setElementTextOverflow(this._p_textOverflow);
            else
                control_elem.setElementCSSMapTextOverflowInfo(this._getCSSStyleValue("textOverflow"));

            const textPadding = this._textpadding || this._getCSSStyleValue("textPadding");
            if (textPadding)
                control_elem.setElementTextPadding(textPadding);

            // CSS text-decoration
            if (this._textdecoration)
                control_elem.setElementTextDecoration(this._textdecoration);

            if (this._is_overflow_visible)
                control_elem.setElementOverflow(true);

            // Static usedecorate
            if (this._displaytext)
            {
                if (this._p_usedecorate)
                {
                    control_elem.setElementPointerEvents(this._isEnable() ? "" : "none");
                    control_elem.setElementDecorateText(this._getStringResourceProperty(this._p_text));
                }
                else
                    control_elem.setElementText(this._displaytext);
            }

            if (this._textAnimation)
                control_elem.setElementTextAnimation(this._textAnimation);
            if (this._textAnimationPlayState)
                control_elem.setElementTextAnimationPlayState(this._textAnimationPlayState);
            if (this._textTransform)
                control_elem.setElementTextTransform(this._textTransform);
            if (this._textTransformOrigin)
                control_elem.setElementTextTransformOrigin(this._textTransformOrigin);
            if (this._textTransition)
                control_elem.setElementTextTransition(this._textTransition);

            this.on_apply_selectable();

            const fittocontents = this._p_fittocontents;
            if (fittocontents != "none")
            {
                // fittocontents가 width와 both 일때는 적용하지 않음
                if (fittocontents !== "height")
                {
                    control_elem.setElementWordWrap("none");
                }
                this._on_apply_fittocontents();
            }
        }
    };

    _pStatic.on_created_contents = function (win)
    {
        if (this._p_expr)
            this._on_apply_expr(this._p_expr);

        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }

        if (this._getEnvironment()?._p_enableaccessibility)
        {
            this._on_created_accessibility_contents(win, true);
        }
    };

    _pStatic.on_destroy_contents = function ()
    {
        if (this._textpadding)
            this._textpadding = null;
    };

    _pStatic.on_create_contents_command = function ()
    {
        if (this._p_expr)
            this._on_apply_expr(this._p_expr);

        return "";
    };

    _pStatic.on_attach_contents_handle = function (win, enablea11y)
    {
        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }
        this._on_attach_accessibility_contents_handle(win, enablea11y);
    };

    //===============================================================
    // nexacro.Static : Override
    //===============================================================
    _pStatic.on_apply_status = function (status, userstatus)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            if (!this._p_textPadding)
                control_elem.setElementTextPadding(this._getCSSStyleValue("textPadding", status, userstatus));
            if (!this._p_wordWrap)
                control_elem.setElementCSSMapWordWrapInfo(this._getCSSStyleValue("wordWrap", status, userstatus));
            if (!this._p_textOverflow)
                control_elem.setElementCSSMapTextOverflowInfo(this._getCSSStyleValue("textOverflow", status, userstatus));
        }
    };

    _pStatic.on_get_prop_tabstop = function ()
    {
        if (this._getEnvironment()?._p_enableaccessibility)
        {
            if (this._p_accessibilityenable && this._p_accessibilityrole == "link")
                return true;
        }
        return false;
    };

    _pStatic._isFocusAcceptable = function ()
    {
        return this._getEnvironment()?._p_enableaccessibility === true;
    };

    _pStatic._on_getFitSize = function ()
    {
        const elem = this.getElement();
        if (elem)
        {
            let total_w = 0;
            let total_h = 0;

            let border = this._getCurrentStyleBorder();
            if (border)
            {
                total_w += border._getBorderWidth();
                total_h += border._getBorderHeight();
            }

            let padding = this._getCurrentStylePadding();
            if (padding)
            {
                total_w += padding.left + padding.right;
                total_h += padding.top + padding.bottom;
            }

            let text;
            if (this._p_usedecorate)
            {
                text = this._p_text;
            }
            else if (this._displaytext && this._displaytext !== "")
            {
                // apply_text로 처리된 대상 기준으로 fittocontects가 이루어져야 함
                text = this._displaytext;
            }
            else
                text = this._p_text;
            if (text)
            {
                const font = this._getCurrentStyleInheritValue("font");
                const refer_font = this._getReferenceAbsoluteFont(font); // use to em / rem
                const wordspace = this._getCurrentStyleInheritValue("wordSpacing");
                const letterspace = this._getCurrentStyleInheritValue("letterSpacing");
                const textpadding = this._textpadding || this._getCSSStyleValue("textPadding");

                let wordwrap = "none";
                let width = null;
                let multiline = false;
                if (text.search("\n") > -1)
                {
                    multiline = true;
                }

                if (this._p_fittocontents == "height")
                {
                    // fittocontents가 height 인경우 wordwrap 적용하고 그에 따라 multiline도 반영
					wordwrap = this._p_wordWrap || this._getCSSStyleValue("wordWrap") || "none";
					if (wordwrap && wordwrap != "none")
					{
						// refresh wordwrap (width/both -> height)
						elem.setElementWordWrap(wordwrap);
						multiline = true;
                        width = this._adjust_width - total_w;
                    }
                }

                const b_decoration = this._p_usedecorate;
                const text_size = nexacro._getTextSize(text, font, multiline, width, wordwrap, wordspace, letterspace, b_decoration, undefined, undefined, refer_font);

                total_w += Math.ceil(this._p_textwidth != null ? this._p_textwidth : text_size[0]);
                total_h += Math.ceil(text_size[1]);

                if (textpadding)
                {
                    total_w += textpadding.left + textpadding.right;
                    total_h += textpadding.top + textpadding.bottom;
                }
            }

            // minwidth, minheight 보완
            const minwidth = this._getComputedPropMinWidth();
            const minheight = this._getComputedPropMinHeight();

            total_w = (minwidth && minwidth > total_w) ? minwidth : total_w;
            total_h = (minheight && minheight > total_h) ? minheight : total_h;
            return [total_w, total_h];
        }
        return [this._adjust_width, this._adjust_height];
    };

    //===============================================================
    // nexacro.Static : Property
    //===============================================================
    _pStatic.set_usedecorate = function (v)
    {
        v = nexacro._toBoolean(v);
        if (this._p_usedecorate != v)
        {
            this._p_usedecorate = v;
            this.on_apply_usedecorate();
        }
    };

    _pStatic.on_apply_usedecorate = function ()
    {
        this._on_apply_text();
    };

    _pStatic.set_textAnimation = function (v)
    {
        this._p_textAnimation = v;
        if (v)
        {
            if (this._textAnimation == null || this._textAnimation.value != v)
            {
                const animation = nexacro.AnimationObject(v);
                this._textAnimation = animation;
                this.on_apply_textAnimation(animation);
            }
        }
        else
        {
            if (this._textAnimation)
            {
                this._textAnimation = null;
                this.on_apply_textAnimation(null);
            }
        }
    };

    _pStatic.on_apply_textAnimation = nexacro._queueAnimationFrame(function (textAnimation)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAnimation(textAnimation);
        }
    });

    _pStatic.set_textAnimationPlayState = function (v)
    {
        this._p_textAnimationPlayState = v;
        if (v)
        {
            if (this._textAnimationPlayState == null || this._textAnimationPlayState.value != v)
            {
                const animationPlayState = nexacro.AnimationPlayStateObject(v);
                this._textAnimationPlayState = animationPlayState;
                this.on_apply_textAnimationPlayState(animationPlayState);
            }
        }
        else
        {
            if (this._textAnimationPlayState)
            {
                this._textAnimationPlayState = null;
                this.on_apply_textAnimationPlayState(null);
            }
        }
    };

    _pStatic.on_apply_textAnimationPlayState = function (textAnimationPlayState)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAnimationPlayState(textAnimationPlayState);
        }
    };

    _pStatic.set_textTransform = function (v)
    {
        this._p_textTransform = v;
        if (v)
        {
            if (this._textTransform == null || this._textTransform.value != v)
            {
                const textTransform = nexacro.TransformObject(v);
                this._textTransform = textTransform;
                this.on_apply_textTransform(textTransform);
            }
        }
        else
        {
            if (this._textTransform)
            {
                this._textTransform = null;
                this.on_apply_textTransform(null);
            }
        }
    };

    _pStatic.on_apply_textTransform = function (textTransform)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransform(textTransform);
        }
    };

    _pStatic.set_textTransformOrigin = function (v)
    {
        this._p_textTransformOrigin = v;
        if (v)
        {
            if (this._textTransformOrigin == null || this._textTransformOrigin.value != v)
            {
                var textTransformOrigin = nexacro.TransformOriginObject(v);
                this._textTransformOrigin = textTransformOrigin;
                this.on_apply_textTransformOrigin(textTransformOrigin);
            }
        }
        else
        {
            if (this._textTransformOrigin)
            {
                this._textTransformOrigin = null;
                this.on_apply_textTransformOrigin(null);
            }
        }
    };

    _pStatic.on_apply_textTransformOrigin = function (textTransformOrigin)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransformOrigin(textTransformOrigin);
        }
    };

    _pStatic.set_textTransition = function (v)
    {
        this._p_textTransition = v;
        if (v)
        {
            if (this._textTransition == null || this._textTransition.value != v)
            {
                const transition = nexacro.TransitionObject(v);
                this._textTransition = transition;
                this.on_apply_textTransition(transition);
            }
        }
        else
        {
            if (this._textTransition)
            {
                this._textTransition = null;
                this.on_apply_textTransition(null);
            }
        }
    };

    _pStatic.on_apply_textTransition = function (textTransition)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextTransition(textTransition);
        }
    };

    _pStatic.set_selectable = function (v)
    {
        if (this._p_selectable != v)
        {
            switch (v)
            {
                case "text":
                case "none":
                    this._p_selectable = v;
                    this.on_apply_selectable();
                    break;
            }
        }
    };

    _pStatic.on_apply_selectable = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementUserSelect(this._p_selectable);
        }
    };

    _pStatic.set_textPadding = function (v)
    {
        this._p_textPadding = v;
        if (v)
        {
            if (this._textpadding == null || this._textpadding.value != v)
            {
                var textPadding = nexacro.PaddingObject(v);
                if (textPadding._hasRelative)
                    textPadding = this._resolvePaddingEm(textPadding);
                this._textpadding = textPadding;
                this.on_apply_textPadding(textPadding);
            }
        }
        else
        {
            if (this._textpadding)
            {
                this._textpadding = null;
                this.on_apply_textPadding(null);
            }
        }
    };

    _pStatic.on_apply_font = function (font)
    {
        nexacro.Component.prototype.on_apply_font.call(this, font);
        if (this._p_textPadding)
        {
            var raw = nexacro.PaddingObject(this._p_textPadding);
            if (raw._hasRelative)
            {
                var resolved = this._resolvePaddingEm(raw);
                this._textpadding = resolved;
                this.on_apply_textPadding(resolved);
            }
        }
    };

    _pStatic.on_apply_textPadding = function (textPadding)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextPadding(textPadding || this._getCSSStyleValue("textPadding", this._status, this._userstatus));
        }
    };

    _pStatic.on_apply_text = function (text)
    {
        if (this._p_usedecorate)
        {
            // usedecoreate 속성이 true 이면 displaytext update
            this._displaytext = nexacro._getDisplayTextfromDecorateText(text);

            // label도 update
            if (this._getEnvironment()?._p_enableaccessibility)
            {
                this.on_apply_prop_accessibilitylabel();
            }
        }

        const control_elem = this.getElement();
        if (control_elem)
        {
            if (this._p_usedecorate)
            {
                control_elem.setElementDecorateText(text);
            }
            else
            {
                control_elem.setElementText(text);
            }
            control_elem.setElementPointerEvents();
        }

        if (this._p_fittocontents != "none")
        {
            this._update_position();
        }
    };

    _pStatic.on_apply_prop_enable = function ()
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementPointerEvents(this._isEnable() ? "" : "none");
        }
    }

    _pStatic.on_apply_textAlign = function (halign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextAlign(halign);
        }
    };

    _pStatic.on_apply_verticalAlign = function (valign)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementVerticalAlign(valign);
        }
    };

    _pStatic.on_apply_wordWrap = function (wordwrap)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
			control_elem.setElementWordWrap(wordwrap);

			var fittocontents = this._p_fittocontents;
			if (fittocontents != "none")
			{
				// fittocontents가 width와 both 일때는 적용하지 않음
				if (fittocontents !== "height")
					control_elem.setElementWordWrap("none");

				this._update_position();
			}
        }
    };

    _pStatic.on_apply_textDecoration = function (textDecoration)
    {
        const control_elem = this.getElement();
        if (control_elem)
        {
            control_elem.setElementTextDecoration(textDecoration);
        }
    };

    _pStatic._properties = [{ name: "usedecorate" }, { name: "textPadding" }, { name: "textAnimation" }, { name: "textAnimationPlayState" }, { name: "textTransform" }, { name: "textTransformOrigin" }, { name: "textTransition" }, { name: "selectable" }];
    nexacro._defineProperties(_pStatic, _pStatic._properties);

    _pStatic = null;
}

if (!nexacro._TitleBarIconTextControl)
{
    //==============================================================================
    // nexacro._TitleBarIconTextControl
    //==============================================================================
    nexacro._TitleBarIconTextControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro._IconText.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pTitleBarIconTextControl = nexacro._createPrototype(nexacro._IconText, nexacro._TitleBarIconTextControl);
    nexacro._TitleBarIconTextControl.prototype = _pTitleBarIconTextControl;
    _pTitleBarIconTextControl._type_name = "TitleBarIconTextControl";

    /* status */
    _pTitleBarIconTextControl._is_subcontrol = true;
    _pTitleBarIconTextControl._is_fiticonsize = true;

    _pTitleBarIconTextControl = null;
}