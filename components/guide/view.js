import React from 'react';
require('./choose.less');

export default class GuideView extends React.Component {
    static propTypes = {
        host: React.PropTypes.string,
        studnetid: React.PropTypes.string,
        order: React.PropTypes.func,
        orderrecords: React.PropTypes.func,
        startexe: React.PropTypes.func,
        info: React.PropTypes.func,
    };

    constructor(props) {
        super(props);
    }



    render() {


        return (

            //<style> 

            // .abc{ color:#00F} 
            //      </style> 
            < div >

          < button onClick = {this.props.order.bind(this,this.props.host,this.props.studnetid) }>预约实验</button> 
          < button onClick = {this.props.orderrecords.bind(this,this.props.host,this.props.studnetid) }>预约记录表</button> 
          < button onClick = {this.props. info.bind(this,this.props.host,this.props.studnetid) }>个人信息</button> 
           < button onClick = {this.props. startexe.bind(this,this.props.host,this.props.studnetid) }>开始实验</button> 




            < /div>
        );
    }


}
