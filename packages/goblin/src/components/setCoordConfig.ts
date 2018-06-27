import { Util } from '../utils/Commom';

export const process = (chart: any, config: any) => {
  const cCoord = Util.deepClone(config.coord);

  if (!cCoord) {
    return chart.coord('rect');
  }

  const type = cCoord.type || 'rect';

  const options = Util.omit(cCoord, ['type']);  

  return chart.coord(type, options);
};
