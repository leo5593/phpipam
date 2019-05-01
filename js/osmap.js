"use strict";

function osmapInitTitleLayers(osmap){

var osmfr = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    // Il est toujours bien de laisser le lien vers la source des données
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
}).addTo(osmap); 

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});//.addTo(osmap);
var baseMaps = {"OSM": osmfr,"Topo": OpenTopoMap};
var overlayMaps = {};

 overlayMaps["PDFT"] = L.imageOverlay("http://localhost/PDFT_plan_2028.png", [ [39.848200446956376, -4.107363224029542],[39.830290856981854, -4.073524475097657]] ).addTo(osmap);

L.control.layers(baseMaps,overlayMaps).addTo(osmap);

}
