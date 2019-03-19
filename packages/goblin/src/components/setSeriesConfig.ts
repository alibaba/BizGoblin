import { Util } from '../utils/Commom';
import { ISeries } from '../typed/ISeries';

function setSeriesGeom (chart: any, currSeries: ISeries) {
  const geom = currSeries.geom;
  let geomObj;
  switch (geom) {
    case 'path':
      geomObj = chart.path();
      break;
    case 'line':
      geomObj = chart.line();
      break;
    case 'area':
      geomObj = chart.area();
      break;
    case 'bar':
    case 'interval':
      geomObj = chart.interval();
      break;
    case 'point':
      geomObj = chart.point();
      break;
    case 'schema':
      geomObj = chart.schema();
      break;
    case 'polygon':
      geomObj = chart.polygon();
      break;
    default:
      geomObj = chart.line();
  }
  return geomObj;
}

function setSeriesPosition (chart: any, currSeries: ISeries) {
  const position = currSeries.position;
  if (!Util.isNil(position)) {
    return chart.position(position);
  }

  return chart;
}

function setSeriesAdjust (chart: any, currSeries: ISeries) {
  const adjust = currSeries.adjust;
  if (!Util.isNil(adjust)) {
    return chart.adjust(adjust);
  }
  
  return chart;
}

function setSeriesShape (chart: any, currSeries: ISeries) {
  const shape = currSeries.shape;

  if (Util.isString(shape)) {
    return chart.shape(shape);
  }

  if (Util.isArray(shape) && shape.length >= 1) {
    if (shape[1]) {
      return chart.shape(shape[0], shape[1]);
    }

    return chart.shape(shape[0]);
  }

  return chart;
}

function setSeriesColor (chart: any, currSeries: ISeries) {
  const color = currSeries.color;

  if (Util.isString(color)) {
    return chart.color(color);
  }

  if (Util.isArray(color) && color.length >= 1) {
    if (color[1]) {
      return chart.color(color[0], color[1]);
    }
    return chart.color(color[0]);
  }

  return chart;
}

function setSeriesSize (chart: any, currSeries: ISeries) {
  const size = currSeries.size;

  if (Util.isNumber(size) || Util.isString(size)) {
    return chart.size(size);
  }

  if (Util.isArray(size) && size.length >= 1) {
    if (size[1]) {
      return chart.size(size[0], size[1]);
    }
    return chart.size(size[0])
  }
  return chart;
}

function setSeriesStyle (chart: any, currSeries: ISeries) {
  const style = currSeries.style;

  if (Util.isArray(style) && style.length >= 1) {
    if (style[1]) {
      return chart.style(style[0], style[1]);
    }

    return chart.style(style[0]);
  }

  if (Util.isPlainObject(style)) {
    return chart.style(style);
  }

  return chart;
}

export const process = (chart: any, config: any) => {
  const cSeries = Util.deepClone(config.series);
  const isArr = Util.isArray(cSeries);

  if (Util.isNil(cSeries) || Util.isEmpty(cSeries)) {
    return chart;
  }

  let arrSeries = isArr ? cSeries : [cSeries];
  // arrSeries = setQuickType.process(arrSeries, config.coord);
  
  // arrSeries = Util.sortBy(arrSeries);

  let chartInstance;
  arrSeries.forEach((currSeries: any) => {
    chartInstance = setSeriesGeom(chart, currSeries);
    chartInstance = setSeriesPosition(chartInstance, currSeries);
    chartInstance = setSeriesColor(chartInstance, currSeries);
    chartInstance = setSeriesSize(chartInstance, currSeries);
    chartInstance = setSeriesShape(chartInstance, currSeries);
    chartInstance = setSeriesAdjust(chartInstance, currSeries);
    chartInstance = setSeriesStyle(chartInstance, currSeries);
  })

  return chartInstance;
}