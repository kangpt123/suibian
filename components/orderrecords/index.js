import React from 'react';
import OrderrecordsView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Orderrecords extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
        corder: React.PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            orderrecordsdata: [{
                    "pk": 2,
                    "deskID": 1,
                    "timeSlot": {
                        "id": 5,
                        "startTime": "12:00:00",
                        "endTime": "12:40:00"
                    },
                    "date": "2016-07-02",
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
                    }
                },

                {
                    "pk": 3,
                    "deskID": 2,
                    "timeSlot": {
                        "id": 5,
                        "startTime": "12:00:00",
                        "endTime": "12:40:00"
                    },
                    "date": "2016-07-02",
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
                    }
                },









            ],
            // labdata:  [],
            // timeslotdata: [],

        };
        console.log('orderrecordsinnitial', this.state.orderrecordsdata);
        console.log('orderrecordsinnitialLAB', this.state.orderrecordsdata[0].lab);
        console.log('orderrecordsinnitialLABNAME', this.state.orderrecordsdata[0].lab.labName);

    }





    componentWillMount() {

        const { host, studnetid } = this.props;




        //         agent.get(host + '/timeslot').then(res => {
        // this.setState({ 'timeslotdata': res.body });

        //             // console.log('SLOT', this.state.timeslotdata);

        //         });



        //         agent.get(host + '/lab').then(res => {

        // this.setState({ 'labdata': res.body });

        //             // console.log('SLOT', this.state.labdata);





        //         });

        agent.get(host + '/orderrecords/?date=&timeSlot__endTime__gte=&timeSlot__startTime__lte=&student=' + studnetid).then(res => {

            // console.log(typeof(res.text));
            // var data = res.body;

            this.setState({ 'orderrecordsdata': res.body });
            console.log('orderrecords', res.body);



        }).catch(err => {
            // var  a=[0,0,0];
            // this.setState({ 'orderrecords': a });
            alert('没有预约');
            console.log('无数据');
        });




    }



    corder(pk) {
        alert('取消')
    }; //http://127.0.0.1:10086/polls/orderrecords/2






    render() {
        console.log('indexxxxxxxxxxxxx', this.state.orderrecordsdata);
        return (



            < OrderrecordsView host = { this.props.host }
            studnetid = { this.props.studnetid }
            corder = { this.corder.bind(this) }

            orderrecordsdata = { this.state.orderrecordsdata }


            />


        );
    }
}
