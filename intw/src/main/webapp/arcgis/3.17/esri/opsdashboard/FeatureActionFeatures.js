// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/FeatureActionFeatures",["dojo/_base/declare","./core/messageHandler"],function(d,c){return d(null,{dataSourceProxy:null,constructor:function(a){this.dataSourceProxy=a;this._featureIds={}},_addFeature:function(a){if(!this.dataSourceProxy||!a)return null;var b=a;if("object"===typeof a){if(!a.attributes||!a.attributes[this.dataSourceProxy.objectIdFieldName])return null;b=a.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[b]=b},addFeature:function(a){this.dataSourceProxy&&
(a=this._addFeature(a))&&c._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[a]}})},addFeatures:function(a){if(this.dataSourceProxy&&Array.isArray(a)&&0!==a.length){var b=[];a.forEach(function(a){(a=this._addFeature(a))&&b.push(a)},this);0!==b.length&&c._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:b}})}},_removeFeature:function(a){if(!this.dataSourceProxy||!a)return null;var b=
a;if("object"===typeof a){if(!a.attributes||!a.attributes[this.dataSourceProxy.objectIdFieldName])return null;b=a.attributes[this.dataSourceProxy.objectIdFieldName]}if(!this._featureIds[b])return null;delete this._featureIds[b];return b},removeFeature:function(a){this.dataSourceProxy&&(a=this._removeFeature(a))&&c._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[a]}})},removeFeatures:function(a){if(this.dataSourceProxy&&Array.isArray(a)&&
0!==a.length){var b=[];a.forEach(function(a){(a=this._removeFeature(a))&&b.push(a)},this);0!==b.length&&c._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:b}})}},clear:function(){this.dataSourceProxy&&(this._featureIds={},c._sendMessage({functionName:"featureActionFeaturesClear"}))},indexOf:function(a){if(!this.dataSourceProxy||!a)return-1;var b=a;if("object"===typeof a){if(!a.attributes||!a.attributes[this.dataSourceProxy.objectIdFieldName])return-1;
b=a.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[b]||-1},contains:function(a){return-1!==this.indexOf(a)}})});