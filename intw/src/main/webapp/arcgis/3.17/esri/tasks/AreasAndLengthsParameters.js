// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/tasks/AreasAndLengthsParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel".split(" "),function(c,e,f,d,g,h){c=c(null,{declaredClass:"esri.tasks.AreasAndLengthsParameters",polygons:null,lengthUnit:null,areaUnit:null,calculationType:null,toJson:function(){var b=f.map(this.polygons,function(a){return a.toJson()}),a={};a.polygons=d.toJson(b);b=this.polygons[0].spatialReference;a.sr=b.wkid?b.wkid:d.toJson(b.toJson());this.lengthUnit&&(a.lengthUnit=
this.lengthUnit);this.areaUnit&&(e.isString(this.areaUnit)?a.areaUnit=d.toJson({areaUnit:this.areaUnit}):a.areaUnit=this.areaUnit);this.calculationType&&(a.calculationType=this.calculationType);return a}});g("extend-esri")&&e.setObject("tasks.AreasAndLengthsParameters",c,h);return c});