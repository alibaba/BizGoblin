"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.Chart = exports.Shape = exports.Global = void 0;

var _CommonChart = _interopRequireDefault(require("./core/CommonChart"));

var _Commom = require("./utils/Commom");

var F2 = require('@antv/f2');

var Global = F2.Global;
exports.Global = Global;
var Shape = F2.Shape;
exports.Shape = Shape;
var Chart = F2.Chart;
exports.Chart = Chart;

function _default(config) {
  if (_Commom.Util.isNil(config) || _Commom.Util.isEmpty(config)) {
    return;
  }

  var commonChart = new _CommonChart.default(config);
  commonChart.render();
  return commonChart;
}