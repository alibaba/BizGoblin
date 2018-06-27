import CommonChart from './core/CommonChart';
import * as CustomizeUtils from './utils/CustomizeUtils';
import { Util } from './utils/Commom';
import IAxisConfig, { IAxis } from './typed/IAxis';
import IChart from './typed/IChart';
import IDefs from './typed/IDefs';
import IAnimate from './typed/IAnimate';
import ISeriesConfig, { ISeries } from './typed/ISeries';
import IGuideConfig, { IGuide, ILineGuide, IRectGuide, IHtmlGuide } from './typed/IGuide';
import ICoord, { IPolarCoord, IRectCoord } from './typed/ICoord';
import ILegendConfig, { ILegend } from './typed/ILegend';
import ITooltipConfig, { ITooltip } from './typed/ITooltip';

// const F2 = require('../f2_lib/f2/core');

const F2 = require('@antv/f2');

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
export const registerShape = CustomizeUtils.registerShape;
export const Global = F2.Global;
export const track = F2.track;

export default function (config: any) {
  if (Util.isNil(config) || Util.isEmpty(config)) {
    return;
  }
  const commonChart = new CommonChart(config);
  commonChart.render();

  return commonChart;
}
