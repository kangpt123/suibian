import React from 'react';
require('./sweep.less');

export default class Sweep extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sweep'>sweep</div>
    );
  }
}
