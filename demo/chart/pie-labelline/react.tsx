import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Chart, Geom, Coord } from '../../../packages/bizgoblin/es';
import PieLabel from '../../../packages/bizgoblin/es/plugin/PieLabel';

const data = [
  { name: '其他消费', y: 6371664, const: 'const' },
  { name: '生活用品', y: 7216301, const: 'const' },
  { name: '通讯物流', y: 1500621, const: 'const' },
  { name: '交通出行', y: 586622, const: 'const' },
  { name: '饮食', y: 900000, const: 'const' }
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
          <Coord type='polar' transposed radius={0.75} />
          <Geom geom='interval'
            position='const*y'
            color={['name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864']]}
            adjust='stack'
          />
          <PieLabel
            sidePadding={40}
            label1={(data, color) => ({ text: data.name, fill: color }) }
            label2={data => ({
              text: '￥' + String(Math.floor(data.y * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
              fill: '#808080',
              fontWeight: 'bold'
            })}
          />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
