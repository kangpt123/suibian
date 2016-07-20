import React from 'react';
import TimeView from './view.js';
var agent = require('superagent-promise')(require('superagent'), Promise);


export default class Time extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      TimeScale:0.00005
    };
  }

  render() {
    return (
      <TimeView changeScale={this.setTimeScale.bind(this)}/>
    );
  }

  setTimeScale(value){
    console.log('setTimeScale',value);
    const {host}=this.props;
    agent.post(host+'/DS-TIMscal?TIMEDIV='+value).then(res => {
      this.setState({'TimeScale':value});
    });
  }


}
