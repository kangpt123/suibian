import React from 'react';
require('./chan.less');
import ChanView from './view.js'
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Chan extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {name,host}=this.props;
    console.log('props-in-chan',this.props);
    return (
      <ChanView 
      name={name}
      host={host}
      psetWaveShape={this.setWaveShape.bind(this)}
      />
    );
  }

  //C_V6
  setWaveShape(value){
    console.log('setWaveShape',value);
    const {name,host}=this.props;
    agent.post(host+'/DG-FUNC-SHAP?Channel='+name+'&Shape='+value).then(res => {
      this.setState({'waveshape':value});
    }); 
  }
}
