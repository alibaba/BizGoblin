import goblin, { Chart } from '../../../packages/goblin/lib';
import registerPieLable from '../../../packages/goblin/lib/plugin/pieLabel';

const data = [
  { amount: 20, ratio: 0.1, memo: '学习', const: 'const'},
  { amount: 100, ratio: 0.5, memo: '睡觉', const: 'const'},
  { amount: 10, ratio: 0.05, memo: '吃饭', const: 'const'},
  { amount: 30, ratio: 0.15, memo: '讲礼貌', const: 'const'},
  { amount: 10, ratio: 0.05, memo: '其他', const: 'const' },
  { amount: 20, ratio: 0.1, memo: '运动', const: 'const' },
  { amount: 10, ratio: 0.05, memo: '暂无备注', const: 'const'}
];

registerPieLable(Chart);
goblin({
  data,
  coord: {
    type: 'polar',
    transposed: true,
    innerRadius: 0.4,
    radius: 0.75
  },
  pieLabel: {
    sidePadding: 75,
    label1: function label1(data) {
      return {
        text: data.memo,
        fill: '#808080'
      };
    },
    label2: function label2(data) {
      return {
        fill: '#000000',
        text: '$' + data.amount.toFixed(2),
        fontWeight: 500,
        fontSize: 10
      };
    }
  },
  legend: {
    position: 'bottom',
    align: 'center'
  },
  series: [{
    geom: 'interval',
    position: 'const*ratio',
    color: ['memo', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273']],
    adjust: 'stack',
  }],
  chart: {
    id: 'mountNode',
    height:240,
    pixelRatio: window.devicePixelRatio*2
  }
});
