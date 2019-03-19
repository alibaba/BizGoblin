import goblin from '../../../packages/goblin/umd/goblin.min.js';
import { data } from './data';

goblin({
  data: data,
  defs: [
    {
      dataKey: 'value',
      tickCount: 5,
      min: 0
    },
    {
      dataKey: 'date',
      type: 'timeCat',
      range: [0, 1],
      tickCount: 3
    }
  ],
  axis: [{
    dataKey: 'date',
    label: function label(text, index, total) {
      var textCfg = {};
      if (index === 0) {
        textCfg.textAlign = 'left';
      } else if (index === total - 1) {
        textCfg.textAlign = 'right';
      }
      return textCfg;
    }
  }, {
    dataKey: 'value',
    label: {
      fontSize:12
    }
  }],
  tooltip: {
    showItemMarker: false,
    showCrosshairs: true,
    onShow: function onShow(ev) {
      var items = ev.items;
      items[0].name = items[0].title;
    }
  },
  series: [{
    geom: 'line',
    position: 'date*value'
  }],
  chart: {
    id: '',
    el: document.getElementById('mountNode'),
    width: 375,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
