import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data } from './data';

goblin({
  data: data,
  tooltip: {
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
  legend: true,
  axis: [{
    dataKey: '月份'
  }],
  series: [{
    geom: 'interval',
    position: '月份*月均降雨量',
    color: 'name',
    adjust: 'stack'
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
