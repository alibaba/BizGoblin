import * as ICommon from './ICommon';

interface IActiveStyle extends ICommon.ICommonDrawStyle {
  offset?: number;
  appendRadius?: number;
}

type formatterFunc = (data: any, color: string) => any;

interface IPieLabel {
  anchorOffset?: number;
  inflectionOffset?: number;
  sidePadding?: number;
  lineHeight?: number;
  adjustOffset?: number;
  skipOverlapLabels?: boolean;
  lineStyle?: ICommon.ILineStyle;
  anchorStyle?: ICommon.ICircleStyle;
  label1?: formatterFunc;
  label2?: formatterFunc;
  onClick?: ICommon.eventFunc;
  triggerOn?: string;
  activeShape?: boolean;
  activeStyle?: IActiveStyle;
  label1OffsetY?: number;
  label2OffsetY?: number;
}

export default IPieLabel;
