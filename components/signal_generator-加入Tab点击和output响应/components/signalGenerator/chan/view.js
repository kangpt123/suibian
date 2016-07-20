import React from 'react';
require('./chan.less');
import {Tabs, Tab} from 'react-bootstrap';
import Output from '../output'
import WaveTypes from '../wavetypes'
import Sine from '../sine'
import Ramp from '../ramp'
import Square from '../square'
import Pulse from '../pulse'

export default class ChanView extends React.Component {
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
      <div className='chan'>
        <Output name={name} host={host}/>
        <Tabs defaultActiveKey={1} onClick={this.setWaveShape.bind(this)}>
          <Tab eventKey={1} title="Sine">
            <Sine name={name} host={host}/>
          </Tab>
          <Tab eventKey={2} title="Ramp">
            <Ramp name={name} host={host}/>
          </Tab>
          <Tab eventKey={3} title="Square">
            <Square name={name} host={host}/>
          </Tab>
          <Tab eventKey={4} title="Pulse">
            <Pulse name={name} host={host}/>
          </Tab>
           <Tab eventKey={5} title="Noise">
           
          </Tab>
          <Tab eventKey={6} title="Sweep">
           
          </Tab>
          <Tab eventKey={7} title="Mod">
          
          </Tab>
          <Tab eventKey={8} title="Burst">
            
          </Tab>
        </Tabs>
      </div>
    );
  }

  setWaveShape(evt){
    var waveshape=evt.target.text;
    console.log('waveshape:',waveshape);
    if(this.props.psetWaveShape){
      this.props.psetWaveShape(waveshape);
    }
  }
}
