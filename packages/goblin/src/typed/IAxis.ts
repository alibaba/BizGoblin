import * as ICommon from './ICommon';

interface IAxisTick {
  ticks?: number[];
  tickCount?: number;
  tickInterval?: number;
}

export interface IAxis {
  dataKey?: string;
  show?: boolean;
  labelOffset?: number;
  tick?: IAxisTick;
  grid?: any;
  label?: any;
  line?: boolean | ICommon.ILineStyle;
  tickLine?: ICommon.ILineStyle;
}

type IAxisConfig = boolean | IAxis | IAxis[];

export default IAxisConfig;