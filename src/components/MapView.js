import React from 'react';
import ol from 'openlayers';

class MapView extends React.Component {

    constructor(props) {
        super(props);
        this.map = null;
    }

    componentWillMount() {
        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-95, 38]),
                zoom: 4
            })
        });
    }

    componentDidMount() {
        console.log(this.map);
        this.map.setTarget('map');
    }

    componentWillUpdate() {
        console.log(this.map)
    }

    render() {
        return(
            <div id="map"></div>
        )
    }
}

export default MapView;