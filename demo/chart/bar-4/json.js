import goblin from '../../../packages/goblin/lib';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  legend: true,
  tooltip: {
    custom: true,
    onChange: function onChange(obj, chart) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function(item) {
        map[item.name] = JSON.parse(JSON.stringify(item));
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
      const legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  },
  axis: [{
    dataKey: 'year'
  }],
  series: [{
    geom: 'interval',
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
