import React from 'react';
require ('./choose.less');

export default class  YysmallView extends React.Component {
  static propTypes = {
    host: React.PropTypes.string,
    studnetid: React.PropTypes.string,
    labid:React.PropTypes.string,
    orderrecords:React.PropTypes.func,
    timeSlotData:React.PropTypes.array,
    itemData:React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }



  render() {
   
   

         return (


            <div>
              
               
            <p>{this.props.itemData.date}</p>
            <p>{this.props.timeSlotData[this.props.itemData.time-1].startTime}</p>
            <p>{this.props.timeSlotData[this.props.itemData.time-1].endTime}</p>
            <p>{this.props.itemData.occupyNum}</p>
            <p>{this.props.itemData.totalNum}</p>

           <button onClick={this.props.orderrecords.bind(this, this.props.itemData,this.props.studnetid,this.props.labid
      )} >预约</button>
                     
              
              
             </div>
           
            
            );
  }


  }
      



