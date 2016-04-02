import React from 'react';
import ol from 'openlayers';
import { mapConfig } from '../config/config';
import { defaultStyle, selectStyle } from '../constants/mapStyles';
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

        // create a boundary Vector Layer
        this.boundarySource = new ol.source.Vector({
            format: new ol.format.GeoJSON()
        });

        this.boundaryLayer = new ol.layer.Vector({
            source: this.boundarySource,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'blue'
                }),
                stroke: new ol.style.Stroke({
                    color: 'olive',
                    width: 1
                })
            })
        });

        // create geo json layer
        let countrySource = new ol.source.Vector({
            url: '../data/countries.geojson',
            format: new ol.format.GeoJSON()
        });

        this.countryLayer = new ol.layer.Vector({
            source: countrySource,
            style: defaultStyle,
            id: 'countries'
        });

        // create a selection interaction
        this.selectInteraction = new ol.interaction.Select({
            condition: ol.events.condition.singleClick,
            toggleCondition: ol.events.condition.shiftKeyOnly,
            layers: function (layer) {
                return layer.get('id') == 'countries';
            },
            style: selectStyle
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
                this.boundaryLayer,
                this.markerLayer
            ],
            overlays: [this.overlay],
            view: new ol.View({
                center: mapConfig.center,
                zoom: 4
            }),
            controls: ol.control.defaults({
                attribution: false
            })
        });

        this.map.getInteractions().extend([this.selectInteraction]);
        console.log(this.map);
    }

    componentWillUpdate(nextProps) {
        console.log('map view update');
        console.log(nextProps);
        if (nextProps.isFetching) {
            this.markerSource.clear();
        } else {
            const properties = nextProps.geoJson.features[0].properties;
            const lat = parseFloat(properties.CENTLAT);
            const lng = parseFloat(properties.CENTLON);
            let center = ol.proj.fromLonLat([lng, lat]);

            // add boundary
            //let boundaryFeature = new ol.Feature({
            //    geometry: nextProps.geoJson.geometry
            //});
            //
            //this.boundarySource.clear();
            console.log(nextProps.geoJson);
            this.boundarySource.addFeatures((new ol.format.GeoJSON()).readFeatures(nextProps.geoJson));

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
            var hdms = ol.coordinate.toStringHDMS([lng, lat]);
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