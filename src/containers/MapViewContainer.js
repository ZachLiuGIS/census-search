import { connect } from 'react-redux'
import actions from '../actions/actions';
import MapView from '../components/MapView';

const mapStateToProps = (state) => {
    return {
        lat: state.census.result.lat,
        lng: state.census.result.lng
    }
};

const MapViewContainer = connect(
    mapStateToProps
)(MapView);

export default MapViewContainer;