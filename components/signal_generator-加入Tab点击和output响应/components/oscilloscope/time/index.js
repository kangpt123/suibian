import React from 'react';
import TimeView from './view.js';
var agent = require('superagent-promise')(require('superagent'), Promise);
var _ = require('lodash');


export default class Time extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      TimeScale:0.00005
    };
    this.setTimeScale=_.debounce(this._setTimeScale,1000, true);
  }

  render() {
    return (
      <TimeView changeScale={this.setTimeScale.bind(this)}/>
    );
  }

  _setTimeScale(value){
    console.log('_setTimeScale',value);
    const {host}=this.props;
    agent.post(host+'/DS-TIMscal?TIMscal='+value).then(res => {
      this.setState({'TimeScale':value});
    });
  }

}
