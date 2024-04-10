import{a as tn}from"./generate-scene-oCWeBa7x.js";/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ae={CIRCLE:0,ELLIPSE:1,LINE:2,POINT:3,POLYGON:4,RECTANGLE:5,TRIANGLE:6},st=Ae;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ne=function(t){if(!t||typeof t!="object"||t.nodeType||t===t.window)return!1;try{if(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch{return!1}return!0},Ve=Ne;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Pa=Ve,rn=function(){var t,r,a,n,e,i,s=arguments[0]||{},v=1,h=arguments.length,u=!1;for(typeof s=="boolean"&&(u=s,s=arguments[1]||{},v=2),h===v&&(s=this,--v);v<h;v++)if((t=arguments[v])!=null)for(r in t)a=s[r],n=t[r],s!==n&&(u&&n&&(Pa(n)||(e=Array.isArray(n)))?(e?(e=!1,i=a&&Array.isArray(a)?a:[]):i=a&&Pa(a)?a:{},s[r]=rn(u,i,n)):n!==void 0&&(s[r]=n));return s},an=rn;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Ye(t){return!!t.get&&typeof t.get=="function"||!!t.set&&typeof t.set=="function"}function Xe(t,r,a){var n=a?t[r]:Object.getOwnPropertyDescriptor(t,r);return!a&&n.value&&typeof n.value=="object"&&(n=n.value),n&&Ye(n)?(typeof n.enumerable>"u"&&(n.enumerable=!0),typeof n.configurable>"u"&&(n.configurable=!0),n):!1}function De(t,r){var a=Object.getOwnPropertyDescriptor(t,r);return a?(a.value&&typeof a.value=="object"&&(a=a.value),a.configurable===!1):!1}function ea(t,r,a,n){for(var e in r)if(r.hasOwnProperty(e)){var i=Xe(r,e,a);if(i!==!1){var s=n||t;if(De(s.prototype,e)){if(Nt.ignoreFinals)continue;throw new Error("cannot override final property '"+e+"', set Class.ignoreFinals = true to skip")}Object.defineProperty(t.prototype,e,i)}else t.prototype[e]=r[e]}}function nn(t,r){if(r){Array.isArray(r)||(r=[r]);for(var a=0;a<r.length;a++)ea(t,r[a].prototype||r[a])}}function Nt(t){t||(t={});var r,a;if(t.initialize){if(typeof t.initialize!="function")throw new Error("initialize must be a function");r=t.initialize,delete t.initialize}else if(t.Extends){var n=t.Extends;r=function(){n.apply(this,arguments)}}else r=function(){};t.Extends?(r.prototype=Object.create(t.Extends.prototype),r.prototype.constructor=r,a=t.Extends,delete t.Extends):r.prototype.constructor=r;var e=null;return t.Mixins&&(e=t.Mixins,delete t.Mixins),nn(r,e),ea(r,t,!0,a),r}Nt.extend=ea;Nt.mixin=nn;Nt.ignoreFinals=!1;var D=Nt;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qe=function(t,r,a){if(t.radius>0&&r>=t.left&&r<=t.right&&a>=t.top&&a<=t.bottom){var n=(t.x-r)*(t.x-r),e=(t.y-a)*(t.y-a);return n+e<=t.radius*t.radius}else return!1},Vt=qe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ke=D,Ze=st,je=new ke({initialize:function(r,a){r===void 0&&(r=0),a===void 0&&(a=r),this.type=Ze.POINT,this.x=r,this.y=a},setTo:function(t,r){return t===void 0&&(t=0),r===void 0&&(r=t),this.x=t,this.y=r,this}}),I=je;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Be=I,Ue=function(t,r,a){return a===void 0&&(a=new Be),a.x=t.x+t.radius*Math.cos(r),a.y=t.y+t.radius*Math.sin(r),a},ia=Ue;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qe=function(t,r,a){return Math.max(r,Math.min(a,t))},sa=Qe;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var We=sa,He=function(t,r,a){return t=We(t,0,1),(a-r)*t+r},Yt=He;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ke={PI2:Math.PI*2,TAU:Math.PI*.5,EPSILON:1e-6,DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,RND:null,MIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER||-9007199254740991,MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER||9007199254740991},Q=Ke;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Je=ia,ti=Yt,ri=Q,ai=I,ni=function(t,r,a){a===void 0&&(a=new ai);var n=ti(r,0,ri.PI2);return Je(t,n,a)},en=ni;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ei=function(t){return 2*(Math.PI*t.radius)},sn=ei;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ii=sn,si=ia,vi=Yt,hi=Q,ui=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ii(t)/a);for(var e=0;e<r;e++){var i=vi(e/r,0,hi.PI2);n.push(si(t,i))}return n},vn=ui;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fi=I,oi=function(t,r){r===void 0&&(r=new fi);var a=2*Math.PI*Math.random(),n=Math.random()+Math.random(),e=n>1?2-n:n,i=e*Math.cos(a),s=e*Math.sin(a);return r.x=t.x+i*t.radius,r.y=t.y+s*t.radius,r},hn=oi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xi=D,yi=Vt,ci=en,di=vn,li=st,Mi=hn,wi=new xi({initialize:function(r,a,n){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.type=li.CIRCLE,this.x=r,this.y=a,this._radius=n,this._diameter=n*2},contains:function(t,r){return yi(this,t,r)},getPoint:function(t,r){return ci(this,t,r)},getPoints:function(t,r,a){return di(this,t,r,a)},getRandomPoint:function(t){return Mi(this,t)},setTo:function(t,r,a){return this.x=t,this.y=r,this._radius=a,this._diameter=a*2,this},setEmpty:function(){return this._radius=0,this._diameter=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},isEmpty:function(){return this._radius<=0},radius:{get:function(){return this._radius},set:function(t){this._radius=t,this._diameter=t*2}},diameter:{get:function(){return this._diameter},set:function(t){this._diameter=t,this._radius=t*.5}},left:{get:function(){return this.x-this._radius},set:function(t){this.x=t+this._radius}},right:{get:function(){return this.x+this._radius},set:function(t){this.x=t-this._radius}},top:{get:function(){return this.y-this._radius},set:function(t){this.y=t+this._radius}},bottom:{get:function(){return this.y+this._radius},set:function(t){this.y=t-this._radius}}}),va=wi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mi=function(t){return t.radius>0?Math.PI*t.radius*t.radius:0},$i=mi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _i=va,gi=function(t){return new _i(t.x,t.y,t.radius)},Ci=gi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zi=Vt,Pi=function(t,r){return zi(t,r.x,r.y)},bi=Pi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ut=Vt,Ti=function(t,r){return Ut(t,r.x,r.y)&&Ut(t,r.right,r.y)&&Ut(t,r.x,r.bottom)&&Ut(t,r.right,r.bottom)},Oi=Ti;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ii=function(t,r){return r.setTo(t.x,t.y,t.radius)},Ri=Ii;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pi=function(t,r){return t.x===r.x&&t.y===r.y&&t.radius===r.radius},Gi=pi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Li=function(t,r,a){return t.width<=0||t.height<=0?!1:t.x<=r&&t.x+t.width>=r&&t.y<=a&&t.y+t.height>=a},cr=Li;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Si=function(t){return 2*(t.width+t.height)},dr=Si;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fi=dr,Ei=I,Ai=function(t,r,a){if(a===void 0&&(a=new Ei),r<=0||r>=1)return a.x=t.x,a.y=t.y,a;var n=Fi(t)*r;return r>.5?(n-=t.width+t.height,n<=t.width?(a.x=t.right-n,a.y=t.bottom):(a.x=t.x,a.y=t.bottom-(n-t.width))):n<=t.width?(a.x=t.x+n,a.y=t.y):(a.x=t.right,a.y=t.y+(n-t.width)),a},ha=Ai;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ni=ha,Vi=dr,Yi=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Vi(t)/a);for(var e=0;e<r;e++){var i=e/r;n.push(Ni(t,i))}return n},un=Yi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xi=I,Di=function(t,r,a){return a===void 0&&(a=new Xi),a.x=t.x1+(t.x2-t.x1)*r,a.y=t.y1+(t.y2-t.y1)*r,a},fn=Di;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qi=function(t){return Math.sqrt((t.x2-t.x1)*(t.x2-t.x1)+(t.y2-t.y1)*(t.y2-t.y1))},vt=qi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ki=vt,Zi=I,ji=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=ki(t)/a);for(var e=t.x1,i=t.y1,s=t.x2,v=t.y2,h=0;h<r;h++){var u=h/r,f=e+(s-e)*u,o=i+(v-i)*u;n.push(new Zi(f,o))}return n},on=ji;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bi=I,Ui=function(t,r){r===void 0&&(r=new Bi);var a=Math.random();return r.x=t.x1+a*(t.x2-t.x1),r.y=t.y1+a*(t.y2-t.y1),r},xn=Ui;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qi=function(t,r,a){return a===void 0&&(a=1e-4),Math.abs(t-r)<a},yn=Qi;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wi=D,ba=yn,U=new Wi({initialize:function(r,a){this.x=0,this.y=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0):(a===void 0&&(a=r),this.x=r||0,this.y=a||0)},clone:function(){return new U(this.x,this.y)},copy:function(t){return this.x=t.x||0,this.y=t.y||0,this},setFromObject:function(t){return this.x=t.x||0,this.y=t.y||0,this},set:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setTo:function(t,r){return this.set(t,r)},setToPolar:function(t,r){return r==null&&(r=1),this.x=Math.cos(t)*r,this.y=Math.sin(t)*r,this},equals:function(t){return this.x===t.x&&this.y===t.y},fuzzyEquals:function(t,r){return ba(this.x,t.x,r)&&ba(this.y,t.y,r)},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},setAngle:function(t){return this.setToPolar(t,this.length())},add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},negate:function(){return this.x=-this.x,this.y=-this.y,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y;return Math.sqrt(r*r+a*a)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y;return r*r+a*a},length:function(){var t=this.x,r=this.y;return Math.sqrt(t*t+r*r)},setLength:function(t){return this.normalize().scale(t)},lengthSq:function(){var t=this.x,r=this.y;return t*t+r*r},normalize:function(){var t=this.x,r=this.y,a=t*t+r*r;return a>0&&(a=1/Math.sqrt(a),this.x=t*a,this.y=r*a),this},normalizeRightHand:function(){var t=this.x;return this.x=this.y*-1,this.y=t,this},normalizeLeftHand:function(){var t=this.x;return this.x=this.y,this.y=t*-1,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this},transformMat3:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[3]*a+n[6],this.y=n[1]*r+n[4]*a+n[7],this},transformMat4:function(t){var r=this.x,a=this.y,n=t.val;return this.x=n[0]*r+n[4]*a+n[12],this.y=n[1]*r+n[5]*a+n[13],this},reset:function(){return this.x=0,this.y=0,this},limit:function(t){var r=this.length();return r&&r>t&&this.scale(t/r),this},reflect:function(t){return t=t.clone().normalize(),this.subtract(t.scale(2*this.dot(t)))},mirror:function(t){return this.reflect(t).negate()},rotate:function(t){var r=Math.cos(t),a=Math.sin(t);return this.set(r*this.x-a*this.y,a*this.x+r*this.y)},project:function(t){var r=this.dot(t)/t.dot(t);return this.copy(t).scale(r)}});U.ZERO=new U;U.RIGHT=new U(1,0);U.LEFT=new U(-1,0);U.UP=new U(0,-1);U.DOWN=new U(0,1);U.ONE=new U(1,1);var Ct=U;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hi=D,Ki=fn,Ji=on,ts=st,rs=xn,Ta=Ct,as=new Hi({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=ts.LINE,this.x1=r,this.y1=a,this.x2=n,this.y2=e},getPoint:function(t,r){return Ki(this,t,r)},getPoints:function(t,r,a){return Ji(this,t,r,a)},getRandomPoint:function(t){return rs(this,t)},setTo:function(t,r,a,n){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this},setFromObjects:function(t,r){return this.x1=t.x,this.y1=t.y,this.x2=r.x,this.y2=r.y,this},getPointA:function(t){return t===void 0&&(t=new Ta),t.set(this.x1,this.y1),t},getPointB:function(t){return t===void 0&&(t=new Ta),t.set(this.x2,this.y2),t},left:{get:function(){return Math.min(this.x1,this.x2)},set:function(t){this.x1<=this.x2?this.x1=t:this.x2=t}},right:{get:function(){return Math.max(this.x1,this.x2)},set:function(t){this.x1>this.x2?this.x1=t:this.x2=t}},top:{get:function(){return Math.min(this.y1,this.y2)},set:function(t){this.y1<=this.y2?this.y1=t:this.y2=t}},bottom:{get:function(){return Math.max(this.y1,this.y2)},set:function(t){this.y1>this.y2?this.y1=t:this.y2=t}}}),ht=as;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ns=I,es=function(t,r){return r===void 0&&(r=new ns),r.x=t.x+Math.random()*t.width,r.y=t.y+Math.random()*t.height,r},cn=es;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var is=D,ss=cr,vs=ha,hs=un,us=st,Qt=ht,fs=cn,os=new is({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=us.RECTANGLE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return ss(this,t,r)},getPoint:function(t,r){return vs(this,t,r)},getPoints:function(t,r,a){return hs(this,t,r,a)},getRandomPoint:function(t){return fs(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.setTo(0,0,0,0)},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getLineA:function(t){return t===void 0&&(t=new Qt),t.setTo(this.x,this.y,this.right,this.y),t},getLineB:function(t){return t===void 0&&(t=new Qt),t.setTo(this.right,this.y,this.right,this.bottom),t},getLineC:function(t){return t===void 0&&(t=new Qt),t.setTo(this.right,this.bottom,this.x,this.bottom),t},getLineD:function(t){return t===void 0&&(t=new Qt),t.setTo(this.x,this.bottom,this.x,this.y),t},left:{get:function(){return this.x},set:function(t){t>=this.right?this.width=0:this.width=this.right-t,this.x=t}},right:{get:function(){return this.x+this.width},set:function(t){t<=this.x?this.width=0:this.width=t-this.x}},top:{get:function(){return this.y},set:function(t){t>=this.bottom?this.height=0:this.height=this.bottom-t,this.y=t}},bottom:{get:function(){return this.y+this.height},set:function(t){t<=this.y?this.height=0:this.height=t-this.y}},centerX:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},centerY:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),J=os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xs=J,ys=function(t,r){return r===void 0&&(r=new xs),r.x=t.left,r.y=t.top,r.width=t.diameter,r.height=t.diameter,r},cs=ys;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ds=function(t,r,a){return t.x+=r,t.y+=a,t},ls=ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ms=function(t,r){return t.x+=r.x,t.y+=r.y,t},ws=Ms;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z=va;Z.Area=$i;Z.Circumference=sn;Z.CircumferencePoint=ia;Z.Clone=Ci;Z.Contains=Vt;Z.ContainsPoint=bi;Z.ContainsRect=Oi;Z.CopyFrom=Ri;Z.Equals=Gi;Z.GetBounds=cs;Z.GetPoint=en;Z.GetPoints=vn;Z.Offset=ls;Z.OffsetPoint=ws;Z.Random=hn;var ms=Z;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $s=function(t,r,a){if(t.width<=0||t.height<=0)return!1;var n=(r-t.x)/t.width,e=(a-t.y)/t.height;return n*=n,e*=e,n+e<.25},lr=$s;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _s=I,gs=function(t,r,a){a===void 0&&(a=new _s);var n=t.width/2,e=t.height/2;return a.x=t.x+n*Math.cos(r),a.y=t.y+e*Math.sin(r),a},ua=gs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cs=ua,zs=Yt,Ps=Q,bs=I,Ts=function(t,r,a){a===void 0&&(a=new bs);var n=zs(r,0,Ps.PI2);return Cs(t,n,a)},dn=Ts;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Os=function(t){var r=t.width/2,a=t.height/2,n=Math.pow(r-a,2)/Math.pow(r+a,2);return Math.PI*(r+a)*(1+3*n/(10+Math.sqrt(4-3*n)))},ln=Os;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Is=ln,Rs=ua,ps=Yt,Gs=Q,Ls=function(t,r,a,n){n===void 0&&(n=[]),!r&&a>0&&(r=Is(t)/a);for(var e=0;e<r;e++){var i=ps(e/r,0,Gs.PI2);n.push(Rs(t,i))}return n},Mn=Ls;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ss=I,Fs=function(t,r){r===void 0&&(r=new Ss);var a=Math.random()*Math.PI*2,n=Math.sqrt(Math.random());return r.x=t.x+n*Math.cos(a)*t.width/2,r.y=t.y+n*Math.sin(a)*t.height/2,r},wn=Fs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Es=D,As=lr,Ns=dn,Vs=Mn,Ys=st,Xs=wn,Ds=new Es({initialize:function(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),this.type=Ys.ELLIPSE,this.x=r,this.y=a,this.width=n,this.height=e},contains:function(t,r){return As(this,t,r)},getPoint:function(t,r){return Ns(this,t,r)},getPoints:function(t,r,a){return Vs(this,t,r,a)},getRandomPoint:function(t){return Xs(this,t)},setTo:function(t,r,a,n){return this.x=t,this.y=r,this.width=a,this.height=n,this},setEmpty:function(){return this.width=0,this.height=0,this},setPosition:function(t,r){return r===void 0&&(r=t),this.x=t,this.y=r,this},setSize:function(t,r){return r===void 0&&(r=t),this.width=t,this.height=r,this},isEmpty:function(){return this.width<=0||this.height<=0},getMinorRadius:function(){return Math.min(this.width,this.height)/2},getMajorRadius:function(){return Math.max(this.width,this.height)/2},left:{get:function(){return this.x-this.width/2},set:function(t){this.x=t+this.width/2}},right:{get:function(){return this.x+this.width/2},set:function(t){this.x=t-this.width/2}},top:{get:function(){return this.y-this.height/2},set:function(t){this.y=t+this.height/2}},bottom:{get:function(){return this.y+this.height/2},set:function(t){this.y=t-this.height/2}}}),mn=Ds;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qs=function(t){return t.isEmpty()?0:t.getMajorRadius()*t.getMinorRadius()*Math.PI},ks=qs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zs=mn,js=function(t){return new Zs(t.x,t.y,t.width,t.height)},Bs=js;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Us=lr,Qs=function(t,r){return Us(t,r.x,r.y)},Ws=Qs;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wt=lr,Hs=function(t,r){return Wt(t,r.x,r.y)&&Wt(t,r.right,r.y)&&Wt(t,r.x,r.bottom)&&Wt(t,r.right,r.bottom)},Ks=Hs;/**
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
 */var nv=J,ev=function(t,r){return r===void 0&&(r=new nv),r.x=t.left,r.y=t.top,r.width=t.width,r.height=t.height,r},iv=ev;/**
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
 */var j=mn;j.Area=ks;j.Circumference=ln;j.CircumferencePoint=ua;j.Clone=Bs;j.Contains=lr;j.ContainsPoint=Ws;j.ContainsRect=Ks;j.CopyFrom=tv;j.Equals=av;j.GetBounds=iv;j.GetPoint=dn;j.GetPoints=Mn;j.Offset=vv;j.OffsetPoint=uv;j.Random=wn;var fv=j;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ov=function(t,r,a,n){var e=t-a,i=r-n;return Math.sqrt(e*e+i*i)},$n=ov;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xv=$n,yv=function(t,r){return xv(t.x,t.y,r.x,r.y)<=t.radius+r.radius},_n=yv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cv=function(t,r){var a=r.width/2,n=r.height/2,e=Math.abs(t.x-r.x-a),i=Math.abs(t.y-r.y-n),s=a+t.radius,v=n+t.radius;if(e>s||i>v)return!1;if(e<=a||i<=n)return!0;var h=e-a,u=i-n,f=h*h,o=u*u,x=t.radius*t.radius;return f+o<=x},gn=cv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dt=I,dv=_n,lv=function(t,r,a){if(a===void 0&&(a=[]),dv(t,r)){var n=t.x,e=t.y,i=t.radius,s=r.x,v=r.y,h=r.radius,u,f,o,x,y;if(e===v)y=(h*h-i*i-s*s+n*n)/(2*(n-s)),u=1,f=-2*v,o=s*s+y*y-2*s*y+v*v-h*h,x=f*f-4*u*o,x===0?a.push(new dt(y,-f/(2*u))):x>0&&(a.push(new dt(y,(-f+Math.sqrt(x))/(2*u))),a.push(new dt(y,(-f-Math.sqrt(x))/(2*u))));else{var c=(n-s)/(e-v),d=(h*h-i*i-s*s+n*n-v*v+e*e)/(2*(e-v));u=c*c+1,f=2*e*c-2*d*c-2*n,o=n*n+e*e+d*d-i*i-2*e*d,x=f*f-4*u*o,x===0?(y=-f/(2*u),a.push(new dt(y,d-y*c))):x>0&&(y=(-f+Math.sqrt(x))/(2*u),a.push(new dt(y,d-y*c)),y=(-f-Math.sqrt(x))/(2*u),a.push(new dt(y,d-y*c)))}}return a},Mv=lv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rr=Vt,wv=I,mv=new wv,$v=function(t,r,a){if(a===void 0&&(a=mv),Rr(r,t.x1,t.y1))return a.x=t.x1,a.y=t.y1,!0;if(Rr(r,t.x2,t.y2))return a.x=t.x2,a.y=t.y2,!0;var n=t.x2-t.x1,e=t.y2-t.y1,i=r.x-t.x1,s=r.y-t.y1,v=n*n+e*e,h=n,u=e;if(v>0){var f=(i*n+s*e)/v;h*=f,u*=f}a.x=t.x1+h,a.y=t.y1+u;var o=h*h+u*u;return o<=v&&h*n+u*e>=0&&Rr(r,a.x,a.y)},fa=$v;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pr=I,_v=fa,gv=function(t,r,a){if(a===void 0&&(a=[]),_v(t,r)){var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=r.x,h=r.y,u=r.radius,f=i-n,o=s-e,x=n-v,y=e-h,c=f*f+o*o,d=2*(f*x+o*y),l=x*x+y*y-u*u,w=d*d-4*c*l,m,M;if(w===0){var $=-d/(2*c);m=n+$*f,M=e+$*o,$>=0&&$<=1&&a.push(new pr(m,M))}else if(w>0){var _=(-d-Math.sqrt(w))/(2*c);m=n+_*f,M=e+_*o,_>=0&&_<=1&&a.push(new pr(m,M));var g=(-d+Math.sqrt(w))/(2*c);m=n+g*f,M=e+g*o,g>=0&&g<=1&&a.push(new pr(m,M))}}return a},oa=gv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ht=oa,Cv=gn,zv=function(t,r,a){if(a===void 0&&(a=[]),Cv(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),s=r.getLineD();Ht(n,t,a),Ht(e,t,a),Ht(i,t,a),Ht(s,t,a)}return a},Pv=zv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bv=D,X=new bv({initialize:function(r,a,n){this.x=0,this.y=0,this.z=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0):(this.x=r||0,this.y=a||0,this.z=n||0)},up:function(){return this.x=0,this.y=1,this.z=0,this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clone:function(){return new X(this.x,this.y,this.z)},addVectors:function(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this},crossVectors:function(t,r){var a=t.x,n=t.y,e=t.z,i=r.x,s=r.y,v=r.z;return this.x=n*v-e*s,this.y=e*i-a*v,this.z=a*s-n*i,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this},set:function(t,r,a){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0):(this.x=t||0,this.y=r||0,this.z=a||0),this},setFromMatrixPosition:function(t){return this.fromArray(t.val,12)},setFromMatrixColumn:function(t,r){return this.fromArray(t.val,r*4)},fromArray:function(t,r){return r===void 0&&(r=0),this.x=t[r],this.y=t[r+1],this.z=t[r+2],this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addScale:function(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this},scale:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return Math.sqrt(r*r+a*a+n*n)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0;return r*r+a*a+n*n},length:function(){var t=this.x,r=this.y,a=this.z;return Math.sqrt(t*t+r*r+a*a)},lengthSq:function(){var t=this.x,r=this.y,a=this.z;return t*t+r*r+a*a},normalize:function(){var t=this.x,r=this.y,a=this.z,n=t*t+r*r+a*a;return n>0&&(n=1/Math.sqrt(n),this.x=t*n,this.y=r*n,this.z=a*n),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z;return this.x=a*s-n*i,this.y=n*e-r*s,this.z=r*i-a*e,this},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this},applyMatrix3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[3]*a+e[6]*n,this.y=e[1]*r+e[4]*a+e[7]*n,this.z=e[2]*r+e[5]*a+e[8]*n,this},applyMatrix4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=1/(e[3]*r+e[7]*a+e[11]*n+e[15]);return this.x=(e[0]*r+e[4]*a+e[8]*n+e[12])*i,this.y=(e[1]*r+e[5]*a+e[9]*n+e[13])*i,this.z=(e[2]*r+e[6]*a+e[10]*n+e[14])*i,this},transformMat3:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=r*e[0]+a*e[3]+n*e[6],this.y=r*e[1]+a*e[4]+n*e[7],this.z=r*e[2]+a*e[5]+n*e[8],this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=t.val;return this.x=e[0]*r+e[4]*a+e[8]*n+e[12],this.y=e[1]*r+e[5]*a+e[9]*n+e[13],this.z=e[2]*r+e[6]*a+e[10]*n+e[14],this},transformCoordinates:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=r*e[0]+a*e[4]+n*e[8]+e[12],s=r*e[1]+a*e[5]+n*e[9]+e[13],v=r*e[2]+a*e[6]+n*e[10]+e[14],h=r*e[3]+a*e[7]+n*e[11]+e[15];return this.x=i/h,this.y=s/h,this.z=v/h,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z,v=t.w,h=v*r+i*n-s*a,u=v*a+s*r-e*n,f=v*n+e*a-i*r,o=-e*r-i*a-s*n;return this.x=h*v+o*-e+u*-s-f*-i,this.y=u*v+o*-i+f*-e-h*-s,this.z=f*v+o*-s+h*-i-u*-e,this},project:function(t){var r=this.x,a=this.y,n=this.z,e=t.val,i=e[0],s=e[1],v=e[2],h=e[3],u=e[4],f=e[5],o=e[6],x=e[7],y=e[8],c=e[9],d=e[10],l=e[11],w=e[12],m=e[13],M=e[14],$=e[15],_=1/(r*h+a*x+n*l+$);return this.x=(r*i+a*u+n*y+w)*_,this.y=(r*s+a*f+n*c+m)*_,this.z=(r*v+a*o+n*d+M)*_,this},projectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unprojectViewMatrix:function(t,r){return this.applyMatrix4(t).applyMatrix4(r)},unproject:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,s=this.x-a,v=i-this.y-1-n,h=this.z;return this.x=2*s/e-1,this.y=2*v/i-1,this.z=2*h-1,this.project(r)},reset:function(){return this.x=0,this.y=0,this.z=0,this}});X.ZERO=new X;X.RIGHT=new X(1,0,0);X.LEFT=new X(-1,0,0);X.UP=new X(0,-1,0);X.DOWN=new X(0,1,0);X.FORWARD=new X(0,0,1);X.BACK=new X(0,0,-1);X.ONE=new X(1,1,1);var tt=X;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Tv=tt,Ov=function(t,r,a,n){a===void 0&&(a=!1);var e=t.x1,i=t.y1,s=t.x2,v=t.y2,h=r.x1,u=r.y1,f=r.x2,o=r.y2,x=s-e,y=v-i,c=f-h,d=o-u,l=x*d-y*c;if(l===0)return null;var w,m,M;if(a){if(w=(x*(u-i)+y*(e-h))/(c*y-d*x),m=(h+c*w-e)/x,m<0||w<0||w>1)return null;M=m}else{if(w=((h-e)*d-(u-i)*c)/l,m=((i-u)*x-(e-h)*y)/l,w<0||w>1||m<0||m>1)return null;M=w}return n===void 0&&(n=new Tv),n.set(e+x*M,i+y*M,M)},Cn=Ov;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Iv=Cn,Rv=ht,zn=tt,Oa=new Rv,Kt=new zn,pv=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=new zn);var e=!1;n.set(),Kt.set();for(var i=r[r.length-1],s=0;s<r.length;s++){var v=r[s];Oa.setTo(i.x,i.y,v.x,v.y),i=v,Iv(t,Oa,a,Kt)&&(!e||Kt.z<n.z)&&(n.copy(Kt),e=!0)}return e?n:null},Pn=pv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gv=D,k=new Gv({initialize:function(r,a,n,e){this.x=0,this.y=0,this.z=0,this.w=0,typeof r=="object"?(this.x=r.x||0,this.y=r.y||0,this.z=r.z||0,this.w=r.w||0):(this.x=r||0,this.y=a||0,this.z=n||0,this.w=e||0)},clone:function(){return new k(this.x,this.y,this.z,this.w)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z||0,this.w=t.w||0,this},equals:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w},set:function(t,r,a,n){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0,this.z=t.z||0,this.w=t.w||0):(this.x=t||0,this.y=r||0,this.z=a||0,this.w=n||0),this},add:function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z||0,this.w+=t.w||0,this},subtract:function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z||0,this.w-=t.w||0,this},scale:function(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this.x=t*e,this.y=r*e,this.z=a*e,this.w=n*e),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.x=a+r*(t.x-a),this.y=n+r*(t.y-n),this.z=e+r*(t.z-e),this.w=i+r*(t.w-i),this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z||1,this.w*=t.w||1,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z||1,this.w/=t.w||1,this},distance:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return Math.sqrt(r*r+a*a+n*n+e*e)},distanceSq:function(t){var r=t.x-this.x,a=t.y-this.y,n=t.z-this.z||0,e=t.w-this.w||0;return r*r+a*a+n*n+e*e},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},transformMat4:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.val;return this.x=i[0]*r+i[4]*a+i[8]*n+i[12]*e,this.y=i[1]*r+i[5]*a+i[9]*n+i[13]*e,this.z=i[2]*r+i[6]*a+i[10]*n+i[14]*e,this.w=i[3]*r+i[7]*a+i[11]*n+i[15]*e,this},transformQuat:function(t){var r=this.x,a=this.y,n=this.z,e=t.x,i=t.y,s=t.z,v=t.w,h=v*r+i*n-s*a,u=v*a+s*r-e*n,f=v*n+e*a-i*r,o=-e*r-i*a-s*n;return this.x=h*v+o*-e+u*-s-f*-i,this.y=u*v+o*-i+f*-e-h*-s,this.z=f*v+o*-s+h*-i-u*-e,this},reset:function(){return this.x=0,this.y=0,this.z=0,this.w=0,this}});k.prototype.sub=k.prototype.subtract;k.prototype.mul=k.prototype.multiply;k.prototype.div=k.prototype.divide;k.prototype.dist=k.prototype.distance;k.prototype.distSq=k.prototype.distanceSq;k.prototype.len=k.prototype.length;k.prototype.lenSq=k.prototype.lengthSq;var xa=k;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lv=tt,Sv=xa,Fv=Pn,lt=new Lv,Ev=function(t,r,a,n){n===void 0&&(n=new Sv),Array.isArray(r)||(r=[r]);var e=!1;n.set(),lt.set();for(var i=0;i<r.length;i++)Fv(t,r[i].points,a,lt)&&(!e||lt.z<n.z)&&(n.set(lt.x,lt.y,lt.z,i),e=!0);return e?n:null},bn=Ev;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Av=function(t,r,a){var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=r.x1,h=r.y1,u=r.x2,f=r.y2;if(n===i&&e===s||v===u&&h===f)return!1;var o=(f-h)*(i-n)-(u-v)*(s-e);if(o===0)return!1;var x=((u-v)*(e-h)-(f-h)*(n-v))/o,y=((i-n)*(e-h)-(s-e)*(n-v))/o;return x<0||x>1||y<0||y>1?!1:(a&&(a.x=n+x*(i-n),a.y=e+x*(s-e)),!0)},zt=Av;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nv=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=r.x,v=r.y,h=r.right,u=r.bottom,f=0;if(a>=s&&a<=h&&n>=v&&n<=u||e>=s&&e<=h&&i>=v&&i<=u)return!0;if(a<s&&e>=s){if(f=n+(i-n)*(s-a)/(e-a),f>v&&f<=u)return!0}else if(a>h&&e<=h&&(f=n+(i-n)*(h-a)/(e-a),f>=v&&f<=u))return!0;if(n<v&&i>=v){if(f=a+(e-a)*(v-n)/(i-n),f>=s&&f<=h)return!0}else if(n>u&&i<=u&&(f=a+(e-a)*(u-n)/(i-n),f>=s&&f<=h))return!0;return!1},Tn=Nv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jt=I,tr=zt,Vv=Tn,Yv=function(t,r,a){if(a===void 0&&(a=[]),Vv(t,r))for(var n=r.getLineA(),e=r.getLineB(),i=r.getLineC(),s=r.getLineD(),v=[new Jt,new Jt,new Jt,new Jt],h=[tr(n,t,v[0]),tr(e,t,v[1]),tr(i,t,v[2]),tr(s,t,v[3])],u=0;u<4;u++)h[u]&&a.push(v[u]);return a},ya=Yv;/**
 * @author       Richard Davey
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xv=xa,Dv=bn,qv=ht,Ia=new qv;function Gr(t,r,a,n,e){var i=Math.cos(t),s=Math.sin(t);Ia.setTo(r,a,r+i,a+s);var v=Dv(Ia,n,!0);v&&e.push(new Xv(v.x,v.y,t,v.w))}function kv(t,r){return t.z-r.z}var Zv=function(t,r,a){Array.isArray(a)||(a=[a]);for(var n=[],e=[],i=0;i<a.length;i++)for(var s=a[i].points,v=0;v<s.length;v++){var h=Math.atan2(s[v].y-r,s[v].x-t);e.indexOf(h)===-1&&(Gr(h,t,r,a,n),Gr(h-1e-5,t,r,a,n),Gr(h+1e-5,t,r,a,n),e.push(h))}return n.sort(kv)},jv=Zv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bv=function(t,r){return t.width<=0||t.height<=0||r.width<=0||r.height<=0?!1:!(t.right<r.x||t.bottom<r.y||t.x>r.right||t.y>r.bottom)},Mr=Bv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uv=J,Qv=Mr,Wv=function(t,r,a){return a===void 0&&(a=new Uv),Qv(t,r)&&(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y),a},Hv=Wv;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rr=ya,Kv=Mr,Jv=function(t,r,a){if(a===void 0&&(a=[]),Kv(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),s=t.getLineD();rr(n,r,a),rr(e,r,a),rr(i,r,a),rr(s,r,a)}return a},th=Jv;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rh=function(t,r,a,n){a===void 0&&(a=!1),n===void 0&&(n=[]);for(var e=t.x3-t.x1,i=t.y3-t.y1,s=t.x2-t.x1,v=t.y2-t.y1,h=e*e+i*i,u=e*s+i*v,f=s*s+v*v,o=h*f-u*u,x=o===0?0:1/o,y,c,d,l,w,m,M=t.x1,$=t.y1,_=0;_<r.length&&(d=r[_].x-M,l=r[_].y-$,w=e*d+i*l,m=s*d+v*l,y=(f*w-u*m)*x,c=(h*m-u*w)*x,!(y>=0&&c>=0&&y+c<1&&(n.push({x:r[_].x,y:r[_].y}),a)));_++);return n},ca=rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ah=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x,y:t.y}),r.push({x:t.right,y:t.y}),r.push({x:t.right,y:t.bottom}),r.push({x:t.x,y:t.bottom}),r},On=ah;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var K=zt,Mt=cr,nh=ca,eh=On,ih=function(t,r){if(r.left>t.right||r.right<t.left||r.top>t.bottom||r.bottom<t.top)return!1;var a=r.getLineA(),n=r.getLineB(),e=r.getLineC();if(Mt(t,a.x1,a.y1)||Mt(t,a.x2,a.y2)||Mt(t,n.x1,n.y1)||Mt(t,n.x2,n.y2)||Mt(t,e.x1,e.y1)||Mt(t,e.x2,e.y2))return!0;var i=t.getLineA(),s=t.getLineB(),v=t.getLineC(),h=t.getLineD();if(K(a,i)||K(a,s)||K(a,v)||K(a,h)||K(n,i)||K(n,s)||K(n,v)||K(n,h)||K(e,i)||K(e,s)||K(e,v)||K(e,h))return!0;var u=eh(t),f=nh(r,u,!0);return f.length>0},In=ih;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sh=In,Lr=ya,vh=function(t,r,a){if(a===void 0&&(a=[]),sh(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Lr(n,t,a),Lr(e,t,a),Lr(i,t,a)}return a},hh=vh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uh=function(t,r,a){var n=t.x3-t.x1,e=t.y3-t.y1,i=t.x2-t.x1,s=t.y2-t.y1,v=r-t.x1,h=a-t.y1,u=n*n+e*e,f=n*i+e*s,o=n*v+e*h,x=i*i+s*s,y=i*v+s*h,c=u*x-f*f,d=c===0?0:1/c,l=(x*o-f*y)*d,w=(u*y-f*o)*d;return l>=0&&w>=0&&l+w<1},wr=uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sr=fa,fh=wr,oh=function(t,r){return t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top?!1:!!(fh(t,r.x,r.y)||Sr(t.getLineA(),r)||Sr(t.getLineB(),r)||Sr(t.getLineC(),r))},Rn=oh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fr=oa,xh=Rn,yh=function(t,r,a){if(a===void 0&&(a=[]),xh(t,r)){var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();Fr(n,r,a),Fr(e,r,a),Fr(i,r,a)}return a},ch=yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Er=zt,dh=function(t,r){return!!(t.contains(r.x1,r.y1)||t.contains(r.x2,r.y2)||Er(t.getLineA(),r)||Er(t.getLineB(),r)||Er(t.getLineC(),r))},pn=dh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ar=I,lh=pn,Nr=zt,Mh=function(t,r,a){if(a===void 0&&(a=[]),lh(t,r))for(var n=t.getLineA(),e=t.getLineB(),i=t.getLineC(),s=[new Ar,new Ar,new Ar],v=[Nr(n,r,s[0]),Nr(e,r,s[1]),Nr(i,r,s[2])],h=0;h<3;h++)v[h]&&a.push(s[h]);return a},Gn=Mh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wh=function(t,r){return r===void 0&&(r=[]),r.push({x:t.x1,y:t.y1}),r.push({x:t.x2,y:t.y2}),r.push({x:t.x3,y:t.y3}),r},Ln=wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ra=ca,pa=Ln,rt=zt,mh=function(t,r){if(t.left>r.right||t.right<r.left||t.top>r.bottom||t.bottom<r.top)return!1;var a=t.getLineA(),n=t.getLineB(),e=t.getLineC(),i=r.getLineA(),s=r.getLineB(),v=r.getLineC();if(rt(a,i)||rt(a,s)||rt(a,v)||rt(n,i)||rt(n,s)||rt(n,v)||rt(e,i)||rt(e,s)||rt(e,v))return!0;var h=pa(t),u=Ra(r,h,!0);return u.length>0||(h=pa(r),u=Ra(t,h,!0),u.length>0)},Sn=mh;/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $h=Sn,Vr=Gn,_h=function(t,r,a){if(a===void 0&&(a=[]),$h(t,r)){var n=r.getLineA(),e=r.getLineB(),i=r.getLineC();Vr(t,n,a),Vr(t,e,a),Vr(t,i,a)}return a},gh=_h;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ch=function(t,r,a){a===void 0&&(a=1);var n=r.x1,e=r.y1,i=r.x2,s=r.y2,v=t.x,h=t.y,u=(i-n)*(i-n)+(s-e)*(s-e);if(u===0)return!1;var f=((v-n)*(i-n)+(h-e)*(s-e))/u;if(f<0)return Math.sqrt((n-v)*(n-v)+(e-h)*(e-h))<=a;if(f>=0&&f<=1){var o=((e-h)*(i-n)-(n-v)*(s-e))/u;return Math.abs(o)*Math.sqrt(u)<=a}else return Math.sqrt((i-v)*(i-v)+(s-h)*(s-h))<=a},Fn=Ch;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zh=Fn,Ph=function(t,r){if(!zh(t,r))return!1;var a=Math.min(r.x1,r.x2),n=Math.max(r.x1,r.x2),e=Math.min(r.y1,r.y2),i=Math.max(r.y1,r.y2);return t.x>=a&&t.x<=n&&t.y>=e&&t.y<=i},bh=Ph;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Th=function(t,r,a,n,e,i){return i===void 0&&(i=0),!(r>t.right+i||a<t.left-i||n>t.bottom+i||e<t.top-i)},Oh=Th;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ih={CircleToCircle:_n,CircleToRectangle:gn,GetCircleToCircle:Mv,GetCircleToRectangle:Pv,GetLineToCircle:oa,GetLineToLine:Cn,GetLineToPoints:Pn,GetLineToPolygon:bn,GetLineToRectangle:ya,GetRaysFromPointToPolygon:jv,GetRectangleIntersection:Hv,GetRectangleToRectangle:th,GetRectangleToTriangle:hh,GetTriangleToCircle:ch,GetTriangleToLine:Gn,GetTriangleToTriangle:gh,LineToCircle:fa,LineToLine:zt,LineToRectangle:Tn,PointToLine:Fn,PointToLineSegment:bh,RectangleToRectangle:Mr,RectangleToTriangle:In,RectangleToValues:Oh,TriangleToCircle:Rn,TriangleToLine:pn,TriangleToTriangle:Sn};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rh=function(t){return Math.atan2(t.y2-t.y1,t.x2-t.x1)},Pt=Rh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ph=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=[]);var n=Math.round(t.x1),e=Math.round(t.y1),i=Math.round(t.x2),s=Math.round(t.y2),v=Math.abs(i-n),h=Math.abs(s-e),u=n<i?1:-1,f=e<s?1:-1,o=v-h;a.push({x:n,y:e});for(var x=1;!(n===i&&e===s);){var y=o<<1;y>-h&&(o-=h,n+=u),y<v&&(o+=v,e+=f),x%r===0&&a.push({x:n,y:e}),x++}return a},Gh=ph;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lh=function(t,r,a){var n=r-(t.x1+t.x2)/2,e=a-(t.y1+t.y2)/2;return t.x1+=n,t.y1+=e,t.x2+=n,t.y2+=e,t},Sh=Lh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fh=ht,Eh=function(t){return new Fh(t.x1,t.y1,t.x2,t.y2)},Ah=Eh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nh=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2)},Vh=Nh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yh=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2},Xh=Yh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dh=vt,qh=function(t,r,a){a===void 0&&(a=r);var n=Dh(t),e=t.x2-t.x1,i=t.y2-t.y1;return r&&(t.x1=t.x1-e/n*r,t.y1=t.y1-i/n*r),a&&(t.x2=t.x2+e/n*a,t.y2=t.y2+i/n*a),t},kh=qh;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zh=function(t,r){var a=t.x-r.x,n=t.y-r.y;return Math.sqrt(a*a+n*n)},En=Zh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jh=function(t,r){return r===void 0&&(r=1.70158),t*t*((r+1)*t-r)},Bh=jh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uh=function(t,r){return r===void 0&&(r=1.70158),--t*t*((r+1)*t+r)+1},Qh=Uh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wh=function(t,r){r===void 0&&(r=1.70158);var a=r*1.525;return(t*=2)<1?.5*(t*t*((a+1)*t-a)):.5*((t-=2)*t*((a+1)*t+a)+2)},Hh=Wh;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var An={In:Bh,Out:Qh,InOut:Hh};/**
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
 */var Nn={In:Jh,Out:ru,InOut:nu};/**
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
 */var Vn={In:iu,Out:vu,InOut:uu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fu=function(t){return t*t*t},ou=fu;/**
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
 */var Yn={In:ou,Out:yu,InOut:du};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a))},Mu=lu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wu=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*t)*Math.sin((t-n)*(2*Math.PI)/a)+1},mu=wu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $u=function(t,r,a){if(r===void 0&&(r=.1),a===void 0&&(a=.1),t===0)return 0;if(t===1)return 1;var n=a/4;return r<1?r=1:n=a*Math.asin(1/r)/(2*Math.PI),(t*=2)<1?-.5*(r*Math.pow(2,10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)):r*Math.pow(2,-10*(t-=1))*Math.sin((t-n)*(2*Math.PI)/a)*.5+1},_u=$u;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xn={In:Mu,Out:mu,InOut:_u};/**
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
 */var Dn={In:Cu,Out:Pu,InOut:Tu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ou=function(t){return t},Iu=Ou;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qn=Iu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ru=function(t){return t*t},pu=Ru;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gu=function(t){return t*(2-t)},Lu=Gu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Su=function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},Fu=Su;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kn={In:pu,Out:Lu,InOut:Fu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Eu=function(t){return t*t*t*t},Au=Eu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nu=function(t){return 1- --t*t*t*t},Vu=Nu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yu=function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},Xu=Yu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zn={In:Au,Out:Vu,InOut:Xu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Du=function(t){return t*t*t*t*t},qu=Du;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ku=function(t){return--t*t*t*t*t+1},Zu=ku;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ju=function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},Bu=ju;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jn={In:qu,Out:Zu,InOut:Bu};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Uu=function(t){return t===0?0:t===1?1:1-Math.cos(t*Math.PI/2)},Qu=Uu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wu=function(t){return t===0?0:t===1?1:Math.sin(t*Math.PI/2)},Hu=Wu;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ku=function(t){return t===0?0:t===1?1:.5*(1-Math.cos(Math.PI*t))},Ju=Ku;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bn={In:Qu,Out:Hu,InOut:Ju};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var tf=function(t,r){return r===void 0&&(r=1),t<=0?0:t>=1?1:((r*t|0)+1)*(1/r)},rf=tf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Un=rf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ar=An,nr=Nn,er=Vn,Tt=Yn,ir=Xn,sr=Dn,Ga=qn,Ot=kn,It=Zn,Rt=jn,vr=Bn,af=Un,nf={Power0:Ga,Power1:Ot.Out,Power2:Tt.Out,Power3:It.Out,Power4:Rt.Out,Linear:Ga,Quad:Ot.Out,Cubic:Tt.Out,Quart:It.Out,Quint:Rt.Out,Sine:vr.Out,Expo:sr.Out,Circ:er.Out,Elastic:ir.Out,Back:ar.Out,Bounce:nr.Out,Stepped:af,"Quad.easeIn":Ot.In,"Cubic.easeIn":Tt.In,"Quart.easeIn":It.In,"Quint.easeIn":Rt.In,"Sine.easeIn":vr.In,"Expo.easeIn":sr.In,"Circ.easeIn":er.In,"Elastic.easeIn":ir.In,"Back.easeIn":ar.In,"Bounce.easeIn":nr.In,"Quad.easeOut":Ot.Out,"Cubic.easeOut":Tt.Out,"Quart.easeOut":It.Out,"Quint.easeOut":Rt.Out,"Sine.easeOut":vr.Out,"Expo.easeOut":sr.Out,"Circ.easeOut":er.Out,"Elastic.easeOut":ir.Out,"Back.easeOut":ar.Out,"Bounce.easeOut":nr.Out,"Quad.easeInOut":Ot.InOut,"Cubic.easeInOut":Tt.InOut,"Quart.easeInOut":It.InOut,"Quint.easeInOut":Rt.InOut,"Sine.easeInOut":vr.InOut,"Expo.easeInOut":sr.InOut,"Circ.easeInOut":er.InOut,"Elastic.easeInOut":ir.InOut,"Back.easeInOut":ar.InOut,"Bounce.easeInOut":nr.InOut};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ef=function(t){return t&&t[0].toUpperCase()+t.slice(1)},sf=ef;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pt=nf,vf=sf,hf=function(t,r){var a=pt.Power0;if(typeof t=="string")if(pt.hasOwnProperty(t))a=pt[t];else{var n="";if(t.indexOf(".")){n=t.substring(t.indexOf(".")+1);var e=n.toLowerCase();e==="in"?n="easeIn":e==="out"?n="easeOut":e==="inout"&&(n="easeInOut")}t=vf(t.substring(0,t.indexOf(".")+1)+n),pt.hasOwnProperty(t)&&(a=pt[t])}else typeof t=="function"&&(a=t);if(!r)return a;var i=r.slice(0);return i.unshift(0),function(s){return i[0]=s,a.apply(this,i)}},uf=hf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var La=En,ff=uf,Sa=I,of=function(t,r,a,n,e){n===void 0&&(n=0),e===void 0&&(e=[]);var i=[],s=t.x1,v=t.y1,h=t.x2-s,u=t.y2-v,f=ff(r,e),o,x,y=a-1;for(o=0;o<y;o++)x=f(o/y),i.push(new Sa(s+h*x,v+u*x));if(x=f(1),i.push(new Sa(s+h*x,v+u*x)),n>0){var c=i[0],d=[c];for(o=1;o<i.length-1;o++){var l=i[o];La(c,l)>=n&&(d.push(l),c=l)}var w=i[i.length-1];return La(c,w)<n&&d.pop(),d.push(w),d}else return i},xf=of;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yf=I,cf=function(t,r){return r===void 0&&(r=new yf),r.x=(t.x1+t.x2)/2,r.y=(t.y1+t.y2)/2,r},df=cf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lf=I,Mf=function(t,r,a){a===void 0&&(a=new lf);var n=t.x1,e=t.y1,i=t.x2,s=t.y2,v=(i-n)*(i-n)+(s-e)*(s-e);if(v===0)return a;var h=((r.x-n)*(i-n)+(r.y-e)*(s-e))/v;return a.x=n+h*(i-n),a.y=e+h*(s-e),a},wf=Mf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var mf=Q,$f=Pt,_f=I,gf=function(t,r){r===void 0&&(r=new _f);var a=$f(t)-mf.TAU;return r.x=Math.cos(a),r.y=Math.sin(a),r},Cf=gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zf=function(t,r){var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=(e-a)*(e-a)+(i-n)*(i-n);if(s===0)return!1;var v=((n-r.y)*(e-a)-(a-r.x)*(i-n))/s;return Math.abs(v)*Math.sqrt(s)},Pf=zf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var bf=function(t){return Math.abs(t.y1-t.y2)},Tf=bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Of=function(t,r,a){var n=a-r;return r+((t-r)%n+n)%n},mr=Of;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var If=Q,Rf=mr,pf=Pt,Gf=function(t){var r=pf(t)-If.TAU;return Rf(r,-Math.PI,Math.PI)},Qn=Gf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lf=Q,Sf=Pt,Ff=function(t){return Math.cos(Sf(t)-Lf.TAU)},Ef=Ff;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Af=Q,Nf=Pt,Vf=function(t){return Math.sin(Nf(t)-Af.TAU)},Yf=Vf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xf=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t},Df=Xf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qf=function(t){return-((t.x2-t.x1)/(t.y2-t.y1))},kf=qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Zf=Pt,jf=Qn,Bf=function(t,r){return 2*jf(r)-Math.PI-Zf(t)},Uf=Bf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qf=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x1-r,v=t.y1-a;return t.x1=s*e-v*i+r,t.y1=s*i+v*e+a,s=t.x2-r,v=t.y2-a,t.x2=s*e-v*i+r,t.y2=s*i+v*e+a,t},da=Qf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wf=da,Hf=function(t,r){var a=(t.x1+t.x2)/2,n=(t.y1+t.y2)/2;return Wf(t,a,n,r)},Kf=Hf;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jf=da,to=function(t,r,a){return Jf(t,r.x,r.y,a)},ro=to;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ao=function(t,r,a,n,e){return t.x1=r,t.y1=a,t.x2=r+Math.cos(n)*e,t.y2=a+Math.sin(n)*e,t},no=ao;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var eo=function(t){return(t.y2-t.y1)/(t.x2-t.x1)},io=eo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var so=function(t){return Math.abs(t.x1-t.x2)},vo=so;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A=ht;A.Angle=Pt;A.BresenhamPoints=Gh;A.CenterOn=Sh;A.Clone=Ah;A.CopyFrom=Vh;A.Equals=Xh;A.Extend=kh;A.GetEasedPoints=xf;A.GetMidPoint=df;A.GetNearestPoint=wf;A.GetNormal=Cf;A.GetPoint=fn;A.GetPoints=on;A.GetShortestDistance=Pf;A.Height=Tf;A.Length=vt;A.NormalAngle=Qn;A.NormalX=Ef;A.NormalY=Yf;A.Offset=Df;A.PerpSlope=kf;A.Random=xn;A.ReflectAngle=Uf;A.Rotate=Kf;A.RotateAroundPoint=ro;A.RotateAroundXY=da;A.SetToAngle=no;A.Slope=io;A.Width=vo;var ho=A;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uo=D,fo=J,oo=Ct;function Yr(t,r,a,n){var e=t-a,i=r-n,s=e*e+i*i;return Math.sqrt(s)}var xo=new uo({initialize:function(r,a,n){this.vertex1=r,this.vertex2=a,this.vertex3=n,this.bounds=new fo,this._inCenter=new oo},getInCenter:function(t){t===void 0&&(t=!0);var r=this.vertex1,a=this.vertex2,n=this.vertex3,e,i,s,v,h,u;t?(e=r.x,i=r.y,s=a.x,v=a.y,h=n.x,u=n.y):(e=r.vx,i=r.vy,s=a.vx,v=a.vy,h=n.vx,u=n.vy);var f=Yr(h,u,s,v),o=Yr(e,i,h,u),x=Yr(s,v,e,i),y=f+o+x;return this._inCenter.set((e*f+s*o+h*x)/y,(i*f+v*o+u*x)/y)},contains:function(t,r,a){var n=this.vertex1,e=this.vertex2,i=this.vertex3,s=n.vx,v=n.vy,h=e.vx,u=e.vy,f=i.vx,o=i.vy;if(a){var x=a.a,y=a.b,c=a.c,d=a.d,l=a.e,w=a.f;s=n.vx*x+n.vy*c+l,v=n.vx*y+n.vy*d+w,h=e.vx*x+e.vy*c+l,u=e.vx*y+e.vy*d+w,f=i.vx*x+i.vy*c+l,o=i.vx*y+i.vy*d+w}var m=f-s,M=o-v,$=h-s,_=u-v,g=t-s,R=r-v,G=m*m+M*M,b=m*$+M*_,T=m*g+M*R,P=$*$+_*_,p=$*g+_*R,C=G*P-b*b,S=C===0?0:1/C,z=(P*T-b*p)*S,L=(G*p-b*T)*S;return z>=0&&L>=0&&z+L<1},isCounterClockwise:function(t){var r=this.vertex1,a=this.vertex2,n=this.vertex3,e=(a.vx-r.vx)*(n.vy-r.vy)-(a.vy-r.vy)*(n.vx-r.vx);return t<=0?e>=0:e<0},load:function(t,r,a,n,e){return a=this.vertex1.load(t,r,a,n,e),a=this.vertex2.load(t,r,a,n,e),a=this.vertex3.load(t,r,a,n,e),a},transformCoordinatesLocal:function(t,r,a,n){return this.vertex1.transformCoordinatesLocal(t,r,a,n),this.vertex2.transformCoordinatesLocal(t,r,a,n),this.vertex3.transformCoordinatesLocal(t,r,a,n),this},updateBounds:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3,n=this.bounds;return n.x=Math.min(t.vx,r.vx,a.vx),n.y=Math.min(t.vy,r.vy,a.vy),n.width=Math.max(t.vx,r.vx,a.vx)-n.x,n.height=Math.max(t.vy,r.vy,a.vy)-n.y,this},isInView:function(t,r,a,n,e,i,s,v,h,u,f){this.update(n,e,i,s,v,h,u,f);var o=this.vertex1,x=this.vertex2,y=this.vertex3;if(o.ta<=0&&x.ta<=0&&y.ta<=0||r&&!this.isCounterClockwise(a))return!1;var c=this.bounds;c.x=Math.min(o.tx,x.tx,y.tx),c.y=Math.min(o.ty,x.ty,y.ty),c.width=Math.max(o.tx,x.tx,y.tx)-c.x,c.height=Math.max(o.ty,x.ty,y.ty)-c.y;var d=t.x+t.width,l=t.y+t.height;return c.width<=0||c.height<=0||t.width<=0||t.height<=0?!1:!(c.right<t.x||c.bottom<t.y||c.x>d||c.y>l)},scrollUV:function(t,r){return this.vertex1.scrollUV(t,r),this.vertex2.scrollUV(t,r),this.vertex3.scrollUV(t,r),this},scaleUV:function(t,r){return this.vertex1.scaleUV(t,r),this.vertex2.scaleUV(t,r),this.vertex3.scaleUV(t,r),this},setColor:function(t){return this.vertex1.color=t,this.vertex2.color=t,this.vertex3.color=t,this},update:function(t,r,a,n,e,i,s,v){return this.vertex1.update(r,a,n,e,i,s,v,t),this.vertex2.update(r,a,n,e,i,s,v,t),this.vertex3.update(r,a,n,e,i,s,v,t),this},translate:function(t,r){r===void 0&&(r=0);var a=this.vertex1,n=this.vertex2,e=this.vertex3;return a.x+=t,a.y+=r,n.x+=t,n.y+=r,e.x+=t,e.y+=r,this},x:{get:function(){return this.getInCenter().x},set:function(t){var r=this.getInCenter();this.translate(t-r.x,0)}},y:{get:function(){return this.getInCenter().y},set:function(t){var r=this.getInCenter();this.translate(0,t-r.y)}},alpha:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.alpha+r.alpha+a.alpha)/3},set:function(t){this.vertex1.alpha=t,this.vertex2.alpha=t,this.vertex3.alpha=t}},depth:{get:function(){var t=this.vertex1,r=this.vertex2,a=this.vertex3;return(t.vz+r.vz+a.vz)/3}},destroy:function(){this.vertex1=null,this.vertex2=null,this.vertex3=null}}),$r=xo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yo=function(t,r,a){var n=typeof t;return!t||n==="number"||n==="string"?a:t.hasOwnProperty(r)&&t[r]!==void 0?t[r]:a},co=yo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lo=D,la=tt,hr=1e-6,_r=new lo({initialize:function(r){this.val=new Float32Array(16),r?this.copy(r):this.identity()},clone:function(){return new _r(this)},set:function(t){return this.copy(t)},setValues:function(t,r,a,n,e,i,s,v,h,u,f,o,x,y,c,d){var l=this.val;return l[0]=t,l[1]=r,l[2]=a,l[3]=n,l[4]=e,l[5]=i,l[6]=s,l[7]=v,l[8]=h,l[9]=u,l[10]=f,l[11]=o,l[12]=x,l[13]=y,l[14]=c,l[15]=d,this},copy:function(t){var r=t.val;return this.setValues(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15])},fromArray:function(t){return this.setValues(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},zero:function(){return this.setValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)},transform:function(t,r,a){var n=wt.fromQuat(a),e=n.val,i=r.x,s=r.y,v=r.z;return this.setValues(e[0]*i,e[1]*i,e[2]*i,0,e[4]*s,e[5]*s,e[6]*s,0,e[8]*v,e[9]*v,e[10]*v,0,t.x,t.y,t.z,1)},xyz:function(t,r,a){this.identity();var n=this.val;return n[12]=t,n[13]=r,n[14]=a,this},scaling:function(t,r,a){this.zero();var n=this.val;return n[0]=t,n[5]=r,n[10]=a,n[15]=1,this},identity:function(){return this.setValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[3],e=t[6],i=t[7],s=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=r,t[6]=t[9],t[7]=t[13],t[8]=a,t[9]=e,t[11]=t[14],t[12]=n,t[13]=i,t[14]=s,this},getInverse:function(t){return this.copy(t),this.invert()},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],w=r*s-a*i,m=r*v-n*i,M=r*h-e*i,$=a*v-n*s,_=a*h-e*s,g=n*h-e*v,R=u*c-f*y,G=u*d-o*y,b=u*l-x*y,T=f*d-o*c,P=f*l-x*c,p=o*l-x*d,C=w*p-m*P+M*T+$*b-_*G+g*R;return C?(C=1/C,this.setValues((s*p-v*P+h*T)*C,(n*P-a*p-e*T)*C,(c*g-d*_+l*$)*C,(o*_-f*g-x*$)*C,(v*b-i*p-h*G)*C,(r*p-n*b+e*G)*C,(d*M-y*g-l*m)*C,(u*g-o*M+x*m)*C,(i*P-s*b+h*R)*C,(a*b-r*P-e*R)*C,(y*_-c*M+l*w)*C,(f*M-u*_-x*w)*C,(s*G-i*T-v*R)*C,(r*T-a*G+n*R)*C,(c*m-y*$-d*w)*C,(u*$-f*m+o*w)*C)):this},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15];return this.setValues(s*(o*l-x*d)-f*(v*l-h*d)+c*(v*x-h*o),-(a*(o*l-x*d)-f*(n*l-e*d)+c*(n*x-e*o)),a*(v*l-h*d)-s*(n*l-e*d)+c*(n*h-e*v),-(a*(v*x-h*o)-s*(n*x-e*o)+f*(n*h-e*v)),-(i*(o*l-x*d)-u*(v*l-h*d)+y*(v*x-h*o)),r*(o*l-x*d)-u*(n*l-e*d)+y*(n*x-e*o),-(r*(v*l-h*d)-i*(n*l-e*d)+y*(n*h-e*v)),r*(v*x-h*o)-i*(n*x-e*o)+u*(n*h-e*v),i*(f*l-x*c)-u*(s*l-h*c)+y*(s*x-h*f),-(r*(f*l-x*c)-u*(a*l-e*c)+y*(a*x-e*f)),r*(s*l-h*c)-i*(a*l-e*c)+y*(a*h-e*s),-(r*(s*x-h*f)-i*(a*x-e*f)+u*(a*h-e*s)),-(i*(f*d-o*c)-u*(s*d-v*c)+y*(s*o-v*f)),r*(f*d-o*c)-u*(a*d-n*c)+y*(a*o-n*f),-(r*(s*d-v*c)-i*(a*d-n*c)+y*(a*v-n*s)),r*(s*o-v*f)-i*(a*o-n*f)+u*(a*v-n*s))},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],f=t[9],o=t[10],x=t[11],y=t[12],c=t[13],d=t[14],l=t[15],w=r*s-a*i,m=r*v-n*i,M=r*h-e*i,$=a*v-n*s,_=a*h-e*s,g=n*h-e*v,R=u*c-f*y,G=u*d-o*y,b=u*l-x*y,T=f*d-o*c,P=f*l-x*c,p=o*l-x*d;return w*p-m*P+M*T+$*b-_*G+g*R},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=r[6],u=r[7],f=r[8],o=r[9],x=r[10],y=r[11],c=r[12],d=r[13],l=r[14],w=r[15],m=t.val,M=m[0],$=m[1],_=m[2],g=m[3];return r[0]=M*a+$*s+_*f+g*c,r[1]=M*n+$*v+_*o+g*d,r[2]=M*e+$*h+_*x+g*l,r[3]=M*i+$*u+_*y+g*w,M=m[4],$=m[5],_=m[6],g=m[7],r[4]=M*a+$*s+_*f+g*c,r[5]=M*n+$*v+_*o+g*d,r[6]=M*e+$*h+_*x+g*l,r[7]=M*i+$*u+_*y+g*w,M=m[8],$=m[9],_=m[10],g=m[11],r[8]=M*a+$*s+_*f+g*c,r[9]=M*n+$*v+_*o+g*d,r[10]=M*e+$*h+_*x+g*l,r[11]=M*i+$*u+_*y+g*w,M=m[12],$=m[13],_=m[14],g=m[15],r[12]=M*a+$*s+_*f+g*c,r[13]=M*n+$*v+_*o+g*d,r[14]=M*e+$*h+_*x+g*l,r[15]=M*i+$*u+_*y+g*w,this},multiplyLocal:function(t){var r=this.val,a=t.val;return this.setValues(r[0]*a[0]+r[1]*a[4]+r[2]*a[8]+r[3]*a[12],r[0]*a[1]+r[1]*a[5]+r[2]*a[9]+r[3]*a[13],r[0]*a[2]+r[1]*a[6]+r[2]*a[10]+r[3]*a[14],r[0]*a[3]+r[1]*a[7]+r[2]*a[11]+r[3]*a[15],r[4]*a[0]+r[5]*a[4]+r[6]*a[8]+r[7]*a[12],r[4]*a[1]+r[5]*a[5]+r[6]*a[9]+r[7]*a[13],r[4]*a[2]+r[5]*a[6]+r[6]*a[10]+r[7]*a[14],r[4]*a[3]+r[5]*a[7]+r[6]*a[11]+r[7]*a[15],r[8]*a[0]+r[9]*a[4]+r[10]*a[8]+r[11]*a[12],r[8]*a[1]+r[9]*a[5]+r[10]*a[9]+r[11]*a[13],r[8]*a[2]+r[9]*a[6]+r[10]*a[10]+r[11]*a[14],r[8]*a[3]+r[9]*a[7]+r[10]*a[11]+r[11]*a[15],r[12]*a[0]+r[13]*a[4]+r[14]*a[8]+r[15]*a[12],r[12]*a[1]+r[13]*a[5]+r[14]*a[9]+r[15]*a[13],r[12]*a[2]+r[13]*a[6]+r[14]*a[10]+r[15]*a[14],r[12]*a[3]+r[13]*a[7]+r[14]*a[11]+r[15]*a[15])},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,r){var a=t.val,n=r.val,e=a[0],i=a[4],s=a[8],v=a[12],h=a[1],u=a[5],f=a[9],o=a[13],x=a[2],y=a[6],c=a[10],d=a[14],l=a[3],w=a[7],m=a[11],M=a[15],$=n[0],_=n[4],g=n[8],R=n[12],G=n[1],b=n[5],T=n[9],P=n[13],p=n[2],C=n[6],S=n[10],z=n[14],L=n[3],F=n[7],E=n[11],q=n[15];return this.setValues(e*$+i*G+s*p+v*L,h*$+u*G+f*p+o*L,x*$+y*G+c*p+d*L,l*$+w*G+m*p+M*L,e*_+i*b+s*C+v*F,h*_+u*b+f*C+o*F,x*_+y*b+c*C+d*F,l*_+w*b+m*C+M*F,e*g+i*T+s*S+v*E,h*g+u*T+f*S+o*E,x*g+y*T+c*S+d*E,l*g+w*T+m*S+M*E,e*R+i*P+s*z+v*q,h*R+u*P+f*z+o*q,x*R+y*P+c*z+d*q,l*R+w*P+m*z+M*q)},translate:function(t){return this.translateXYZ(t.x,t.y,t.z)},translateXYZ:function(t,r,a){var n=this.val;return n[12]=n[0]*t+n[4]*r+n[8]*a+n[12],n[13]=n[1]*t+n[5]*r+n[9]*a+n[13],n[14]=n[2]*t+n[6]*r+n[10]*a+n[14],n[15]=n[3]*t+n[7]*r+n[11]*a+n[15],this},scale:function(t){return this.scaleXYZ(t.x,t.y,t.z)},scaleXYZ:function(t,r,a){var n=this.val;return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n[4]=n[4]*r,n[5]=n[5]*r,n[6]=n[6]*r,n[7]=n[7]*r,n[8]=n[8]*a,n[9]=n[9]*a,n[10]=n[10]*a,n[11]=n[11]*a,this},makeRotationAxis:function(t,r){var a=Math.cos(r),n=Math.sin(r),e=1-a,i=t.x,s=t.y,v=t.z,h=e*i,u=e*s;return this.setValues(h*i+a,h*s-n*v,h*v+n*s,0,h*s+n*v,u*s+a,u*v-n*i,0,h*v-n*s,u*v+n*i,e*v*v+a,0,0,0,0,1)},rotate:function(t,r){var a=this.val,n=r.x,e=r.y,i=r.z,s=Math.sqrt(n*n+e*e+i*i);if(Math.abs(s)<hr)return this;s=1/s,n*=s,e*=s,i*=s;var v=Math.sin(t),h=Math.cos(t),u=1-h,f=a[0],o=a[1],x=a[2],y=a[3],c=a[4],d=a[5],l=a[6],w=a[7],m=a[8],M=a[9],$=a[10],_=a[11],g=a[12],R=a[13],G=a[14],b=a[15],T=n*n*u+h,P=e*n*u+i*v,p=i*n*u-e*v,C=n*e*u-i*v,S=e*e*u+h,z=i*e*u+n*v,L=n*i*u+e*v,F=e*i*u-n*v,E=i*i*u+h;return this.setValues(f*T+c*P+m*p,o*T+d*P+M*p,x*T+l*P+$*p,y*T+w*P+_*p,f*C+c*S+m*z,o*C+d*S+M*z,x*C+l*S+$*z,y*C+w*S+_*z,f*L+c*F+m*E,o*L+d*F+M*E,x*L+l*F+$*E,y*L+w*F+_*E,g,R,G,b)},rotateX:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[4],i=r[5],s=r[6],v=r[7],h=r[8],u=r[9],f=r[10],o=r[11];return r[4]=e*n+h*a,r[5]=i*n+u*a,r[6]=s*n+f*a,r[7]=v*n+o*a,r[8]=h*n-e*a,r[9]=u*n-i*a,r[10]=f*n-s*a,r[11]=o*n-v*a,this},rotateY:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],s=r[2],v=r[3],h=r[8],u=r[9],f=r[10],o=r[11];return r[0]=e*n-h*a,r[1]=i*n-u*a,r[2]=s*n-f*a,r[3]=v*n-o*a,r[8]=e*a+h*n,r[9]=i*a+u*n,r[10]=s*a+f*n,r[11]=v*a+o*n,this},rotateZ:function(t){var r=this.val,a=Math.sin(t),n=Math.cos(t),e=r[0],i=r[1],s=r[2],v=r[3],h=r[4],u=r[5],f=r[6],o=r[7];return r[0]=e*n+h*a,r[1]=i*n+u*a,r[2]=s*n+f*a,r[3]=v*n+o*a,r[4]=h*n-e*a,r[5]=u*n-i*a,r[6]=f*n-s*a,r[7]=o*n-v*a,this},fromRotationTranslation:function(t,r){var a=t.x,n=t.y,e=t.z,i=t.w,s=a+a,v=n+n,h=e+e,u=a*s,f=a*v,o=a*h,x=n*v,y=n*h,c=e*h,d=i*s,l=i*v,w=i*h;return this.setValues(1-(x+c),f+w,o-l,0,f-w,1-(u+c),y+d,0,o+l,y-d,1-(u+x),0,r.x,r.y,r.z,1)},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,s=a+a,v=n+n,h=r*i,u=r*s,f=r*v,o=a*s,x=a*v,y=n*v,c=e*i,d=e*s,l=e*v;return this.setValues(1-(o+y),u+l,f-d,0,u-l,1-(h+y),x+c,0,f+d,x-c,1-(h+o),0,0,0,0,1)},frustum:function(t,r,a,n,e,i){var s=1/(r-t),v=1/(n-a),h=1/(e-i);return this.setValues(e*2*s,0,0,0,0,e*2*v,0,0,(r+t)*s,(n+a)*v,(i+e)*h,-1,0,0,i*e*2*h,0)},perspective:function(t,r,a,n){var e=1/Math.tan(t/2),i=1/(a-n);return this.setValues(e/r,0,0,0,0,e,0,0,0,0,(n+a)*i,-1,0,0,2*n*a*i,0)},perspectiveLH:function(t,r,a,n){return this.setValues(2*a/t,0,0,0,0,2*a/r,0,0,0,0,-n/(a-n),1,0,0,a*n/(a-n),0)},ortho:function(t,r,a,n,e,i){var s=t-r,v=a-n,h=e-i;return s=s===0?s:1/s,v=v===0?v:1/v,h=h===0?h:1/h,this.setValues(-2*s,0,0,0,0,-2*v,0,0,0,0,2*h,0,(t+r)*s,(n+a)*v,(i+e)*h,1)},lookAtRH:function(t,r,a){var n=this.val;return W.subVectors(t,r),W.getLengthSquared()===0&&(W.z=1),W.normalize(),et.crossVectors(a,W),et.getLengthSquared()===0&&(Math.abs(a.z)===1?W.x+=1e-4:W.z+=1e-4,W.normalize(),et.crossVectors(a,W)),et.normalize(),ur.crossVectors(W,et),n[0]=et.x,n[1]=et.y,n[2]=et.z,n[4]=ur.x,n[5]=ur.y,n[6]=ur.z,n[8]=W.x,n[9]=W.y,n[10]=W.z,this},lookAt:function(t,r,a){var n=t.x,e=t.y,i=t.z,s=a.x,v=a.y,h=a.z,u=r.x,f=r.y,o=r.z;if(Math.abs(n-u)<hr&&Math.abs(e-f)<hr&&Math.abs(i-o)<hr)return this.identity();var x=n-u,y=e-f,c=i-o,d=1/Math.sqrt(x*x+y*y+c*c);x*=d,y*=d,c*=d;var l=v*c-h*y,w=h*x-s*c,m=s*y-v*x;d=Math.sqrt(l*l+w*w+m*m),d?(d=1/d,l*=d,w*=d,m*=d):(l=0,w=0,m=0);var M=y*m-c*w,$=c*l-x*m,_=x*w-y*l;return d=Math.sqrt(M*M+$*$+_*_),d?(d=1/d,M*=d,$*=d,_*=d):(M=0,$=0,_=0),this.setValues(l,M,x,0,w,$,y,0,m,_,c,0,-(l*n+w*e+m*i),-(M*n+$*e+_*i),-(x*n+y*e+c*i),1)},yawPitchRoll:function(t,r,a){this.zero(),wt.zero(),Gt.zero();var n=this.val,e=wt.val,i=Gt.val,s=Math.sin(a),v=Math.cos(a);return n[10]=1,n[15]=1,n[0]=v,n[1]=s,n[4]=-s,n[5]=v,s=Math.sin(r),v=Math.cos(r),e[0]=1,e[15]=1,e[5]=v,e[10]=v,e[9]=-s,e[6]=s,s=Math.sin(t),v=Math.cos(t),i[5]=1,i[15]=1,i[0]=v,i[2]=-s,i[8]=s,i[10]=v,this.multiplyLocal(wt),this.multiplyLocal(Gt),this},setWorldMatrix:function(t,r,a,n,e){return this.yawPitchRoll(t.y,t.x,t.z),wt.scaling(a.x,a.y,a.z),Gt.xyz(r.x,r.y,r.z),this.multiplyLocal(wt),this.multiplyLocal(Gt),n&&this.multiplyLocal(n),e&&this.multiplyLocal(e),this},multiplyToMat4:function(t,r){var a=this.val,n=t.val,e=a[0],i=a[1],s=a[2],v=a[3],h=a[4],u=a[5],f=a[6],o=a[7],x=a[8],y=a[9],c=a[10],d=a[11],l=a[12],w=a[13],m=a[14],M=a[15],$=n[0],_=n[1],g=n[2],R=n[3],G=n[4],b=n[5],T=n[6],P=n[7],p=n[8],C=n[9],S=n[10],z=n[11],L=n[12],F=n[13],E=n[14],q=n[15];return r.setValues($*e+_*h+g*x+R*l,_*i+_*u+g*y+R*w,g*s+_*f+g*c+R*m,R*v+_*o+g*d+R*M,G*e+b*h+T*x+P*l,G*i+b*u+T*y+P*w,G*s+b*f+T*c+P*m,G*v+b*o+T*d+P*M,p*e+C*h+S*x+z*l,p*i+C*u+S*y+z*w,p*s+C*f+S*c+z*m,p*v+C*o+S*d+z*M,L*e+F*h+E*x+q*l,L*i+F*u+E*y+q*w,L*s+F*f+E*c+q*m,L*v+F*o+E*d+q*M)},fromRotationXYTranslation:function(t,r,a){var n=r.x,e=r.y,i=r.z,s=Math.sin(t.x),v=Math.cos(t.x),h=Math.sin(t.y),u=Math.cos(t.y),f=n,o=e,x=i,y=-s,c=0-y*h,d=0-v*h,l=y*u,w=v*u;return a||(f=u*n+h*i,o=c*n+v*e+l*i,x=d*n+s*e+w*i),this.setValues(u,c,d,0,0,v,s,0,h,l,w,0,f,o,x,1)},getMaxScaleOnAxis:function(){var t=this.val,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,a,n))}}),wt=new _r,Gt=new _r,et=new la,ur=new la,W=new la,Xt=_r;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Felipe Alfonso <@bitnenfer>
 * @author       Matthew Groves <@doormat>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Mo={getTintFromFloats:function(t,r,a,n){var e=(t*255|0)&255,i=(r*255|0)&255,s=(a*255|0)&255,v=(n*255|0)&255;return(v<<24|e<<16|i<<8|s)>>>0},getTintAppendFloatAlpha:function(t,r){var a=(r*255|0)&255;return(a<<24|t)>>>0},getTintAppendFloatAlphaAndSwap:function(t,r){var a=(t>>16|0)&255,n=(t>>8|0)&255,e=(t|0)&255,i=(r*255|0)&255;return(i<<24|e<<16|n<<8|a)>>>0},getFloatsFromUintRGB:function(t){var r=(t>>16|0)&255,a=(t>>8|0)&255,n=(t|0)&255;return[r/255,a/255,n/255]},checkShaderMax:function(t,r){var a=Math.min(16,t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS));return!r||r===-1?a:Math.min(a,r)},parseFragmentShaderMaxTextures:function(t,r){if(!t)return"";for(var a="",n=0;n<r;n++)n>0&&(a+=`
	else `),n<r-1&&(a+="if (outTexId < "+n+".5)"),a+=`
	{`,a+=`
		texture = texture2D(uMainSampler[`+n+"], outTexCoord);",a+=`
	}`;return t=t.replace(/%count%/gi,r.toString()),t.replace(/%forloop%/gi,a)},setGlowQuality:function(t,r,a,n){return a===void 0&&(a=r.config.glowFXQuality),n===void 0&&(n=r.config.glowFXDistance),t=t.replace(/__SIZE__/gi,(1/a/n).toFixed(7)),t=t.replace(/__DIST__/gi,n.toFixed(0)+".0"),t}};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wo=D,mo=Mo,Fa=tt,$o=new wo({Extends:Fa,initialize:function(r,a,n,e,i,s,v,h,u,f){s===void 0&&(s=16777215),v===void 0&&(v=1),h===void 0&&(h=0),u===void 0&&(u=0),f===void 0&&(f=0),Fa.call(this,r,a,n),this.vx=0,this.vy=0,this.vz=0,this.nx=h,this.ny=u,this.nz=f,this.u=e,this.v=i,this.color=s,this.alpha=v,this.tx=0,this.ty=0,this.ta=0,this.tu=e,this.tv=i},setUVs:function(t,r){return this.u=t,this.v=r,this.tu=t,this.tv=r,this},scrollUV:function(t,r){return this.tu+=t,this.tv+=r,this},scaleUV:function(t,r){return this.tu=this.u*t,this.tv=this.v*r,this},transformCoordinatesLocal:function(t,r,a,n){var e=this.x,i=this.y,s=this.z,v=t.val,h=e*v[0]+i*v[4]+s*v[8]+v[12],u=e*v[1]+i*v[5]+s*v[9]+v[13],f=e*v[2]+i*v[6]+s*v[10]+v[14],o=e*v[3]+i*v[7]+s*v[11]+v[15];this.vx=h/o*r,this.vy=-(u/o)*a,n<=0?this.vz=f/o:this.vz=-(f/o)},resize:function(t,r,a,n,e,i){return this.x=t,this.y=r,this.vx=this.x*a,this.vy=-this.y*n,this.vz=0,e<.5?this.vx+=a*(.5-e):e>.5&&(this.vx-=a*(e-.5)),i<.5?this.vy+=n*(.5-i):i>.5&&(this.vy-=n*(i-.5)),this},update:function(t,r,a,n,e,i,s,v){var h=this.vx*t+this.vy*a+e,u=this.vx*r+this.vy*n+i;return s&&(h=Math.round(h),u=Math.round(u)),this.tx=h,this.ty=u,this.ta=this.alpha*v,this},load:function(t,r,a,n,e){return t[++a]=this.tx,t[++a]=this.ty,t[++a]=this.tu,t[++a]=this.tv,t[++a]=n,t[++a]=e,r[++a]=mo.getTintAppendFloatAlpha(this.color,this.ta),a}}),gr=$o;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ea=$r,Y=co,_o=Xt,Wn=tt,mt=gr,Aa=new Wn,Na=new Wn,ft=new _o,go=function(t){var r=Y(t,"mesh"),a=Y(t,"texture",null),n=Y(t,"frame"),e=Y(t,"width",1),i=Y(t,"height",e),s=Y(t,"widthSegments",1),v=Y(t,"heightSegments",s),h=Y(t,"x",0),u=Y(t,"y",0),f=Y(t,"z",0),o=Y(t,"rotateX",0),x=Y(t,"rotateY",0),y=Y(t,"rotateZ",0),c=Y(t,"zIsUp",!0),d=Y(t,"isOrtho",r?r.dirtyCache[11]:!1),l=Y(t,"colors",[16777215]),w=Y(t,"alphas",[1]),m=Y(t,"tile",!1),M=Y(t,"flipY",!1),$=Y(t,"width",null),_={faces:[],verts:[]};Aa.set(h,u,f),Na.set(o,x,y),ft.fromRotationXYTranslation(Na,Aa,c);var g;if(!a&&r)a=r.texture,n||(g=r.frame);else if(r&&typeof a=="string")a=r.scene.sys.textures.get(a);else if(!a)return _;g||(g=a.get(n)),!$&&d&&a&&r&&(e=g.width/r.height,i=g.height/r.height);var R=e/2,G=i/2,b=Math.floor(s),T=Math.floor(v),P=b+1,p=T+1,C=e/b,S=i/T,z=[],L=[],F,E,q=0,bt=1,ut=0,xt=1;g&&(q=g.u0,bt=g.u1,M?(ut=g.v1,xt=g.v0):(ut=g.v0,xt=g.v1));var pe=bt-q,Ge=xt-ut;for(E=0;E<p;E++){var Le=E*S-G;for(F=0;F<P;F++){var Se=F*C-R;L.push(Se,-Le);var Fe=q+pe*(F/b),Ee=ut+Ge*(E/T);z.push(Fe,Ee)}}Array.isArray(l)||(l=[l]),Array.isArray(w)||(w=[w]);var kt=0,Zt=0;for(E=0;E<T;E++)for(F=0;F<b;F++){var jt=(F+P*E)*2,at=(F+P*(E+1))*2,Bt=(F+1+P*(E+1))*2,nt=(F+1+P*E)*2,yt=l[Zt],ct=w[kt],zr=new mt(L[jt],L[jt+1],0,z[jt],z[jt+1],yt,ct).transformMat4(ft),Pr=new mt(L[at],L[at+1],0,z[at],z[at+1],yt,ct).transformMat4(ft),br=new mt(L[nt],L[nt+1],0,z[nt],z[nt+1],yt,ct).transformMat4(ft),Tr=new mt(L[at],L[at+1],0,z[at],z[at+1],yt,ct).transformMat4(ft),Or=new mt(L[Bt],L[Bt+1],0,z[Bt],z[Bt+1],yt,ct).transformMat4(ft),Ir=new mt(L[nt],L[nt+1],0,z[nt],z[nt+1],yt,ct).transformMat4(ft);m&&(zr.setUVs(q,xt),Pr.setUVs(q,ut),br.setUVs(bt,xt),Tr.setUVs(q,ut),Or.setUVs(bt,ut),Ir.setUVs(bt,xt)),Zt++,Zt===l.length&&(Zt=0),kt++,kt===w.length&&(kt=0),_.verts.push(zr,Pr,br,Tr,Or,Ir),_.faces.push(new Ea(zr,Pr,br),new Ea(Tr,Or,Ir))}return r&&(r.faces=r.faces.concat(_.faces),r.vertices=r.vertices.concat(_.verts)),_},Co=go;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zo=$r,Po=Xt,Hn=tt,Xr=gr,Va=new Hn,Ya=new Hn,fr=new Po,bo=function(t,r,a,n,e,i,s,v,h,u){a===void 0&&(a=1),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=0),v===void 0&&(v=0),h===void 0&&(h=0),u===void 0&&(u=!0);var f={faces:[],verts:[]},o=t.materials;Va.set(n,e,i),Ya.set(s,v,h),fr.fromRotationXYTranslation(Ya,Va,u);for(var x=0;x<t.models.length;x++)for(var y=t.models[x],c=y.vertices,d=y.textureCoords,l=y.faces,w=0;w<l.length;w++){var m=l[w],M=m.vertices[0],$=m.vertices[1],_=m.vertices[2],g=c[M.vertexIndex],R=c[$.vertexIndex],G=c[_.vertexIndex],b=M.textureCoordsIndex,T=$.textureCoordsIndex,P=_.textureCoordsIndex,p=b===-1?{u:0,v:1}:d[b],C=T===-1?{u:0,v:0}:d[T],S=P===-1?{u:1,v:1}:d[P],z=16777215;m.material!==""&&o[m.material]&&(z=o[m.material]);var L=new Xr(g.x*a,g.y*a,g.z*a,p.u,p.v,z).transformMat4(fr),F=new Xr(R.x*a,R.y*a,R.z*a,C.u,C.v,z).transformMat4(fr),E=new Xr(G.x*a,G.y*a,G.z*a,S.u,S.v,z).transformMat4(fr);f.verts.push(L,F,E),f.faces.push(new zo(L,F,E))}return r&&(r.faces=r.faces.concat(f.faces),r.vertices=r.vertices.concat(f.verts)),f},To=bo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oo=$r,Xa=gr,Io=function(t,r,a,n,e,i,s,v){if(n===void 0&&(n=!1),i===void 0&&(i=16777215),s===void 0&&(s=1),v===void 0&&(v=!1),t.length!==r.length&&!n){console.warn("GenerateVerts: vertices and uvs count not equal");return}var h={faces:[],vertices:[]},u,f,o,x,y,c,d,l,w,m,M,$=n?3:2,_=Array.isArray(i),g=Array.isArray(s);if(Array.isArray(a)&&a.length>0)for(u=0;u<a.length;u++){var R=a[u],G=a[u]*2,b=a[u]*$;f=t[b],o=t[b+1],x=n?t[b+2]:0,y=r[G],c=r[G+1],v&&(c=1-c),d=_?i[R]:i,l=g?s[R]:s,w=0,m=0,M=0,e&&(w=e[b],m=e[b+1],M=n?e[b+2]:0),h.vertices.push(new Xa(f,o,x,y,c,d,l,w,m,M))}else{var T=0,P=0;for(u=0;u<t.length;u+=$)f=t[u],o=t[u+1],x=n?t[u+2]:0,y=r[T],c=r[T+1],d=_?i[P]:i,l=g?s[P]:s,w=0,m=0,M=0,e&&(w=e[u],m=e[u+1],M=n?e[u+2]:0),h.vertices.push(new Xa(f,o,x,y,c,d,l,w,m,M)),T+=2,P++}for(u=0;u<h.vertices.length;u+=3){var p=h.vertices[u],C=h.vertices[u+1],S=h.vertices[u+2];h.faces.push(new Oo(p,C,S))}return h},Ro=Io;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Kn=!0,Jn="untitled",Dt="",Ma="";function po(t){var r=t.indexOf("#");return r>-1?t.substring(0,r):t}function St(t){return t.models.length===0&&t.models.push({faces:[],name:Jn,textureCoords:[],vertexNormals:[],vertices:[]}),Dt="",t.models[t.models.length-1]}function Go(t,r){var a=t.length>=2?t[1]:Jn;r.models.push({faces:[],name:a,textureCoords:[],vertexNormals:[],vertices:[]}),Dt=""}function Lo(t){t.length===2&&(Dt=t[1])}function So(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;St(r).vertices.push({x:n,y:e,z:i})}function Fo(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;isNaN(n)&&(n=0),isNaN(e)&&(e=0),isNaN(i)&&(i=0),Kn&&(e=1-e),St(r).textureCoords.push({u:n,v:e,w:i})}function Eo(t,r){var a=t.length,n=a>=2?parseFloat(t[1]):0,e=a>=3?parseFloat(t[2]):0,i=a>=4?parseFloat(t[3]):0;St(r).vertexNormals.push({x:n,y:e,z:i})}function Ao(t,r){var a=t.length-1;if(!(a<3)){for(var n={group:Dt,material:Ma,vertices:[]},e=0;e<a;e++){var i=t[e+1],s=i.split("/"),v=s.length;if(!(v<1||v>3)){var h=0,u=0,f=0;h=parseInt(s[0],10),v>1&&s[1]!==""&&(u=parseInt(s[1],10)),v>2&&(f=parseInt(s[2],10)),h!==0&&(h<0&&(h=St(r).vertices.length+1+h),u-=1,h-=1,f-=1,n.vertices.push({textureCoordsIndex:u,vertexIndex:h,vertexNormalIndex:f}))}}St(r).faces.push(n)}}function No(t,r){t.length>=2&&r.materialLibraries.push(t[1])}function Vo(t){t.length>=2&&(Ma=t[1])}var Yo=function(t,r){r===void 0&&(r=!0),Kn=r;var a={materials:{},materialLibraries:[],models:[]};Dt="",Ma="";for(var n=t.split(`
`),e=0;e<n.length;e++){var i=po(n[e]),s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"o":Go(s,a);break;case"g":Lo(s);break;case"v":So(s,a);break;case"vt":Fo(s,a);break;case"vn":Eo(s,a);break;case"f":Ao(s,a);break;case"mtllib":No(s,a);break;case"usemtl":Vo(s);break}}return a},Xo=Yo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Do=function(t,r,a){return t<<16|r<<8|a},qo=Do;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ko=qo,Zo=function(t){for(var r={},a=t.split(`
`),n="",e=0;e<a.length;e++){var i=a[e].trim();if(!(i.indexOf("#")===0||i==="")){var s=i.replace(/\s\s+/g," ").trim().split(" ");switch(s[0].toLowerCase()){case"newmtl":{n=s[1];break}case"kd":{var v=Math.floor(s[1]*255),h=s.length>=2?Math.floor(s[2]*255):v,u=s.length>=3?Math.floor(s[3]*255):v;r[n]=ko(v,h,u);break}}}}return r},jo=Zo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bo=function(t,r,a,n){var e,i;if(a===void 0&&n===void 0){var s=t.getInCenter();e=s.x,i=s.y}var v=Math.cos(r),h=Math.sin(r),u=t.vertex1,f=t.vertex2,o=t.vertex3,x=u.x-e,y=u.y-i;u.set(x*v-y*h+e,x*h+y*v+i),x=f.x-e,y=f.y-i,f.set(x*v-y*h+e,x*h+y*v+i),x=o.x-e,y=o.y-i,o.set(x*v-y*h+e,x*h+y*v+i)},Uo=Bo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qo={Face:$r,GenerateGridVerts:Co,GenerateObjVerts:To,GenerateVerts:Ro,ParseObj:Xo,ParseObjMaterial:jo,RotateFace:Uo,Vertex:gr},Wo=Qo;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ho=function(t){return t.setTo(Math.ceil(t.x),Math.ceil(t.y))},Ko=Ho;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jo=I,t1=function(t){return new Jo(t.x,t.y)},r1=t1;/**
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
 */var h1=I,u1=function(t,r){if(r===void 0&&(r=new h1),!Array.isArray(t))throw new Error("GetCentroid points argument must be an array");var a=t.length;if(a<1)throw new Error("GetCentroid points array must not be empty");if(a===1)r.x=t[0].x,r.y=t[0].y;else{for(var n=0;n<a;n++)r.x+=t[n].x,r.y+=t[n].y;r.x/=a,r.y/=a}return r},f1=u1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var o1=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},te=o1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var x1=function(t){return t.x*t.x+t.y*t.y},re=x1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y1=J,c1=function(t,r){r===void 0&&(r=new y1);for(var a=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=0;s<t.length;s++){var v=t[s];v.x>a&&(a=v.x),v.x<n&&(n=v.x),v.y>e&&(e=v.y),v.y<i&&(i=v.y)}return r.x=n,r.y=i,r.width=a-n,r.height=e-i,r},d1=c1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var l1=I,M1=function(t,r,a,n){return a===void 0&&(a=0),n===void 0&&(n=new l1),n.x=t.x+(r.x-t.x)*a,n.y=t.y+(r.y-t.y)*a,n},w1=M1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m1=function(t){return t.setTo(t.y,t.x)},$1=m1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _1=I,g1=function(t,r){return r===void 0&&(r=new _1),r.setTo(-t.x,-t.y)},C1=g1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var z1=I,P1=re,b1=function(t,r,a){a===void 0&&(a=new z1);var n=t.x*r.x+t.y*r.y,e=n/P1(r);return e!==0&&(a.x=e*r.x,a.y=e*r.y),a},T1=b1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O1=I,I1=function(t,r,a){a===void 0&&(a=new O1);var n=t.x*r.x+t.y*r.y;return n!==0&&(a.x=n*r.x,a.y=n*r.y),a},R1=I1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var p1=te,G1=function(t,r){if(t.x!==0||t.y!==0){var a=p1(t);t.x/=a,t.y/=a}return t.x*=r,t.y*=r,t},L1=G1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B=I;B.Ceil=Ko;B.Clone=r1;B.CopyFrom=n1;B.Equals=i1;B.Floor=v1;B.GetCentroid=f1;B.GetMagnitude=te;B.GetMagnitudeSq=re;B.GetRectangleFromPoints=d1;B.Interpolate=w1;B.Invert=$1;B.Negative=C1;B.Project=T1;B.ProjectUnit=R1;B.SetMagnitude=L1;var S1=B;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F1=function(t,r,a){for(var n=!1,e=-1,i=t.points.length-1;++e<t.points.length;i=e){var s=t.points[e].x,v=t.points[e].y,h=t.points[i].x,u=t.points[i].y;(v<=a&&a<u||u<=a&&a<v)&&r<(h-s)*(a-v)/(u-v)+s&&(n=!n)}return n},wa=F1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var E1=vt,A1=ht,N1=function(t){for(var r=t.points,a=0,n=0;n<r.length;n++){var e=r[n],i=r[(n+1)%r.length],s=new A1(e.x,e.y,i.x,i.y);a+=E1(s)}return a},ae=N1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V1=vt,Y1=ht,X1=ae,D1=function(t,r,a,n){n===void 0&&(n=[]);var e=t.points,i=X1(t);!r&&a>0&&(r=i/a);for(var s=0;s<r;s++)for(var v=i*(s/r),h=0,u=0;u<e.length;u++){var f=e[u],o=e[(u+1)%e.length],x=new Y1(f.x,f.y,o.x,o.y),y=V1(x);if(v<h||v>h+y){h+=y;continue}var c=x.getPoint((v-h)/y);n.push(c);break}return n},ne=D1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q1=D,k1=wa,Z1=ne,j1=st,B1=new q1({initialize:function(r){this.type=j1.POLYGON,this.area=0,this.points=[],r&&this.setTo(r)},contains:function(t,r){return k1(this,t,r)},setTo:function(t){if(this.area=0,this.points=[],typeof t=="string"&&(t=t.split(" ")),!Array.isArray(t))return this;for(var r,a=0;a<t.length;a++)r={x:0,y:0},typeof t[a]=="number"||typeof t[a]=="string"?(r.x=parseFloat(t[a]),r.y=parseFloat(t[a+1]),a++):Array.isArray(t[a])?(r.x=t[a][0],r.y=t[a][1]):(r.x=t[a].x,r.y=t[a].y),this.points.push(r);return this.calculateArea(),this},calculateArea:function(){if(this.points.length<3)return this.area=0,this.area;for(var t=0,r,a,n=0;n<this.points.length-1;n++)r=this.points[n],a=this.points[n+1],t+=(a.x-r.x)*(r.y+a.y);return r=this.points[0],a=this.points[this.points.length-1],t+=(r.x-a.x)*(a.y+r.y),this.area=-t*.5,this.area},getPoints:function(t,r,a){return Z1(this,t,r,a)}}),ee=B1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U1=ee,Q1=function(t){return new U1(t.points)},W1=Q1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H1=wa,K1=function(t,r){return H1(t,r.x,r.y)},J1=K1;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function ma(t,r,a){a=a||2;var n=r&&r.length,e=n?r[0]*a:t.length,i=ie(t,0,e,a,!0),s=[];if(!i||i.next===i.prev)return s;var v,h,u,f,o,x,y;if(n&&(i=e0(t,r,i,a)),t.length>80*a){v=u=t[0],h=f=t[1];for(var c=a;c<e;c+=a)o=t[c],x=t[c+1],o<v&&(v=o),x<h&&(h=x),o>u&&(u=o),x>f&&(f=x);y=Math.max(u-v,f-h),y=y!==0?32767/y:0}return Ft(i,s,a,v,h,y,0),s}function ie(t,r,a,n,e){var i,s;if(e===ta(t,r,a,n)>0)for(i=r;i<a;i+=n)s=Da(i,t[i],t[i+1],s);else for(i=a-n;i>=r;i-=n)s=Da(i,t[i],t[i+1],s);return s&&Cr(s,s.next)&&(At(s),s=s.next),s}function ot(t,r){if(!t)return t;r||(r=t);var a=t,n;do if(n=!1,!a.steiner&&(Cr(a,a.next)||V(a.prev,a,a.next)===0)){if(At(a),a=r=a.prev,a===a.next)break;n=!0}else a=a.next;while(n||a!==r);return r}function Ft(t,r,a,n,e,i,s){if(t){!s&&i&&u0(t,n,e,i);for(var v=t,h,u;t.prev!==t.next;){if(h=t.prev,u=t.next,i?r0(t,n,e,i):t0(t)){r.push(h.i/a|0),r.push(t.i/a|0),r.push(u.i/a|0),At(t),t=u.next,v=u.next;continue}if(t=u,t===v){s?s===1?(t=a0(ot(t),r,a),Ft(t,r,a,n,e,i,2)):s===2&&n0(t,r,a,n,e,i):Ft(ot(t),r,a,n,e,i,1);break}}}}function t0(t){var r=t.prev,a=t,n=t.next;if(V(r,a,n)>=0)return!1;for(var e=r.x,i=a.x,s=n.x,v=r.y,h=a.y,u=n.y,f=e<i?e<s?e:s:i<s?i:s,o=v<h?v<u?v:u:h<u?h:u,x=e>i?e>s?e:s:i>s?i:s,y=v>h?v>u?v:u:h>u?h:u,c=n.next;c!==r;){if(c.x>=f&&c.x<=x&&c.y>=o&&c.y<=y&&gt(e,v,i,h,s,u,c.x,c.y)&&V(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function r0(t,r,a,n){var e=t.prev,i=t,s=t.next;if(V(e,i,s)>=0)return!1;for(var v=e.x,h=i.x,u=s.x,f=e.y,o=i.y,x=s.y,y=v<h?v<u?v:u:h<u?h:u,c=f<o?f<x?f:x:o<x?o:x,d=v>h?v>u?v:u:h>u?h:u,l=f>o?f>x?f:x:o>x?o:x,w=Kr(y,c,r,a,n),m=Kr(d,l,r,a,n),M=t.prevZ,$=t.nextZ;M&&M.z>=w&&$&&$.z<=m;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==s&&gt(v,f,h,o,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0||(M=M.prevZ,$.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==s&&gt(v,f,h,o,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0))return!1;$=$.nextZ}for(;M&&M.z>=w;){if(M.x>=y&&M.x<=d&&M.y>=c&&M.y<=l&&M!==e&&M!==s&&gt(v,f,h,o,u,x,M.x,M.y)&&V(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;$&&$.z<=m;){if($.x>=y&&$.x<=d&&$.y>=c&&$.y<=l&&$!==e&&$!==s&&gt(v,f,h,o,u,x,$.x,$.y)&&V($.prev,$,$.next)>=0)return!1;$=$.nextZ}return!0}function a0(t,r,a){var n=t;do{var e=n.prev,i=n.next.next;!Cr(e,i)&&se(e,n,n.next,i)&&Et(e,i)&&Et(i,e)&&(r.push(e.i/a|0),r.push(n.i/a|0),r.push(i.i/a|0),At(n),At(n.next),n=t=i),n=n.next}while(n!==t);return ot(n)}function n0(t,r,a,n,e,i){var s=t;do{for(var v=s.next.next;v!==s.prev;){if(s.i!==v.i&&x0(s,v)){var h=ve(s,v);s=ot(s,s.next),h=ot(h,h.next),Ft(s,r,a,n,e,i,0),Ft(h,r,a,n,e,i,0);return}v=v.next}s=s.next}while(s!==t)}function e0(t,r,a,n){var e=[],i,s,v,h,u;for(i=0,s=r.length;i<s;i++)v=r[i]*n,h=i<s-1?r[i+1]*n:t.length,u=ie(t,v,h,n,!1),u===u.next&&(u.steiner=!0),e.push(o0(u));for(e.sort(i0),i=0;i<e.length;i++)a=s0(e[i],a);return a}function i0(t,r){return t.x-r.x}function s0(t,r){var a=v0(t,r);if(!a)return r;var n=ve(a,t);return ot(n,n.next),ot(a,a.next)}function v0(t,r){var a=r,n=t.x,e=t.y,i=-1/0,s;do{if(e<=a.y&&e>=a.next.y&&a.next.y!==a.y){var v=a.x+(e-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=n&&v>i&&(i=v,s=a.x<a.next.x?a:a.next,v===n))return s}a=a.next}while(a!==r);if(!s)return null;var h=s,u=s.x,f=s.y,o=1/0,x;a=s;do n>=a.x&&a.x>=u&&n!==a.x&&gt(e<f?n:i,e,u,f,e<f?i:n,e,a.x,a.y)&&(x=Math.abs(e-a.y)/(n-a.x),Et(a,t)&&(x<o||x===o&&(a.x>s.x||a.x===s.x&&h0(s,a)))&&(s=a,o=x)),a=a.next;while(a!==h);return s}function h0(t,r){return V(t.prev,t,r.prev)<0&&V(r.next,t,t.next)<0}function u0(t,r,a,n){var e=t;do e.z===0&&(e.z=Kr(e.x,e.y,r,a,n)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==t);e.prevZ.nextZ=null,e.prevZ=null,f0(e)}function f0(t){var r,a,n,e,i,s,v,h,u=1;do{for(a=t,t=null,i=null,s=0;a;){for(s++,n=a,v=0,r=0;r<u&&(v++,n=n.nextZ,!!n);r++);for(h=u;v>0||h>0&&n;)v!==0&&(h===0||!n||a.z<=n.z)?(e=a,a=a.nextZ,v--):(e=n,n=n.nextZ,h--),i?i.nextZ=e:t=e,e.prevZ=i,i=e;a=n}i.nextZ=null,u*=2}while(s>1);return t}function Kr(t,r,a,n,e){return t=(t-a)*e|0,r=(r-n)*e|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t|r<<1}function o0(t){var r=t,a=t;do(r.x<a.x||r.x===a.x&&r.y<a.y)&&(a=r),r=r.next;while(r!==t);return a}function gt(t,r,a,n,e,i,s,v){return(e-s)*(r-v)>=(t-s)*(i-v)&&(t-s)*(n-v)>=(a-s)*(r-v)&&(a-s)*(i-v)>=(e-s)*(n-v)}function x0(t,r){return t.next.i!==r.i&&t.prev.i!==r.i&&!y0(t,r)&&(Et(t,r)&&Et(r,t)&&c0(t,r)&&(V(t.prev,t,r.prev)||V(t,r.prev,r))||Cr(t,r)&&V(t.prev,t,t.next)>0&&V(r.prev,r,r.next)>0)}function V(t,r,a){return(r.y-t.y)*(a.x-r.x)-(r.x-t.x)*(a.y-r.y)}function Cr(t,r){return t.x===r.x&&t.y===r.y}function se(t,r,a,n){var e=xr(V(t,r,a)),i=xr(V(t,r,n)),s=xr(V(a,n,t)),v=xr(V(a,n,r));return!!(e!==i&&s!==v||e===0&&or(t,a,r)||i===0&&or(t,n,r)||s===0&&or(a,t,n)||v===0&&or(a,r,n))}function or(t,r,a){return r.x<=Math.max(t.x,a.x)&&r.x>=Math.min(t.x,a.x)&&r.y<=Math.max(t.y,a.y)&&r.y>=Math.min(t.y,a.y)}function xr(t){return t>0?1:t<0?-1:0}function y0(t,r){var a=t;do{if(a.i!==t.i&&a.next.i!==t.i&&a.i!==r.i&&a.next.i!==r.i&&se(a,a.next,t,r))return!0;a=a.next}while(a!==t);return!1}function Et(t,r){return V(t.prev,t,t.next)<0?V(t,r,t.next)>=0&&V(t,t.prev,r)>=0:V(t,r,t.prev)<0||V(t,t.next,r)<0}function c0(t,r){var a=t,n=!1,e=(t.x+r.x)/2,i=(t.y+r.y)/2;do a.y>i!=a.next.y>i&&a.next.y!==a.y&&e<(a.next.x-a.x)*(i-a.y)/(a.next.y-a.y)+a.x&&(n=!n),a=a.next;while(a!==t);return n}function ve(t,r){var a=new Jr(t.i,t.x,t.y),n=new Jr(r.i,r.x,r.y),e=t.next,i=r.prev;return t.next=r,r.prev=t,a.next=e,e.prev=a,n.next=a,a.prev=n,i.next=n,n.prev=i,n}function Da(t,r,a,n){var e=new Jr(t,r,a);return n?(e.next=n.next,e.prev=n,n.next.prev=e,n.next=e):(e.prev=e,e.next=e),e}function At(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Jr(t,r,a){this.i=t,this.x=r,this.y=a,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}ma.deviation=function(t,r,a,n){var e=r&&r.length,i=e?r[0]*a:t.length,s=Math.abs(ta(t,0,i,a));if(e)for(var v=0,h=r.length;v<h;v++){var u=r[v]*a,f=v<h-1?r[v+1]*a:t.length;s-=Math.abs(ta(t,u,f,a))}var o=0;for(v=0;v<n.length;v+=3){var x=n[v]*a,y=n[v+1]*a,c=n[v+2]*a;o+=Math.abs((t[x]-t[c])*(t[y+1]-t[x+1])-(t[x]-t[y])*(t[c+1]-t[x+1]))}return s===0&&o===0?0:Math.abs((o-s)/s)};function ta(t,r,a,n){for(var e=0,i=r,s=a-n;i<a;i+=n)e+=(t[s]-t[i])*(t[i+1]+t[s+1]),s=i;return e}ma.flatten=function(t){for(var r=t[0][0].length,a={vertices:[],holes:[],dimensions:r},n=0,e=0;e<t.length;e++){for(var i=0;i<t[e].length;i++)for(var s=0;s<r;s++)a.vertices.push(t[e][i][s]);e>0&&(n+=t[e-1].length,a.holes.push(n))}return a};var he=ma;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var d0=J,l0=function(t,r){r===void 0&&(r=new d0);for(var a=1/0,n=1/0,e=-a,i=-n,s,v=0;v<t.points.length;v++)s=t.points[v],a=Math.min(a,s.x),n=Math.min(n,s.y),e=Math.max(e,s.x),i=Math.max(i,s.y);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},M0=l0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var w0=function(t,r){r===void 0&&(r=[]);for(var a=0;a<t.points.length;a++)r.push(t.points[a].x),r.push(t.points[a].y);return r},m0=w0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $0=function(t){return t.points.reverse(),t},_0=$0;function g0(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n}function C0(t,r,a){var n=r.x,e=r.y,i=a.x-n,s=a.y-e;if(i!==0||s!==0){var v=((t.x-n)*i+(t.y-e)*s)/(i*i+s*s);v>1?(n=a.x,e=a.y):v>0&&(n+=i*v,e+=s*v)}return i=t.x-n,s=t.y-e,i*i+s*s}function z0(t,r){for(var a=t[0],n=[a],e,i=1,s=t.length;i<s;i++)e=t[i],g0(e,a)>r&&(n.push(e),a=e);return a!==e&&n.push(e),n}function ra(t,r,a,n,e){for(var i=n,s,v=r+1;v<a;v++){var h=C0(t[v],t[r],t[a]);h>i&&(s=v,i=h)}i>n&&(s-r>1&&ra(t,r,s,n,e),e.push(t[s]),a-s>1&&ra(t,s,a,n,e))}function P0(t,r){var a=t.length-1,n=[t[0]];return ra(t,0,a,r,n),n.push(t[a]),n}var b0=function(t,r,a){r===void 0&&(r=1),a===void 0&&(a=!1);var n=t.points;if(n.length>2){var e=r*r;a||(n=z0(n,e)),t.setTo(P0(n,e))}return t},T0=b0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Igor Ognichenko <ognichenko.igor@gmail.com>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qa=function(t,r){return t[0]=r[0],t[1]=r[1],t},O0=function(t){var r,a=[],n=t.points;for(r=0;r<n.length;r++)a.push([n[r].x,n[r].y]);var e=[];for(a.length>0&&e.push(qa([0,0],a[0])),r=0;r<a.length-1;r++){var i=a[r],s=a[r+1],v=i[0],h=i[1],u=s[0],f=s[1];e.push([.85*v+.15*u,.85*h+.15*f]),e.push([.15*v+.85*u,.15*h+.85*f])}return a.length>1&&e.push(qa([0,0],a[a.length-1])),t.setTo(e)},I0=O0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var R0=function(t,r,a){for(var n=t.points,e=0;e<n.length;e++)n[e].x+=r,n[e].y+=a;return t},p0=R0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H=ee;H.Clone=W1;H.Contains=wa;H.ContainsPoint=J1;H.Earcut=he;H.GetAABB=M0;H.GetNumberArray=m0;H.GetPoints=ne;H.Perimeter=ae;H.Reverse=_0;H.Simplify=T0;H.Smooth=I0;H.Translate=p0;var G0=H;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var L0=function(t){return t.width*t.height},S0=L0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t},E0=F0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var A0=function(t){return t.x=Math.ceil(t.x),t.y=Math.ceil(t.y),t.width=Math.ceil(t.width),t.height=Math.ceil(t.height),t},N0=A0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var V0=function(t,r,a){return t.x=r-t.width/2,t.y=a-t.height/2,t},ue=V0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Y0=J,X0=function(t){return new Y0(t.x,t.y,t.width,t.height)},D0=X0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var q0=cr,k0=function(t,r){return q0(t,r.x,r.y)},Z0=k0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var j0=function(t,r){return r.width*r.height>t.width*t.height?!1:r.x>t.x&&r.x<t.right&&r.right>t.x&&r.right<t.right&&r.y>t.y&&r.y<t.bottom&&r.bottom>t.y&&r.bottom<t.bottom},fe=j0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var B0=function(t,r){return r.setTo(t.x,t.y,t.width,t.height)},U0=B0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Q0=function(t,r){return t.x===r.x&&t.y===r.y&&t.width===r.width&&t.height===r.height},W0=Q0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H0=function(t){return t.height===0?NaN:t.width/t.height},$a=H0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ka=$a,K0=function(t,r){var a=ka(t);return a<ka(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},J0=K0;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Za=$a,tx=function(t,r){var a=Za(t);return a>Za(r)?t.setSize(r.height*a,r.height):t.setSize(r.width,r.width/a),t.setPosition(r.centerX-t.width/2,r.centerY-t.height/2)},rx=tx;/**
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
 */var sx=J,ja=Q,vx=function(t,r){if(r===void 0&&(r=new sx),t.length===0)return r;for(var a=Number.MAX_VALUE,n=Number.MAX_VALUE,e=ja.MIN_SAFE_INTEGER,i=ja.MIN_SAFE_INTEGER,s,v,h,u=0;u<t.length;u++)s=t[u],Array.isArray(s)?(v=s[0],h=s[1]):(v=s.x,h=s.y),a=Math.min(a,v),n=Math.min(n,h),e=Math.max(e,v),i=Math.max(i,h);return r.x=a,r.y=n,r.width=e-a,r.height=i-n,r},hx=vx;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ux=J,fx=function(t,r,a,n,e){return e===void 0&&(e=new ux),e.setTo(Math.min(t,a),Math.min(r,n),Math.abs(t-a),Math.abs(r-n))},ox=fx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xx=I,yx=function(t,r){return r===void 0&&(r=new xx),r.x=t.centerX,r.y=t.centerY,r},cx=yx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dx=I,lx=function(t,r){return r===void 0&&(r=new dx),r.x=t.width,r.y=t.height,r},Mx=lx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wx=ue,mx=function(t,r,a){var n=t.centerX,e=t.centerY;return t.setSize(t.width+r*2,t.height+a*2),wx(t,n,e)},$x=mx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _x=J,gx=Mr,Cx=function(t,r,a){return a===void 0&&(a=new _x),gx(t,r)?(a.x=Math.max(t.x,r.x),a.y=Math.max(t.y,r.y),a.width=Math.min(t.right,r.right)-a.x,a.height=Math.min(t.bottom,r.bottom)-a.y):a.setEmpty(),a},zx=Cx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ba=dr,Px=I,bx=function(t,r,a,n){if(n===void 0&&(n=[]),!r&&!a)return n;r?a=Math.round(Ba(t)/r):r=Ba(t)/a;for(var e=t.x,i=t.y,s=0,v=0;v<a;v++)switch(n.push(new Px(e,i)),s){case 0:e+=r,e>=t.right&&(s=1,i+=e-t.right,e=t.right);break;case 1:i+=r,i>=t.bottom&&(s=2,e-=i-t.bottom,i=t.bottom);break;case 2:e-=r,e<=t.left&&(s=3,i-=t.left-e,e=t.left);break;case 3:i-=r,i<=t.top&&(s=0,i=t.top);break}return n},Tx=bx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ox=function(t,r){for(var a=t.x,n=t.right,e=t.y,i=t.bottom,s=0;s<r.length;s++)a=Math.min(a,r[s].x),n=Math.max(n,r[s].x),e=Math.min(e,r[s].y),i=Math.max(i,r[s].y);return t.x=a,t.y=e,t.width=n-a,t.height=i-e,t},Ix=Ox;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rx=function(t,r){var a=Math.min(t.x,r.x),n=Math.max(t.right,r.right);t.x=a,t.width=n-a;var e=Math.min(t.y,r.y),i=Math.max(t.bottom,r.bottom);return t.y=e,t.height=i-e,t},px=Rx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Gx=function(t,r,a){var n=Math.min(t.x,r),e=Math.max(t.right,r);t.x=n,t.width=e-n;var i=Math.min(t.y,a),s=Math.max(t.bottom,a);return t.y=i,t.height=s-i,t},Lx=Gx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sx=function(t,r,a){return t.x+=r,t.y+=a,t},Fx=Sx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ex=function(t,r){return t.x+=r.x,t.y+=r.y,t},Ax=Ex;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nx=function(t,r){return t.x<r.right&&t.right>r.x&&t.y<r.bottom&&t.bottom>r.y},Vx=Nx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Yx=Q,Xx=function(t){return t*Yx.DEG_TO_RAD},oe=Xx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dx=I,qx=oe,kx=function(t,r,a){a===void 0&&(a=new Dx),r=qx(r);var n=Math.sin(r),e=Math.cos(r),i=e>0?t.width/2:t.width/-2,s=n>0?t.height/2:t.height/-2;return Math.abs(i*n)<Math.abs(s*e)?s=i*n/e:i=s*e/n,a.x=i+t.centerX,a.y=s+t.centerY,a},Zx=kx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jx=function(t,r){return Math.floor(Math.random()*(r-t+1)+t)},xe=jx;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bx=xe,Ux=fe,Qx=I,Wx=function(t,r,a){if(a===void 0&&(a=new Qx),Ux(t,r))switch(Bx(0,3)){case 0:a.x=t.x+Math.random()*(r.right-t.x),a.y=t.y+Math.random()*(r.top-t.y);break;case 1:a.x=r.x+Math.random()*(t.right-r.x),a.y=r.bottom+Math.random()*(t.bottom-r.bottom);break;case 2:a.x=t.x+Math.random()*(r.x-t.x),a.y=r.y+Math.random()*(t.bottom-r.y);break;case 3:a.x=r.right+Math.random()*(t.right-r.right),a.y=t.y+Math.random()*(r.bottom-t.y);break}return a},Hx=Wx;/**
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
 */var ay=J,ny=function(t,r,a){a===void 0&&(a=new ay);var n=Math.min(t.x,r.x),e=Math.min(t.y,r.y),i=Math.max(t.right,r.right)-n,s=Math.max(t.bottom,r.bottom)-e;return a.setTo(n,e,i,s)},ey=ny;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O=J;O.Area=S0;O.Ceil=E0;O.CeilAll=N0;O.CenterOn=ue;O.Clone=D0;O.Contains=cr;O.ContainsPoint=Z0;O.ContainsRect=fe;O.CopyFrom=U0;O.Decompose=On;O.Equals=W0;O.FitInside=J0;O.FitOutside=rx;O.Floor=nx;O.FloorAll=ix;O.FromPoints=hx;O.FromXY=ox;O.GetAspectRatio=$a;O.GetCenter=cx;O.GetPoint=ha;O.GetPoints=un;O.GetSize=Mx;O.Inflate=$x;O.Intersection=zx;O.MarchingAnts=Tx;O.MergePoints=Ix;O.MergeRect=px;O.MergeXY=Lx;O.Offset=Fx;O.OffsetPoint=Ax;O.Overlaps=Vx;O.Perimeter=dr;O.PerimeterPoint=Zx;O.Random=cn;O.RandomOutside=Hx;O.SameDimensions=Jx;O.Scale=ry;O.Union=ey;var iy=O;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sy=I,Dr=vt,vy=function(t,r,a){a===void 0&&(a=new sy);var n=t.getLineA(),e=t.getLineB(),i=t.getLineC();if(r<=0||r>=1)return a.x=n.x1,a.y=n.y1,a;var s=Dr(n),v=Dr(e),h=Dr(i),u=s+v+h,f=u*r,o=0;return f<s?(o=f/s,a.x=n.x1+(n.x2-n.x1)*o,a.y=n.y1+(n.y2-n.y1)*o):f>s+v?(f-=s+v,o=f/h,a.x=i.x1+(i.x2-i.x1)*o,a.y=i.y1+(i.y2-i.y1)*o):(f-=s,o=f/v,a.x=e.x1+(e.x2-e.x1)*o,a.y=e.y1+(e.y2-e.y1)*o),a},ye=vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qr=vt,hy=I,uy=function(t,r,a,n){n===void 0&&(n=[]);var e=t.getLineA(),i=t.getLineB(),s=t.getLineC(),v=qr(e),h=qr(i),u=qr(s),f=v+h+u;!r&&a>0&&(r=f/a);for(var o=0;o<r;o++){var x=f*(o/r),y=0,c=new hy;x<v?(y=x/v,c.x=e.x1+(e.x2-e.x1)*y,c.y=e.y1+(e.y2-e.y1)*y):x>v+h?(x-=v+h,y=x/u,c.x=s.x1+(s.x2-s.x1)*y,c.y=s.y1+(s.y2-s.y1)*y):(x-=v,y=x/h,c.x=i.x1+(i.x2-i.x1)*y,c.y=i.y1+(i.y2-i.y1)*y),n.push(c)}return n},ce=uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fy=I,oy=function(t,r){r===void 0&&(r=new fy);var a=t.x2-t.x1,n=t.y2-t.y1,e=t.x3-t.x1,i=t.y3-t.y1,s=Math.random(),v=Math.random();return s+v>=1&&(s=1-s,v=1-v),r.x=t.x1+(a*s+e*v),r.y=t.y1+(n*s+i*v),r},de=oy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var xy=D,yy=wr,cy=ye,dy=ce,ly=st,kr=ht,My=de,wy=new xy({initialize:function(r,a,n,e,i,s){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=0),this.type=ly.TRIANGLE,this.x1=r,this.y1=a,this.x2=n,this.y2=e,this.x3=i,this.y3=s},contains:function(t,r){return yy(this,t,r)},getPoint:function(t,r){return cy(this,t,r)},getPoints:function(t,r,a){return dy(this,t,r,a)},getRandomPoint:function(t){return My(this,t)},setTo:function(t,r,a,n,e,i){return t===void 0&&(t=0),r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x1=t,this.y1=r,this.x2=a,this.y2=n,this.x3=e,this.y3=i,this},getLineA:function(t){return t===void 0&&(t=new kr),t.setTo(this.x1,this.y1,this.x2,this.y2),t},getLineB:function(t){return t===void 0&&(t=new kr),t.setTo(this.x2,this.y2,this.x3,this.y3),t},getLineC:function(t){return t===void 0&&(t=new kr),t.setTo(this.x3,this.y3,this.x1,this.y1),t},left:{get:function(){return Math.min(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1<=this.x2&&this.x1<=this.x3?r=this.x1-t:this.x2<=this.x1&&this.x2<=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},right:{get:function(){return Math.max(this.x1,this.x2,this.x3)},set:function(t){var r=0;this.x1>=this.x2&&this.x1>=this.x3?r=this.x1-t:this.x2>=this.x1&&this.x2>=this.x3?r=this.x2-t:r=this.x3-t,this.x1-=r,this.x2-=r,this.x3-=r}},top:{get:function(){return Math.min(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1<=this.y2&&this.y1<=this.y3?r=this.y1-t:this.y2<=this.y1&&this.y2<=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}},bottom:{get:function(){return Math.max(this.y1,this.y2,this.y3)},set:function(t){var r=0;this.y1>=this.y2&&this.y1>=this.y3?r=this.y1-t:this.y2>=this.y1&&this.y2>=this.y3?r=this.y2-t:r=this.y3-t,this.y1-=r,this.y2-=r,this.y3-=r}}}),qt=wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var my=function(t){var r=t.x1,a=t.y1,n=t.x2,e=t.y2,i=t.x3,s=t.y3;return Math.abs(((i-r)*(e-a)-(n-r)*(s-a))/2)},$y=my;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _y=qt,gy=function(t,r,a){var n=a*(Math.sqrt(3)/2),e=t,i=r,s=t+a/2,v=r+n,h=t-a/2,u=r+n;return new _y(e,i,s,v,h,u)},Cy=gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var zy=he,Py=qt,by=function(t,r,a,n,e){r===void 0&&(r=null),a===void 0&&(a=1),n===void 0&&(n=1),e===void 0&&(e=[]);for(var i=zy(t,r),s,v,h,u,f,o,x,y,c,d=0;d<i.length;d+=3)s=i[d],v=i[d+1],h=i[d+2],u=t[s*2]*a,f=t[s*2+1]*n,o=t[v*2]*a,x=t[v*2+1]*n,y=t[h*2]*a,c=t[h*2+1]*n,e.push(new Py(u,f,o,x,y,c));return e},Ty=by;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Oy=qt,Iy=function(t,r,a,n){n===void 0&&(n=a);var e=t,i=r,s=t,v=r-n,h=t+a,u=r;return new Oy(e,i,s,v,h,u)},Ry=Iy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var py=I,Gy=function(t,r){return r===void 0&&(r=new py),r.x=(t.x1+t.x2+t.x3)/3,r.y=(t.y1+t.y2+t.y3)/3,r},le=Gy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ly=function(t,r,a){return t.x1+=r,t.y1+=a,t.x2+=r,t.y2+=a,t.x3+=r,t.y3+=a,t},Me=Ly;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Sy=le,Fy=Me,Ey=function(t,r,a,n){n===void 0&&(n=Sy);var e=n(t),i=r-e.x,s=a-e.y;return Fy(t,i,s)},Ay=Ey;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ny=Ct;function Zr(t,r,a,n){return t*n-r*a}var Vy=function(t,r){r===void 0&&(r=new Ny);var a=t.x3,n=t.y3,e=t.x1-a,i=t.y1-n,s=t.x2-a,v=t.y2-n,h=2*Zr(e,i,s,v),u=Zr(i,e*e+i*i,v,s*s+v*v),f=Zr(e,e*e+i*i,s,s*s+v*v);return r.x=a-u/h,r.y=n+f/h,r},Yy=Vy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Xy=va,Dy=function(t,r){r===void 0&&(r=new Xy);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=t.x3,v=t.y3,h=e-a,u=i-n,f=s-a,o=v-n,x=h*(a+e)+u*(n+i),y=f*(a+s)+o*(n+v),c=2*(h*(v-i)-u*(s-e)),d,l;if(Math.abs(c)<1e-6){var w=Math.min(a,e,s),m=Math.min(n,i,v);d=(Math.max(a,e,s)-w)*.5,l=(Math.max(n,i,v)-m)*.5,r.x=w+d,r.y=m+l,r.radius=Math.sqrt(d*d+l*l)}else r.x=(o*x-u*y)/c,r.y=(h*y-f*x)/c,d=r.x-a,l=r.y-n,r.radius=Math.sqrt(d*d+l*l);return r},qy=Dy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ky=qt,Zy=function(t){return new ky(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},jy=Zy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var By=wr,Uy=function(t,r){return By(t,r.x,r.y)},Qy=Uy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wy=function(t,r){return r.setTo(t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)},Hy=Wy;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ky=function(t,r){return t.x1===r.x1&&t.y1===r.y1&&t.x2===r.x2&&t.y2===r.y2&&t.x3===r.x3&&t.y3===r.y3},Jy=Ky;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var t2=I;function jr(t,r,a,n){var e=t-a,i=r-n,s=e*e+i*i;return Math.sqrt(s)}var r2=function(t,r){r===void 0&&(r=new t2);var a=t.x1,n=t.y1,e=t.x2,i=t.y2,s=t.x3,v=t.y3,h=jr(s,v,e,i),u=jr(a,n,s,v),f=jr(e,i,a,n),o=h+u+f;return r.x=(a*h+e*u+s*f)/o,r.y=(n*h+i*u+v*f)/o,r},we=r2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Br=vt,a2=function(t){var r=t.getLineA(),a=t.getLineB(),n=t.getLineC();return Br(r)+Br(a)+Br(n)},n2=a2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var e2=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x1-r,v=t.y1-a;return t.x1=s*e-v*i+r,t.y1=s*i+v*e+a,s=t.x2-r,v=t.y2-a,t.x2=s*e-v*i+r,t.y2=s*i+v*e+a,s=t.x3-r,v=t.y3-a,t.x3=s*e-v*i+r,t.y3=s*i+v*e+a,t},_a=e2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var i2=_a,s2=we,v2=function(t,r){var a=s2(t);return i2(t,a.x,a.y,r)},h2=v2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var u2=_a,f2=function(t,r,a){return u2(t,r.x,r.y,a)},o2=f2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var N=qt;N.Area=$y;N.BuildEquilateral=Cy;N.BuildFromPolygon=Ty;N.BuildRight=Ry;N.CenterOn=Ay;N.Centroid=le;N.CircumCenter=Yy;N.CircumCircle=qy;N.Clone=jy;N.Contains=wr;N.ContainsArray=ca;N.ContainsPoint=Qy;N.CopyFrom=Hy;N.Decompose=Ln;N.Equals=Jy;N.GetPoint=ye;N.GetPoints=ce;N.InCenter=we;N.Perimeter=n2;N.Offset=Me;N.Random=de;N.Rotate=h2;N.RotateAroundPoint=o2;N.RotateAroundXY=_a;var x2=N;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var y2=st,c2=an,aa={Circle:ms,Ellipse:fv,Intersects:Ih,Line:ho,Mesh:Wo,Point:S1,Polygon:G0,Rectangle:iy,Triangle:x2};aa=c2(!1,aa,y2);var d2=aa;const l2=tn(d2);/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var M2=function(t,r,a,n){return Math.atan2(n-r,a-t)},w2=M2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var m2=function(t,r){return Math.atan2(r.y-t.y,r.x-t.x)},$2=m2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _2=function(t,r){return Math.atan2(r.x-t.x,r.y-t.y)},g2=_2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var C2=function(t,r,a,n){return Math.atan2(a-t,n-r)},z2=C2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Lt=Q,P2=function(t){return t>Math.PI&&(t-=Lt.PI2),Math.abs(((t+Lt.TAU)%Lt.PI2-Lt.PI2)%Lt.PI2)},b2=P2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var T2=function(t){return t=t%(2*Math.PI),t>=0?t:t+2*Math.PI},me=T2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var O2=function(t,r){return Math.random()*(r-t)+t},ga=O2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var I2=ga,R2=function(){return I2(-Math.PI,Math.PI)},p2=R2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       @samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var G2=ga,L2=function(){return G2(-180,180)},S2=L2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var F2=me,E2=function(t){return F2(t+Math.PI)},A2=E2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ur=Q,N2=function(t,r,a){return a===void 0&&(a=.05),t===r||(Math.abs(r-t)<=a||Math.abs(r-t)>=Ur.PI2-a?t=r:(Math.abs(r-t)>Math.PI&&(r<t?r+=Ur.PI2:r-=Ur.PI2),r>t?t+=a:r<t&&(t-=a))),t},V2=N2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Y2=function(t,r){var a=r-t;if(a===0)return 0;var n=Math.floor((a- -180)/360);return a-n*360},X2=Y2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var D2=mr,q2=function(t){return D2(t,-Math.PI,Math.PI)},k2=q2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Z2=mr,j2=function(t){return Z2(t,-180,180)},B2=j2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var U2={Between:w2,BetweenPoints:$2,BetweenPointsY:g2,BetweenY:z2,CounterClockwise:b2,Normalize:me,Random:p2,RandomDegrees:S2,Reverse:A2,RotateTo:V2,ShortestBetween:X2,Wrap:k2,WrapDegrees:B2};/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Q2=function(t,r){var a=t.x-r.x,n=t.y-r.y;return a*a+n*n},W2=Q2;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var H2=function(t,r,a,n){return Math.max(Math.abs(t-a),Math.abs(r-n))},K2=H2;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var J2=function(t,r,a,n,e){return e===void 0&&(e=2),Math.sqrt(Math.pow(a-t,e)+Math.pow(n-r,e))},tc=J2;/**
 * @author       samme
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var rc=function(t,r,a,n){return Math.abs(t-a)+Math.abs(r-n)},ac=rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var nc=function(t,r,a,n){var e=t-a,i=r-n;return e*e+i*i},ec=nc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ic={Between:$n,BetweenPoints:En,BetweenPointsSquared:W2,Chebyshev:K2,Power:tc,Snake:ac,Squared:ec};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var sc={Back:An,Bounce:Nn,Circular:Vn,Cubic:Yn,Elastic:Xn,Expo:Dn,Linear:qn,Quadratic:kn,Quartic:Zn,Quintic:jn,Sine:Bn,Stepped:Un};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var vc=function(t,r){return r===void 0&&(r=1e-4),Math.ceil(t-r)},hc=vc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var uc=function(t,r){return r===void 0&&(r=1e-4),Math.floor(t+r)},fc=uc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var oc=function(t,r,a){return a===void 0&&(a=1e-4),t>r-a},xc=oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yc=function(t,r,a){return a===void 0&&(a=1e-4),t<r+a},cc=yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var dc={Ceil:hc,Equal:yn,Floor:fc,GreaterThan:xc,LessThan:cc};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var lc=function(t){if(t===0)return 1;for(var r=t;--t;)r*=t;return r},$e=lc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qr=$e,Mc=function(t,r){return Qr(t)/Qr(r)/Qr(t-r)},_e=Mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var wc=_e,mc=function(t,r){for(var a=0,n=t.length-1,e=0;e<=n;e++)a+=Math.pow(1-r,n-e)*Math.pow(r,e)*t[e]*wc(n,e);return a},$c=mc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var _c=function(t,r,a,n,e){var i=(n-r)*.5,s=(e-a)*.5,v=t*t,h=t*v;return(2*a-2*n+i+s)*h+(-3*a+3*n-2*i-s)*v+i*t+a},ge=_c;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var yr=ge,gc=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return t[0]===t[a]?(r<0&&(e=Math.floor(n=a*(1+r))),yr(n-e,t[(e-1+a)%a],t[e],t[(e+1)%a],t[(e+2)%a])):r<0?t[0]-(yr(-n,t[0],t[0],t[1],t[1])-t[0]):r>1?t[a]-(yr(n-a,t[a],t[a],t[a-1],t[a-1])-t[a]):yr(n-e,t[e?e-1:0],t[e],t[a<e+1?a:e+1],t[a<e+2?a:e+2])},Cc=gc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function zc(t,r){var a=1-t;return a*a*a*r}function Pc(t,r){var a=1-t;return 3*a*a*t*r}function bc(t,r){return 3*(1-t)*t*t*r}function Tc(t,r){return t*t*t*r}var Oc=function(t,r,a,n,e){return zc(t,r)+Pc(t,a)+bc(t,n)+Tc(t,e)},Ic=Oc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Rc=function(t,r,a){return(r-t)*a+t},Ce=Rc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wr=Ce,pc=function(t,r){var a=t.length-1,n=a*r,e=Math.floor(n);return r<0?Wr(t[0],t[1],n):r>1?Wr(t[a],t[a-1],a-n):Wr(t[e],t[e+1>a?a:e+1],n-e)},Gc=pc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */function Lc(t,r){var a=1-t;return a*a*r}function Sc(t,r){return 2*(1-t)*t*r}function Fc(t,r){return t*t*r}var Ec=function(t,r,a,n){return Lc(t,r)+Sc(t,a)+Fc(t,n)},Ac=Ec;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Nc=function(t,r,a){return t<=r?0:t>=a?1:(t=(t-r)/(a-r),t*t*(3-2*t))},ze=Nc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vc=ze,Yc=function(t,r,a){return r+(a-r)*Vc(t,0,1)},Xc=Yc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dc=function(t,r,a){return t=Math.max(0,Math.min(1,(t-r)/(a-r))),t*t*t*(t*(t*6-15)+10)},Pe=Dc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var qc=Pe,kc=function(t,r,a){return r+(a-r)*qc(t,0,1)},Zc=kc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jc={Bezier:$c,CatmullRom:Cc,CubicBezier:Ic,Linear:Gc,QuadraticBezier:Ac,SmoothStep:Xc,SmootherStep:Zc};/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Bc=function(t){var r=Math.log(t)/.6931471805599453;return 1<<Math.ceil(r)},Uc=Bc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Qc=function(t,r){return t>0&&(t&t-1)===0&&r>0&&(r&r-1)===0},Wc=Qc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Hc=function(t){return t>0&&(t&t-1)===0},Kc=Hc;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Jc={GetNext:Uc,IsSize:Wc,IsValue:Kc};/**
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
 */var vd=D,hd=new vd({initialize:function(r){r===void 0&&(r=[(Date.now()*Math.random()).toString()]),this.c=1,this.s0=0,this.s1=0,this.s2=0,this.n=0,this.signs=[-1,1],r&&this.init(r)},rnd:function(){var t=2091639*this.s0+this.c*23283064365386963e-26;return this.c=t|0,this.s0=this.s1,this.s1=this.s2,this.s2=t-this.c,this.s2},hash:function(t){var r,a=this.n;t=t.toString();for(var n=0;n<t.length;n++)a+=t.charCodeAt(n),r=.02519603282416938*a,a=r>>>0,r-=a,r*=a,a=r>>>0,r-=a,a+=r*4294967296;return this.n=a,(a>>>0)*23283064365386963e-26},init:function(t){typeof t=="string"?this.state(t):this.sow(t)},sow:function(t){if(this.n=4022871197,this.s0=this.hash(" "),this.s1=this.hash(" "),this.s2=this.hash(" "),this.c=1,!!t)for(var r=0;r<t.length&&t[r]!=null;r++){var a=t[r];this.s0-=this.hash(a),this.s0+=~~(this.s0<0),this.s1-=this.hash(a),this.s1+=~~(this.s1<0),this.s2-=this.hash(a),this.s2+=~~(this.s2<0)}},integer:function(){return this.rnd()*4294967296},frac:function(){return this.rnd()+(this.rnd()*2097152|0)*11102230246251565e-32},real:function(){return this.integer()+this.frac()},integerInRange:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},between:function(t,r){return Math.floor(this.realInRange(0,r-t+1)+t)},realInRange:function(t,r){return this.frac()*(r-t)+t},normal:function(){return 1-2*this.frac()},uuid:function(){var t="",r="";for(r=t="";t++<36;r+=~t%5|t*3&4?(t^15?8^this.frac()*(t^20?16:4):4).toString(16):"-");return r},pick:function(t){return t[this.integerInRange(0,t.length-1)]},sign:function(){return this.pick(this.signs)},weightedPick:function(t){return t[~~(Math.pow(this.frac(),2)*(t.length-.5)+.5)]},timestamp:function(t,r){return this.realInRange(t||9466848e5,r||1577862e6)},angle:function(){return this.integerInRange(-180,180)},rotation:function(){return this.realInRange(-3.1415926,3.1415926)},state:function(t){return typeof t=="string"&&t.match(/^!rnd/)&&(t=t.split(","),this.c=parseFloat(t[1]),this.s0=parseFloat(t[2]),this.s1=parseFloat(t[3]),this.s2=parseFloat(t[4])),["!rnd",this.c,this.s0,this.s1,this.s2].join(",")},shuffle:function(t){for(var r=t.length-1,a=r;a>0;a--){var n=Math.floor(this.frac()*(a+1)),e=t[n];t[n]=t[a],t[a]=e}return t}}),ud=hd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var fd=function(t){for(var r=0,a=0;a<t.length;a++)r+=+t[a];return r/t.length},od=fd;/**
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
 */var ld=function(){},be=ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var $t=sa,Md=D,wd=Xt,md=be,Ua=new wd,Ca=new Md({initialize:function t(r,a,n,e){r===void 0&&(r=0),a===void 0&&(a=0),n===void 0&&(n=0),e===void 0&&(e=t.DefaultOrder),this._x=r,this._y=a,this._z=n,this._order=e,this.onChangeCallback=md},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},order:{get:function(){return this._order},set:function(t){this._order=t,this.onChangeCallback(this)}},set:function(t,r,a,n){return n===void 0&&(n=this._order),this._x=t,this._y=r,this._z=a,this._order=n,this.onChangeCallback(this),this},copy:function(t){return this.set(t.x,t.y,t.z,t.order)},setFromQuaternion:function(t,r,a){return r===void 0&&(r=this._order),a===void 0&&(a=!1),Ua.fromQuat(t),this.setFromRotationMatrix(Ua,r,a)},setFromRotationMatrix:function(t,r,a){r===void 0&&(r=this._order),a===void 0&&(a=!1);var n=t.val,e=n[0],i=n[4],s=n[8],v=n[1],h=n[5],u=n[9],f=n[2],o=n[6],x=n[10],y=0,c=0,d=0,l=.99999;switch(r){case"XYZ":{c=Math.asin($t(s,-1,1)),Math.abs(s)<l?(y=Math.atan2(-u,x),d=Math.atan2(-i,e)):y=Math.atan2(o,h);break}case"YXZ":{y=Math.asin(-$t(u,-1,1)),Math.abs(u)<l?(c=Math.atan2(s,x),d=Math.atan2(v,h)):c=Math.atan2(-f,e);break}case"ZXY":{y=Math.asin($t(o,-1,1)),Math.abs(o)<l?(c=Math.atan2(-f,x),d=Math.atan2(-i,h)):d=Math.atan2(v,e);break}case"ZYX":{c=Math.asin(-$t(f,-1,1)),Math.abs(f)<l?(y=Math.atan2(o,x),d=Math.atan2(v,e)):d=Math.atan2(-i,h);break}case"YZX":{d=Math.asin($t(v,-1,1)),Math.abs(v)<l?(y=Math.atan2(-u,h),c=Math.atan2(-f,e)):c=Math.atan2(s,x);break}case"XZY":{d=Math.asin(-$t(i,-1,1)),Math.abs(i)<l?(y=Math.atan2(o,h),c=Math.atan2(s,e)):y=Math.atan2(-u,x);break}}return this._x=y,this._y=c,this._z=d,this._order=r,a&&this.onChangeCallback(this),this}});Ca.RotationOrders=["XYZ","YXZ","ZXY","ZYX","YZX","XZY"];Ca.DefaultOrder="XYZ";var $d=Ca;/**
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
 */var Id=function(t,r,a){return a===void 0&&(a=0),t.clone().lerp(r,a)},Rd=Id;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var pd=function(t,r,a){return Math.min(t+r,a)},Gd=pd;/**
 * @author       Vladislav Forsh <vlad@robowhale.com>
 * @copyright    2021 RoboWhale
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ld=function(t){var r=t.length;if(r===0)return 0;t.sort(function(n,e){return n-e});var a=Math.floor(r/2);return r%2===0?(t[a]+t[a-1])/2:t[a]},Sd=Ld;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Fd=function(t,r,a){return Math.max(t-r,a)},Ed=Fd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ad=function(t,r,a,n){a===void 0&&(a=r+1);var e=(t-r)/(a-r);return e>1?n!==void 0?(e=(n-t)/(n-a),e<0&&(e=0)):e=1:e<0&&(e=0),e},Nd=Ad;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Vd=Q,Yd=function(t){return t*Vd.RAD_TO_DEG},Xd=Yd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Dd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI;return t.x=Math.cos(a)*r,t.y=Math.sin(a)*r,t},qd=Dd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var kd=function(t,r){r===void 0&&(r=1);var a=Math.random()*2*Math.PI,n=Math.random()*2-1,e=Math.sqrt(1-n*n)*r;return t.x=Math.cos(a)*e,t.y=Math.sin(a)*e,t.z=n*r,t},Zd=kd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var jd=function(t,r){return r===void 0&&(r=1),t.x=(Math.random()*2-1)*r,t.y=(Math.random()*2-1)*r,t.z=(Math.random()*2-1)*r,t.w=(Math.random()*2-1)*r,t},Bd=jd;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ud=function(t,r){var a=t.x,n=t.y;return t.x=a*Math.cos(r)-n*Math.sin(r),t.y=a*Math.sin(r)+n*Math.cos(r),t},Qd=Ud;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Wd=function(t,r,a,n){var e=Math.cos(n),i=Math.sin(n),s=t.x-r,v=t.y-a;return t.x=s*e-v*i+r,t.y=s*i+v*e+a,t},Hd=Wd;/**
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
 */var hl=Ct,ul=function(t,r,a,n){n===void 0&&(n=new hl);var e=0,i=0,s=r*a;return t>0&&t<=s&&(t>r-1?(i=Math.floor(t/r),e=t-i*r):e=t),n.set(e,i)},fl=ul;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ol=Ct,xl=function(t,r,a,n,e,i,s,v){v===void 0&&(v=new ol);var h=Math.sin(e),u=Math.cos(e),f=u*i,o=h*i,x=-h*s,y=u*s,c=1/(f*y+x*-o);return v.x=y*c*t+-x*c*r+(n*x-a*y)*c,v.y=f*c*r+-o*c*t+(-n*f+a*o)*c,v},yl=xl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var cl=function(t,r,a){return Math.abs(t-r)<=a},dl=cl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var ll=D,Te=new ll({initialize:function(r){this.val=new Float32Array(9),r?this.copy(r):this.identity()},clone:function(){return new Te(this)},set:function(t){return this.copy(t)},copy:function(t){var r=this.val,a=t.val;return r[0]=a[0],r[1]=a[1],r[2]=a[2],r[3]=a[3],r[4]=a[4],r[5]=a[5],r[6]=a[6],r[7]=a[7],r[8]=a[8],this},fromMat4:function(t){var r=t.val,a=this.val;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[4],a[4]=r[5],a[5]=r[6],a[6]=r[8],a[7]=r[9],a[8]=r[10],this},fromArray:function(t){var r=this.val;return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],this},identity:function(){var t=this.val;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,this},transpose:function(){var t=this.val,r=t[1],a=t[2],n=t[5];return t[1]=t[3],t[2]=t[6],t[3]=r,t[5]=t[7],t[6]=a,t[7]=n,this},invert:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8],f=u*i-s*h,o=-u*e+s*v,x=h*e-i*v,y=r*f+a*o+n*x;return y?(y=1/y,t[0]=f*y,t[1]=(-u*a+n*h)*y,t[2]=(s*a-n*i)*y,t[3]=o*y,t[4]=(u*r-n*v)*y,t[5]=(-s*r+n*e)*y,t[6]=x*y,t[7]=(-h*r+a*v)*y,t[8]=(i*r-a*e)*y,this):null},adjoint:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8];return t[0]=i*u-s*h,t[1]=n*h-a*u,t[2]=a*s-n*i,t[3]=s*v-e*u,t[4]=r*u-n*v,t[5]=n*e-r*s,t[6]=e*h-i*v,t[7]=a*v-r*h,t[8]=r*i-a*e,this},determinant:function(){var t=this.val,r=t[0],a=t[1],n=t[2],e=t[3],i=t[4],s=t[5],v=t[6],h=t[7],u=t[8];return r*(u*i-s*h)+a*(-u*e+s*v)+n*(h*e-i*v)},multiply:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=r[6],u=r[7],f=r[8],o=t.val,x=o[0],y=o[1],c=o[2],d=o[3],l=o[4],w=o[5],m=o[6],M=o[7],$=o[8];return r[0]=x*a+y*i+c*h,r[1]=x*n+y*s+c*u,r[2]=x*e+y*v+c*f,r[3]=d*a+l*i+w*h,r[4]=d*n+l*s+w*u,r[5]=d*e+l*v+w*f,r[6]=m*a+M*i+$*h,r[7]=m*n+M*s+$*u,r[8]=m*e+M*v+$*f,this},translate:function(t){var r=this.val,a=t.x,n=t.y;return r[6]=a*r[0]+n*r[3]+r[6],r[7]=a*r[1]+n*r[4]+r[7],r[8]=a*r[2]+n*r[5]+r[8],this},rotate:function(t){var r=this.val,a=r[0],n=r[1],e=r[2],i=r[3],s=r[4],v=r[5],h=Math.sin(t),u=Math.cos(t);return r[0]=u*a+h*i,r[1]=u*n+h*s,r[2]=u*e+h*v,r[3]=u*i-h*a,r[4]=u*s-h*n,r[5]=u*v-h*e,this},scale:function(t){var r=this.val,a=t.x,n=t.y;return r[0]=a*r[0],r[1]=a*r[1],r[2]=a*r[2],r[3]=n*r[3],r[4]=n*r[4],r[5]=n*r[5],this},fromQuat:function(t){var r=t.x,a=t.y,n=t.z,e=t.w,i=r+r,s=a+a,v=n+n,h=r*i,u=r*s,f=r*v,o=a*s,x=a*v,y=n*v,c=e*i,d=e*s,l=e*v,w=this.val;return w[0]=1-(o+y),w[3]=u+l,w[6]=f-d,w[1]=u-l,w[4]=1-(h+y),w[7]=x+c,w[2]=f+d,w[5]=x-c,w[8]=1-(h+o),this},normalFromMat4:function(t){var r=t.val,a=this.val,n=r[0],e=r[1],i=r[2],s=r[3],v=r[4],h=r[5],u=r[6],f=r[7],o=r[8],x=r[9],y=r[10],c=r[11],d=r[12],l=r[13],w=r[14],m=r[15],M=n*h-e*v,$=n*u-i*v,_=n*f-s*v,g=e*u-i*h,R=e*f-s*h,G=i*f-s*u,b=o*l-x*d,T=o*w-y*d,P=o*m-c*d,p=x*w-y*l,C=x*m-c*l,S=y*m-c*w,z=M*S-$*C+_*p+g*P-R*T+G*b;return z?(z=1/z,a[0]=(h*S-u*C+f*p)*z,a[1]=(u*P-v*S-f*T)*z,a[2]=(v*C-h*P+f*b)*z,a[3]=(i*C-e*S-s*p)*z,a[4]=(n*S-i*P+s*T)*z,a[5]=(e*P-n*C-s*b)*z,a[6]=(l*G-w*R+m*g)*z,a[7]=(w*_-d*G-m*$)*z,a[8]=(d*R-l*_+m*M)*z,this):null}}),Oe=Te;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Ml=D,wl=Oe,ml=be,za=tt,Qa=1e-6,Wa=new Int8Array([1,2,0]),_t=new Float32Array([0,0,0]),$l=new za(1,0,0),_l=new za(0,1,0),it=new za,Ha=new wl,gl=new Ml({initialize:function(r,a,n,e){this.onChangeCallback=ml,this.set(r,a,n,e)},x:{get:function(){return this._x},set:function(t){this._x=t,this.onChangeCallback(this)}},y:{get:function(){return this._y},set:function(t){this._y=t,this.onChangeCallback(this)}},z:{get:function(){return this._z},set:function(t){this._z=t,this.onChangeCallback(this)}},w:{get:function(){return this._w},set:function(t){this._w=t,this.onChangeCallback(this)}},copy:function(t){return this.set(t)},set:function(t,r,a,n,e){return e===void 0&&(e=!0),typeof t=="object"?(this._x=t.x||0,this._y=t.y||0,this._z=t.z||0,this._w=t.w||0):(this._x=t||0,this._y=r||0,this._z=a||0,this._w=n||0),e&&this.onChangeCallback(this),this},add:function(t){return this._x+=t.x,this._y+=t.y,this._z+=t.z,this._w+=t.w,this.onChangeCallback(this),this},subtract:function(t){return this._x-=t.x,this._y-=t.y,this._z-=t.z,this._w-=t.w,this.onChangeCallback(this),this},scale:function(t){return this._x*=t,this._y*=t,this._z*=t,this._w*=t,this.onChangeCallback(this),this},length:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return Math.sqrt(t*t+r*r+a*a+n*n)},lengthSq:function(){var t=this.x,r=this.y,a=this.z,n=this.w;return t*t+r*r+a*a+n*n},normalize:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n;return e>0&&(e=1/Math.sqrt(e),this._x=t*e,this._y=r*e,this._z=a*e,this._w=n*e),this.onChangeCallback(this),this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w},lerp:function(t,r){r===void 0&&(r=0);var a=this.x,n=this.y,e=this.z,i=this.w;return this.set(a+r*(t.x-a),n+r*(t.y-n),e+r*(t.z-e),i+r*(t.w-i))},rotationTo:function(t,r){var a=t.x*r.x+t.y*r.y+t.z*r.z;return a<-.999999?(it.copy($l).cross(t).length()<Qa&&it.copy(_l).cross(t),it.normalize(),this.setAxisAngle(it,Math.PI)):a>.999999?this.set(0,0,0,1):(it.copy(t).cross(r),this._x=it.x,this._y=it.y,this._z=it.z,this._w=1+a,this.normalize())},setAxes:function(t,r,a){var n=Ha.val;return n[0]=r.x,n[3]=r.y,n[6]=r.z,n[1]=a.x,n[4]=a.y,n[7]=a.z,n[2]=-t.x,n[5]=-t.y,n[8]=-t.z,this.fromMat3(Ha).normalize()},identity:function(){return this.set(0,0,0,1)},setAxisAngle:function(t,r){r=r*.5;var a=Math.sin(r);return this.set(a*t.x,a*t.y,a*t.z,Math.cos(r))},multiply:function(t){var r=this.x,a=this.y,n=this.z,e=this.w,i=t.x,s=t.y,v=t.z,h=t.w;return this.set(r*h+e*i+a*v-n*s,a*h+e*s+n*i-r*v,n*h+e*v+r*s-a*i,e*h-r*i-a*s-n*v)},slerp:function(t,r){var a=this.x,n=this.y,e=this.z,i=this.w,s=t.x,v=t.y,h=t.z,u=t.w,f=a*s+n*v+e*h+i*u;f<0&&(f=-f,s=-s,v=-v,h=-h,u=-u);var o=1-r,x=r;if(1-f>Qa){var y=Math.acos(f),c=Math.sin(y);o=Math.sin((1-r)*y)/c,x=Math.sin(r*y)/c}return this.set(o*a+x*s,o*n+x*v,o*e+x*h,o*i+x*u)},invert:function(){var t=this.x,r=this.y,a=this.z,n=this.w,e=t*t+r*r+a*a+n*n,i=e?1/e:0;return this.set(-t*i,-r*i,-a*i,n*i)},conjugate:function(){return this._x=-this.x,this._y=-this.y,this._z=-this.z,this.onChangeCallback(this),this},rotateX:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+e*i,a*s+n*i,n*s-a*i,e*s-r*i)},rotateY:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s-n*i,a*s+e*i,n*s+r*i,e*s-a*i)},rotateZ:function(t){t*=.5;var r=this.x,a=this.y,n=this.z,e=this.w,i=Math.sin(t),s=Math.cos(t);return this.set(r*s+a*i,a*s-r*i,n*s+e*i,e*s-n*i)},calculateW:function(){var t=this.x,r=this.y,a=this.z;return this.w=-Math.sqrt(1-t*t-r*r-a*a),this},setFromEuler:function(t,r){var a=t.x/2,n=t.y/2,e=t.z/2,i=Math.cos(a),s=Math.cos(n),v=Math.cos(e),h=Math.sin(a),u=Math.sin(n),f=Math.sin(e);switch(t.order){case"XYZ":{this.set(h*s*v+i*u*f,i*u*v-h*s*f,i*s*f+h*u*v,i*s*v-h*u*f,r);break}case"YXZ":{this.set(h*s*v+i*u*f,i*u*v-h*s*f,i*s*f-h*u*v,i*s*v+h*u*f,r);break}case"ZXY":{this.set(h*s*v-i*u*f,i*u*v+h*s*f,i*s*f+h*u*v,i*s*v-h*u*f,r);break}case"ZYX":{this.set(h*s*v-i*u*f,i*u*v+h*s*f,i*s*f-h*u*v,i*s*v+h*u*f,r);break}case"YZX":{this.set(h*s*v+i*u*f,i*u*v+h*s*f,i*s*f-h*u*v,i*s*v-h*u*f,r);break}case"XZY":{this.set(h*s*v-i*u*f,i*u*v-h*s*f,i*s*f+h*u*v,i*s*v+h*u*f,r);break}}return this},setFromRotationMatrix:function(t){var r=t.val,a=r[0],n=r[4],e=r[8],i=r[1],s=r[5],v=r[9],h=r[2],u=r[6],f=r[10],o=a+s+f,x;return o>0?(x=.5/Math.sqrt(o+1),this.set((u-v)*x,(e-h)*x,(i-n)*x,.25/x)):a>s&&a>f?(x=2*Math.sqrt(1+a-s-f),this.set(.25*x,(n+i)/x,(e+h)/x,(u-v)/x)):s>f?(x=2*Math.sqrt(1+s-a-f),this.set((n+i)/x,.25*x,(v+u)/x,(e-h)/x)):(x=2*Math.sqrt(1+f-a-s),this.set((e+h)/x,(v+u)/x,.25*x,(i-n)/x)),this},fromMat3:function(t){var r=t.val,a=r[0]+r[4]+r[8],n;if(a>0)n=Math.sqrt(a+1),this.w=.5*n,n=.5/n,this._x=(r[7]-r[5])*n,this._y=(r[2]-r[6])*n,this._z=(r[3]-r[1])*n;else{var e=0;r[4]>r[0]&&(e=1),r[8]>r[e*3+e]&&(e=2);var i=Wa[e],s=Wa[i];n=Math.sqrt(r[e*3+e]-r[i*3+i]-r[s*3+s]+1),_t[e]=.5*n,n=.5/n,_t[i]=(r[i*3+e]+r[e*3+i])*n,_t[s]=(r[s*3+e]+r[e*3+s])*n,this._x=_t[0],this._y=_t[1],this._z=_t[2],this._w=(r[s*3+i]-r[i*3+s])*n}return this.onChangeCallback(this),this}}),Ie=gl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Cl=tt,zl=Xt,Pl=Ie,Ka=new zl,Ja=new Pl,bl=new Cl,Tl=function(t,r,a){return Ja.setAxisAngle(r,a),Ka.fromRotationTranslation(Ja,bl.set(0,0,0)),t.transformMat4(Ka)},Ol=Tl;/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */var Il=Q,Rl=an,na={Angle:U2,Distance:ic,Easing:sc,Fuzzy:dc,Interpolation:jc,Pow2:Jc,Snap:sd,RandomDataGenerator:ud,Average:od,Bernstein:_e,Between:xe,CatmullRom:ge,CeilTo:yd,Clamp:sa,DegToRad:oe,Difference:dd,Euler:$d,Factorial:$e,FloatBetween:ga,FloorTo:gd,FromPercent:Yt,GetSpeed:zd,IsEven:bd,IsEvenStrict:Od,Linear:Ce,LinearXY:Rd,MaxAdd:Gd,Median:Sd,MinSub:Ed,Percent:Nd,RadToDeg:Xd,RandomXY:qd,RandomXYZ:Zd,RandomXYZW:Bd,Rotate:Qd,RotateAround:Hd,RotateAroundDistance:Jd,RotateTo:rl,RoundAwayFromZero:nl,RoundTo:il,SinCosTableGenerator:vl,SmootherStep:Pe,SmoothStep:ze,ToXY:fl,TransformXY:yl,Within:dl,Wrap:mr,Vector2:Ct,Vector3:tt,Vector4:xa,Matrix3:Oe,Matrix4:Xt,Quaternion:Ie,RotateVec3:Ol};na=Rl(!1,na,Il);var pl=na;const Hr=tn(pl);function Ll(t,r){let a=new l2.Point(0,0),n=Hr.Angle.BetweenPoints(a,new Hr.Vector2(t,r));return Hr.RadToDeg(n)}function Sl(t,r,a,n){return Math.sqrt((t-a)**2+(r-n)**2)}function Fl(t,r,a,n){return(t-a)**2+(r-n)**2}class Re{constructor(r,a=0){this.bounds={x:r.x||0,y:r.y||0,width:r.width,height:r.height},this.maxObjects=typeof r.maxObjects=="number"?r.maxObjects:10,this.maxLevels=typeof r.maxLevels=="number"?r.maxLevels:4,this.level=a,this.objects=[],this.nodes=[]}getIndex(r){return r.qtIndex(this.bounds)}split(){const r=this.level+1,a=this.bounds.width/2,n=this.bounds.height/2,e=this.bounds.x,i=this.bounds.y,s=[{x:e+a,y:i},{x:e,y:i},{x:e,y:i+n},{x:e+a,y:i+n}];for(let v=0;v<4;v++)this.nodes[v]=new Re({x:s[v].x,y:s[v].y,width:a,height:n,maxObjects:this.maxObjects,maxLevels:this.maxLevels},r)}insert(r){if(this.nodes.length){const a=this.getIndex(r);for(let n=0;n<a.length;n++)this.nodes[a[n]].insert(r);return}if(this.objects.push(r),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let a=0;a<this.objects.length;a++){const n=this.getIndex(this.objects[a]);for(let e=0;e<n.length;e++)this.nodes[n[e]].insert(this.objects[a])}this.objects=[]}}retrieve(r){const a=this.getIndex(r);let n=this.objects;if(this.nodes.length)for(let e=0;e<a.length;e++)n=n.concat(this.nodes[a[e]].retrieve(r));return this.level===0?Array.from(new Set(n)):n}remove(r,a=!1){const n=this.objects.indexOf(r);n>-1&&this.objects.splice(n,1);for(let e=0;e<this.nodes.length;e++)this.nodes[e].remove(r);return this.level===0&&!a&&this.join(),n!==-1}update(r,a=!1){this.remove(r,a),this.insert(r)}join(){let r=Array.from(this.objects);for(let n=0;n<this.nodes.length;n++){const e=this.nodes[n].join();r=r.concat(e)}const a=Array.from(new Set(r));if(a.length<=this.maxObjects){this.objects=a;for(let n=0;n<this.nodes.length;n++)this.nodes[n].objects=[];this.nodes=[]}return r}clear(){this.objects=[];for(let r=0;r<this.nodes.length;r++)this.nodes.length&&this.nodes[r].clear();this.nodes=[]}}class El{constructor(r){this.x=r.x,this.y=r.y,this.width=r.width,this.height=r.height,this.data=r.data}qtIndex(r){const a=[],n=r.x+r.width/2,e=r.y+r.height/2,i=this.y<e,s=this.x<n,v=this.x+this.width>n,h=this.y+this.height>e;return i&&v&&a.push(0),s&&i&&a.push(1),s&&h&&a.push(2),v&&h&&a.push(3),a}}export{Hr as P,Re as Q,El as R,Ll as c,Sl as d,Fl as e};
