'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _Commom = require('../utils/Commom');

function setEvent(options, chart) {
    var newOptions = _Commom.Util.omit(options, ['onChange', 'onHide', 'onShow']);
    if (options.onChange) {
        newOptions.onChange = function (obj) {
            options.onChange(obj, chart);
        };
    }
    if (options.onHide) {
        newOptions.onHide = function (obj) {
            options.onHide(obj, chart);
        };
    }
    if (options.onShow) {
        newOptions.onShow = function (obj) {
            options.onShow(obj, chart);
        };
    }
    return newOptions;
}
var process = exports.process = function process(chart, config) {
    var cTooltip = _Commom.Util.deepClone(config.tooltip);
    if (_Commom.Util.isNil(cTooltip) || cTooltip === false || cTooltip.show === false) {
        return chart.tooltip(false);
    }
    var options = _Commom.Util.omit(cTooltip, ['show']);
    return chart.tooltip(setEvent(options, chart));
};
//# sourceMappingURL=setTooltipConfig.js.map