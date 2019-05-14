import { Chart, Axis, Geom, Tooltip, Legend } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { data, defs } from './data'

const defs = [{
  dataKey: 'stat_hour',
  tickCount: 13,
}, {
  dataKey: 'trd_amt',
  formatter: item => `${item / 10000}w`,
  tickCount: 6,
  min: 0,
}, {
  dataKey: 'trd_cnt',
  formatter: item => `${item / 10000}w`,
  tickCount: 6,
  min: 0,
}];

const data = new Array(24).fill(0).map((item, index) => ({
  stat_hour: index < 10 ? `0${index}` : `${index}`,
  trd_amt: 1340000*Math.random(),
  trd_cnt: 20000*Math.random(),
}))

const crosshairsStyle = { stroke: 'rgba(0, 0, 0, .25)', lineWidth: 2, };

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
          {/* <Axis dataKey='月份'/>
          <Legend />
          <Tooltip />
          <Geom geom='interval' position='月份*月均降雨量' color='name' adjust={{ type: 'dodge', marginRatio: 0.05 }}/> */}
            <Axis dataKey='stat_hour' label={{ fontSize: 16 }} />
            <Axis dataKey='trd_amt' label={{ fontSize: 16 }} />
            {/* <Axis dataKey='trd_cnt' label={{ fontSize: 16 }} /> */}
            <Legend
              custom
              // itemFormatter={(value) => {
              //   console.log('aaa', value)
              //   // if (value == 'rain: ') {
              //   //     return '成交订单'
              //   // }
              //   // if (value == 'tem: ') {
              //   //     return '成交额'
              //   // }
              //   return '';
              // }}
              position="bottom"
              items={[
                { name: 'a1', marker: { symbol: 'square', stroke: 'red', radius: 8 }},
                { name: 'a2', marker: { symbol: 'square', stroke: 'green', radius: 8 }},
                { name: 'a3', marker: { symbol: 'square', stroke: 'blue', radius: 8 }}
              ]}
            />
            <Tooltip
              show
              custom
              showCrosshairs
              crosshairsStyle={crosshairsStyle}
              // defaultItem={this.defaultItem}
              // onChange={value => this.onChangeTooltip(value)}
            />
            <Geom geom='interval' position='stat_hour*trd_amt' color="#9EC3F5" />
            <Geom geom='line' position='stat_hour*trd_cnt' color="#5790F2" />

        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
