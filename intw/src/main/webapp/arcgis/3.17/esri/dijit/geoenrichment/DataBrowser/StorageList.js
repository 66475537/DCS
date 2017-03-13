// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/StorageList","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/Evented dojo/when".split(" "),function(h,k,l,m,n,g){return h(n,{storage:null,storageKey:"data-browser-favorites-",itemLimit:0,_items:null,_index:null,constructor:function(a){k.mixin(this,a);this._items=[];this._index={}},_syncPromise:null,_lastError:null,_lastCountryID:null,_lastHierarchyID:null,_updated:!1,synchronize:function(a,c){if(!a)return this._syncPromise;if(this._lastCountryID!=
a||this._lastHierarchyID!=c){this._lastCountryID=a;this._lastHierarchyID=c;this._updated=!1;this._items=[];this._index={};var b=this;this._syncPromise=this._loadItems().then(function(a){b._lastError=null;(a=b._setItems(a))&&b._updated&&b.save();return a},function(a){b._lastError=a;return(new m).resolve(!1)})}return this._syncPromise},getLastError:function(){return this._lastError},_setItems:function(a){if(null===a||void 0===a)return!0;if(!(a instanceof Array))return this._lastError=Error("Wrong storage object type."),
!1;this.itemLimit&&a.length>this.itemLimit&&a.splice(0,a.length-this.itemLimit);this._items=a;l.forEach(a,function(a,b){this._index[this.getIdentity(a)]=b+1},this);return!0},getIdentity:function(a){return String(a)},save:function(a){if(!this._updated&&!a)return!1;this._updated=!1;this.emit("updated");return this._lastError?!1:this._saveItems()},get:function(a){return(a=this._index[a])?this._items[a-1]:null},contains:function(a){return!!this._index[a]},getItemsCount:function(){return this._items.length},
getItems:function(a){a=a||{};var c=this._items.length,b=a.start||0;b>c&&(b=c);var f=a.count||c;b+f>c&&(f=c-b);a.reverse&&(b=c-b-f);var d;if(a.converter){var e;d=[];if(a.reverse)for(b+=f;0<b--&&d.length!=f;)e=a.converter(this._items[b]),void 0!==e&&null!==e&&d.push(e);else for(;b<c&&d.length!=f;)e=a.converter(this._items[b++]),void 0!==e&&null!==e&&d.push(e)}else d=this._items.slice(b,b+f),a.reverse&&d.reverse();return d},add:function(a){var c=this.getIdentity(a);this.remove(c);this.itemLimit&&this._items.length==
this.itemLimit&&this.remove(this.getIdentity(this._items[0]));this._items.push(a);this._index[c]=this._items.length;this._updated=!0},remove:function(a){a="string"==typeof a?a:this.getIdentity(a);var c=this._index[a];if(!c)return!1;this._items.splice(c-1,1);delete this._index[a];for(a in this._index){var b=this._index[a];b>c&&(this._index[a]=b-1)}return this._updated=!0},clear:function(a){this._items=[];this._index={};this._updated=!0;a&&this.save()},_loadItems:function(){return g(this._getStorage().get(this._composeStorageListKey()))},
_saveItems:function(){return g(this._getStorage().set(this._composeStorageListKey(),this._items))},_composeStorageListKey:function(){return"function"==typeof this.storageKey?this.storageKey(this._lastCountryID,this._lastHierarchyID):this.storageKey+this._lastCountryID+(this._lastHierarchyID?this._lastHierarchyID:"")},_getStorage:function(){this.storage||(this.storage={get:function(a){return this[a]},set:function(a,c){this[a]=c}});return this.storage}})});