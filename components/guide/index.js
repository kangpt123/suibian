import React from 'react';
import GuideView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Guide extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,


    };

    constructor(props) {
        super(props);

    }




    order(host,studnetid) {
         sessionStorage.choose_host = host;
         sessionStorage.choose_studentid = studnetid;
         console.log("posted111",host)
         console.log("posted222",studnetid)
         location.href = "indexchoose.html"
    }

orderrecords(host,studnetid) {
         sessionStorage.choose_host = host;
         sessionStorage.choose_studentid = studnetid;
         console.log("posted111",host)
         console.log("posted222",studnetid)
         location.href = "indexorderrecords.html"
    }
    
    startexe() {}
    

    info(host,studnetid) {
         sessionStorage.choose_host = host;
         sessionStorage.choose_studentid = studnetid;
         console.log("posted111",host)
         console.log("posted222",studnetid)
         location.href = "indexorderrecords.html"
    }

    // hasOrderLab(pk){
    //   const {host, studnetid}=this.props;
    //   agent.get(host+'/hasorderlab/'+studnetid+'/'+pk).then(res => {
    //       console.log(res.body);
    //       console.log(typeof(pk));
    //       if (res.body.length!=0) {
    //         alert("已经选择过了");
    //       }
    //        else{

    //         // alert("请选择时间");

    //         sessionStorage.choose_labid=pk;
    //         sessionStorage.choose_studentid=this.props.studnetid;
    //         location.href="indexdatetime.html"
    //        }

    //     });

    // }





    componentWillMount() {

        this.state = this.props;
        //data.WaveData=JSON.parse(data.WaveData);
        // this.setState({'host':host});


    }

    render() {

      // return(
      //   <div>ppppp</div>

      //   );
        return ( < GuideView host = { this.props.host }
            studnetid = { this.props.studnetid }
            order = { this.order.bind(this) }
            orderrecords = { this.orderrecords.bind(this) }
            startexe = { this.startexe.bind(this) }
            info = { this.info.bind(this) }

            />
        );
    }
}
