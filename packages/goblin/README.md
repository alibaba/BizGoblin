# goblin-base [![npm](https://img.shields.io/npm/v/goblin-base.svg)](https://www.npmjs.com/package/goblin-base) [![Dependency Status](https://david-dm.org/goblin-basejs/goblin-base.svg?path=packages/goblin-base)](https://david-dm.org/goblin-basejs/goblin-base.svg?path=packages/goblin-base)

> A toolkit fit for data vis engineer.

## Install

```sh
$ tnpm install --save goblin-base
```

## Usage

```jsx
import goblin from 'goblin-base';

const data = [
  { time: '周一', tem: 6.9, rain: 10 },
  { time: '周二', tem: 9.5, rain: 13 },
  { time: '周三', tem: 14.5, rain: 14 },
  { time: '周四', tem: 18.2, rain: 10 },
  { time: '周五', tem: 21.5, rain: 12 },
  { time: '周六', tem: 25.2, rain: 16 },
  { time: '周日', tem: 26.5, rain: 13 }
];

const defs = [{
  dataKey: 'tem',
  tickCount: 5,
  max: 30,
  min: 0
}, {
  dataKey: 'rain',
  tickCount: 5,
  max: 30,
  min: 0
}];

goblin({
  data: data,
  defs: defs,
  axis: [{
    dataKey: 'time',
    label: {
      fontSize: 14
    },
    grid: null,
  }, {
    dataKey: 'tem',
    label: {
      fontSize: 14
    }
  }, {
    dataKey: 'rain',
    label: {
      fontSize: 14
    }
  }],
  series: [{
    geom: 'interval',
    position: 'time*tem'
  }, {
    geom: 'line',
    position: 'time*rain',
    color: '#5ed470',
    size: 2,
    shape: 'smooth'
  }, {
    geom: 'point',
    position: 'time*rain',
    color: '#5ed470'
  }],
  chart: {
    id: 'mountNode',
    width:320,
    height:240,
    pixelRatio: 2
  }
});
```
