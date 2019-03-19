import { Chart, Axis, Geom, Guide } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const defs = [{
  dataKey: 'y',
  alias: 'Daily sugar intake',
  tickInterval: 50,
  nice: false,
  max: 165,
  min: 0
}, {
  dataKey: 'x',
  alias: 'Daily fat intake',
  tickInterval: 5,
  nice: false,
  max: 96,
  min: 62
}, {
  dataKey: 'z',
  alias: 'Obesity(adults) %'
}]

class App extends React.Component {
  state = {
    height: 240,
    width: 375,
    pixelRatio: window.devicePixelRatio*2
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { height, width, pixelRatio } = this.state;
    return (
      <Chart height={height} width={width} data={data} defs={defs} pixelRatio={pixelRatio} >
        <Axis dataKey='x' label={text => ({ text: text + ' gr'})}  grid={{ stroke: '#d9d9d9', lineWidth: 1, lineDash: [2, 2]}} />
        <Axis dataKey='y' label={text => {if (text > 0) { return { text: text + ' gr'}; }}} />
        <Geom geom='point' position='x*y' color='#1890ff' size={['z', [10, 40]]} shape='circle' style={{ lineWidth: 1, stroke: '#1890ff', opacity: 0.3 }} />
        { data.map((item, index) => <Guide key={index}
          type='text'
          position={[item.x, item.y]}
          content={item.name}
          style={{
            textAlign: 'center',
            fill: '#1890FF',
            textBaseline: 'middle'
          }} />)}
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
