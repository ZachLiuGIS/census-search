import React, { Component } from 'react'
import { connect } from 'react-redux';

class Overlay extends Component {
    render() {

        return (
            <div id="overlay"></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;