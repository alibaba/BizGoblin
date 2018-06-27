import Ajax from '@alife/apimap';

let api_env = window._APIMAP_ENV;

let Tools = {
  ajax: function (originParam, suc, err) {
    let startTime = new Date().getTime();

    let param = Object.assign({}, {
      crossOrigin: true,
      withCredentials: true
    }, originParam);

    // form data
    if (!param.contentType) {
      param.data = this.objFilter(param.data);
    }

    // support restful api
    if (param.restful) {
      let apimap = Object.assign({}, param.apimap);
      let restful = param.restful;
      apimap[api_env] = Object.assign({}, param.apimap[api_env]);

      Object.keys(restful).map(key => {
          let api = apimap[api_env][param.api];
          if (!api) console.error(param.api + ' is not in apimap:' + api_env);
          apimap[api_env][param.api] = api.replace(key, restful[key]);
      });

      param.apimap = apimap;
    }

    Ajax.apimap(param.apimap);

    let apiName = param.api;
    
    return new Promise((resolve, reject) => {
      Ajax(param, suc, err).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  },
  objFilter: function (param) {
    let obj = {};

    if (!this.isObject(param)) {
        return param;
    }

    // remove all undefined params
    for ( let prop in param ) {
        if (!this.isUndefined(param[prop])) {
            obj[prop] = param[prop];
        }
    }
    return obj;
  },
  isObject: function (obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
  },
  isUndefined: function(value) {
    return typeof value === 'undefined';
  }
};

export const ajax = Tools.ajax.bind(Tools);
export const apimap = {
  base: {
    getData: '//metrics.hemaos.com/api/indicator/fetch/data.json'    
  },
  local: {
    getData: '//metrics.hemaos.com/api/indicator/fetch/data.json'
  },
  development: {
    getData: '//metrics.hemaos.com/api/indicator/fetch/data.json'
  },
  pre: {
    getData: '//metrics.hemaos.com/api/indicator/fetch/data.json'
  },
  production: {
    getData: '//metrics.hemaos.com/api/indicator/fetch/data.json'
  }
};
