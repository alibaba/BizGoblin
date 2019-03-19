import { IChart, IDefs, IAnimate } from 'goblin';

interface ISChartProps {
  data?: any;
  defs?: IDefs;
  animate?: IAnimate;
}

type IRChart = IChart & ISChartProps;

export default IRChart;
