(function(){"use strict";var t={809:function(t,e,n){var o=n(1424),i=n(2254);function s(t,e,n,o){return Math.sqrt((t-n)**2+(e-o)**2)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class h{constructor(t,e=0){r(this,"bounds",void 0),r(this,"maxObjects",void 0),r(this,"maxLevels",void 0),r(this,"level",void 0),r(this,"objects",void 0),r(this,"nodes",void 0),this.bounds={x:t.x||0,y:t.y||0,width:t.width,height:t.height},this.maxObjects="number"===typeof t.maxObjects?t.maxObjects:10,this.maxLevels="number"===typeof t.maxLevels?t.maxLevels:4,this.level=e,this.objects=[],this.nodes=[]}getIndex(t){return t.qtIndex(this.bounds)}split(){const t=this.level+1,e=this.bounds.width/2,n=this.bounds.height/2,o=this.bounds.x,i=this.bounds.y,s=[{x:o+e,y:i},{x:o,y:i},{x:o,y:i+n},{x:o+e,y:i+n}];for(let r=0;r<4;r++)this.nodes[r]=new h({x:s[r].x,y:s[r].y,width:e,height:n,maxObjects:this.maxObjects,maxLevels:this.maxLevels},t)}insert(t){if(this.nodes.length){const e=this.getIndex(t);for(let n=0;n<e.length;n++)this.nodes[e[n]].insert(t)}else if(this.objects.push(t),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let t=0;t<this.objects.length;t++){const e=this.getIndex(this.objects[t]);for(let n=0;n<e.length;n++)this.nodes[e[n]].insert(this.objects[t])}this.objects=[]}}retrieve(t){const e=this.getIndex(t);let n=this.objects;if(this.nodes.length)for(let o=0;o<e.length;o++)n=n.concat(this.nodes[e[o]].retrieve(t));return n=n.filter((function(t,e){return n.indexOf(t)>=e})),n}clear(){this.objects=[];for(let t=0;t<this.nodes.length;t++)this.nodes.length&&this.nodes[t].clear();this.nodes=[]}}class c{constructor(t){r(this,"x",void 0),r(this,"y",void 0),r(this,"width",void 0),r(this,"height",void 0),r(this,"data",void 0),this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this.data=t.data}qtIndex(t){const e=[],n=t.x+t.width/2,o=t.y+t.height/2,i=this.y<o,s=this.x<n,r=this.x+this.width>n,h=this.y+this.height>o;return i&&r&&e.push(0),s&&i&&e.push(1),s&&h&&e.push(2),r&&h&&e.push(3),e}}var l=n(5588),d=n(1392);function u(t,e,n){return(Atomics.load(t.entity.components,e)&(0,d.Z)(n))>0}function a(t){const e=t.components.position,n=t.components.velocity,o=t.components.controlled,r=t.components.controller;return()=>{let a=new h({width:1e3*t.bounds.width,height:1e3*t.bounds.height});(0,l.Q)(t,["position","health"]).forEach((t=>{a.insert(new c({x:Atomics.load(e.x,t),y:Atomics.load(e.y,t),width:Atomics.load(e.width,t),height:Atomics.load(e.height,t),data:{eid:t}}))}));let f=(0,l.Q)(t,["velocity"]);f.forEach((h=>{let l=a.retrieve(new c({x:e.x[h],y:e.y[h],width:e.width[h],height:e.height[h]})).map((t=>t.data.eid)).filter((t=>t!==h)),m=r.color[o.owner[h]],p=l.filter((e=>{if(u(t.components,e,"controlled")){let t=o.owner[e];return r.color[t]!==m}return!!u(t.components,e,"controller")&&r.color[e]!==m})),x=p.filter((t=>s(e.x[t],e.y[t],e.x[h],e.y[h])<Math.max(e.width[h],e.width[t])));x.length&&(d(f,h,x[0]),n.x[h]=-n.x[h],n.y[h]=-n.y[h],e.angle[h]=(0,i.Z)(n.x[h],n.y[h]))}))};function d(e,n,o){if(!f(n)||!f(o))return;let i=1;u(t.components,o,"controller")&&(i=e.filter((e=>t.components.controlled.owner[e]===o)).length),a(e,n,1),a(e,o,1);const s=t.components.controlled;if(t.components.entity.dead[o]){let e=s.owner[n];t.components.controller.money[e]+=i}if(t.components.entity.dead[n])if(u(t.components,o,"controlled")){let e=s.owner[o];t.components.controller.money[e]+=1}else u(t.components,o,"controller")&&(t.components.controller.money[o]+=1)}function a(e,n,o){const i=t.components.health;if(i.shields[n]-=o,i.timeSinceTakenDamage[n]=0,i.shields[n]<0&&(t.components.entity.dead[n]=1,u(t.components,n,"controller"))){let o=e.filter((e=>t.components.controlled.owner[e]===n));o.forEach((e=>{t.components.entity.dead[e]=1}))}}function f(e){return Atomics.load(t.components.health.timeSinceTakenDamage,e)>=2e5}}(0,o.Z)(a)}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,n.x=function(){var t=n.O(void 0,[134,527],(function(){return n(809)}));return t=n.O(t),t},function(){var t=[];n.O=function(e,o,i,s){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],s=t[d][2];for(var h=!0,c=0;c<o.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(h=!1,s<r&&(r=s));if(h){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,i,s]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{134:"a70b4059",527:"0eb834af"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/ecs-arraybuffer/"}(),function(){var t={809:1},e=function(e){var o=e[0],s=e[1],r=e[2];for(var h in s)n.o(s,h)&&(n.m[h]=s[h]);r&&r(n);while(o.length)t[o.pop()]=1;i(e)};n.f.i=function(e,o){t[e]||importScripts(n.p+n.u(e))};var o=self["webpackChunkecs_arraybuffer"]=self["webpackChunkecs_arraybuffer"]||[],i=o.push.bind(o);o.push=e}(),function(){var t=n.x;n.x=function(){return Promise.all([n.e(134),n.e(527)]).then(t)}}();n.x()})();
//# sourceMappingURL=809.c6250b21.js.map