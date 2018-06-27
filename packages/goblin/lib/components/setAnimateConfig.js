'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _Commom = require('../utils/Commom');

var process = exports.process = function process(chart, config) {
    var animate = _Commom.Util.deepClone(config.animate);
    if (_Commom.Util.isBoolean(animate)) {
        return chart.animate(animate);
    }
    if (!_Commom.Util.isEmpty(animate)) {
        return chart.animate(animate);
    }
    return chart;
};
//# sourceMappingURL=setAnimateConfig.js.map