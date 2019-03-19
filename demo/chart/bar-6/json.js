import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data, defs } from './data';

goblin({
  data: data,
  defs: defs,
  axis: {
    dataKey: 'y'
  },
  tooltip: {
    showItemMarker: false,
    onShow: function onShow(ev) {
      const items = ev.items;
      items[0].name = '范围';
      const value = items[0].value;
      items[0].value = value[0] + ' 至 ' + value[1];
    }
  },
  series: [{
    geom: 'interval',
    position: 'x*y'
  }],
  chart: {
    id: 'mountNode',
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});