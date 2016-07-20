import React from 'react';
require('./channels.less');
import Channel from '../channel';

export default class Channels extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='channels'><Channel/><Channel/></div>
    );
  }
}
