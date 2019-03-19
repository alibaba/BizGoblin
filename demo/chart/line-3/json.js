import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'date',
    label: function (text, index, total) {
      var textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  }, {
    dataKey: 'value',
    label: {
      fontSize:12
    }
  }],
  legend: true,
  tooltip: {
    showCrosshairs: true,
    custom: true,
    onChange: function onChange(obj, chart) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
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
    geom: 'line',
    position: 'date*value',
    color: 'type'
  }],
  chart: {
    id: 'mountNode',
    width: '320',
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
