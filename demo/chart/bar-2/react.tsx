import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

class App extends React.Component {
  state = {
    height:240,
    width:320,
    pixelRatio: window.devicePixelRatio*2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} defs={defs} animate={{type:'scaley'}} pixelRatio={pixelRatio} >
          <Axis dataKey='月份'/>
          <Legend />
          <Tooltip />
          <Geom geom='interval' position='月份*月均降雨量' color='name' adjust={{ type: 'dodge', marginRatio: 0.05 }}/>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
