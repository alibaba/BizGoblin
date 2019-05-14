import * as React from 'react';
import * as PropTypes from 'prop-types';
// import goblin from 'goblin-base';
import goblin from '../../../goblin/src';
import IRChart from '../typed/IRChart';

function firstLowerCase(str: string) {
  return str.replace(/^\S/, (s: any) => {
    return s.toLowerCase();
  });
}

function retain(obj: any, attr: any) {
  const newObj = Object.create(null);

  for (const item in obj) {
    if (obj.hasOwnProperty(item)) {
      const arrAttr = Array.isArray(attr) ? attr : [attr];

      if (arrAttr.indexOf(item) >= 0) {
        newObj[item] = obj[item];
      }
    }
  }

  return newObj;
}

function isOwnEmpty(obj: object) {
  for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
      return false;
    }
  }
  return true;
}

export default class Chart extends React.Component<IRChart, any> {
  static childContextTypes = {
    centralizedUpdates: PropTypes.func
  };

  chart: any;
  windowWidth: number = 0;
  el: any;
  config: any = {};

  constructor (props: IRChart) {
    super(props);
  }

  getChildContext() {
    return {
      centralizedUpdates: this.centralizedUpdates
    };
  }

  createChartInstance (config: any) {
    if (this.chart) {
      this.chart.destroy();
    }

    this.combineChartConfig(this.props, config);
    this.combineDataConfig(this.props, config);
    this.combineAnimateConfig(this.props, config);

    config.chart.el = this.el;
    this.chart = goblin(config);
  }

  repaintChartInstance(config: any) {
    this.combineChartConfig(this.props, config);
    this.combineDataConfig(this.props, config);
    this.combineAnimateConfig(this.props, config);

    if (this.chart) {
      this.chart.repaint(config);
    } else {
      config.chart.el = this.el;
      this.chart = goblin(config);
    }
  }

  clearConfigData () {
    this.config = {};
  }

  combineChartConfig (props: IRChart, config: any) {
    const chartRetain = [
      'height', 'width', 'padding', 'pixelRatio'
    ];    
    config.chart = retain(props, chartRetain);
  }

  combineDataConfig (props: IRChart, config: any) {
    if (props.data) {
      config.data = props.data;
    }

    if (props.defs) {
      config.defs = props.defs;
    }
  }

  combineAnimateConfig (props: IRChart, config: any) {
    if (props.animate) {
      config.animate = props.animate;
    }
  }

  combineContentConfig(displayName: string, props: IRChart, config: any) {
    const realName = firstLowerCase(displayName);
    const nameLowerCase = displayName.toLowerCase();

    const regSeries = [
      'line',
      'area',
      'bar',
      'interval',
      'point',
      'schema',
    ];

    if (regSeries.indexOf(realName) < 0 && isOwnEmpty(props)) {
      config[nameLowerCase] = true;
    } else if (regSeries.indexOf(realName) >= 0) {
      if (!config.series) {
        config.series = [];
      }

      config.series.push({
        geom: realName,
        ...props,
      });
    } else if (nameLowerCase === 'axis') {
      if (!config.axis) {
        config.axis = [];
      }
      config.axis.push(props);
    } else if (nameLowerCase === 'series') {
      if (!config.series) {
        config.series = [];
      }
      config.series.push(props);
    } else if (nameLowerCase === 'guide') {
      if (!config.guide) {
        config.guide = [];
      }
      config.guide.push(props);
    } else {
      config[nameLowerCase] = props;
    }

    return config;
  }

  centralizedUpdates = (unit: any) => {
    const config = this.config;
    const props = unit.props;
    const displayName = unit.displayName;

    this.combineContentConfig(
      displayName,
      props,
      config
    );
  }

  componentDidMount () {
    this.windowWidth = window.innerWidth;
    this.createChartInstance(this.config);
    this.clearConfigData();
  }

  componentDidUpdate (prevProps: IRChart) {
    this.repaintChartInstance(this.config);
    this.clearConfigData();
  }
  
  componentWillReceiveProps (nextProps: IRChart) { 
  }
  
  componentWillUnmount () {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    this.el = null;
  }
  
  portalRef = (el: any) => {
    if (!this.el) {
      this.el = el;
    }
  }

  render () {
    return <canvas ref={this.portalRef}>{this.props.children}</canvas>;
  }
}

