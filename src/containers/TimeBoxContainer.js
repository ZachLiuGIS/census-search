import { connect } from 'react-redux'
import constants from '../constants/constants';
import actions from '../actions/actions';
import TimeBox from '../components/TimeBox';


const mapStateToProps = (state) => {
    return {
        time: state.time
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            let time = (new Date()).toLocaleString();
            dispatch(actions.setTime(time));
        }
    };
};

const TimeBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeBox);

export default TimeBoxContainer;