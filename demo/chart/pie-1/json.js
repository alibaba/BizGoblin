import goblin from '../../../packages/goblin/src/index';
import { data } from './data';

const map = {
  '芳华': '40%',
  '妖猫传': '20%',
  '机器之血': '18%',
  '心理罪': '15%',
  '寻梦环游记': '5%',
  '其他': '2%'
};

goblin({
  data: data,
  defs: [{
    dataKey: 'percent',
    formatter: function formatter(val) {
      return val * 100 + '%';
    }
  }],
  legend: {
    position: 'right',
    itemFormatter: function itemFormatter(val) {
      return val + '  ' + map[val];
    }
  },
  axis: false,
  tooltip: false,
  coord: {
    type: 'polar',
    transposed: true,
    radius: 0.85
  },
  series: [{
    geom: 'interval',
    position: 'a*percent',
    color: ['name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']],
    adjust: 'stack',
    style: {
      lineWidth: 1,
      stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round'
    }
  }],
  animate: {
      appear: {
        duration: 1200,
        easing: 'bounceOut'
      }
  },
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});