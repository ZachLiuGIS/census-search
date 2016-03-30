import actionTypes from '../constants/actionTypes';
import census from '../services/citysdk_api';

export default {
    censusApiRequest(options) {
        return {
            type: actionTypes.CENSUS_API_REQUEST,
            options
        };
    },

    censusApiRequestSuccess(options, response) {
        return {
            type: actionTypes.CENSUS_API_REQUEST_SUCCESS,
            response
        }
    },

    censusApiRequestError(options, error) {
        return {
            type: actionTypes.CENSUS_API_REQUEST_ERROR,
            error
        }
    },

    censusApiSearch(options) {
        return dispatch => {
            dispatch(this.censusApiRequest(options));
            const { street, city, state, level } = options;
            const request = {
                address: {street, city, state},
                level,
                variables: [
                    'income',
                    'population'
                ]
            };
            console.log(request);
            census.APIRequest(request, ((response) => {
                dispatch(this.censusApiRequestSuccess(options, response));
            }).bind(this));
        }
    }
};