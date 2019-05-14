"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _Commom = require("../utils/Commom");

var process = function process(chart, config) {
  var cCoord = _Commom.Util.deepClone(config.coord);

  if (!cCoord) {
    return chart.coord('rect');
  }

  var type = cCoord.type || 'rect';

  var options = _Commom.Util.omit(cCoord, ['type']);

  return chart.coord(type, options);
};

exports.process = process;