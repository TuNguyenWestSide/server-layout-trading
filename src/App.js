import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  StaticRouter
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducers from "./reducers/index";
import Routes from './routers/index'
const store = createStore(rootReducers)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

export default App;
