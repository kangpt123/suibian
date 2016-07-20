import React from 'react';
import ChoosetimeView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Choosetime extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
    studnetid: React.PropTypes.string,
    pk:React.PropTypes.string,

  };

  constructor(props) {
    super(props);
    // this.timeslot = [];
    this.state={labdata:[]
    };
  }



hasOrderLab(pk){
  const {host, studnetid}=this.props;
  agent.get(host+'/hasorderlab/'+studnetid+'/'+pk).then(res => {
      // console.log(res.body);
      // console.log(res.body.length);


      if (res.body.length!=0) {
        alert("选择失败");
      }
       else{

        alert("预约成功");
       }
     
    });

}





  componentWillMount() {
    const {host, pk}=this.props;

// agent.get(host+'/timeslot').then(res => {
//       // console.log(res.body);
// var data=new Array()

//        data=res.body;
//        this.timeslot=data;

//        // console.log(this.timeslot[0]);

//        // console.log(typeof(this.timeslot));


//     });








    agent.get(host+'/labresourcelist/'+pk).then(res => {
      // console.log(res.body);
     // var data=new Array()

       // data=res.body;
//        console.log(data[0].occupyNum)
//       //data.WaveData=JSON.parse(data.WaveData);
// console.log(data.length);
     // var i=0;
 //      console.log("test");
 // console.log(i);
     // var newdata=[];
 // console.log(newdata);

   // while(i<=0){
   //  if (data[i].occupyNum!==data[i].totalNum) {newdata[i]=data[i]}
   //  i++};

      console.log("data: "+res.body);

      this.setState({'labdata':res.body});

    });
    
  }

  render() {
    console.log("state: "+ this.state);
    
    return (
      <ChoosetimeView Vdata={this.state.labdata}   hasorder={this.hasOrderLab.bind(this)} />

    );
  }
}
