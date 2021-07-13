import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger"
import "./index.css";
import App from "./containers/App"
import reportWebVitals from "./reportWebVitals";
import { searchColleagues, requestColleagues } from "./reducers";
import thunkMiddleware from "redux-thunk";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const rootReducer = combineReducers({searchColleagues, requestColleagues});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
