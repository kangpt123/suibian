import React from 'react';
require('./choose.less');

export default class ChooseView extends React.Component {
    static propTypes = {
        Vdata: React.PropTypes.array,
        hasorder: React.PropTypes.func,
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

            < p className = "col-xs-5" > < /p>

            < div > 选择实验 < /div> < br / >
            < br / >
            < br / >
            < br / >
            < br / >
            < br / >
            < p > < /p> <p ></p > < p > < /p> <p ></p > < p > < /p>  {


            this.props.Vdata.map(function(item) {





                return (


                    < div > < p className = "col-xs-5" > < /p>  {item.labName}<button onClick={this.props.hasorder.bind(this, item.pk)} >预约</button > < /div>
                );
            }.bind(this))
        } < /div>
    );
}


}
