import React from 'react';
require ('./oscilloscope.less');
import Wave from './wave';
import Time from './time';
import Channels from './channels';
import Trig from './trig';
import Level from './level';
import Sweep from './sweep';


export default class Oscilloscope extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    const {host}=this.props;
    return (
      <div className='oscilloscope'>
        <Level  host={host}/>
        <Wave  host={host}/>
        <Time  host={host}/>
        <Channels  host={host}/>
        <Trig  host={host}/>
        <Sweep  host={host}/>
      </div>
      
    );
  }

  // setTimeScale(value){
  //   console.log('setTimeScale',value);
  //   const {host}=this.props;
  //   agent.post(host+'/DS-TIMscal?TIMscal='+value).then(res => {
  //     this.setState({'measurement':res.body.MEASvalue});
  //   });
  // }

  // getMeasurement(){
  //   console.log('getMeasurement');
  //   const {host}=this.props;
  //   agent.get(host+'/DS-MEAsure?channel=1&type=2').then(res => {
  //     this.setState({'measurement':res.body.MEASvalue});
  //   });
  // }
}
