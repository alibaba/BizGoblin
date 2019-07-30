import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Chart, Geom, Coord, Guide } from '../../../packages/bizgoblin/es';
import PieLabel from '../../../packages/bizgoblin/es/plugin/PieLabel';

const data = [
  { const: 'const', type: '交通出行', money: 51.39 },
  { const: 'const', type: '饮食', money: 356.68 },
  { const: 'const', type: '生活日用', money: 20.00 },
  { const: 'const', type: '住房缴费', money: 116.53 },
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
          <Coord type='polar' transposed radius={0.9} innerRadius={0.5} />
          <Geom geom='interval'
            position='const*money'
            color={['type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']]}
            adjust='stack'
          />
          <Guide
            type="html"
            position={['50%', '50%']}
            html='<div style="text-align: center;width:150px;height: 50px;"><p style="font-size: 12px;color: #999;margin: 0" id="title"></p><p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p></div>'
          />
          <PieLabel
            sidePadding={30}
            label1={data => ({ text: '￥' + data.money, fill: '#343434', fontWeight: 'bold' }) }
            label2={data => ({ text: data.type, fill: '#999' })}
            onClick={e => {
              const data = e.data;
              if (data) {
                document.getElementById('title').innerHTML = data.type;
                document.getElementById('money').innerHTML = data.money;
              }
            }}
          />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
