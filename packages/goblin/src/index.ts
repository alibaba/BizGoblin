import CommonChart from './core/CommonChart';
import { Util } from './utils/Commom';
import IMainConfig from './typed/IMain';
import IAxisConfig, { IAxis } from './typed/IAxis';
import IChart from './typed/IChart';
import IDefs from './typed/IDefs';
import IAnimate from './typed/IAnimate';
import ISeriesConfig, { ISeries } from './typed/ISeries';
import IGuideConfig, { IGuide, ILineGuide, IRectGuide, IHtmlGuide } from './typed/IGuide';
import ICoord, { IPolarCoord, IRectCoord } from './typed/ICoord';
import ILegendConfig, { ILegend } from './typed/ILegend';
import ITooltipConfig, { ITooltip } from './typed/ITooltip';

// const F2 = require('@antv/f2');

export {
  IAxis,
  IAxisConfig,
  IChart,
  IDefs,
  ISeries,
  IAnimate,
  ISeriesConfig,
  IGuide,
  IGuideConfig,
  ILineGuide,
  IRectGuide,
  IHtmlGuide,
  ICoord,
  IPolarCoord,
  IRectCoord,
  ILegend,
  ILegendConfig,
  ITooltip,
  ITooltipConfig
};
export { Global, Shape, Chart } from '@antv/f2';
// export const Global = F2.Global;
// export const Shape = F2.Shape;
// export const Chart = F2.Chart;

export default function (config: IMainConfig) {
  if (Util.isNil(config) || Util.isEmpty(config)) {
    return;
  }
  const commonChart = new CommonChart(config);
  commonChart.render();

  return commonChart;
}
