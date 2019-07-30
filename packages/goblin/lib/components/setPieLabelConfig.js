"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _Commom = require("../utils/Commom");

function setEvent(options, chart) {
  var newOptions = _Commom.Util.omit(options, ['onClick']);

  if (options.onClick) {
    newOptions.onClick = function (obj) {
      options.onClick(obj, chart);
    };
  }

  return newOptions;
}

var process = function process(chart, config) {
  var cPieLabel = _Commom.Util.deepClone(config.pieLabel);

  if (_Commom.Util.isNil(cPieLabel)) {
    return;
  }

  return chart.pieLabel(setEvent(cPieLabel, chart));
};

exports.process = process;