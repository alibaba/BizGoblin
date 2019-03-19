import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data } from './data';
goblin({
  data: data,
  defs: [{
    dataKey: 'y',
    alias: 'Daily sugar intake',
    tickInterval: 50,
    nice: false,
    max: 165,
    min: 0
  }, {
    dataKey: 'x',
    alias: 'Daily fat intake',
    tickInterval: 5,
    nice: false,
    max: 96,
    min: 62
  }, {
    dataKey: 'z',
    alias: 'Obesity(adults) %'
  }],
  axis: [{
    dataKey: 'x',
    label: function label(text) {
      return {
        text: text + ' gr'
      };
    },
    grid: {
      stroke: '#d9d9d9',
      lineWidth: 1,
      lineDash: [2, 2]
    }
  }, {
    dataKey: 'y',
    label: function label(text) {
      if (text > 0) {
        return {
          text: text + ' gr'
        };
      }
    }
  }],
  tooltip: false,
  series: [{
    geom: 'point',
    position: 'x*y',
    size: ['z', [10, 40]],
    shape: 'circle',
    color: '#1890ff',
    style: {
      lineWidth: 1,
      stroke: '#1890ff',
      opacity: 0.3
    }
  }],
  guide: data.map(item => ({
    type: 'text',
    position: [item.x, item.y],
    content: item.name,
    style: {
      textAlign: 'center',
      fill: '#1890FF',
      textBaseline: 'middle'
    }
  })),
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});