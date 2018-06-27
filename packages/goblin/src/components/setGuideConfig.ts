import { Util } from '../utils/Commom';

function setGuideLine(chart: any, item: any) {
  const newItem = Util.omit(item, ['type'])
  chart.guide().line({ ...newItem })
}

function setGuideTag (chart: any, item: any) {
  const newItem = Util.omit(item, ['type'])
  chart.guide().tag({ ...newItem })
}

function setGuideArc(chart: any, item: any) {
  if (item.quickType === 'parallel') {
    const data = item.data;
    chart.guide().arc({
      start: ['min', data],
      end: ['max', data],
      ...item,
    });
    chart.guide().arc({
      start: ['max', data],
      end: ['min', data],
      ...item,
    });
  } else if (item.quickType === 'normal') {
    const data = item.data;
    chart.guide().line({
      start: [data, 'min'],
      end: [data, 'max'],
      ...item,
    });
  } else {
    const newItem = Util.omit(item, ['type'])
    chart.guide().arc({ ...newItem })
  }
}

function setGuideText (chart: any, item: any) {
  const newItem = Util.omit(item, ['type'])
  chart.guide().text({ ...newItem })
}

function setGuideHtml (chart: any, item: any) {
  const newItem = Util.omit(item, ['type'])
  chart.guide().html({ ...newItem })
}

function setGuideRect (chart: any, item: any) {
  const newItem = Util.omit(item, ['type'])
  chart.guide().rect({ ...newItem })
}

export const process = (chart: any, config: any) => {
  const cGuide = Util.deepClone(config.guide);
  const isArr = Util.isArray(cGuide);

  if (Util.isNil(cGuide) || Util.isEmpty(cGuide)) { return; }

  const arrGuide = isArr ? cGuide: [cGuide];

  arrGuide.forEach((res: any) => {
    if (res.type === 'line') {
      setGuideLine(chart, res);
    } else if (res.type === 'text') {
      setGuideText(chart, res);
    } else if (res.type === 'tag') {
      setGuideTag(chart, res);
    } else if (res.type === 'rect') {
      setGuideRect(chart, res);      
    } else if (res.type === 'arc') {
      setGuideArc(chart, res);
    } else if (res.type === 'html') {
      setGuideHtml(chart, res);
    }
  })
}