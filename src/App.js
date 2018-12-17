import React, { Component } from 'react';

import TextCounter from './TextCounter';
import MyForm from './MyForm';
import MyForm2 from './MyForm2';

class App extends Component {
  render() {
    return (
      <div>
        <TextCounter limit={20} />
        <MyForm  />
        <hr />
        <MyForm2  />
      </div>
    );
  }
}

export default App;
