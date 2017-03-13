// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/timeinfo/templates/timeinfo.html":"\x3cdiv data-dojo-attach-point\x3d\"containerNode\"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n    data-dojo-props\x3d\"target:'descript',label:'${i18nFgdc.timeinfo.caption}'\"\x3e\r\n    \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/ElementChoice\"\x3e\r\n              \r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'sngdate',showHeader:false,\r\n          label:'${i18nFgdc.timeinfo.sngdate}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'caldate',\r\n            label:'${i18nFgdc.timeinfo.caldate}',\r\n            alternateValues:['Unknown']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputDate\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'time',minOccurs:0,\r\n            label:'${i18nFgdc.timeinfo.time}',\r\n            alternateValues:['Unknown']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputTime\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'mdattim',showHeader:false,\r\n          label:'${i18nFgdc.timeinfo.mdattim}'\"\x3e\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'sngdate',minOccurs:2,maxOccurs:'unbounded',\r\n            label:'${i18nFgdc.timeinfo.mdattim}'\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n            data-dojo-props\x3d\"target:'caldate',\r\n              label:'${i18nFgdc.timeinfo.caldate}',\r\n              alternateValues:['Unknown']\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputDate\"\x3e\r\n              \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n                data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n            data-dojo-props\x3d\"target:'time',minOccurs:0,\r\n              label:'${i18nFgdc.timeinfo.time}',\r\n              alternateValues:['Unknown']\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputTime\"\x3e\r\n              \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n                data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n        data-dojo-props\x3d\"target:'rngdates',showHeader:false,\r\n          label:'${i18nFgdc.timeinfo.rngdates}'\"\x3e\r\n\r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'begdate',\r\n            label:'${i18nFgdc.timeinfo.begdate}',\r\n            alternateValues:['Unknown']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputDate\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'begtime',minOccurs:0,\r\n            label:'${i18nFgdc.timeinfo.begtime}',\r\n            alternateValues:['Unknown']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputTime\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'enddate',\r\n            label:'${i18nFgdc.timeinfo.enddate}',\r\n            alternateValues:['Unknown','Present']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputDate\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Present',label:'${i18nFgdc.alternates.present}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e  \r\n        \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n          data-dojo-props\x3d\"target:'endtime',minOccurs:0,\r\n            label:'${i18nFgdc.timeinfo.endtime}',\r\n            alternateValues:['Unknown']\"\x3e\r\n          \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputTime\"\x3e\r\n            \x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n              data-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e        \r\n        \r\n      \x3c/div\x3e\r\n        \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n    \r\n\x3c/div\x3e"}});
define("esri/dijit/metadata/types/fgdc/timeinfo/timeinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/ElementChoice ../../../form/fgdc/InputDate ../../../form/fgdc/InputTime ../../../form/tools/ClickableValueTool dojo/text!./templates/timeinfo.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.timeinfo.timeinfo",a,f);return a});