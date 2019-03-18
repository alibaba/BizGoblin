"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.Shape = exports.track = exports.Global = exports.registerShape = void 0;

var _CommonChart = _interopRequireDefault(require("./core/CommonChart"));

var CustomizeUtils = _interopRequireWildcard(require("./utils/CustomizeUtils"));

var _Commom = require("./utils/Commom");

var F2 = require('@antv/f2');

var registerShape = CustomizeUtils.registerShape;
exports.registerShape = registerShape;
var Global = F2.Global;
exports.Global = Global;
var track = F2.track;
exports.track = track;
var Shape = F2.Shape;
exports.Shape = Shape;

function _default(config) {
  if (_Commom.Util.isNil(config) || _Commom.Util.isEmpty(config)) {
    return;
  }

  var commonChart = new _CommonChart.default(config);
  commonChart.render();
  return commonChart;
}