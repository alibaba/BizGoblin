import * as goblin from '@alife/goblin-base';
import { Coord, Guide, Axis, Geom, Legend, Tooltip } from './components/SubComponent';

export { default as Chart } from './components/Chart';
export { Coord, Guide, Axis, Geom, Legend, Tooltip };

export const Global = goblin.Global;

const BizGoblin = { track: goblin.track};
export default BizGoblin;
