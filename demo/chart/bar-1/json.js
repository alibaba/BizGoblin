import goblin from '../../../packages/goblin/src/index';
import { data } from './data';

goblin({
  data: data,
  defs: [
    {
      dataKey: 'year'
    }, {
      dataKey: 'sales',
      tickCount: 5
    }
  ],
  tooltip: {
    showItemMarker: false,
    onShow: function onShow(ev) {
      var items = ev.items;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = '¥ ' + items[0].value;
    }
  },
  axis: [{
    dataKey: 'year',
    label: {
      fontSize:8
    }
  }, {
    dataKey: 'sales'
  }],
  series: [{
    geom: 'interval',
    position: 'year*sales'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
