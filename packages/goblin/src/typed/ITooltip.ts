import * as ICommon from './ICommon';

interface Background {
  radius?: number;
  fill?: string;
  padding: number | string | (number | string)[]
}

interface ItemMarkerStyle {
  radius?: number;
  symbol?: string;
  lineWidth?: number;
  stroke?: string;
}

export interface ITooltip {
  show?: boolean;
  triggerOn?: string;
  triggerOff?: string;
  showTitle?: boolean;
  showCrosshairs?: boolean;
  crosshairsStyle?: ICommon.ILineStyle;
  showTooltipMarker?: boolean;
  background?: Background;
  titleStyle?: ICommon.ITextStyle;
  nameStyle?: ICommon.ITextStyle;
  valueStyle?: ICommon.ITextStyle;
  showItemMarker?: boolean;
  itemMarkerStyle?: ItemMarkerStyle;
  custom?: ICommon.eventFunc | boolean;
  onHide?: ICommon.eventFunc;
  onShow?: ICommon.eventFunc;
  onChange?: ICommon.eventFunc;
};

type ITooltipConfig = boolean | ITooltip;

export default ITooltipConfig;
