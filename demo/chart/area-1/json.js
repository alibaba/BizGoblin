import goblin1 from '../../../packages/goblin/umd/goblin.min.js';
import { data, defs } from './data';

console.log(viser)
goblin1({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'time',
    label: function label(text, index, total) {
      var textCfg = {};
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
  series: [{
    geom: 'area',
    position: 'time*tem'
  }, {
    geom: 'line',
    position: 'time*tem'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});