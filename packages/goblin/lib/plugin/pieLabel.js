"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var PieLabel = require('@antv/f2/lib/plugin/pie-label');

function _default(Chart) {
  Chart.plugins.register(PieLabel);
}

;