"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _goblinBase = require("goblin-base");

var _pieLabel = _interopRequireDefault(require("goblin-base/es/plugin/pieLabel"));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Props = function () {
  function Props() {}

  return Props;
}();

;

var PieLabel = function (_super) {
  __extends(PieLabel, _super);

  function PieLabel(props) {
    var _this = _super.call(this, props) || this;

    _this.displayName = 'PieLabel';
    return _this;
  }

  PieLabel.prototype.componentDidMount = function () {
    (0, _pieLabel.default)(_goblinBase.Chart);
    this.context.centralizedUpdates(this);
  };

  PieLabel.prototype.componentDidUpdate = function () {
    this.context.centralizedUpdates(this);
  };

  PieLabel.prototype.render = function () {
    return null;
  };

  PieLabel.contextTypes = {
    centralizedUpdates: PropTypes.func
  };
  return PieLabel;
}(React.Component);

var _default = PieLabel;
exports.default = _default;