import { Chart, Axis, Geom, Guide } from '../../../packages/bizgoblin/lib';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [{
  "month": "Jan",
  "city": "London",
  "temperature": 3.9
}, {
  "month": "Feb",
  "city": "London",
  "temperature": 4.2
}, {
  "month": "Mar",
  "city": "London",
  "temperature": 5.7
}, {
  "month": "Apr",
  "city": "London",
  "temperature": 8.5
}, {
  "month": "May",
  "city": "London",
  "temperature": 11.9
}, {
  "month": "Jun",
  "city": "London",
  "temperature": 15.2
}, {
  "month": "Jul",
  "city": "London",
  "temperature": 17
}, {
  "month": "Aug",
  "city": "London",
  "temperature": 16.6
}, {
  "month": "Sep",
  "city": "London",
  "temperature": 14.2
}, {
  "month": "Oct",
  "city": "London",
  "temperature": 10.3
}, {
  "month": "Nov",
  "city": "London",
  "temperature": 6.6
}, {
  "month": "Dec",
  "city": "London",
  "temperature": 4.8
}];

function marker (x, y, r, ctx) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = ctx.fillStyle;
  ctx.moveTo(x - r - 3, y);
  ctx.lineTo(x + r + 3, y);
  ctx.stroke();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.fill();
}

class App extends React.Component<{data?: Array<any>}> {
  state = {
    height:240,
    width: 375,
    pixelRatio: window.devicePixelRatio*2,
    data,
  }

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({ data: data.map(item => ({ ...item, temperature: item.temperature + 1 }))})
    }, 3000);
  }

  render() {
    const { height, width, pixelRatio, data } = this.state;
    return (
      <div>
        <Chart height={height} width={width} data={data} pixelRatio={pixelRatio} >
          <Axis dataKey='month' />
          <Axis dataKey='temperature' />
          {
            data.map(item => (
              <Guide
                type='text'
                position={[item.month, item.temperature]}
                offsetY={-20}
                content={`${item.temperature}`}
              />
            ))
          }
          <Geom geom='line' position='month*temperature' color='city' />
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));