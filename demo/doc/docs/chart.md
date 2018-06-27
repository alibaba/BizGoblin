
# 图表构成

## 组件构成
在 BizGoblin 中，图表是由各个组件组合而成的。

图表组件有：

| 名称 | 说明 |
| :- | :- | :- |
| [Chart](../api/chart.md) | 图表组件，所有的其他组件都必须由 `<Chart>` 包裹。 |
| [Coord](../api/coord.md) | 坐标系组件。用来描述 `<Chart/>` 组件的坐标系，比如笛卡尔坐标系、极坐标系等。 |
| [Axis](../api/axis.md) | 坐标轴组件。通常包含两个坐标轴，在笛卡尔坐标系下，分别为 x 轴和 y 轴，在极坐标轴下，则分别由角度和半径 2 个维度构成。每个坐标轴由坐标轴线（line）、刻度线（tickLine）、刻度文本（label）以及网格线（grid）组成。|
| [Geom](../api/geom.md) | 几何标记组件。即我们所说的点、线、面这些几何图形。|
| [Legend](../api/legend.md) | 图例组件 |
| [Tooltip](../api/tooltip.md) | 提示框组件。|
| [Guide](../api/guide.md) | 辅助标记组件。|

## 控件构成
下图所示为常用图表的各组件的空间构成。

![](https://cdn.yuque.com/lark/0/2018/png/49761/1530017962762-1ef72d25-5f0e-4ed3-b96a-7db98175fec1.png)
