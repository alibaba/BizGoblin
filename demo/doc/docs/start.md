
# BizGoblin

BizGoblin 是一个基于F2封装的React图表库，具有F2、React的全部优点，可以让用户以组件的形式组合出无数种移动端图表。

## 特性
- 基于 F2、React
- 体积小巧
- 高扩展能力
- 绘制迅速

## 安装

需要使用版本 15 及以上的 React，来使用 BizGoblin

### 通过 npm 引入

我们提供了 BizGoblin npm 包，通过下面的命令即可完成安装

```bash
npm install bizgoblin --save
```

成功安装完成之后，即可使用 import 或 require 进行引用。

## 快速开始

在 BizGoblin 引入页面后，我们就已经做好了创建第一个图表的准备了。

下面是以一个基础的面积图为例开始我们的第一个图表创建。

1. 创建容器

	在页面的 *body* 部分创建一个节点，指定一个 id

	```html
	<div id="mountNode"></div>
	```

2. 使用组件生成图表

  - 引入图表需要的组件
  - 用组件组装成需要的图表
  - 把图表渲染到 mountNode 节点上

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Chart, Axis, Geom, Tooltip } from 'bizgoblin';

// 数据源
const data = [
  { time: 'Jan.', tem: 1000},
  { time: 'Feb.', tem: 2200},
  { time: 'Mar.', tem: 2000},
  { time: 'Apr.', tem: 2600},
  { time: 'May.', tem: 2000},
  { time: 'Jun.', tem: 2600},
  { time: 'Jul.', tem: 2800},
  { time: 'Aug.', tem: 2000}
];

// 度量配置
const defs = [
  { dataKey: 'time', range: [0, 1] },
  { dataKey: 'tem', tickCount: 5, min: 0 }
];

// 渲染图表
ReactDOM.render((
  <Chart height={240} width={320} data={data} defs={defs} pixelRatio={window.devicePixelRatio*2} >
    <Axis dataKey='time' label={formatLabel} />
    <Axis dataKey='tem' />
    <Tooltip showCrosshairs />
    <Geom geom='area' position='time*tem' />
    <Geom geom='line' position='time*tem' />
  </Chart>
), document.getElementById('id'));

```

一张柱状图就绘制成功了：
![](https://cdn.yuque.com/lark/0/2018/png/49761/1530019800146-e346143b-9fbb-415f-9eb8-be2718200281.png) 

## 体验改进计划说明
为了更好服务用户，F2 会将打点监控，将 URL 等信息发送回 AntV 服务器，BizGoblin 没有关闭这个请求：```https://kcart.alipay.com/web/bi.do```

除了 URL 与 F2 版本信息外，不会收集任何其他信息，一切为了能对 F2 的运行情况有更多了解，以更好服务于用户。如有担心，可以通过下面的代码关闭：

```js
// 关闭 F2 的体验改进计划打点请求
BizGoblin.track(false);
```
