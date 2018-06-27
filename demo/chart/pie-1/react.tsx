import { Chart, Axis, Geom, Coord, Legend } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data';

const map = {
  '芳华': '40%',
  '妖猫传': '20%',
  '机器之血': '18%',
  '心理罪': '15%',
  '寻梦环游记': '5%',
  '其他': '2%'
};

const defs = [{
  dataKey: 'percent',
  formatter: val => val * 100 + '%'
}]

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height: 240,
    width: 320,
    pixelRatio: window.devicePixelRatio*2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Coord type='polar' transposed radius={0.85} />
          <Geom geom='interval'
            position='a*percent'
            color={['name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']]}
            adjust='stack'
            style={{
              lineWidth: 1,
              stroke: '#fff',
              lineJoin: 'round',
              lineCap: 'round'
            }} />
            <Legend position='right' itemFormatter={value => value + ' ' + map[value]}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
