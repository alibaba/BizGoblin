import * as ICommon from './ICommon';

interface Marker {
  symbol?: string,
  radius?: number
}

export interface ILegend {
  dataKey?: string;
  show?: boolean;
  position?: string;
  align?: string;
  verticalAlign?: string;
  itemWidth?: number;
  showTitle?: boolean;
  titleStyle?: ICommon.ITextStyle;
  offsetX?: number;
  offsetY?: number;
  titleGap?: number;
  itemGap?: number;
  itemMarginBottom?: number;
  wordSpace?: number;
  unCheckColor?: string;
  itemFormatter?: ICommon.formatterFunc;
  marker?: string | Marker | ICommon.shapeFunc;
  nameStyle?: ICommon.ITextStyle;
  valueStyle?: ICommon.ITextStyle;
  triggerOn?: string | ICommon.eventFunc;
  clickable?: boolean;
  onClick?: ICommon.eventFunc;
  custom?: boolean;
  items?: any;
}

type ILegendConfig = boolean | ILegend | ILegend[];

export default ILegendConfig;

