import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import createLogger from 'redux-logger';

import App from './components/App';



// This is required for hot module replacement!
if (module.hot) {
    module.hot.accept();
}

// get root element
const root = document.getElementById('root');

//create logger
const logger = createLogger();

// create store
const store = createStore(reducer, applyMiddleware(logger));

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);


ReactDOM.render(<AppContainer/>, root);