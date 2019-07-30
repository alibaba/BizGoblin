import { Util } from '../utils/Commom';

function setEvent (options: any, chart: any) {
  const newOptions = Util.omit(options, ['onClick']);
  if (options.onClick) {
    newOptions.onClick = (obj: any) => {
      options.onClick(obj, chart);
    }
  }
  return newOptions;
}

export const process = (chart: any, config: any) => {
  const cPieLabel = Util.deepClone(config.pieLabel);
  if (Util.isNil(cPieLabel)) {
    return;
  }
  return chart.pieLabel(setEvent(cPieLabel, chart));
}
