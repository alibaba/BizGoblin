import { ajax as _ajax, apimap } from './index';
import * as React from 'react';

/**
 * HOC for data formatter
 * @param {React Node} WrappedComponent 
 * @param {event} event 
 * @param {function} handle 
 * @param {array} dataIds 
 */
let dataProxy = function (WrappedComponent, event, handle, dataIds) {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: []
      };
      this.timeoutReq = null;
      window._APIMAP_ENV = 'development';
    }

    componentDidMount () {
      // this.getData(dataIds);
      // event.on('xxx', () => {});
      // test
      this.setState({
        data: handle({})
      })
    }

    getData (ids) {
      ajax({
        api: 'getData',
        data: {
          indicatorCode: 'i_test_wq_002',
          type: 'last',
          startTime: '2018-01-04 00:00:00',
          endTime: '2018-01-04 21:00:00',
          dimensions: JSON.stringify({'channelId':'pos'})
        }
      }, res => {
        if (res.data !== [] && res.data !== {} && res.data !== null && res.data !== undefined) {
          this.setState({
            data: handle(res.data)
          })
          if (this.timeoutReq) {
            clearTimeout(this.timeoutReq)
          }
        } else {
          this.timeoutReq = setTimeout(this.getData(ids), 1000);
        }
      }, err => {
        this.timeoutReq = setTimeout(this.getData(ids), 1000);
      });
    }
    
    render () {
      const props = Object.assign({}, this.props, { data: this.state.data })
      return <WrappedComponent {...props} />
    }
  }
}

/**
 * handle for ajax
 * @param {object} param 
 * @param {function} handleSuc 
 * @param {function} handleFailed 
 */
let ajax = function (param, handleSuc, handleFailed) {
  param.apimap = apimap;

  let sucProcessor = suc => {
    if (suc.success) {
      handleSuc && handleSuc(suc);
    } else {
      handleFailed && handleFailed(suc);
    }
  };

  let errProcessor = (err) => { console.error(err); };

  _ajax(param, sucProcessor, errProcessor);
}

export default dataProxy;
