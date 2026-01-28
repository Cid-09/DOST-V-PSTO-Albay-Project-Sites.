var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_MunicipalityofAlbayMunicipalBoundaries_1 = new ol.format.GeoJSON();
var features_MunicipalityofAlbayMunicipalBoundaries_1 = format_MunicipalityofAlbayMunicipalBoundaries_1.readFeatures(json_MunicipalityofAlbayMunicipalBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofAlbayMunicipalBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofAlbayMunicipalBoundaries_1.addFeatures(features_MunicipalityofAlbayMunicipalBoundaries_1);
var lyr_MunicipalityofAlbayMunicipalBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofAlbayMunicipalBoundaries_1, 
                style: style_MunicipalityofAlbayMunicipalBoundaries_1,
                popuplayertitle: 'Municipality of Albay — Municipal Boundaries',
                interactive: true,
                title: '<img src="styles/legend/MunicipalityofAlbayMunicipalBoundaries_1.png" /> Municipality of Albay — Municipal Boundaries'
            });
var format_ProvinceofAlbayBoundary_2 = new ol.format.GeoJSON();
var features_ProvinceofAlbayBoundary_2 = format_ProvinceofAlbayBoundary_2.readFeatures(json_ProvinceofAlbayBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceofAlbayBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceofAlbayBoundary_2.addFeatures(features_ProvinceofAlbayBoundary_2);
var lyr_ProvinceofAlbayBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinceofAlbayBoundary_2, 
                style: style_ProvinceofAlbayBoundary_2,
                popuplayertitle: 'Province of Albay Boundary',
                interactive: true,
                title: '<img src="styles/legend/ProvinceofAlbayBoundary_2.png" /> Province of Albay Boundary'
            });
var format_SSCProjects_3 = new ol.format.GeoJSON();
var features_SSCProjects_3 = format_SSCProjects_3.readFeatures(json_SSCProjects_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSCProjects_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSCProjects_3.addFeatures(features_SSCProjects_3);
var lyr_SSCProjects_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSCProjects_3, 
                style: style_SSCProjects_3,
                popuplayertitle: 'SSC Projects ',
                interactive: true,
    title: 'SSC Projects <br />\
    <img src="styles/legend/SSCProjects_3_0.png" /> Completed<br />\
    <img src="styles/legend/SSCProjects_3_1.png" /> Delayed<br />\
    <img src="styles/legend/SSCProjects_3_2.png" /> Ongoing<br />' });
var format_SETUP_Projects_4 = new ol.format.GeoJSON();
var features_SETUP_Projects_4 = format_SETUP_Projects_4.readFeatures(json_SETUP_Projects_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETUP_Projects_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETUP_Projects_4.addFeatures(features_SETUP_Projects_4);
var lyr_SETUP_Projects_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETUP_Projects_4, 
                style: style_SETUP_Projects_4,
                popuplayertitle: 'SETUP_Projects ',
                interactive: true,
    title: 'SETUP_Projects <br />\
    <img src="styles/legend/SETUP_Projects_4_0.png" /> Completed<br />\
    <img src="styles/legend/SETUP_Projects_4_1.png" /> Delayed<br />\
    <img src="styles/legend/SETUP_Projects_4_2.png" /> Ongoing<br />' });
var format_Local_GIA_Projects_5 = new ol.format.GeoJSON();
var features_Local_GIA_Projects_5 = format_Local_GIA_Projects_5.readFeatures(json_Local_GIA_Projects_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Local_GIA_Projects_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Local_GIA_Projects_5.addFeatures(features_Local_GIA_Projects_5);
var lyr_Local_GIA_Projects_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Local_GIA_Projects_5, 
                style: style_Local_GIA_Projects_5,
                popuplayertitle: 'Local_GIA_Projects ',
                interactive: true,
    title: 'Local_GIA_Projects <br />\
    <img src="styles/legend/Local_GIA_Projects_5_0.png" /> Completed<br />\
    <img src="styles/legend/Local_GIA_Projects_5_1.png" /> Delayed<br />\
    <img src="styles/legend/Local_GIA_Projects_5_2.png" /> Ongoing<br />' });
var format_CEST_Projects_6 = new ol.format.GeoJSON();
var features_CEST_Projects_6 = format_CEST_Projects_6.readFeatures(json_CEST_Projects_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CEST_Projects_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CEST_Projects_6.addFeatures(features_CEST_Projects_6);
var lyr_CEST_Projects_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CEST_Projects_6, 
                style: style_CEST_Projects_6,
                popuplayertitle: 'CEST_Projects  ',
                interactive: true,
    title: 'CEST_Projects  <br />\
    <img src="styles/legend/CEST_Projects_6_0.png" /> Completed<br />\
    <img src="styles/legend/CEST_Projects_6_1.png" /> Delayed<br />\
    <img src="styles/legend/CEST_Projects_6_2.png" /> Ongoing <br />' });
var group_DOSTRegionVPSTOAlbayProjectSites = new ol.layer.Group({
                                layers: [lyr_SSCProjects_3,lyr_SETUP_Projects_4,lyr_Local_GIA_Projects_5,lyr_CEST_Projects_6,],
                                fold: 'open',
                                title: 'DOST Region V PSTO Albay Project Sites'});

lyr_Positronretina_0.setVisible(true);lyr_MunicipalityofAlbayMunicipalBoundaries_1.setVisible(true);lyr_ProvinceofAlbayBoundary_2.setVisible(true);lyr_SSCProjects_3.setVisible(true);lyr_SETUP_Projects_4.setVisible(true);lyr_Local_GIA_Projects_5.setVisible(true);lyr_CEST_Projects_6.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_MunicipalityofAlbayMunicipalBoundaries_1,lyr_ProvinceofAlbayBoundary_2,group_DOSTRegionVPSTOAlbayProjectSites];
lyr_MunicipalityofAlbayMunicipalBoundaries_1.set('fieldAliases', {'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'HASC_2': 'HASC_2', 'CC_2': 'CC_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'VALIDFR_2': 'VALIDFR_2', 'VALIDTO_2': 'VALIDTO_2', 'REMARKS_2': 'REMARKS_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ProvinceofAlbayBoundary_2.set('fieldAliases', {'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'HASC_1': 'HASC_1', 'CC_1': 'CC_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'VALIDFR_1': 'VALIDFR_1', 'VALIDTO_1': 'VALIDTO_1', 'REMARKS_1': 'REMARKS_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SSCProjects_3.set('fieldAliases', {'fid': 'fid', 'Project_ID': 'Project_ID', 'Project_Name': 'Project_Name', 'Municipality': 'Municipality', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Meta_Data': 'Meta_Data', 'Photo_Path': 'Photo_Path', });
lyr_SETUP_Projects_4.set('fieldAliases', {'fid': 'fid', 'Project_ID': 'Project_ID', 'Project_Name': 'Project_Name', 'Municipality': 'Municipality', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Meta_Data': 'Meta_Data', 'Photo_Path': 'Photo_Path', });
lyr_Local_GIA_Projects_5.set('fieldAliases', {'fid': 'fid', 'Project_ID': 'Project_ID', 'Project_Name': 'Project_Name', 'Municipality': 'Municipality', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Meta_Data': 'Meta_Data', 'Photo_Path': 'Photo_Path', });
lyr_CEST_Projects_6.set('fieldAliases', {'fid': 'fid', 'Project_ID': 'Project_ID', 'Project_Name': 'Project_Name', 'Municipality': 'Municipality', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Meta_Data': 'Meta_Data', 'field_8': 'field_8', 'Photo_Path': 'Photo_Path', });
lyr_MunicipalityofAlbayMunicipalBoundaries_1.set('fieldImages', {'fid': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'ID_2': 'Range', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'HASC_2': 'TextEdit', 'CC_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'VALIDFR_2': 'TextEdit', 'VALIDTO_2': 'TextEdit', 'REMARKS_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ProvinceofAlbayBoundary_2.set('fieldImages', {'fid': 'TextEdit', 'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'HASC_1': 'TextEdit', 'CC_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'VALIDFR_1': 'TextEdit', 'VALIDTO_1': 'TextEdit', 'REMARKS_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SSCProjects_3.set('fieldImages', {'fid': 'TextEdit', 'Project_ID': 'TextEdit', 'Project_Name': 'TextEdit', 'Municipality': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Meta_Data': 'TextEdit', 'Photo_Path': 'ExternalResource', });
lyr_SETUP_Projects_4.set('fieldImages', {'fid': 'TextEdit', 'Project_ID': 'TextEdit', 'Project_Name': 'TextEdit', 'Municipality': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Meta_Data': 'TextEdit', 'Photo_Path': 'ExternalResource', });
lyr_Local_GIA_Projects_5.set('fieldImages', {'fid': 'TextEdit', 'Project_ID': 'TextEdit', 'Project_Name': 'TextEdit', 'Municipality': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Meta_Data': 'TextEdit', 'Photo_Path': 'ExternalResource', });
lyr_CEST_Projects_6.set('fieldImages', {'fid': 'TextEdit', 'Project_ID': 'TextEdit', 'Project_Name': 'TextEdit', 'Municipality': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Meta_Data': 'TextEdit', 'field_8': 'TextEdit', 'Photo_Path': 'ExternalResource', });
lyr_MunicipalityofAlbayMunicipalBoundaries_1.set('fieldLabels', {'fid': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'inline label - always visible', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'HASC_2': 'no label', 'CC_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'VALIDFR_2': 'no label', 'VALIDTO_2': 'no label', 'REMARKS_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ProvinceofAlbayBoundary_2.set('fieldLabels', {'fid': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'HASC_1': 'no label', 'CC_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'VALIDFR_1': 'no label', 'VALIDTO_1': 'no label', 'REMARKS_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SSCProjects_3.set('fieldLabels', {'fid': 'hidden field', 'Project_ID': 'inline label - always visible', 'Project_Name': 'inline label - always visible', 'Municipality': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status': 'inline label - always visible', 'Meta_Data': 'inline label - always visible', 'Photo_Path': 'no label', });
lyr_SETUP_Projects_4.set('fieldLabels', {'fid': 'hidden field', 'Project_ID': 'inline label - always visible', 'Project_Name': 'inline label - always visible', 'Municipality': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status': 'inline label - always visible', 'Meta_Data': 'inline label - always visible', 'Photo_Path': 'no label', });
lyr_Local_GIA_Projects_5.set('fieldLabels', {'fid': 'hidden field', 'Project_ID': 'inline label - always visible', 'Project_Name': 'inline label - always visible', 'Municipality': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status': 'inline label - always visible', 'Meta_Data': 'inline label - always visible', 'Photo_Path': 'no label', });
lyr_CEST_Projects_6.set('fieldLabels', {'fid': 'hidden field', 'Project_ID': 'inline label - always visible', 'Project_Name': 'inline label - always visible', 'Municipality': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Status': 'inline label - always visible', 'Meta_Data': 'inline label - always visible', 'field_8': 'hidden field', 'Photo_Path': 'no label', });
lyr_CEST_Projects_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});