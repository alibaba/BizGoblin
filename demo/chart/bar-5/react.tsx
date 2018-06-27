import { Chart, Axis, Geom, Coord, Global, Tooltip } from '../../../packages/goblin-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function formatLabel (text, index, total) {
  const textCfg:any = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

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
          <Axis dataKey='country' grid={null} />
          <Axis dataKey='population' label={formatLabel} line={null} grid={Global._defaultAxis.grid} />
          <Coord transposed />
          <Tooltip />
          <Geom geom='interval' position='country*population' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
