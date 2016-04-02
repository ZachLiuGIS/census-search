import 'babel-polyfill';
import update from 'react-addons-update';
import actionTypes from '../constants/actionTypes';

const processCensusApiResponse = (response) => {
    return {
        fullAddress: response.address.addressMatch.matchedAddress? response.address.addressMatch.matchedAddress
            : response.address.street + ' ' + response.address.city + ' ' + response.address.state,
        level: response.level,
        lat: response.lat,
        lng: response.lng,
        street: response.address.street,
        city: response.address.city,
        state: response.address.state,
        data: response.data[0]
    }
};

const censusReducer = (state={options: {}, geoJson: {}, isFetching: false}, action) => {
    switch (action.type) {
        case actionTypes.CENSUS_API_REQUEST:
            return update(state, {
                options: {$set: action.options},
                isFetching: {$set: true}
            });
        case actionTypes.CENSUS_API_REQUEST_SUCCESS:
            return update(state, {
                options: {$set: action.options},
                geoJson: {$set: action.response},
                isFetching: {$set: false}
            });
        default:
            return state;
    }
};

export default censusReducer;