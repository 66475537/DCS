// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/Union","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../geometry/jsonUtils ./EditOperationBase".split(" "),function(e,c,d,g,h,f,k){c=c(k,{declaredClass:"esri.dijit.editing.Union",type:"edit",label:"Union Features",constructor:function(a){a=a||{};this._featureLayer=a.featureLayer;this._deletedGraphics=a.deletedGraphics;this._preUpdatedGraphics=a.preUpdatedGraphics;this._postUpdatedGraphics=a.postUpdatedGraphics;this._preUpdatedGraphicsGeometries=
[];this._preUpdatedGraphicsAttributes=[];this._postUpdatedGraphicsGeometries=[];this._postUpdatedGraphicsAttributes=[];var b;for(b=0;b<a.preUpdatedGraphics.length;b++)this._preUpdatedGraphicsGeometries.push(a.preUpdatedGraphics[b].geometry.toJson()),this._preUpdatedGraphicsAttributes.push(a.preUpdatedGraphics[b].attributes);for(b=0;b<a.postUpdatedGraphics.length;b++)this._postUpdatedGraphicsGeometries.push(a.postUpdatedGraphics[b].geometry.toJson()),this._postUpdatedGraphicsAttributes.push(d.clone(a.postUpdatedGraphics[b].attributes))},
updateObjectIds:function(a,b){this.updateIds(this._featureLayer,this._preUpdatedGraphicsAttributes,a,b);this.updateIds(this._featureLayer,this._postUpdatedGraphicsAttributes,a,b);this.updateIds(this._featureLayer,this._deletedGraphics,a,b)},performUndo:function(){var a;for(a=0;a<this._postUpdatedGraphics.length;a++)this._postUpdatedGraphics[a].setGeometry(f.fromJson(this._preUpdatedGraphicsGeometries[a])),this._postUpdatedGraphics[a].setAttributes(this._preUpdatedGraphicsAttributes[a]);var b=e.map(this._deletedGraphics,
function(a){return a.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._deletedGraphics,this._postUpdatedGraphics,null).then(d.hitch(this,function(a,c,d){a=e.map(a,function(a){return a.objectId});return{oldIds:b,addedIds:a,layer:this._featureLayer,operation:this}}))},performRedo:function(){var a;for(a=0;a<this._postUpdatedGraphics.length;a++)this._postUpdatedGraphics[a].setGeometry(f.fromJson(this._postUpdatedGraphicsGeometries[a])),this._postUpdatedGraphics[a].setAttributes(this._postUpdatedGraphicsAttributes[a]);
return this._featureLayer.applyEdits(null,this._postUpdatedGraphics,this._deletedGraphics).then(d.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))}});g("extend-esri")&&d.setObject("dijit.editing.Union",c,h);return c});