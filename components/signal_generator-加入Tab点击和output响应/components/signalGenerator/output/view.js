import React from 'react';
require('./output.less');


export default class OutputView extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='output'>
        <div className="row">
          <div className="col-xs-1"> 
          </div>
          <div className="col-xs-5"> 
              <div className="col-xs-3">Input</div>
              <input ref='ctrl_switch' className="mui-switch" type="checkbox" onChange={this.setChannelnelState.bind(this)}></input>         
          </div>
          <div className="col-xs-5">
              <form className="form-horizontal" >
                <div className="row"> 
                    <div className="col-xs-5">输出阻抗</div>
                    <select onChange={this.setImpedance.bind(this)}>
                      <option value="50">50</option>
                      <option value="INF">INF</option>
                    </select>
                </div>
              </form>
          </div>
          <div className="col-xs-1"> 
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
  }
  componentWillUnmount() {
  }

  setChannelnelState(evt){
    console.log("channel_switch = "+evt.target.checked);
    //console.log("Clicked, new value = "+this.refs.ctrl_switch.checked);
    var ctrl_state=(evt.target.checked)?"ON":"OFF";
    if(this.props.psetChannelnelState){
      this.props.psetChannelnelState(ctrl_state);
    }
  }

  setImpedance(evt){
    var Imp=evt.target.value;
    if(this.props.psetImpedance){
      this.props.psetImpedance(Imp);
    }
  }

}
