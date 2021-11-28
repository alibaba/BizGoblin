/**
 * @file Common Chart
 * @description instantiation of chart, include base function
 */

import { Chart, ChartParams, DataRecord } from '@antv/f2';
import IMainConfig from '../typed/IMain';
import { transform2px, Util } from '../utils/Commom';

import * as setSeriesConfig from '../components/setSeriesConfig';
import * as setCoordConfig from '../components/setCoordConfig';
import * as setAxisConfig from '../components/setAxisConfig';
import * as setGuideConfig from '../components/setGuideConfig';
import * as setDataConfig from '../components/setDataConfig';
import * as setAnimateConfig from '../components/setAnimateConfig';
import * as setLegentConfig from '../components/setLegendConfig';
import * as setTooltipConfig from '../components/setTooltipConfig';
import * as setPieLabelConfig from '../components/setPieLabelConfig';
import IChart from '../typed/IChart';

class CommonChart {
  chartInstance: Chart<DataRecord>;
  viewInstance: any = {};
  config: IMainConfig;
  oriConfig: IMainConfig;

  constructor (config: IMainConfig) {
    this.config = Util.deepClone(config);
    this.oriConfig = this.config;
    const chartConfig = CommonChart.getChartConfig(this.config);
    this.chartInstance = new Chart(chartConfig);
  }

  public render () {
    const chart = this.chartInstance;
    // let config = this.config;
    // const chart = this.chartInstance;
    this.setData(chart, this.config);
    // this.setAxis(chart, config);
    // this.setCoord(chart, config);
    // this.setGuide(chart, config);
    // this.setSeries(chart, config);
    // this.setLegend(chart, config);
    // this.setAnimate(chart, config);
    // this.setTooltip(chart, config);
    // this.setPieLabel(chart, config);
    // this.oriConfig = config;
    // chart.render();
    // this.renderDefaultTooltip(chart, config);
  }

  public repaint (config: IMainConfig) {
    const newConfig = Util.deepClone(config);
    this.checkChartConfig(newConfig);
    this.renderDiffConfig(newConfig);
    this.oriConfig = newConfig;
  }

  public destroy (chart: any) {
    chart && chart.destory();
  }

  public clear (chart: any) {
    chart && chart.clear();
  }

  private setData (chart: any, config: IMainConfig) {
    return setDataConfig.process(chart, config);
  }

  private setCoord (chart: any, config: IMainConfig) {
    return setCoordConfig.process(chart, config);
  }

  private setGuide (chart: any, config: IMainConfig) {
    return setGuideConfig.process(chart, config);    
  }

  private setAxis (chart: any, config: IMainConfig) {
    return setAxisConfig.process(chart, config);
  }

  private setSeries (chart: any, config: IMainConfig) {
    return setSeriesConfig.process(chart, config);
  }

  private setAnimate (chart: any, config: IMainConfig) {
    return setAnimateConfig.process(chart, config);
  }

  private setLegend (chart: any, config: IMainConfig) {
    return setLegentConfig.process(chart, config);
  }

  private setTooltip (chart: any, config: IMainConfig) {
    return setTooltipConfig.process(chart, config)
  }

  private setPieLabel (chart: any, config: IMainConfig) {
    return setPieLabelConfig.process(chart, config);
  }

  // private repaintData (chart: any, oriConfig: IMainConfig, config: IMainConfig) {
  //   if ((!Util.isNil(oriConfig.data) || !Util.isNil(config.data)) &&
  //     !Util.isEqual(oriConfig.data, config.data)) {
  //     chart.changeData(config.data);
  //   }
  // }

  private repaintContent (chart: any, oriConfig: IMainConfig, config: IMainConfig) {
    let hasChartChange = false;

    if ((!Util.isNil(oriConfig.coord) || !Util.isNil(config.coord)) &&
      !Util.isEqual(oriConfig.coord, config.coord)) {
      this.setCoord(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.legend) || !Util.isNil(config.legend)) &&
      !Util.isEqual(oriConfig.legend, config.legend)) {
      this.setLegend(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.axis) || !Util.isNil(config.axis)) &&
      !Util.isEqual(oriConfig.axis, config.axis)) {
      this.setAxis(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.guide) || !Util.isNil(config.guide)) &&
      !Util.isEqual(oriConfig.guide, config.guide)) {
      this.setGuide(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.series) || !Util.isNil(config.series)) &&
      !Util.isEqual(oriConfig.series, config.series)) {
      this.setSeries(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.animate) || !Util.isNil(config.animate)) &&
      !Util.isEqual(oriConfig.animate, config.animate)) {
      this.setAnimate(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.data) || !Util.isNil(config.data)) &&
      !Util.isEqual(oriConfig.data, config.data)) {
      this.setData(chart, config);
      hasChartChange = true;
    }

    if ((!Util.isNil(oriConfig.pieLabel) || !Util.isNil(config.pieLabel)) &&
    !Util.isEqual(oriConfig.pieLabel, config.pieLabel)) {
      this.setPieLabel(chart, config);
      hasChartChange = true;
    }
    return hasChartChange;
  }

  private checkChartConfig (config: IMainConfig) {
    // const chart: IChart = config.chart;
    // let chartEl;

    // if(chart.id){
    //   chartEl = document.getElementById(chart.id);
    // }else if(chart.el){
    //   chartEl = chart.el;
    // }else{
    //   throw new Error('please set correct chart option');
    // }

    // const relativeWidth: number = chartEl?.parentElement?.clientWidth || 0;
    // const relativeHeight: number = chartEl?.parentElement?.clientHeight || 0;
    // const rootFontSize: number = Number((window.document.documentElement.style.fontSize || '').split('px')[0]);
    // if (Util.isNil(chart.width)) {
    //   chart.width = relativeWidth || 0;
    // }
    // if (Util.isNil(chart.height)) {
    //   // Setting default height when height is null
    //   chart.height = Math.floor( 3 / 4 * chart.height)
    // }
    //     let width: any = chart.width;
//     let height: any = chart.height;
//     let padding: any = chart.padding;
//     if (!width) {
//       width = relativeWidth || 0;
//     } else {
//       width = transform2px(width, relativeWidth, rootFontSize);
//     }
//     if (!height) {
//       // Default height when height is null
//       height =  Math.floor( 3 / 4 * width);
//     } else {
//       height = transform2px(height, relativeHeight, rootFontSize);
//     }
//     if (padding) {
//       padding = transform2px(padding, relativeWidth, rootFontSize);
//       chart.padding = Util.isArray(padding) ? (padding.length ? padding : 'auto') : padding;
//     }
//  
//     chart.width = width || 0;
//     chart.height = height || 0;
    // this.handleNotPx(config, relativeWidth, rootFontSize);
  }

  private static getChartConfig(config: IMainConfig): ChartParams {
    const chart: IChart = config.chart;

    const chartEl = chart?.id ? document.getElementById(chart.id) : chart.el;
    if (!chartEl) {
      throw new Error('please set correct chart option');
    }

    const relativeWidth: number = chartEl.parentElement?.clientWidth || 0;
    const relativeHeight: number = chartEl.parentElement?.clientHeight || 0;
    const rootFontSize: number = Number((window.document.documentElement.style.fontSize || '').split('px')[0]);
    if (Util.isNil(chart.width)) {
      chart.width = relativeWidth || 0;
    }
    const width = transform2px(chart.width, relativeWidth, rootFontSize) as keyof ChartParams["width"];
    if (Util.isNil(chart.height)) {
      // Setting default height when height is null
      chart.height = Math.floor( 3 / 4 * width);
    }
    const height = transform2px(chart.height, relativeHeight, rootFontSize) as keyof ChartParams["height"];
    const padding = transform2px(chart.padding, relativeWidth, rootFontSize) as keyof ChartParams["padding"];
    const appendPadding = transform2px(chart.appendPadding, relativeWidth, rootFontSize) as keyof ChartParams["appendPadding"];

    return { ...chart, height, width, padding, appendPadding };
  }

  private renderDiffConfig (config: IMainConfig) {
    const oriConfig = this.oriConfig;
    const chart = this.chartInstance;

    // this.repaintData(chart, oriConfig, config);

    const hasContentChange = this.repaintContent(chart, oriConfig, config);

    if (hasContentChange) {
      chart.repaint();
    }
  }

  // private handleNotPx (config: IMainConfig, relativeValue: number, rootFontSize: number) {
  //   for (const key in config) {
  //     if (key !== 'el') {
  //       if (typeof config[key] === 'object') {
  //         if (['padding'].indexOf(key) !== -1 && Util.isArray(config[key]) && config[key].length && typeof config[key][0] === 'string') {
  //           config[key] = config[key].map((value: any) => transform2px(value, relativeValue, rootFontSize));
  //         } else {
  //           this.handleNotPx(config[key], relativeValue, rootFontSize);
  //         }
  //       } else if (['fontSize', 'radius', 'padding'].indexOf(key) !== -1) {
  //         config[key] = transform2px(config[key], relativeValue, rootFontSize);
  //       }
  //     }
  //   }
  // }

  private renderDefaultTooltip(chart: any, config: any) {
    const cTooltip = Util.deepClone(config.tooltip);
    if (cTooltip && cTooltip.show && cTooltip.defaultItem) {
      const point = chart.getPosition(cTooltip.defaultItem);
      chart.showTooltip(point);
    }
  }
}

export default CommonChart