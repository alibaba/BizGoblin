import goblin from '../../../packages/goblin/src/index';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'time',
    label: {
      fontSize:12
    },
    grid: null,
    line: false
  }, {
    dataKey: 'tem',
    show: false
  }],
  coord: {
    type: 'polar',
    transposed: true,
    endAngle: 2*Math.PI
  },
  tooltip: true,
  legend: true,
  series: [{
    geom: 'interval',
    position: 'time*tem',
    color: 'city',
    adjust: 'dodge'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2    
  }
});