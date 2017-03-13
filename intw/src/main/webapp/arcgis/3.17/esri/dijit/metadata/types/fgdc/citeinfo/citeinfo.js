// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/citeinfo/templates/citeinfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'citeinfo\',\r\n      label:\'${i18nFgdc.citeinfo.caption}\'"\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'origin\',maxOccurs:\'unbounded\',\r\n        label:\'${i18nFgdc.citeinfo.origin}\'"\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'pubdate\',\r\n        label:\'${i18nFgdc.citeinfo.pubdate}\',\r\n        alternateValues:[\'Unknown\',\'Unpublished material\']"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/fgdc/InputDate"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\r\n          data-dojo-props\x3d"value:\'Unknown\',label:\'${i18nFgdc.alternates.unknown}\'"\x3e\x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\r\n          data-dojo-props\x3d"value:\'Unpublished material\',label:\'${i18nFgdc.alternates.unpublishedMaterial}\'"\x3e\x3c/div\x3e  \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'pubtime\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.pubtime}\',\r\n        alternateValues:[\'Unknown\']"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/fgdc/InputTime"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\r\n          data-dojo-props\x3d"value:\'Unknown\',label:\'${i18nFgdc.alternates.unknown}\'"\x3e\x3c/div\x3e  \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'title\',isDocumentTitle:true,\r\n        label:\'${i18nFgdc.citeinfo.title}\'"\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'edition\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.edition}\'"\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'geoform\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.geoform.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.atlas}\',value:\'atlas\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.audio}\',value:\'audio\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.diagram}\',value:\'diagram\'"\x3e\x3c/div\x3e                    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.sDocument}\',value:\'document\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.globe}\',value:\'globe\'"\x3e\x3c/div\x3e              \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.map}\',value:\'map\'"\x3e\x3c/div\x3e              \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.model}\',value:\'model\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.multiMediaPresentation}\',value:\'multimedia presentation\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.profile}\',value:\'profile\'"\x3e\x3c/div\x3e                    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.rasterDigitalData}\',value:\'raster digital data\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.remoteSensingImage}\',value:\'remote-sensing image\'"\x3e\x3c/div\x3e              \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.section}\',value:\'section\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.spreadsheet}\',value:\'spreadsheet\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.tabularDigitalData}\',value:\'tabular digital data\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.vectorDigitalData}\',value:\'vector digital data\'"\x3e\x3c/div\x3e                    \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.video}\',value:\'video\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.citeinfo.geoform.view}\',value:\'view\'"\x3e\x3c/div\x3e              \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n        \x3c/div\x3e            \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'serinfo\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.serinfo.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'sername\',\r\n          label:\'${i18nFgdc.citeinfo.serinfo.sername}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'issue\',\r\n          label:\'${i18nFgdc.citeinfo.serinfo.issue}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'pubinfo\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.pubinfo.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'pubplace\',\r\n          label:\'${i18nFgdc.citeinfo.pubinfo.pubplace}\'"\x3e\r\n      \x3c/div\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'publish\',\r\n          label:\'${i18nFgdc.citeinfo.pubinfo.publish}\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e  \r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'othercit\',minOccurs:0,\r\n        label:\'${i18nFgdc.citeinfo.othercit}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'onlink\',minOccurs:0,maxOccurs:\'unbounded\',useTabs:false,preferOpen:true,\r\n        label:\'${i18nFgdc.citeinfo.onlink}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/citeinfo/citeinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/fgdc/InputDate ../../../form/fgdc/InputTime ../../../form/tools/ClickableValueTool ../../../form/InputSelectOne ../../../form/InputTextArea ../../../form/Options ../../../form/Option dojo/text!./templates/citeinfo.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.citeinfo.citeinfo",
a,f);return a});