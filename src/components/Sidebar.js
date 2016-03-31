import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import InfoPanelContainer from '../containers/InfoPanelContainer';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-container">
                    <SearchBoxContainer />
                    <hr />
                    <InfoPanelContainer />
                </div>
            </div>
        )
    }
}

export default Sidebar;