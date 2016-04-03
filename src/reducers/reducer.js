import { combineReducers } from 'redux';
import censusReducer from './censusReducer';
import errorMessageReducer from './errorMessageReducer';

const reducer = combineReducers({
    census: censusReducer,
    error: errorMessageReducer
});

export default reducer;