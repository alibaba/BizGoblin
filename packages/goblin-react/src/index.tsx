import * as goblin from 'goblin-base';
import { Coord, Guide, Axis, Geom, Legend, Tooltip } from './components/SubComponent';

export { default as Chart } from './components/Chart';
export { Coord, Guide, Axis, Geom, Legend, Tooltip };

export const Global = goblin.Global;
export const Shape = goblin.Shape;

const BizGoblin = { track: goblin.track};
export default BizGoblin;
