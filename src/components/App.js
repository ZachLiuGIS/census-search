import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MapViewContainer from '../containers/MapViewContainer';
import LoadingContainer from '../containers/LoadingContainer';
import OverlayContainer from '../containers/ol/OverlayContainer';

const App = () => (
    <div>
        <Header/>
        <Sidebar/>
        <div id="map_container">
            <OverlayContainer />
            <MapViewContainer/>
            <LoadingContainer />
        </div>
    </div>
);

export default App;