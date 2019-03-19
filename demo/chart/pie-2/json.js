import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data } from './data';

goblin({
  data: data,
  axis: false,
  coord: {
    type: 'polar',
    innerRadius: 0
  },
  legend: {
    position: 'right'
  },
  series: [{
    geom: 'interval',
    position: 'year*population',
    color: 'year',
    style: {
      lineWidth: 1,
      stroke: '#fff'
    }
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height: 240,
    pixelRatio: window.devicePixelRatio*2
  }
});