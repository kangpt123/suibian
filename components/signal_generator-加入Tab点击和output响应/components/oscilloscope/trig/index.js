import React from 'react';
require('./trig.less');

export default class Trig extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='trig'>trig</div>
    );
  }
}
