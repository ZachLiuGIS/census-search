import { connect } from 'react-redux'
import actions from '../actions/actions';
import MapView from '../components/MapView';

const mapStateToProps = (state) => {
    return {
        options: state.census.options,
        geoJson: state.census.geoJson,
        isFetching: state.census.isFetching
    }
};

const MapViewContainer = connect(
    mapStateToProps
)(MapView);

export default MapViewContainer;