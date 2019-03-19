import { Chart, Axis, Geom, Tooltip } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function onShowTooltip (ev) {
  const items = ev.items;
  items[0].name = '范围';
  const value = items[0].value;
  items[0].value = value[0] + ' 至 ' + value[1];
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
      <div>
        <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='y' />
          <Tooltip showItemMarker={false} onShow={onShowTooltip} />
          <Geom geom='interval' position='x*y' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
