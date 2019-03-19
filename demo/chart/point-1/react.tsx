import { Chart, Axis, Geom, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const defs = [{
  dataKey: 'height',
  tickCount: 5
}, {
  dataKey: 'weight',
  tickCount: 5
}]

function formatLabel (test, index, total) {
  const textCfg: any = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

class App extends React.Component {
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
          <Axis dataKey='height' label={formatLabel} />
          <Legend />
          <Geom geom='point' position='height*weight' color='gender' style={{ fillOpacity: 0.65 }} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
