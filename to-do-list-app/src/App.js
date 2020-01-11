import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { 
  persistReducer, persistStore 
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./redux/reducers";
// import {PersistGate} from "redux-persist/integration/react";
import MainRoutes from "./routes/index";
import './App.css'

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainRoutes />
        </Router>
      </Provider>
    )
  }
}
export default App