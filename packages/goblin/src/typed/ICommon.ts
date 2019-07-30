export interface ICommonDrawStyle {
  fill?: string;
  fillStyle?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeStyle?: string;
  strokeOpacity?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  globalOpacity?: number;
  opacity?: number;
  globalCompositionOperation?: string;
}

export interface ITextStyle {
  fontSize?: number | string;
  fontFamily?: string;
  fontWeight?: string;
  textAlign?: string;
  textBaseline?: string;
  fill?: string;
  lineHeight?: number;
  shadowBlur?: number;
  shadowColor?: string;
}

export interface ILineStyle {
  stroke?: string;
  lineWidth?: number;
  lineHeight?: number;
  lineDash?: number[];
  length?: number;
}

export interface ICircleStyle {
  x?: number;
  y?: number;
  r?: number;
  fill?: string;
}

export type formatterFunc = (val: number | string) => string | number;

export type func = () => void;

export type eventFunc = (ev: any, chart?: any) => void;

export type shapeFunc = (x: number, y: number, r: number, ctx: any) => void;
