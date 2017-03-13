// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/dataqual/templates/dataqual.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'dataqual\',minOccurs:0,\r\n      label:\'${i18nFgdc.dataqual.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n      \r\n      \x3c!-- Attribute Accuracy --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.attributeAccuracy}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/dataqual/attracc"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Logical Consistency Report --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.logicalConsistency}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'logic\',label:\'${i18nFgdc.dataqual.logic}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Completeness Report --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.completeness}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'complete\',label:\'${i18nFgdc.dataqual.complete}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Positional Accuracy --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.positionalAccuracy}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'posacc\',minOccurs:0,label:\'${i18nFgdc.dataqual.posacc}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/dataqual/horizpa"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/dataqual/vertacc"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Lineage --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.lineage}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/dataqual/lineage"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- Cloud Coverage --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.dataqual.section.cloudCover}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'cloud\',minOccurs:0,\r\n            alternateValues:[\'Unknown\'],label:\'${i18nFgdc.dataqual.cloud}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"minValue:0,maxValue:100,integerOnly:true,\r\n              hint:\'${i18nFgdc.hints.integer0To100}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\r\n              data-dojo-props\x3d"value:\'Unknown\',label:\'${i18nFgdc.alternates.unknown}\'"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/dataqual/dataqual","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputNumber ../../../form/InputTextArea ../../../form/Section ../../../form/Tabs ../../../form/tools/ClickableValueTool ../dataqual/attracc ../dataqual/horizpa ../dataqual/lineage ../dataqual/vertacc dojo/text!./templates/dataqual.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,r,s,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.dataqual.dataqual",a,f);return a});