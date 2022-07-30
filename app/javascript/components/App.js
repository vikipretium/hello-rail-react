import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../configureStore';
import Greeting from './Greeting.js';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};
export default App;
