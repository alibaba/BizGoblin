import { Chart, Axis, Geom, Legend } from '../../../packages/goblin-react/src/index';
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
    width:320,
    pixelRatio: window.devicePixelRatio*2,
    dataSource: data
  }

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        dataSource: data.slice(22)
      })
    }, 3000);
  }

  render() {
    const { height, width, pixelRatio, dataSource } = this.state;
    console.log('render', dataSource)
    return (
      <div>
        <Chart height={height} width={width} data={dataSource} defs={defs} pixelRatio={pixelRatio} >
          <Axis dataKey='height' label={formatLabel} />
          <Legend />
          <Geom geom='point' position='height*weight' color='gender' style={{ fillOpacity: 0.65 }} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
