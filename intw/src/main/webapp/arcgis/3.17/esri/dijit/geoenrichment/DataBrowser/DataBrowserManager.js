// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/DataBrowserManager","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/when dojo/Stateful dojo/dom-geometry ./VariableInfo ./DeferredStore ./VariableUtil".split(" "),function(k,p,f,h,l,m,n,q,g){return k(l,{variables:null,selectionLimit:-1,variableQuery:null,selection:null,variableInfo:null,flyAnim:null,onLimit:null,allowShoppingCart:!1,allowMultipleSelectInGroup:!1,constructor:function(a){this.variables=a.variables;this.selectionLimit=isNaN(a.selectionLimit)?
-1:a.selectionLimit;this.allowShoppingCart=this.multipleSelectIsAllowed()&&!!a.shoppingCart;this.allowMultipleSelectInGroup=this.multipleSelectIsAllowed()&&!this.allowShoppingCart&&!!a.allowMultipleSelectInGroup;a.variableQuery=this.variableQuery=a.variableQuery||{};a.countryID=this.variableQuery.countryID=this.variableQuery.countryID||a.countryID||null;a.favorites&&!this.variables.favorites&&(this.variables.favorites=a.favorites);this.variables.synchronize(a.countryID);a.selection&&(a.selection.length&&
this.multipleSelectIsAllowed())&&this.changeSelection(a.selection);this.selection=[];a.selection=this.selection;var b=a.variableInfo;if(!1!==b){if(!0===b)b="fullName";else if(b&&b.domNode){this.variableInfo=b;return}this.variableInfo=new n({infoFields:b});a.own(this.variableInfo)}},postscript:function(){},multipleSelectIsAllowed:function(){return 0>this.selectionLimit||1<this.selectionLimit},changeSelection:function(a){var b=this;h(this.variables.synchronize(),function(){setTimeout(function(){b.selection=
[];b.addToSelection(a,!0)},0)})},validateSelection:function(){var a=f.filter(this.selection,function(a){return this.variables.get(a)},this);a.length!=this.selection.length&&this.set("selection",a)},addToSelection:function(a,b){"string"==typeof a&&(a=[a]);var c=this.selection.slice(),d={},e=!1;f.forEach(a,function(a){if(this.variables.get(a))if(0<=this.selectionLimit&&c.length==this.selectionLimit)e=!0;else{var b=g.getToggleGroups(this.variables,[a],this.allowMultipleSelectInGroup);f.every(c,function(a){return!b.hash[a]})&&
(c.push(b.groups[0].value),d[a]=!0)}},this);if(c.length&&!this._ensureValidSelection(c))return null;b||this.selection.length!=c.length?this.set("selection",c):d=null;e&&this.onLimit&&this.onLimit();return d},_ensureValidSelection:function(a){return!0},removeFromSelection:function(a,b){"string"==typeof a&&(a=[a]);var c=[],d=g.getToggleGroups(this.variables,a,!b&&this.allowMultipleSelectInGroup).hash,e={};f.forEach(this.selection,function(a){d[a]?e[a]=!0:c.push(a)});return this.selection.length!=c.length?
(this.set("selection",c),e):null},updateSelection:function(a){var b=g.getToggleGroups(this.variables,[a],this.allowMultipleSelectInGroup),c=-1;f.some(this.selection,function(a,e){return b.hash[a]?(c=e,!0):!1});0<=c&&(a=this.selection.slice(),a[c]=b.groups[0].value,this.set("selection",a))},getSelectionGroups:function(){this._selectionGroups||(this._selectionGroups=g.getToggleGroups(this.variables,this.selection,this.allowMultipleSelectInGroup));return this._selectionGroups},_selectionSetter:function(a){this._selectionGroups=
null;this.selection=a},_selectionGroups:null,animateSelection:function(a){this.flyAnim.fly(a,"DataBrowser_SelectVar",["top",m.isBodyLtr()?"right":"left"])},composeQuery:function(a){a&&"string"==typeof a&&(a=[a]);var b={countryID:this._getQueryCountryID()};f.forEach(a,function(a){var d=this.variableQuery[a];d&&(b[a]=d)},this);return b},_getQueryCountryID:function(){return this.variableQuery.countryID},validateQuery:function(){var a=this.variableQuery,b=a.dataCollectionID?this.getDataCollection():a.categoryID?
this.getCategory():this.queryVariables(),c=this;return h(b).then(function(b){b||c.set("variableQuery",c.composeQuery());return a.dataCollectionID||a.categoryID?null:b},function(a){c.set("variableQuery",c.composeQuery());return null})},getCategories:function(){return this.variables.categories.query(this.composeQuery())},queryVariables:function(a){return this.variables.query(this.variableQuery,a)},getCategory:function(a){a=a||this.variableQuery.categoryID;if(!a)return null;var b=this.composeQuery();
b.id=a;var b=this.variables.categories.query(b),c=this;return b.then?b.then(function(b){return c._getCategory(b,a)}):this._getCategory(b,a)},_getCategory:function(a,b){return a[0]},getDataCollection:function(a){a=a||this.variableQuery.dataCollectionID;if(!a)return null;var b=this.composeQuery();b.id=a;var b=this.variables.dataCollections.query(b),c=this;return b.then?b.then(function(b){return c._getDataCollection(b,a)}):this._getDataCollection(b,a)},_getDataCollection:function(a,b){return a[0]}})});