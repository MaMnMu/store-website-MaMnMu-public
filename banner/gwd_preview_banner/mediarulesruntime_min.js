(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=new function(){this.l={};this.o="";this.i=this.g=-1;this.m="";this.j=-1;this.h=0},n=null;
function p(){if(!n){n={};for(var e=[],d=document.head.querySelectorAll("style"),f=0;f<d.length;f++){var b=d[f];"gwd-text-style"!=b.id&&"gwd-lightbox-style"!=b.id&&e.push(b)}for(d=0;d<e.length;d++){f=e[d].textContent;b=l;b.l={};b.o=f;b.g=-1;b.i=-1;b.m="";b.j=-1;for(var g=b.h=0;g<f.length;g++){var a=f[g];if("@"==a)b.g=g;else if("{"==a){a=b;var m=g;if(-1!=a.g){var k=(k=a.o.substr(a.g).match(/@\w+/))?k[0]:"";0==a.h&&"@media"==k?(a.i=a.g,k=a.i+6,a.m=a.o.substr(k,m-k).trim()):1==a.h&&-1!=a.i&&"@keyframes"==
k&&(a.j=a.g);a.g=-1}a.h++}else"}"==a&&(a=b,-1!=a.j&&2==a.h?(m=a.j,m=a.o.substr(m,g-m+1),a.l[a.m]||(a.l[a.m]=[]),a.l[a.m].push(m),a.j=-1):-1!=a.i&&1==a.h&&(a.i=-1),a.h--)}f=b.l;for(c in f)b=f[c],n[c]=n[c]||[],g=n[c],g.push.apply(g,b)}}var c=n;e=[];for(var h in c)window.matchMedia(h).matches&&e.push.apply(e,c[h]);if(h=document.getElementById("gwd-active-media-rule-keyframes"))for(c=h.sheet,d=c.cssRules.length-1;0<=d;d--)c.deleteRule(d);if(0<e.length)for(h||(h=document.createElement("style"),h.id="gwd-active-media-rule-keyframes",
document.head.appendChild(h)),c=0;c<e.length;c++)d=h.sheet,d.insertRule(e[c],d.cssRules.length)};(function(){var e=window.navigator.userAgent||"";if(-1!=e.indexOf("Trident")||-1!=e.indexOf("MSIE"))document.addEventListener("DOMContentLoaded",function f(){p();document.removeEventListener("DOMContentLoaded",f)}),window.addEventListener("resize",p)})();}).call(this);
