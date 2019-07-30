import goblin, { Chart } from '../../../packages/goblin/lib';
import registerPieLable from '../../../packages/goblin/lib/plugin/pieLabel';

const data = [
  { const: 'const', type: '交通出行', money: 51.39 },
  { const: 'const', type: '饮食', money: 356.68 },
  { const: 'const', type: '生活日用', money: 20.00 },
  { const: 'const', type: '住房缴费', money: 116.53 },
];

registerPieLable(Chart);
goblin({
  data,
  coord: {
    type: 'polar',
    transposed: true,
    radius: 0.9,
    innerRadius: 0.5
  },
  guide: {
    type: 'html',
    position: ['50%', '50%'],
    html: '<div style="text-align: center;width:150px;height: 50px;"><p style="font-size: 12px;color: #999;margin: 0" id="title"></p><p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p></div>'
  },
  pieLabel: {
    sidePadding: 30,
    activeShape: true,
    label1: function label1(data) {
      return {
        text: '￥' + data.money,
        fill: '#343434',
        fontWeight: 'bold'
      };
    },
    label2: function label2(data) {
      return {
        text: data.type,
        fill: '#999'
      };
    },
    onClick: function onClick(ev) {
      var data = ev.data;
      if (data) {
        document.getElementById('title').innerHTML = data.type;
        document.getElementById('money').innerHTML = data.money;
      }
    }
  },
  series: [{
    geom: 'interval',
    position: 'const*money',
    color: ['type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']],
    adjust: 'stack',
  }],
  chart: {
    id: 'mountNode',
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
