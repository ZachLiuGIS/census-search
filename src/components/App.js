import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MapViewContainer from '../containers/MapViewContainer';

const App = () => (
    <div>
        <Header/>
        <Sidebar/>
        <MapViewContainer/>
    </div>
);

export default App;