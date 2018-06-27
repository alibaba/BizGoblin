# Chart

图表组件，内部生产了一个F2 chart 实例，同时控制着其他子组件的加载和更新。

## 子组件
- [`<Coord/>`](coord.md) 坐标系组件
- [`<Axis/>`](axis.md) 坐标轴组件
- [`<Geom/>`](geom.md) 几何标记组件
- [`<Legend/>`](legend.md) 图例组件
- [`<Tooltip/>`](tooltip.md) 提示框组件
- [`<Guide/>`](guide.md) 辅助标记组件

```jsx
<Chart width={320} height={240} data={data} defs={defs} >
  <Axis dataKey='time' label={{fontSize: 12}} />
  <Axis dataKey='tem' label={{fontSize: 12}}/>
  <Tooltip showCrosshairs />
  <Geom geom='area' position='time*tem' />
  <Geom geom='line' position='time*tem' />
</Chart>
```

## API
### 1、width		* Number | string(必填) *
指定图表的宽度，传入参数为Number类型，单位为 'px'。支持自适应单位百分比（'100%'）和rem（'10rem'）。

### 2、height		* Number | string *
指定图表的高度，传入参数为Number类型，单位为 'px'。支持自适应单位百分比（'100%'）和rem（'10rem'）。

> 传入参数为string类型，为百分比字符串时，取父元素的相对值；为'rem'结束的字符串时，取HTML根元素的相对值

### 3、data   * Array *
设置图表的数据源，`data` 是一个包含 JSON 对象的数组。

### 4、defs   * Object | Array *
各个字段的度量配置，`defs` 是一个 JSON 对象或者包含 JSON 对象的数据。JSON 对象的 `dataKey` 代表对应列字段，必填。

图表数据的列定义用于对数据字段进行定义，如数据的类型，显示别名，数值的格式化等，不同的数字类型的配置项不同，支持的数据类型有：

- `linear`: 数字类型
- `cat`: 分类类型
- `timeCat`: 时间类型

```jsx
const defs = [
  {
    dataKey: 'value',  // 数据列字段，必填
    type: 'linear' | 'cat' | 'timeCat', // 指定数据类型, 默认linear
    formatter: () => {},   // 格式化文本内容
    range: array, // 输出数据的范围，默认[0, 1]，格式为 [min, max]，min 和 max 均为 0 至 1 范围的数据
    alias: string, // 数据字段的显示别名
    tickCount: number, // 设置坐标轴上刻度点的个数
    ticks: array // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示
  }
]
```

> 不同的type具有各自对应的可配置属性，详见[Scale度量](https://antv.alipay.com/zh-cn/f2/3.x/api/scale.html)

### 5、padding		* Object | Number | Array *

图表内边距。
有如下配置格式。
```jsx
//有时候坐标轴、图例等绘图区域外的组件显示不全时，可以通过调整图表各个方向的 padding 来调整最终效果
<Chart padding={[ 20, 30, 20, 30]} />
<Chart padding={20} />
<Chart padding={{ top: 20, right: 30, bottom: 20, left: 30 }} />
<Chart padding="auto" />
<Chart padding={[20, 'auto', 30, 'auto']} />
<Chart padding={['20%', '30%']} />
```
- padding 为数字以及数组类型时使用方法同 CSS 盒模型。
- padding 中存在 'auto'，时会自动计算边框，目前仅考虑 axis 和 legend 占用的边框。

- 另外也支持设置百分比，如 padding: [ '20%', '30%' ]，该百分比相对于整个图表的宽高。
- padding 为数字以及数组类型时使用方法同 CSS 盒模型。
- padding 中存在 'auto'，时会自动计算边框，目前仅考虑 axis 和 legend 占用的边框。

### 6、pixelRatio   * Number *

屏幕画布的像素比，默认值1， 一般情况下这个值可以设置成 `window.devicePixelRatio` 。
