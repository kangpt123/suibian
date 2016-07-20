import React from 'react';
require ('./choose.less');

export default class ChoosetimeView extends React.Component {
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
              <div>
              
                <p className="col-xs-5"></p>
              
            <div >选择时间</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p ></p> <p ></p> <p ></p> <p ></p> <p ></p> 
              {

                     
                  this.props.Vdata.map(function (item) {
         
                var start=["08:00:00","09:00:00","10:00:00","11:00:00","12:00:00"];
                  var end=["08:40:00","09:40:00","10:40:00","11:40:00","12:40:00"];




                      return (


                          <div>  <p className="col-xs-5"></p>  {item.date} {start[item.time-1]}至  {end[item.time-1]}   <button onClick={this.props.hasorder.bind(this, item.time,item.date,item.student,item.lab)} >预约</button></div>
                      );
                 }.bind(this))
              }
             </div>
            );
  }


  }
      



