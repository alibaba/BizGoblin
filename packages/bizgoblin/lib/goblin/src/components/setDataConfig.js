"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _Commom = require("../utils/Commom");

var process = function process(chart, config) {
  var cDefs = _Commom.Util.deepClone(config.defs);

  var isArr = _Commom.Util.isArray(cDefs);

  var options = {};

  if (!_Commom.Util.isEmpty(cDefs)) {
    var arrDefs = isArr ? cDefs : [cDefs];

    for (var _i = 0, arrDefs_1 = arrDefs; _i < arrDefs_1.length; _i++) {
      var res = arrDefs_1[_i];

      if (res.dataKey) {
        var currOption = _Commom.Util.omit(res, 'dataKey');

        options[res.dataKey] = currOption;
      }
    }
  }

  if (_Commom.Util.isEmpty(config.data)) {
    config.data = [];
  }

  if (!_Commom.Util.isEmpty(config.series)) {
    var cData = _Commom.Util.deepClone(config.data);

    var arrData = _Commom.Util.isArray(cData) ? cData : [cData];
    chart.source(arrData, options);
  }
};

exports.process = process;