import React, { Component } from 'react';

import TextCounter from './TextCounter';

class App extends Component {
  render() {
    return (
      <div>
        <TextCounter limit={20} />
      </div>
    );
  }
}

export default App;
