import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { defs, data } from './data'

function onChangeTooltip (obj, chart) {
  var legend = chart.get('legendController').legends.top[0];
  var tooltipItems = obj.items;
  var legendItems = legend.items;
  var map = {};
  legendItems.map(function(item) {
    map[item.name] = JSON.parse(JSON.stringify(item));
  });
  tooltipItems.map(function(item) {
    var name = item.name;
    var value = item.value;
    if (map[name]) {
      map[name].value = value;
    }
  });
  legend.setItems(Object.keys(map).map(key => map[key]));
}

function onHideTooltip (obj, chart) {
  const legend = chart.get('legendController').legends.top[0];
  legend.setItems(chart.getLegendItems().city);
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
          <Axis dataKey='month' label={{fontSize:12}} />
          <Axis dataKey='tem' label={{fontSize:12}} />
          <Legend />
          <Tooltip showCrosshairs custom onChange={onChangeTooltip} onHide={onHideTooltip} />
          <Geom geom='area' position='month*tem' shape='smooth' color='city' style={{opacity: 0.6}} adjust='stack' />
          <Geom geom='line' position='month*tem' shape='smooth' color='city' adjust='stack' />
        </Chart>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('mount'));
