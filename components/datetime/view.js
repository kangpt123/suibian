import React from 'react';
require('./choose.less');
import Yysmall from './yysmall'
export default class DatetimeView extends React.Component {
    static propTypes = {

        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
        labid: React.PropTypes.string,

        data: React.PropTypes.array,
        timeslotdata: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
    }



    render() {

        console.log('data', this.props.data);
        console.log('timeslotdata', this.props.timeslotdata);
        return ( < div > {

            this.props.data.map(function(item) {
                return (

                    < Yysmall itemData = { item }
                    timeSlotData = { this.props.timeslotdata }
                    host = { this.props.host }
                    studnetid = { this.props.studnetid }
                    labid = { this.props.labid }
                    />

                );
            }.bind(this))

        } < /div>);
    }
}
