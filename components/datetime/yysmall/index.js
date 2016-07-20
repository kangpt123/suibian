import React from 'react';
import YysmallView from './view';
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Yysmall extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
        labid: React.PropTypes.string,
        itemData: React.PropTypes.object,
        timeSlotData: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
    }




    orderrecords(itemData, student, lab) {



        const { host } = this.props;
        console.log("ppppp");
        console.log(itemData.time);
        console.log(itemData.date);
       console.log(student);
        console.log(lab);
        console.log(host);


        agent.post(host + '/orderrecords/').send({
            "timeSlot": itemData.time,
            "date": itemData.date,
            "student": student,
            "lab": lab
        }).then(res => {
           console.log("rrrrrr");
            console.log(res.body);
            location.href="indexfinish.html"
            // if (res.body=="no desks left") {
            //   alert("没有剩余了");
            // }
            // else{
           
            alert("成功");
            // }

        }).catch(err=>{
          console.log(err.response.body);
          alert("预约已满");
        });

    }






    render() {
        return ( < YysmallView timeSlotData = { this.props.timeSlotData }
            itemData = { this.props.itemData }
            host = { this.props.host }
            studnetid = { this.props.studnetid }
            labid = { this.props.labid }
            orderrecords = { this.orderrecords.bind(this) }
            />  

        );
    }

}
