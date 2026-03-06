//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
if (!nexacro.BubbleChart)
{
    //==============================================================================
    // nexacro.BubbleChartEventInfo
    //==============================================================================


    //==============================================================================
    // nexacro.BubbleChart
    //==============================================================================
    nexacro.BubbleChart = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro._AxisChartBase.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pBubbleChart = nexacro._createPrototype(nexacro._AxisChartBase, nexacro.BubbleChart);
    nexacro.BubbleChart.prototype = _pBubbleChart;
    _pBubbleChart._type_name = "BubbleChart";

    /* default properties */

    // TODO
    //_pBubbleChart.bubblemaxsize = null;
    //_pBubbleChart.bubbleminsize = null;

    /* internal variable */

    /* status */

    /* event list */
    // _pBubbleChart._event_list = {
    // "onclick": 1,
    // "ondblclick": 1,
    // "onmouseleave": 1,
    // "onmouseenter": 1,
    // "onmousemove": 1,
    // "onmousedown": 1,
    // "onlbuttondown": 1,
    // "onlbuttonup": 1,
    // "onrbuttondown": 1,
    // "onrbuttonup": 1
    // };

    /* accessibility */
    //_pBubbleChart._accessibility_role = "BubbleChart";

    //===============================================================
    // nexacro.BubbleChart : Create & Update
    //===============================================================
    _pBubbleChart.on_create_contents = function ()
    {
        var control = this.getElement();
        if (control)
        {
            nexacro._AxisChartBase.prototype.on_create_contents.call(this);
        }
    };

    //===============================================================
    // nexacro.BubbleChart : Override
    //===============================================================


    //===============================================================
    // nexacro.BubbleChart : Properties
    //===============================================================

    //===============================================================
    // nexacro.BubbleChart : Events
    //===============================================================


    //===============================================================
    // nexacro.BubbleChart : Methods
    //===============================================================
    _pBubbleChart.showSeries = function (id)
    {
        var s = this.getSeriesByID(id);
        if (s)
        {
            var visible = s._orgVisible;
            s._orgVisible = undefined;

            this._drawing = true;
            if (visible)
            {
                s.set_visible(true);
            }
            this._drawing = false;

            this._changedData = true;
            this._draw();
        }
    };

    _pBubbleChart.hideSeries = function (id)
    {
        var s = this.getSeriesByID(id);
        if (s)
        {
            if (s._orgVisible === undefined || s._orgVisible === null)
                s._orgVisible = s.visible;

            this._drawing = true;
            s.set_visible(false);
            this._drawing = false;

            this._changedData = true;
            this._draw();
        }
    };

    //===============================================================
    // nexacro.BubbleChart : Logical part
    //===============================================================
    _pBubbleChart._createSeries = function (contents, id)
    {
        var series = new nexacro.ChartBubbleSeriesControl(id, this, this._graphicsControl);
        if (series)
        {
            return series;
        }
    };

    _pBubbleChart._createValueaxes = function (o, id)
    {
        var seriesset = this.seriesset;
        var valueaxis;
        var location;
        var index = this.valueaxes.length;

        valueaxis = new nexacro.ChartAxisControl(id, this, this._graphicsControl);
        valueaxis._type = "valueAxis";

        if (this.valueaxes.length == 0)
        {
            location = o.opposite || "bottom";
            valueaxis._location = location;
        }

        if (this.valueaxes.length == 1)
        {
            location = o.opposite || "left";
            valueaxis._location = location;
        }

        if (seriesset)
        {
            for (var i = seriesset.length - 1; i > -1; i--)
            {
                var series = seriesset[i];
                if (series)
                {
                    if (series.valueaxis == valueaxis.id)
                    {
                        location = o.opposite ? "top" : "bottom";
                        break;
                    }

                    if (series.value2axis == valueaxis.id)
                    {
                        location = o.opposite ? "right" : "left";
                        break;
                    }
                }
            }
        }

        var opposite = o.opposite || valueaxis.opposite;
        valueaxis.on_apply_opposite(opposite);

        this.valueaxes.push(valueaxis);
        this._axes.push(valueaxis);

        if (location == "top" || location == "bottom")
        {
            this._xaxes.push(valueaxis);
        }
        else
        {
            this._yaxes.push(valueaxis);
        }

        return valueaxis;
    };

    _pBubbleChart._setSeries = function ()
    {
        nexacro._AxisChartBase.prototype._setSeries.call(this);

        // 시리즈 축 설정
        nexacro._GraphicsLibArray.forEach(this.seriesset, function (obj, index)
        {
            var id;
            var valueaxis;
            var value2axis;
            var valueaxes = this.valueaxes;
            var xaxes = this._xaxes;
            var yaxes = this._yaxes;
            var length = valueaxes.length;

            if (!length || length == 0 || length == 1)
            {
                //trace("BubbleChart를 구성하기 위한 Value 축이 없거나, 1개밖에 존재하지 않습니다.");
                return false;
            }

            valueaxis = this.getValueaxisByID(obj.valueaxis);
            value2axis = this.getValueaxisByID(obj.value2axis);

            if (valueaxis)
            {
                valueaxis.on_apply_visible(valueaxis.visible);
                obj.on_apply_valueaxis(valueaxis.id);
            }
            else
            {
                for (var i = 0; i < xaxes.length; i++)
                {
                    valueaxis = xaxes[i];
                    if (valueaxis)
                    {
                        var group = valueaxis._group;
                        if (group)
                        {
                            var visible = valueaxis.visible;
                            if (visible)
                            {

                                if (xaxes[i].id)
                                {
                                    xaxes[i].on_apply_visible(visible);
                                    obj.on_apply_valueaxis(xaxes[i].id);
                                }
                                break;
                            }
                        }

                    }
                }
            }

            if (value2axis)
            {
                value2axis.on_apply_visible(value2axis.visible);
                obj.on_apply_value2axis(value2axis.id);
            }
            else
            {
                for (var i = 0; i < yaxes.length; i++)
                {
                    value2axis = yaxes[i];
                    if (value2axis)
                    {
                        var group = value2axis._group;
                        if (group)
                        {
                            var visible = value2axis.visible;
                            if (visible)
                            {
                                if (yaxes[i].id)
                                {
                                    yaxes[i].on_apply_visible(visible);
                                    obj.on_apply_value2axis(yaxes[i].id);
                                }
                                break;
                            }
                        }

                    }
                }
            }

            // TODO - axis destroy() 정상적으로 확인 후 obj._xaxis 있는지 여부로 체크처리
            if (!obj._xaxis || !obj._xaxis._direction)
            {
                var axis;
                for (var i = 0; i < length; i++)
                {
                    axis = valueaxes[i];
                    if (axis)
                    {
                        var direction = axis._direction;
                        if (direction && direction == "x")
                        {
                            obj.on_apply_valueaxis(axis.id);
                            break;
                        }
                    }
                }
            }
            // TODO - axis destroy() 정상적으로 확인 후 obj._yaxis 있는지 여부로 체크처리
            if (!obj._yaxis || !obj._yaxis._direction)
            {
                var axis2;
                for (var i = 0; i < length; i++)
                {
                    axis2 = valueaxes[i];
                    if (axis2)
                    {
                        var direction = axis2._direction;
                        if (direction && direction == "y")
                        {
                            obj.on_apply_value2axis(axis2.id);
                            break;
                        }
                    }
                }
            }

        }, this);

        this._changedData = true;
    };

    _pBubbleChart._getHighlightVisible = function ()
    {
        var seriesset = this.seriesset,
			length = seriesset.length,
			highlightvisible = false;

        for (var i = 0; i < length; i++)
        {
            var series = seriesset[i];
            if (series.highlightvisible)
            {
                highlightvisible = true;
                break;
            }
        }
        return highlightvisible;
    };

    _pBubbleChart._deleteSeries = function (series, index)
    {
        nexacro._ChartBase.prototype._deleteSeries.call(this, series, index);

        var valueaxes = this.valueaxes;
        var seriesset = this.seriesset;
        var serieslength = this.seriesset.length;

        if (valueaxes)
        {
            for (var i = valueaxes.length - 1; i > -1; i--)
            {
                var valueaxis = valueaxes[i];
                var bused = false;
                if (valueaxis)
                {
                    for (var j = 0; j < serieslength; j++)
                    {
                        var s = seriesset[j];
                        if (s)
                        {
                            if ((s._xaxis && s._xaxis.id == valueaxis.id) || (s._yaxis && s._yaxis.id == valueaxis.id))
                            {
                                bused = true;
                            }
                        }
                    }

                    if (!bused || serieslength == 0)
                    {
                        valueaxis._used = false;
                        valueaxis.on_apply_visible(false);
                        valueaxis.on_apply_boardlinevisible(false);
                    }
                }
            }
        }
        if (this.seriesset.length == 0)
        {
            if (this.hrangebar)
            {
                this.hrangebar.on_apply_visible(false);
            }
        }

    };

    //===============================================================
    // nexacro.BubbleChart : Util Function
    //===============================================================

    delete _pBubbleChart;
}

if (!nexacro.ChartBubbleSeriesControl)
{
    //==============================================================================
    // nexacro.ChartBubbleSeriesEventInfo
    //==============================================================================


    //==============================================================================
    // nexacro.ChartBubbleSeries
    //==============================================================================
    nexacro.ChartBubbleSeriesControl = function (id, parent, graphicsControl)
    {
        nexacro._SeriesBase.prototype.constructor.apply(this, arguments);

        this._seriesitems = [];

        this.value2column = new nexacro.BindableValue("");
        this.value3column = new nexacro.BindableValue("");
    };

    var _pChartBubbleSeriesControl = nexacro._createPrototype(nexacro._SeriesBase, nexacro.ChartBubbleSeriesControl);
    nexacro.ChartBubbleSeriesControl.prototype = _pChartBubbleSeriesControl;
    _pChartBubbleSeriesControl._type_name = "ChartBubbleSeriesControl";

    /* default properties */
    _pChartBubbleSeriesControl.fillstyle = "";
    _pChartBubbleSeriesControl.highlightfillstyle = "";
    _pChartBubbleSeriesControl.highlightlinestyle = "";
    _pChartBubbleSeriesControl.highlightopacity = 1;
    _pChartBubbleSeriesControl.highlightsize = undefined;
    _pChartBubbleSeriesControl.highlightvisible = false;
    _pChartBubbleSeriesControl.linestyle = "";
    _pChartBubbleSeriesControl.maxsize = undefined;
    _pChartBubbleSeriesControl.minsize = undefined;
    _pChartBubbleSeriesControl.opacity = 1;
    _pChartBubbleSeriesControl.selectfillstyle = "";
    _pChartBubbleSeriesControl.selectlinestyle = "";
    _pChartBubbleSeriesControl.selectopacity = 1;
    _pChartBubbleSeriesControl.valueaxis = "";
    _pChartBubbleSeriesControl.value2axis = "";
    _pChartBubbleSeriesControl.visible = true;
    _pChartBubbleSeriesControl.size = undefined;
    _pChartBubbleSeriesControl.pointshape = "circle";

    // not used
    _pChartBubbleSeriesControl.itemtextposition = "";
    _pChartBubbleSeriesControl.itemtextgap = undefined;

    /* internal variable */
    _pChartBubbleSeriesControl._color = null;
    _pChartBubbleSeriesControl._mindata = null;
    _pChartBubbleSeriesControl._maxdata = null;
    _pChartBubbleSeriesControl._borderwidth = null;
    _pChartBubbleSeriesControl._maxsize = null;
    _pChartBubbleSeriesControl._minsize = null;
    _pChartBubbleSeriesControl._invalidvalue2column = false;
    _pChartBubbleSeriesControl._invalidvalue3column = false;
    _pChartBubbleSeriesControl._isBubbleSeries = false;

    //============================================================
    // nexacro.ChartBubbleSeries : Properties
    //============================================================
    _pChartBubbleSeriesControl._afterSetProperties = function ()
    {
        var legend = this._chart.legend;
        if (legend)
        {
            this._chart._applyLegendItem();
        }
    };

    _pChartBubbleSeriesControl.set_valueaxis = function (val)
    {
        if (this.valueaxis != val)
        {
            this._changeContentsProperty("valueaxis", val, this.valueaxis);
            this.valueaxis = val;
            this.on_apply_valueaxis(val);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_valueaxis = function (valueaxisId)
    {
        var valueaxis = this.parent.getValueaxisByID(valueaxisId);
        if (valueaxis)
        {
            valueaxis._used = true;
            valueaxis._afterSetProperties();

            var usedAxis = false;
            if (this._chart.seriesset)
            {
                var seriesset = this._chart.seriesset;
                for (var i = seriesset.length - 1; i > -1; i--)
                {
                    if (seriesset[i] && seriesset[i].id != this.id)
                    {
                        if ((seriesset[i]._yaxis && this._xaxis && seriesset[i]._yaxis.id == this._xaxis.id)
                            || (seriesset[i]._xaxis && this._xaxis && seriesset[i]._xaxis.id == this._xaxis.id)
                            && !usedAxis)
                        {
                            usedAxis = true;
                        }
                    }
                }
            }

            if (this._xaxis && !usedAxis && this._xaxis.id != valueaxis.id)
            {
                this._xaxis._used = false;
                this._xaxis.on_apply_visible(false);
            }

            this._xaxis = valueaxis;
            this._xaxis._direction = "x";
            this._xaxis.on_apply_opposite(this._xaxis.opposite);
            this._chart._changedData = true;
        }
    };

    _pChartBubbleSeriesControl.set_value2axis = function (val)
    {
        if (this.value2axis != val)
        {
            this._changeContentsProperty("value2axis", val, this.value2axis);
            this.value2axis = val;
            this.on_apply_value2axis(val);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_value2axis = function (value2axisId)
    {
        var value2axis = this.parent.getValueaxisByID(value2axisId);
        if (value2axis)
        {
            value2axis._used = true;
            value2axis._afterSetProperties();

            var usedAxis = false;
            if (this._chart.seriesset)
            {
                var seriesset = this._chart.seriesset;
                for (var i = seriesset.length - 1; i > -1; i--)
                {
                    if (seriesset[i] && seriesset[i].id != this.id)
                    {
                        if ((seriesset[i]._yaxis && this._yaxis && seriesset[i]._yaxis.id == this._yaxis.id)
                            || (seriesset[i]._xaxis && this._yaxis && seriesset[i]._xaxis.id == this._yaxis.id)
                            && !usedAxis)
                        {
                            usedAxis = true;
                        }
                    }
                }
            }

            if (this._yaxis && !usedAxis && this._yaxis.id != value2axis.id)
            {
                this._yaxis._used = false;
                this._yaxis.on_apply_visible(false);
            }

            this._yaxis = value2axis;
            this._yaxis._direction = "y";
            this._yaxis.on_apply_opposite(this._yaxis.opposite)
            this._chart._changedData = true;
        }
    };

    _pChartBubbleSeriesControl.set_visible = function (val)
    {
        if (val === undefined || val === null)
        {
            return;
        }

        val = nexacro._toBoolean(val);
        if (this.visible != val)
        {
            this._changeContentsProperty("visible", val, this.visible);
            this.visible = val;
            this.on_apply_visible(val);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_visible = function (visible)
    {
        if (this._is_initprop)
            return;

        if (visible)
        {
            var selecttype = this.selecttype;
            if (selecttype)
            {
                this._chart._changedData = true;
            }
            else
            {
                this._redrawSeries = false;
                this._applyPropertySeries("visible", true);
            }

            if (this.itemtextvisible)
            {
                this.on_apply_itemtextvisible(true);
            }
        }
        else
        {
            this._redrawSeries = false;
            this._applyPropertySeries("visible", false);

            if (!this._itemtextvisible)
            {
                this.on_apply_itemtextvisible(false);
            }
        }

        if (this._chart.legend)
        {
            this._chart._applyLegendItem();
        }
    };

    _pChartBubbleSeriesControl.set_value2column = function (v)
    {
        if (this.value2column._value != v)
        {
            this._changeContentsProperty("value2column", v, this.value2column);
            this.value2column._set(v);
            this.on_apply_value2column();
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_value2column = function ()
    {
        var bindtype = this.value2column._bindtype;
        if (bindtype == 0)
        {
            this._invalidvalue2column = true;
        }
        else
        {
            var value2column = this._getBindableValue("value2column");
            var binddataset = this._chart._binddataset;
            if (binddataset)
            {
                var coltype = binddataset._getColumnType(value2column);
                if (!coltype)
                {
                    this._invalidvalue2column = true;
                }
                else
                {
                    this._invalidvalue2column = false;
                }
            }
        }

        this._chart._changedData = true;
    };

    _pChartBubbleSeriesControl.set_value3column = function (v)
    {
        if (this.value3column._value != v)
        {
            this._changeContentsProperty("value3column", v, this.value3column);
            this.value3column._set(v);
            this.on_apply_value3column();
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_value3column = function ()
    {
        var bindtype = this.value3column._bindtype;
        if (bindtype == 0)
        {
            this._invalidvalue3column = true;
        }
        else
        {
            var value3column = this._getBindableValue("value3column");
            var binddataset = this._chart._binddataset;
            if (binddataset)
            {
                var coltype = binddataset._getColumnType(value3column);
                if (!coltype)
                {
                    this._invalidvalue3column = true;
                }
                else
                {
                    this._invalidvalue3column = false;
                }
            }
        }

        this._isBubbleSeries = true;
        this._chart._changedData = true;
    };

    _pChartBubbleSeriesControl.set_maxsize = function (val)
    {
        var lVal = null;
        if (val !== undefined && val !== null && val !== "")
        {
            if (nexacro._isNumber(val))
            {
                lVal = val;
            }
            else
            {
                if (val.length > 0)
                {
                    lVal = +val;
                    if (isNaN(lVal))
                    {
                        return;
                    }
                }
            }

            if (lVal < 0 || lVal > 100)
            {
                return;
            }
        }

        if (this.maxsize != val)
        {
            this._changeContentsProperty("maxsize", val, this.maxsize);
            this.maxsize = val;
            this.on_apply_maxsize(lVal);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_maxsize = function (maxsize)
    {
        if (!nexacro._GraphicsLib.isEmpty(maxsize))
        {
            this._maxsize = maxsize * 0.01;
            if (this._maxsize < this._minsize)
            {
                this.minsize = maxsize;
                this.on_apply_minsize(this.minsize);
            }
        }

        this._chart._recreate = true;
    };

    _pChartBubbleSeriesControl.set_minsize = function (val)
    {
        var lVal = null;
        if (val !== undefined && val !== null && val !== "")
        {
            if (nexacro._isNumber(val))
            {
                lVal = val;
            }
            else
            {
                if (val.length > 0)
                {
                    lVal = +val;
                    if (isNaN(lVal))
                    {
                        return;
                    }
                }
            }

            if (lVal < 0 || lVal > 100)
            {
                return;
            }
        }

        if (this.minsize != val)
        {
            this._changeContentsProperty("minsize", val, this.minsize);
            this.minsize = val;
            this.on_apply_minsize(lVal);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_minsize = function (minsize)
    {
        if (!nexacro._GraphicsLib.isEmpty(minsize))
        {
            this._minsize = minsize * 0.01;
            if (this._maxsize < this._minsize)
            {
                this.maxsize = minsize;
                this.on_apply_maxsize(this.maxsize);
            }
        }

        this._chart._recreate = true;
    };

    _pChartBubbleSeriesControl.set_linestyle = function (val)
    {
        this.linestyle = val;
        if (val)
        {
            if (this._linestyle == null || this._linestyle.value != val)
            {
                var oldValue;
                if (this._linestyle)
                {
                    oldValue = this._linestyle.value;
                }
                this._changeContentsProperty("linestyle", val, oldValue);

                var linestyle = nexacro.BorderLineObject(val);
                this._linestyle = linestyle;
                this.on_apply_linestyle(linestyle);
            }
        }
        else
        {
            if (this._linestyle)
            {
                this._linestyle = null;
                this.on_apply_linestyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_linestyle = function (linestyle)
    {
        if (linestyle)
        {
            this._borderwidth = linestyle._width;
        }

        this._redrawSeries = false;
        this._applyPropertySeries("linestyle", linestyle.value);
    };

    _pChartBubbleSeriesControl.set_fillstyle = function (val)
    {
        this.fillstyle = val;
        if (val)
        {
            if (this._fillstyle == null || this._fillstyle.value != val)
            {
                var oldValue;
                if (this._fillstyle)
                {
                    oldValue = this._fillstyle.value;
                }
                this._changeContentsProperty("fillstyle", val, oldValue);

                var fillstyle = nexacro.BackgroundObject(val, this);
                this._fillstyle = fillstyle;
                this.on_apply_fillstyle(fillstyle);
            }
        }
        else
        {
            if (this._fillstyle)
            {
                this._fillstyle = null;
                this.on_apply_fillstyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_fillstyle = function (fillstyle)
    {
        this._redrawSeries = false;
        this._applyPropertySeries("fillstyle", fillstyle.value);

        if (this._chart.legend)
        {
            this._chart._applyLegendItem();
        }
    };

    _pChartBubbleSeriesControl.set_opacity = function (val)
    {
        this.opacity = val;
        if (0 === val || val)
        {
            if (this._opacity == null || this._opacity.value != val)
            {
                var oldValue;
                if (this._opacity)
                {
                    oldValue = this._opacity.value;
                }
                this._changeContentsProperty("opacity", val, oldValue);

                var opacity = nexacro.OpacityObject(val);
                this._opacity = opacity;
                this.on_apply_opacity(opacity);
            }
        }
        else
        {
            if (this._opacity)
            {
                this._opacity = null;
                this.on_apply_opacity(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_opacity = function (opacity)
    {
        this._redrawSeries = false;
        this._applyPropertySeries("opacity", opacity.value);
    };

    _pChartBubbleSeriesControl.set_highlightvisible = function (val)
    {
        if (val === undefined || val === null)
        {
            return;
        }

        val = nexacro._toBoolean(val);
        if (this.highlightvisible != val)
        {
            this._changeContentsProperty("highlightvisible", val, this.highlightvisible);
            this.highlightvisible = val;
            this.on_apply_highlightvisible(val);
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.set_size = function (val)
    {
        if (val !== undefined && val !== null && val !== "")
        {
            if (isNaN(val) || val < 0)
            {
                return;
            }

            val = parseInt(val);
        }

        if (this.size != val)
        {
            this._changeContentsProperty("size", val, this.size);
            this.size = val;
            this.on_apply_size();
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_size = function ()
    {
        this._chart._recreate = true;
    };

    _pChartBubbleSeriesControl.set_pointshape = function (val)
    {
        var pointshape_enum = ["circle", "square", "diamond", "triangle", "cross"];
        if (pointshape_enum.indexOf(val) == -1)
        {
            return;
        }

        if (this.pointshape != val)
        {
            this._changeContentsProperty("pointshape", val, this.pointshape);
            this.pointshape = val;
            this.on_apply_pointshape();
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_pointshape = function ()
    {
        this._chart._recreate = true;
    };

    _pChartBubbleSeriesControl.on_apply_highlightvisible = function (highlightvisible)
    {
        // TODO style만 변경처리 여부 검토
    };

    _pChartBubbleSeriesControl.set_highlightsize = function (val)
    {
        if (val !== undefined && val !== null && val !== "")
        {
            if (isNaN(val) || val < 0)
            {
                return;
            }
            
            val = parseInt(val);
        }

        if (this.highlightsize != val)
        {
            this._changeContentsProperty("highlightsize", val, this.highlightsize);
            this.highlightsize = val;
            this.on_apply_highlightsize();
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_highlightsize = function ()
    {
        this._chart._recreate = true;
    };

    _pChartBubbleSeriesControl.set_highlightlinestyle = function (val)
    {
        this.highlightlinestyle = val;
        if (val)
        {
            if (this._highlightlinestyle == null || this._highlightlinestyle.value != val)
            {
                var oldValue;
                if (this._highlightlinestyle)
                {
                    oldValue = this._highlightlinestyle.value;
                }
                this._changeContentsProperty("highlightlinestyle", val, oldValue);

                var highlightlinestyle = nexacro.BorderLineObject(val);
                this._highlightlinestyle = highlightlinestyle;
                this.on_apply_highlightlinestyle(highlightlinestyle);
            }
        }
        else
        {
            if (this._highlightlinestyle)
            {
                this._highlightlinestyle = null;
                this.on_apply_highlightlinestyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_highlightlinestyle = function (highlightlinestyle)
    {
        // TODO style만 변경처리 여부 검토
    };

    _pChartBubbleSeriesControl.set_highlightfillstyle = function (val)
    {
        this.highlightfillstyle = val;
        if (val)
        {
            if (this._highlightfillstyle == null || this._highlightfillstyle.value != val)
            {
                var oldValue;
                if (this._highlightfillstyle)
                {
                    oldValue = this._highlightfillstyle.value;
                }
                this._changeContentsProperty("highlightfillstyle", val, oldValue);

                var highlightfillstyle = nexacro.BackgroundObject(val, this);
                this._highlightfillstyle = highlightfillstyle;
                this.on_apply_highlightfillstyle(highlightfillstyle);
            }
        }
        else
        {
            if (this._highlightfillstyle)
            {
                this._highlightfillstyle = null;
                this.on_apply_highlightfillstyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_highlightfillstyle = function (highlightfillstyle)
    {
        // TODO style만 변경처리 여부 검토
    };

    _pChartBubbleSeriesControl.set_highlightopacity = function (val)
    {
        this.highlightopacity = val;
        if (0 === val || val)
        {
            if (this._highlightopacity == null || this._highlightopacity.value != val)
            {
                var oldValue;
                if (this._highlightopacity)
                {
                    oldValue = this._highlightopacity.value;
                }
                this._changeContentsProperty("highlightopacity", val, oldValue);

                var highlightopacity = nexacro.OpacityObject(val);
                this._highlightopacity = highlightopacity;
                this.on_apply_highlightopacity(highlightopacity);
            }
        }
        else
        {
            if (this._highlightopacity)
            {
                this._highlightopacity = null;
                this.on_apply_highlightopacity(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_highlightopacity = function (highlightopacity)
    {
        // TODO style만 변경처리 여부 검토
    };

    _pChartBubbleSeriesControl.set_selectlinestyle = function (val)
    {
        this.selectlinestyle = val;
        if (val)
        {
            if (this._selectlinestyle == null || this._selectlinestyle.value != val)
            {
                var oldValue;
                if (this._selectlinestyle)
                {
                    oldValue = this._selectlinestyle.value;
                }
                this._changeContentsProperty("selectlinestyle", val, oldValue);

                var selectlinestyle = nexacro.BorderLineObject(val);
                this._selectlinestyle = selectlinestyle;
                this.on_apply_selectlinestyle(selectlinestyle);
            }
        }
        else
        {
            if (this._selectlinestyle)
            {
                this._selectlinestyle = null;
                this.on_apply_selectlinestyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_selectlinestyle = function (selectlinestyle)
    {
        this._redrawSeries = false;
        this._applyPropertySeries("selectlinestyle", selectlinestyle, "select");
    };

    _pChartBubbleSeriesControl.set_selectfillstyle = function (val)
    {
        this.selectfillstyle = val;
        if (val)
        {
            if (this._selectfillstyle == null || this._selectfillstyle.value != val)
            {
                var oldValue;
                if (this._selectfillstyle)
                {
                    oldValue = this._selectfillstyle.value;
                }
                this._changeContentsProperty("selectfillstyle", val, oldValue);

                var selectfillstyle = nexacro.BackgroundObject(val, this);
                this._selectfillstyle = selectfillstyle;
                this.on_apply_selectfillstyle(selectfillstyle);
            }
        }
        else
        {
            if (this._selectfillstyle)
            {
                this._selectfillstyle = null;
                this.on_apply_selectfillstyle(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_selectfillstyle = function (selectfillstyle)
    {
        this._redrawSeries = false;
        this._applyPropertySeries("selectfillstyle", selectfillstyle, "select");
    };

    _pChartBubbleSeriesControl.set_selectopacity = function (val)
    {
        this.selectopacity = val;
        if (0 === val || val)
        {
            if (this._selectopacity == null || this._selectopacity.value != val)
            {
                var oldValue;
                if (this._selectopacity)
                {
                    oldValue = this._selectopacity.value;
                }
                this._changeContentsProperty("selectopacity", val, oldValue);

                var selectopacity = nexacro.OpacityObject(val);
                this._selectopacity = selectopacity;
                this.on_apply_selectopacity(selectopacity);
            }
        }
        else
        {
            if (this._selectopacity)
            {
                this._selectopacity = null;
                this.on_apply_selectopacity(null);
            }
        }

        this._chart._draw();
    };

    _pChartBubbleSeriesControl.on_apply_selectopacity = function (selectopacity)
    {
        this._redrawSeries = false;
        this._applyPropertySeries("selectopacity", selectopacity, "select");
    };

    _pChartBubbleSeriesControl.set_itemtextposition = function (val)
    {
        var itemtextposition_enum = ["left top", "center top", "right top", "left middle",
            "center middle", "right middle", "left bottom", "center bottom", "right bottom", "inside start", "inside middle"];
        if (itemtextposition_enum.indexOf(val) == -1)
        {
            return;
        }

        if (this.itemtextposition != val)
        {
            this._changeContentsProperty("itemtextposition", val, this.itemtextposition);
            this.itemtextposition = val;
            this.on_apply_itemtextposition();
        }

        this._chart._draw();

    };
    _pChartBubbleSeriesControl.on_apply_itemtextposition = function ()
    {
        this._chart._recreate = true;
    }
    _pChartBubbleSeriesControl.set_itemtextgap = function (val)
    {
        if (val !== undefined && val !== null && val !== "")
        {
            if (isNaN(val))
            {
                return;
            }

            val = parseInt(val);
        }
        if (this.itemtextgap != val)
        {
            this._changeContentsProperty("itemtextgap", val, this.itemtextgap);
            this.itemtextgap = val;
            this.on_apply_itemtextgap();
        }
    };
    _pChartBubbleSeriesControl.on_apply_itemtextgap = function ()
    {
        this._chart._recreate = true;
    }

    //============================================================
    // nexacro.ChartBubbleSeries : Methods
    //============================================================
    _pChartBubbleSeriesControl.destroy = function ()
    {

    };

    //============================================================
    // nexacro.ChartBubbleSeries : Logical part
    //============================================================	
    _pChartBubbleSeriesControl._applyPropertySeries = function (style, value, select)
    {
        var item,
			seriesGroup,
			itemID,
			isselectitem = false;

        seriesGroup = this._chart._graphicsControl.getObjectByID("ChartSeriesGroup");

        for (var i = 1; i <= this._itemCnt; i++)
        {
            itemID = this._configIndex + " SeriesBubble" + "Item_" + (i - 1);
            item = seriesGroup.getObjectByID(itemID);

            if (!nexacro._isNull(item))
            {
                var length = this._selectedItem.length;
                if (length > 0)
                {
                    isselectitem = this._selectedItem[i - 1];
                }

                // select 색상 변경인 경우 구분
                if (isselectitem)
                {
                    if (style == "selectlinestyle")
                    {
                        item.set_strokepen(value);
                    }
                    else if (style == "selectfillstyle")
                    {
                        item.set_fillstyle(value);
                    }
                    else if (style == "selectopacity")
                    {
                        item.set_opacity(value);
                    }
                    else if (style == "visible")
                    {
                        item.set_visible(value)
                    }
                }
                else
                {
                    // style 속성별 분기 처리
                    if (style == "linestyle")
                    {
                        item.set_strokepen(value);
                    }
                    else if (style == "fillstyle")
                    {
                        item.set_fillstyle(value);
                    }
                    else if (style == "opacity")
                    {
                        item.set_opacity(value);
                    }
                    else if (style == "visible")
                    {
                        item.set_visible(value)
                    }
                }
            }
        }
    };

    _pChartBubbleSeriesControl._draw = function (redraw)
    {
        if (!redraw)
            return;

        if (this.visible)
        {
            if (this._isBubbleSeries)

            {
                this._drawSeriesBubbles();
            }
            else
            {
                this._drawSeriesScatterPlot();
            }
        }
    };

    _pChartBubbleSeriesControl._drawSeriesScatterPlot = function ()
    {
        //trace("_drawSeriesScatterPlot");
        var linestyle = this.linestyle || "1px solid " + this._color,
			fillstyle = this.fillstyle || this._color,
			opacity = this.opacity,
			index = 0,
			datapoints = this._datapoints,
			points = datapoints.points,
			ps = datapoints.pointsize,
			selectitem,
			selectlinestyle = this.selectlinestyle || "1px solid " + this._selectcolor,
			selectfillstyle = this.selectfillstyle || this._selectcolor,
			selectopacity = this.selectopacity || this.opacity,
			selectedItem = this._selectedItem,
			isselectitem = false,
            size;

        if ((this.size == "" || this.size == undefined) && this.size !== 0)
        {
            size = 10;
        }
        else
        {
            size = this.size;
        }

        for (var i = 0; i < points.length; i += ps)
        {
            var length = selectedItem.length;
            if (length > 0)
            {
                isselectitem = selectedItem[index];
            }

            if (isselectitem)
            {
                this._drawScatterPlot(points[i], points[i + 1], size, this._xaxis, this._yaxis, this.pointshape, this._pointshape, selectlinestyle, selectfillstyle, selectopacity, index);
            }
            else
            {
                this._drawScatterPlot(points[i], points[i + 1], size, this._xaxis, this._yaxis, this.pointshape, this._pointshape, linestyle, fillstyle, opacity, index);
            }
            index++;
        }
        this._itemCnt = index;
    };

    _pChartBubbleSeriesControl._drawSeriesBubbles = function ()
    {
        var valuecolumn, value2column, value3column, data,
			linestyle = this.linestyle || "1px solid " + this._color,
			fillstyle = this.fillstyle || this._color,
			opacity = this.opacity,
            radius,
            index = 0,
            maxsize = 0,
            minsize = 0,
			bubbleData = [],
			data = this._data,
			datapoint = [],
			bubbleMinWidth = 0,
			bubbleMaxWidth = 0,
			selectedItem = this._selectedItem,
			selectlinestyle = this.selectlinestyle || "1px solid " + this._selectcolor,
			selectfillstyle = this.selectfillstyle || this._selectcolor,
			selectopacity = this.selectopacity || this.opacity,
			isselectitem = false,
			board = this._chart._boardRect,
			boardWidth = 0,
			boardHeight = 0,
			borderWidth = this._chart._boardBorderWidth,
			borderHeight = this._chart._boardBorderHeight;

        if (this.maxsize)
        {
            maxsize = this._maxsize;
        }
        else
        {
            maxsize = 0.3;
        }

        if (this.minsize)
        {
            minsize = this._minsize;
        }
        else
        {
            minsize = 0.03;
        }

        if (board)
        {
            boardWidth = board.width - borderWidth;
            boardHeight = board.height - borderHeight;
        }

        bubbleMinWidth = (Math.min(boardHeight, boardWidth) * minsize);
        bubbleMaxWidth = (Math.min(boardHeight, boardWidth) * maxsize);
        //trace("minsize", minsize, "maxsize", maxsize, "bubbleMinWidth", bubbleMinWidth, "bubbleMaxWidth", bubbleMaxWidth) ;

        for (var i = 0; i < data.length; i++)
        {
            var valuedata = data[i][2];
            if (!valuedata)
            {
                valuedata = 0;
            }
            bubbleData[i] = valuedata;
        }

        this._mindata = nexacro._GraphicsLibArray.min(bubbleData);
        this._maxdata = nexacro._GraphicsLibArray.max(bubbleData);

        for (var i = 0; i < data.length; i++)
        {
            valuecolumn = data[i][0];
            value2column = data[i][1];
            value3column = data[i][2];
			datapoint = data[i];

            var length = selectedItem.length;
            if (length > 0)
            {
                isselectitem = selectedItem[index];
            }

            // 제일 작은 원
            if (value3column == this._mindata)
            {
                radius = bubbleMinWidth;
            }
            // 제일 큰 원
            else if (value3column == this._maxdata)
            {
                radius = bubbleMaxWidth;
            }
            // 그 밖의 원
            else
            {
                // 1. 원 data값에 해당하는 scale(원의 최대크기 기준)
                // 2. 원의 data값을 원의 지름으로 변환
                // Bubble Chart의 원의 scale 공식 Rgraph참조
                radius = ((value3column - this._mindata) / (this._maxdata - this._mindata) * bubbleMaxWidth) + bubbleMinWidth;
            }
            //trace("변경 전 radius -------------------->", radius, "bubbleMaxWidth ", bubbleMaxWidth, "bubbleMinWidth", bubbleMinWidth);
            if (!nexacro._GraphicsLib.isEmpty(radius))
            {
                if (radius < bubbleMinWidth)
                {
                    radius = bubbleMinWidth;
                }
                if (radius > bubbleMaxWidth)
                {
                    radius = bubbleMaxWidth;
                }

                //radius = Math.ceil(radius);
            }

            //trace("index ", index, "value3column >>>>>>", value3column, "radius >>>>", radius);
            if (isselectitem)
            {
                this._drawBubble(valuecolumn, value2column, datapoint, radius, selectlinestyle, selectfillstyle, selectopacity, index);
            }
            else
            {
                this._drawBubble(valuecolumn, value2column, datapoint, radius, linestyle, fillstyle, opacity, index);
            }
            index++;
        }
        this._itemCnt = index;
    };

    _pChartBubbleSeriesControl._drawScatterPlot = function (x, y, radius, axisx, axisy, pointshape, _pointshape, linestyle, fillstyle, opacity, index, item)
    {
        //trace("_drawScatterPlot >> ", index,  " x>>", x, " y>>", y);
        var chart = this._chart,
			point,
			cx, cy,
			points = [],
			evtInfo,
			seriesId,
			seriesGroup = chart._seriesGroup,
			tmp,
            highlightGroup = chart._highlightGroup;

        if (x == null || y == null || x < axisx._min || x > axisx._max || y < axisy._min || y > axisy._max)
        {
            return;
        }

        cx = axisx.p2c(x);
        cy = axisy.p2c(y);

        if (pointshape == "square" || pointshape == "diamond" || pointshape == "triangle" || pointshape == "cross")
        {
            radius = radius / 2;
            point = _pointshape(cx, cy, radius);
        }
        else // pointshape == "circle"
        {
            point = new nexacro.GraphicsEllipse(cx, cy, radius, radius);
        }

        point.set_strokepen(linestyle);
        point.set_fillstyle(fillstyle);
        point.set_opacity(opacity);

        if (item)
        {
            var highlightitem = item._highlight;
            if (!highlightitem)
            {
                seriesId = this._configIndex + " SeriesScatterHighlightItem";
                point.set_id(seriesId);
                highlightGroup.addChild(point);

                item._highlight = point;
                item.index = index;
                point._item = item;
            }
        }
        else
        {
            if (seriesGroup)
            {
                seriesId = this._configIndex + " SeriesScatterItem_" + index;
                point.set_id(seriesId);
                seriesGroup.addChild(point);

                point.index = index;
                point.value = y;

                points[0] = x;
                points[1] = y;

                point.radius = radius;
                point._points = points;
            }
        }

        point._series = this;
        this._seriesitems[point.index] = point;

        if (point && !item)
        {
            var itemtextvisible = this.itemtextvisible;
            if (itemtextvisible && point)
            {
                this._drawItemText(cx, cy, point);
            }
        }
    };

    _pChartBubbleSeriesControl._drawBubble = function (x, y, data, radius, linestyle, fillstyle, opacity, index, item)
    {
        // trace("_drawBubble index ", index);
        var circle = null,
            chart = this._chart,
            cx, cy,
            points = [],
            axisx = this._xaxis,
            axisy = this._yaxis,
            seriesId,
            seriesGroup = this._chart._seriesGroup,
            highlightGroup = this._chart._highlightGroup;

        if (x == null || !axisx || !axisy || x < axisx._min || x > axisx._max || y < axisy._min || y > axisy._max)
        {
            return;
        }

        cx = axisx.p2c(x);
        cy = axisy.p2c(y);

        circle = new nexacro.GraphicsEllipse(cx, cy, radius, radius);

        circle.set_strokepen(linestyle);
        circle.set_fillstyle(fillstyle);
        circle.set_opacity(opacity);

        var board = this._chart._boardRect,
			boardWidth = 0,
			boardHeight = 0,
			borderWidth = this._chart._boardBorderWidth,
			borderHeight = this._chart._boardBorderHeight;

        if (board)
        {
            boardWidth = board.width - borderWidth;
            boardHeight = board.height - borderHeight;
            circle.setClipPath(new nexacro.Rect(-cx, -cy, boardWidth, boardHeight));
        }

        if (item)
        {
            var highlightitem = item._highlight;
            if (!highlightitem)
            {
                seriesId = this._configIndex + " SeriesHighlightBubbleItem";
                item._highlight = circle;
                circle._item = item;
                highlightGroup.addChild(circle);
            }
        }
        else
        {
            seriesId = this._configIndex + " SeriesBubbleItem_" + index;
            circle.set_id(seriesId);
            seriesGroup.addChild(circle);

            circle.index = index;
            circle.value = data[2];
            circle.radius = radius;

            points[0] = x;
            points[1] = y;
            points[2] = data[2];
            circle._points = points;
        }
        circle._series = this;
        this._seriesitems[index] = circle;

        if (!item)
        {
            var visible = this.visible,
				itemtextvisible = this.itemtextvisible;
            if (visible && itemtextvisible)
            {
                this._drawItemText(cx, cy, circle);
            }
        }
    };

    _pChartBubbleSeriesControl._drawItemText = function (cx, cy, item)
    {
        var seriesGroup = this._chart._seriesGroup;
        var itemText = this._createSeriesItemText(item);
        if (!nexacro._isNull(itemText))
        {
            // trace("itemText ", itemText.text);
            var textRect = null,
				textWidth = 0,
				textHeight = 0,
				textLeft = 0,
				textTop = 0,
				radius = item.radius,
				width = this._borderwidth,
                itemtextPosition = this.itemtextposition,
                itemtextGap = this.itemtextgap;

            // TODO: itemtextposition, itemtextgap
            // textRect = itemText._getRect();
            // if (textRect)
            // {
            // textWidth = textRect.width;
            // textHeight = textRect.height;
            // }
            textLeft = cx;
            textTop = cy;

            // textLeft = textLeft - (textWidth/2);
            // textTop = textTop - (textHeight/2);

            // textTop = textTop - (radius/2) - (width/2);
            // itemText.set_verticalAlign("bottom");
            if (itemtextPosition)
            {
                switch(itemtextPosition)
                {
                    case "left top":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "center top":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "right top":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "left middle":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;

                    case "center middle":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "right middle":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "left bottom":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "center bottom":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "right bottom":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "inside start":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    
                    case "inside middle":
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
                    default:
                        itemText.set_verticalAlign("middle");
                        itemText.set_textAlign("center");
                    break;
        
                }
            }
            else
            {
                itemText.set_verticalAlign("middle");
                itemText.set_textAlign("center");
            }
            if (itemtextGap)
            {
                var leftgap = itemtextGap;
                var topgap = itemtextGap;
                itemText.set_x(textLeft + leftgap);
                itemText.set_y(textTop  + topgap);
            }
            else
            {
                itemText.set_x(textLeft);
                itemText.set_y(textTop);
            }
           

           

            //// itemtext clipping 처리
            //// TODO - Board영역을 벗어나는 경우 clipping Chart에 일괄 적용 시 처리
            //var board = this._chart._boardRect,
			//boardWidth = 0,
			//boardHeight = 0,
			//borderWidth = this._chart._boardBorderWidth,
			//borderHeight = this._chart._boardBorderHeight;

            //if (board)
            //{
            //    boardWidth = board.width - borderWidth;
            //    boardHeight = board.height - borderHeight;
            //    itemText.setClipPath(new nexacro.Rect(-textLeft, -textTop, boardWidth, boardHeight));
            //}
            seriesGroup.addChild(itemText);
        }
    };

    _pChartBubbleSeriesControl._showHighlight = function (item)
    {
        if (!this.highlightvisible)
        {
            return;
        }

        var highlight = item._highlight;
        if (!highlight)
        {
            var points = item._points,
                highlightlinestyle = this.highlightlinestyle || "1px solid " + this._highlightcolor,
				highlightfillstyle = this.highlightfillstyle || this._highlightcolor,
				highlightopacity = this.highlightopacity,
				radius = item.radius,
				highlightsize = item._series.highlightsize,
                highlightGroup = this._chart._highlightGroup;

            if (!points)
                return false;

            if ((highlightsize == "" || highlightsize == undefined) && highlightsize !== 0)
            {
                highlightsize = 10;
            }

            if (radius)
            {
                radius += highlightsize;
            }

            if (this._isBubbleSeries)
            {
                this._drawBubble(points[0], points[1], points, radius, highlightlinestyle, highlightfillstyle, highlightopacity, 0, item);
            }
            else
            {
                this._drawScatterPlot(points[0], points[1], radius, this._xaxis, this._yaxis, this.pointshape, this._pointshape, highlightlinestyle, highlightfillstyle, highlightopacity, 0, item);
            }

            this._chart._graphicsControl.draw();
        }
    };

    _pChartBubbleSeriesControl._hideHighlight = function (item)
    {
        if (!this.highlightvisible)
        {
            return;
        }

        var highlight = item._highlight;
        if (highlight && !nexacro._GraphicsLib.isEmpty(highlight.parent))
        {
            this._chart._highlightGroup.removeChild(highlight);
            delete item._highlight;

            this._chart._graphicsControl.draw();
        }
    };

    _pChartBubbleSeriesControl._setColor = function (colorset)
    {
        this._color = colorset;
        this._changedSeriesColor = true;

        var changedColorset = this._chart._changedColorset;
        if (changedColorset)
        {
            var visible = this.visible,
				linestyle,
				fillstyle;

            if (visible)
            {
                if (this._linestyle)
                {
                    var width,
						style,
						color;

                    width = this._linestyle.width;
                    style = this._linestyle.style;
                    color = this._linestyle.color;

                    linestyle = width + " " + style + " " + color;
                    this.set_linestyle(linestyle);
                }
                else
                {
                    linestyle = "1px solid " + colorset;
                    this._applyPropertySeries("linestyle", linestyle);
                    this.linestyle = linestyle;
                }

                if (this._fillstyle)
                {
                    fillstyle = this._fillstyle;
                    this.set_fillstyle(fillstyle);
                }
                else
                {
                    this.fillstyle = colorset;
                    this._applyPropertySeries("fillstyle", colorset);
                }
            }
        }
    };

    delete _pChartBubbleSeriesControl;
}