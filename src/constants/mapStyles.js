import ol from 'openlayers';

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