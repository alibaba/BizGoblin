type formatterFunc = (val: number) => string | number

interface ICommonDefs {
  dataKey: string;
  type?: string;
  tickCount?: number;
  formatter?: string | formatterFunc;
  range?: number[];
}

interface ILinearCommonDefs {
  nice?: boolean;
  min?: number;
  max?: number;
  tickInterval?: number;
}

export type ILinearDefs = ICommonDefs & ILinearCommonDefs;

interface ISCatDefs {
  values?: string;
}

export type ICatDefs = ICommonDefs & ISCatDefs;

interface ITimeCommonDefs {
  mask?: string;
}

export type ITimeDefs = ICommonDefs & ILinearCommonDefs &  ITimeCommonDefs;

interface ISTimeCatDefs {
  nice?: boolean;
  mask?: string;
  values?: string;
}

export type ITimeCatDefs = ILinearCommonDefs &  ISTimeCatDefs;

export type IDefs = ILinearDefs | ICatDefs | ITimeCatDefs;

type IDefsConfig = IDefs | IDefs[];

export default IDefsConfig;
