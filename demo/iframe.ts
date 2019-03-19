import * as Touchemulator from 'hammer-touchemulator';

declare interface chartType {
  type: string,
  fileName: string,
}

function init() {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    Touchemulator();
  }
  const params: chartType = { type: '', fileName: ''};
  window.location.search.slice(1).split('&').forEach(param => {
    const [ key, value ] = param.split('=');
    params[key] = value;
  });
  const { fileName, type } = params;
  if (['json', 'react'].indexOf(fileName) > -1) {
    if (fileName === 'react') {
      delete require.cache[`./chart/${type}/${fileName}.tsx`];
      require(`./chart/${type}/${fileName}`);
    } else {
      delete require.cache[`./chart/${type}/${fileName}.js`];
      require(`./chart/${type}/${fileName}`);
    }
  }
}

init();
