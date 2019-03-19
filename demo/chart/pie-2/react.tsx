import { Chart, Geom, Coord, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data';

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
        <Chart height={height} width={width} data={data} pixelRatio={pixelRatio} >
          <Coord type='polar' innerRadius={0} />
          <Legend position='right' />
          <Geom geom='interval' position='year*population' color='year' style={{lineWidth: 1, stroke: '#FFF'}} />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
