// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/SearchTextBox","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/on dojo/keys dijit/Tooltip dijit/form/TextBox dijit/_WidgetBase dijit/_TemplatedMixin".split(" "),function(d,b,e,c,f,g,h,k,l){return d([k,l],{templateString:"\x3cdiv class\x3d'searchTextBox' data-dojo-attach-point\x3d'mainContainer'\x3e\x3c/div\x3e",prompt:"",textBox:null,searchButton:null,postCreate:function(){this.inherited(arguments);this.searchButton=e.create("div",{"class":"searchTextBoxButton"},
this.mainContainer);this.textBox=new h({"class":"searchTextBoxInput",placeHolder:this.prompt});this.textBox.placeAt(this.mainContainer);this.own(c(this.searchButton,"click",b.hitch(this,this._onSearch)));this.own(c(this.textBox.textbox,"keyup",b.hitch(this,function(a){a.keyCode==f.ENTER&&this._onSearch()})))},_setPromptAttr:function(a){this.prompt=a;this.textBox&&this.textBox.set("placeHolder",a)},_getValueAttr:function(){return this.textBox&&this.textBox.get("value")},_setValueAttr:function(a){this.textBox&&
this.textBox.set("value",a)},showTooltip:function(a){g.show(a,this.textBox.textbox,["above","below"])},_onSearch:function(){this.get("value")?this.emit("Search"):this.textBox&&this.textBox.focus()},onSearch:function(){}})});