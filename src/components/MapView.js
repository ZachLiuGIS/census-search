import React from 'react';
import ol from 'openlayers';
import { mapConfig } from '../config/config';
import OverlayContainer from '../containers/ol/OverlayContainer';


class MapView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('map will mount');

        // create a marker Vector Layer
        let iconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.5, 33],
                anchorXUnits: 'fraction',
                anchorYUnits: 'pixels',
                opacity: 0.75,
                src: '/icon/location_pin.png'
            })
        });

        this.markerSource = new ol.source.Vector({});

        this.markerLayer = new ol.layer.Vector({
            source: this.markerSource,
            style: iconStyle
        });

        // create geo json layer
        let countrySource = new ol.source.Vector({
            url: '../data/countries.geojson',
            format: new ol.format.GeoJSON()
        });

        this.countryLayer = new ol.layer.Vector({
            source: countrySource
        });
    }

    componentDidMount() {
        console.log('map did mount');
        // create an overlay, has to happen after div renders
        this.overlay = new ol.Overlay({
            position: mapConfig.center,
            element: document.getElementById('overlay')
        });

        // create map
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                this.countryLayer,
                this.markerLayer
            ],
            overlays: [this.overlay],
            view: new ol.View({
                center: mapConfig.center,
                zoom: 4
            })
        });
        console.log(this.map);
    }

    componentWillUpdate(nextProps) {
        console.log('map view update');
        console.log(nextProps);
        if (nextProps.isFetching) {
            this.markerSource.clear();
        } else {
            const {lat, lng} = nextProps;
            let center = ol.proj.fromLonLat([lng, lat]);

            // add marker
            let markerFeature = new ol.Feature({
                geometry: new ol.geom.Point(center)
            });

            this.markerSource.clear();
            this.markerSource.addFeature(markerFeature);


            // pan animation
            var pan = ol.animation.pan({
                source: this.map.getView().getCenter()
            });
            this.map.beforeRender(pan);

            // set map center
            this.map.getView().setCenter(center);
            this.map.getView().setZoom(6);

            // add coordinates overlay
            var hdms = ol.coordinate.toStringHDMS(center);
            var element = this.overlay.getElement();
            element.innerHTML = hdms;
            this.overlay.setPosition(center);
        }
    }

    render() {
        return (
            <div id="map"></div>
        )
    }
}

export default MapView;