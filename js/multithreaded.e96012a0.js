"use strict";(self["webpackChunkecs_arraybuffer"]=self["webpackChunkecs_arraybuffer"]||[]).push([[110],{4962:function(t,e,o){o.r(e),o.d(e,{default:function(){return z}});var n=o(3396),i=o(7139),s=o(4870),r=o(3836),l=o.n(r),a=o(238),h=o(2482),c=(o(8675),o(3462),o(6856));const d=1e3;class m extends c.EventEmitter{get x(){return this.world.components.position.x[this.eid]}set x(t){this.world.components.position.x[this.eid]=t}get y(){return this.world.components.position.y[this.eid]}set y(t){this.world.components.position.y[this.eid]=t}get width(){return this.world.components.position.width[this.eid]}set width(t){this.world.components.position.width[this.eid]=t}get height(){return this.world.components.position.height[this.eid]}set height(t){this.world.components.position.height[this.eid]=t}get shields(){return this.world.components.health.shields[this.eid]}set shields(t){this.world.components.health.shields[this.eid]=t}get maxShields(){return this.world.components.health.maxShields[this.eid]}set maxShields(t){this.world.components.health.maxShields[this.eid]=t}get timeToRegenerateShields(){return this.world.components.health.timeToRegenerateShields[this.eid]}set timeToRegenerateShields(t){this.world.components.health.timeToRegenerateShields[this.eid]=t}get timeSinceShieldRegeneration(){return this.world.components.health.timeSinceShieldRegeneration[this.eid]}set timeSinceShieldRegeneration(t){this.world.components.health.timeSinceShieldRegeneration[this.eid]=t}get timeSinceTakenDamage(){return this.world.components.health.timeSinceTakenDamage[this.eid]}set timeSinceTakenDamage(t){this.world.components.health.timeSinceTakenDamage[this.eid]=t}get dead(){return this.world.components.health.shields[this.eid]}set dead(t){this.world.components.health.shields[this.eid]=t}constructor(t){super(),(0,h.Z)(this,"world",void 0),(0,h.Z)(this,"eid",void 0),(0,h.Z)(this,"type","entity"),(0,h.Z)(this,"key","boid"),this.eid=t.getId(),this.world=t,this.shields=1,this.maxShields=1,this.timeToRegenerateShields=1,this.timeSinceShieldRegeneration=0,this.timeSinceTakenDamage=0,this.dead=0}load(t){Object.keys(t).forEach((e=>{this[e]="x"===e||"y"===e?t[e]*d:t[e]}))}}function p(t,e){let o=y(e),n=[],i=Atomics.load(t.idCounter,0);for(let s=0;s<=i;s++)(Atomics.load(t.components.entity.components,s)&o)===o&&0===Atomics.load(t.components.entity.dead,s)&&n.push(s);return n}function g(t,e){let o=y(e),n=[],i=Atomics.load(t.idCounter,0);for(let s=0;s<=i;s++)(Atomics.load(t.components.entity.components,s)&o)===o&&n.push(s);return n}function u(t){switch(t){case"entity":return 1;case"position":return 2;case"velocity":return 4;case"health":return 8;case"controller":return 16;case"controlled":return 32;case"attack":return 64;default:return 0}}function y(t){let e=0;return t.forEach((t=>{e|=u(t)})),e}function w(t,e,o){return(Atomics.load(t.entity.components,e)&u(o))>0}function f(t,e,o){Atomics.or(t.entity.components,e,y(o))}class A extends m{get color(){return this.world.components.controller.color[this.eid]}set color(t){this.world.components.controller.color[this.eid]=t}get money(){return this.world.components.controller.money[this.eid]}set money(t){this.world.components.controller.money[this.eid]=t}constructor(t){super(t),f(this.world.components,this.eid,["entity","position","health","controller"]),this.key="station",this.width=20*d,this.height=20*d,this.shields=2,this.maxShields=2,this.timeToRegenerateShields=5e3*d,Atomics.store(t.components.entity.init,this.eid,1)}}function b(t){const e=t.components.controller,o=t.components.controlled,n=t.components.position,i=t.components.velocity,s=t.components.health;return()=>{const l=100;globalThis.getEntitiesWithComponents(t,["controller"]).forEach((a=>{if(e.money[a]>0){let h=Atomics.add(t.idCounter,0,1)+1;globalThis.addComponents(t.components,h,["entity","position","health","velocity","controlled","attack"]),Atomics.store(n.width,h,1e4),Atomics.store(n.height,h,5e3),Atomics.store(s.shields,h,1),Atomics.store(s.maxShields,h,1),Atomics.store(s.timeToRegenerateShields,h,1e6),Atomics.store(i.speed,h,l),Atomics.store(o.owner,h,a),Atomics.store(n.x,h,Atomics.load(n.x,a)),Atomics.store(n.y,h,Atomics.load(n.y,a));let c=(Math.random()>.5?-1:1)*Math.random()*l,d=(Math.random()>.5?-1:1)*Math.random()*l;Atomics.store(i.x,h,c),Atomics.store(i.y,h,d),Atomics.store(n.angle,h,r(c,d)),Atomics.sub(e.money,a,1),Atomics.store(t.components.entity.init,h,1)}}))};function r(t,e){let o=Math.atan2(e,t);return o*(180/Math.PI)}}function S(t){const e=t.components.position,o=t.components.velocity;return i=>{let s=globalThis.getEntitiesWithComponents(t,["position","velocity"]);s.forEach((s=>{let r=Atomics.load(o.x,s),l=Atomics.load(o.y,s),a=r*i,h=l*i,c=Atomics.add(e.x,s,a)+a,d=Atomics.add(e.y,s,h)+h;(c<0||c>1e3*t.bounds.width)&&(Atomics.store(o.x,s,-r),Atomics.store(e.angle,s,n(-r,l))),(d<0||d>1e3*t.bounds.height)&&(Atomics.store(o.y,s,-l),Atomics.store(e.angle,s,n(r,-l)))}))};function n(t,e){let o=Math.atan2(e,t);return o*(180/Math.PI)}}globalThis.getEntitiesWithComponents=p,globalThis.addComponents=f,globalThis.getEntitiesWithComponents=p;var x=o(7309),T=o(8973);function v(t){const e=t.components.position,o=t.components.velocity,n=t.components.controlled,i=t.components.controller;return globalThis.importScripts&&(globalThis.importScripts("https://cdn.jsdelivr.net/npm/@timohausmann/quadtree-ts/dist/quadtree.umd.full.js"),globalThis.Rectangle=globalThis.Quadtree.Rectangle),()=>{let l=new globalThis.Quadtree({width:1e3*t.bounds.width,height:1e3*t.bounds.height});globalThis.getEntitiesWithComponents(t,["position","health"]).forEach((t=>{l.insert(new globalThis.Rectangle({x:Atomics.load(e.x,t),y:Atomics.load(e.y,t),width:Atomics.load(e.width,t),height:Atomics.load(e.height,t),data:{eid:t}}))}));let a=globalThis.getEntitiesWithComponents(t,["velocity"]);a.forEach((c=>{let d=l.retrieve(new globalThis.Rectangle({x:e.x[c],y:e.y[c],width:e.width[c],height:e.height[c]})).map((t=>t.data.eid)).filter((t=>t!==c)),m=i.color[n.owner[c]],p=d.filter((e=>{if(globalThis.hasComponent(t.components,e,"controlled")){let t=n.owner[e];return i.color[t]!==m}return!!globalThis.hasComponent(t.components,e,"controller")&&i.color[e]!==m})),g=p.filter((t=>s(e.x[t],e.y[t],e.x[c],e.y[c])<Math.max(e.width[c],e.width[t])));g.length&&(r(a,c,g[0]),o.x[c]=-o.x[c],o.y[c]=-o.y[c],e.angle[c]=h(o.x[c],o.y[c]))}))};function s(t,e,o,n){return Math.sqrt((t-o)**2+(e-n)**2)}function r(e,o,n){if(!a(o)||!a(n))return;let i=1;globalThis.hasComponent(t.components,n,"controller")&&(i=e.filter((e=>t.components.controlled.owner[e]===n)).length),l(e,o,1),l(e,n,1);const s=t.components.controlled;if(t.components.entity.dead[n]){let e=s.owner[o];t.components.controller.money[e]+=i}if(t.components.entity.dead[o])if(globalThis.hasComponent(t.components,n,"controlled")){let e=s.owner[n];t.components.controller.money[e]+=1}else globalThis.hasComponent(t.components,n,"controller")&&(t.components.controller.money[n]+=1)}function l(e,o,n){const i=t.components.health;if(i.shields[o]-=n,i.timeSinceTakenDamage[o]=0,i.shields[o]<0&&(t.components.entity.dead[o]=1,globalThis.hasComponent(t.components,o,"controller"))){let n=e.filter((e=>t.components.controlled.owner[e]===o));n.forEach((e=>{t.components.entity.dead[e]=1}))}}function a(e){return Atomics.load(t.components.health.timeSinceTakenDamage,e)>=2e5}function h(t,e){let o=Math.atan2(e,t);return o*(180/Math.PI)}}function E(t){const e=t.components.health;return o=>{globalThis.getEntitiesWithComponents(t,["health"]).forEach((t=>{Atomics.add(e.timeSinceTakenDamage,t,1e3*o),Atomics.load(e.shields,t)<Atomics.load(e.maxShields,t)&&(Atomics.add(e.timeSinceShieldRegeneration,t,1e3*o),Atomics.load(e.timeSinceShieldRegeneration,t)>Atomics.load(e.timeToRegenerateShields,t)&&(Atomics.add(e.shields,t,1),Atomics.store(e.timeSinceShieldRegeneration,t,0)))}))}}function k(t){const e=t.components.position,o=t.components.velocity,n=t.components.attack;return()=>{globalThis.getEntitiesWithComponents(t,["velocity","attack"]).forEach((l=>{let a=n.target[l];if(!a||t.components.entity.dead[a])return;let h=i(l,a),c=r(Atomics.load(o.x,l)+4*h.x,Atomics.load(o.y,l)+4*h.y),d={x:c.x*o.speed[l],y:c.y*o.speed[l]};Atomics.store(o.x,l,d.x),Atomics.store(o.y,l,d.y),Atomics.store(e.angle,l,s(d.x,d.y))}))};function i(t,o){return r(Atomics.load(e.x,o)-Atomics.load(e.x,t),Atomics.load(e.y,o)-Atomics.load(e.y,t))}function s(t,e){let o=Math.atan2(e,t);return o*(180/Math.PI)}function r(t,e){let o=t*t+e*e;return o>0?(o=1/Math.sqrt(o),{x:t*o,y:e*o}):{x:t,y:e}}}function C(t){const e=t.components.position,o=t.components.controlled,n=t.components.controller,i=t.components.attack;return globalThis.importScripts&&(globalThis.importScripts("https://cdn.jsdelivr.net/npm/@timohausmann/quadtree-ts/dist/quadtree.umd.full.js"),globalThis.Rectangle=globalThis.Quadtree.Rectangle),()=>{let l=new globalThis.Quadtree({width:1e3*t.bounds.width,height:1e3*t.bounds.height});globalThis.getEntitiesWithComponents(t,["position","health"]).forEach((t=>{let o={x:Atomics.load(e.x,t),y:Atomics.load(e.y,t),width:Atomics.load(e.width,t),height:Atomics.load(e.height,t)};l.insert(new globalThis.Rectangle({...o,data:{eid:t,...o}}))})),globalThis.getEntitiesWithComponents(t,["velocity","attack"]).forEach((a=>{let h=Atomics.load(n.color,Atomics.load(o.owner,a)),c=Atomics.load(e.x,a),d=Atomics.load(e.y,a),m=Atomics.load(e.width,a),p=Atomics.load(e.height,a),g={x:c-5e4,y:d-5e4,width:m+1e5,height:p+1e5},u=s(l,g,a,h);0===u.length&&(g.x-=1e5,g.y-=1e5,g.width+=2e5,g.height+=2e5,u=s(l,g,a,h)),u.sort(((t,e)=>r(t.x,t.y,c,d)-r(e.x,e.y,c,d)));let y=u[0]??null;if(!y){let o=globalThis.getEntitiesWithComponents(t,["controller"]).filter((e=>Atomics.load(n.color,e)!==h&&!t.components.entity.dead[e]));o.sort(((t,o)=>r(Atomics.load(e.x,t),Atomics.load(e.y,t),c,d)-r(Atomics.load(e.x,o),Atomics.load(e.y,o),c,d))),o.length&&(y={eid:o[0],x:0,y:0,width:0,height:0})}y?Atomics.store(i.target,a,y.eid):Atomics.store(i.target,a,0)}))};function s(e,i,s,r){let l=e.retrieve(new globalThis.Rectangle(i)).map((t=>t.data));return l=l.filter((t=>t.eid!==s)),l.filter((e=>{if(globalThis.hasComponent(t.components,e.eid,"controlled")){let t=Atomics.load(o.owner,e.eid);return Atomics.load(n.color,t)!==r}return!!globalThis.hasComponent(t.components,e.eid,"controller")&&Atomics.load(n.color,e.eid)!==r}))}function r(t,e,o,n){return(t-o)**2+(e-n)**2}}globalThis.getEntitiesWithComponents=p,globalThis.hasComponent=w,globalThis.Quadtree=x.l,globalThis.Rectangle=T.A,globalThis.getEntitiesWithComponents=p,globalThis.getEntitiesWithComponents=p,globalThis.getEntitiesWithComponents=p,globalThis.hasComponent=w,globalThis.Quadtree=x.l,globalThis.Rectangle=T.A;class I extends c.EventEmitter{constructor(){super(),(0,h.Z)(this,"bounds",{width:0,height:0}),(0,h.Z)(this,"idCounter",void 0),(0,h.Z)(this,"components",void 0),(0,h.Z)(this,"systems",[]),(0,h.Z)(this,"systemUpdates",{}),(0,h.Z)(this,"workers",[]),this.idCounter=this.createIntegerArray(4),this.components={entity:{components:this.createIntegerArray(),init:this.createIntegerArray(),dead:this.createIntegerArray()},position:{x:this.createIntegerArray(),y:this.createIntegerArray(),width:this.createIntegerArray(),height:this.createIntegerArray(),angle:this.createIntegerArray()},velocity:{x:this.createIntegerArray(),y:this.createIntegerArray(),speed:this.createIntegerArray()},health:{shields:this.createIntegerArray(),maxShields:this.createIntegerArray(),timeToRegenerateShields:this.createIntegerArray(),timeSinceShieldRegeneration:this.createIntegerArray(),timeSinceTakenDamage:this.createIntegerArray()},controller:{color:this.createIntegerArray(),money:this.createIntegerArray()},controlled:{owner:this.createIntegerArray()},attack:{target:this.createIntegerArray()}},this.addSystemWorker(b),this.addSystemWorker(S),this.addSystemWorker(v),this.addSystemWorker(E),this.addSystemWorker(C),this.addSystemWorker(k)}createIntegerArray(t=65536){let e=new SharedArrayBuffer(t*Int32Array.BYTES_PER_ELEMENT);return new Int32Array(e)}load(t){t.entities.forEach((t=>{let e;switch(t.type){case"station":e=new A(this);break;default:e=new m(this);break}e.load(t)})),t.bounds&&(this.bounds=t.bounds),this.workers.forEach((t=>{t.postMessage({updateWorld:{bounds:this.bounds}})}))}getId(){return Atomics.add(this.idCounter,0,1)+1}update(t){this.systems.forEach((e=>{e(t)}))}addSystem(t,e){this.systems.push((o=>{let n=performance.now();e(o),this.systemUpdates[t].push(performance.now()-n)})),this.systemUpdates[t]=[]}addSystemWorker(t){let e=t.name,o=`\n\n\t\t(\n\t\t\t${(()=>{let t,e=t=>{console.warn("Updating system before sent")};self.onmessage=function(o){if(o.data.world){let n=o.data.functionName;t=o.data.world,e=self[n](t)}else o.data.updateWorld?Object.keys(o.data.updateWorld).forEach((e=>{t[e]=o.data.updateWorld[e]})):o.data.delta&&(e(o.data.delta),self.postMessage({done:!0}))}}).toString()}\n\t\t)()\n\n\t\t${t.toString()}\n\t\t${p.toString()}\n\t\t${u.toString()}\n\t\t${y.toString()}\n\t\t${w.toString()}\n\t\t${f.toString()}`,n=0,i=0,s=new Blob([o],{type:"text/javascript"}),r=new Worker(window.URL.createObjectURL(s));this.systems.push((t=>{n?i+=t:(n=performance.now(),r.postMessage({delta:t+i}),i=0)}));let l={idCounter:this.idCounter,bounds:this.bounds,components:this.components};this.systemUpdates[e]=[],r.postMessage({functionName:e,world:l}),r.onmessage=t=>{t.data.done&&(this.systemUpdates[e].push(performance.now()-n),n=0)},this.workers.push(r)}destroy(){this.workers.forEach((t=>{t.terminate()})),this.workers=[]}}const R=t=>((0,n.dD)("data-v-53532014"),t=t(),(0,n.Cn)(),t),W={class:"home"},M={class:"list"},D={style:{color:"red"}},U=R((()=>(0,n._)("p",null,null,-1))),Z=R((()=>(0,n._)("div",{id:"phaser-container-multithreaded"},null,-1)));var _=(0,n.aZ)({setup(t){let e=new I;const o=(0,s.iH)(0),r=(0,s.iH)(0),h=(0,s.iH)(0),c=(0,s.iH)(0),m=(0,s.iH)(0),u=(0,s.iH)([]),y=(0,s.iH)([]);let f;function A(){p(e,["controller"]).forEach((t=>{e.components.controller.money[t]+=10}))}return(0,n.bv)((()=>{let t=0,n=[];const i=window.innerWidth/3*2,s=window.innerHeight/3*2;let A=!1;const b=new Map;let S;f=new(l().Game)({type:l().AUTO,width:i,height:s,parent:"phaser-container-multithreaded",scene:{preload(){this.load.image("boid","boid.png"),this.load.image("station","station.png"),this.load.image("shield","shield3.png")},create(){S=this.add,e.load((0,a.Z)({stations:10,shipsPerStation:100,width:i,height:s}));let t=p(e,["controller"]);u.value=t.map((t=>{let o=e.components.controller.color[t],n="#"+o.toString(16);return"#ffffff"===n&&(n="#00000"),{eid:t,color:o,displayColor:n,ships:0}})),this.input.keyboard.on("keydown-SPACE",(()=>{A=!A})),Object.keys(e.systemUpdates).forEach((t=>{y.value.push({name:t,min:0,avg:0,max:0})}))},update(i,s){if(A)return;let l=performance.now();e.update(s);let a=e.components.position;g(e,["position","health"]).forEach((t=>{let o=b.get(t);if(e.components.entity.dead[t])o&&(o.destroy(),o.shieldImage.destroy(),b.delete(t));else{if(!o){if(0===Atomics.load(e.components.entity.init,t))return;if(o=S.image(0,0,w(e.components,t,"controller")?"station":"boid"),o.setScale(a.width[t]/o.width/d,a.height[t]/o.height/d),o.shieldImage=S.image(0,0,"shield"),o.shieldImage.setScale(a.width[t]/o.shieldImage.width/d*2,a.height[t]/o.shieldImage.height/d*2),w(e.components,t,"controller"))o.setTint(Atomics.load(e.components.controller.color,t));else if(w(e.components,t,"controlled")){let n=Atomics.load(e.components.controlled.owner,t);o.setTint(Atomics.load(e.components.controller.color,n))}b.set(t,o)}o.x=o.shieldImage.x=e.components.position.x[t]/d,o.y=o.shieldImage.y=e.components.position.y[t]/d,o.angle=o.shieldImage.angle=e.components.position.angle[t],o.shieldImage.visible=e.components.health.shields[t]>0}}));let f=performance.now();if(n.push(f-l),t+=s,t>d){o.value=n.reduce(((t,e)=>Math.min(t,e)),1e6),r.value=n.reduce(((t,e)=>Math.max(t,e)),0),h.value=n.reduce(((t,e)=>t+e),0)/n.length,n=[],t=0;let i=p(e,["controller"]),s=p(e,["controlled"]);c.value=i.length,m.value=s.length,u.value.forEach((t=>{let o=i.find((o=>e.components.controller.color[o]===t.color));void 0!==o?t.ships=s.filter((o=>e.components.controlled.owner[o]===t.eid)).length:t.ships>0&&(t.ships=0)})),y.value=[],Object.keys(e.systemUpdates).forEach((t=>{let o=e.systemUpdates[t];y.value.push({name:t,min:o.reduce(((t,e)=>Math.min(t,e)),1e6),avg:o.reduce(((t,e)=>t+e),0)/o.length,max:o.reduce(((t,e)=>Math.max(t,e)),0)}),e.systemUpdates[t]=[]}))}}}})})),(0,n.Jd)((()=>{f&&(f.destroy(),f=null),e&&e.destroy()})),(t,e)=>((0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("div",M,[(0,n._)("div",D,"mainThread: "+(0,i.zw)(r.value.toFixed(2))+" ("+(0,i.zw)(h.value.toFixed(2))+" avg) ms",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(y),(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.name},(0,i.zw)(t.name)+": "+(0,i.zw)(t.max.toFixed(2))+" ("+(0,i.zw)(t.avg.toFixed(2))+" avg) ms",1)))),128)),U,(0,n._)("div",null,"Entities: "+(0,i.zw)(c.value)+" stations and "+(0,i.zw)(m.value)+" ships",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(u),(t=>((0,n.wg)(),(0,n.iD)("span",{class:"station-list",key:t.color,style:(0,i.j5)({color:t.displayColor})},(0,i.zw)("#"+t.color.toString(16))+": "+(0,i.zw)(t.ships),5)))),128)),(0,n._)("div",null,[(0,n._)("button",{onClick:A},"Add Ships")])]),Z]))}}),j=o(89);const H=(0,j.Z)(_,[["__scopeId","data-v-53532014"]]);var z=H}}]);
//# sourceMappingURL=multithreaded.e96012a0.js.map