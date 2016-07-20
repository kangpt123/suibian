import React from 'react';
require ('./choosetime.less');

export default class ChooseView extends React.Component {
  static propTypes = {
    Vdata: React.PropTypes.array,

    hasorder: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }



  render() {

     // console.log("test1");
      console.log(this.props);
         return (
             <div >{
            
                 this.props.Vdata.map(function (item) {
                    return (
                      <div>{item.date} &nbsp;&nbsp; <button onClick={this.props.hasorder.bind(this, item.pk)} >预约</button></div>
                      );
                  }.bind(this))
              }
            </div>
            );
  }


  }
      



