import { combineReducers } from 'redux';
import censusReducer from './censusReducer';

const reducer = combineReducers({
    census: censusReducer
});

export default reducer;