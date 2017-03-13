// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/maths",["require","exports","../languageUtils","dojo/number"],function(l,h,d,k){function g(d,e,b){if("undefined"===typeof b||0===+b)return Math[d](e);e=+e;b=+b;if(isNaN(e)||!("number"===typeof b&&0===b%1))return NaN;e=e.toString().split("e");e=Math[d](+(e[0]+"e"+(e[1]?+e[1]-b:-b)));e=e.toString().split("e");return+(e[0]+"e"+(e[1]?+e[1]+b:b))}h.registerFunctions=function(f,e){f.number=function(b,c){return e(b,c,function(m,f,a){return e(b,c,function(a,b,c){d.pcCheck(c,
1,2);a=c[0];return d.isNumber(a)?a:null===a?0:d.isDate(a)||d.isBoolean(a)||""===a||void 0===a?Number(a):d.isString(a)?void 0!==c[1]?(c=d.multiReplace(c[1],"\u2030",""),c=d.multiReplace(c,"\u00a4",""),k.parse(a,{pattern:c})):Number(a.trim()):Number(a)})})};f.abs=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.abs(d.toNumber(a[0]))})};f.acos=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.acos(d.toNumber(a[0]))})};f.asin=function(b,c){return e(b,c,function(b,
c,a){d.pcCheck(a,1,1);return Math.asin(d.toNumber(a[0]))})};f.atan=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.atan(d.toNumber(a[0]))})};f.atan2=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,2,2);return Math.atan2(d.toNumber(a[0]),d.toNumber(a[1]))})};f.ceil=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),isNaN(b)&&(b=0),g("ceil",d.toNumber(a[0]),-1*b)):Math.ceil(d.toNumber(a[0]))})};f.round=function(b,c){return e(b,
c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),isNaN(b)&&(b=0),g("round",d.toNumber(a[0]),-1*b)):Math.round(d.toNumber(a[0]))})};f.floor=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,2);return 2===a.length?(b=d.toNumber(a[1]),isNaN(b)&&(b=0),g("floor",d.toNumber(a[0]),-1*b)):Math.floor(d.toNumber(a[0]))})};f.cos=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.cos(d.toNumber(a[0]))})};f.isnan=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,
1,1);return"number"===typeof a[0]&&isNaN(a[0])})};f.exp=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.exp(d.toNumber(a[0]))})};f.log=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.log(d.toNumber(a[0]))})};f.pow=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,2,2);return Math.pow(d.toNumber(a[0]),d.toNumber(a[1]))})};f.random=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,0,0);return Math.random()})};f.sin=function(b,c){return e(b,c,
function(b,c,a){d.pcCheck(a,1,1);return Math.sin(d.toNumber(a[0]))})};f.sqrt=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.sqrt(d.toNumber(a[0]))})};f.tan=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return Math.tan(d.toNumber(a[0]))})};f.defaultvalue=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,2,2);return null===a[0]||""===a[0]||void 0===a[0]?a[1]:a[0]})};f.isempty=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return null===a[0]||
""===a[0]||void 0===a[0]?!0:!1})};f["boolean"]=function(b,c){return e(b,c,function(b,c,a){d.pcCheck(a,1,1);return d.toBoolean(a[0])})}}});