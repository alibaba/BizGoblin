"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _Commom = require("../utils/Commom");

function setEvent(options, chart) {
  if (options.onClick) {
    var newOptions = _Commom.Util.omit(options, ['onClick']);

    newOptions.onClick = function (event) {
      options.onClick(event, chart);
    };

    return newOptions;
  }

  return options;
}

var process = function process(chart, config) {
  var cLegend = _Commom.Util.deepClone(config.legend);

  var isArr = _Commom.Util.isArray(cLegend);

  if (_Commom.Util.isNil(cLegend) || cLegend === false || isArr && cLegend.length === 0 || cLegend.show === false) {
    return chart.legend(false);
  }

  if (cLegend.show) {
    return chart.legend(true);
  }

  var arrLegend = isArr ? cLegend : [cLegend];

  for (var _i = 0, arrLegend_1 = arrLegend; _i < arrLegend_1.length; _i++) {
    var res = arrLegend_1[_i];

    if (res.dataKey) {
      if (res.show === false) {
        chart.legend(res.dataKey, false);
      } else {
        var options = _Commom.Util.omit(res, ['show', 'dataKey']);

        chart.legend(res.dataKey, setEvent(options, chart));
      }
    } else {
      chart.legend(setEvent(res, chart));
    }
  }

  return chart;
};

exports.process = process;