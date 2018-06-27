import list from './chart/index';
import * as ReactDOM from 'react-dom';
import * as Touchemulator from 'hammer-touchemulator';

function fetchData(state) {
  const type = state.type;
  const fileName = state.filename;
  const desc = state.desc;
  const mount = document.getElementById('mount');
  ReactDOM.unmountComponentAtNode(mount);
  mount.innerHTML = '';
  //json bug
  /*
  const mountBox = document.getElementById('mountBox');
  mountBox.innerHTML = '<canvas id="mountNode"></canvas>';
*/
  const mountBox = document.getElementById('mountBox');
  mountBox.style.display = 'none';
  mount.style.display = 'none';
  const legend = document.getElementById('legend_id');
  if(legend){
    mountBox.removeChild(legend);
  }
  document.getElementById('phone_title').innerHTML = desc;
  // TODO: Vue Angular add unmount
  if (['json', 'react', 'vue', 'angular'].indexOf(fileName) > -1) {
    if (fileName === 'react') {
      delete require.cache[`./chart/${type}/${fileName}.tsx`];
      require(`./chart/${type}/${fileName}`);
      mount.style.display = 'inline-block';
    } else {
      delete require.cache[`./chart/${type}/${fileName}.js`];
      require(`./chart/${type}/${fileName}`);
      mountBox.style.display = 'inline-block';
    }

  }
}

function loadEvents() {
  document.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target && (e.target as any).nodeName.toUpperCase() === 'A') {
      const el = e.target;
      const state = (el as any).dataset;
      fetchData(state);
    }
  });
}

function init() {
  Touchemulator();
  let temp = '';
  list.map((item: any) => {
    let linkTemp = '';

    item.case.forEach((example: any) => {
      linkTemp += `<a href="###" style="margin: 0 10px 0 0;" data-desc="${item.desc}" data-type="${item.type}" data-fileName="${example}">${example}</a>`;
    });

    temp +=
      `<div class="chart-item">
      <a>${item.desc}</a>
      <div className="example-container">${linkTemp}</div>
    </div>`;
  });

  const root = document.getElementById('root');
  root.innerHTML = temp;
  loadEvents();
}

init();
