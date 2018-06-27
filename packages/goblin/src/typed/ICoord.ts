export interface IRectCoord {
  type?: 'rect';
  transposed?: boolean;
}

export interface IPolarCoord {
  type?: 'polar';
  transposed?: boolean;  
  radius?: number;
  innerRadius?: number;
  startAngle?: number;
  endAngle?: number;
}

type ICoord = IRectCoord | IPolarCoord;

export default ICoord;
