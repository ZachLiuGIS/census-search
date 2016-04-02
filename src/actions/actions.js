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
            options,
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
                    'population',
                    'median_home_value',
                    'median_gross_rent',
                    'poverty',
                    'commute_time'
                ]
            };
            console.log(request);
            census.GEORequest(request, ((response) => {
                console.log(response);
                setTimeout(() => {
                    dispatch(this.censusApiRequestSuccess(options, response));
                }, 200);
            }).bind(this));
            //census.APIRequest(request, ((response) => {
            //    console.log(response);
            //    dispatch(this.censusApiRequestSuccess(options, response));
            //}).bind(this));
        }
    }
};