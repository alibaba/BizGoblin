export interface ISeries {
  position?: string | string[];
  geom?: string;
  adjust?: string | object;
  color?: any;
  shape?: any;
  size?: any;
  opacity?: any;
  style?: any;
}

type ISeriesConfig = ISeries | ISeries[];

export default ISeriesConfig;