// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/VisibleScaleRangeSlider/templates/ScaleMenu.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.section}"\x3e\r\n    \x3cdiv class\x3d"${css.header}"\x3e${labels.current}\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_currentScaleLabel" class\x3d"${css.item} ${css.current}"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_scaleInput" data-dojo-type\x3d"dijit/form/TextBox" class\x3d"${css.input}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_recommendedScaleSection"\x3e\r\n    \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_scaleListHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3col data-dojo-attach-point\x3d"dap_recommendedScales" class\x3d"${css.list}"\x3e\r\n        \x3cli data-dojo-attach-point\x3d"dap_mapScaleItem" class\x3d"${css.item} ${css.selectable}"\x3e\x3c/li\x3e\r\n        \x3c!--additional list items added dynamically--\x3e\r\n      \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/VisibleScaleRangeSlider/ScaleMenu","../../kernel ../_EventedWidget ../_Tooltip ./recommendedScales ./ScaleRanges dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-prop dojo/dom-style dojo/has dojo/keys dojo/number dojo/on dojo/query dojo/string dojox/html/entities dojox/lang/functional/object dojo/i18n!../../nls/jsapi dojo/text!./templates/ScaleMenu.html dijit/form/TextBox".split(" "),
function(q,e,r,s,t,u,v,w,m,f,c,h,k,x,y,z,d,n,A,l,B,p,C,D){e=w([e,u,v,r],{declaredClass:"esri.dijit.VisibleScaleRangeSlider.ScaleMenu",templateString:D,baseClass:"esriScaleMenu",labels:C.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",section:"esriSection",content:"esriContent",current:"esriCurrent",input:"esriInput",list:"esriList",item:"esriItem",inline:"esriInline",selectable:"esriSelectable",hidden:"esriHidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,
_rangeToScaleAndNodeLookup:null,constructor:function(){this._scaleRanges=new t},buildRendering:function(){this.inherited(arguments);this._rangeToScaleAndNodeLookup={map:{scale:null,node:this.dap_mapScaleItem}};var a=this.labels,b=a.featuredScaleLabels,g=s.all(),e=this.css.item+" "+this.css.selectable,f;m.forEach(p.keys(g),function(a){f=b[a];var c=g[a],d=l.substitute(f,{scaleLabel:this._formatScale(c)}),d=h.create("li",{innerHTML:d,className:e},this.dap_recommendedScales);this._rangeToScaleAndNodeLookup[a]=
{scale:c,node:d}},this);var c=h.create("span",{innerHTML:a.setTo,className:this.css.inline}),d=h.create("span",{innerHTML:a.selectOne,className:this.css.inline});k.set(this.dap_scaleListHeader,"innerHTML",l.substitute(a.setToSelectOne,{setTo:c.outerHTML,selectOne:d.outerHTML}))},_formatScale:function(a){return"1:"+d.format(a)},postCreate:function(){this.inherited(arguments);this.own(n(this.domNode,n.selector("."+this.css.item+"."+this.css.selectable,"click"),f.hitch(this,function(a){a=a.target===
this.dap_mapScaleItem?this.options.scale.map:this._parseScale(a.target.innerHTML);this._emitScaleSelected(a)})));this.dap_scaleInput.on("keyDown",f.hitch(this,function(a){a.keyCode===z.ENTER&&this._handleCustomScaleInput()}));this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(a){this.emit("scale-selected",{scale:a})},_handleCustomScaleInput:function(){var a=this._parseScale(this.dap_scaleInput.get("value"));isNaN(a)||this._emitScaleSelected(this._scaleRanges.clampScale(a))},
_parseScale:function(a){a=B.decode(a).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,"").replace(/[^0-9.\s]/g,"");return d.parse(a)},_setOptionsAttr:function(a){var b=a.scale,g=this._formatScale(b.current);k.set(this.dap_currentScaleLabel,"innerHTML",a.label);this.dap_scaleInput.set("value",g,!1);g=l.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(b.map)});this._rangeToScaleAndNodeLookup.map.scale=b.map;k.set(this.dap_mapScaleItem,"innerHTML",g);c.toggle(this.dap_mapScaleItem,
this.css.hidden,-1===b.map);this._scaleRanges.set("scaleRangeBounds",{minScale:b.min,maxScale:b.max});this._hideOutOfScaleRanges();this._set("options",a)},_hideOutOfScaleRanges:function(){var a=A("."+this.css.item+"."+this.css.selectable,this.dap_recommendedScales),b=this._scaleRanges;m.forEach(p.keys(this._rangeToScaleAndNodeLookup),function(a){a=this._rangeToScaleAndNodeLookup[a];c.toggle(a.node,this.css.hidden,!b.contains(a.scale))},this);a=a.every(function(a){return"none"===x.get(a,"display")});
c.toggle(this.dap_recommendedScaleSection,this.css.hidden,a)}});y("extend-esri")&&f.setObject("dijit.ScaleMenu",e,q);return e});