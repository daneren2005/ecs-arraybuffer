(function(){"use strict";var t={8789:function(t,o,n){var e=n(1424),r=n(2254),i=n(1503);function c(t,o,n){Atomics.or(t.entity.components,o,(0,i.Z)(n))}var s=n(5588);function u(t){const o=t.components.controller,n=t.components.controlled,e=t.components.position,i=t.components.velocity,u=t.components.health;return()=>{const f=100;(0,s.Q)(t,["controller"]).forEach((s=>{if(o.money[s]>0){let a=Atomics.add(t.idCounter,0,1)+1;c(t.components,a,["entity","position","health","velocity","controlled","attack"]),Atomics.store(e.width,a,1e4),Atomics.store(e.height,a,5e3),Atomics.store(u.shields,a,1),Atomics.store(u.maxShields,a,1),Atomics.store(u.timeToRegenerateShields,a,1e6),Atomics.store(i.speed,a,f),Atomics.store(n.owner,a,s),Atomics.store(e.x,a,Atomics.load(e.x,s)),Atomics.store(e.y,a,Atomics.load(e.y,s));let m=(Math.random()>.5?-1:1)*Math.random()*f,l=(Math.random()>.5?-1:1)*Math.random()*f;Atomics.store(i.x,a,m),Atomics.store(i.y,a,l),Atomics.store(e.angle,a,(0,r.Z)(m,l)),Atomics.sub(o.money,s,1),Atomics.store(t.components.entity.init,a,1)}}))}}(0,e.Z)(u)}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,n.x=function(){var t=n.O(void 0,[134,527],(function(){return n(8789)}));return t=n.O(t),t},function(){var t=[];n.O=function(o,e,r,i){if(!e){var c=1/0;for(a=0;a<t.length;a++){e=t[a][0],r=t[a][1],i=t[a][2];for(var s=!0,u=0;u<e.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](e[u])}))?e.splice(u--,1):(s=!1,i<c&&(c=i));if(s){t.splice(a--,1);var f=r();void 0!==f&&(o=f)}}return o}i=i||0;for(var a=t.length;a>0&&t[a-1][2]>i;a--)t[a]=t[a-1];t[a]=[e,r,i]}}(),function(){n.d=function(t,o){for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(o,e){return n.f[e](t,o),o}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{134:"a70b4059",527:"0eb834af"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){n.p="/ecs-arraybuffer/"}(),function(){var t={789:1},o=function(o){var e=o[0],i=o[1],c=o[2];for(var s in i)n.o(i,s)&&(n.m[s]=i[s]);c&&c(n);while(e.length)t[e.pop()]=1;r(o)};n.f.i=function(o,e){t[o]||importScripts(n.p+n.u(o))};var e=self["webpackChunkecs_arraybuffer"]=self["webpackChunkecs_arraybuffer"]||[],r=e.push.bind(e);e.push=o}(),function(){var t=n.x;n.x=function(){return Promise.all([n.e(134),n.e(527)]).then(t)}}();n.x()})();
//# sourceMappingURL=789.dbe55c08.js.map