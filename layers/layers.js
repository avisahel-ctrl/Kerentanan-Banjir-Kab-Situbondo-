var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kerentanan_Desolved_1 = new ol.format.GeoJSON();
var features_Kerentanan_Desolved_1 = format_Kerentanan_Desolved_1.readFeatures(json_Kerentanan_Desolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kerentanan_Desolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kerentanan_Desolved_1.addFeatures(features_Kerentanan_Desolved_1);
var lyr_Kerentanan_Desolved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kerentanan_Desolved_1, 
                style: style_Kerentanan_Desolved_1,
                popuplayertitle: 'Kerentanan_Desolved',
                interactive: true,
    title: 'Kerentanan_Desolved<br />\
    <img src="styles/legend/Kerentanan_Desolved_1_0.png" /> Rendah<br />\
    <img src="styles/legend/Kerentanan_Desolved_1_1.png" /> Sedang<br />\
    <img src="styles/legend/Kerentanan_Desolved_1_2.png" /> Tinggi<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Kerentanan_Desolved_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Kerentanan_Desolved_1];
lyr_Kerentanan_Desolved_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kategori': 'Kategori', });
lyr_Kerentanan_Desolved_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_Kerentanan_Desolved_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Kategori': 'no label', });
lyr_Kerentanan_Desolved_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});