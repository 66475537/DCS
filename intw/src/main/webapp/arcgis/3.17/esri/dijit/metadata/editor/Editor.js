// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/templates/Editor.html":'\x3cdiv class\x3d"gxeEditor" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/editor/PrimaryToolbar" data-dojo-attach-point\x3d"primaryToolbar"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeCanvas" data-dojo-attach-point\x3d"canvasNode"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/editor/ValidationPane" data-dojo-attach-point\x3d"validationPane" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/editor/ViewDocumentPane" data-dojo-attach-point\x3d"viewDocumentPane" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/editor/XmlPane" data-dojo-attach-point\x3d"xmlPane" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/editor/EditDocumentPane" data-dojo-attach-point\x3d"editDocumentPane" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/Editor","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/on dojo/keys dojo/_base/event dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has dijit/Viewport ../context/GxeAdaptor ../context/GxeContext ../base/etc/viewOnlyUtil ../base/XDocument ../base/xml/XmlImporter ../types/arcgis/base/arcgisStyles ./EditorResizeMixin ../base/Templated dojo/text!./templates/Editor.html ../../../kernel ./PrimaryToolbar ./ValidationPane ./EditDocumentPane ./ViewDocumentPane ./XmlPane ../../../dijit/Geocoder ../form/Attribute ../form/Element ../form/ElementChoice ../form/HiddenAttribute ../form/HiddenElement ../form/OpenElement ../form/InputDate ../form/InputDelimitedTextArea ../form/InputNumber ../form/InputSelectMany ../form/InputSelectOne ../form/InputText ../form/InputTextArea ../form/IsoTopicCategoryOptions ../form/Option ../form/Options ../form/Section ../form/Tabs ../form/tools/ClickableTool ../form/tools/ClickableValueTool ../types/arcgis/form/InputCheckBox ../types/arcgis/form/InputDate ../types/arcgis/form/InputHtmlArea ../types/arcgis/form/InputSelectBoolean ../types/arcgis/form/InputSelectCode ../types/arcgis/form/InputSysTime".split(" "),
function(c,f,t,l,n,u,v,w,g,x,y,z,A,B,C,D,E,F,G,H,I){c=c([G,F],{dialogBroker:null,gxeAdaptor:null,gxeContext:null,templateString:H,postCreate:function(){this.inherited(arguments);this.gxeAdaptor||(this.gxeAdaptor=new z);this.gxeContext||(this.gxeContext=new A);this.primaryToolbar.editor=this;this.primaryToolbar.lastSavedXml=this.gxeAdaptor.getOriginalXml();this.validationPane.editor=this;this.xmlPane.setXml(this.gxeAdaptor.getOriginalXml(),"metadata");this.primaryToolbar.initialize();this.dialogBroker||
this.own(y.on("resize",f.hitch(this,"resize")));this.isLeftToRight()||v.add(this.domNode,"gxeRtl");this.own(l(document,"keydown, keypress",f.hitch(this,function(a){a.keyCode===n.BACKSPACE&&void 0===a.target.size&&void 0===a.target.rows&&u.stop(a)})))},destroy:function(){try{this.viewDocumentPane.gxeDocument&&this.viewDocumentPane.gxeDocument.rootDescriptor&&this.viewDocumentPane.gxeDocument.rootDescriptor.destroyRecursive(!1)}catch(a){console.error(a)}try{this.editDocumentPane.gxeDocument&&this.editDocumentPane.gxeDocument.rootDescriptor&&
this.editDocumentPane.gxeDocument.rootDescriptor.destroyRecursive(!1)}catch(e){console.error(e)}this.inherited(arguments)},getEditDocument:function(){return this.editDocumentPane.gxeDocument},getViewDocument:function(){return this.viewDocumentPane.gxeDocument},initializeView:function(){this.primaryToolbar.initializeView()},_loadDocumentPane:function(a,e,d,c,f){var b=null,h=!1,p=!1,m=new t;a===this.editDocumentPane?this.validationPane.clearMessages():h=!0;try{var q,k=a.gxeDocument,r=w.create("div",
{},a.rootContainer),b=new C({gxeContext:this.gxeContext,isViewOnly:h,_editor:this});b.initialize(e,r,d);d&&(q=new D,q.importDocument(b,d,c));k&&(g.set(k.rootDescriptor.domNode,"display","none"),k.rootDescriptor&&k.rootDescriptor.destroyRecursive(!1));p=!0;a.gxeDocument=b;g.set(r,"display","");g.set(a.domNode,"display","");h&&B.applyViewOnly(b);try{h?this.gxeAdaptor.afterViewDocumentLoad(b,f):this.gxeAdaptor.afterEditDocumentLoad(b,d,c,f)}catch(l){console.error(l)}m.resolve(b);this.primaryToolbar.updateUI()}catch(s){try{b&&
(b.rootDescriptor&&!p)&&(g.set(b.rootDescriptor.domNode,"display","none"),b.rootDescriptor.destroyRecursive(!1))}catch(n){}console.error("Error constructing document");console.error(s);m.reject(s)}return m},loadEditor:function(a,e,d,c){this.editDocumentPane.hideMessage();a&&(e&&"arcgis"===a.key)&&E.preLoad(this.gxeContext,e);return this._loadDocumentPane(this.editDocumentPane,a,e,d,c)},loadView:function(a,c,d){return this._loadDocumentPane(this.viewDocumentPane,a,c,!1,d)}});x("extend-esri")&&f.setObject("dijit.metadata.editor.Editor",
c,I);return c});