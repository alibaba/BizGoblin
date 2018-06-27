import goblin from '../../../packages/goblin/src/index';
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
  tooltip: {
    showCrosshairs: true
  },
  legend: false,
  series: [{
    geom: 'area',
    position: 'year*value',
    color: 'type',
    shape: 'smooth'
  }, {
    geom: 'line',
    position: 'year*value',
    color: 'type',
    shape: 'smooth'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});