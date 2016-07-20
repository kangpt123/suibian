import React from 'react';
import ReactDOM from 'react-dom';
import SignalGenerator from './components/signalGenerator';

ReactDOM.render(<div>
  <SignalGenerator host='http://192.168.3.28:8001/REMTdevice/Generator/RIGOL/DG1032Z'/>
  </div>, document.getElementById('root'));