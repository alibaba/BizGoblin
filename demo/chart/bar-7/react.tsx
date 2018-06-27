import { Chart, Axis, Geom, Coord, Tooltip, Legend } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height:240,
    width:320,
    pixelRatio: window.devicePixelRatio*2
  }

  static defaultProps = {
    data: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='time' label={{fontSize:12}} grid={null} line={false} />
          <Axis dataKey='tem' show={false} />
          <Tooltip />
          <Legend />
          <Coord type='polar' transposed endAngle={2*Math.PI} />
          <Geom geom='interval' position='time*tem' color='city' adjust='dodge' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));