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
            census.GEORequest(request, ((response) => {
                console.log(response);
                // for some reason I have to use a timeout here to make it work.
                setTimeout(() => {
                    dispatch(censusApiRequestSuccess(options, response));
                }, 200);
            }).bind(this), (error) => {
                console.log('request error');
                console.log(error);
            });
        }
    }
};