import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Chart } from 'goblin-base';
import register, { IPieLabel } from 'goblin-base/es/plugin/pieLabel';

class Props {};

export default class PieLabel extends React.Component<Props & IPieLabel, any> {
  static contextTypes = {
    centralizedUpdates: PropTypes.func
  };

  displayName = 'PieLabel';
  
  constructor(props: Props & IPieLabel) {
    super(props);
  }

  componentDidMount () {
    register(Chart);
    this.context.centralizedUpdates(this);
  }

  componentDidUpdate () {
    this.context.centralizedUpdates(this);    
  }

  render () {
    return null as any;
  }
}
