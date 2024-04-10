(function(){"use strict";function Re(t){let r,a=n=>{console.warn("Updating system before sent")};self.onmessage=function(n){n.data.world?(r=n.data.world,a=t(r)):n.data.updateWorld?Object.keys(n.data.updateWorld).forEach(e=>{r[e]=n.data.updateWorld[e]}):n.data.delta&&(a(n.data.delta),self.postMessage({done:!0}))}}function Pa(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ge={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},at=Ge;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Le=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},Se=Le;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ta=Se,ba=function(){var t,r,a,n,e,i,v=arguments[0]||{},s=1,h=arguments.length,u=!1;for(typeof v=="boolean"&&(u=v,v=arguments[1]||{},s=2),h===s&&(v=this,--s);s<h;s++)if((t=arguments[s])!=null)for(r in t)a=v[r],n=t[r],v!==n&&(u&&n&&(Ta(n)||(e=Array.isArray(n)))?(e?(e=!1,i=a&&Array.isArray(a)?a:[]):i=a&&Ta(a)?a:{},v[r]=ba(u,i,n)):n!==void 0&&(v[r]=n));return v},Oa=ba;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Fe(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function Ee(t,r,a){var n=a?t[r]:Object.getOwnPropertyDescriptor(t,r);return!a&&n.value&&typeof n.value=="object"&&(n=n.value),n&&Fe(n)?(typeof n.enumerable>"u"&&(n.enumerable=!0),typeof n.configurable>"u"&&(n.configurable=!0),n):!1}function Ae(t,r){var a=Object.getOwnPropertyDescriptor(t,r);return a?(a.value&&typeof a.value=="object"&&(a=a.value),a.configurable===!1):!1}function zr(t,r,a,n){for(var e in r)if(r.hasOwnProperty(e)){var i=Ee(r,e,a);if(i!==!1){var v=n||t;if(Ae(v.prototype,e)){if(Tt.ignoreFinals)continue;throw new Error("cannot override final property '"+e+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,e,i)}else t.prototype[e]=r[e]}}function pa(t,r){if(r){Array.isArray(r)||(r=[r]);for(var a=0;a<r.length;a++)zr(t,r[a].prototype||r[a])}}function Tt(t){t||(t={});var r,a;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;r=function(){n.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,a=t.Extends,delete t.Extends):r.prototype.constructor=r;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),pa(r,e),zr(r,t,!0,a),r}Tt.extend=zr,Tt.mixin=pa,Tt.ignoreFinals=!1;var D=Tt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ne=function(t,r,a){if(t.radius>0&&r>=t.left&&r<=t.right&&a>=t.top&&a<=t.bottom){var n=(t.x-r)*(t.x-r),e=(t.y-a)*(t.y-a);return n+e<=t.radius*t.radius}else return!1},bt=Ne;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ve=D,Ye=at,Xe=new Ve({initialize:function(r,a){r===void 0&&(r=0),a===void 0&&(a=r),this.type=Ye.POINT,this.x=r,this.y=a},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),p=Xe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var De=p,qe=function(t,r,a){return a===void 0&&(a=new De),a.x=t.x+t.radius*Math.cos(r),a.y=t.y+t.radius*Math.sin(r),a},Pr=qe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ke=function(t,r,a){return Math.max(r,Math.min(a,t))},Tr=ke;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ze=Tr,Be=function(t,r,a){return t=Ze(t,0,1),(a-r)*t+r},Ot=Be;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ue={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},W=Ue;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var We=Pr,Qe=Ot,He=W,je=p,Ke=function(t,r,a){a===void 0&&(a=new je);var n=Qe(r,0,He.PI2);return We(t,n,a)},Ia=Ke;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Je=function(t){return 2*(Math.PI*t.radius)},Ra=Je;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ti=Ra,ri=Pr,ai=Ot,ni=W,ei=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ti(t)/a);for(var e=0;e<r;e++){var i=ai(e/r,0,ni.PI2);n.push(ri(t,i))}return n},Ga=ei;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ii=p,vi=function(t,r){r===void 0&&(r=new ii);var a=2*Math.PI*Math.random(),n=Math.random()+Math.random(),e=n>1?2-n:n,i=e*Math.cos(a),v=e*Math.sin(a);return r.x=t.x+i*t.radius,r.y=t.y+v*t.radius,r},La=vi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var si=D,hi=bt,ui=Ia,fi=Ga,oi=at,xi=La,yi=new si({initialize:function(r,a,n){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=oi.CIRCLE,this.x=r,this.y=a,this._radius=n,this._diameter=n*2},contains:function(t,r){return hi(this,t,r)},getPoint:function(t,r){return ui(this,t,r)},getPoints:function(t,r,a){return fi(this,t,r,a)},getRandomPoint:function(t){return xi(this,t)},setTo:function(t,r,a){return this.x=t,this.y=r,this._radius=a,this._diameter=a*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),br=yi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ci=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},di=ci;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var li=br,Mi=function(t){return new li(t.x,t.y,t.radius)},wi=Mi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mi=bt,$i=function(t,r){return mi(t,r.x,r.y)},_i=$i;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kt=bt,gi=function(t,r){return kt(t,r.x,r.y)&&kt(t,r.right,r.y)&&kt(t,r.x,r.bottom)&&kt(t,r.right,r.bottom)},Ci=gi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zi=function(t,r){return r.setTo(t.x,t.y,t.radius)},Pi=zi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ti=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},bi=Ti;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oi=function(t,r,a){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=a&&t.y+t.height>=a},Zt=Oi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pi=function(t){return 2*(t.width+t.height)},Bt=pi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ii=Bt,Ri=p,Gi=function(t,r,a){if(a===void 0&&(a=new Ri),r<=0||r>=1)return a.x=t.x,a.y=t.y,a;var n=Ii(t)*r;return r>.5?(n-=t.width+t.height,n<=t.width?(a.x=t.right-n,a.y=t.bottom):(a.x=t.x,a.y=t.bottom-(n-t.width))):n<=t.width?(a.x=t.x+n,a.y=t.y):(a.x=t.right,a.y=t.y+(n-t.width)),a},Or=Gi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Li=Or,Si=Bt,Fi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Si(t)/a);for(var e=0;e<r;e++){var i=e/r;n.push(Li(t,i))}return n},Sa=Fi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ei=p,Ai=function(t,r,a){return a===void 0&&(a=new Ei),a.x=t.x1+(t.x2-t.x1)*r,a.y=t.y1+(t.y2-t.y1)*r,a},Fa=Ai;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ni=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},nt=Ni;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vi=nt,Yi=p,Xi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Vi(t)/a);for(var e=t.x1,i=t.y1,v=t.x2,s=t.y2,h=0;h<r;h++){var u=h/r,f=e+(v-e)*u,o=i+(s-i)*u;n.push(new Yi(f,o))}return n},Ea=Xi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Di=p,qi=function(t,r){r===void 0&&(r=new Di);var a=Math.random();return r.x=t.x1+a*(t.x2-t.x1),r.y=t.y1+a*(t.y2-t.y1),r},Aa=qi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ki=function(t,r,a){return a===void 0&&(a=1e-4),Math.abs(t-r)<a},Na=ki;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zi=D,Va=Na,Q=new Zi({initialize:function(r,a){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(a===void 0&&(a=r),this.x=r||0,this.y=a||0)},clone:function(){return new Q(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return Va(this.x,t.x,r)&&Va(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y;return Math.sqrt(r*r+a*a)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y;return r*r+a*a},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,a=t*t+r*r;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this},transformMat3:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[3]*a+n[6],this.y=n[1]*r+n[4]*a+n[7],this},transformMat4:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[4]*a+n[12],this.y=n[1]*r+n[5]*a+n[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),a=Math.sin(t);return this.set(r*this.x-a*this.y,a*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});Q.ZERO=new Q,Q.RIGHT=new Q(1,0),Q.LEFT=new Q(-1,0),Q.UP=new Q(0,-1),Q.DOWN=new Q(0,1),Q.ONE=new Q(1,1);var xt=Q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bi=D,Ui=Fa,Wi=Ea,Qi=at,Hi=Aa,Ya=xt,ji=new Bi({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Qi.LINE,this.x1=r,this.y1=a,this.x2=n,this.y2=e},getPoint:function(t,r){return Ui(this,t,r)},getPoints:function(t,r,a){return Wi(this,t,r,a)},getRandomPoint:function(t){return Hi(this,t)},setTo:function(t,r,a,n){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Ya),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Ya),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),et=ji;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ki=p,Ji=function(t,r){return r===void 0&&(r=new Ki),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},Xa=Ji;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tv=D,rv=Zt,av=Or,nv=Sa,ev=at,Ut=et,iv=Xa,vv=new tv({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=ev.RECTANGLE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return rv(this,t,r)},getPoint:function(t,r){return av(this,t,r)},getPoints:function(t,r,a){return nv(this,t,r,a)},getRandomPoint:function(t){return iv(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),K=vv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sv=K,hv=function(t,r){return r===void 0&&(r=new sv),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},uv=hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fv=function(t,r,a){return t.x+=r,t.y+=a,t},ov=fv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xv=function(t,r){return t.x+=r.x,t.y+=r.y,t},yv=xv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q=br;q.Area=di,q.Circumference=Ra,q.CircumferencePoint=Pr,q.Clone=wi,q.Contains=bt,q.ContainsPoint=_i,q.ContainsRect=Ci,q.CopyFrom=Pi,q.Equals=bi,q.GetBounds=uv,q.GetPoint=Ia,q.GetPoints=Ga,q.Offset=ov,q.OffsetPoint=yv,q.Random=La;var cv=q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dv=function(t,r,a){if(t.width<=0||t.height<=0)return!1;var n=(r-t.x)/t.width,e=(a-t.y)/t.height;return n*=n,e*=e,n+e<.25},Wt=dv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lv=p,Mv=function(t,r,a){a===void 0&&(a=new lv);var n=t.width/2,e=t.height/2;return a.x=t.x+n*Math.cos(r),a.y=t.y+e*Math.sin(r),a},pr=Mv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wv=pr,mv=Ot,$v=W,_v=p,gv=function(t,r,a){a===void 0&&(a=new _v);var n=mv(r,0,$v.PI2);return wv(t,n,a)},Da=gv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cv=function(t){var r=t.width/2,a=t.height/2,n=Math.pow(r-a,2)/Math.pow(r+a,2);return Math.PI*(r+a)*(1+3*n/(10+Math.sqrt(4-3*n)))},qa=Cv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zv=qa,Pv=pr,Tv=Ot,bv=W,Ov=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=zv(t)/a);for(var e=0;e<r;e++){var i=Tv(e/r,0,bv.PI2);n.push(Pv(t,i))}return n},ka=Ov;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pv=p,Iv=function(t,r){r===void 0&&(r=new pv);var a=Math.random()*Math.PI*2,n=Math.sqrt(Math.random());return r.x=t.x+n*Math.cos(a)*t.width/2,r.y=t.y+n*Math.sin(a)*t.height/2,r},Za=Iv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rv=D,Gv=Wt,Lv=Da,Sv=ka,Fv=at,Ev=Za,Av=new Rv({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Fv.ELLIPSE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return Gv(this,t,r)},getPoint:function(t,r){return Lv(this,t,r)},getPoints:function(t,r,a){return Sv(this,t,r,a)},getRandomPoint:function(t){return Ev(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),Ba=Av;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nv=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},Vv=Nv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yv=Ba,Xv=function(t){return new Yv(t.x,t.y,t.width,t.height)},Dv=Xv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qv=Wt,kv=function(t,r){return qv(t,r.x,r.y)},Zv=kv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qt=Wt,Bv=function(t,r){return Qt(t,r.x,r.y)&&Qt(t,r.right,r.y)&&Qt(t,r.x,r.bottom)&&Qt(t,r.right,r.bottom)},Uv=Bv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wv=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},Qv=Wv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hv=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},jv=Hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kv=K,Jv=function(t,r){return r===void 0&&(r=new Kv),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},ts=Jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rs=function(t,r,a){return t.x+=r,t.y+=a,t},as=rs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ns=function(t,r){return t.x+=r.x,t.y+=r.y,t},es=ns;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k=Ba;k.Area=Vv,k.Circumference=qa,k.CircumferencePoint=pr,k.Clone=Dv,k.Contains=Wt,k.ContainsPoint=Zv,k.ContainsRect=Uv,k.CopyFrom=Qv,k.Equals=jv,k.GetBounds=ts,k.GetPoint=Da,k.GetPoints=ka,k.Offset=as,k.OffsetPoint=es,k.Random=Za;var is=k;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vs=function(t,r,a,n){var e=t-a,i=r-n;return Math.sqrt(e*e+i*i)},Ua=vs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ss=Ua,hs=function(t,r){return ss(t.x,t.y,r.x,r.y)<=t.radius+r.radius},Wa=hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var us=function(t,r){var a=r.width/2,n=r.height/2,e=Math.abs(t.x-r.x-a),i=Math.abs(t.y-r.y-n),v=a+t.radius,s=n+t.radius;if(e>v||i>s)return!1;if(e<=a||i<=n)return!0;var h=e-a,u=i-n,f=h*h,o=u*u,x=t.radius*t.radius;return f+o<=x},Qa=us;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yt=p,fs=Wa,os=function(t,r,a){if(a===void 0&&(a=[]),fs(t,r)){var n=t.x,e=t.y,i=t.radius,v=r.x,s=r.y,h=r.radius,u,f,o,x,y;if(e===s)y=(h*h-i*i-v*v+n*n)/(2*(n-v)),u=1,f=-2*s,o=v*v+y*y-2*v*y+s*s-h*h,x=f*f-4*u*o,x===0?a.push(new yt(y,-f/(2*u))):x>0&&(a.push(new yt(y,(-f+Math.sqrt(x))/(2*u))),a.push(new yt(y,(-f-Math.sqrt(x))/(2*u))));else{var c=(n-v)/(e-s),d=(h*h-i*i-v*v+n*n-s*s+e*e)/(2*(e-s));u=c*c+1,f=2*e*c-2*d*c-2*n,o=n*n+e*e+d*d-i*i-2*e*d,x=f*f-4*u*o,x===0?(y=-f/(2*u),a.push(new yt(y,d-y*c))):x>0&&(y=(-f+Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)),y=(-f-Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)))}}return a},xs=os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ir=bt,ys=p,cs=new ys,ds=function(t,r,a){if(a===void 0&&(a=cs),Ir(r,t.x1,t.y1))return a.x=t.x1,a.y=t.y1,!0;if(Ir(r,t.x2,t.y2))return a.x=t.x2,a.y=t.y2,!0;var n=t.x2-t.x1,e=t.y2-t.y1,i=r.x-t.x1,v=r.y-t.y1,s=n*n+e*e,h=n,u=e;if(s>0){var f=(i*n+v*e)/s;h*=f,u*=f}a.x=t.x1+h,a.y=t.y1+u;var o=h*h+u*u;return o<=s&&h*n+u*e>=0&&Ir(r,a.x,a.y)},Rr=ds;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gr=p,ls=Rr,Ms=function(t,r,a){if(a===void 0&&(a=[]),ls(t,r)){var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=r.x,h=r.y,u=r.radius,f=i-n,o=v-e,x=n-s,y=e-h,c=f*f+o*o,d=2*(f*x+o*y),l=x*x+y*y-u*u,w=d*d-4*c*l,m,M;if(w===0){var $=-d/(2*c);m=n+$*f,M=e+$*o,$>=0&&$<=1&&a.push(new Gr(m,M))}else if(w>0){var _=(-d-Math.sqrt(w))/(2*c);m=n+_*f,M=e+_*o,_>=0&&_<=1&&a.push(new Gr(m,M));var g=(-d+Math.sqrt(w))/(2*c);m=n+g*f,M=e+g*o,g>=0&&g<=1&&a.push(new Gr(m,M))}}return a},Lr=Ms;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ht=Lr,ws=Qa,ms=function(t,r,a){if(a===void 0&&(a=[]),ws(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),v=r.getLineD();Ht(n,t,a),Ht(e,t,a),Ht(i,t,a),Ht(v,t,a)}return a},$s=ms;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _s=D,X=new _s({initialize:function(r,a,n){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=a||0,this.z=n||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new X(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var a=t.x,n=t.y,e=t.z,i=r.x,v=r.y,s=r.z;return this.x=n*s-e*v,this.y=e*i-a*s,this.z=a*v-n*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=a||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(r*r+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return r*r+a*a+n*n},length:function(){var t=this.x,r=this.y,a=this.z;return Math.sqrt(t*t+r*r+a*a)},lengthSq:function(){var t=this.x,r=this.y,a=this.z;return t*t+r*r+a*a},normalize:function(){var t=this.x,r=this.y,a=this.z,n=t*t+r*r+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z;return this.x=a*v-n*i,this.y=n*e-r*v,this.z=r*i-a*e,this},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this},applyMatrix3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[3]*a+e[6]*n,this.y=e[1]*r+e[4]*a+e[7]*n,this.z=e[2]*r+e[5]*a+e[8]*n,this},applyMatrix4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=1/(e[3]*r+e[7]*a+e[11]*n+e[15]);return this.x=(e[0]*r+e[4]*a+e[8]*n+e[12])*i,this.y=(e[1]*r+e[5]*a+e[9]*n+e[13])*i,this.z=(e[2]*r+e[6]*a+e[10]*n+e[14])*i,this},transformMat3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=r*e[0]+a*e[3]+n*e[6],this.y=r*e[1]+a*e[4]+n*e[7],this.z=r*e[2]+a*e[5]+n*e[8],this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[4]*a+e[8]*n+e[12],this.y=e[1]*r+e[5]*a+e[9]*n+e[13],this.z=e[2]*r+e[6]*a+e[10]*n+e[14],this},transformCoordinates:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=r*e[0]+a*e[4]+n*e[8]+e[12],v=r*e[1]+a*e[5]+n*e[9]+e[13],s=r*e[2]+a*e[6]+n*e[10]+e[14],h=r*e[3]+a*e[7]+n*e[11]+e[15];return this.x=i/h,this.y=v/h,this.z=s/h,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z,s=t.w,h=s*r+i*n-v*a,u=s*a+v*r-e*n,f=s*n+e*a-i*r,o=-e*r-i*a-v*n;return this.x=h*s+o*-e+u*-v-f*-i,this.y=u*s+o*-i+f*-e-h*-v,this.z=f*s+o*-v+h*-i-u*-e,this},project:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=e[0],v=e[1],s=e[2],h=e[3],u=e[4],f=e[5],o=e[6],x=e[7],y=e[8],c=e[9],d=e[10],l=e[11],w=e[12],m=e[13],M=e[14],$=e[15],_=1/(r*h+a*x+n*l+$);return this.x=(r*i+a*u+n*y+w)*_,this.y=(r*v+a*f+n*c+m)*_,this.z=(r*s+a*o+n*d+M)*_,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,v=this.x-a,s=i-this.y-1-n,h=this.z;return this.x=2*v/e-1,this.y=2*s/i-1,this.z=2*h-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});X.ZERO=new X,X.RIGHT=new X(1,0,0),X.LEFT=new X(-1,0,0),X.UP=new X(0,-1,0),X.DOWN=new X(0,1,0),X.FORWARD=new X(0,0,1),X.BACK=new X(0,0,-1),X.ONE=new X(1,1,1);var tt=X;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gs=tt,Cs=function(t,r,a,n){a===void 0&&(a=!1);var e=t.x1,i=t.y1,v=t.x2,s=t.y2,h=r.x1,u=r.y1,f=r.x2,o=r.y2,x=v-e,y=s-i,c=f-h,d=o-u,l=x*d-y*c;if(l===0)return null;var w,m,M;if(a){if(w=(x*(u-i)+y*(e-h))/(c*y-d*x),m=(h+c*w-e)/x,m<0||w<0||w>1)return null;M=m}else{if(w=((h-e)*d-(u-i)*c)/l,m=((i-u)*x-(e-h)*y)/l,w<0||w>1||m<0||m>1)return null;M=w}return n===void 0&&(n=new gs),n.set(e+x*M,i+y*M,M)},Ha=Cs;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zs=Ha,Ps=et,ja=tt,Ka=new Ps,jt=new ja,Ts=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=new ja);var e=!1;n.set(),jt.set();for(var i=r[r.length-1],v=0;v<r.length;v++){var s=r[v];Ka.setTo(i.x,i.y,s.x,s.y),i=s,zs(t,Ka,a,jt)&&(!e||jt.z<n.z)&&(n.copy(jt),e=!0)}return e?n:null},Ja=Ts;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bs=D,Z=new bs({initialize:function(r,a,n,e){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=a||0,this.z=n||0,this.w=e||0)},clone:function(){return new Z(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,a,n){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=a||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e,this.z=a*e,this.w=n*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(r*r+a*a+n*n+e*e)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return r*r+a*a+n*n+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.val;return this.x=i[0]*r+i[4]*a+i[8]*n+i[12]*e,this.y=i[1]*r+i[5]*a+i[9]*n+i[13]*e,this.z=i[2]*r+i[6]*a+i[10]*n+i[14]*e,this.w=i[3]*r+i[7]*a+i[11]*n+i[15]*e,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z,s=t.w,h=s*r+i*n-v*a,u=s*a+v*r-e*n,f=s*n+e*a-i*r,o=-e*r-i*a-v*n;return this.x=h*s+o*-e+u*-v-f*-i,this.y=u*s+o*-i+f*-e-h*-v,this.z=f*s+o*-v+h*-i-u*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});Z.prototype.sub=Z.prototype.subtract,Z.prototype.mul=Z.prototype.multiply,Z.prototype.div=Z.prototype.divide,Z.prototype.dist=Z.prototype.distance,Z.prototype.distSq=Z.prototype.distanceSq,Z.prototype.len=Z.prototype.length,Z.prototype.lenSq=Z.prototype.lengthSq;var Sr=Z;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Os=tt,ps=Sr,Is=Ja,ct=new Os,Rs=function(t,r,a,n){n===void 0&&(n=new ps),Array.isArray(r)||(r=[r]);var e=!1;n.set(),ct.set();for(var i=0;i<r.length;i++)Is(t,r[i].points,a,ct)&&(!e||ct.z<n.z)&&(n.set(ct.x,ct.y,ct.z,i),e=!0);return e?n:null},tn=Rs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gs=function(t,r,a){var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=r.x1,h=r.y1,u=r.x2,f=r.y2;if(n===i&&e===v||s===u&&h===f)return!1;var o=(f-h)*(i-n)-(u-s)*(v-e);if(o===0)return!1;var x=((u-s)*(e-h)-(f-h)*(n-s))/o,y=((i-n)*(e-h)-(v-e)*(n-s))/o;return x<0||x>1||y<0||y>1?!1:(a&&(a.x=n+x*(i-n),a.y=e+x*(v-e)),!0)},dt=Gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ls=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=r.x,s=r.y,h=r.right,u=r.bottom,f=0;if(a>=v&&a<=h&&n>=s&&n<=u||e>=v&&e<=h&&i>=s&&i<=u)return!0;if(a<v&&e>=v){if(f=n+(i-n)*(v-a)/(e-a),f>s&&f<=u)return!0}else if(a>h&&e<=h&&(f=n+(i-n)*(h-a)/(e-a),f>=s&&f<=u))return!0;if(n<s&&i>=s){if(f=a+(e-a)*(s-n)/(i-n),f>=v&&f<=h)return!0}else if(n>u&&i<=u&&(f=a+(e-a)*(u-n)/(i-n),f>=v&&f<=h))return!0;return!1},rn=Ls;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kt=p,Jt=dt,Ss=rn,Fs=function(t,r,a){if(a===void 0&&(a=[]),Ss(t,r))for(var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),v=r.getLineD(),s=[new Kt,new Kt,new Kt,new Kt],h=[Jt(n,t,s[0]),Jt(e,t,s[1]),Jt(i,t,s[2]),Jt(v,t,s[3])],u=0;u<4;u++)h[u]&&a.push(s[u]);return a},Fr=Fs;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Es=Sr,As=tn,Ns=et,an=new Ns;function Er(t,r,a,n,e){var i=Math.cos(t),v=Math.sin(t);an.setTo(r,a,r+i,a+v);var s=As(an,n,!0);s&&e.push(new Es(s.x,s.y,t,s.w))}function Vs(t,r){return t.z-r.z}var Ys=function(t,r,a){Array.isArray(a)||(a=[a]);for(var n=[],e=[],i=0;i<a.length;i++)for(var v=a[i].points,s=0;s<v.length;s++){var h=Math.atan2(v[s].y-r,v[s].x-t);e.indexOf(h)===-1&&(Er(h,t,r,a,n),Er(h-1e-5,t,r,a,n),Er(h+1e-5,t,r,a,n),e.push(h))}return n.sort(Vs)},Xs=Ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ds=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},tr=Ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qs=K,ks=tr,Zs=function(t,r,a){return a===void 0&&(a=new qs),ks(t,r)&&(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y),a},Bs=Zs;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rr=Fr,Us=tr,Ws=function(t,r,a){if(a===void 0&&(a=[]),Us(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),v=t.getLineD();rr(n,r,a),rr(e,r,a),rr(i,r,a),rr(v,r,a)}return a},Qs=Ws;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hs=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=[]);for(var e=t.x3-t.x1,i=t.y3-t.y1,v=t.x2-t.x1,s=t.y2-t.y1,h=e*e+i*i,u=e*v+i*s,f=v*v+s*s,o=h*f-u*u,x=o===0?0:1/o,y,c,d,l,w,m,M=t.x1,$=t.y1,_=0;_<r.length&&(d=r[_].x-M,l=r[_].y-$,w=e*d+i*l,m=v*d+s*l,y=(f*w-u*m)*x,c=(h*m-u*w)*x,!(y>=0&&c>=0&&y+c<1&&(n.push({x:r[_].x,y:r[_].y}),a)));_++);return n},Ar=Hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var js=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},nn=js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J=dt,lt=Zt,Ks=Ar,Js=nn,th=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var a=r.getLineA(),n=r.getLineB(),e=r.getLineC();if(lt(t,a.x1,a.y1)||lt(t,a.x2,a.y2)||lt(t,n.x1,n.y1)||lt(t,n.x2,n.y2)||lt(t,e.x1,e.y1)||lt(t,e.x2,e.y2))return!0;var i=t.getLineA(),v=t.getLineB(),s=t.getLineC(),h=t.getLineD();if(J(a,i)||J(a,v)||J(a,s)||J(a,h)||J(n,i)||J(n,v)||J(n,s)||J(n,h)||J(e,i)||J(e,v)||J(e,s)||J(e,h))return!0;var u=Js(t),f=Ks(r,u,!0);return f.length>0},en=th;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rh=en,Nr=Fr,ah=function(t,r,a){if(a===void 0&&(a=[]),rh(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Nr(n,t,a),Nr(e,t,a),Nr(i,t,a)}return a},nh=ah;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eh=function(t,r,a){var n=t.x3-t.x1,e=t.y3-t.y1,i=t.x2-t.x1,v=t.y2-t.y1,s=r-t.x1,h=a-t.y1,u=n*n+e*e,f=n*i+e*v,o=n*s+e*h,x=i*i+v*v,y=i*s+v*h,c=u*x-f*f,d=c===0?0:1/c,l=(x*o-f*y)*d,w=(u*y-f*o)*d;return l>=0&&w>=0&&l+w<1},ar=eh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vr=Rr,ih=ar,vh=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(ih(t,r.x,r.y)||Vr(t.getLineA(),r)||Vr(t.getLineB(),r)||Vr(t.getLineC(),r))},vn=vh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yr=Lr,sh=vn,hh=function(t,r,a){if(a===void 0&&(a=[]),sh(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();Yr(n,r,a),Yr(e,r,a),Yr(i,r,a)}return a},uh=hh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xr=dt,fh=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||Xr(t.getLineA(),r)||Xr(t.getLineB(),r)||Xr(t.getLineC(),r))},sn=fh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dr=p,oh=sn,qr=dt,xh=function(t,r,a){if(a===void 0&&(a=[]),oh(t,r))for(var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),v=[new Dr,new Dr,new Dr],s=[qr(n,r,v[0]),qr(e,r,v[1]),qr(i,r,v[2])],h=0;h<3;h++)s[h]&&a.push(v[h]);return a},hn=xh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yh=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},un=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fn=Ar,on=un,rt=dt,ch=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var a=t.getLineA(),n=t.getLineB(),e=t.getLineC(),i=r.getLineA(),v=r.getLineB(),s=r.getLineC();if(rt(a,i)||rt(a,v)||rt(a,s)||rt(n,i)||rt(n,v)||rt(n,s)||rt(e,i)||rt(e,v)||rt(e,s))return!0;var h=on(t),u=fn(r,h,!0);return u.length>0||(h=on(r),u=fn(t,h,!0),u.length>0)},xn=ch;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dh=xn,kr=hn,lh=function(t,r,a){if(a===void 0&&(a=[]),dh(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();kr(t,n,a),kr(t,e,a),kr(t,i,a)}return a},Mh=lh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wh=function(t,r,a){a===void 0&&(a=1);var n=r.x1,e=r.y1,i=r.x2,v=r.y2,s=t.x,h=t.y,u=(i-n)*(i-n)+(v-e)*(v-e);if(u===0)return!1;var f=((s-n)*(i-n)+(h-e)*(v-e))/u;if(f<0)return Math.sqrt((n-s)*(n-s)+(e-h)*(e-h))<=a;if(f>=0&&f<=1){var o=((e-h)*(i-n)-(n-s)*(v-e))/u;return Math.abs(o)*Math.sqrt(u)<=a}else return Math.sqrt((i-s)*(i-s)+(v-h)*(v-h))<=a},yn=wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mh=yn,$h=function(t,r){if(!mh(t,r))return!1;var a=Math.min(r.x1,r.x2),n=Math.max(r.x1,r.x2),e=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=a&&t.x<=n&&t.y>=e&&t.y<=i},_h=$h;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gh=function(t,r,a,n,e,i){return i===void 0&&(i=0),!(r>t.right+i||a<t.left-i||n>t.bottom+i||e<t.top-i)},Ch=gh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zh={CircleToCircle:Wa,CircleToRectangle:Qa,GetCircleToCircle:xs,GetCircleToRectangle:$s,GetLineToCircle:Lr,GetLineToLine:Ha,GetLineToPoints:Ja,GetLineToPolygon:tn,GetLineToRectangle:Fr,GetRaysFromPointToPolygon:Xs,GetRectangleIntersection:Bs,GetRectangleToRectangle:Qs,GetRectangleToTriangle:nh,GetTriangleToCircle:uh,GetTriangleToLine:hn,GetTriangleToTriangle:Mh,LineToCircle:Rr,LineToLine:dt,LineToRectangle:rn,PointToLine:yn,PointToLineSegment:_h,RectangleToRectangle:tr,RectangleToTriangle:en,RectangleToValues:Ch,TriangleToCircle:vn,TriangleToLine:sn,TriangleToTriangle:xn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ph=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Mt=Ph;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Th=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=[]);var n=Math.round(t.x1),e=Math.round(t.y1),i=Math.round(t.x2),v=Math.round(t.y2),s=Math.abs(i-n),h=Math.abs(v-e),u=n<i?1:-1,f=e<v?1:-1,o=s-h;a.push({x:n,y:e});for(var x=1;!(n===i&&e===v);){var y=o<<1;y>-h&&(o-=h,n+=u),y<s&&(o+=s,e+=f),x%r===0&&a.push({x:n,y:e}),x++}return a},bh=Th;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oh=function(t,r,a){var n=r-(t.x1+t.x2)/2,e=a-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=e,t.x2+=n,t.y2+=e,t},ph=Oh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ih=et,Rh=function(t){return new Ih(t.x1,t.y1,t.x2,t.y2)},Gh=Rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lh=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},Sh=Lh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fh=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},Eh=Fh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ah=nt,Nh=function(t,r,a){a===void 0&&(a=r);var n=Ah(t),e=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-e/n*r,t.y1=t.y1-i/n*r),a&&(t.x2=t.x2+e/n*a,t.y2=t.y2+i/n*a),t},Vh=Nh;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yh=function(t,r){var a=t.x-r.x,n=t.y-r.y;return Math.sqrt(a*a+n*n)},cn=Yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xh=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},Dh=Xh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qh=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},kh=qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zh=function(t,r){r===void 0&&(r=1.70158);var a=r*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},Bh=Zh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dn={In:Dh,Out:kh,InOut:Bh};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uh=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)},Wh=Uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qh=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},Hh=Qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jh=function(t){var r=!1;return t<.5?(t=1-t*2,r=!0):t=t*2-1,t<1/2.75?t=7.5625*t*t:t<2/2.75?t=7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?t=7.5625*(t-=2.25/2.75)*t+.9375:t=7.5625*(t-=2.625/2.75)*t+.984375,r?(1-t)*.5:t*.5+.5},Kh=jh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ln={In:Wh,Out:Hh,InOut:Kh};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jh=function(t){return 1-Math.sqrt(1-t*t)},tu=Jh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ru=function(t){return Math.sqrt(1- --t*t)},au=ru;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nu=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},eu=nu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mn={In:tu,Out:au,InOut:eu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var iu=function(t){return t*t*t},vu=iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var su=function(t){return--t*t*t+1},hu=su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uu=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},fu=uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wn={In:vu,Out:hu,InOut:fu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ou=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a))},xu=ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1},cu=yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var du=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1},lu=du;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mn={In:xu,Out:cu,InOut:lu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mu=function(t){return Math.pow(2,10*(t-1))-.001},wu=Mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mu=function(t){return 1-Math.pow(2,-10*t)},$u=mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _u=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))},gu=_u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $n={In:wu,Out:$u,InOut:gu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cu=function(t){return t},zu=Cu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _n=zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pu=function(t){return t*t},Tu=Pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bu=function(t){return t*(2-t)},Ou=bu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pu=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},Iu=pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gn={In:Tu,Out:Ou,InOut:Iu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ru=function(t){return t*t*t*t},Gu=Ru;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lu=function(t){return 1- --t*t*t*t},Su=Lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fu=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},Eu=Fu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cn={In:Gu,Out:Su,InOut:Eu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Au=function(t){return t*t*t*t*t},Nu=Au;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vu=function(t){return--t*t*t*t*t+1},Yu=Vu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xu=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},Du=Xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zn={In:Nu,Out:Yu,InOut:Du};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},ku=qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zu=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},Bu=Zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uu=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},Wu=Uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pn={In:ku,Out:Bu,InOut:Wu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qu=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},Hu=Qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tn=Hu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nr=dn,er=ln,ir=Mn,pt=wn,vr=mn,sr=$n,bn=_n,It=gn,Rt=Cn,Gt=zn,hr=Pn,ju=Tn,Ku={Power0:bn,Power1:It.Out,Power2:pt.Out,Power3:Rt.Out,Power4:Gt.Out,Linear:bn,Quad:It.Out,Cubic:pt.Out,Quart:Rt.Out,Quint:Gt.Out,Sine:hr.Out,Expo:sr.Out,Circ:ir.Out,Elastic:vr.Out,Back:nr.Out,Bounce:er.Out,Stepped:ju,"Quad.easeIn":It.In,"Cubic.easeIn":pt.In,"Quart.easeIn":Rt.In,"Quint.easeIn":Gt.In,"Sine.easeIn":hr.In,"Expo.easeIn":sr.In,"Circ.easeIn":ir.In,"Elastic.easeIn":vr.In,"Back.easeIn":nr.In,"Bounce.easeIn":er.In,"Quad.easeOut":It.Out,"Cubic.easeOut":pt.Out,"Quart.easeOut":Rt.Out,"Quint.easeOut":Gt.Out,"Sine.easeOut":hr.Out,"Expo.easeOut":sr.Out,"Circ.easeOut":ir.Out,"Elastic.easeOut":vr.Out,"Back.easeOut":nr.Out,"Bounce.easeOut":er.Out,"Quad.easeInOut":It.InOut,"Cubic.easeInOut":pt.InOut,"Quart.easeInOut":Rt.InOut,"Quint.easeInOut":Gt.InOut,"Sine.easeInOut":hr.InOut,"Expo.easeInOut":sr.InOut,"Circ.easeInOut":ir.InOut,"Elastic.easeInOut":vr.InOut,"Back.easeInOut":nr.InOut,"Bounce.easeInOut":er.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ju=function(t){return t&&t[0].toUpperCase()+t.slice(1)},tf=Ju;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lt=Ku,rf=tf,af=function(t,r){var a=Lt.Power0;if(typeof t=="string")if(Lt.hasOwnProperty(t))a=Lt[t];else{var n="";if(t.indexOf(".")){n=t.substring(t.indexOf(".")+1);var e=n.toLowerCase();e==="in"?n="easeIn":e==="out"?n="easeOut":e==="inout"&&(n="easeInOut")}t=rf(t.substring(0,t.indexOf(".")+1)+n),Lt.hasOwnProperty(t)&&(a=Lt[t])}else typeof t=="function"&&(a=t);if(!r)return a;var i=r.slice(0);return i.unshift(0),function(v){return i[0]=v,a.apply(this,i)}},nf=af;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var On=cn,ef=nf,pn=p,vf=function(t,r,a,n,e){n===void 0&&(n=0),e===void 0&&(e=[]);var i=[],v=t.x1,s=t.y1,h=t.x2-v,u=t.y2-s,f=ef(r,e),o,x,y=a-1;for(o=0;o<y;o++)x=f(o/y),i.push(new pn(v+h*x,s+u*x));if(x=f(1),i.push(new pn(v+h*x,s+u*x)),n>0){var c=i[0],d=[c];for(o=1;o<i.length-1;o++){var l=i[o];On(c,l)>=n&&(d.push(l),c=l)}var w=i[i.length-1];return On(c,w)<n&&d.pop(),d.push(w),d}else return i},sf=vf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hf=p,uf=function(t,r){return r===void 0&&(r=new hf),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},ff=uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var of=p,xf=function(t,r,a){a===void 0&&(a=new of);var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=(i-n)*(i-n)+(v-e)*(v-e);if(s===0)return a;var h=((r.x-n)*(i-n)+(r.y-e)*(v-e))/s;return a.x=n+h*(i-n),a.y=e+h*(v-e),a},yf=xf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cf=W,df=Mt,lf=p,Mf=function(t,r){r===void 0&&(r=new lf);var a=df(t)-cf.TAU;return r.x=Math.cos(a),r.y=Math.sin(a),r},wf=Mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mf=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=(e-a)*(e-a)+(i-n)*(i-n);if(v===0)return!1;var s=((n-r.y)*(e-a)-(a-r.x)*(i-n))/v;return Math.abs(s)*Math.sqrt(v)},$f=mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _f=function(t){return Math.abs(t.y1-t.y2)},gf=_f;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cf=function(t,r,a){var n=a-r;return r+((t-r)%n+n)%n},ur=Cf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zf=W,Pf=ur,Tf=Mt,bf=function(t){var r=Tf(t)-zf.TAU;return Pf(r,-Math.PI,Math.PI)},In=bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Of=W,pf=Mt,If=function(t){return Math.cos(pf(t)-Of.TAU)},Rf=If;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gf=W,Lf=Mt,Sf=function(t){return Math.sin(Lf(t)-Gf.TAU)},Ff=Sf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ef=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t},Af=Ef;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nf=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},Vf=Nf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yf=Mt,Xf=In,Df=function(t,r){return 2*Xf(r)-Math.PI-Yf(t)},qf=Df;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kf=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x1-r,s=t.y1-a;return t.x1=v*e-s*i+r,t.y1=v*i+s*e+a,v=t.x2-r,s=t.y2-a,t.x2=v*e-s*i+r,t.y2=v*i+s*e+a,t},Zr=kf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zf=Zr,Bf=function(t,r){var a=(t.x1+t.x2)/2,n=(t.y1+t.y2)/2;return Zf(t,a,n,r)},Uf=Bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wf=Zr,Qf=function(t,r,a){return Wf(t,r.x,r.y,a)},Hf=Qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jf=function(t,r,a,n,e){return t.x1=r,t.y1=a,t.x2=r+Math.cos(n)*e,t.y2=a+Math.sin(n)*e,t},Kf=jf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jf=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},to=Jf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ro=function(t){return Math.abs(t.x1-t.x2)},ao=ro;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S=et;S.Angle=Mt,S.BresenhamPoints=bh,S.CenterOn=ph,S.Clone=Gh,S.CopyFrom=Sh,S.Equals=Eh,S.Extend=Vh,S.GetEasedPoints=sf,S.GetMidPoint=ff,S.GetNearestPoint=yf,S.GetNormal=wf,S.GetPoint=Fa,S.GetPoints=Ea,S.GetShortestDistance=$f,S.Height=gf,S.Length=nt,S.NormalAngle=In,S.NormalX=Rf,S.NormalY=Ff,S.Offset=Af,S.PerpSlope=Vf,S.Random=Aa,S.ReflectAngle=qf,S.Rotate=Uf,S.RotateAroundPoint=Hf,S.RotateAroundXY=Zr,S.SetToAngle=Kf,S.Slope=to,S.Width=ao;var no=S;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eo=D,io=K,vo=xt;function Br(t,r,a,n){var e=t-a,i=r-n,v=e*e+i*i;return Math.sqrt(v)}var so=new eo({initialize:function(r,a,n){this.vertex1=r,this.vertex2=a,this.vertex3=n,this.bounds=new io,this._inCenter=new vo},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,a=this.vertex2,n=this.vertex3,e,i,v,s,h,u;t?(e=r.x,i=r.y,v=a.x,s=a.y,h=n.x,u=n.y):(e=r.vx,i=r.vy,v=a.vx,s=a.vy,h=n.vx,u=n.vy);var f=Br(h,u,v,s),o=Br(e,i,h,u),x=Br(v,s,e,i),y=f+o+x;return this._inCenter.set((e*f+v*o+h*x)/y,(i*f+s*o+u*x)/y)},contains:function(t,r,a){var n=this.vertex1,e=this.vertex2,i=this.vertex3,v=n.vx,s=n.vy,h=e.vx,u=e.vy,f=i.vx,o=i.vy;if(a){var x=a.a,y=a.b,c=a.c,d=a.d,l=a.e,w=a.f;v=n.vx*x+n.vy*c+l,s=n.vx*y+n.vy*d+w,h=e.vx*x+e.vy*c+l,u=e.vx*y+e.vy*d+w,f=i.vx*x+i.vy*c+l,o=i.vx*y+i.vy*d+w}var m=f-v,M=o-s,$=h-v,_=u-s,g=t-v,I=r-s,G=m*m+M*M,T=m*$+M*_,b=m*g+M*I,P=$*$+_*_,R=$*g+_*I,C=G*P-T*T,F=C===0?0:1/C,z=(P*b-T*R)*F,L=(G*R-T*b)*F;return z>=0&&L>=0&&z+L<1},isCounterClockwise:function(t){var r=this.vertex1,a=this.vertex2,n=this.vertex3,e=(a.vx-r.vx)*(n.vy-r.vy)-(a.vy-r.vy)*(n.vx-r.vx);return t<=0?e>=0:e<0},load:function(t,r,a,n,e){return a=this.vertex1.load(t,r,a,n,e),a=this.vertex2.load(t,r,a,n,e),a=this.vertex3.load(t,r,a,n,e),a},transformCoordinatesLocal:function(t,r,a,n){return this.vertex1.transformCoordinatesLocal(t,r,a,n),this.vertex2.transformCoordinatesLocal(t,r,a,n),this.vertex3.transformCoordinatesLocal(t,r,a,n),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3,n=this.bounds;return n.x=Math.min(t.vx,r.vx,a.vx),n.y=Math.min(t.vy,r.vy,a.vy),n.width=Math.max(t.vx,r.vx,a.vx)-n.x,n.height=Math.max(t.vy,r.vy,a.vy)-n.y,this},isInView:function(t,r,a,n,e,i,v,s,h,u,f){this.update(n,e,i,v,s,h,u,f);var o=this.vertex1,x=this.vertex2,y=this.vertex3;if(o.ta<=0&&x.ta<=0&&y.ta<=0||r&&!this.isCounterClockwise(a))return!1;var c=this.bounds;c.x=Math.min(o.tx,x.tx,y.tx),c.y=Math.min(o.ty,x.ty,y.ty),c.width=Math.max(o.tx,x.tx,y.tx)-c.x,c.height=Math.max(o.ty,x.ty,y.ty)-c.y;var d=t.x+t.width,l=t.y+t.height;return c.width<=0||c.height<=0||t.width<=0||t.height<=0?!1:!(c.right<t.x||c.bottom<t.y||c.x>d||c.y>l)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,a,n,e,i,v,s){return this.vertex1.update(r,a,n,e,i,v,s,t),this.vertex2.update(r,a,n,e,i,v,s,t),this.vertex3.update(r,a,n,e,i,v,s,t),this},translate:function(t,r){r===void 0&&(r=0);var a=this.vertex1,n=this.vertex2,e=this.vertex3;return a.x+=t,a.y+=r,n.x+=t,n.y+=r,e.x+=t,e.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.alpha+r.alpha+a.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.vz+r.vz+a.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),fr=so;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ho=function(t,r,a){var n=typeof t;return!t||n==="number"||n==="string"?a:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:a},uo=ho;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fo=D,Ur=tt,or=1e-6,xr=new fo({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new xr(this)},set:function(t){return this.copy(t)},setValues:function(t,r,a,n,e,i,v,s,h,u,f,o,x,y,c,d){var l=this.val;return l[0]=t,l[1]=r,l[2]=a,l[3]=n,l[4]=e,l[5]=i,l[6]=v,l[7]=s,l[8]=h,l[9]=u,l[10]=f,l[11]=o,l[12]=x,l[13]=y,l[14]=c,l[15]=d,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,a){var n=wt.fromQuat(a),e=n.val,i=r.x,v=r.y,s=r.z;return this.setValues(e[0]*i,e[1]*i,e[2]*i,0,e[4]*v,e[5]*v,e[6]*v,0,e[8]*s,e[9]*s,e[10]*s,0,t.x,t.y,t.z,1)},xyz:function(t,r,a){this.identity();var n=this.val;return n[12]=t,n[13]=r,n[14]=a,this},scaling:function(t,r,a){this.zero();var n=this.val;return n[0]=t,n[5]=r,n[10]=a,n[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[3],e=t[6],i=t[7],v=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=a,t[9]=e,t[11]=t[14],t[12]=n,t[13]=i,t[14]=v,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],w=r*v-a*i,m=r*s-n*i,M=r*h-e*i,$=a*s-n*v,_=a*h-e*v,g=n*h-e*s,I=u*c-f*y,G=u*d-o*y,T=u*l-x*y,b=f*d-o*c,P=f*l-x*c,R=o*l-x*d,C=w*R-m*P+M*b+$*T-_*G+g*I;return C?(C=1/C,this.setValues((v*R-s*P+h*b)*C,(n*P-a*R-e*b)*C,(c*g-d*_+l*$)*C,(o*_-f*g-x*$)*C,(s*T-i*R-h*G)*C,(r*R-n*T+e*G)*C,(d*M-y*g-l*m)*C,(u*g-o*M+x*m)*C,(i*P-v*T+h*I)*C,(a*T-r*P-e*I)*C,(y*_-c*M+l*w)*C,(f*M-u*_-x*w)*C,(v*G-i*b-s*I)*C,(r*b-a*G+n*I)*C,(c*m-y*$-d*w)*C,(u*$-f*m+o*w)*C)):this},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15];return this.setValues(v*(o*l-x*d)-f*(s*l-h*d)+c*(s*x-h*o),-(a*(o*l-x*d)-f*(n*l-e*d)+c*(n*x-e*o)),a*(s*l-h*d)-v*(n*l-e*d)+c*(n*h-e*s),-(a*(s*x-h*o)-v*(n*x-e*o)+f*(n*h-e*s)),-(i*(o*l-x*d)-u*(s*l-h*d)+y*(s*x-h*o)),r*(o*l-x*d)-u*(n*l-e*d)+y*(n*x-e*o),-(r*(s*l-h*d)-i*(n*l-e*d)+y*(n*h-e*s)),r*(s*x-h*o)-i*(n*x-e*o)+u*(n*h-e*s),i*(f*l-x*c)-u*(v*l-h*c)+y*(v*x-h*f),-(r*(f*l-x*c)-u*(a*l-e*c)+y*(a*x-e*f)),r*(v*l-h*c)-i*(a*l-e*c)+y*(a*h-e*v),-(r*(v*x-h*f)-i*(a*x-e*f)+u*(a*h-e*v)),-(i*(f*d-o*c)-u*(v*d-s*c)+y*(v*o-s*f)),r*(f*d-o*c)-u*(a*d-n*c)+y*(a*o-n*f),-(r*(v*d-s*c)-i*(a*d-n*c)+y*(a*s-n*v)),r*(v*o-s*f)-i*(a*o-n*f)+u*(a*s-n*v))},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],w=r*v-a*i,m=r*s-n*i,M=r*h-e*i,$=a*s-n*v,_=a*h-e*v,g=n*h-e*s,I=u*c-f*y,G=u*d-o*y,T=u*l-x*y,b=f*d-o*c,P=f*l-x*c,R=o*l-x*d;return w*R-m*P+M*b+$*T-_*G+g*I},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=r[6],u=r[7],f=r[8],o=r[9],x=r[10],y=r[11],c=r[12],d=r[13],l=r[14],w=r[15],m=t.val,M=m[0],$=m[1],_=m[2],g=m[3];return r[0]=M*a+$*v+_*f+g*c,r[1]=M*n+$*s+_*o+g*d,r[2]=M*e+$*h+_*x+g*l,r[3]=M*i+$*u+_*y+g*w,M=m[4],$=m[5],_=m[6],g=m[7],r[4]=M*a+$*v+_*f+g*c,r[5]=M*n+$*s+_*o+g*d,r[6]=M*e+$*h+_*x+g*l,r[7]=M*i+$*u+_*y+g*w,M=m[8],$=m[9],_=m[10],g=m[11],r[8]=M*a+$*v+_*f+g*c,r[9]=M*n+$*s+_*o+g*d,r[10]=M*e+$*h+_*x+g*l,r[11]=M*i+$*u+_*y+g*w,M=m[12],$=m[13],_=m[14],g=m[15],r[12]=M*a+$*v+_*f+g*c,r[13]=M*n+$*s+_*o+g*d,r[14]=M*e+$*h+_*x+g*l,r[15]=M*i+$*u+_*y+g*w,this},multiplyLocal:function(t){var r=this.val,a=t.val;return this.setValues(r[0]*a[0]+r[1]*a[4]+r[2]*a[8]+r[3]*a[12],r[0]*a[1]+r[1]*a[5]+r[2]*a[9]+r[3]*a[13],r[0]*a[2]+r[1]*a[6]+r[2]*a[10]+r[3]*a[14],r[0]*a[3]+r[1]*a[7]+r[2]*a[11]+r[3]*a[15],r[4]*a[0]+r[5]*a[4]+r[6]*a[8]+r[7]*a[12],r[4]*a[1]+r[5]*a[5]+r[6]*a[9]+r[7]*a[13],r[4]*a[2]+r[5]*a[6]+r[6]*a[10]+r[7]*a[14],r[4]*a[3]+r[5]*a[7]+r[6]*a[11]+r[7]*a[15],r[8]*a[0]+r[9]*a[4]+r[10]*a[8]+r[11]*a[12],r[8]*a[1]+r[9]*a[5]+r[10]*a[9]+r[11]*a[13],r[8]*a[2]+r[9]*a[6]+r[10]*a[10]+r[11]*a[14],r[8]*a[3]+r[9]*a[7]+r[10]*a[11]+r[11]*a[15],r[12]*a[0]+r[13]*a[4]+r[14]*a[8]+r[15]*a[12],r[12]*a[1]+r[13]*a[5]+r[14]*a[9]+r[15]*a[13],r[12]*a[2]+r[13]*a[6]+r[14]*a[10]+r[15]*a[14],r[12]*a[3]+r[13]*a[7]+r[14]*a[11]+r[15]*a[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var a=t.val,n=r.val,e=a[0],i=a[4],v=a[8],s=a[12],h=a[1],u=a[5],f=a[9],o=a[13],x=a[2],y=a[6],c=a[10],d=a[14],l=a[3],w=a[7],m=a[11],M=a[15],$=n[0],_=n[4],g=n[8],I=n[12],G=n[1],T=n[5],b=n[9],P=n[13],R=n[2],C=n[6],F=n[10],z=n[14],L=n[3],E=n[7],A=n[11],U=n[15];return this.setValues(e*$+i*G+v*R+s*L,h*$+u*G+f*R+o*L,x*$+y*G+c*R+d*L,l*$+w*G+m*R+M*L,e*_+i*T+v*C+s*E,h*_+u*T+f*C+o*E,x*_+y*T+c*C+d*E,l*_+w*T+m*C+M*E,e*g+i*b+v*F+s*A,h*g+u*b+f*F+o*A,x*g+y*b+c*F+d*A,l*g+w*b+m*F+M*A,e*I+i*P+v*z+s*U,h*I+u*P+f*z+o*U,x*I+y*P+c*z+d*U,l*I+w*P+m*z+M*U)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,a){var n=this.val;return n[12]=n[0]*t+n[4]*r+n[8]*a+n[12],n[13]=n[1]*t+n[5]*r+n[9]*a+n[13],n[14]=n[2]*t+n[6]*r+n[10]*a+n[14],n[15]=n[3]*t+n[7]*r+n[11]*a+n[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,a){var n=this.val;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*r,n[5]=n[5]*r,n[6]=n[6]*r,n[7]=n[7]*r,n[8]=n[8]*a,n[9]=n[9]*a,n[10]=n[10]*a,n[11]=n[11]*a,this},makeRotationAxis:function(t,r){var a=Math.cos(r),n=Math.sin(r),e=1-a,i=t.x,v=t.y,s=t.z,h=e*i,u=e*v;return this.setValues(h*i+a,h*v-n*s,h*s+n*v,0,h*v+n*s,u*v+a,u*s-n*i,0,h*s-n*v,u*s+n*i,e*s*s+a,0,0,0,0,1)},rotate:function(t,r){var a=this.val,n=r.x,e=r.y,i=r.z,v=Math.sqrt(n*n+e*e+i*i);if(Math.abs(v)<or)return this;v=1/v,n*=v,e*=v,i*=v;var s=Math.sin(t),h=Math.cos(t),u=1-h,f=a[0],o=a[1],x=a[2],y=a[3],c=a[4],d=a[5],l=a[6],w=a[7],m=a[8],M=a[9],$=a[10],_=a[11],g=a[12],I=a[13],G=a[14],T=a[15],b=n*n*u+h,P=e*n*u+i*s,R=i*n*u-e*s,C=n*e*u-i*s,F=e*e*u+h,z=i*e*u+n*s,L=n*i*u+e*s,E=e*i*u-n*s,A=i*i*u+h;return this.setValues(f*b+c*P+m*R,o*b+d*P+M*R,x*b+l*P+$*R,y*b+w*P+_*R,f*C+c*F+m*z,o*C+d*F+M*z,x*C+l*F+$*z,y*C+w*F+_*z,f*L+c*E+m*A,o*L+d*E+M*A,x*L+l*E+$*A,y*L+w*E+_*A,g,I,G,T)},rotateX:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[4],i=r[5],v=r[6],s=r[7],h=r[8],u=r[9],f=r[10],o=r[11];return r[4]=e*n+h*a,r[5]=i*n+u*a,r[6]=v*n+f*a,r[7]=s*n+o*a,r[8]=h*n-e*a,r[9]=u*n-i*a,r[10]=f*n-v*a,r[11]=o*n-s*a,this},rotateY:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],v=r[2],s=r[3],h=r[8],u=r[9],f=r[10],o=r[11];return r[0]=e*n-h*a,r[1]=i*n-u*a,r[2]=v*n-f*a,r[3]=s*n-o*a,r[8]=e*a+h*n,r[9]=i*a+u*n,r[10]=v*a+f*n,r[11]=s*a+o*n,this},rotateZ:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],v=r[2],s=r[3],h=r[4],u=r[5],f=r[6],o=r[7];return r[0]=e*n+h*a,r[1]=i*n+u*a,r[2]=v*n+f*a,r[3]=s*n+o*a,r[4]=h*n-e*a,r[5]=u*n-i*a,r[6]=f*n-v*a,r[7]=o*n-s*a,this},fromRotationTranslation:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,v=a+a,s=n+n,h=e+e,u=a*v,f=a*s,o=a*h,x=n*s,y=n*h,c=e*h,d=i*v,l=i*s,w=i*h;return this.setValues(1-(x+c),f+w,o-l,0,f-w,1-(u+c),y+d,0,o+l,y-d,1-(u+x),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,v=a+a,s=n+n,h=r*i,u=r*v,f=r*s,o=a*v,x=a*s,y=n*s,c=e*i,d=e*v,l=e*s;return this.setValues(1-(o+y),u+l,f-d,0,u-l,1-(h+y),x+c,0,f+d,x-c,1-(h+o),0,0,0,0,1)},frustum:function(t,r,a,n,e,i){var v=1/(r-t),s=1/(n-a),h=1/(e-i);return this.setValues(e*2*v,0,0,0,0,e*2*s,0,0,(r+t)*v,(n+a)*s,(i+e)*h,-1,0,0,i*e*2*h,0)},perspective:function(t,r,a,n){var e=1/Math.tan(t/2),i=1/(a-n);return this.setValues(e/r,0,0,0,0,e,0,0,0,0,(n+a)*i,-1,0,0,2*n*a*i,0)},perspectiveLH:function(t,r,a,n){return this.setValues(2*a/t,0,0,0,0,2*a/r,0,0,0,0,-n/(a-n),1,0,0,a*n/(a-n),0)},ortho:function(t,r,a,n,e,i){var v=t-r,s=a-n,h=e-i;return v=v===0?v:1/v,s=s===0?s:1/s,h=h===0?h:1/h,this.setValues(-2*v,0,0,0,0,-2*s,0,0,0,0,2*h,0,(t+r)*v,(n+a)*s,(i+e)*h,1)},lookAtRH:function(t,r,a){var n=this.val;return H.subVectors(t,r),H.getLengthSquared()===0&&(H.z=1),H.normalize(),it.crossVectors(a,H),it.getLengthSquared()===0&&(Math.abs(a.z)===1?H.x+=1e-4:H.z+=1e-4,H.normalize(),it.crossVectors(a,H)),it.normalize(),yr.crossVectors(H,it),n[0]=it.x,n[1]=it.y,n[2]=it.z,n[4]=yr.x,n[5]=yr.y,n[6]=yr.z,n[8]=H.x,n[9]=H.y,n[10]=H.z,this},lookAt:function(t,r,a){var n=t.x,e=t.y,i=t.z,v=a.x,s=a.y,h=a.z,u=r.x,f=r.y,o=r.z;if(Math.abs(n-u)<or&&Math.abs(e-f)<or&&Math.abs(i-o)<or)return this.identity();var x=n-u,y=e-f,c=i-o,d=1/Math.sqrt(x*x+y*y+c*c);x*=d,y*=d,c*=d;var l=s*c-h*y,w=h*x-v*c,m=v*y-s*x;d=Math.sqrt(l*l+w*w+m*m),d?(d=1/d,l*=d,w*=d,m*=d):(l=0,w=0,m=0);var M=y*m-c*w,$=c*l-x*m,_=x*w-y*l;return d=Math.sqrt(M*M+$*$+_*_),d?(d=1/d,M*=d,$*=d,_*=d):(M=0,$=0,_=0),this.setValues(l,M,x,0,w,$,y,0,m,_,c,0,-(l*n+w*e+m*i),-(M*n+$*e+_*i),-(x*n+y*e+c*i),1)},yawPitchRoll:function(t,r,a){this.zero(),wt.zero(),St.zero();var n=this.val,e=wt.val,i=St.val,v=Math.sin(a),s=Math.cos(a);return n[10]=1,n[15]=1,n[0]=s,n[1]=v,n[4]=-v,n[5]=s,v=Math.sin(r),s=Math.cos(r),e[0]=1,e[15]=1,e[5]=s,e[10]=s,e[9]=-v,e[6]=v,v=Math.sin(t),s=Math.cos(t),i[5]=1,i[15]=1,i[0]=s,i[2]=-v,i[8]=v,i[10]=s,this.multiplyLocal(wt),this.multiplyLocal(St),this},setWorldMatrix:function(t,r,a,n,e){return this.yawPitchRoll(t.y,t.x,t.z),wt.scaling(a.x,a.y,a.z),St.xyz(r.x,r.y,r.z),this.multiplyLocal(wt),this.multiplyLocal(St),n&&this.multiplyLocal(n),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,r){var a=this.val,n=t.val,e=a[0],i=a[1],v=a[2],s=a[3],h=a[4],u=a[5],f=a[6],o=a[7],x=a[8],y=a[9],c=a[10],d=a[11],l=a[12],w=a[13],m=a[14],M=a[15],$=n[0],_=n[1],g=n[2],I=n[3],G=n[4],T=n[5],b=n[6],P=n[7],R=n[8],C=n[9],F=n[10],z=n[11],L=n[12],E=n[13],A=n[14],U=n[15];return r.setValues($*e+_*h+g*x+I*l,_*i+_*u+g*y+I*w,g*v+_*f+g*c+I*m,I*s+_*o+g*d+I*M,G*e+T*h+b*x+P*l,G*i+T*u+b*y+P*w,G*v+T*f+b*c+P*m,G*s+T*o+b*d+P*M,R*e+C*h+F*x+z*l,R*i+C*u+F*y+z*w,R*v+C*f+F*c+z*m,R*s+C*o+F*d+z*M,L*e+E*h+A*x+U*l,L*i+E*u+A*y+U*w,L*v+E*f+A*c+U*m,L*s+E*o+A*d+U*M)},fromRotationXYTranslation:function(t,r,a){var n=r.x,e=r.y,i=r.z,v=Math.sin(t.x),s=Math.cos(t.x),h=Math.sin(t.y),u=Math.cos(t.y),f=n,o=e,x=i,y=-v,c=0-y*h,d=0-s*h,l=y*u,w=s*u;return a||(f=u*n+h*i,o=c*n+s*e+l*i,x=d*n+v*e+w*i),this.setValues(u,c,d,0,0,s,v,0,h,l,w,0,f,o,x,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,a,n))}}),wt=new xr,St=new xr,it=new Ur,yr=new Ur,H=new Ur,Ft=xr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oo={getTintFromFloats:function(t,r,a,n){var e=(t*255|0)&255,i=(r*255|0)&255,v=(a*255|0)&255,s=(n*255|0)&255;return(s<<24|e<<16|i<<8|v)>>>0},getTintAppendFloatAlpha:function(t,r){var a=(r*255|0)&255;return(a<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var a=(t>>16|0)&255,n=(t>>8|0)&255,e=(t|0)&255,i=(r*255|0)&255;return(i<<24|e<<16|n<<8|a)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255;return[r/255,a/255,n/255]},checkShaderMax:function(t,r){var a=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?a:Math.min(a,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var a="",n=0;n<r;n++)n>0&&(a+=`
	else `),n<r-1&&(a+="if (outTexId < "+n+".5)"),a+=`
	{`,a+=`
		texture = texture2D(uMainSampler[`+n+"], outTexCoord);",a+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,a)},setGlowQuality:function(t,r,a,n){return a===void 0&&(a=r.config.glowFXQuality),n===void 0&&(n=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/a/n).toFixed(7)),t=t.replace(/__DIST__/gi,n.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xo=D,yo=oo,Rn=tt,co=new xo({Extends:Rn,initialize:function(r,a,n,e,i,v,s,h,u,f){v===void 0&&(v=16777215),s===void 0&&(s=1),h===void 0&&(h=0),u===void 0&&(u=0),f===void 0&&(f=0),Rn.call(this,r,a,n),this.vx=0,this.vy=0,this.vz=0,this.nx=h,this.ny=u,this.nz=f,this.u=e,this.v=i,this.color=v,this.alpha=s,this.tx=0,this.ty=0,this.ta=0,this.tu=e,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,a,n){var e=this.x,i=this.y,v=this.z,s=t.val,h=e*s[0]+i*s[4]+v*s[8]+s[12],u=e*s[1]+i*s[5]+v*s[9]+s[13],f=e*s[2]+i*s[6]+v*s[10]+s[14],o=e*s[3]+i*s[7]+v*s[11]+s[15];this.vx=h/o*r,this.vy=-(u/o)*a,n<=0?this.vz=f/o:this.vz=-(f/o)},resize:function(t,r,a,n,e,i){return this.x=t,this.y=r,this.vx=this.x*a,this.vy=-this.y*n,this.vz=0,e<.5?this.vx+=a*(.5-e):e>.5&&(this.vx-=a*(e-.5)),i<.5?this.vy+=n*(.5-i):i>.5&&(this.vy-=n*(i-.5)),this},update:function(t,r,a,n,e,i,v,s){var h=this.vx*t+this.vy*a+e,u=this.vx*r+this.vy*n+i;return v&&(h=Math.round(h),u=Math.round(u)),this.tx=h,this.ty=u,this.ta=this.alpha*s,this},load:function(t,r,a,n,e){return t[++a]=this.tx,t[++a]=this.ty,t[++a]=this.tu,t[++a]=this.tv,t[++a]=n,t[++a]=e,r[++a]=yo.getTintAppendFloatAlpha(this.color,this.ta),a}}),cr=co;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gn=fr,Y=uo,lo=Ft,Ln=tt,mt=cr,Sn=new Ln,Fn=new Ln,ut=new lo,Mo=function(t){var r=Y(t,"mesh"),a=Y(t,"texture",null),n=Y(t,"frame"),e=Y(t,"width",1),i=Y(t,"height",e),v=Y(t,"widthSegments",1),s=Y(t,"heightSegments",v),h=Y(t,"x",0),u=Y(t,"y",0),f=Y(t,"z",0),o=Y(t,"rotateX",0),x=Y(t,"rotateY",0),y=Y(t,"rotateZ",0),c=Y(t,"zIsUp",!0),d=Y(t,"isOrtho",r?r.dirtyCache[11]:!1),l=Y(t,"colors",[16777215]),w=Y(t,"alphas",[1]),m=Y(t,"tile",!1),M=Y(t,"flipY",!1),$=Y(t,"width",null),_={faces:[],verts:[]};Sn.set(h,u,f),Fn.set(o,x,y),ut.fromRotationXYTranslation(Fn,Sn,c);var g;if(!a&&r)a=r.texture,n||(g=r.frame);else if(r&&typeof a=="string")a=r.scene.sys.textures.get(a);else if(!a)return _;g||(g=a.get(n)),!$&&d&&a&&r&&(e=g.width/r.height,i=g.height/r.height);var I=e/2,G=i/2,T=Math.floor(v),b=Math.floor(s),P=T+1,R=b+1,C=e/T,F=i/b,z=[],L=[],E,A,U=0,qt=1,ot=0,Ct=1;g&&(U=g.u0,qt=g.u1,M?(ot=g.v1,Ct=g.v0):(ot=g.v0,Ct=g.v1));var Rl=qt-U,Gl=Ct-ot;for(A=0;A<R;A++){var Ll=A*F-G;for(E=0;E<P;E++){var Sl=E*C-I;L.push(Sl,-Ll);var Fl=U+Rl*(E/T),El=ot+Gl*(A/b);z.push(Fl,El)}}Array.isArray(l)||(l=[l]),Array.isArray(w)||(w=[w]);var $r=0,_r=0;for(A=0;A<b;A++)for(E=0;E<T;E++){var gr=(E+P*A)*2,st=(E+P*(A+1))*2,Cr=(E+1+P*(A+1))*2,ht=(E+1+P*A)*2,zt=l[_r],Pt=w[$r],ma=new mt(L[gr],L[gr+1],0,z[gr],z[gr+1],zt,Pt).transformMat4(ut),$a=new mt(L[st],L[st+1],0,z[st],z[st+1],zt,Pt).transformMat4(ut),_a=new mt(L[ht],L[ht+1],0,z[ht],z[ht+1],zt,Pt).transformMat4(ut),ga=new mt(L[st],L[st+1],0,z[st],z[st+1],zt,Pt).transformMat4(ut),Ca=new mt(L[Cr],L[Cr+1],0,z[Cr],z[Cr+1],zt,Pt).transformMat4(ut),za=new mt(L[ht],L[ht+1],0,z[ht],z[ht+1],zt,Pt).transformMat4(ut);m&&(ma.setUVs(U,Ct),$a.setUVs(U,ot),_a.setUVs(qt,Ct),ga.setUVs(U,ot),Ca.setUVs(qt,ot),za.setUVs(qt,Ct)),_r++,_r===l.length&&(_r=0),$r++,$r===w.length&&($r=0),_.verts.push(ma,$a,_a,ga,Ca,za),_.faces.push(new Gn(ma,$a,_a),new Gn(ga,Ca,za))}return r&&(r.faces=r.faces.concat(_.faces),r.vertices=r.vertices.concat(_.verts)),_},wo=Mo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mo=fr,$o=Ft,En=tt,Wr=cr,An=new En,Nn=new En,dr=new $o,_o=function(t,r,a,n,e,i,v,s,h,u){a===void 0&&(a=1),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),v===void 0&&(v=0),s===void 0&&(s=0),h===void 0&&(h=0),u===void 0&&(u=!0);var f={faces:[],verts:[]},o=t.materials;An.set(n,e,i),Nn.set(v,s,h),dr.fromRotationXYTranslation(Nn,An,u);for(var x=0;x<t.models.length;x++)for(var y=t.models[x],c=y.vertices,d=y.textureCoords,l=y.faces,w=0;w<l.length;w++){var m=l[w],M=m.vertices[0],$=m.vertices[1],_=m.vertices[2],g=c[M.vertexIndex],I=c[$.vertexIndex],G=c[_.vertexIndex],T=M.textureCoordsIndex,b=$.textureCoordsIndex,P=_.textureCoordsIndex,R=T===-1?{u:0,v:1}:d[T],C=b===-1?{u:0,v:0}:d[b],F=P===-1?{u:1,v:1}:d[P],z=16777215;m.material!==""&&o[m.material]&&(z=o[m.material]);var L=new Wr(g.x*a,g.y*a,g.z*a,R.u,R.v,z).transformMat4(dr),E=new Wr(I.x*a,I.y*a,I.z*a,C.u,C.v,z).transformMat4(dr),A=new Wr(G.x*a,G.y*a,G.z*a,F.u,F.v,z).transformMat4(dr);f.verts.push(L,E,A),f.faces.push(new mo(L,E,A))}return r&&(r.faces=r.faces.concat(f.faces),r.vertices=r.vertices.concat(f.verts)),f},go=_o;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Co=fr,Vn=cr,zo=function(t,r,a,n,e,i,v,s){if(n===void 0&&(n=!1),i===void 0&&(i=16777215),v===void 0&&(v=1),s===void 0&&(s=!1),t.length!==r.length&&!n){console.warn("GenerateVerts: vertices and uvs count not equal");return}var h={faces:[],vertices:[]},u,f,o,x,y,c,d,l,w,m,M,$=n?3:2,_=Array.isArray(i),g=Array.isArray(v);if(Array.isArray(a)&&a.length>0)for(u=0;u<a.length;u++){var I=a[u],G=a[u]*2,T=a[u]*$;f=t[T],o=t[T+1],x=n?t[T+2]:0,y=r[G],c=r[G+1],s&&(c=1-c),d=_?i[I]:i,l=g?v[I]:v,w=0,m=0,M=0,e&&(w=e[T],m=e[T+1],M=n?e[T+2]:0),h.vertices.push(new Vn(f,o,x,y,c,d,l,w,m,M))}else{var b=0,P=0;for(u=0;u<t.length;u+=$)f=t[u],o=t[u+1],x=n?t[u+2]:0,y=r[b],c=r[b+1],d=_?i[P]:i,l=g?v[P]:v,w=0,m=0,M=0,e&&(w=e[u],m=e[u+1],M=n?e[u+2]:0),h.vertices.push(new Vn(f,o,x,y,c,d,l,w,m,M)),b+=2,P++}for(u=0;u<h.vertices.length;u+=3){var R=h.vertices[u],C=h.vertices[u+1],F=h.vertices[u+2];h.faces.push(new Co(R,C,F))}return h},Po=zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yn=!0,Xn="untitled",Et="",Qr="";function To(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function At(t){return t.models.length===0&&t.models.push({faces:[],name:Xn,textureCoords:[],vertexNormals:[],vertices:[]}),Et="",t.models[t.models.length-1]}function bo(t,r){var a=t.length>=2?t[1]:Xn;r.models.push({faces:[],name:a,textureCoords:[],vertexNormals:[],vertices:[]}),Et=""}function Oo(t){t.length===2&&(Et=t[1])}function po(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;At(r).vertices.push({x:n,y:e,z:i})}function Io(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;isNaN(n)&&(n=0),isNaN(e)&&(e=0),isNaN(i)&&(i=0),Yn&&(e=1-e),At(r).textureCoords.push({u:n,v:e,w:i})}function Ro(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;At(r).vertexNormals.push({x:n,y:e,z:i})}function Go(t,r){var a=t.length-1;if(!(a<3)){for(var n={group:Et,material:Qr,vertices:[]},e=0;e<a;e++){var i=t[e+1],v=i.split("/"),s=v.length;if(!(s<1||s>3)){var h=0,u=0,f=0;h=parseInt(v[0],10),s>1&&v[1]!==""&&(u=parseInt(v[1],10)),s>2&&(f=parseInt(v[2],10)),h!==0&&(h<0&&(h=At(r).vertices.length+1+h),u-=1,h-=1,f-=1,n.vertices.push({textureCoordsIndex:u,vertexIndex:h,vertexNormalIndex:f}))}}At(r).faces.push(n)}}function Lo(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function So(t){t.length>=2&&(Qr=t[1])}var Fo=function(t,r){r===void 0&&(r=!0),Yn=r;var a={materials:{},materialLibraries:[],models:[]};Et="",Qr="";for(var n=t.split(`
`),e=0;e<n.length;e++){var i=To(n[e]),v=i.replace(/\s\s+/g," ").trim().split(" ");switch(v[0].toLowerCase()){case"o":bo(v,a);break;case"g":Oo(v);break;case"v":po(v,a);break;case"vt":Io(v,a);break;case"vn":Ro(v,a);break;case"f":Go(v,a);break;case"mtllib":Lo(v,a);break;case"usemtl":So(v);break}}return a},Eo=Fo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ao=function(t,r,a){return t<<16|r<<8|a},No=Ao;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vo=No,Yo=function(t){for(var r={},a=t.split(`
`),n="",e=0;e<a.length;e++){var i=a[e].trim();if(!(i.indexOf("#")===0||i==="")){var v=i.replace(/\s\s+/g," ").trim().split(" ");switch(v[0].toLowerCase()){case"newmtl":{n=v[1];break}case"kd":{var s=Math.floor(v[1]*255),h=v.length>=2?Math.floor(v[2]*255):s,u=v.length>=3?Math.floor(v[3]*255):s;r[n]=Vo(s,h,u);break}}}}return r},Xo=Yo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Do=function(t,r,a,n){var e,i;if(a===void 0&&n===void 0){var v=t.getInCenter();e=v.x,i=v.y}var s=Math.cos(r),h=Math.sin(r),u=t.vertex1,f=t.vertex2,o=t.vertex3,x=u.x-e,y=u.y-i;u.set(x*s-y*h+e,x*h+y*s+i),x=f.x-e,y=f.y-i,f.set(x*s-y*h+e,x*h+y*s+i),x=o.x-e,y=o.y-i,o.set(x*s-y*h+e,x*h+y*s+i)},qo=Do;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ko={Face:fr,GenerateGridVerts:wo,GenerateObjVerts:go,GenerateVerts:Po,ParseObj:Eo,ParseObjMaterial:Xo,RotateFace:qo,Vertex:cr},Zo=ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bo=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},Uo=Bo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wo=p,Qo=function(t){return new Wo(t.x,t.y)},Ho=Qo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jo=function(t,r){return r.setTo(t.x,t.y)},Ko=jo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jo=function(t,r){return t.x===r.x&&t.y===r.y},t1=Jo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var r1=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))},a1=r1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var n1=p,e1=function(t,r){if(r===void 0&&(r=new n1),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var a=t.length;if(a<1)throw new Error("GetCentroid points array must not be empty");if(a===1)r.x=t[0].x,r.y=t[0].y;else{for(var n=0;n<a;n++)r.x+=t[n].x,r.y+=t[n].y;r.x/=a,r.y/=a}return r},i1=e1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var v1=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},Dn=v1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s1=function(t){return t.x*t.x+t.y*t.y},qn=s1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h1=K,u1=function(t,r){r===void 0&&(r=new h1);for(var a=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,v=0;v<t.length;v++){var s=t[v];s.x>a&&(a=s.x),s.x<n&&(n=s.x),s.y>e&&(e=s.y),s.y<i&&(i=s.y)}return r.x=n,r.y=i,r.width=a-n,r.height=e-i,r},f1=u1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var o1=p,x1=function(t,r,a,n){return a===void 0&&(a=0),n===void 0&&(n=new o1),n.x=t.x+(r.x-t.x)*a,n.y=t.y+(r.y-t.y)*a,n},y1=x1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c1=function(t){return t.setTo(t.y,t.x)},d1=c1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l1=p,M1=function(t,r){return r===void 0&&(r=new l1),r.setTo(-t.x,-t.y)},w1=M1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m1=p,$1=qn,_1=function(t,r,a){a===void 0&&(a=new m1);var n=t.x*r.x+t.y*r.y,e=n/$1(r);return e!==0&&(a.x=e*r.x,a.y=e*r.y),a},g1=_1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C1=p,z1=function(t,r,a){a===void 0&&(a=new C1);var n=t.x*r.x+t.y*r.y;return n!==0&&(a.x=n*r.x,a.y=n*r.y),a},P1=z1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var T1=Dn,b1=function(t,r){if(t.x!==0||t.y!==0){var a=T1(t);t.x/=a,t.y/=a}return t.x*=r,t.y*=r,t},O1=b1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B=p;B.Ceil=Uo,B.Clone=Ho,B.CopyFrom=Ko,B.Equals=t1,B.Floor=a1,B.GetCentroid=i1,B.GetMagnitude=Dn,B.GetMagnitudeSq=qn,B.GetRectangleFromPoints=f1,B.Interpolate=y1,B.Invert=d1,B.Negative=w1,B.Project=g1,B.ProjectUnit=P1,B.SetMagnitude=O1;var p1=B;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I1=function(t,r,a){for(var n=!1,e=-1,i=t.points.length-1;++e<t.points.length;i=e){var v=t.points[e].x,s=t.points[e].y,h=t.points[i].x,u=t.points[i].y;(s<=a&&a<u||u<=a&&a<s)&&r<(h-v)*(a-s)/(u-s)+v&&(n=!n)}return n},Hr=I1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R1=nt,G1=et,L1=function(t){for(var r=t.points,a=0,n=0;n<r.length;n++){var e=r[n],i=r[(n+1)%r.length],v=new G1(e.x,e.y,i.x,i.y);a+=R1(v)}return a},kn=L1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S1=nt,F1=et,E1=kn,A1=function(t,r,a,n){n===void 0&&(n=[]);var e=t.points,i=E1(t);!r&&a>0&&(r=i/a);for(var v=0;v<r;v++)for(var s=i*(v/r),h=0,u=0;u<e.length;u++){var f=e[u],o=e[(u+1)%e.length],x=new F1(f.x,f.y,o.x,o.y),y=S1(x);if(s<h||s>h+y){h+=y;continue}var c=x.getPoint((s-h)/y);n.push(c);break}return n},Zn=A1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N1=D,V1=Hr,Y1=Zn,X1=at,D1=new N1({initialize:function(r){this.type=X1.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return V1(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,a=0;a<t.length;a++)r={x:0,y:0},typeof t[a]=="number"||typeof t[a]=="string"?(r.x=parseFloat(t[a]),r.y=parseFloat(t[a+1]),a++):Array.isArray(t[a])?(r.x=t[a][0],r.y=t[a][1]):(r.x=t[a].x,r.y=t[a].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,a,n=0;n<this.points.length-1;n++)r=this.points[n],a=this.points[n+1],t+=(a.x-r.x)*(r.y+a.y);return r=this.points[0],a=this.points[this.points.length-1],t+=(r.x-a.x)*(a.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,a){return Y1(this,t,r,a)}}),Bn=D1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q1=Bn,k1=function(t){return new q1(t.points)},Z1=k1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B1=Hr,U1=function(t,r){return B1(t,r.x,r.y)},W1=U1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function jr(t,r,a){a=a||2;var n=r&&r.length,e=n?r[0]*a:t.length,i=Un(t,0,e,a,!0),v=[];if(!i||i.next===i.prev)return v;var s,h,u,f,o,x,y;if(n&&(i=J1(t,r,i,a)),t.length>80*a){s=u=t[0],h=f=t[1];for(var c=a;c<e;c+=a)o=t[c],x=t[c+1],o<s&&(s=o),x<h&&(h=x),o>u&&(u=o),x>f&&(f=x);y=Math.max(u-s,f-h),y=y!==0?32767/y:0}return Nt(i,v,a,s,h,y,0),v}function Un(t,r,a,n,e){var i,v;if(e===ta(t,r,a,n)>0)for(i=r;i<a;i+=n)v=Hn(i,t[i],t[i+1],v);else for(i=a-n;i>=r;i-=n)v=Hn(i,t[i],t[i+1],v);return v&&lr(v,v.next)&&(Yt(v),v=v.next),v}function ft(t,r){if(!t)return t;r||(r=t);var a=t,n;do if(n=!1,!a.steiner&&(lr(a,a.next)||V(a.prev,a,a.next)===0)){if(Yt(a),a=r=a.prev,a===a.next)break;n=!0}else a=a.next;while(n||a!==r);return r}function Nt(t,r,a,n,e,i,v){if(t){!v&&i&&e0(t,n,e,i);for(var s=t,h,u;t.prev!==t.next;){if(h=t.prev,u=t.next,i?H1(t,n,e,i):Q1(t)){r.push(h.i/a|0),r.push(t.i/a|0),r.push(u.i/a|0),Yt(t),t=u.next,s=u.next;continue}if(t=u,t===s){v?v===1?(t=j1(ft(t),r,a),Nt(t,r,a,n,e,i,2)):v===2&&K1(t,r,a,n,e,i):Nt(ft(t),r,a,n,e,i,1);break}}}}function Q1(t){var r=t.prev,a=t,n=t.next;if(V(r,a,n)>=0)return!1;for(var e=r.x,i=a.x,v=n.x,s=r.y,h=a.y,u=n.y,f=e<i?e<v?e:v:i<v?i:v,o=s<h?s<u?s:u:h<u?h:u,x=e>i?e>v?e:v:i>v?i:v,y=s>h?s>u?s:u:h>u?h:u,c=n.next;c!==r;){if(c.x>=f&&c.x<=x&&c.y>=o&&c.y<=y&&$t(e,s,i,h,v,u,c.x,c.y)&&V(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function H1(t,r,a,n){var e=t.prev,i=t,v=t.next;if(V(e,i,v)>=0)return!1;for(var s=e.x,h=i.x,u=v.x,f=e.y,o=i.y,x=v.y,y=s<h?s<u?s:u:h<u?h:u,c=f<o?f<x?f:x:o<x?o:x,d=s>h?s>u?s:u:h>u?h:u,l=f>o?f>x?f:x:o>x?o:x,w=Kr(y,c,r,a,n),m=Kr(d,l,r,a,n),M=t.prevZ,$=t.nextZ;M&&M.z>=w&&$&&$.z<=m;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==v&&$t(s,f,h,o,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0||(M=M.prevZ,$.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==v&&$t(s,f,h,o,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0))return!1;$=$.nextZ}for(;M&&M.z>=w;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==v&&$t(s,f,h,o,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;$&&$.z<=m;){if($.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==v&&$t(s,f,h,o,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0)return!1;$=$.nextZ}return!0}function j1(t,r,a){var n=t;do{var e=n.prev,i=n.next.next;!lr(e,i)&&Wn(e,n,n.next,i)&&Vt(e,i)&&Vt(i,e)&&(r.push(e.i/a|0),r.push(n.i/a|0),r.push(i.i/a|0),Yt(n),Yt(n.next),n=t=i),n=n.next}while(n!==t);return ft(n)}function K1(t,r,a,n,e,i){var v=t;do{for(var s=v.next.next;s!==v.prev;){if(v.i!==s.i&&s0(v,s)){var h=Qn(v,s);v=ft(v,v.next),h=ft(h,h.next),Nt(v,r,a,n,e,i,0),Nt(h,r,a,n,e,i,0);return}s=s.next}v=v.next}while(v!==t)}function J1(t,r,a,n){var e=[],i,v,s,h,u;for(i=0,v=r.length;i<v;i++)s=r[i]*n,h=i<v-1?r[i+1]*n:t.length,u=Un(t,s,h,n,!1),u===u.next&&(u.steiner=!0),e.push(v0(u));for(e.sort(t0),i=0;i<e.length;i++)a=r0(e[i],a);return a}function t0(t,r){return t.x-r.x}function r0(t,r){var a=a0(t,r);if(!a)return r;var n=Qn(a,t);return ft(n,n.next),ft(a,a.next)}function a0(t,r){var a=r,n=t.x,e=t.y,i=-1/0,v;do{if(e<=a.y&&e>=a.next.y&&a.next.y!==a.y){var s=a.x+(e-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(s<=n&&s>i&&(i=s,v=a.x<a.next.x?a:a.next,s===n))return v}a=a.next}while(a!==r);if(!v)return null;var h=v,u=v.x,f=v.y,o=1/0,x;a=v;do n>=a.x&&a.x>=u&&n!==a.x&&$t(e<f?n:i,e,u,f,e<f?i:n,e,a.x,a.y)&&(x=Math.abs(e-a.y)/(n-a.x),Vt(a,t)&&(x<o||x===o&&(a.x>v.x||a.x===v.x&&n0(v,a)))&&(v=a,o=x)),a=a.next;while(a!==h);return v}function n0(t,r){return V(t.prev,t,r.prev)<0&&V(r.next,t,t.next)<0}function e0(t,r,a,n){var e=t;do e.z===0&&(e.z=Kr(e.x,e.y,r,a,n)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,i0(e)}function i0(t){var r,a,n,e,i,v,s,h,u=1;do{for(a=t,t=null,i=null,v=0;a;){for(v++,n=a,s=0,r=0;r<u&&(s++,n=n.nextZ,!!n);r++);for(h=u;s>0||h>0&&n;)s!==0&&(h===0||!n||a.z<=n.z)?(e=a,a=a.nextZ,s--):(e=n,n=n.nextZ,h--),i?i.nextZ=e:t=e,e.prevZ=i,i=e;a=n}i.nextZ=null,u*=2}while(v>1);return t}function Kr(t,r,a,n,e){return t=(t-a)*e|0,r=(r-n)*e|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function v0(t){var r=t,a=t;do(r.x<a.x||r.x===a.x&&r.y<a.y)&&(a=r),r=r.next;while(r!==t);return a}function $t(t,r,a,n,e,i,v,s){return(e-v)*(r-s)>=(t-v)*(i-s)&&(t-v)*(n-s)>=(a-v)*(r-s)&&(a-v)*(i-s)>=(e-v)*(n-s)}function s0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!h0(t,r)&&(Vt(t,r)&&Vt(r,t)&&u0(t,r)&&(V(t.prev,t,r.prev)||V(t,r.prev,r))||lr(t,r)&&V(t.prev,t,t.next)>0&&V(r.prev,r,r.next)>0)}function V(t,r,a){return(r.y-t.y)*(a.x-r.x)-(r.x-t.x)*(a.y-r.y)}function lr(t,r){return t.x===r.x&&t.y===r.y}function Wn(t,r,a,n){var e=wr(V(t,r,a)),i=wr(V(t,r,n)),v=wr(V(a,n,t)),s=wr(V(a,n,r));return!!(e!==i&&v!==s||e===0&&Mr(t,a,r)||i===0&&Mr(t,n,r)||v===0&&Mr(a,t,n)||s===0&&Mr(a,r,n))}function Mr(t,r,a){return r.x<=Math.max(t.x,a.x)&&r.x>=Math.min(t.x,a.x)&&r.y<=Math.max(t.y,a.y)&&r.y>=Math.min(t.y,a.y)}function wr(t){return t>0?1:t<0?-1:0}function h0(t,r){var a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==r.i&&a.next.i!==r.i&&Wn(a,a.next,t,r))return!0;a=a.next}while(a!==t);return!1}function Vt(t,r){return V(t.prev,t,t.next)<0?V(t,r,t.next)>=0&&V(t,t.prev,r)>=0:V(t,r,t.prev)<0||V(t,t.next,r)<0}function u0(t,r){var a=t,n=!1,e=(t.x+r.x)/2,i=(t.y+r.y)/2;do a.y>i!=a.next.y>i&&a.next.y!==a.y&&e<(a.next.x-a.x)*(i-a.y)/(a.next.y-a.y)+a.x&&(n=!n),a=a.next;while(a!==t);return n}function Qn(t,r){var a=new Jr(t.i,t.x,t.y),n=new Jr(r.i,r.x,r.y),e=t.next,i=r.prev;return t.next=r,r.prev=t,a.next=e,e.prev=a,n.next=a,a.prev=n,i.next=n,n.prev=i,n}function Hn(t,r,a,n){var e=new Jr(t,r,a);return n?(e.next=n.next,e.prev=n,n.next.prev=e,n.next=e):(e.prev=e,e.next=e),e}function Yt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Jr(t,r,a){this.i=t,this.x=r,this.y=a,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}jr.deviation=function(t,r,a,n){var e=r&&r.length,i=e?r[0]*a:t.length,v=Math.abs(ta(t,0,i,a));if(e)for(var s=0,h=r.length;s<h;s++){var u=r[s]*a,f=s<h-1?r[s+1]*a:t.length;v-=Math.abs(ta(t,u,f,a))}var o=0;for(s=0;s<n.length;s+=3){var x=n[s]*a,y=n[s+1]*a,c=n[s+2]*a;o+=Math.abs((t[x]-t[c])*(t[y+1]-t[x+1])-(t[x]-t[y])*(t[c+1]-t[x+1]))}return v===0&&o===0?0:Math.abs((o-v)/v)};function ta(t,r,a,n){for(var e=0,i=r,v=a-n;i<a;i+=n)e+=(t[v]-t[i])*(t[i+1]+t[v+1]),v=i;return e}jr.flatten=function(t){for(var r=t[0][0].length,a={vertices:[],holes:[],dimensions:r},n=0,e=0;e<t.length;e++){for(var i=0;i<t[e].length;i++)for(var v=0;v<r;v++)a.vertices.push(t[e][i][v]);e>0&&(n+=t[e-1].length,a.holes.push(n))}return a};var jn=jr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f0=K,o0=function(t,r){r===void 0&&(r=new f0);for(var a=1/0,n=1/0,e=-a,i=-n,v,s=0;s<t.points.length;s++)v=t.points[s],a=Math.min(a,v.x),n=Math.min(n,v.y),e=Math.max(e,v.x),i=Math.max(i,v.y);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},x0=o0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y0=function(t,r){r===void 0&&(r=[]);for(var a=0;a<t.points.length;a++)r.push(t.points[a].x),r.push(t.points[a].y);return r},c0=y0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d0=function(t){return t.points.reverse(),t},l0=d0;function M0(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n}function w0(t,r,a){var n=r.x,e=r.y,i=a.x-n,v=a.y-e;if(i!==0||v!==0){var s=((t.x-n)*i+(t.y-e)*v)/(i*i+v*v);s>1?(n=a.x,e=a.y):s>0&&(n+=i*s,e+=v*s)}return i=t.x-n,v=t.y-e,i*i+v*v}function m0(t,r){for(var a=t[0],n=[a],e,i=1,v=t.length;i<v;i++)e=t[i],M0(e,a)>r&&(n.push(e),a=e);return a!==e&&n.push(e),n}function ra(t,r,a,n,e){for(var i=n,v,s=r+1;s<a;s++){var h=w0(t[s],t[r],t[a]);h>i&&(v=s,i=h)}i>n&&(v-r>1&&ra(t,r,v,n,e),e.push(t[v]),a-v>1&&ra(t,v,a,n,e))}function $0(t,r){var a=t.length-1,n=[t[0]];return ra(t,0,a,r,n),n.push(t[a]),n}var _0=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=!1);var n=t.points;if(n.length>2){var e=r*r;a||(n=m0(n,e)),t.setTo($0(n,e))}return t},g0=_0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kn=function(t,r){return t[0]=r[0],t[1]=r[1],t},C0=function(t){var r,a=[],n=t.points;for(r=0;r<n.length;r++)a.push([n[r].x,n[r].y]);var e=[];for(a.length>0&&e.push(Kn([0,0],a[0])),r=0;r<a.length-1;r++){var i=a[r],v=a[r+1],s=i[0],h=i[1],u=v[0],f=v[1];e.push([.85*s+.15*u,.85*h+.15*f]),e.push([.15*s+.85*u,.15*h+.85*f])}return a.length>1&&e.push(Kn([0,0],a[a.length-1])),t.setTo(e)},z0=C0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var P0=function(t,r,a){for(var n=t.points,e=0;e<n.length;e++)n[e].x+=r,n[e].y+=a;return t},T0=P0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j=Bn;j.Clone=Z1,j.Contains=Hr,j.ContainsPoint=W1,j.Earcut=jn,j.GetAABB=x0,j.GetNumberArray=c0,j.GetPoints=Zn,j.Perimeter=kn,j.Reverse=l0,j.Simplify=g0,j.Smooth=z0,j.Translate=T0;var b0=j;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O0=function(t){return t.width*t.height},p0=O0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},R0=I0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var G0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},L0=G0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S0=function(t,r,a){return t.x=r-t.width/2,t.y=a-t.height/2,t},Jn=S0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F0=K,E0=function(t){return new F0(t.x,t.y,t.width,t.height)},A0=E0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N0=Zt,V0=function(t,r){return N0(t,r.x,r.y)},Y0=V0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X0=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},te=X0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var D0=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},q0=D0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k0=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},Z0=k0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B0=function(t){return t.height===0?NaN:t.width/t.height},aa=B0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var re=aa,U0=function(t,r){var a=re(t);return a<re(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},W0=U0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ae=aa,Q0=function(t,r){var a=ae(t);return a>ae(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},H0=Q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j0=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},K0=j0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J0=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t},tx=J0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rx=K,ne=W,ax=function(t,r){if(r===void 0&&(r=new rx),t.length===0)return r;for(var a=Number.MAX_VALUE,n=Number.MAX_VALUE,e=ne.MIN_SAFE_INTEGER,i=ne.MIN_SAFE_INTEGER,v,s,h,u=0;u<t.length;u++)v=t[u],Array.isArray(v)?(s=v[0],h=v[1]):(s=v.x,h=v.y),a=Math.min(a,s),n=Math.min(n,h),e=Math.max(e,s),i=Math.max(i,h);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},nx=ax;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ex=K,ix=function(t,r,a,n,e){return e===void 0&&(e=new ex),e.setTo(Math.min(t,a),Math.min(r,n),Math.abs(t-a),Math.abs(r-n))},vx=ix;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sx=p,hx=function(t,r){return r===void 0&&(r=new sx),r.x=t.centerX,r.y=t.centerY,r},ux=hx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fx=p,ox=function(t,r){return r===void 0&&(r=new fx),r.x=t.width,r.y=t.height,r},xx=ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yx=Jn,cx=function(t,r,a){var n=t.centerX,e=t.centerY;return t.setSize(t.width+r*2,t.height+a*2),yx(t,n,e)},dx=cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lx=K,Mx=tr,wx=function(t,r,a){return a===void 0&&(a=new lx),Mx(t,r)?(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y):a.setEmpty(),a},mx=wx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ee=Bt,$x=p,_x=function(t,r,a,n){if(n===void 0&&(n=[]),!r&&!a)return n;r?a=Math.round(ee(t)/r):r=ee(t)/a;for(var e=t.x,i=t.y,v=0,s=0;s<a;s++)switch(n.push(new $x(e,i)),v){case 0:e+=r,e>=t.right&&(v=1,i+=e-t.right,e=t.right);break;case 1:i+=r,i>=t.bottom&&(v=2,e-=i-t.bottom,i=t.bottom);break;case 2:e-=r,e<=t.left&&(v=3,i-=t.left-e,e=t.left);break;case 3:i-=r,i<=t.top&&(v=0,i=t.top);break}return n},gx=_x;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cx=function(t,r){for(var a=t.x,n=t.right,e=t.y,i=t.bottom,v=0;v<r.length;v++)a=Math.min(a,r[v].x),n=Math.max(n,r[v].x),e=Math.min(e,r[v].y),i=Math.max(i,r[v].y);return t.x=a,t.y=e,t.width=n-a,t.height=i-e,t},zx=Cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Px=function(t,r){var a=Math.min(t.x,r.x),n=Math.max(t.right,r.right);t.x=a,t.width=n-a;var e=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=e,t.height=i-e,t},Tx=Px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bx=function(t,r,a){var n=Math.min(t.x,r),e=Math.max(t.right,r);t.x=n,t.width=e-n;var i=Math.min(t.y,a),v=Math.max(t.bottom,a);return t.y=i,t.height=v-i,t},Ox=bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var px=function(t,r,a){return t.x+=r,t.y+=a,t},Ix=px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rx=function(t,r){return t.x+=r.x,t.y+=r.y,t},Gx=Rx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lx=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},Sx=Lx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fx=W,Ex=function(t){return t*Fx.DEG_TO_RAD},ie=Ex;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ax=p,Nx=ie,Vx=function(t,r,a){a===void 0&&(a=new Ax),r=Nx(r);var n=Math.sin(r),e=Math.cos(r),i=e>0?t.width/2:t.width/-2,v=n>0?t.height/2:t.height/-2;return Math.abs(i*n)<Math.abs(v*e)?v=i*n/e:i=v*e/n,a.x=i+t.centerX,a.y=v+t.centerY,a},Yx=Vx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xx=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},ve=Xx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dx=ve,qx=te,kx=p,Zx=function(t,r,a){if(a===void 0&&(a=new kx),qx(t,r))switch(Dx(0,3)){case 0:a.x=t.x+Math.random()*(r.right-t.x),a.y=t.y+Math.random()*(r.top-t.y);break;case 1:a.x=r.x+Math.random()*(t.right-r.x),a.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:a.x=t.x+Math.random()*(r.x-t.x),a.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:a.x=r.right+Math.random()*(t.right-r.right),a.y=t.y+Math.random()*(r.bottom-t.y);break}return a},Bx=Zx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ux=function(t,r){return t.width===r.width&&t.height===r.height},Wx=Ux;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qx=function(t,r,a){return a===void 0&&(a=r),t.width*=r,t.height*=a,t},Hx=Qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jx=K,Kx=function(t,r,a){a===void 0&&(a=new jx);var n=Math.min(t.x,r.x),e=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-n,v=Math.max(t.bottom,r.bottom)-e;return a.setTo(n,e,i,v)},Jx=Kx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O=K;O.Area=p0,O.Ceil=R0,O.CeilAll=L0,O.CenterOn=Jn,O.Clone=A0,O.Contains=Zt,O.ContainsPoint=Y0,O.ContainsRect=te,O.CopyFrom=q0,O.Decompose=nn,O.Equals=Z0,O.FitInside=W0,O.FitOutside=H0,O.Floor=K0,O.FloorAll=tx,O.FromPoints=nx,O.FromXY=vx,O.GetAspectRatio=aa,O.GetCenter=ux,O.GetPoint=Or,O.GetPoints=Sa,O.GetSize=xx,O.Inflate=dx,O.Intersection=mx,O.MarchingAnts=gx,O.MergePoints=zx,O.MergeRect=Tx,O.MergeXY=Ox,O.Offset=Ix,O.OffsetPoint=Gx,O.Overlaps=Sx,O.Perimeter=Bt,O.PerimeterPoint=Yx,O.Random=Xa,O.RandomOutside=Bx,O.SameDimensions=Wx,O.Scale=Hx,O.Union=Jx;var ty=O;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ry=p,na=nt,ay=function(t,r,a){a===void 0&&(a=new ry);var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return a.x=n.x1,a.y=n.y1,a;var v=na(n),s=na(e),h=na(i),u=v+s+h,f=u*r,o=0;return f<v?(o=f/v,a.x=n.x1+(n.x2-n.x1)*o,a.y=n.y1+(n.y2-n.y1)*o):f>v+s?(f-=v+s,o=f/h,a.x=i.x1+(i.x2-i.x1)*o,a.y=i.y1+(i.y2-i.y1)*o):(f-=v,o=f/s,a.x=e.x1+(e.x2-e.x1)*o,a.y=e.y1+(e.y2-e.y1)*o),a},se=ay;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ea=nt,ny=p,ey=function(t,r,a,n){n===void 0&&(n=[]);var e=t.getLineA(),i=t.getLineB(),v=t.getLineC(),s=ea(e),h=ea(i),u=ea(v),f=s+h+u;!r&&a>0&&(r=f/a);for(var o=0;o<r;o++){var x=f*(o/r),y=0,c=new ny;x<s?(y=x/s,c.x=e.x1+(e.x2-e.x1)*y,c.y=e.y1+(e.y2-e.y1)*y):x>s+h?(x-=s+h,y=x/u,c.x=v.x1+(v.x2-v.x1)*y,c.y=v.y1+(v.y2-v.y1)*y):(x-=s,y=x/h,c.x=i.x1+(i.x2-i.x1)*y,c.y=i.y1+(i.y2-i.y1)*y),n.push(c)}return n},he=ey;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var iy=p,vy=function(t,r){r===void 0&&(r=new iy);var a=t.x2-t.x1,n=t.y2-t.y1,e=t.x3-t.x1,i=t.y3-t.y1,v=Math.random(),s=Math.random();return v+s>=1&&(v=1-v,s=1-s),r.x=t.x1+(a*v+e*s),r.y=t.y1+(n*v+i*s),r},ue=vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sy=D,hy=ar,uy=se,fy=he,oy=at,ia=et,xy=ue,yy=new sy({initialize:function(r,a,n,e,i,v){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),v===void 0&&(v=0),this.type=oy.TRIANGLE,this.x1=r,this.y1=a,this.x2=n,this.y2=e,this.x3=i,this.y3=v},contains:function(t,r){return hy(this,t,r)},getPoint:function(t,r){return uy(this,t,r)},getPoints:function(t,r,a){return fy(this,t,r,a)},getRandomPoint:function(t){return xy(this,t)},setTo:function(t,r,a,n,e,i){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this.x3=e,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new ia),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new ia),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new ia),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),Xt=yy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cy=function(t){var r=t.x1,a=t.y1,n=t.x2,e=t.y2,i=t.x3,v=t.y3;return Math.abs(((i-r)*(e-a)-(n-r)*(v-a))/2)},dy=cy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ly=Xt,My=function(t,r,a){var n=a*(Math.sqrt(3)/2),e=t,i=r,v=t+a/2,s=r+n,h=t-a/2,u=r+n;return new ly(e,i,v,s,h,u)},wy=My;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var my=jn,$y=Xt,_y=function(t,r,a,n,e){r===void 0&&(r=null),a===void 0&&(a=1),n===void 0&&(n=1),e===void 0&&(e=[]);for(var i=my(t,r),v,s,h,u,f,o,x,y,c,d=0;d<i.length;d+=3)v=i[d],s=i[d+1],h=i[d+2],u=t[v*2]*a,f=t[v*2+1]*n,o=t[s*2]*a,x=t[s*2+1]*n,y=t[h*2]*a,c=t[h*2+1]*n,e.push(new $y(u,f,o,x,y,c));return e},gy=_y;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cy=Xt,zy=function(t,r,a,n){n===void 0&&(n=a);var e=t,i=r,v=t,s=r-n,h=t+a,u=r;return new Cy(e,i,v,s,h,u)},Py=zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ty=p,by=function(t,r){return r===void 0&&(r=new Ty),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},fe=by;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t.x3+=r,t.y3+=a,t},oe=Oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var py=fe,Iy=oe,Ry=function(t,r,a,n){n===void 0&&(n=py);var e=n(t),i=r-e.x,v=a-e.y;return Iy(t,i,v)},Gy=Ry;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ly=xt;function va(t,r,a,n){return t*n-r*a}var Sy=function(t,r){r===void 0&&(r=new Ly);var a=t.x3,n=t.y3,e=t.x1-a,i=t.y1-n,v=t.x2-a,s=t.y2-n,h=2*va(e,i,v,s),u=va(i,e*e+i*i,s,v*v+s*s),f=va(e,e*e+i*i,v,v*v+s*s);return r.x=a-u/h,r.y=n+f/h,r},Fy=Sy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ey=br,Ay=function(t,r){r===void 0&&(r=new Ey);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=t.x3,s=t.y3,h=e-a,u=i-n,f=v-a,o=s-n,x=h*(a+e)+u*(n+i),y=f*(a+v)+o*(n+s),c=2*(h*(s-i)-u*(v-e)),d,l;if(Math.abs(c)<1e-6){var w=Math.min(a,e,v),m=Math.min(n,i,s);d=(Math.max(a,e,v)-w)*.5,l=(Math.max(n,i,s)-m)*.5,r.x=w+d,r.y=m+l,r.radius=Math.sqrt(d*d+l*l)}else r.x=(o*x-u*y)/c,r.y=(h*y-f*x)/c,d=r.x-a,l=r.y-n,r.radius=Math.sqrt(d*d+l*l);return r},Ny=Ay;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vy=Xt,Yy=function(t){return new Vy(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},Xy=Yy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dy=ar,qy=function(t,r){return Dy(t,r.x,r.y)},ky=qy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zy=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},By=Zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uy=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},Wy=Uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qy=p;function sa(t,r,a,n){var e=t-a,i=r-n,v=e*e+i*i;return Math.sqrt(v)}var Hy=function(t,r){r===void 0&&(r=new Qy);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=t.x3,s=t.y3,h=sa(v,s,e,i),u=sa(a,n,v,s),f=sa(e,i,a,n),o=h+u+f;return r.x=(a*h+e*u+v*f)/o,r.y=(n*h+i*u+s*f)/o,r},xe=Hy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ha=nt,jy=function(t){var r=t.getLineA(),a=t.getLineB(),n=t.getLineC();return ha(r)+ha(a)+ha(n)},Ky=jy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jy=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x1-r,s=t.y1-a;return t.x1=v*e-s*i+r,t.y1=v*i+s*e+a,v=t.x2-r,s=t.y2-a,t.x2=v*e-s*i+r,t.y2=v*i+s*e+a,v=t.x3-r,s=t.y3-a,t.x3=v*e-s*i+r,t.y3=v*i+s*e+a,t},ua=Jy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var t2=ua,r2=xe,a2=function(t,r){var a=r2(t);return t2(t,a.x,a.y,r)},n2=a2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e2=ua,i2=function(t,r,a){return e2(t,r.x,r.y,a)},v2=i2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=Xt;N.Area=dy,N.BuildEquilateral=wy,N.BuildFromPolygon=gy,N.BuildRight=Py,N.CenterOn=Gy,N.Centroid=fe,N.CircumCenter=Fy,N.CircumCircle=Ny,N.Clone=Xy,N.Contains=ar,N.ContainsArray=Ar,N.ContainsPoint=ky,N.CopyFrom=By,N.Decompose=un,N.Equals=Wy,N.GetPoint=se,N.GetPoints=he,N.InCenter=xe,N.Perimeter=Ky,N.Offset=oe,N.Random=ue,N.Rotate=n2,N.RotateAroundPoint=v2,N.RotateAroundXY=ua;var s2=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h2=at,u2=Oa,fa={Circle:cv,Ellipse:is,Intersects:zh,Line:no,Mesh:Zo,Point:p1,Polygon:b0,Rectangle:ty,Triangle:s2};fa=u2(!1,fa,h2);var f2=fa,o2=Pa(f2);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x2=function(t,r,a,n){return Math.atan2(n-r,a-t)},y2=x2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c2=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},d2=c2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l2=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},M2=l2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var w2=function(t,r,a,n){return Math.atan2(a-t,n-r)},m2=w2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dt=W,$2=function(t){return t>Math.PI&&(t-=Dt.PI2),Math.abs(((t+Dt.TAU)%Dt.PI2-Dt.PI2)%Dt.PI2)},_2=$2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var g2=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},ye=g2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C2=function(t,r){return Math.random()*(r-t)+t},oa=C2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var z2=oa,P2=function(){return z2(-Math.PI,Math.PI)},T2=P2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var b2=oa,O2=function(){return b2(-180,180)},p2=O2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I2=ye,R2=function(t){return I2(t+Math.PI)},G2=R2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xa=W,L2=function(t,r,a){return a===void 0&&(a=.05),t===r||(Math.abs(r-t)<=a||Math.abs(r-t)>=xa.PI2-a?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=xa.PI2:r-=xa.PI2),r>t?t+=a:r<t&&(t-=a))),t},S2=L2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F2=function(t,r){var a=r-t;if(a===0)return 0;var n=Math.floor((a- -180)/360);return a-n*360},E2=F2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A2=ur,N2=function(t){return A2(t,-Math.PI,Math.PI)},V2=N2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Y2=ur,X2=function(t){return Y2(t,-180,180)},D2=X2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q2={Between:y2,BetweenPoints:d2,BetweenPointsY:M2,BetweenY:m2,CounterClockwise:_2,Normalize:ye,Random:T2,RandomDegrees:p2,Reverse:G2,RotateTo:S2,ShortestBetween:E2,Wrap:V2,WrapDegrees:D2};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k2=function(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n},Z2=k2;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B2=function(t,r,a,n){return Math.max(Math.abs(t-a),Math.abs(r-n))},U2=B2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var W2=function(t,r,a,n,e){return e===void 0&&(e=2),Math.sqrt(Math.pow(a-t,e)+Math.pow(n-r,e))},Q2=W2;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H2=function(t,r,a,n){return Math.abs(t-a)+Math.abs(r-n)},j2=H2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K2=function(t,r,a,n){var e=t-a,i=r-n;return e*e+i*i},J2=K2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tc={Between:Ua,BetweenPoints:cn,BetweenPointsSquared:Z2,Chebyshev:U2,Power:Q2,Snake:j2,Squared:J2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rc={Back:dn,Bounce:ln,Circular:Mn,Cubic:wn,Elastic:mn,Expo:$n,Linear:_n,Quadratic:gn,Quartic:Cn,Quintic:zn,Sine:Pn,Stepped:Tn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ac=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},nc=ac;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ec=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},ic=ec;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vc=function(t,r,a){return a===void 0&&(a=1e-4),t>r-a},sc=vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hc=function(t,r,a){return a===void 0&&(a=1e-4),t<r+a},uc=hc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fc={Ceil:nc,Equal:Na,Floor:ic,GreaterThan:sc,LessThan:uc};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oc=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},ce=oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ya=ce,xc=function(t,r){return ya(t)/ya(r)/ya(t-r)},de=xc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yc=de,cc=function(t,r){for(var a=0,n=t.length-1,e=0;e<=n;e++)a+=Math.pow(1-r,n-e)*Math.pow(r,e)*t[e]*yc(n,e);return a},dc=cc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lc=function(t,r,a,n,e){var i=(n-r)*.5,v=(e-a)*.5,s=t*t,h=t*s;return(2*a-2*n+i+v)*h+(-3*a+3*n-2*i-v)*s+i*t+a},le=lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mr=le,Mc=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return t[0]===t[a]?(r<0&&(e=Math.floor(n=a*(1+r))),mr(n-e,t[(e-1+a)%a],t[e],t[(e+1)%a],t[(e+2)%a])):r<0?t[0]-(mr(-n,t[0],t[0],t[1],t[1])-t[0]):r>1?t[a]-(mr(n-a,t[a],t[a],t[a-1],t[a-1])-t[a]):mr(n-e,t[e?e-1:0],t[e],t[a<e+1?a:e+1],t[a<e+2?a:e+2])},wc=Mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function mc(t,r){var a=1-t;return a*a*a*r}function $c(t,r){var a=1-t;return 3*a*a*t*r}function _c(t,r){return 3*(1-t)*t*t*r}function gc(t,r){return t*t*t*r}var Cc=function(t,r,a,n,e){return mc(t,r)+$c(t,a)+_c(t,n)+gc(t,e)},zc=Cc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pc=function(t,r,a){return(r-t)*a+t},Me=Pc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ca=Me,Tc=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return r<0?ca(t[0],t[1],n):r>1?ca(t[a],t[a-1],a-n):ca(t[e],t[e+1>a?a:e+1],n-e)},bc=Tc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Oc(t,r){var a=1-t;return a*a*r}function pc(t,r){return 2*(1-t)*t*r}function Ic(t,r){return t*t*r}var Rc=function(t,r,a,n){return Oc(t,r)+pc(t,a)+Ic(t,n)},Gc=Rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lc=function(t,r,a){return t<=r?0:t>=a?1:(t=(t-r)/(a-r),t*t*(3-2*t))},we=Lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sc=we,Fc=function(t,r,a){return r+(a-r)*Sc(t,0,1)},Ec=Fc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ac=function(t,r,a){return t=Math.max(0,Math.min(1,(t-r)/(a-r))),t*t*t*(t*(t*6-15)+10)},me=Ac;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nc=me,Vc=function(t,r,a){return r+(a-r)*Nc(t,0,1)},Yc=Vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xc={Bezier:dc,CatmullRom:wc,CubicBezier:zc,Linear:bc,QuadraticBezier:Gc,SmoothStep:Ec,SmootherStep:Yc};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dc=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},qc=Dc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kc=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},Zc=kc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bc=function(t){return t>0&&(t&t-1)===0},Uc=Bc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wc={GetNext:qc,IsSize:Zc,IsValue:Uc};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qc=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.ceil(t/r),n?(a+t)/r:a+t)},Hc=Qc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jc=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.floor(t/r),n?(a+t)/r:a+t)},Kc=jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jc=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.round(t/r),n?(a+t)/r:a+t)},td=Jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rd={Ceil:Hc,Floor:Kc,To:td};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ad=D,nd=new ad({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,a=this.n;t=t.toString();for(var n=0;n<t.length;n++)a+=t.charCodeAt(n),r=.02519603282416938*a,a=r>>>0,r-=a,r*=a,a=r>>>0,r-=a,a+=r*4294967296;return this.n=a,(a>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var a=t[r];this.s0-=this.hash(a),this.s0+=~~(this.s0<0),this.s1-=this.hash(a),this.s1+=~~(this.s1<0),this.s2-=this.hash(a),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,a=r;a>0;a--){var n=Math.floor(this.frac()*(a+1)),e=t[n];t[n]=t[a],t[a]=e}return t}}),ed=nd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var id=function(t){for(var r=0,a=0;a<t.length;a++)r+=+t[a];return r/t.length},vd=id;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sd=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.ceil(t*n)/n},hd=sd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ud=function(t,r){return Math.abs(t-r)},fd=ud;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var od=function(){},$e=od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _t=Tr,xd=D,yd=Ft,cd=$e,_e=new yd,da=new xd({initialize:function t(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=t.DefaultOrder),this._x=r,this._y=a,this._z=n,this._order=e,this.onChangeCallback=cd},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,a,n){return n===void 0&&(n=this._order),this._x=t,this._y=r,this._z=a,this._order=n,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,a){return r===void 0&&(r=this._order),a===void 0&&(a=!1),_e.fromQuat(t),this.setFromRotationMatrix(_e,r,a)},setFromRotationMatrix:function(t,r,a){r===void 0&&(r=this._order),a===void 0&&(a=!1);var n=t.val,e=n[0],i=n[4],v=n[8],s=n[1],h=n[5],u=n[9],f=n[2],o=n[6],x=n[10],y=0,c=0,d=0,l=.99999;switch(r){case"XYZ":{c=Math.asin(_t(v,-1,1)),Math.abs(v)<l?(y=Math.atan2(-u,x),d=Math.atan2(-i,e)):y=Math.atan2(o,h);break}case"YXZ":{y=Math.asin(-_t(u,-1,1)),Math.abs(u)<l?(c=Math.atan2(v,x),d=Math.atan2(s,h)):c=Math.atan2(-f,e);break}case"ZXY":{y=Math.asin(_t(o,-1,1)),Math.abs(o)<l?(c=Math.atan2(-f,x),d=Math.atan2(-i,h)):d=Math.atan2(s,e);break}case"ZYX":{c=Math.asin(-_t(f,-1,1)),Math.abs(f)<l?(y=Math.atan2(o,x),d=Math.atan2(s,e)):d=Math.atan2(-i,h);break}case"YZX":{d=Math.asin(_t(s,-1,1)),Math.abs(s)<l?(y=Math.atan2(-u,h),c=Math.atan2(-f,e)):c=Math.atan2(v,x);break}case"XZY":{d=Math.asin(-_t(i,-1,1)),Math.abs(i)<l?(y=Math.atan2(o,h),c=Math.atan2(v,e)):y=Math.atan2(-u,x);break}}return this._x=y,this._y=c,this._z=d,this._order=r,a&&this.onChangeCallback(this),this}});da.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],da.DefaultOrder="XYZ";var dd=da;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ld=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.floor(t*n)/n},Md=ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wd=function(t,r){return t/r/1e3},md=wd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $d=function(t){return t==parseFloat(t)?!(t%2):void 0},_d=$d;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gd=function(t){return t===parseFloat(t)?!(t%2):void 0},Cd=gd;/**
 * @author       Greg McLean <GregDevProjects>
 * @copyright    2021 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zd=function(t,r,a){return a===void 0&&(a=0),t.clone().lerp(r,a)},Pd=zd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Td=function(t,r,a){return Math.min(t+r,a)},bd=Td;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Od=function(t){var r=t.length;if(r===0)return 0;t.sort(function(n,e){return n-e});var a=Math.floor(r/2);return r%2===0?(t[a]+t[a-1])/2:t[a]},pd=Od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Id=function(t,r,a){return Math.max(t-r,a)},Rd=Id;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gd=function(t,r,a,n){a===void 0&&(a=r+1);var e=(t-r)/(a-r);return e>1?n!==void 0?(e=(n-t)/(n-a),e<0&&(e=0)):e=1:e<0&&(e=0),e},Ld=Gd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sd=W,Fd=function(t){return t*Sd.RAD_TO_DEG},Ed=Fd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ad=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI;return t.x=Math.cos(a)*r,t.y=Math.sin(a)*r,t},Nd=Ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI,n=Math.random()*2-1,e=Math.sqrt(1-n*n)*r;return t.x=Math.cos(a)*e,t.y=Math.sin(a)*e,t.z=n*r,t},Yd=Vd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xd=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},Dd=Xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qd=function(t,r){var a=t.x,n=t.y;return t.x=a*Math.cos(r)-n*Math.sin(r),t.y=a*Math.sin(r)+n*Math.cos(r),t},kd=qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zd=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x-r,s=t.y-a;return t.x=v*e-s*i+r,t.y=v*i+s*e+a,t},Bd=Zd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ud=function(t,r,a,n,e){var i=n+Math.atan2(t.y-a,t.x-r);return t.x=r+e*Math.cos(i),t.y=a+e*Math.sin(i),t},Wd=Ud;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qd=function(t,r,a,n,e){return t.x=r+e*Math.cos(n),t.y=a+e*Math.sin(n),t},Hd=Qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jd=function(t){return t>0?Math.ceil(t):Math.floor(t)},Kd=jd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jd=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.round(t*n)/n},tl=Jd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rl=function(t,r,a,n){r===void 0&&(r=1),a===void 0&&(a=1),n===void 0&&(n=1),n*=Math.PI/t;for(var e=[],i=[],v=0;v<t;v++)a-=r*n,r+=a*n,e[v]=a,i[v]=r;return{sin:i,cos:e,length:t}},al=rl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nl=xt,el=function(t,r,a,n){n===void 0&&(n=new nl);var e=0,i=0,v=r*a;return t>0&&t<=v&&(t>r-1?(i=Math.floor(t/r),e=t-i*r):e=t),n.set(e,i)},il=el;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vl=xt,sl=function(t,r,a,n,e,i,v,s){s===void 0&&(s=new vl);var h=Math.sin(e),u=Math.cos(e),f=u*i,o=h*i,x=-h*v,y=u*v,c=1/(f*y+x*-o);return s.x=y*c*t+-x*c*r+(n*x-a*y)*c,s.y=f*c*r+-o*c*t+(-n*f+a*o)*c,s},hl=sl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ul=function(t,r,a){return Math.abs(t-r)<=a},fl=ul;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ol=D,ge=new ol({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new ge(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,a=t.val;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this},fromMat4:function(t){var r=t.val,a=this.val;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[4],a[4]=r[5],a[5]=r[6],a[6]=r[8],a[7]=r[9],a[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=a,t[7]=n,this},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],f=u*i-v*h,o=-u*e+v*s,x=h*e-i*s,y=r*f+a*o+n*x;return y?(y=1/y,t[0]=f*y,t[1]=(-u*a+n*h)*y,t[2]=(v*a-n*i)*y,t[3]=o*y,t[4]=(u*r-n*s)*y,t[5]=(-v*r+n*e)*y,t[6]=x*y,t[7]=(-h*r+a*s)*y,t[8]=(i*r-a*e)*y,this):null},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8];return t[0]=i*u-v*h,t[1]=n*h-a*u,t[2]=a*v-n*i,t[3]=v*s-e*u,t[4]=r*u-n*s,t[5]=n*e-r*v,t[6]=e*h-i*s,t[7]=a*s-r*h,t[8]=r*i-a*e,this},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8];return r*(u*i-v*h)+a*(-u*e+v*s)+n*(h*e-i*s)},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=r[6],u=r[7],f=r[8],o=t.val,x=o[0],y=o[1],c=o[2],d=o[3],l=o[4],w=o[5],m=o[6],M=o[7],$=o[8];return r[0]=x*a+y*i+c*h,r[1]=x*n+y*v+c*u,r[2]=x*e+y*s+c*f,r[3]=d*a+l*i+w*h,r[4]=d*n+l*v+w*u,r[5]=d*e+l*s+w*f,r[6]=m*a+M*i+$*h,r[7]=m*n+M*v+$*u,r[8]=m*e+M*s+$*f,this},translate:function(t){var r=this.val,a=t.x,n=t.y;return r[6]=a*r[0]+n*r[3]+r[6],r[7]=a*r[1]+n*r[4]+r[7],r[8]=a*r[2]+n*r[5]+r[8],this},rotate:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=Math.sin(t),u=Math.cos(t);return r[0]=u*a+h*i,r[1]=u*n+h*v,r[2]=u*e+h*s,r[3]=u*i-h*a,r[4]=u*v-h*n,r[5]=u*s-h*e,this},scale:function(t){var r=this.val,a=t.x,n=t.y;return r[0]=a*r[0],r[1]=a*r[1],r[2]=a*r[2],r[3]=n*r[3],r[4]=n*r[4],r[5]=n*r[5],this},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,v=a+a,s=n+n,h=r*i,u=r*v,f=r*s,o=a*v,x=a*s,y=n*s,c=e*i,d=e*v,l=e*s,w=this.val;return w[0]=1-(o+y),w[3]=u+l,w[6]=f-d,w[1]=u-l,w[4]=1-(h+y),w[7]=x+c,w[2]=f+d,w[5]=x-c,w[8]=1-(h+o),this},normalFromMat4:function(t){var r=t.val,a=this.val,n=r[0],e=r[1],i=r[2],v=r[3],s=r[4],h=r[5],u=r[6],f=r[7],o=r[8],x=r[9],y=r[10],c=r[11],d=r[12],l=r[13],w=r[14],m=r[15],M=n*h-e*s,$=n*u-i*s,_=n*f-v*s,g=e*u-i*h,I=e*f-v*h,G=i*f-v*u,T=o*l-x*d,b=o*w-y*d,P=o*m-c*d,R=x*w-y*l,C=x*m-c*l,F=y*m-c*w,z=M*F-$*C+_*R+g*P-I*b+G*T;return z?(z=1/z,a[0]=(h*F-u*C+f*R)*z,a[1]=(u*P-s*F-f*b)*z,a[2]=(s*C-h*P+f*T)*z,a[3]=(i*C-e*F-v*R)*z,a[4]=(n*F-i*P+v*b)*z,a[5]=(e*P-n*C-v*T)*z,a[6]=(l*G-w*I+m*g)*z,a[7]=(w*_-d*G-m*$)*z,a[8]=(d*I-l*_+m*M)*z,this):null}}),Ce=ge;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xl=D,yl=Ce,cl=$e,la=tt,ze=1e-6,Pe=new Int8Array([1,2,0]),gt=new Float32Array([0,0,0]),dl=new la(1,0,0),ll=new la(0,1,0),vt=new la,Te=new yl,Ml=new xl({initialize:function(r,a,n,e){this.onChangeCallback=cl,this.set(r,a,n,e)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,a,n,e){return e===void 0&&(e=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=a||0,this._w=n||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=r*e,this._z=a*e,this._w=n*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.set(a+r*(t.x-a),n+r*(t.y-n),e+r*(t.z-e),i+r*(t.w-i))},rotationTo:function(t,r){var a=t.x*r.x+t.y*r.y+t.z*r.z;return a<-.999999?(vt.copy(dl).cross(t).length()<ze&&vt.copy(ll).cross(t),vt.normalize(),this.setAxisAngle(vt,Math.PI)):a>.999999?this.set(0,0,0,1):(vt.copy(t).cross(r),this._x=vt.x,this._y=vt.y,this._z=vt.z,this._w=1+a,this.normalize())},setAxes:function(t,r,a){var n=Te.val;return n[0]=r.x,n[3]=r.y,n[6]=r.z,n[1]=a.x,n[4]=a.y,n[7]=a.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(Te).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var a=Math.sin(r);return this.set(a*t.x,a*t.y,a*t.z,Math.cos(r))},multiply:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.x,v=t.y,s=t.z,h=t.w;return this.set(r*h+e*i+a*s-n*v,a*h+e*v+n*i-r*s,n*h+e*s+r*v-a*i,e*h-r*i-a*v-n*s)},slerp:function(t,r){var a=this.x,n=this.y,e=this.z,i=this.w,v=t.x,s=t.y,h=t.z,u=t.w,f=a*v+n*s+e*h+i*u;f<0&&(f=-f,v=-v,s=-s,h=-h,u=-u);var o=1-r,x=r;if(1-f>ze){var y=Math.acos(f),c=Math.sin(y);o=Math.sin((1-r)*y)/c,x=Math.sin(r*y)/c}return this.set(o*a+x*v,o*n+x*s,o*e+x*h,o*i+x*u)},invert:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n,i=e?1/e:0;return this.set(-t*i,-r*i,-a*i,n*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v+e*i,a*v+n*i,n*v-a*i,e*v-r*i)},rotateY:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v-n*i,a*v+e*i,n*v+r*i,e*v-a*i)},rotateZ:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v+a*i,a*v-r*i,n*v+e*i,e*v-n*i)},calculateW:function(){var t=this.x,r=this.y,a=this.z;return this.w=-Math.sqrt(1-t*t-r*r-a*a),this},setFromEuler:function(t,r){var a=t.x/2,n=t.y/2,e=t.z/2,i=Math.cos(a),v=Math.cos(n),s=Math.cos(e),h=Math.sin(a),u=Math.sin(n),f=Math.sin(e);switch(t.order){case"XYZ":{this.set(h*v*s+i*u*f,i*u*s-h*v*f,i*v*f+h*u*s,i*v*s-h*u*f,r);break}case"YXZ":{this.set(h*v*s+i*u*f,i*u*s-h*v*f,i*v*f-h*u*s,i*v*s+h*u*f,r);break}case"ZXY":{this.set(h*v*s-i*u*f,i*u*s+h*v*f,i*v*f+h*u*s,i*v*s-h*u*f,r);break}case"ZYX":{this.set(h*v*s-i*u*f,i*u*s+h*v*f,i*v*f-h*u*s,i*v*s+h*u*f,r);break}case"YZX":{this.set(h*v*s+i*u*f,i*u*s+h*v*f,i*v*f-h*u*s,i*v*s-h*u*f,r);break}case"XZY":{this.set(h*v*s-i*u*f,i*u*s-h*v*f,i*v*f+h*u*s,i*v*s+h*u*f,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,a=r[0],n=r[4],e=r[8],i=r[1],v=r[5],s=r[9],h=r[2],u=r[6],f=r[10],o=a+v+f,x;return o>0?(x=.5/Math.sqrt(o+1),this.set((u-s)*x,(e-h)*x,(i-n)*x,.25/x)):a>v&&a>f?(x=2*Math.sqrt(1+a-v-f),this.set(.25*x,(n+i)/x,(e+h)/x,(u-s)/x)):v>f?(x=2*Math.sqrt(1+v-a-f),this.set((n+i)/x,.25*x,(s+u)/x,(e-h)/x)):(x=2*Math.sqrt(1+f-a-v),this.set((e+h)/x,(s+u)/x,.25*x,(i-n)/x)),this},fromMat3:function(t){var r=t.val,a=r[0]+r[4]+r[8],n;if(a>0)n=Math.sqrt(a+1),this.w=.5*n,n=.5/n,this._x=(r[7]-r[5])*n,this._y=(r[2]-r[6])*n,this._z=(r[3]-r[1])*n;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[e*3+e]&&(e=2);var i=Pe[e],v=Pe[i];n=Math.sqrt(r[e*3+e]-r[i*3+i]-r[v*3+v]+1),gt[e]=.5*n,n=.5/n,gt[i]=(r[i*3+e]+r[e*3+i])*n,gt[v]=(r[v*3+e]+r[e*3+v])*n,this._x=gt[0],this._y=gt[1],this._z=gt[2],this._w=(r[v*3+i]-r[i*3+v])*n}return this.onChangeCallback(this),this}}),be=Ml;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wl=tt,ml=Ft,$l=be,Oe=new ml,pe=new $l,_l=new wl,gl=function(t,r,a){return pe.setAxisAngle(r,a),Oe.fromRotationTranslation(pe,_l.set(0,0,0)),t.transformMat4(Oe)},Cl=gl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zl=W,Pl=Oa,Ma={Angle:q2,Distance:tc,Easing:rc,Fuzzy:fc,Interpolation:Xc,Pow2:Wc,Snap:rd,RandomDataGenerator:ed,Average:vd,Bernstein:de,Between:ve,CatmullRom:le,CeilTo:hd,Clamp:Tr,DegToRad:ie,Difference:fd,Euler:dd,Factorial:ce,FloatBetween:oa,FloorTo:Md,FromPercent:Ot,GetSpeed:md,IsEven:_d,IsEvenStrict:Cd,Linear:Me,LinearXY:Pd,MaxAdd:bd,Median:pd,MinSub:Rd,Percent:Ld,RadToDeg:Ed,RandomXY:Nd,RandomXYZ:Yd,RandomXYZW:Dd,Rotate:kd,RotateAround:Bd,RotateAroundDistance:Wd,RotateTo:Hd,RoundAwayFromZero:Kd,RoundTo:tl,SinCosTableGenerator:al,SmootherStep:me,SmoothStep:we,ToXY:il,TransformXY:hl,Within:fl,Wrap:ur,Vector2:xt,Vector3:tt,Vector4:Sr,Matrix3:Ce,Matrix4:Ft,Quaternion:be,RotateVec3:Cl};Ma=Pl(!1,Ma,zl);var Tl=Ma,wa=Pa(Tl);function Ie(t,r){let a=new o2.Point(0,0),n=wa.Angle.BetweenPoints(a,new wa.Vector2(t,r));return wa.RadToDeg(n)}function bl(t){switch(t){case"entity":return 1;case"position":return 2**1;case"velocity":return 2**2;case"health":return 2**3;case"controller":return 2**4;case"controlled":return 2**5;case"attack":return 2**6;default:return 0}}function Ol(t){let r=0;return t.forEach(a=>{r|=bl(a)}),r}function pl(t,r){let a=Ol(r),n=[],e=Atomics.load(t.idCounter,0);for(let i=0;i<=e;i++)(Atomics.load(t.components.entity.components,i)&a)===a&&Atomics.load(t.components.entity.dead,i)===0&&n.push(i);return n}function Il(t){const r=t.components.position,a=t.components.velocity;return n=>{pl(t,["position","velocity"]).forEach(i=>{let v=Atomics.load(a.x,i),s=Atomics.load(a.y,i),h=v*n,u=s*n,f=Atomics.add(r.x,i,h)+h,o=Atomics.add(r.y,i,u)+u;(f<0||f>t.bounds.width*1e3)&&(Atomics.store(a.x,i,-v),Atomics.store(r.angle,i,Ie(-v,s))),(o<0||o>t.bounds.height*1e3)&&(Atomics.store(a.y,i,-s),Atomics.store(r.angle,i,Ie(v,-s)))})}}Re(Il)})();
