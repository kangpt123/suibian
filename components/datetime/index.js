import React from 'react';
import DatetimeView from './view';
// import  
var agent = require('superagent-promise')(require('superagent'), Promise);

export default class Datetime extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
        labid: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
        console.log(props.studnetid);
        this.timeslotdata = [];
        this.state = {
            Datetimedata: [],
        };
    }








    componentWillMount() {



        const { host, studnetid, labid } = this.props;
        agent.get(host + '/timeslot').then(res => {
            // console.log(res.body);
            this.timeslotdata = res.body;

        });



        agent.get(host + '/labresourcelist/' + labid).then(res => {
            console.log(res.body);
            // console.log(typeof(res.text));
            var data = res.body;
            this.setState({ 'Datetimedata': data });
        });

    }

    render() {
        console.log("labid: " + this.props.labid);
        return ( < DatetimeView data = { this.state.Datetimedata }
            timeslotdata = { this.timeslotdata }
            host = { this.props.host }
            studnetid = { this.props.studnetid }
            labid = { this.props.labid }
            />

        );
    }
}
