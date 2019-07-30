import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Chart, Geom, Coord, Guide, Legend } from '../../../packages/bizgoblin/es';
import PieLabel from '../../../packages/bizgoblin/es/plugin/PieLabel';

const data = [
  { amount: 20, ratio: 0.1, memo: '学习', const: 'const'},
  { amount: 100, ratio: 0.5, memo: '睡觉', const: 'const'},
  { amount: 10, ratio: 0.05, memo: '吃饭', const: 'const'},
  { amount: 30, ratio: 0.15, memo: '讲礼貌', const: 'const'},
  { amount: 10, ratio: 0.05, memo: '其他', const: 'const' },
  { amount: 20, ratio: 0.1, memo: '运动', const: 'const' },
  { amount: 10, ratio: 0.05, memo: '暂无备注', const: 'const'}
];

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height: 240,
    width: 375,
    pixelRatio: window.devicePixelRatio*2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} pixelRatio={pixelRatio} >
          <Coord type='polar' transposed radius={0.75} innerRadius={0.4} />
          <Geom geom='interval'
            position='const*ratio'
            color={['memo', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273']]}
            adjust='stack'
          />
          <Guide
            type="html"
            position={['50%', '50%']}
            html='<div style="text-align: center;width:150px;height: 50px;"><p style="font-size: 12px;color: #999;margin: 0" id="title"></p><p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p></div>'
          />
          <PieLabel
            sidePadding={75}
            label1={data => ({ text: data.memo, fill: '#808080' }) }
            label2={data => ({ text: '$' + data.amount.toFixed(2), fill: '000000', fontWeight: 500, fontSize: 10 })}
          />
          <Legend position="bottom" align="center" />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
