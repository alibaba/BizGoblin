
# Guide
用于绘制图表的辅助元素。

## 使用说明
### parent components
- [`<Chart />`](./chart.md)

### child components
- none

支持六种类型的辅助元素
- Line 辅助线，例如表示平均值或者预期分布的直线。[参见Line](#line)
- Text 辅助文本，指定位置添加文本说明。[参见Text](#text)
- Tag 绘制辅助 Tag。[参见Tag](#tag)
- Rect 辅助框，框选一段图区，设置背景、边框等。[参见Rect](#rect)
- Html 辅助 html，指定位置添加自定义 html，显示自定义信息。[参见Html](#html)
- Arc 辅助圆弧，只适用于极坐标。[参见Arc](#arc)

- 不同辅助标记组件所支持的配置属性也不一样，主要差异为坐标位置属性差异:
  - Text, Html, Tag 中使用 position
  - Line, Rect, Arc 中使用 start、end 字段

# API

### 1、type   * 'line' | 'text' | 'rect' | 'tag' | 'html' | 'arc' *
指定辅助元素的类型

## Line

```jsx
<Guide
  type='line'
  top={boolean} // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start= {function} | {array} // 辅助线起始位置，值为原始数据值，支持 callback
  end= {function} | {array} // 辅助线结束位置，值为原始数据值，支持 callback
  style = {{
    stroke: '#999', // 线的颜色
    lineDash: [ 0, 2, 2 ], // 虚线的设置
    lineWidth: 3 // 线的宽度
  }} // 图形样式配置
/>
```

### 1、top 	* Boolean *
指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层。

### 2、start 	* Function | Array *
指定辅助线的起始位置，该值的类型如下：

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  - x，y 都是原始数据 [ '2010-01-01', 200 ];
  - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
  - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### 4、end 	* Function | Array *
指定辅助线的结束位置，使用同 start。

### 5、style 	* Object *
辅助线样式配置。

## Text

```jsx
<Guide
  type ='text'
  top = {boolean} // 指定 guide 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  position = {function} | {array} // 文本的起始位置，值为原始数据值，支持 callback
  content = {string} // 显示的文本内容
  style = {{
    fill: '#666', // 文本颜色
    fontSize: '12', // 文本大小
    fontWeight: 'bold' // 文本粗细
    rotate: 30 // 旋转角度
  }} // 文本的图形样式属性
  offsetX = {number} // x 方向的偏移量
  offsetY = {number} // y 方向偏移量
/>
```

### 1、top 	* Boolean *
指定 giude 是否绘制在 canvas 最上层。默认值:true, 即绘制在最上层。

### 2、position 	* Function | Array *
指定辅助文本的显示位置，该值的类型如下：

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

 - x，y 都是原始数据 [ '2010-01-01', 200 ];
 - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
 - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### 3、content 	* String *
辅助文本的显示内容。

### 4、style 	* Object *
用于设置辅助文本的显示样式。

### 5、offsetX 	* Number *
x 方向的偏移量。

### 6、offsetY 	* Number *
y 方向的偏移量。

## Tag

```jsx
<Guide
  type = 'tag'
  top = {boolean} // 指定 guide 是否绘制在 canvas 最上层，默认为 true, 即绘制在最上层
  position ={function} | {array} // Tag 的起始位置，值为原始数据值，支持 callback
  content = {string} // tag 的文本内容，支持文本换行，只需要在文本中写入 '\n'，如 '最大值\n200'
  direct = {string} // 箭头朝向，默认自动计算，也可以手动指定方向，'tl'、'tc'、'tr'、'cl'、'cr'、'bl'、'bc'、'br'
  side = {number} // 三角标的边长，默认为 4
  offsetX = {number} // X 轴偏移，默认为 0
  offsetY = {number} // Y 轴偏移，默认为 0
  background = {{
    padding: [ 4, 6 ], // tag 内边距，使用同 css 盒模型的 padding
    radius: 2, // tag 圆角
    fill: '#1890FF', // tag 背景色
  }} // tag 背景样式
  textStyle = {{
    fontSize: 12,
    fill: '#fff'
  }} // tag 文本样式
  withPoint = {boolean} // 是否带点，默认带
  pointStyle = {{
    fill: '#1890FF', // 填充颜色
    r: 3, // 半径
    lineWidth: 1, // 线的边框
    stroke: '#fff' // 线的描边
  }} // 点的样式
/>
```

### 1、top 	* Boolean *
指定 giude 是否绘制在 canvas 最上层。默认为 true, 即绘制在最上层。

### 2、position 	* Function | Array *
指定辅助Tag的显示位置，该值的类型如下：

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：

 - x，y 都是原始数据 [ '2010-01-01', 200 ];
 - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
 - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%'] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### 3、content 	* String *
辅助Tag的显示内容。

### 4、direct 	* string *
用于设置辅助Tag的箭头朝向，默认自动计算，也可以手动指定方向，'tl'、'tc'、'tr'、'cl'、'cr'、'bl'、'bc'、'br'

### 5、size * number *
设置辅助Tag箭头的三角标的边长，默认为 4

### 6、offsetX 	* Number *
x 方向的偏移量。

### 7、offsetY 	* Number *
y 方向的偏移量。

### 8、background 	* Object *
辅助Tag的背景样式

### 9、textStyle 	* Object *
辅助Tag的文本样式

### 10、withPoint 	* Boolean *
辅助Tag是否带点

### 11、pointStyle 	* Object *
辅助Tag的点样式

### Rect

```jsx
<Guide
  type='rect'
  top={boolean} // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start= {function} | {array} // 辅助框起始位置，值为原始数据值，支持 callback 
  end= {function} | {array}// 辅助框结束位置，值为原始数据值，支持 callback
  style= {{
    lineWidth: 0, // 辅助框的边框宽度
    fill: '#f80', // 辅助框填充的颜色
    fillOpacity: 0.1, // 辅助框的背景透明度
    stroke: '#ccc' // 辅助框的边框颜色设置
  }} // 辅助框的图形样式属性
/>
```
### 1、top 	* Boolean *
指定 giude 是否绘制在 canvas 最上层。默认值:false, 即绘制在最下层。

### 2、start 	* Function | Array *
指定辅助背景框的起始位置，即背景框的左上角，该值的类型如下：

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  - x，y 都是原始数据 [ '2010-01-01', 200 ];
  - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
  - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### 3、end 	* Function | Array *
指定辅助背景框的结束位置，即背景框的右下角，该属性用法同 start。

### 4、style 	* Object *
辅助框图形样式属性。

### Html

```jsx
<Guide
  type='html'
  position= {function} | {array} // html 的中心位置， 值为原始数据值，支持 callback
  alignX='left' | 'middle' | 'right'
  alignY='top' | 'middle' | 'bottom'
  offsetX={number}
  offsetY={number}
  html={string} // html 代码
/>
```

### 1、position 	* Function |Array *
设置 html 的显示位置，该值的类型如下：

- object: 使用图表 x,y 对应的原始数据例如： { time: '2010-01-01', value: 200 }

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  - x，y 都是原始数据 [ '2010-01-01', 200 ];
  - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
  - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景

### 3、alignX 	* 'left' | 'center' | 'right' *
html 的水平对齐方式，可取值为： left、center、right，默认值为 center。

### 4、alignY 	* 'top' | 'middle' | 'bottom' *
html 的垂直对齐方式，可取值为： top、middle、bottom，默认值为 middle。

### 5、offsetX 	* Number *
x 方向的偏移量。

### 6、offsetY 	* Number *
y 方向的偏移量。

### 7、html 	* String | Function *
需要显示的 html 内容。

### Arc

```jsx
<Guide
  type='arc'
  top={object} // 指定 giude 是否绘制在 canvas 最上层，默认为 false, 即绘制在最下层
  start= {function} | {array} // 辅助框起始位置，值为原始数据值，支持 callback
  end= {function} | {array}// 辅助框结束位置，值为原始数据值，支持 callback
  style={object} // 图形样式属性
/>
```

### 1、top 	*boolean*
指定 giude 是否绘制在 canvas 最上层。默认值： false, 即绘制在最下层。

### 2、start 	* Function | Array *
指定辅助圆弧的起始位置，该值的类型如下：

- array: 数组来配置位置 [ x, y ]，根据数组中的值的存在以下几种形式：
  - x，y 都是原始数据 [ '2010-01-01', 200 ];
  - x，y 可以使用原始数据的替代字符串 'min', 'max', 'median' , 例如：[ 'median', 200 ]
  - x, y 都是用百分比的形式，在绘图区域定位，字符串中存在 '%', 例如 [ '50%', '50%' ] 使得辅助元素居中
- function: 回调函数，可以动态的确定辅助元素的位置，应用于数据动态更新，辅助元素的位置根据数据变化的场景


### 3、end 	* Function | Array *
指定辅助圆弧的结束位置，该属性用法同 start。

### 4、style 	* Object *
设置圆弧的显示样式。
