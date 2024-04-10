(function(){"use strict";function Fe(t){let r,a=n=>{console.warn("Updating system before sent")};self.onmessage=function(n){n.data.world?(r=n.data.world,a=t(r)):n.data.updateWorld?Object.keys(n.data.updateWorld).forEach(e=>{r[e]=n.data.updateWorld[e]}):n.data.delta&&(a(n.data.delta),self.postMessage({done:!0}))}}function Ta(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ae={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},at=Ae;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ne=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},Ve=Ne;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oa=Ve,pa=function(){var t,r,a,n,e,i,s=arguments[0]||{},v=1,h=arguments.length,u=!1;for(typeof s=="boolean"&&(u=s,s=arguments[1]||{},v=2),h===v&&(s=this,--v);v<h;v++)if((t=arguments[v])!=null)for(r in t)a=s[r],n=t[r],s!==n&&(u&&n&&(Oa(n)||(e=Array.isArray(n)))?(e?(e=!1,i=a&&Array.isArray(a)?a:[]):i=a&&Oa(a)?a:{},s[r]=pa(u,i,n)):n!==void 0&&(s[r]=n));return s},Ia=pa;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Ye(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function De(t,r,a){var n=a?t[r]:Object.getOwnPropertyDescriptor(t,r);return!a&&n.value&&typeof n.value=="object"&&(n=n.value),n&&Ye(n)?(typeof n.enumerable>"u"&&(n.enumerable=!0),typeof n.configurable>"u"&&(n.configurable=!0),n):!1}function Xe(t,r){var a=Object.getOwnPropertyDescriptor(t,r);return a?(a.value&&typeof a.value=="object"&&(a=a.value),a.configurable===!1):!1}function Pr(t,r,a,n){for(var e in r)if(r.hasOwnProperty(e)){var i=De(r,e,a);if(i!==!1){var s=n||t;if(Xe(s.prototype,e)){if(Tt.ignoreFinals)continue;throw new Error("cannot override final property '"+e+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,e,i)}else t.prototype[e]=r[e]}}function Ra(t,r){if(r){Array.isArray(r)||(r=[r]);for(var a=0;a<r.length;a++)Pr(t,r[a].prototype||r[a])}}function Tt(t){t||(t={});var r,a;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;r=function(){n.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,a=t.Extends,delete t.Extends):r.prototype.constructor=r;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),Ra(r,e),Pr(r,t,!0,a),r}Tt.extend=Pr,Tt.mixin=Ra,Tt.ignoreFinals=!1;var X=Tt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ke=function(t,r,a){if(t.radius>0&&r>=t.left&&r<=t.right&&a>=t.top&&a<=t.bottom){var n=(t.x-r)*(t.x-r),e=(t.y-a)*(t.y-a);return n+e<=t.radius*t.radius}else return!1},Ot=ke;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qe=X,Ze=at,Be=new qe({initialize:function(r,a){r===void 0&&(r=0),a===void 0&&(a=r),this.type=Ze.POINT,this.x=r,this.y=a},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),p=Be;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var je=p,Ue=function(t,r,a){return a===void 0&&(a=new je),a.x=t.x+t.radius*Math.cos(r),a.y=t.y+t.radius*Math.sin(r),a},br=Ue;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var We=function(t,r,a){return Math.max(r,Math.min(a,t))},Tr=We;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qe=Tr,He=function(t,r,a){return t=Qe(t,0,1),(a-r)*t+r},pt=He;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ke={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},U=Ke;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Je=br,ti=pt,ri=U,ai=p,ni=function(t,r,a){a===void 0&&(a=new ai);var n=ti(r,0,ri.PI2);return Je(t,n,a)},Ga=ni;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ei=function(t){return 2*(Math.PI*t.radius)},La=ei;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ii=La,si=br,vi=pt,hi=U,ui=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ii(t)/a);for(var e=0;e<r;e++){var i=vi(e/r,0,hi.PI2);n.push(si(t,i))}return n},Sa=ui;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oi=p,fi=function(t,r){r===void 0&&(r=new oi);var a=2*Math.PI*Math.random(),n=Math.random()+Math.random(),e=n>1?2-n:n,i=e*Math.cos(a),s=e*Math.sin(a);return r.x=t.x+i*t.radius,r.y=t.y+s*t.radius,r},Ea=fi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xi=X,yi=Ot,ci=Ga,di=Sa,li=at,Mi=Ea,mi=new xi({initialize:function(r,a,n){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=li.CIRCLE,this.x=r,this.y=a,this._radius=n,this._diameter=n*2},contains:function(t,r){return yi(this,t,r)},getPoint:function(t,r){return ci(this,t,r)},getPoints:function(t,r,a){return di(this,t,r,a)},getRandomPoint:function(t){return Mi(this,t)},setTo:function(t,r,a){return this.x=t,this.y=r,this._radius=a,this._diameter=a*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),Or=mi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wi=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},$i=wi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _i=Or,gi=function(t){return new _i(t.x,t.y,t.radius)},Ci=gi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zi=Ot,Pi=function(t,r){return zi(t,r.x,r.y)},bi=Pi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zt=Ot,Ti=function(t,r){return Zt(t,r.x,r.y)&&Zt(t,r.right,r.y)&&Zt(t,r.x,r.bottom)&&Zt(t,r.right,r.bottom)},Oi=Ti;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pi=function(t,r){return r.setTo(t.x,t.y,t.radius)},Ii=pi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ri=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},Gi=Ri;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Li=function(t,r,a){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=a&&t.y+t.height>=a},Bt=Li;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Si=function(t){return 2*(t.width+t.height)},jt=Si;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ei=jt,Fi=p,Ai=function(t,r,a){if(a===void 0&&(a=new Fi),r<=0||r>=1)return a.x=t.x,a.y=t.y,a;var n=Ei(t)*r;return r>.5?(n-=t.width+t.height,n<=t.width?(a.x=t.right-n,a.y=t.bottom):(a.x=t.x,a.y=t.bottom-(n-t.width))):n<=t.width?(a.x=t.x+n,a.y=t.y):(a.x=t.right,a.y=t.y+(n-t.width)),a},pr=Ai;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ni=pr,Vi=jt,Yi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Vi(t)/a);for(var e=0;e<r;e++){var i=e/r;n.push(Ni(t,i))}return n},Fa=Yi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Di=p,Xi=function(t,r,a){return a===void 0&&(a=new Di),a.x=t.x1+(t.x2-t.x1)*r,a.y=t.y1+(t.y2-t.y1)*r,a},Aa=Xi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ki=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},nt=ki;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qi=nt,Zi=p,Bi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=qi(t)/a);for(var e=t.x1,i=t.y1,s=t.x2,v=t.y2,h=0;h<r;h++){var u=h/r,o=e+(s-e)*u,f=i+(v-i)*u;n.push(new Zi(o,f))}return n},Na=Bi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ji=p,Ui=function(t,r){r===void 0&&(r=new ji);var a=Math.random();return r.x=t.x1+a*(t.x2-t.x1),r.y=t.y1+a*(t.y2-t.y1),r},Va=Ui;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wi=function(t,r,a){return a===void 0&&(a=1e-4),Math.abs(t-r)<a},Ya=Wi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qi=X,Da=Ya,W=new Qi({initialize:function(r,a){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(a===void 0&&(a=r),this.x=r||0,this.y=a||0)},clone:function(){return new W(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return Da(this.x,t.x,r)&&Da(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y;return Math.sqrt(r*r+a*a)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y;return r*r+a*a},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,a=t*t+r*r;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this},transformMat3:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[3]*a+n[6],this.y=n[1]*r+n[4]*a+n[7],this},transformMat4:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[4]*a+n[12],this.y=n[1]*r+n[5]*a+n[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),a=Math.sin(t);return this.set(r*this.x-a*this.y,a*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});W.ZERO=new W,W.RIGHT=new W(1,0),W.LEFT=new W(-1,0),W.UP=new W(0,-1),W.DOWN=new W(0,1),W.ONE=new W(1,1);var xt=W;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hi=X,Ki=Aa,Ji=Na,ts=at,rs=Va,Xa=xt,as=new Hi({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=ts.LINE,this.x1=r,this.y1=a,this.x2=n,this.y2=e},getPoint:function(t,r){return Ki(this,t,r)},getPoints:function(t,r,a){return Ji(this,t,r,a)},getRandomPoint:function(t){return rs(this,t)},setTo:function(t,r,a,n){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Xa),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Xa),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),et=as;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ns=p,es=function(t,r){return r===void 0&&(r=new ns),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},ka=es;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var is=X,ss=Bt,vs=pr,hs=Fa,us=at,Ut=et,os=ka,fs=new is({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=us.RECTANGLE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return ss(this,t,r)},getPoint:function(t,r){return vs(this,t,r)},getPoints:function(t,r,a){return hs(this,t,r,a)},getRandomPoint:function(t){return os(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new Ut),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new Ut),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),K=fs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xs=K,ys=function(t,r){return r===void 0&&(r=new xs),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},cs=ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ds=function(t,r,a){return t.x+=r,t.y+=a,t},ls=ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ms=function(t,r){return t.x+=r.x,t.y+=r.y,t},ms=Ms;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k=Or;k.Area=$i,k.Circumference=La,k.CircumferencePoint=br,k.Clone=Ci,k.Contains=Ot,k.ContainsPoint=bi,k.ContainsRect=Oi,k.CopyFrom=Ii,k.Equals=Gi,k.GetBounds=cs,k.GetPoint=Ga,k.GetPoints=Sa,k.Offset=ls,k.OffsetPoint=ms,k.Random=Ea;var ws=k;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $s=function(t,r,a){if(t.width<=0||t.height<=0)return!1;var n=(r-t.x)/t.width,e=(a-t.y)/t.height;return n*=n,e*=e,n+e<.25},Wt=$s;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _s=p,gs=function(t,r,a){a===void 0&&(a=new _s);var n=t.width/2,e=t.height/2;return a.x=t.x+n*Math.cos(r),a.y=t.y+e*Math.sin(r),a},Ir=gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cs=Ir,zs=pt,Ps=U,bs=p,Ts=function(t,r,a){a===void 0&&(a=new bs);var n=zs(r,0,Ps.PI2);return Cs(t,n,a)},qa=Ts;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Os=function(t){var r=t.width/2,a=t.height/2,n=Math.pow(r-a,2)/Math.pow(r+a,2);return Math.PI*(r+a)*(1+3*n/(10+Math.sqrt(4-3*n)))},Za=Os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ps=Za,Is=Ir,Rs=pt,Gs=U,Ls=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ps(t)/a);for(var e=0;e<r;e++){var i=Rs(e/r,0,Gs.PI2);n.push(Is(t,i))}return n},Ba=Ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ss=p,Es=function(t,r){r===void 0&&(r=new Ss);var a=Math.random()*Math.PI*2,n=Math.sqrt(Math.random());return r.x=t.x+n*Math.cos(a)*t.width/2,r.y=t.y+n*Math.sin(a)*t.height/2,r},ja=Es;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fs=X,As=Wt,Ns=qa,Vs=Ba,Ys=at,Ds=ja,Xs=new Fs({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Ys.ELLIPSE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return As(this,t,r)},getPoint:function(t,r){return Ns(this,t,r)},getPoints:function(t,r,a){return Vs(this,t,r,a)},getRandomPoint:function(t){return Ds(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),Ua=Xs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ks=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},qs=ks;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zs=Ua,Bs=function(t){return new Zs(t.x,t.y,t.width,t.height)},js=Bs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Us=Wt,Ws=function(t,r){return Us(t,r.x,r.y)},Qs=Ws;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qt=Wt,Hs=function(t,r){return Qt(t,r.x,r.y)&&Qt(t,r.right,r.y)&&Qt(t,r.x,r.bottom)&&Qt(t,r.right,r.bottom)},Ks=Hs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Js=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},tv=Js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rv=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},av=rv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nv=K,ev=function(t,r){return r===void 0&&(r=new nv),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},iv=ev;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sv=function(t,r,a){return t.x+=r,t.y+=a,t},vv=sv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hv=function(t,r){return t.x+=r.x,t.y+=r.y,t},uv=hv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q=Ua;q.Area=qs,q.Circumference=Za,q.CircumferencePoint=Ir,q.Clone=js,q.Contains=Wt,q.ContainsPoint=Qs,q.ContainsRect=Ks,q.CopyFrom=tv,q.Equals=av,q.GetBounds=iv,q.GetPoint=qa,q.GetPoints=Ba,q.Offset=vv,q.OffsetPoint=uv,q.Random=ja;var ov=q;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fv=function(t,r,a,n){var e=t-a,i=r-n;return Math.sqrt(e*e+i*i)},Wa=fv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xv=Wa,yv=function(t,r){return xv(t.x,t.y,r.x,r.y)<=t.radius+r.radius},Qa=yv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cv=function(t,r){var a=r.width/2,n=r.height/2,e=Math.abs(t.x-r.x-a),i=Math.abs(t.y-r.y-n),s=a+t.radius,v=n+t.radius;if(e>s||i>v)return!1;if(e<=a||i<=n)return!0;var h=e-a,u=i-n,o=h*h,f=u*u,x=t.radius*t.radius;return o+f<=x},Ha=cv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yt=p,dv=Qa,lv=function(t,r,a){if(a===void 0&&(a=[]),dv(t,r)){var n=t.x,e=t.y,i=t.radius,s=r.x,v=r.y,h=r.radius,u,o,f,x,y;if(e===v)y=(h*h-i*i-s*s+n*n)/(2*(n-s)),u=1,o=-2*v,f=s*s+y*y-2*s*y+v*v-h*h,x=o*o-4*u*f,x===0?a.push(new yt(y,-o/(2*u))):x>0&&(a.push(new yt(y,(-o+Math.sqrt(x))/(2*u))),a.push(new yt(y,(-o-Math.sqrt(x))/(2*u))));else{var c=(n-s)/(e-v),d=(h*h-i*i-s*s+n*n-v*v+e*e)/(2*(e-v));u=c*c+1,o=2*e*c-2*d*c-2*n,f=n*n+e*e+d*d-i*i-2*e*d,x=o*o-4*u*f,x===0?(y=-o/(2*u),a.push(new yt(y,d-y*c))):x>0&&(y=(-o+Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)),y=(-o-Math.sqrt(x))/(2*u),a.push(new yt(y,d-y*c)))}}return a},Mv=lv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rr=Ot,mv=p,wv=new mv,$v=function(t,r,a){if(a===void 0&&(a=wv),Rr(r,t.x1,t.y1))return a.x=t.x1,a.y=t.y1,!0;if(Rr(r,t.x2,t.y2))return a.x=t.x2,a.y=t.y2,!0;var n=t.x2-t.x1,e=t.y2-t.y1,i=r.x-t.x1,s=r.y-t.y1,v=n*n+e*e,h=n,u=e;if(v>0){var o=(i*n+s*e)/v;h*=o,u*=o}a.x=t.x1+h,a.y=t.y1+u;var f=h*h+u*u;return f<=v&&h*n+u*e>=0&&Rr(r,a.x,a.y)},Gr=$v;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lr=p,_v=Gr,gv=function(t,r,a){if(a===void 0&&(a=[]),_v(t,r)){var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=r.x,h=r.y,u=r.radius,o=i-n,f=s-e,x=n-v,y=e-h,c=o*o+f*f,d=2*(o*x+f*y),l=x*x+y*y-u*u,m=d*d-4*c*l,w,M;if(m===0){var $=-d/(2*c);w=n+$*o,M=e+$*f,$>=0&&$<=1&&a.push(new Lr(w,M))}else if(m>0){var _=(-d-Math.sqrt(m))/(2*c);w=n+_*o,M=e+_*f,_>=0&&_<=1&&a.push(new Lr(w,M));var g=(-d+Math.sqrt(m))/(2*c);w=n+g*o,M=e+g*f,g>=0&&g<=1&&a.push(new Lr(w,M))}}return a},Sr=gv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ht=Sr,Cv=Ha,zv=function(t,r,a){if(a===void 0&&(a=[]),Cv(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),s=r.getLineD();Ht(n,t,a),Ht(e,t,a),Ht(i,t,a),Ht(s,t,a)}return a},Pv=zv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bv=X,D=new bv({initialize:function(r,a,n){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=a||0,this.z=n||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new D(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var a=t.x,n=t.y,e=t.z,i=r.x,s=r.y,v=r.z;return this.x=n*v-e*s,this.y=e*i-a*v,this.z=a*s-n*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=a||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(r*r+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return r*r+a*a+n*n},length:function(){var t=this.x,r=this.y,a=this.z;return Math.sqrt(t*t+r*r+a*a)},lengthSq:function(){var t=this.x,r=this.y,a=this.z;return t*t+r*r+a*a},normalize:function(){var t=this.x,r=this.y,a=this.z,n=t*t+r*r+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z;return this.x=a*s-n*i,this.y=n*e-r*s,this.z=r*i-a*e,this},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this},applyMatrix3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[3]*a+e[6]*n,this.y=e[1]*r+e[4]*a+e[7]*n,this.z=e[2]*r+e[5]*a+e[8]*n,this},applyMatrix4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=1/(e[3]*r+e[7]*a+e[11]*n+e[15]);return this.x=(e[0]*r+e[4]*a+e[8]*n+e[12])*i,this.y=(e[1]*r+e[5]*a+e[9]*n+e[13])*i,this.z=(e[2]*r+e[6]*a+e[10]*n+e[14])*i,this},transformMat3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=r*e[0]+a*e[3]+n*e[6],this.y=r*e[1]+a*e[4]+n*e[7],this.z=r*e[2]+a*e[5]+n*e[8],this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[4]*a+e[8]*n+e[12],this.y=e[1]*r+e[5]*a+e[9]*n+e[13],this.z=e[2]*r+e[6]*a+e[10]*n+e[14],this},transformCoordinates:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=r*e[0]+a*e[4]+n*e[8]+e[12],s=r*e[1]+a*e[5]+n*e[9]+e[13],v=r*e[2]+a*e[6]+n*e[10]+e[14],h=r*e[3]+a*e[7]+n*e[11]+e[15];return this.x=i/h,this.y=s/h,this.z=v/h,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z,v=t.w,h=v*r+i*n-s*a,u=v*a+s*r-e*n,o=v*n+e*a-i*r,f=-e*r-i*a-s*n;return this.x=h*v+f*-e+u*-s-o*-i,this.y=u*v+f*-i+o*-e-h*-s,this.z=o*v+f*-s+h*-i-u*-e,this},project:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=e[0],s=e[1],v=e[2],h=e[3],u=e[4],o=e[5],f=e[6],x=e[7],y=e[8],c=e[9],d=e[10],l=e[11],m=e[12],w=e[13],M=e[14],$=e[15],_=1/(r*h+a*x+n*l+$);return this.x=(r*i+a*u+n*y+m)*_,this.y=(r*s+a*o+n*c+w)*_,this.z=(r*v+a*f+n*d+M)*_,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,s=this.x-a,v=i-this.y-1-n,h=this.z;return this.x=2*s/e-1,this.y=2*v/i-1,this.z=2*h-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});D.ZERO=new D,D.RIGHT=new D(1,0,0),D.LEFT=new D(-1,0,0),D.UP=new D(0,-1,0),D.DOWN=new D(0,1,0),D.FORWARD=new D(0,0,1),D.BACK=new D(0,0,-1),D.ONE=new D(1,1,1);var tt=D;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tv=tt,Ov=function(t,r,a,n){a===void 0&&(a=!1);var e=t.x1,i=t.y1,s=t.x2,v=t.y2,h=r.x1,u=r.y1,o=r.x2,f=r.y2,x=s-e,y=v-i,c=o-h,d=f-u,l=x*d-y*c;if(l===0)return null;var m,w,M;if(a){if(m=(x*(u-i)+y*(e-h))/(c*y-d*x),w=(h+c*m-e)/x,w<0||m<0||m>1)return null;M=w}else{if(m=((h-e)*d-(u-i)*c)/l,w=((i-u)*x-(e-h)*y)/l,m<0||m>1||w<0||w>1)return null;M=m}return n===void 0&&(n=new Tv),n.set(e+x*M,i+y*M,M)},Ka=Ov;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pv=Ka,Iv=et,Ja=tt,tn=new Iv,Kt=new Ja,Rv=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=new Ja);var e=!1;n.set(),Kt.set();for(var i=r[r.length-1],s=0;s<r.length;s++){var v=r[s];tn.setTo(i.x,i.y,v.x,v.y),i=v,pv(t,tn,a,Kt)&&(!e||Kt.z<n.z)&&(n.copy(Kt),e=!0)}return e?n:null},rn=Rv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gv=X,Z=new Gv({initialize:function(r,a,n,e){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=a||0,this.z=n||0,this.w=e||0)},clone:function(){return new Z(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,a,n){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=a||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e,this.z=a*e,this.w=n*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(r*r+a*a+n*n+e*e)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return r*r+a*a+n*n+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.val;return this.x=i[0]*r+i[4]*a+i[8]*n+i[12]*e,this.y=i[1]*r+i[5]*a+i[9]*n+i[13]*e,this.z=i[2]*r+i[6]*a+i[10]*n+i[14]*e,this.w=i[3]*r+i[7]*a+i[11]*n+i[15]*e,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z,v=t.w,h=v*r+i*n-s*a,u=v*a+s*r-e*n,o=v*n+e*a-i*r,f=-e*r-i*a-s*n;return this.x=h*v+f*-e+u*-s-o*-i,this.y=u*v+f*-i+o*-e-h*-s,this.z=o*v+f*-s+h*-i-u*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});Z.prototype.sub=Z.prototype.subtract,Z.prototype.mul=Z.prototype.multiply,Z.prototype.div=Z.prototype.divide,Z.prototype.dist=Z.prototype.distance,Z.prototype.distSq=Z.prototype.distanceSq,Z.prototype.len=Z.prototype.length,Z.prototype.lenSq=Z.prototype.lengthSq;var Er=Z;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lv=tt,Sv=Er,Ev=rn,ct=new Lv,Fv=function(t,r,a,n){n===void 0&&(n=new Sv),Array.isArray(r)||(r=[r]);var e=!1;n.set(),ct.set();for(var i=0;i<r.length;i++)Ev(t,r[i].points,a,ct)&&(!e||ct.z<n.z)&&(n.set(ct.x,ct.y,ct.z,i),e=!0);return e?n:null},an=Fv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Av=function(t,r,a){var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=r.x1,h=r.y1,u=r.x2,o=r.y2;if(n===i&&e===s||v===u&&h===o)return!1;var f=(o-h)*(i-n)-(u-v)*(s-e);if(f===0)return!1;var x=((u-v)*(e-h)-(o-h)*(n-v))/f,y=((i-n)*(e-h)-(s-e)*(n-v))/f;return x<0||x>1||y<0||y>1?!1:(a&&(a.x=n+x*(i-n),a.y=e+x*(s-e)),!0)},dt=Av;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nv=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=r.x,v=r.y,h=r.right,u=r.bottom,o=0;if(a>=s&&a<=h&&n>=v&&n<=u||e>=s&&e<=h&&i>=v&&i<=u)return!0;if(a<s&&e>=s){if(o=n+(i-n)*(s-a)/(e-a),o>v&&o<=u)return!0}else if(a>h&&e<=h&&(o=n+(i-n)*(h-a)/(e-a),o>=v&&o<=u))return!0;if(n<v&&i>=v){if(o=a+(e-a)*(v-n)/(i-n),o>=s&&o<=h)return!0}else if(n>u&&i<=u&&(o=a+(e-a)*(u-n)/(i-n),o>=s&&o<=h))return!0;return!1},nn=Nv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jt=p,tr=dt,Vv=nn,Yv=function(t,r,a){if(a===void 0&&(a=[]),Vv(t,r))for(var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),s=r.getLineD(),v=[new Jt,new Jt,new Jt,new Jt],h=[tr(n,t,v[0]),tr(e,t,v[1]),tr(i,t,v[2]),tr(s,t,v[3])],u=0;u<4;u++)h[u]&&a.push(v[u]);return a},Fr=Yv;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dv=Er,Xv=an,kv=et,en=new kv;function Ar(t,r,a,n,e){var i=Math.cos(t),s=Math.sin(t);en.setTo(r,a,r+i,a+s);var v=Xv(en,n,!0);v&&e.push(new Dv(v.x,v.y,t,v.w))}function qv(t,r){return t.z-r.z}var Zv=function(t,r,a){Array.isArray(a)||(a=[a]);for(var n=[],e=[],i=0;i<a.length;i++)for(var s=a[i].points,v=0;v<s.length;v++){var h=Math.atan2(s[v].y-r,s[v].x-t);e.indexOf(h)===-1&&(Ar(h,t,r,a,n),Ar(h-1e-5,t,r,a,n),Ar(h+1e-5,t,r,a,n),e.push(h))}return n.sort(qv)},Bv=Zv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jv=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},rr=jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uv=K,Wv=rr,Qv=function(t,r,a){return a===void 0&&(a=new Uv),Wv(t,r)&&(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y),a},Hv=Qv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ar=Fr,Kv=rr,Jv=function(t,r,a){if(a===void 0&&(a=[]),Kv(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),s=t.getLineD();ar(n,r,a),ar(e,r,a),ar(i,r,a),ar(s,r,a)}return a},th=Jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rh=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=[]);for(var e=t.x3-t.x1,i=t.y3-t.y1,s=t.x2-t.x1,v=t.y2-t.y1,h=e*e+i*i,u=e*s+i*v,o=s*s+v*v,f=h*o-u*u,x=f===0?0:1/f,y,c,d,l,m,w,M=t.x1,$=t.y1,_=0;_<r.length&&(d=r[_].x-M,l=r[_].y-$,m=e*d+i*l,w=s*d+v*l,y=(o*m-u*w)*x,c=(h*w-u*m)*x,!(y>=0&&c>=0&&y+c<1&&(n.push({x:r[_].x,y:r[_].y}),a)));_++);return n},Nr=rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ah=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},sn=ah;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J=dt,lt=Bt,nh=Nr,eh=sn,ih=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var a=r.getLineA(),n=r.getLineB(),e=r.getLineC();if(lt(t,a.x1,a.y1)||lt(t,a.x2,a.y2)||lt(t,n.x1,n.y1)||lt(t,n.x2,n.y2)||lt(t,e.x1,e.y1)||lt(t,e.x2,e.y2))return!0;var i=t.getLineA(),s=t.getLineB(),v=t.getLineC(),h=t.getLineD();if(J(a,i)||J(a,s)||J(a,v)||J(a,h)||J(n,i)||J(n,s)||J(n,v)||J(n,h)||J(e,i)||J(e,s)||J(e,v)||J(e,h))return!0;var u=eh(t),o=nh(r,u,!0);return o.length>0},vn=ih;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sh=vn,Vr=Fr,vh=function(t,r,a){if(a===void 0&&(a=[]),sh(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Vr(n,t,a),Vr(e,t,a),Vr(i,t,a)}return a},hh=vh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uh=function(t,r,a){var n=t.x3-t.x1,e=t.y3-t.y1,i=t.x2-t.x1,s=t.y2-t.y1,v=r-t.x1,h=a-t.y1,u=n*n+e*e,o=n*i+e*s,f=n*v+e*h,x=i*i+s*s,y=i*v+s*h,c=u*x-o*o,d=c===0?0:1/c,l=(x*f-o*y)*d,m=(u*y-o*f)*d;return l>=0&&m>=0&&l+m<1},nr=uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yr=Gr,oh=nr,fh=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(oh(t,r.x,r.y)||Yr(t.getLineA(),r)||Yr(t.getLineB(),r)||Yr(t.getLineC(),r))},hn=fh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dr=Sr,xh=hn,yh=function(t,r,a){if(a===void 0&&(a=[]),xh(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();Dr(n,r,a),Dr(e,r,a),Dr(i,r,a)}return a},ch=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xr=dt,dh=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||Xr(t.getLineA(),r)||Xr(t.getLineB(),r)||Xr(t.getLineC(),r))},un=dh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kr=p,lh=un,qr=dt,Mh=function(t,r,a){if(a===void 0&&(a=[]),lh(t,r))for(var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),s=[new kr,new kr,new kr],v=[qr(n,r,s[0]),qr(e,r,s[1]),qr(i,r,s[2])],h=0;h<3;h++)v[h]&&a.push(s[h]);return a},on=Mh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mh=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},fn=mh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xn=Nr,yn=fn,rt=dt,wh=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var a=t.getLineA(),n=t.getLineB(),e=t.getLineC(),i=r.getLineA(),s=r.getLineB(),v=r.getLineC();if(rt(a,i)||rt(a,s)||rt(a,v)||rt(n,i)||rt(n,s)||rt(n,v)||rt(e,i)||rt(e,s)||rt(e,v))return!0;var h=yn(t),u=xn(r,h,!0);return u.length>0||(h=yn(r),u=xn(t,h,!0),u.length>0)},cn=wh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $h=cn,Zr=on,_h=function(t,r,a){if(a===void 0&&(a=[]),$h(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Zr(t,n,a),Zr(t,e,a),Zr(t,i,a)}return a},gh=_h;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ch=function(t,r,a){a===void 0&&(a=1);var n=r.x1,e=r.y1,i=r.x2,s=r.y2,v=t.x,h=t.y,u=(i-n)*(i-n)+(s-e)*(s-e);if(u===0)return!1;var o=((v-n)*(i-n)+(h-e)*(s-e))/u;if(o<0)return Math.sqrt((n-v)*(n-v)+(e-h)*(e-h))<=a;if(o>=0&&o<=1){var f=((e-h)*(i-n)-(n-v)*(s-e))/u;return Math.abs(f)*Math.sqrt(u)<=a}else return Math.sqrt((i-v)*(i-v)+(s-h)*(s-h))<=a},dn=Ch;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zh=dn,Ph=function(t,r){if(!zh(t,r))return!1;var a=Math.min(r.x1,r.x2),n=Math.max(r.x1,r.x2),e=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=a&&t.x<=n&&t.y>=e&&t.y<=i},bh=Ph;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Th=function(t,r,a,n,e,i){return i===void 0&&(i=0),!(r>t.right+i||a<t.left-i||n>t.bottom+i||e<t.top-i)},Oh=Th;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ph={CircleToCircle:Qa,CircleToRectangle:Ha,GetCircleToCircle:Mv,GetCircleToRectangle:Pv,GetLineToCircle:Sr,GetLineToLine:Ka,GetLineToPoints:rn,GetLineToPolygon:an,GetLineToRectangle:Fr,GetRaysFromPointToPolygon:Bv,GetRectangleIntersection:Hv,GetRectangleToRectangle:th,GetRectangleToTriangle:hh,GetTriangleToCircle:ch,GetTriangleToLine:on,GetTriangleToTriangle:gh,LineToCircle:Gr,LineToLine:dt,LineToRectangle:nn,PointToLine:dn,PointToLineSegment:bh,RectangleToRectangle:rr,RectangleToTriangle:vn,RectangleToValues:Oh,TriangleToCircle:hn,TriangleToLine:un,TriangleToTriangle:cn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ih=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Mt=Ih;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rh=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=[]);var n=Math.round(t.x1),e=Math.round(t.y1),i=Math.round(t.x2),s=Math.round(t.y2),v=Math.abs(i-n),h=Math.abs(s-e),u=n<i?1:-1,o=e<s?1:-1,f=v-h;a.push({x:n,y:e});for(var x=1;!(n===i&&e===s);){var y=f<<1;y>-h&&(f-=h,n+=u),y<v&&(f+=v,e+=o),x%r===0&&a.push({x:n,y:e}),x++}return a},Gh=Rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lh=function(t,r,a){var n=r-(t.x1+t.x2)/2,e=a-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=e,t.x2+=n,t.y2+=e,t},Sh=Lh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Eh=et,Fh=function(t){return new Eh(t.x1,t.y1,t.x2,t.y2)},Ah=Fh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nh=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},Vh=Nh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yh=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},Dh=Yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xh=nt,kh=function(t,r,a){a===void 0&&(a=r);var n=Xh(t),e=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-e/n*r,t.y1=t.y1-i/n*r),a&&(t.x2=t.x2+e/n*a,t.y2=t.y2+i/n*a),t},qh=kh;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zh=function(t,r){var a=t.x-r.x,n=t.y-r.y;return Math.sqrt(a*a+n*n)},ln=Zh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bh=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},jh=Bh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uh=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},Wh=Uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qh=function(t,r){r===void 0&&(r=1.70158);var a=r*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},Hh=Qh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mn={In:jh,Out:Wh,InOut:Hh};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kh=function(t){return t=1-t,t<1/2.75?1-7.5625*t*t:t<2/2.75?1-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)},Jh=Kh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tu=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},ru=tu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var au=function(t){var r=!1;return t<.5?(t=1-t*2,r=!0):t=t*2-1,t<1/2.75?t=7.5625*t*t:t<2/2.75?t=7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?t=7.5625*(t-=2.25/2.75)*t+.9375:t=7.5625*(t-=2.625/2.75)*t+.984375,r?(1-t)*.5:t*.5+.5},nu=au;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mn={In:Jh,Out:ru,InOut:nu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eu=function(t){return 1-Math.sqrt(1-t*t)},iu=eu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var su=function(t){return Math.sqrt(1- --t*t)},vu=su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hu=function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},uu=hu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wn={In:iu,Out:vu,InOut:uu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ou=function(t){return t*t*t},fu=ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xu=function(t){return--t*t*t+1},yu=xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cu=function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},du=cu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $n={In:fu,Out:yu,InOut:du};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a))},Mu=lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1},wu=mu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $u=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1},_u=$u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _n={In:Mu,Out:wu,InOut:_u};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gu=function(t){return Math.pow(2,10*(t-1))-.001},Cu=gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zu=function(t){return 1-Math.pow(2,-10*t)},Pu=zu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bu=function(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))},Tu=bu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var gn={In:Cu,Out:Pu,InOut:Tu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ou=function(t){return t},pu=Ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cn=pu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iu=function(t){return t*t},Ru=Iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gu=function(t){return t*(2-t)},Lu=Gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Su=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},Eu=Su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zn={In:Ru,Out:Lu,InOut:Eu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fu=function(t){return t*t*t*t},Au=Fu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nu=function(t){return 1- --t*t*t*t},Vu=Nu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yu=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},Du=Yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pn={In:Au,Out:Vu,InOut:Du};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xu=function(t){return t*t*t*t*t},ku=Xu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qu=function(t){return--t*t*t*t*t+1},Zu=qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bu=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},ju=Bu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bn={In:ku,Out:Zu,InOut:ju};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},Wu=Uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qu=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},Hu=Qu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ku=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},Ju=Ku;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tn={In:Wu,Out:Hu,InOut:Ju};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var to=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},ro=to;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var On=ro;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var er=Mn,ir=mn,sr=wn,It=$n,vr=_n,hr=gn,pn=Cn,Rt=zn,Gt=Pn,Lt=bn,ur=Tn,ao=On,no={Power0:pn,Power1:Rt.Out,Power2:It.Out,Power3:Gt.Out,Power4:Lt.Out,Linear:pn,Quad:Rt.Out,Cubic:It.Out,Quart:Gt.Out,Quint:Lt.Out,Sine:ur.Out,Expo:hr.Out,Circ:sr.Out,Elastic:vr.Out,Back:er.Out,Bounce:ir.Out,Stepped:ao,"Quad.easeIn":Rt.In,"Cubic.easeIn":It.In,"Quart.easeIn":Gt.In,"Quint.easeIn":Lt.In,"Sine.easeIn":ur.In,"Expo.easeIn":hr.In,"Circ.easeIn":sr.In,"Elastic.easeIn":vr.In,"Back.easeIn":er.In,"Bounce.easeIn":ir.In,"Quad.easeOut":Rt.Out,"Cubic.easeOut":It.Out,"Quart.easeOut":Gt.Out,"Quint.easeOut":Lt.Out,"Sine.easeOut":ur.Out,"Expo.easeOut":hr.Out,"Circ.easeOut":sr.Out,"Elastic.easeOut":vr.Out,"Back.easeOut":er.Out,"Bounce.easeOut":ir.Out,"Quad.easeInOut":Rt.InOut,"Cubic.easeInOut":It.InOut,"Quart.easeInOut":Gt.InOut,"Quint.easeInOut":Lt.InOut,"Sine.easeInOut":ur.InOut,"Expo.easeInOut":hr.InOut,"Circ.easeInOut":sr.InOut,"Elastic.easeInOut":vr.InOut,"Back.easeInOut":er.InOut,"Bounce.easeInOut":ir.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eo=function(t){return t&&t[0].toUpperCase()+t.slice(1)},io=eo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var St=no,so=io,vo=function(t,r){var a=St.Power0;if(typeof t=="string")if(St.hasOwnProperty(t))a=St[t];else{var n="";if(t.indexOf(".")){n=t.substring(t.indexOf(".")+1);var e=n.toLowerCase();e==="in"?n="easeIn":e==="out"?n="easeOut":e==="inout"&&(n="easeInOut")}t=so(t.substring(0,t.indexOf(".")+1)+n),St.hasOwnProperty(t)&&(a=St[t])}else typeof t=="function"&&(a=t);if(!r)return a;var i=r.slice(0);return i.unshift(0),function(s){return i[0]=s,a.apply(this,i)}},ho=vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var In=ln,uo=ho,Rn=p,oo=function(t,r,a,n,e){n===void 0&&(n=0),e===void 0&&(e=[]);var i=[],s=t.x1,v=t.y1,h=t.x2-s,u=t.y2-v,o=uo(r,e),f,x,y=a-1;for(f=0;f<y;f++)x=o(f/y),i.push(new Rn(s+h*x,v+u*x));if(x=o(1),i.push(new Rn(s+h*x,v+u*x)),n>0){var c=i[0],d=[c];for(f=1;f<i.length-1;f++){var l=i[f];In(c,l)>=n&&(d.push(l),c=l)}var m=i[i.length-1];return In(c,m)<n&&d.pop(),d.push(m),d}else return i},fo=oo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xo=p,yo=function(t,r){return r===void 0&&(r=new xo),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},co=yo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lo=p,Mo=function(t,r,a){a===void 0&&(a=new lo);var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=(i-n)*(i-n)+(s-e)*(s-e);if(v===0)return a;var h=((r.x-n)*(i-n)+(r.y-e)*(s-e))/v;return a.x=n+h*(i-n),a.y=e+h*(s-e),a},mo=Mo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wo=U,$o=Mt,_o=p,go=function(t,r){r===void 0&&(r=new _o);var a=$o(t)-wo.TAU;return r.x=Math.cos(a),r.y=Math.sin(a),r},Co=go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zo=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=(e-a)*(e-a)+(i-n)*(i-n);if(s===0)return!1;var v=((n-r.y)*(e-a)-(a-r.x)*(i-n))/s;return Math.abs(v)*Math.sqrt(s)},Po=zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bo=function(t){return Math.abs(t.y1-t.y2)},To=bo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oo=function(t,r,a){var n=a-r;return r+((t-r)%n+n)%n},or=Oo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var po=U,Io=or,Ro=Mt,Go=function(t){var r=Ro(t)-po.TAU;return Io(r,-Math.PI,Math.PI)},Gn=Go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lo=U,So=Mt,Eo=function(t){return Math.cos(So(t)-Lo.TAU)},Fo=Eo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ao=U,No=Mt,Vo=function(t){return Math.sin(No(t)-Ao.TAU)},Yo=Vo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Do=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t},Xo=Do;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ko=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},qo=ko;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zo=Mt,Bo=Gn,jo=function(t,r){return 2*Bo(r)-Math.PI-Zo(t)},Uo=jo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wo=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x1-r,v=t.y1-a;return t.x1=s*e-v*i+r,t.y1=s*i+v*e+a,s=t.x2-r,v=t.y2-a,t.x2=s*e-v*i+r,t.y2=s*i+v*e+a,t},Br=Wo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qo=Br,Ho=function(t,r){var a=(t.x1+t.x2)/2,n=(t.y1+t.y2)/2;return Qo(t,a,n,r)},Ko=Ho;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jo=Br,tf=function(t,r,a){return Jo(t,r.x,r.y,a)},rf=tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var af=function(t,r,a,n,e){return t.x1=r,t.y1=a,t.x2=r+Math.cos(n)*e,t.y2=a+Math.sin(n)*e,t},nf=af;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ef=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},sf=ef;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vf=function(t){return Math.abs(t.x1-t.x2)},hf=vf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var S=et;S.Angle=Mt,S.BresenhamPoints=Gh,S.CenterOn=Sh,S.Clone=Ah,S.CopyFrom=Vh,S.Equals=Dh,S.Extend=qh,S.GetEasedPoints=fo,S.GetMidPoint=co,S.GetNearestPoint=mo,S.GetNormal=Co,S.GetPoint=Aa,S.GetPoints=Na,S.GetShortestDistance=Po,S.Height=To,S.Length=nt,S.NormalAngle=Gn,S.NormalX=Fo,S.NormalY=Yo,S.Offset=Xo,S.PerpSlope=qo,S.Random=Va,S.ReflectAngle=Uo,S.Rotate=Ko,S.RotateAroundPoint=rf,S.RotateAroundXY=Br,S.SetToAngle=nf,S.Slope=sf,S.Width=hf;var uf=S;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var of=X,ff=K,xf=xt;function jr(t,r,a,n){var e=t-a,i=r-n,s=e*e+i*i;return Math.sqrt(s)}var yf=new of({initialize:function(r,a,n){this.vertex1=r,this.vertex2=a,this.vertex3=n,this.bounds=new ff,this._inCenter=new xf},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,a=this.vertex2,n=this.vertex3,e,i,s,v,h,u;t?(e=r.x,i=r.y,s=a.x,v=a.y,h=n.x,u=n.y):(e=r.vx,i=r.vy,s=a.vx,v=a.vy,h=n.vx,u=n.vy);var o=jr(h,u,s,v),f=jr(e,i,h,u),x=jr(s,v,e,i),y=o+f+x;return this._inCenter.set((e*o+s*f+h*x)/y,(i*o+v*f+u*x)/y)},contains:function(t,r,a){var n=this.vertex1,e=this.vertex2,i=this.vertex3,s=n.vx,v=n.vy,h=e.vx,u=e.vy,o=i.vx,f=i.vy;if(a){var x=a.a,y=a.b,c=a.c,d=a.d,l=a.e,m=a.f;s=n.vx*x+n.vy*c+l,v=n.vx*y+n.vy*d+m,h=e.vx*x+e.vy*c+l,u=e.vx*y+e.vy*d+m,o=i.vx*x+i.vy*c+l,f=i.vx*y+i.vy*d+m}var w=o-s,M=f-v,$=h-s,_=u-v,g=t-s,I=r-v,G=w*w+M*M,b=w*$+M*_,T=w*g+M*I,P=$*$+_*_,R=$*g+_*I,C=G*P-b*b,E=C===0?0:1/C,z=(P*T-b*R)*E,L=(G*R-b*T)*E;return z>=0&&L>=0&&z+L<1},isCounterClockwise:function(t){var r=this.vertex1,a=this.vertex2,n=this.vertex3,e=(a.vx-r.vx)*(n.vy-r.vy)-(a.vy-r.vy)*(n.vx-r.vx);return t<=0?e>=0:e<0},load:function(t,r,a,n,e){return a=this.vertex1.load(t,r,a,n,e),a=this.vertex2.load(t,r,a,n,e),a=this.vertex3.load(t,r,a,n,e),a},transformCoordinatesLocal:function(t,r,a,n){return this.vertex1.transformCoordinatesLocal(t,r,a,n),this.vertex2.transformCoordinatesLocal(t,r,a,n),this.vertex3.transformCoordinatesLocal(t,r,a,n),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3,n=this.bounds;return n.x=Math.min(t.vx,r.vx,a.vx),n.y=Math.min(t.vy,r.vy,a.vy),n.width=Math.max(t.vx,r.vx,a.vx)-n.x,n.height=Math.max(t.vy,r.vy,a.vy)-n.y,this},isInView:function(t,r,a,n,e,i,s,v,h,u,o){this.update(n,e,i,s,v,h,u,o);var f=this.vertex1,x=this.vertex2,y=this.vertex3;if(f.ta<=0&&x.ta<=0&&y.ta<=0||r&&!this.isCounterClockwise(a))return!1;var c=this.bounds;c.x=Math.min(f.tx,x.tx,y.tx),c.y=Math.min(f.ty,x.ty,y.ty),c.width=Math.max(f.tx,x.tx,y.tx)-c.x,c.height=Math.max(f.ty,x.ty,y.ty)-c.y;var d=t.x+t.width,l=t.y+t.height;return c.width<=0||c.height<=0||t.width<=0||t.height<=0?!1:!(c.right<t.x||c.bottom<t.y||c.x>d||c.y>l)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,a,n,e,i,s,v){return this.vertex1.update(r,a,n,e,i,s,v,t),this.vertex2.update(r,a,n,e,i,s,v,t),this.vertex3.update(r,a,n,e,i,s,v,t),this},translate:function(t,r){r===void 0&&(r=0);var a=this.vertex1,n=this.vertex2,e=this.vertex3;return a.x+=t,a.y+=r,n.x+=t,n.y+=r,e.x+=t,e.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.alpha+r.alpha+a.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.vz+r.vz+a.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),fr=yf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cf=function(t,r,a){var n=typeof t;return!t||n==="number"||n==="string"?a:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:a},df=cf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lf=X,Ur=tt,xr=1e-6,yr=new lf({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new yr(this)},set:function(t){return this.copy(t)},setValues:function(t,r,a,n,e,i,s,v,h,u,o,f,x,y,c,d){var l=this.val;return l[0]=t,l[1]=r,l[2]=a,l[3]=n,l[4]=e,l[5]=i,l[6]=s,l[7]=v,l[8]=h,l[9]=u,l[10]=o,l[11]=f,l[12]=x,l[13]=y,l[14]=c,l[15]=d,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,a){var n=mt.fromQuat(a),e=n.val,i=r.x,s=r.y,v=r.z;return this.setValues(e[0]*i,e[1]*i,e[2]*i,0,e[4]*s,e[5]*s,e[6]*s,0,e[8]*v,e[9]*v,e[10]*v,0,t.x,t.y,t.z,1)},xyz:function(t,r,a){this.identity();var n=this.val;return n[12]=t,n[13]=r,n[14]=a,this},scaling:function(t,r,a){this.zero();var n=this.val;return n[0]=t,n[5]=r,n[10]=a,n[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[3],e=t[6],i=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=a,t[9]=e,t[11]=t[14],t[12]=n,t[13]=i,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],m=r*s-a*i,w=r*v-n*i,M=r*h-e*i,$=a*v-n*s,_=a*h-e*s,g=n*h-e*v,I=u*c-o*y,G=u*d-f*y,b=u*l-x*y,T=o*d-f*c,P=o*l-x*c,R=f*l-x*d,C=m*R-w*P+M*T+$*b-_*G+g*I;return C?(C=1/C,this.setValues((s*R-v*P+h*T)*C,(n*P-a*R-e*T)*C,(c*g-d*_+l*$)*C,(f*_-o*g-x*$)*C,(v*b-i*R-h*G)*C,(r*R-n*b+e*G)*C,(d*M-y*g-l*w)*C,(u*g-f*M+x*w)*C,(i*P-s*b+h*I)*C,(a*b-r*P-e*I)*C,(y*_-c*M+l*m)*C,(o*M-u*_-x*m)*C,(s*G-i*T-v*I)*C,(r*T-a*G+n*I)*C,(c*w-y*$-d*m)*C,(u*$-o*w+f*m)*C)):this},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15];return this.setValues(s*(f*l-x*d)-o*(v*l-h*d)+c*(v*x-h*f),-(a*(f*l-x*d)-o*(n*l-e*d)+c*(n*x-e*f)),a*(v*l-h*d)-s*(n*l-e*d)+c*(n*h-e*v),-(a*(v*x-h*f)-s*(n*x-e*f)+o*(n*h-e*v)),-(i*(f*l-x*d)-u*(v*l-h*d)+y*(v*x-h*f)),r*(f*l-x*d)-u*(n*l-e*d)+y*(n*x-e*f),-(r*(v*l-h*d)-i*(n*l-e*d)+y*(n*h-e*v)),r*(v*x-h*f)-i*(n*x-e*f)+u*(n*h-e*v),i*(o*l-x*c)-u*(s*l-h*c)+y*(s*x-h*o),-(r*(o*l-x*c)-u*(a*l-e*c)+y*(a*x-e*o)),r*(s*l-h*c)-i*(a*l-e*c)+y*(a*h-e*s),-(r*(s*x-h*o)-i*(a*x-e*o)+u*(a*h-e*s)),-(i*(o*d-f*c)-u*(s*d-v*c)+y*(s*f-v*o)),r*(o*d-f*c)-u*(a*d-n*c)+y*(a*f-n*o),-(r*(s*d-v*c)-i*(a*d-n*c)+y*(a*v-n*s)),r*(s*f-v*o)-i*(a*f-n*o)+u*(a*v-n*s))},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],o=t[9],f=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],m=r*s-a*i,w=r*v-n*i,M=r*h-e*i,$=a*v-n*s,_=a*h-e*s,g=n*h-e*v,I=u*c-o*y,G=u*d-f*y,b=u*l-x*y,T=o*d-f*c,P=o*l-x*c,R=f*l-x*d;return m*R-w*P+M*T+$*b-_*G+g*I},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=r[6],u=r[7],o=r[8],f=r[9],x=r[10],y=r[11],c=r[12],d=r[13],l=r[14],m=r[15],w=t.val,M=w[0],$=w[1],_=w[2],g=w[3];return r[0]=M*a+$*s+_*o+g*c,r[1]=M*n+$*v+_*f+g*d,r[2]=M*e+$*h+_*x+g*l,r[3]=M*i+$*u+_*y+g*m,M=w[4],$=w[5],_=w[6],g=w[7],r[4]=M*a+$*s+_*o+g*c,r[5]=M*n+$*v+_*f+g*d,r[6]=M*e+$*h+_*x+g*l,r[7]=M*i+$*u+_*y+g*m,M=w[8],$=w[9],_=w[10],g=w[11],r[8]=M*a+$*s+_*o+g*c,r[9]=M*n+$*v+_*f+g*d,r[10]=M*e+$*h+_*x+g*l,r[11]=M*i+$*u+_*y+g*m,M=w[12],$=w[13],_=w[14],g=w[15],r[12]=M*a+$*s+_*o+g*c,r[13]=M*n+$*v+_*f+g*d,r[14]=M*e+$*h+_*x+g*l,r[15]=M*i+$*u+_*y+g*m,this},multiplyLocal:function(t){var r=this.val,a=t.val;return this.setValues(r[0]*a[0]+r[1]*a[4]+r[2]*a[8]+r[3]*a[12],r[0]*a[1]+r[1]*a[5]+r[2]*a[9]+r[3]*a[13],r[0]*a[2]+r[1]*a[6]+r[2]*a[10]+r[3]*a[14],r[0]*a[3]+r[1]*a[7]+r[2]*a[11]+r[3]*a[15],r[4]*a[0]+r[5]*a[4]+r[6]*a[8]+r[7]*a[12],r[4]*a[1]+r[5]*a[5]+r[6]*a[9]+r[7]*a[13],r[4]*a[2]+r[5]*a[6]+r[6]*a[10]+r[7]*a[14],r[4]*a[3]+r[5]*a[7]+r[6]*a[11]+r[7]*a[15],r[8]*a[0]+r[9]*a[4]+r[10]*a[8]+r[11]*a[12],r[8]*a[1]+r[9]*a[5]+r[10]*a[9]+r[11]*a[13],r[8]*a[2]+r[9]*a[6]+r[10]*a[10]+r[11]*a[14],r[8]*a[3]+r[9]*a[7]+r[10]*a[11]+r[11]*a[15],r[12]*a[0]+r[13]*a[4]+r[14]*a[8]+r[15]*a[12],r[12]*a[1]+r[13]*a[5]+r[14]*a[9]+r[15]*a[13],r[12]*a[2]+r[13]*a[6]+r[14]*a[10]+r[15]*a[14],r[12]*a[3]+r[13]*a[7]+r[14]*a[11]+r[15]*a[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var a=t.val,n=r.val,e=a[0],i=a[4],s=a[8],v=a[12],h=a[1],u=a[5],o=a[9],f=a[13],x=a[2],y=a[6],c=a[10],d=a[14],l=a[3],m=a[7],w=a[11],M=a[15],$=n[0],_=n[4],g=n[8],I=n[12],G=n[1],b=n[5],T=n[9],P=n[13],R=n[2],C=n[6],E=n[10],z=n[14],L=n[3],F=n[7],A=n[11],j=n[15];return this.setValues(e*$+i*G+s*R+v*L,h*$+u*G+o*R+f*L,x*$+y*G+c*R+d*L,l*$+m*G+w*R+M*L,e*_+i*b+s*C+v*F,h*_+u*b+o*C+f*F,x*_+y*b+c*C+d*F,l*_+m*b+w*C+M*F,e*g+i*T+s*E+v*A,h*g+u*T+o*E+f*A,x*g+y*T+c*E+d*A,l*g+m*T+w*E+M*A,e*I+i*P+s*z+v*j,h*I+u*P+o*z+f*j,x*I+y*P+c*z+d*j,l*I+m*P+w*z+M*j)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,a){var n=this.val;return n[12]=n[0]*t+n[4]*r+n[8]*a+n[12],n[13]=n[1]*t+n[5]*r+n[9]*a+n[13],n[14]=n[2]*t+n[6]*r+n[10]*a+n[14],n[15]=n[3]*t+n[7]*r+n[11]*a+n[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,a){var n=this.val;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*r,n[5]=n[5]*r,n[6]=n[6]*r,n[7]=n[7]*r,n[8]=n[8]*a,n[9]=n[9]*a,n[10]=n[10]*a,n[11]=n[11]*a,this},makeRotationAxis:function(t,r){var a=Math.cos(r),n=Math.sin(r),e=1-a,i=t.x,s=t.y,v=t.z,h=e*i,u=e*s;return this.setValues(h*i+a,h*s-n*v,h*v+n*s,0,h*s+n*v,u*s+a,u*v-n*i,0,h*v-n*s,u*v+n*i,e*v*v+a,0,0,0,0,1)},rotate:function(t,r){var a=this.val,n=r.x,e=r.y,i=r.z,s=Math.sqrt(n*n+e*e+i*i);if(Math.abs(s)<xr)return this;s=1/s,n*=s,e*=s,i*=s;var v=Math.sin(t),h=Math.cos(t),u=1-h,o=a[0],f=a[1],x=a[2],y=a[3],c=a[4],d=a[5],l=a[6],m=a[7],w=a[8],M=a[9],$=a[10],_=a[11],g=a[12],I=a[13],G=a[14],b=a[15],T=n*n*u+h,P=e*n*u+i*v,R=i*n*u-e*v,C=n*e*u-i*v,E=e*e*u+h,z=i*e*u+n*v,L=n*i*u+e*v,F=e*i*u-n*v,A=i*i*u+h;return this.setValues(o*T+c*P+w*R,f*T+d*P+M*R,x*T+l*P+$*R,y*T+m*P+_*R,o*C+c*E+w*z,f*C+d*E+M*z,x*C+l*E+$*z,y*C+m*E+_*z,o*L+c*F+w*A,f*L+d*F+M*A,x*L+l*F+$*A,y*L+m*F+_*A,g,I,G,b)},rotateX:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[4],i=r[5],s=r[6],v=r[7],h=r[8],u=r[9],o=r[10],f=r[11];return r[4]=e*n+h*a,r[5]=i*n+u*a,r[6]=s*n+o*a,r[7]=v*n+f*a,r[8]=h*n-e*a,r[9]=u*n-i*a,r[10]=o*n-s*a,r[11]=f*n-v*a,this},rotateY:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],s=r[2],v=r[3],h=r[8],u=r[9],o=r[10],f=r[11];return r[0]=e*n-h*a,r[1]=i*n-u*a,r[2]=s*n-o*a,r[3]=v*n-f*a,r[8]=e*a+h*n,r[9]=i*a+u*n,r[10]=s*a+o*n,r[11]=v*a+f*n,this},rotateZ:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],s=r[2],v=r[3],h=r[4],u=r[5],o=r[6],f=r[7];return r[0]=e*n+h*a,r[1]=i*n+u*a,r[2]=s*n+o*a,r[3]=v*n+f*a,r[4]=h*n-e*a,r[5]=u*n-i*a,r[6]=o*n-s*a,r[7]=f*n-v*a,this},fromRotationTranslation:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,s=a+a,v=n+n,h=e+e,u=a*s,o=a*v,f=a*h,x=n*v,y=n*h,c=e*h,d=i*s,l=i*v,m=i*h;return this.setValues(1-(x+c),o+m,f-l,0,o-m,1-(u+c),y+d,0,f+l,y-d,1-(u+x),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,s=a+a,v=n+n,h=r*i,u=r*s,o=r*v,f=a*s,x=a*v,y=n*v,c=e*i,d=e*s,l=e*v;return this.setValues(1-(f+y),u+l,o-d,0,u-l,1-(h+y),x+c,0,o+d,x-c,1-(h+f),0,0,0,0,1)},frustum:function(t,r,a,n,e,i){var s=1/(r-t),v=1/(n-a),h=1/(e-i);return this.setValues(e*2*s,0,0,0,0,e*2*v,0,0,(r+t)*s,(n+a)*v,(i+e)*h,-1,0,0,i*e*2*h,0)},perspective:function(t,r,a,n){var e=1/Math.tan(t/2),i=1/(a-n);return this.setValues(e/r,0,0,0,0,e,0,0,0,0,(n+a)*i,-1,0,0,2*n*a*i,0)},perspectiveLH:function(t,r,a,n){return this.setValues(2*a/t,0,0,0,0,2*a/r,0,0,0,0,-n/(a-n),1,0,0,a*n/(a-n),0)},ortho:function(t,r,a,n,e,i){var s=t-r,v=a-n,h=e-i;return s=s===0?s:1/s,v=v===0?v:1/v,h=h===0?h:1/h,this.setValues(-2*s,0,0,0,0,-2*v,0,0,0,0,2*h,0,(t+r)*s,(n+a)*v,(i+e)*h,1)},lookAtRH:function(t,r,a){var n=this.val;return Q.subVectors(t,r),Q.getLengthSquared()===0&&(Q.z=1),Q.normalize(),it.crossVectors(a,Q),it.getLengthSquared()===0&&(Math.abs(a.z)===1?Q.x+=1e-4:Q.z+=1e-4,Q.normalize(),it.crossVectors(a,Q)),it.normalize(),cr.crossVectors(Q,it),n[0]=it.x,n[1]=it.y,n[2]=it.z,n[4]=cr.x,n[5]=cr.y,n[6]=cr.z,n[8]=Q.x,n[9]=Q.y,n[10]=Q.z,this},lookAt:function(t,r,a){var n=t.x,e=t.y,i=t.z,s=a.x,v=a.y,h=a.z,u=r.x,o=r.y,f=r.z;if(Math.abs(n-u)<xr&&Math.abs(e-o)<xr&&Math.abs(i-f)<xr)return this.identity();var x=n-u,y=e-o,c=i-f,d=1/Math.sqrt(x*x+y*y+c*c);x*=d,y*=d,c*=d;var l=v*c-h*y,m=h*x-s*c,w=s*y-v*x;d=Math.sqrt(l*l+m*m+w*w),d?(d=1/d,l*=d,m*=d,w*=d):(l=0,m=0,w=0);var M=y*w-c*m,$=c*l-x*w,_=x*m-y*l;return d=Math.sqrt(M*M+$*$+_*_),d?(d=1/d,M*=d,$*=d,_*=d):(M=0,$=0,_=0),this.setValues(l,M,x,0,m,$,y,0,w,_,c,0,-(l*n+m*e+w*i),-(M*n+$*e+_*i),-(x*n+y*e+c*i),1)},yawPitchRoll:function(t,r,a){this.zero(),mt.zero(),Et.zero();var n=this.val,e=mt.val,i=Et.val,s=Math.sin(a),v=Math.cos(a);return n[10]=1,n[15]=1,n[0]=v,n[1]=s,n[4]=-s,n[5]=v,s=Math.sin(r),v=Math.cos(r),e[0]=1,e[15]=1,e[5]=v,e[10]=v,e[9]=-s,e[6]=s,s=Math.sin(t),v=Math.cos(t),i[5]=1,i[15]=1,i[0]=v,i[2]=-s,i[8]=s,i[10]=v,this.multiplyLocal(mt),this.multiplyLocal(Et),this},setWorldMatrix:function(t,r,a,n,e){return this.yawPitchRoll(t.y,t.x,t.z),mt.scaling(a.x,a.y,a.z),Et.xyz(r.x,r.y,r.z),this.multiplyLocal(mt),this.multiplyLocal(Et),n&&this.multiplyLocal(n),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,r){var a=this.val,n=t.val,e=a[0],i=a[1],s=a[2],v=a[3],h=a[4],u=a[5],o=a[6],f=a[7],x=a[8],y=a[9],c=a[10],d=a[11],l=a[12],m=a[13],w=a[14],M=a[15],$=n[0],_=n[1],g=n[2],I=n[3],G=n[4],b=n[5],T=n[6],P=n[7],R=n[8],C=n[9],E=n[10],z=n[11],L=n[12],F=n[13],A=n[14],j=n[15];return r.setValues($*e+_*h+g*x+I*l,_*i+_*u+g*y+I*m,g*s+_*o+g*c+I*w,I*v+_*f+g*d+I*M,G*e+b*h+T*x+P*l,G*i+b*u+T*y+P*m,G*s+b*o+T*c+P*w,G*v+b*f+T*d+P*M,R*e+C*h+E*x+z*l,R*i+C*u+E*y+z*m,R*s+C*o+E*c+z*w,R*v+C*f+E*d+z*M,L*e+F*h+A*x+j*l,L*i+F*u+A*y+j*m,L*s+F*o+A*c+j*w,L*v+F*f+A*d+j*M)},fromRotationXYTranslation:function(t,r,a){var n=r.x,e=r.y,i=r.z,s=Math.sin(t.x),v=Math.cos(t.x),h=Math.sin(t.y),u=Math.cos(t.y),o=n,f=e,x=i,y=-s,c=0-y*h,d=0-v*h,l=y*u,m=v*u;return a||(o=u*n+h*i,f=c*n+v*e+l*i,x=d*n+s*e+m*i),this.setValues(u,c,d,0,0,v,s,0,h,l,m,0,o,f,x,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,a,n))}}),mt=new yr,Et=new yr,it=new Ur,cr=new Ur,Q=new Ur,Ft=yr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mf={getTintFromFloats:function(t,r,a,n){var e=(t*255|0)&255,i=(r*255|0)&255,s=(a*255|0)&255,v=(n*255|0)&255;return(v<<24|e<<16|i<<8|s)>>>0},getTintAppendFloatAlpha:function(t,r){var a=(r*255|0)&255;return(a<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var a=(t>>16|0)&255,n=(t>>8|0)&255,e=(t|0)&255,i=(r*255|0)&255;return(i<<24|e<<16|n<<8|a)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255;return[r/255,a/255,n/255]},checkShaderMax:function(t,r){var a=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?a:Math.min(a,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var a="",n=0;n<r;n++)n>0&&(a+=`
	else `),n<r-1&&(a+="if (outTexId < "+n+".5)"),a+=`
	{`,a+=`
		texture = texture2D(uMainSampler[`+n+"], outTexCoord);",a+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,a)},setGlowQuality:function(t,r,a,n){return a===void 0&&(a=r.config.glowFXQuality),n===void 0&&(n=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/a/n).toFixed(7)),t=t.replace(/__DIST__/gi,n.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mf=X,wf=Mf,Ln=tt,$f=new mf({Extends:Ln,initialize:function(r,a,n,e,i,s,v,h,u,o){s===void 0&&(s=16777215),v===void 0&&(v=1),h===void 0&&(h=0),u===void 0&&(u=0),o===void 0&&(o=0),Ln.call(this,r,a,n),this.vx=0,this.vy=0,this.vz=0,this.nx=h,this.ny=u,this.nz=o,this.u=e,this.v=i,this.color=s,this.alpha=v,this.tx=0,this.ty=0,this.ta=0,this.tu=e,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,a,n){var e=this.x,i=this.y,s=this.z,v=t.val,h=e*v[0]+i*v[4]+s*v[8]+v[12],u=e*v[1]+i*v[5]+s*v[9]+v[13],o=e*v[2]+i*v[6]+s*v[10]+v[14],f=e*v[3]+i*v[7]+s*v[11]+v[15];this.vx=h/f*r,this.vy=-(u/f)*a,n<=0?this.vz=o/f:this.vz=-(o/f)},resize:function(t,r,a,n,e,i){return this.x=t,this.y=r,this.vx=this.x*a,this.vy=-this.y*n,this.vz=0,e<.5?this.vx+=a*(.5-e):e>.5&&(this.vx-=a*(e-.5)),i<.5?this.vy+=n*(.5-i):i>.5&&(this.vy-=n*(i-.5)),this},update:function(t,r,a,n,e,i,s,v){var h=this.vx*t+this.vy*a+e,u=this.vx*r+this.vy*n+i;return s&&(h=Math.round(h),u=Math.round(u)),this.tx=h,this.ty=u,this.ta=this.alpha*v,this},load:function(t,r,a,n,e){return t[++a]=this.tx,t[++a]=this.ty,t[++a]=this.tu,t[++a]=this.tv,t[++a]=n,t[++a]=e,r[++a]=wf.getTintAppendFloatAlpha(this.color,this.ta),a}}),dr=$f;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sn=fr,Y=df,_f=Ft,En=tt,wt=dr,Fn=new En,An=new En,ut=new _f,gf=function(t){var r=Y(t,"mesh"),a=Y(t,"texture",null),n=Y(t,"frame"),e=Y(t,"width",1),i=Y(t,"height",e),s=Y(t,"widthSegments",1),v=Y(t,"heightSegments",s),h=Y(t,"x",0),u=Y(t,"y",0),o=Y(t,"z",0),f=Y(t,"rotateX",0),x=Y(t,"rotateY",0),y=Y(t,"rotateZ",0),c=Y(t,"zIsUp",!0),d=Y(t,"isOrtho",r?r.dirtyCache[11]:!1),l=Y(t,"colors",[16777215]),m=Y(t,"alphas",[1]),w=Y(t,"tile",!1),M=Y(t,"flipY",!1),$=Y(t,"width",null),_={faces:[],verts:[]};Fn.set(h,u,o),An.set(f,x,y),ut.fromRotationXYTranslation(An,Fn,c);var g;if(!a&&r)a=r.texture,n||(g=r.frame);else if(r&&typeof a=="string")a=r.scene.sys.textures.get(a);else if(!a)return _;g||(g=a.get(n)),!$&&d&&a&&r&&(e=g.width/r.height,i=g.height/r.height);var I=e/2,G=i/2,b=Math.floor(s),T=Math.floor(v),P=b+1,R=T+1,C=e/b,E=i/T,z=[],L=[],F,A,j=0,qt=1,ft=0,zt=1;g&&(j=g.u0,qt=g.u1,M?(ft=g.v1,zt=g.v0):(ft=g.v0,zt=g.v1));var Fl=qt-j,Al=zt-ft;for(A=0;A<R;A++){var Nl=A*E-G;for(F=0;F<P;F++){var Vl=F*C-I;L.push(Vl,-Nl);var Yl=j+Fl*(F/b),Dl=ft+Al*(A/T);z.push(Yl,Dl)}}Array.isArray(l)||(l=[l]),Array.isArray(m)||(m=[m]);var _r=0,gr=0;for(A=0;A<T;A++)for(F=0;F<b;F++){var Cr=(F+P*A)*2,vt=(F+P*(A+1))*2,zr=(F+1+P*(A+1))*2,ht=(F+1+P*A)*2,Pt=l[gr],bt=m[_r],_a=new wt(L[Cr],L[Cr+1],0,z[Cr],z[Cr+1],Pt,bt).transformMat4(ut),ga=new wt(L[vt],L[vt+1],0,z[vt],z[vt+1],Pt,bt).transformMat4(ut),Ca=new wt(L[ht],L[ht+1],0,z[ht],z[ht+1],Pt,bt).transformMat4(ut),za=new wt(L[vt],L[vt+1],0,z[vt],z[vt+1],Pt,bt).transformMat4(ut),Pa=new wt(L[zr],L[zr+1],0,z[zr],z[zr+1],Pt,bt).transformMat4(ut),ba=new wt(L[ht],L[ht+1],0,z[ht],z[ht+1],Pt,bt).transformMat4(ut);w&&(_a.setUVs(j,zt),ga.setUVs(j,ft),Ca.setUVs(qt,zt),za.setUVs(j,ft),Pa.setUVs(qt,ft),ba.setUVs(qt,zt)),gr++,gr===l.length&&(gr=0),_r++,_r===m.length&&(_r=0),_.verts.push(_a,ga,Ca,za,Pa,ba),_.faces.push(new Sn(_a,ga,Ca),new Sn(za,Pa,ba))}return r&&(r.faces=r.faces.concat(_.faces),r.vertices=r.vertices.concat(_.verts)),_},Cf=gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zf=fr,Pf=Ft,Nn=tt,Wr=dr,Vn=new Nn,Yn=new Nn,lr=new Pf,bf=function(t,r,a,n,e,i,s,v,h,u){a===void 0&&(a=1),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=0),v===void 0&&(v=0),h===void 0&&(h=0),u===void 0&&(u=!0);var o={faces:[],verts:[]},f=t.materials;Vn.set(n,e,i),Yn.set(s,v,h),lr.fromRotationXYTranslation(Yn,Vn,u);for(var x=0;x<t.models.length;x++)for(var y=t.models[x],c=y.vertices,d=y.textureCoords,l=y.faces,m=0;m<l.length;m++){var w=l[m],M=w.vertices[0],$=w.vertices[1],_=w.vertices[2],g=c[M.vertexIndex],I=c[$.vertexIndex],G=c[_.vertexIndex],b=M.textureCoordsIndex,T=$.textureCoordsIndex,P=_.textureCoordsIndex,R=b===-1?{u:0,v:1}:d[b],C=T===-1?{u:0,v:0}:d[T],E=P===-1?{u:1,v:1}:d[P],z=16777215;w.material!==""&&f[w.material]&&(z=f[w.material]);var L=new Wr(g.x*a,g.y*a,g.z*a,R.u,R.v,z).transformMat4(lr),F=new Wr(I.x*a,I.y*a,I.z*a,C.u,C.v,z).transformMat4(lr),A=new Wr(G.x*a,G.y*a,G.z*a,E.u,E.v,z).transformMat4(lr);o.verts.push(L,F,A),o.faces.push(new zf(L,F,A))}return r&&(r.faces=r.faces.concat(o.faces),r.vertices=r.vertices.concat(o.verts)),o},Tf=bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Of=fr,Dn=dr,pf=function(t,r,a,n,e,i,s,v){if(n===void 0&&(n=!1),i===void 0&&(i=16777215),s===void 0&&(s=1),v===void 0&&(v=!1),t.length!==r.length&&!n){console.warn("GenerateVerts: vertices and uvs count not equal");return}var h={faces:[],vertices:[]},u,o,f,x,y,c,d,l,m,w,M,$=n?3:2,_=Array.isArray(i),g=Array.isArray(s);if(Array.isArray(a)&&a.length>0)for(u=0;u<a.length;u++){var I=a[u],G=a[u]*2,b=a[u]*$;o=t[b],f=t[b+1],x=n?t[b+2]:0,y=r[G],c=r[G+1],v&&(c=1-c),d=_?i[I]:i,l=g?s[I]:s,m=0,w=0,M=0,e&&(m=e[b],w=e[b+1],M=n?e[b+2]:0),h.vertices.push(new Dn(o,f,x,y,c,d,l,m,w,M))}else{var T=0,P=0;for(u=0;u<t.length;u+=$)o=t[u],f=t[u+1],x=n?t[u+2]:0,y=r[T],c=r[T+1],d=_?i[P]:i,l=g?s[P]:s,m=0,w=0,M=0,e&&(m=e[u],w=e[u+1],M=n?e[u+2]:0),h.vertices.push(new Dn(o,f,x,y,c,d,l,m,w,M)),T+=2,P++}for(u=0;u<h.vertices.length;u+=3){var R=h.vertices[u],C=h.vertices[u+1],E=h.vertices[u+2];h.faces.push(new Of(R,C,E))}return h},If=pf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xn=!0,kn="untitled",At="",Qr="";function Rf(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function Nt(t){return t.models.length===0&&t.models.push({faces:[],name:kn,textureCoords:[],vertexNormals:[],vertices:[]}),At="",t.models[t.models.length-1]}function Gf(t,r){var a=t.length>=2?t[1]:kn;r.models.push({faces:[],name:a,textureCoords:[],vertexNormals:[],vertices:[]}),At=""}function Lf(t){t.length===2&&(At=t[1])}function Sf(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;Nt(r).vertices.push({x:n,y:e,z:i})}function Ef(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;isNaN(n)&&(n=0),isNaN(e)&&(e=0),isNaN(i)&&(i=0),Xn&&(e=1-e),Nt(r).textureCoords.push({u:n,v:e,w:i})}function Ff(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;Nt(r).vertexNormals.push({x:n,y:e,z:i})}function Af(t,r){var a=t.length-1;if(!(a<3)){for(var n={group:At,material:Qr,vertices:[]},e=0;e<a;e++){var i=t[e+1],s=i.split("/"),v=s.length;if(!(v<1||v>3)){var h=0,u=0,o=0;h=parseInt(s[0],10),v>1&&s[1]!==""&&(u=parseInt(s[1],10)),v>2&&(o=parseInt(s[2],10)),h!==0&&(h<0&&(h=Nt(r).vertices.length+1+h),u-=1,h-=1,o-=1,n.vertices.push({textureCoordsIndex:u,vertexIndex:h,vertexNormalIndex:o}))}}Nt(r).faces.push(n)}}function Nf(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function Vf(t){t.length>=2&&(Qr=t[1])}var Yf=function(t,r){r===void 0&&(r=!0),Xn=r;var a={materials:{},materialLibraries:[],models:[]};At="",Qr="";for(var n=t.split(`
`),e=0;e<n.length;e++){var i=Rf(n[e]),s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"o":Gf(s,a);break;case"g":Lf(s);break;case"v":Sf(s,a);break;case"vt":Ef(s,a);break;case"vn":Ff(s,a);break;case"f":Af(s,a);break;case"mtllib":Nf(s,a);break;case"usemtl":Vf(s);break}}return a},Df=Yf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xf=function(t,r,a){return t<<16|r<<8|a},kf=Xf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qf=kf,Zf=function(t){for(var r={},a=t.split(`
`),n="",e=0;e<a.length;e++){var i=a[e].trim();if(!(i.indexOf("#")===0||i==="")){var s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"newmtl":{n=s[1];break}case"kd":{var v=Math.floor(s[1]*255),h=s.length>=2?Math.floor(s[2]*255):v,u=s.length>=3?Math.floor(s[3]*255):v;r[n]=qf(v,h,u);break}}}}return r},Bf=Zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jf=function(t,r,a,n){var e,i;if(a===void 0&&n===void 0){var s=t.getInCenter();e=s.x,i=s.y}var v=Math.cos(r),h=Math.sin(r),u=t.vertex1,o=t.vertex2,f=t.vertex3,x=u.x-e,y=u.y-i;u.set(x*v-y*h+e,x*h+y*v+i),x=o.x-e,y=o.y-i,o.set(x*v-y*h+e,x*h+y*v+i),x=f.x-e,y=f.y-i,f.set(x*v-y*h+e,x*h+y*v+i)},Uf=jf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wf={Face:fr,GenerateGridVerts:Cf,GenerateObjVerts:Tf,GenerateVerts:If,ParseObj:Df,ParseObjMaterial:Bf,RotateFace:Uf,Vertex:dr},Qf=Wf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hf=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},Kf=Hf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jf=p,t1=function(t){return new Jf(t.x,t.y)},r1=t1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var a1=function(t,r){return r.setTo(t.x,t.y)},n1=a1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e1=function(t,r){return t.x===r.x&&t.y===r.y},i1=e1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s1=function(t){return t.setTo(Math.floor(t.x),Math.floor(t.y))},v1=s1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var h1=p,u1=function(t,r){if(r===void 0&&(r=new h1),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var a=t.length;if(a<1)throw new Error("GetCentroid points array must not be empty");if(a===1)r.x=t[0].x,r.y=t[0].y;else{for(var n=0;n<a;n++)r.x+=t[n].x,r.y+=t[n].y;r.x/=a,r.y/=a}return r},o1=u1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f1=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},qn=f1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x1=function(t){return t.x*t.x+t.y*t.y},Zn=x1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y1=K,c1=function(t,r){r===void 0&&(r=new y1);for(var a=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=0;s<t.length;s++){var v=t[s];v.x>a&&(a=v.x),v.x<n&&(n=v.x),v.y>e&&(e=v.y),v.y<i&&(i=v.y)}return r.x=n,r.y=i,r.width=a-n,r.height=e-i,r},d1=c1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l1=p,M1=function(t,r,a,n){return a===void 0&&(a=0),n===void 0&&(n=new l1),n.x=t.x+(r.x-t.x)*a,n.y=t.y+(r.y-t.y)*a,n},m1=M1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var w1=function(t){return t.setTo(t.y,t.x)},$1=w1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _1=p,g1=function(t,r){return r===void 0&&(r=new _1),r.setTo(-t.x,-t.y)},C1=g1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var z1=p,P1=Zn,b1=function(t,r,a){a===void 0&&(a=new z1);var n=t.x*r.x+t.y*r.y,e=n/P1(r);return e!==0&&(a.x=e*r.x,a.y=e*r.y),a},T1=b1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O1=p,p1=function(t,r,a){a===void 0&&(a=new O1);var n=t.x*r.x+t.y*r.y;return n!==0&&(a.x=n*r.x,a.y=n*r.y),a},I1=p1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R1=qn,G1=function(t,r){if(t.x!==0||t.y!==0){var a=R1(t);t.x/=a,t.y/=a}return t.x*=r,t.y*=r,t},L1=G1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B=p;B.Ceil=Kf,B.Clone=r1,B.CopyFrom=n1,B.Equals=i1,B.Floor=v1,B.GetCentroid=o1,B.GetMagnitude=qn,B.GetMagnitudeSq=Zn,B.GetRectangleFromPoints=d1,B.Interpolate=m1,B.Invert=$1,B.Negative=C1,B.Project=T1,B.ProjectUnit=I1,B.SetMagnitude=L1;var S1=B;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E1=function(t,r,a){for(var n=!1,e=-1,i=t.points.length-1;++e<t.points.length;i=e){var s=t.points[e].x,v=t.points[e].y,h=t.points[i].x,u=t.points[i].y;(v<=a&&a<u||u<=a&&a<v)&&r<(h-s)*(a-v)/(u-v)+s&&(n=!n)}return n},Hr=E1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F1=nt,A1=et,N1=function(t){for(var r=t.points,a=0,n=0;n<r.length;n++){var e=r[n],i=r[(n+1)%r.length],s=new A1(e.x,e.y,i.x,i.y);a+=F1(s)}return a},Bn=N1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V1=nt,Y1=et,D1=Bn,X1=function(t,r,a,n){n===void 0&&(n=[]);var e=t.points,i=D1(t);!r&&a>0&&(r=i/a);for(var s=0;s<r;s++)for(var v=i*(s/r),h=0,u=0;u<e.length;u++){var o=e[u],f=e[(u+1)%e.length],x=new Y1(o.x,o.y,f.x,f.y),y=V1(x);if(v<h||v>h+y){h+=y;continue}var c=x.getPoint((v-h)/y);n.push(c);break}return n},jn=X1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k1=X,q1=Hr,Z1=jn,B1=at,j1=new k1({initialize:function(r){this.type=B1.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return q1(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,a=0;a<t.length;a++)r={x:0,y:0},typeof t[a]=="number"||typeof t[a]=="string"?(r.x=parseFloat(t[a]),r.y=parseFloat(t[a+1]),a++):Array.isArray(t[a])?(r.x=t[a][0],r.y=t[a][1]):(r.x=t[a].x,r.y=t[a].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,a,n=0;n<this.points.length-1;n++)r=this.points[n],a=this.points[n+1],t+=(a.x-r.x)*(r.y+a.y);return r=this.points[0],a=this.points[this.points.length-1],t+=(r.x-a.x)*(a.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,a){return Z1(this,t,r,a)}}),Un=j1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U1=Un,W1=function(t){return new U1(t.points)},Q1=W1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H1=Hr,K1=function(t,r){return H1(t,r.x,r.y)},J1=K1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Kr(t,r,a){a=a||2;var n=r&&r.length,e=n?r[0]*a:t.length,i=Wn(t,0,e,a,!0),s=[];if(!i||i.next===i.prev)return s;var v,h,u,o,f,x,y;if(n&&(i=e0(t,r,i,a)),t.length>80*a){v=u=t[0],h=o=t[1];for(var c=a;c<e;c+=a)f=t[c],x=t[c+1],f<v&&(v=f),x<h&&(h=x),f>u&&(u=f),x>o&&(o=x);y=Math.max(u-v,o-h),y=y!==0?32767/y:0}return Vt(i,s,a,v,h,y,0),s}function Wn(t,r,a,n,e){var i,s;if(e===ra(t,r,a,n)>0)for(i=r;i<a;i+=n)s=Kn(i,t[i],t[i+1],s);else for(i=a-n;i>=r;i-=n)s=Kn(i,t[i],t[i+1],s);return s&&Mr(s,s.next)&&(Dt(s),s=s.next),s}function ot(t,r){if(!t)return t;r||(r=t);var a=t,n;do if(n=!1,!a.steiner&&(Mr(a,a.next)||V(a.prev,a,a.next)===0)){if(Dt(a),a=r=a.prev,a===a.next)break;n=!0}else a=a.next;while(n||a!==r);return r}function Vt(t,r,a,n,e,i,s){if(t){!s&&i&&u0(t,n,e,i);for(var v=t,h,u;t.prev!==t.next;){if(h=t.prev,u=t.next,i?r0(t,n,e,i):t0(t)){r.push(h.i/a|0),r.push(t.i/a|0),r.push(u.i/a|0),Dt(t),t=u.next,v=u.next;continue}if(t=u,t===v){s?s===1?(t=a0(ot(t),r,a),Vt(t,r,a,n,e,i,2)):s===2&&n0(t,r,a,n,e,i):Vt(ot(t),r,a,n,e,i,1);break}}}}function t0(t){var r=t.prev,a=t,n=t.next;if(V(r,a,n)>=0)return!1;for(var e=r.x,i=a.x,s=n.x,v=r.y,h=a.y,u=n.y,o=e<i?e<s?e:s:i<s?i:s,f=v<h?v<u?v:u:h<u?h:u,x=e>i?e>s?e:s:i>s?i:s,y=v>h?v>u?v:u:h>u?h:u,c=n.next;c!==r;){if(c.x>=o&&c.x<=x&&c.y>=f&&c.y<=y&&$t(e,v,i,h,s,u,c.x,c.y)&&V(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function r0(t,r,a,n){var e=t.prev,i=t,s=t.next;if(V(e,i,s)>=0)return!1;for(var v=e.x,h=i.x,u=s.x,o=e.y,f=i.y,x=s.y,y=v<h?v<u?v:u:h<u?h:u,c=o<f?o<x?o:x:f<x?f:x,d=v>h?v>u?v:u:h>u?h:u,l=o>f?o>x?o:x:f>x?f:x,m=Jr(y,c,r,a,n),w=Jr(d,l,r,a,n),M=t.prevZ,$=t.nextZ;M&&M.z>=m&&$&&$.z<=w;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==s&&$t(v,o,h,f,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0||(M=M.prevZ,$.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==s&&$t(v,o,h,f,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0))return!1;$=$.nextZ}for(;M&&M.z>=m;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==s&&$t(v,o,h,f,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;$&&$.z<=w;){if($.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==s&&$t(v,o,h,f,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0)return!1;$=$.nextZ}return!0}function a0(t,r,a){var n=t;do{var e=n.prev,i=n.next.next;!Mr(e,i)&&Qn(e,n,n.next,i)&&Yt(e,i)&&Yt(i,e)&&(r.push(e.i/a|0),r.push(n.i/a|0),r.push(i.i/a|0),Dt(n),Dt(n.next),n=t=i),n=n.next}while(n!==t);return ot(n)}function n0(t,r,a,n,e,i){var s=t;do{for(var v=s.next.next;v!==s.prev;){if(s.i!==v.i&&x0(s,v)){var h=Hn(s,v);s=ot(s,s.next),h=ot(h,h.next),Vt(s,r,a,n,e,i,0),Vt(h,r,a,n,e,i,0);return}v=v.next}s=s.next}while(s!==t)}function e0(t,r,a,n){var e=[],i,s,v,h,u;for(i=0,s=r.length;i<s;i++)v=r[i]*n,h=i<s-1?r[i+1]*n:t.length,u=Wn(t,v,h,n,!1),u===u.next&&(u.steiner=!0),e.push(f0(u));for(e.sort(i0),i=0;i<e.length;i++)a=s0(e[i],a);return a}function i0(t,r){return t.x-r.x}function s0(t,r){var a=v0(t,r);if(!a)return r;var n=Hn(a,t);return ot(n,n.next),ot(a,a.next)}function v0(t,r){var a=r,n=t.x,e=t.y,i=-1/0,s;do{if(e<=a.y&&e>=a.next.y&&a.next.y!==a.y){var v=a.x+(e-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=n&&v>i&&(i=v,s=a.x<a.next.x?a:a.next,v===n))return s}a=a.next}while(a!==r);if(!s)return null;var h=s,u=s.x,o=s.y,f=1/0,x;a=s;do n>=a.x&&a.x>=u&&n!==a.x&&$t(e<o?n:i,e,u,o,e<o?i:n,e,a.x,a.y)&&(x=Math.abs(e-a.y)/(n-a.x),Yt(a,t)&&(x<f||x===f&&(a.x>s.x||a.x===s.x&&h0(s,a)))&&(s=a,f=x)),a=a.next;while(a!==h);return s}function h0(t,r){return V(t.prev,t,r.prev)<0&&V(r.next,t,t.next)<0}function u0(t,r,a,n){var e=t;do e.z===0&&(e.z=Jr(e.x,e.y,r,a,n)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,o0(e)}function o0(t){var r,a,n,e,i,s,v,h,u=1;do{for(a=t,t=null,i=null,s=0;a;){for(s++,n=a,v=0,r=0;r<u&&(v++,n=n.nextZ,!!n);r++);for(h=u;v>0||h>0&&n;)v!==0&&(h===0||!n||a.z<=n.z)?(e=a,a=a.nextZ,v--):(e=n,n=n.nextZ,h--),i?i.nextZ=e:t=e,e.prevZ=i,i=e;a=n}i.nextZ=null,u*=2}while(s>1);return t}function Jr(t,r,a,n,e){return t=(t-a)*e|0,r=(r-n)*e|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function f0(t){var r=t,a=t;do(r.x<a.x||r.x===a.x&&r.y<a.y)&&(a=r),r=r.next;while(r!==t);return a}function $t(t,r,a,n,e,i,s,v){return(e-s)*(r-v)>=(t-s)*(i-v)&&(t-s)*(n-v)>=(a-s)*(r-v)&&(a-s)*(i-v)>=(e-s)*(n-v)}function x0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!y0(t,r)&&(Yt(t,r)&&Yt(r,t)&&c0(t,r)&&(V(t.prev,t,r.prev)||V(t,r.prev,r))||Mr(t,r)&&V(t.prev,t,t.next)>0&&V(r.prev,r,r.next)>0)}function V(t,r,a){return(r.y-t.y)*(a.x-r.x)-(r.x-t.x)*(a.y-r.y)}function Mr(t,r){return t.x===r.x&&t.y===r.y}function Qn(t,r,a,n){var e=wr(V(t,r,a)),i=wr(V(t,r,n)),s=wr(V(a,n,t)),v=wr(V(a,n,r));return!!(e!==i&&s!==v||e===0&&mr(t,a,r)||i===0&&mr(t,n,r)||s===0&&mr(a,t,n)||v===0&&mr(a,r,n))}function mr(t,r,a){return r.x<=Math.max(t.x,a.x)&&r.x>=Math.min(t.x,a.x)&&r.y<=Math.max(t.y,a.y)&&r.y>=Math.min(t.y,a.y)}function wr(t){return t>0?1:t<0?-1:0}function y0(t,r){var a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==r.i&&a.next.i!==r.i&&Qn(a,a.next,t,r))return!0;a=a.next}while(a!==t);return!1}function Yt(t,r){return V(t.prev,t,t.next)<0?V(t,r,t.next)>=0&&V(t,t.prev,r)>=0:V(t,r,t.prev)<0||V(t,t.next,r)<0}function c0(t,r){var a=t,n=!1,e=(t.x+r.x)/2,i=(t.y+r.y)/2;do a.y>i!=a.next.y>i&&a.next.y!==a.y&&e<(a.next.x-a.x)*(i-a.y)/(a.next.y-a.y)+a.x&&(n=!n),a=a.next;while(a!==t);return n}function Hn(t,r){var a=new ta(t.i,t.x,t.y),n=new ta(r.i,r.x,r.y),e=t.next,i=r.prev;return t.next=r,r.prev=t,a.next=e,e.prev=a,n.next=a,a.prev=n,i.next=n,n.prev=i,n}function Kn(t,r,a,n){var e=new ta(t,r,a);return n?(e.next=n.next,e.prev=n,n.next.prev=e,n.next=e):(e.prev=e,e.next=e),e}function Dt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ta(t,r,a){this.i=t,this.x=r,this.y=a,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Kr.deviation=function(t,r,a,n){var e=r&&r.length,i=e?r[0]*a:t.length,s=Math.abs(ra(t,0,i,a));if(e)for(var v=0,h=r.length;v<h;v++){var u=r[v]*a,o=v<h-1?r[v+1]*a:t.length;s-=Math.abs(ra(t,u,o,a))}var f=0;for(v=0;v<n.length;v+=3){var x=n[v]*a,y=n[v+1]*a,c=n[v+2]*a;f+=Math.abs((t[x]-t[c])*(t[y+1]-t[x+1])-(t[x]-t[y])*(t[c+1]-t[x+1]))}return s===0&&f===0?0:Math.abs((f-s)/s)};function ra(t,r,a,n){for(var e=0,i=r,s=a-n;i<a;i+=n)e+=(t[s]-t[i])*(t[i+1]+t[s+1]),s=i;return e}Kr.flatten=function(t){for(var r=t[0][0].length,a={vertices:[],holes:[],dimensions:r},n=0,e=0;e<t.length;e++){for(var i=0;i<t[e].length;i++)for(var s=0;s<r;s++)a.vertices.push(t[e][i][s]);e>0&&(n+=t[e-1].length,a.holes.push(n))}return a};var Jn=Kr;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d0=K,l0=function(t,r){r===void 0&&(r=new d0);for(var a=1/0,n=1/0,e=-a,i=-n,s,v=0;v<t.points.length;v++)s=t.points[v],a=Math.min(a,s.x),n=Math.min(n,s.y),e=Math.max(e,s.x),i=Math.max(i,s.y);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},M0=l0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m0=function(t,r){r===void 0&&(r=[]);for(var a=0;a<t.points.length;a++)r.push(t.points[a].x),r.push(t.points[a].y);return r},w0=m0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $0=function(t){return t.points.reverse(),t},_0=$0;function g0(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n}function C0(t,r,a){var n=r.x,e=r.y,i=a.x-n,s=a.y-e;if(i!==0||s!==0){var v=((t.x-n)*i+(t.y-e)*s)/(i*i+s*s);v>1?(n=a.x,e=a.y):v>0&&(n+=i*v,e+=s*v)}return i=t.x-n,s=t.y-e,i*i+s*s}function z0(t,r){for(var a=t[0],n=[a],e,i=1,s=t.length;i<s;i++)e=t[i],g0(e,a)>r&&(n.push(e),a=e);return a!==e&&n.push(e),n}function aa(t,r,a,n,e){for(var i=n,s,v=r+1;v<a;v++){var h=C0(t[v],t[r],t[a]);h>i&&(s=v,i=h)}i>n&&(s-r>1&&aa(t,r,s,n,e),e.push(t[s]),a-s>1&&aa(t,s,a,n,e))}function P0(t,r){var a=t.length-1,n=[t[0]];return aa(t,0,a,r,n),n.push(t[a]),n}var b0=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=!1);var n=t.points;if(n.length>2){var e=r*r;a||(n=z0(n,e)),t.setTo(P0(n,e))}return t},T0=b0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var te=function(t,r){return t[0]=r[0],t[1]=r[1],t},O0=function(t){var r,a=[],n=t.points;for(r=0;r<n.length;r++)a.push([n[r].x,n[r].y]);var e=[];for(a.length>0&&e.push(te([0,0],a[0])),r=0;r<a.length-1;r++){var i=a[r],s=a[r+1],v=i[0],h=i[1],u=s[0],o=s[1];e.push([.85*v+.15*u,.85*h+.15*o]),e.push([.15*v+.85*u,.15*h+.85*o])}return a.length>1&&e.push(te([0,0],a[a.length-1])),t.setTo(e)},p0=O0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I0=function(t,r,a){for(var n=t.points,e=0;e<n.length;e++)n[e].x+=r,n[e].y+=a;return t},R0=I0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H=Un;H.Clone=Q1,H.Contains=Hr,H.ContainsPoint=J1,H.Earcut=Jn,H.GetAABB=M0,H.GetNumberArray=w0,H.GetPoints=jn,H.Perimeter=Bn,H.Reverse=_0,H.Simplify=T0,H.Smooth=p0,H.Translate=R0;var G0=H;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L0=function(t){return t.width*t.height},S0=L0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},F0=E0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},N0=A0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V0=function(t,r,a){return t.x=r-t.width/2,t.y=a-t.height/2,t},re=V0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Y0=K,D0=function(t){return new Y0(t.x,t.y,t.width,t.height)},X0=D0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k0=Bt,q0=function(t,r){return k0(t,r.x,r.y)},Z0=q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B0=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},ae=B0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j0=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},U0=j0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var W0=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},Q0=W0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H0=function(t){return t.height===0?NaN:t.width/t.height},na=H0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ne=na,K0=function(t,r){var a=ne(t);return a<ne(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},J0=K0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ee=na,tx=function(t,r){var a=ee(t);return a>ee(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},rx=tx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ax=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t},nx=ax;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ex=function(t){return t.x=Math.floor(t.x),t.y=Math.floor(t.y),t.width=Math.floor(t.width),t.height=Math.floor(t.height),t},ix=ex;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sx=K,ie=U,vx=function(t,r){if(r===void 0&&(r=new sx),t.length===0)return r;for(var a=Number.MAX_VALUE,n=Number.MAX_VALUE,e=ie.MIN_SAFE_INTEGER,i=ie.MIN_SAFE_INTEGER,s,v,h,u=0;u<t.length;u++)s=t[u],Array.isArray(s)?(v=s[0],h=s[1]):(v=s.x,h=s.y),a=Math.min(a,v),n=Math.min(n,h),e=Math.max(e,v),i=Math.max(i,h);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},hx=vx;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ux=K,ox=function(t,r,a,n,e){return e===void 0&&(e=new ux),e.setTo(Math.min(t,a),Math.min(r,n),Math.abs(t-a),Math.abs(r-n))},fx=ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xx=p,yx=function(t,r){return r===void 0&&(r=new xx),r.x=t.centerX,r.y=t.centerY,r},cx=yx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dx=p,lx=function(t,r){return r===void 0&&(r=new dx),r.x=t.width,r.y=t.height,r},Mx=lx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mx=re,wx=function(t,r,a){var n=t.centerX,e=t.centerY;return t.setSize(t.width+r*2,t.height+a*2),mx(t,n,e)},$x=wx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _x=K,gx=rr,Cx=function(t,r,a){return a===void 0&&(a=new _x),gx(t,r)?(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y):a.setEmpty(),a},zx=Cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var se=jt,Px=p,bx=function(t,r,a,n){if(n===void 0&&(n=[]),!r&&!a)return n;r?a=Math.round(se(t)/r):r=se(t)/a;for(var e=t.x,i=t.y,s=0,v=0;v<a;v++)switch(n.push(new Px(e,i)),s){case 0:e+=r,e>=t.right&&(s=1,i+=e-t.right,e=t.right);break;case 1:i+=r,i>=t.bottom&&(s=2,e-=i-t.bottom,i=t.bottom);break;case 2:e-=r,e<=t.left&&(s=3,i-=t.left-e,e=t.left);break;case 3:i-=r,i<=t.top&&(s=0,i=t.top);break}return n},Tx=bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ox=function(t,r){for(var a=t.x,n=t.right,e=t.y,i=t.bottom,s=0;s<r.length;s++)a=Math.min(a,r[s].x),n=Math.max(n,r[s].x),e=Math.min(e,r[s].y),i=Math.max(i,r[s].y);return t.x=a,t.y=e,t.width=n-a,t.height=i-e,t},px=Ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ix=function(t,r){var a=Math.min(t.x,r.x),n=Math.max(t.right,r.right);t.x=a,t.width=n-a;var e=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=e,t.height=i-e,t},Rx=Ix;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gx=function(t,r,a){var n=Math.min(t.x,r),e=Math.max(t.right,r);t.x=n,t.width=e-n;var i=Math.min(t.y,a),s=Math.max(t.bottom,a);return t.y=i,t.height=s-i,t},Lx=Gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sx=function(t,r,a){return t.x+=r,t.y+=a,t},Ex=Sx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fx=function(t,r){return t.x+=r.x,t.y+=r.y,t},Ax=Fx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nx=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},Vx=Nx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yx=U,Dx=function(t){return t*Yx.DEG_TO_RAD},ve=Dx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xx=p,kx=ve,qx=function(t,r,a){a===void 0&&(a=new Xx),r=kx(r);var n=Math.sin(r),e=Math.cos(r),i=e>0?t.width/2:t.width/-2,s=n>0?t.height/2:t.height/-2;return Math.abs(i*n)<Math.abs(s*e)?s=i*n/e:i=s*e/n,a.x=i+t.centerX,a.y=s+t.centerY,a},Zx=qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bx=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},he=Bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jx=he,Ux=ae,Wx=p,Qx=function(t,r,a){if(a===void 0&&(a=new Wx),Ux(t,r))switch(jx(0,3)){case 0:a.x=t.x+Math.random()*(r.right-t.x),a.y=t.y+Math.random()*(r.top-t.y);break;case 1:a.x=r.x+Math.random()*(t.right-r.x),a.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:a.x=t.x+Math.random()*(r.x-t.x),a.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:a.x=r.right+Math.random()*(t.right-r.right),a.y=t.y+Math.random()*(r.bottom-t.y);break}return a},Hx=Qx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kx=function(t,r){return t.width===r.width&&t.height===r.height},Jx=Kx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ty=function(t,r,a){return a===void 0&&(a=r),t.width*=r,t.height*=a,t},ry=ty;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ay=K,ny=function(t,r,a){a===void 0&&(a=new ay);var n=Math.min(t.x,r.x),e=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-n,s=Math.max(t.bottom,r.bottom)-e;return a.setTo(n,e,i,s)},ey=ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O=K;O.Area=S0,O.Ceil=F0,O.CeilAll=N0,O.CenterOn=re,O.Clone=X0,O.Contains=Bt,O.ContainsPoint=Z0,O.ContainsRect=ae,O.CopyFrom=U0,O.Decompose=sn,O.Equals=Q0,O.FitInside=J0,O.FitOutside=rx,O.Floor=nx,O.FloorAll=ix,O.FromPoints=hx,O.FromXY=fx,O.GetAspectRatio=na,O.GetCenter=cx,O.GetPoint=pr,O.GetPoints=Fa,O.GetSize=Mx,O.Inflate=$x,O.Intersection=zx,O.MarchingAnts=Tx,O.MergePoints=px,O.MergeRect=Rx,O.MergeXY=Lx,O.Offset=Ex,O.OffsetPoint=Ax,O.Overlaps=Vx,O.Perimeter=jt,O.PerimeterPoint=Zx,O.Random=ka,O.RandomOutside=Hx,O.SameDimensions=Jx,O.Scale=ry,O.Union=ey;var iy=O;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sy=p,ea=nt,vy=function(t,r,a){a===void 0&&(a=new sy);var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return a.x=n.x1,a.y=n.y1,a;var s=ea(n),v=ea(e),h=ea(i),u=s+v+h,o=u*r,f=0;return o<s?(f=o/s,a.x=n.x1+(n.x2-n.x1)*f,a.y=n.y1+(n.y2-n.y1)*f):o>s+v?(o-=s+v,f=o/h,a.x=i.x1+(i.x2-i.x1)*f,a.y=i.y1+(i.y2-i.y1)*f):(o-=s,f=o/v,a.x=e.x1+(e.x2-e.x1)*f,a.y=e.y1+(e.y2-e.y1)*f),a},ue=vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ia=nt,hy=p,uy=function(t,r,a,n){n===void 0&&(n=[]);var e=t.getLineA(),i=t.getLineB(),s=t.getLineC(),v=ia(e),h=ia(i),u=ia(s),o=v+h+u;!r&&a>0&&(r=o/a);for(var f=0;f<r;f++){var x=o*(f/r),y=0,c=new hy;x<v?(y=x/v,c.x=e.x1+(e.x2-e.x1)*y,c.y=e.y1+(e.y2-e.y1)*y):x>v+h?(x-=v+h,y=x/u,c.x=s.x1+(s.x2-s.x1)*y,c.y=s.y1+(s.y2-s.y1)*y):(x-=v,y=x/h,c.x=i.x1+(i.x2-i.x1)*y,c.y=i.y1+(i.y2-i.y1)*y),n.push(c)}return n},oe=uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oy=p,fy=function(t,r){r===void 0&&(r=new oy);var a=t.x2-t.x1,n=t.y2-t.y1,e=t.x3-t.x1,i=t.y3-t.y1,s=Math.random(),v=Math.random();return s+v>=1&&(s=1-s,v=1-v),r.x=t.x1+(a*s+e*v),r.y=t.y1+(n*s+i*v),r},fe=fy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xy=X,yy=nr,cy=ue,dy=oe,ly=at,sa=et,My=fe,my=new xy({initialize:function(r,a,n,e,i,s){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=0),this.type=ly.TRIANGLE,this.x1=r,this.y1=a,this.x2=n,this.y2=e,this.x3=i,this.y3=s},contains:function(t,r){return yy(this,t,r)},getPoint:function(t,r){return cy(this,t,r)},getPoints:function(t,r,a){return dy(this,t,r,a)},getRandomPoint:function(t){return My(this,t)},setTo:function(t,r,a,n,e,i){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this.x3=e,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new sa),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new sa),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new sa),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),Xt=my;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wy=function(t){var r=t.x1,a=t.y1,n=t.x2,e=t.y2,i=t.x3,s=t.y3;return Math.abs(((i-r)*(e-a)-(n-r)*(s-a))/2)},$y=wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _y=Xt,gy=function(t,r,a){var n=a*(Math.sqrt(3)/2),e=t,i=r,s=t+a/2,v=r+n,h=t-a/2,u=r+n;return new _y(e,i,s,v,h,u)},Cy=gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zy=Jn,Py=Xt,by=function(t,r,a,n,e){r===void 0&&(r=null),a===void 0&&(a=1),n===void 0&&(n=1),e===void 0&&(e=[]);for(var i=zy(t,r),s,v,h,u,o,f,x,y,c,d=0;d<i.length;d+=3)s=i[d],v=i[d+1],h=i[d+2],u=t[s*2]*a,o=t[s*2+1]*n,f=t[v*2]*a,x=t[v*2+1]*n,y=t[h*2]*a,c=t[h*2+1]*n,e.push(new Py(u,o,f,x,y,c));return e},Ty=by;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=Xt,py=function(t,r,a,n){n===void 0&&(n=a);var e=t,i=r,s=t,v=r-n,h=t+a,u=r;return new Oy(e,i,s,v,h,u)},Iy=py;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ry=p,Gy=function(t,r){return r===void 0&&(r=new Ry),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},xe=Gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ly=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t.x3+=r,t.y3+=a,t},ye=Ly;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sy=xe,Ey=ye,Fy=function(t,r,a,n){n===void 0&&(n=Sy);var e=n(t),i=r-e.x,s=a-e.y;return Ey(t,i,s)},Ay=Fy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ny=xt;function va(t,r,a,n){return t*n-r*a}var Vy=function(t,r){r===void 0&&(r=new Ny);var a=t.x3,n=t.y3,e=t.x1-a,i=t.y1-n,s=t.x2-a,v=t.y2-n,h=2*va(e,i,s,v),u=va(i,e*e+i*i,v,s*s+v*v),o=va(e,e*e+i*i,s,s*s+v*v);return r.x=a-u/h,r.y=n+o/h,r},Yy=Vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dy=Or,Xy=function(t,r){r===void 0&&(r=new Dy);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=t.x3,v=t.y3,h=e-a,u=i-n,o=s-a,f=v-n,x=h*(a+e)+u*(n+i),y=o*(a+s)+f*(n+v),c=2*(h*(v-i)-u*(s-e)),d,l;if(Math.abs(c)<1e-6){var m=Math.min(a,e,s),w=Math.min(n,i,v);d=(Math.max(a,e,s)-m)*.5,l=(Math.max(n,i,v)-w)*.5,r.x=m+d,r.y=w+l,r.radius=Math.sqrt(d*d+l*l)}else r.x=(f*x-u*y)/c,r.y=(h*y-o*x)/c,d=r.x-a,l=r.y-n,r.radius=Math.sqrt(d*d+l*l);return r},ky=Xy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qy=Xt,Zy=function(t){return new qy(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},By=Zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jy=nr,Uy=function(t,r){return jy(t,r.x,r.y)},Wy=Uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qy=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},Hy=Qy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ky=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},Jy=Ky;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tc=p;function ha(t,r,a,n){var e=t-a,i=r-n,s=e*e+i*i;return Math.sqrt(s)}var rc=function(t,r){r===void 0&&(r=new tc);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=t.x3,v=t.y3,h=ha(s,v,e,i),u=ha(a,n,s,v),o=ha(e,i,a,n),f=h+u+o;return r.x=(a*h+e*u+s*o)/f,r.y=(n*h+i*u+v*o)/f,r},ce=rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ua=nt,ac=function(t){var r=t.getLineA(),a=t.getLineB(),n=t.getLineC();return ua(r)+ua(a)+ua(n)},nc=ac;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ec=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x1-r,v=t.y1-a;return t.x1=s*e-v*i+r,t.y1=s*i+v*e+a,s=t.x2-r,v=t.y2-a,t.x2=s*e-v*i+r,t.y2=s*i+v*e+a,s=t.x3-r,v=t.y3-a,t.x3=s*e-v*i+r,t.y3=s*i+v*e+a,t},oa=ec;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ic=oa,sc=ce,vc=function(t,r){var a=sc(t);return ic(t,a.x,a.y,r)},hc=vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uc=oa,oc=function(t,r,a){return uc(t,r.x,r.y,a)},fc=oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=Xt;N.Area=$y,N.BuildEquilateral=Cy,N.BuildFromPolygon=Ty,N.BuildRight=Iy,N.CenterOn=Ay,N.Centroid=xe,N.CircumCenter=Yy,N.CircumCircle=ky,N.Clone=By,N.Contains=nr,N.ContainsArray=Nr,N.ContainsPoint=Wy,N.CopyFrom=Hy,N.Decompose=fn,N.Equals=Jy,N.GetPoint=ue,N.GetPoints=oe,N.InCenter=ce,N.Perimeter=nc,N.Offset=ye,N.Random=fe,N.Rotate=hc,N.RotateAroundPoint=fc,N.RotateAroundXY=oa;var xc=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yc=at,cc=Ia,fa={Circle:ws,Ellipse:ov,Intersects:ph,Line:uf,Mesh:Qf,Point:S1,Polygon:G0,Rectangle:iy,Triangle:xc};fa=cc(!1,fa,yc);var dc=fa,lc=Ta(dc);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mc=function(t,r,a,n){return Math.atan2(n-r,a-t)},mc=Mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wc=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},$c=wc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _c=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},gc=_c;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cc=function(t,r,a,n){return Math.atan2(a-t,n-r)},zc=Cc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kt=U,Pc=function(t){return t>Math.PI&&(t-=kt.PI2),Math.abs(((t+kt.TAU)%kt.PI2-kt.PI2)%kt.PI2)},bc=Pc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tc=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},de=Tc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oc=function(t,r){return Math.random()*(r-t)+t},xa=Oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pc=xa,Ic=function(){return pc(-Math.PI,Math.PI)},Rc=Ic;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gc=xa,Lc=function(){return Gc(-180,180)},Sc=Lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ec=de,Fc=function(t){return Ec(t+Math.PI)},Ac=Fc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ya=U,Nc=function(t,r,a){return a===void 0&&(a=.05),t===r||(Math.abs(r-t)<=a||Math.abs(r-t)>=ya.PI2-a?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=ya.PI2:r-=ya.PI2),r>t?t+=a:r<t&&(t-=a))),t},Vc=Nc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yc=function(t,r){var a=r-t;if(a===0)return 0;var n=Math.floor((a- -180)/360);return a-n*360},Dc=Yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xc=or,kc=function(t){return Xc(t,-Math.PI,Math.PI)},qc=kc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zc=or,Bc=function(t){return Zc(t,-180,180)},jc=Bc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uc={Between:mc,BetweenPoints:$c,BetweenPointsY:gc,BetweenY:zc,CounterClockwise:bc,Normalize:de,Random:Rc,RandomDegrees:Sc,Reverse:Ac,RotateTo:Vc,ShortestBetween:Dc,Wrap:qc,WrapDegrees:jc};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wc=function(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n},Qc=Wc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hc=function(t,r,a,n){return Math.max(Math.abs(t-a),Math.abs(r-n))},Kc=Hc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jc=function(t,r,a,n,e){return e===void 0&&(e=2),Math.sqrt(Math.pow(a-t,e)+Math.pow(n-r,e))},t2=Jc;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var r2=function(t,r,a,n){return Math.abs(t-a)+Math.abs(r-n)},a2=r2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var n2=function(t,r,a,n){var e=t-a,i=r-n;return e*e+i*i},e2=n2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var i2={Between:Wa,BetweenPoints:ln,BetweenPointsSquared:Qc,Chebyshev:Kc,Power:t2,Snake:a2,Squared:e2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var s2={Back:Mn,Bounce:mn,Circular:wn,Cubic:$n,Elastic:_n,Expo:gn,Linear:Cn,Quadratic:zn,Quartic:Pn,Quintic:bn,Sine:Tn,Stepped:On};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var v2=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},h2=v2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u2=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},o2=u2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var f2=function(t,r,a){return a===void 0&&(a=1e-4),t>r-a},x2=f2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y2=function(t,r,a){return a===void 0&&(a=1e-4),t<r+a},c2=y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d2={Ceil:h2,Equal:Ya,Floor:o2,GreaterThan:x2,LessThan:c2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l2=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},le=l2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ca=le,M2=function(t,r){return ca(t)/ca(r)/ca(t-r)},Me=M2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m2=Me,w2=function(t,r){for(var a=0,n=t.length-1,e=0;e<=n;e++)a+=Math.pow(1-r,n-e)*Math.pow(r,e)*t[e]*m2(n,e);return a},$2=w2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _2=function(t,r,a,n,e){var i=(n-r)*.5,s=(e-a)*.5,v=t*t,h=t*v;return(2*a-2*n+i+s)*h+(-3*a+3*n-2*i-s)*v+i*t+a},me=_2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $r=me,g2=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return t[0]===t[a]?(r<0&&(e=Math.floor(n=a*(1+r))),$r(n-e,t[(e-1+a)%a],t[e],t[(e+1)%a],t[(e+2)%a])):r<0?t[0]-($r(-n,t[0],t[0],t[1],t[1])-t[0]):r>1?t[a]-($r(n-a,t[a],t[a],t[a-1],t[a-1])-t[a]):$r(n-e,t[e?e-1:0],t[e],t[a<e+1?a:e+1],t[a<e+2?a:e+2])},C2=g2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function z2(t,r){var a=1-t;return a*a*a*r}function P2(t,r){var a=1-t;return 3*a*a*t*r}function b2(t,r){return 3*(1-t)*t*t*r}function T2(t,r){return t*t*t*r}var O2=function(t,r,a,n,e){return z2(t,r)+P2(t,a)+b2(t,n)+T2(t,e)},p2=O2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I2=function(t,r,a){return(r-t)*a+t},we=I2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var da=we,R2=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return r<0?da(t[0],t[1],n):r>1?da(t[a],t[a-1],a-n):da(t[e],t[e+1>a?a:e+1],n-e)},G2=R2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function L2(t,r){var a=1-t;return a*a*r}function S2(t,r){return 2*(1-t)*t*r}function E2(t,r){return t*t*r}var F2=function(t,r,a,n){return L2(t,r)+S2(t,a)+E2(t,n)},A2=F2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N2=function(t,r,a){return t<=r?0:t>=a?1:(t=(t-r)/(a-r),t*t*(3-2*t))},$e=N2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V2=$e,Y2=function(t,r,a){return r+(a-r)*V2(t,0,1)},D2=Y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var X2=function(t,r,a){return t=Math.max(0,Math.min(1,(t-r)/(a-r))),t*t*t*(t*(t*6-15)+10)},_e=X2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var k2=_e,q2=function(t,r,a){return r+(a-r)*k2(t,0,1)},Z2=q2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B2={Bezier:$2,CatmullRom:C2,CubicBezier:p2,Linear:G2,QuadraticBezier:A2,SmoothStep:D2,SmootherStep:Z2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j2=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},U2=j2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var W2=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},Q2=W2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H2=function(t){return t>0&&(t&t-1)===0},K2=H2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J2={GetNext:U2,IsSize:Q2,IsValue:K2};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var td=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.ceil(t/r),n?(a+t)/r:a+t)},rd=td;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ad=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.floor(t/r),n?(a+t)/r:a+t)},nd=ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ed=function(t,r,a,n){return a===void 0&&(a=0),r===0?t:(t-=a,t=r*Math.round(t/r),n?(a+t)/r:a+t)},id=ed;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sd={Ceil:rd,Floor:nd,To:id};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vd=X,hd=new vd({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,a=this.n;t=t.toString();for(var n=0;n<t.length;n++)a+=t.charCodeAt(n),r=.02519603282416938*a,a=r>>>0,r-=a,r*=a,a=r>>>0,r-=a,a+=r*4294967296;return this.n=a,(a>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var a=t[r];this.s0-=this.hash(a),this.s0+=~~(this.s0<0),this.s1-=this.hash(a),this.s1+=~~(this.s1<0),this.s2-=this.hash(a),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,a=r;a>0;a--){var n=Math.floor(this.frac()*(a+1)),e=t[n];t[n]=t[a],t[a]=e}return t}}),ud=hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var od=function(t){for(var r=0,a=0;a<t.length;a++)r+=+t[a];return r/t.length},fd=od;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xd=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.ceil(t*n)/n},yd=xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cd=function(t,r){return Math.abs(t-r)},dd=cd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ld=function(){},ge=ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _t=Tr,Md=X,md=Ft,wd=ge,Ce=new md,la=new Md({initialize:function t(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=t.DefaultOrder),this._x=r,this._y=a,this._z=n,this._order=e,this.onChangeCallback=wd},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,a,n){return n===void 0&&(n=this._order),this._x=t,this._y=r,this._z=a,this._order=n,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,a){return r===void 0&&(r=this._order),a===void 0&&(a=!1),Ce.fromQuat(t),this.setFromRotationMatrix(Ce,r,a)},setFromRotationMatrix:function(t,r,a){r===void 0&&(r=this._order),a===void 0&&(a=!1);var n=t.val,e=n[0],i=n[4],s=n[8],v=n[1],h=n[5],u=n[9],o=n[2],f=n[6],x=n[10],y=0,c=0,d=0,l=.99999;switch(r){case"XYZ":{c=Math.asin(_t(s,-1,1)),Math.abs(s)<l?(y=Math.atan2(-u,x),d=Math.atan2(-i,e)):y=Math.atan2(f,h);break}case"YXZ":{y=Math.asin(-_t(u,-1,1)),Math.abs(u)<l?(c=Math.atan2(s,x),d=Math.atan2(v,h)):c=Math.atan2(-o,e);break}case"ZXY":{y=Math.asin(_t(f,-1,1)),Math.abs(f)<l?(c=Math.atan2(-o,x),d=Math.atan2(-i,h)):d=Math.atan2(v,e);break}case"ZYX":{c=Math.asin(-_t(o,-1,1)),Math.abs(o)<l?(y=Math.atan2(f,x),d=Math.atan2(v,e)):d=Math.atan2(-i,h);break}case"YZX":{d=Math.asin(_t(v,-1,1)),Math.abs(v)<l?(y=Math.atan2(-u,h),c=Math.atan2(-o,e)):c=Math.atan2(s,x);break}case"XZY":{d=Math.asin(-_t(i,-1,1)),Math.abs(i)<l?(y=Math.atan2(f,h),c=Math.atan2(s,e)):y=Math.atan2(-u,x);break}}return this._x=y,this._y=c,this._z=d,this._order=r,a&&this.onChangeCallback(this),this}});la.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"],la.DefaultOrder="XYZ";var $d=la;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _d=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.floor(t*n)/n},gd=_d;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cd=function(t,r){return t/r/1e3},zd=Cd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pd=function(t){return t==parseFloat(t)?!(t%2):void 0},bd=Pd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Td=function(t){return t===parseFloat(t)?!(t%2):void 0},Od=Td;/**
 * @author       Greg McLean <GregDevProjects>
 * @copyright    2021 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pd=function(t,r,a){return a===void 0&&(a=0),t.clone().lerp(r,a)},Id=pd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rd=function(t,r,a){return Math.min(t+r,a)},Gd=Rd;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ld=function(t){var r=t.length;if(r===0)return 0;t.sort(function(n,e){return n-e});var a=Math.floor(r/2);return r%2===0?(t[a]+t[a-1])/2:t[a]},Sd=Ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ed=function(t,r,a){return Math.max(t-r,a)},Fd=Ed;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ad=function(t,r,a,n){a===void 0&&(a=r+1);var e=(t-r)/(a-r);return e>1?n!==void 0?(e=(n-t)/(n-a),e<0&&(e=0)):e=1:e<0&&(e=0),e},Nd=Ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vd=U,Yd=function(t){return t*Vd.RAD_TO_DEG},Dd=Yd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI;return t.x=Math.cos(a)*r,t.y=Math.sin(a)*r,t},kd=Xd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI,n=Math.random()*2-1,e=Math.sqrt(1-n*n)*r;return t.x=Math.cos(a)*e,t.y=Math.sin(a)*e,t.z=n*r,t},Zd=qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bd=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},jd=Bd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ud=function(t,r){var a=t.x,n=t.y;return t.x=a*Math.cos(r)-n*Math.sin(r),t.y=a*Math.sin(r)+n*Math.cos(r),t},Wd=Ud;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qd=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x-r,v=t.y-a;return t.x=s*e-v*i+r,t.y=s*i+v*e+a,t},Hd=Qd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kd=function(t,r,a,n,e){var i=n+Math.atan2(t.y-a,t.x-r);return t.x=r+e*Math.cos(i),t.y=a+e*Math.sin(i),t},Jd=Kd;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tl=function(t,r,a,n,e){return t.x=r+e*Math.cos(n),t.y=a+e*Math.sin(n),t},rl=tl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var al=function(t){return t>0?Math.ceil(t):Math.floor(t)},nl=al;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var el=function(t,r,a){r===void 0&&(r=0),a===void 0&&(a=10);var n=Math.pow(a,-r);return Math.round(t*n)/n},il=el;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sl=function(t,r,a,n){r===void 0&&(r=1),a===void 0&&(a=1),n===void 0&&(n=1),n*=Math.PI/t;for(var e=[],i=[],s=0;s<t;s++)a-=r*n,r+=a*n,e[s]=a,i[s]=r;return{sin:i,cos:e,length:t}},vl=sl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var hl=xt,ul=function(t,r,a,n){n===void 0&&(n=new hl);var e=0,i=0,s=r*a;return t>0&&t<=s&&(t>r-1?(i=Math.floor(t/r),e=t-i*r):e=t),n.set(e,i)},ol=ul;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fl=xt,xl=function(t,r,a,n,e,i,s,v){v===void 0&&(v=new fl);var h=Math.sin(e),u=Math.cos(e),o=u*i,f=h*i,x=-h*s,y=u*s,c=1/(o*y+x*-f);return v.x=y*c*t+-x*c*r+(n*x-a*y)*c,v.y=o*c*r+-f*c*t+(-n*o+a*f)*c,v},yl=xl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cl=function(t,r,a){return Math.abs(t-r)<=a},dl=cl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ll=X,ze=new ll({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new ze(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,a=t.val;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this},fromMat4:function(t){var r=t.val,a=this.val;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[4],a[4]=r[5],a[5]=r[6],a[6]=r[8],a[7]=r[9],a[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=a,t[7]=n,this},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],o=u*i-s*h,f=-u*e+s*v,x=h*e-i*v,y=r*o+a*f+n*x;return y?(y=1/y,t[0]=o*y,t[1]=(-u*a+n*h)*y,t[2]=(s*a-n*i)*y,t[3]=f*y,t[4]=(u*r-n*v)*y,t[5]=(-s*r+n*e)*y,t[6]=x*y,t[7]=(-h*r+a*v)*y,t[8]=(i*r-a*e)*y,this):null},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8];return t[0]=i*u-s*h,t[1]=n*h-a*u,t[2]=a*s-n*i,t[3]=s*v-e*u,t[4]=r*u-n*v,t[5]=n*e-r*s,t[6]=e*h-i*v,t[7]=a*v-r*h,t[8]=r*i-a*e,this},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8];return r*(u*i-s*h)+a*(-u*e+s*v)+n*(h*e-i*v)},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=r[6],u=r[7],o=r[8],f=t.val,x=f[0],y=f[1],c=f[2],d=f[3],l=f[4],m=f[5],w=f[6],M=f[7],$=f[8];return r[0]=x*a+y*i+c*h,r[1]=x*n+y*s+c*u,r[2]=x*e+y*v+c*o,r[3]=d*a+l*i+m*h,r[4]=d*n+l*s+m*u,r[5]=d*e+l*v+m*o,r[6]=w*a+M*i+$*h,r[7]=w*n+M*s+$*u,r[8]=w*e+M*v+$*o,this},translate:function(t){var r=this.val,a=t.x,n=t.y;return r[6]=a*r[0]+n*r[3]+r[6],r[7]=a*r[1]+n*r[4]+r[7],r[8]=a*r[2]+n*r[5]+r[8],this},rotate:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=Math.sin(t),u=Math.cos(t);return r[0]=u*a+h*i,r[1]=u*n+h*s,r[2]=u*e+h*v,r[3]=u*i-h*a,r[4]=u*s-h*n,r[5]=u*v-h*e,this},scale:function(t){var r=this.val,a=t.x,n=t.y;return r[0]=a*r[0],r[1]=a*r[1],r[2]=a*r[2],r[3]=n*r[3],r[4]=n*r[4],r[5]=n*r[5],this},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,s=a+a,v=n+n,h=r*i,u=r*s,o=r*v,f=a*s,x=a*v,y=n*v,c=e*i,d=e*s,l=e*v,m=this.val;return m[0]=1-(f+y),m[3]=u+l,m[6]=o-d,m[1]=u-l,m[4]=1-(h+y),m[7]=x+c,m[2]=o+d,m[5]=x-c,m[8]=1-(h+f),this},normalFromMat4:function(t){var r=t.val,a=this.val,n=r[0],e=r[1],i=r[2],s=r[3],v=r[4],h=r[5],u=r[6],o=r[7],f=r[8],x=r[9],y=r[10],c=r[11],d=r[12],l=r[13],m=r[14],w=r[15],M=n*h-e*v,$=n*u-i*v,_=n*o-s*v,g=e*u-i*h,I=e*o-s*h,G=i*o-s*u,b=f*l-x*d,T=f*m-y*d,P=f*w-c*d,R=x*m-y*l,C=x*w-c*l,E=y*w-c*m,z=M*E-$*C+_*R+g*P-I*T+G*b;return z?(z=1/z,a[0]=(h*E-u*C+o*R)*z,a[1]=(u*P-v*E-o*T)*z,a[2]=(v*C-h*P+o*b)*z,a[3]=(i*C-e*E-s*R)*z,a[4]=(n*E-i*P+s*T)*z,a[5]=(e*P-n*C-s*b)*z,a[6]=(l*G-m*I+w*g)*z,a[7]=(m*_-d*G-w*$)*z,a[8]=(d*I-l*_+w*M)*z,this):null}}),Pe=ze;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ml=X,ml=Pe,wl=ge,Ma=tt,be=1e-6,Te=new Int8Array([1,2,0]),gt=new Float32Array([0,0,0]),$l=new Ma(1,0,0),_l=new Ma(0,1,0),st=new Ma,Oe=new ml,gl=new Ml({initialize:function(r,a,n,e){this.onChangeCallback=wl,this.set(r,a,n,e)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,a,n,e){return e===void 0&&(e=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=a||0,this._w=n||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=r*e,this._z=a*e,this._w=n*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.set(a+r*(t.x-a),n+r*(t.y-n),e+r*(t.z-e),i+r*(t.w-i))},rotationTo:function(t,r){var a=t.x*r.x+t.y*r.y+t.z*r.z;return a<-.999999?(st.copy($l).cross(t).length()<be&&st.copy(_l).cross(t),st.normalize(),this.setAxisAngle(st,Math.PI)):a>.999999?this.set(0,0,0,1):(st.copy(t).cross(r),this._x=st.x,this._y=st.y,this._z=st.z,this._w=1+a,this.normalize())},setAxes:function(t,r,a){var n=Oe.val;return n[0]=r.x,n[3]=r.y,n[6]=r.z,n[1]=a.x,n[4]=a.y,n[7]=a.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(Oe).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var a=Math.sin(r);return this.set(a*t.x,a*t.y,a*t.z,Math.cos(r))},multiply:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.x,s=t.y,v=t.z,h=t.w;return this.set(r*h+e*i+a*v-n*s,a*h+e*s+n*i-r*v,n*h+e*v+r*s-a*i,e*h-r*i-a*s-n*v)},slerp:function(t,r){var a=this.x,n=this.y,e=this.z,i=this.w,s=t.x,v=t.y,h=t.z,u=t.w,o=a*s+n*v+e*h+i*u;o<0&&(o=-o,s=-s,v=-v,h=-h,u=-u);var f=1-r,x=r;if(1-o>be){var y=Math.acos(o),c=Math.sin(y);f=Math.sin((1-r)*y)/c,x=Math.sin(r*y)/c}return this.set(f*a+x*s,f*n+x*v,f*e+x*h,f*i+x*u)},invert:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n,i=e?1/e:0;return this.set(-t*i,-r*i,-a*i,n*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+e*i,a*s+n*i,n*s-a*i,e*s-r*i)},rotateY:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s-n*i,a*s+e*i,n*s+r*i,e*s-a*i)},rotateZ:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+a*i,a*s-r*i,n*s+e*i,e*s-n*i)},calculateW:function(){var t=this.x,r=this.y,a=this.z;return this.w=-Math.sqrt(1-t*t-r*r-a*a),this},setFromEuler:function(t,r){var a=t.x/2,n=t.y/2,e=t.z/2,i=Math.cos(a),s=Math.cos(n),v=Math.cos(e),h=Math.sin(a),u=Math.sin(n),o=Math.sin(e);switch(t.order){case"XYZ":{this.set(h*s*v+i*u*o,i*u*v-h*s*o,i*s*o+h*u*v,i*s*v-h*u*o,r);break}case"YXZ":{this.set(h*s*v+i*u*o,i*u*v-h*s*o,i*s*o-h*u*v,i*s*v+h*u*o,r);break}case"ZXY":{this.set(h*s*v-i*u*o,i*u*v+h*s*o,i*s*o+h*u*v,i*s*v-h*u*o,r);break}case"ZYX":{this.set(h*s*v-i*u*o,i*u*v+h*s*o,i*s*o-h*u*v,i*s*v+h*u*o,r);break}case"YZX":{this.set(h*s*v+i*u*o,i*u*v+h*s*o,i*s*o-h*u*v,i*s*v-h*u*o,r);break}case"XZY":{this.set(h*s*v-i*u*o,i*u*v-h*s*o,i*s*o+h*u*v,i*s*v+h*u*o,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,a=r[0],n=r[4],e=r[8],i=r[1],s=r[5],v=r[9],h=r[2],u=r[6],o=r[10],f=a+s+o,x;return f>0?(x=.5/Math.sqrt(f+1),this.set((u-v)*x,(e-h)*x,(i-n)*x,.25/x)):a>s&&a>o?(x=2*Math.sqrt(1+a-s-o),this.set(.25*x,(n+i)/x,(e+h)/x,(u-v)/x)):s>o?(x=2*Math.sqrt(1+s-a-o),this.set((n+i)/x,.25*x,(v+u)/x,(e-h)/x)):(x=2*Math.sqrt(1+o-a-s),this.set((e+h)/x,(v+u)/x,.25*x,(i-n)/x)),this},fromMat3:function(t){var r=t.val,a=r[0]+r[4]+r[8],n;if(a>0)n=Math.sqrt(a+1),this.w=.5*n,n=.5/n,this._x=(r[7]-r[5])*n,this._y=(r[2]-r[6])*n,this._z=(r[3]-r[1])*n;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[e*3+e]&&(e=2);var i=Te[e],s=Te[i];n=Math.sqrt(r[e*3+e]-r[i*3+i]-r[s*3+s]+1),gt[e]=.5*n,n=.5/n,gt[i]=(r[i*3+e]+r[e*3+i])*n,gt[s]=(r[s*3+e]+r[e*3+s])*n,this._x=gt[0],this._y=gt[1],this._z=gt[2],this._w=(r[s*3+i]-r[i*3+s])*n}return this.onChangeCallback(this),this}}),pe=gl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cl=tt,zl=Ft,Pl=pe,Ie=new zl,Re=new Pl,bl=new Cl,Tl=function(t,r,a){return Re.setAxisAngle(r,a),Ie.fromRotationTranslation(Re,bl.set(0,0,0)),t.transformMat4(Ie)},Ol=Tl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pl=U,Il=Ia,ma={Angle:Uc,Distance:i2,Easing:s2,Fuzzy:d2,Interpolation:B2,Pow2:J2,Snap:sd,RandomDataGenerator:ud,Average:fd,Bernstein:Me,Between:he,CatmullRom:me,CeilTo:yd,Clamp:Tr,DegToRad:ve,Difference:dd,Euler:$d,Factorial:le,FloatBetween:xa,FloorTo:gd,FromPercent:pt,GetSpeed:zd,IsEven:bd,IsEvenStrict:Od,Linear:we,LinearXY:Id,MaxAdd:Gd,Median:Sd,MinSub:Fd,Percent:Nd,RadToDeg:Dd,RandomXY:kd,RandomXYZ:Zd,RandomXYZW:jd,Rotate:Wd,RotateAround:Hd,RotateAroundDistance:Jd,RotateTo:rl,RoundAwayFromZero:nl,RoundTo:il,SinCosTableGenerator:vl,SmootherStep:_e,SmoothStep:$e,ToXY:ol,TransformXY:yl,Within:dl,Wrap:or,Vector2:xt,Vector3:tt,Vector4:Er,Matrix3:Pe,Matrix4:Ft,Quaternion:pe,RotateVec3:Ol};ma=Il(!1,ma,pl);var Rl=ma,wa=Ta(Rl);function Gl(t,r){let a=new lc.Point(0,0),n=wa.Angle.BetweenPoints(a,new wa.Vector2(t,r));return wa.RadToDeg(n)}function Ll(t,r,a,n){return Math.sqrt((t-a)**2+(r-n)**2)}class $a{constructor(r,a=0){this.bounds={x:r.x||0,y:r.y||0,width:r.width,height:r.height},this.maxObjects=typeof r.maxObjects=="number"?r.maxObjects:10,this.maxLevels=typeof r.maxLevels=="number"?r.maxLevels:4,this.level=a,this.objects=[],this.nodes=[]}getIndex(r){return r.qtIndex(this.bounds)}split(){const r=this.level+1,a=this.bounds.width/2,n=this.bounds.height/2,e=this.bounds.x,i=this.bounds.y,s=[{x:e+a,y:i},{x:e,y:i},{x:e,y:i+n},{x:e+a,y:i+n}];for(let v=0;v<4;v++)this.nodes[v]=new $a({x:s[v].x,y:s[v].y,width:a,height:n,maxObjects:this.maxObjects,maxLevels:this.maxLevels},r)}insert(r){if(this.nodes.length){const a=this.getIndex(r);for(let n=0;n<a.length;n++)this.nodes[a[n]].insert(r);return}if(this.objects.push(r),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let a=0;a<this.objects.length;a++){const n=this.getIndex(this.objects[a]);for(let e=0;e<n.length;e++)this.nodes[n[e]].insert(this.objects[a])}this.objects=[]}}retrieve(r){const a=this.getIndex(r);let n=this.objects;if(this.nodes.length)for(let e=0;e<a.length;e++)n=n.concat(this.nodes[a[e]].retrieve(r));return this.level===0?Array.from(new Set(n)):n}remove(r,a=!1){const n=this.objects.indexOf(r);n>-1&&this.objects.splice(n,1);for(let e=0;e<this.nodes.length;e++)this.nodes[e].remove(r);return this.level===0&&!a&&this.join(),n!==-1}update(r,a=!1){this.remove(r,a),this.insert(r)}join(){let r=Array.from(this.objects);for(let n=0;n<this.nodes.length;n++){const e=this.nodes[n].join();r=r.concat(e)}const a=Array.from(new Set(r));if(a.length<=this.maxObjects){this.objects=a;for(let n=0;n<this.nodes.length;n++)this.nodes[n].objects=[];this.nodes=[]}return r}clear(){this.objects=[];for(let r=0;r<this.nodes.length;r++)this.nodes.length&&this.nodes[r].clear();this.nodes=[]}}class Ge{constructor(r){this.x=r.x,this.y=r.y,this.width=r.width,this.height=r.height,this.data=r.data}qtIndex(r){const a=[],n=r.x+r.width/2,e=r.y+r.height/2,i=this.y<e,s=this.x<n,v=this.x+this.width>n,h=this.y+this.height>e;return i&&v&&a.push(0),s&&i&&a.push(1),s&&h&&a.push(2),v&&h&&a.push(3),a}}function Le(t){switch(t){case"entity":return 1;case"position":return 2**1;case"velocity":return 2**2;case"health":return 2**3;case"controller":return 2**4;case"controlled":return 2**5;case"attack":return 2**6;default:return 0}}function Sl(t){let r=0;return t.forEach(a=>{r|=Le(a)}),r}function Se(t,r){let a=Sl(r),n=[],e=Atomics.load(t.idCounter,0);for(let i=0;i<=e;i++)(Atomics.load(t.components.entity.components,i)&a)===a&&Atomics.load(t.components.entity.dead,i)===0&&n.push(i);return n}function Ct(t,r,a){return(Atomics.load(t.entity.components,r)&Le(a))>0}function Ee(t,r){Atomics.store(t.components.entity.dead,r,1);let a=Atomics.add(t.recycledIndexes,0,1);Atomics.store(t.recycledIds,a+1,r)}function El(t){const r=t.components.position,a=t.components.velocity,n=t.components.controlled,e=t.components.controller;return()=>{let h=new $a({width:t.bounds.width*1e3,height:t.bounds.height*1e3});Se(t,["position","health"]).forEach(o=>{h.insert(new Ge({x:Atomics.load(r.x,o),y:Atomics.load(r.y,o),width:Atomics.load(r.width,o),height:Atomics.load(r.height,o),data:{eid:o}}))});let u=Se(t,["velocity"]);u.forEach(o=>{let f=h.retrieve(new Ge({x:r.x[o],y:r.y[o],width:r.width[o],height:r.height[o]})).map(d=>d.data.eid).filter(d=>d!==o),x=e.color[n.owner[o]],c=f.filter(d=>{if(Ct(t.components,d,"controlled")){let l=n.owner[d];return e.color[l]!==x}else return Ct(t.components,d,"controller")?e.color[d]!==x:!1}).filter(d=>Ll(r.x[d],r.y[d],r.x[o],r.y[o])<Math.max(r.width[o],r.width[d]));c.length&&(i(u,o,c[0]),a.x[o]=-a.x[o],a.y[o]=-a.y[o],r.angle[o]=Gl(a.x[o],a.y[o]))})};function i(h,u,o){if(!v(u)||!v(o))return;let f=1;Ct(t.components,o,"controller")&&(f=h.filter(y=>t.components.controlled.owner[y]===o).length),s(h,u,1),s(h,o,1);const x=t.components.controlled;if(t.components.entity.dead[o]){let y=x.owner[u];t.components.controller.money[y]+=f}if(t.components.entity.dead[u])if(Ct(t.components,o,"controlled")){let y=x.owner[o];t.components.controller.money[y]+=1}else Ct(t.components,o,"controller")&&(t.components.controller.money[o]+=1)}function s(h,u,o){const f=t.components.health;f.shields[u]-=o,f.timeSinceTakenDamage[u]=0,f.shields[u]<0&&(Ee(t,u),Ct(t.components,u,"controller")&&h.filter(y=>t.components.controlled.owner[y]===u).forEach(y=>{Ee(t,y)}))}function v(h){return Atomics.load(t.components.health.timeSinceTakenDamage,h)>=200*1e3}}Fe(El)})();
