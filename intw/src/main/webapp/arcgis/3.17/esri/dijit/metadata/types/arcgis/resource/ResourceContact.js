// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/ResourceContact.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3c!-- resource contact --\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'idPoC\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.resource.idPoC}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/ContactElements"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/ResourceContact","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/ResourceContact.html ../citation/ContactElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.metadata.ResourceContact",a,d);return a});