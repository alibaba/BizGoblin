import goblin from '../../../packages/goblin/src/index';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'month',
    label: {
      fontSize:12
    }
  }, {
    dataKey: 'tem',
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
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  },
  series: [{
    geom: 'area',
    position: 'month*tem',
    color: 'city',
    shape: 'smooth',
    style: {
      opacity: 0.6
    },
    adjust: 'stack'
  }, {
    geom: 'line',
    position: 'month*tem',
    color: 'city',
    shape: 'smooth',
    adjust: 'stack'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});