import { IChart, IDefs, IAnimate } from 'goblin-base';

interface ISChartProps {
  data?: any;
  defs?: IDefs;
  animate?: IAnimate;
}

type IRChart = IChart & ISChartProps;

export default IRChart;
