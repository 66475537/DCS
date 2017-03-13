// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputSelectCode","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/topic dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../../../kernel ../../../base/InputBase dijit/form/Select".split(" "),function(g,h,f,k,l,u,m,n,v,p,q,r,s){var t=g(s,{lazyOptions:null,loadDropDown:function(){this.lazyOptions&&(this.options=this.lazyOptions);this.inherited(arguments)}});g=g([r],{templateString:"\x3cdiv\x3e\x3c/div\x3e",
defaultValue:null,codelistType:null,emptyLabel:null,codelist:null,options:null,selectWidget:null,viewOnlyNode:null,_checkedFilter:!1,_displayValue:null,_inputValue:null,_viewOnly:null,_wasValueSet:!1,postCreate:function(){this.inherited(arguments);this.options=[];m.add(this.domNode,"gxeInputSelect gxeIndent")},destroy:function(){this.selectWidget&&this.selectWidget.destroyRecursive(!1);this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.buildUI(this._viewOnly))},
buildUI:function(a){this._checkFilter();(null===a||!1===a)&&this._buildSelectWidget();if(null===a||!0===a)this.viewOnlyNode=n.create("div",{"class":"gxeViewOnlyText gxeViewOnly"},this.domNode,"last")},_buildSelectWidget:function(){var a=this.domNode,b=this,c=[],d=this.options,e=this._findDefaultOption(this._inputValue);e&&(c.push(e),this._displayValue=e.label,this._inputValue=e.value);this.selectWidget=new t({"class":"gxeEditOnly",options:c,lazyOptions:d});this.selectWidget.placeAt(a,"last");this.selectWidget.on("change",
function(a){b._displayValue=this.get("displayedValue");b._inputValue=this.get("value");b.emitInteractionOccurred()});this.focusNode=this.selectWidget;this.selectWidget.focusNode&&this.selectWidget.focusNode.focus&&(this.focusNode=this.selectWidget.focusNode);this.emitInteractionOccurred()},_checkFilter:function(){this._checkedFilter||(this._checkedFilter=!0,this.options=this._filterOptions(this.options))},connectXNode:function(a,b){var c;this._viewOnly=b;this.inherited(arguments);var d=h.getObject("gxeDocument",
!1,a),e=h.getObject("gxeDocument.documentType.codelists",!1,a);if(d&&e&&(this.codelist=e.makeCodelist(d,this.codelistType)))this.options=this.codelist.codes,null!==this.emptyLabel&&(c=this.emptyLabel,f.some(this.options,function(a){if(a.isEmptyCode)return a.label=c,!0}));this._checkFilter();d=a.value;(!b||a.fixed)&&"undefined"!==typeof d&&null!==d&&this.setInputValue(d)},_filterOptions:function(a){var b=null;if(!this.parentXNode)return a;if(!this.parentXNode.optionsFilter)return this.parentXNode.gxeDocument&&
this.parentXNode.gxeDocument.documentType&&(b=this.parentXNode.gxeDocument.documentType),b.filterOptions&&"function"===typeof b.filterOptions?b.filterOptions(this.parentXNode,this.parentXNode.gxeDocument,a):a;var c=this.parentXNode.optionsFilter.split(",");return f.filter(a,function(a){return f.some(c,function(b){return a.value===b})})},_findDefaultOption:function(a){var b=this._findOption(a,!1);!b&&null!==this.defaultValue&&(b=this._findOption(this.defaultValue,!1));b||f.some(this.options,function(a){if(a.selected)return b=
a,!0});b||0<this.options.length&&(b=this.options[0]);b&&this._resetSelected(b);return b},_findFirstInputWgt:function(a,b){var c;if((c=k("[data-gxe-path\x3d'"+a+"']",b))&&0<c.length)if(c=l.byNode(c[0]))return c.inputWidget;return null},_findOption:function(a,b){var c=null;b&&null===a&&(a="");f.some(this.options,function(b){if(b.value===a)return c=b,!0});return c},getDisplayValue:function(){return this.isViewMode()&&!this._wasValueSet?null:this._displayValue},getInputValue:function(){return this.isViewMode()&&
!this._wasValueSet?null:this._inputValue},isViewMode:function(){var a=h.getObject("parentXNode.gxeDocument.isViewOnly",!1,this);if(a&&!0===a)return!0},_resetSelected:function(a){f.forEach(this.options,function(b){b.selected=!1;b.value===a.value&&(b.selected=!0)})},setInputValue:function(a){this._wasValueSet=!0;"undefined"===typeof a&&(a=null);this._displayValue=null;this._inputValue=a;var b=[];if(a=this._findOption(a,!0))b.push(a),this._displayValue=a.label,this._resetSelected(a);this.selectWidget&&
(this.selectWidget.set("options",b),this.selectWidget.reset());this.emitInteractionOccurred();this.applyViewOnly()}});p("extend-esri")&&h.setObject("dijit.metadata.types.arcgis.form.InputSelectCode",g,q);return g});