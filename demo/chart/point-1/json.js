import goblin from '../../../packages/goblin/src/index';
import { data } from './data';

goblin({
  data: data,
  defs: [{
    dataKey: 'height',
    tickCount: 5
  }, {
    dataKey: 'weight',
    tickCount: 5
  }],
  axis: [{
    dataKey: 'height',
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
  legend: true,
  series: [{
    geom: 'point',
    position: 'height*weight',
    color: 'gender',
    style: {
      fillOpacity: 0.65
    }
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
