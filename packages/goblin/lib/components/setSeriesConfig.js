'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _Commom = require('../utils/Commom');

function setSeriesGeom(chart, currSeries) {
    var geom = currSeries.geom;
    var geomObj;
    switch (geom) {
        case 'path':
            geomObj = chart.path();
            break;
        case 'line':
            geomObj = chart.line();
            break;
        case 'area':
            geomObj = chart.area();
            break;
        case 'bar':
        case 'interval':
            geomObj = chart.interval();
            break;
        case 'point':
            geomObj = chart.point();
            break;
        case 'schema':
            geomObj = chart.schema();
            break;
        case 'polygon':
            geomObj = chart.polygon();
            break;
        default:
            geomObj = chart.line();
    }
    return geomObj;
}
function setSeriesPosition(chart, currSeries) {
    var position = currSeries.position;
    if (!_Commom.Util.isNil(position)) {
        return chart.position(position);
    }
    return chart;
}
function setSeriesAdjust(chart, currSeries) {
    var adjust = currSeries.adjust;
    if (!_Commom.Util.isNil(adjust)) {
        return chart.adjust(adjust);
    }
    return chart;
}
function setSeriesShape(chart, currSeries) {
    var shape = currSeries.shape;
    if (_Commom.Util.isString(shape)) {
        return chart.shape(shape);
    }
    if (_Commom.Util.isArray(shape) && shape.length >= 1) {
        if (shape[1]) {
            return chart.shape(shape[0], shape[1]);
        }
        return chart.shape(shape[0]);
    }
    return chart;
}
function setSeriesColor(chart, currSeries) {
    var color = currSeries.color;
    if (_Commom.Util.isString(color)) {
        return chart.color(color);
    }
    if (_Commom.Util.isArray(color) && color.length >= 1) {
        if (color[1]) {
            return chart.color(color[0], color[1]);
        }
        return chart.color(color[0]);
    }
    return chart;
}
function setSeriesSize(chart, currSeries) {
    var size = currSeries.size;
    if (_Commom.Util.isNumber(size) || _Commom.Util.isString(size)) {
        return chart.size(size);
    }
    if (_Commom.Util.isArray(size) && size.length >= 1) {
        if (size[1]) {
            return chart.size(size[0], size[1]);
        }
        return chart.size(size[0]);
    }
    return chart;
}
function setSeriesStyle(chart, currSeries) {
    var style = currSeries.style;
    if (_Commom.Util.isArray(style) && style.length >= 1) {
        if (style[1]) {
            return chart.style(style[0], style[1]);
        }
        return chart.style(style[0]);
    }
    if (_Commom.Util.isPlainObject(style)) {
        return chart.style(style);
    }
    return chart;
}
var process = exports.process = function process(chart, config) {
    var cSeries = _Commom.Util.deepClone(config.series);
    var isArr = _Commom.Util.isArray(cSeries);
    if (_Commom.Util.isNil(cSeries) || _Commom.Util.isEmpty(cSeries)) {
        return chart;
    }
    var arrSeries = isArr ? cSeries : [cSeries];
    var chartInstance;
    arrSeries.forEach(function (currSeries) {
        chartInstance = setSeriesGeom(chart, currSeries);
        chartInstance = setSeriesPosition(chartInstance, currSeries);
        chartInstance = setSeriesColor(chartInstance, currSeries);
        chartInstance = setSeriesSize(chartInstance, currSeries);
        chartInstance = setSeriesShape(chartInstance, currSeries);
        chartInstance = setSeriesAdjust(chartInstance, currSeries);
        chartInstance = setSeriesStyle(chartInstance, currSeries);
    });
    return chartInstance;
};
//# sourceMappingURL=setSeriesConfig.js.map