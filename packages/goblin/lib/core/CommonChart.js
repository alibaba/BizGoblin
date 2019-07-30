"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _Commom = require("../utils/Commom");

var setSeriesConfig = _interopRequireWildcard(require("../components/setSeriesConfig"));

var setCoordConfig = _interopRequireWildcard(require("../components/setCoordConfig"));

var setAxisConfig = _interopRequireWildcard(require("../components/setAxisConfig"));

var setGuideConfig = _interopRequireWildcard(require("../components/setGuideConfig"));

var setDataConfig = _interopRequireWildcard(require("../components/setDataConfig"));

var setAnimateConfig = _interopRequireWildcard(require("../components/setAnimateConfig"));

var setLegentConfig = _interopRequireWildcard(require("../components/setLegendConfig"));

var setTooltipConfig = _interopRequireWildcard(require("../components/setTooltipConfig"));

var setPieLabelConfig = _interopRequireWildcard(require("../components/setPieLabelConfig"));

var F2 = require('@antv/f2');

var CommonChart = function () {
  function CommonChart(config) {
    this.viewInstance = {};
    this.config = _Commom.Util.deepClone(config);
    this.checkChartConfig(this.config);
    this.chartInstance = new F2.Chart(this.config.chart);
  }

  CommonChart.prototype.render = function () {
    var config = this.config;
    var chart = this.chartInstance;
    this.setData(chart, config);
    this.setAxis(chart, config);
    this.setCoord(chart, config);
    this.setGuide(chart, config);
    this.setSeries(chart, config);
    this.setLegend(chart, config);
    this.setAnimate(chart, config);
    this.setTooltip(chart, config);
    this.setPieLabel(chart, config);
    this.oriConfig = config;
    chart.render();
    this.renderDefaultTooltip(chart, config);
  };

  CommonChart.prototype.repaint = function (config) {
    var newConfig = _Commom.Util.deepClone(config);

    this.checkChartConfig(newConfig);
    this.renderDiffConfig(newConfig);
    this.oriConfig = newConfig;
  };

  CommonChart.prototype.destroy = function (chart) {
    chart && chart.destory();
  };

  CommonChart.prototype.clear = function (chart) {
    chart && chart.clear();
  };

  CommonChart.prototype.setData = function (chart, config) {
    return setDataConfig.process(chart, config);
  };

  CommonChart.prototype.setCoord = function (chart, config) {
    return setCoordConfig.process(chart, config);
  };

  CommonChart.prototype.setGuide = function (chart, config) {
    return setGuideConfig.process(chart, config);
  };

  CommonChart.prototype.setAxis = function (chart, config) {
    return setAxisConfig.process(chart, config);
  };

  CommonChart.prototype.setSeries = function (chart, config) {
    return setSeriesConfig.process(chart, config);
  };

  CommonChart.prototype.setAnimate = function (chart, config) {
    return setAnimateConfig.process(chart, config);
  };

  CommonChart.prototype.setLegend = function (chart, config) {
    return setLegentConfig.process(chart, config);
  };

  CommonChart.prototype.setTooltip = function (chart, config) {
    return setTooltipConfig.process(chart, config);
  };

  CommonChart.prototype.setPieLabel = function (chart, config) {
    return setPieLabelConfig.process(chart, config);
  };

  CommonChart.prototype.repaintContent = function (chart, oriConfig, config) {
    var hasChartChange = false;

    if ((!_Commom.Util.isNil(oriConfig.coord) || !_Commom.Util.isNil(config.coord)) && !_Commom.Util.isEqual(oriConfig.coord, config.coord)) {
      this.setCoord(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.legend) || !_Commom.Util.isNil(config.legend)) && !_Commom.Util.isEqual(oriConfig.legend, config.legend)) {
      this.setLegend(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.axis) || !_Commom.Util.isNil(config.axis)) && !_Commom.Util.isEqual(oriConfig.axis, config.axis)) {
      this.setAxis(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.guide) || !_Commom.Util.isNil(config.guide)) && !_Commom.Util.isEqual(oriConfig.guide, config.guide)) {
      this.setGuide(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.series) || !_Commom.Util.isNil(config.series)) && !_Commom.Util.isEqual(oriConfig.series, config.series)) {
      this.setSeries(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.animate) || !_Commom.Util.isNil(config.animate)) && !_Commom.Util.isEqual(oriConfig.animate, config.animate)) {
      this.setAnimate(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.data) || !_Commom.Util.isNil(config.data)) && !_Commom.Util.isEqual(oriConfig.data, config.data)) {
      this.setData(chart, config);
      hasChartChange = true;
    }

    if ((!_Commom.Util.isNil(oriConfig.pieLabel) || !_Commom.Util.isNil(config.pieLabel)) && !_Commom.Util.isEqual(oriConfig.pieLabel, config.pieLabel)) {
      this.setPieLabel(chart, config);
      hasChartChange = true;
    }

    return hasChartChange;
  };

  CommonChart.prototype.checkChartConfig = function (config) {
    var chart = config.chart;
    var chartEl;

    if (chart.id) {
      chartEl = document.getElementById(chart.id);
    } else if (chart.el) {
      chartEl = chart.el;
    } else {
      throw new Error('please set correct chart option');
    }

    var relativeWidth = chartEl.parentElement.clientWidth;
    var relativeHeight = chartEl.parentElement.clientHeight;
    var rootFontSize = Number((window.document.documentElement.style.fontSize || '').split('px')[0]);
    var width = chart.width;
    var height = chart.height;
    var padding = chart.padding;

    if (!width) {
      width = relativeWidth || 0;
    } else {
      width = (0, _Commom.transform2px)(width, relativeWidth, rootFontSize);
    }

    if (!height) {
      height = Math.floor(3 / 4 * width);
    } else {
      height = (0, _Commom.transform2px)(height, relativeHeight, rootFontSize);
    }

    if (padding) {
      padding = (0, _Commom.transform2px)(padding, relativeWidth, rootFontSize);
      chart.padding = _Commom.Util.isArray(padding) ? padding.length ? padding : 'auto' : padding;
    }

    chart.width = width || 0;
    chart.height = height || 0;
    this.handleNotPx(config, relativeWidth, rootFontSize);
  };

  CommonChart.prototype.renderDiffConfig = function (config) {
    var oriConfig = this.oriConfig;
    var chart = this.chartInstance;
    var hasContentChange = this.repaintContent(chart, oriConfig, config);

    if (hasContentChange) {
      chart.repaint();
    }
  };

  CommonChart.prototype.handleNotPx = function (config, relativeValue, rootFontSize) {
    for (var key in config) {
      if (key !== 'el') {
        if ((0, _typeof2.default)(config[key]) === 'object') {
          if (['padding'].indexOf(key) !== -1 && _Commom.Util.isArray(config[key]) && config[key].length && typeof config[key][0] === 'string') {
            config[key] = config[key].map(function (value) {
              return (0, _Commom.transform2px)(value, relativeValue, rootFontSize);
            });
          } else {
            this.handleNotPx(config[key], relativeValue, rootFontSize);
          }
        } else if (['fontSize', 'radius', 'padding'].indexOf(key) !== -1) {
          config[key] = (0, _Commom.transform2px)(config[key], relativeValue, rootFontSize);
        }
      }
    }
  };

  CommonChart.prototype.renderDefaultTooltip = function (chart, config) {
    var cTooltip = _Commom.Util.deepClone(config.tooltip);

    if (cTooltip && cTooltip.show && cTooltip.defaultItem) {
      var point = chart.getPosition(cTooltip.defaultItem);
      chart.showTooltip(point);
    }
  };

  return CommonChart;
}();

var _default = CommonChart;
exports.default = _default;