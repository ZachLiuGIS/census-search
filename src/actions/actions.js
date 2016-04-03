import actionTypes from '../constants/actionTypes';
import census from '../services/citysdk_api';


const censusApiRequest = (options) => {
    return {
        type: actionTypes.CENSUS_API_REQUEST,
        options
    };
};

const censusApiRequestSuccess = (options, response) => {
    return {
        type: actionTypes.CENSUS_API_REQUEST_SUCCESS,
        options,
        response
    }
};

const censusApiRequestError = (options, error) =>{
    return {
        type: actionTypes.REQUEST_ERROR,
        options,
        error
    }
};


export default {
    censusApiSearch(options) {
        return dispatch => {
            dispatch(censusApiRequest(options));
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
            let success = false;
            census.GEORequest(request, ((response) => {
                console.log(response);
                success = true;
                // for some reason I have to use a timeout here to make it work.
                setTimeout(() => {
                    dispatch(censusApiRequestSuccess(options, response));
                }, 200);
            }));

            // if 10 seconds and the request does not respond, stop the request and display error. The citySDK api
            // does not have error handling callbacks, so this is the best method I found so far.
            setTimeout(() => {
                if (!success) {
                    console.log('request failed');
                    dispatch(censusApiRequestError(options, 'Search Failed. Please make sure input is valid and try again.'))
                }
            }, 10000);
        }
    },

    resetError() {
        return {
            type: actionTypes.RESET_REQUEST_ERROR
        }
    }
};