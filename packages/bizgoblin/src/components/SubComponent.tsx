import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ICoord, IGuide, IAxis, ISeries, ITooltip, ILegend } from 'goblin-base';

class Props {};

class SubComponent<T = {}> extends React.Component<Props &T, any> {
  static contextTypes = {
    centralizedUpdates: PropTypes.func
  };

  displayName = 'SubComponent';
  
  constructor(props: Props & T) {
    super(props);
  }

  componentDidMount () {
    this.context.centralizedUpdates(this);    
  }

  componentDidUpdate () {
    this.context.centralizedUpdates(this);    
  }
  
  render () {
    return null as any;
  }
};

export class Coord extends SubComponent<ICoord> { displayName = 'Coord'; }
export class Guide extends SubComponent<IGuide> { displayName = 'Guide'; }
export class Axis extends SubComponent<IAxis> { displayName = 'Axis'; }
export class Geom extends SubComponent<ISeries> {displayName = 'Series'; }
export class Tooltip extends SubComponent<ITooltip> {displayName = 'Tooltip'; }
export class Legend extends SubComponent<ILegend> {displayName = 'Legend'; }
