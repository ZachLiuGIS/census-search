import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';


const censusReducer = (state={options: {}, isFetching: false}, action) => {
    switch (action.type) {
        case actionTypes.CENSUS_API_REQUEST:
            return update(state, {
                options: {$set: action.options},
                isFetching: {$set: true}
            });
        case actionTypes.CENSUS_API_REQUEST_SUCCESS:
            return update(state, {
                response: {$set: action.response},
                isFetching: {$set: false}
            });
        default:
            return state;
    }
};

export default censusReducer;