import React from 'react';
require('./time.less');
import {Label} from 'react-bootstrap';

export default class TimeView extends React.Component {
  static propTypes = {
    changeScale: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='time'>
        <Label>Time</Label>
        <div className="row">
          <div className="col-xs-4">Position</div>
          <div className="col-xs-8">
          <input  ref="position"  type="range" name="position" min="-10" max="10" onChange={this.changeScale.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">Scale</div>
          <div className="col-xs-8">
          <input  ref="scale"  type="range" min="1" max="10000"/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    if(!this.props.changeScale){
      return;
    }
    // const scale=this.refs.scale;
    // var scales = Rx.Observable.fromEvent(scale, 'change')
    // .pluck('target', 'value');
    // var debounced = scales.debounce(500);
    // this.scaleSubscription = debounced.subscribe(
    //   value => this.props.changeScale(value*0.000000001),
    //   err => console.log(`Something went wrong: ${err.message}`)
    // );
  }
  componentWillUnmount() {
    this.scaleSubscription.dispose();
  }

  changeScale(evt){
    var scale=evt.target.value;
    // console.log('scale',scale);
    if(this.props.changeScale){
      this.props.changeScale(scale*0.000000001);
    }
  }

}
