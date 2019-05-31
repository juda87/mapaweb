var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_mun_tolima_1 = new ol.format.GeoJSON();
var features_mun_tolima_1 = format_mun_tolima_1.readFeatures(json_mun_tolima_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_tolima_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_mun_tolima_1.addFeatures(features_mun_tolima_1);var lyr_mun_tolima_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mun_tolima_1, 
                style: style_mun_tolima_1,
    title: 'mun_tolima<br />\
    <img src="styles/legend/mun_tolima_1_0.png" /> ALPUJARRA<br />\
    <img src="styles/legend/mun_tolima_1_1.png" /> ALVARADO<br />\
    <img src="styles/legend/mun_tolima_1_2.png" /> AMBALEMA<br />\
    <img src="styles/legend/mun_tolima_1_3.png" /> ANZOÁTEGUI<br />\
    <img src="styles/legend/mun_tolima_1_4.png" /> ARMERO (Guayabal)<br />\
    <img src="styles/legend/mun_tolima_1_5.png" /> ATACO<br />\
    <img src="styles/legend/mun_tolima_1_6.png" /> CAJAMARCA<br />\
    <img src="styles/legend/mun_tolima_1_7.png" /> CARMEN DE APICALÁ<br />\
    <img src="styles/legend/mun_tolima_1_8.png" /> CASABIANCA<br />\
    <img src="styles/legend/mun_tolima_1_9.png" /> CHAPARRAL<br />\
    <img src="styles/legend/mun_tolima_1_10.png" /> COELLO<br />\
    <img src="styles/legend/mun_tolima_1_11.png" /> COYAIMA<br />\
    <img src="styles/legend/mun_tolima_1_12.png" /> CUNDAY<br />\
    <img src="styles/legend/mun_tolima_1_13.png" /> DOLORES<br />\
    <img src="styles/legend/mun_tolima_1_14.png" /> ESPINAL<br />\
    <img src="styles/legend/mun_tolima_1_15.png" /> FALAN<br />\
    <img src="styles/legend/mun_tolima_1_16.png" /> FLANDES<br />\
    <img src="styles/legend/mun_tolima_1_17.png" /> FRESNO<br />\
    <img src="styles/legend/mun_tolima_1_18.png" /> GUAMO<br />\
    <img src="styles/legend/mun_tolima_1_19.png" /> HERVEO<br />\
    <img src="styles/legend/mun_tolima_1_20.png" /> HONDA<br />\
    <img src="styles/legend/mun_tolima_1_21.png" /> IBAGUÉ<br />\
    <img src="styles/legend/mun_tolima_1_22.png" /> ICONONZO<br />\
    <img src="styles/legend/mun_tolima_1_23.png" /> LÉRIDA<br />\
    <img src="styles/legend/mun_tolima_1_24.png" /> LÍBANO<br />\
    <img src="styles/legend/mun_tolima_1_25.png" /> MARIQUITA<br />\
    <img src="styles/legend/mun_tolima_1_26.png" /> MELGAR<br />\
    <img src="styles/legend/mun_tolima_1_27.png" /> MURILLO<br />\
    <img src="styles/legend/mun_tolima_1_28.png" /> NATAGAIMA<br />\
    <img src="styles/legend/mun_tolima_1_29.png" /> ORTEGA<br />\
    <img src="styles/legend/mun_tolima_1_30.png" /> PALOCABILDO<br />\
    <img src="styles/legend/mun_tolima_1_31.png" /> PIEDRAS<br />\
    <img src="styles/legend/mun_tolima_1_32.png" /> PLANADAS<br />\
    <img src="styles/legend/mun_tolima_1_33.png" /> PRADO<br />\
    <img src="styles/legend/mun_tolima_1_34.png" /> PURIFICACIÓN<br />\
    <img src="styles/legend/mun_tolima_1_35.png" /> RIOBLANCO<br />\
    <img src="styles/legend/mun_tolima_1_36.png" /> RONCESVALLES<br />\
    <img src="styles/legend/mun_tolima_1_37.png" /> ROVIRA<br />\
    <img src="styles/legend/mun_tolima_1_38.png" /> SALDAÑA<br />\
    <img src="styles/legend/mun_tolima_1_39.png" /> SAN ANTONIO<br />\
    <img src="styles/legend/mun_tolima_1_40.png" /> SAN LUIS<br />\
    <img src="styles/legend/mun_tolima_1_41.png" /> SANTA ISABEL<br />\
    <img src="styles/legend/mun_tolima_1_42.png" /> SUÁREZ<br />\
    <img src="styles/legend/mun_tolima_1_43.png" /> VALLE DE SAN JUAN<br />\
    <img src="styles/legend/mun_tolima_1_44.png" /> VENADILLO<br />\
    <img src="styles/legend/mun_tolima_1_45.png" /> VILLAHERMOSA<br />\
    <img src="styles/legend/mun_tolima_1_46.png" /> VILLARRICA<br />\
    <img src="styles/legend/mun_tolima_1_47.png" /> <br />'
        });var format_Cortado_2 = new ol.format.GeoJSON();
var features_Cortado_2 = format_Cortado_2.readFeatures(json_Cortado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortado_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Cortado_2.addFeatures(features_Cortado_2);var lyr_Cortado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cortado_2, 
                style: style_Cortado_2,
                title: '<img src="styles/legend/Cortado_2.png" /> Cortado'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mun_tolima_1.setVisible(true);lyr_Cortado_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mun_tolima_1,lyr_Cortado_2];
lyr_mun_tolima_1.set('fieldAliases', {'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'Area_HA': 'Area_HA', });
lyr_Cortado_2.set('fieldAliases', {'nombre_geo': 'nombre_geo', 'proyecto': 'proyecto', 'symbol': 'symbol', 'fecha': 'fecha', 'ruleid': 'ruleid', 'id_multi': 'id_multi', 'bk_multi': 'bk_multi', 'escala': 'escala', 'vigencia': 'vigencia', 'pk_cue': 'pk_cue', });
lyr_mun_tolima_1.set('fieldImages', {'ID_ESPACIA': 'TextEdit', 'AREA_OFICI': 'TextEdit', 'ENTIDAD_TE': 'TextEdit', 'NOM_DEPART': 'TextEdit', 'NOM_MUNICI': 'TextEdit', 'COD_DEPTO': 'TextEdit', 'Area_HA': 'TextEdit', });
lyr_Cortado_2.set('fieldImages', {'nombre_geo': 'TextEdit', 'proyecto': 'TextEdit', 'symbol': 'TextEdit', 'fecha': 'TextEdit', 'ruleid': 'TextEdit', 'id_multi': 'TextEdit', 'bk_multi': 'TextEdit', 'escala': 'TextEdit', 'vigencia': 'TextEdit', 'pk_cue': 'TextEdit', });
lyr_mun_tolima_1.set('fieldLabels', {'ID_ESPACIA': 'no label', 'AREA_OFICI': 'no label', 'ENTIDAD_TE': 'no label', 'NOM_DEPART': 'no label', 'NOM_MUNICI': 'no label', 'COD_DEPTO': 'no label', 'Area_HA': 'no label', });
lyr_Cortado_2.set('fieldLabels', {'nombre_geo': 'inline label', 'proyecto': 'no label', 'symbol': 'no label', 'fecha': 'no label', 'ruleid': 'no label', 'id_multi': 'no label', 'bk_multi': 'no label', 'escala': 'no label', 'vigencia': 'no label', 'pk_cue': 'no label', });
lyr_Cortado_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});