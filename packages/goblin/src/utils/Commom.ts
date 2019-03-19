/**
 * 基础工具
 */

export const Util = {
  deepClone: function (obj: any) {
    if (!obj) {
      return obj;
    }
    let cloneObj: any;

    [Number, String, Boolean].forEach(type => {
      if (obj instanceof type) {
        cloneObj = type(obj);
      }
    });

    if (typeof cloneObj === 'undefined') {
      if (Object.prototype.toString.call(obj) === '[object Array]') {
        cloneObj = [];
        obj.forEach((child: any, index: any) => {
          cloneObj[index] = Util.deepClone(child);
        });
      } else if (typeof obj === 'object') {
        if (obj.nodeType && typeof obj.cloneNode === 'function') {
          // 不复制DOM结点
          // cloneObj = obj.cloneNode(true);
          cloneObj = obj;
        } else
        if (!obj.prototype) {
          if (obj instanceof Date) {
            cloneObj = new Date(String(obj));
          } else {
            cloneObj = {};
            for (let i in obj) {
              cloneObj[i] = Util.deepClone(obj[i]);
            }
          }
        }
      } else {
        // if (false && obj.constructor) {
        //   cloneObj = new obj.constructor();
        // } else {
          cloneObj = obj;
        // }
      }
    } else {
      cloneObj = obj;
    }
    return cloneObj;
  },
  isArray: ('isArray' in Array) ? Array.isArray : function(obj: any) {
    return toString.call(obj) === '[object Array]';
  },
  isEmpty: function (obj: any) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== 'object') return true;
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
  },
  isNil: function (obj: any) {
    return obj === undefined || obj === null;
  },
  isEqual: function (obj:any, newObj: any) {
    return eq(obj, newObj, []);
  },
  isString: function (obj: any) {
    return typeof obj === 'string';
  },
  isBoolean: function (obj: any) {
    return typeof obj === 'boolean';
  },
  isNumber: function (obj: any) {
    return typeof obj === 'number';
  },
  isObject: (toString.call(null) === '[object Object]') ?
  function(obj: any) {
    // check ownerDocument here as well to exclude DOM nodes
    return obj !== null && obj !== undefined && toString.call(obj) === '[object Object]' && obj.ownerDocument === undefined;
  } : function(obj: any) {
    return toString.call(obj) === '[object Object]';
  },
  isPlainObject: function (obj: any) {
    if (!Util.isObject(obj)) return false;
    if (Object.getPrototypeOf(obj) === null) {
      return true;
    }
    let proto: any = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
  },
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   */
  isObjectLike: function (obj: any) {
    return typeof obj === 'object' && obj !== null
  },
  isFunction(obj: any) {
    return typeof obj === 'function';
  },
  omit: function (obj: any, keys: string | Array<string>) {
    const newObject: any = {};
    const objectKeys = Object.keys(obj);
    const omitKeys = Array.isArray(keys) ? keys : [keys];
    objectKeys.forEach(key => {
      if (omitKeys.indexOf(key) === -1) {
        newObject[key] = Util.deepClone(obj[key]);
      }
    });
    return newObject;
  }
}

function eq(a: any, b: any, stack: any): boolean {
  if(a === b) {
    return a !== 0 || 1 / a == 1 / b;
  }
  if(a == null || b == null) {
    return a === b;
  }
  if(a._chain) {
    a = a._wrapped;
  }
  if(b._chain) {
    b = b._wrapped;
  }
  if(a.isEqual && Util.isFunction(a.isEqual)) {
    return a.isEqual(b);
  }
  if(b.isEqual && Util.isFunction(b.isEqual)) {
    return b.isEqual(a);
  }
  var className = toString.call(a);
  if(className != toString.call(b)) {
    return false;
  }
  switch (className) {
    case '[object String]':
      return a == String(b);
    case '[object Number]':
      return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
    case '[object Date]':
    case '[object Boolean]':
      return +a == +b;
    case '[object RegExp]':
      return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
  }
  if( typeof a != 'object' || typeof b != 'object') {
    return false;
  }
  var length = stack.length;
  while(length--) {
    if(stack[length] == a) {
      return true;
    }
  }
  stack.push(a);
  var size = 0, result = true;
  if(className == '[object Array]') {
    size = a.length;
    result = size == b.length;
    if(result) {
      while(size--) {
        if(!( result = size in a == size in b && eq(a[size], b[size], stack)))
          break;
      }
    }
  } else {
    if('constructor' in a != 'constructor' in b || a.constructor != b.constructor)
        return false;
    for(var key in a) {
      if(Object.hasOwnProperty.call(a, key)) {
        size++;
        if(!( result = Object.hasOwnProperty.call(b, key) && eq(a[key], b[key], stack)))
          break;
      }
    }
    if(result) {
      for(key in b) {
        if(Object.hasOwnProperty.call(b, key) && !(size--))
            break;
      }
      result = !size;
    }
  }
  stack.pop();
  return result;
}

export const transform2px = function (
  value: any,
  relativeValue: number = 0,
  rootFontSize: number = 0): string | number | (string | number)[] {
  if (Util.isString(value)) {
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
    const cValue: any = value;
    if (cValue.length && toString.call(cValue[0]) === '[objcet Object]') {
      cValue.foreach(function (v: any) {
        v = transform2px(v, relativeValue, rootFontSize);
      });
      return cValue;
    } else {
      return cValue.map(function(v:number | string) {
        if (v === 'auto') {
          return v;
        } else {
          return transform2px(v, relativeValue, rootFontSize);
        }
      });
    }
  }
  return value
}
