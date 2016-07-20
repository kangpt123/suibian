import React from 'react';
require('./choose.less');

export default class LabscoresView extends React.Component {
        static propTypes = {
            host: React.PropTypes.string,
    studnetid: React.PropTypes.string,


            Vdata: React.PropTypes.array,

        };

        constructor(props) {
            super(props);
        }



        render() {
            console.log("OrderrecordsView", this.props)
            return ( < div > {
                    this.props.Vdata
                    .map(function(item, i) {
                        return ( < div >

                            < p > { this.props.Vdata[i].lab.labName } < /p> < p > { this.props.Vdata[i].score } < /p > < /div >

                        );
                    }.bind(this))

                } < /div>);
            }


        }
