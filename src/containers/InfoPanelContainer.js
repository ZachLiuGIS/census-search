import { connect } from 'react-redux'
import actions from '../actions/actions';
import InfoPanel from '../components/InfoPanel';

const mapStateToProps = (state) => {
    return {
        result: state.census.result,
        isFetching: state.census.isFetching
    }
};

const InfoPanelContainer = connect(
    mapStateToProps
)(InfoPanel);

export default InfoPanelContainer;