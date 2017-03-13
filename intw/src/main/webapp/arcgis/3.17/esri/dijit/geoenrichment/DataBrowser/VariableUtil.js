// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/VariableUtil",["dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-class"],function(k,g,e,h){return{getToggleGroups:function(a,b,c){var f={},d=[];g.forEach(b,function(b){d.push(this.getToggleGroup(a,b,f,c))},this);return{groups:d,hash:f}},getToggleGroup:function(a,b,c,f){c=c||{};a=a&&a.getStates(b);var d={value:b,states:a};c[b]=d;if(a){var e=!1;g.forEach(a.ids,function(a){b==a?e=!0:f||(c[a]=d)});e||(b=d.value=a.ids[0],c[b]=d)}return d},
createCategoryNode:function(a,b){var c=e.create("div",{"class":"DataCategoryItem DataBrowser_Clickable"},b),f=e.create("div",{"class":"DataCategoryItemIconMargins"},c);c.icon=e.create("div",{"class":"DataCategoryItemIcon "+this.getCategoryImageClass(a)},f);e.create("div",{"class":"DataCategoryItemLabel",innerHTML:a&&a.name||""},c);return c},updateCategoryNode:function(a,b){a.icon.className="DataCategoryItemIcon "+this.getCategoryImageClass(b);h[b.isSpecial?"add":"remove"](a,"DataCategoryItem_Special");
a.children[1].innerHTML=b&&b.name||""},getCategoryImageClass:function(a){a&&"string"!=typeof a&&(a=a.id);return a?"DataCategoryImage DataCategoryImage_"+a.toLowerCase().replace(/(\s|_|\d|\(|\))/g,""):"DataCategoryImage"},parseRangeValue:function(a){var b=a.split("-");2>b.length&&"+"==a.charAt(a.length-1)&&(b=[a.substr(0,a.length-1)]);a=Number(b[0]);b=2>b.length?a:Number(b[1]);return isNaN(a)||isNaN(b)||a>b?null:{min:a,max:b}}}});