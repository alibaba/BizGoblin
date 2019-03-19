"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Coord", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Coord;
  }
});
Object.defineProperty(exports, "Guide", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Guide;
  }
});
Object.defineProperty(exports, "Axis", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Axis;
  }
});
Object.defineProperty(exports, "Geom", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Geom;
  }
});
Object.defineProperty(exports, "Legend", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Legend;
  }
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function get() {
    return _SubComponent.Tooltip;
  }
});
Object.defineProperty(exports, "Chart", {
  enumerable: true,
  get: function get() {
    return _Chart.default;
  }
});
exports.Shape = exports.Global = void 0;

var goblin = _interopRequireWildcard(require("goblin"));

var _SubComponent = require("./components/SubComponent");

var _Chart = _interopRequireDefault(require("./components/Chart"));

var Global = goblin.Global;
exports.Global = Global;
var Shape = goblin.Shape;
exports.Shape = Shape;