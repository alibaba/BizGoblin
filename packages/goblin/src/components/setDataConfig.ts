import { Util } from '../utils/Commom';

export const process = (chart: any, config: any) => {
  const cDefs = Util.deepClone(config.defs);
  let isArr = Util.isArray(cDefs);

  let options: any = {};
  if (!Util.isEmpty(cDefs)) {
    const arrDefs = isArr ? cDefs : [cDefs];

    for (const res of arrDefs) {
      if (res.dataKey) {
        const currOption = Util.omit(res, 'dataKey');
        options[res.dataKey] = currOption;
      }
    }
  }

  if (Util.isEmpty(config.data)) {
    config.data = [];
  }
  if (!Util.isEmpty(config.series)) {  
    const cData = Util.deepClone(config.data);
    const arrData = Util.isArray(cData) ? cData : [cData];
    chart.source(arrData, options);
  }
};
