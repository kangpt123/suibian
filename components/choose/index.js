import React from 'react';
import ChooseView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Choose extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
    studnetid: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      labdata:[]
    };
  }



hasOrderLab(pk){
  const {host, studnetid}=this.props;
  agent.get(host+'/hasorderlab/'+studnetid+'/'+pk).then(res => {
      console.log(res.body);
      console.log(typeof(pk));
      if (res.body.length!=0) {
        alert("已经选择过了");
      }
       else{

        // alert("请选择时间");

        sessionStorage.choose_labid=pk;
        sessionStorage.choose_studentid=this.props.studnetid;
        location.href="indexdatetime.html"
       }
     
    });

}





  componentWillMount() {
    const {host, studnetid}=this.props;
    agent.get(host+'/queryorderablelabList/'+studnetid).then(res => {
      console.log(res.body);
      // console.log(typeof(res.text));
      var data=res.body;
      //data.WaveData=JSON.parse(data.WaveData);
      this.setState({'labdata':data});
    });
    
  }

  render() {
    return (
      <ChooseView Vdata={this.state.labdata} hasorder={this.hasOrderLab.bind(this)} />

    );
  }
}
