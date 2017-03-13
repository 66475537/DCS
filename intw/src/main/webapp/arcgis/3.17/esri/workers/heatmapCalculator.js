// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
(function(g,v){"function"===typeof define&&define.amd?define("esri/workers/heatmapCalculator",[],v):g.HeatmapCalculator=v();if(g.importScripts&&"function"===typeof g.importScripts){var u;g.addEventListener("message",function(r){var a=r.data,e=a.action;r=a.msgId;e&&r&&("initialize"==e?(u=new g.HeatmapCalculator(a),postMessage({msgId:r})):"calculate"==e&&(a=u.calculateImageData(a),postMessage({msgId:r,imageData:a},a)))},!1)}})(this,function(){function g(a){a=a||{};this.radius=a.blurRadius||10;this.maxVal=
a.maxPixelIntensity;this.minVal=a.minPixelIntensity;this.field=a.field;this.fieldOffset=a.fieldOffset;this.width=a.width;this.height=a.height;this.gradient=a.gradient;this.stats=null}function v(a,e){for(var k=Array(a),b=0;b<a;b++)for(var c=k[b]=Array(e),d=0;d<e;d++)c[d]=0;return k}function u(a,e){return a-e}var r=window.ArrayBuffer?!0:!1;g.prototype.calculateImageData=function(a){var e=this.radius=a.blurRadius||this.blurRadius;this.maxVal=null!=a.maxPixelIntensity?a.maxPixelIntensity:this.maxPixelIntensity;
this.minVal=null!=a.minPixelIntensity?a.minPixelIntensity:this.minPixelIntensity;var k=this.field="field"in a?a.field:this.field,b=this.fieldOffset="fieldOffset"in a?a.fieldOffset:this.fieldOffset,c=a.screenPoints,d=a.gradient;if(d)this.gradient=d;else if(this.gradient)d=this.gradient;else return!1;var h=a.features,f=a.mapinfo;c||(h&&f?c=this.screenPoints=this._calculateScreenPoints(h,f):!f&&this.screenPoints&&(h=!0,a.width&&a.width!=this.width&&(h=!1,this.width=a.width),a.height&&a.height!=this.height&&
(h=!1,this.height=a.height),h?c=this.screenPoints:this.screenPoints=null));if(!c)return!1;h=f.width||a.width||this.width;a=f.height||a.height||this.height;e=this._calculateIntensityMatrix(c,h,a,e,k,b);this._lastMatrix=e.matrix;this._maxIntVal=e.max;return this._createImageData(h,a,this._lastMatrix,d)};g.prototype._calculateScreenPoints=function(a,e){var k=e.resolution,b=e.width,c=e.height,d=e.extent,h=[];if(d)k||(k=c?Math.abs(d[3]-d[1])/c:Math.abs(d[2]-d[0])/b);else return!1;b=0;for(c=a.length;b<
c;b++){var f=a[b];h[b]={x:Math.round((f.geometry.x-d[0])/k),y:Math.round((d[3]-f.geometry.y)/k),attributes:f.attributes}}return h};g.prototype._calculateIntensityMatrix=function(a,e,k,b,c,d){var h=v(k,e),f=Math.round(4.5*b),l=b*b,q=[],m=2*f+1,n=-1,p=1,g=-Infinity,t;d=d||0;for(c=function(a){return"function"==typeof a?a:a?"abs"==d?function(b){return-1*+b.attributes[a]}:function(b){return+b.attributes[a]+d}:function(){return 1}}(c);++n<m;)q[n]=Math.exp(-Math.pow(n-f,2)/(2*l))/Math.sqrt(2*Math.PI)*(b/
2);for(n=0;n<a.length;n++){t=a[n];b=t.x-f;var l=t.y-f,m=b,r=l,p=+c(t);if(!(isNaN(p)||null===p))for(var u=Math.min(t.y+f,k-1),w=Math.min(t.x+f,e-1);l<=u;){for(var x=q[l-r];b<=w;)-1<b&&-1<l&&(t=h[l][b]+=x*q[b-m]*p,t>g&&(g=t)),b++;l++;b=m}}return{matrix:h,max:g}};g.prototype._createImageData=function(a,e,k,b){if(!r)return this._createPixelData(a,e,k,b);var c=new Uint32Array(a*e);b=b.buffer?new Uint32Array(b.buffer):new Uint32Array((new Uint8Array(b)).buffer);for(var d=this.minVal,h=b.length/(this.maxVal-
d),f=0;f<e;f++)for(var l=k[f],g=0;g<a;g++){var m=Math.floor((l[g]-d)*h);c[f*a+g]=0>m?b[0]:m<b.length?b[m]:b[b.length-1]}return c};g.prototype._createPixelData=function(a,e,k,b){for(var c=Array(4*a*e),d=this.minVal,h=b.length/4/(this.maxVal-d),f=3,l=0;l<e;l++)for(var g=k[l],m=0;m<a;m++){var n=4*(l*a+m)+3,p=4*Math.floor((g[m]-d)*h)+3;3>p?p=3:p>b.length-1&&(p=b.length-1);for(f=4;f--;)c[n-f]=b[p-f]}return c};g.calculateStats=function(a,e){if(!a)return!1;for(var k=a.length,b=0,c=0,d=0,h=0,f=Infinity,g=
-Infinity,q,m,n,p,s;k--;){n=a[k];for(q=n.length;q--;)if(s=n[q],!e||e(s))p||(p=s),m=s-p,h+=s,b+=m,c+=m*m,s<f&&(f=s),s>g&&(g=s),d++}return 0<d?{mean:h/d,stdDev:Math.sqrt((c-b*b/d)/d),min:f,max:g,mid:(g-f)/2}:{mean:0,stdDev:0,min:0,max:0,mid:0}};g.getBinnedValues=function(a){function e(){console.log("not enough information to determine bins for HeatmapCalculator.getBinnedValues")}function g(a,b,c){for(var d=[];a<b;a+=c)d.push(a);return d}a=a||{};var b=a.stats,c=a.min,d=a.max,h=a.bins,f=a.count,l=a.size;
a=a.values;if(!a)return console.log("values are required for HeatmapCalculator.getBinnedValues function"),!1;b&&(null!=b.max&&null!=b.min)&&(c=b.min,d=b.max);if(!h)if(l){null==c&&(c=0);if(null==d){if(null==f)return e(),!1;d=c+f*l}h=g(c,d,l)}else if(f){b&&null!=b.min&&null!=b.max?(c=b.min,d=b.max):null!=d&&(0<d&&null==c)&&(c=0);if(null==c||null==d)return e(),!1;h=g(c,d,(d-c)/f)}for(var f=h.length,b=v(f,0),c=a.length,q,m,n;c--;){l=a[c];for(d=l.length;d--;){q=l[d];for(n=1;n<f&&!(m=h[n],q<m);n++);b[n-
1].push(q)}}return b.map(function(a){return a.sort(u)})};g.getHistogramData=function(a){a=a||{};var e=a.binnedData,k=a.stats,b=a.byStdDev,c=a.matrix;a=a.binOptions||{};if(!e)if(c){if(a.values=c,b&&(k||(k=g.calculateStats(c)),a.size=k.stdDev),a.stats=k,e=g.getBinnedValues(a),!e)return!1}else return console.log("no data provided to HeatmapCalculator.getHistogramData"),!1;var d;if(a.bins)a=a.bins;else{a=[];for(b=0;b<e.length;b++)c=e[b],a.push(c[0])}d=[];for(b=0;b<a.length-1;b++)c=a[b],d[b]={range:[c,
a[b+1]],count:c.length};k?e=k.max:(c=e[b],e=c[c.length-1]);c=a[b];d[b]={range:[c,e],count:c.length};return d};return g});