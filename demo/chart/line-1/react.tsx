import { Chart, Axis, Geom, Tooltip } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function label (text, index, total) {
  const textCfg: any = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  } else if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

function onShowTooltip (ev) {
  const items: any = ev.items;
  items[0].name = items[0].title;
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
          <Axis dataKey='date' label={label} />
          <Axis dataKey='value' label={{fontSize:12}} />
          <Geom geom='line' position='date*value' />
          <Tooltip showItemMarker={false} showCrosshairs onShow={onShowTooltip} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
