import { connect } from 'react-redux'
import actions from '../actions/actions';
import SearchBox from '../components/SearchBox';

const mapStateToProps = (state) => {
    return {
        options: state.census.options
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (options) => {
            console.log(options);
            dispatch(actions.censusApiSearch(options));
        }
    }
};

const SearchBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);

export default SearchBoxContainer;