// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/ObliqueViewer/OVCircularScale",["dojo/_base/declare","dojox/dgauges/CircularScale","dojox/gfx"],function(s,t,p){var u=Math.PI/180;return s([t],{_layoutLabel:function(r,d,f,g,m,e,h){var c=this._getFont();d=p._base._getTextBox(d,{font:p.makeFontString(p.makeParameters(p.defaultFont,c))}).w;c=p.normalizedLength(c.size);this.azimuthAngle=this.azimuthAngle||0;var q=this.azimuthAngle*u,k=f+Math.cos(e)*m-d/2,l=g-Math.sin(e)*m-c/2,b,n=[],a=b=k;b=-Math.tan(e)*b+g+Math.tan(e)*f;b>=l&&b<=
l+c&&n.push({x:a,y:b});a=b=k+d;b=-Math.tan(e)*b+g+Math.tan(e)*f;b>=l&&b<=l+c&&n.push({x:a,y:b});b=l;a=-1/Math.tan(e)*b+f+1/Math.tan(e)*g;a>=k&&a<=k+d&&n.push({x:a,y:b});b=l+c;a=-1/Math.tan(e)*b+f+1/Math.tan(e)*g;a>=k&&a<=k+d&&n.push({x:a,y:b});if("inside"==h)for(h=0;h<n.length;h++){if(a=n[h],a=this._distance(a.x,a.y,f,g)-m,0<=a){k=f+Math.cos(e)*(m-a)-d/2;l=g-Math.sin(e)*(m-a)-c/2;break}}else for(h=0;h<n.length;h++)if(a=n[h],a=this._distance(a.x,a.y,f,g)-m,0>=a){k=f+Math.cos(e)*(m-a)-d/2;l=g-Math.sin(e)*
(m-a)-c/2;break}315<this.azimuthAngle&&360>=this.azimuthAngle||0<=this.azimuthAngle&&45>=this.azimuthAngle?d/=2:45<this.azimuthAngle&&135>=this.azimuthAngle?(d=0,c/=2):135<this.azimuthAngle&&225>=this.azimuthAngle?(d/=2,c=0):c/=2;r&&r.setTransform([{dx:k+d,dy:l+c,xx:Math.cos(q),xy:-Math.sin(q),yx:Math.sin(q),yy:Math.cos(q)}])}})});