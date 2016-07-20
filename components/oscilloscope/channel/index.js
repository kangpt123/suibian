import React from 'react';
require('./channel.less');

export default class Channel extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='channel'>channel</div>
    );
  }
}
