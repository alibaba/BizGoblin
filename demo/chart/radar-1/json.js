import goblin from '../../../packages/goblin/lib';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'score',
    label: function label(text, index, total) {
      if (index === total - 1) {
        return null;
      }
      return {
        top: true
      };
    },
    grid: {
      lineDash: null,
      type: 'arc'
    }
  }, {
    dataKey: 'item',
    grid: {
      lineDash: null
    }
  }],
  legend: true,
  coord: {
    type: 'polar'
  },
  series: [{
    geom: 'line',
    position: 'item*score',
    color: 'user'
  }, {
    geom: 'point',
    position: 'item*score',
    color: 'user',
    style: {
      stroke: '#fff',
      lineWidth: 1
    }
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2   
  }
});