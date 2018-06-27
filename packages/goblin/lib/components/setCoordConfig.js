'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.process = undefined;

var _Commom = require('../utils/Commom');

var process = exports.process = function process(chart, config) {
    var cCoord = _Commom.Util.deepClone(config.coord);
    if (!cCoord) {
        return chart.coord('rect');
    }
    var type = cCoord.type || 'rect';
    var options = _Commom.Util.omit(cCoord, ['type']);
    return chart.coord(type, options);
};
//# sourceMappingURL=setCoordConfig.js.map