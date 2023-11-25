var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_VISTAGENERAL_1 = new ol.format.GeoJSON();
var features_VISTAGENERAL_1 = format_VISTAGENERAL_1.readFeatures(json_VISTAGENERAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VISTAGENERAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VISTAGENERAL_1.addFeatures(features_VISTAGENERAL_1);
var lyr_VISTAGENERAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VISTAGENERAL_1, 
                style: style_VISTAGENERAL_1,
                interactive: true,
                title: 'VISTA GENERAL'
            });
var format_DISTRITOLOCAL16_2 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL16_2 = format_DISTRITOLOCAL16_2.readFeatures(json_DISTRITOLOCAL16_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL16_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL16_2.addFeatures(features_DISTRITOLOCAL16_2);
var lyr_DISTRITOLOCAL16_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL16_2, 
                style: style_DISTRITOLOCAL16_2,
                interactive: true,
                title: 'DISTRITO LOCAL 16'
            });
var format_DISTRITOLOCAL10_3 = new ol.format.GeoJSON();
var features_DISTRITOLOCAL10_3 = format_DISTRITOLOCAL10_3.readFeatures(json_DISTRITOLOCAL10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOLOCAL10_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOLOCAL10_3.addFeatures(features_DISTRITOLOCAL10_3);
var lyr_DISTRITOLOCAL10_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOLOCAL10_3, 
                style: style_DISTRITOLOCAL10_3,
                interactive: true,
                title: 'DISTRITO LOCAL 10'
            });
var format_LONAS_4 = new ol.format.GeoJSON();
var features_LONAS_4 = format_LONAS_4.readFeatures(json_LONAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LONAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LONAS_4.addFeatures(features_LONAS_4);
var lyr_LONAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LONAS_4, 
                style: style_LONAS_4,
                interactive: true,
                title: '<img src="styles/legend/LONAS_4.png" /> LONAS'
            });
var format_AFILIADOS_5 = new ol.format.GeoJSON();
var features_AFILIADOS_5 = format_AFILIADOS_5.readFeatures(json_AFILIADOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFILIADOS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFILIADOS_5.addFeatures(features_AFILIADOS_5);
var lyr_AFILIADOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFILIADOS_5, 
                style: style_AFILIADOS_5,
                interactive: true,
                title: '<img src="styles/legend/AFILIADOS_5.png" /> AFILIADOS'
            });
var format_LIDERES_6 = new ol.format.GeoJSON();
var features_LIDERES_6 = format_LIDERES_6.readFeatures(json_LIDERES_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIDERES_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDERES_6.addFeatures(features_LIDERES_6);
var lyr_LIDERES_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIDERES_6, 
                style: style_LIDERES_6,
                interactive: true,
                title: '<img src="styles/legend/LIDERES_6.png" /> LIDERES'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_VISTAGENERAL_1.setVisible(true);lyr_DISTRITOLOCAL16_2.setVisible(false);lyr_DISTRITOLOCAL10_3.setVisible(false);lyr_LONAS_4.setVisible(false);lyr_AFILIADOS_5.setVisible(true);lyr_LIDERES_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_VISTAGENERAL_1,lyr_DISTRITOLOCAL16_2,lyr_DISTRITOLOCAL10_3,lyr_LONAS_4,lyr_AFILIADOS_5,lyr_LIDERES_6];
lyr_VISTAGENERAL_1.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL16_2.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITOLOCAL10_3.set('fieldAliases', {'fid': 'fid', 'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_LONAS_4.set('fieldAliases', {'id': 'id', 'PERTENECE': 'PERTENECE', 'SECCION': 'SECCION', 'DOMICILIO': 'DOMICILIO', });
lyr_AFILIADOS_5.set('fieldAliases', {'name': 'name', 'geom': 'geom', });
lyr_LIDERES_6.set('fieldAliases', {'name': 'name', 'wkt_geom': 'wkt_geom', });
lyr_VISTAGENERAL_1.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL16_2.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_DISTRITOLOCAL10_3.set('fieldImages', {'fid': 'Hidden', 'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'TextEdit', 'COMITE': 'TextEdit', });
lyr_LONAS_4.set('fieldImages', {'id': 'Hidden', 'PERTENECE': 'TextEdit', 'SECCION': 'TextEdit', 'DOMICILIO': 'TextEdit', });
lyr_AFILIADOS_5.set('fieldImages', {'name': 'TextEdit', 'geom': 'Hidden', });
lyr_LIDERES_6.set('fieldImages', {'name': 'TextEdit', 'wkt_geom': 'Hidden', });
lyr_VISTAGENERAL_1.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL16_2.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_DISTRITOLOCAL10_3.set('fieldLabels', {'SECCION': 'header label', 'DISTRITO': 'inline label', 'AFILIACION': 'inline label', 'COMITE': 'inline label', });
lyr_LONAS_4.set('fieldLabels', {'PERTENECE': 'inline label', 'SECCION': 'inline label', 'DOMICILIO': 'inline label', });
lyr_AFILIADOS_5.set('fieldLabels', {'name': 'inline label', });
lyr_LIDERES_6.set('fieldLabels', {'name': 'inline label', });
lyr_LIDERES_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});