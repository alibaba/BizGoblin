import goblin, { Global } from '../../../packages/goblin/src/index';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'country',
    grid: null
  }, {
    dataKey: 'population',
    line: null,
    grid: Global._defaultAxis.grid,
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
  tooltip: true,
  coord: {
    transposed: true
  },
  series: [{
    geom: 'interval',
    position: 'country*population'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});