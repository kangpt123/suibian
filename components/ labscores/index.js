import React from 'react';
import LabscoresView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);



export default class Labscores extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            labdata: [{
                "pk": 1,
                "student": {
                    "studentID": "220140556",
                    "name": "Lin Guishi",
                    "token": "",
                    "labscheam": 1
                },
                "lab": {
                    "id": 1,
                    "labName": "Amplifier",
                    "startDate": "2016-07-01",
                    "endDate": "2016-07-15",
                    "labCategory": 1
                },
                "score": 99
            }, {
                "pk": 2,
                "student": {
                    "studentID": "220140556",
                    "name": "Lin Guishi",
                    "token": "",
                    "labscheam": 1
                },
                "lab": {
                    "id": 4,
                    "labName": "Computational Logic Circuit",
                    "startDate": "2016-07-01",
                    "endDate": "2016-07-26",
                    "labCategory": 2
                },
                "score": 66
            }, {
                "pk": 3,
                "student": {
                    "studentID": "220140556",
                    "name": "Lin Guishi",
                    "token": "",
                    "labscheam": 1
                },
                "lab": {
                    "id": 2,
                    "labName": "Power Amplifier",
                    "startDate": "2016-07-13",
                    "endDate": "2016-07-28",
                    "labCategory": 1
                },
                "score": 150
            }]
        };
    }


    //http://127.0.0.1:10086/polls/orderrecords/2

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
        const { host, studnetid } = this.props;


        agent.get(host + '/labscores/?' + studnetid).then(res => {
            console.log(res.body);
            // console.log(typeof(res.text));
            var data = res.body;
            //data.WaveData=JSON.parse(data.WaveData);
            this.setState({ 'labdata': data });
        }).catch(err => {
            console.log('得分未知');

            alert('得分未知');
        });


    }

    render() {
        return ( < LabscoresView Vdata = { this.state.labdata }
            />



        );
    }
}
