import React from 'react';

import Request from './components/Request.jsx'

import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore();

  return (
    <Provider store = {store}>
      <Request />
    </Provider>
  );
}

export default App;
