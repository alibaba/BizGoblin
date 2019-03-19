import goblin from '../../../packages/goblin/lib';
import { data, defs } from './data';

goblin({
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
    // width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
