"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform2px = exports.Util = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var Util = {
  deepClone: function deepClone(obj) {
    if (!obj) {
      return obj;
    }

    var cloneObj;
    [Number, String, Boolean].forEach(function (type) {
      if (obj instanceof type) {
        cloneObj = type(obj);
      }
    });

    if (typeof cloneObj === 'undefined') {
      if (Object.prototype.toString.call(obj) === '[object Array]') {
        cloneObj = [];
        obj.forEach(function (child, index) {
          cloneObj[index] = Util.deepClone(child);
        });
      } else if ((0, _typeof2.default)(obj) === 'object') {
        if (obj.nodeType && typeof obj.cloneNode === 'function') {
          cloneObj = obj;
        } else if (!obj.prototype) {
          if (obj instanceof Date) {
            cloneObj = new Date(String(obj));
          } else {
            cloneObj = {};

            for (var i in obj) {
              cloneObj[i] = Util.deepClone(obj[i]);
            }
          }
        }
      } else {
        cloneObj = obj;
      }
    } else {
      cloneObj = obj;
    }

    return cloneObj;
  },
  isArray: 'isArray' in Array ? Array.isArray : function (obj) {
    return toString.call(obj) === '[object Array]';
  },
  isEmpty: function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if ((0, _typeof2.default)(obj) !== 'object') return true;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  },
  isNil: function isNil(obj) {
    return obj === undefined || obj === null;
  },
  isEqual: function isEqual(obj, newObj) {
    return eq(obj, newObj, []);
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isBoolean: function isBoolean(obj) {
    return typeof obj === 'boolean';
  },
  isNumber: function isNumber(obj) {
    return typeof obj === 'number';
  },
  isObject: toString.call(null) === '[object Object]' ? function (obj) {
    return obj !== null && obj !== undefined && toString.call(obj) === '[object Object]' && obj.ownerDocument === undefined;
  } : function (obj) {
    return toString.call(obj) === '[object Object]';
  },
  isPlainObject: function isPlainObject(obj) {
    if (!Util.isObject(obj)) return false;

    if (Object.getPrototypeOf(obj) === null) {
      return true;
    }

    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  },
  isObjectLike: function isObjectLike(obj) {
    return (0, _typeof2.default)(obj) === 'object' && obj !== null;
  },
  isFunction: function isFunction(obj) {
    return typeof obj === 'function';
  },
  omit: function omit(obj, keys) {
    var newObject = {};
    var objectKeys = Object.keys(obj);
    var omitKeys = Array.isArray(keys) ? keys : [keys];
    objectKeys.forEach(function (key) {
      if (omitKeys.indexOf(key) === -1) {
        newObject[key] = Util.deepClone(obj[key]);
      }
    });
    return newObject;
  }
};
exports.Util = Util;

function eq(a, b, stack) {
  if (a === b) {
    return a !== 0 || 1 / a == 1 / b;
  }

  if (a == null || b == null) {
    return a === b;
  }

  if (a._chain) {
    a = a._wrapped;
  }

  if (b._chain) {
    b = b._wrapped;
  }

  if (a.isEqual && Util.isFunction(a.isEqual)) {
    return a.isEqual(b);
  }

  if (b.isEqual && Util.isFunction(b.isEqual)) {
    return b.isEqual(a);
  }

  var className = toString.call(a);

  if (className != toString.call(b)) {
    return false;
  }

  switch (className) {
    case '[object String]':
      return a == String(b);

    case '[object Number]':
      return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;

    case '[object Date]':
    case '[object Boolean]':
      return +a == +b;

    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
  }

  if ((0, _typeof2.default)(a) != 'object' || (0, _typeof2.default)(b) != 'object') {
    return false;
  }

  var length = stack.length;

  while (length--) {
    if (stack[length] == a) {
      return true;
    }
  }

  stack.push(a);
  var size = 0,
      result = true;

  if (className == '[object Array]') {
    size = a.length;
    result = size == b.length;

    if (result) {
      while (size--) {
        if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
      }
    }
  } else {
    if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;

    for (var key in a) {
      if (Object.hasOwnProperty.call(a, key)) {
        size++;
        if (!(result = Object.hasOwnProperty.call(b, key) && eq(a[key], b[key], stack))) break;
      }
    }

    if (result) {
      for (key in b) {
        if (Object.hasOwnProperty.call(b, key) && !size--) break;
      }

      result = !size;
    }
  }

  stack.pop();
  return result;
}

var transform2px = function transform2px(value, relativeValue, rootFontSize) {
  if (typeof value === 'string') {
    if (/^(\d*.?\d*)%$/.test(value)) {
      return Math.floor(Number(value.match(/^(\d*.?\d*)%$/)[1]) / 100 * relativeValue) || 0;
    }

    if (/^(\d*.?\d*)rem$/.test(value)) {
      return rootFontSize * Number(value.match(/^(\d*.?\d*)rem$/)[1]);
    }

    if (/^(\d*.?\d*)px$/.test(value)) {
      return Number(value.match(/^(\d*.?\d*)px$/)[1]);
    }
  }

  if (Util.isArray(value)) {
    var cValue = value;

    if (cValue.length && toString.call(cValue[0]) === '[objcet Object]') {
      cValue.foreach(function (v) {
        v = transform2px(v, relativeValue, rootFontSize);
      });
      return cValue;
    } else {
      return cValue.map(function (v) {
        if (v === 'auto') {
          return v;
        } else {
          return transform2px(v, relativeValue, rootFontSize);
        }
      });
    }
  }

  return value;
};

exports.transform2px = transform2px;