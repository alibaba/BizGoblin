"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerShape = void 0;

var F2 = require('@antv/f2');

var registerShape = function registerShape(geoName, shapeName, shapeFun) {
  F2.Shape.registerShape(geoName, shapeName, shapeFun);
};

exports.registerShape = registerShape;