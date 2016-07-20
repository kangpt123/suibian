import React from 'react';
require('./choose.less');

export default class OrderrecordsView extends React.Component {
        static propTypes = {

            host: React.PropTypes.string,
            studnetid: React.PropTypes.string,
            orderrecordsdata: React.PropTypes.array,
            corder: React.PropTypes.func,

        };

        constructor(props) {
            super(props);
        };
        render() {
            console.log("OrderrecordsView", this.props)
            return ( < div > {
                    this.props.orderrecordsdata.map(function(item, i) {
                        return ( < div >

                            < p > { this.props.orderrecordsdata[i].date } < /p> < p > { this.props.orderrecordsdata[i].lab.labName } < /p > < p > { this.props.orderrecordsdata[i].timeSlot.startTim } < /p >< p > { this.props.orderrecordsdata[i].timeSlot.endTime } < /p > < button onClick = { this.props.corder.bind(this, this.props.orderrecordsdata[i].pk) } > 预约 < /button > < /div >
                        );
                    }.bind(this))

                } < /div>);
            }
        }
