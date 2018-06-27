import * as ICommon from './ICommon';

type func = () => void;

export interface ILineGuide {
  type?: 'line';
  top?: boolean;
  start?: object | (number | string)[] | func;
  end?: object | (number | string)[] | func;
  lineStyle: ICommon.ILineStyle;
}

export interface IRectGuide {
  type?: 'rect',
  start?: (number | string)[];
  end?: (number | string)[];
  lineStyle: ICommon.ILineStyle;
}

export interface IHtmlGuide {
  type?: 'html';
  position?: object | (number | string)[] | func;
  html?: string;
  point: (number | string)[];
}

export interface ITextGuide {
  type?: 'text';
  position?: object | (number | string)[] | func;
  content?: string;
  style?: ICommon.ITextStyle;
  offsetX?: number;
  offsetY?: number; 
}

export interface ITagGuide {
  type?: 'tag'
  top?: boolean,
  position?: object | (number | string)[] | func;
  content?: string,
  direct?: string,
  side?: number,
  offsetX?: number,
  offsetY?: number,
  background?: object, 
  textStyle?: object,
  withPoint?: boolean,
  pointStyle?: object
}

export interface IArcGuide {
  type?: 'arc'
  top?: boolean,
  start?: object | (number | string)[] | func;
  end?: object | (number | string)[] | func;
  style?: object
}

export type IGuide = ILineGuide | IRectGuide | IHtmlGuide | ITextGuide;

type IGuideConfig = IGuide | IGuide[];

export default IGuideConfig;
