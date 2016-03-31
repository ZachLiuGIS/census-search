import React from 'react';
import ol from 'openlayers';

class MapView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.markerSource = new ol.source.Vector({});

        this.markerLayer = new ol.layer.Vector({
            source: this.markerSource
        });

        this.map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                this.markerLayer
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-95, 38]),
                zoom: 4
            })
        });
    }

    componentDidMount() {
        this.map.setTarget('map');
    }

    componentWillUpdate(nextProps) {
        console.log('map view update');
        const {lat, lng} = nextProps;
        console.log(lng, lat);
        let center = ol.proj.fromLonLat([lng, lat]);

        let markerFeature = new ol.Feature({
            geometry: new ol.geom.Point(center)
        });

        this.markerSource.clear();
        this.markerSource.addFeature(markerFeature);

        this.map.getView().setCenter(center);
    }

    render() {
        return(
            <div id="map"></div>
        )
    }
}

export default MapView;