import React from 'react';
import OutputView from './view.js';
var agent = require('superagent-promise')(require('superagent'), Promise);


export default class Output extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OutputView
      	psetChannelnelState={this.setChannelnelState.bind(this)}
      	psetImpedance={this.setImpedance.bind(this)}
      />
    );
  }

  //C_SW1
  setChannelnelState(value){
    console.log('setChannelnelState',value);
    const {host,name}=this.props;
    agent.post(host+'/DG-OUTP-STAT?Channel='+name+'&State='+value).then(res => {
      this.setState({'ChannelnelState':value});
    }); 
  }

  //C_SW2
  setImpedance(value){
    console.log('setImpedance',value);
    const {host,name}=this.props;
    agent.post(host+'/DG-IMPE?Channel='+name+'&Imp='+value).then(res => {
      this.setState({'Impedance':value});
    }); 
  }


}
