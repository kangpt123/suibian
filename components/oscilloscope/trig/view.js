import React from 'react';
require('./trig.less');
import {Label} from 'react-bootstrap';
var Rx = require('rx');

export default class TrigView extends React.Component {
  static propTypes = {
    changeMode: React.PropTypes.func,
    changeSource: React.PropTypes.func,
    changeSweep: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='trig'>
    <Label>trig</Label>
      <div className="row">
        <div className="col-xs-4">Mode</div>
        <div className="col-xs-8">
        
        <select name="select">
        <option>INSIDE</option>
        <option>OUT</option>
        </select>
        </div>
      </div>
    </div>
    );
  }

  componentDidMount() {
    if(!this.props.changeScale){
      return;
    }
    const scale=this.refs.scale;
    var scales = Rx.Observable.fromEvent(scale, 'change')
    .pluck('target', 'value');
    var debounced = scales.debounce(500);
    this.scaleSubscription = debounced.subscribe(
      value => this.props.changeScale(value*0.000000001),
      err => console.log(`Something went wrong: ${err.message}`)
    );
  }
  componentWillUnmount() {
    this.scaleSubscription.dispose();
  }

  // changeScale(evt){
  //   var scale=evt.target.value;
  //   console.log('scale',scale);
  //   if(this.props.changeScale){
  //     this.props.changeScale(scale);
  //   }
  // }

}