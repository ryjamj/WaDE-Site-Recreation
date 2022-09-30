"use strict";

// Set up initial map center and zoom level
const myMap = L.map('myMapID', {
    center: [38.50, -111.05],
    zoom: 6
});

//Control panel to display map layers
const basemapControlLayers = L.control.layers(null, null, {
    position: "topright",
    collapsed: false
}).addTo(myMap);

// add Carto Light basemap tiles option to control panel, set as default
const cartoLightBM = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(myMap); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
basemapControlLayers.addBaseLayer(cartoLightBM, 'Carto Light basemap');

// add Stamen Terrain basemap tiles option to control panel
const stamenTerrainBM = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
basemapControlLayers.addBaseLayer(stamenTerrainBM, 'Stamen Terrain basemap');


