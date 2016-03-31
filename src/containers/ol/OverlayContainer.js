import React, { Component } from 'react'
import { connect } from 'react-redux';

class Overlay extends Component {
    render() {
        let styles = {
            width: '20px',
            height: '20px',
            backgroundColor: 'yellow',
            borderRadius: '10px'
        };

        return (
            <div style={styles} id="overlay"></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const OverlayContainer = connect(mapStateToProps)(Overlay);

export default OverlayContainer;