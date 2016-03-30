import React, { Component } from 'react';
import SearchBoxContainer from '../containers/SearchBoxContainer';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <SearchBoxContainer/>
            </div>
        )
    }
}

export default Sidebar;