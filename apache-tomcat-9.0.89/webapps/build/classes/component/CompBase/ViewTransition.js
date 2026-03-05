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

if (nexacro._Browser !== "Runtime" && !nexacro._ViewTransitionEffect)
{
    // bezier, matrix
    (function ()
    {
        const kSplineTableSize = 11;
        const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

        function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
        function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
        function C(aA1) { return 3.0 * aA1; }

        ////////////////////////////////////////////////////////////////////////////////////////////////
        // nexacro._TransformEasing
        ////////////////////////////////////////////////////////////////////////////////////////////////
        nexacro._TransformEasing = function (name, easing)
        {
            this.name = name;
            if (typeof easing === 'function')
            {
                this._getValue = easing;
            }
            else if (easing.length == 4)
            {
                this.dX1 = easing[0], this.dY1 = easing[1], this.dX2 = easing[2], this.dY2 = easing[3];
                if (!(0 <= this.dX1 && this.dX1 <= 1 && 0 <= this.dX2 && this.dX2 <= 1)) return;

                this.sampleValues = new Array(kSplineTableSize);

                if (this.dX1 !== this.dY1 || this.dX2 !== this.dY2)
                {
                    for (var i = 0; i < kSplineTableSize; ++i)
                    {
                        this.sampleValues[i] = this.calcBezier(i * kSampleStepSize, this.dX1, this.dX2);
                    }
                }
            }
        };

        var _pTransformEasing = nexacro._createPrototype(nexacro.Object, nexacro._TransformEasing);
        nexacro._TransformEasing.prototype = _pTransformEasing;
        _pTransformEasing._type_name = "_TransformEasing";

        _pTransformEasing.dX1 = 0;
        _pTransformEasing.dY1 = 0;
        _pTransformEasing.dX2 = 0;
        _pTransformEasing.dY2 = 0;
        _pTransformEasing.sampleValues = null;

        _pTransformEasing._getValue = null;
        _pTransformEasing.isCustomEasing = function ()
        {
            return this._getValue !== null;
        };

        _pTransformEasing.calcBezier = function calcBezier(aT, aA1, aA2)
        {
            return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        };

        _pTransformEasing.getSlope = function (aT, aA1, aA2)
        {
            return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
        };

        _pTransformEasing.binarySubdivide = function (aX, aA, aB, mX1, mX2)
        {
            var currentX, currentT, i = 0;
            do
            {
                currentT = aA + (aB - aA) / 2.0;
                currentX = this.calcBezier(currentT, mX1, mX2) - aX;
                if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
            } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
            return currentT;
        };

        _pTransformEasing.newtonRaphsonIterate = function (aX, aGuessT, mX1, mX2)
        {
            for (var i = 0; i < 4; ++i)
            {
                var currentSlope = this.getSlope(aGuessT, mX1, mX2);
                if (currentSlope === 0.0) return aGuessT;
                var currentX = this.calcBezier(aGuessT, mX1, mX2) - aX;
                aGuessT -= currentX / currentSlope;
            }
            return aGuessT;
        };

        _pTransformEasing.getTForX = function (aX)
        {
            var intervalStart = 0.0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && this.sampleValues[currentSample] <= aX; ++currentSample)
            {
                intervalStart += kSampleStepSize;
            }
            --currentSample;

            var dist = (aX - this.sampleValues[currentSample]) / (this.sampleValues[currentSample + 1] - this.sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = this.getSlope(guessForT, this.dX1, this.dX2);

            if (initialSlope >= 0.001)
            {
                return this.newtonRaphsonIterate(aX, guessForT, this.dX1, this.dX2);
            }
            else if (initialSlope === 0.0)
            {
                return guessForT;
            }
            else
            {
                return this.binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, this.dX1, this.dX2);
            }
        };

        _pTransformEasing.getValue = function (x)
        {
            if (this._getValue && typeof this._getValue === 'function')
            {
                return this._getValue.call(null, x);
            }
            else
            {
                if (this.dX1 === this.dY1 && this.dX2 === this.dY2) return x;
                if (x === 0) return 0;
                if (x === 1) return 1;
                return this.calcBezier(this.getTForX(x), this.dY1, this.dY2);
            }
        };


        nexacro._TransformMatrix = function (src)
        {
            if (src)
            {
                this.sx = src.sx;
                this.shy = src.shy;
                this.w0 = src.w0;
                this.shx = src.shx;
                this.sy = src.sy;
                this.w1 = src.w1;
                this.tx = src.tx;
                this.ty = src.ty;
                this.w2 = src.w2;
            }
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////
        // nexacro._TransformMatrix
        ////////////////////////////////////////////////////////////////////////////////////////////////
        var _pTransformMatrix = nexacro._createPrototype(nexacro.Object, nexacro._TransformMatrix);
        nexacro._TransformMatrix.prototype = _pTransformMatrix;
        _pTransformMatrix._type_name = "_TransformMatrix";

        _pTransformMatrix.sx = 1.0;
        _pTransformMatrix.shy = 0;
        _pTransformMatrix.w0 = 0;
        _pTransformMatrix.shx = 0;
        _pTransformMatrix.sy = 1.0;
        _pTransformMatrix.w1 = 0;
        _pTransformMatrix.tx = 0;
        _pTransformMatrix.ty = 0;
        _pTransformMatrix.w2 = 1.0;

        _pTransformMatrix.rectToQuad = function (x1, y1, x2, y2, quad)
        {
            const r = [
                x1, y1, x2, y1,
                x2, y2, x1, y2
            ];

            if (!this.squareToQuad(r))
                return false;
            if (!this.invert())
                return false;

            const destMatrix = new nexacro._TransformMatrix();
            if (!destMatrix.squareToQuad(quad))
                return false;

            this.multiply(destMatrix);

            return true;
        };
        _pTransformMatrix.squareToQuad = function (quad)
        {
            const dx = quad[0] - quad[2] + quad[4] - quad[6];
            const dy = quad[1] - quad[3] + quad[5] - quad[7];
            if (dx == 0.0 && dy == 0.0)
            {
                // Affine case (parallelogram)
                //---------------
                this.sx = quad[2] - quad[0];
                this.shy = quad[3] - quad[1];
                this.w0 = 0.0;
                this.shx = quad[4] - quad[2];
                this.sy = quad[5] - quad[3];
                this.w1 = 0.0;
                this.tx = quad[0];
                this.ty = quad[1];
                this.w2 = 1.0;
            }
            else
            {
                const dx1 = quad[2] - quad[4];
                const dy1 = quad[3] - quad[5];
                const dx2 = quad[6] - quad[4];
                const dy2 = quad[7] - quad[5];
                const den = dx1 * dy2 - dx2 * dy1;
                if (den == 0.0)
                {
                    // Singular case
                    //---------------
                    this.sx = this.shy = this.w0 = this.shx = this.sy = this.w1 = this.tx = this.ty = this.w2 = 0.0;
                    return false;
                }
                // General case
                //---------------
                const u = (dx * dy2 - dy * dx2) / den;
                const v = (dy * dx1 - dx * dy1) / den;

                this.sx = quad[2] - quad[0] + u * quad[2];
                this.shy = quad[3] - quad[1] + u * quad[3];
                this.w0 = u;
                this.shx = quad[6] - quad[0] + v * quad[6];
                this.sy = quad[7] - quad[1] + v * quad[7];
                this.w1 = v;
                this.tx = quad[0];
                this.ty = quad[1];
                this.w2 = 1.0;
            }
            return true;
        };
        _pTransformMatrix.invert = function ()
        {
            const d0 = this.sy * this.w2 - this.w1 * this.ty;
            const d1 = this.w0 * this.ty - this.shy * this.w2;
            const d2 = this.shy * this.w1 - this.w0 * this.sy;
            let d = this.sx * d0 + this.shx * d1 + this.tx * d2;
            if (d == 0.0) 
            {
                this.sx = this.shy = this.w0 = this.shx = this.sy = this.w1 = this.tx = this.ty = this.w2 = 0.0;
                return false;
            }
            d = 1.0 / d;

            const a = new nexacro._TransformMatrix(this);

            this.sx = d * d0;
            this.shy = d * d1;
            this.w0 = d * d2;
            this.shx = d * (a.w1 * a.tx - a.shx * a.w2);
            this.sy = d * (a.sx * a.w2 - a.w0 * a.tx);
            this.w1 = d * (a.w0 * a.shx - a.sx * a.w1);
            this.tx = d * (a.shx * a.ty - a.sy * a.tx);
            this.ty = d * (a.shy * a.tx - a.sx * a.ty);
            this.w2 = d * (a.sx * a.sy - a.shy * a.shx);
            return true;
        };
        _pTransformMatrix.multiply = function (m)
        {
            const a = new nexacro._TransformMatrix(this);
            this.sx = m.sx * a.sx + m.shx * a.shy + m.tx * a.w0;
            this.shx = m.sx * a.shx + m.shx * a.sy + m.tx * a.w1;
            this.tx = m.sx * a.tx + m.shx * a.ty + m.tx * a.w2;
            this.shy = m.shy * a.sx + m.sy * a.shy + m.ty * a.w0;
            this.sy = m.shy * a.shx + m.sy * a.sy + m.ty * a.w1;
            this.ty = m.shy * a.tx + m.sy * a.ty + m.ty * a.w2;
            this.w0 = m.w0 * a.sx + m.w1 * a.shy + m.w2 * a.w0;
            this.w1 = m.w0 * a.shx + m.w1 * a.sy + m.w2 * a.w1;
            this.w2 = m.w0 * a.tx + m.w1 * a.ty + m.w2 * a.w2;
        };
        _pTransformMatrix.preMultiply = function (m)
        {
            const a = new nexacro._TransformMatrix(this);
            this.sx = a.sx * m.sx + a.shx * m.shy + a.tx * m.w0;
            this.shx = a.sx * m.shx + a.shx * m.sy + a.tx * m.w1;
            this.tx = a.sx * m.tx + a.shx * m.ty + a.tx * m.w2;
            this.shy = a.shy * m.sx + a.sy * m.shy + a.ty * m.w0;
            this.sy = a.shy * m.shx + a.sy * m.sy + a.ty * m.w1;
            this.ty = a.shy * m.tx + a.sy * m.ty + a.ty * m.w2;
            this.w0 = a.w0 * m.sx + a.w1 * m.shy + a.w2 * m.w0;
            this.w1 = a.w0 * m.shx + a.w1 * m.sy + a.w2 * m.w1;
            this.w2 = a.w0 * m.tx + a.w1 * m.ty + a.w2 * m.w2;
        };
    })();

    ////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // View Transition Object (wre only)
    // - 뷰전환이 발생하는 경우로, 이전 뷰의 스냅샷을 캡쳐하고, 새로운 뷰로의 전환을 애니메이션으로 구동함.
    // - 브라우저에서 실험적인 기능으로 document.startViewTransition으로 기능을 제공함.
    //   단, ::view-transition-old, ::view-transition-new pseudoElement를 사용하기 때문에
    //   Javascript를 사용하여 직접 스타일 설정이 불가하기 때문에, CSS Variable을 사용하여 처리. 
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // nexacro._ViewTransitionEffect
    ////////////////////////////////////////////////////////////////////////////////////////////////
    nexacro._ViewTransitionEffect = function (node, effect)
    {
        this._effect = effect;
        this._target = node;
    };

    var _pViewTransitionEffect = nexacro._createPrototype(nexacro.Object, nexacro._ViewTransitionEffect);
    nexacro._ViewTransitionEffect.prototype = _pViewTransitionEffect;
    _pViewTransitionEffect._type_name = "_ViewTransitionEffect";

    _pViewTransitionEffect._target = null;
    _pViewTransitionEffect._effect = null;

    _pViewTransitionEffect._easingFunction = null;
    _pViewTransitionEffect._properties = null;

    _pViewTransitionEffect._effectors = null;

    _pViewTransitionEffect.on_apply = nexacro._emptyFn;
    _pViewTransitionEffect.on_cancel = nexacro._emptyFn;

    //===============================================================
    // Create & Destroy & Update
    //===============================================================
    _pViewTransitionEffect.destroy = function ()
    {
        nexacro.Object.prototype.destroy.call(this);

        if (this._effectors)
        {
            this._effectors.forEach(effector =>
            {
                effector.destroy();
            });
            this._effectors = null;
        }
        this._effect = null;
        this._target = null;

        return true;
    };

    _pViewTransitionEffect.begin = function (callback)
    {
        if (this._effectors)
        {
            this._effectors.forEach(effector => effector.end());
        }

        if (!document.startViewTransition)
        {
            callback();
            return;
        }

        const node = this._target;
        if (node && this._effect && document.startViewTransition)
        {
            const direction = this._effect.direction;
            const duration  = this._effect.duration|0;

            this._appendBuiltinStyles();

            const effectors = this._createEffectors();
            if (!effectors)
            {
                callback();
                return;
            }

            if (this._properties)
            {
                this._properties.forEach(prop => document.documentElement.style.setProperty(prop.name, prop.value));
            }

            const boundingRect = node.getBoundingClientRect();
            const transition = document.startViewTransition(() =>
            {
                let p = new Promise((resolve, reject) =>
                {
                    this.on_apply = () => resolve();
                    this.on_cancel = () => reject();

                    if (callback)
                    {
                        callback();
                    }
                    else
                    {
                        resolve();
                    }
                });
                return p;
            });

            transition.finished.finally(() =>
            {
                effectors.forEach(effector =>
                {
                    effector.end();
                });
                if (this._properties)
                {
                    this._properties.forEach(prop => document.documentElement.style.setProperty(prop.name, prop.init));
                }
                node.style.viewTransitionName = '';
            });

            transition.ready.then(() =>
            {
                effectors.forEach(effector => 
                {
                    effector.run(direction, duration, boundingRect, this._easingFunction);
                });
            });
        }
    };

    _pViewTransitionEffect.apply = function ()
    {
        this.on_apply();
    };

    _pViewTransitionEffect.cancel = function ()
    {
        this.on_cancel();
    };

    _pViewTransitionEffect._appendBuiltinStyles = function ()
    {
        if (document.getElementById('nexa_effect_builtin_style'))
            return;

        const sheet = document.createElement('style');
        const style_str = `
	            ::view-transition-image-pair(root) {
	              isolation: isolate;
	            }

	            ::view-transition-image-pair(nexa-effect-root),
	            ::view-transition-image-pair(nexa-effect-axis-root),
	            ::view-transition-image-pair(nexa-effect-3d-root) {
	              overflow: var(--nexa-effect-overflow, visible);
	            }
	
	            ::view-transition-image-pair(nexa-effect-3d-root) {
	              perspective: var(--nexa-effect-perspective, 1000px);
	              transform-style: preserve-3d;
	            }
	
	            ::view-transition-image-pair(nexa-effect-axis-root) {
	              transform-style: preserve-3d;
	            }
	
	            ::view-transition-old(nexa-effect-root),
	            ::view-transition-old(nexa-effect-axis-root),
	            ::view-transition-old(nexa-effect-3d-root) {
	              animation-name: none;
	              background-color: var(--nexa-effect-old-bk-color, white);
	              transform-origin: var(--nexa-effect-old-transform-origin, center);
	              z-index: var(--nexa-effect-old-zindex, unset);
	            }
	
	            ::view-transition-new(nexa-effect-root),
	            ::view-transition-new(nexa-effect-axis-root),
	            ::view-transition-new(nexa-effect-3d-root) {
	              animation-name: none;
	              background-color: var(--nexa-effect-new-bk-color, white);
	              transform-origin: var(--nexa-effect-new-transform-origin, center);
	            }
	
	            ::view-transition-old(nexa-effect-3d-root),
	            ::view-transition-new(nexa-effect-3d-root) {
	              backface-visibility: hidden;
	            }
	
	            ::view-transition-old(nexa-effect-axis-root),
	            ::view-transition-new(nexa-effect-axis-root) {
	              transform-style: preserve-3d;
	            }
            `;

        const head = document.head || document.getElementsByTagName('head')[0];
        sheet.id = 'nexa_effect_builtin_style';
        sheet.type = 'text/css';
        sheet.appendChild(document.createTextNode(style_str));
        head.appendChild(sheet);
    };

    _pViewTransitionEffect._createEffectors = function ()
    {
        const effect = this._effect;
        const node = this._target;
        if (!effect || !node) return;

        const effectDirection = effect.direction;
        if (!nexacro._ViewTransitionEffect.DIRECTIONS.includes(effectDirection))
            return;

        const effectDuration = effect.duration;
        if (effectDuration <= 0) return;

        const effectEasing = nexacro._ViewTransitionEffect.TRANSITION_EASINGS.get(effect.easing);
        if (!effectEasing) return;

        const effectType = nexacro._ViewTransitionEffect.TRANSITION_EFFECT_TYPES.get(effect.type);
        if (!effectType || !effectType.viewTransitionName) return;

        const effectFrames = effectType[effectDirection] || effectType['all'];
        if (!effectFrames || effectFrames.length == 0) return;

        this._easingFunction = new nexacro._TransformEasing(effect.easing, effectEasing);

        node.style.viewTransitionName = effectType.viewTransitionName;
        this._properties = effectType.styleVariables;

        const effectors = this._effectors = [];
        effectFrames.forEach((frame, index) =>
        {
            effectors.push(new nexacro._ViewTransitionEffector(`${index+1}`, frame.frames, frame.properties, frame.options));
        });

        return effectors;
    };

    nexacro._ViewTransitionEffect.DIRECTIONS = ['toleft', 'totop', 'toright', 'tobottom'];

    nexacro._ViewTransitionEffect.TRANSITION_EASINGS = new Map([
        ['linear', [0.250, 0.250, 0.750, 0.750]],
        ['easeinsine', [0.470, 0.000, 0.745, 0.715]],
        ['easeoutsine', [0.390, 0.575, 0.565, 1.000]],
        ['easeinoutsine', [0.445, 0.050, 0.550, 0.950]],
        ['easeinquad', [0.550, 0.085, 0.680, 0.530]],
        ['easeoutquad', [0.250, 0.460, 0.450, 0.940]],
        ['easeinoutquad', [0.455, 0.030, 0.515, 0.955]],
        ['easeincubic', [0.550, 0.055, 0.675, 0.190]],
        ['easeoutcubic', [0.215, 0.610, 0.355, 1.000]],
        ['easeinoutcubic', [0.645, 0.045, 0.355, 1.000]],
        ['easeinquart', [0.895, 0.030, 0.685, 0.220]],
        ['easeoutquart', [0.165, 0.840, 0.440, 1.000]],
        ['easeinoutquart', [0.770, 0.000, 0.175, 1.000]],
        ['easeinquint', [0.755, 0.050, 0.855, 0.060]],
        ['easeoutquint', [0.230, 1.000, 0.320, 1.000]],
        ['easeinoutquint', [0.860, 0.000, 0.070, 1.000]],
        ['easeinexpo', [0.950, 0.050, 0.795, 0.035]],
        ['easeoutexpo', [0.190, 1.000, 0.220, 1.000]],
        ['easeinoutexpo', [1.000, 0.000, 0.000, 1.000]],
        ['easeincirc', [0.600, 0.040, 0.980, 0.335]],
        ['easeoutcirc', [0.075, 0.820, 0.165, 1.000]],
        ['easeinoutcirc', [0.785, 0.135, 0.150, 0.860]],
        ['easeinback', [0.600, -0.280, 0.735, 0.045]],
        ['easeoutback', [0.175, 0.885, 0.320, 1.275]],
        ['easeinoutback', [0.680, -0.550, 0.265, 1.550]]
    ]);

    (function (map)
    {
        function easeInElastic(x)
        {
            const c4 = (2 * Math.PI) / 3;
            return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
        }
        map.set('easeinelastic', easeInElastic);

        function easeOutElastic(x) 
        {
            const c4 = (2 * Math.PI) / 3;
            return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
        }
        map.set('easeoutelastic', easeOutElastic);

        function easeInOutElastic(x) 
        {
            const c5 = (2 * Math.PI) / 4.5;
            return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
        }
        map.set('easeinoutelastic', easeInOutElastic);

        function easeOutBounce(x)
        {
            const n1 = 7.5625;
            const d1 = 2.75;

            if (x < 1 / d1)
            {
                return n1 * x * x;
            }
            else if (x < 2 / d1)
            {
                return n1 * (x -= 1.5 / d1) * x + 0.75;
            }
            else if (x < 2.5 / d1)
            {
                return n1 * (x -= 2.25 / d1) * x + 0.9375;
            }
            else
            {
                return n1 * (x -= 2.625 / d1) * x + 0.984375;
            }
        }
        function easeInBounce(x) 
        {
            return 1 - easeOutBounce(1 - x);
        }
        function easeInOutBounce(x)
        {
            return x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
        }

        map.set('easeinbounce', easeInBounce);
        map.set('easeoutbounce', easeOutBounce);
        map.set('easeinoutbounce', easeInOutBounce);

    })(nexacro._ViewTransitionEffect.TRANSITION_EASINGS);
    (function (map)
    {
        const cubic3DEffect = (function ()
        {
            function calculateQuad(dRotate, direction, nWidth, nHeight, bBefore)
            {
                const quad = new Array(8);

                const theta = 0.087266; // 3.14159265 / 36
                const nHalfWidth = nWidth >> 1;
                const nHalfHeight = nHeight >> 1;

                let fYAxis = 0.0;
                let fXAxis = 0.0;
                let fYAxisSmall = 0.0;
                let fXAxisSmall = 0.0;

                if (bBefore)
                {
                    switch (direction) 
                    {
                        case 'toleft':
                            {
                                fYAxis = Math.tan(theta) * nHalfWidth;
                                fXAxis = nHalfWidth;
                                fXAxisSmall = (Math.sqrt(2.0) * nHalfWidth - nHalfWidth) / 2.0;
                                fYAxisSmall = Math.tan(theta) * fXAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[0] = - ((dRotate / 45.0) * fXAxisSmall);
                                    quad[1] = (((dRotate / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                else 
                                {
                                    quad[0] = - fXAxisSmall + (((dRotate - 45.0) / 45.0) * fXAxisSmall);
                                    quad[1] = fYAxisSmall + ((((dRotate - 45.0) / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[2] = nWidth - (dRotate / 45.0) * nHalfWidth;
                                    quad[3] = -((dRotate / 45.0) * nHalfWidth * fYAxis / fXAxis);
                                }
                                else 
                                {
                                    quad[2] = nHalfWidth - ((dRotate - 45.0) / 45.0) * nHalfWidth;
                                    quad[3] = - fYAxis + (((dRotate - 45.0) / 45.0) * nHalfWidth * fYAxis / fXAxis);
                                }
                                quad[4] = quad[2];
                                quad[5] = nHeight - quad[3];
                                quad[6] = quad[0];
                                quad[7] = nHeight - quad[1];
                            }
                            break;

                        case 'toright':
                            {
                                fYAxis = Math.tan(theta) * nHalfWidth;
                                fXAxis = nHalfWidth;
                                fXAxisSmall = (Math.sqrt(2.0) * nHalfWidth - nHalfWidth) / 2.0;
                                fYAxisSmall = Math.tan(theta) * fXAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[0] = (dRotate / 45.0) * nHalfWidth;
                                    quad[1] = -(quad[0] * fYAxis / fXAxis);
                                }
                                else 
                                {
                                    quad[0] = nHalfWidth + ((dRotate - 45.0) / 45.0) * nHalfWidth;
                                    quad[1] = - fYAxis + ((quad[0] - nHalfWidth) * fYAxis / fXAxis);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[2] = nWidth + ((dRotate / 45.0) * fXAxisSmall);
                                    quad[3] = (((dRotate / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                else 
                                {
                                    quad[2] = nWidth + fXAxisSmall - (((dRotate - 45.0) / 45.0) * fXAxisSmall);
                                    quad[3] = fYAxisSmall + ((((dRotate - 45.0) / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                quad[4] = quad[2];
                                quad[5] = nHeight - quad[3];
                                quad[6] = quad[0];
                                quad[7] = nHeight - quad[1];
                            }
                            break;

                        case 'tobottom':
                            {
                                fYAxis = nHalfHeight;
                                fXAxis = Math.tan(theta) * nHalfHeight;
                                fYAxisSmall = (Math.sqrt(2.0) * nHalfHeight - nHalfHeight) / 2.0;
                                fXAxisSmall = Math.tan(theta) * fYAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[1] = (dRotate / 45.0) * nHalfHeight;
                                    quad[0] = -(quad[1] * fXAxis / fYAxis);
                                }
                                else 
                                {
                                    quad[1] = nHalfHeight + ((dRotate - 45.0) / 45.0) * nHalfHeight;
                                    quad[0] = - fXAxis + ((quad[1] - nHalfHeight) * fXAxis / fYAxis);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[7] = nHeight + ((dRotate / 45.0) * fYAxisSmall);
                                    quad[6] = (((dRotate / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                else 
                                {
                                    quad[7] = nHeight + fYAxisSmall - (((dRotate - 45.0) / 45.0) * fYAxisSmall);
                                    quad[6] = fXAxisSmall + ((((dRotate - 45.0) / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                quad[4] = nWidth - quad[6];
                                quad[5] = quad[7];
                                quad[2] = nWidth - quad[0];
                                quad[3] = quad[1];
                            }
                            break;

                        case 'totop':
                            {
                                fYAxis = nHalfHeight;
                                fXAxis = Math.tan(theta) * nHalfHeight;
                                fYAxisSmall = (Math.sqrt(2.0) * nHalfHeight - nHalfHeight) / 2.0;
                                fXAxisSmall = Math.tan(theta) * fYAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[1] = - ((dRotate / 45.0) * fYAxisSmall);
                                    quad[0] = (((dRotate / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                else 
                                {
                                    quad[1] = - fYAxisSmall + (((dRotate - 45.0) / 45.0) * fYAxisSmall);
                                    quad[0] = fXAxisSmall + ((((dRotate - 45.0) / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[7] = nHeight - (dRotate / 45.0) * nHalfHeight;
                                    quad[6] = -((nHeight - quad[7]) * fXAxis / fYAxis);
                                }
                                else 
                                {
                                    quad[7] = nHalfHeight - ((dRotate - 45.0) / 45.0) * nHalfHeight;
                                    quad[6] = - fXAxis + ((nHalfHeight - quad[7]) * fXAxis / fYAxis);
                                }
                                quad[4] = nWidth - quad[6];
                                quad[5] = quad[7];
                                quad[2] = nWidth - quad[0];
                                quad[3] = quad[1];
                            }
                            break;
                    }
                }
                else
                {
                    switch (direction) 
                    {
                        case 'toleft':
                            {
                                fYAxis = Math.tan(theta) * nHalfWidth;
                                fXAxis = nHalfWidth;
                                fXAxisSmall = (Math.sqrt(2.0) * nHalfWidth - nHalfWidth) / 2.0;
                                fYAxisSmall = Math.tan(theta) * fXAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[0] = nWidth - (dRotate / 45.0) * nHalfWidth;
                                    quad[1] = -((dRotate / 45.0) * nHalfWidth * fYAxis / fXAxis);
                                }
                                else 
                                {
                                    quad[0] = nHalfWidth - ((dRotate - 45.0) / 45.0) * nHalfWidth;
                                    quad[1] = - fYAxis + (((dRotate - 45.0) / 45.0) * nHalfWidth * fYAxis / fXAxis);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[2] = nWidth + ((dRotate / 45.0) * fXAxisSmall);
                                    quad[3] = (fYAxisSmall * 2.0) - (((dRotate / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                else 
                                {
                                    quad[2] = nWidth + fXAxisSmall - (((dRotate - 45.0) / 45.0) * fXAxisSmall);
                                    quad[3] = fYAxisSmall - ((((dRotate - 45.0) / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                quad[4] = quad[2];
                                quad[5] = nHeight - quad[3];
                                quad[6] = quad[0];
                                quad[7] = nHeight - quad[1];
                            }
                            break;

                        case 'toright':
                            {
                                fYAxis = Math.tan(theta) * nHalfWidth;
                                fXAxis = nHalfWidth;
                                fXAxisSmall = (Math.sqrt(2.0) * nHalfWidth - nHalfWidth) / 2.0;
                                fYAxisSmall = Math.tan(theta) * fXAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[0] = - ((dRotate / 45.0) * fXAxisSmall);
                                    quad[1] = (fYAxisSmall * 2.0) - (((dRotate / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }
                                else 
                                {
                                    quad[0] = - fXAxisSmall + (((dRotate - 45.0) / 45.0) * fXAxisSmall);
                                    quad[1] = fYAxisSmall - ((((dRotate - 45.0) / 45.0) * fXAxisSmall) * fYAxisSmall / fXAxisSmall);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[2] = (dRotate / 45.0) * nHalfWidth;
                                    quad[3] = -(quad[2] * fYAxis / fXAxis);
                                }
                                else 
                                {
                                    quad[2] = nHalfWidth + ((dRotate - 45.0) / 45.0) * nHalfWidth;
                                    quad[3] = - fYAxis + ((quad[2] - nHalfWidth) * fYAxis / fXAxis);
                                }
                                quad[4] = quad[2];
                                quad[5] = nHeight - quad[3];
                                quad[6] = quad[0];
                                quad[7] = nHeight - quad[1];
                            }
                            break;

                        case 'tobottom':
                            {
                                fYAxis = nHalfHeight;
                                fXAxis = Math.tan(theta) * nHalfHeight;
                                fYAxisSmall = (Math.sqrt(2.0) * nHalfHeight - nHalfHeight) / 2.0;
                                fXAxisSmall = Math.tan(theta) * fYAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[1] = - ((dRotate / 45.0) * fYAxisSmall);
                                    quad[0] = (((dRotate / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                else 
                                {
                                    quad[1] = - fYAxisSmall + (((dRotate - 45.0) / 45.0) * fYAxisSmall);
                                    quad[0] = - fXAxisSmall + ((((dRotate - 45.0) / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[7] = (dRotate / 45.0) * nHalfHeight;
                                    quad[6] = -(quad[7] * fXAxis / fYAxis);
                                }
                                else 
                                {
                                    quad[7] = nHalfHeight + ((dRotate - 45.0) / 45.0) * nHalfHeight;
                                    quad[6] = - fXAxis + ((quad[7] - nHalfHeight) * fXAxis / fYAxis);
                                }
                                quad[4] = nWidth - quad[6];
                                quad[5] = quad[7];
                                quad[2] = nWidth - quad[0];
                                quad[3] = quad[1];
                            }
                            break;

                        case 'totop':
                            {
                                fYAxis = nHalfHeight;
                                fXAxis = Math.tan(theta) * nHalfHeight;
                                fYAxisSmall = (Math.sqrt(2.0) * nHalfHeight - nHalfHeight) / 2.0;
                                fXAxisSmall = Math.tan(theta) * fYAxisSmall;

                                if (dRotate < 45) 
                                {
                                    quad[1] = nHeight - (dRotate / 45.0) * nHalfHeight;
                                    quad[0] = -((nHeight - quad[1]) * fXAxis / fYAxis);
                                }
                                else 
                                {
                                    quad[1] = nHalfHeight - ((dRotate - 45.0) / 45.0) * nHalfHeight;
                                    quad[0] = - fXAxis + ((nHalfHeight - quad[1]) * fXAxis / fYAxis);
                                }

                                if (dRotate < 45) 
                                {
                                    quad[7] = nHeight + ((dRotate / 45.0) * fYAxisSmall);
                                    quad[6] = fXAxisSmall * 2.0 - (((dRotate / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                else 
                                {
                                    quad[7] = nHeight + fYAxisSmall - (((dRotate - 45.0) / 45.0) * fYAxisSmall);
                                    quad[6] = fXAxisSmall - ((((dRotate - 45.0) / 45.0) * fYAxisSmall) * fXAxisSmall / fYAxisSmall);
                                }
                                quad[4] = nWidth - quad[6];
                                quad[5] = quad[7];
                                quad[2] = nWidth - quad[0];
                                quad[3] = quad[1];
                            }
                            break;
                    }
                }

                return quad;
            };

            function beforeFrame(boundRect, direction)
            {
                const width = boundRect.width, height = boundRect.height;

                return function (progress) 
                {
                    const degree = 90 * progress;

                    let quad;
                    if (degree < 90.0)
                    {
                        if (degree > 0.0)
                        {
                            quad = calculateQuad(degree, direction, width, height, true);
                        }
                        else
                        {
                            quad = calculateQuad(90 - degree, direction, width, height, false);
                        }
                    }

                    const matrix = new nexacro._TransformMatrix();
                    if (quad && matrix.rectToQuad(0, 0, width, height, quad))
                    {
                        if (!isNaN(matrix.sx))
                        {
                            return `${matrix.sx}, ${matrix.shy}, 0, ${matrix.w0}, ${matrix.shx}, ${matrix.sy}, 0, ${matrix.w1}, 0, 0, 1, 0, ${matrix.tx}, ${matrix.ty}, 0, ${matrix.w2}`;
                        }
                    }
                    return '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1';
                };
            }

            function afterFrame(boundRect, direction)
            {
                const width = boundRect.width, height = boundRect.height;

                return function (progress) 
                {
                    const degree = 90 * progress;

                    let quad;
                    if (degree > 0.0)
                    {
                        if (degree < 90.0)
                        {
                            quad = calculateQuad(degree, direction, width, height, false);
                        }
                        else
                        {
                            quad = calculateQuad(degree - 90.0, direction, width, height, true);
                        }
                    }

                    const matrix = new nexacro._TransformMatrix();
                    if (quad && matrix.rectToQuad(0, 0, width, height, quad))
                    {
                        if (!isNaN(matrix.sx))
                        {
                            return `${matrix.sx}, ${matrix.shy}, 0, ${matrix.w0}, ${matrix.shx}, ${matrix.sy}, 0, ${matrix.w1}, 0, 0, 1, 0, ${matrix.tx}, ${matrix.ty}, 0, ${matrix.w2}`;
                        }
                    }
                    return '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1';
                };
            }

            return {
                viewTransitionName: "nexa-effect-axis-root",
                all: [
                    {
                        frames: { matrix3d: [beforeFrame] },
                        properties: [{ name: "--nexa-effect-old-transform-origin", value: "0% 0%", init: "center" }],
                        options: { pseudoElement: '::view-transition-old(nexa-effect-axis-root)' }
                    },
                    {
                        frames: { matrix3d: [afterFrame] },
                        properties: [{ name: "--nexa-effect-new-transform-origin", value: "0% 0%", init: "center" }],
                        options: { pseudoElement: '::view-transition-new(nexa-effect-axis-root)' }
                    }
                ]
            };
        })();
        map.set('cubic', cubic3DEffect);

        const fadeEffect = {
            viewTransitionName: "nexa-effect-root",
            all: [
                {
                    frames: { opacity: [1, 0.3] },
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { opacity: [0.3, 1] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                }
            ]
        };
        map.set('fade', fadeEffect);

        const flip3DEffect = (function ()
        {
            function calculateQuad(dRotate, direction, nWidth, nHeight)
            {
                const quad = new Array(8);

                const theta = 0.087266; // 3.14159265 / 36
                const nHalfWidth = nWidth >> 1;
                const nHalfHeight = nHeight >> 1;
                let fYAxis = 0.0;
                let fXAxis = 0.0;

                switch (direction) 
                {
                    case 'toleft':
                        fYAxis = Math.tan(theta) * nHalfWidth;
                        fXAxis = nHalfWidth;

                        if (dRotate < 90) 
                        {
                            quad[0] = (dRotate / 90.0) * nHalfWidth;
                            quad[1] = (quad[0] * fYAxis / fXAxis);
                        }
                        else 
                        {
                            quad[0] = ((180 - dRotate) / 90.0) * nHalfWidth;
                            quad[1] = -(quad[0] * fYAxis / fXAxis);
                        }

                        // start가 90도일 때, width값이 홀수이면 1 pixel 보이는 문제 처리.
                        // 단, safari에서 start가 90도일 때, quad[0]와 quad[2]가 완전히 같으면
                        // 이후의 effect가 표시 안되는 문제 있음.
                        if (dRotate === 90)
                        {
                            quad[2] = quad[0] + 0.1;
                        }
                        else
                        {
                            quad[2] = nWidth - quad[0];
                        }
                        quad[3] = -quad[1];
                        quad[4] = quad[2];
                        quad[5] = nHeight + quad[1];
                        quad[6] = quad[0];
                        quad[7] = nHeight - quad[1];
                        break;
                    case 'toright':
                        fYAxis = Math.tan(theta) * nHalfWidth;
                        fXAxis = nHalfWidth;

                        if (dRotate < 90) 
                        {
                            quad[0] = (dRotate / 90.0) * nHalfWidth;
                            quad[1] = -(quad[0] * fYAxis / fXAxis);
                        }
                        else 
                        {
                            quad[0] = ((180 - dRotate) / 90.0) * nHalfWidth;
                            quad[1] = (quad[0] * fYAxis / fXAxis);
                        }

                        // start가 90도일 때, width값이 홀수이면 1 pixel 보이는 문제 처리.
                        // 단, safari에서 start가 90도일 때, quad[0]와 quad[2]가 완전히 같으면
                        // 이후의 effect가 표시 안되는 문제 있음.
                        if (dRotate === 90)
                        {
                            quad[2] = quad[0] + 0.1;
                        }
                        else
                        {
                            quad[2] = nWidth - quad[0];
                        }
                        quad[3] = -quad[1];
                        quad[4] = quad[2];
                        quad[5] = nHeight + quad[1];
                        quad[6] = quad[0];
                        quad[7] = nHeight - quad[1];
                        break;
                    case 'tobottom':
                        fYAxis = nHalfHeight;
                        fXAxis = Math.tan(theta) * nHalfHeight;

                        if (dRotate < 90) 
                        {
                            quad[1] = (dRotate / 90.0) * nHalfHeight;
                            quad[0] = -(quad[1] * fXAxis / fYAxis);
                        }
                        else 
                        {
                            quad[1] = ((180 - dRotate) / 90.0) * nHalfHeight;
                            quad[0] = (quad[1] * fXAxis / fYAxis);
                        }

                        // start가 90도일 때, height값이 홀수이면 1 pixel 보이는 문제 처리.
                        // 단, safari에서 start가 90도일 때, quad[1]와 quad[5]가 완전히 같으면
                        // 이후의 effect가 표시 안되는 문제 있음.
                        if (dRotate === 90)
                        {
                            quad[5] = quad[1] + 0.1;
                        }
                        else
                        {
                            quad[5] = nHeight - quad[1];
                        }

                        quad[3] = quad[1];
                        quad[2] = nWidth - quad[0];
                        //quad[5] = nHeight - quad[1];
                        quad[4] = nWidth + quad[0];
                        quad[7] = quad[5];
                        quad[6] = -quad[0];
                        break;
                    case 'totop':
                        fYAxis = nHalfHeight;
                        fXAxis = Math.tan(theta) * nHalfHeight;

                        if (dRotate < 90) 
                        {
                            quad[1] = (dRotate / 90.0) * nHalfHeight;
                            quad[0] = (quad[1] * fXAxis / fYAxis);
                        }
                        else 
                        {
                            quad[1] = ((180 - dRotate) / 90.0) * nHalfHeight;
                            quad[0] = -(quad[1] * fXAxis / fYAxis);
                        }

                        // start가 90도일 때, height값이 홀수이면 1 pixel 보이는 문제 처리.
                        // 단, safari에서 start가 90도일 때, quad[1]와 quad[5]가 완전히 같으면
                        // 이후의 effect가 표시 안되는 문제 있음.
                        if (dRotate === 90)
                        {
                            quad[5] = quad[1] + 0.1;
                        }
                        else
                        {
                            quad[5] = nHeight - quad[1];
                        }

                        quad[3] = quad[1];
                        quad[2] = nWidth - quad[0];
                        //quad[5] = nHeight - quad[1];
                        quad[4] = nWidth + quad[0];
                        quad[7] = quad[5];
                        quad[6] = -quad[0];
                        break;
                    default:
                        break;
                }
                return quad;
            }

            function beforeFrame(boundRect, direction)
            {
                const width = boundRect.width, height = boundRect.height;

                return function (progress)
                {
                    //const degree = 180 * progress;
                    const degree = 90 * progress;
                    if (degree < 90.0)
                    {
                        const quad = calculateQuad((degree < 0.0 ? 180.0 + degree : degree), direction, width, height);

                        const matrix = new nexacro._TransformMatrix();
                        if (quad && matrix.rectToQuad(0, 0, width, height, quad))
                        {
                            if (!isNaN(matrix.sx)) 
                            {
                                return `${matrix.sx}, ${matrix.shy}, 0, ${matrix.w0}, ${matrix.shx}, ${matrix.sy}, 0, ${matrix.w1}, 0, 0, 1, 0, ${matrix.tx}, ${matrix.ty}, 0, ${matrix.w2}`;
                            }
                        }
                    }

                    return '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1';
                };
            }

            function afterFrame(boundRect, direction)
            {
                const width = boundRect.width, height = boundRect.height;

                return function (progress)
                {
                    //const degree = 180 * progress;
                    const degree = 90 * progress + 90;
                    if (degree >= 90.0)
                    {
                        const quad = calculateQuad((degree > 180.0 ? degree - 180.0 : degree), direction, width, height);

                        const matrix = new nexacro._TransformMatrix();
                        if (quad && matrix.rectToQuad(0, 0, width, height, quad))
                        {
                            if (!isNaN(matrix.sx))
                            {
                                return `${matrix.sx}, ${matrix.shy}, 0, ${matrix.w0}, ${matrix.shx}, ${matrix.sy}, 0, ${matrix.w1}, 0, 0, 1, 0, ${matrix.tx}, ${matrix.ty}, 0, ${matrix.w2}`;
                            }
                        }
                    }

                    return '0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1';
                };

            }
            // safari에서 delay 없이 180도를 돌리면 after이미지가 제대로 표시되지 않아서 delay처리함.
            return {
                viewTransitionName: "nexa-effect-axis-root",
                all: [
                    {
                        frames: { matrix3d: [beforeFrame] },
                        properties: [{ name: "--nexa-effect-old-transform-origin", value: "0% 0%", init: "center" }],
                        options: { durationPercent: 50, pseudoElement: '::view-transition-old(nexa-effect-axis-root)' }
                    },
                    {
                        frames: { matrix3d: [afterFrame] },
                        properties: [{ name: "--nexa-effect-new-transform-origin", value: "0% 0%", init: "center" }],
                        options: { delayPercent: 50, durationPercent: 50, pseudoElement: '::view-transition-new(nexa-effect-axis-root)' }
                    }
                ]
            };
        })();
        map.set('flip', flip3DEffect);

        const slideEffect = {
            viewTransitionName: "nexa-effect-root",
            styleVariables: [{ name: "--nexa-effect-overflow", value: "hidden", init: "unset" }],
            toleft: [
                {
                    frames: { translateX: [0, -100] },
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { translateX: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            totop: [
                {
                    frames: { translateY: [0, -100] },
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { translateY: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            toright: [
                {
                    frames: { translateX: [0, 100] },
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { translateX: [-100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            tobottom: [
                {
                    frames: { translateY: [0, 100] },
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { translateY: [-100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ]
        };
        map.set('slide', slideEffect);

        const wipeEffect = {
            viewTransitionName: "nexa-effect-root",
            styleVariables: [{ name: "--nexa-effect-overflow", value: "hidden", init: "unset" }],
            toleft: [
                {
                    frames: {},
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { clipLeft: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            totop: [
                {
                    frames: {},
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { clipTop: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            toright: [
                {
                    frames: {},
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { clipRight: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ],
            tobottom: [
                {
                    frames: {},
                    options: { pseudoElement: '::view-transition-old(nexa-effect-root)' }
                },
                {
                    frames: { clipBottom: [100, 0] },
                    options: { pseudoElement: '::view-transition-new(nexa-effect-root)' }
                },
            ]
        };
        map.set('wipe', wipeEffect);

    })(nexacro._ViewTransitionEffect.TRANSITION_EFFECT_TYPES = new Map());

    ////////////////////////////////////////////////////////////////////////////////
    //
    nexacro._ViewTransitionEffector = function (id, frames, properties, options)
    {
        nexacro.Object.call(this, id);

        this.frames = frames;
        this.properties = properties;
        this.options = options;
    };

    var _pViewTransitionEffector = nexacro._createPrototype(nexacro.Object, nexacro._ViewTransitionEffector);
    nexacro._ViewTransitionEffector.prototype = _pViewTransitionEffector;
    _pViewTransitionEffector._type_name = "_ViewTransitionEffector";

    _pViewTransitionEffector.frames = null;
    _pViewTransitionEffector.properties = null;
    _pViewTransitionEffector.options = null;

    _pViewTransitionEffector._direction = '';
    _pViewTransitionEffector._bounding_rect = null;
    _pViewTransitionEffector._animation = null;
    _pViewTransitionEffector._requestFrameId = 0;
    _pViewTransitionEffector._variable_name_prefix = '';

    _pViewTransitionEffector.destroy = function ()
    {
        nexacro.Object.prototype.destroy.call(this);

        this.end();
        return true;
    };

    _pViewTransitionEffector.run = function (direction, duration, boundingRect, easingFunction)
    {
        if (!easingFunction)
            return null;

        if (this._animation)
        {
            this._animation.pause();
            this._animation = null;
        }

        this._bounding_rect = boundingRect;
        this._direction = direction;

        const properties = this.properties ? this.properties.slice() : null;
        if (properties)
        {
            properties.forEach(prop =>
            {
                document.documentElement.style.setProperty(prop.name, prop.value);
            });
        }

        let effectOptions = {
            duration: duration|0,
            easing: 'linear',
            delay: 0,
            fill: "both" /* default: none */
        };
        if (this.options)
        {
            if ('delayPercent' in this.options)
            {
                const delayPercent = Math.max(0, Math.min(100, (+this.options.delayPercent || 0)));
                effectOptions.delay = effectOptions.duration * (delayPercent/100);
            }

            if ('durationPercent' in this.options)
            {
                const durationPercent = Math.max(0, Math.min(100, (+this.options.durationPercent || 100)));
                effectOptions.duration *= (durationPercent / 100);
                if (effectOptions.duration + effectOptions.delay < (duration | 0))
                {
                    effectOptions.endDelay = (duration | 0) - (effectOptions.duration + effectOptions.delay);
                }
            }

            if (this.options.pseudoElement)
            {
                effectOptions.pseudoElement = this.options.pseudoElement;
            }
        }

        let hasFrameFunction = false;
        const effectFrames = {};
        for (let prop in this.frames)
        {
            let value = this.frames[prop].slice();
            value.forEach((v, index) =>
            {
                if (typeof v === 'function')
                {
                    hasFrameFunction = true;
                    value[index] = v(boundingRect, direction);
                }
            });
            effectFrames[prop] = value;
        }

        const variablePrefix = `nexa-effect-${easingFunction.name}${this.id}`;
        this._variable_name_prefix = variablePrefix;

        let keyFrames;
        if (hasFrameFunction || easingFunction.isCustomEasing())
            keyFrames = this.convToCustomKeyFrames(effectFrames);
        else
            keyFrames = this.convToKeyFrames(effectFrames);
        effectOptions.easing = 'linear';

        const animation = document.documentElement.animate(
            keyFrames,
            effectOptions
        );

        animation.onfinish = (event) =>
        {
            if (this._requestFrameId > 0)
            {
                this._requestFrameId = 0;
            }

            if (properties) 
            {
                properties.forEach(prop => document.documentElement.style.setProperty(prop.name, prop.init));
            }
        };
        animation.oncancel = (event) =>
        {
            if (this._requestFrameId > 0)
            {
                window.cancelAnimationFrame(this._requestFrameId);
                this._requestFrameId = 0;
            }

            if (properties) 
            {
                properties.forEach(prop => document.documentElement.style.setProperty(prop.name, prop.init));
            }
        };
        animation.onremove = animation.onfinish;

        this._animation = animation;

        if (hasFrameFunction || easingFunction.isCustomEasing())
        {
            this._requestFrameId = window.requestAnimationFrame(timestamp =>
            {
                this.animationFrame(timestamp, animation, effectFrames, easingFunction);
            });
        }
    };

    _pViewTransitionEffector.end = function ()
    {
        if (this._animation)
        {
            if (!this._animation.finished)
            {
                this._animation.finish();
            }
            this._animation = null;
        }

        if (this._requestFrameId > 0)
        {
            window.cancelAnimationFrame(this._requestFrameId);
            this._requestFrameId = 0;
        }
    };

    _pViewTransitionEffector.normalizeValue = function (prop, value)
    {
        switch (prop) 
        {
            case 'translateX':
            case 'translateY':
                return `${value}%`;
            case 'translateZ':
                return `${value}px`;
            case 'rotateX':
            case 'rotateY':
            case 'skewX':
            case 'skewY':
                return `${value}deg`;
            case 'matrix':
            case 'matrix3d':
                return `${value}`;
            case 'clipLeft':
            case 'clipTop':
            case 'clipRight':
            case 'clipBottom':
                return `${value}%`;
        }

        return value;
    };

    _pViewTransitionEffector.convToKeyFrames = function (effectFrames)
    {
        let transforms = [], clipPaths = [], opacity;

        Object.entries(effectFrames).forEach(entry =>
        {
            const name = entry[0];
            const values = entry[1];

            switch (name) 
            {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                case 'rotateX':
                case 'rotateY':
                case 'skewX':
                case 'skewY':
                case 'scaleX':
                case 'scaleY':
                case 'scale':
                case 'matrix':
                case 'matrix3d':
                    values.forEach((value, index) =>
                    {
                        if (!transforms[index]) transforms[index] = [];
                        transforms[index].push(`${name}(${this.normalizeValue(name, value)})`);
                    });
                    break;
                case 'opacity':
                    opacity = values;
                    break;
                case 'clipLeft':
                    values.forEach((value, index) =>
                    {
                        if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                        clipPaths[index]['left'] = this.normalizeValue(name, value);
                    });
                    break;
                case 'clipTop':
                    values.forEach((value, index) =>
                    {
                        if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                        clipPaths[index]['top'] = this.normalizeValue(name, value);
                    });
                    break;
                case 'clipRight':
                    values.forEach((value, index) =>
                    {
                        if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                        clipPaths[index]['right'] = this.normalizeValue(name, value);
                    });
                    break;
                case 'clipBottom':
                    values.forEach((value, index) =>
                    {
                        if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                        clipPaths[index]['bottom'] = this.normalizeValue(name, value);
                    });
                    break;
            }
        });

        const keyFrames = {};
        if (transforms.length > 0)
        {
            keyFrames['transform'] = transforms.map(transform => transform.join(' '));
        }
        else
        {
            // safari의 경우, uset 해주지 않으면 이전 상태가 영향을 준다.
            keyFrames['transform'] = ['none', 'none'];
        }
        if (clipPaths.length > 0)
        {
            keyFrames['clipPath'] = clipPaths.map(clipPath =>
            {
                return `inset(${clipPath.top} ${clipPath.right} ${clipPath.bottom} ${clipPath.left})`;
            });
        }
        else
        {
            // safari의 경우, uset 해주지 않으면 이전 상태가 영향을 준다.
            keyFrames['clipPath'] = ['none', 'none'];
        }
        if (opacity)
        {
            keyFrames['opacity'] = opacity;
        }
        else
        {
            // safari의 경우, uset 해주지 않으면 이전 상태가 영향을 준다.
            keyFrames['opacity'] = ['unset', 'unset'];
        }

        return keyFrames;
    };

    _pViewTransitionEffector.convToCustomKeyFrames = function (effectFrames)
    {
        let transforms = [], clipPaths = [], opacity = [];
        const prefix = this._variable_name_prefix;

        Object.entries(effectFrames).forEach(entry =>
        {
            const name = entry[0];
            const values = entry[1];

            const variableName = `--${prefix}-${name}-value`;
            switch (name) 
            {
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                case 'matrix':
                case 'matrix3d':
                case 'rotateX':
                case 'rotateY':
                case 'skewX':
                case 'skewY':
                case 'scaleX':
                case 'scaleY':
                case 'scale':
                    if (values.length > 0)
                    {
                        values.forEach((value, index) =>
                        {
                            if (!transforms[index]) transforms[index] = [];
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            transforms[index].push(`${name}(var(${variableName}${defaultValue}))`);
                        });

                        if (values.length == 1)
                        {
                            if (!transforms[1]) transforms[1] = [];
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            transforms[1].push(`${name}(var(${variableName}${defaultValue}))`);
                        }
                    }
                    break;
                case 'opacity':
                    if (values.length > 0)
                    {
                        values.forEach(value =>
                        {
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            opacity.push(`var(${variableName}${defaultValue})`);
                        });

                        if (values.length == 1)
                        {
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            opacity.push(`var(${variableName}${defaultValue})`);
                        }
                    }
                    break;
                case 'clipLeft':
                    if (values.length > 0)
                    {
                        values.forEach((value, index) =>
                        {
                            if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            clipPaths[index]['left'] = `var(--${prefix}-clip-left-value${defaultValue})`;
                            clipPaths[index]['right'] = `var(--${prefix}-clip-right-value, 0)`;
                        });
                        if (values.length == 1)
                        {
                            if (!clipPaths[1]) clipPaths[1] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            clipPaths[1]['left'] = `var(--${prefix}-clip-left-value${defaultValue})`;
                            clipPaths[1]['right'] = `var(--${prefix}-clip-right-value, 0)`;
                        }
                    }
                    break;
                case 'clipRight':
                    if (values.length > 0)
                    {
                        values.forEach((value, index) =>
                        {
                            if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            clipPaths[index]['left'] = `var(--${prefix}-clip-left-value, 0)`;
                            clipPaths[index]['right'] = `var(--${prefix}-clip-right-value${defaultValue})`;
                        });
                        if (values.length == 1)
                        {
                            if (!clipPaths[1]) clipPaths[1] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            clipPaths[1]['left'] = `var(--${prefix}-clip-left-value, 0)`;
                            clipPaths[1]['right'] = `var(--${prefix}-clip-right-value${defaultValue})`;
                        }
                    }
                    break;
                case 'clipTop':
                    if (values.length > 0)
                    {
                        values.forEach((value, index) =>
                        {
                            if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            clipPaths[index]['top'] = `var(--${prefix}-clip-top-value${defaultValue})`;
                            clipPaths[index]['bottom'] = `var(--${prefix}-clip-bottom-value, 0)`;
                        });
                        if (values.length == 1)
                        {
                            if (!clipPaths[1]) clipPaths[1] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            clipPaths[1]['top'] = `var(--${prefix}-clip-top-value${defaultValue})`;
                            clipPaths[1]['bottom'] = `var(--${prefix}-clip-bottom-value, 0)`;
                        }
                    }
                    break;
                case 'clipBottom':
                    if (values.length > 0)
                    {
                        values.forEach((value, index) =>
                        {
                            if (!clipPaths[index]) clipPaths[index] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof value === 'function') ? '' : `, ${this.normalizeValue(value)}`;
                            clipPaths[index]['top'] = `var(--${prefix}-clip-top-value, 0)`;
                            clipPaths[index]['bottom'] = `var(--${prefix}-clip-bottom-value${defaultValue})`;
                        });
                        if (values.length == 1)
                        {
                            if (!clipPaths[1]) clipPaths[1] = { left: 0, top: 0, right: 0, bottom: 0 };
                            const defaultValue = (typeof values[0] === 'function') ? '' : `, ${this.normalizeValue(values[0])}`;
                            clipPaths[1]['top'] = `var(--${prefix}-clip-top-value, 0)`;
                            clipPaths[1]['bottom'] = `var(--${prefix}-clip-bottom-value${defaultValue})`;
                        }
                    }
                    break;
            }
        });

        const keyFrames = {};
        if (transforms.length > 0)
        {
            keyFrames['transform'] = transforms.map(transform => transform.join(' '));
        }
        else
        {
            keyFrames['transform'] = ['none', 'none'];
        }

        if (clipPaths.length > 0)
        {
            keyFrames['clipPath'] = clipPaths.map(clipPath =>
            {
                return `inset(${clipPath.top} ${clipPath.right} ${clipPath.bottom} ${clipPath.left})`
            });
        }
        else
        {
            keyFrames['clipPath'] = ['none', 'none'];
        }

        if (opacity.length > 0)
        {
            keyFrames['opacity'] = opacity;
        }
        else
        {
            keyFrames['opacity'] = ['unset', 'unset'];
        }

        return keyFrames;
    };

    _pViewTransitionEffector.setCustomEasingValues = function (frames, vpos, easingValue)
    {
        let variablePrefix = this._variable_name_prefix, variableName, currentValue;
        for (let prop in frames)
        {
            const valueRange = frames[prop];

            let rangeStart = valueRange[0], rangeEnd;
            if (valueRange.length > 1)
            {
                rangeEnd = valueRange[valueRange.length - 1];
                currentValue = vpos === 0 ? rangeStart : (vpos === 1 ? rangeEnd : (rangeStart + (rangeEnd - rangeStart) * easingValue));
            }

            if (typeof rangeStart === 'function')
            {
                currentValue = rangeStart(easingValue);
            }
            else if (rangeEnd !== undefined)
            {
                if (vpos === 0)
                {
                    currentValue = rangeStart;
                }
                else if (vpos === 1)
                {
                    currentValue = rangeEnd;
                }
                else
                {
                    const step = 1 / (valueRange.length - 1);
                    const idx = (easingValue / step) | 0;
                    currentValue = valueRange[idx] + (valueRange[idx + 1] - valueRange[idx]) * (easingValue % step);
                }
            }

            if (prop === "clipLeft" || prop === "clipTop" || prop === "clipRight" || prop === "clipBottom")
            {
                if (currentValue < 0)
                {
                    currentValue = Math.abs(currentValue);

                    if (prop === "clipLeft") variableName = `--${variablePrefix}-clip-right-value`;
                    if (prop === "clipTop") variableName = `--${variablePrefix}-clip-bottom-value`;
                    if (prop === "clipRight") variableName = `--${variablePrefix}-clip-left-value`;
                    if (prop === "clipBottom") variableName = `--${variablePrefix}-clip-top-value`;
                }
                else
                {
                    if (prop === "clipLeft") variableName = `--${variablePrefix}-clip-left-value`;
                    if (prop === "clipTop") variableName = `--${variablePrefix}-clip-top-value`;
                    if (prop === "clipRight") variableName = `--${variablePrefix}-clip-right-value`;
                    if (prop === "clipBottom") variableName = `--${variablePrefix}-clip-bottom-value`;
                }
            }
            else
            {
                variableName = `--${variablePrefix}-${prop}-value`;
            }

            if (currentValue === '') return;
            document.documentElement.style.setProperty(variableName, this.normalizeValue(prop, currentValue));
        }
    };

    _pViewTransitionEffector.animationFrame = function (timestamp, animation, frames, easingFunction)
    {
        let duration = 0, delay = 0, fill = "none";

        const animationEffect = animation.effect;
        if (animationEffect)
        {
            const timing = animationEffect.getTiming();
            duration = timing.duration | 0;
            delay = timing.delay | 0;
            fill = timing.fill;
        }

        // chrome은 startTime이 비어서 들어오고, 
        // safari는 startTime이 채워져서 들어옴.
        if (!animation.startTime)
        {
            animation.startTime = timestamp;
        }

        let elapsed = timestamp - animation.startTime;
        if (animation.playState === "running")
        {
            if (delay > 0 && !animation.previousTime)
            {
                if (fill === "backwards" || fill === "both")
                {
                    this.setCustomEasingValues(frames, 0, easingFunction.getValue(0) || 0);
                }
            }
            else if (elapsed >= delay)
            {
                const progress = 1 - Math.max(0, duration - elapsed + delay) / duration;
                this.setCustomEasingValues(frames, 2, easingFunction.getValue(progress));
            }

            if ((elapsed - delay) < duration) 
            {
                animation.previousTime = timestamp;
                this._requestFrameId = window.requestAnimationFrame(timestamp =>
                {
                    this.animationFrame(timestamp, animation, frames, easingFunction);
                });
            }
            else
            {
                if (fill === "forwards" || fill === "both")
                {
                    this.setCustomEasingValues(frames, 1, easingFunction.getValue(1));
                }
                else
                {
                    this.setCustomEasingValues(frames, 0, easingFunction.getValue(0) || 0);
                }
            }
        }
    };
}
