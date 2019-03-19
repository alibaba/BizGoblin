import { Chart, Axis, Geom, Coord, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function formatLabel (text, index, total) {
  if (index === total - 1) {
    return null;
  }
  return {
    top: true
  };
}

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height:240,
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
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='score' label={formatLabel} grid={{ lineDash: null, type: 'arc' }} />
          <Axis dataKey='item' grid={{lineDash: null}} />
          <Coord type='polar' />
          <Legend />
          <Geom geom='line' position='item*score' color='user' />
          <Geom geom='point' position='item*score' color='user' style={{stroke: '#FFF', lineWidth: 1}} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
