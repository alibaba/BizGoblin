'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Global = exports.Tooltip = exports.Legend = exports.Geom = exports.Axis = exports.Guide = exports.Coord = exports.Chart = undefined;

var _Chart = require('./components/Chart');

Object.defineProperty(exports, 'Chart', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chart).default;
  }
});

var _goblinBase = require('@alife/goblin-base');

var goblin = _interopRequireWildcard(_goblinBase);

var _SubComponent = require('./components/SubComponent');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Coord = _SubComponent.Coord;
exports.Guide = _SubComponent.Guide;
exports.Axis = _SubComponent.Axis;
exports.Geom = _SubComponent.Geom;
exports.Legend = _SubComponent.Legend;
exports.Tooltip = _SubComponent.Tooltip;
var Global = exports.Global = goblin.Global;
var BizGoblin = { track: goblin.track };
exports.default = BizGoblin;
//# sourceMappingURL=index.js.map