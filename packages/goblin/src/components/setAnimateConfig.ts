import { Util } from '../utils/Commom';

export const process = (chart: any, config: any) => {
  const animate = Util.deepClone(config.animate);

  if (Util.isBoolean(animate)) {
    return chart.animate(animate);
  }

  if (!Util.isEmpty(animate)) {
    return chart.animate(animate);
  }

  return chart;
};