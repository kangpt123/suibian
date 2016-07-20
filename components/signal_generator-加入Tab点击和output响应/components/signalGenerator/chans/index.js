import React from 'react';
require('./chans.less');
import Chan from '../chan'
import {Tabs, Tab} from 'react-bootstrap';

export default class Chans extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("props-in-chans",this.props);
    return (
      <div className='chans'>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="CH1">
            <Chan name='CHAN1' host={this.props.host}/>
          </Tab>
          <Tab eventKey={2} title="CH2">
            <Chan name='CHAN2' host={this.props.host}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
