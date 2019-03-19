import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'year',
    label: function (text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  }],
  legend: true,
  tooltip: {
    showCrosshairs: true,
    custom: true,
    onChange: function (obj, chart) {
      const legend = chart.get('legendController').legends.top[0];
      const tooltipItems = obj.items;
      const legendItems = legend.items;
      const map = {};
      legendItems.map(function(item) {
        map[item.name] = item;
      });
      tooltipItems.map(function(item) {
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(Object.values(map));
    },
    onHide: function onHide(obj, chart) {
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  },
  series: [{
    geom: 'area',
    position: 'year*percent',
    color: 'country',
    adjust: 'stack'
  }, {
    geom: 'line',
    position: 'year*percent',
    color: 'country',
    adjust: 'stack'
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});