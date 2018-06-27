const F2 = require('@antv/f2');

export const registerShape = (geoName: string, shapeName: string, shapeFun: any) => {
  F2.Shape.registerShape(geoName, shapeName, shapeFun);
};
