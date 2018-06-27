import IChart from './IChart';
import ISeries from './ISeries';
import ICoord from './ICoord';
import IGuide from './IGuide';
import IAxis from './IAxis';
import IDefs from './IDefs';
import IAnimate from './IAnimate';
import ILegend from './ILegend';
import ITooltip from './ITooltip';

interface ISMain {
  data?: any;
  defs?: IDefs;
  chart?: IChart;
  series?: ISeries;
  coord?: ICoord;
  axis?: IAxis;
  guide: IGuide;
  animate?: IAnimate;
  legend?: ILegend;
  tooltip?: ITooltip;
}

type IMainConfig = ISMain;

export default IMainConfig;
