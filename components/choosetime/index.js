import React from 'react';
import ChoosetimeView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Choosetime extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
    studnetid: React.PropTypes.string,
    pk: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state={
      labdata:[]
    };
  }



hasOrderLab(time,date,student,lab){

  const {host, studnetid}=this.props;
  console.log("ppppp");
   console.log(time);
    console.log(date);
    console.log(student);
    console.log(lab);
    console.log( host);console.log(studnetid);


  agent.post(host+'/orderrecords').then(res => {
      // console.log(res.body);
      // console.log(typeof(pk));
      // if (res.body=="no desks left") {
      //   alert("没有剩余了");
      // }
       // else{
console.log("ppppp");
        alert("成功");
       // }
     
    });

}





  componentWillMount() {
    const {host, studnetid,pk}=this.props;
    agent.get(host+'/labresourcelist/'+pk).then(res => {
      console.log(res.body);
      // console.log(typeof(res.text));
      var data=res.body;
      //data.WaveData=JSON.parse(data.WaveData);
      this.setState({'labdata':data});
    });
    
  }

  render() {
    return (
      <ChoosetimeView Vdata={this.state.labdata} hasorder={this.hasOrderLab.bind(this)} />

    );
  }
}
