'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shape = exports.track = exports.Global = exports.registerShape = undefined;

exports.default = function (config) {
    if (_Commom.Util.isNil(config) || _Commom.Util.isEmpty(config)) {
        return;
    }
    var commonChart = new _CommonChart2.default(config);
    commonChart.render();
    return commonChart;
};

var _CommonChart = require('./core/CommonChart');

var _CommonChart2 = _interopRequireDefault(_CommonChart);

var _CustomizeUtils = require('./utils/CustomizeUtils');

var CustomizeUtils = _interopRequireWildcard(_CustomizeUtils);

var _Commom = require('./utils/Commom');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var F2 = require('@antv/f2');
var registerShape = exports.registerShape = CustomizeUtils.registerShape;
var Global = exports.Global = F2.Global;
var track = exports.track = F2.track;

//# sourceMappingURL=index.js.map
var Shape = exports.Shape = F2.Shape;