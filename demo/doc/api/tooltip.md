
# Tooltip

提示信息(tooltip)组件，是指当鼠标悬停在图表上的某点时，以提示框的形式展示该点的数据，比如该点的值，数据单位等。

## 使用说明

### 父组件
- [`<Chart />`](./chart.md)

### 子组件
- none

**BizGoblin 当且仅当`<Tooltip />`存在时图表才展示tooltip**，如下所示：

```jsx
<Chart width={320} height={240} data={data} defs={defs}>
  <Tooltip /> // 开启图表tooltip功能
  <Geom type="bar" position="genre*sold" color="genre" />
</Chart>
```

## API

### 1、offsetX 	* Number *
x 方向的偏移量。

### 2、offsetY 	* Number *
y 方向的偏移量。

### 3、triggerOn 	* Array *
tooltip 出现的触发行为，可自定义，默认 `[ 'touchstart', 'touchmove' ]`

### 4、triggerOff 	* String *
tooltip 消失的触发行为，可自定义， 默认 `touchend`

### 5、showTitle 	* Boolean *
是否展示提示信息的标题，默认为 false。

### 6、showCrosshairs   * Boolean *
是否显示辅助线，点图、路径图、线图、面积图默认展示

### 7、crosshairsStyle 	* Object *
配置辅助线的样式

```jsx
<Chart width={320} height={240} data={data} defs={defs}>
  <Tooltip crosshairsStyle={{ stroke: 'rgba(0, 0, 0, 0.25)', lineWidth: 2 }}/>
  <Geom type="bar" position="genre*sold" color="genre" />
</Chart>
```

### 8、showTooltipMarker 	* Boolean *
是否显示 tooltipMarker

### 9、background 	* Object *
设置tooltip 内容框的背景样式

```js
  {
    radius: 2,
    fill: '#1890FF',
    padding: [ 6, 10 ]
  }
```

### 10、titleStyle 	* Object *
设置tooltip 标题的文本样式配置，showTitle 为 false 时不生效

```js
{
  fontSize: 24,
  fill: '#fff',
  textAlign: 'start',
  textBaseline: 'top'
}
```

### 11、nameStyle 	* Object *
设置tooltip name 项的文本样式配置

```js
{
  fontSize: 24,
  fill: '#fff',
  textAlign: 'start',
  textBaseline: 'middle'
}
```

### 12、svalueStyle 	* Object *
设置tooltip value 项的文本样式配置

```js
{
  fontSize: 24,
  fill: '#fff',
  textAlign: 'start',
  textBaseline: 'middle'
}
```

### 13、showItemMarker   * Boolean *
是否展示每条记录项前面的 marker

### 14、itemMarkerStyle 	* Object *
每条记录项前面的 marker 的样式配置

```js
{
  radius: 7,
  symbol: 'circle',
  lineWidth: 2,
  stroke: '#fff'
}
```

### 15、custom 	* Boolean *
是否自定义 tooltip 提示框

### 16、onShow * Function *
tooltip 显示时的回调函数
```js
function (obj, chart) {
  // obj: { x, y, title, items }
  // chart: 图表Chart示例对象
}
```

### 17、onHide * Function *
tooltip 隐藏时的回调函数
```js
function (obj, chart) {
  // obj: { x, y, title, items }
  // chart: 图表Chart示例对象
}
```

### 18、onChange * Function *
tooltip 内容发生改变时的回调函数
```js
function (obj, chart) {
  // obj: { x, y, title, items }
  // chart: 图表Chart示例对象
}
```
