import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import "./index.css"
import {rootReducer} from "./store/rootReducer";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const container = createRoot(document.getElementById('root'))

container.render(<Provider store={store}><App/></Provider>)