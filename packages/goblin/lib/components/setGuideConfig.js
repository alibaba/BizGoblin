"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.process = void 0;

var _Commom = require("../utils/Commom");

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function setGuideLine(chart, item) {
  var newItem = _Commom.Util.omit(item, ['type']);

  chart.guide().line(__assign({}, newItem));
}

function setGuideTag(chart, item) {
  var newItem = _Commom.Util.omit(item, ['type']);

  chart.guide().tag(__assign({}, newItem));
}

function setGuideArc(chart, item) {
  if (item.quickType === 'parallel') {
    var data = item.data;
    chart.guide().arc(__assign({
      start: ['min', data],
      end: ['max', data]
    }, item));
    chart.guide().arc(__assign({
      start: ['max', data],
      end: ['min', data]
    }, item));
  } else if (item.quickType === 'normal') {
    var data = item.data;
    chart.guide().line(__assign({
      start: [data, 'min'],
      end: [data, 'max']
    }, item));
  } else {
    var newItem = _Commom.Util.omit(item, ['type']);

    chart.guide().arc(__assign({}, newItem));
  }
}

function setGuideText(chart, item) {
  var newItem = _Commom.Util.omit(item, ['type']);

  chart.guide().text(__assign({}, newItem));
}

function setGuideHtml(chart, item) {
  var newItem = _Commom.Util.omit(item, ['type']);

  chart.guide().html(__assign({}, newItem));
}

function setGuideRect(chart, item) {
  var newItem = _Commom.Util.omit(item, ['type']);

  chart.guide().rect(__assign({}, newItem));
}

var process = function process(chart, config) {
  var cGuide = _Commom.Util.deepClone(config.guide);

  var isArr = _Commom.Util.isArray(cGuide);

  if (_Commom.Util.isNil(cGuide) || _Commom.Util.isEmpty(cGuide)) {
    return;
  }

  var arrGuide = isArr ? cGuide : [cGuide];
  chart.guide().clear();
  arrGuide.forEach(function (res) {
    if (res.type === 'line') {
      setGuideLine(chart, res);
    } else if (res.type === 'text') {
      setGuideText(chart, res);
    } else if (res.type === 'tag') {
      setGuideTag(chart, res);
    } else if (res.type === 'rect') {
      setGuideRect(chart, res);
    } else if (res.type === 'arc') {
      setGuideArc(chart, res);
    } else if (res.type === 'html') {
      setGuideHtml(chart, res);
    }
  });
};

exports.process = process;