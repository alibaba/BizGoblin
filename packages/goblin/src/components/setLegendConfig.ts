import { Util } from '../utils/Commom';

function setEvent (options: any, chart: any) {
  if (options.onClick) {
    const newOptions = Util.omit(options, ['onClick']);
    newOptions.onClick = function (event: any) {
      options.onClick(event, chart);
    }
    return newOptions;
  }
  return options;
}

export const process = (chart: any, config: any) => {
  const cLegend = Util.deepClone(config.legend);
  const isArr = Util.isArray(cLegend);

  if (Util.isNil(cLegend) || cLegend === false || (isArr && cLegend.length === 0) || cLegend.show === false) {
    return chart.legend(false);
  }

  if (cLegend.show) {
    return chart.legend(true)
  }

  const arrLegend = isArr ? cLegend : [cLegend];

  for (let res of arrLegend) {
    if (res.dataKey) {
      if (res.show === false) {
        chart.legend(res.dataKey, false);
      } else {
        const options = Util.omit(res, ['show', 'dataKey']);
        chart.legend(res.dataKey, setEvent(options, chart));
      }
    } else {
      chart.legend(setEvent(res, chart));
    }
  }
  return chart;
}
