// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_Operation.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_Operation\',minOccurs:0"\x3e\r\n  \r\n    \x3c!-- \r\n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\r\n      \x3cxs:sequence\x3e\r\n        \x3cxs:element name\x3d"description" type\x3d"gco:CharacterString_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"citation" type\x3d"gmd:CI_Citation_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"identifier" type\x3d"gmd:MD_Identifier_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"status" type\x3d"gmd:MD_ProgressCode_PropertyType"/\x3e\r\n        \x3cxs:element name\x3d"type" type\x3d"gmi:MI_OperationTypeCode_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"objective" type\x3d"gmi:MI_Objective_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"plan" type\x3d"gmi:MI_Plan_PropertyType" minOccurs\x3d"0"/\x3e\r\n        \x3cxs:element name\x3d"childOperation" type\x3d"gmi:MI_Operation_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"significantEvent" type\x3d"gmi:MI_Event_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n        \x3cxs:element name\x3d"platform" type\x3d"gmi:MI_Platform_PropertyType" minOccurs\x3d"0" maxOccurs\x3d"unbounded"/\x3e\r\n      \x3c/xs:sequence\x3e\r\n     --\x3e\r\n     \r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n     \r\n      \x3c!-- identification section --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n          data-dojo-props\x3d"showHeader:false,label:\'${i18nIso.MI_Operation.sections.identification}\'"\x3e\r\n          \r\n        \x3c!-- description - description of the mission on which the platform observations are made and the objectives of that mission --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'gmi:description\',minOccurs:0,label:\'${i18nIso.MI_Operation.description}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- citation - identification of the mission --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:citation\',minOccurs:0,label:\'${i18nIso.MI_Operation.citation}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/SimpleCI_Citation"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n            data-dojo-props\x3d"target:\'xlink:href\',label:\'${i18nIso.ObjectReference.xlinkref}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3c!-- identifier --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:identifier\',minOccurs:0,label:\'${i18nIso.MI_Operation.identifier}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/SimpleMD_Identifier"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- status - status of the data acquisition --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n          data-dojo-props\x3d"target:\'gmi:status\',label:\'${i18nIso.MI_Operation.status}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/MD_ProgressCode"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- type - collection technique for the operation --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n          data-dojo-props\x3d"target:\'gmi:type\',minOccurs:0,label:\'${i18nIso.MI_OperationTypeCode.caption}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_OperationTypeCode"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3c!-- related section --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\r\n          data-dojo-props\x3d"showHeader:false,label:\'${i18nIso.MI_Operation.sections.related}\'"\x3e\r\n        \r\n        \x3c!-- objective (allow MI_Objective references) --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:objective\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Operation.objectiveReference}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- plan (allow MI_Plan reference) --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:plan\',minOccurs:0,\r\n            label:\'${i18nIso.MI_Operation.planReference}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- childOperation (not implemented) --\x3e\r\n        \r\n        \x3c!-- significantEvent (allow MI_Event references) --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:significantEvent\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Operation.significantEventReference}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3c!-- platform (allow MI_Platform references) --\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n          data-dojo-props\x3d"target:\'gmi:platform\',minOccurs:0,maxOccurs:\'unbounded\',\r\n            label:\'${i18nIso.MI_Operation.platformReference}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute" data-dojo-props\x3d"target:\'xlink:href\',showHeader:false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n                \r\n      \x3c/div\x3e     \r\n     \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_Operation","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Attribute ../../../../form/Element ../../../../form/InputTextArea ../../../../form/Section ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../gmd/citation/SimpleCI_Citation ../../gmd/identification/SimpleMD_Identifier ../../gmd/identification/MD_ProgressCode ./MI_OperationTypeCode dojo/text!./templates/MI_Operation.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,s,t,u,v,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_Operation",a,f);return a});