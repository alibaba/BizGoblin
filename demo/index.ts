import list from './chart/index';

function fetchData(state) {
  const type = state.type;
  const fileName = state.filename;
  const desc = state.desc;
  document.getElementById('phone_title').innerHTML = desc;
  const frameDOM: any = document.getElementById('canvas-container');
  frameDOM.src = `iframe.html?type=${type}&fileName=${fileName}`;
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
