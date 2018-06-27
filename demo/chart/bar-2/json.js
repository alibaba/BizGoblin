import goblin from '../../../packages/goblin/src/index';
import { data } from './data';

goblin({
  data: data,
  tooltip: true,
  axis: [{
    dataKey: '月份'
  }],
  legend: true,
  series: [{
    geom: 'interval',
    position: '月份*月均降雨量',
    color: 'name',
    adjust: {
      type: 'dodge',
      marginRatio: 0.05
    }
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
