//import ol from 'openlayers';

export const selectStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: '#ff0000',
        width: 2
    })
});

export const defaultStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: '#0000ff',
        width: 2
    })
});

export const markerStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 33],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '/icon/location_pin.png'
    })
});

export const areaStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(0,255,255,0.4)'
    }),
    stroke: new ol.style.Stroke({
        color: '#0ff',
        width: 2
    })
});