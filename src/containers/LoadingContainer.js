import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../actions/actions';

class Loading extends Component {
    render() {
        let styles = {
            position: 'absolute',
            top: '45%',
            left: '48%'
        };

        if (this.props.isFetching) {
            return (
                <div style={styles}>
                    <div className="loader-inner ball-spin-fade-loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.census.isFetching
    }
};

const LoadingContainer = connect(mapStateToProps)(Loading);

export default LoadingContainer;