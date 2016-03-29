import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';


const timeReducer = (state=(new Date()).toLocaleString(), action) => {
    switch (action.type) {
        case actionTypes.SET_TIME:
            return action.time;
        default:
            return state;
    }
};

export default timeReducer;