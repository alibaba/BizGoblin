import goblin from '../../../packages/goblin/lib';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'month',
    line: null,
    label: function (text, index, total) {
      const textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  }, {
    dataKey: 'value',
    grid: function (text) {
      if (text === '0') {
        return {
          lineDash: null,
          lineWidth: 1
        };
      }
    }
  }],
  tooltip: {
    showCrosshairs: true
  },
  series: [{
    geom: 'area',
    position: 'month*value'
  }, {
    geom: 'line',
    position: 'month*value'
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});