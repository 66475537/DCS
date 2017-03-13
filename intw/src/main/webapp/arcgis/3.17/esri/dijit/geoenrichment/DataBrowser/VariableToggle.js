// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/VariableToggle","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/on dijit/_WidgetBase ../../analysis/GroupToggleButton".split(" "),function(f,g,e,d,h,k,l){return f(k,{states:null,value:null,_buttons:null,_index:null,postCreate:function(){this.inherited(arguments);this._buttons=[];this._index={};d.add(this.domNode,"VariableToggleButtonGroup");var a=!1;e.forEach(this.states.ids,function(b,c){a=this._addButton(this.states.labels[c],
b,c)||a;this._index[b]=c+1},this);a||this.set("value",this.states.ids[0]);this._started=!0},_addButton:function(a,b,c){a=new l({groupName:this.id,label:a});d.add(a.containerNode,"TrimWithEllipses");d.add(a.domNode,!c?"firstButton":1==c?"secondButton":"thirdButton");a.toggleState=b;a.placeAt(this.domNode);a.startup();(b=b==this.value)&&a.set("checked",!0);h(a,"click,touched,MSPointerDown",g.hitch(this,this._toggle,a));this._buttons.push(a);return b},_setValueAttr:function(a){if(this._index){var b=
this._index[a];b&&(this._set("value",a),this._buttons[b-1].set("checked",!0))}},_toggle:function(a,b){var c=this.value;this.value=a.toggleState;c!==this.value?this.emit("Change",{state:this.value,name:this.getStateName(this.value)}):a.set("checked",!0);b.stopPropagation()},getStateName:function(a){return(a=this._index[a||this.value])&&this.states.names&&this.states.names[a-1]||null},destroy:function(){e.forEach(this._buttons,function(a){a.destroy()});this.inherited(arguments)}})});