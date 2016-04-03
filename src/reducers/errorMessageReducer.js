import actionTypes from '../constants/actionTypes';

const errorMessageReducer = (state = null, action) => {
    const { type, error } = action;

    if (type === actionTypes.RESET_REQUEST_ERROR) {
        return null
    } else if (error) {
        return action.error
    }
    return state
};

export default errorMessageReducer;