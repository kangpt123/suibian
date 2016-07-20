import React from 'react';
import WaveView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Oscilloscope extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    var ch1={"Time": 0, "WaveData": []};
    var ch2={"Time": 0, "WaveData": []};
    this.state={
      ch1,ch2
    };
  }

 
  tick() {
    const {host}=this.props;
    agent.get(host+'/DS-GETwave?Channel=CHAN1').then(res => {
      // console.log('tick',res.body);
      var data=res.body;
      data.WaveData=JSON.parse(data.WaveData);
      this.setState({'ch1':data});
    });
    agent.get(host+'/DS-GETwave?Channel=CHAN2').then(res => {
      // console.log('tick',res.body);
      var data=res.body;
      data.WaveData=JSON.parse(data.WaveData);
      this.setState({'ch2':data});
    });
  }
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // console.log('wave:render',this.state);
    const {ch1,ch2}=this.state;
    return (
      <WaveView ch1={ch1} ch2={ch2} />
    );
  }
}
