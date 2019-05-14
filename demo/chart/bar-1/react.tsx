import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, defs } from './data'

function onShowTooltip (ev) {
  const items = ev.items;
  items[0].name = null;
  items[0].name = items[0].title;
  items[0].value = '¥ ' + items[0].value;
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
        <Chart height={height} width={width} data={data} defs={defs} animate={{type:'scaley'}} pixelRatio={pixelRatio} >
          <Axis dataKey='year' label={{ fontSize:8 }} />
          <Axis dataKey='sales' />
          <Tooltip showItemMarker={false} onShow={onShowTooltip} />
          <Geom geom='interval' position='year*sales' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
