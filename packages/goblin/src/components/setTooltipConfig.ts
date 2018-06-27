import { Util } from '../utils/Commom';

function setEvent (options: any, chart: any) {
  const newOptions = Util.omit(options, ['onChange', 'onHide', 'onShow']);
  if (options.onChange) {
    newOptions.onChange = (obj: any) => {
      options.onChange(obj, chart);
    };
  }
  if (options.onHide) {
    newOptions.onHide = (obj: any) => {
      options.onHide(obj, chart);
    };
  }
  if (options.onShow) {
    newOptions.onShow = (obj: any) => {
      options.onShow(obj, chart);
    };
  }
  return newOptions;
}

export const process = (chart: any, config: any) => {
  const cTooltip = Util.deepClone(config.tooltip);
  if (Util.isNil(cTooltip) || cTooltip === false || cTooltip.show === false) {
    return chart.tooltip(false);
  }

  const options = Util.omit(cTooltip, ['show']);
  return chart.tooltip(setEvent(options, chart));
};
