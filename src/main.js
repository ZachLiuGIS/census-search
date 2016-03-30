import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import configureStore from './store/configureStore'

import App from './components/App';
import DevTools from './containers/DevTools';

const store = configureStore();

// get root element
const root = document.getElementById('root');

const AppContainer = () => (
    <Provider store={store}>
        <div>
            <App/>
            <DevTools />
        </div>
    </Provider>
);


ReactDOM.render(<AppContainer/>, root);