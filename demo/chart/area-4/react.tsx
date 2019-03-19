import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function formatLabel (text, index, total) {
  const textCfg: any = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

function formatGrid (text) {
  if (text === '0') {
    return {
      lineDash: null,
      lineWidth: 1
    }
  }
}

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height:240,
    width: 375,
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
      <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
        <Axis dataKey='year' label={formatLabel} />
        <Legend show={false} />
        <Tooltip showCrosshairs />
        <Geom geom='area' position='year*value' color='type' shape='smooth' />
        <Geom geom='line' position='year*value' color='type' shape='smooth' />
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
