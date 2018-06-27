import { Util } from '../utils/Commom';

export const process = (chart: any, config: any) => {
  const cAxis = Util.deepClone(config.axis);
  const isArr = Util.isArray(cAxis);

  if (Util.isNil(cAxis) || cAxis === false || (isArr && cAxis.length === 0)) {
    return chart.axis(false);
  }

  if (cAxis === true) {
    return chart.axis(true);
  }

  const arrAxis = isArr ? cAxis : [cAxis];
  for (let res of arrAxis) {
    if (res.dataKey) {
      if (res.show === false) {
        chart.axis(res.dataKey, false);
      } else {
        const options = Util.omit(res, ['show', 'dataKey']);
        chart.axis(res.dataKey, options);
      }
    } else {
      chart.axis(res);
    }
  }
  return chart;
}
