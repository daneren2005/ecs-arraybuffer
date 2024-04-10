(function(){"use strict";function Ge(t){let r,a=n=>{console.warn("Updating system before sent")};self.onmessage=function(n){n.data.world?(r=n.data.world,a=t(r)):n.data.updateWorld?Object.keys(n.data.updateWorld).forEach(e=>{r[e]=n.data.updateWorld[e]}):n.data.delta&&(a(n.data.delta),self.postMessage({done:!0}))}}function za(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Le={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},at=Le;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Se=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},Ee=Se;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ta=Ee,ba=function(){var t,r,a,n,e,i,v=arguments[0]||{},s=1,h=arguments.length,u=!1;for(typeof v=="boolean"&&(u=v,v=arguments[1]||{},s=2),h===s&&(v=this,--s);s<h;s++)if((t=arguments[s])!=null)for(r in t)a=v[r],n=t[r],v!==n&&(u&&n&&(Ta(n)||(e=Array.isArray(n)))?(e?(e=!1,i=a&&Array.isArray(a)?a:[]):i=a&&Ta(a)?a:{},v[r]=ba(u,i,n)):n!==void 0&&(v[r]=n));return v},pa=ba;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Fe(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function Ae(t,r,a){var n=a?t[r]:Object.getOwnPropertyDescriptor(t,r);return!a&&n.value&&typeof n.value=="object"&&(n=n.value),n&&Fe(n)?(typeof n.enumerable>"u"&&(n.enumerable=!0),typeof n.configurable>"u"&&(n.configurable=!0),n):!1}function Ne(t,r){var a=Object.getOwnPropertyDescriptor(t,r);return a?(a.value&&typeof a.value=="object"&&(a=a.value),a.configurable===!1):!1}function Pr(t,r,a,n){for(var e in r)if(r.hasOwnProperty(e)){var i=Ae(r,e,a);if(i!==!1){var v=n||t;if(Ne(v.prototype,e)){if(Tt.ignoreFinals)continue;throw new Error("cannot override final property '"+e+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,e,i)}else t.prototype[e]=r[e]}}function Oa(t,r){if(r){Array.isArray(r)||(r=[r]);for(var a=0;a<r.length;a++)Pr(t,r[a].prototype||r[a])}}function Tt(t){t||(t={});var r,a;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;r=function(){n.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,a=t.Extends,delete t.Extends):r.prototype.constructor=r;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),Oa(r,e),Pr(r,t,!0,a),r}Tt.extend=Pr,Tt.mixin=Oa,Tt.ignoreFinals=!1;var X=Tt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ve=function(t,r,a){if(t.radius>0&&r>=t.left&&r<=t.right&&a>=t.top&&a<=t.bottom){var n=(t.x-r)*(t.x-r),e=(t.y-a)*(t.y-a);return n+e<=t.radius*t.radius}else return!1},bt=Ve;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ye=X,De=at,Xe=new Ye({initialize:function(r,a){r===void 0&&(r=0),a===void 0&&(a=r),this.type=De.POINT,this.x=r,this.y=a},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),O=Xe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ke=O,qe=function(t,r,a){return a===void 0&&(a=new ke),a.x=t.x+t.radius*Math.cos(r),a.y=t.y+t.radius*Math.sin(r),a},zr=qe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ze=function(t,r,a){return Math.max(r,Math.min(a,t))},Tr=Ze;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Be=Tr,Ue=function(t,r,a){return t=Be(t,0,1),(a-r)*t+r},pt=Ue;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var We={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},W=We;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var He=zr,Qe=pt,je=W,Ke=O,Je=function(t,r,a){a===void 0&&(a=new Ke);var n=Qe(r,0,je.PI2);return He(t,n,a)},Ia=Je;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ti=function(t){return 2*(Math.PI*t.radius)},Ra=ti;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ri=Ra,ai=zr,ni=pt,ei=W,ii=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ri(t)/a);for(var e=0;e<r;e++){var i=ni(e/r,0,ei.PI2);n.push(ai(t,i))}return n},Ga=ii;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vi=O,si=function(t,r){r===void 0&&(r=new vi);var a=2*Math.PI*Math.random(),n=Math.random()+Math.random(),e=n>1?2-n:n,i=e*Math.cos(a),v=e*Math.sin(a);return r.x=t.x+i*t.radius,r.y=t.y+v*t.radius,r},La=si;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hi=X,ui=bt,oi=Ia,fi=Ga,xi=at,yi=La,ci=new hi({initialize:function(r,a,n){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=xi.CIRCLE,this.x=r,this.y=a,this._radius=n,this._diameter=n*2},contains:function(t,r){return ui(this,t,r)},getPoint:function(t,r){return oi(this,t,r)},getPoints:function(t,r,a){return fi(this,t,r,a)},getRandomPoint:function(t){return yi(this,t)},setTo:function(t,r,a){return this.x=t,this.y=r,this._radius=a,this._diameter=a*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),br=ci;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var di=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},li=di;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mi=br,mi=function(t){return new Mi(t.x,t.y,t.radius)},wi=mi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $i=bt,_i=function(t,r){return $i(t,r.x,r.y)},gi=_i;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qt=bt,Ci=function(t,r){return qt(t,r.x,r.y)&&qt(t,r.right,r.y)&&qt(t,r.x,r.bottom)&&qt(t,r.right,r.bottom)},Pi=Ci;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zi=function(t,r){return r.setTo(t.x,t.y,t.radius)},Ti=zi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bi=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},pi=bi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oi=function(t,r,a){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=a&&t.y+t.height>=a},Zt=Oi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ii=function(t){return 2*(t.width+t.height)},Bt=Ii;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ri=Bt,Gi=O,Li=function(t,r,a){if(a===void 0&&(a=new Gi),r<=0||r>=1)return a.x=t.x,a.y=t.y,a;var n=Ri(t)*r;return r>.5?(n-=t.width+t.height,n<=t.width?(a.x=t.right-n,a.y=t.bottom):(a.x=t.x,a.y=t.bottom-(n-t.width))):n<=t.width?(a.x=t.x+n,a.y=t.y):(a.x=t.right,a.y=t.y+(n-t.width)),a},pr=Li;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Si=pr,Ei=Bt,Fi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Ei(t)/a);for(var e=0;e<r;e++){var i=e/r;n.push(Si(t,i))}return n},Sa=Fi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ai=O,Ni=function(t,r,a){return a===void 0&&(a=new Ai),a.x=t.x1+(t.x2-t.x1)*r,a.y=t.y1+(t.y2-t.y1)*r,a},Ea=Ni;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vi=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},nt=Vi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yi=nt,Di=O,Xi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Yi(t)/a);for(var e=t.x1,i=t.y1,v=t.x2,s=t.y2,h=0;h<r;h++){var u=h/r,o=e+(v-e)*u,f=i+(s-i)*u;n.push(new Di(o,f))}return n},Fa=Xi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ki=O,qi=function(t,r){r===void 0&&(r=new ki);var a=Math.random();return r.x=t.x1+a*(t.x2-t.x1),r.y=t.y1+a*(t.y2-t.y1),r},Aa=qi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zi=function(t,r,a){return a===void 0&&(a=1e-4),Math.abs(t-r)<a},Na=Zi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bi=X,Va=Na,H=new Bi({initialize:function(r,a){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(a===void 0&&(a=r),this.x=r||0,this.y=a||0)},clone:function(){return new H(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return Va(this.x,t.x,r)&&Va(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y;return Math.sqrt(r*r+a*a)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y;return r*r+a*a},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,a=t*t+r*r;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this},transformMat3:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[3]*a+n[6],this.y=n[1]*r+n[4]*a+n[7],this},transformMat4:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[4]*a+n[12],this.y=n[1]*r+n[5]*a+n[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),a=Math.sin(t);return this.set(r*this.x-a*this.y,a*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});H.ZERO=new H,H.RIGHT=new H(1,0),H.LEFT=new H(-1,0),H.UP=new H(0,-1),H.DOWN=new H(0,1),H.ONE=new H(1,1);var xt=H;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ui=X,Wi=Ea,Hi=Fa,Qi=at,ji=Aa,Ya=xt,Ki=new Ui({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Qi.LINE,this.x1=r,this.y1=a,this.x2=n,this.y2=e},getPoint:function(t,r){return Wi(this,t,r)},getPoints:function(t,r,a){return Hi(this,t,r,a)},getRandomPoint:function(t){return ji(this,t)},setTo:function(t,r,a,n){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Ya),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Ya),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),et=Ki;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ji=O,tv=function(t,r){return r===void 0&&(r=new Ji),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},Da=tv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rv=X,av=Zt,nv=pr,ev=Sa,iv=at,Ut=et,vv=Da,sv=new rv({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=iv.RECTANGLE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return av(this,t,r)},getPoint:function(t,r){return nv(this,t,r)},getPoints:function(t,r,a){return ev(this,t,r,a)},getRandomPoint:function(t){return vv(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),K=sv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hv=K,uv=function(t,r){return r===void 0&&(r=new hv),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},ov=uv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fv=function(t,r,a){return t.x+=r,t.y+=a,t},xv=fv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yv=function(t,r){return t.x+=r.x,t.y+=r.y,t},cv=yv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k=br;k.Area=li,k.Circumference=Ra,k.CircumferencePoint=zr,k.Clone=wi,k.Contains=bt,k.ContainsPoint=gi,k.ContainsRect=Pi,k.CopyFrom=Ti,k.Equals=pi,k.GetBounds=ov,k.GetPoint=Ia,k.GetPoints=Ga,k.Offset=xv,k.OffsetPoint=cv,k.Random=La;var dv=k;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lv=function(t,r,a){if(t.width<=0||t.height<=0)return!1;var n=(r-t.x)/t.width,e=(a-t.y)/t.height;return n*=n,e*=e,n+e<.25},Wt=lv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mv=O,mv=function(t,r,a){a===void 0&&(a=new Mv);var n=t.width/2,e=t.height/2;return a.x=t.x+n*Math.cos(r),a.y=t.y+e*Math.sin(r),a},Or=mv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wv=Or,$v=pt,_v=W,gv=O,Cv=function(t,r,a){a===void 0&&(a=new gv);var n=$v(r,0,_v.PI2);return wv(t,n,a)},Xa=Cv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pv=function(t){var r=t.width/2,a=t.height/2,n=Math.pow(r-a,2)/Math.pow(r+a,2);return Math.PI*(r+a)*(1+3*n/(10+Math.sqrt(4-3*n)))},ka=Pv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zv=ka,Tv=Or,bv=pt,pv=W,Ov=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=zv(t)/a);for(var e=0;e<r;e++){var i=bv(e/r,0,pv.PI2);n.push(Tv(t,i))}return n},qa=Ov;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iv=O,Rv=function(t,r){r===void 0&&(r=new Iv);var a=Math.random()*Math.PI*2,n=Math.sqrt(Math.random());return r.x=t.x+n*Math.cos(a)*t.width/2,r.y=t.y+n*Math.sin(a)*t.height/2,r},Za=Rv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gv=X,Lv=Wt,Sv=Xa,Ev=qa,Fv=at,Av=Za,Nv=new Gv({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Fv.ELLIPSE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return Lv(this,t,r)},getPoint:function(t,r){return Sv(this,t,r)},getPoints:function(t,r,a){return Ev(this,t,r,a)},getRandomPoint:function(t){return Av(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),Ba=Nv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vv=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},Yv=Vv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dv=Ba,Xv=function(t){return new Dv(t.x,t.y,t.width,t.height)},kv=Xv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qv=Wt,Zv=function(t,r){return qv(t,r.x,r.y)},Bv=Zv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ht=Wt,Uv=function(t,r){return Ht(t,r.x,r.y)&&Ht(t,r.right,r.y)&&Ht(t,r.x,r.bottom)&&Ht(t,r.right,r.bottom)},Wv=Uv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hv=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},Qv=Hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jv=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},Kv=jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jv=K,ts=function(t,r){return r===void 0&&(r=new Jv),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},rs=ts;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var as=function(t,r,a){return t.x+=r,t.y+=a,t},ns=as;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var es=function(t,r){return t.x+=r.x,t.y+=r.y,t},is=es;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q=Ba;q.Area=Yv,q.Circumference=ka,q.CircumferencePoint=Or,q.Clone=kv,q.Contains=Wt,q.ContainsPoint=Bv,q.ContainsRect=Wv,q.CopyFrom=Qv,q.Equals=Kv,q.GetBounds=rs,q.GetPoint=Xa,q.GetPoints=qa,q.Offset=ns,q.OffsetPoint=is,q.Random=Za;var vs=q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ss=function(t,r,a,n){var e=t-a,i=r-n;return Math.sqrt(e*e+i*i)},Ua=ss;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hs=Ua,us=function(t,r){return hs(t.x,t.y,r.x,r.y)<=t.radius+r.radius},Wa=us;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var os=function(t,r){var a=r.width/2,n=r.height/2,e=Math.abs(t.x-r.x-a),i=Math.abs(t.y-r.y-n),v=a+t.radius,s=n+t.radius;if(e>v||i>s)return!1;if(e<=a||i<=n)return!0;var h=e-a,u=i-n,o=h*h,f=u*u,x=t.radius*t.radius;return o+f<=x},Ha=os;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yt=O,fs=Wa,xs=function(t,r,a){if(a===void 0&&(a=[]),fs(t,r)){var n=t.x,e=t.y,i=t.radius,v=r.x,s=r.y,h=r.radius,u,o,f,x,y;if(e===s)y=(h*h-i*i-v*v+n*n)/(2*(n-v)),u=1,o=-2*s,f=v*v+y*y-2*v*y+s*s-h*h,x=o*o-4*u*f,x===0?a.push(new yt(y,-o/(2*u))):x>0&&(a.push(new yt(y,(-o+Math.sqrt(x))/(2*u))),a.push(new yt(y,(-o-Math.sqrt(x))/(2*u))));else{var c=(n-v)/(e-s),d=(h*h-i*i-v*v+n*n-s*s+e*e)/(2*(e-s));u=c*c+1,o=2*e*c-2*d*c-2*n,f=n*n+e*e+d*d-i*i-2*e*d,x=o*o-4*u*f,x===0?(y=-o/(2*u),a.push(new yt(y,d-y*c))):x>0&&(y=(-o+Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)),y=(-o-Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)))}}return a},ys=xs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ir=bt,cs=O,ds=new cs,ls=function(t,r,a){if(a===void 0&&(a=ds),Ir(r,t.x1,t.y1))return a.x=t.x1,a.y=t.y1,!0;if(Ir(r,t.x2,t.y2))return a.x=t.x2,a.y=t.y2,!0;var n=t.x2-t.x1,e=t.y2-t.y1,i=r.x-t.x1,v=r.y-t.y1,s=n*n+e*e,h=n,u=e;if(s>0){var o=(i*n+v*e)/s;h*=o,u*=o}a.x=t.x1+h,a.y=t.y1+u;var f=h*h+u*u;return f<=s&&h*n+u*e>=0&&Ir(r,a.x,a.y)},Rr=ls;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gr=O,Ms=Rr,ms=function(t,r,a){if(a===void 0&&(a=[]),Ms(t,r)){var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=r.x,h=r.y,u=r.radius,o=i-n,f=v-e,x=n-s,y=e-h,c=o*o+f*f,d=2*(o*x+f*y),l=x*x+y*y-u*u,m=d*d-4*c*l,w,M;if(m===0){var $=-d/(2*c);w=n+$*o,M=e+$*f,$>=0&&$<=1&&a.push(new Gr(w,M))}else if(m>0){var _=(-d-Math.sqrt(m))/(2*c);w=n+_*o,M=e+_*f,_>=0&&_<=1&&a.push(new Gr(w,M));var g=(-d+Math.sqrt(m))/(2*c);w=n+g*o,M=e+g*f,g>=0&&g<=1&&a.push(new Gr(w,M))}}return a},Lr=ms;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qt=Lr,ws=Ha,$s=function(t,r,a){if(a===void 0&&(a=[]),ws(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),v=r.getLineD();Qt(n,t,a),Qt(e,t,a),Qt(i,t,a),Qt(v,t,a)}return a},_s=$s;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gs=X,D=new gs({initialize:function(r,a,n){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=a||0,this.z=n||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new D(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var a=t.x,n=t.y,e=t.z,i=r.x,v=r.y,s=r.z;return this.x=n*s-e*v,this.y=e*i-a*s,this.z=a*v-n*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=a||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(r*r+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return r*r+a*a+n*n},length:function(){var t=this.x,r=this.y,a=this.z;return Math.sqrt(t*t+r*r+a*a)},lengthSq:function(){var t=this.x,r=this.y,a=this.z;return t*t+r*r+a*a},normalize:function(){var t=this.x,r=this.y,a=this.z,n=t*t+r*r+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z;return this.x=a*v-n*i,this.y=n*e-r*v,this.z=r*i-a*e,this},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this},applyMatrix3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[3]*a+e[6]*n,this.y=e[1]*r+e[4]*a+e[7]*n,this.z=e[2]*r+e[5]*a+e[8]*n,this},applyMatrix4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=1/(e[3]*r+e[7]*a+e[11]*n+e[15]);return this.x=(e[0]*r+e[4]*a+e[8]*n+e[12])*i,this.y=(e[1]*r+e[5]*a+e[9]*n+e[13])*i,this.z=(e[2]*r+e[6]*a+e[10]*n+e[14])*i,this},transformMat3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=r*e[0]+a*e[3]+n*e[6],this.y=r*e[1]+a*e[4]+n*e[7],this.z=r*e[2]+a*e[5]+n*e[8],this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[4]*a+e[8]*n+e[12],this.y=e[1]*r+e[5]*a+e[9]*n+e[13],this.z=e[2]*r+e[6]*a+e[10]*n+e[14],this},transformCoordinates:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=r*e[0]+a*e[4]+n*e[8]+e[12],v=r*e[1]+a*e[5]+n*e[9]+e[13],s=r*e[2]+a*e[6]+n*e[10]+e[14],h=r*e[3]+a*e[7]+n*e[11]+e[15];return this.x=i/h,this.y=v/h,this.z=s/h,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z,s=t.w,h=s*r+i*n-v*a,u=s*a+v*r-e*n,o=s*n+e*a-i*r,f=-e*r-i*a-v*n;return this.x=h*s+f*-e+u*-v-o*-i,this.y=u*s+f*-i+o*-e-h*-v,this.z=o*s+f*-v+h*-i-u*-e,this},project:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=e[0],v=e[1],s=e[2],h=e[3],u=e[4],o=e[5],f=e[6],x=e[7],y=e[8],c=e[9],d=e[10],l=e[11],m=e[12],w=e[13],M=e[14],$=e[15],_=1/(r*h+a*x+n*l+$);return this.x=(r*i+a*u+n*y+m)*_,this.y=(r*v+a*o+n*c+w)*_,this.z=(r*s+a*f+n*d+M)*_,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,v=this.x-a,s=i-this.y-1-n,h=this.z;return this.x=2*v/e-1,this.y=2*s/i-1,this.z=2*h-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});D.ZERO=new D,D.RIGHT=new D(1,0,0),D.LEFT=new D(-1,0,0),D.UP=new D(0,-1,0),D.DOWN=new D(0,1,0),D.FORWARD=new D(0,0,1),D.BACK=new D(0,0,-1),D.ONE=new D(1,1,1);var tt=D;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cs=tt,Ps=function(t,r,a,n){a===void 0&&(a=!1);var e=t.x1,i=t.y1,v=t.x2,s=t.y2,h=r.x1,u=r.y1,o=r.x2,f=r.y2,x=v-e,y=s-i,c=o-h,d=f-u,l=x*d-y*c;if(l===0)return null;var m,w,M;if(a){if(m=(x*(u-i)+y*(e-h))/(c*y-d*x),w=(h+c*m-e)/x,w<0||m<0||m>1)return null;M=w}else{if(m=((h-e)*d-(u-i)*c)/l,w=((i-u)*x-(e-h)*y)/l,m<0||m>1||w<0||w>1)return null;M=m}return n===void 0&&(n=new Cs),n.set(e+x*M,i+y*M,M)},Qa=Ps;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zs=Qa,Ts=et,ja=tt,Ka=new Ts,jt=new ja,bs=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=new ja);var e=!1;n.set(),jt.set();for(var i=r[r.length-1],v=0;v<r.length;v++){var s=r[v];Ka.setTo(i.x,i.y,s.x,s.y),i=s,zs(t,Ka,a,jt)&&(!e||jt.z<n.z)&&(n.copy(jt),e=!0)}return e?n:null},Ja=bs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ps=X,Z=new ps({initialize:function(r,a,n,e){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=a||0,this.z=n||0,this.w=e||0)},clone:function(){return new Z(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,a,n){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=a||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e,this.z=a*e,this.w=n*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(r*r+a*a+n*n+e*e)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return r*r+a*a+n*n+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.val;return this.x=i[0]*r+i[4]*a+i[8]*n+i[12]*e,this.y=i[1]*r+i[5]*a+i[9]*n+i[13]*e,this.z=i[2]*r+i[6]*a+i[10]*n+i[14]*e,this.w=i[3]*r+i[7]*a+i[11]*n+i[15]*e,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,v=t.z,s=t.w,h=s*r+i*n-v*a,u=s*a+v*r-e*n,o=s*n+e*a-i*r,f=-e*r-i*a-v*n;return this.x=h*s+f*-e+u*-v-o*-i,this.y=u*s+f*-i+o*-e-h*-v,this.z=o*s+f*-v+h*-i-u*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});Z.prototype.sub=Z.prototype.subtract,Z.prototype.mul=Z.prototype.multiply,Z.prototype.div=Z.prototype.divide,Z.prototype.dist=Z.prototype.distance,Z.prototype.distSq=Z.prototype.distanceSq,Z.prototype.len=Z.prototype.length,Z.prototype.lenSq=Z.prototype.lengthSq;var Sr=Z;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Os=tt,Is=Sr,Rs=Ja,ct=new Os,Gs=function(t,r,a,n){n===void 0&&(n=new Is),Array.isArray(r)||(r=[r]);var e=!1;n.set(),ct.set();for(var i=0;i<r.length;i++)Rs(t,r[i].points,a,ct)&&(!e||ct.z<n.z)&&(n.set(ct.x,ct.y,ct.z,i),e=!0);return e?n:null},tn=Gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ls=function(t,r,a){var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=r.x1,h=r.y1,u=r.x2,o=r.y2;if(n===i&&e===v||s===u&&h===o)return!1;var f=(o-h)*(i-n)-(u-s)*(v-e);if(f===0)return!1;var x=((u-s)*(e-h)-(o-h)*(n-s))/f,y=((i-n)*(e-h)-(v-e)*(n-s))/f;return x<0||x>1||y<0||y>1?!1:(a&&(a.x=n+x*(i-n),a.y=e+x*(v-e)),!0)},dt=Ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ss=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=r.x,s=r.y,h=r.right,u=r.bottom,o=0;if(a>=v&&a<=h&&n>=s&&n<=u||e>=v&&e<=h&&i>=s&&i<=u)return!0;if(a<v&&e>=v){if(o=n+(i-n)*(v-a)/(e-a),o>s&&o<=u)return!0}else if(a>h&&e<=h&&(o=n+(i-n)*(h-a)/(e-a),o>=s&&o<=u))return!0;if(n<s&&i>=s){if(o=a+(e-a)*(s-n)/(i-n),o>=v&&o<=h)return!0}else if(n>u&&i<=u&&(o=a+(e-a)*(u-n)/(i-n),o>=v&&o<=h))return!0;return!1},rn=Ss;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kt=O,Jt=dt,Es=rn,Fs=function(t,r,a){if(a===void 0&&(a=[]),Es(t,r))for(var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),v=r.getLineD(),s=[new Kt,new Kt,new Kt,new Kt],h=[Jt(n,t,s[0]),Jt(e,t,s[1]),Jt(i,t,s[2]),Jt(v,t,s[3])],u=0;u<4;u++)h[u]&&a.push(s[u]);return a},Er=Fs;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var As=Sr,Ns=tn,Vs=et,an=new Vs;function Fr(t,r,a,n,e){var i=Math.cos(t),v=Math.sin(t);an.setTo(r,a,r+i,a+v);var s=Ns(an,n,!0);s&&e.push(new As(s.x,s.y,t,s.w))}function Ys(t,r){return t.z-r.z}var Ds=function(t,r,a){Array.isArray(a)||(a=[a]);for(var n=[],e=[],i=0;i<a.length;i++)for(var v=a[i].points,s=0;s<v.length;s++){var h=Math.atan2(v[s].y-r,v[s].x-t);e.indexOf(h)===-1&&(Fr(h,t,r,a,n),Fr(h-1e-5,t,r,a,n),Fr(h+1e-5,t,r,a,n),e.push(h))}return n.sort(Ys)},Xs=Ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ks=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},tr=ks;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qs=K,Zs=tr,Bs=function(t,r,a){return a===void 0&&(a=new qs),Zs(t,r)&&(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y),a},Us=Bs;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rr=Er,Ws=tr,Hs=function(t,r,a){if(a===void 0&&(a=[]),Ws(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),v=t.getLineD();rr(n,r,a),rr(e,r,a),rr(i,r,a),rr(v,r,a)}return a},Qs=Hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var js=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=[]);for(var e=t.x3-t.x1,i=t.y3-t.y1,v=t.x2-t.x1,s=t.y2-t.y1,h=e*e+i*i,u=e*v+i*s,o=v*v+s*s,f=h*o-u*u,x=f===0?0:1/f,y,c,d,l,m,w,M=t.x1,$=t.y1,_=0;_<r.length&&(d=r[_].x-M,l=r[_].y-$,m=e*d+i*l,w=v*d+s*l,y=(o*m-u*w)*x,c=(h*w-u*m)*x,!(y>=0&&c>=0&&y+c<1&&(n.push({x:r[_].x,y:r[_].y}),a)));_++);return n},Ar=js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ks=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},nn=Ks;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J=dt,lt=Zt,Js=Ar,th=nn,rh=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var a=r.getLineA(),n=r.getLineB(),e=r.getLineC();if(lt(t,a.x1,a.y1)||lt(t,a.x2,a.y2)||lt(t,n.x1,n.y1)||lt(t,n.x2,n.y2)||lt(t,e.x1,e.y1)||lt(t,e.x2,e.y2))return!0;var i=t.getLineA(),v=t.getLineB(),s=t.getLineC(),h=t.getLineD();if(J(a,i)||J(a,v)||J(a,s)||J(a,h)||J(n,i)||J(n,v)||J(n,s)||J(n,h)||J(e,i)||J(e,v)||J(e,s)||J(e,h))return!0;var u=th(t),o=Js(r,u,!0);return o.length>0},en=rh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ah=en,Nr=Er,nh=function(t,r,a){if(a===void 0&&(a=[]),ah(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Nr(n,t,a),Nr(e,t,a),Nr(i,t,a)}return a},eh=nh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ih=function(t,r,a){var n=t.x3-t.x1,e=t.y3-t.y1,i=t.x2-t.x1,v=t.y2-t.y1,s=r-t.x1,h=a-t.y1,u=n*n+e*e,o=n*i+e*v,f=n*s+e*h,x=i*i+v*v,y=i*s+v*h,c=u*x-o*o,d=c===0?0:1/c,l=(x*f-o*y)*d,m=(u*y-o*f)*d;return l>=0&&m>=0&&l+m<1},ar=ih;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vr=Rr,vh=ar,sh=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(vh(t,r.x,r.y)||Vr(t.getLineA(),r)||Vr(t.getLineB(),r)||Vr(t.getLineC(),r))},vn=sh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yr=Lr,hh=vn,uh=function(t,r,a){if(a===void 0&&(a=[]),hh(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();Yr(n,r,a),Yr(e,r,a),Yr(i,r,a)}return a},oh=uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dr=dt,fh=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||Dr(t.getLineA(),r)||Dr(t.getLineB(),r)||Dr(t.getLineC(),r))},sn=fh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xr=O,xh=sn,kr=dt,yh=function(t,r,a){if(a===void 0&&(a=[]),xh(t,r))for(var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),v=[new Xr,new Xr,new Xr],s=[kr(n,r,v[0]),kr(e,r,v[1]),kr(i,r,v[2])],h=0;h<3;h++)s[h]&&a.push(v[h]);return a},hn=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ch=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},un=ch;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var on=Ar,fn=un,rt=dt,dh=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var a=t.getLineA(),n=t.getLineB(),e=t.getLineC(),i=r.getLineA(),v=r.getLineB(),s=r.getLineC();if(rt(a,i)||rt(a,v)||rt(a,s)||rt(n,i)||rt(n,v)||rt(n,s)||rt(e,i)||rt(e,v)||rt(e,s))return!0;var h=fn(t),u=on(r,h,!0);return u.length>0||(h=fn(r),u=on(t,h,!0),u.length>0)},xn=dh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lh=xn,qr=hn,Mh=function(t,r,a){if(a===void 0&&(a=[]),lh(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();qr(t,n,a),qr(t,e,a),qr(t,i,a)}return a},mh=Mh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wh=function(t,r,a){a===void 0&&(a=1);var n=r.x1,e=r.y1,i=r.x2,v=r.y2,s=t.x,h=t.y,u=(i-n)*(i-n)+(v-e)*(v-e);if(u===0)return!1;var o=((s-n)*(i-n)+(h-e)*(v-e))/u;if(o<0)return Math.sqrt((n-s)*(n-s)+(e-h)*(e-h))<=a;if(o>=0&&o<=1){var f=((e-h)*(i-n)-(n-s)*(v-e))/u;return Math.abs(f)*Math.sqrt(u)<=a}else return Math.sqrt((i-s)*(i-s)+(v-h)*(v-h))<=a},yn=wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $h=yn,_h=function(t,r){if(!$h(t,r))return!1;var a=Math.min(r.x1,r.x2),n=Math.max(r.x1,r.x2),e=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=a&&t.x<=n&&t.y>=e&&t.y<=i},gh=_h;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ch=function(t,r,a,n,e,i){return i===void 0&&(i=0),!(r>t.right+i||a<t.left-i||n>t.bottom+i||e<t.top-i)},Ph=Ch;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zh={CircleToCircle:Wa,CircleToRectangle:Ha,GetCircleToCircle:ys,GetCircleToRectangle:_s,GetLineToCircle:Lr,GetLineToLine:Qa,GetLineToPoints:Ja,GetLineToPolygon:tn,GetLineToRectangle:Er,GetRaysFromPointToPolygon:Xs,GetRectangleIntersection:Us,GetRectangleToRectangle:Qs,GetRectangleToTriangle:eh,GetTriangleToCircle:oh,GetTriangleToLine:hn,GetTriangleToTriangle:mh,LineToCircle:Rr,LineToLine:dt,LineToRectangle:rn,PointToLine:yn,PointToLineSegment:gh,RectangleToRectangle:tr,RectangleToTriangle:en,RectangleToValues:Ph,TriangleToCircle:vn,TriangleToLine:sn,TriangleToTriangle:xn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Th=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Mt=Th;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bh=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=[]);var n=Math.round(t.x1),e=Math.round(t.y1),i=Math.round(t.x2),v=Math.round(t.y2),s=Math.abs(i-n),h=Math.abs(v-e),u=n<i?1:-1,o=e<v?1:-1,f=s-h;a.push({x:n,y:e});for(var x=1;!(n===i&&e===v);){var y=f<<1;y>-h&&(f-=h,n+=u),y<s&&(f+=s,e+=o),x%r===0&&a.push({x:n,y:e}),x++}return a},ph=bh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oh=function(t,r,a){var n=r-(t.x1+t.x2)/2,e=a-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=e,t.x2+=n,t.y2+=e,t},Ih=Oh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rh=et,Gh=function(t){return new Rh(t.x1,t.y1,t.x2,t.y2)},Lh=Gh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sh=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},Eh=Sh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fh=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},Ah=Fh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nh=nt,Vh=function(t,r,a){a===void 0&&(a=r);var n=Nh(t),e=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-e/n*r,t.y1=t.y1-i/n*r),a&&(t.x2=t.x2+e/n*a,t.y2=t.y2+i/n*a),t},Yh=Vh;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dh=function(t,r){var a=t.x-r.x,n=t.y-r.y;return Math.sqrt(a*a+n*n)},cn=Dh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xh=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},kh=Xh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qh=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},Zh=qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bh=function(t,r){r===void 0&&(r=1.70158);var a=r*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},Uh=Bh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dn={In:kh,Out:Zh,InOut:Uh};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wh=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)},Hh=Wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qh=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},jh=Qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kh=function(t){var r=!1;return t<.5?(t=1-t*2,r=!0):t=t*2-1,t<1/2.75?t=7.5625*t*t:t<2/2.75?t=7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?t=7.5625*(t-=2.25/2.75)*t+.9375:t=7.5625*(t-=2.625/2.75)*t+.984375,r?(1-t)*.5:t*.5+.5},Jh=Kh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ln={In:Hh,Out:jh,InOut:Jh};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tu=function(t){return 1-Math.sqrt(1-t*t)},ru=tu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var au=function(t){return Math.sqrt(1- --t*t)},nu=au;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eu=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},iu=eu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mn={In:ru,Out:nu,InOut:iu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vu=function(t){return t*t*t},su=vu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hu=function(t){return--t*t*t+1},uu=hu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ou=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},fu=ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mn={In:su,Out:uu,InOut:fu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a))},yu=xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1},du=cu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1},Mu=lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wn={In:yu,Out:du,InOut:Mu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mu=function(t){return Math.pow(2,10*(t-1))-.001},wu=mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $u=function(t){return 1-Math.pow(2,-10*t)},_u=$u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gu=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))},Cu=gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $n={In:wu,Out:_u,InOut:Cu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pu=function(t){return t},zu=Pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _n=zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tu=function(t){return t*t},bu=Tu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pu=function(t){return t*(2-t)},Ou=pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iu=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},Ru=Iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gn={In:bu,Out:Ou,InOut:Ru};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gu=function(t){return t*t*t*t},Lu=Gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Su=function(t){return 1- --t*t*t*t},Eu=Su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fu=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},Au=Fu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cn={In:Lu,Out:Eu,InOut:Au};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nu=function(t){return t*t*t*t*t},Vu=Nu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yu=function(t){return--t*t*t*t*t+1},Du=Yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xu=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},ku=Xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pn={In:Vu,Out:Du,InOut:ku};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},Zu=qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bu=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},Uu=Bu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wu=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},Hu=Wu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zn={In:Zu,Out:Uu,InOut:Hu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qu=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},ju=Qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tn=ju;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nr=dn,er=ln,ir=Mn,Ot=mn,vr=wn,sr=$n,bn=_n,It=gn,Rt=Cn,Gt=Pn,hr=zn,Ku=Tn,Ju={Power0:bn,Power1:It.Out,Power2:Ot.Out,Power3:Rt.Out,Power4:Gt.Out,Linear:bn,Quad:It.Out,Cubic:Ot.Out,Quart:Rt.Out,Quint:Gt.Out,Sine:hr.Out,Expo:sr.Out,Circ:ir.Out,Elastic:vr.Out,Back:nr.Out,Bounce:er.Out,Stepped:Ku,"Quad.easeIn":It.In,"Cubic.easeIn":Ot.In,"Quart.easeIn":Rt.In,"Quint.easeIn":Gt.In,"Sine.easeIn":hr.In,"Expo.easeIn":sr.In,"Circ.easeIn":ir.In,"Elastic.easeIn":vr.In,"Back.easeIn":nr.In,"Bounce.easeIn":er.In,"Quad.easeOut":It.Out,"Cubic.easeOut":Ot.Out,"Quart.easeOut":Rt.Out,"Quint.easeOut":Gt.Out,"Sine.easeOut":hr.Out,"Expo.easeOut":sr.Out,"Circ.easeOut":ir.Out,"Elastic.easeOut":vr.Out,"Back.easeOut":nr.Out,"Bounce.easeOut":er.Out,"Quad.easeInOut":It.InOut,"Cubic.easeInOut":Ot.InOut,"Quart.easeInOut":Rt.InOut,"Quint.easeInOut":Gt.InOut,"Sine.easeInOut":hr.InOut,"Expo.easeInOut":sr.InOut,"Circ.easeInOut":ir.InOut,"Elastic.easeInOut":vr.InOut,"Back.easeInOut":nr.InOut,"Bounce.easeInOut":er.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var to=function(t){return t&&t[0].toUpperCase()+t.slice(1)},ro=to;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lt=Ju,ao=ro,no=function(t,r){var a=Lt.Power0;if(typeof t=="string")if(Lt.hasOwnProperty(t))a=Lt[t];else{var n="";if(t.indexOf(".")){n=t.substring(t.indexOf(".")+1);var e=n.toLowerCase();e==="in"?n="easeIn":e==="out"?n="easeOut":e==="inout"&&(n="easeInOut")}t=ao(t.substring(0,t.indexOf(".")+1)+n),Lt.hasOwnProperty(t)&&(a=Lt[t])}else typeof t=="function"&&(a=t);if(!r)return a;var i=r.slice(0);return i.unshift(0),function(v){return i[0]=v,a.apply(this,i)}},eo=no;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pn=cn,io=eo,On=O,vo=function(t,r,a,n,e){n===void 0&&(n=0),e===void 0&&(e=[]);var i=[],v=t.x1,s=t.y1,h=t.x2-v,u=t.y2-s,o=io(r,e),f,x,y=a-1;for(f=0;f<y;f++)x=o(f/y),i.push(new On(v+h*x,s+u*x));if(x=o(1),i.push(new On(v+h*x,s+u*x)),n>0){var c=i[0],d=[c];for(f=1;f<i.length-1;f++){var l=i[f];pn(c,l)>=n&&(d.push(l),c=l)}var m=i[i.length-1];return pn(c,m)<n&&d.pop(),d.push(m),d}else return i},so=vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ho=O,uo=function(t,r){return r===void 0&&(r=new ho),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},oo=uo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fo=O,xo=function(t,r,a){a===void 0&&(a=new fo);var n=t.x1,e=t.y1,i=t.x2,v=t.y2,s=(i-n)*(i-n)+(v-e)*(v-e);if(s===0)return a;var h=((r.x-n)*(i-n)+(r.y-e)*(v-e))/s;return a.x=n+h*(i-n),a.y=e+h*(v-e),a},yo=xo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var co=W,lo=Mt,Mo=O,mo=function(t,r){r===void 0&&(r=new Mo);var a=lo(t)-co.TAU;return r.x=Math.cos(a),r.y=Math.sin(a),r},wo=mo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $o=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=(e-a)*(e-a)+(i-n)*(i-n);if(v===0)return!1;var s=((n-r.y)*(e-a)-(a-r.x)*(i-n))/v;return Math.abs(s)*Math.sqrt(v)},_o=$o;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var go=function(t){return Math.abs(t.y1-t.y2)},Co=go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Po=function(t,r,a){var n=a-r;return r+((t-r)%n+n)%n},ur=Po;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zo=W,To=ur,bo=Mt,po=function(t){var r=bo(t)-zo.TAU;return To(r,-Math.PI,Math.PI)},In=po;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oo=W,Io=Mt,Ro=function(t){return Math.cos(Io(t)-Oo.TAU)},Go=Ro;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lo=W,So=Mt,Eo=function(t){return Math.sin(So(t)-Lo.TAU)},Fo=Eo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ao=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t},No=Ao;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vo=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},Yo=Vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Do=Mt,Xo=In,ko=function(t,r){return 2*Xo(r)-Math.PI-Do(t)},qo=ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zo=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x1-r,s=t.y1-a;return t.x1=v*e-s*i+r,t.y1=v*i+s*e+a,v=t.x2-r,s=t.y2-a,t.x2=v*e-s*i+r,t.y2=v*i+s*e+a,t},Zr=Zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bo=Zr,Uo=function(t,r){var a=(t.x1+t.x2)/2,n=(t.y1+t.y2)/2;return Bo(t,a,n,r)},Wo=Uo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ho=Zr,Qo=function(t,r,a){return Ho(t,r.x,r.y,a)},jo=Qo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ko=function(t,r,a,n,e){return t.x1=r,t.y1=a,t.x2=r+Math.cos(n)*e,t.y2=a+Math.sin(n)*e,t},Jo=Ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tf=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},rf=tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var af=function(t){return Math.abs(t.x1-t.x2)},nf=af;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S=et;S.Angle=Mt,S.BresenhamPoints=ph,S.CenterOn=Ih,S.Clone=Lh,S.CopyFrom=Eh,S.Equals=Ah,S.Extend=Yh,S.GetEasedPoints=so,S.GetMidPoint=oo,S.GetNearestPoint=yo,S.GetNormal=wo,S.GetPoint=Ea,S.GetPoints=Fa,S.GetShortestDistance=_o,S.Height=Co,S.Length=nt,S.NormalAngle=In,S.NormalX=Go,S.NormalY=Fo,S.Offset=No,S.PerpSlope=Yo,S.Random=Aa,S.ReflectAngle=qo,S.Rotate=Wo,S.RotateAroundPoint=jo,S.RotateAroundXY=Zr,S.SetToAngle=Jo,S.Slope=rf,S.Width=nf;var ef=S;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vf=X,sf=K,hf=xt;function Br(t,r,a,n){var e=t-a,i=r-n,v=e*e+i*i;return Math.sqrt(v)}var uf=new vf({initialize:function(r,a,n){this.vertex1=r,this.vertex2=a,this.vertex3=n,this.bounds=new sf,this._inCenter=new hf},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,a=this.vertex2,n=this.vertex3,e,i,v,s,h,u;t?(e=r.x,i=r.y,v=a.x,s=a.y,h=n.x,u=n.y):(e=r.vx,i=r.vy,v=a.vx,s=a.vy,h=n.vx,u=n.vy);var o=Br(h,u,v,s),f=Br(e,i,h,u),x=Br(v,s,e,i),y=o+f+x;return this._inCenter.set((e*o+v*f+h*x)/y,(i*o+s*f+u*x)/y)},contains:function(t,r,a){var n=this.vertex1,e=this.vertex2,i=this.vertex3,v=n.vx,s=n.vy,h=e.vx,u=e.vy,o=i.vx,f=i.vy;if(a){var x=a.a,y=a.b,c=a.c,d=a.d,l=a.e,m=a.f;v=n.vx*x+n.vy*c+l,s=n.vx*y+n.vy*d+m,h=e.vx*x+e.vy*c+l,u=e.vx*y+e.vy*d+m,o=i.vx*x+i.vy*c+l,f=i.vx*y+i.vy*d+m}var w=o-v,M=f-s,$=h-v,_=u-s,g=t-v,I=r-s,G=w*w+M*M,T=w*$+M*_,b=w*g+M*I,z=$*$+_*_,R=$*g+_*I,C=G*z-T*T,E=C===0?0:1/C,P=(z*b-T*R)*E,L=(G*R-T*b)*E;return P>=0&&L>=0&&P+L<1},isCounterClockwise:function(t){var r=this.vertex1,a=this.vertex2,n=this.vertex3,e=(a.vx-r.vx)*(n.vy-r.vy)-(a.vy-r.vy)*(n.vx-r.vx);return t<=0?e>=0:e<0},load:function(t,r,a,n,e){return a=this.vertex1.load(t,r,a,n,e),a=this.vertex2.load(t,r,a,n,e),a=this.vertex3.load(t,r,a,n,e),a},transformCoordinatesLocal:function(t,r,a,n){return this.vertex1.transformCoordinatesLocal(t,r,a,n),this.vertex2.transformCoordinatesLocal(t,r,a,n),this.vertex3.transformCoordinatesLocal(t,r,a,n),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3,n=this.bounds;return n.x=Math.min(t.vx,r.vx,a.vx),n.y=Math.min(t.vy,r.vy,a.vy),n.width=Math.max(t.vx,r.vx,a.vx)-n.x,n.height=Math.max(t.vy,r.vy,a.vy)-n.y,this},isInView:function(t,r,a,n,e,i,v,s,h,u,o){this.update(n,e,i,v,s,h,u,o);var f=this.vertex1,x=this.vertex2,y=this.vertex3;if(f.ta<=0&&x.ta<=0&&y.ta<=0||r&&!this.isCounterClockwise(a))return!1;var c=this.bounds;c.x=Math.min(f.tx,x.tx,y.tx),c.y=Math.min(f.ty,x.ty,y.ty),c.width=Math.max(f.tx,x.tx,y.tx)-c.x,c.height=Math.max(f.ty,x.ty,y.ty)-c.y;var d=t.x+t.width,l=t.y+t.height;return c.width<=0||c.height<=0||t.width<=0||t.height<=0?!1:!(c.right<t.x||c.bottom<t.y||c.x>d||c.y>l)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,a,n,e,i,v,s){return this.vertex1.update(r,a,n,e,i,v,s,t),this.vertex2.update(r,a,n,e,i,v,s,t),this.vertex3.update(r,a,n,e,i,v,s,t),this},translate:function(t,r){r===void 0&&(r=0);var a=this.vertex1,n=this.vertex2,e=this.vertex3;return a.x+=t,a.y+=r,n.x+=t,n.y+=r,e.x+=t,e.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.alpha+r.alpha+a.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.vz+r.vz+a.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),or=uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var of=function(t,r,a){var n=typeof t;return!t||n==="number"||n==="string"?a:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:a},ff=of;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xf=X,Ur=tt,fr=1e-6,xr=new xf({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new xr(this)},set:function(t){return this.copy(t)},setValues:function(t,r,a,n,e,i,v,s,h,u,o,f,x,y,c,d){var l=this.val;return l[0]=t,l[1]=r,l[2]=a,l[3]=n,l[4]=e,l[5]=i,l[6]=v,l[7]=s,l[8]=h,l[9]=u,l[10]=o,l[11]=f,l[12]=x,l[13]=y,l[14]=c,l[15]=d,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,a){var n=mt.fromQuat(a),e=n.val,i=r.x,v=r.y,s=r.z;return this.setValues(e[0]*i,e[1]*i,e[2]*i,0,e[4]*v,e[5]*v,e[6]*v,0,e[8]*s,e[9]*s,e[10]*s,0,t.x,t.y,t.z,1)},xyz:function(t,r,a){this.identity();var n=this.val;return n[12]=t,n[13]=r,n[14]=a,this},scaling:function(t,r,a){this.zero();var n=this.val;return n[0]=t,n[5]=r,n[10]=a,n[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[3],e=t[6],i=t[7],v=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=a,t[9]=e,t[11]=t[14],t[12]=n,t[13]=i,t[14]=v,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],m=r*v-a*i,w=r*s-n*i,M=r*h-e*i,$=a*s-n*v,_=a*h-e*v,g=n*h-e*s,I=u*c-o*y,G=u*d-f*y,T=u*l-x*y,b=o*d-f*c,z=o*l-x*c,R=f*l-x*d,C=m*R-w*z+M*b+$*T-_*G+g*I;return C?(C=1/C,this.setValues((v*R-s*z+h*b)*C,(n*z-a*R-e*b)*C,(c*g-d*_+l*$)*C,(f*_-o*g-x*$)*C,(s*T-i*R-h*G)*C,(r*R-n*T+e*G)*C,(d*M-y*g-l*w)*C,(u*g-f*M+x*w)*C,(i*z-v*T+h*I)*C,(a*T-r*z-e*I)*C,(y*_-c*M+l*m)*C,(o*M-u*_-x*m)*C,(v*G-i*b-s*I)*C,(r*b-a*G+n*I)*C,(c*w-y*$-d*m)*C,(u*$-o*w+f*m)*C)):this},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15];return this.setValues(v*(f*l-x*d)-o*(s*l-h*d)+c*(s*x-h*f),-(a*(f*l-x*d)-o*(n*l-e*d)+c*(n*x-e*f)),a*(s*l-h*d)-v*(n*l-e*d)+c*(n*h-e*s),-(a*(s*x-h*f)-v*(n*x-e*f)+o*(n*h-e*s)),-(i*(f*l-x*d)-u*(s*l-h*d)+y*(s*x-h*f)),r*(f*l-x*d)-u*(n*l-e*d)+y*(n*x-e*f),-(r*(s*l-h*d)-i*(n*l-e*d)+y*(n*h-e*s)),r*(s*x-h*f)-i*(n*x-e*f)+u*(n*h-e*s),i*(o*l-x*c)-u*(v*l-h*c)+y*(v*x-h*o),-(r*(o*l-x*c)-u*(a*l-e*c)+y*(a*x-e*o)),r*(v*l-h*c)-i*(a*l-e*c)+y*(a*h-e*v),-(r*(v*x-h*o)-i*(a*x-e*o)+u*(a*h-e*v)),-(i*(o*d-f*c)-u*(v*d-s*c)+y*(v*f-s*o)),r*(o*d-f*c)-u*(a*d-n*c)+y*(a*f-n*o),-(r*(v*d-s*c)-i*(a*d-n*c)+y*(a*s-n*v)),r*(v*f-s*o)-i*(a*f-n*o)+u*(a*s-n*v))},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],m=r*v-a*i,w=r*s-n*i,M=r*h-e*i,$=a*s-n*v,_=a*h-e*v,g=n*h-e*s,I=u*c-o*y,G=u*d-f*y,T=u*l-x*y,b=o*d-f*c,z=o*l-x*c,R=f*l-x*d;return m*R-w*z+M*b+$*T-_*G+g*I},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=r[6],u=r[7],o=r[8],f=r[9],x=r[10],y=r[11],c=r[12],d=r[13],l=r[14],m=r[15],w=t.val,M=w[0],$=w[1],_=w[2],g=w[3];return r[0]=M*a+$*v+_*o+g*c,r[1]=M*n+$*s+_*f+g*d,r[2]=M*e+$*h+_*x+g*l,r[3]=M*i+$*u+_*y+g*m,M=w[4],$=w[5],_=w[6],g=w[7],r[4]=M*a+$*v+_*o+g*c,r[5]=M*n+$*s+_*f+g*d,r[6]=M*e+$*h+_*x+g*l,r[7]=M*i+$*u+_*y+g*m,M=w[8],$=w[9],_=w[10],g=w[11],r[8]=M*a+$*v+_*o+g*c,r[9]=M*n+$*s+_*f+g*d,r[10]=M*e+$*h+_*x+g*l,r[11]=M*i+$*u+_*y+g*m,M=w[12],$=w[13],_=w[14],g=w[15],r[12]=M*a+$*v+_*o+g*c,r[13]=M*n+$*s+_*f+g*d,r[14]=M*e+$*h+_*x+g*l,r[15]=M*i+$*u+_*y+g*m,this},multiplyLocal:function(t){var r=this.val,a=t.val;return this.setValues(r[0]*a[0]+r[1]*a[4]+r[2]*a[8]+r[3]*a[12],r[0]*a[1]+r[1]*a[5]+r[2]*a[9]+r[3]*a[13],r[0]*a[2]+r[1]*a[6]+r[2]*a[10]+r[3]*a[14],r[0]*a[3]+r[1]*a[7]+r[2]*a[11]+r[3]*a[15],r[4]*a[0]+r[5]*a[4]+r[6]*a[8]+r[7]*a[12],r[4]*a[1]+r[5]*a[5]+r[6]*a[9]+r[7]*a[13],r[4]*a[2]+r[5]*a[6]+r[6]*a[10]+r[7]*a[14],r[4]*a[3]+r[5]*a[7]+r[6]*a[11]+r[7]*a[15],r[8]*a[0]+r[9]*a[4]+r[10]*a[8]+r[11]*a[12],r[8]*a[1]+r[9]*a[5]+r[10]*a[9]+r[11]*a[13],r[8]*a[2]+r[9]*a[6]+r[10]*a[10]+r[11]*a[14],r[8]*a[3]+r[9]*a[7]+r[10]*a[11]+r[11]*a[15],r[12]*a[0]+r[13]*a[4]+r[14]*a[8]+r[15]*a[12],r[12]*a[1]+r[13]*a[5]+r[14]*a[9]+r[15]*a[13],r[12]*a[2]+r[13]*a[6]+r[14]*a[10]+r[15]*a[14],r[12]*a[3]+r[13]*a[7]+r[14]*a[11]+r[15]*a[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var a=t.val,n=r.val,e=a[0],i=a[4],v=a[8],s=a[12],h=a[1],u=a[5],o=a[9],f=a[13],x=a[2],y=a[6],c=a[10],d=a[14],l=a[3],m=a[7],w=a[11],M=a[15],$=n[0],_=n[4],g=n[8],I=n[12],G=n[1],T=n[5],b=n[9],z=n[13],R=n[2],C=n[6],E=n[10],P=n[14],L=n[3],F=n[7],A=n[11],U=n[15];return this.setValues(e*$+i*G+v*R+s*L,h*$+u*G+o*R+f*L,x*$+y*G+c*R+d*L,l*$+m*G+w*R+M*L,e*_+i*T+v*C+s*F,h*_+u*T+o*C+f*F,x*_+y*T+c*C+d*F,l*_+m*T+w*C+M*F,e*g+i*b+v*E+s*A,h*g+u*b+o*E+f*A,x*g+y*b+c*E+d*A,l*g+m*b+w*E+M*A,e*I+i*z+v*P+s*U,h*I+u*z+o*P+f*U,x*I+y*z+c*P+d*U,l*I+m*z+w*P+M*U)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,a){var n=this.val;return n[12]=n[0]*t+n[4]*r+n[8]*a+n[12],n[13]=n[1]*t+n[5]*r+n[9]*a+n[13],n[14]=n[2]*t+n[6]*r+n[10]*a+n[14],n[15]=n[3]*t+n[7]*r+n[11]*a+n[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,a){var n=this.val;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*r,n[5]=n[5]*r,n[6]=n[6]*r,n[7]=n[7]*r,n[8]=n[8]*a,n[9]=n[9]*a,n[10]=n[10]*a,n[11]=n[11]*a,this},makeRotationAxis:function(t,r){var a=Math.cos(r),n=Math.sin(r),e=1-a,i=t.x,v=t.y,s=t.z,h=e*i,u=e*v;return this.setValues(h*i+a,h*v-n*s,h*s+n*v,0,h*v+n*s,u*v+a,u*s-n*i,0,h*s-n*v,u*s+n*i,e*s*s+a,0,0,0,0,1)},rotate:function(t,r){var a=this.val,n=r.x,e=r.y,i=r.z,v=Math.sqrt(n*n+e*e+i*i);if(Math.abs(v)<fr)return this;v=1/v,n*=v,e*=v,i*=v;var s=Math.sin(t),h=Math.cos(t),u=1-h,o=a[0],f=a[1],x=a[2],y=a[3],c=a[4],d=a[5],l=a[6],m=a[7],w=a[8],M=a[9],$=a[10],_=a[11],g=a[12],I=a[13],G=a[14],T=a[15],b=n*n*u+h,z=e*n*u+i*s,R=i*n*u-e*s,C=n*e*u-i*s,E=e*e*u+h,P=i*e*u+n*s,L=n*i*u+e*s,F=e*i*u-n*s,A=i*i*u+h;return this.setValues(o*b+c*z+w*R,f*b+d*z+M*R,x*b+l*z+$*R,y*b+m*z+_*R,o*C+c*E+w*P,f*C+d*E+M*P,x*C+l*E+$*P,y*C+m*E+_*P,o*L+c*F+w*A,f*L+d*F+M*A,x*L+l*F+$*A,y*L+m*F+_*A,g,I,G,T)},rotateX:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[4],i=r[5],v=r[6],s=r[7],h=r[8],u=r[9],o=r[10],f=r[11];return r[4]=e*n+h*a,r[5]=i*n+u*a,r[6]=v*n+o*a,r[7]=s*n+f*a,r[8]=h*n-e*a,r[9]=u*n-i*a,r[10]=o*n-v*a,r[11]=f*n-s*a,this},rotateY:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],v=r[2],s=r[3],h=r[8],u=r[9],o=r[10],f=r[11];return r[0]=e*n-h*a,r[1]=i*n-u*a,r[2]=v*n-o*a,r[3]=s*n-f*a,r[8]=e*a+h*n,r[9]=i*a+u*n,r[10]=v*a+o*n,r[11]=s*a+f*n,this},rotateZ:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],v=r[2],s=r[3],h=r[4],u=r[5],o=r[6],f=r[7];return r[0]=e*n+h*a,r[1]=i*n+u*a,r[2]=v*n+o*a,r[3]=s*n+f*a,r[4]=h*n-e*a,r[5]=u*n-i*a,r[6]=o*n-v*a,r[7]=f*n-s*a,this},fromRotationTranslation:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,v=a+a,s=n+n,h=e+e,u=a*v,o=a*s,f=a*h,x=n*s,y=n*h,c=e*h,d=i*v,l=i*s,m=i*h;return this.setValues(1-(x+c),o+m,f-l,0,o-m,1-(u+c),y+d,0,f+l,y-d,1-(u+x),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,v=a+a,s=n+n,h=r*i,u=r*v,o=r*s,f=a*v,x=a*s,y=n*s,c=e*i,d=e*v,l=e*s;return this.setValues(1-(f+y),u+l,o-d,0,u-l,1-(h+y),x+c,0,o+d,x-c,1-(h+f),0,0,0,0,1)},frustum:function(t,r,a,n,e,i){var v=1/(r-t),s=1/(n-a),h=1/(e-i);return this.setValues(e*2*v,0,0,0,0,e*2*s,0,0,(r+t)*v,(n+a)*s,(i+e)*h,-1,0,0,i*e*2*h,0)},perspective:function(t,r,a,n){var e=1/Math.tan(t/2),i=1/(a-n);return this.setValues(e/r,0,0,0,0,e,0,0,0,0,(n+a)*i,-1,0,0,2*n*a*i,0)},perspectiveLH:function(t,r,a,n){return this.setValues(2*a/t,0,0,0,0,2*a/r,0,0,0,0,-n/(a-n),1,0,0,a*n/(a-n),0)},ortho:function(t,r,a,n,e,i){var v=t-r,s=a-n,h=e-i;return v=v===0?v:1/v,s=s===0?s:1/s,h=h===0?h:1/h,this.setValues(-2*v,0,0,0,0,-2*s,0,0,0,0,2*h,0,(t+r)*v,(n+a)*s,(i+e)*h,1)},lookAtRH:function(t,r,a){var n=this.val;return Q.subVectors(t,r),Q.getLengthSquared()===0&&(Q.z=1),Q.normalize(),it.crossVectors(a,Q),it.getLengthSquared()===0&&(Math.abs(a.z)===1?Q.x+=1e-4:Q.z+=1e-4,Q.normalize(),it.crossVectors(a,Q)),it.normalize(),yr.crossVectors(Q,it),n[0]=it.x,n[1]=it.y,n[2]=it.z,n[4]=yr.x,n[5]=yr.y,n[6]=yr.z,n[8]=Q.x,n[9]=Q.y,n[10]=Q.z,this},lookAt:function(t,r,a){var n=t.x,e=t.y,i=t.z,v=a.x,s=a.y,h=a.z,u=r.x,o=r.y,f=r.z;if(Math.abs(n-u)<fr&&Math.abs(e-o)<fr&&Math.abs(i-f)<fr)return this.identity();var x=n-u,y=e-o,c=i-f,d=1/Math.sqrt(x*x+y*y+c*c);x*=d,y*=d,c*=d;var l=s*c-h*y,m=h*x-v*c,w=v*y-s*x;d=Math.sqrt(l*l+m*m+w*w),d?(d=1/d,l*=d,m*=d,w*=d):(l=0,m=0,w=0);var M=y*w-c*m,$=c*l-x*w,_=x*m-y*l;return d=Math.sqrt(M*M+$*$+_*_),d?(d=1/d,M*=d,$*=d,_*=d):(M=0,$=0,_=0),this.setValues(l,M,x,0,m,$,y,0,w,_,c,0,-(l*n+m*e+w*i),-(M*n+$*e+_*i),-(x*n+y*e+c*i),1)},yawPitchRoll:function(t,r,a){this.zero(),mt.zero(),St.zero();var n=this.val,e=mt.val,i=St.val,v=Math.sin(a),s=Math.cos(a);return n[10]=1,n[15]=1,n[0]=s,n[1]=v,n[4]=-v,n[5]=s,v=Math.sin(r),s=Math.cos(r),e[0]=1,e[15]=1,e[5]=s,e[10]=s,e[9]=-v,e[6]=v,v=Math.sin(t),s=Math.cos(t),i[5]=1,i[15]=1,i[0]=s,i[2]=-v,i[8]=v,i[10]=s,this.multiplyLocal(mt),this.multiplyLocal(St),this},setWorldMatrix:function(t,r,a,n,e){return this.yawPitchRoll(t.y,t.x,t.z),mt.scaling(a.x,a.y,a.z),St.xyz(r.x,r.y,r.z),this.multiplyLocal(mt),this.multiplyLocal(St),n&&this.multiplyLocal(n),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,r){var a=this.val,n=t.val,e=a[0],i=a[1],v=a[2],s=a[3],h=a[4],u=a[5],o=a[6],f=a[7],x=a[8],y=a[9],c=a[10],d=a[11],l=a[12],m=a[13],w=a[14],M=a[15],$=n[0],_=n[1],g=n[2],I=n[3],G=n[4],T=n[5],b=n[6],z=n[7],R=n[8],C=n[9],E=n[10],P=n[11],L=n[12],F=n[13],A=n[14],U=n[15];return r.setValues($*e+_*h+g*x+I*l,_*i+_*u+g*y+I*m,g*v+_*o+g*c+I*w,I*s+_*f+g*d+I*M,G*e+T*h+b*x+z*l,G*i+T*u+b*y+z*m,G*v+T*o+b*c+z*w,G*s+T*f+b*d+z*M,R*e+C*h+E*x+P*l,R*i+C*u+E*y+P*m,R*v+C*o+E*c+P*w,R*s+C*f+E*d+P*M,L*e+F*h+A*x+U*l,L*i+F*u+A*y+U*m,L*v+F*o+A*c+U*w,L*s+F*f+A*d+U*M)},fromRotationXYTranslation:function(t,r,a){var n=r.x,e=r.y,i=r.z,v=Math.sin(t.x),s=Math.cos(t.x),h=Math.sin(t.y),u=Math.cos(t.y),o=n,f=e,x=i,y=-v,c=0-y*h,d=0-s*h,l=y*u,m=s*u;return a||(o=u*n+h*i,f=c*n+s*e+l*i,x=d*n+v*e+m*i),this.setValues(u,c,d,0,0,s,v,0,h,l,m,0,o,f,x,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,a,n))}}),mt=new xr,St=new xr,it=new Ur,yr=new Ur,Q=new Ur,Et=xr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yf={getTintFromFloats:function(t,r,a,n){var e=(t*255|0)&255,i=(r*255|0)&255,v=(a*255|0)&255,s=(n*255|0)&255;return(s<<24|e<<16|i<<8|v)>>>0},getTintAppendFloatAlpha:function(t,r){var a=(r*255|0)&255;return(a<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var a=(t>>16|0)&255,n=(t>>8|0)&255,e=(t|0)&255,i=(r*255|0)&255;return(i<<24|e<<16|n<<8|a)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255;return[r/255,a/255,n/255]},checkShaderMax:function(t,r){var a=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?a:Math.min(a,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var a="",n=0;n<r;n++)n>0&&(a+=`
	else `),n<r-1&&(a+="if (outTexId < "+n+".5)"),a+=`
	{`,a+=`
		texture = texture2D(uMainSampler[`+n+"], outTexCoord);",a+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,a)},setGlowQuality:function(t,r,a,n){return a===void 0&&(a=r.config.glowFXQuality),n===void 0&&(n=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/a/n).toFixed(7)),t=t.replace(/__DIST__/gi,n.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cf=X,df=yf,Rn=tt,lf=new cf({Extends:Rn,initialize:function(r,a,n,e,i,v,s,h,u,o){v===void 0&&(v=16777215),s===void 0&&(s=1),h===void 0&&(h=0),u===void 0&&(u=0),o===void 0&&(o=0),Rn.call(this,r,a,n),this.vx=0,this.vy=0,this.vz=0,this.nx=h,this.ny=u,this.nz=o,this.u=e,this.v=i,this.color=v,this.alpha=s,this.tx=0,this.ty=0,this.ta=0,this.tu=e,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,a,n){var e=this.x,i=this.y,v=this.z,s=t.val,h=e*s[0]+i*s[4]+v*s[8]+s[12],u=e*s[1]+i*s[5]+v*s[9]+s[13],o=e*s[2]+i*s[6]+v*s[10]+s[14],f=e*s[3]+i*s[7]+v*s[11]+s[15];this.vx=h/f*r,this.vy=-(u/f)*a,n<=0?this.vz=o/f:this.vz=-(o/f)},resize:function(t,r,a,n,e,i){return this.x=t,this.y=r,this.vx=this.x*a,this.vy=-this.y*n,this.vz=0,e<.5?this.vx+=a*(.5-e):e>.5&&(this.vx-=a*(e-.5)),i<.5?this.vy+=n*(.5-i):i>.5&&(this.vy-=n*(i-.5)),this},update:function(t,r,a,n,e,i,v,s){var h=this.vx*t+this.vy*a+e,u=this.vx*r+this.vy*n+i;return v&&(h=Math.round(h),u=Math.round(u)),this.tx=h,this.ty=u,this.ta=this.alpha*s,this},load:function(t,r,a,n,e){return t[++a]=this.tx,t[++a]=this.ty,t[++a]=this.tu,t[++a]=this.tv,t[++a]=n,t[++a]=e,r[++a]=df.getTintAppendFloatAlpha(this.color,this.ta),a}}),cr=lf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gn=or,Y=ff,Mf=Et,Ln=tt,wt=cr,Sn=new Ln,En=new Ln,ut=new Mf,mf=function(t){var r=Y(t,"mesh"),a=Y(t,"texture",null),n=Y(t,"frame"),e=Y(t,"width",1),i=Y(t,"height",e),v=Y(t,"widthSegments",1),s=Y(t,"heightSegments",v),h=Y(t,"x",0),u=Y(t,"y",0),o=Y(t,"z",0),f=Y(t,"rotateX",0),x=Y(t,"rotateY",0),y=Y(t,"rotateZ",0),c=Y(t,"zIsUp",!0),d=Y(t,"isOrtho",r?r.dirtyCache[11]:!1),l=Y(t,"colors",[16777215]),m=Y(t,"alphas",[1]),w=Y(t,"tile",!1),M=Y(t,"flipY",!1),$=Y(t,"width",null),_={faces:[],verts:[]};Sn.set(h,u,o),En.set(f,x,y),ut.fromRotationXYTranslation(En,Sn,c);var g;if(!a&&r)a=r.texture,n||(g=r.frame);else if(r&&typeof a=="string")a=r.scene.sys.textures.get(a);else if(!a)return _;g||(g=a.get(n)),!$&&d&&a&&r&&(e=g.width/r.height,i=g.height/r.height);var I=e/2,G=i/2,T=Math.floor(v),b=Math.floor(s),z=T+1,R=b+1,C=e/T,E=i/b,P=[],L=[],F,A,U=0,kt=1,ft=0,Ct=1;g&&(U=g.u0,kt=g.u1,M?(ft=g.v1,Ct=g.v0):(ft=g.v0,Ct=g.v1));var Sl=kt-U,El=Ct-ft;for(A=0;A<R;A++){var Fl=A*E-G;for(F=0;F<z;F++){var Al=F*C-I;L.push(Al,-Fl);var Nl=U+Sl*(F/T),Vl=ft+El*(A/b);P.push(Nl,Vl)}}Array.isArray(l)||(l=[l]),Array.isArray(m)||(m=[m]);var $r=0,_r=0;for(A=0;A<b;A++)for(F=0;F<T;F++){var gr=(F+z*A)*2,st=(F+z*(A+1))*2,Cr=(F+1+z*(A+1))*2,ht=(F+1+z*A)*2,Pt=l[_r],zt=m[$r],wa=new wt(L[gr],L[gr+1],0,P[gr],P[gr+1],Pt,zt).transformMat4(ut),$a=new wt(L[st],L[st+1],0,P[st],P[st+1],Pt,zt).transformMat4(ut),_a=new wt(L[ht],L[ht+1],0,P[ht],P[ht+1],Pt,zt).transformMat4(ut),ga=new wt(L[st],L[st+1],0,P[st],P[st+1],Pt,zt).transformMat4(ut),Ca=new wt(L[Cr],L[Cr+1],0,P[Cr],P[Cr+1],Pt,zt).transformMat4(ut),Pa=new wt(L[ht],L[ht+1],0,P[ht],P[ht+1],Pt,zt).transformMat4(ut);w&&(wa.setUVs(U,Ct),$a.setUVs(U,ft),_a.setUVs(kt,Ct),ga.setUVs(U,ft),Ca.setUVs(kt,ft),Pa.setUVs(kt,Ct)),_r++,_r===l.length&&(_r=0),$r++,$r===m.length&&($r=0),_.verts.push(wa,$a,_a,ga,Ca,Pa),_.faces.push(new Gn(wa,$a,_a),new Gn(ga,Ca,Pa))}return r&&(r.faces=r.faces.concat(_.faces),r.vertices=r.vertices.concat(_.verts)),_},wf=mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $f=or,_f=Et,Fn=tt,Wr=cr,An=new Fn,Nn=new Fn,dr=new _f,gf=function(t,r,a,n,e,i,v,s,h,u){a===void 0&&(a=1),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),v===void 0&&(v=0),s===void 0&&(s=0),h===void 0&&(h=0),u===void 0&&(u=!0);var o={faces:[],verts:[]},f=t.materials;An.set(n,e,i),Nn.set(v,s,h),dr.fromRotationXYTranslation(Nn,An,u);for(var x=0;x<t.models.length;x++)for(var y=t.models[x],c=y.vertices,d=y.textureCoords,l=y.faces,m=0;m<l.length;m++){var w=l[m],M=w.vertices[0],$=w.vertices[1],_=w.vertices[2],g=c[M.vertexIndex],I=c[$.vertexIndex],G=c[_.vertexIndex],T=M.textureCoordsIndex,b=$.textureCoordsIndex,z=_.textureCoordsIndex,R=T===-1?{u:0,v:1}:d[T],C=b===-1?{u:0,v:0}:d[b],E=z===-1?{u:1,v:1}:d[z],P=16777215;w.material!==""&&f[w.material]&&(P=f[w.material]);var L=new Wr(g.x*a,g.y*a,g.z*a,R.u,R.v,P).transformMat4(dr),F=new Wr(I.x*a,I.y*a,I.z*a,C.u,C.v,P).transformMat4(dr),A=new Wr(G.x*a,G.y*a,G.z*a,E.u,E.v,P).transformMat4(dr);o.verts.push(L,F,A),o.faces.push(new $f(L,F,A))}return r&&(r.faces=r.faces.concat(o.faces),r.vertices=r.vertices.concat(o.verts)),o},Cf=gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pf=or,Vn=cr,zf=function(t,r,a,n,e,i,v,s){if(n===void 0&&(n=!1),i===void 0&&(i=16777215),v===void 0&&(v=1),s===void 0&&(s=!1),t.length!==r.length&&!n){console.warn("GenerateVerts: vertices and uvs count not equal");return}var h={faces:[],vertices:[]},u,o,f,x,y,c,d,l,m,w,M,$=n?3:2,_=Array.isArray(i),g=Array.isArray(v);if(Array.isArray(a)&&a.length>0)for(u=0;u<a.length;u++){var I=a[u],G=a[u]*2,T=a[u]*$;o=t[T],f=t[T+1],x=n?t[T+2]:0,y=r[G],c=r[G+1],s&&(c=1-c),d=_?i[I]:i,l=g?v[I]:v,m=0,w=0,M=0,e&&(m=e[T],w=e[T+1],M=n?e[T+2]:0),h.vertices.push(new Vn(o,f,x,y,c,d,l,m,w,M))}else{var b=0,z=0;for(u=0;u<t.length;u+=$)o=t[u],f=t[u+1],x=n?t[u+2]:0,y=r[b],c=r[b+1],d=_?i[z]:i,l=g?v[z]:v,m=0,w=0,M=0,e&&(m=e[u],w=e[u+1],M=n?e[u+2]:0),h.vertices.push(new Vn(o,f,x,y,c,d,l,m,w,M)),b+=2,z++}for(u=0;u<h.vertices.length;u+=3){var R=h.vertices[u],C=h.vertices[u+1],E=h.vertices[u+2];h.faces.push(new Pf(R,C,E))}return h},Tf=zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yn=!0,Dn="untitled",Ft="",Hr="";function bf(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function At(t){return t.models.length===0&&t.models.push({faces:[],name:Dn,textureCoords:[],vertexNormals:[],vertices:[]}),Ft="",t.models[t.models.length-1]}function pf(t,r){var a=t.length>=2?t[1]:Dn;r.models.push({faces:[],name:a,textureCoords:[],vertexNormals:[],vertices:[]}),Ft=""}function Of(t){t.length===2&&(Ft=t[1])}function If(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;At(r).vertices.push({x:n,y:e,z:i})}function Rf(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;isNaN(n)&&(n=0),isNaN(e)&&(e=0),isNaN(i)&&(i=0),Yn&&(e=1-e),At(r).textureCoords.push({u:n,v:e,w:i})}function Gf(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;At(r).vertexNormals.push({x:n,y:e,z:i})}function Lf(t,r){var a=t.length-1;if(!(a<3)){for(var n={group:Ft,material:Hr,vertices:[]},e=0;e<a;e++){var i=t[e+1],v=i.split("/"),s=v.length;if(!(s<1||s>3)){var h=0,u=0,o=0;h=parseInt(v[0],10),s>1&&v[1]!==""&&(u=parseInt(v[1],10)),s>2&&(o=parseInt(v[2],10)),h!==0&&(h<0&&(h=At(r).vertices.length+1+h),u-=1,h-=1,o-=1,n.vertices.push({textureCoordsIndex:u,vertexIndex:h,vertexNormalIndex:o}))}}At(r).faces.push(n)}}function Sf(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function Ef(t){t.length>=2&&(Hr=t[1])}var Ff=function(t,r){r===void 0&&(r=!0),Yn=r;var a={materials:{},materialLibraries:[],models:[]};Ft="",Hr="";for(var n=t.split(`
`),e=0;e<n.length;e++){var i=bf(n[e]),v=i.replace(/\s\s+/g," ").trim().split(" ");switch(v[0].toLowerCase()){case"o":pf(v,a);break;case"g":Of(v);break;case"v":If(v,a);break;case"vt":Rf(v,a);break;case"vn":Gf(v,a);break;case"f":Lf(v,a);break;case"mtllib":Sf(v,a);break;case"usemtl":Ef(v);break}}return a},Af=Ff;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nf=function(t,r,a){return t<<16|r<<8|a},Vf=Nf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yf=Vf,Df=function(t){for(var r={},a=t.split(`
`),n="",e=0;e<a.length;e++){var i=a[e].trim();if(!(i.indexOf("#")===0||i==="")){var v=i.replace(/\s\s+/g," ").trim().split(" ");switch(v[0].toLowerCase()){case"newmtl":{n=v[1];break}case"kd":{var s=Math.floor(v[1]*255),h=v.length>=2?Math.floor(v[2]*255):s,u=v.length>=3?Math.floor(v[3]*255):s;r[n]=Yf(s,h,u);break}}}}return r},Xf=Df;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kf=function(t,r,a,n){var e,i;if(a===void 0&&n===void 0){var v=t.getInCenter();e=v.x,i=v.y}var s=Math.cos(r),h=Math.sin(r),u=t.vertex1,o=t.vertex2,f=t.vertex3,x=u.x-e,y=u.y-i;u.set(x*s-y*h+e,x*h+y*s+i),x=o.x-e,y=o.y-i,o.set(x*s-y*h+e,x*h+y*s+i),x=f.x-e,y=f.y-i,f.set(x*s-y*h+e,x*h+y*s+i)},qf=kf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zf={Face:or,GenerateGridVerts:wf,GenerateObjVerts:Cf,GenerateVerts:Tf,ParseObj:Af,ParseObjMaterial:Xf,RotateFace:qf,Vertex:cr},Bf=Zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uf=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},Wf=Uf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hf=O,Qf=function(t){return new Hf(t.x,t.y)},jf=Qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kf=function(t,r){return r.setTo(t.x,t.y)},Jf=Kf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var t1=function(t,r){return t.x===r.x&&t.y===r.y},r1=t1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var a1=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))},n1=a1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e1=O,i1=function(t,r){if(r===void 0&&(r=new e1),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var a=t.length;if(a<1)throw new Error("GetCentroid points array must not be empty");if(a===1)r.x=t[0].x,r.y=t[0].y;else{for(var n=0;n<a;n++)r.x+=t[n].x,r.y+=t[n].y;r.x/=a,r.y/=a}return r},v1=i1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s1=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},Xn=s1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h1=function(t){return t.x*t.x+t.y*t.y},kn=h1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u1=K,o1=function(t,r){r===void 0&&(r=new u1);for(var a=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,v=0;v<t.length;v++){var s=t[v];s.x>a&&(a=s.x),s.x<n&&(n=s.x),s.y>e&&(e=s.y),s.y<i&&(i=s.y)}return r.x=n,r.y=i,r.width=a-n,r.height=e-i,r},f1=o1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x1=O,y1=function(t,r,a,n){return a===void 0&&(a=0),n===void 0&&(n=new x1),n.x=t.x+(r.x-t.x)*a,n.y=t.y+(r.y-t.y)*a,n},c1=y1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d1=function(t){return t.setTo(t.y,t.x)},l1=d1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var M1=O,m1=function(t,r){return r===void 0&&(r=new M1),r.setTo(-t.x,-t.y)},w1=m1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $1=O,_1=kn,g1=function(t,r,a){a===void 0&&(a=new $1);var n=t.x*r.x+t.y*r.y,e=n/_1(r);return e!==0&&(a.x=e*r.x,a.y=e*r.y),a},C1=g1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var P1=O,z1=function(t,r,a){a===void 0&&(a=new P1);var n=t.x*r.x+t.y*r.y;return n!==0&&(a.x=n*r.x,a.y=n*r.y),a},T1=z1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var b1=Xn,p1=function(t,r){if(t.x!==0||t.y!==0){var a=b1(t);t.x/=a,t.y/=a}return t.x*=r,t.y*=r,t},O1=p1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B=O;B.Ceil=Wf,B.Clone=jf,B.CopyFrom=Jf,B.Equals=r1,B.Floor=n1,B.GetCentroid=v1,B.GetMagnitude=Xn,B.GetMagnitudeSq=kn,B.GetRectangleFromPoints=f1,B.Interpolate=c1,B.Invert=l1,B.Negative=w1,B.Project=C1,B.ProjectUnit=T1,B.SetMagnitude=O1;var I1=B;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R1=function(t,r,a){for(var n=!1,e=-1,i=t.points.length-1;++e<t.points.length;i=e){var v=t.points[e].x,s=t.points[e].y,h=t.points[i].x,u=t.points[i].y;(s<=a&&a<u||u<=a&&a<s)&&r<(h-v)*(a-s)/(u-s)+v&&(n=!n)}return n},Qr=R1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var G1=nt,L1=et,S1=function(t){for(var r=t.points,a=0,n=0;n<r.length;n++){var e=r[n],i=r[(n+1)%r.length],v=new L1(e.x,e.y,i.x,i.y);a+=G1(v)}return a},qn=S1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E1=nt,F1=et,A1=qn,N1=function(t,r,a,n){n===void 0&&(n=[]);var e=t.points,i=A1(t);!r&&a>0&&(r=i/a);for(var v=0;v<r;v++)for(var s=i*(v/r),h=0,u=0;u<e.length;u++){var o=e[u],f=e[(u+1)%e.length],x=new F1(o.x,o.y,f.x,f.y),y=E1(x);if(s<h||s>h+y){h+=y;continue}var c=x.getPoint((s-h)/y);n.push(c);break}return n},Zn=N1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V1=X,Y1=Qr,D1=Zn,X1=at,k1=new V1({initialize:function(r){this.type=X1.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return Y1(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,a=0;a<t.length;a++)r={x:0,y:0},typeof t[a]=="number"||typeof t[a]=="string"?(r.x=parseFloat(t[a]),r.y=parseFloat(t[a+1]),a++):Array.isArray(t[a])?(r.x=t[a][0],r.y=t[a][1]):(r.x=t[a].x,r.y=t[a].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,a,n=0;n<this.points.length-1;n++)r=this.points[n],a=this.points[n+1],t+=(a.x-r.x)*(r.y+a.y);return r=this.points[0],a=this.points[this.points.length-1],t+=(r.x-a.x)*(a.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,a){return D1(this,t,r,a)}}),Bn=k1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q1=Bn,Z1=function(t){return new q1(t.points)},B1=Z1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U1=Qr,W1=function(t,r){return U1(t,r.x,r.y)},H1=W1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function jr(t,r,a){a=a||2;var n=r&&r.length,e=n?r[0]*a:t.length,i=Un(t,0,e,a,!0),v=[];if(!i||i.next===i.prev)return v;var s,h,u,o,f,x,y;if(n&&(i=t0(t,r,i,a)),t.length>80*a){s=u=t[0],h=o=t[1];for(var c=a;c<e;c+=a)f=t[c],x=t[c+1],f<s&&(s=f),x<h&&(h=x),f>u&&(u=f),x>o&&(o=x);y=Math.max(u-s,o-h),y=y!==0?32767/y:0}return Nt(i,v,a,s,h,y,0),v}function Un(t,r,a,n,e){var i,v;if(e===ta(t,r,a,n)>0)for(i=r;i<a;i+=n)v=Qn(i,t[i],t[i+1],v);else for(i=a-n;i>=r;i-=n)v=Qn(i,t[i],t[i+1],v);return v&&lr(v,v.next)&&(Yt(v),v=v.next),v}function ot(t,r){if(!t)return t;r||(r=t);var a=t,n;do if(n=!1,!a.steiner&&(lr(a,a.next)||V(a.prev,a,a.next)===0)){if(Yt(a),a=r=a.prev,a===a.next)break;n=!0}else a=a.next;while(n||a!==r);return r}function Nt(t,r,a,n,e,i,v){if(t){!v&&i&&i0(t,n,e,i);for(var s=t,h,u;t.prev!==t.next;){if(h=t.prev,u=t.next,i?j1(t,n,e,i):Q1(t)){r.push(h.i/a|0),r.push(t.i/a|0),r.push(u.i/a|0),Yt(t),t=u.next,s=u.next;continue}if(t=u,t===s){v?v===1?(t=K1(ot(t),r,a),Nt(t,r,a,n,e,i,2)):v===2&&J1(t,r,a,n,e,i):Nt(ot(t),r,a,n,e,i,1);break}}}}function Q1(t){var r=t.prev,a=t,n=t.next;if(V(r,a,n)>=0)return!1;for(var e=r.x,i=a.x,v=n.x,s=r.y,h=a.y,u=n.y,o=e<i?e<v?e:v:i<v?i:v,f=s<h?s<u?s:u:h<u?h:u,x=e>i?e>v?e:v:i>v?i:v,y=s>h?s>u?s:u:h>u?h:u,c=n.next;c!==r;){if(c.x>=o&&c.x<=x&&c.y>=f&&c.y<=y&&$t(e,s,i,h,v,u,c.x,c.y)&&V(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function j1(t,r,a,n){var e=t.prev,i=t,v=t.next;if(V(e,i,v)>=0)return!1;for(var s=e.x,h=i.x,u=v.x,o=e.y,f=i.y,x=v.y,y=s<h?s<u?s:u:h<u?h:u,c=o<f?o<x?o:x:f<x?f:x,d=s>h?s>u?s:u:h>u?h:u,l=o>f?o>x?o:x:f>x?f:x,m=Kr(y,c,r,a,n),w=Kr(d,l,r,a,n),M=t.prevZ,$=t.nextZ;M&&M.z>=m&&$&&$.z<=w;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==v&&$t(s,o,h,f,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0||(M=M.prevZ,$.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==v&&$t(s,o,h,f,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0))return!1;$=$.nextZ}for(;M&&M.z>=m;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==v&&$t(s,o,h,f,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;$&&$.z<=w;){if($.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==v&&$t(s,o,h,f,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0)return!1;$=$.nextZ}return!0}function K1(t,r,a){var n=t;do{var e=n.prev,i=n.next.next;!lr(e,i)&&Wn(e,n,n.next,i)&&Vt(e,i)&&Vt(i,e)&&(r.push(e.i/a|0),r.push(n.i/a|0),r.push(i.i/a|0),Yt(n),Yt(n.next),n=t=i),n=n.next}while(n!==t);return ot(n)}function J1(t,r,a,n,e,i){var v=t;do{for(var s=v.next.next;s!==v.prev;){if(v.i!==s.i&&h0(v,s)){var h=Hn(v,s);v=ot(v,v.next),h=ot(h,h.next),Nt(v,r,a,n,e,i,0),Nt(h,r,a,n,e,i,0);return}s=s.next}v=v.next}while(v!==t)}function t0(t,r,a,n){var e=[],i,v,s,h,u;for(i=0,v=r.length;i<v;i++)s=r[i]*n,h=i<v-1?r[i+1]*n:t.length,u=Un(t,s,h,n,!1),u===u.next&&(u.steiner=!0),e.push(s0(u));for(e.sort(r0),i=0;i<e.length;i++)a=a0(e[i],a);return a}function r0(t,r){return t.x-r.x}function a0(t,r){var a=n0(t,r);if(!a)return r;var n=Hn(a,t);return ot(n,n.next),ot(a,a.next)}function n0(t,r){var a=r,n=t.x,e=t.y,i=-1/0,v;do{if(e<=a.y&&e>=a.next.y&&a.next.y!==a.y){var s=a.x+(e-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(s<=n&&s>i&&(i=s,v=a.x<a.next.x?a:a.next,s===n))return v}a=a.next}while(a!==r);if(!v)return null;var h=v,u=v.x,o=v.y,f=1/0,x;a=v;do n>=a.x&&a.x>=u&&n!==a.x&&$t(e<o?n:i,e,u,o,e<o?i:n,e,a.x,a.y)&&(x=Math.abs(e-a.y)/(n-a.x),Vt(a,t)&&(x<f||x===f&&(a.x>v.x||a.x===v.x&&e0(v,a)))&&(v=a,f=x)),a=a.next;while(a!==h);return v}function e0(t,r){return V(t.prev,t,r.prev)<0&&V(r.next,t,t.next)<0}function i0(t,r,a,n){var e=t;do e.z===0&&(e.z=Kr(e.x,e.y,r,a,n)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,v0(e)}function v0(t){var r,a,n,e,i,v,s,h,u=1;do{for(a=t,t=null,i=null,v=0;a;){for(v++,n=a,s=0,r=0;r<u&&(s++,n=n.nextZ,!!n);r++);for(h=u;s>0||h>0&&n;)s!==0&&(h===0||!n||a.z<=n.z)?(e=a,a=a.nextZ,s--):(e=n,n=n.nextZ,h--),i?i.nextZ=e:t=e,e.prevZ=i,i=e;a=n}i.nextZ=null,u*=2}while(v>1);return t}function Kr(t,r,a,n,e){return t=(t-a)*e|0,r=(r-n)*e|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function s0(t){var r=t,a=t;do(r.x<a.x||r.x===a.x&&r.y<a.y)&&(a=r),r=r.next;while(r!==t);return a}function $t(t,r,a,n,e,i,v,s){return(e-v)*(r-s)>=(t-v)*(i-s)&&(t-v)*(n-s)>=(a-v)*(r-s)&&(a-v)*(i-s)>=(e-v)*(n-s)}function h0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!u0(t,r)&&(Vt(t,r)&&Vt(r,t)&&o0(t,r)&&(V(t.prev,t,r.prev)||V(t,r.prev,r))||lr(t,r)&&V(t.prev,t,t.next)>0&&V(r.prev,r,r.next)>0)}function V(t,r,a){return(r.y-t.y)*(a.x-r.x)-(r.x-t.x)*(a.y-r.y)}function lr(t,r){return t.x===r.x&&t.y===r.y}function Wn(t,r,a,n){var e=mr(V(t,r,a)),i=mr(V(t,r,n)),v=mr(V(a,n,t)),s=mr(V(a,n,r));return!!(e!==i&&v!==s||e===0&&Mr(t,a,r)||i===0&&Mr(t,n,r)||v===0&&Mr(a,t,n)||s===0&&Mr(a,r,n))}function Mr(t,r,a){return r.x<=Math.max(t.x,a.x)&&r.x>=Math.min(t.x,a.x)&&r.y<=Math.max(t.y,a.y)&&r.y>=Math.min(t.y,a.y)}function mr(t){return t>0?1:t<0?-1:0}function u0(t,r){var a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==r.i&&a.next.i!==r.i&&Wn(a,a.next,t,r))return!0;a=a.next}while(a!==t);return!1}function Vt(t,r){return V(t.prev,t,t.next)<0?V(t,r,t.next)>=0&&V(t,t.prev,r)>=0:V(t,r,t.prev)<0||V(t,t.next,r)<0}function o0(t,r){var a=t,n=!1,e=(t.x+r.x)/2,i=(t.y+r.y)/2;do a.y>i!=a.next.y>i&&a.next.y!==a.y&&e<(a.next.x-a.x)*(i-a.y)/(a.next.y-a.y)+a.x&&(n=!n),a=a.next;while(a!==t);return n}function Hn(t,r){var a=new Jr(t.i,t.x,t.y),n=new Jr(r.i,r.x,r.y),e=t.next,i=r.prev;return t.next=r,r.prev=t,a.next=e,e.prev=a,n.next=a,a.prev=n,i.next=n,n.prev=i,n}function Qn(t,r,a,n){var e=new Jr(t,r,a);return n?(e.next=n.next,e.prev=n,n.next.prev=e,n.next=e):(e.prev=e,e.next=e),e}function Yt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Jr(t,r,a){this.i=t,this.x=r,this.y=a,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}jr.deviation=function(t,r,a,n){var e=r&&r.length,i=e?r[0]*a:t.length,v=Math.abs(ta(t,0,i,a));if(e)for(var s=0,h=r.length;s<h;s++){var u=r[s]*a,o=s<h-1?r[s+1]*a:t.length;v-=Math.abs(ta(t,u,o,a))}var f=0;for(s=0;s<n.length;s+=3){var x=n[s]*a,y=n[s+1]*a,c=n[s+2]*a;f+=Math.abs((t[x]-t[c])*(t[y+1]-t[x+1])-(t[x]-t[y])*(t[c+1]-t[x+1]))}return v===0&&f===0?0:Math.abs((f-v)/v)};function ta(t,r,a,n){for(var e=0,i=r,v=a-n;i<a;i+=n)e+=(t[v]-t[i])*(t[i+1]+t[v+1]),v=i;return e}jr.flatten=function(t){for(var r=t[0][0].length,a={vertices:[],holes:[],dimensions:r},n=0,e=0;e<t.length;e++){for(var i=0;i<t[e].length;i++)for(var v=0;v<r;v++)a.vertices.push(t[e][i][v]);e>0&&(n+=t[e-1].length,a.holes.push(n))}return a};var jn=jr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f0=K,x0=function(t,r){r===void 0&&(r=new f0);for(var a=1/0,n=1/0,e=-a,i=-n,v,s=0;s<t.points.length;s++)v=t.points[s],a=Math.min(a,v.x),n=Math.min(n,v.y),e=Math.max(e,v.x),i=Math.max(i,v.y);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},y0=x0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c0=function(t,r){r===void 0&&(r=[]);for(var a=0;a<t.points.length;a++)r.push(t.points[a].x),r.push(t.points[a].y);return r},d0=c0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l0=function(t){return t.points.reverse(),t},M0=l0;function m0(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n}function w0(t,r,a){var n=r.x,e=r.y,i=a.x-n,v=a.y-e;if(i!==0||v!==0){var s=((t.x-n)*i+(t.y-e)*v)/(i*i+v*v);s>1?(n=a.x,e=a.y):s>0&&(n+=i*s,e+=v*s)}return i=t.x-n,v=t.y-e,i*i+v*v}function $0(t,r){for(var a=t[0],n=[a],e,i=1,v=t.length;i<v;i++)e=t[i],m0(e,a)>r&&(n.push(e),a=e);return a!==e&&n.push(e),n}function ra(t,r,a,n,e){for(var i=n,v,s=r+1;s<a;s++){var h=w0(t[s],t[r],t[a]);h>i&&(v=s,i=h)}i>n&&(v-r>1&&ra(t,r,v,n,e),e.push(t[v]),a-v>1&&ra(t,v,a,n,e))}function _0(t,r){var a=t.length-1,n=[t[0]];return ra(t,0,a,r,n),n.push(t[a]),n}var g0=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=!1);var n=t.points;if(n.length>2){var e=r*r;a||(n=$0(n,e)),t.setTo(_0(n,e))}return t},C0=g0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kn=function(t,r){return t[0]=r[0],t[1]=r[1],t},P0=function(t){var r,a=[],n=t.points;for(r=0;r<n.length;r++)a.push([n[r].x,n[r].y]);var e=[];for(a.length>0&&e.push(Kn([0,0],a[0])),r=0;r<a.length-1;r++){var i=a[r],v=a[r+1],s=i[0],h=i[1],u=v[0],o=v[1];e.push([.85*s+.15*u,.85*h+.15*o]),e.push([.15*s+.85*u,.15*h+.85*o])}return a.length>1&&e.push(Kn([0,0],a[a.length-1])),t.setTo(e)},z0=P0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var T0=function(t,r,a){for(var n=t.points,e=0;e<n.length;e++)n[e].x+=r,n[e].y+=a;return t},b0=T0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j=Bn;j.Clone=B1,j.Contains=Qr,j.ContainsPoint=H1,j.Earcut=jn,j.GetAABB=y0,j.GetNumberArray=d0,j.GetPoints=Zn,j.Perimeter=qn,j.Reverse=M0,j.Simplify=C0,j.Smooth=z0,j.Translate=b0;var p0=j;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O0=function(t){return t.width*t.height},I0=O0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},G0=R0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},S0=L0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E0=function(t,r,a){return t.x=r-t.width/2,t.y=a-t.height/2,t},Jn=E0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F0=K,A0=function(t){return new F0(t.x,t.y,t.width,t.height)},N0=A0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V0=Zt,Y0=function(t,r){return V0(t,r.x,r.y)},D0=Y0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X0=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},te=X0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k0=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},q0=k0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z0=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},B0=Z0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U0=function(t){return t.height===0?NaN:t.width/t.height},aa=U0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var re=aa,W0=function(t,r){var a=re(t);return a<re(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},H0=W0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ae=aa,Q0=function(t,r){var a=ae(t);return a>ae(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},j0=Q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K0=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},J0=K0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tx=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t},rx=tx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ax=K,ne=W,nx=function(t,r){if(r===void 0&&(r=new ax),t.length===0)return r;for(var a=Number.MAX_VALUE,n=Number.MAX_VALUE,e=ne.MIN_SAFE_INTEGER,i=ne.MIN_SAFE_INTEGER,v,s,h,u=0;u<t.length;u++)v=t[u],Array.isArray(v)?(s=v[0],h=v[1]):(s=v.x,h=v.y),a=Math.min(a,s),n=Math.min(n,h),e=Math.max(e,s),i=Math.max(i,h);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},ex=nx;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ix=K,vx=function(t,r,a,n,e){return e===void 0&&(e=new ix),e.setTo(Math.min(t,a),Math.min(r,n),Math.abs(t-a),Math.abs(r-n))},sx=vx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hx=O,ux=function(t,r){return r===void 0&&(r=new hx),r.x=t.centerX,r.y=t.centerY,r},ox=ux;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fx=O,xx=function(t,r){return r===void 0&&(r=new fx),r.x=t.width,r.y=t.height,r},yx=xx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cx=Jn,dx=function(t,r,a){var n=t.centerX,e=t.centerY;return t.setSize(t.width+r*2,t.height+a*2),cx(t,n,e)},lx=dx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mx=K,mx=tr,wx=function(t,r,a){return a===void 0&&(a=new Mx),mx(t,r)?(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y):a.setEmpty(),a},$x=wx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ee=Bt,_x=O,gx=function(t,r,a,n){if(n===void 0&&(n=[]),!r&&!a)return n;r?a=Math.round(ee(t)/r):r=ee(t)/a;for(var e=t.x,i=t.y,v=0,s=0;s<a;s++)switch(n.push(new _x(e,i)),v){case 0:e+=r,e>=t.right&&(v=1,i+=e-t.right,e=t.right);break;case 1:i+=r,i>=t.bottom&&(v=2,e-=i-t.bottom,i=t.bottom);break;case 2:e-=r,e<=t.left&&(v=3,i-=t.left-e,e=t.left);break;case 3:i-=r,i<=t.top&&(v=0,i=t.top);break}return n},Cx=gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Px=function(t,r){for(var a=t.x,n=t.right,e=t.y,i=t.bottom,v=0;v<r.length;v++)a=Math.min(a,r[v].x),n=Math.max(n,r[v].x),e=Math.min(e,r[v].y),i=Math.max(i,r[v].y);return t.x=a,t.y=e,t.width=n-a,t.height=i-e,t},zx=Px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tx=function(t,r){var a=Math.min(t.x,r.x),n=Math.max(t.right,r.right);t.x=a,t.width=n-a;var e=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=e,t.height=i-e,t},bx=Tx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var px=function(t,r,a){var n=Math.min(t.x,r),e=Math.max(t.right,r);t.x=n,t.width=e-n;var i=Math.min(t.y,a),v=Math.max(t.bottom,a);return t.y=i,t.height=v-i,t},Ox=px;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ix=function(t,r,a){return t.x+=r,t.y+=a,t},Rx=Ix;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gx=function(t,r){return t.x+=r.x,t.y+=r.y,t},Lx=Gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sx=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},Ex=Sx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fx=W,Ax=function(t){return t*Fx.DEG_TO_RAD},ie=Ax;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nx=O,Vx=ie,Yx=function(t,r,a){a===void 0&&(a=new Nx),r=Vx(r);var n=Math.sin(r),e=Math.cos(r),i=e>0?t.width/2:t.width/-2,v=n>0?t.height/2:t.height/-2;return Math.abs(i*n)<Math.abs(v*e)?v=i*n/e:i=v*e/n,a.x=i+t.centerX,a.y=v+t.centerY,a},Dx=Yx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xx=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},ve=Xx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kx=ve,qx=te,Zx=O,Bx=function(t,r,a){if(a===void 0&&(a=new Zx),qx(t,r))switch(kx(0,3)){case 0:a.x=t.x+Math.random()*(r.right-t.x),a.y=t.y+Math.random()*(r.top-t.y);break;case 1:a.x=r.x+Math.random()*(t.right-r.x),a.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:a.x=t.x+Math.random()*(r.x-t.x),a.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:a.x=r.right+Math.random()*(t.right-r.right),a.y=t.y+Math.random()*(r.bottom-t.y);break}return a},Ux=Bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wx=function(t,r){return t.width===r.width&&t.height===r.height},Hx=Wx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qx=function(t,r,a){return a===void 0&&(a=r),t.width*=r,t.height*=a,t},jx=Qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kx=K,Jx=function(t,r,a){a===void 0&&(a=new Kx);var n=Math.min(t.x,r.x),e=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-n,v=Math.max(t.bottom,r.bottom)-e;return a.setTo(n,e,i,v)},ty=Jx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p=K;p.Area=I0,p.Ceil=G0,p.CeilAll=S0,p.CenterOn=Jn,p.Clone=N0,p.Contains=Zt,p.ContainsPoint=D0,p.ContainsRect=te,p.CopyFrom=q0,p.Decompose=nn,p.Equals=B0,p.FitInside=H0,p.FitOutside=j0,p.Floor=J0,p.FloorAll=rx,p.FromPoints=ex,p.FromXY=sx,p.GetAspectRatio=aa,p.GetCenter=ox,p.GetPoint=pr,p.GetPoints=Sa,p.GetSize=yx,p.Inflate=lx,p.Intersection=$x,p.MarchingAnts=Cx,p.MergePoints=zx,p.MergeRect=bx,p.MergeXY=Ox,p.Offset=Rx,p.OffsetPoint=Lx,p.Overlaps=Ex,p.Perimeter=Bt,p.PerimeterPoint=Dx,p.Random=Da,p.RandomOutside=Ux,p.SameDimensions=Hx,p.Scale=jx,p.Union=ty;var ry=p;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ay=O,na=nt,ny=function(t,r,a){a===void 0&&(a=new ay);var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return a.x=n.x1,a.y=n.y1,a;var v=na(n),s=na(e),h=na(i),u=v+s+h,o=u*r,f=0;return o<v?(f=o/v,a.x=n.x1+(n.x2-n.x1)*f,a.y=n.y1+(n.y2-n.y1)*f):o>v+s?(o-=v+s,f=o/h,a.x=i.x1+(i.x2-i.x1)*f,a.y=i.y1+(i.y2-i.y1)*f):(o-=v,f=o/s,a.x=e.x1+(e.x2-e.x1)*f,a.y=e.y1+(e.y2-e.y1)*f),a},se=ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ea=nt,ey=O,iy=function(t,r,a,n){n===void 0&&(n=[]);var e=t.getLineA(),i=t.getLineB(),v=t.getLineC(),s=ea(e),h=ea(i),u=ea(v),o=s+h+u;!r&&a>0&&(r=o/a);for(var f=0;f<r;f++){var x=o*(f/r),y=0,c=new ey;x<s?(y=x/s,c.x=e.x1+(e.x2-e.x1)*y,c.y=e.y1+(e.y2-e.y1)*y):x>s+h?(x-=s+h,y=x/u,c.x=v.x1+(v.x2-v.x1)*y,c.y=v.y1+(v.y2-v.y1)*y):(x-=s,y=x/h,c.x=i.x1+(i.x2-i.x1)*y,c.y=i.y1+(i.y2-i.y1)*y),n.push(c)}return n},he=iy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vy=O,sy=function(t,r){r===void 0&&(r=new vy);var a=t.x2-t.x1,n=t.y2-t.y1,e=t.x3-t.x1,i=t.y3-t.y1,v=Math.random(),s=Math.random();return v+s>=1&&(v=1-v,s=1-s),r.x=t.x1+(a*v+e*s),r.y=t.y1+(n*v+i*s),r},ue=sy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hy=X,uy=ar,oy=se,fy=he,xy=at,ia=et,yy=ue,cy=new hy({initialize:function(r,a,n,e,i,v){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),v===void 0&&(v=0),this.type=xy.TRIANGLE,this.x1=r,this.y1=a,this.x2=n,this.y2=e,this.x3=i,this.y3=v},contains:function(t,r){return uy(this,t,r)},getPoint:function(t,r){return oy(this,t,r)},getPoints:function(t,r,a){return fy(this,t,r,a)},getRandomPoint:function(t){return yy(this,t)},setTo:function(t,r,a,n,e,i){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this.x3=e,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new ia),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new ia),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new ia),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),Dt=cy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dy=function(t){var r=t.x1,a=t.y1,n=t.x2,e=t.y2,i=t.x3,v=t.y3;return Math.abs(((i-r)*(e-a)-(n-r)*(v-a))/2)},ly=dy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var My=Dt,my=function(t,r,a){var n=a*(Math.sqrt(3)/2),e=t,i=r,v=t+a/2,s=r+n,h=t-a/2,u=r+n;return new My(e,i,v,s,h,u)},wy=my;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $y=jn,_y=Dt,gy=function(t,r,a,n,e){r===void 0&&(r=null),a===void 0&&(a=1),n===void 0&&(n=1),e===void 0&&(e=[]);for(var i=$y(t,r),v,s,h,u,o,f,x,y,c,d=0;d<i.length;d+=3)v=i[d],s=i[d+1],h=i[d+2],u=t[v*2]*a,o=t[v*2+1]*n,f=t[s*2]*a,x=t[s*2+1]*n,y=t[h*2]*a,c=t[h*2+1]*n,e.push(new _y(u,o,f,x,y,c));return e},Cy=gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Py=Dt,zy=function(t,r,a,n){n===void 0&&(n=a);var e=t,i=r,v=t,s=r-n,h=t+a,u=r;return new Py(e,i,v,s,h,u)},Ty=zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var by=O,py=function(t,r){return r===void 0&&(r=new by),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},oe=py;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t.x3+=r,t.y3+=a,t},fe=Oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iy=oe,Ry=fe,Gy=function(t,r,a,n){n===void 0&&(n=Iy);var e=n(t),i=r-e.x,v=a-e.y;return Ry(t,i,v)},Ly=Gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sy=xt;function va(t,r,a,n){return t*n-r*a}var Ey=function(t,r){r===void 0&&(r=new Sy);var a=t.x3,n=t.y3,e=t.x1-a,i=t.y1-n,v=t.x2-a,s=t.y2-n,h=2*va(e,i,v,s),u=va(i,e*e+i*i,s,v*v+s*s),o=va(e,e*e+i*i,v,v*v+s*s);return r.x=a-u/h,r.y=n+o/h,r},Fy=Ey;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ay=br,Ny=function(t,r){r===void 0&&(r=new Ay);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=t.x3,s=t.y3,h=e-a,u=i-n,o=v-a,f=s-n,x=h*(a+e)+u*(n+i),y=o*(a+v)+f*(n+s),c=2*(h*(s-i)-u*(v-e)),d,l;if(Math.abs(c)<1e-6){var m=Math.min(a,e,v),w=Math.min(n,i,s);d=(Math.max(a,e,v)-m)*.5,l=(Math.max(n,i,s)-w)*.5,r.x=m+d,r.y=w+l,r.radius=Math.sqrt(d*d+l*l)}else r.x=(f*x-u*y)/c,r.y=(h*y-o*x)/c,d=r.x-a,l=r.y-n,r.radius=Math.sqrt(d*d+l*l);return r},Vy=Ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yy=Dt,Dy=function(t){return new Yy(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},Xy=Dy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ky=ar,qy=function(t,r){return ky(t,r.x,r.y)},Zy=qy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var By=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},Uy=By;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wy=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},Hy=Wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qy=O;function sa(t,r,a,n){var e=t-a,i=r-n,v=e*e+i*i;return Math.sqrt(v)}var jy=function(t,r){r===void 0&&(r=new Qy);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,v=t.x3,s=t.y3,h=sa(v,s,e,i),u=sa(a,n,v,s),o=sa(e,i,a,n),f=h+u+o;return r.x=(a*h+e*u+v*o)/f,r.y=(n*h+i*u+s*o)/f,r},xe=jy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ha=nt,Ky=function(t){var r=t.getLineA(),a=t.getLineB(),n=t.getLineC();return ha(r)+ha(a)+ha(n)},Jy=Ky;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tc=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x1-r,s=t.y1-a;return t.x1=v*e-s*i+r,t.y1=v*i+s*e+a,v=t.x2-r,s=t.y2-a,t.x2=v*e-s*i+r,t.y2=v*i+s*e+a,v=t.x3-r,s=t.y3-a,t.x3=v*e-s*i+r,t.y3=v*i+s*e+a,t},ua=tc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rc=ua,ac=xe,nc=function(t,r){var a=ac(t);return rc(t,a.x,a.y,r)},ec=nc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ic=ua,vc=function(t,r,a){return ic(t,r.x,r.y,a)},sc=vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=Dt;N.Area=ly,N.BuildEquilateral=wy,N.BuildFromPolygon=Cy,N.BuildRight=Ty,N.CenterOn=Ly,N.Centroid=oe,N.CircumCenter=Fy,N.CircumCircle=Vy,N.Clone=Xy,N.Contains=ar,N.ContainsArray=Ar,N.ContainsPoint=Zy,N.CopyFrom=Uy,N.Decompose=un,N.Equals=Hy,N.GetPoint=se,N.GetPoints=he,N.InCenter=xe,N.Perimeter=Jy,N.Offset=fe,N.Random=ue,N.Rotate=ec,N.RotateAroundPoint=sc,N.RotateAroundXY=ua;var hc=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uc=at,oc=pa,oa={Circle:dv,Ellipse:vs,Intersects:zh,Line:ef,Mesh:Bf,Point:I1,Polygon:p0,Rectangle:ry,Triangle:hc};oa=oc(!1,oa,uc);var fc=oa,xc=za(fc);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yc=function(t,r,a,n){return Math.atan2(n-r,a-t)},cc=yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dc=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},lc=dc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mc=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},mc=Mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wc=function(t,r,a,n){return Math.atan2(a-t,n-r)},$c=wc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xt=W,_c=function(t){return t>Math.PI&&(t-=Xt.PI2),Math.abs(((t+Xt.TAU)%Xt.PI2-Xt.PI2)%Xt.PI2)},gc=_c;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cc=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},ye=Cc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pc=function(t,r){return Math.random()*(r-t)+t},fa=Pc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zc=fa,Tc=function(){return zc(-Math.PI,Math.PI)},bc=Tc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pc=fa,Oc=function(){return pc(-180,180)},Ic=Oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rc=ye,Gc=function(t){return Rc(t+Math.PI)},Lc=Gc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xa=W,Sc=function(t,r,a){return a===void 0&&(a=.05),t===r||(Math.abs(r-t)<=a||Math.abs(r-t)>=xa.PI2-a?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=xa.PI2:r-=xa.PI2),r>t?t+=a:r<t&&(t-=a))),t},Ec=Sc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fc=function(t,r){var a=r-t;if(a===0)return 0;var n=Math.floor((a- -180)/360);return a-n*360},Ac=Fc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nc=ur,Vc=function(t){return Nc(t,-Math.PI,Math.PI)},Yc=Vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dc=ur,Xc=function(t){return Dc(t,-180,180)},kc=Xc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qc={Between:cc,BetweenPoints:lc,BetweenPointsY:mc,BetweenY:$c,CounterClockwise:gc,Normalize:ye,Random:bc,RandomDegrees:Ic,Reverse:Lc,RotateTo:Ec,ShortestBetween:Ac,Wrap:Yc,WrapDegrees:kc};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zc=function(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n},Bc=Zc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uc=function(t,r,a,n){return Math.max(Math.abs(t-a),Math.abs(r-n))},Wc=Uc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hc=function(t,r,a,n,e){return e===void 0&&(e=2),Math.sqrt(Math.pow(a-t,e)+Math.pow(n-r,e))},Qc=Hc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jc=function(t,r,a,n){return Math.abs(t-a)+Math.abs(r-n)},Kc=jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jc=function(t,r,a,n){var e=t-a,i=r-n;return e*e+i*i},t2=Jc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var r2={Between:Ua,BetweenPoints:cn,BetweenPointsSquared:Bc,Chebyshev:Wc,Power:Qc,Snake:Kc,Squared:t2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var a2={Back:dn,Bounce:ln,Circular:Mn,Cubic:mn,Elastic:wn,Expo:$n,Linear:_n,Quadratic:gn,Quartic:Cn,Quintic:Pn,Sine:zn,Stepped:Tn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var n2=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},e2=n2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var i2=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},v2=i2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s2=function(t,r,a){return a===void 0&&(a=1e-4),t>r-a},h2=s2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u2=function(t,r,a){return a===void 0&&(a=1e-4),t<r+a},o2=u2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f2={Ceil:e2,Equal:Na,Floor:v2,GreaterThan:h2,LessThan:o2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x2=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},ce=x2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ya=ce,y2=function(t,r){return ya(t)/ya(r)/ya(t-r)},de=y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var c2=de,d2=function(t,r){for(var a=0,n=t.length-1,e=0;e<=n;e++)a+=Math.pow(1-r,n-e)*Math.pow(r,e)*t[e]*c2(n,e);return a},l2=d2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var M2=function(t,r,a,n,e){var i=(n-r)*.5,v=(e-a)*.5,s=t*t,h=t*s;return(2*a-2*n+i+v)*h+(-3*a+3*n-2*i-v)*s+i*t+a},le=M2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wr=le,m2=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return t[0]===t[a]?(r<0&&(e=Math.floor(n=a*(1+r))),wr(n-e,t[(e-1+a)%a],t[e],t[(e+1)%a],t[(e+2)%a])):r<0?t[0]-(wr(-n,t[0],t[0],t[1],t[1])-t[0]):r>1?t[a]-(wr(n-a,t[a],t[a],t[a-1],t[a-1])-t[a]):wr(n-e,t[e?e-1:0],t[e],t[a<e+1?a:e+1],t[a<e+2?a:e+2])},w2=m2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function $2(t,r){var a=1-t;return a*a*a*r}function _2(t,r){var a=1-t;return 3*a*a*t*r}function g2(t,r){return 3*(1-t)*t*t*r}function C2(t,r){return t*t*t*r}var P2=function(t,r,a,n,e){return $2(t,r)+_2(t,a)+g2(t,n)+C2(t,e)},z2=P2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var T2=function(t,r,a){return(r-t)*a+t},Me=T2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ca=Me,b2=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return r<0?ca(t[0],t[1],n):r>1?ca(t[a],t[a-1],a-n):ca(t[e],t[e+1>a?a:e+1],n-e)},p2=b2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function O2(t,r){var a=1-t;return a*a*r}function I2(t,r){return 2*(1-t)*t*r}function R2(t,r){return t*t*r}var G2=function(t,r,a,n){return O2(t,r)+I2(t,a)+R2(t,n)},L2=G2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S2=function(t,r,a){return t<=r?0:t>=a?1:(t=(t-r)/(a-r),t*t*(3-2*t))},me=S2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E2=me,F2=function(t,r,a){return r+(a-r)*E2(t,0,1)},A2=F2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N2=function(t,r,a){return t=Math.max(0,Math.min(1,(t-r)/(a-r))),t*t*t*(t*(t*6-15)+10)},we=N2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V2=we,Y2=function(t,r,a){return r+(a-r)*V2(t,0,1)},D2=Y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X2={Bezier:l2,CatmullRom:w2,CubicBezier:z2,Linear:p2,QuadraticBezier:L2,SmoothStep:A2,SmootherStep:D2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k2=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},q2=k2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z2=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},B2=Z2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U2=function(t){return t>0&&(t&t-1)===0},W2=U2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H2={GetNext:q2,IsSize:B2,IsValue:W2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Q2=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.ceil(t/r),n?(a+t)/r:a+t)},j2=Q2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K2=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.floor(t/r),n?(a+t)/r:a+t)},J2=K2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var td=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.round(t/r),n?(a+t)/r:a+t)},rd=td;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ad={Ceil:j2,Floor:J2,To:rd};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nd=X,ed=new nd({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,a=this.n;t=t.toString();for(var n=0;n<t.length;n++)a+=t.charCodeAt(n),r=.02519603282416938*a,a=r>>>0,r-=a,r*=a,a=r>>>0,r-=a,a+=r*4294967296;return this.n=a,(a>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var a=t[r];this.s0-=this.hash(a),this.s0+=~~(this.s0<0),this.s1-=this.hash(a),this.s1+=~~(this.s1<0),this.s2-=this.hash(a),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,a=r;a>0;a--){var n=Math.floor(this.frac()*(a+1)),e=t[n];t[n]=t[a],t[a]=e}return t}}),id=ed;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vd=function(t){for(var r=0,a=0;a<t.length;a++)r+=+t[a];return r/t.length},sd=vd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hd=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.ceil(t*n)/n},ud=hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var od=function(t,r){return Math.abs(t-r)},fd=od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xd=function(){},$e=xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _t=Tr,yd=X,cd=Et,dd=$e,_e=new cd,da=new yd({initialize:function t(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=t.DefaultOrder),this._x=r,this._y=a,this._z=n,this._order=e,this.onChangeCallback=dd},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,a,n){return n===void 0&&(n=this._order),this._x=t,this._y=r,this._z=a,this._order=n,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,a){return r===void 0&&(r=this._order),a===void 0&&(a=!1),_e.fromQuat(t),this.setFromRotationMatrix(_e,r,a)},setFromRotationMatrix:function(t,r,a){r===void 0&&(r=this._order),a===void 0&&(a=!1);var n=t.val,e=n[0],i=n[4],v=n[8],s=n[1],h=n[5],u=n[9],o=n[2],f=n[6],x=n[10],y=0,c=0,d=0,l=.99999;switch(r){case"XYZ":{c=Math.asin(_t(v,-1,1)),Math.abs(v)<l?(y=Math.atan2(-u,x),d=Math.atan2(-i,e)):y=Math.atan2(f,h);break}case"YXZ":{y=Math.asin(-_t(u,-1,1)),Math.abs(u)<l?(c=Math.atan2(v,x),d=Math.atan2(s,h)):c=Math.atan2(-o,e);break}case"ZXY":{y=Math.asin(_t(f,-1,1)),Math.abs(f)<l?(c=Math.atan2(-o,x),d=Math.atan2(-i,h)):d=Math.atan2(s,e);break}case"ZYX":{c=Math.asin(-_t(o,-1,1)),Math.abs(o)<l?(y=Math.atan2(f,x),d=Math.atan2(s,e)):d=Math.atan2(-i,h);break}case"YZX":{d=Math.asin(_t(s,-1,1)),Math.abs(s)<l?(y=Math.atan2(-u,h),c=Math.atan2(-o,e)):c=Math.atan2(v,x);break}case"XZY":{d=Math.asin(-_t(i,-1,1)),Math.abs(i)<l?(y=Math.atan2(f,h),c=Math.atan2(v,e)):y=Math.atan2(-u,x);break}}return this._x=y,this._y=c,this._z=d,this._order=r,a&&this.onChangeCallback(this),this}});da.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],da.DefaultOrder="XYZ";var ld=da;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Md=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.floor(t*n)/n},md=Md;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wd=function(t,r){return t/r/1e3},$d=wd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _d=function(t){return t==parseFloat(t)?!(t%2):void 0},gd=_d;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cd=function(t){return t===parseFloat(t)?!(t%2):void 0},Pd=Cd;/**
 * @author       Greg McLean <GregDevProjects>
 * @copyright    2021 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zd=function(t,r,a){return a===void 0&&(a=0),t.clone().lerp(r,a)},Td=zd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bd=function(t,r,a){return Math.min(t+r,a)},pd=bd;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Od=function(t){var r=t.length;if(r===0)return 0;t.sort(function(n,e){return n-e});var a=Math.floor(r/2);return r%2===0?(t[a]+t[a-1])/2:t[a]},Id=Od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rd=function(t,r,a){return Math.max(t-r,a)},Gd=Rd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ld=function(t,r,a,n){a===void 0&&(a=r+1);var e=(t-r)/(a-r);return e>1?n!==void 0?(e=(n-t)/(n-a),e<0&&(e=0)):e=1:e<0&&(e=0),e},Sd=Ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ed=W,Fd=function(t){return t*Ed.RAD_TO_DEG},Ad=Fd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI;return t.x=Math.cos(a)*r,t.y=Math.sin(a)*r,t},Vd=Nd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI,n=Math.random()*2-1,e=Math.sqrt(1-n*n)*r;return t.x=Math.cos(a)*e,t.y=Math.sin(a)*e,t.z=n*r,t},Dd=Yd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xd=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},kd=Xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qd=function(t,r){var a=t.x,n=t.y;return t.x=a*Math.cos(r)-n*Math.sin(r),t.y=a*Math.sin(r)+n*Math.cos(r),t},Zd=qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bd=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),v=t.x-r,s=t.y-a;return t.x=v*e-s*i+r,t.y=v*i+s*e+a,t},Ud=Bd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wd=function(t,r,a,n,e){var i=n+Math.atan2(t.y-a,t.x-r);return t.x=r+e*Math.cos(i),t.y=a+e*Math.sin(i),t},Hd=Wd;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qd=function(t,r,a,n,e){return t.x=r+e*Math.cos(n),t.y=a+e*Math.sin(n),t},jd=Qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kd=function(t){return t>0?Math.ceil(t):Math.floor(t)},Jd=Kd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tl=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.round(t*n)/n},rl=tl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var al=function(t,r,a,n){r===void 0&&(r=1),a===void 0&&(a=1),n===void 0&&(n=1),n*=Math.PI/t;for(var e=[],i=[],v=0;v<t;v++)a-=r*n,r+=a*n,e[v]=a,i[v]=r;return{sin:i,cos:e,length:t}},nl=al;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var el=xt,il=function(t,r,a,n){n===void 0&&(n=new el);var e=0,i=0,v=r*a;return t>0&&t<=v&&(t>r-1?(i=Math.floor(t/r),e=t-i*r):e=t),n.set(e,i)},vl=il;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sl=xt,hl=function(t,r,a,n,e,i,v,s){s===void 0&&(s=new sl);var h=Math.sin(e),u=Math.cos(e),o=u*i,f=h*i,x=-h*v,y=u*v,c=1/(o*y+x*-f);return s.x=y*c*t+-x*c*r+(n*x-a*y)*c,s.y=o*c*r+-f*c*t+(-n*o+a*f)*c,s},ul=hl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ol=function(t,r,a){return Math.abs(t-r)<=a},fl=ol;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xl=X,ge=new xl({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new ge(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,a=t.val;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this},fromMat4:function(t){var r=t.val,a=this.val;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[4],a[4]=r[5],a[5]=r[6],a[6]=r[8],a[7]=r[9],a[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=a,t[7]=n,this},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8],o=u*i-v*h,f=-u*e+v*s,x=h*e-i*s,y=r*o+a*f+n*x;return y?(y=1/y,t[0]=o*y,t[1]=(-u*a+n*h)*y,t[2]=(v*a-n*i)*y,t[3]=f*y,t[4]=(u*r-n*s)*y,t[5]=(-v*r+n*e)*y,t[6]=x*y,t[7]=(-h*r+a*s)*y,t[8]=(i*r-a*e)*y,this):null},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8];return t[0]=i*u-v*h,t[1]=n*h-a*u,t[2]=a*v-n*i,t[3]=v*s-e*u,t[4]=r*u-n*s,t[5]=n*e-r*v,t[6]=e*h-i*s,t[7]=a*s-r*h,t[8]=r*i-a*e,this},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],v=t[5],s=t[6],h=t[7],u=t[8];return r*(u*i-v*h)+a*(-u*e+v*s)+n*(h*e-i*s)},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=r[6],u=r[7],o=r[8],f=t.val,x=f[0],y=f[1],c=f[2],d=f[3],l=f[4],m=f[5],w=f[6],M=f[7],$=f[8];return r[0]=x*a+y*i+c*h,r[1]=x*n+y*v+c*u,r[2]=x*e+y*s+c*o,r[3]=d*a+l*i+m*h,r[4]=d*n+l*v+m*u,r[5]=d*e+l*s+m*o,r[6]=w*a+M*i+$*h,r[7]=w*n+M*v+$*u,r[8]=w*e+M*s+$*o,this},translate:function(t){var r=this.val,a=t.x,n=t.y;return r[6]=a*r[0]+n*r[3]+r[6],r[7]=a*r[1]+n*r[4]+r[7],r[8]=a*r[2]+n*r[5]+r[8],this},rotate:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],v=r[4],s=r[5],h=Math.sin(t),u=Math.cos(t);return r[0]=u*a+h*i,r[1]=u*n+h*v,r[2]=u*e+h*s,r[3]=u*i-h*a,r[4]=u*v-h*n,r[5]=u*s-h*e,this},scale:function(t){var r=this.val,a=t.x,n=t.y;return r[0]=a*r[0],r[1]=a*r[1],r[2]=a*r[2],r[3]=n*r[3],r[4]=n*r[4],r[5]=n*r[5],this},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,v=a+a,s=n+n,h=r*i,u=r*v,o=r*s,f=a*v,x=a*s,y=n*s,c=e*i,d=e*v,l=e*s,m=this.val;return m[0]=1-(f+y),m[3]=u+l,m[6]=o-d,m[1]=u-l,m[4]=1-(h+y),m[7]=x+c,m[2]=o+d,m[5]=x-c,m[8]=1-(h+f),this},normalFromMat4:function(t){var r=t.val,a=this.val,n=r[0],e=r[1],i=r[2],v=r[3],s=r[4],h=r[5],u=r[6],o=r[7],f=r[8],x=r[9],y=r[10],c=r[11],d=r[12],l=r[13],m=r[14],w=r[15],M=n*h-e*s,$=n*u-i*s,_=n*o-v*s,g=e*u-i*h,I=e*o-v*h,G=i*o-v*u,T=f*l-x*d,b=f*m-y*d,z=f*w-c*d,R=x*m-y*l,C=x*w-c*l,E=y*w-c*m,P=M*E-$*C+_*R+g*z-I*b+G*T;return P?(P=1/P,a[0]=(h*E-u*C+o*R)*P,a[1]=(u*z-s*E-o*b)*P,a[2]=(s*C-h*z+o*T)*P,a[3]=(i*C-e*E-v*R)*P,a[4]=(n*E-i*z+v*b)*P,a[5]=(e*z-n*C-v*T)*P,a[6]=(l*G-m*I+w*g)*P,a[7]=(m*_-d*G-w*$)*P,a[8]=(d*I-l*_+w*M)*P,this):null}}),Ce=ge;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yl=X,cl=Ce,dl=$e,la=tt,Pe=1e-6,ze=new Int8Array([1,2,0]),gt=new Float32Array([0,0,0]),ll=new la(1,0,0),Ml=new la(0,1,0),vt=new la,Te=new cl,ml=new yl({initialize:function(r,a,n,e){this.onChangeCallback=dl,this.set(r,a,n,e)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,a,n,e){return e===void 0&&(e=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=a||0,this._w=n||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=r*e,this._z=a*e,this._w=n*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.set(a+r*(t.x-a),n+r*(t.y-n),e+r*(t.z-e),i+r*(t.w-i))},rotationTo:function(t,r){var a=t.x*r.x+t.y*r.y+t.z*r.z;return a<-.999999?(vt.copy(ll).cross(t).length()<Pe&&vt.copy(Ml).cross(t),vt.normalize(),this.setAxisAngle(vt,Math.PI)):a>.999999?this.set(0,0,0,1):(vt.copy(t).cross(r),this._x=vt.x,this._y=vt.y,this._z=vt.z,this._w=1+a,this.normalize())},setAxes:function(t,r,a){var n=Te.val;return n[0]=r.x,n[3]=r.y,n[6]=r.z,n[1]=a.x,n[4]=a.y,n[7]=a.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(Te).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var a=Math.sin(r);return this.set(a*t.x,a*t.y,a*t.z,Math.cos(r))},multiply:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.x,v=t.y,s=t.z,h=t.w;return this.set(r*h+e*i+a*s-n*v,a*h+e*v+n*i-r*s,n*h+e*s+r*v-a*i,e*h-r*i-a*v-n*s)},slerp:function(t,r){var a=this.x,n=this.y,e=this.z,i=this.w,v=t.x,s=t.y,h=t.z,u=t.w,o=a*v+n*s+e*h+i*u;o<0&&(o=-o,v=-v,s=-s,h=-h,u=-u);var f=1-r,x=r;if(1-o>Pe){var y=Math.acos(o),c=Math.sin(y);f=Math.sin((1-r)*y)/c,x=Math.sin(r*y)/c}return this.set(f*a+x*v,f*n+x*s,f*e+x*h,f*i+x*u)},invert:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n,i=e?1/e:0;return this.set(-t*i,-r*i,-a*i,n*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v+e*i,a*v+n*i,n*v-a*i,e*v-r*i)},rotateY:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v-n*i,a*v+e*i,n*v+r*i,e*v-a*i)},rotateZ:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),v=Math.cos(t);return this.set(r*v+a*i,a*v-r*i,n*v+e*i,e*v-n*i)},calculateW:function(){var t=this.x,r=this.y,a=this.z;return this.w=-Math.sqrt(1-t*t-r*r-a*a),this},setFromEuler:function(t,r){var a=t.x/2,n=t.y/2,e=t.z/2,i=Math.cos(a),v=Math.cos(n),s=Math.cos(e),h=Math.sin(a),u=Math.sin(n),o=Math.sin(e);switch(t.order){case"XYZ":{this.set(h*v*s+i*u*o,i*u*s-h*v*o,i*v*o+h*u*s,i*v*s-h*u*o,r);break}case"YXZ":{this.set(h*v*s+i*u*o,i*u*s-h*v*o,i*v*o-h*u*s,i*v*s+h*u*o,r);break}case"ZXY":{this.set(h*v*s-i*u*o,i*u*s+h*v*o,i*v*o+h*u*s,i*v*s-h*u*o,r);break}case"ZYX":{this.set(h*v*s-i*u*o,i*u*s+h*v*o,i*v*o-h*u*s,i*v*s+h*u*o,r);break}case"YZX":{this.set(h*v*s+i*u*o,i*u*s+h*v*o,i*v*o-h*u*s,i*v*s-h*u*o,r);break}case"XZY":{this.set(h*v*s-i*u*o,i*u*s-h*v*o,i*v*o+h*u*s,i*v*s+h*u*o,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,a=r[0],n=r[4],e=r[8],i=r[1],v=r[5],s=r[9],h=r[2],u=r[6],o=r[10],f=a+v+o,x;return f>0?(x=.5/Math.sqrt(f+1),this.set((u-s)*x,(e-h)*x,(i-n)*x,.25/x)):a>v&&a>o?(x=2*Math.sqrt(1+a-v-o),this.set(.25*x,(n+i)/x,(e+h)/x,(u-s)/x)):v>o?(x=2*Math.sqrt(1+v-a-o),this.set((n+i)/x,.25*x,(s+u)/x,(e-h)/x)):(x=2*Math.sqrt(1+o-a-v),this.set((e+h)/x,(s+u)/x,.25*x,(i-n)/x)),this},fromMat3:function(t){var r=t.val,a=r[0]+r[4]+r[8],n;if(a>0)n=Math.sqrt(a+1),this.w=.5*n,n=.5/n,this._x=(r[7]-r[5])*n,this._y=(r[2]-r[6])*n,this._z=(r[3]-r[1])*n;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[e*3+e]&&(e=2);var i=ze[e],v=ze[i];n=Math.sqrt(r[e*3+e]-r[i*3+i]-r[v*3+v]+1),gt[e]=.5*n,n=.5/n,gt[i]=(r[i*3+e]+r[e*3+i])*n,gt[v]=(r[v*3+e]+r[e*3+v])*n,this._x=gt[0],this._y=gt[1],this._z=gt[2],this._w=(r[v*3+i]-r[i*3+v])*n}return this.onChangeCallback(this),this}}),be=ml;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wl=tt,$l=Et,_l=be,pe=new $l,Oe=new _l,gl=new wl,Cl=function(t,r,a){return Oe.setAxisAngle(r,a),pe.fromRotationTranslation(Oe,gl.set(0,0,0)),t.transformMat4(pe)},Pl=Cl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zl=W,Tl=pa,Ma={Angle:qc,Distance:r2,Easing:a2,Fuzzy:f2,Interpolation:X2,Pow2:H2,Snap:ad,RandomDataGenerator:id,Average:sd,Bernstein:de,Between:ve,CatmullRom:le,CeilTo:ud,Clamp:Tr,DegToRad:ie,Difference:fd,Euler:ld,Factorial:ce,FloatBetween:fa,FloorTo:md,FromPercent:pt,GetSpeed:$d,IsEven:gd,IsEvenStrict:Pd,Linear:Me,LinearXY:Td,MaxAdd:pd,Median:Id,MinSub:Gd,Percent:Sd,RadToDeg:Ad,RandomXY:Vd,RandomXYZ:Dd,RandomXYZW:kd,Rotate:Zd,RotateAround:Ud,RotateAroundDistance:Hd,RotateTo:jd,RoundAwayFromZero:Jd,RoundTo:rl,SinCosTableGenerator:nl,SmootherStep:we,SmoothStep:me,ToXY:vl,TransformXY:ul,Within:fl,Wrap:ur,Vector2:xt,Vector3:tt,Vector4:Sr,Matrix3:Ce,Matrix4:Et,Quaternion:be,RotateVec3:Pl};Ma=Tl(!1,Ma,zl);var bl=Ma,ma=za(bl);function pl(t,r){let a=new xc.Point(0,0),n=ma.Angle.BetweenPoints(a,new ma.Vector2(t,r));return ma.RadToDeg(n)}function Ol(t){switch(t){case"entity":return 1;case"position":return 2**1;case"velocity":return 2**2;case"health":return 2**3;case"controller":return 2**4;case"controlled":return 2**5;case"attack":return 2**6;default:return 0}}function Ie(t){let r=0;return t.forEach(a=>{r|=Ol(a)}),r}function Il(t,r,a){Atomics.or(t.entity.components,r,Ie(a))}function Rl(t){let r=Re(t);for(;r===!1;)r=Re(t);return r}function Re(t){let r=Atomics.load(t.recycledIndexes,0);if(r>0){let a=Atomics.load(t.recycledIds,r);return a===0||Atomics.compareExchange(t.recycledIndexes,0,r,r-1)!==r?!1:(Atomics.compareExchange(t.recycledIds,r,a,0),Atomics.store(t.components.entity.init,a,0),Atomics.store(t.components.entity.components,a,0),Atomics.store(t.components.entity.dead,a,0),a)}else return Atomics.add(t.idCounter,0,1)+1}function Gl(t,r){let a=Ie(r),n=[],e=Atomics.load(t.idCounter,0);for(let i=0;i<=e;i++)(Atomics.load(t.components.entity.components,i)&a)===a&&Atomics.load(t.components.entity.dead,i)===0&&n.push(i);return n}function Ll(t){const r=t.components.controller,a=t.components.controlled,n=t.components.position,e=t.components.velocity,i=t.components.health;return()=>{Gl(t,["controller"]).forEach(s=>{if(r.money[s]>0){let h=Rl(t);Il(t.components,h,["entity","position","health","velocity","controlled","attack"]),Atomics.store(n.width,h,10*1e3),Atomics.store(n.height,h,5*1e3),Atomics.store(i.shields,h,1),Atomics.store(i.maxShields,h,1),Atomics.store(i.timeToRegenerateShields,h,1e3*1e3),Atomics.store(e.speed,h,100),Atomics.store(a.owner,h,s),Atomics.store(n.x,h,Atomics.load(n.x,s)),Atomics.store(n.y,h,Atomics.load(n.y,s));let u=(Math.random()>.5?-1:1)*Math.random()*100,o=(Math.random()>.5?-1:1)*Math.random()*100;Atomics.store(e.x,h,u),Atomics.store(e.y,h,o),Atomics.store(n.angle,h,pl(u,o)),Atomics.sub(r.money,s,1),Atomics.store(t.components.entity.init,h,1)}})}}Ge(Ll)})();
