'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _Commom = require('../utils/Commom');

var process = exports.process = function process(chart, config) {
    var cAxis = _Commom.Util.deepClone(config.axis);
    var isArr = _Commom.Util.isArray(cAxis);
    if (_Commom.Util.isNil(cAxis) || cAxis === false || isArr && cAxis.length === 0) {
        return chart.axis(false);
    }
    if (cAxis === true) {
        return chart.axis(true);
    }
    var arrAxis = isArr ? cAxis : [cAxis];
    for (var _i = 0, arrAxis_1 = arrAxis; _i < arrAxis_1.length; _i++) {
        var res = arrAxis_1[_i];
        if (res.dataKey) {
            if (res.show === false) {
                chart.axis(res.dataKey, false);
            } else {
                var options = _Commom.Util.omit(res, ['show', 'dataKey']);
                chart.axis(res.dataKey, options);
            }
        } else {
            chart.axis(res);
        }
    }
    return chart;
};
//# sourceMappingURL=setAxisConfig.js.map