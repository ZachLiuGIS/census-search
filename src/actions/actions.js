import actionTypes from '../constants/actionTypes';

export default {
    setTime(time) {
        return {
            type: actionTypes.SET_TIME,
            time
        }
    }
};