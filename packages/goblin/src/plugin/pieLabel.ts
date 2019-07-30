/**
 * @file PieLabel
 * @description register plugin for pieLabel
 */
import IPieLabel from '../typed/IPieLabel';
const PieLabel = require('@antv/f2/lib/plugin/pie-label');

export { IPieLabel };

export default function(Chart: any) {
  Chart.plugins.register(PieLabel);
};
